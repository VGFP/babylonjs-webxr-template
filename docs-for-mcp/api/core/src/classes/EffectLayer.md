[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EffectLayer

# Abstract Class: EffectLayer

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L83)

The effect layer Helps adding post process effect blended with the main pass.

This can be for instance use to generate glow or highlight effects on the scene.

The effect layer class can not be used directly and is intented to inherited from to be
customized per effects.

## Extended by

- [`GlowLayer`](GlowLayer.md)
- [`HighlightLayer`](HighlightLayer.md)
- [`SelectionOutlineLayer`](SelectionOutlineLayer.md)

## Constructors

### Constructor

> **new EffectLayer**(`name`, `scene?`, `forceGLSL?`, `thinEffectLayer?`): `EffectLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L292)

Instantiates a new effect Layer and references it in the scene.

#### Parameters

##### name

`string`

The name of the layer

##### scene?

[`Scene`](Scene.md)

The scene to use the layer in

##### forceGLSL?

`boolean` = `false`

Use the GLSL code generation for the shader (even on WebGPU). Default is false

##### thinEffectLayer?

`ThinEffectLayer`

The thin instance of the effect layer (optional)

#### Returns

`EffectLayer`

## Properties

### onAfterComposeObservable

> **onAfterComposeObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L227)

An event triggered when the generated texture has been merged in the scene.

***

### onAfterRenderMeshToEffect

> **onAfterRenderMeshToEffect**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L222)

An event triggered after the mesh has been rendered into the effect render target.

***

### onBeforeComposeObservable

> **onBeforeComposeObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L212)

An event triggered when the generated texture is being merged in the scene.

***

### onBeforeRenderMainTextureObservable

> **onBeforeRenderMainTextureObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L207)

An event triggered when the effect layer is about rendering the main texture with the glowy parts.

***

### onBeforeRenderMeshToEffect

> **onBeforeRenderMeshToEffect**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L217)

An event triggered when the mesh is rendered into the effect render target.

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L202)

An event triggered when the effect layer has been disposed.

***

### onSizeChangedObservable

> **onSizeChangedObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L232)

An event triggered when the effect layer changes its size.

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L130)

The unique id of the layer

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L172)

Gets the camera attached to the layer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

***

### disableBoundingBoxesFromEffectLayer

#### Get Signature

> **get** **disableBoundingBoxesFromEffectLayer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L191)

Specifies if the bounding boxes should be rendered normally or if they should undergo the effect of the layer

##### Returns

`boolean`

#### Set Signature

> **set** **disableBoundingBoxesFromEffectLayer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L195)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L160)

Specifies whether the highlight layer is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L164)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### mainTexture

#### Get Signature

> **get** **mainTexture**(): [`RenderTargetTexture`](RenderTargetTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L237)

Gets the main texture where the effect is rendered

##### Returns

[`RenderTargetTexture`](RenderTargetTexture.md)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L136)

The name of the layer

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L140)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### neutralColor

#### Get Signature

> **get** **neutralColor**(): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L148)

The clear color of the texture used to generate the glow map.

##### Returns

[`Color4`](Color4.md)

#### Set Signature

> **set** **neutralColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L152)

##### Parameters

###### value

[`Color4`](Color4.md)

##### Returns

`void`

***

### renderingGroupId

#### Get Signature

> **get** **renderingGroupId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L180)

Gets the rendering group id the layer should render in.

##### Returns

`number`

#### Set Signature

> **set** **renderingGroupId**(`renderingGroupId`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L183)

##### Parameters

###### renderingGroupId

`number`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L248)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### ForceGLSL

#### Get Signature

> **get** `static` **ForceGLSL**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L119)

Force all the effect layers to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ForceGLSL**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L123)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### \_disposeMesh()

> `abstract` **\_disposeMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L409)

Free any resources and references associated to a mesh.
Internal use

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to free.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:653](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L653)

Dispose the highlight layer and free resources.

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:676](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L676)

Gets the class name of the effect layer

#### Returns

`string`

the string with the class name of the effect layer

***

### getEffectIntensity()

> **getEffectIntensity**(`mesh`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L272)

Gets the intensity of the effect for a specific mesh.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to get the effect intensity for

#### Returns

`number`

The intensity of the effect for the mesh

***

### getEffectName()

> `abstract` **getEffectName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:364](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L364)

Get the effect name of the layer.

#### Returns

`string`

The effect name

***

### hasMesh()

> **hasMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:571](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L571)

Determine if a given mesh will be used in the current effect.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

mesh to test

#### Returns

`boolean`

true if the mesh will be used

***

### isLayerReady()

> **isLayerReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L537)

Checks if the layer is ready to be used.

#### Returns

`boolean`

true if the layer is ready to be used

***

### isReady()

> `abstract` **isReady**(`subMesh`, `useInstances`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L372)

Checks for the readiness of the element composing the layer.

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

the mesh to check for

##### useInstances

`boolean`

specify whether or not to use instances to render the mesh

#### Returns

`boolean`

true if ready otherwise, false

***

### needStencil()

> `abstract` **needStencil**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:378](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L378)

Returns whether or not the layer needs stencil enabled during the mesh rendering.

#### Returns

`boolean`

true if the effect requires stencil during the main canvas render pass.

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:544](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L544)

Renders the glowing part of the scene by blending the blurred glowing meshes on top of the rendered scene.

#### Returns

`void`

***

### serialize()?

> `abstract` `optional` **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L415)

Serializes this layer (Glow or Highlight for example)

#### Returns

`any`

a serialized layer object

***

### setEffectIntensity()

> **setEffectIntensity**(`mesh`, `intensity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L281)

Sets the intensity of the effect for a specific mesh.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to set the effect intensity for

##### intensity

`number`

The intensity of the effect for the mesh

#### Returns

`void`

***

### setMaterialForRendering()

> **setMaterialForRendering**(`mesh`, `material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L263)

Sets a specific material to be used to render a mesh/a list of meshes in the layer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md) \| [`AbstractMesh`](AbstractMesh.md)[]

mesh or array of meshes

##### material?

[`Material`](Material.md)

material to use by the layer when rendering the mesh(es). If undefined is passed, the specific material created by the layer will be used.

#### Returns

`void`

***

### shouldRender()

> **shouldRender**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:579](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L579)

Returns true if the layer contains information to display, otherwise false.

#### Returns

`boolean`

true if the glow layer should be rendered

***

### Parse()

> `static` **Parse**(`parsedEffectLayer`, `scene`, `rootUrl`): `EffectLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:687](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L687)

Creates an effect layer from parsed effect layer data

#### Parameters

##### parsedEffectLayer

`any`

defines effect layer data

##### scene

[`Scene`](Scene.md)

defines the current scene

##### rootUrl

`string`

defines the root URL containing the effect layer information

#### Returns

`EffectLayer`

a parsed effect Layer
