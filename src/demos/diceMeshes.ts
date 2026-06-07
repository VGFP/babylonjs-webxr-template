import {
    Color3,
    DynamicTexture,
    Mesh,
    MeshBuilder,
    Quaternion,
    Scene,
    StandardMaterial,
    Vector3,
    Vector4,
    VertexData,
} from '@babylonjs/core';
import '@babylonjs/core/Meshes/Builders/polyhedronBuilder';
import '@babylonjs/core/Meshes/Builders/boxBuilder';

export type DieType = 'd4' | 'd6' | 'd8' | 'd12' | 'd20';

export interface DieFace {
    normal: Vector3;
    value: number;
}

const POLYHEDRON_DATA: Record<number, { vertex: number[][]; face: number[][] }> = {
    0: {
        vertex: [
            [0, 0, 1.732051],
            [1.632993, 0, -0.5773503],
            [-0.8164966, 1.414214, -0.5773503],
            [-0.8164966, -1.414214, -0.5773503],
        ],
        face: [
            [0, 1, 2],
            [0, 2, 3],
            [0, 3, 1],
            [1, 3, 2],
        ],
    },
    1: {
        vertex: [
            [0, 0, 1.414214],
            [1.414214, 0, 0],
            [0, 1.414214, 0],
            [-1.414214, 0, 0],
            [0, -1.414214, 0],
            [0, 0, -1.414214],
        ],
        face: [
            [0, 1, 2],
            [0, 2, 3],
            [0, 3, 4],
            [0, 4, 1],
            [1, 4, 5],
            [1, 5, 2],
            [2, 5, 3],
            [3, 5, 4],
        ],
    },
    2: {
        vertex: [
            [0, 0, 1.070466],
            [0.7136442, 0, 0.7978784],
            [-0.3568221, 0.618034, 0.7978784],
            [-0.3568221, -0.618034, 0.7978784],
            [0.7978784, 0.618034, 0.3568221],
            [0.7978784, -0.618034, 0.3568221],
            [-0.9341724, 0.381966, 0.3568221],
            [0.1362939, 1, 0.3568221],
            [0.1362939, -1, 0.3568221],
            [-0.9341724, -0.381966, 0.3568221],
            [0.9341724, 0.381966, -0.3568221],
            [0.9341724, -0.381966, -0.3568221],
            [-0.7978784, 0.618034, -0.3568221],
            [-0.1362939, 1, -0.3568221],
            [-0.1362939, -1, -0.3568221],
            [-0.7978784, -0.618034, -0.3568221],
            [0.3568221, 0.618034, -0.7978784],
            [0.3568221, -0.618034, -0.7978784],
            [-0.7136442, 0, -0.7978784],
            [0, 0, -1.070466],
        ],
        face: [
            [0, 1, 4, 7, 2],
            [0, 2, 6, 9, 3],
            [0, 3, 8, 5, 1],
            [1, 5, 11, 10, 4],
            [2, 7, 13, 12, 6],
            [3, 9, 15, 14, 8],
            [4, 10, 16, 13, 7],
            [5, 8, 14, 17, 11],
            [6, 12, 18, 15, 9],
            [10, 11, 17, 19, 16],
            [12, 13, 16, 19, 18],
            [14, 15, 18, 19, 17],
        ],
    },
    3: {
        vertex: [
            [0, 0, 1.175571],
            [1.051462, 0, 0.5257311],
            [0.3249197, 1, 0.5257311],
            [-0.8506508, 0.618034, 0.5257311],
            [-0.8506508, -0.618034, 0.5257311],
            [0.3249197, -1, 0.5257311],
            [0.8506508, 0.618034, -0.5257311],
            [0.8506508, -0.618034, -0.5257311],
            [-0.3249197, 1, -0.5257311],
            [-1.051462, 0, -0.5257311],
            [-0.3249197, -1, -0.5257311],
            [0, 0, -1.175571],
        ],
        face: [
            [0, 1, 2],
            [0, 2, 3],
            [0, 3, 4],
            [0, 4, 5],
            [0, 5, 1],
            [1, 5, 7],
            [1, 7, 6],
            [1, 6, 2],
            [2, 6, 8],
            [2, 8, 3],
            [3, 8, 9],
            [3, 9, 4],
            [4, 9, 10],
            [4, 10, 5],
            [5, 10, 7],
            [6, 7, 11],
            [6, 11, 8],
            [7, 10, 11],
            [8, 11, 9],
            [9, 11, 10],
        ],
    },
};

function atlasGrid(sides: number): { cols: number; rows: number } {
    const cols = Math.ceil(Math.sqrt(sides));
    const rows = Math.ceil(sides / cols);
    return { cols, rows };
}

function getFaceUVRect(faceIndex: number, sides: number): Vector4 {
    const { cols, rows } = atlasGrid(sides);
    const col = faceIndex % cols;
    const row = Math.floor(faceIndex / cols);
    return new Vector4(col / cols, row / rows, (col + 1) / cols, (row + 1) / rows);
}

const POLYHEDRON_TYPE_MAP: Record<string, number> = {
    d4: 0,
    d8: 1,
    d12: 2,
    d20: 3,
};

function buildCustomPolyhedron(
    scene: Scene,
    type: DieType,
    radius: number,
    name: string,
): { mesh: Mesh; faces: DieFace[] } {
    const polyType = POLYHEDRON_TYPE_MAP[type];
    const data = POLYHEDRON_DATA[polyType];
    const sides = data.face.length;

    const positionsArr: number[] = [];
    const indicesArr: number[] = [];
    const uvsArr: number[] = [];
    const faces: DieFace[] = [];

    const tmpEdge1 = new Vector3();
    const tmpEdge2 = new Vector3();
    const tmpV0 = new Vector3();
    const tmpV1 = new Vector3();
    const tmpV2 = new Vector3();

    const worldUp = new Vector3(0, 1, 0);
    const worldFwd = new Vector3(0, 0, 1);

    let vIdx = 0;

    for (let f = 0; f < sides; f++) {
        const face = data.face[f];
        const fl = face.length;

        for (let i = 0; i < 3; i++) {
            const v = data.vertex[face[i]];
            if (i === 0) tmpV0.set(v[0], v[1], v[2]);
            else if (i === 1) tmpV1.set(v[0], v[1], v[2]);
            else tmpV2.set(v[0], v[1], v[2]);
        }
        tmpEdge1.copyFrom(tmpV1).subtractInPlace(tmpV0);
        tmpEdge2.copyFrom(tmpV2).subtractInPlace(tmpV0);
        const normal = Vector3.Cross(tmpEdge1, tmpEdge2).normalize();
        faces.push({ normal: normal.clone(), value: f + 1 });

        const center = new Vector3();
        const faceVerts: Vector3[] = [];
        for (let i = 0; i < fl; i++) {
            const v = data.vertex[face[i]];
            const pos = new Vector3(v[0], v[1], v[2]);
            faceVerts.push(pos);
            center.addInPlace(pos);
        }
        center.scaleInPlace(1 / fl);

        let upProj = worldUp.subtract(normal.scale(Vector3.Dot(worldUp, normal)));
        if (upProj.lengthSquared() < 0.001) {
            upProj = worldFwd.subtract(normal.scale(Vector3.Dot(worldFwd, normal)));
        }
        upProj.normalize();
        const rightProj = Vector3.Cross(upProj, normal).normalize();

        const uvRect = getFaceUVRect(f, sides);
        const cellCenterU = (uvRect.x + uvRect.z) / 2;
        const cellCenterV = (uvRect.y + uvRect.w) / 2;
        const cellHalfW = (uvRect.z - uvRect.x) / 2;
        const cellHalfH = (uvRect.w - uvRect.y) / 2;
        const polyRadius = Math.min(cellHalfW, cellHalfH) * 0.92;

        const baseIdx = vIdx;
        for (let i = 0; i < fl; i++) {
            const pos = faceVerts[i];
            positionsArr.push(pos.x, pos.y, pos.z);

            const dir = pos.subtract(center);
            dir.normalize();
            const dotUp = Vector3.Dot(dir, upProj);
            const dotRight = Vector3.Dot(dir, rightProj);
            const angle = Math.atan2(dotRight, dotUp);

            const u = cellCenterU - polyRadius * Math.sin(angle);
            const v = cellCenterV + polyRadius * Math.cos(angle);
            uvsArr.push(u, v);
            vIdx++;
        }

        for (let i = 0; i < fl - 2; i++) {
            indicesArr.push(baseIdx, baseIdx + i + 2, baseIdx + i + 1);
        }
    }

    let maxDistSq = 0;
    for (let i = 0; i < positionsArr.length; i += 3) {
        const d =
            positionsArr[i] * positionsArr[i] +
            positionsArr[i + 1] * positionsArr[i + 1] +
            positionsArr[i + 2] * positionsArr[i + 2];
        if (d > maxDistSq) maxDistSq = d;
    }
    const scale = radius / Math.sqrt(maxDistSq);
    const scaled = new Float32Array(positionsArr.length);
    for (let i = 0; i < positionsArr.length; i++) scaled[i] = positionsArr[i] * scale;

    const mesh = new Mesh(name, scene);
    const vertexData = new VertexData();
    vertexData.positions = scaled;
    vertexData.indices = new Uint32Array(indicesArr);
    vertexData.uvs = new Float32Array(uvsArr);
    const computedNormals: number[] = [];
    VertexData.ComputeNormals(scaled, vertexData.indices as unknown as Int32Array, computedNormals);
    vertexData.normals = computedNormals;
    vertexData.applyToMesh(mesh);
    mesh.convertToFlatShadedMesh();

    return { mesh, faces };
}

function buildBoxDie(scene: Scene, radius: number, sides: number, name: string): { mesh: Mesh; faces: DieFace[] } {
    const size = (radius * 2) / Math.sqrt(3);
    const faceUV: Vector4[] = [];
    for (let i = 0; i < sides; i++) {
        faceUV.push(getFaceUVRect(i, sides));
    }
    const mesh = MeshBuilder.CreateBox(name, { size, faceUV }, scene);
    mesh.convertToFlatShadedMesh();

    const normals: Vector3[] = [
        new Vector3(0, 0, 1),
        new Vector3(0, 0, -1),
        new Vector3(1, 0, 0),
        new Vector3(-1, 0, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, -1, 0),
    ];
    const faces: DieFace[] = normals.map((normal, idx) => ({ normal, value: idx + 1 }));
    return { mesh, faces };
}

const DICE_COLORS: Record<DieType, Color3> = {
    d4: new Color3(0.95, 0.3, 0.3),
    d6: new Color3(0.3, 0.7, 0.95),
    d8: new Color3(0.4, 0.9, 0.4),
    d12: new Color3(0.7, 0.4, 0.95),
    d20: new Color3(0.95, 0.5, 0.85),
};

const NUMBER_COLOR = new Color3(1, 1, 1);
const CELL_SIZE = 128;
const FONT_SCALE: Record<DieType, number> = {
    d4: 0.36,
    d6: 0.66,
    d8: 0.36,
    d12: 0.36,
    d20: 0.27,
};

function buildNumbersAtlas(scene: Scene, type: DieType, sides: number): DynamicTexture {
    const { cols, rows } = atlasGrid(sides);
    const width = cols * CELL_SIZE;
    const height = rows * CELL_SIZE;
    const tex = new DynamicTexture(`dice_atlas_${type}`, { width, height }, scene, false);
    const ctx = tex.getContext() as unknown as CanvasRenderingContext2D;
    const bg = DICE_COLORS[type];
    const bgHex = bg.toHexString();
    const fgHex = NUMBER_COLOR.toHexString();
    for (let i = 0; i < sides; i++) {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = col * CELL_SIZE;
        const y = row * CELL_SIZE;
        ctx.fillStyle = bgHex;
        ctx.fillRect(x, y, CELL_SIZE, CELL_SIZE);
        ctx.fillStyle = fgHex;
        ctx.font = `bold ${Math.round(CELL_SIZE * FONT_SCALE[type])}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${i + 1}`, x + CELL_SIZE / 2, y + CELL_SIZE / 2 + 2);
    }
    tex.update(false);
    return tex;
}

export function buildDieGeometry(
    scene: Scene,
    type: DieType,
    radius: number,
    name = `die_${type}`,
): { mesh: Mesh; faces: DieFace[] } {
    const sides = DICE_SIDES[type];
    if (type === 'd6') {
        return buildBoxDie(scene, radius, sides, name);
    }
    return buildCustomPolyhedron(scene, type, radius, name);
}

export function buildDieMesh(
    scene: Scene,
    type: DieType,
    radius: number,
    name = `die_${type}`,
): { mesh: Mesh; faces: DieFace[]; material: StandardMaterial; texture: DynamicTexture } {
    const { mesh, faces } = buildDieGeometry(scene, type, radius, name);
    const sides = DICE_SIDES[type];
    const texture = buildNumbersAtlas(scene, type, sides);
    texture.hasAlpha = false;

    const material = new StandardMaterial(`${name}_mat`, scene);
    material.diffuseTexture = texture;
    material.diffuseTexture.level = 1.0;
    material.specularColor = new Color3(0.3, 0.3, 0.3);
    material.specularPower = 32;
    material.backFaceCulling = true;
    mesh.material = material;

    return { mesh, faces, material, texture };
}

export function findUpFaceIndex(faces: DieFace[], rotation: Quaternion, upDirection: Vector3 = Vector3.Up()): number {
    let bestIdx = 0;
    let bestDot = -Infinity;
    const rotated = new Vector3();
    for (let i = 0; i < faces.length; i++) {
        faces[i].normal.rotateByQuaternionToRef(rotation, rotated);
        const dot = Vector3.Dot(rotated, upDirection);
        if (dot > bestDot) {
            bestDot = dot;
            bestIdx = i;
        }
    }
    return bestIdx;
}

export function rotationAligningFaceUp(
    faces: DieFace[],
    faceIndex: number,
    targetDirection: Vector3 = Vector3.Up(),
): Quaternion {
    const localNormal = faces[faceIndex].normal;
    const align = new Quaternion();
    Quaternion.FromUnitVectorsToRef(localNormal, targetDirection, align);
    const randomSpin = Quaternion.FromEulerAngles(0, Math.random() * Math.PI * 2, 0);
    return randomSpin.multiply(align);
}

export function isD4(type: DieType): boolean {
    return type === 'd4';
}

export function getResultFaceIndex(faces: DieFace[], rotation: Quaternion, type: DieType): number {
    if (isD4(type)) {
        return findUpFaceIndex(faces, rotation, Vector3.Down());
    }
    return findUpFaceIndex(faces, rotation);
}

export function getResultRotation(faces: DieFace[], faceIndex: number, type: DieType): Quaternion {
    if (isD4(type)) {
        return rotationAligningFaceUp(faces, faceIndex, Vector3.Down());
    }
    return rotationAligningFaceUp(faces, faceIndex);
}

export const DICE_SIDES: Record<DieType, number> = {
    d4: 4,
    d6: 6,
    d8: 8,
    d12: 12,
    d20: 20,
};

export const ALL_DICE_TYPES: DieType[] = ['d4', 'd6', 'd8', 'd12', 'd20'];

/** Standard die radius (distance from center to face) used by all roll modes. */
export const DIE_RADIUS = 0.05;
