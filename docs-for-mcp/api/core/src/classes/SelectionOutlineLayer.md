[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SelectionOutlineLayer

# Class: SelectionOutlineLayer

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L38)

The selection outline layer Helps adding a outline effect around a mesh.

Once instantiated in a scene, simply use the addMesh or removeMesh method to add or remove
outlined meshes to your scene.

## Extends

- [`EffectLayer`](EffectLayer.md)

## Constructors

### Constructor

> **new SelectionOutlineLayer**(`name`, `scene?`, `options?`): `SelectionOutlineLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L119)

Instantiates a new selection outline Layer and references it to the scene..

#### Parameters

##### name

`string`

The name of the layer

##### scene?

[`Scene`](Scene.md)

The scene to use the layer in

##### options?

`Partial`\<[`ISelectionOutlineLayerOptions`](../interfaces/ISelectionOutlineLayerOptions.md)\>

Sets of none mandatory options to use with the layer (see ISelectionOutlineLayerOptions for more information)

#### Returns

`SelectionOutlineLayer`

#### Overrides

[`EffectLayer`](EffectLayer.md).[`constructor`](EffectLayer.md#constructor)

## Properties

### onAfterComposeObservable

> **onAfterComposeObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L228)

An event triggered when the generated texture has been merged in the scene.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onAfterComposeObservable`](EffectLayer.md#onaftercomposeobservable)

***

### onAfterRenderMeshToEffect

> **onAfterRenderMeshToEffect**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L223)

An event triggered after the mesh has been rendered into the effect render target.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onAfterRenderMeshToEffect`](EffectLayer.md#onafterrendermeshtoeffect)

***

### onBeforeComposeObservable

> **onBeforeComposeObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L213)

An event triggered when the generated texture is being merged in the scene.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onBeforeComposeObservable`](EffectLayer.md#onbeforecomposeobservable)

***

### onBeforeRenderMainTextureObservable

> **onBeforeRenderMainTextureObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L208)

An event triggered when the effect layer is about rendering the main texture with the glowy parts.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onBeforeRenderMainTextureObservable`](EffectLayer.md#onbeforerendermaintextureobservable)

***

### onBeforeRenderMeshToEffect

> **onBeforeRenderMeshToEffect**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L218)

An event triggered when the mesh is rendered into the effect render target.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onBeforeRenderMeshToEffect`](EffectLayer.md#onbeforerendermeshtoeffect)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L203)

An event triggered when the effect layer has been disposed.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onDisposeObservable`](EffectLayer.md#ondisposeobservable)

***

### onSizeChangedObservable

> **onSizeChangedObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L233)

An event triggered when the effect layer changes its size.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onSizeChangedObservable`](EffectLayer.md#onsizechangedobservable)

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L131)

The unique id of the layer

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`uniqueId`](EffectLayer.md#uniqueid)

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L173)

Gets the camera attached to the layer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`camera`](EffectLayer.md#camera)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`disableBoundingBoxesFromEffectLayer`](EffectLayer.md#disableboundingboxesfromeffectlayer)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`isEnabled`](EffectLayer.md#isenabled)

***

### mainTexture

#### Get Signature

> **get** **mainTexture**(): [`RenderTargetTexture`](RenderTargetTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L238)

Gets the main texture where the effect is rendered

##### Returns

[`RenderTargetTexture`](RenderTargetTexture.md)

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`mainTexture`](EffectLayer.md#maintexture)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`name`](EffectLayer.md#name)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`neutralColor`](EffectLayer.md#neutralcolor)

***

### occlusionStrength

#### Get Signature

> **get** **occlusionStrength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L74)

The strength of the occlusion effect (default: 0.8)

##### Returns

`number`

#### Set Signature

> **set** **occlusionStrength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L78)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### occlusionThreshold

#### Get Signature

> **get** **occlusionThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L86)

The occlusion threshold (default: 0.01)

##### Returns

`number`

#### Set Signature

> **set** **occlusionThreshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L90)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### outlineColor

#### Get Signature

> **get** **outlineColor**(): [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L50)

The outline color (default (1, 0.5, 0))

##### Returns

[`Color3`](Color3.md)

#### Set Signature

> **set** **outlineColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L54)

##### Parameters

###### value

[`Color3`](Color3.md)

##### Returns

`void`

***

### outlineThickness

#### Get Signature

> **get** **outlineThickness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L62)

The thickness of the edges (default: 2.0)

##### Returns

`number`

#### Set Signature

> **set** **outlineThickness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L66)

##### Parameters

###### value

`number`

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`renderingGroupId`](EffectLayer.md#renderinggroupid)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L249)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`shaderLanguage`](EffectLayer.md#shaderlanguage)

***

### useDepthOcclusion

#### Get Signature

> **get** **useDepthOcclusion**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L99)

Whether to use depth when drawing selection outlines.
Disable this to avoid depth renderer usage; selected outlines will not be clipped by scene or selected geometry.

##### Returns

`boolean`

#### Set Signature

> **set** **useDepthOcclusion**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L103)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### EffectName

#### Get Signature

> **get** `static` **EffectName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L42)

Effect Name of the selection outline layer.

##### Returns

`string`

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`ForceGLSL`](EffectLayer.md#forceglsl)

## Methods

### addSelection()

> **addSelection**(`meshOrGroup`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L340)

Adds mesh or group of mesh to the current selection

If a group of meshes is provided, they will outline as a single unit

#### Parameters

##### meshOrGroup

[`AbstractMesh`](AbstractMesh.md) \| [`AbstractMesh`](AbstractMesh.md)[]

Meshes to add to the selection

#### Returns

`void`

***

### clearSelection()

> **clearSelection**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L329)

Remove all the meshes currently referenced in the selection outline layer

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:655](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L655)

Dispose the highlight layer and free resources.

#### Returns

`void`

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`dispose`](EffectLayer.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L358)

Gets the class name of the effect layer

#### Returns

`string`

the string with the class name of the effect layer

#### Overrides

[`EffectLayer`](EffectLayer.md).[`getClassName`](EffectLayer.md#getclassname)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`getEffectIntensity`](EffectLayer.md#geteffectintensity)

***

### getEffectName()

> **getEffectName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L185)

Get the effect name of the layer.

#### Returns

`string`

The effect name

#### Overrides

[`EffectLayer`](EffectLayer.md).[`getEffectName`](EffectLayer.md#geteffectname)

***

### hasMesh()

> **hasMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L322)

Determine if a given mesh will be highlighted by the current SelectionOutlineLayer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

mesh to test

#### Returns

`boolean`

true if the mesh will be highlighted by the current SelectionOutlineLayer

#### Overrides

[`EffectLayer`](EffectLayer.md).[`hasMesh`](EffectLayer.md#hasmesh)

***

### isLayerReady()

> **isLayerReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L166)

Checks if the layer is ready to render.
When selections are active and depth occlusion is enabled, this also
lazily creates the depth renderer and checks that its depth map is ready.

#### Returns

`boolean`

true if the layer is ready

#### Overrides

[`EffectLayer`](EffectLayer.md).[`isLayerReady`](EffectLayer.md#islayerready)

***

### isReady()

> **isReady**(`subMesh`, `useInstances`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L260)

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

#### Overrides

[`EffectLayer`](EffectLayer.md).[`isReady`](EffectLayer.md#isready)

***

### needStencil()

> **needStencil**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L250)

#### Returns

`boolean`

whether or not the layer needs stencil enabled during the mesh rendering.

#### Overrides

[`EffectLayer`](EffectLayer.md).[`needStencil`](EffectLayer.md#needstencil)

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L546)

Renders the glowing part of the scene by blending the blurred glowing meshes on top of the rendered scene.

#### Returns

`void`

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`render`](EffectLayer.md#render)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L366)

Serializes this SelectionOutline layer

#### Returns

`any`

a serialized SelectionOutline layer object

#### Overrides

[`EffectLayer`](EffectLayer.md).[`serialize`](EffectLayer.md#serialize)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`setEffectIntensity`](EffectLayer.md#seteffectintensity)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`setMaterialForRendering`](EffectLayer.md#setmaterialforrendering)

***

### shouldRender()

> **shouldRender**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L276)

#### Returns

`boolean`

true if the layer contains information to display, otherwise false.

#### Overrides

[`EffectLayer`](EffectLayer.md).[`shouldRender`](EffectLayer.md#shouldrender)

***

### Parse()

> `static` **Parse**(`parsedSelectionOutlineLayer`, `scene`, `rootUrl`): `SelectionOutlineLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/selectionOutlineLayer.pure.ts#L408)

Creates a SelectionOutline layer from parsed SelectionOutline layer data

#### Parameters

##### parsedSelectionOutlineLayer

`any`

defines the SelectionOutline layer data

##### scene

[`Scene`](Scene.md)

defines the current scene

##### rootUrl

`string`

defines the root URL containing the SelectionOutline layer information

#### Returns

`SelectionOutlineLayer`

a parsed SelectionOutline layer

#### Overrides

[`EffectLayer`](EffectLayer.md).[`Parse`](EffectLayer.md#parse)
