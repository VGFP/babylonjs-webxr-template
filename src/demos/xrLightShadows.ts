import {
    Color3,
    Color4,
    DirectionalLight,
    HemisphericLight,
    IShadowLight,
    Material,
    Matrix,
    Mesh,
    MeshBuilder,
    PolygonMeshBuilder,
    Quaternion,
    Scene,
    ShadowGenerator,
    StandardMaterial,
    TransformNode,
    Vector2,
    Vector3,
    WebXRDefaultExperience,
} from '@babylonjs/core';
import '@babylonjs/core/XR/webXRDefaultExperience';
import '@babylonjs/core/XR/features/WebXRPlaneDetector';
import '@babylonjs/core/Collisions';
import '@babylonjs/core/Materials/standardMaterial';

import { ShadowOnlyMaterial } from '@babylonjs/materials';

import { createTextRenderer, addTextParagraph, attachTextRenderer } from '../text/textRenderer';
import { createUiButton } from '../core/uiButton';

interface XrPlaneData {
    id: number;
    polygonDefinition: Vector3[];
    transformationMatrix: Matrix;
    xrPlane: { orientation: string };
    mesh?: Mesh;
}

const BTN_WIDTH = 0.44;
const BTN_HEIGHT = 0.07;
const PANEL_POSITION = new Vector3(0, 1.35, -0.55);
const CORNER_RADIUS = 25;
const BORDER_THICKNESS = 8;
const TEXT_SCALE = 0.028;
const TEXT_Y_OFFSET = -0.005;
const TEXT_Z_OFFSET = -0.005;
const BACK_WIDTH_RATIO = 0.8;
const BACK_HEIGHT_RATIO = 0.85;

export function buildXrLightShadowsDemo(scene: Scene): () => void {
    const prevClearColor = scene.clearColor.clone();
    scene.clearColor = new Color4(0, 0, 0, 0);

    const cleanup: { dispose(): void }[] = [];
    const planeMeshes: Map<number, Mesh> = new Map();
    let detachText: (() => void) | null = null;
    let disposed = false;

    const homeDirectional = scene.getLightByName('directionalLight');
    const homeHemispheric = scene.getLightByName('hemisphericLight');
    if (homeDirectional) homeDirectional.setEnabled(false);
    if (homeHemispheric) homeHemispheric.setEnabled(false);

    const directional = new DirectionalLight('ls_directional', new Vector3(0, -1, 1), scene);
    directional.intensity = 0.7;
    directional.position = new Vector3(0, 2, 0);
    cleanup.push(directional);

    const hemispheric = new HemisphericLight('ls_hemispheric', new Vector3(0, 1, 0), scene);
    hemispheric.intensity = 0.7;
    cleanup.push(hemispheric);

    const shadowGen = new ShadowGenerator(1024, directional as IShadowLight);
    shadowGen.useBlurExponentialShadowMap = true;
    shadowGen.blurKernel = 32;

    const cube = MeshBuilder.CreateBox('ls_cube', { size: 0.5 }, scene);
    cube.position = new Vector3(0, 0.3, 2);
    const cubeMat = new StandardMaterial('ls_cubeMat', scene);
    cubeMat.diffuseColor = new Color3(0.2, 0.6, 1);
    cube.material = cubeMat;
    shadowGen.addShadowCaster(cube);
    cleanup.push(cube);
    cleanup.push(cubeMat);

    const xr = (scene.metadata as Record<string, unknown>)?.xr as WebXRDefaultExperience | undefined;
    if (xr) {
        wirePlaneObservables(scene, xr, directional as IShadowLight, planeMeshes, cleanup);
    }

    const panelRoot = new TransformNode('ls_panel_root', scene);
    panelRoot.position = PANEL_POSITION.clone();
    cleanup.push(panelRoot);

    const goBack = (scene.metadata as Record<string, unknown> | undefined)?.goBack as (() => void) | undefined;
    if (goBack) {
        const btnResult = createUiButton(scene, {
            name: 'ls_back',
            width: BTN_WIDTH * BACK_WIDTH_RATIO,
            height: BTN_HEIGHT * BACK_HEIGHT_RATIO,
            position: new Vector3(0, 0, 0),
            parent: panelRoot,
            bgColor: '#2a1a0aee',
            borderColor: '#ffb45044',
            cornerRadius: CORNER_RADIUS,
            borderThickness: BORDER_THICKNESS,
            onClick: () => goBack(),
        });
        cleanup.push(btnResult.texture);
        cleanup.push(btnResult.plane);

        createTextRenderer(scene.getEngine())
            .then((tr) => {
                if (disposed) {
                    tr.dispose();
                    return;
                }
                addTextParagraph(
                    tr,
                    'Return to Main Scene',
                    new Vector3(
                        PANEL_POSITION.x,
                        PANEL_POSITION.y + TEXT_Y_OFFSET,
                        PANEL_POSITION.z + TEXT_Z_OFFSET,
                    ),
                    TEXT_SCALE,
                );
                detachText = attachTextRenderer(scene, tr);
                cleanup.push(tr);
            });
    }

    return () => {
        disposed = true;
        if (detachText) {
            detachText();
            detachText = null;
        }
        planeMeshes.forEach((mesh) => mesh.dispose());
        planeMeshes.clear();
        shadowGen.dispose();
        for (const item of cleanup) item.dispose();
        if (homeDirectional) homeDirectional.setEnabled(true);
        if (homeHemispheric) homeHemispheric.setEnabled(true);
        scene.clearColor = prevClearColor;
    };
}

function buildPlanePolygon(scene: Scene, plane: XrPlaneData, mat?: Material): Mesh {
    plane.polygonDefinition.push(plane.polygonDefinition[0]);
    const builder = new PolygonMeshBuilder(
        plane.xrPlane.orientation,
        plane.polygonDefinition.map((p) => new Vector2(p.x, p.z)),
        scene,
    );
    const polygon = builder.build(false, 0.01);
    polygon.createNormals(false);
    if (mat) {
        polygon.material = mat;
    }
    polygon.rotationQuaternion = new Quaternion();
    polygon.checkCollisions = true;
    polygon.receiveShadows = true;
    plane.transformationMatrix.decompose(polygon.scaling, polygon.rotationQuaternion, polygon.position);
    return polygon;
}

function applyShadowMaterialFacing(
    mesh: Mesh,
    shadowMat: ShadowOnlyMaterial,
    light: IShadowLight,
): void {
    let lightDirection: Vector3 | null = null;
    if ((light as any).direction) {
        lightDirection = ((light as any).direction as Vector3).clone().normalize();
    } else if ((light as any).getAbsolutePosition) {
        const lightPosition = (light as any).getAbsolutePosition() as Vector3;
        const meshCenter = mesh.getBoundingInfo().boundingBox.centerWorld;
        lightDirection = meshCenter.subtract(lightPosition).normalize();
    }
    if (lightDirection) {
        const normal = Vector3.TransformNormal(Vector3.Up(), mesh.getWorldMatrix()).normalize();
        const facing = Vector3.Dot(normal, lightDirection) < 0;
        shadowMat.activeLight = light;
        shadowMat.alpha = facing ? 0.4 : 0;
    }
}

function wirePlaneObservables(
    scene: Scene,
    xr: WebXRDefaultExperience,
    activeLight: IShadowLight,
    planeMeshes: Map<number, Mesh>,
    cleanup: { dispose(): void }[],
): void {
    const featuresManager = xr.baseExperience.featuresManager;
    let planeDetector: any;
    try {
        planeDetector = featuresManager.enableFeature('xr-plane-detection', 'latest');
    } catch (e) {
        console.warn('Plane detection not available:', e);
        return;
    }

    const addedObs = planeDetector.onPlaneAddedObservable.add((plane: XrPlaneData) => {
        const shadowMat = new ShadowOnlyMaterial('ls_shadowMat_' + plane.id, scene);
        shadowMat.alpha = 0.4;
        shadowMat.shadowColor = new Color3(0, 0, 0);
        shadowMat.disableDepthWrite = true;

        const poly = buildPlanePolygon(scene, plane, shadowMat);
        applyShadowMaterialFacing(poly, shadowMat, activeLight);

        planeMeshes.set(plane.id, poly);
    });

    const updatedObs = planeDetector.onPlaneUpdatedObservable.add((plane: XrPlaneData) => {
        const existingMesh = planeMeshes.get(plane.id);
        const mat = existingMesh?.material;
        if (existingMesh) {
            existingMesh.dispose(false, false);
        }
        if (plane.polygonDefinition.some((p) => !p)) return;

        const poly = buildPlanePolygon(scene, plane, mat!);

        if (mat instanceof ShadowOnlyMaterial) {
            applyShadowMaterialFacing(poly, mat, activeLight);
        }

        planeMeshes.set(plane.id, poly);
    });

    const removedObs = planeDetector.onPlaneRemovedObservable.add((plane: XrPlaneData) => {
        const mesh = planeMeshes.get(plane.id);
        if (mesh) {
            mesh.dispose();
            planeMeshes.delete(plane.id);
        }
    });

    const sessionObs = xr.baseExperience.sessionManager.onXRSessionInit.add(() => {
        planeMeshes.forEach((m) => m.dispose());
        planeMeshes.clear();
    });

    cleanup.push({
        dispose: () => {
            planeDetector.onPlaneAddedObservable.remove(addedObs);
            planeDetector.onPlaneUpdatedObservable.remove(updatedObs);
            planeDetector.onPlaneRemovedObservable.remove(removedObs);
            xr.baseExperience.sessionManager.onXRSessionInit.remove(sessionObs);
        },
    });
}
