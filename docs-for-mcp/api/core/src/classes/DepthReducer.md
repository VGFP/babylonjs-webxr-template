[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthReducer

# Class: DepthReducer

Defined in: [babylonjs-source/packages/dev/core/src/Misc/depthReducer.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/depthReducer.ts#L12)

This class is a small wrapper around the MinMaxReducer class to compute the min/max values of a depth texture

## Extends

- [`MinMaxReducer`](MinMaxReducer.md)

## Constructors

### Constructor

> **new DepthReducer**(`camera`): `DepthReducer`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/depthReducer.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/depthReducer.ts#L28)

Creates a depth reducer

#### Parameters

##### camera

[`Camera`](Camera.md)

The camera used to render the depth texture

#### Returns

`DepthReducer`

#### Overrides

[`MinMaxReducer`](MinMaxReducer.md).[`constructor`](MinMaxReducer.md#constructor)

## Accessors

### activated

#### Get Signature

> **get** **activated**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L140)

Gets the activation status of the reducer

##### Returns

`boolean`

#### Inherited from

[`MinMaxReducer`](MinMaxReducer.md).[`activated`](MinMaxReducer.md#activated)

***

### depthRenderer

#### Get Signature

> **get** **depthRenderer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DepthRenderer`](DepthRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/depthReducer.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/depthReducer.ts#L20)

Gets the depth renderer used for the computation.
Note that the result is null if you provide your own renderer when calling setDepthRenderer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DepthRenderer`](DepthRenderer.md)\>

***

### onAfterReductionPerformed

#### Get Signature

> **get** **onAfterReductionPerformed**(): [`Observable`](Observable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L25)

Observable triggered when the computation has been performed

##### Returns

[`Observable`](Observable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

#### Inherited from

[`MinMaxReducer`](MinMaxReducer.md).[`onAfterReductionPerformed`](MinMaxReducer.md#onafterreductionperformed)

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

#### Inherited from

[`MinMaxReducer`](MinMaxReducer.md).[`refreshRate`](MinMaxReducer.md#refreshrate)

***

### sourceTexture

#### Get Signature

> **get** **sourceTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/minMaxReducer.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/minMaxReducer.pure.ts#L56)

Gets the texture used to read the values from.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

#### Inherited from

[`MinMaxReducer`](MinMaxReducer.md).[`sourceTexture`](MinMaxReducer.md#sourcetexture)

## Methods

### activate()

> **activate**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/depthReducer.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/depthReducer.ts#L89)

Activates the reduction computation.
When activated, the observers registered in onAfterReductionPerformed are
called after the computation is performed

#### Returns

`void`

#### Overrides

[`MinMaxReducer`](MinMaxReducer.md).[`activate`](MinMaxReducer.md#activate)

***

### deactivate()

> **deactivate**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/depthReducer.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/depthReducer.ts#L100)

Deactivates the reduction computation.

#### Returns

`void`

#### Overrides

[`MinMaxReducer`](MinMaxReducer.md).[`deactivate`](MinMaxReducer.md#deactivate)

***

### dispose()

> **dispose**(`disposeAll?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/depthReducer.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/depthReducer.ts#L112)

Disposes the depth reducer

#### Parameters

##### disposeAll?

`boolean` = `true`

true to dispose all the resources. You should always call this function with true as the parameter (or without any parameter as it is the default one). This flag is meant to be used internally.

#### Returns

`void`

#### Overrides

[`MinMaxReducer`](MinMaxReducer.md).[`dispose`](MinMaxReducer.md#dispose)

***

### setDepthRenderer()

> **setDepthRenderer**(`depthRenderer?`, `type?`, `forceFullscreenViewport?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/depthReducer.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/depthReducer.ts#L38)

Sets the depth renderer to use to generate the depth map

#### Parameters

##### depthRenderer?

[`Nullable`](../type-aliases/Nullable.md)\<[`DepthRenderer`](DepthRenderer.md)\> = `null`

The depth renderer to use. If not provided, a new one will be created automatically

##### type?

`number` = `Constants.TEXTURETYPE_HALF_FLOAT`

The texture type of the depth map (default: TEXTURETYPE_HALF_FLOAT)

##### forceFullscreenViewport?

`boolean` = `true`

Forces the post processes used for the reduction to be applied without taking into account viewport (defaults to true)

#### Returns

`void`
