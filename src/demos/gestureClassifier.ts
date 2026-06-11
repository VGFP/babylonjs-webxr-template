import type { WebXRHand } from '@babylonjs/core/XR/features/WebXRHandTracking';
import * as ort from 'onnxruntime-web';

ort.env.wasm.numThreads = 1;
ort.env.wasm.proxy = true;

const ONNX_BASE = `${self.location.origin}${import.meta.env.BASE_URL}onnx-internal/`;
ort.env.wasm.wasmPaths = {
    'ort-wasm-simd.wasm': `${ONNX_BASE}ort-wasm-simd.wasm`,
};

const GESTURE_CLASSES = ['Rock', 'Paper', 'Scissors', 'Unknown'] as const;
export type GestureClass = (typeof GESTURE_CLASSES)[number];

const PROBABILITY_THRESHOLD = 0.9;

const BASE_URL = import.meta.env.BASE_URL;

function modelUrl(filename: string): string {
    return `${BASE_URL}onnx_models/${filename}`;
}

function transpose(matrix: number[][]): number[][] {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result: number[][] = Array.from({ length: cols }, () => Array(rows).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}

function dotProduct(point: number[], vector: number[]): number {
    return point[0] * vector[0] + point[1] * vector[1] + point[2] * vector[2];
}

function covarianceMatrix(points: number[][]): number[][] {
    const numPoints = points.length;
    const numDims = points[0].length;
    const mean = Array(numDims).fill(0);
    for (const point of points) {
        for (let i = 0; i < numDims; i++) {
            mean[i] += point[i];
        }
    }
    for (let i = 0; i < numDims; i++) {
        mean[i] /= numPoints;
    }
    const cov: number[][] = Array.from({ length: numDims }, () => Array(numDims).fill(0));
    for (const point of points) {
        for (let i = 0; i < numDims; i++) {
            for (let j = 0; j < numDims; j++) {
                cov[i][j] += (point[i] - mean[i]) * (point[j] - mean[j]);
            }
        }
    }
    for (const row of cov) {
        for (let j = 0; j < numDims; j++) {
            row[j] /= numPoints;
        }
    }
    return cov;
}

function pca(covMatrix: number[][], eigenvalues: number[]): number[][] {
    const numDims = covMatrix.length;
    const eigenvectors: number[][] = Array.from({ length: numDims }, () => Array(numDims).fill(0));
    for (let i = 0; i < numDims; i++) {
        eigenvectors[i][i] = 1;
    }
    for (let k = 0; k < numDims; k++) {
        eigenvalues.push(0);
        for (let i = 0; i < numDims; i++) {
            for (let j = 0; j < numDims; j++) {
                let val = 0;
                for (let l = 0; l < numDims; l++) {
                    val += covMatrix[i][l] * eigenvectors[l][j];
                }
                eigenvalues[k] += val * eigenvectors[i][k];
            }
        }
    }
    return eigenvectors;
}

function normalizeHand(points: number[][]): number[] {
    const rootJoint = points[0].slice(0, 3);
    for (const point of points) {
        point[0] -= rootJoint[0];
        point[1] -= rootJoint[1];
        point[2] -= rootJoint[2];
    }

    let maxDistance = 0;
    for (const point of points) {
        const distance = Math.sqrt(point[0] ** 2 + point[1] ** 2 + point[2] ** 2);
        if (distance > maxDistance) {
            maxDistance = distance;
        }
    }
    if (maxDistance === 0) maxDistance = 1;
    for (const point of points) {
        point[0] /= maxDistance;
        point[1] /= maxDistance;
        point[2] /= maxDistance;
    }

    const cov = covarianceMatrix(points);
    const eigenvalues: number[] = [];
    const eigenvectors = pca(cov, eigenvalues);
    const rotationMatrix = transpose(eigenvectors);
    for (const point of points) {
        point[0] = dotProduct(point, rotationMatrix[0]);
        point[1] = dotProduct(point, rotationMatrix[1]);
        point[2] = dotProduct(point, rotationMatrix[2]);
    }

    const root = points[0].slice(0, 3);
    const features = points.map((point) => {
        const dx = point[0] - root[0];
        const dy = point[1] - root[1];
        const dz = point[2] - root[2];
        return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    });

    const minFeature = Math.min(...features);
    const maxFeature = Math.max(...features);
    const range = maxFeature - minFeature || 1;
    for (let i = 0; i < features.length; i++) {
        features[i] = (features[i] - minFeature) / range;
    }

    return features;
}

export class GestureClassifier {
    private _leftSession: ort.InferenceSession | null = null;
    private _rightSession: ort.InferenceSession | null = null;
    private _initPromise: Promise<void>;
    private _ready = false;
    private _error: string | null = null;

    constructor() {
        this._initPromise = this._init();
    }

    private async _init(): Promise<void> {
        try {
            const [left, right] = await Promise.all([
                ort.InferenceSession.create(modelUrl('new_svc_model_left_v2.onnx'), {
                    executionProviders: ['wasm'],
                    executionMode: 'parallel',
                }),
                ort.InferenceSession.create(modelUrl('new_svc_model_right_v2.onnx'), {
                    executionProviders: ['wasm'],
                    executionMode: 'parallel',
                }),
            ]);
            this._leftSession = left;
            this._rightSession = right;
            this._ready = true;
        } catch (e) {
            this._error = `Failed to load ONNX models: ${e instanceof Error ? e.message : String(e)}`;
            console.warn(this._error);
        }
    }

    get ready(): boolean {
        return this._ready;
    }

    get error(): string | null {
        return this._error;
    }

    get loaded(): Promise<void> {
        return this._initPromise;
    }

    getJointPositions(hand: WebXRHand): number[][] | null {
        try {
            const propertyAccess = Object.getOwnPropertyDescriptor(hand, '_jointMeshes');
            if (!propertyAccess || !propertyAccess.value) return null;
            const jointMeshes = propertyAccess.value as Map<string, { position: { x: number; y: number; z: number } }>;
            const positions: number[][] = [];
            jointMeshes.forEach((mesh) => {
                positions.push([mesh.position.x, mesh.position.y, mesh.position.z]);
            });
            return positions.length >= 25 ? positions : null;
        } catch {
            return null;
        }
    }

    async predict(hand: WebXRHand, handedness: 'left' | 'right'): Promise<GestureClass> {
        const session = handedness === 'left' ? this._leftSession : this._rightSession;
        if (!session) return 'Unknown';

        const positions = this.getJointPositions(hand);
        if (!positions) return 'Unknown';

        const features = normalizeHand(positions);
        const tensor = new ort.Tensor('float32', new Float32Array(features), [1, 25]);

        try {
            const output = await session.run({ float_input: tensor });
            const probabilities = output.probabilities;
            if (!probabilities) return 'Unknown';

            const data = (probabilities as any).cpuData as Float32Array;
            let bestIdx = -1;
            let bestProb = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i] > bestProb) {
                    bestProb = data[i];
                    bestIdx = i;
                }
            }

            if (bestIdx >= 0 && bestProb >= PROBABILITY_THRESHOLD && bestIdx < GESTURE_CLASSES.length) {
                return GESTURE_CLASSES[bestIdx];
            }
            return 'Unknown';
        } catch {
            return 'Unknown';
        }
    }

    dispose(): void {
        this._leftSession?.release();
        this._rightSession?.release();
        this._leftSession = null;
        this._rightSession = null;
        this._ready = false;
    }
}
