[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICreateSceneUboOptions

# Interface: ICreateSceneUboOptions

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L108)

Options for creating a scene uniform buffer

## Properties

### forceMono?

> `optional` **forceMono?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L112)

When true, always creates a mono (non-multiview) UBO, bypassing any multiview override

***

### trackUBOsInFrame?

> `optional` **trackUBOsInFrame?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L110)

Define if the UBOs should be tracked in the frame (default: undefined - will use the value from Engine._features.trackUbosInFrame)
