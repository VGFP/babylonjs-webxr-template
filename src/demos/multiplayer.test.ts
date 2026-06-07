import { Color4, Quaternion, Vector3 } from '@babylonjs/core';

vi.mock('../text/textRenderer', () => ({
    TextManager: vi.fn().mockImplementation(function (this: any) {
        this.init = vi.fn().mockResolvedValue(undefined);
        this.addParagraph = vi.fn();
        this.attachToScene = vi.fn(() => vi.fn());
        this.dispose = vi.fn();
        this.renderer = { parent: null, addParagraph: vi.fn(), clearParagraphs: vi.fn() };
    }),
}));

vi.mock('../core/uiButton', () => ({
    createUiButton: vi.fn().mockImplementation((_scene: any, options: any) => ({
        plane: {
            name: options.name,
            position: options.position,
            parent: options.parent ?? null,
            dispose: vi.fn(),
            setEnabled: vi.fn(),
            isEnabled: vi.fn(() => true),
            receiveShadows: false,
            getChildren: () => [],
        },
        texture: { dispose: vi.fn() },
        rect: {
            background: options.bgColor,
            color: options.borderColor,
            dispose: vi.fn(),
        },
    })),
}));

vi.mock('@colyseus/sdk', () => ({
    Client: vi.fn(),
}));

vi.mock('@colyseus/sdk/serializer/SchemaSerializer', () => ({
    getStateCallbacks: vi.fn(() => () => ({
        onChange: vi.fn(() => () => {}),
        players: { onAdd: vi.fn(), onRemove: vi.fn() },
    })),
}));

vi.mock('@babylonjs/gui/2D/advancedDynamicTexture', () => ({
    AdvancedDynamicTexture: {
        CreateForMesh: vi.fn(() => ({
            background: '',
            addControl: vi.fn(),
            dispose: vi.fn(),
        })),
    },
}));

vi.mock('@babylonjs/gui/2D/controls/inputText', () => ({
    InputText: vi.fn().mockImplementation(function (this: any) {
        this.width = '';
        this.height = '';
        this.color = '';
        this.background = '';
        this.placeholderText = '';
        this.placeholderColor = '';
        this.focusedBackground = '';
        this.fontSize = 0;
        this.thickness = 0;
        this.text = '';
        this.onBlurObservable = { clear: vi.fn(), add: vi.fn() };
        this.onFocusObservable = { add: vi.fn() };
    }),
}));

vi.mock('@babylonjs/gui/2D/controls/virtualKeyboard', () => ({
    VirtualKeyboard: vi.fn().mockImplementation(function (this: any) {
        this.addKeysRow = vi.fn();
        this.defaultButtonWidth = '';
        this.defaultButtonHeight = '';
        this.defaultButtonColor = '';
        this.defaultButtonBackground = '';
        this.shiftButtonColor = '';
        this.width = '';
        this.isVisible = true;
        this.connect = vi.fn();
    }),
}));

import { MultiplayerDemo } from './multiplayer';
import { createTestScene, disposeTestScene } from '../__tests__/helpers/nullEngine';

describe('MultiplayerDemo', () => {
    let engine: ReturnType<typeof createTestScene>['engine'];
    let scene: ReturnType<typeof createTestScene>['scene'];

    beforeEach(() => {
        ({ engine, scene } = createTestScene());
        scene.clearColor = new Color4(0.1, 0.1, 0.1, 1);
        scene.metadata = {
            goBack: vi.fn(),
            xr: {},
            xrAnchors: null,
            planeDetectionManager: null,
        };
    });

    afterEach(() => {
        disposeTestScene(scene, engine);
    });

    it('constructs without errors', () => {
        expect(() => new MultiplayerDemo(scene)).not.toThrow();
    });

    it('changes scene clearColor to transparent', () => {
        new MultiplayerDemo(scene);
        expect(scene.clearColor.a).toBe(0);
    });

    it('teardown() restores the previous clearColor', () => {
        const originalColor = scene.clearColor.clone();
        const demo = new MultiplayerDemo(scene);
        demo.teardown();
        expect(scene.clearColor.equals(originalColor)).toBe(true);
    });

    it('teardown() disposes panel root meshes', () => {
        const demo = new MultiplayerDemo(scene);
        const mpMeshes = scene.meshes.filter((m) => m.name.startsWith('mp_'));
        demo.teardown();
        const remaining = scene.meshes.filter((m) => m.name.startsWith('mp_'));
        expect(remaining.length).toBe(0);
        expect(mpMeshes.length).toBeGreaterThan(0);
    });

    describe('endpoint parsing', () => {
        it('returns empty for empty input', () => {
            const demo = new MultiplayerDemo(scene);
            expect((demo as any)._parseEndpoint('')).toBe('');
            expect((demo as any)._parseEndpoint('   ')).toBe('');
            demo.teardown();
        });

        it('passes through URLs with protocol', () => {
            const demo = new MultiplayerDemo(scene);
            expect((demo as any)._parseEndpoint('https://example.com')).toBe('https://example.com');
            expect((demo as any)._parseEndpoint('http://example.com')).toBe('http://example.com');
            expect((demo as any)._parseEndpoint('wss://example.com')).toBe('wss://example.com');
            expect((demo as any)._parseEndpoint('ws://example.com')).toBe('ws://example.com');
            demo.teardown();
        });

        it('prepends http:// for localhost', () => {
            const demo = new MultiplayerDemo(scene);
            expect((demo as any)._parseEndpoint('localhost:2567')).toBe('http://localhost:2567');
            demo.teardown();
        });

        it('prepends http:// for IP addresses', () => {
            const demo = new MultiplayerDemo(scene);
            expect((demo as any)._parseEndpoint('192.168.1.100:2567')).toBe('http://192.168.1.100:2567');
            demo.teardown();
        });

        it('prepends https:// for bare hostnames', () => {
            const demo = new MultiplayerDemo(scene);
            expect((demo as any)._parseEndpoint('my-server.com')).toBe('https://my-server.com');
            demo.teardown();
        });

        it('trims whitespace', () => {
            const demo = new MultiplayerDemo(scene);
            expect((demo as any)._parseEndpoint('  https://example.com  ')).toBe('https://example.com');
            demo.teardown();
        });
    });

    describe('remote player interpolation', () => {
        function makeMockEntry(headPos: Vector3, targetPos: Vector3, headRot?: Quaternion, targetRot?: Quaternion) {
            const makeMesh = () => ({
                position: Vector3.Zero(),
                rotationQuaternion: Quaternion.Identity(),
                dispose: vi.fn(),
            });
            return {
                head: {
                    position: headPos.clone(),
                    rotationQuaternion: headRot ?? Quaternion.Identity(),
                    dispose: vi.fn(),
                },
                leftHand: makeMesh(),
                rightHand: makeMesh(),
                material: { dispose: vi.fn() },
                targetHead: targetPos,
                targetLeftHand: Vector3.Zero(),
                targetRightHand: Vector3.Zero(),
                targetHeadRot: targetRot ?? Quaternion.Identity(),
                targetLeftHandRot: Quaternion.Identity(),
                targetRightHandRot: Quaternion.Identity(),
                onChangeDetach: () => {},
            };
        }

        beforeEach(() => {
            vi.spyOn(scene.getEngine(), 'getDeltaTime').mockReturnValue(16);
        });

        it('uses quaternion slerp for rotation (not Vector3 lerp)', () => {
            const demo = new MultiplayerDemo(scene);

            const initial = Quaternion.FromEulerAngles(0, 0.1, 0);
            const target = Quaternion.FromEulerAngles(0, 1.0, 0);
            const initialCopy = initial.clone();

            const entry = makeMockEntry(Vector3.Zero(), Vector3.Zero(), initial, target);
            (demo as any)._remotePlayers.set('slerp-test', entry);

            (demo as any)._interpolateRemotePlayers();

            const initialDot = Quaternion.Dot(initialCopy, target);
            const resultDot = Quaternion.Dot(entry.head.rotationQuaternion, target);
            expect(resultDot).toBeGreaterThan(initialDot);
            demo.teardown();
        });

        it('snaps position when distance exceeds threshold', () => {
            const demo = new MultiplayerDemo(scene);

            const entry = makeMockEntry(new Vector3(0, 0, 0), new Vector3(5, 0, 0));
            (demo as any)._remotePlayers.set('snap-test', entry);

            (demo as any)._interpolateRemotePlayers();

            expect(entry.head.position.x).toBe(5);
            expect(entry.head.position.y).toBe(0);
            expect(entry.head.position.z).toBe(0);
            demo.teardown();
        });

        it('lerps position when distance is under threshold', () => {
            const demo = new MultiplayerDemo(scene);

            const entry = makeMockEntry(new Vector3(0, 0, 0), new Vector3(0.1, 0, 0));
            (demo as any)._remotePlayers.set('lerp-test', entry);

            (demo as any)._interpolateRemotePlayers();

            expect(entry.head.position.x).toBeGreaterThan(0);
            expect(entry.head.position.x).toBeLessThan(0.1);
            demo.teardown();
        });

        it('does not move position when already at target', () => {
            const demo = new MultiplayerDemo(scene);

            const pos = new Vector3(1, 2, 3);
            const entry = makeMockEntry(pos, pos);
            (demo as any)._remotePlayers.set('idle-test', entry);

            (demo as any)._interpolateRemotePlayers();

            expect(entry.head.position.x).toBe(1);
            expect(entry.head.position.y).toBe(2);
            expect(entry.head.position.z).toBe(3);
            demo.teardown();
        });
    });
});
