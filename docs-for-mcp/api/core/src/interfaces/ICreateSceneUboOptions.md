[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICreateSceneUboOptions

# Interface: ICreateSceneUboOptions

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L106)

Options for creating a scene uniform buffer

## Properties

### forceMono?

> `optional` **forceMono?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L110)

When true, always creates a mono (non-multiview) UBO, bypassing any multiview override

***

### trackUBOsInFrame?

> `optional` **trackUBOsInFrame?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L108)

Define if the UBOs should be tracked in the frame (default: undefined - will use the value from Engine._features.trackUbosInFrame)
