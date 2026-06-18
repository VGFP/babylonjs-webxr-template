[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HighlightLayer

# Class: HighlightLayer

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L108)

The highlight layer Helps adding a glow effect around a mesh.

Once instantiated in a scene, simply use the addMesh or removeMesh method to add or remove
glowy meshes to your scene.

!!! THIS REQUIRES AN ACTIVE STENCIL BUFFER ON THE CANVAS !!!

## Extends

- [`EffectLayer`](EffectLayer.md)

## Constructors

### Constructor

> **new HighlightLayer**(`name`, `scene?`, `options?`): `HighlightLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L225)

Instantiates a new highlight Layer and references it to the scene..

#### Parameters

##### name

`string`

The name of the layer

##### scene?

[`Scene`](Scene.md)

The scene to use the layer in

##### options?

`Partial`\<[`IHighlightLayerOptions`](../interfaces/IHighlightLayerOptions.md)\>

Sets of none mandatory options to use with the layer (see IHighlightLayerOptions for more information)

#### Returns

`HighlightLayer`

#### Overrides

[`EffectLayer`](EffectLayer.md).[`constructor`](EffectLayer.md#constructor)

## Properties

### onAfterBlurObservable

> **onAfterBlurObservable**: [`Observable`](Observable.md)\<`HighlightLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L208)

An event triggered when the highlight layer has been blurred.

***

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

### onBeforeBlurObservable

> **onBeforeBlurObservable**: [`Observable`](Observable.md)\<`HighlightLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L203)

An event triggered when the highlight layer is being blurred.

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

### EffectName

> `readonly` `static` **EffectName**: `"HighlightLayer"` = `"HighlightLayer"`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L112)

Effect Name of the highlight layer.

## Accessors

### blurHorizontalSize

#### Get Signature

> **get** **blurHorizontalSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L168)

Gets the horizontal size of the blur.

##### Returns

`number`

#### Set Signature

> **set** **blurHorizontalSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L153)

Specifies the horizontal size of the blur.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### blurVerticalSize

#### Get Signature

> **get** **blurVerticalSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L176)

Gets the vertical size of the blur.

##### Returns

`number`

#### Set Signature

> **set** **blurVerticalSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L160)

Specifies the vertical size of the blur.

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

### innerGlow

#### Get Signature

> **get** **innerGlow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L130)

Specifies whether or not the inner glow is ACTIVE in the layer.

##### Returns

`boolean`

#### Set Signature

> **set** **innerGlow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L134)

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

### numStencilBits

#### Get Signature

> **get** **numStencilBits**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L185)

Number of stencil bits used by the highlight layer (default: 8).
The layer uses the numStencilBits highest bits of the stencil buffer.

##### Returns

`number`

#### Set Signature

> **set** **numStencilBits**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L189)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### outerGlow

#### Get Signature

> **get** **outerGlow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L142)

Specifies whether or not the outer glow is ACTIVE in the layer.

##### Returns

`boolean`

#### Set Signature

> **set** **outerGlow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L146)

##### Parameters

###### value

`boolean`

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

### stencilReference

#### Get Signature

> **get** **stencilReference**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L196)

Gets the stencil reference value used for the meshes rendered by the highlight layer.

##### Returns

`number`

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

***

### NeutralColor

#### Get Signature

> **get** `static` **NeutralColor**(): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L118)

The neutral color used during the preparation of the glow effect.
This is black by default as the blend operation is a blend operation.

##### Returns

[`Color4`](Color4.md)

#### Set Signature

> **set** `static` **NeutralColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L122)

##### Parameters

###### value

[`Color4`](Color4.md)

##### Returns

`void`

## Methods

### addExcludedMesh()

> **addExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L478)

Add a mesh in the exclusion list to prevent it to impact or being impacted by the highlight layer.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to exclude from the highlight layer

#### Returns

`void`

***

### addMesh()

> **addMesh**(`mesh`, `color`, `glowEmissiveOnly?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:505](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L505)

Add a mesh in the highlight layer in order to make it glow with the chosen color.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to highlight

##### color

[`Color3`](Color3.md)

The color of the highlight

##### glowEmissiveOnly?

`boolean` = `false`

Extract the glow from the emissive texture

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L538)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L262)

Get the effect name of the layer.

#### Returns

`string`

The effect name

#### Overrides

[`EffectLayer`](EffectLayer.md).[`getEffectName`](EffectLayer.md#geteffectname)

***

### hasMesh()

> **hasMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L495)

Determine if a given mesh will be highlighted by the current HighlightLayer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

mesh to test

#### Returns

`boolean`

true if the mesh will be highlighted by the current HighlightLayer

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:417](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L417)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L407)

#### Returns

`boolean`

whether or not the layer needs stencil enabled during the mesh rendering.

#### Overrides

[`EffectLayer`](EffectLayer.md).[`needStencil`](EffectLayer.md#needstencil)

***

### removeAllMeshes()

> **removeAllMeshes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L520)

Remove all the meshes currently referenced in the highlight layer

#### Returns

`void`

***

### removeExcludedMesh()

> **removeExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:486](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L486)

Remove a mesh from the exclusion list to let it impact or being impacted by the highlight layer.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to highlight

#### Returns

`void`

***

### removeMesh()

> **removeMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L513)

Remove a mesh from the highlight layer in order to make it stop glowing.

#### Parameters

##### mesh

[`Mesh`](Mesh.md)

The mesh to highlight

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L546)

Serializes this Highlight layer

#### Returns

`any`

a serialized Highlight layer object

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L433)

#### Returns

`boolean`

true if the layer contains information to display, otherwise false.

#### Overrides

[`EffectLayer`](EffectLayer.md).[`shouldRender`](EffectLayer.md#shouldrender)

***

### Parse()

> `static` **Parse**(`parsedHightlightLayer`, `scene`, `rootUrl`): `HighlightLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.pure.ts:592](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Layers/highlightLayer.pure.ts#L592)

Creates a Highlight layer from parsed Highlight layer data

#### Parameters

##### parsedHightlightLayer

`any`

defines the Highlight layer data

##### scene

[`Scene`](Scene.md)

defines the current scene

##### rootUrl

`string`

defines the root URL containing the Highlight layer information

#### Returns

`HighlightLayer`

a parsed Highlight layer

#### Overrides

[`EffectLayer`](EffectLayer.md).[`Parse`](EffectLayer.md#parse)
