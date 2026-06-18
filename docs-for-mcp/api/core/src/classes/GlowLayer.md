[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GlowLayer

# Class: GlowLayer

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L48)

The glow layer Helps adding a glow effect around the emissive parts of a mesh.

Once instantiated in a scene, by default, all the emissive meshes will glow.

Documentation: https://doc.babylonjs.com/features/featuresDeepDive/mesh/glowLayer

## Extends

- [`EffectLayer`](EffectLayer.md)

## Constructors

### Constructor

> **new GlowLayer**(`name`, `scene?`, `options?`): `GlowLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L136)

Instantiates a new glow Layer and references it to the scene.

#### Parameters

##### name

`string`

The name of the layer

##### scene?

[`Scene`](Scene.md)

The scene to use the layer in

##### options?

`Partial`\<[`IGlowLayerOptions`](../interfaces/IGlowLayerOptions.md)\>

Sets of none mandatory options to use with the layer (see IGlowLayerOptions for more information)

#### Returns

`GlowLayer`

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

***

### DefaultBlurKernelSize

> `static` **DefaultBlurKernelSize**: `number` = `32`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L59)

The default blur kernel size used for the glow.

***

### DefaultTextureRatio

> `static` **DefaultTextureRatio**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L64)

The default texture size ratio used for the glow.

## Accessors

### blurKernelSize

#### Get Signature

> **get** **blurKernelSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L77)

Gets the kernel size of the blur.

##### Returns

`number`

#### Set Signature

> **set** **blurKernelSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L69)

Sets the kernel size of the blur.

##### Parameters

###### value

`number`

##### Returns

`void`

***

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

### customEmissiveColorSelector

#### Get Signature

> **get** **customEmissiveColorSelector**(): (`mesh`, `subMesh`, `material`, `result`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L111)

Callback used to let the user override the color selection on a per mesh basis

##### Returns

(`mesh`, `subMesh`, `material`, `result`) => `void`

#### Set Signature

> **set** **customEmissiveColorSelector**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L115)

##### Parameters

###### value

(`mesh`, `subMesh`, `material`, `result`) => `void`

##### Returns

`void`

***

### customEmissiveTextureSelector

#### Get Signature

> **get** **customEmissiveTextureSelector**(): (`mesh`, `subMesh`, `material`) => [`Texture`](Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L122)

Callback used to let the user override the texture selection on a per mesh basis

##### Returns

(`mesh`, `subMesh`, `material`) => [`Texture`](Texture.md)

#### Set Signature

> **set** **customEmissiveTextureSelector**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L126)

##### Parameters

###### value

(`mesh`, `subMesh`, `material`) => [`Texture`](Texture.md)

##### Returns

`void`

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

### intensity

#### Get Signature

> **get** **intensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L92)

Gets the glow intensity.

##### Returns

`number`

#### Set Signature

> **set** **intensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L84)

Sets the glow intensity.

##### Parameters

###### value

`number`

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

### EffectName

#### Get Signature

> **get** `static` **EffectName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L52)

Effect Name of the layer.

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

### addExcludedMesh()

> **addExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L387)

Add a mesh in the exclusion list to prevent it to impact or being impacted by the glow layer.
This will not have an effect if meshes are excluded by default (see setExcludedByDefault).

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to exclude from the glow layer

#### Returns

`void`

***

### addIncludedOnlyMesh()

> **addIncludedOnlyMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L404)

Add a mesh in the inclusion list to impact or being impacted by the glow layer.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to include in the glow layer

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L473)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L163)

Get the effect name of the layer.

#### Returns

`string`

The effect name

#### Overrides

[`EffectLayer`](EffectLayer.md).[`getEffectName`](EffectLayer.md#geteffectname)

***

### hasMesh()

> **hasMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:430](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L430)

Determine if a given mesh will be used in the glow layer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to test

#### Returns

`boolean`

true if the mesh will be highlighted by the current glow layer

#### Overrides

[`EffectLayer`](EffectLayer.md).[`hasMesh`](EffectLayer.md#hasmesh)

***

### isLayerReady()

> **isLayerReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L539)

Checks if the layer is ready to be used.

#### Returns

`boolean`

true if the layer is ready to be used

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`isLayerReady`](EffectLayer.md#islayerready)

***

### isReady()

> **isReady**(`subMesh`, `useInstances`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L326)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L333)

#### Returns

`boolean`

whether or not the layer needs stencil enabled during the mesh rendering.

#### Overrides

[`EffectLayer`](EffectLayer.md).[`needStencil`](EffectLayer.md#needstencil)

***

### referenceMeshToUseItsOwnMaterial()

> **referenceMeshToUseItsOwnMaterial**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:447](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L447)

Add a mesh to be rendered through its own material and not with emissive only.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh for which we need to use its material

#### Returns

`void`

***

### removeExcludedMesh()

> **removeExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L396)

Remove a mesh from the exclusion list to let it impact or being impacted by the glow layer.
This will not have an effect if meshes are excluded by default (see setExcludedByDefault).

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to remove

#### Returns

`void`

***

### removeIncludedOnlyMesh()

> **removeIncludedOnlyMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L412)

Remove a mesh from the Inclusion list to prevent it to impact or being impacted by the glow layer.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to remove

#### Returns

`void`

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L481)

Serializes this glow layer

#### Returns

`any`

a serialized glow layer object

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

### setExcludedByDefault()

> **setExcludedByDefault**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L421)

Set the excluded by default option.
If true, all meshes will be excluded by default unless they are added to the inclusion list.

#### Parameters

##### value

`boolean`

The boolean value to set the excluded by default option to

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`setMaterialForRendering`](EffectLayer.md#setmaterialforrendering)

***

### shouldRender()

> **shouldRender**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/effectLayer.ts#L581)

Returns true if the layer contains information to display, otherwise false.

#### Returns

`boolean`

true if the glow layer should be rendered

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`shouldRender`](EffectLayer.md#shouldrender)

***

### unReferenceMeshFromUsingItsOwnMaterial()

> **unReferenceMeshFromUsingItsOwnMaterial**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:455](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L455)

Remove a mesh from being rendered through its own material and not with emissive only.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh for which we need to not use its material

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`parsedGlowLayer`, `scene`, `rootUrl`): `GlowLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.pure.ts:523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/glowLayer.pure.ts#L523)

Creates a Glow Layer from parsed glow layer data

#### Parameters

##### parsedGlowLayer

`any`

defines glow layer data

##### scene

[`Scene`](Scene.md)

defines the current scene

##### rootUrl

`string`

defines the root URL containing the glow layer information

#### Returns

`GlowLayer`

a parsed Glow Layer

#### Overrides

[`EffectLayer`](EffectLayer.md).[`Parse`](EffectLayer.md#parse)
