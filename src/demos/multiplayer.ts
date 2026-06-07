import {
    Color3,
    Color4,
    Mesh,
    MeshBuilder,
    Observer,
    Quaternion,
    Scene,
    StandardMaterial,
    TargetCamera,
    TransformNode,
    Vector3,
} from '@babylonjs/core';
import { Client, type Room } from '@colyseus/sdk';
import { getStateCallbacks } from '@colyseus/sdk/serializer/SchemaSerializer';

import { AdvancedDynamicTexture } from '@babylonjs/gui/2D/advancedDynamicTexture';
import { InputText } from '@babylonjs/gui/2D/controls/inputText';
import { VirtualKeyboard } from '@babylonjs/gui/2D/controls/virtualKeyboard';

import { TextManager } from '../text/textRenderer';
import { type CreateUiButtonResult } from '../core/uiButton';
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
    formatError,
    readClipboardText,
    readStorage,
    writeStorage,
    STORAGE_KEYS,
} from '../core';
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
    hrx: number;
    hry: number;
    hrz: number;
    lrx: number;
    lry: number;
    lrz: number;
    rrx: number;
    rry: number;
    rrz: number;
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
    targetHead: Vector3;
    targetLeftHand: Vector3;
    targetRightHand: Vector3;
    targetHeadRot: Quaternion;
    targetLeftHandRot: Quaternion;
    targetRightHandRot: Quaternion;
}

interface RoomSummary {
    roomId: string;
    name: string;
    clients: number;
    maxClients: number;
    metadata?: { name?: string; createdAt?: number };
}

type MpState = 'disconnected' | 'connected' | 'in-room';

const UPDATE_INTERVAL_MS = 50;
const LERP_SPEED = 20;
const SNAP_DISTANCE = 0.5;
const HEAD_DIAMETER = 0.12;
const HAND_SIZE = 0.035;
const MAX_ROOM_BUTTONS = 4;
const ROOM_BTN_HEIGHT = 0.055;
const ROOM_BTN_GAP = 0.01;
const ROOM_LIST_START_Y = 0.1;

export class MultiplayerDemo {
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
    private _lastRooms: RoomSummary[] | null = null;
    private _roomOperationInProgress = false;

    constructor(scene: Scene) {
        this._scene = scene;
        this._prevClearColor = saveAndTransparentClearColor(scene);

        this._playerGroup = new TransformNode('mp_players_root', scene);
        this._cleanup.add(this._playerGroup);

        this._panelRoot = createPanelRoot(scene, 'mp_panel_root', this._cleanup);

        const urlInput = this._createUrlInput();
        this._urlInputPlane = urlInput.plane;
        this._urlInputTexture = urlInput.texture;
        this._urlInput = urlInput.input;

        const keyboard = this._createVirtualKeyboard();
        this._keyboardPlane = keyboard.plane;
        this._keyboardTexture = keyboard.texture;
        this._keyboard = keyboard.keyboard;
        this._keyboard.connect(this._urlInput);
        this._urlInput.onBlurObservable.clear();
        this._urlInput.onFocusObservable.add(() => {
            this._keyboard.isVisible = true;
            this._keyboardPlane.setEnabled(true);
        });

        this._pasteBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'mp',
            label: 'Paste',
            width: 0.12,
            height: 0.06,
            position: new Vector3(0.26, 0.12, 0),
            parent: this._panelRoot,
            bgColor: '#1a2a3a',
            borderColor: '#50a0ff44',
            onClick: () => void this._pasteClipboard(),
        });
        this._connectBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'mp',
            label: 'Connect',
            width: 0.22,
            height: 0.07,
            position: new Vector3(0, 0.03, 0),
            parent: this._panelRoot,
            bgColor: '#1a2a4a',
            borderColor: '#5070ff44',
            onClick: () => {
                this._dismissKeyboard();
                void this._connect();
            },
        });
        this._leaveRoomBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'mp',
            label: 'Leave Room',
            width: 0.3,
            height: 0.07,
            position: new Vector3(0, 0.06, 0),
            parent: this._panelRoot,
            bgColor: '#3a1a1a',
            borderColor: '#ff505044',
            onClick: () => void this._leaveRoom(),
        });

        const actionY = -0.05;
        this._createRoomBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'mp',
            label: 'Create Room',
            width: 0.14,
            height: 0.06,
            position: new Vector3(-0.16, actionY, 0),
            parent: this._panelRoot,
            bgColor: '#1a3a2a',
            borderColor: '#50ff8044',
            onClick: () => void this._createRoom(),
        });
        this._refreshBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'mp',
            label: 'Refresh',
            width: 0.14,
            height: 0.06,
            position: new Vector3(0, actionY, 0),
            parent: this._panelRoot,
            bgColor: '#222226',
            borderColor: '#ffffff22',
            onClick: () => void this._refreshRooms(),
        });
        this._disconnectBtn = createPanelButton({
            scene,
            cleanup: this._cleanup,
            namePrefix: 'mp',
            label: 'Disconnect',
            width: 0.14,
            height: 0.06,
            position: new Vector3(0.16, actionY, 0),
            parent: this._panelRoot,
            bgColor: '#3a1a1a',
            borderColor: '#ff505044',
            onClick: () => void this._disconnect(),
        });

        this._backBtn = createBackButton({
            scene,
            cleanup: this._cleanup,
            parent: this._panelRoot,
            position: new Vector3(0, -0.14, 0),
            onGoBack: () => {
                this._dismissKeyboard();
                const goBack = getGoBackCallback(this._scene);
                if (goBack) goBack();
            },
            namePrefix: 'mp',
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

        this._applyState('disconnected');
    }

    private _createUrlInput(): { plane: Mesh; texture: AdvancedDynamicTexture; input: InputText } {
        const plane = MeshBuilder.CreatePlane('mp_url_input', { width: 0.36, height: 0.06 }, this._scene);
        plane.parent = this._panelRoot;
        plane.position = new Vector3(0, 0.12, 0);
        this._cleanup.add(plane);

        const texture = AdvancedDynamicTexture.CreateForMesh(plane, 512, 80);
        texture.background = '#222226';

        const input = new InputText('mp_url');
        input.width = '100%';
        input.height = '100%';
        input.color = '#e6e6e6';
        input.background = '#222226';
        input.placeholderText = 'Enter server URL...';
        input.placeholderColor = '#999999';
        input.focusedBackground = '#2a2a30';
        input.fontSize = 22;
        input.thickness = 1;
        input.color = '#ffffff33';
        texture.addControl(input);

        const saved = readStorage(STORAGE_KEYS.mpServerUrl);
        if (saved) input.text = saved;

        return { plane, texture, input };
    }

    private _createVirtualKeyboard(): {
        plane: Mesh;
        texture: AdvancedDynamicTexture;
        keyboard: VirtualKeyboard;
    } {
        const plane = MeshBuilder.CreatePlane('mp_keyboard', { width: 0.64, height: 0.28 }, this._scene);
        plane.parent = this._panelRoot;
        plane.position = new Vector3(0, -0.36, 0.005);
        plane.setEnabled(false);
        this._cleanup.add(plane);

        const texture = AdvancedDynamicTexture.CreateForMesh(plane, 740, 320);
        texture.background = '#111116ee';

        const keyboard = new VirtualKeyboard('mp_keyboard');
        keyboard.addKeysRow([':', '-', '_', '.', '~', '@']);
        keyboard.addKeysRow(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '\u2190']);
        keyboard.addKeysRow(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
        keyboard.addKeysRow(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\u21B5']);
        keyboard.addKeysRow(['\u21E7', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']);
        keyboard.addKeysRow([' '], [{ width: '200px' }]);
        keyboard.defaultButtonWidth = '60px';
        keyboard.defaultButtonHeight = '50px';
        keyboard.defaultButtonColor = '#DDD';
        keyboard.defaultButtonBackground = '#2a2a32';
        keyboard.shiftButtonColor = '#7799FF';
        keyboard.width = '100%';
        texture.addControl(keyboard);

        return { plane, texture, keyboard };
    }

    private _dismissKeyboard(): void {
        this._keyboard.isVisible = false;
        this._keyboardPlane.setEnabled(false);
    }

    private _rebuildText(): void {
        if (!this._textManager?.renderer) return;
        this._textManager.renderer.clearParagraphs();

        const { x: px, y: py, z: pz } = UI_LAYOUT.panelPosition;
        const ty = UI_LAYOUT.textYOffset;
        const tz = UI_LAYOUT.textZOffset;

        if (this._state === 'disconnected') {
            if (this._pasteBtn.plane.isEnabled()) {
                this._textManager.addParagraph(
                    'Paste',
                    new Vector3(px + 0.26, py + 0.12 + ty, pz + tz),
                    UI_LAYOUT.panel.smallTextScale,
                );
            }
            if (this._connectBtn.plane.isEnabled()) {
                this._textManager.addParagraph(
                    'Connect',
                    new Vector3(px, py + 0.03 + ty, pz + tz),
                    UI_LAYOUT.panel.textScale,
                );
            }
            this._textManager.addParagraph(
                this._statusText,
                new Vector3(px, py - 0.05 + ty, pz + tz),
                UI_LAYOUT.panel.statusTextScale,
            );
        } else if (this._state === 'connected') {
            this._textManager.addParagraph(
                this._statusText,
                new Vector3(px, py + 0.18 + ty, pz + tz),
                UI_LAYOUT.panel.statusTextScale,
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
                    UI_LAYOUT.panel.smallTextScale,
                );
            }

            const actionY = -0.05;
            this._textManager.addParagraph(
                'Create',
                new Vector3(px - 0.16, py + actionY + ty, pz + tz),
                UI_LAYOUT.panel.smallTextScale,
            );
            this._textManager.addParagraph(
                'Refresh',
                new Vector3(px, py + actionY + ty, pz + tz),
                UI_LAYOUT.panel.smallTextScale,
            );
            this._textManager.addParagraph(
                'Disconnect',
                new Vector3(px + 0.16, py + actionY + ty, pz + tz),
                UI_LAYOUT.panel.smallTextScale,
            );
        } else if (this._state === 'in-room') {
            if (this._leaveRoomBtn.plane.isEnabled()) {
                this._textManager.addParagraph(
                    'Leave Room',
                    new Vector3(px, py + 0.06 + ty, pz + tz),
                    UI_LAYOUT.panel.textScale,
                );
            }
            this._textManager.addParagraph(
                this._statusText,
                new Vector3(px, py - 0.02 + ty, pz + tz),
                UI_LAYOUT.panel.statusTextScale,
            );
        }

        if (this._backBtn.plane.isEnabled()) {
            this._textManager.addParagraph(
                'Return to Main Scene',
                new Vector3(px, py - 0.14 + ty, pz + tz),
                UI_LAYOUT.panel.textScale,
            );
        }
    }

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

    private _getXr(): WebXRDefaultExperience | null {
        return getMetadata(this._scene).xr ?? null;
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
        const text = await readClipboardText();
        if (text !== null) {
            this._urlInput.text = text;
            this._setStatus('Pasted from clipboard');
        } else {
            this._setStatus('Clipboard not available');
        }
    }

    private async _connect(): Promise<void> {
        const endpoint = this._parseEndpoint(this._urlInput.text);
        if (!endpoint) {
            this._setStatus('Please enter a server URL');
            return;
        }

        writeStorage(STORAGE_KEYS.mpServerUrl, this._urlInput.text);

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
            this._setStatus(`Connection failed: ${formatError(err)}`);
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
            this._setStatus(`Failed to list rooms: ${formatError(err)}`);
            this._renderRoomList([]);
        }
    }

    private _renderRoomList(rooms: RoomSummary[]): void {
        this._disposeRoomButtons();

        const visibleRooms = rooms.slice(0, MAX_ROOM_BUTTONS);

        for (let i = 0; i < visibleRooms.length; i++) {
            const room = visibleRooms[i];
            const y = ROOM_LIST_START_Y - i * (ROOM_BTN_HEIGHT + ROOM_BTN_GAP);
            const result = createPanelButton({
                scene: this._scene,
                cleanup: this._cleanup,
                namePrefix: 'mp',
                label: '',
                width: UI_LAYOUT.panel.btnWidth,
                height: ROOM_BTN_HEIGHT,
                position: new Vector3(0, y, 0),
                parent: this._panelRoot,
                bgColor: '#1a2a3a',
                borderColor: '#50a0ff33',
                onClick: () => void this._joinRoom(room.roomId),
            });
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
        if (!this._client || this._roomOperationInProgress) return;
        this._roomOperationInProgress = true;
        await this._leaveRoom();
        this._setStatus('Creating room…');
        try {
            const room = await this._client.create<MyRoomState>('my_room');
            await this._onJoined(room);
        } catch (err) {
            this._setStatus(`Failed to create: ${formatError(err)}`);
        } finally {
            this._roomOperationInProgress = false;
        }
    }

    private async _joinRoom(roomId: string): Promise<void> {
        if (!this._client || this._roomOperationInProgress) return;
        this._roomOperationInProgress = true;
        await this._leaveRoom();
        this._setStatus(`Joining ${roomId.slice(0, 6)}…`);
        try {
            const room = await this._client.joinById<MyRoomState>(roomId);
            await this._onJoined(room);
        } catch (err) {
            this._setStatus(`Failed to join: ${formatError(err)}`);
        } finally {
            this._roomOperationInProgress = false;
        }
    }

    private async _onJoined(room: Room<MyRoomState>): Promise<void> {
        this._room = room;
        this._setStatus(`In room ${room.roomId.slice(0, 6)}`);
        this._applyState('in-room');

        room.onLeave((_code: number, reason?: string) => {
            if (this._room !== room) return;
            this._setStatus(`Left room (${reason ?? 'unknown'})`);
            this._cleanupRoom();
        });
        room.onError((code: number, message?: string) => {
            if (this._room !== room) return;
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

    private _createPlayerMaterial(name: string, hexColor: string): StandardMaterial {
        const color = Color3.FromHexString(hexColor || '#ffffff');
        const mat = new StandardMaterial(name, this._scene);
        mat.diffuseColor = color;
        mat.emissiveColor = color.scale(0.4);
        mat.specularColor = new Color3(0.1, 0.1, 0.1);
        return mat;
    }

    private _createPlayerMesh(
        name: string,
        options: { width?: number; height?: number; depth?: number; size?: number },
        mat: StandardMaterial,
    ): Mesh {
        const mesh = MeshBuilder.CreateBox(name, options, this._scene);
        mesh.material = mat;
        mesh.parent = this._playerGroup;
        return mesh;
    }

    private _createNose(sessionId: string, head: Mesh): void {
        const noseMat = new StandardMaterial(`mp_nose_mat_${sessionId}`, this._scene);
        noseMat.emissiveColor = new Color3(1, 1, 1);
        noseMat.diffuseColor = new Color3(1, 1, 1);
        noseMat.specularColor = new Color3(0, 0, 0);
        this._cleanup.add(noseMat);

        const nose = MeshBuilder.CreateCylinder(
            `mp_nose_${sessionId}`,
            {
                height: HEAD_DIAMETER * 0.35,
                diameterTop: 0,
                diameterBottom: HEAD_DIAMETER * 0.25,
                tessellation: 4,
            },
            this._scene,
        );
        nose.material = noseMat;
        nose.parent = head;
        nose.rotation.x = -Math.PI / 2;
        nose.rotation.y = 0;
        nose.rotation.z = 0;
        nose.position.z = -(HEAD_DIAMETER * 0.6) / 2 - (HEAD_DIAMETER * 0.35) / 2;
    }

    private _addRemotePlayer(
        sessionId: string,
        player: PlayerSchema,
        cb: ReturnType<typeof getStateCallbacks<MyRoomState>> extends never
            ? never
            : (instance: unknown) => { onChange: (cb: () => void) => () => void },
    ): void {
        const material = this._createPlayerMaterial(`mp_mat_${sessionId}`, player.color);

        const head = this._createPlayerMesh(
            `mp_head_${sessionId}`,
            { width: HEAD_DIAMETER, height: HEAD_DIAMETER * 1.2, depth: HEAD_DIAMETER * 0.6 },
            material,
        );
        this._createNose(sessionId, head);

        const leftHand = this._createPlayerMesh(`mp_left_${sessionId}`, { size: HAND_SIZE }, material);
        const rightHand = this._createPlayerMesh(`mp_right_${sessionId}`, { size: HAND_SIZE }, material);

        const updateFromState = () => {
            entry.targetHead.set(player.x, player.y, player.z);
            entry.targetLeftHand.set(player.lx, player.ly, player.lz);
            entry.targetRightHand.set(player.rx, player.ry, player.rz);
            Quaternion.FromEulerAnglesToRef(player.hrx, player.hry, player.hrz, entry.targetHeadRot);
            Quaternion.FromEulerAnglesToRef(player.lrx, player.lry, player.lrz, entry.targetLeftHandRot);
            Quaternion.FromEulerAnglesToRef(player.rrx, player.rry, player.rrz, entry.targetRightHandRot);
        };

        const targetHead = new Vector3(player.x, player.y, player.z);
        const targetLeftHand = new Vector3(player.lx, player.ly, player.lz);
        const targetRightHand = new Vector3(player.rx, player.ry, player.rz);
        const targetHeadRot = Quaternion.FromEulerAngles(player.hrx, player.hry, player.hrz);
        const targetLeftHandRot = Quaternion.FromEulerAngles(player.lrx, player.lry, player.lrz);
        const targetRightHandRot = Quaternion.FromEulerAngles(player.rrx, player.rry, player.rrz);

        const entry: RemotePlayerVisuals = {
            head,
            leftHand,
            rightHand,
            material,
            onChangeDetach: () => {},
            targetHead,
            targetLeftHand,
            targetRightHand,
            targetHeadRot,
            targetLeftHandRot,
            targetRightHandRot,
        };

        const detach = cb(player).onChange(updateFromState);
        entry.onChangeDetach = detach;

        head.position.copyFrom(targetHead);
        leftHand.position.copyFrom(targetLeftHand);
        rightHand.position.copyFrom(targetRightHand);
        head.rotationQuaternion = targetHeadRot.clone();
        leftHand.rotationQuaternion = targetLeftHandRot.clone();
        rightHand.rotationQuaternion = targetRightHandRot.clone();

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
            this._interpolateRemotePlayers();
        });
        this._sendIntervalId = window.setInterval(() => {
            this._sendLocalState();
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

    private _interpolateRemotePlayers(): void {
        const dt = this._scene.getEngine().getDeltaTime() / 1000;
        const factor = Math.min(1, LERP_SPEED * dt);
        for (const entry of this._remotePlayers.values()) {
            if (Vector3.DistanceSquared(entry.head.position, entry.targetHead) > SNAP_DISTANCE * SNAP_DISTANCE) {
                entry.head.position.copyFrom(entry.targetHead);
                entry.leftHand.position.copyFrom(entry.targetLeftHand);
                entry.rightHand.position.copyFrom(entry.targetRightHand);
            } else {
                entry.head.position = Vector3.Lerp(entry.head.position, entry.targetHead, factor);
                entry.leftHand.position = Vector3.Lerp(entry.leftHand.position, entry.targetLeftHand, factor);
                entry.rightHand.position = Vector3.Lerp(entry.rightHand.position, entry.targetRightHand, factor);
            }
            if (entry.head.rotationQuaternion) {
                Quaternion.SlerpToRef(
                    entry.head.rotationQuaternion,
                    entry.targetHeadRot,
                    factor,
                    entry.head.rotationQuaternion,
                );
            }
            if (entry.leftHand.rotationQuaternion) {
                Quaternion.SlerpToRef(
                    entry.leftHand.rotationQuaternion,
                    entry.targetLeftHandRot,
                    factor,
                    entry.leftHand.rotationQuaternion,
                );
            }
            if (entry.rightHand.rotationQuaternion) {
                Quaternion.SlerpToRef(
                    entry.rightHand.rotationQuaternion,
                    entry.targetRightHandRot,
                    factor,
                    entry.rightHand.rotationQuaternion,
                );
            }
        }
    }

    private _sendLocalState(): void {
        const room = this._room;
        if (!room) return;
        const camera = this._scene.activeCamera;
        if (!camera) return;
        const headPos = camera.position;
        const targetCam = camera as TargetCamera;
        const headRot = targetCam.rotationQuaternion
            ? targetCam.rotationQuaternion.toEulerAngles()
            : targetCam.rotation;

        const xr = this._getXr();
        let leftPos = Vector3.Zero();
        let rightPos = Vector3.Zero();
        let leftRot = Vector3.Zero();
        let rightRot = Vector3.Zero();
        if (xr) {
            for (const c of xr.input.controllers) {
                const handedness = c.inputSource.handedness;
                const source = c.grip ?? c.pointer;
                if (!source) continue;
                const rotQuat = source.absoluteRotationQuaternion;
                const rotEuler = rotQuat ? rotQuat.toEulerAngles() : source.rotation;
                if (handedness === 'left') {
                    leftPos = source.getAbsolutePosition();
                    leftRot = rotEuler;
                } else if (handedness === 'right') {
                    rightPos = source.getAbsolutePosition();
                    rightRot = rotEuler;
                }
            }
        }

        try {
            room.send('position', {
                x: headPos.x,
                y: headPos.y,
                z: headPos.z,
                rx: headRot.x,
                ry: headRot.y,
                rz: headRot.z,
            });
            room.send('leftController', {
                x: leftPos.x,
                y: leftPos.y,
                z: leftPos.z,
                rx: leftRot.x,
                ry: leftRot.y,
                rz: leftRot.z,
            });
            room.send('rightController', {
                x: rightPos.x,
                y: rightPos.y,
                z: rightPos.z,
                rx: rightRot.x,
                ry: rightRot.y,
                rz: rightRot.z,
            });
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
