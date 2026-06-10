import { Engine, Scene } from '@babylonjs/core';

export interface DemoDescriptor {
    id: string;
    label: string;
    build: (scene: Scene) => (() => void) | void;
    ownUi?: boolean;
    reuseScene?: boolean;
}

export class DemoRegistry {
    private static _demos: DemoDescriptor[] = [];

    static register(demo: DemoDescriptor): void {
        DemoRegistry._demos.push(demo);
    }

    static getAll(): readonly DemoDescriptor[] {
        return DemoRegistry._demos;
    }

    static createScene(engine: Engine, demo: DemoDescriptor, meta?: Record<string, unknown>): Scene {
        const scene = new Scene(engine);
        scene.useRightHandedSystem = true;
        if (meta) scene.metadata = meta;
        demo.build(scene);
        return scene;
    }
}

import { XrLightShadowsDemo } from './xrLightShadows';
import { MultiplayerDemo } from './multiplayer';
import { PdfReaderDemo } from './pdfReader';
import { DiceRollerDemo } from './diceRoller';
import { AgentHelperDemo } from './agentHelper';

DemoRegistry.register({
    id: 'xr-light-shadows',
    label: 'XR Light & Shadows',
    build: (scene) => {
        const demo = new XrLightShadowsDemo(scene);
        return () => demo.teardown();
    },
    ownUi: true,
    reuseScene: true,
});

DemoRegistry.register({
    id: 'multiplayer',
    label: 'Multiplayer',
    build: (scene) => {
        const demo = new MultiplayerDemo(scene);
        return () => demo.teardown();
    },
    ownUi: true,
    reuseScene: true,
});

DemoRegistry.register({
    id: 'pdf-reader',
    label: 'PDF Reader',
    build: (scene) => {
        const demo = new PdfReaderDemo(scene);
        return () => demo.teardown();
    },
    ownUi: true,
    reuseScene: true,
});

DemoRegistry.register({
    id: 'dice-roller',
    label: 'Dice Roller',
    build: (scene) => {
        const demo = new DiceRollerDemo(scene);
        return () => demo.teardown();
    },
    ownUi: true,
    reuseScene: true,
});

DemoRegistry.register({
    id: 'agent-helper',
    label: 'The Blob - AI Agent',
    build: (scene) => {
        const demo = new AgentHelperDemo(scene);
        return () => demo.teardown();
    },
    ownUi: true,
    reuseScene: true,
});
