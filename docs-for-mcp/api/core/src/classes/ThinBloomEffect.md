[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinBloomEffect

# Class: ThinBloomEffect

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L10)

The bloom effect spreads bright areas of an image to simulate artifacts seen in cameras

## Constructors

### Constructor

> **new ThinBloomEffect**(`name`, `engine`, `scale`, `blockCompilation?`): `ThinBloomEffect`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L63)

Creates a new instance of

#### Parameters

##### name

`string`

The name of the bloom render effect

##### engine

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

The engine which the render effect will be applied. (default: current engine)

##### scale

`number`

The ratio of the blur texture to the input texture that should be used to compute the bloom.

##### blockCompilation?

`boolean` = `false`

If shaders should not be compiled when the effect is created (default: false)

#### Returns

`ThinBloomEffect`

#### See

ThinBloomEffect

## Properties

### scale

> `readonly` **scale**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L54)

The ratio of the blur texture to the input texture that should be used to compute the bloom.

## Accessors

### kernel

#### Get Signature

> **get** **kernel**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L43)

Specifies the size of the bloom blur kernel, relative to the final output size

##### Returns

`number`

#### Set Signature

> **set** **kernel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L46)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### threshold

#### Get Signature

> **get** **threshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L23)

The luminance threshold to find bright areas of the image to bloom.

##### Returns

`number`

#### Set Signature

> **set** **threshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L26)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### weight

#### Get Signature

> **get** **weight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L33)

The strength of the bloom.

##### Returns

`number`

#### Set Signature

> **set** **weight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L36)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinBloomEffect.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinBloomEffect.ts#L75)

Checks if the effect is ready to be used

#### Returns

`boolean`

if the effect is ready
