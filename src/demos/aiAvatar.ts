import {
    ActionManager,
    Color3,
    Engine,
    ExecuteCodeAction,
    Mesh,
    MeshBuilder,
    Observer,
    Scene,
    ShaderMaterial,
    Vector3,
} from '@babylonjs/core';
import '@babylonjs/core/Collisions';

export type AiAvatarState = 'idle' | 'listening' | 'thinking' | 'speaking';

interface StateConfig {
    amplitude: number;
    speed: number;
    frequency: number;
    baseColor: Color3;
    rimColor: Color3;
    glowIntensity: number;
}

const STATES: Record<AiAvatarState, StateConfig> = {
    idle: {
        amplitude: 0.06,
        speed: 0.4,
        frequency: 1.2,
        baseColor: new Color3(0.15, 0.25, 0.7),
        rimColor: new Color3(0.35, 0.55, 1.0),
        glowIntensity: 0.8,
    },
    listening: {
        amplitude: 0.0,
        speed: 0.0,
        frequency: 2.0,
        baseColor: new Color3(0.0, 0.55, 0.5),
        rimColor: new Color3(0.2, 1.0, 0.8),
        glowIntensity: 1.3,
    },
    thinking: {
        amplitude: 0.07,
        speed: 0.8,
        frequency: 2.0,
        baseColor: new Color3(0.8, 0.5, 0.05),
        rimColor: new Color3(1.0, 0.7, 0.2),
        glowIntensity: 1.2,
    },
    speaking: {
        amplitude: 0.0,
        speed: 0.0,
        frequency: 1.8,
        baseColor: new Color3(0.6, 0.15, 0.5),
        rimColor: new Color3(1.0, 0.4, 0.85),
        glowIntensity: 1.1,
    },
};

const TRANSITION_SPEED = 4.0;
const ORB_RADIUS = 0.07;
const ORB_SUBDIVISIONS = 3;
const AURA_RADIUS = 0.105;
const AURA_SUBDIVISIONS = 2;

const ORB_VERTEX = `
precision highp float;

attribute vec3 position;
attribute vec3 normal;

uniform mat4 worldViewProjection;
uniform mat4 worldView;
uniform float time;
uniform float amplitude;
uniform float speed;
uniform float frequency;
uniform float audioPulse;

varying vec3 vViewPos;
varying vec3 vNorm;
varying float vDisp;

vec3 hash33(vec3 p) {
    p = vec3(dot(p,vec3(127.1,311.7,74.7)),
             dot(p,vec3(269.5,183.3,246.1)),
             dot(p,vec3(113.5,271.9,124.6)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
}

float gnoise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f*f*(3.0-2.0*f);
    return mix(
        mix(mix(dot(hash33(i),f),
                dot(hash33(i+vec3(1,0,0)),f-vec3(1,0,0)),u.x),
            mix(dot(hash33(i+vec3(0,1,0)),f-vec3(0,1,0)),
                dot(hash33(i+vec3(1,1,0)),f-vec3(1,1,0)),u.x),u.y),
        mix(mix(dot(hash33(i+vec3(0,0,1)),f-vec3(0,0,1)),
                dot(hash33(i+vec3(1,0,1)),f-vec3(1,0,1)),u.x),
            mix(dot(hash33(i+vec3(0,1,1)),f-vec3(0,1,1)),
                dot(hash33(i+vec3(1,1,1)),f-vec3(1,1,1)),u.x),u.y),u.z);
}

void main() {
    float amp = amplitude + audioPulse * 0.2;
    vec3 np = position * frequency
        + vec3(time * speed * 0.3, time * speed * 0.2, time * speed * 0.15);
    float n = gnoise(np) * 0.6
        + gnoise(np * 2.0 + vec3(5.2, 1.3, 2.8)) * 0.3
        + gnoise(np * 4.0 + vec3(9.1, 4.7, 3.2)) * 0.1;
    float disp = n * amp;

    vec3 pos = position + normal * disp;

    vViewPos = (worldView * vec4(pos, 1.0)).xyz;
    vNorm = normalize((worldView * vec4(normal, 0.0)).xyz);
    vDisp = disp;

    gl_Position = worldViewProjection * vec4(pos, 1.0);
}
`;

const ORB_FRAGMENT = `
precision highp float;

varying vec3 vViewPos;
varying vec3 vNorm;
varying float vDisp;

uniform vec3 baseColor;
uniform vec3 rimColor;
uniform float glowIntensity;
uniform float amplitude;

void main() {
    vec3 viewDir = normalize(-vViewPos);
    vec3 n = normalize(vNorm);

    float fresnel = pow(1.0 - abs(dot(n, viewDir)), 2.8);

    float bright = 0.75 + 0.25 * clamp(vDisp / max(amplitude, 0.001) * 0.5 + 0.5, 0.0, 1.0);

    vec3 col = mix(baseColor * bright, rimColor, fresnel * glowIntensity);

    float line = sin(vViewPos.y * 40.0) * sin(vViewPos.x * 40.0) * 0.03;
    col += rimColor * max(0.0, line) * glowIntensity;

    float alpha = mix(0.3, 0.7, fresnel * glowIntensity);
    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
}
`;

const AURA_VERTEX = `
precision highp float;

attribute vec3 position;
attribute vec3 normal;

uniform mat4 worldViewProjection;
uniform mat4 worldView;

varying vec3 vViewPos;
varying vec3 vNorm;

void main() {
    vViewPos = (worldView * vec4(position, 1.0)).xyz;
    vNorm = normalize((worldView * vec4(normal, 0.0)).xyz);
    gl_Position = worldViewProjection * vec4(position, 1.0);
}
`;

const AURA_FRAGMENT = `
precision highp float;

varying vec3 vViewPos;
varying vec3 vNorm;

uniform vec3 rimColor;

void main() {
    vec3 viewDir = normalize(-vViewPos);
    vec3 n = normalize(vNorm);
    float fresnel = pow(1.0 - abs(dot(n, viewDir)), 3.5);
    gl_FragColor = vec4(rimColor, fresnel * 0.18);
}
`;

export class AiAvatar {
    private _mesh: Mesh;
    private _auraMesh: Mesh;
    private _material: ShaderMaterial;
    private _auraMaterial: ShaderMaterial;
    private _observer: Observer<Scene>;
    private _startTime: number;
    private _lastTime: number;
    private _disposed = false;

    private _analyser: AnalyserNode | null = null;
    private _audioData: Uint8Array<ArrayBuffer> | null = null;
    private _audioLevel = 0;

    private _cur: {
        amplitude: number;
        speed: number;
        frequency: number;
        glowIntensity: number;
        baseColor: Color3;
        rimColor: Color3;
    };
    private _tgt: {
        amplitude: number;
        speed: number;
        frequency: number;
        glowIntensity: number;
        baseColor: Color3;
        rimColor: Color3;
    };

    constructor(scene: Scene, position: Vector3, onClick?: () => void) {
        this._mesh = MeshBuilder.CreateIcoSphere(
            'aiOrb',
            {
                radius: ORB_RADIUS,
                subdivisions: ORB_SUBDIVISIONS,
                flat: false,
            },
            scene,
        );
        this._mesh.position = position.clone();
        this._mesh.isPickable = true;

        if (onClick) {
            this._mesh.actionManager = new ActionManager(scene);
            this._mesh.actionManager.registerAction(new ExecuteCodeAction(ActionManager.OnPickTrigger, onClick));
        }

        this._auraMesh = MeshBuilder.CreateIcoSphere(
            'aiAura',
            {
                radius: AURA_RADIUS,
                subdivisions: AURA_SUBDIVISIONS,
                flat: false,
            },
            scene,
        );
        this._auraMesh.parent = this._mesh;
        this._auraMesh.isPickable = false;

        this._material = new ShaderMaterial(
            'aiOrbMat',
            scene,
            {
                vertexSource: ORB_VERTEX,
                fragmentSource: ORB_FRAGMENT,
            },
            {
                attributes: ['position', 'normal'],
                uniforms: [
                    'worldViewProjection',
                    'worldView',
                    'time',
                    'amplitude',
                    'speed',
                    'frequency',
                    'audioPulse',
                    'baseColor',
                    'rimColor',
                    'glowIntensity',
                ],
                needAlphaBlending: true,
            },
        );
        this._material.backFaceCulling = false;
        this._material.disableDepthWrite = true;
        this._material.alphaMode = Engine.ALPHA_COMBINE;
        this._mesh.material = this._material;

        this._auraMaterial = new ShaderMaterial(
            'aiAuraMat',
            scene,
            {
                vertexSource: AURA_VERTEX,
                fragmentSource: AURA_FRAGMENT,
            },
            {
                attributes: ['position', 'normal'],
                uniforms: ['worldViewProjection', 'worldView', 'rimColor'],
                needAlphaBlending: true,
            },
        );
        this._auraMaterial.backFaceCulling = true;
        this._auraMaterial.disableDepthWrite = true;
        this._auraMaterial.alphaMode = Engine.ALPHA_ADD;
        this._auraMesh.material = this._auraMaterial;

        const idle = STATES.idle;
        this._cur = {
            amplitude: idle.amplitude,
            speed: idle.speed,
            frequency: idle.frequency,
            glowIntensity: idle.glowIntensity,
            baseColor: idle.baseColor.clone(),
            rimColor: idle.rimColor.clone(),
        };
        this._tgt = {
            amplitude: idle.amplitude,
            speed: idle.speed,
            frequency: idle.frequency,
            glowIntensity: idle.glowIntensity,
            baseColor: idle.baseColor.clone(),
            rimColor: idle.rimColor.clone(),
        };

        this._startTime = performance.now() / 1000;
        this._lastTime = this._startTime;

        this._observer = scene.onBeforeRenderObservable.add(() => this._update());
    }

    setState(state: AiAvatarState): void {
        const s = STATES[state];
        this._tgt.amplitude = s.amplitude;
        this._tgt.speed = s.speed;
        this._tgt.frequency = s.frequency;
        this._tgt.glowIntensity = s.glowIntensity;
        this._tgt.baseColor.copyFrom(s.baseColor);
        this._tgt.rimColor.copyFrom(s.rimColor);
    }

    setAudioAnalyser(analyser: AnalyserNode | null): void {
        this._analyser = analyser;
        this._audioData = analyser ? new Uint8Array(analyser.fftSize) : null;
        if (!analyser) this._audioLevel = 0;
    }

    private _lerpColor(cur: Color3, tgt: Color3, t: number): void {
        cur.r += (tgt.r - cur.r) * t;
        cur.g += (tgt.g - cur.g) * t;
        cur.b += (tgt.b - cur.b) * t;
    }

    private _update(): void {
        if (this._disposed) return;

        const now = performance.now() / 1000;
        const dt = Math.min(now - this._lastTime, 0.1);
        this._lastTime = now;
        const time = now - this._startTime;

        const t = 1 - Math.exp(-TRANSITION_SPEED * dt);

        this._cur.amplitude += (this._tgt.amplitude - this._cur.amplitude) * t;
        this._cur.speed += (this._tgt.speed - this._cur.speed) * t;
        this._cur.frequency += (this._tgt.frequency - this._cur.frequency) * t;
        this._cur.glowIntensity += (this._tgt.glowIntensity - this._cur.glowIntensity) * t;
        this._lerpColor(this._cur.baseColor, this._tgt.baseColor, t);
        this._lerpColor(this._cur.rimColor, this._tgt.rimColor, t);

        if (this._analyser && this._audioData) {
            this._analyser.getByteTimeDomainData(this._audioData!);
            let sum = 0;
            for (let i = 0; i < this._audioData.length; i++) {
                const v = (this._audioData[i] - 128) / 128;
                sum += v * v;
            }
            const rms = Math.sqrt(sum / this._audioData.length);
            this._audioLevel += (rms - this._audioLevel) * Math.min(dt * 18, 1);
        } else {
            this._audioLevel += (0 - this._audioLevel) * Math.min(dt * 8, 1);
        }

        const scale = 1.0 + this._audioLevel * 0.25;
        this._mesh.scaling.setAll(scale);

        const effectiveGlow = this._cur.glowIntensity + this._audioLevel * 0.6;

        this._material.setFloat('time', time);
        this._material.setFloat('amplitude', this._cur.amplitude);
        this._material.setFloat('speed', this._cur.speed);
        this._material.setFloat('frequency', this._cur.frequency);
        this._material.setFloat('audioPulse', this._audioLevel);
        this._material.setColor3('baseColor', this._cur.baseColor);
        this._material.setColor3('rimColor', this._cur.rimColor);
        this._material.setFloat('glowIntensity', effectiveGlow);

        this._auraMaterial.setColor3('rimColor', this._cur.rimColor);

        this._mesh.rotation.y += dt * this._cur.speed * 0.15;
    }

    dispose(): void {
        if (this._disposed) return;
        this._disposed = true;
        this._observer.remove();
        this._auraMaterial.dispose();
        this._material.dispose();
        this._auraMesh.dispose();
        this._mesh.dispose();
    }
}
