import {
    Color3,
    Color4,
    Mesh,
    MeshBuilder,
    Observer,
    Scene,
    StandardMaterial,
    TransformNode,
    Vector3,
} from '@babylonjs/core';
import { Client, type Room } from '@colyseus/sdk';
import { getStateCallbacks } from '@colyseus/sdk/serializer/SchemaSerializer';

import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';
import { InputText } from '@babylonjs/gui/2D/controls/inputText';
import { VirtualKeyboard } from '@babylonjs/gui/2D/controls/virtualKeyboard';

import { TextManager } from '../text/textRenderer';
import { createUiButton, type CreateUiButtonResult } from '../core/uiButton';
import { DisposableStack } from '../core/disposableStack';
import type { WebXRDefaultExperience } from '@babylonjs/core/XR/webXRDefaultExperience';

interface PlayerSchema {
    color: string;
    x: number;
    y: number;
    z: number;
    lx: number;
    ly: number;
    lz: number;
    rx: number;
    ry: number;
    rz: number;
}

interface MyRoomState {
    players: Map<string, PlayerSchema>;
}

interface RemotePlayerVisuals {
    head: Mesh;
    leftHand: Mesh;
    rightHand: Mesh;
    material: StandardMaterial;
    onChangeDetach: () => void;
}

interface RoomSummary {
    roomId: string;
    name: string;
    clients: number;
    maxClients: number;
    metadata?: { name?: string; createdAt?: number };
}

type MpState = 'disconnected' | 'connected' | 'in-room';

const DEFAULT_URL_STORAGE_KEY = 'mp_server_url';
const UPDATE_INTERVAL_MS = 50;

export class MultiplayerDemo {
    private static readonly _panelPosition = new Vector3(0, 1.35, -0.55);
    private static readonly _btnWidth = 0.44;
    private static readonly _btnHeight = 0.07;
    private static readonly _smallBtnWidth = 0.14;
    private static readonly _smallBtnHeight = 0.06;
    private static readonly _cornerRadius = 25;
    private static readonly _borderThickness = 8;
    private static readonly _textScale = 0.028;
    private static readonly _smallTextScale = 0.016;
    private static readonly _statusTextScale = 0.018;
    private static readonly _textYOffset = -0.005;
    private static readonly _textZOffset = -0.005;
    private static readonly _backWidthRatio = 0.85;
    private static readonly _backHeightRatio = 0.85;
    private static readonly _headDiameter = 0.12;
    private static readonly _handDiameter = 0.06;
    private static readonly _maxRoomButtons = 4;
    private static readonly _roomBtnHeight = 0.055;
    private static readonly _roomBtnGap = 0.01;
    private static readonly _roomListStartY = 0.1;

    private _scene: Scene;
    private _cleanup = new DisposableStack();
    private _disposed = false;
    private _prevClearColor: Color4;

    private _panelRoot: TransformNode;

    private _textManager: TextManager | null = null;
    private _detachText: (() => void) | null = null;

    private _urlInputPlane: Mesh;
    private _urlInputTexture: AdvancedDynamicTexture;
    private _urlInput: InputText;
    private _keyboardPlane: Mesh;
    private _keyboardTexture: AdvancedDynamicTexture;
    private _keyboard: VirtualKeyboard;

    private _pasteBtn!: CreateUiButtonResult;
    private _connectBtn!: CreateUiButtonResult;
    private _createRoomBtn!: CreateUiButtonResult;
    private _refreshBtn!: CreateUiButtonResult;
    private _disconnectBtn!: CreateUiButtonResult;
    private _leaveRoomBtn!: CreateUiButtonResult;
    private _backBtn!: CreateUiButtonResult;

    private _roomButtons: { result: CreateUiButtonResult; roomId: string }[] = [];

    private _client: Client | null = null;
    private _room: Room<MyRoomState> | null = null;
    private _remotePlayers = new Map<string, RemotePlayerVisuals>();
    private _playerGroup: TransformNode;

    private _sendIntervalId: number | null = null;
    private _onBeforeRenderObserver: Observer<Scene> | null = null;

    private _state: MpState = 'disconnected';
    private _statusText = 'Disconnected';

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = scene.clearColor.clone();
        scene.clearColor = new Color4(0, 0, 0, 0);

        this._playerGroup = new TransformNode('mp_players_root', scene);
        this._cleanup.add(this._playerGroup);

        this._panelRoot = new TransformNode('mp_panel_root', scene);
        this._panelRoot.position = MultiplayerDemo._panelPosition.clone();
        this._cleanup.add(this._panelRoot);

        this._urlInputPlane = MeshBuilder.CreatePlane('mp_url_input', { width: 0.36, height: 0.06 }, scene);
        this._urlInputPlane.parent = this._panelRoot;
        this._urlInputPlane.position = new Vector3(0, 0.12, 0);
        this._cleanup.add(this._urlInputPlane);

        this._urlInputTexture = AdvancedDynamicTexture.CreateForMesh(this._urlInputPlane, 512, 80);
        this._urlInputTexture.background = '#222226';

        this._urlInput = new InputText('mp_url');
        this._urlInput.width = '100%';
        this._urlInput.height = '100%';
        this._urlInput.color = '#e6e6e6';
        this._urlInput.background = '#222226';
        this._urlInput.placeholderText = 'Enter server URL...';
        this._urlInput.placeholderColor = '#999999';
        this._urlInput.focusedBackground = '#2a2a30';
        this._urlInput.fontSize = 22;
        this._urlInput.thickness = 1;
        this._urlInput.color = '#ffffff33';
        this._urlInputTexture.addControl(this._urlInput);

        const saved = (() => {
            try {
                return localStorage.getItem(DEFAULT_URL_STORAGE_KEY);
            } catch {
                return null;
            }
        })();
        if (saved) this._urlInput.text = saved;

        this._keyboardPlane = MeshBuilder.CreatePlane('mp_keyboard', { width: 0.7, height: 0.25 }, scene);
        this._keyboardPlane.parent = this._panelRoot;
        this._keyboardPlane.position = new Vector3(0, -0.28, 0.005);
        this._keyboardPlane.setEnabled(false);
        this._cleanup.add(this._keyboardPlane);

        this._keyboardTexture = AdvancedDynamicTexture.CreateForMesh(this._keyboardPlane, 800, 280);
        this._keyboardTexture.background = '#111116ee';

        this._keyboard = VirtualKeyboard.CreateDefaultLayout('en');
        this._keyboard.defaultButtonWidth = '60px';
        this._keyboard.defaultButtonHeight = '50px';
        this._keyboard.defaultButtonColor = '#DDD';
        this._keyboard.defaultButtonBackground = '#2a2a32';
        this._keyboard.shiftButtonColor = '#7799FF';
        this._keyboard.width = '100%';
        this._keyboard.horizontalAlignment = 0;
        this._keyboard.verticalAlignment = 0;
        this._keyboardTexture.addControl(this._keyboard);

        this._keyboard.connect(this._urlInput);
        this._urlInput.onBlurObservable.clear();

        this._urlInput.onFocusObservable.add(() => {
            this._keyboard.isVisible = true;
            this._keyboardPlane.setEnabled(true);
        });

        this._pasteBtn = this._createBtn(
            'Paste',
            0.12,
            0.06,
            new Vector3(0.26, 0.12, 0),
            '#1a2a3a',
            '#50a0ff44',
            () => {
                void this._pasteClipboard();
            },
        );

        this._connectBtn = this._createBtn(
            'Connect',
            0.22,
            0.07,
            new Vector3(0, 0.03, 0),
            '#1a2a4a',
            '#5070ff44',
            () => {
                this._dismissKeyboard();
                void this._connect();
            },
        );

        this._leaveRoomBtn = this._createBtn(
            'Leave Room',
            0.3,
            0.07,
            new Vector3(0, 0.06, 0),
            '#3a1a1a',
            '#ff505044',
            () => {
                void this._leaveRoom();
            },
        );

        const actionY = -0.05;
        this._createRoomBtn = this._createBtn(
            'Create Room',
            MultiplayerDemo._smallBtnWidth,
            MultiplayerDemo._smallBtnHeight,
            new Vector3(-0.16, actionY, 0),
            '#1a3a2a',
            '#50ff8044',
            () => void this._createRoom(),
        );

        this._refreshBtn = this._createBtn(
            'Refresh',
            MultiplayerDemo._smallBtnWidth,
            MultiplayerDemo._smallBtnHeight,
            new Vector3(0, actionY, 0),
            '#222226',
            '#ffffff22',
            () => void this._refreshRooms(),
        );

        this._disconnectBtn = this._createBtn(
            'Disconnect',
            MultiplayerDemo._smallBtnWidth,
            MultiplayerDemo._smallBtnHeight,
            new Vector3(0.16, actionY, 0),
            '#3a1a1a',
            '#ff505044',
            () => void this._disconnect(),
        );

        const goBack = this._getGoBack();
        this._backBtn = this._createBtn(
            'Return to Main Scene',
            MultiplayerDemo._btnWidth * MultiplayerDemo._backWidthRatio,
            MultiplayerDemo._btnHeight * MultiplayerDemo._backHeightRatio,
            new Vector3(0, -0.14, 0),
            '#2a1a0a',
            '#ffb45044',
            () => {
                this._dismissKeyboard();
                if (goBack) goBack();
            },
        );

        this._setupText();

        this._applyState('disconnected');
    }

    private _createBtn(
        label: string,
        width: number,
        height: number,
        position: Vector3,
        bgColor: string,
        borderColor: string,
        onClick: () => void,
    ): CreateUiButtonResult {
        const result = createUiButton(this._scene, {
            name: `mp_${label.replace(/\s+/g, '_')}`,
            width,
            height,
            position,
            parent: this._panelRoot,
            bgColor,
            borderColor,
            cornerRadius: MultiplayerDemo._cornerRadius,
            borderThickness: MultiplayerDemo._borderThickness,
            onClick,
        });
        this._cleanup.add(result.texture);
        this._cleanup.add(result.plane);
        return result;
    }

    private _dismissKeyboard(): void {
        this._keyboard.isVisible = false;
        this._keyboardPlane.setEnabled(false);
    }

    private _setupText(): void {
        const textManager = new TextManager(this._scene.getEngine());
        this._textManager = textManager;
        textManager.init().then(() => {
            if (this._disposed) {
                textManager.dispose();
                this._textManager = null;
                return;
            }
            this._rebuildText();
            this._detachText = textManager.attachToScene(this._scene);
            this._cleanup.add(textManager);
        });
    }

    private _rebuildText(): void {
        if (!this._textManager?.renderer) return;
        this._textManager.renderer.clearParagraphs();

        const px = MultiplayerDemo._panelPosition.x;
        const py = MultiplayerDemo._panelPosition.y;
        const pz = MultiplayerDemo._panelPosition.z;
        const ty = MultiplayerDemo._textYOffset;
        const tz = MultiplayerDemo._textZOffset;

        if (this._state === 'disconnected') {
            if (this._pasteBtn.plane.isEnabled()) {
                this._textManager.addParagraph(
                    'Paste',
                    new Vector3(px + 0.26, py + 0.12 + ty, pz + tz),
                    MultiplayerDemo._smallTextScale,
                );
            }
            if (this._connectBtn.plane.isEnabled()) {
                this._textManager.addParagraph(
                    'Connect',
                    new Vector3(px, py + 0.03 + ty, pz + tz),
                    MultiplayerDemo._textScale,
                );
            }
            this._textManager.addParagraph(
                this._statusText,
                new Vector3(px, py - 0.05 + ty, pz + tz),
                MultiplayerDemo._statusTextScale,
            );
        } else if (this._state === 'connected') {
            this._textManager.addParagraph(
                this._statusText,
                new Vector3(px, py + 0.18 + ty, pz + tz),
                MultiplayerDemo._statusTextScale,
            );

            for (const { result, roomId } of this._roomButtons) {
                if (!result.plane.isEnabled()) continue;
                const meta = this._lastRooms?.find((r) => r.roomId === roomId);
                const label = meta
                    ? `${meta.metadata?.name ?? roomId.slice(0, 6)} (${meta.clients}/${meta.maxClients})`
                    : roomId.slice(0, 6);
                this._textManager.addParagraph(
                    label,
                    new Vector3(
                        result.plane.position.x + px,
                        result.plane.position.y + py + ty,
                        result.plane.position.z + pz + tz,
                    ),
                    MultiplayerDemo._smallTextScale,
                );
            }

            const actionY = -0.05;
            this._textManager.addParagraph(
                'Create',
                new Vector3(px - 0.16, py + actionY + ty, pz + tz),
                MultiplayerDemo._smallTextScale,
            );
            this._textManager.addParagraph(
                'Refresh',
                new Vector3(px, py + actionY + ty, pz + tz),
                MultiplayerDemo._smallTextScale,
            );
            this._textManager.addParagraph(
                'Disconnect',
                new Vector3(px + 0.16, py + actionY + ty, pz + tz),
                MultiplayerDemo._smallTextScale,
            );
        } else if (this._state === 'in-room') {
            if (this._leaveRoomBtn.plane.isEnabled()) {
                this._textManager.addParagraph(
                    'Leave Room',
                    new Vector3(px, py + 0.06 + ty, pz + tz),
                    MultiplayerDemo._textScale,
                );
            }
            this._textManager.addParagraph(
                this._statusText,
                new Vector3(px, py - 0.02 + ty, pz + tz),
                MultiplayerDemo._statusTextScale,
            );
        }

        if (this._backBtn.plane.isEnabled()) {
            this._textManager.addParagraph(
                'Return to Main Scene',
                new Vector3(px, py - 0.14 + ty, pz + tz),
                MultiplayerDemo._textScale,
            );
        }
    }

    private _lastRooms: RoomSummary[] | null = null;

    private _applyState(state: MpState): void {
        this._state = state;

        const showConnect = state === 'disconnected';
        const showRooms = state === 'connected';
        const showInRoom = state === 'in-room';

        this._urlInputPlane.setEnabled(showConnect);
        this._pasteBtn.plane.setEnabled(showConnect);
        this._connectBtn.plane.setEnabled(showConnect);

        this._createRoomBtn.plane.setEnabled(showRooms);
        this._refreshBtn.plane.setEnabled(showRooms);
        this._disconnectBtn.plane.setEnabled(showRooms);

        this._leaveRoomBtn.plane.setEnabled(showInRoom);

        for (const { result } of this._roomButtons) {
            result.plane.setEnabled(showRooms);
        }

        if (!showConnect) {
            this._dismissKeyboard();
        }

        this._rebuildText();
    }

    private _getGoBack(): (() => void) | null {
        const meta = this._scene.metadata as Record<string, unknown> | undefined;
        return (meta?.goBack as (() => void) | undefined) ?? null;
    }

    private _getXr(): WebXRDefaultExperience | null {
        const meta = this._scene.metadata as Record<string, unknown> | undefined;
        return (meta?.xr as WebXRDefaultExperience | undefined) ?? null;
    }

    private _setStatus(text: string): void {
        this._statusText = text;
        this._rebuildText();
    }

    private _parseEndpoint(raw: string): string {
        const trimmed = raw.trim();
        if (!trimmed) return '';
        if (/^https?:\/\//i.test(trimmed) || /^wss?:\/\//i.test(trimmed)) return trimmed;
        if (trimmed.startsWith('localhost') || /^\d+\.\d+\.\d+\.\d+/.test(trimmed)) {
            return `http://${trimmed}`;
        }
        return `https://${trimmed}`;
    }

    private async _pasteClipboard(): Promise<void> {
        try {
            const text = await navigator.clipboard.readText();
            this._urlInput.text = text.trim();
            this._setStatus('Pasted from clipboard');
        } catch {
            this._setStatus('Clipboard not available');
        }
    }

    private async _connect(): Promise<void> {
        const endpoint = this._parseEndpoint(this._urlInput.text);
        if (!endpoint) {
            this._setStatus('Please enter a server URL');
            return;
        }

        try {
            localStorage.setItem(DEFAULT_URL_STORAGE_KEY, this._urlInput.text);
        } catch {
            // ignore storage errors
        }

        this._setStatus('Connecting…');

        try {
            if (this._client) {
                await this._disconnect();
            }
            this._client = new Client(endpoint);
            this._setStatus('Connected');
            this._applyState('connected');
            await this._refreshRooms();
        } catch (err) {
            this._setStatus(`Connection failed: ${this._errorMessage(err)}`);
            console.warn('Multiplayer connect failed:', err);
            this._applyState('disconnected');
        }
    }

    private async _disconnect(): Promise<void> {
        await this._leaveRoom();
        this._client = null;
        this._setStatus('Disconnected');
        this._applyState('disconnected');
    }

    private async _refreshRooms(): Promise<void> {
        if (!this._client) return;
        this._setStatus('Refreshing rooms…');

        try {
            const response = await this._client.http.get<{ rooms: RoomSummary[] }>('/rooms/my_room');
            const rooms = response.data?.rooms ?? [];
            this._lastRooms = rooms;
            this._renderRoomList(rooms);
            this._setStatus(rooms.length === 0 ? 'No rooms yet. Create one!' : `${rooms.length} room(s) available`);
        } catch (err) {
            this._setStatus(`Failed to list rooms: ${this._errorMessage(err)}`);
            this._renderRoomList([]);
        }
    }

    private _renderRoomList(rooms: RoomSummary[]): void {
        this._disposeRoomButtons();

        const visibleRooms = rooms.slice(0, MultiplayerDemo._maxRoomButtons);

        for (let i = 0; i < visibleRooms.length; i++) {
            const room = visibleRooms[i];
            const y =
                MultiplayerDemo._roomListStartY - i * (MultiplayerDemo._roomBtnHeight + MultiplayerDemo._roomBtnGap);
            const result = this._createBtn(
                '',
                MultiplayerDemo._btnWidth,
                MultiplayerDemo._roomBtnHeight,
                new Vector3(0, y, 0),
                '#1a2a3a',
                '#50a0ff33',
                () => void this._joinRoom(room.roomId),
            );
            this._roomButtons.push({ result, roomId: room.roomId });
        }

        this._rebuildText();
    }

    private _disposeRoomButtons(): void {
        for (const { result } of this._roomButtons) {
            result.texture.dispose();
            result.plane.dispose();
        }
        this._roomButtons = [];
    }

    private async _createRoom(): Promise<void> {
        if (!this._client) return;
        this._setStatus('Creating room…');
        try {
            const room = await this._client.create<MyRoomState>('my_room');
            await this._onJoined(room);
        } catch (err) {
            this._setStatus(`Failed to create: ${this._errorMessage(err)}`);
        }
    }

    private async _joinRoom(roomId: string): Promise<void> {
        if (!this._client) return;
        this._setStatus(`Joining ${roomId.slice(0, 6)}…`);
        try {
            const room = await this._client.joinById<MyRoomState>(roomId);
            await this._onJoined(room);
        } catch (err) {
            this._setStatus(`Failed to join: ${this._errorMessage(err)}`);
        }
    }

    private async _onJoined(room: Room<MyRoomState>): Promise<void> {
        this._room = room;
        this._setStatus(`In room ${room.roomId.slice(0, 6)}`);
        this._applyState('in-room');

        room.onLeave((_code: number, reason?: string) => {
            this._setStatus(`Left room (${reason ?? 'unknown'})`);
            this._cleanupRoom();
        });
        room.onError((code: number, message?: string) => {
            this._setStatus(`Room error (${code}): ${message ?? 'unknown'}`);
            this._cleanupRoom();
        });

        this._wireState(room);
        this._startSending();
    }

    private _wireState(room: Room<MyRoomState>): void {
        const cb = getStateCallbacks(room) as unknown as (instance: unknown) => {
            onChange: (cb: () => void) => () => void;
        } & {
            players: {
                onAdd: (cb: (player: PlayerSchema, key: string) => void, immediate?: boolean) => () => void;
                onRemove: (cb: (player: PlayerSchema, key: string) => void) => () => void;
            };
        };
        const state = room.state as unknown as MyRoomState;

        cb(state).players.onAdd((player, key) => {
            if (key === room.sessionId) return;
            this._addRemotePlayer(key, player, cb);
        });

        cb(state).players.onRemove((_player, key) => {
            if (key === room.sessionId) return;
            this._removeRemotePlayer(key);
        });
    }

    private _addRemotePlayer(
        sessionId: string,
        player: PlayerSchema,
        cb: ReturnType<typeof getStateCallbacks<MyRoomState>> extends never
            ? never
            : (instance: unknown) => { onChange: (cb: () => void) => () => void },
    ): void {
        const color = Color3.FromHexString(player.color || '#ffffff');
        const material = new StandardMaterial(`mp_mat_${sessionId}`, this._scene);
        material.diffuseColor = color;
        material.emissiveColor = color.scale(0.4);
        material.specularColor = new Color3(0.1, 0.1, 0.1);

        const head = MeshBuilder.CreateSphere(
            `mp_head_${sessionId}`,
            { diameter: MultiplayerDemo._headDiameter },
            this._scene,
        );
        head.material = material;
        head.parent = this._playerGroup;

        const leftHand = MeshBuilder.CreateSphere(
            `mp_left_${sessionId}`,
            { diameter: MultiplayerDemo._handDiameter },
            this._scene,
        );
        leftHand.material = material;
        leftHand.parent = this._playerGroup;

        const rightHand = MeshBuilder.CreateSphere(
            `mp_right_${sessionId}`,
            { diameter: MultiplayerDemo._handDiameter },
            this._scene,
        );
        rightHand.material = material;
        rightHand.parent = this._playerGroup;

        const updateFromState = () => {
            head.position.set(player.x, player.y, player.z);
            leftHand.position.set(player.lx, player.ly, player.lz);
            rightHand.position.set(player.rx, player.ry, player.rz);
        };
        updateFromState();

        const detach = cb(player).onChange(updateFromState);

        const entry: RemotePlayerVisuals = {
            head,
            leftHand,
            rightHand,
            material,
            onChangeDetach: detach,
        };
        this._remotePlayers.set(sessionId, entry);
        this._cleanup.add(material);
        this._cleanup.add(head);
        this._cleanup.add(leftHand);
        this._cleanup.add(rightHand);
    }

    private _removeRemotePlayer(sessionId: string): void {
        const entry = this._remotePlayers.get(sessionId);
        if (!entry) return;
        entry.onChangeDetach();
        entry.head.dispose();
        entry.leftHand.dispose();
        entry.rightHand.dispose();
        entry.material.dispose();
        this._remotePlayers.delete(sessionId);
    }

    private _clearAllRemotePlayers(): void {
        for (const sessionId of Array.from(this._remotePlayers.keys())) {
            this._removeRemotePlayer(sessionId);
        }
    }

    private _startSending(): void {
        this._stopSending();
        this._onBeforeRenderObserver = this._scene.onBeforeRenderObservable.add(() => {
            this._sendLocalState();
        });
        this._sendIntervalId = window.setInterval(() => {
            this._sendLocalState(true);
        }, UPDATE_INTERVAL_MS);
    }

    private _stopSending(): void {
        if (this._sendIntervalId !== null) {
            window.clearInterval(this._sendIntervalId);
            this._sendIntervalId = null;
        }
        if (this._onBeforeRenderObserver) {
            this._scene.onBeforeRenderObservable.remove(this._onBeforeRenderObserver);
            this._onBeforeRenderObserver = null;
        }
    }

    private _sendLocalState(_force = false): void {
        const room = this._room;
        if (!room) return;
        const camera = this._scene.activeCamera;
        if (!camera) return;
        const headPos = camera.position;

        const xr = this._getXr();
        let leftPos = Vector3.Zero();
        let rightPos = Vector3.Zero();
        if (xr) {
            for (const c of xr.input.controllers) {
                const handedness = c.inputSource.handedness;
                const source = c.grip ?? c.pointer;
                if (!source) continue;
                if (handedness === 'left') leftPos = source.getAbsolutePosition();
                else if (handedness === 'right') rightPos = source.getAbsolutePosition();
            }
        }

        try {
            room.send('position', { x: headPos.x, y: headPos.y, z: headPos.z });
            room.send('leftController', { x: leftPos.x, y: leftPos.y, z: leftPos.z });
            room.send('rightController', { x: rightPos.x, y: rightPos.y, z: rightPos.z });
        } catch {
            // ignore send errors while reconnecting
        }
    }

    private async _leaveRoom(): Promise<void> {
        const room = this._room;
        if (!room) return;
        try {
            await room.leave(true);
        } catch {
            // ignore
        }
        this._cleanupRoom();
    }

    private _cleanupRoom(): void {
        this._room = null;
        this._stopSending();
        this._clearAllRemotePlayers();
        if (this._state === 'in-room') {
            this._setStatus(this._client ? 'Connected' : 'Disconnected');
            this._applyState(this._client ? 'connected' : 'disconnected');
        }
    }

    private _errorMessage(err: unknown): string {
        if (err instanceof Error) return err.message;
        if (typeof err === 'string') return err;
        if (err && typeof err === 'object' && 'message' in err) {
            return String((err as { message: unknown }).message);
        }
        return 'unknown error';
    }

    teardown(): void {
        this._disposed = true;
        void this._leaveRoom();
        this._cleanupRoom();
        this._disposeRoomButtons();
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        this._cleanup.dispose();
        this._scene.clearColor = this._prevClearColor;
    }
}
