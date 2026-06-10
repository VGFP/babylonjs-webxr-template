import { Color4, Scene, TransformNode, Vector3 } from '@babylonjs/core';
import OpenAI from 'openai';

import { TextManager } from '../text/textRenderer';
import { type CreateUiButtonResult } from '../core/uiButton';
import {
    DisposableStack,
    createBackButton,
    createPanelButton,
    createPanelRoot,
    formatError,
    getGoBackCallback,
    getMetadata,
    initPanelText,
    saveAndTransparentClearColor,
    UI_LAYOUT,
} from '../core';
import {
    ASR_MODEL,
    ASR_PATH,
    INFERENCE_BASE_URL,
    LLM_BASE_URL,
    LLM_DEFAULT_MODEL,
    LLM_DEFAULTS,
    SYSTEM_PROMPT,
    TTS_MODEL,
    TTS_PROVIDER,
    TTS_VOICE,
} from './llmConfig';
import { AiAvatar } from './aiAvatar';

export class AgentHelperDemo {
    private _scene: Scene;
    private _cleanup = new DisposableStack();
    private _disposed = false;
    private _prevClearColor: Color4;

    private _panelRoot: TransformNode;

    private _textManager: TextManager | null = null;
    private _detachText: (() => void) | null = null;

    private _recordBtn!: CreateUiButtonResult;
    private _backBtn!: CreateUiButtonResult;

    private _statusLines: string[];
    private _btnLabel: string;

    private _avatar: AiAvatar;
    private _isRecording = false;
    private _isProcessing = false;
    private _mediaRecorder: MediaRecorder | null = null;
    private _audioChunks: Blob[] = [];
    private static readonly _MAX_LINE = 36;

    private _chatHistory: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
        { role: 'system', content: SYSTEM_PROMPT },
    ];
    private _currentAudio: HTMLAudioElement | null = null;
    private _audioCtx: AudioContext | null = null;
    private _audioSourceNode: MediaElementAudioSourceNode | null = null;
    private _audioAnalyserNode: AnalyserNode | null = null;
    private _micSourceNode: MediaStreamAudioSourceNode | null = null;
    private _micAnalyserNode: AnalyserNode | null = null;

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = saveAndTransparentClearColor(scene);

        const key = getMetadata(scene).agentApiKey;
        this._statusLines = key
            ? ['The Blob - AI Agent', 'Tap the blob or press Talk.']
            : ['No API key.', 'Exit XR, enter a key, re-enter.'];
        this._btnLabel = 'Talk';

        this._panelRoot = createPanelRoot(scene, 'agent_panel_root', this._cleanup);

        const avatarPos = UI_LAYOUT.panelPosition.add(new Vector3(0, 0.22, 0.05));
        this._avatar = new AiAvatar(scene, avatarPos, () => void this._toggleRecording());
        this._cleanup.register(() => this._avatar.dispose());

        this._recordBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'agent',
            label: 'Talk',
            width: 0.3,
            height: 0.07,
            position: new Vector3(0, 0.04, 0),
            parent: this._panelRoot,
            bgColor: '#1a3a1a',
            borderColor: '#50ff5044',
            onClick: () => void this._toggleRecording(),
        });
        this._recordBtn.plane.setEnabled(!!key);

        this._backBtn = createBackButton({
            scene,
            cleanup: this._cleanup,
            parent: this._panelRoot,
            position: new Vector3(0, -0.14, 0),
            onGoBack: () => {
                getGoBackCallback(this._scene)?.();
            },
            namePrefix: 'agent',
        });

        initPanelText({
            scene,
            cleanup: this._cleanup,
            isDisposed: () => this._disposed,
            onReady: (tm) => {
                this._textManager = tm;
                this._detachText = tm.attachToScene(scene);
                this._rebuildText();
            },
        });
    }

    private _rebuildText(): void {
        if (!this._textManager?.renderer) return;
        this._textManager.renderer.clearParagraphs();

        const { x: px, y: py, z: pz } = UI_LAYOUT.panelPosition;
        const ty = UI_LAYOUT.textYOffset;
        const tz = UI_LAYOUT.textZOffset;
        const statusScale = UI_LAYOUT.panel.statusTextScale;
        const textScale = UI_LAYOUT.panel.textScale;

        if (this._recordBtn.plane.isEnabled()) {
            this._textManager.addParagraph(this._btnLabel, new Vector3(px, py + 0.04 + ty, pz + tz), textScale);
        }

        let statusY = py - 0.02;
        for (const line of this._statusLines) {
            this._textManager.addParagraph(line, new Vector3(px, statusY + ty, pz + tz), statusScale);
            statusY -= 0.022;
        }

        if (this._backBtn.plane.isEnabled()) {
            this._textManager.addParagraph('Return to Main Scene', new Vector3(px, py - 0.14 + ty, pz + tz), textScale);
        }
    }

    private _setStatus(lines: string[]): void {
        this._statusLines = lines.map((l) =>
            l.length > AgentHelperDemo._MAX_LINE ? l.slice(0, AgentHelperDemo._MAX_LINE) + '...' : l,
        );
        this._rebuildText();
    }

    private _setBtnLabel(label: string): void {
        this._btnLabel = label;
        this._rebuildText();
    }

    private async _toggleRecording(): Promise<void> {
        if (this._isProcessing) return;
        if (this._isRecording) {
            this._stopRecording();
        } else {
            await this._startRecording();
        }
    }

    private async _startRecording(): Promise<void> {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
                ? 'audio/webm;codecs=opus'
                : undefined;
            this._mediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
            this._audioChunks = [];

            this._mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) this._audioChunks.push(e.data);
            };

            this._mediaRecorder.onstop = () => {
                for (const track of stream.getTracks()) track.stop();
                this._disconnectMic();
                const blob = new Blob(this._audioChunks, { type: this._mediaRecorder!.mimeType });
                void this._processAudio(blob);
            };

            this._mediaRecorder.start();
            this._isRecording = true;
            this._setBtnLabel('Stop');
            this._setStatus(['Listening...', 'Tap again to stop.']);
            this._avatar.setState('listening');

            if (!this._audioCtx) {
                this._audioCtx = new AudioContext();
            }
            if (this._audioCtx.state === 'suspended') {
                void this._audioCtx.resume();
            }
            this._micAnalyserNode = this._audioCtx.createAnalyser();
            this._micAnalyserNode.fftSize = 256;
            this._micSourceNode = this._audioCtx.createMediaStreamSource(stream);
            this._micSourceNode.connect(this._micAnalyserNode);
            this._avatar.setAudioAnalyser(this._micAnalyserNode);
        } catch (err) {
            this._setStatus(['Mic error:', formatError(err)]);
        }
    }

    private _stopRecording(): void {
        if (this._mediaRecorder?.state === 'recording') {
            this._mediaRecorder.stop();
        }
        this._isRecording = false;
        this._setBtnLabel('Talk');
    }

    private _disconnectMic(): void {
        this._avatar.setAudioAnalyser(null);
        this._micSourceNode?.disconnect();
        this._micSourceNode = null;
        this._micAnalyserNode?.disconnect();
        this._micAnalyserNode = null;
    }

    private async _processAudio(blob: Blob): Promise<void> {
        this._isProcessing = true;
        this._recordBtn.plane.setEnabled(false);
        this._avatar.setState('thinking');

        const apiKey = getMetadata(this._scene).agentApiKey;
        if (!apiKey) {
            this._setStatus(['No API key']);
            this._isProcessing = false;
            this._recordBtn.plane.setEnabled(true);
            return;
        }

        try {
            const transcript = await this._transcribe(apiKey, blob);

            this._setStatus([`You: ${transcript}`, 'Thinking...']);
            this._chatHistory.push({ role: 'user', content: transcript });

            const responseText = await this._chat(apiKey);

            this._setStatus([`You: ${transcript}`, 'Generating speech...']);

            const audioDataUri = await this._synthesize(apiKey, responseText);

            this._setStatus([`You: ${transcript}`, 'Speaking...']);
            this._avatar.setState('speaking');
            await this._playAudio(audioDataUri);

            this._setStatus([`You: ${transcript}`, `AI: ${responseText}`]);
            this._avatar.setState('idle');
        } catch (err) {
            this._setStatus(['Error:', formatError(err)]);
            this._avatar.setState('idle');
        } finally {
            this._isProcessing = false;
            this._recordBtn.plane.setEnabled(true);
            this._rebuildText();
        }
    }

    private async _transcribe(apiKey: string, blob: Blob): Promise<string> {
        this._setStatus(['Transcribing...']);
        const ext = blob.type.includes('webm') ? 'webm' : 'ogg';
        const formData = new FormData();
        formData.append('file', new File([blob], `recording.${ext}`, { type: blob.type }));
        formData.append('model', ASR_MODEL);

        const response = await fetch(`${LLM_BASE_URL}${ASR_PATH}`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}` },
            body: formData,
        });

        if (!response.ok) {
            const text = await response.text();
            console.info('[Agent] ASR error:', response.status, text);
            throw new Error(`ASR ${response.status}: ${text}`);
        }

        const data = (await response.json()) as { text: string };
        console.info('[Agent] ASR result:', JSON.stringify(data));
        return data.text;
    }

    private async _chat(apiKey: string): Promise<string> {
        const client = new OpenAI({ apiKey, baseURL: LLM_BASE_URL, dangerouslyAllowBrowser: true });
        const completion = await client.chat.completions.create({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            messages: this._chatHistory as any,
            model: LLM_DEFAULT_MODEL,
            temperature: LLM_DEFAULTS.temperature,
            max_tokens: LLM_DEFAULTS.maxTokens,
        });
        const content = completion.choices[0]?.message?.content || '(empty)';
        console.info(
            '[Agent] LLM response:',
            JSON.stringify({ model: completion.model, usage: completion.usage, content }),
        );
        this._chatHistory.push({ role: 'assistant', content });
        return content;
    }

    private async _synthesize(apiKey: string, text: string): Promise<string> {
        const url = TTS_PROVIDER.buildUrl(LLM_BASE_URL, INFERENCE_BASE_URL, TTS_MODEL);
        const body = TTS_PROVIDER.buildBody(text, TTS_VOICE);

        console.info('[Agent] TTS request:', url, body);
        const response = await fetch(url, {
            method: 'POST',
            headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
            body,
        });

        if (!response.ok) {
            const errText = await response.text();
            console.info('[Agent] TTS error:', response.status, errText);
            throw new Error(`TTS ${response.status}: ${errText}`);
        }

        const audioSource = await TTS_PROVIDER.parseResponse(response);
        console.info('[Agent] TTS OK, audio source length:', audioSource.length);
        return audioSource;
    }

    private _playAudio(audioSrc: string): Promise<void> {
        const isBlob = audioSrc.startsWith('blob:');
        return new Promise((resolve, reject) => {
            const audio = new Audio(audioSrc);
            this._currentAudio = audio;

            try {
                if (!this._audioCtx) {
                    this._audioCtx = new AudioContext();
                }
                if (this._audioCtx.state === 'suspended') {
                    void this._audioCtx.resume();
                }
                if (!this._audioAnalyserNode) {
                    this._audioAnalyserNode = this._audioCtx.createAnalyser();
                    this._audioAnalyserNode.fftSize = 256;
                    this._audioAnalyserNode.connect(this._audioCtx.destination);
                }
                const analyser = this._audioAnalyserNode!;
                this._audioSourceNode?.disconnect();
                this._audioSourceNode = this._audioCtx.createMediaElementSource(audio);
                this._audioSourceNode.connect(analyser);
                this._avatar.setAudioAnalyser(analyser);
            } catch {
                this._avatar.setAudioAnalyser(null);
            }

            audio.onended = () => {
                this._currentAudio = null;
                this._avatar.setAudioAnalyser(null);
                this._audioSourceNode?.disconnect();
                this._audioSourceNode = null;
                if (isBlob) URL.revokeObjectURL(audioSrc);
                resolve();
            };
            audio.onerror = () => {
                this._currentAudio = null;
                this._avatar.setAudioAnalyser(null);
                this._audioSourceNode?.disconnect();
                this._audioSourceNode = null;
                if (isBlob) URL.revokeObjectURL(audioSrc);
                reject(new Error('Audio playback failed'));
            };
            audio.play().catch(reject);
        });
    }

    teardown(): void {
        this._disposed = true;
        this._currentAudio?.pause();
        this._currentAudio = null;
        this._disconnectMic();
        this._avatar.setAudioAnalyser(null);
        this._audioSourceNode?.disconnect();
        this._audioSourceNode = null;
        if (this._audioAnalyserNode) {
            this._audioAnalyserNode.disconnect();
            this._audioAnalyserNode = null;
        }
        if (this._audioCtx) {
            void this._audioCtx.close();
            this._audioCtx = null;
        }
        if (this._mediaRecorder?.state === 'recording') {
            this._mediaRecorder.stop();
        }
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        this._cleanup.dispose();
        this._scene.clearColor = this._prevClearColor;
    }
}
