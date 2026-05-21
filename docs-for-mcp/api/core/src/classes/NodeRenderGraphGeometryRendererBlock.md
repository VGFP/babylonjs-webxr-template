[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphGeometryRendererBlock

# Class: NodeRenderGraphGeometryRendererBlock

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L12)

Block that render geometry of objects to a multi render target

## Extends

- `NodeRenderGraphBaseObjectRendererBlock`

## Constructors

### Constructor

> **new NodeRenderGraphGeometryRendererBlock**(`name`, `frameGraph`, `scene`, `doNotChangeAspectRatio?`, `enableClusteredLights?`): `NodeRenderGraphGeometryRendererBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L30)

Create a new NodeRenderGraphGeometryRendererBlock

#### Parameters

##### name

`string`

defines the block name

##### frameGraph

[`FrameGraph`](FrameGraph.md)

defines the hosting frame graph

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### doNotChangeAspectRatio?

`boolean` = `true`

True (default) to not change the aspect ratio of the scene in the RTT

##### enableClusteredLights?

`boolean` = `true`

True (default) to enable clustered lights

#### Returns

`NodeRenderGraphGeometryRendererBlock`

#### Overrides

`NodeRenderGraphBaseObjectRendererBlock.constructor`

## Properties

### albedoFormat

> **albedoFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L233)

***

### albedoType

> **albedoType**: `number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L236)

***

### comments

> **comments**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L140)

A free comment about the block

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.comments`

***

### irradianceFormat

> **irradianceFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L177)

***

### irradianceType

> **irradianceType**: `number` = `Constants.TEXTURETYPE_HALF_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L180)

***

### linearVelocityFormat

> **linearVelocityFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L254)

***

### linearVelocityType

> **linearVelocityType**: `number` = `Constants.TEXTURETYPE_HALF_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L257)

***

### localPositionFormat

> **localPositionFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L219)

***

### localPositionType

> **localPositionType**: `number` = `Constants.TEXTURETYPE_HALF_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L222)

***

### normalizedViewDepthFormat

> **normalizedViewDepthFormat**: `number` = `Constants.TEXTUREFORMAT_RED`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L191)

***

### normalizedViewDepthType

> **normalizedViewDepthType**: `number` = `Constants.TEXTURETYPE_HALF_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L194)

***

### onBuildObservable

> **onBuildObservable**: [`Observable`](Observable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L59)

Gets an observable raised when the block is built

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.onBuildObservable`

***

### reflectivityFormat

> **reflectivityFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L240)

***

### reflectivityType

> **reflectivityType**: `number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L243)

***

### screenDepthFormat

> **screenDepthFormat**: `number` = `Constants.TEXTUREFORMAT_RED`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L198)

***

### screenDepthType

> **screenDepthType**: `number` = `Constants.TEXTURETYPE_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L201)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L88)

Gets or sets the unique id of the node

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.uniqueId`

***

### velocityFormat

> **velocityFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L247)

***

### velocityType

> **velocityType**: `number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L250)

***

### viewDepthFormat

> **viewDepthFormat**: `number` = `Constants.TEXTUREFORMAT_RED`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L184)

***

### viewDepthType

> **viewDepthType**: `number` = `Constants.TEXTURETYPE_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L187)

***

### viewNormalFormat

> **viewNormalFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L205)

***

### viewNormalType

> **viewNormalType**: `number` = `Constants.TEXTURETYPE_HALF_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L208)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L143)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.visibleOnFrame`

***

### worldNormalFormat

> **worldNormalFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L212)

***

### worldNormalType

> **worldNormalType**: `number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L215)

***

### worldPositionFormat

> **worldPositionFormat**: `number` = `Constants.TEXTUREFORMAT_RGBA`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L226)

***

### worldPositionType

> **worldPositionType**: `number` = `Constants.TEXTURETYPE_HALF_FLOAT`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L229)

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L380)

Gets the camera input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.camera`

***

### dependencies

#### Get Signature

> **get** **dependencies**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L394)

Gets the dependencies input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.dependencies`

***

### depth

#### Get Signature

> **get** **depth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L373)

Gets the depth texture input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.depth`

***

### depthTest

#### Get Signature

> **get** **depthTest**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L155)

Indicates if depth testing must be enabled or disabled

##### Returns

`boolean`

#### Set Signature

> **set** **depthTest**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L159)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.depthTest`

***

### depthWrite

#### Get Signature

> **get** **depthWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L165)

Indicates if depth writing must be enabled or disabled

##### Returns

`boolean`

#### Set Signature

> **set** **depthWrite**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L169)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.depthWrite`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L39)

Gets or sets the disable flag of the task associated with this block

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L43)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.disabled`

***

### disableDepthPrePass

#### Get Signature

> **get** **disableDepthPrePass**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L167)

Indicates if depth pre-pass must be disabled

##### Returns

`boolean`

#### Set Signature

> **set** **disableDepthPrePass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L171)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### disableShadows

#### Get Signature

> **get** **disableShadows**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L297)

Indicates if shadows must be enabled or disabled

##### Returns

`boolean`

#### Set Signature

> **set** **disableShadows**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L301)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.disableShadows`

***

### doNotChangeAspectRatio

#### Get Signature

> **get** **doNotChangeAspectRatio**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L317)

True (default) to not change the aspect ratio of the scene in the RTT

##### Returns

`boolean`

#### Set Signature

> **set** **doNotChangeAspectRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L321)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.doNotChangeAspectRatio`

***

### dontRenderWhenMaterialDepthWriteIsDisabled

#### Get Signature

> **get** **dontRenderWhenMaterialDepthWriteIsDisabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L157)

Indicates if a mesh shouldn't be rendered when its material has depth write disabled

##### Returns

`boolean`

#### Set Signature

> **set** **dontRenderWhenMaterialDepthWriteIsDisabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L161)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### enableBoundingBoxRendering

#### Get Signature

> **get** **enableBoundingBoxRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L277)

Indicates if bounding boxes should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **enableBoundingBoxRendering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L281)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.enableBoundingBoxRendering`

***

### enableClusteredLights

#### Get Signature

> **get** **enableClusteredLights**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L327)

True (default) to enable clustered lights

##### Returns

`boolean`

#### Set Signature

> **set** **enableClusteredLights**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L331)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.enableClusteredLights`

***

### enableOutlineRendering

#### Get Signature

> **get** **enableOutlineRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L287)

Indicates if outlines/overlays should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **enableOutlineRendering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L291)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.enableOutlineRendering`

***

### forceLayerMaskCheck

#### Get Signature

> **get** **forceLayerMaskCheck**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L267)

Indicates if layer mask check must be forced

##### Returns

`boolean`

#### Set Signature

> **set** **forceLayerMaskCheck**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L271)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.forceLayerMaskCheck`

***

### geomAlbedo

#### Get Signature

> **get** **geomAlbedo**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L326)

Gets the geometry albedo component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomIrradiance

#### Get Signature

> **get** **geomIrradiance**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L270)

Gets the geometry irradiance component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomLinearVelocity

#### Get Signature

> **get** **geomLinearVelocity**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:347](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L347)

Gets the geometry linear velocity component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomLocalPosition

#### Get Signature

> **get** **geomLocalPosition**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L312)

Gets the geometry local position component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomNormViewDepth

#### Get Signature

> **get** **geomNormViewDepth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L284)

Gets the geometry normalized view depth component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomReflectivity

#### Get Signature

> **get** **geomReflectivity**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L333)

Gets the geometry reflectivity component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomScreenDepth

#### Get Signature

> **get** **geomScreenDepth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L291)

Gets the geometry screen depth component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomVelocity

#### Get Signature

> **get** **geomVelocity**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L340)

Gets the geometry velocity component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomViewDepth

#### Get Signature

> **get** **geomViewDepth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L277)

Gets the geometry view depth component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomViewNormal

#### Get Signature

> **get** **geomViewNormal**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L298)

Gets the geometry view normal component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomWorldNormal

#### Get Signature

> **get** **geomWorldNormal**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L305)

Gets the world geometry normal component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### geomWorldPosition

#### Get Signature

> **get** **geomWorldPosition**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L319)

Gets the geometry world position component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L117)

Height of the geometry texture

##### Returns

`number`

#### Set Signature

> **set** **height**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L121)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L76)

Gets the list of input points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.inputs`

***

### isDebug

#### Get Signature

> **get** **isDebug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L125)

Gets a boolean indicating if this block is a debug block

##### Returns

`boolean`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.isDebug`

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L104)

Gets a boolean indicating if this block is an input

##### Returns

`boolean`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.isInput`

***

### isMainObjectRenderer

#### Get Signature

> **get** **isMainObjectRenderer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L145)

Indicates that this object renderer is the main object renderer of the frame graph.

##### Returns

`boolean`

#### Set Signature

> **set** **isMainObjectRenderer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L149)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.isMainObjectRenderer`

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L118)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.isTeleportIn`

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L111)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.isTeleportOut`

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L132)

Gets a boolean indicating that this block can only be used once per node render graph

##### Returns

`boolean`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.isUnique`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L93)

Gets or set the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L97)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.name`

***

### objectRenderer

#### Get Signature

> **get** **objectRenderer**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:422](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L422)

Gets the objectRenderer component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.objectRenderer`

***

### objects

#### Get Signature

> **get** **objects**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L387)

Gets the objects input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.objects`

***

### oitPassCount

#### Get Signature

> **get** **oitPassCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L237)

Defines the number of passes to use for Order Independent Transparency

##### Returns

`number`

#### Set Signature

> **set** **oitPassCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L241)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.oitPassCount`

***

### output

#### Get Signature

> **get** **output**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L408)

Gets the output component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.output`

***

### outputDepth

#### Get Signature

> **get** **outputDepth**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L415)

Gets the output depth component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.outputDepth`

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L81)

Gets the list of output points

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)[]

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.outputs`

***

### renderAlphaTestMeshes

#### Get Signature

> **get** **renderAlphaTestMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L205)

Indicates if alpha tested meshes should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **renderAlphaTestMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L209)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.renderAlphaTestMeshes`

***

### renderDepthOnlyMeshes

#### Get Signature

> **get** **renderDepthOnlyMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L185)

Indicates if depth-only meshes should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **renderDepthOnlyMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L189)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.renderDepthOnlyMeshes`

***

### renderInLinearSpace

#### Get Signature

> **get** **renderInLinearSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L307)

If image processing should be disabled

##### Returns

`boolean`

#### Set Signature

> **set** **renderInLinearSpace**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L311)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.renderInLinearSpace`

***

### renderMeshes

#### Get Signature

> **get** **renderMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L175)

Indicates if meshes should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **renderMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L179)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.renderMeshes`

***

### renderOpaqueMeshes

#### Get Signature

> **get** **renderOpaqueMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L195)

Indicates if opaque meshes should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **renderOpaqueMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L199)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.renderOpaqueMeshes`

***

### renderParticles

#### Get Signature

> **get** **renderParticles**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L247)

Indicates if particles should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **renderParticles**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L251)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.renderParticles`

***

### renderSprites

#### Get Signature

> **get** **renderSprites**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L257)

Indicates if sprites should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **renderSprites**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L261)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.renderSprites`

***

### renderTransparentMeshes

#### Get Signature

> **get** **renderTransparentMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L215)

Indicates if transparent meshes should be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **renderTransparentMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L219)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.renderTransparentMeshes`

***

### resolveMSAAColors

#### Get Signature

> **get** **resolveMSAAColors**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L337)

If true, MSAA color textures will be resolved at the end of the render pass (default: true)

##### Returns

`boolean`

#### Set Signature

> **set** **resolveMSAAColors**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L341)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.resolveMSAAColors`

***

### resolveMSAADepth

#### Get Signature

> **get** **resolveMSAADepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:347](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L347)

If true, MSAA depth texture will be resolved at the end of the render pass (default: false)

##### Returns

`boolean`

#### Set Signature

> **set** **resolveMSAADepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L351)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.resolveMSAADepth`

***

### reverseCulling

#### Get Signature

> **get** **reverseCulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L147)

Indicates if culling must be reversed

##### Returns

`boolean`

#### Set Signature

> **set** **reverseCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L151)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L137)

Number of samples of the geometry texture

##### Returns

`number`

#### Set Signature

> **set** **samples**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L141)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowGenerators

#### Get Signature

> **get** **shadowGenerators**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L401)

Gets the shadowGenerators input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.shadowGenerators`

***

### sizeInPercentage

#### Get Signature

> **get** **sizeInPercentage**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L127)

Indicates if the geometry texture width and height are percentages or absolute values

##### Returns

`boolean`

#### Set Signature

> **set** **sizeInPercentage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L131)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### target

#### Get Signature

> **get** **target**(): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L366)

Gets the target texture input component

##### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.target`

***

### task

#### Get Signature

> **get** **task**(): [`FrameGraphGeometryRendererTask`](FrameGraphGeometryRendererTask.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L18)

Gets the frame graph task associated with this block

##### Returns

[`FrameGraphGeometryRendererTask`](FrameGraphGeometryRendererTask.md)

#### Overrides

`NodeRenderGraphBaseObjectRendererBlock.task`

***

### useOITForTransparentMeshes

#### Get Signature

> **get** **useOITForTransparentMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L226)

Indicates if use of Order Independent Transparency (OIT) for transparent meshes should be enabled

##### Returns

`boolean`

#### Set Signature

> **set** **useOITForTransparentMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/baseObjectRendererBlock.ts#L231)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.useOITForTransparentMeshes`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L107)

Width of the geometry texture

##### Returns

`number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L111)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:509](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L509)

#### Parameters

##### serializationObject

`any`

#### Returns

`void`

#### Overrides

`NodeRenderGraphBaseObjectRendererBlock._deserialize`

***

### autoConfigure()

> **autoConfigure**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:435](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L435)

Lets the block try to connect some inputs automatically

#### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.autoConfigure`

***

### build()

> **build**(`state`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L331)

Build the current node and generate the vertex data

#### Parameters

##### state

[`NodeRenderGraphBuildState`](NodeRenderGraphBuildState.md)

defines the current generation state

#### Returns

`boolean`

true if already built

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.build`

***

### clone()

> **clone**(): [`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:656](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L656)

Clone the current block to a new identical block

#### Returns

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md) \| `null`

a copy of the current block

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.clone`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:675](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L675)

Release resources

#### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.dispose`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L263)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

`NodeRenderGraphBaseObjectRendererBlock.getClassName`

***

### getDescendantOfPredicate()

> **getDescendantOfPredicate**(`predicate`): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L215)

Get the first descendant using a predicate

#### Parameters

##### predicate

(`block`) => `boolean`

defines the predicate to check

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)\>

descendant or null if none found

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.getDescendantOfPredicate`

***

### getInputByName()

> **getInputByName**(`name`): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L444)

Find an input by its name

#### Parameters

##### name

`string`

defines the name of the input to look for

#### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md) \| `null`

the input or null if not found

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.getInputByName`

***

### getOutputByName()

> **getOutputByName**(`name`): [`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:459](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L459)

Find an output by its name

#### Parameters

##### name

`string`

defines the name of the output to look for

#### Returns

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md) \| `null`

the output or null if not found

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.getOutputByName`

***

### initialize()

> **initialize**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L428)

Initialize the block and prepare the context for build

#### Returns

`void`

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.initialize`

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L166)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

[`NodeRenderGraphBlock`](NodeRenderGraphBlock.md)

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.isAnAncestorOf`

***

### isAnAncestorOfType()

> **isAnAncestorOfType**(`type`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L190)

Checks if the current block is an ancestor of a given type

#### Parameters

##### type

`string`

defines the potential type to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.isAnAncestorOfType`

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `point?`): `NodeRenderGraphGeometryRendererBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L259)

Register a new input. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

defines the connection point type

##### isOptional?

`boolean` = `false`

defines a boolean indicating that this input can be omitted

##### point?

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`NodeRenderGraphGeometryRendererBlock`

the current block

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.registerInput`

***

### registerOutput()

> **registerOutput**(`name`, `type`, `point?`): `NodeRenderGraphGeometryRendererBlock`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBlock.ts#L276)

Register a new output. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeRenderGraphBlockConnectionPointTypes`](../enumerations/NodeRenderGraphBlockConnectionPointTypes.md)

defines the connection point type

##### point?

[`NodeRenderGraphConnectionPoint`](NodeRenderGraphConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`NodeRenderGraphGeometryRendererBlock`

the current block

#### Inherited from

`NodeRenderGraphBaseObjectRendererBlock.registerOutput`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts:473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Node/Blocks/Rendering/geometryRendererBlock.ts#L473)

#### Returns

`any`

#### Overrides

`NodeRenderGraphBaseObjectRendererBlock.serialize`
