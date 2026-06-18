[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinDepthOfFieldEffect

# Class: ThinDepthOfFieldEffect

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L29)

Thin depth of field effect composed of circle of confusion, blur, and merge post processes.

## Constructors

### Constructor

> **new ThinDepthOfFieldEffect**(`name`, `engine`, `blurLevel?`, `depthNotNormalized?`, `blockCompilation?`): `ThinDepthOfFieldEffect`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L89)

Creates a new instance of

#### Parameters

##### name

`string`

The name of the depth of field render effect

##### engine

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

The engine which the render effect will be applied. (default: current engine)

##### blurLevel?

[`ThinDepthOfFieldEffectBlurLevel`](../enumerations/ThinDepthOfFieldEffectBlurLevel.md) = `ThinDepthOfFieldEffectBlurLevel.Low`

The quality of the effect. (default: DepthOfFieldEffectBlurLevel.Low)

##### depthNotNormalized?

`boolean` = `false`

If the (view) depth used in circle of confusion post-process is normalized (0.0 to 1.0 from near to far) or not (0 to camera max distance) (default: false)

##### blockCompilation?

`boolean` = `false`

If shaders should not be compiled when the effect is created (default: false)

#### Returns

`ThinDepthOfFieldEffect`

#### See

ThinDepthOfFieldEffect

## Properties

### blurLevel

> `readonly` **blurLevel**: [`ThinDepthOfFieldEffectBlurLevel`](../enumerations/ThinDepthOfFieldEffectBlurLevel.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L79)

The quality of the effect.

## Accessors

### focalLength

#### Get Signature

> **get** **focalLength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L45)

##### Returns

`number`

#### Set Signature

> **set** **focalLength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L42)

The focal the length of the camera used in the effect in scene units/1000 (eg. millimeter)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### focusDistance

#### Get Signature

> **get** **focusDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L63)

##### Returns

`number`

#### Set Signature

> **set** **focusDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L60)

Distance away from the camera to focus on in scene units/1000 (eg. millimeter). (default: 2000)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fStop

#### Get Signature

> **get** **fStop**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L54)

##### Returns

`number`

#### Set Signature

> **set** **fStop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L51)

F-Stop of the effect's camera. The diameter of the resulting aperture can be computed by lensSize/fStop. (default: 1.4)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### lensSize

#### Get Signature

> **get** **lensSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L72)

##### Returns

`number`

#### Set Signature

> **set** **lensSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L69)

Max lens size in scene units/1000 (eg. millimeter). Standard cameras are 50mm. (default: 50) The diameter of the resulting aperture can be computed by lensSize/fStop.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/PostProcesses/thinDepthOfFieldEffect.ts#L134)

Checks if the effect is ready to be used

#### Returns

`boolean`

if the effect is ready
