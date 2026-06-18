[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EffectLayer

# Abstract Class: EffectLayer

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L84)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L293)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L228)

An event triggered when the generated texture has been merged in the scene.

***

### onAfterRenderMeshToEffect

> **onAfterRenderMeshToEffect**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L223)

An event triggered after the mesh has been rendered into the effect render target.

***

### onBeforeComposeObservable

> **onBeforeComposeObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L213)

An event triggered when the generated texture is being merged in the scene.

***

### onBeforeRenderMainTextureObservable

> **onBeforeRenderMainTextureObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L208)

An event triggered when the effect layer is about rendering the main texture with the glowy parts.

***

### onBeforeRenderMeshToEffect

> **onBeforeRenderMeshToEffect**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L218)

An event triggered when the mesh is rendered into the effect render target.

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L203)

An event triggered when the effect layer has been disposed.

***

### onSizeChangedObservable

> **onSizeChangedObservable**: [`Observable`](Observable.md)\<`EffectLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L233)

An event triggered when the effect layer changes its size.

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L131)

The unique id of the layer

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L173)

Gets the camera attached to the layer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

***

### disableBoundingBoxesFromEffectLayer

#### Get Signature

> **get** **disableBoundingBoxesFromEffectLayer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L192)

Specifies if the bounding boxes should be rendered normally or if they should undergo the effect of the layer

##### Returns

`boolean`

#### Set Signature

> **set** **disableBoundingBoxesFromEffectLayer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L196)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L161)

Specifies whether the highlight layer is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L165)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### mainTexture

#### Get Signature

> **get** **mainTexture**(): [`RenderTargetTexture`](RenderTargetTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L238)

Gets the main texture where the effect is rendered

##### Returns

[`RenderTargetTexture`](RenderTargetTexture.md)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L137)

The name of the layer

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L141)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### neutralColor

#### Get Signature

> **get** **neutralColor**(): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L149)

The clear color of the texture used to generate the glow map.

##### Returns

[`Color4`](Color4.md)

#### Set Signature

> **set** **neutralColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L153)

##### Parameters

###### value

[`Color4`](Color4.md)

##### Returns

`void`

***

### renderingGroupId

#### Get Signature

> **get** **renderingGroupId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L181)

Gets the rendering group id the layer should render in.

##### Returns

`number`

#### Set Signature

> **set** **renderingGroupId**(`renderingGroupId`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L184)

##### Parameters

###### renderingGroupId

`number`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L249)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### ForceGLSL

#### Get Signature

> **get** `static` **ForceGLSL**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L120)

Force all the effect layers to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ForceGLSL**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L124)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### \_disposeMesh()

> `abstract` **\_disposeMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:411](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L411)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:655](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L655)

Dispose the highlight layer and free resources.

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:678](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L678)

Gets the class name of the effect layer

#### Returns

`string`

the string with the class name of the effect layer

***

### getEffectIntensity()

> **getEffectIntensity**(`mesh`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L273)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L366)

Get the effect name of the layer.

#### Returns

`string`

The effect name

***

### hasMesh()

> **hasMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L573)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L539)

Checks if the layer is ready to be used.

#### Returns

`boolean`

true if the layer is ready to be used

***

### isReady()

> `abstract` **isReady**(`subMesh`, `useInstances`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L374)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L380)

Returns whether or not the layer needs stencil enabled during the mesh rendering.

#### Returns

`boolean`

true if the effect requires stencil during the main canvas render pass.

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L546)

Renders the glowing part of the scene by blending the blurred glowing meshes on top of the rendered scene.

#### Returns

`void`

***

### serialize()?

> `abstract` `optional` **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:417](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L417)

Serializes this layer (Glow or Highlight for example)

#### Returns

`any`

a serialized layer object

***

### setEffectIntensity()

> **setEffectIntensity**(`mesh`, `intensity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L282)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L264)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L581)

Returns true if the layer contains information to display, otherwise false.

#### Returns

`boolean`

true if the glow layer should be rendered

***

### Parse()

> `static` **Parse**(`parsedEffectLayer`, `scene`, `rootUrl`): `EffectLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:689](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L689)

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
