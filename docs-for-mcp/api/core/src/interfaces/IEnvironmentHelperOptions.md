[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEnvironmentHelperOptions

# Interface: IEnvironmentHelperOptions

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L27)

Represents the different options available during the creation of
a Environment helper.

This can control the default ground, skybox and image processing setup of your scene.

## Properties

### backgroundYRotation

> **backgroundYRotation**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L137)

The background rotation around the Y axis of the scene.
This helps aligning the key lights of your scene with the background.
0 by default.

***

### cameraContrast

> **cameraContrast**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L173)

The value of the contrast to apply to the scene.
1.6 by default if setupImageProcessing is true.

***

### cameraExposure

> **cameraExposure**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L167)

The value of the exposure to apply to the scene.
0.6 by default if setupImageProcessing is true.

***

### createGround

> **createGround**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L32)

Specifies whether or not to create a ground.
True by default.

***

### createSkybox

> **createSkybox**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L113)

Specifies whether or not to create a skybox.
True by default.

***

### enableGroundMirror

> **enableGroundMirror**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L69)

Creates a mirror texture attach to the ground.
false by default.

***

### enableGroundShadow

> **enableGroundShadow**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L59)

Enables the ground to receive shadows.
True by default.

***

### environmentTexture

> **environmentTexture**: `string` \| [`BaseTexture`](../classes/BaseTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L161)

The texture used as your environment texture in the scene.
Comes from the BabylonJS CDN by default and in use if setupImageProcessing is true.

Remarks: Can be either a texture or a url.

***

### groundColor

> **groundColor**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L49)

The color mixed in the ground texture by default.
BabylonJS clearColor by default.

***

### groundMirrorAmount

> **groundMirrorAmount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L84)

Specifies the ground mirror visibility amount.
1 by default

***

### groundMirrorBlurKernel

> **groundMirrorBlurKernel**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L79)

Specifies the ground mirror blur kernel size.
64 by default.

***

### groundMirrorFallOffDistance

> **groundMirrorFallOffDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L97)

Specifies the ground mirror Falloff distance.
This can helps reducing the size of the reflection.
0 by Default.

***

### groundMirrorFresnelWeight

> **groundMirrorFresnelWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L91)

Specifies the ground mirror reflectance weight.
This uses the standard weight of the background material to setup the fresnel effect
of the mirror.
1 by default.

***

### groundMirrorSizeRatio

> **groundMirrorSizeRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L74)

Specifies the ground mirror size ratio.
0.3 by default as the default kernel is 64.

***

### groundMirrorTextureType

> **groundMirrorTextureType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L102)

Specifies the ground mirror texture type.
Unsigned Int by Default.

***

### groundOpacity

> **groundOpacity**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L54)

Specifies the ground opacity.
1 by default.

***

### groundShadowLevel

> **groundShadowLevel**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L64)

Helps preventing the shadow to be fully black on the ground.
0.5 by default.

***

### groundSize

> **groundSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L37)

Specifies the ground size.
15 by default.

***

### groundTexture

> **groundTexture**: `string` \| [`BaseTexture`](../classes/BaseTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L44)

The texture used on the ground for the main color.
Comes from the BabylonJS CDN by default.

Remarks: Can be either a texture or a url.

***

### groundYBias

> **groundYBias**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L107)

Specifies a bias applied to the ground vertical position to prevent z-fighting with
the shown objects.

***

### rootPosition

> **rootPosition**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L147)

Default position of the rootMesh if autoSize is not true.

***

### setupImageProcessing

> **setupImageProcessing**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L153)

Sets up the image processing in the scene.
true by default.

***

### sizeAuto

> **sizeAuto**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L142)

Compute automatically the size of the elements to best fit with the scene.

***

### skyboxColor

> **skyboxColor**: [`Color3`](../classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L130)

The color mixed in the skybox texture by default.
BabylonJS clearColor by default.

***

### skyboxSize

> **skyboxSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L118)

Specifies the skybox size.
20 by default.

***

### skyboxTexture

> **skyboxTexture**: `string` \| [`BaseTexture`](../classes/BaseTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L125)

The texture used on the skybox for the main color.
Comes from the BabylonJS CDN by default.

Remarks: Can be either a texture or a url.

***

### toneMappingEnabled

> **toneMappingEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L179)

Specifies whether or not tonemapping should be enabled in the scene.
true by default if setupImageProcessing is true.
