import {
    Color3,
    Color4,
    HemisphericLight,
    Mesh,
    MeshBuilder,
    Observer,
    PointerEventTypes,
    Quaternion,
    Scene,
    StandardMaterial,
    TransformNode,
    Vector3,
    type PointerInfo,
} from '@babylonjs/core';
import '@babylonjs/core/Physics/joinedPhysicsEngineComponent';
import { PhysicsAggregate } from '@babylonjs/core/Physics/v2/physicsAggregate';
import { PhysicsShapeType } from '@babylonjs/core/Physics/v2/IPhysicsEnginePlugin';
import '@babylonjs/core/Meshes/Builders/boxBuilder';
import type { WebXRInputSource } from '@babylonjs/core/XR/webXRInputSource';

import { TextManager } from '../text/textRenderer';
import type { CreateUiButtonResult } from '../core/uiButton';
import {
    DisposableStack,
    createBackButton,
    createPanelButton,
    createPanelRoot,
    getGoBackCallback,
    getMetadata,
    initPanelText,
    saveAndTransparentClearColor,
    UI_LAYOUT,
} from '../core';
import {
    ALL_DICE_TYPES,
    DICE_SIDES,
    DIE_RADIUS,
    type DieFace,
    type DieType,
    buildDieMesh,
    getResultFaceIndex,
    getResultRotation,
} from './diceMeshes';
import { createDieAggregate, DEFAULT_GRAVITY, getHavokPlugin } from './dicePhysics';

type RollMode = 'simple' | 'physics' | 'manual';

const MODE_LABELS: Record<RollMode, string> = {
    simple: 'Mode: Simple',
    physics: 'Mode: Physics',
    manual: 'Mode: Manual',
};

const MODE_ORDER: RollMode[] = ['simple', 'physics', 'manual'];

interface ActiveDie {
    mesh: Mesh;
    faces: DieFace[];
    aggregate?: PhysicsAggregate;
}

const SIMPLE_ANIMATION_SECONDS = 0.5;
const PHYSICS_SETTLE_TIMEOUT_SECONDS = 5;
const PHYSICS_SETTLE_LINEAR_EPS = 0.05;
const PHYSICS_SETTLE_ANGULAR_EPS = 0.1;
const PHYSICS_SETTLE_CONSECUTIVE_FRAMES = 20;

const TRAY_WIDTH = 0.5;
const TRAY_DEPTH = 0.5;
const TRAY_WALL_HEIGHT = 0.18;
const TRAY_FLOOR_THICKNESS = 0.02;
const TRAY_WALL_THICKNESS = 0.015;

const MANUAL_THROW_VEL_SCALE = 4.0;
const MANUAL_THROW_ANG_SCALE = 6.0;

const COLOR_BG_DARK = '#1a1f2eee';
const COLOR_BG_SELECTED = '#3a5a8aee';
const COLOR_BG_MODE = '#2a3a4aee';
const COLOR_BG_ROLL = '#1a4a2aee';
const COLOR_BORDER = '#50a0ff44';
const COLOR_BORDER_SELECTED = '#a0d8ff88';
const COLOR_BORDER_MODE_ACTIVE = '#ffd06088';
const COLOR_BORDER_ROLL = '#50ff8088';
const COLOR_TRAY = '#2a2a3a';

export class DiceRollerDemo {
    private _scene: Scene;
    private _cleanup = new DisposableStack();
    private _disposed = false;
    private _prevClearColor: Color4;

    private _panelRoot: TransformNode;
    private _trayRoot: TransformNode;

    private _textManager: TextManager | null = null;
    private _detachText: (() => void) | null = null;

    private readonly _typeButtons = new Map<DieType, CreateUiButtonResult>();
    private _modeBtn!: CreateUiButtonResult;
    private _rollBtn!: CreateUiButtonResult;
    private _backBtn!: CreateUiButtonResult;

    private _selectedType: DieType = 'd6';
    private _mode: RollMode = 'simple';

    private _activeDie: ActiveDie | null = null;
    private _simpleAnimObserver: Observer<Scene> | null = null;
    private _physicsSettleObserver: Observer<Scene> | null = null;
    private _physicsSettleElapsed = 0;
    private _physicsSettleLowVelocityFrames = 0;

    private _statusText = 'Tap Roll to begin';
    private _resultText = '';
    private _rolling = false;

    private _trayAggregates: PhysicsAggregate[] = [];
    private _physicsReady = false;
    private _physicsLoading = false;

    private _manualFrameObserver: Observer<Scene> | null = null;
    private _manualGrabbed: WebXRInputSource | null = null;
    private _manualGrabOffset = Vector3.Zero();
    private _manualDieThrown = false;
    private readonly _manualVelocities = new Map<string, Vector3>();
    private readonly _manualPrevPositions = new Map<string, Vector3>();
    private _manualPointerObserver: Observer<PointerInfo> | null = null;

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = saveAndTransparentClearColor(scene);

        this._panelRoot = createPanelRoot(scene, 'dice_panel_root', this._cleanup);
        this._trayRoot = new TransformNode('dice_tray_root', scene);
        this._cleanup.add(this._trayRoot);

        const light = new HemisphericLight('dice_light', new Vector3(0.4, 1, 0.3), scene);
        light.intensity = 1.0;
        light.diffuse = new Color3(1, 1, 1);
        light.groundColor = new Color3(0.4, 0.4, 0.45);
        this._cleanup.add(light);

        this._buildTypeButtons();
        this._buildModeButton();
        this._buildRollButton();

        this._backBtn = createBackButton({
            scene,
            cleanup: this._cleanup,
            parent: this._panelRoot,
            position: new Vector3(0, -0.34, 0),
            onGoBack: () => {
                const goBack = getGoBackCallback(this._scene);
                if (goBack) goBack();
            },
            namePrefix: 'dice',
        });

        this._positionTray();

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

    private _buildTypeButtons(): void {
        const btnWidth = 0.1;
        const gap = 0.015;
        const count = ALL_DICE_TYPES.length;
        const total = count * btnWidth + (count - 1) * gap;
        const startX = -total / 2 + btnWidth / 2;
        const rowY = 0.18;

        for (let i = 0; i < count; i++) {
            const type = ALL_DICE_TYPES[i];
            const x = startX + i * (btnWidth + gap);
            const selected = type === this._selectedType;
            const btn = createPanelButton({
                scene: this._scene,
                cleanup: this._cleanup,
                namePrefix: 'dice',
                label: type,
                width: btnWidth,
                height: 0.07,
                position: new Vector3(x, rowY, 0),
                parent: this._panelRoot,
                bgColor: selected ? COLOR_BG_SELECTED : COLOR_BG_DARK,
                borderColor: selected ? COLOR_BORDER_SELECTED : COLOR_BORDER,
                onClick: () => this._selectType(type),
            });
            this._typeButtons.set(type, btn);
        }
    }

    private _buildModeButton(): void {
        this._modeBtn = createPanelButton({
            scene: this._scene,
            cleanup: this._cleanup,
            namePrefix: 'dice',
            label: 'mode',
            width: 0.34,
            height: 0.07,
            position: new Vector3(0, 0.06, 0),
            parent: this._panelRoot,
            bgColor: COLOR_BG_MODE,
            borderColor: COLOR_BORDER_MODE_ACTIVE,
            onClick: () => this._toggleMode(),
        });
    }

    private _buildRollButton(): void {
        this._rollBtn = createPanelButton({
            scene: this._scene,
            cleanup: this._cleanup,
            namePrefix: 'dice',
            label: 'roll',
            width: 0.3,
            height: 0.09,
            position: new Vector3(0, -0.06, 0),
            parent: this._panelRoot,
            bgColor: COLOR_BG_ROLL,
            borderColor: COLOR_BORDER_ROLL,
            onClick: () => {
                void this._roll();
            },
        });
    }

    private _selectType(type: DieType): void {
        if (this._rolling) return;
        if (this._selectedType === type) return;
        this._selectedType = type;
        for (const [t, btn] of this._typeButtons) {
            btn.rect.background = t === type ? COLOR_BG_SELECTED : COLOR_BG_DARK;
            btn.rect.color = t === type ? COLOR_BORDER_SELECTED : COLOR_BORDER;
        }
        this._removeActiveDie();
        this._resultText = '';
        this._statusText = `Selected ${type}`;
        this._rebuildText();
    }

    private _toggleMode(): void {
        if (this._rolling) return;
        const idx = MODE_ORDER.indexOf(this._mode);
        this._mode = MODE_ORDER[(idx + 1) % MODE_ORDER.length];

        this._removeActiveDie();
        this._teardownManualGrab();
        this._resultText = '';

        if (this._mode === 'simple') {
            this._disableTrayPhysics();
            this._statusText = 'Simple RNG mode';
        } else if (this._mode === 'physics') {
            this._statusText = 'Loading physics...';
            void this._enableTrayPhysics();
        } else {
            this._statusText = 'Loading manual mode...';
            void this._enableManualMode();
        }
        this._rebuildText();
    }

    private async _enableTrayPhysics(): Promise<void> {
        if (this._physicsReady || this._physicsLoading) return;
        this._physicsLoading = true;
        try {
            const plugin = await getHavokPlugin();
            if (this._disposed) return;
            if (!this._scene.isPhysicsEnabled()) {
                this._scene.enablePhysics(DEFAULT_GRAVITY, plugin);
            }
            this._buildPhysicsTray();
            this._physicsReady = true;
            this._statusText = 'Physics mode ready';
        } catch (err) {
            console.error('[DiceRoller] failed to enable physics', err);
            this._statusText = 'Physics unavailable';
        } finally {
            this._physicsLoading = false;
            this._rebuildText();
        }
    }

    private _disableTrayPhysics(): void {
        for (const agg of this._trayAggregates) agg.dispose();
        this._trayAggregates = [];
        const trayMeshes = this._trayRoot.getChildMeshes() as Mesh[];
        for (const m of trayMeshes) m.dispose();
        this._physicsReady = false;
    }

    private _positionTray(): void {
        this._trayRoot.position = new Vector3(
            UI_LAYOUT.panelPosition.x,
            UI_LAYOUT.panelPosition.y - 0.5,
            UI_LAYOUT.panelPosition.z + 0.25,
        );
    }

    private _buildPhysicsTray(): void {
        const trayMat = new StandardMaterial('dice_tray_mat', this._scene);
        trayMat.diffuseColor = Color3.FromHexString(COLOR_TRAY);
        trayMat.specularColor = new Color3(0.1, 0.1, 0.1);
        trayMat.alpha = 0.55;
        trayMat.backFaceCulling = false;
        this._cleanup.add(trayMat);

        const makeBox = (name: string, w: number, h: number, d: number, pos: Vector3): Mesh => {
            const mesh = MeshBuilder.CreateBox(name, { width: w, height: h, depth: d }, this._scene);
            mesh.material = trayMat;
            mesh.parent = this._trayRoot;
            mesh.position = pos;
            mesh.isPickable = false;
            this._cleanup.add(mesh);
            return mesh;
        };

        const floor = makeBox(
            'dice_tray_floor',
            TRAY_WIDTH,
            TRAY_FLOOR_THICKNESS,
            TRAY_DEPTH,
            new Vector3(0, -TRAY_FLOOR_THICKNESS / 2, 0),
        );
        const wallFar = makeBox(
            'dice_tray_wall_far',
            TRAY_WIDTH + TRAY_WALL_THICKNESS * 2,
            TRAY_WALL_HEIGHT,
            TRAY_WALL_THICKNESS,
            new Vector3(0, TRAY_WALL_HEIGHT / 2, -TRAY_DEPTH / 2 - TRAY_WALL_THICKNESS / 2),
        );
        const wallNear = makeBox(
            'dice_tray_wall_near',
            TRAY_WIDTH + TRAY_WALL_THICKNESS * 2,
            TRAY_WALL_HEIGHT,
            TRAY_WALL_THICKNESS,
            new Vector3(0, TRAY_WALL_HEIGHT / 2, TRAY_DEPTH / 2 + TRAY_WALL_THICKNESS / 2),
        );
        const wallLeft = makeBox(
            'dice_tray_wall_left',
            TRAY_WALL_THICKNESS,
            TRAY_WALL_HEIGHT,
            TRAY_DEPTH,
            new Vector3(-TRAY_WIDTH / 2 - TRAY_WALL_THICKNESS / 2, TRAY_WALL_HEIGHT / 2, 0),
        );
        const wallRight = makeBox(
            'dice_tray_wall_right',
            TRAY_WALL_THICKNESS,
            TRAY_WALL_HEIGHT,
            TRAY_DEPTH,
            new Vector3(TRAY_WIDTH / 2 + TRAY_WALL_THICKNESS / 2, TRAY_WALL_HEIGHT / 2, 0),
        );

        for (const mesh of [floor, wallFar, wallNear, wallLeft, wallRight]) {
            const agg = new PhysicsAggregate(
                mesh,
                PhysicsShapeType.BOX,
                { mass: 0, restitution: 0.2, friction: 0.6 },
                this._scene,
            );
            this._trayAggregates.push(agg);
            this._cleanup.register(() => agg.dispose());
        }
    }

    private async _roll(): Promise<void> {
        if (this._rolling) return;
        if ((this._mode === 'physics' || this._mode === 'manual') && !this._physicsReady) {
            if (this._physicsLoading) return;
            if (this._mode === 'manual') {
                await this._enableManualMode();
            } else {
                await this._enableTrayPhysics();
            }
            if (!this._physicsReady || this._disposed) return;
        }

        this._rolling = true;
        this._removeActiveDie();
        this._resultText = '';
        this._manualDieThrown = false;
        this._manualGrabbed = null;

        if (this._mode === 'simple') {
            this._statusText = 'Rolling...';
            const sides = DICE_SIDES[this._selectedType];
            const result = Math.floor(Math.random() * sides) + 1;
            this._runSimpleRoll(result);
        } else if (this._mode === 'physics') {
            this._statusText = 'Rolling...';
            this._runPhysicsRoll();
        } else {
            this._statusText = 'Grab and throw the die';
            this._runManualRoll();
            this._rolling = false;
        }
        this._rebuildText();
    }

    private _runSimpleRoll(targetValue: number): void {
        const built = buildDieMesh(this._scene, this._selectedType, DIE_RADIUS);
        const { mesh, faces } = built;
        this._cleanup.add(mesh);
        this._cleanup.add(built.material);
        this._cleanup.add(built.texture);

        mesh.parent = this._panelRoot;
        mesh.position = new Vector3(0, -0.2, -0.05);
        mesh.rotationQuaternion = Quaternion.Random();

        const targetFaceIdx = faces.findIndex((f) => f.value === targetValue);
        const safeFaceIdx = targetFaceIdx >= 0 ? targetFaceIdx : 0;
        const finalRotation = getResultRotation(faces, safeFaceIdx, this._selectedType);

        const startRot = mesh.rotationQuaternion!.clone();
        const startTime = performance.now();
        const durationMs = SIMPLE_ANIMATION_SECONDS * 1000;

        this._activeDie = { mesh, faces };

        const observer = this._scene.onBeforeRenderObservable.add(() => {
            if (this._disposed) return;
            const elapsed = performance.now() - startTime;
            const t = Math.min(elapsed / durationMs, 1);
            const eased = 1 - Math.pow(1 - t, 3);

            const wobble = (1 - t) * 2.0;
            const tempQuat = Quaternion.FromEulerAngles(
                Math.sin(elapsed * 0.004) * wobble,
                Math.cos(elapsed * 0.003) * wobble * 1.5,
                Math.sin(elapsed * 0.005) * wobble,
            );
            const slerped = new Quaternion();
            Quaternion.SlerpToRef(startRot, finalRotation, eased, slerped);
            mesh.rotationQuaternion = tempQuat.multiply(slerped);

            if (t >= 1) {
                mesh.rotationQuaternion = finalRotation;
                this._finishSimpleRoll(targetValue);
            }
        });
        this._simpleAnimObserver = observer;
        this._cleanup.register(() => this._scene.onBeforeRenderObservable.remove(observer));
    }

    private _finishSimpleRoll(result: number): void {
        if (this._simpleAnimObserver) {
            this._scene.onBeforeRenderObservable.remove(this._simpleAnimObserver);
            this._simpleAnimObserver = null;
        }
        this._rolling = false;
        this._resultText = `Result: ${result}`;
        this._statusText = `Rolled ${this._selectedType}`;
        this._rebuildText();
    }

    private _runPhysicsRoll(): void {
        const built = buildDieMesh(this._scene, this._selectedType, DIE_RADIUS);
        const { mesh, faces, material } = built;
        this._cleanup.add(mesh);
        this._cleanup.add(material);
        this._cleanup.add(built.texture);

        mesh.parent = this._trayRoot;
        const dropX = (Math.random() - 0.5) * (TRAY_WIDTH * 0.3);
        const dropZ = (Math.random() - 0.5) * (TRAY_DEPTH * 0.3);
        mesh.position = new Vector3(dropX, 0.18, dropZ);
        mesh.rotationQuaternion = Quaternion.FromEulerAngles(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
        );

        const aggregate = createDieAggregate(mesh, this._scene);

        const impulse = new Vector3(
            (Math.random() - 0.5) * 0.05,
            -0.01 - Math.random() * 0.02,
            (Math.random() - 0.5) * 0.05,
        );
        const angularImpulse = new Vector3(
            (Math.random() - 0.5) * 0.012,
            (Math.random() - 0.5) * 0.012,
            (Math.random() - 0.5) * 0.012,
        );
        const worldCenter = mesh.getAbsolutePosition().clone();
        aggregate.body.applyImpulse(impulse, worldCenter);
        aggregate.body.applyAngularImpulse(angularImpulse);

        this._activeDie = { mesh, faces, aggregate };
        this._physicsSettleElapsed = 0;
        this._physicsSettleLowVelocityFrames = 0;

        const observer = this._scene.onBeforeRenderObservable.add(() => {
            if (this._disposed) return;
            this._tickPhysicsSettle();
        });
        this._physicsSettleObserver = observer;
        this._cleanup.register(() => this._scene.onBeforeRenderObservable.remove(observer));
    }

    private _runManualRoll(): void {
        const built = buildDieMesh(this._scene, this._selectedType, DIE_RADIUS);
        const { mesh, faces, material } = built;
        this._cleanup.add(mesh);
        this._cleanup.add(material);
        this._cleanup.add(built.texture);

        mesh.parent = this._trayRoot;
        mesh.position = new Vector3(0, 0.03, 0);
        mesh.rotationQuaternion = Quaternion.FromEulerAngles(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI,
        );
        mesh.isPickable = true;

        const aggregate = createDieAggregate(mesh, this._scene);

        this._activeDie = { mesh, faces, aggregate };
        this._manualDieThrown = false;
        this._manualGrabbed = null;
    }

    private async _enableManualMode(): Promise<void> {
        await this._enableTrayPhysics();
        if (this._disposed || !this._physicsReady) return;
        this._setupManualGrab();
    }

    private _setupManualGrab(): void {
        this._teardownManualGrab();

        const { xr } = getMetadata(this._scene);
        if (!xr) return;

        const frameObs = this._scene.onBeforeRenderObservable.add(() => {
            if (this._disposed) return;
            this._tickManual();
        });
        this._manualFrameObserver = frameObs;
        this._cleanup.register(() => this._scene.onBeforeRenderObservable.remove(frameObs));

        const pointerObs = this._scene.onPointerObservable.add((info) => {
            if (this._disposed) return;
            if (info.type === PointerEventTypes.POINTERDOWN) {
                this._onPointerDown(info);
            } else if (info.type === PointerEventTypes.POINTERUP) {
                this._onPointerUp();
            }
        });
        this._manualPointerObserver = pointerObs;
        this._cleanup.register(() => {
            if (pointerObs) this._scene.onPointerObservable.remove(pointerObs);
        });
    }

    private _onPointerDown(info: PointerInfo): void {
        if (!this._activeDie) return;
        const pickInfo = info.pickInfo;
        if (!pickInfo?.hit || pickInfo.pickedMesh !== this._activeDie.mesh) return;

        const { xr } = getMetadata(this._scene);
        if (!xr) return;

        const rayOrigin = pickInfo.ray?.origin;
        if (!rayOrigin) return;

        let bestCtrl: WebXRInputSource | null = null;
        let bestDist = Infinity;
        for (const ctrl of xr.input.controllers) {
            const ctrlPos = this._getControllerGripPos(ctrl);
            const dist = Vector3.DistanceSquared(ctrlPos, rayOrigin);
            if (dist < bestDist) {
                bestDist = dist;
                bestCtrl = ctrl;
            }
        }
        if (!bestCtrl) return;

        this._manualGrabbed = bestCtrl;
        const ctrlPos = this._getControllerGripPos(bestCtrl);
        const diePos = this._activeDie.mesh.getAbsolutePosition();
        this._manualGrabOffset = diePos.subtract(ctrlPos);
        this._activeDie.aggregate?.dispose();
        this._activeDie.aggregate = undefined;
        this._manualDieThrown = false;
    }

    private _onPointerUp(): void {
        if (!this._manualGrabbed || !this._activeDie) return;
        const ctrl = this._manualGrabbed;
        const vel = this._manualVelocities.get(ctrl.uniqueId) ?? Vector3.Zero();
        const throwVel = vel.scale(MANUAL_THROW_VEL_SCALE);

        const aggregate = createDieAggregate(this._activeDie.mesh, this._scene);
        aggregate.body.setLinearVelocity(throwVel);

        const speed = throwVel.length();
        aggregate.body.setAngularVelocity(
            new Vector3(
                (Math.random() - 0.5) * speed * MANUAL_THROW_ANG_SCALE,
                (Math.random() - 0.5) * speed * MANUAL_THROW_ANG_SCALE,
                (Math.random() - 0.5) * speed * MANUAL_THROW_ANG_SCALE,
            ),
        );

        this._activeDie.aggregate = aggregate;
        this._manualGrabbed = null;
        this._manualDieThrown = true;
        this._rolling = true;
        this._physicsSettleElapsed = 0;
        this._physicsSettleLowVelocityFrames = 0;
    }

    private _getControllerGripPos(ctrl: WebXRInputSource): Vector3 {
        return (ctrl.grip ?? ctrl.pointer).getAbsolutePosition();
    }

    private _teardownManualGrab(): void {
        if (this._manualFrameObserver) {
            this._scene.onBeforeRenderObservable.remove(this._manualFrameObserver);
            this._manualFrameObserver = null;
        }
        if (this._manualPointerObserver) {
            this._scene.onPointerObservable.remove(this._manualPointerObserver);
            this._manualPointerObserver = null;
        }
        this._manualGrabbed = null;
        this._manualVelocities.clear();
        this._manualPrevPositions.clear();
    }

    private _tickManual(): void {
        const { xr } = getMetadata(this._scene);
        if (!xr) return;
        const dt = this._scene.getEngine().getDeltaTime() / 1000;

        for (const ctrl of xr.input.controllers) {
            const pos = this._getControllerGripPos(ctrl);
            const id = ctrl.uniqueId;
            const prev = this._manualPrevPositions.get(id);
            if (prev && dt > 0) {
                const newVel = pos.subtract(prev).scale(1 / dt);
                const oldVel = this._manualVelocities.get(id);
                if (oldVel) {
                    newVel.scaleInPlace(0.3).addInPlace(oldVel.scale(0.7));
                }
                this._manualVelocities.set(id, newVel);
            }
            this._manualPrevPositions.set(id, pos.clone());
        }

        if (this._manualGrabbed && this._activeDie) {
            const pos = this._getControllerGripPos(this._manualGrabbed);
            this._activeDie.mesh.setAbsolutePosition(pos.add(this._manualGrabOffset));
            const gripMesh = this._manualGrabbed.grip ?? this._manualGrabbed.pointer;
            const gripRot = gripMesh.absoluteRotationQuaternion;
            if (gripRot) {
                this._activeDie.mesh.rotationQuaternion = gripRot.clone();
            }
        }

        if (this._activeDie?.aggregate && this._manualDieThrown) {
            this._tickPhysicsSettle();
        }
    }

    private _tickPhysicsSettle(): void {
        if (!this._activeDie?.aggregate) return;
        const engine = this._scene.getEngine();
        const dt = engine.getDeltaTime() / 1000;
        this._physicsSettleElapsed += dt;

        const linVel = this._activeDie.aggregate.body.getLinearVelocity();
        const angVel = this._activeDie.aggregate.body.getAngularVelocity();
        const linMag = linVel.length();
        const angMag = angVel.length();

        const nearRest = linMag < PHYSICS_SETTLE_LINEAR_EPS && angMag < PHYSICS_SETTLE_ANGULAR_EPS;
        if (nearRest) {
            this._physicsSettleLowVelocityFrames++;
        } else {
            this._physicsSettleLowVelocityFrames = 0;
        }

        if (
            this._physicsSettleLowVelocityFrames >= PHYSICS_SETTLE_CONSECUTIVE_FRAMES ||
            this._physicsSettleElapsed > PHYSICS_SETTLE_TIMEOUT_SECONDS
        ) {
            this._finishPhysicsRoll();
        }
    }

    private _finishPhysicsRoll(): void {
        if (this._physicsSettleObserver) {
            this._scene.onBeforeRenderObservable.remove(this._physicsSettleObserver);
            this._physicsSettleObserver = null;
        }
        this._manualDieThrown = false;
        const die = this._activeDie;
        if (!die) return;
        const rotation = die.mesh.rotationQuaternion ?? Quaternion.Identity();
        const upIdx = getResultFaceIndex(die.faces, rotation, this._selectedType);
        const result = die.faces[upIdx].value;
        this._rolling = false;
        this._resultText = `Result: ${result}`;
        this._statusText = `Rolled ${this._selectedType}`;
        this._rebuildText();
    }

    private _removeActiveDie(): void {
        if (this._simpleAnimObserver) {
            this._scene.onBeforeRenderObservable.remove(this._simpleAnimObserver);
            this._simpleAnimObserver = null;
        }
        if (this._physicsSettleObserver) {
            this._scene.onBeforeRenderObservable.remove(this._physicsSettleObserver);
            this._physicsSettleObserver = null;
        }
        this._manualGrabbed = null;
        this._manualDieThrown = false;
        if (this._activeDie) {
            this._activeDie.aggregate?.dispose();
            this._activeDie.mesh.material?.dispose();
            this._activeDie.mesh.dispose();
            this._activeDie = null;
        }
    }

    private _rebuildText(): void {
        if (!this._textManager?.renderer) return;
        this._textManager.renderer.clearParagraphs();

        const { x: px, y: py, z: pz } = UI_LAYOUT.panelPosition;
        const ty = UI_LAYOUT.textYOffset;
        const tz = UI_LAYOUT.textZOffset;

        for (const t of ALL_DICE_TYPES) {
            const btn = this._typeButtons.get(t);
            if (!btn) continue;
            this._textManager.addParagraph(
                t,
                new Vector3(px + btn.plane.position.x, py + btn.plane.position.y + ty, pz + btn.plane.position.z + tz),
                UI_LAYOUT.panel.smallTextScale,
            );
        }

        this._textManager.addParagraph(
            MODE_LABELS[this._mode],
            new Vector3(
                px + this._modeBtn.plane.position.x,
                py + this._modeBtn.plane.position.y + ty,
                pz + this._modeBtn.plane.position.z + tz,
            ),
            UI_LAYOUT.panel.smallTextScale,
        );
        this._textManager.addParagraph(
            'ROLL',
            new Vector3(
                px + this._rollBtn.plane.position.x,
                py + this._rollBtn.plane.position.y + ty,
                pz + this._rollBtn.plane.position.z + tz,
            ),
            UI_LAYOUT.panel.textScale,
        );
        if (this._resultText) {
            this._textManager.addParagraph(
                this._resultText,
                new Vector3(px, py - 0.2 + ty, pz + tz),
                UI_LAYOUT.panel.textScale,
            );
        }
        this._textManager.addParagraph(
            this._statusText,
            new Vector3(px, py - 0.27 + ty, pz + tz),
            UI_LAYOUT.panel.statusTextScale,
        );
        this._textManager.addParagraph(
            'Return to Main Scene',
            new Vector3(
                px + this._backBtn.plane.position.x,
                py + this._backBtn.plane.position.y + ty,
                pz + this._backBtn.plane.position.z + tz,
            ),
            UI_LAYOUT.panel.textScale,
        );
    }

    teardown(): void {
        this._disposed = true;
        this._teardownManualGrab();
        this._removeActiveDie();
        if (this._detachText) {
            this._detachText();
            this._detachText = null;
        }
        this._cleanup.dispose();
        this._scene.clearColor = this._prevClearColor;
    }
}
