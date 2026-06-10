/**
 * Voice assistant provider configuration.
 *
 * The pipeline is always: **record → ASR → LLM → TTS → play**.
 * To switch providers, change the values below. The TTS layer is the most
 * provider-specific part, so it is abstracted behind a `TtsProvider` interface.
 *
 * Quick reference for common providers:
 *
 * | Provider   | LLM_BASE_URL                            | TTS uses native inference? |
 * |------------|------------------------------------------|----------------------------|
 * | DeepInfra  | `https://api.deepinfra.com/v1/openai`    | Yes (default)              |
 * | OpenAI     | `https://api.openai.com/v1`              | No – use OPENAI_TTS        |
 * | Groq       | `https://api.groq.com/openai/v1`         | N/A (no TTS yet)           |
 * | Together   | `https://api.together.xyz/v1`            | Check docs                 |
 */

// ---------------------------------------------------------------------------
// Base URLs
// ---------------------------------------------------------------------------

/** OpenAI-compatible chat / ASR endpoint. */
export const LLM_BASE_URL = 'https://api.deepinfra.com/v1/openai';

/** Native inference endpoint (DeepInfra-specific, used for TTS). */
export const INFERENCE_BASE_URL = 'https://api.deepinfra.com/v1/inference';

// ---------------------------------------------------------------------------
// ASR (Speech-to-Text)
// ---------------------------------------------------------------------------

/** ASR model identifier. Most providers use an OpenAI-Whisper variant. */
export const ASR_MODEL = 'openai/whisper-large-v3-turbo';

/**
 * Path appended to `LLM_BASE_URL` for transcription.
 * Almost every OpenAI-compatible provider uses `/audio/transcriptions`.
 */
export const ASR_PATH = '/audio/transcriptions';

// ---------------------------------------------------------------------------
// LLM (Chat)
// ---------------------------------------------------------------------------

/** Default chat-completion model. */
export const LLM_DEFAULT_MODEL = 'zai-org/GLM-5.1';

/** System prompt shaping the assistant's behaviour. */
export const SYSTEM_PROMPT =
    'You are The Blob, a helpful voice assistant. Keep responses concise - 2-3 sentences max. Speak naturally as if talking to someone.';

/** Optional alternative models for UI selection. */
export const LLM_MODELS: readonly string[] = [
    LLM_DEFAULT_MODEL,
    'meta-llama/Meta-Llama-3.1-8B-Instruct',
    'meta-llama/Meta-Llama-3.1-70B-Instruct',
];

/** Default sampling parameters. */
export const LLM_DEFAULTS = {
    temperature: 0.7,
    maxTokens: 2048,
} as const;

// ---------------------------------------------------------------------------
// TTS (Text-to-Speech)
// ---------------------------------------------------------------------------

/** TTS model identifier. */
export const TTS_MODEL = 'Qwen/Qwen3-TTS';

/** Preset voice name. Available voices depend on the model. */
export const TTS_VOICE = 'Vivian';

/**
 * Abstraction over TTS request/response - the most provider-specific layer.
 *
 * Implement this interface to add a new TTS provider, then assign it to
 * `TTS_PROVIDER` below.
 */
export interface TtsProvider {
    /** Build the full request URL. */
    buildUrl(baseUrl: string, inferenceBaseUrl: string, model: string): string;
    /** Serialize the request body. */
    buildBody(text: string, voice: string): string;
    /** Extract a playable audio source (data-URI or blob URL) from the response. */
    parseResponse(response: Response): Promise<string>;
}

/**
 * DeepInfra native TTS – sends `{ input, voice }` as JSON, receives
 * `{ audio: "data:audio/wav;base64,…" }`.
 */
export const DEEPINFRA_TTS: TtsProvider = {
    buildUrl(_baseUrl, inferenceBaseUrl, model) {
        return `${inferenceBaseUrl}/${model}`;
    },
    buildBody(text, voice) {
        return JSON.stringify({ input: text, voice });
    },
    async parseResponse(res) {
        const json = (await res.json()) as { audio: string };
        return json.audio;
    },
};

/**
 * OpenAI-compatible TTS – sends `{ model, input, voice }` as JSON, receives
 * raw audio bytes (mp3). Returns a blob URL.
 *
 * To use: `export { OPENAI_TTS as TTS_PROVIDER }` below.
 */
export const OPENAI_TTS: TtsProvider = {
    buildUrl(baseUrl, _inferenceBaseUrl, _model) {
        return `${baseUrl}/audio/speech`;
    },
    buildBody(text, voice) {
        return JSON.stringify({ model: TTS_MODEL, input: text, voice });
    },
    async parseResponse(res) {
        const blob = await res.blob();
        return URL.createObjectURL(blob);
    },
};

/** Active TTS provider. Swap this line to change providers. */
export const TTS_PROVIDER: TtsProvider = DEEPINFRA_TTS;
