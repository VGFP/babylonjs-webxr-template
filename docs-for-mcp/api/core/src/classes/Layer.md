[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Layer

# Class: Layer

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L25)

This represents a full screen 2d layer.
This can be useful to display a picture in the  background of your scene for instance.

## See

https://www.babylonjs-playground.com/#08A2BS#1

## Constructors

### Constructor

> **new Layer**(`name`, `imgUrl`, `scene`, `isBackground?`, `color?`, `forceGLSL?`): `Layer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L185)

Instantiates a new layer.
This represents a full screen 2d layer.
This can be useful to display a picture in the  background of your scene for instance.

#### Parameters

##### name

`string`

Define the name of the layer in the scene

##### imgUrl

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Define the url of the texture to display in the layer

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Define the scene the layer belongs to

##### isBackground?

`boolean`

Defines whether the layer is displayed in front or behind the scene

##### color?

[`Color4`](Color4.md)

Defines a color for the layer

##### forceGLSL?

`boolean` = `false`

Use the GLSL code generation for the shader (even on WebGPU). Default is false

#### Returns

`Layer`

#### See

https://www.babylonjs-playground.com/#08A2BS#1

## Properties

### alphaBlendingMode

> **alphaBlendingMode**: `number` = `Constants.ALPHA_COMBINE`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L71)

Define the alpha blending mode used in the layer in case the texture or color has an alpha.

***

### alphaTest

> **alphaTest**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L78)

Define if the layer should alpha test or alpha blend with the rest of the scene.
Alpha test will not mix with the background color in case of transparency.
It will either use the texture color or the background depending on the alpha value of the current pixel.

***

### color

> **color**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L56)

Define the color of the layer (instead of texture).

***

### convertToLinearSpace

> **convertToLinearSpace**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L99)

Define if the colors of the layer should be generated in linear space (default: false)

***

### isBackground

> **isBackground**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L39)

Is the layer in background or foreground.

***

### isEnabled

> **isEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L104)

Define if the layer is enabled (ie. should be displayed). Default: true

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L83)

Define a mask to restrict the layer to only some of the scene cameras.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L189)

Define the name of the layer.

***

### offset

> **offset**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L66)

Define an offset for the layer in order to shift the texture.

***

### onAfterRenderObservable

> **onAfterRenderObservable**: [`Observable`](Observable.md)\<`Layer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L149)

An event triggered after rendering the scene

***

### onBeforeRenderObservable

> **onBeforeRenderObservable**: [`Observable`](Observable.md)\<`Layer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L132)

An event triggered before rendering the scene

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<`Layer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L115)

An event triggered when the layer is disposed.

***

### renderOnlyInRenderTargetTextures

> **renderOnlyInRenderTargetTextures**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L94)

Define if the layer is only used in renderTarget or if it also
renders in the main frame buffer of the canvas.

***

### renderTargetTextures

> **renderTargetTextures**: [`RenderTargetTexture`](RenderTargetTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L88)

Define the list of render target the layer is visible into.

***

### scale

> **scale**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L61)

Define the scale of the layer in order to zoom in out of the texture.

***

### texture

> **texture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L34)

Define the texture the layer should display.

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L30)

Force all the layers to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

## Accessors

### applyPostProcess

#### Get Signature

> **get** **applyPostProcess**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L49)

##### Returns

`boolean`

#### Set Signature

> **set** **applyPostProcess**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L46)

Determines if the layer is drawn before (true) or after (false) post-processing.
If the layer is background, it is always before.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### onAfterRender

#### Set Signature

> **set** **onAfterRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L156)

Back compatibility with callback before the onAfterRenderObservable existed.
The set callback will be triggered just after rendering the layer.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### onBeforeRender

#### Set Signature

> **set** **onBeforeRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L139)

Back compatibility with callback before the onBeforeRenderObservable existed.
The set callback will be triggered just before rendering the layer.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L122)

Back compatibility with callback before the onDisposeObservable existed.
The set callback will be triggered when the layer has been disposed.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L169)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L371)

Disposes and releases the associated resources.

#### Returns

`void`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L267)

Checks if the layer is ready to be rendered

#### Returns

`boolean`

true if the layer is ready. False otherwise.

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/layer.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/layer.ts#L320)

Renders the layer in the scene.

#### Returns

`void`
