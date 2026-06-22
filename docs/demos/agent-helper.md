# AI Voice Assistant Demo (Agent Helper)

Part of the BabylonJS WebXR template. See [AGENTS.md](../../AGENTS.md) for universal project knowledge (scene management, MSDF text, imports, commands).

A browser-based voice assistant running entirely in XR: **record → ASR → LLM → TTS → play**.

## Pipeline

1. User presses **Talk** → `MediaRecorder` captures audio via `getUserMedia`
2. Audio blob → ASR (Whisper via `fetch` + `FormData`)
3. Transcript → LLM chat completion (`openai` SDK, OpenAI-compatible endpoint)
4. Response text → TTS (`TtsProvider` abstraction)
5. Audio data-URI or blob URL → `new Audio(src).play()`

## Key files

| File | Role |
|---|---|
| `src/demos/agentHelper.ts` | `AgentHelperDemo` - UI (record/stop button, status text), pipeline orchestration, audio playback |
| `src/demos/llmConfig.ts` | All provider/model constants, `TtsProvider` interface, pre-built provider implementations (`DEEPINFRA_TTS`, `OPENAI_TTS`) |
| `src/core/sceneMetadata.ts` | `agentApiKey` field - API key stored in scene metadata, entered via HTML overlay before XR entry |
| `src/core/domWiring.ts` | `wireAgentKeyInput()` / `consumeAgentApiKey()` - DOM overlay wiring for the API key input |

## Status display

The status lines show the current pipeline stage:
- `The Blob - AI Agent` / `Tap the blob or press Talk.` - ready
- `Listening...` / `Tap again to stop.` - recording in progress
- `Transcribing...` - ASR API call
- `Thinking...` - LLM API call
- `Generating speech...` - TTS API call
- `Speaking...` - audio playback in progress
- `You: … / AI: …` - final result (truncated to 36 chars)

## Switching providers

All provider-specific configuration is in `src/demos/llmConfig.ts`. The pipeline logic in `agentHelper.ts` never touches URLs or model names directly.

**To change the LLM/ASR provider** (e.g., DeepInfra → OpenAI):

```ts
// llmConfig.ts - change these values:
export const LLM_BASE_URL = 'https://api.openai.com/v1';
export const ASR_MODEL = 'whisper-1';
export const LLM_DEFAULT_MODEL = 'gpt-4o-mini';
```

The ASR endpoint path (`ASR_PATH`) defaults to `/audio/transcriptions` which is the same across all OpenAI-compatible providers.

**To change the TTS provider**, swap the `TTS_PROVIDER` export:

```ts
// Use OpenAI's TTS (returns raw audio bytes):
export const TTS_PROVIDER: TtsProvider = OPENAI_TTS;

// Or use DeepInfra's native TTS (returns JSON with base64 audio):
export const TTS_PROVIDER: TtsProvider = DEEPINFRA_TTS;
```

**To add a completely new TTS provider**, implement the `TtsProvider` interface:

```ts
export interface TtsProvider {
    buildUrl(baseUrl: string, inferenceBaseUrl: string, model: string): string;
    buildBody(text: string, voice: string): string;
    parseResponse(response: Response): Promise<string>; // return data-URI or blob URL
}
```

Then assign it to `TTS_PROVIDER` in `llmConfig.ts`. No changes to `agentHelper.ts` are needed.

**To change the system prompt** (assistant personality):

```ts
export const SYSTEM_PROMPT = 'You are The Blob, a helpful voice assistant.';
```

## Architecture notes

- **ASR** uses raw `fetch` (not the `openai` SDK) because the `FormData` upload is straightforward and avoids SDK model-name typing issues.
- **LLM** uses the `openai` SDK with `dangerouslyAllowBrowser: true` and a custom `baseURL` - works with any OpenAI-compatible endpoint.
- **TTS** uses raw `fetch` via the `TtsProvider` abstraction - the response format varies significantly between providers (JSON with data-URI vs. raw bytes).
- Chat history (`_chatHistory`) is maintained per-session; the system prompt is the first entry.
- `_playAudio` handles both data-URIs (DeepInfra) and blob URLs (OpenAI) - blob URLs are revoked on playback end.

## The Blob (AiAvatar)

The AI agent is visualized as "The Blob" - a 3D animated orb floating above the demo panel. It uses custom GLSL shaders for all animation (no CPU mesh manipulation), keeping it lightweight for standalone XR headsets.

**Architecture**: Two ico-sphere meshes with separate `ShaderMaterial` instances:

| Layer | Vertices | Role |
|---|---|---|
| Main orb | 642 (subdivisions 3) | Noise-deformed sphere with Fresnel rim glow |
| Aura shell | 162 (subdivisions 2) | Larger, static Fresnel-only glow (additive blending) |

**Animation states** (smooth exponential interpolation between targets):

| State | Noise amplitude | Colors | Audio-reactive? |
|---|---|---|---|
| `idle` | 0.06 (gentle) | Blue-violet → cyan | No |
| `listening` | 0 (still) | Teal → electric green | Yes (mic waveform via `AnalyserNode`) |
| `thinking` | 0.07 (subtle) | Amber → orange | No |
| `speaking` | 0 (still) | Pink → white-pink | Yes (TTS audio via `AnalyserNode`) |

During `listening` and `speaking`, the orb has zero automatic noise deformation - all movement comes from the audio waveform driving both mesh scale (±25%) and a `audioPulse` uniform that adds noise displacement proportional to RMS volume.

**Vertex shader**: 3-octave gradient noise displacement + optional `audioPulse` modulation.
**Fragment shader**: Fresnel rim glow (power 2.8), displacement-modulated core brightness, subtle energy lines. Alpha `mix(0.3, 0.7, fresnel * glowIntensity)` for XR passthrough transparency.

**Interaction**: The orb mesh is pickable with an `ActionManager` `OnPickTrigger` that toggles recording (same as the Talk button). Works with XR controllers, hand tracking pinch, and screen touch.

**Audio routing** (in `agentHelper.ts`):
- **Mic** (listening): `getUserMedia` stream → `MediaStreamAudioSourceNode` → separate `AnalyserNode` (not connected to `destination` to avoid feedback) → `avatar.setAudioAnalyser()`
- **TTS** (speaking): `Audio` element → `MediaElementAudioSourceNode` → `AnalyserNode` → `AudioContext.destination` (so user hears the response) → `avatar.setAudioAnalyser()`
- The `AudioContext` is shared between mic and TTS; the `AnalyserNode` instances are separate and lazily created.
