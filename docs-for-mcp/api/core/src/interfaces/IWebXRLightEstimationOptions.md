[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLightEstimationOptions

# Interface: IWebXRLightEstimationOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L22)

Options for Light Estimation feature

## Properties

### createDirectionalLightSource?

> `optional` **createDirectionalLightSource?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L46)

Should a directional light source be created.
If created, this light source will be updated whenever the light estimation values change

***

### cubeMapPollInterval?

> `optional` **cubeMapPollInterval?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L36)

How often should the cubemap update in ms.
If not set the cubemap will be updated every time the underlying system updates the environment texture.

***

### directionalLightIntensityFactor?

> `optional` **directionalLightIntensityFactor?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L50)

The scale factor to multiply the intensity of the directional light by. Defaults to 1.0.

***

### disableCubeMapReflection?

> `optional` **disableCubeMapReflection?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L26)

Disable the cube map reflection feature. In this case only light direction and color will be updated

***

### disablePreFiltering?

> `optional` **disablePreFiltering?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L69)

disable prefiltering the cube map texture

***

### disableSphericalPolynomial?

> `optional` **disableSphericalPolynomial?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L64)

disable applying the spherical polynomial to the cube map texture

***

### disableVectorReuse?

> `optional` **disableVectorReuse?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L59)

Should the light estimation's needed vectors be constructed on each frame.
Use this when you use those vectors and don't want their values to change outside of the light estimation feature

***

### lightEstimationPollInterval?

> `optional` **lightEstimationPollInterval?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L41)

How often should the light estimation properties update in ms.
If not set the light estimation properties will be updated on every frame (depending on the underlying system)

***

### reflectionFormat?

> `optional` **reflectionFormat?**: `XRReflectionFormat`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L54)

Define the format to be used for the light estimation texture.

***

### setSceneEnvironmentTexture?

> `optional` **setSceneEnvironmentTexture?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRLightEstimation.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRLightEstimation.ts#L31)

Should the scene's env texture be set to the cube map reflection texture
Note that this doesn't work is disableCubeMapReflection if set to false
