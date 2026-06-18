[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoundingBoxRenderer

# Class: BoundingBoxRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L41)

Component responsible of rendering the bounding box of the meshes in a scene.
This is usually used through the mesh.showBoundingBox or the scene.forceShowBoundingBoxes properties

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new BoundingBoxRenderer**(`scene`): `BoundingBoxRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L137)

Instantiates a new bounding box renderer in a scene.

#### Parameters

##### scene

[`Scene`](Scene.md)

the scene the  renderer renders in

#### Returns

`BoundingBoxRenderer`

## Properties

### backColor

> **backColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L59)

Color of the bounding box lines placed behind an object

***

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L91)

When false, no bounding boxes will be rendered

***

### frontColor

> **frontColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L55)

Color of the bounding box lines placed in front of an object

***

### name

> `readonly` **name**: `"BoundingBoxRenderer"` = `SceneComponentConstants.NAME_BOUNDINGBOXRENDERER`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L45)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### onAfterBoxRenderingObservable

> **onAfterBoxRenderingObservable**: [`Observable`](Observable.md)\<[`BoundingBox`](BoundingBox.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L81)

Observable raised after rendering a bounding box
When [BoundingBoxRenderer.useInstances](#useinstances) enabled,
this would only be triggered once for one rendering, instead of once every bounding box.
Events would be triggered with a dummy box to keep backwards compatibility,
the passed bounding box has no meaning and should be ignored.

***

### onBeforeBoxRenderingObservable

> **onBeforeBoxRenderingObservable**: [`Observable`](Observable.md)\<[`BoundingBox`](BoundingBox.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L72)

Observable raised before rendering a bounding box
When [BoundingBoxRenderer.useInstances](#useinstances) enabled,
this would only be triggered once for one rendering, instead of once every bounding box.
Events would be triggered with a dummy box to keep backwards compatibility,
the passed bounding box has no meaning and should be ignored.

***

### onResourcesReadyObservable

> **onResourcesReadyObservable**: [`Observable`](Observable.md)\<`BoundingBoxRenderer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L86)

Observable raised after resources are created

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L50)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

***

### showBackLines

> **showBackLines**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L63)

Defines if the renderer should show the back lines or not

## Accessors

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L99)

Gets the shader language used in this renderer.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### useInstances

#### Get Signature

> **get** **useInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:533](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L533)

##### Returns

`boolean`

#### Set Signature

> **set** **useInstances**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L523)

Sets whether to use instanced rendering.
When not enabled, BoundingBoxRenderer renders in a loop,
calling engine.drawElementsType for each bounding box in renderList,
making every bounding box 1 or 2 draw call.
When enabled, it collects bounding boxes to render,
and render all boxes in 1 or 2 draw call.
This could make the rendering with many bounding boxes much faster than not enabled,
but could result in a difference in rendering result if
[BoundingBoxRenderer.showBackLines](#showbacklines) enabled,
because drawing the black/white part of each box one after the other
can be different from drawing the black part of all boxes and then the white part.
Also, when enabled, events of [BoundingBoxRenderer.onBeforeBoxRenderingObservable](#onbeforeboxrenderingobservable)
and [BoundingBoxRenderer.onAfterBoxRenderingObservable](#onafterboxrenderingobservable) would only be triggered once
for one rendering, instead of once every bounding box.
Events would be triggered with a dummy box to keep backwards compatibility,
the passed bounding box has no meaning and should be ignored.

##### Parameters

###### val

`boolean`

whether to use instanced rendering

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:732](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L732)

Dispose and release the resources attached to this renderer.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L305)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L163)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)

***

### render()

> **render**(`renderingGroupId`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L328)

Render the bounding boxes of a specific rendering group

#### Parameters

##### renderingGroupId

`number`

defines the rendering group to render

#### Returns

`void`

***

### renderOcclusionBoundingBox()

> **renderOcclusionBoundingBox**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L436)

In case of occlusion queries, we can render the occlusion bounding box through this method

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Define the mesh to render the occlusion bounding box for

#### Returns

`void`

***

### whenReadyAsync()

> **whenReadyAsync**(`timeStep?`, `maxTimeout?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.pure.ts#L179)

Checks if the renderer is ready asynchronously.

#### Parameters

##### timeStep?

`number` = `16`

Time step in ms between retries (default is 16)

##### maxTimeout?

`number` = `30000`

Maximum time in ms to wait for the graph to be ready (default is 30000)

#### Returns

`Promise`\<`void`\>

The promise that resolves when the renderer is ready
