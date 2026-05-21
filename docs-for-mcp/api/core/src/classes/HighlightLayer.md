[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HighlightLayer

# Class: HighlightLayer

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L127)

The highlight layer Helps adding a glow effect around a mesh.

Once instantiated in a scene, simply use the addMesh or removeMesh method to add or remove
glowy meshes to your scene.

!!! THIS REQUIRES AN ACTIVE STENCIL BUFFER ON THE CANVAS !!!

## Extends

- [`EffectLayer`](EffectLayer.md)

## Constructors

### Constructor

> **new HighlightLayer**(`name`, `scene?`, `options?`): `HighlightLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L244)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L227)

An event triggered when the highlight layer has been blurred.

***

### onAfterComposeObservable

> **onAfterComposeObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L227)

An event triggered when the generated texture has been merged in the scene.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onAfterComposeObservable`](EffectLayer.md#onaftercomposeobservable)

***

### onAfterRenderMeshToEffect

> **onAfterRenderMeshToEffect**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L222)

An event triggered after the mesh has been rendered into the effect render target.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onAfterRenderMeshToEffect`](EffectLayer.md#onafterrendermeshtoeffect)

***

### onBeforeBlurObservable

> **onBeforeBlurObservable**: [`Observable`](Observable.md)\<`HighlightLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L222)

An event triggered when the highlight layer is being blurred.

***

### onBeforeComposeObservable

> **onBeforeComposeObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L212)

An event triggered when the generated texture is being merged in the scene.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onBeforeComposeObservable`](EffectLayer.md#onbeforecomposeobservable)

***

### onBeforeRenderMainTextureObservable

> **onBeforeRenderMainTextureObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L207)

An event triggered when the effect layer is about rendering the main texture with the glowy parts.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onBeforeRenderMainTextureObservable`](EffectLayer.md#onbeforerendermaintextureobservable)

***

### onBeforeRenderMeshToEffect

> **onBeforeRenderMeshToEffect**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L217)

An event triggered when the mesh is rendered into the effect render target.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onBeforeRenderMeshToEffect`](EffectLayer.md#onbeforerendermeshtoeffect)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L202)

An event triggered when the effect layer has been disposed.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onDisposeObservable`](EffectLayer.md#ondisposeobservable)

***

### onSizeChangedObservable

> **onSizeChangedObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L232)

An event triggered when the effect layer changes its size.

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`onSizeChangedObservable`](EffectLayer.md#onsizechangedobservable)

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L130)

The unique id of the layer

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`uniqueId`](EffectLayer.md#uniqueid)

***

### EffectName

> `readonly` `static` **EffectName**: `"HighlightLayer"` = `"HighlightLayer"`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L131)

Effect Name of the highlight layer.

## Accessors

### blurHorizontalSize

#### Get Signature

> **get** **blurHorizontalSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L187)

Gets the horizontal size of the blur.

##### Returns

`number`

#### Set Signature

> **set** **blurHorizontalSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L172)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L195)

Gets the vertical size of the blur.

##### Returns

`number`

#### Set Signature

> **set** **blurVerticalSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L179)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L172)

Gets the camera attached to the layer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`camera`](EffectLayer.md#camera)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`disableBoundingBoxesFromEffectLayer`](EffectLayer.md#disableboundingboxesfromeffectlayer)

***

### innerGlow

#### Get Signature

> **get** **innerGlow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L149)

Specifies whether or not the inner glow is ACTIVE in the layer.

##### Returns

`boolean`

#### Set Signature

> **set** **innerGlow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L153)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`isEnabled`](EffectLayer.md#isenabled)

***

### mainTexture

#### Get Signature

> **get** **mainTexture**(): [`RenderTargetTexture`](RenderTargetTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L237)

Gets the main texture where the effect is rendered

##### Returns

[`RenderTargetTexture`](RenderTargetTexture.md)

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`mainTexture`](EffectLayer.md#maintexture)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`name`](EffectLayer.md#name)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`neutralColor`](EffectLayer.md#neutralcolor)

***

### numStencilBits

#### Get Signature

> **get** **numStencilBits**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L204)

Number of stencil bits used by the highlight layer (default: 8).
The layer uses the numStencilBits highest bits of the stencil buffer.

##### Returns

`number`

#### Set Signature

> **set** **numStencilBits**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L208)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### outerGlow

#### Get Signature

> **get** **outerGlow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L161)

Specifies whether or not the outer glow is ACTIVE in the layer.

##### Returns

`boolean`

#### Set Signature

> **set** **outerGlow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L165)

##### Parameters

###### value

`boolean`

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`renderingGroupId`](EffectLayer.md#renderinggroupid)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L248)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`shaderLanguage`](EffectLayer.md#shaderlanguage)

***

### stencilReference

#### Get Signature

> **get** **stencilReference**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L215)

Gets the stencil reference value used for the meshes rendered by the highlight layer.

##### Returns

`number`

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`ForceGLSL`](EffectLayer.md#forceglsl)

***

### NeutralColor

#### Get Signature

> **get** `static` **NeutralColor**(): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L137)

The neutral color used during the preparation of the glow effect.
This is black by default as the blend operation is a blend operation.

##### Returns

[`Color4`](Color4.md)

#### Set Signature

> **set** `static` **NeutralColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L141)

##### Parameters

###### value

[`Color4`](Color4.md)

##### Returns

`void`

## Methods

### addExcludedMesh()

> **addExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:497](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L497)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L524)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:653](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L653)

Dispose the highlight layer and free resources.

#### Returns

`void`

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`dispose`](EffectLayer.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:557](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L557)

Gets the class name of the effect layer

#### Returns

`string`

the string with the class name of the effect layer

#### Overrides

[`EffectLayer`](EffectLayer.md).[`getClassName`](EffectLayer.md#getclassname)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`getEffectIntensity`](EffectLayer.md#geteffectintensity)

***

### getEffectName()

> **getEffectName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L281)

Get the effect name of the layer.

#### Returns

`string`

The effect name

#### Overrides

[`EffectLayer`](EffectLayer.md).[`getEffectName`](EffectLayer.md#geteffectname)

***

### hasMesh()

> **hasMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:514](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L514)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L537)

Checks if the layer is ready to be used.

#### Returns

`boolean`

true if the layer is ready to be used

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`isLayerReady`](EffectLayer.md#islayerready)

***

### isReady()

> **isReady**(`subMesh`, `useInstances`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:436](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L436)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L426)

#### Returns

`boolean`

whether or not the layer needs stencil enabled during the mesh rendering.

#### Overrides

[`EffectLayer`](EffectLayer.md).[`needStencil`](EffectLayer.md#needstencil)

***

### removeAllMeshes()

> **removeAllMeshes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:539](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L539)

Remove all the meshes currently referenced in the highlight layer

#### Returns

`void`

***

### removeExcludedMesh()

> **removeExcludedMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:505](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L505)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:532](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L532)

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

Defined in: [babylonjs-source/packages/dev/core/src/Layers/effectLayer.ts:544](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/effectLayer.ts#L544)

Renders the glowing part of the scene by blending the blurred glowing meshes on top of the rendered scene.

#### Returns

`void`

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`render`](EffectLayer.md#render)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L565)

Serializes this Highlight layer

#### Returns

`any`

a serialized Highlight layer object

#### Overrides

[`EffectLayer`](EffectLayer.md).[`serialize`](EffectLayer.md#serialize)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`setEffectIntensity`](EffectLayer.md#seteffectintensity)

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

#### Inherited from

[`EffectLayer`](EffectLayer.md).[`setMaterialForRendering`](EffectLayer.md#setmaterialforrendering)

***

### shouldRender()

> **shouldRender**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:452](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L452)

#### Returns

`boolean`

true if the layer contains information to display, otherwise false.

#### Overrides

[`EffectLayer`](EffectLayer.md).[`shouldRender`](EffectLayer.md#shouldrender)

***

### Parse()

> `static` **Parse**(`parsedHightlightLayer`, `scene`, `rootUrl`): `HighlightLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:611](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L611)

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
