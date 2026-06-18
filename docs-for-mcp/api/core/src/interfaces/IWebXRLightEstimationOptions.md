[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLightEstimationOptions

# Interface: IWebXRLightEstimationOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L24)

Options for Light Estimation feature

## Properties

### createDirectionalLightSource?

> `optional` **createDirectionalLightSource?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L48)

Should a directional light source be created.
If created, this light source will be updated whenever the light estimation values change

***

### cubeMapPollInterval?

> `optional` **cubeMapPollInterval?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L38)

How often should the cubemap update in ms.
If not set the cubemap will be updated every time the underlying system updates the environment texture.

***

### directionalLightIntensityFactor?

> `optional` **directionalLightIntensityFactor?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L52)

The scale factor to multiply the intensity of the directional light by. Defaults to 1.0.

***

### disableCubeMapReflection?

> `optional` **disableCubeMapReflection?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L28)

Disable the cube map reflection feature. In this case only light direction and color will be updated

***

### disablePreFiltering?

> `optional` **disablePreFiltering?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L71)

disable prefiltering the cube map texture

***

### disableSphericalPolynomial?

> `optional` **disableSphericalPolynomial?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L66)

disable applying the spherical polynomial to the cube map texture

***

### disableVectorReuse?

> `optional` **disableVectorReuse?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L61)

Should the light estimation's needed vectors be constructed on each frame.
Use this when you use those vectors and don't want their values to change outside of the light estimation feature

***

### lightEstimationPollInterval?

> `optional` **lightEstimationPollInterval?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L43)

How often should the light estimation properties update in ms.
If not set the light estimation properties will be updated on every frame (depending on the underlying system)

***

### reflectionFormat?

> `optional` **reflectionFormat?**: `XRReflectionFormat`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L56)

Define the format to be used for the light estimation texture.

***

### setSceneEnvironmentTexture?

> `optional` **setSceneEnvironmentTexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L33)

Should the scene's env texture be set to the cube map reflection texture
Note that this doesn't work is disableCubeMapReflection if set to false
