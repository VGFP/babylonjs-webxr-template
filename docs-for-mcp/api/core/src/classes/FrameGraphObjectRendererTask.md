[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphObjectRendererTask

# Class: FrameGraphObjectRendererTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L31)

Task used to render objects to a texture.

## Extends

- `FrameGraphTaskMultiRenderTarget`

## Extended by

- [`FrameGraphGeometryRendererTask`](FrameGraphGeometryRendererTask.md)

## Constructors

### Constructor

> **new FrameGraphObjectRendererTask**(`name`, `frameGraph`, `scene`, `options?`, `existingObjectRenderer?`): `FrameGraphObjectRendererTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L370)

Constructs a new object renderer task.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph the task belongs to.

##### scene

[`Scene`](Scene.md)

The scene the frame graph is associated with.

##### options?

[`ObjectRendererOptions`](../interfaces/ObjectRendererOptions.md)

The options of the object renderer.

##### existingObjectRenderer?

[`ObjectRenderer`](ObjectRenderer.md)

An existing object renderer to use (optional). If provided, the options parameter will be ignored.

#### Returns

`FrameGraphObjectRendererTask`

#### Overrides

`FrameGraphTaskMultiRenderTarget.constructor`

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

`FrameGraphTaskMultiRenderTarget.dependencies`

***

### depthTest

> **depthTest**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L69)

If depth testing should be enabled (default is true).

***

### depthTexture?

> `optional` **depthTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L40)

The depth attachment texture where the objects will be rendered (optional).

***

### depthWrite

> **depthWrite**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L74)

If depth writing should be enabled (default is true).

***

### disableShadows

> **disableShadows**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L79)

If shadows should be disabled (default is false).

***

### isMainObjectRenderer

> **isMainObjectRenderer**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L105)

Sets this property to true if this task is the main object renderer of the frame graph.
It will help to locate the main object renderer in the frame graph when multiple object renderers are used.
This is useful for the inspector to know which object renderer to use for additional rendering features like wireframe rendering or frustum light debugging.
It is also used to determine the main camera used by the frame graph: this is the camera used by the main object renderer.

***

### objectList

> **objectList**: [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L64)

The list of objects to render.

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

`FrameGraphTaskMultiRenderTarget.onAfterTaskExecute`

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

`FrameGraphTaskMultiRenderTarget.onBeforeTaskExecute`

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

`FrameGraphTaskMultiRenderTarget.onTexturesAllocatedObservable`

***

### outputDepthTexture

> `readonly` **outputDepthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L331)

The output depth attachment texture.
This texture will point to the same texture than the depthTexture property if it is set.
Note, however, that the handle itself will be different!

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L324)

The output texture.
This texture will point to the same texture than the targetTexture property.
Note, however, that the handle itself will be different!

***

### resolveMSAAColors

> **resolveMSAAColors**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L312)

If true, targetTexture will be resolved at the end of the render pass, if this/these texture(s) is/are MSAA (default: true)

***

### resolveMSAADepth

> **resolveMSAADepth**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L317)

If true, depthTexture will be resolved at the end of the render pass, if this texture is provided and is MSAA (default: false).

***

### shadowGenerators?

> `optional` **shadowGenerators?**: [`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L45)

The shadow generators used to render the objects (optional).

***

### targetTexture

> **targetTexture**: `number` \| `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L35)

The target texture(s) where the objects will be rendered.

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L52)

Gets or sets the camera used to render the objects.

##### Returns

[`Camera`](Camera.md)

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L56)

##### Parameters

###### camera

[`Camera`](Camera.md)

##### Returns

`void`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L43)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`FrameGraphTaskMultiRenderTarget.disabled`

***

### disableImageProcessing

#### Get Signature

> **get** **disableImageProcessing**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L86)

If image processing should be disabled (default is false).
false means that the default image processing configuration will be applied (the one from the scene)

##### Returns

`boolean`

#### Set Signature

> **set** **disableImageProcessing**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L90)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### enableBoundingBoxRendering

#### Get Signature

> **get** **enableBoundingBoxRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L279)

Enables the rendering of bounding boxes for meshes (still subject to Mesh.showBoundingBox or scene.forceShowBoundingBoxes). Default is true.

##### Returns

`boolean`

#### Set Signature

> **set** **enableBoundingBoxRendering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L283)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### enableOutlineRendering

#### Get Signature

> **get** **enableOutlineRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L296)

Enables the rendering of outlines/overlays for meshes (still subject to Mesh.renderOutline/Mesh.renderOverlay). Default is true.

##### Returns

`boolean`

#### Set Signature

> **set** **enableOutlineRendering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L300)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### forceLayerMaskCheck

#### Get Signature

> **get** **forceLayerMaskCheck**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L262)

Forces checking the layerMask property even if a custom list of meshes is provided (ie. if renderList is not undefined). Default is true.

##### Returns

`boolean`

#### Set Signature

> **set** **forceLayerMaskCheck**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L266)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L340)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L344)

The name of the task.

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

`FrameGraphTaskMultiRenderTarget.name`

***

### objectRenderer

#### Get Signature

> **get** **objectRenderer**(): [`ObjectRenderer`](ObjectRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L336)

The object renderer used to render the objects.

##### Returns

[`ObjectRenderer`](ObjectRenderer.md)

***

### oitPassCount

#### Get Signature

> **get** **oitPassCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L213)

Defines the number of passes to use for Order Independent Transparency (default is 5).

##### Returns

`number`

#### Set Signature

> **set** **oitPassCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L217)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

`FrameGraphTaskMultiRenderTarget.passes`

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

`FrameGraphTaskMultiRenderTarget.passesDisabled`

***

### renderAlphaTestMeshes

#### Get Signature

> **get** **renderAlphaTestMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L160)

Defines if alpha test meshes should be rendered (default is true). Always subject to the renderMeshes property, though.

##### Returns

`boolean`

#### Set Signature

> **set** **renderAlphaTestMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L164)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderDepthOnlyMeshes

#### Get Signature

> **get** **renderDepthOnlyMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L128)

Defines if depth only meshes should be rendered (default is true). Always subject to the renderMeshes property, though.

##### Returns

`boolean`

#### Set Signature

> **set** **renderDepthOnlyMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L132)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderMeshes

#### Get Signature

> **get** **renderMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L111)

Defines if meshes should be rendered (default is true).

##### Returns

`boolean`

#### Set Signature

> **set** **renderMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L115)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderOpaqueMeshes

#### Get Signature

> **get** **renderOpaqueMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L144)

Defines if opaque meshes should be rendered (default is true). Always subject to the renderMeshes property, though.

##### Returns

`boolean`

#### Set Signature

> **set** **renderOpaqueMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L148)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderParticles

#### Get Signature

> **get** **renderParticles**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L228)

Defines if particles should be rendered (default is true).

##### Returns

`boolean`

#### Set Signature

> **set** **renderParticles**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L232)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderSprites

#### Get Signature

> **get** **renderSprites**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L245)

Defines if sprites should be rendered (default is true).

##### Returns

`boolean`

#### Set Signature

> **set** **renderSprites**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L249)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderTransparentMeshes

#### Get Signature

> **get** **renderTransparentMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L176)

Defines if transparent meshes should be rendered (default is true). Always subject to the renderMeshes property, though.

##### Returns

`boolean`

#### Set Signature

> **set** **renderTransparentMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L180)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useOITForTransparentMeshes

#### Get Signature

> **get** **useOITForTransparentMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L194)

Defines if Order Independent Transparency should be used for transparent meshes (default is false).

##### Returns

`boolean`

#### Set Signature

> **set** **useOITForTransparentMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L199)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L513)

Disposes of the task.

#### Returns

`void`

#### Overrides

`FrameGraphTaskMultiRenderTarget.dispose`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L407)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

`FrameGraphTaskMultiRenderTarget.getClassName`

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L90)

This function is called once after the task has been added to the frame graph and before the frame graph is built for the first time.
This allows you to initialize asynchronous resources, which is not possible in the constructor.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the initialization is complete.

#### Inherited from

`FrameGraphTaskMultiRenderTarget.initAsync`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L400)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Overrides

`FrameGraphTaskMultiRenderTarget.isReady`

***

### record()

> **record**(`skipCreationOfDisabledPasses?`, `additionalExecute?`): [`FrameGraphRenderPass`](FrameGraphRenderPass.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:417](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L417)

Records the object renderer task into the frame graph.

#### Parameters

##### skipCreationOfDisabledPasses?

`boolean` = `false`

defines whether disabled passes should be skipped

##### additionalExecute?

(`context`) => `void`

defines an optional callback executed by the pass

#### Returns

[`FrameGraphRenderPass`](FrameGraphRenderPass.md)

the recorded render pass

#### Overrides

`FrameGraphTaskMultiRenderTarget.record`

***

### setOutputLayerAndFaceIndices()

> **setOutputLayerAndFaceIndices**(`indices`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTaskMultiRenderTarget.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTaskMultiRenderTarget.ts#L15)

Sets the output layer and face indices for multi-target rendering.

#### Parameters

##### indices

[`LayerAndFaceIndex`](../type-aliases/LayerAndFaceIndex.md)[]

The array of layer and face indices.

#### Returns

`void`

#### Inherited from

`FrameGraphTaskMultiRenderTarget.setOutputLayerAndFaceIndices`
