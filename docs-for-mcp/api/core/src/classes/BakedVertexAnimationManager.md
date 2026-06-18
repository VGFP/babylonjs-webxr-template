[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BakedVertexAnimationManager

# Class: BakedVertexAnimationManager

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L69)

**`Since`**

This class is used to animate meshes using a baked vertex animation texture

## See

https://doc.babylonjs.com/features/featuresDeepDive/animation/baked_texture_animations
 5.0

## Implements

- [`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md)

## Constructors

### Constructor

> **new BakedVertexAnimationManager**(`scene?`): `BakedVertexAnimationManager`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L104)

Creates a new BakedVertexAnimationManager

#### Parameters

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the current scene

#### Returns

`BakedVertexAnimationManager`

## Properties

### animationParameters

> **animationParameters**: [`Vector4`](Vector4.md)

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L92)

The animation parameters for the mesh. See setAnimationParameters()

#### Implementation of

[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md).[`animationParameters`](../interfaces/IBakedVertexAnimationManager.md#animationparameters)

***

### isEnabled

> **isEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L86)

Enable or disable the vertex animation manager

#### Implementation of

[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md).[`isEnabled`](../interfaces/IBakedVertexAnimationManager.md#isenabled)

***

### texture

> **texture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L78)

The vertex animation texture

#### Implementation of

[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md).[`texture`](../interfaces/IBakedVertexAnimationManager.md#texture)

***

### time

> **time**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L98)

The time counter, to pick the correct animation frame.

#### Implementation of

[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md).[`time`](../interfaces/IBakedVertexAnimationManager.md#time)

## Methods

### bind()

> **bind**(`effect`, `useInstances?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L127)

Binds to the effect.

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to bind to.

##### useInstances?

`boolean` = `false`

True when it's an instance.

#### Returns

`void`

#### Implementation of

[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md).[`bind`](../interfaces/IBakedVertexAnimationManager.md#bind)

***

### clone()

> **clone**(): `BakedVertexAnimationManager`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L147)

Clone the current manager

#### Returns

`BakedVertexAnimationManager`

a new BakedVertexAnimationManager

***

### copyTo()

> **copyTo**(`vatMap`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L186)

Makes a duplicate of the current instance into another one.

#### Parameters

##### vatMap

`BakedVertexAnimationManager`

define the instance where to copy the info

#### Returns

`void`

***

### dispose()

> **dispose**(`forceDisposeTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L168)

Disposes the resources of the manager.

#### Parameters

##### forceDisposeTextures?

`boolean`

Forces the disposal of all textures.

#### Returns

`void`

#### Implementation of

[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md).[`dispose`](../interfaces/IBakedVertexAnimationManager.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L178)

Get the current class name useful for serialization or dynamic coding.

#### Returns

`string`

"BakedVertexAnimationManager"

#### Implementation of

[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md).[`getClassName`](../interfaces/IBakedVertexAnimationManager.md#getclassname)

***

### parse()

> **parse**(`source`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L204)

Parses a vertex animation setting from a serialized object.

#### Parameters

##### source

`any`

Serialized object.

##### scene

[`Scene`](Scene.md)

Defines the scene we are parsing for

##### rootUrl

`string`

Defines the rootUrl to load from

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L194)

Serializes this vertex animation instance

#### Returns

`any`

- An object with the serialized instance.

***

### setAnimationParameters()

> **setAnimationParameters**(`startFrame`, `endFrame`, `offset?`, `speedFramesPerSecond?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/BakedVertexAnimation/bakedVertexAnimationManager.ts#L160)

Sets animation parameters.

#### Parameters

##### startFrame

`number`

The first frame of the animation.

##### endFrame

`number`

The last frame of the animation.

##### offset?

`number` = `0`

The offset when starting the animation.

##### speedFramesPerSecond?

`number` = `30`

The frame rate.

#### Returns

`void`

#### Implementation of

[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md).[`setAnimationParameters`](../interfaces/IBakedVertexAnimationManager.md#setanimationparameters)
