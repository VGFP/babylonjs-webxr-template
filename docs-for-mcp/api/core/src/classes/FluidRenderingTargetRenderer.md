[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRenderingTargetRenderer

# Class: FluidRenderingTargetRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L35)

Class used to render an object as a fluid thanks to different render target textures (depth, thickness, diffuse)

## Constructors

### Constructor

> **new FluidRenderingTargetRenderer**(`scene`, `camera?`, `shaderLanguage?`): `FluidRenderingTargetRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:517](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L517)

Creates an instance of the class

#### Parameters

##### scene

[`Scene`](Scene.md)

Scene used to render the fluid object into

##### camera?

[`Camera`](Camera.md)

Camera used to render the fluid object. If not provided, use the active camera of the scene instead

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

The shader language to use

#### Returns

`FluidRenderingTargetRenderer`

## Properties

### density

> **density**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L79)

Density of the fluid (positive number). The higher the value, the more opaque the fluid.

***

### dirLight

> **dirLight**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L104)

Direction of the light. The fluid is assumed to be lit by a directional light

***

### fluidColor

> **fluidColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L74)

Fluid color. Not used if generateDiffuseTexture is true

***

### fresnelClamp

> **fresnelClamp**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L89)

Strength of the fresnel effect (value between 0 and 1). Lower the value if you want to soften the specular effect

***

### minimumThickness

> **minimumThickness**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L99)

Minimum thickness of the particles (positive number). If useFixedThickness is true, minimumThickness is the thickness used

***

### refractionStrength

> **refractionStrength**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L84)

Strength of the refraction (positive number, but generally between 0 and 0.3).

***

### specularPower

> **specularPower**: `number` = `250`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L94)

Strength of the specular power (positive number). Increase the value to make the specular effect more concentrated

## Accessors

### blurDepthDepthScale

#### Get Signature

> **get** **blurDepthDepthScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L257)

Depth weight in the calculation when applying the bilateral blur to generate the depth blur texture (positive number, generally between 0 and 100)

##### Returns

`number`

#### Set Signature

> **set** **blurDepthDepthScale**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L261)

##### Parameters

###### scale

`number`

##### Returns

`void`

***

### blurDepthFilterSize

#### Get Signature

> **get** **blurDepthFilterSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L203)

Size of the kernel used to filter the depth blur texture (positive number, generally between 1 and 20 - higher values will require more processing power from the GPU)

##### Returns

`number`

#### Set Signature

> **set** **blurDepthFilterSize**(`filterSize`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L207)

##### Parameters

###### filterSize

`number`

##### Returns

`void`

***

### blurDepthMaxFilterSize

#### Get Signature

> **get** **blurDepthMaxFilterSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L239)

Maximum size of the kernel used to blur the depth texture (positive number, generally between 1 and 200 - higher values will require more processing power from the GPU when the particles are larger on screen)

##### Returns

`number`

#### Set Signature

> **set** **blurDepthMaxFilterSize**(`maxFilterSize`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L243)

##### Parameters

###### maxFilterSize

`number`

##### Returns

`void`

***

### blurDepthNumIterations

#### Get Signature

> **get** **blurDepthNumIterations**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L221)

Number of blurring iterations used to generate the depth blur texture (positive number, generally between 1 and 10 - higher values will require more processing power from the GPU)

##### Returns

`number`

#### Set Signature

> **set** **blurDepthNumIterations**(`numIterations`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L225)

##### Parameters

###### numIterations

`number`

##### Returns

`void`

***

### blurDepthSizeDivisor

#### Get Signature

> **get** **blurDepthSizeDivisor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L185)

Gets or sets the depth size divisor (positive number, generally between 1 and 4), which is used as a divisor when creating the texture used for blurring the depth
For eg. if blurDepthSizeDivisor=2, the texture used to blur the depth will be half the size of the depth texture

##### Returns

`number`

#### Set Signature

> **set** **blurDepthSizeDivisor**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L189)

##### Parameters

###### scale

`number`

##### Returns

`void`

***

### blurThicknessFilterSize

#### Get Signature

> **get** **blurThicknessFilterSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L312)

Size of the kernel used to filter the thickness blur texture (positive number, generally between 1 and 20 - higher values will require more processing power from the GPU)

##### Returns

`number`

#### Set Signature

> **set** **blurThicknessFilterSize**(`filterSize`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L316)

##### Parameters

###### filterSize

`number`

##### Returns

`void`

***

### blurThicknessNumIterations

#### Get Signature

> **get** **blurThicknessNumIterations**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L330)

Number of blurring iterations used to generate the thickness blur texture (positive number, generally between 1 and 10 - higher values will require more processing power from the GPU)

##### Returns

`number`

#### Set Signature

> **set** **blurThicknessNumIterations**(`numIterations`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L334)

##### Parameters

###### numIterations

`number`

##### Returns

`void`

***

### blurThicknessSizeDivisor

#### Get Signature

> **get** **blurThicknessSizeDivisor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L294)

Gets or sets the thickness size divisor (positive number, generally between 1 and 4), which is used as a divisor when creating the texture used for blurring the thickness
For eg. if blurThicknessSizeDivisor=2, the texture used to blur the thickness will be half the size of the thickness texture

##### Returns

`number`

#### Set Signature

> **set** **blurThicknessSizeDivisor**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L298)

##### Parameters

###### scale

`number`

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:485](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L485)

Gets the camera used for the rendering

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

***

### compositeMode

#### Get Signature

> **get** **compositeMode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L469)

If compositeMode is true (default: false), when the alpha value of the background (the scene rendered without the fluid objects) is 0, the final alpha value of the pixel will be set to the thickness value.
This way, it is possible to composite the fluid rendering on top of the HTML background.

##### Returns

`boolean`

#### Set Signature

> **set** **compositeMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L473)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### debug

#### Get Signature

> **get** **debug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L129)

Gets or sets a boolean indicating if we should display a specific texture (given by debugFeature) for debugging purpose

##### Returns

`boolean`

#### Set Signature

> **set** **debug**(`debug`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L133)

##### Parameters

###### debug

`boolean`

##### Returns

`void`

***

### debugFeature

#### Get Signature

> **get** **debugFeature**(): [`FluidRenderingDebug`](../enumerations/FluidRenderingDebug.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L111)

Gets or sets the feature (texture) to be debugged. Not used if debug is false

##### Returns

[`FluidRenderingDebug`](../enumerations/FluidRenderingDebug.md)

#### Set Signature

> **set** **debugFeature**(`feature`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L115)

##### Parameters

###### feature

[`FluidRenderingDebug`](../enumerations/FluidRenderingDebug.md)

##### Returns

`void`

***

### depthMapSize

#### Get Signature

> **get** **depthMapSize**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:393](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L393)

Defines the size of the depth texture.
If null, the texture will have the size of the screen

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **depthMapSize**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L397)

##### Parameters

###### size

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### diffuseMapSize

#### Get Signature

> **get** **diffuseMapSize**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L431)

Defines the size of the diffuse texture.
If null, the texture will have the size of the screen

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **diffuseMapSize**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L435)

##### Parameters

###### size

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### enableBlurDepth

#### Get Signature

> **get** **enableBlurDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L166)

Gets or sets a boolean indicating that the depth texture should be blurred

##### Returns

`boolean`

#### Set Signature

> **set** **enableBlurDepth**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L170)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableBlurThickness

#### Get Signature

> **get** **enableBlurThickness**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L275)

Gets or sets a boolean indicating that the thickness texture should be blurred

##### Returns

`boolean`

#### Set Signature

> **set** **enableBlurThickness**(`enable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L279)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### environmentMap

#### Get Signature

> **get** **environmentMap**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L148)

Gets or sets the environment map used for the reflection part of the shading
If null, no map will be used. If undefined, the scene.environmentMap will be used (if defined)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> \| `undefined`

#### Set Signature

> **set** **environmentMap**(`map`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L152)

##### Parameters

###### map

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\> \| `undefined`

##### Returns

`void`

***

### generateDiffuseTexture

#### Get Signature

> **get** **generateDiffuseTexture**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L58)

Gets or sets a boolean indicating that the diffuse texture should be generated and used for the rendering

##### Returns

`boolean`

#### Set Signature

> **set** **generateDiffuseTexture**(`generate`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L62)

##### Parameters

###### generate

`boolean`

##### Returns

`void`

***

### needInitialization

#### Get Signature

> **get** **needInitialization**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L49)

Returns true if the class needs to be reinitialized (because of changes in parameterization)

##### Returns

`boolean`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L450)

Gets or sets the number of samples used by MSAA
Note: changing this value in WebGL does not work because depth/stencil textures can't be created with MSAA (see https://github.com/BabylonJS/Babylon.js/issues/12444)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`samples`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L454)

##### Parameters

###### samples

`number`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L507)

Gets the shader language used in this renderer

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### thicknessMapSize

#### Get Signature

> **get** **thicknessMapSize**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L412)

Defines the size of the thickness texture.
If null, the texture will have the size of the screen

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **thicknessMapSize**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L416)

##### Parameters

###### size

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### useFixedThickness

#### Get Signature

> **get** **useFixedThickness**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L348)

Gets or sets a boolean indicating that a fixed thickness should be used instead of generating a thickness texture

##### Returns

`boolean`

#### Set Signature

> **set** **useFixedThickness**(`use`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L352)

##### Parameters

###### use

`boolean`

##### Returns

`void`

***

### useVelocity

#### Get Signature

> **get** **useVelocity**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L373)

Gets or sets a boolean indicating that the velocity should be used when rendering the particles as a fluid.
Note: the vertex buffers must contain a "velocity" buffer for this to work!

##### Returns

`boolean`

#### Set Signature

> **set** **useVelocity**(`use`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L377)

##### Parameters

###### use

`boolean`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(`onlyPostProcesses?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts:962](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingTargetRenderer.ts#L962)

Releases all the resources used by the class

#### Parameters

##### onlyPostProcesses?

`boolean` = `false`

If true, releases only the resources used by the render post processes

#### Returns

`void`
