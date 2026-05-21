[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IBakedVertexAnimationManager

# Interface: IBakedVertexAnimationManager

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L14)

**`Since`**

Interface for baked vertex animation texture, see BakedVertexAnimationManager
 5.0

## Properties

### animationParameters

> **animationParameters**: [`Vector4`](../classes/Vector4.md)

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L28)

The animation parameters for the mesh. See setAnimationParameters()

***

### isEnabled

> **isEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L23)

Gets or sets a boolean indicating if the edgesRenderer is active

***

### texture

> **texture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L18)

The vertex animation texture

***

### time

> **time**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L33)

The time counter, to pick the correct animation frame.

## Methods

### bind()

> **bind**(`effect`, `useInstances`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L40)

Binds to the effect.

#### Parameters

##### effect

[`Effect`](../classes/Effect.md)

The effect to bind to.

##### useInstances

`boolean`

True when it's an instance.

#### Returns

`void`

***

### dispose()

> **dispose**(`forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L55)

Disposes the resources of the manager.

#### Parameters

##### forceDisposeTextures?

`boolean`

Forces the disposal of all textures.

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L61)

Get the current class name useful for serialization or dynamic coding.

#### Returns

`string`

"BakedVertexAnimationManager"

***

### setAnimationParameters()

> **setAnimationParameters**(`startFrame`, `endFrame`, `offset`, `speedFramesPerSecond`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L49)

Sets animation parameters.

#### Parameters

##### startFrame

`number`

The first frame of the animation.

##### endFrame

`number`

The last frame of the animation.

##### offset

`number`

The offset when starting the animation.

##### speedFramesPerSecond

`number`

The frame rate.

#### Returns

`void`
