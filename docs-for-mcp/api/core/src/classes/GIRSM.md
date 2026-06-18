[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GIRSM

# Class: GIRSM

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:7](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L7)

Class used to store the global illumination parameters for a reflective shadow map.
Instances of this class are used by the GIRSMManager class to generate global illumination for a scene.

## Constructors

### Constructor

> **new GIRSM**(`rsm`): `GIRSM`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L58)

Creates a new GIRSM instance

#### Parameters

##### rsm

[`ReflectiveShadowMap`](ReflectiveShadowMap.md)

The reflective shadow map

#### Returns

`GIRSM`

## Properties

### edgeArtifactCorrection

> **edgeArtifactCorrection**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L33)

value used to correct for edge artifacts when calculating the global illumination effect. Default value is 0.1.
Will depend on your scene.

***

### intensity

> **intensity**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L27)

Intensity of the global illumination effect. Default value is 0.1.

***

### noiseFactor

> **noiseFactor**: `number` = `100`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L45)

Noise scale factor, only used if rotateSample is true. Default value is 100.
Will depend on your scene.

***

### numSamples

> **numSamples**: `number` = `400`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L16)

The number of samples to use to generate the global illumination. Default value is 400.

***

### radius

> **radius**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L22)

Radius of the circle in the RSM flux texture to read samples from. Default value is 0.1.
Valid values are between 0 and 1.

***

### rotateSample

> **rotateSample**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L39)

Defines if samples should be rotated when generating the global illumination effect. Default value is true.
Rotating samples will improve the quality of the global illumination effect by trading banding for noise, at the cost of a bit of performance.

***

### rsm

> **rsm**: [`ReflectiveShadowMap`](ReflectiveShadowMap.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L11)

The reflective shadow map used to generate the global illumination for the corresponding light.

***

### useFullTexture

> **useFullTexture**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L52)

Defines if the full texture should be used when generating the global illumination effect. Default value is false.
If true, values for numSamples, radius, rotateSample and noiseFactor will be ignored and the full texture will be used to generate the global illumination effect.
Be careful to use a RSM texture size small enough to limit the number of samples! For eg. a 32x32 texture will generate 1024 samples per pixel!

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/GlobalIllumination/giRSM.ts#L65)

Disposes the GIRSM

#### Returns

`void`
