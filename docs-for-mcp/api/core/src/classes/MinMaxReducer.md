[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MinMaxReducer

# Class: MinMaxReducer

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L21)

This class computes a min/max reduction from a texture: it means it computes the minimum
and maximum values from all values of the texture.
It is performed on the GPU for better performances, thanks to a succession of post processes.
The source values are read from the red channel of the texture.

## Extended by

- [`DepthReducer`](DepthReducer.md)

## Constructors

### Constructor

> **new MinMaxReducer**(`camera`): `MinMaxReducer`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L42)

Creates a min/max reducer

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera to use for the post processes

#### Returns

`MinMaxReducer`

## Accessors

### activated

#### Get Signature

> **get** **activated**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L140)

Gets the activation status of the reducer

##### Returns

`boolean`

***

### onAfterReductionPerformed

#### Get Signature

> **get** **onAfterReductionPerformed**(): [`Observable`](Observable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L25)

Observable triggered when the computation has been performed

##### Returns

[`Observable`](Observable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

***

### refreshRate

#### Get Signature

> **get** **refreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L125)

Defines the refresh rate of the computation.
Use 0 to compute just once, 1 to compute on every frame, 2 to compute every two frames and so on...

##### Returns

`number`

#### Set Signature

> **set** **refreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L129)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sourceTexture

#### Get Signature

> **get** **sourceTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L56)

Gets the texture used to read the values from.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

## Methods

### activate()

> **activate**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L149)

Activates the reduction computation.
When activated, the observers registered in onAfterReductionPerformed are
called after the computation is performed

#### Returns

`void`

***

### deactivate()

> **deactivate**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L177)

Deactivates the reduction computation.

#### Returns

`void`

***

### dispose()

> **dispose**(`disposeAll?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L191)

Disposes the min/max reducer

#### Parameters

##### disposeAll?

`boolean` = `true`

true to dispose all the resources. You should always call this function with true as the parameter (or without any parameter as it is the default one). This flag is meant to be used internally.

#### Returns

`void`

***

### setSourceTexture()

> **setSourceTexture**(`sourceTexture`, `depthRedux`, `type?`, `forceFullscreenViewport?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L71)

Sets the source texture to read the values from.
One must indicate if the texture is a depth texture or not through the depthRedux parameter
because in such textures '1' value must not be taken into account to compute the maximum
as this value is used to clear the texture.
Note that the computation is not activated by calling this function, you must call activate() for that!

#### Parameters

##### sourceTexture

[`RenderTargetTexture`](RenderTargetTexture.md)

The texture to read the values from. The values should be in the red channel.

##### depthRedux

`boolean`

Indicates if the texture is a depth texture or not

##### type?

`number` = `Constants.TEXTURETYPE_HALF_FLOAT`

The type of the textures created for the reduction (defaults to TEXTURETYPE_HALF_FLOAT)

##### forceFullscreenViewport?

`boolean` = `true`

Forces the post processes used for the reduction to be applied without taking into account viewport (defaults to true)

#### Returns

`void`
