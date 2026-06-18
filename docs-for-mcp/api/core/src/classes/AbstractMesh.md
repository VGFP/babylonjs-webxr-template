[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractMesh

# Abstract Class: AbstractMesh

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L353)

Class used to store all common mesh properties

## Extends

- [`TransformNode`](TransformNode.md)

## Extended by

- [`InstancedMesh`](InstancedMesh.md)
- [`Mesh`](Mesh.md)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)
- [`ICullable`](../interfaces/ICullable.md)
- [`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md)

## Constructors

### Constructor

> **new AbstractMesh**(`name`, `scene?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1112)

Creates a new AbstractMesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `null`

defines the hosting scene

#### Returns

`AbstractMesh`

#### Overrides

`TransformNode.constructor`

## Properties

### actionManager

> **actionManager**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractActionManager`](AbstractActionManager.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:938](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L938)

Gets or sets the current action manager

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

***

### alphaIndex

> **alphaIndex**: `number` = `Number.MAX_VALUE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:669](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L669)

Gets or sets the alpha index used to sort transparent meshes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#alpha-index

***

### alwaysSelectAsActiveMesh

> **alwaysSelectAsActiveMesh**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:927](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L927)

True if the mesh must be rendered in any case (this will shortcut the frustum clipping phase)

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`TransformNode`](TransformNode.md).[`animations`](TransformNode.md#animations)

***

### cullingStrategy

> **cullingStrategy**: `number` = `AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:465](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L465)

The culling strategy to use to check whether the mesh must be rendered or not.
This value can be changed at any time and will be used on the next render mesh selection.
The possible values are :
- AbstractMesh.CULLINGSTRATEGY_STANDARD
- AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
- AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION
- AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY
Please read each static variable documentation to get details about the culling process.

***

### customMarkAsDirty

> **customMarkAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L264)

Allow user to specify custom mechanism for mark as dirty

#### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`customMarkAsDirty`](TransformNode.md#custommarkasdirty)

***

### decalMap

> **decalMap**: [`Nullable`](../type-aliases/Nullable.md)\<[`MeshUVSpaceRenderer`](MeshUVSpaceRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.decalMap.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.decalMap.types.ts#L13)

Gets or sets the decal map for this mesh

***

### definedFacingForward

> **definedFacingForward**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L631)

Gets or sets the orientation for POV movement & rotation

***

### doNotSyncBoundingInfo

> **doNotSyncBoundingInfo**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:932](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L932)

Gets or sets a boolean indicating that the bounding info does not need to be kept in sync (for performance reason)

***

### edgesColor

> **edgesColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1015](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1015)

Defines edge color used when edgesRenderer is enabled

#### See

https://www.babylonjs-playground.com/#10OJSG#13

***

### edgesRenderer

> **edgesRenderer**: [`Nullable`](../type-aliases/Nullable.md)\<[`EdgesRenderer`](EdgesRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.types.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.types.ts#L18)

Gets the edgesRenderer associated with the mesh

***

### edgesWidth

> **edgesWidth**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1010](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1010)

Defines edge width used when edgesRenderer is enabled

#### See

https://www.babylonjs-playground.com/#10OJSG#13

***

### ellipsoid

> **ellipsoid**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:944](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L944)

Gets or sets the ellipsoid used to impersonate this mesh when using collision engine (default is (0.5, 1, 0.5))

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

***

### ellipsoidOffset

> **ellipsoidOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:949](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L949)

Gets or sets the ellipsoid offset used to impersonate this mesh when using collision engine (default is (0, 0, 0))

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

***

### enablePointerMoveEvents

> **enablePointerMoveEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L701)

Gets or sets a boolean indicating that pointer move events must be supported on this mesh (false by default)

***

### forceRenderingWhenOccluded

> **forceRenderingWhenOccluded**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L101)

Flag to force rendering the mesh even if occluded

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`TransformNode`](TransformNode.md).[`id`](TransformNode.md#id)

***

### ignoreNonUniformScaling

> **ignoreNonUniformScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L134)

Gets or sets a boolean indicating that non uniform scaling (when at least one component is different from others) should be ignored.
By default the system will update normals to compensate

#### Inherited from

[`TransformNode`](TransformNode.md).[`ignoreNonUniformScaling`](TransformNode.md#ignorenonuniformscaling)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`TransformNode`](TransformNode.md).[`inspectableCustomProperties`](TransformNode.md#inspectablecustomproperties)

***

### instancedBuffers

> **instancedBuffers**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L52)

Object used to store instanced buffers defined by user

#### Index Signature

\[`key`: `string`\]: `any`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances#custom-buffers

***

### isBlocker

> **isBlocker**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L696)

Gets or sets a boolean indicating if the mesh must be considered as a ray blocker for lens flares (false by default)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

***

### isNearGrabbable

> **isNearGrabbable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L688)

Gets or sets a boolean indicating if the mesh can be grabbed. Default is false.
Setting this to true, while using the XR near interaction feature, will trigger a pointer event when the mesh is grabbed.
Grabbing means that the controller is using the squeeze or main trigger button to grab the mesh.
This is different from nearPickable which only triggers the event when the mesh is touched by the controller

***

### isNearPickable

> **isNearPickable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L680)

Gets or sets a boolean indicating if the mesh can be near picked (touched by the XR controller or hands). Default is false

***

### isOccluded

> **isOccluded**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L89)

Gets or sets whether the mesh is occluded or not, it is used also to set the initial state of the mesh to be occluded or not

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

***

### isOcclusionQueryInProgress

> **isOcclusionQueryInProgress**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L95)

Flag to check the progress status of the query

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

***

### isPickable

> **isPickable**: `boolean` = `AbstractMesh.DefaultIsPickable`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L675)

Gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions).
Default value is determined by [AbstractMesh.DefaultIsPickable](#defaultispickable) (true unless changed).

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`TransformNode`](TransformNode.md).[`metadata`](TransformNode.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L89)

Gets or sets the name of the node

#### Inherited from

[`TransformNode`](TransformNode.md).[`name`](TransformNode.md#name)

***

### occlusionForRenderPassId

> **occlusionForRenderPassId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L107)

This number indicates the render pass id used to run the occlusion query. The default value is -1, which means run the occlusion query in all render passes.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

***

### occlusionQueryAlgorithmType

> **occlusionQueryAlgorithmType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L83)

This property determines the type of occlusion query algorithm to run in WebGl, you can use:
* AbstractMesh.OCCLUSION_ALGORITHM_TYPE_ACCURATE which is mapped to GL_ANY_SAMPLES_PASSED.
* AbstractMesh.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE (Default Value) which is mapped to GL_ANY_SAMPLES_PASSED_CONSERVATIVE which is a false positive algorithm that is faster than GL_ANY_SAMPLES_PASSED but less accurate.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

***

### occlusionRetryCount

> **occlusionRetryCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L66)

This number indicates the number of allowed retries before stop the occlusion query, this is useful if the occlusion query is taking long time before to the query result is retrieved, the query result indicates if the object is visible within the scene or not and based on that Babylon.Js engine decides to show or hide the object.
The default value is -1 which means don't break the query and wait till the result

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

***

### occlusionType

> **occlusionType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L75)

This property is responsible for starting the occlusion query within the Mesh or not, this property is also used to determine what should happen when the occlusionRetryCount is reached. It has supports 3 values:
* OCCLUSION_TYPE_NONE (Default Value): this option means no occlusion query within the Mesh.
* OCCLUSION_TYPE_OPTIMISTIC: this option is means use occlusion query and if occlusionRetryCount is reached and the query is broken show the mesh.
* OCCLUSION_TYPE_STRICT: this option is means use occlusion query and if occlusionRetryCount is reached and the query is broken restore the last state of the mesh occlusion if the mesh was visible then show the mesh if was hidden then hide don't show.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`TransformNode`](TransformNode.md).[`onAccessibilityTagChangedObservable`](TransformNode.md#onaccessibilitytagchangedobservable)

***

### onAfterWorldMatrixUpdateObservable

> **onAfterWorldMatrixUpdateObservable**: [`Observable`](Observable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L172)

An event triggered after the world matrix is updated

#### Inherited from

[`TransformNode`](TransformNode.md).[`onAfterWorldMatrixUpdateObservable`](TransformNode.md#onafterworldmatrixupdateobservable)

***

### onCollideObservable

> **onCollideObservable**: [`Observable`](Observable.md)\<`AbstractMesh`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L598)

An event triggered when this mesh collides with another one

***

### onCollisionPositionChangeObservable

> **onCollisionPositionChangeObservable**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:611](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L611)

An event triggered when the collision's position changes

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`TransformNode`](TransformNode.md).[`onDisposeObservable`](TransformNode.md#ondisposeobservable)

***

### onMaterialChangedObservable

> **onMaterialChangedObservable**: [`Observable`](Observable.md)\<`AbstractMesh`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:624](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L624)

An event triggered when material is changed

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`TransformNode`](TransformNode.md).[`onReady`](TransformNode.md#onready)

***

### onRebuildObservable

> **onRebuildObservable**: [`Observable`](Observable.md)\<`AbstractMesh`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1097](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1097)

An event triggered when the mesh is rebuilt.

***

### outlineColor

> **outlineColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L812)

Defines color to use when rendering outline

***

### outlineWidth

> **outlineWidth**: `number` = `0.02`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L814)

Define width to use when rendering outline

***

### overlayAlpha

> **overlayAlpha**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L819)

Defines alpha to use when rendering overlay

***

### overlayColor

> **overlayColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:817](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L817)

Defines color to use when rendering overlay

***

### physicsBody

> **physicsBody**: [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L15)

Gets or sets the physics body associated with this node.

#### Inherited from

[`TransformNode`](TransformNode.md).[`physicsBody`](TransformNode.md#physicsbody)

***

### physicsImpostor

> **physicsImpostor**: [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L17)

Gets or sets impostor used for physic simulation

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics

***

### reIntegrateRotationIntoRotationQuaternion

> **reIntegrateRotationIntoRotationQuaternion**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L140)

Gets or sets a boolean indicating that even if rotationQuaternion is defined, you can keep updating rotation property and Babylon.js will just mix both

#### Inherited from

[`TransformNode`](TransformNode.md).[`reIntegrateRotationIntoRotationQuaternion`](TransformNode.md#reintegraterotationintorotationquaternion)

***

### renderOutline

> **renderOutline**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.types.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.types.ts#L24)

Gets or sets a boolean indicating if the outline must be rendered as well

#### See

https://www.babylonjs-playground.com/#10WJ5S#3

***

### renderOverlay

> **renderOverlay**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.types.ts#L32)

Gets or sets a boolean indicating if the overlay must be rendered as well

#### See

https://www.babylonjs-playground.com/#10WJ5S#2

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`TransformNode`](TransformNode.md).[`reservedDataStore`](TransformNode.md#reserveddatastore)

***

### scalingDeterminant

> **scalingDeterminant**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L109)

Multiplication factor on scale x/y/z when computing the world matrix. Eg. for a 1x1x1 cube setting this to 2 will make it a 2x2x2 cube

#### Inherited from

[`TransformNode`](TransformNode.md).[`scalingDeterminant`](TransformNode.md#scalingdeterminant)

***

### showBoundingBox

> **showBoundingBox**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.types.ts#L32)

Gets or sets a boolean indicating if the bounding box must be rendered as well (false by default)

***

### showSubMeshesBoundingBox

> **showSubMeshesBoundingBox**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L691)

Gets or sets a boolean indicating that bounding boxes of subMeshes must be rendered as well (false by default)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`TransformNode`](TransformNode.md).[`state`](TransformNode.md#state)

***

### subMeshes

> **subMeshes**: [`SubMesh`](SubMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1030](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1030)

Gets or sets the list of subMeshes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`TransformNode`](TransformNode.md).[`uniqueId`](TransformNode.md#uniqueid)

***

### useOctreeForCollisions

> **useOctreeForCollisions**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:906](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L906)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes collision (true by default)

***

### useOctreeForPicking

> **useOctreeForPicking**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L904)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes picking (true by default)

***

### useOctreeForRenderingSelection

> **useOctreeForRenderingSelection**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L902)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes selection (true by default)

***

### BillboardUseParentOrientation

> `static` **BillboardUseParentOrientation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L50)

Child transform with Billboard flags should or should not apply parent rotation (default if off)

#### Inherited from

[`TransformNode`](TransformNode.md).[`BillboardUseParentOrientation`](TransformNode.md#billboarduseparentorientation)

***

### CULLINGSTRATEGY\_BOUNDINGSPHERE\_ONLY

> `readonly` `static` **CULLINGSTRATEGY\_BOUNDINGSPHERE\_ONLY**: `1` = `Constants.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L378)

Culling strategy : Bounding Sphere Only.
 This is an exclusion test. It's faster than the standard strategy because the bounding box is not tested.
 It's also less accurate than the standard because some not visible objects can still be selected.
 Test : is the bounding sphere outside the frustum ?
 If not, then the cullable object is in the frustum.

***

### CULLINGSTRATEGY\_OPTIMISTIC\_INCLUSION

> `readonly` `static` **CULLINGSTRATEGY\_OPTIMISTIC\_INCLUSION**: `2` = `Constants.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L388)

Culling strategy : Optimistic Inclusion.
 This in an inclusion test first, then the standard exclusion test.
 This can be faster when a cullable object is expected to be almost always in the camera frustum.
 This could also be a little slower than the standard test when the tested object center is not the frustum but one of its bounding box vertex is still inside.
 Anyway, it's as accurate as the standard strategy.
 Test :
 Is the cullable object bounding sphere center in the frustum ?
 If not, apply the default culling strategy.

***

### CULLINGSTRATEGY\_OPTIMISTIC\_INCLUSION\_THEN\_BSPHERE\_ONLY

> `readonly` `static` **CULLINGSTRATEGY\_OPTIMISTIC\_INCLUSION\_THEN\_BSPHERE\_ONLY**: `3` = `Constants.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L398)

Culling strategy : Optimistic Inclusion then Bounding Sphere Only.
 This in an inclusion test first, then the bounding sphere only exclusion test.
 This can be the fastest test when a cullable object is expected to be almost always in the camera frustum.
 This could also be a little slower than the BoundingSphereOnly strategy when the tested object center is not in the frustum but its bounding sphere still intersects it.
 It's less accurate than the standard strategy and as accurate as the BoundingSphereOnly strategy.
 Test :
 Is the cullable object bounding sphere center in the frustum ?
 If not, apply the Bounding Sphere Only strategy. No Bounding Box is tested here.

***

### CULLINGSTRATEGY\_STANDARD

> `readonly` `static` **CULLINGSTRATEGY\_STANDARD**: `0` = `Constants.MESHES_CULLINGSTRATEGY_STANDARD`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L371)

Default culling strategy : this is an exclusion test and it's the more accurate.
 Test order :
 Is the bounding sphere outside the frustum ?
 If not, are the bounding box vertices outside the frustum ?
 It not, then the cullable object is in the frustum.

***

### DefaultIsPickable

> `static` **DefaultIsPickable**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:437](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L437)

Gets or sets the default value for isPickable for newly created meshes.
When set to false, all meshes created after the change will not be pickable by default.
Individual meshes can still override this by setting their own isPickable property.

***

### OCCLUSION\_ALGORITHM\_TYPE\_ACCURATE

> `static` **OCCLUSION\_ALGORITHM\_TYPE\_ACCURATE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L361)

Use an accurate occlusion algorithm

***

### OCCLUSION\_ALGORITHM\_TYPE\_CONSERVATIVE

> `static` **OCCLUSION\_ALGORITHM\_TYPE\_CONSERVATIVE**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:363](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L363)

Use a conservative occlusion algorithm

***

### OCCLUSION\_TYPE\_NONE

> `static` **OCCLUSION\_TYPE\_NONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L355)

No occlusion

***

### OCCLUSION\_TYPE\_OPTIMISTIC

> `static` **OCCLUSION\_TYPE\_OPTIMISTIC**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L357)

Occlusion set to optimistic

***

### OCCLUSION\_TYPE\_STRICT

> `static` **OCCLUSION\_TYPE\_STRICT**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L359)

Occlusion set to strict

## Accessors

### absolutePosition

#### Get Signature

> **get** **absolutePosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L372)

Returns the current mesh absolute position.
Returns a Vector3.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`TransformNode`](TransformNode.md).[`absolutePosition`](TransformNode.md#absoluteposition)

***

### absoluteRotationQuaternion

#### Get Signature

> **get** **absoluteRotationQuaternion**(): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L389)

Returns the current mesh absolute rotation.
Returns a Quaternion.

##### Returns

[`Quaternion`](Quaternion.md)

#### Inherited from

[`TransformNode`](TransformNode.md).[`absoluteRotationQuaternion`](TransformNode.md#absoluterotationquaternion)

***

### absoluteScaling

#### Get Signature

> **get** **absoluteScaling**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L380)

Returns the current mesh absolute scaling.
Returns a Vector3.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`TransformNode`](TransformNode.md).[`absoluteScaling`](TransformNode.md#absolutescaling)

***

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L137)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L132)

Gets or sets the accessibility tag to describe the node for accessibility purpose.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`accessibilityTag`](TransformNode.md#accessibilitytag)

***

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L325)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L332)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`animationPropertiesOverride`](TransformNode.md#animationpropertiesoverride)

***

### applyFog

#### Get Signature

> **get** **applyFog**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:881](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L881)

Gets or sets a boolean indicating that this mesh will allow fog to be rendered on it (true by default)

##### Returns

`boolean`

#### Set Signature

> **set** **applyFog**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:884](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L884)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### bakedVertexAnimationManager

#### Get Signature

> **get** **bakedVertexAnimationManager**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:559](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L559)

Gets or sets the baked vertex animation manager

##### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/baked_texture_animations

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md)\>

#### Set Signature

> **set** **bakedVertexAnimationManager**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L563)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`IBakedVertexAnimationManager`](../interfaces/IBakedVertexAnimationManager.md)\>

##### Returns

`void`

***

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L472)

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

#### Inherited from

[`TransformNode`](TransformNode.md).[`behaviors`](TransformNode.md#behaviors)

***

### billboardMode

#### Get Signature

> **get** **billboardMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L93)

Gets or sets the billboard mode. Default is 0.

| Value | Type | Description |
| --- | --- | --- |
| 0 | BILLBOARDMODE_NONE |  |
| 1 | BILLBOARDMODE_X |  |
| 2 | BILLBOARDMODE_Y |  |
| 4 | BILLBOARDMODE_Z |  |
| 7 | BILLBOARDMODE_ALL |  |

##### Returns

`number`

#### Set Signature

> **set** **billboardMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L97)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`billboardMode`](TransformNode.md#billboardmode)

***

### checkCollisions

#### Get Signature

> **get** **checkCollisions**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2039](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2039)

Gets or sets a boolean indicating that this mesh can be used in the collision engine

##### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

##### Returns

`boolean`

#### Set Signature

> **set** **checkCollisions**(`collisionEnabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2043](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2043)

##### Parameters

###### collisionEnabled

`boolean`

##### Returns

`void`

***

### collider

#### Get Signature

> **get** **collider**(): [`Nullable`](../type-aliases/Nullable.md)\<`Collider`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2051](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2051)

Gets Collider object used to compute collisions (not physics)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Collider`\>

***

### collisionGroup

#### Get Signature

> **get** **collisionGroup**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:980](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L980)

Gets or sets the current collision group mask (-1 by default).
A collision between A and B will happen if A.collisionGroup & b.collisionMask !== 0

##### Returns

`number`

#### Set Signature

> **set** **collisionGroup**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:984](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L984)

##### Parameters

###### mask

`number`

##### Returns

`void`

***

### collisionMask

#### Get Signature

> **get** **collisionMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:955](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L955)

Gets or sets a collision mask used to mask collisions (default is -1).
A collision between A and B will happen if A.collisionGroup & b.collisionMask !== 0

##### Returns

`number`

#### Set Signature

> **set** **collisionMask**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:959](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L959)

##### Parameters

###### mask

`number`

##### Returns

`void`

***

### collisionResponse

#### Get Signature

> **get** **collisionResponse**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:969](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L969)

Gets or sets a collision response flag (default is true).
when collisionResponse is false, events are still triggered but colliding entity has no response
This helps creating trigger volume when user wants collision feedback events but not position/velocity
to respond to the collision.

##### Returns

`boolean`

#### Set Signature

> **set** **collisionResponse**(`response`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L973)

##### Parameters

###### response

`boolean`

##### Returns

`void`

***

### collisionRetryCount

#### Get Signature

> **get** **collisionRetryCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:525](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L525)

number of collision detection tries. Change this value if not all collisions are detected and handled properly

##### Returns

`number`

#### Set Signature

> **set** **collisionRetryCount**(`retryCount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:528](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L528)

##### Parameters

###### retryCount

`number`

##### Returns

`void`

***

### computeBonesUsingShaders

#### Get Signature

> **get** **computeBonesUsingShaders**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:855](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L855)

Gets or sets a boolean indicating that bone animations must be computed by the GPU (true by default)

##### Returns

`boolean`

#### Set Signature

> **set** **computeBonesUsingShaders**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:858](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L858)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L151)

Gets or sets a boolean used to define if the node must be serialized

##### Returns

`boolean`

#### Set Signature

> **set** **doNotSerialize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L163)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`doNotSerialize`](TransformNode.md#donotserialize)

***

### enableDistantPicking

#### Get Signature

> **get** **enableDistantPicking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:894](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L894)

When enabled, decompose picking matrices for better precision with large values for mesh position and scling

##### Returns

`boolean`

#### Set Signature

> **set** **enableDistantPicking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:897](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L897)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### facetDepthSortFrom

#### Get Signature

> **get** **facetDepthSortFrom**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:517](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L517)

The location (Vector3) where the facet depth sort must be computed from.
By default, the active camera position.
Used only when facet depth sort is enabled

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#facet-depth-sort

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **facetDepthSortFrom**(`location`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L520)

##### Parameters

###### location

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### facetNb

#### Get Signature

> **get** **facetNb**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L471)

Gets the number of facets in the mesh

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#what-is-a-mesh-facet

##### Returns

`number`

***

### forward

#### Get Signature

> **get** **forward**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L280)

The forward direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`TransformNode`](TransformNode.md).[`forward`](TransformNode.md#forward)

***

### geometry

#### Get Signature

> **get** `abstract` **geometry**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1393](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1393)

The mesh's internal Geometry object. Implemented by child classes.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

***

### hasBoundingInfo

#### Get Signature

> **get** **hasBoundingInfo**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1575](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1575)

Returns true if there is already a bounding info

##### Returns

`boolean`

***

### hasInstances

#### Get Signature

> **get** **hasInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1676](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1676)

Gets a boolean indicating if this mesh has instances

##### Returns

`boolean`

***

### hasThinInstances

#### Get Signature

> **get** **hasThinInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1683](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1683)

Gets a boolean indicating if this mesh has thin instances

##### Returns

`boolean`

***

### hasVertexAlpha

#### Get Signature

> **get** **hasVertexAlpha**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:826](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L826)

Gets or sets a boolean indicating that this mesh needs to use vertex alpha data to render.
This property is misnamed and should be `useVertexAlpha`. Note that the mesh will be rendered
with alpha blending when this flag is set even if vertex alpha data is missing from the geometry.

##### Returns

`boolean`

#### Set Signature

> **set** **hasVertexAlpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:829](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L829)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### infiniteDistance

#### Get Signature

> **get** **infiniteDistance**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L117)

Gets or sets the distance of the object to max, often used by skybox

##### Returns

`boolean`

#### Set Signature

> **set** **infiniteDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L121)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`infiniteDistance`](TransformNode.md#infinitedistance)

***

### inheritVisibility

#### Get Signature

> **get** **inheritVisibility**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L269)

If set to true, this node, when renderable, will only be visible if its parent(s) are also visible.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **inheritVisibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L273)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`inheritVisibility`](TransformNode.md#inheritvisibility)

***

### isAnInstance

#### Get Signature

> **get** **isAnInstance**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1669](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1669)

Gets a boolean indicating if this mesh is an instance or a regular mesh

##### Returns

`boolean`

***

### isBlocked

#### Get Signature

> **get** **isBlocked**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1376](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1376)

Returns true if the mesh is blocked. Implemented by child classes

##### Returns

`boolean`

***

### isFacetDataEnabled

#### Get Signature

> **get** **isFacetDataEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L535)

gets a boolean indicating if facetData is enabled

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#what-is-a-mesh-facet

##### Returns

`boolean`

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L281)

Gets or sets a boolean indicating whether this node is visible, either this node itself when it is renderable or its renderable child nodes when `inheritVisibility` is true.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L289)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`isVisible`](TransformNode.md#isvisible)

***

### isWorldMatrixFrozen

#### Get Signature

> **get** **isWorldMatrixFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L507)

True if the World matrix has been frozen.

##### Returns

`boolean`

#### Inherited from

[`TransformNode`](TransformNode.md).[`isWorldMatrixFrozen`](TransformNode.md#isworldmatrixfrozen)

***

### layerMask

#### Get Signature

> **get** **layerMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:911](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L911)

Gets or sets the current layer mask (default is 0x0FFFFFFF)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/layerMasksAndMultiCam

##### Returns

`number`

#### Set Signature

> **set** **layerMask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:915](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L915)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### lightSources

#### Get Signature

> **get** **lightSources**(): [`Light`](Light.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1042](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1042)

Gets the list of lights affecting that mesh

##### Returns

[`Light`](Light.md)[]

***

### material

#### Get Signature

> **get** **material**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:729](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L729)

Gets or sets current material

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

#### Set Signature

> **set** **material**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:732](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L732)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

##### Returns

`void`

***

### morphTargetManager

#### Get Signature

> **get** **morphTargetManager**(): [`Nullable`](../type-aliases/Nullable.md)\<[`MorphTargetManager`](MorphTargetManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:543](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L543)

Gets or sets the morph target manager

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/morphTargets

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MorphTargetManager`](MorphTargetManager.md)\>

#### Set Signature

> **set** **morphTargetManager**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L547)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`MorphTargetManager`](MorphTargetManager.md)\>

##### Returns

`void`

***

### mustDepthSortFacets

#### Get Signature

> **get** **mustDepthSortFacets**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:504](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L504)

Gets or sets a boolean indicating that the facets must be depth sorted on next call to `updateFacetData()`.
Works only for updatable meshes.
Doesn't work with multi-materials

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#facet-depth-sort

##### Returns

`boolean`

#### Set Signature

> **set** **mustDepthSortFacets**(`sort`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L507)

##### Parameters

###### sort

`boolean`

##### Returns

`void`

***

### nonUniformScaling

#### Get Signature

> **get** **nonUniformScaling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:869](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L869)

True if the scaling property of this object is non uniform eg. (1,2,1)

##### Returns

`boolean`

#### Inherited from

[`TransformNode`](TransformNode.md).[`nonUniformScaling`](TransformNode.md#nonuniformscaling)

***

### numBoneInfluencers

#### Get Signature

> **get** **numBoneInfluencers**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:868](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L868)

Gets or sets the number of allowed bone influences per vertex (4 by default)

##### Returns

`number`

#### Set Signature

> **set** **numBoneInfluencers**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:871](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L871)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`TransformNode`](TransformNode.md).[`onClonedObservable`](TransformNode.md#onclonedobservable)

***

### onCollide

#### Set Signature

> **set** **onCollide**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:601](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L601)

Set a function to call when this mesh collides with another one

##### Parameters

###### callback

(`collidedMesh?`) => `void`

##### Returns

`void`

***

### onCollisionPositionChange

#### Set Signature

> **set** **onCollisionPositionChange**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:614](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L614)

Set a function to call when the collision's position changes

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L356)

Sets a callback that will be raised when the node will be disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`onDispose`](TransformNode.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`TransformNode`](TransformNode.md).[`onEnabledStateChangedObservable`](TransformNode.md#onenabledstatechangedobservable)

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L261)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L222)

Gets or sets the parent of the node (without keeping the current position in the scene)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

##### Parameters

###### parent

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`parent`](TransformNode.md#parent)

***

### partitioningBBoxRatio

#### Get Signature

> **get** **partitioningBBoxRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:490](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L490)

The ratio (float) to apply to the bounding box size to set to the partitioning space.
Ex : 1.01 (default) the partitioning space is 1% bigger than the bounding box

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#tweaking-the-partitioning

##### Returns

`number`

#### Set Signature

> **set** **partitioningBBoxRatio**(`ratio`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:494](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L494)

##### Parameters

###### ratio

`number`

##### Returns

`void`

***

### partitioningSubdivisions

#### Get Signature

> **get** **partitioningSubdivisions**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L478)

Gets or set the number (integer) of subdivisions per axis in the partitioning space

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#tweaking-the-partitioning

##### Returns

`number`

#### Set Signature

> **set** **partitioningSubdivisions**(`nb`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L481)

##### Parameters

###### nb

`number`

##### Returns

`void`

***

### pointerOverDisableMeshTesting

#### Get Signature

> **get** **pointerOverDisableMeshTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:708](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L708)

Gets or sets the property which disables the test that is checking that the mesh under the pointer is the same than the previous time we tested for it (default: false).
Set this property to true if you want thin instances picking to be reported accurately when moving over the mesh.
Note that setting this property to true will incur some performance penalties when dealing with pointer events for this mesh so use it sparingly.

##### Returns

`boolean`

#### Set Signature

> **set** **pointerOverDisableMeshTesting**(`disable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:712](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L712)

##### Parameters

###### disable

`boolean`

##### Returns

`void`

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L194)

Gets or set the node position (default is (0.0, 0.0, 0.0))

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`newPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L198)

##### Parameters

###### newPosition

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`position`](TransformNode.md#position)

***

### rawBoundingInfo

#### Set Signature

> **set** **rawBoundingInfo**(`boundingInfo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:589](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L589)

##### Parameters

###### boundingInfo

[`Nullable`](../type-aliases/Nullable.md)\<[`BoundingInfo`](BoundingInfo.md)\>

##### Returns

`void`

***

### receiveShadows

#### Get Signature

> **get** **receiveShadows**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L799)

Gets or sets a boolean indicating that this mesh can receive realtime shadows

##### See

https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows

##### Returns

`boolean`

#### Set Signature

> **set** **receiveShadows**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:802](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L802)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderingGroupId

#### Get Signature

> **get** **renderingGroupId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:720](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L720)

Specifies the rendering group id for this mesh (0 by default)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#rendering-groups

##### Returns

`number`

#### Set Signature

> **set** **renderingGroupId**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:724](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L724)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### right

#### Get Signature

> **get** **right**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L296)

The right direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`TransformNode`](TransformNode.md).[`right`](TransformNode.md#right)

***

### rotation

#### Get Signature

> **get** **rotation**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L222)

Gets or sets the rotation property : a Vector3 defining the rotation value in radians around each local axis X, Y, Z  (default is (0.0, 0.0, 0.0)).
If rotation quaternion is set, this Vector3 will be ignored and copy from the quaternion

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **rotation**(`newRotation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L226)

##### Parameters

###### newRotation

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`rotation`](TransformNode.md#rotation)

***

### rotationQuaternion

#### Get Signature

> **get** **rotationQuaternion**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L248)

Gets or sets the rotation Quaternion property : this a Quaternion object defining the node rotation by using a unit quaternion (undefined by default, but can be null).
If set, only the rotationQuaternion is then used to compute the node rotation (ie. node.rotation will be ignored)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

#### Set Signature

> **set** **rotationQuaternion**(`quaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L252)

##### Parameters

###### quaternion

[`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](Quaternion.md)\>

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`rotationQuaternion`](TransformNode.md#rotationquaternion)

***

### scaling

#### Get Signature

> **get** **scaling**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L235)

Gets or sets the scaling property : a Vector3 defining the node scaling along each local axis X, Y, Z (default is (1.0, 1.0, 1.0)).

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **scaling**(`newScaling`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L239)

##### Parameters

###### newScaling

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`scaling`](TransformNode.md#scaling)

***

### skeleton

#### Get Signature

> **get** **skeleton**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1090](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1090)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

#### Set Signature

> **set** **skeleton**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1071)

Gets or sets a skeleton to apply skinning transformations

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

##### Returns

`void`

***

### surroundingMeshes

#### Get Signature

> **get** **surroundingMeshes**(): [`Nullable`](../type-aliases/Nullable.md)\<`AbstractMesh`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L997)

Gets or sets current surrounding meshes (null by default).

By default collision detection is tested against every mesh in the scene.
It is possible to set surroundingMeshes to a defined list of meshes and then only these specified
meshes will be tested for the collision.

Note: if set to an empty array no collision will happen when this mesh is moved.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AbstractMesh`[]\>

#### Set Signature

> **set** **surroundingMeshes**(`meshes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1001](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1001)

##### Parameters

###### meshes

[`Nullable`](../type-aliases/Nullable.md)\<`AbstractMesh`[]\>

##### Returns

`void`

***

### up

#### Get Signature

> **get** **up**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L288)

The up direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`TransformNode`](TransformNode.md).[`up`](TransformNode.md#up)

***

### useBones

#### Get Signature

> **get** **useBones**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1603](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1603)

Gets a boolean indicating if this mesh has skinning data and an attached skeleton

##### Returns

`boolean`

***

### useVertexColors

#### Get Signature

> **get** **useVertexColors**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:840](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L840)

Gets or sets a boolean indicating that this mesh needs to use vertex color data to render (if this kind of vertex data is available in the geometry)

##### Returns

`boolean`

#### Set Signature

> **set** **useVertexColors**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:843](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L843)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### visibility

#### Get Signature

> **get** **visibility**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:642](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L642)

Gets or sets mesh visibility between 0 and 1 (default is 1)

##### Returns

`number`

#### Set Signature

> **set** **visibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L649)

Gets or sets mesh visibility between 0 and 1 (default is 1)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### worldMatrixFromCache

#### Get Signature

> **get** **worldMatrixFromCache**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L516)

Returns directly the latest state of the mesh World matrix.
A Matrix is returned.

##### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[`TransformNode`](TransformNode.md).[`worldMatrixFromCache`](TransformNode.md#worldmatrixfromcache)

***

### BILLBOARDMODE\_ALL

#### Get Signature

> **get** `static` **BILLBOARDMODE\_ALL**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:423](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L423)

Billboard on all axes

##### Returns

`number`

Object will rotate to face the camera

#### Overrides

[`TransformNode`](TransformNode.md).[`BILLBOARDMODE_ALL`](TransformNode.md#billboardmode_all)

***

### BILLBOARDMODE\_NONE

#### Get Signature

> **get** `static` **BILLBOARDMODE\_NONE**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L403)

No billboard

##### Returns

`number`

Object will not rotate to face the camera

#### Overrides

[`TransformNode`](TransformNode.md).[`BILLBOARDMODE_NONE`](TransformNode.md#billboardmode_none)

***

### BILLBOARDMODE\_USE\_POSITION

#### Get Signature

> **get** `static` **BILLBOARDMODE\_USE\_POSITION**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L428)

Billboard on using position instead of orientation

##### Returns

`number`

Object will rotate to face the camera's position instead of orientation

#### Overrides

[`TransformNode`](TransformNode.md).[`BILLBOARDMODE_USE_POSITION`](TransformNode.md#billboardmode_use_position)

***

### BILLBOARDMODE\_X

#### Get Signature

> **get** `static` **BILLBOARDMODE\_X**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L408)

Billboard on X axis

##### Returns

`number`

Object will rotate to face the camera but only on the x axis

#### Overrides

[`TransformNode`](TransformNode.md).[`BILLBOARDMODE_X`](TransformNode.md#billboardmode_x)

***

### BILLBOARDMODE\_Y

#### Get Signature

> **get** `static` **BILLBOARDMODE\_Y**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L413)

Billboard on Y axis

##### Returns

`number`

Object will rotate to face the camera but only on the y axis

#### Overrides

[`TransformNode`](TransformNode.md).[`BILLBOARDMODE_Y`](TransformNode.md#billboardmode_y)

***

### BILLBOARDMODE\_Z

#### Get Signature

> **get** `static` **BILLBOARDMODE\_Z**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L418)

Billboard on Z axis

##### Returns

`number`

Object will rotate to face the camera but only on the z axis

#### Overrides

[`TransformNode`](TransformNode.md).[`BILLBOARDMODE_Z`](TransformNode.md#billboardmode_z)

## Methods

### addBehavior()

> **addBehavior**(`behavior`, `attachImmediately?`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L421)

Attach a behavior to the node

#### Parameters

##### behavior

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>

defines the behavior to attach

##### attachImmediately?

`boolean` = `false`

defines that the behavior must be attached even if the scene is still loading

#### Returns

[`Node`](Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`TransformNode`](TransformNode.md).[`addBehavior`](TransformNode.md#addbehavior)

***

### addChild()

> **addChild**(`mesh`, `preserveScalingSign?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:846](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L846)

Adds the passed mesh as a child to the current mesh.
The node will remain exactly where it is and its position / rotation will be updated accordingly.
This method is equivalent to calling setParent().

#### Parameters

##### mesh

[`TransformNode`](TransformNode.md)

defines the child mesh

##### preserveScalingSign?

`boolean` = `false`

if true, keep scaling sign of child. Otherwise, scaling sign might change.

#### Returns

`this`

the current mesh

#### Inherited from

[`TransformNode`](TransformNode.md).[`addChild`](TransformNode.md#addchild)

***

### addRotation()

> **addRotation**(`x`, `y`, `z`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1047)

Adds a rotation step to the mesh current rotation.
x, y, z are Euler angles expressed in radians.
This methods updates the current mesh rotation, either mesh.rotation, either mesh.rotationQuaternion if it's set.
This means this rotation is made in the mesh local space only.
It's useful to set a custom rotation order different from the BJS standard one YXZ.
Example : this rotates the mesh first around its local X axis, then around its local Z axis, finally around its local Y axis.
```javascript
mesh.addRotation(x1, 0, 0).addRotation(0, 0, z2).addRotation(0, 0, y3);
```
Note that `addRotation()` accumulates the passed rotation values to the current ones and computes the .rotation or .rotationQuaternion updated values.
Under the hood, only quaternions are used. So it's a little faster is you use .rotationQuaternion because it doesn't need to translate them back to Euler angles.

#### Parameters

##### x

`number`

Rotation to add

##### y

`number`

Rotation to add

##### z

`number`

Rotation to add

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`addRotation`](TransformNode.md#addrotation)

***

### alignWithNormal()

> **alignWithNormal**(`normal`, `upDirection?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2919](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2919)

Align the mesh with a normal

#### Parameters

##### normal

[`Vector3`](Vector3.md)

defines the normal to use

##### upDirection?

[`Vector3`](Vector3.md)

can be used to redefined the up vector to use (will use the (0, 1, 0) by default)

#### Returns

`AbstractMesh`

the current mesh

***

### applyAngularImpulse()

> **applyAngularImpulse**(`angularImpulse`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L33)

Apply a physic angular impulse to the mesh

#### Parameters

##### angularImpulse

[`Vector3`](Vector3.md)

defines the torque to apply

#### Returns

[`TransformNode`](TransformNode.md)

the current mesh

#### Inherited from

[`TransformNode`](TransformNode.md).[`applyAngularImpulse`](TransformNode.md#applyangularimpulse)

***

### applyImpulse()

> **applyImpulse**(`force`, `contactPoint`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L32)

Apply a physic impulse to the mesh

#### Parameters

##### force

[`Vector3`](Vector3.md)

defines the force to apply

##### contactPoint

[`Vector3`](Vector3.md)

defines where to apply the force

#### Returns

`AbstractMesh`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

#### Inherited from

[`TransformNode`](TransformNode.md).[`applyImpulse`](TransformNode.md#applyimpulse)

***

### applyTorque()

> **applyTorque**(`torque`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L39)

Apply a physic torque to the mesh

#### Parameters

##### torque

[`Vector3`](Vector3.md)

defines the torque to apply

#### Returns

[`TransformNode`](TransformNode.md)

the current mesh

#### Inherited from

[`TransformNode`](TransformNode.md).[`applyTorque`](TransformNode.md#applytorque)

***

### attachToBone()

> **attachToBone**(`bone`, `affectedTransformNode`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:891](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L891)

Attach the current TransformNode to another TransformNode associated with a bone

#### Parameters

##### bone

[`Bone`](Bone.md)

Bone affecting the TransformNode

##### affectedTransformNode

[`TransformNode`](TransformNode.md)

TransformNode associated with the bone

#### Returns

[`TransformNode`](TransformNode.md)

this object

#### Inherited from

[`TransformNode`](TransformNode.md).[`attachToBone`](TransformNode.md#attachtobone)

***

### beginAnimation()

> **beginAnimation**(`name`, `loop?`, `speedRatio?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L902)

Will start the animation sequence

#### Parameters

##### name

`string`

defines the range frames for animation sequence

##### loop?

`boolean`

defines if the animation should loop (false by default)

##### speedRatio?

`number`

defines the speed factor in which to run the animation (1 by default)

##### onAnimationEnd?

() => `void`

defines a function to be executed when the animation ended (undefined by default)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

the object created for this animation. If range does not exist, it will return null

#### Inherited from

[`TransformNode`](TransformNode.md).[`beginAnimation`](TransformNode.md#beginanimation)

***

### buildBoundingInfo()

> **buildBoundingInfo**(`minimum`, `maximum`, `worldMatrix?`): [`BoundingInfo`](BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1586)

Creates a new bounding info for the mesh

#### Parameters

##### minimum

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

min vector of the bounding box/sphere

##### maximum

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

max vector of the bounding box/sphere

##### worldMatrix?

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Matrix`](Matrix.md)\>

defines the new world matrix

#### Returns

[`BoundingInfo`](BoundingInfo.md)

the new bounding info

***

### calcMovePOV()

> **calcMovePOV**(`amountRight`, `amountUp`, `amountForward`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1712](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1712)

Calculate relative position change from the point of view of behind the front of the mesh.
This is performed taking into account the meshes current rotation, so you do not have to care.
Supports definition of mesh facing forward or backward definedFacingForwardSearch \| See definedFacingForwardSearch.

#### Parameters

##### amountRight

`number`

defines the distance on the right axis

##### amountUp

`number`

defines the distance on the up axis

##### amountForward

`number`

defines the distance on the forward axis

#### Returns

[`Vector3`](Vector3.md)

the new displacement vector

***

### calcRotatePOV()

> **calcRotatePOV**(`flipBack`, `twirlClockwise`, `tiltRight`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1744](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1744)

Calculate relative rotation change from the point of view of behind the front of the mesh.
Supports definition of mesh facing forward or backward definedFacingForwardSearch \| See definedFacingForwardSearch.

#### Parameters

##### flipBack

`number`

defines the flip

##### twirlClockwise

`number`

defines the twirl

##### tiltRight

`number`

defines the tilt

#### Returns

[`Vector3`](Vector3.md)

the new rotation vector

***

### clone()

> **clone**(`name`, `newParent`, `doNotCloneChildren?`): [`Nullable`](../type-aliases/Nullable.md)\<`AbstractMesh`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2331)

Clones the current mesh

#### Parameters

##### name

`string`

defines the mesh name

##### newParent

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

defines the new mesh parent

##### doNotCloneChildren?

`boolean`

defines a boolean indicating that children must not be cloned (false by default)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AbstractMesh`\>

the new mesh

#### Overrides

[`TransformNode`](TransformNode.md).[`clone`](TransformNode.md#clone)

***

### computeWorldMatrix()

> **computeWorldMatrix**(`force?`, `camera?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1086](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1086)

Computes the world matrix of the node

#### Parameters

##### force?

`boolean` = `false`

defines if the cache version should be invalidated forcing the world matrix to be created from scratch

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

defines the camera used if different from the scene active camera (This is used with modes like Billboard or infinite distance)

#### Returns

[`Matrix`](Matrix.md)

the world matrix

#### Inherited from

[`TransformNode`](TransformNode.md).[`computeWorldMatrix`](TransformNode.md#computeworldmatrix)

***

### copyVerticesData()

> `abstract` **copyVerticesData**(`kind`, `vertexData`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1434)

Copies the requested vertex data kind into the given vertex data map. Float data is constructed if the map doesn't have the data.

#### Parameters

##### kind

`string`

defines the vertex data kind to use

##### vertexData

defines the map that stores the resulting data

#### Returns

`void`

***

### createAnimationRange()

> **createAnimationRange**(`name`, `from`, `to`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L819)

Creates an animation range for this node

#### Parameters

##### name

`string`

defines the name of the range

##### from

`number`

defines the starting key

##### to

`number`

defines the end key

#### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`createAnimationRange`](TransformNode.md#createanimationrange)

***

### createNormals()

> **createNormals**(`updatable`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2878)

Creates new normals data for the mesh

#### Parameters

##### updatable

`boolean`

defines if the normal vertex buffer must be flagged as updatable

#### Returns

`AbstractMesh`

the current mesh

***

### createOrUpdateSubmeshesOctree()

> **createOrUpdateSubmeshesOctree**(`maxCapacity?`, `maxDepth?`): [`Octree`](Octree.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.types.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.types.ts#L47)

This function will create an octree to help to select the right submeshes for rendering, picking and collision computations.
Please note that you must have a decent number of submeshes to get performance improvements when using an octree

#### Parameters

##### maxCapacity?

`number`

defines the maximum size of each block (64 by default)

##### maxDepth?

`number`

defines the maximum depth to use (no more than 2 levels by default)

#### Returns

[`Octree`](Octree.md)\<[`SubMesh`](SubMesh.md)\>

the new octree

#### See

 - https://www.babylonjs-playground.com/#NA4OQ#12
 - https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees

***

### deleteAnimationRange()

> **deleteAnimationRange**(`name`, `deleteFrames?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:836](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L836)

Delete a specific animation range

#### Parameters

##### name

`string`

defines the name of the range to delete

##### deleteFrames?

`boolean` = `true`

defines if animation frames from the range must be deleted as well

#### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`deleteAnimationRange`](TransformNode.md#deleteanimationrange)

***

### detachFromBone()

> **detachFromBone**(`resetToPreviousParent?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:909](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L909)

Detach the transform node if its associated with a bone

#### Parameters

##### resetToPreviousParent?

`boolean` = `false`

Indicates if the parent that was in effect when attachToBone was called should be set back or if we should set parent to null instead (defaults to the latter)

#### Returns

[`TransformNode`](TransformNode.md)

this object

#### Inherited from

[`TransformNode`](TransformNode.md).[`detachFromBone`](TransformNode.md#detachfrombone)

***

### disableEdgesRendering()

> **disableEdgesRendering**(): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2948](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2948)

Disables the mesh edge rendering mode

#### Returns

`AbstractMesh`

the currentAbstractMesh

***

### disableFacetData()

> **disableFacetData**(): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2848](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2848)

Disables the feature FacetData and frees the related memory

#### Returns

`AbstractMesh`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### dispose()

> **dispose**(`doNotRecurse?`, `disposeMaterialAndTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2356)

Releases resources associated with this abstract mesh.

#### Parameters

##### doNotRecurse?

`boolean`

Set to true to not recurse into each children (recurse into each children by default)

##### disposeMaterialAndTextures?

`boolean` = `false`

Set to true to also dispose referenced materials and textures (false by default)

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

#### Overrides

[`TransformNode`](TransformNode.md).[`dispose`](TransformNode.md#dispose)

***

### enableEdgesRendering()

> **enableEdgesRendering**(`epsilon?`, `checkVerticesInsteadOfIndices?`, `options?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2963](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2963)

Enables the edge rendering mode on the mesh.
This mode makes the mesh edges visible

#### Parameters

##### epsilon?

`number`

defines the maximal distance between two angles to detect a face

##### checkVerticesInsteadOfIndices?

`boolean`

indicates that we should check vertex list directly instead of faces

##### options?

[`IEdgesRendererOptions`](../interfaces/IEdgesRendererOptions.md)

options to the edge renderer

#### Returns

`AbstractMesh`

the currentAbstractMesh

#### See

https://www.babylonjs-playground.com/#19O9TU#0

***

### freezeWorldMatrix()

> **freezeWorldMatrix**(`newWorldMatrix?`, `decompose?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L473)

Prevents the World matrix to be computed any longer.
Please note that the "moral" contract is that the world matrix is not going to be updated anymore. It is up to the developer to force updates.
You trade flexibility for performance. If you want to update it, you have to unfreeze it first.

#### Parameters

##### newWorldMatrix?

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\> = `null`

defines an optional matrix to use as world matrix

##### decompose?

`boolean` = `false`

defines whether to decompose the given newWorldMatrix or directly assign

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`freezeWorldMatrix`](TransformNode.md#freezeworldmatrix)

***

### getAbsolutePivotPoint()

> **getAbsolutePivotPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L738)

Returns a new Vector3 set with the mesh pivot point World coordinates.

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 set with the mesh pivot point World coordinates.

#### Inherited from

[`TransformNode`](TransformNode.md).[`getAbsolutePivotPoint`](TransformNode.md#getabsolutepivotpoint)

***

### getAbsolutePivotPointToRef()

> **getAbsolutePivotPointToRef**(`result`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:749](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L749)

Sets the Vector3 "result" coordinates with the mesh pivot point World coordinates.

#### Parameters

##### result

[`Vector3`](Vector3.md)

vector3 to store the result

#### Returns

[`TransformNode`](TransformNode.md)

this TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`getAbsolutePivotPointToRef`](TransformNode.md#getabsolutepivotpointtoref)

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L515)

Returns the mesh absolute position in the World.

#### Returns

[`Vector3`](Vector3.md)

a Vector3.

#### Inherited from

[`TransformNode`](TransformNode.md).[`getAbsolutePosition`](TransformNode.md#getabsoluteposition)

***

### getAnimationByName()

> **getAnimationByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:801](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L801)

Get an animation by name

#### Parameters

##### name

`string`

defines the name of the animation to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

null if not found else the requested animation

#### Inherited from

[`TransformNode`](TransformNode.md).[`getAnimationByName`](TransformNode.md#getanimationbyname)

***

### getAnimationRange()

> **getAnimationRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:850](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L850)

Get an animation range by name

#### Parameters

##### name

`string`

defines the name of the animation range to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

null if not found else the requested animation range

#### Inherited from

[`TransformNode`](TransformNode.md).[`getAnimationRange`](TransformNode.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L885)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`TransformNode`](TransformNode.md).[`getAnimationRanges`](TransformNode.md#getanimationranges)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:482](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L482)

Gets an attached behavior by name

#### Parameters

##### name

`string`

defines the name of the behavior to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

null if behavior was not found else the requested behavior

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`TransformNode`](TransformNode.md).[`getBehaviorByName`](TransformNode.md#getbehaviorbyname)

***

### getBoundingInfo()

> **getBoundingInfo**(): [`BoundingInfo`](BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1540)

Returns the mesh BoundingInfo object or creates a new one and returns if it was undefined.
Note that it returns a shallow bounding of the mesh (i.e. it does not include children).
However, if the mesh contains thin instances, it will be expanded to include them. If you want the "raw" bounding data instead, then use `getRawBoundingInfo()`.
To get the full bounding of all children, call `getHierarchyBoundingVectors` instead.

#### Returns

[`BoundingInfo`](BoundingInfo.md)

a BoundingInfo

***

### getChildMeshes()

Get all child-meshes of this node

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getChildMeshes**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:727](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L727)

Get all child-meshes of this node

##### Type Parameters

###### T

`T` *extends* `AbstractMesh`

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

an array of AbstractMesh

##### Inherited from

[`TransformNode`](TransformNode.md).[`getChildMeshes`](TransformNode.md#getchildmeshes)

#### Call Signature

> **getChildMeshes**(`directDescendantsOnly?`, `predicate?`): `AbstractMesh`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L735)

Get all child-meshes of this node

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`AbstractMesh`[]

an array of AbstractMesh

##### Inherited from

[`TransformNode`](TransformNode.md).[`getChildMeshes`](TransformNode.md#getchildmeshes)

***

### getChildren()

Get all direct children of this node

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

#### Call Signature

> **getChildren**\<`T`\>(`predicate?`, `directDescendantsOnly?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:757](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L757)

Get all direct children of this node

##### Type Parameters

###### T

`T` *extends* [`Node`](Node.md)

##### Parameters

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

`T`[]

an array of Node

##### Inherited from

[`TransformNode`](TransformNode.md).[`getChildren`](TransformNode.md#getchildren)

#### Call Signature

> **getChildren**(`predicate?`, `directDescendantsOnly?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:765](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L765)

Get all direct children of this node

##### Parameters

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

[`Node`](Node.md)[]

an array of Node

##### Inherited from

[`TransformNode`](TransformNode.md).[`getChildren`](TransformNode.md#getchildren)

***

### getChildTransformNodes()

> **getChildTransformNodes**(`directDescendantsOnly?`, `predicate?`): [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1500](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1500)

Get all child-transformNodes of this node

#### Parameters

##### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

##### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Returns

[`TransformNode`](TransformNode.md)[]

an array of TransformNode

#### Inherited from

[`TransformNode`](TransformNode.md).[`getChildTransformNodes`](TransformNode.md#getchildtransformnodes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1167)

Returns the string "AbstractMesh"

#### Returns

`string`

"AbstractMesh"

#### Overrides

[`TransformNode`](TransformNode.md).[`getClassName`](TransformNode.md#getclassname)

***

### getClosestFacetAtCoordinates()

> **getClosestFacetAtCoordinates**(`x`, `y`, `z`, `projected?`, `checkFace?`, `facing?`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2752)

Returns the closest mesh facet index at (x,y,z) World coordinates, null if not found

#### Parameters

##### x

`number`

defines x coordinate

##### y

`number`

defines y coordinate

##### z

`number`

defines z coordinate

##### projected?

[`Vector3`](Vector3.md)

sets as the (x,y,z) world projection on the facet

##### checkFace?

`boolean` = `false`

if true (default false), only the facet "facing" to (x,y,z) or only the ones "turning their backs", according to the parameter "facing" are returned

##### facing?

`boolean` = `true`

if facing and checkFace are true, only the facet "facing" to (x, y, z) are returned : positive dot (x, y, z) * facet position. If facing si false and checkFace is true, only the facet "turning their backs" to (x, y, z) are returned : negative dot (x, y, z) * facet position

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

the face index if found (or null instead)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getClosestFacetAtLocalCoordinates()

> **getClosestFacetAtLocalCoordinates**(`x`, `y`, `z`, `projected?`, `checkFace?`, `facing?`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2777](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2777)

Returns the closest mesh facet index at (x,y,z) local coordinates, null if not found

#### Parameters

##### x

`number`

defines x coordinate

##### y

`number`

defines y coordinate

##### z

`number`

defines z coordinate

##### projected?

[`Vector3`](Vector3.md)

sets as the (x,y,z) local projection on the facet

##### checkFace?

`boolean` = `false`

if true (default false), only the facet "facing" to (x,y,z) or only the ones "turning their backs", according to the parameter "facing" are returned

##### facing?

`boolean` = `true`

if facing and checkFace are true, only the facet "facing" to (x, y, z) are returned : positive dot (x, y, z) * facet position. If facing si false and checkFace is true, only the facet "turning their backs" to (x, y, z) are returned : negative dot (x, y, z) * facet position

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

the face index if found (or null instead)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getConnectedParticleSystems()

> **getConnectedParticleSystems**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2971](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2971)

This function returns all of the particle systems in the scene that use the mesh as an emitter.

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)[]

an array of particle systems in the scene that use the mesh as an emitter

***

### getDescendants()

Will return all nodes that have this node as ascendant

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getDescendants**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:697](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L697)

Will return all nodes that have this node as ascendant

##### Type Parameters

###### T

`T` *extends* [`Node`](Node.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

all children nodes of all types

##### Inherited from

[`TransformNode`](TransformNode.md).[`getDescendants`](TransformNode.md#getdescendants)

#### Call Signature

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:705](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L705)

Will return all nodes that have this node as ascendant

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`Node`](Node.md)[]

all children nodes of all types

##### Inherited from

[`TransformNode`](TransformNode.md).[`getDescendants`](TransformNode.md#getdescendants)

***

### getDirection()

> **getDirection**(`localAxis`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:647](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L647)

Returns a new Vector3 that is the localAxis, expressed in the mesh local space, rotated like the mesh.
This Vector3 is expressed in the World space.

#### Parameters

##### localAxis

[`Vector3`](Vector3.md)

axis to rotate

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 that is the localAxis, expressed in the mesh local space, rotated like the mesh.

#### Inherited from

[`TransformNode`](TransformNode.md).[`getDirection`](TransformNode.md#getdirection)

***

### getDirectionToRef()

> **getDirectionToRef**(`localAxis`, `result`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:663](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L663)

Sets the Vector3 "result" as the rotated Vector3 "localAxis" in the same rotation than the mesh.
localAxis is expressed in the mesh local space.
result is computed in the World space from the mesh World matrix.

#### Parameters

##### localAxis

[`Vector3`](Vector3.md)

axis to rotate

##### result

[`Vector3`](Vector3.md)

the resulting transformnode

#### Returns

[`TransformNode`](TransformNode.md)

this TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`getDirectionToRef`](TransformNode.md#getdirectiontoref)

***

### getDistanceToCamera()

> **getDistanceToCamera**(`camera?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1425)

Returns the distance from the mesh to the active camera

#### Parameters

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

defines the camera to use

#### Returns

`number`

the distance

#### Inherited from

[`TransformNode`](TransformNode.md).[`getDistanceToCamera`](TransformNode.md#getdistancetocamera)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`TransformNode`](TransformNode.md).[`getEngine`](TransformNode.md#getengine)

***

### getFacetDataParameters()

> **getFacetDataParameters**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2839](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2839)

Returns the object "parameter" set with all the expected parameters for facetData computation by ComputeNormals()

#### Returns

`any`

the parameters

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getFacetLocalNormals()

> **getFacetLocalNormals**(): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2631)

Returns the facetLocalNormals array.
The normals are expressed in the mesh local spac

#### Returns

[`Vector3`](Vector3.md)[]

an array of Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getFacetLocalPartitioning()

> **getFacetLocalPartitioning**(): `number`[][]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2658](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2658)

Returns the facetLocalPartitioning array

#### Returns

`number`[][]

an array of array of numbers

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getFacetLocalPositions()

> **getFacetLocalPositions**(): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2645](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2645)

Returns the facetLocalPositions array.
The facet positions are expressed in the mesh local space

#### Returns

[`Vector3`](Vector3.md)[]

an array of Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getFacetNormal()

> **getFacetNormal**(`i`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2701)

Returns the i-th facet normal in the world system.
This method allocates a new Vector3 per call

#### Parameters

##### i

`number`

defines the facet index

#### Returns

[`Vector3`](Vector3.md)

a new Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getFacetNormalToRef()

> **getFacetNormalToRef**(`i`, `ref`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2714](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2714)

Sets the reference Vector3 with the i-th facet normal in the world system

#### Parameters

##### i

`number`

defines the facet index

##### ref

[`Vector3`](Vector3.md)

defines the target vector

#### Returns

`AbstractMesh`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getFacetPosition()

> **getFacetPosition**(`i`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2674](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2674)

Returns the i-th facet position in the world system.
This method allocates a new Vector3 per call

#### Parameters

##### i

`number`

defines the facet index

#### Returns

[`Vector3`](Vector3.md)

a new Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getFacetPositionToRef()

> **getFacetPositionToRef**(`i`, `ref`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2687](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2687)

Sets the reference Vector3 with the i-th facet position in the world system

#### Parameters

##### i

`number`

defines the facet index

##### ref

[`Vector3`](Vector3.md)

defines the target vector

#### Returns

`AbstractMesh`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getFacetsAtLocalCoordinates()

> **getFacetsAtLocalCoordinates**(`x`, `y`, `z`): [`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2728](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2728)

Returns the facets (in an array) in the same partitioning block than the one the passed coordinates are located (expressed in the mesh local system)

#### Parameters

##### x

`number`

defines x coordinate

##### y

`number`

defines y coordinate

##### z

`number`

defines z coordinate

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`[]\>

the array of facet indexes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### getHierarchyBoundingVectors()

> **getHierarchyBoundingVectors**(`includeDescendants?`, `predicate?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:1002](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L1002)

Return the minimum and maximum world vectors of the entire hierarchy under current node

#### Parameters

##### includeDescendants?

`boolean` = `true`

Include bounding info from descendants as well (true by default)

##### predicate?

[`Nullable`](../type-aliases/Nullable.md)\<(`abstractMesh`) => `boolean`\> = `null`

defines a callback function that can be customize to filter what meshes should be included in the list used to compute the bounding vectors

#### Returns

`object`

the new bounding vectors

##### max

> **max**: [`Vector3`](Vector3.md)

##### min

> **min**: [`Vector3`](Vector3.md)

#### Inherited from

[`TransformNode`](TransformNode.md).[`getHierarchyBoundingVectors`](TransformNode.md#gethierarchyboundingvectors)

***

### getIndices()

> **getIndices**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1415)

Returns null by default. Implemented by child classes

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

null

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`getIndices`](../interfaces/IGetSetVerticesData.md#getindices)

***

### getLOD()

> **getLOD**(`camera`): [`Nullable`](../type-aliases/Nullable.md)\<`AbstractMesh`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1386)

Returns the mesh itself by default. Implemented by child classes

#### Parameters

##### camera

[`Camera`](Camera.md)

defines the camera to use to pick the right LOD level

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`AbstractMesh`\>

the currentAbstractMesh

***

### getMaterialForRenderPass()

> **getMaterialForRenderPass**(`renderPassId`): [`Material`](Material.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:770](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L770)

Gets the material used to render the mesh in a specific render pass

#### Parameters

##### renderPassId

`number`

render pass id

#### Returns

[`Material`](Material.md) \| `undefined`

material used for the render pass. If no specific material is used for this render pass, undefined is returned (meaning mesh.material is used for this pass)

***

### getMeshUniformBuffer()

> **getMeshUniformBuffer**(): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1159)

Gets the mesh uniform buffer.

#### Returns

[`UniformBuffer`](UniformBuffer.md)

the uniform buffer of the mesh.

***

### getNormalsData()

> **getNormalsData**(`applySkeleton?`, `applyMorph?`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1926](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1926)

Get the normals vertex data and optionally apply skeleton and morphing.

#### Parameters

##### applySkeleton?

`boolean` = `false`

defines whether to apply the skeleton

##### applyMorph?

`boolean` = `false`

defines whether to apply the morph target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

the normals data

***

### getPhysicsBody()

> **getPhysicsBody**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L20)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

#### Inherited from

[`TransformNode`](TransformNode.md).[`getPhysicsBody`](TransformNode.md#getphysicsbody)

***

### getPhysicsImpostor()

> **getPhysicsImpostor**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L24)

Gets the current physics impostor

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

a physics impostor or null

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics

***

### getPivotMatrix()

> **getPivotMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L432)

Returns the mesh pivot matrix.
Default : Identity.

#### Returns

[`Matrix`](Matrix.md)

the matrix

#### Inherited from

[`TransformNode`](TransformNode.md).[`getPivotMatrix`](TransformNode.md#getpivotmatrix)

***

### getPivotPoint()

> **getPivotPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:716](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L716)

Returns a new Vector3 set with the mesh pivot point coordinates in the local space.

#### Returns

[`Vector3`](Vector3.md)

the pivot point

#### Inherited from

[`TransformNode`](TransformNode.md).[`getPivotPoint`](TransformNode.md#getpivotpoint)

***

### getPivotPointToRef()

> **getPivotPointToRef**(`result`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:727](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L727)

Sets the passed Vector3 "result" with the coordinates of the mesh pivot point in the local space.

#### Parameters

##### result

[`Vector3`](Vector3.md)

the vector3 to store the result

#### Returns

[`TransformNode`](TransformNode.md)

this TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`getPivotPointToRef`](TransformNode.md#getpivotpointtoref)

***

### getPoseMatrix()

> **getPoseMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L319)

Returns the mesh Pose matrix.

#### Returns

[`Matrix`](Matrix.md)

the pose matrix

#### Inherited from

[`TransformNode`](TransformNode.md).[`getPoseMatrix`](TransformNode.md#getposematrix)

***

### getPositionData()

> **getPositionData**(`applySkeleton?`, `applyMorph?`, `data?`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1937](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1937)

Get the position vertex data and optionally apply skeleton and morphing.

#### Parameters

##### applySkeleton?

`boolean` = `false`

defines whether to apply the skeleton

##### applyMorph?

`boolean` = `false`

defines whether to apply the morph target

##### data?

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\> = `null`

defines the position data to apply the skeleton and morph to

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

the position data

***

### getPositionExpressedInLocalSpace()

> **getPositionExpressedInLocalSpace**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L573)

Returns the mesh position in the local space from the current World matrix values.

#### Returns

[`Vector3`](Vector3.md)

a new Vector3.

#### Inherited from

[`TransformNode`](TransformNode.md).[`getPositionExpressedInLocalSpace`](TransformNode.md#getpositionexpressedinlocalspace)

***

### getPositionInCameraSpace()

> **getPositionInCameraSpace**(`camera?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1412)

Gets the position of the current mesh in camera space

#### Parameters

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

defines the camera to use

#### Returns

[`Vector3`](Vector3.md)

a position

#### Inherited from

[`TransformNode`](TransformNode.md).[`getPositionInCameraSpace`](TransformNode.md#getpositionincameraspace)

***

### getRawBoundingInfo()

> **getRawBoundingInfo**(): [`BoundingInfo`](BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1558)

Returns the bounding info unnafected by instance data.

#### Returns

[`BoundingInfo`](BoundingInfo.md)

the bounding info of the mesh unaffected by instance data.

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`TransformNode`](TransformNode.md).[`getScene`](TransformNode.md#getscene)

***

### getTotalIndices()

> **getTotalIndices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1407)

Returns a positive integer : the total number of indices in this mesh geometry.

#### Returns

`number`

the number of indices or zero if the mesh has no geometry.

***

### getTotalVertices()

> **getTotalVertices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1399)

Returns 0 by default. Implemented by child classes

#### Returns

`number`

an integer

***

### getVertexBuffer()

> `abstract` **getVertexBuffer**(`kind`, `bypassInstanceData?`): [`Nullable`](../type-aliases/Nullable.md)\<[`VertexBuffer`](VertexBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1455](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1455)

Returns the mesh VertexBuffer object from the requested `kind`

#### Parameters

##### kind

`string`

defines which buffer to read from (positions, indices, normals, etc). Possible `kind` values :
- VertexBuffer.PositionKind
- VertexBuffer.NormalKind
- VertexBuffer.UVKind
- VertexBuffer.UV2Kind
- VertexBuffer.UV3Kind
- VertexBuffer.UV4Kind
- VertexBuffer.UV5Kind
- VertexBuffer.UV6Kind
- VertexBuffer.ColorKind
- VertexBuffer.MatricesIndicesKind
- VertexBuffer.MatricesIndicesExtraKind
- VertexBuffer.MatricesWeightsKind
- VertexBuffer.MatricesWeightsExtraKind

##### bypassInstanceData?

`boolean`

defines a boolean indicating that the function should not take into account the instance data (applies only if the mesh has instances). Default: false

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`VertexBuffer`](VertexBuffer.md)\>

a FloatArray or null if the mesh has no vertex buffer for this kind.

***

### getVerticesData()

> **getVerticesData**(`kind`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1425)

Returns the array of the requested vertex data kind. Implemented by child classes

#### Parameters

##### kind

`string`

defines the vertex data kind to use

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

null

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`getVerticesData`](../interfaces/IGetSetVerticesData.md#getverticesdata)

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1649)

Gets the current world matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix

#### Overrides

[`TransformNode`](TransformNode.md).[`getWorldMatrix`](TransformNode.md#getworldmatrix)

***

### instantiateHierarchy()

> **instantiateHierarchy**(`newParent?`, `options?`, `onNewNodeCreated?`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:443](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L443)

Instantiate (when possible) or clone that node with its hierarchy

#### Parameters

##### newParent?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

defines the new parent to use for the instance (or clone)

##### options?

defines options to configure how copy is done

###### doNotInstantiate

`boolean` \| ((`node`) => `boolean`)

##### onNewNodeCreated?

(`source`, `clone`) => `void`

defines an option callback to call when a clone or an instance is created

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

an instance (or a clone) of the current node with its hierarchy

#### Inherited from

[`TransformNode`](TransformNode.md).[`instantiateHierarchy`](TransformNode.md#instantiatehierarchy)

***

### intersects()

> **intersects**(`ray`, `fastCheck?`, `trianglePredicate?`, `onlyBoundingInfo?`, `worldToUse?`, `skipBoundingInfo?`): [`PickingInfo`](PickingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2204)

Checks if the passed Ray intersects with the mesh. A mesh triangle can be picked both from its front and back sides,
irrespective of orientation.

#### Parameters

##### ray

[`Ray`](Ray.md)

defines the ray to use. It should be in the mesh's LOCAL coordinate space.

##### fastCheck?

`boolean`

defines if fast mode (but less precise) must be used (false by default)

##### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

##### onlyBoundingInfo?

`boolean` = `false`

defines a boolean indicating if picking should only happen using bounding info (false by default)

##### worldToUse?

[`Matrix`](Matrix.md)

defines the world matrix to use to get the world coordinate of the intersection point

##### skipBoundingInfo?

`boolean` = `false`

a boolean indicating if we should skip the bounding info check

#### Returns

[`PickingInfo`](PickingInfo.md)

the picking info

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/mesh_intersect

***

### intersectsMesh()

> **intersectsMesh**(`mesh`, `precise?`, `includeDescendants?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2005)

True if the mesh intersects another mesh or a SolidParticle object

#### Parameters

##### mesh

`AbstractMesh` \| [`SolidParticle`](SolidParticle.md)

defines a target mesh or SolidParticle to test

##### precise?

`boolean` = `false`

Unless the parameter `precise` is set to `true` the intersection is computed according to Axis Aligned Bounding Boxes (AABB), else according to OBB (Oriented BBoxes)

##### includeDescendants?

`boolean`

Can be set to true to test if the mesh defined in parameters intersects with the current mesh or any child meshes

#### Returns

`boolean`

true if there is an intersection

***

### intersectsPoint()

> **intersectsPoint**(`point`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2029](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2029)

Returns true if the passed point (Vector3) is inside the mesh bounding box

#### Parameters

##### point

[`Vector3`](Vector3.md)

defines the point to test

#### Returns

`boolean`

true if there is an intersection

***

### isCompletelyInFrustum()

> **isCompletelyInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1994](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1994)

Returns `true` if the mesh is completely in the frustum defined be the passed array of planes.
A mesh is completely in the frustum if its bounding box it completely inside the frustum.

#### Parameters

##### frustumPlanes

[`Plane`](Plane.md)[]

defines the frustum to test

#### Returns

`boolean`

true if the mesh is completely in the frustum planes

#### Implementation of

[`ICullable`](../interfaces/ICullable.md).[`isCompletelyInFrustum`](../interfaces/ICullable.md#iscompletelyinfrustum)

***

### isDescendantOf()

> **isDescendantOf**(`ancestor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:659](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L659)

Is this node a descendant of the given node?
The function will iterate up the hierarchy until the ancestor was found or no more parents defined

#### Parameters

##### ancestor

[`Node`](Node.md)

defines the parent node to inspect

#### Returns

`boolean`

a boolean indicating if this node is a descendant of the given node

#### Inherited from

[`TransformNode`](TransformNode.md).[`isDescendantOf`](TransformNode.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`TransformNode`](TransformNode.md).[`isDisposed`](TransformNode.md#isdisposed)

***

### isEnabled()

> **isEnabled**(`checkAncestors?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:617](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L617)

Is this node enabled?
If the node has a parent, all ancestors will be checked and false will be returned if any are false (not enabled), otherwise will return true

#### Parameters

##### checkAncestors?

`boolean` = `true`

indicates if this method should check the ancestors. The default is to check the ancestors. If set to false, the method will return the value of this node without checking ancestors

#### Returns

`boolean`

whether this node (and its parent) is enabled

#### Inherited from

[`TransformNode`](TransformNode.md).[`isEnabled`](TransformNode.md#isenabled)

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1984](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1984)

Returns `true` if the mesh is within the frustum defined by the passed array of planes.
A mesh is in the frustum if its bounding box intersects the frustum

#### Parameters

##### frustumPlanes

[`Plane`](Plane.md)[]

defines the frustum to test

#### Returns

`boolean`

true if the mesh is in the frustum planes

#### Implementation of

[`ICullable`](../interfaces/ICullable.md).[`isInFrustum`](../interfaces/ICullable.md#isinfrustum)

***

### isReady()

> **isReady**(`_completeCheck?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L596)

Is this node ready to be used/rendered

#### Parameters

##### \_completeCheck?

`boolean` = `false`

defines if a complete check (including materials and lights) has to be done (false by default)

#### Returns

`boolean`

true if the node is ready

#### Inherited from

[`TransformNode`](TransformNode.md).[`isReady`](TransformNode.md#isready)

***

### isUsingPivotMatrix()

> **isUsingPivotMatrix**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L207)

return true if a pivot has been set

#### Returns

`boolean`

true if a pivot matrix is used

#### Inherited from

[`TransformNode`](TransformNode.md).[`isUsingPivotMatrix`](TransformNode.md#isusingpivotmatrix)

***

### isUsingPostMultiplyPivotMatrix()

> **isUsingPostMultiplyPivotMatrix**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L214)

#### Returns

`boolean`

true if pivot matrix must be cancelled in the world matrix. When this parameter is set to true (default), the inverse of the pivot matrix is also applied at the end to cancel the transformation effect.

#### Inherited from

[`TransformNode`](TransformNode.md).[`isUsingPostMultiplyPivotMatrix`](TransformNode.md#isusingpostmultiplypivotmatrix)

***

### isVerticesDataPresent()

> **isVerticesDataPresent**(`kind`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1529)

Gets a boolean indicating if specific vertex data is present

#### Parameters

##### kind

`string`

defines the vertex data kind to use

#### Returns

`boolean`

true is data kind is present

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`isVerticesDataPresent`](../interfaces/IGetSetVerticesData.md#isverticesdatapresent)

***

### isWorldMatrixCameraDependent()

> **isWorldMatrixCameraDependent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1076](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1076)

Returns whether the transform node world matrix computation needs the camera information to be computed.
This is the case when the node is a billboard or has an infinite distance for instance.

#### Returns

`boolean`

true if the world matrix computation needs the camera information to be computed

#### Inherited from

[`TransformNode`](TransformNode.md).[`isWorldMatrixCameraDependent`](TransformNode.md#isworldmatrixcameradependent)

***

### locallyTranslate()

> **locallyTranslate**(`vector3`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:585](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L585)

Translates the mesh along the passed Vector3 in its local space.

#### Parameters

##### vector3

[`Vector3`](Vector3.md)

the distance to translate in localspace

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`locallyTranslate`](TransformNode.md#locallytranslate)

***

### lookAt()

> **lookAt**(`targetPoint`, `yawCor?`, `pitchCor?`, `rollCor?`, `space?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:602](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L602)

Orients a mesh towards a target point. Mesh must be drawn facing user.

#### Parameters

##### targetPoint

[`Vector3`](Vector3.md)

the position (must be in same space as current mesh) to look at

##### yawCor?

`number` = `0`

optional yaw (y-axis) correction in radians

##### pitchCor?

`number` = `0`

optional pitch (x-axis) correction in radians

##### rollCor?

`number` = `0`

optional roll (z-axis) correction in radians

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

the chosen space of the target

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`lookAt`](TransformNode.md#lookat)

***

### markAsDirty()

> **markAsDirty**(`property?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1350)

Flag the AbstractMesh as dirty (Forcing it to update everything)

#### Parameters

##### property?

`string`

if set to "rotation" the objects rotationQuaternion will be set to null

#### Returns

`AbstractMesh`

this AbstractMesh

#### Overrides

[`TransformNode`](TransformNode.md).[`markAsDirty`](TransformNode.md#markasdirty)

***

### movePOV()

> **movePOV**(`amountRight`, `amountUp`, `amountForward`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1698](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1698)

Perform relative position change from the point of view of behind the front of the mesh.
This is performed taking into account the meshes current rotation, so you do not have to care.
Supports definition of mesh facing forward or backward definedFacingForwardSearch \| See definedFacingForwardSearch.

#### Parameters

##### amountRight

`number`

defines the distance on the right axis

##### amountUp

`number`

defines the distance on the up axis

##### amountForward

`number`

defines the distance on the forward axis

#### Returns

`AbstractMesh`

the current mesh

***

### moveWithCollisions()

> **moveWithCollisions**(`displacement`, `slideOnCollide?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2062](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2062)

Move the mesh using collision engine

#### Parameters

##### displacement

[`Vector3`](Vector3.md)

defines the requested displacement vector

##### slideOnCollide?

`boolean` = `true`

If true, the mesh will slide along a collider's surface.  If false, it will stop moving at the first collision. (true by default)

#### Returns

`AbstractMesh`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

***

### normalizeToUnitCube()

> **normalizeToUnitCube**(`includeDescendants?`, `ignoreRotation?`, `predicate?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1598)

Uniformly scales the mesh to fit inside of a unit cube (1 X 1 X 1 units)

#### Parameters

##### includeDescendants?

`boolean` = `true`

Use the hierarchy's bounding box instead of the mesh's bounding box. Default is false

##### ignoreRotation?

`boolean` = `false`

ignore rotation when computing the scale (ie. object will be axis aligned). Default is false

##### predicate?

[`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `boolean`\>

predicate that is passed in to getHierarchyBoundingVectors when selecting which object should be included when scaling

#### Returns

`AbstractMesh`

the current mesh

#### Overrides

[`TransformNode`](TransformNode.md).[`normalizeToUnitCube`](TransformNode.md#normalizetounitcube)

***

### optimizeIndicesAsync()

> **optimizeIndicesAsync**(): `Promise`\<`AbstractMesh`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2898)

Optimize the indices order so that we keep the faces with similar indices together

#### Returns

`Promise`\<`AbstractMesh`\>

the current mesh

***

### refreshBoundingInfo()

#### Call Signature

> `abstract` **refreshBoundingInfo**(`options`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1755](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1755)

This method recomputes and sets a new BoundingInfo to the mesh unless it is locked.
This means the mesh underlying bounding box and sphere are recomputed.

##### Parameters

###### options

[`IMeshDataOptions`](../interfaces/IMeshDataOptions.md)

defines a set of options for computing the bounding info

##### Returns

`AbstractMesh`

the current mesh

#### Call Signature

> `abstract` **refreshBoundingInfo**(`applySkeletonOrOptions`, `applyMorph`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1764)

This method recomputes and sets a new BoundingInfo to the mesh unless it is locked.
This means the mesh underlying bounding box and sphere are recomputed.

##### Parameters

###### applySkeletonOrOptions

`boolean` \| [`IMeshDataOptions`](../interfaces/IMeshDataOptions.md)

defines whether to apply the skeleton before computing the bounding info or a set of options

###### applyMorph

`boolean`

defines whether to apply the morph target before computing the bounding info

##### Returns

`AbstractMesh`

the current mesh

***

### registerAfterWorldMatrixUpdate()

> **registerAfterWorldMatrixUpdate**(`func`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1392)

If you'd like to be called back after the mesh position, rotation or scaling has been updated.

#### Parameters

##### func

(`mesh`) => `void`

callback function to add

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`registerAfterWorldMatrixUpdate`](TransformNode.md#registerafterworldmatrixupdate)

***

### releaseSubMeshes()

> **releaseSubMeshes**(`immediate?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2340)

Disposes all the submeshes of the current mesh

#### Parameters

##### immediate?

`boolean` = `false`

should dispose the effects immediately or not

#### Returns

`AbstractMesh`

the current mesh

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L451)

Remove an attached behavior

#### Parameters

##### behavior

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>

defines the behavior to attach

#### Returns

[`Node`](Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`TransformNode`](TransformNode.md).[`removeBehavior`](TransformNode.md#removebehavior)

***

### removeChild()

> **removeChild**(`mesh`, `preserveScalingSign?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:857](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L857)

Removes the passed mesh from the current mesh children list

#### Parameters

##### mesh

[`TransformNode`](TransformNode.md)

defines the child mesh

##### preserveScalingSign?

`boolean` = `false`

if true, keep scaling sign of child. Otherwise, scaling sign might change.

#### Returns

`this`

the current mesh

#### Inherited from

[`TransformNode`](TransformNode.md).[`removeChild`](TransformNode.md#removechild)

***

### resetDrawCache()

> **resetDrawCache**(`passId?`, `immediate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1362)

Resets the draw wrappers cache for all submeshes of this abstract mesh

#### Parameters

##### passId?

`number`

If provided, releases only the draw wrapper corresponding to this render pass id

##### immediate?

`boolean` = `false`

If true, the effect will be released immediately, otherwise it will be released at the next frame

#### Returns

`void`

***

### resetLocalMatrix()

> **resetLocalMatrix**(`independentOfChildren?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1353)

Resets this nodeTransform's local matrix to Matrix.Identity().

#### Parameters

##### independentOfChildren?

`boolean` = `true`

indicates if all child nodeTransform's world-space transform should be preserved.

#### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`resetLocalMatrix`](TransformNode.md#resetlocalmatrix)

***

### rotate()

> **rotate**(`axis`, `amount`, `space?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:940](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L940)

Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in the given space.
space (default LOCAL) can be either Space.LOCAL, either Space.WORLD.
Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.
The passed axis is also normalized.

#### Parameters

##### axis

[`Vector3`](Vector3.md)

the axis to rotate around

##### amount

`number`

the amount to rotate in radians

##### space?

[`Space`](../enumerations/Space.md)

Space to rotate in (Default: local)

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`rotate`](TransformNode.md#rotate)

***

### rotateAround()

> **rotateAround**(`point`, `axis`, `amount`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:977](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L977)

Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in world space.
Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.
The passed axis is also normalized. .
Method is based on http://www.euclideanspace.com/maths/geometry/affine/aroundPoint/index.htm

#### Parameters

##### point

[`Vector3`](Vector3.md)

the point to rotate around

##### axis

[`Vector3`](Vector3.md)

the axis to rotate around

##### amount

`number`

the amount to rotate in radians

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode

#### Inherited from

[`TransformNode`](TransformNode.md).[`rotateAround`](TransformNode.md#rotatearound)

***

### rotatePOV()

> **rotatePOV**(`flipBack`, `twirlClockwise`, `tiltRight`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1731](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1731)

Perform relative rotation change from the point of view of behind the front of the mesh.
Supports definition of mesh facing forward or backward definedFacingForwardSearch \| See definedFacingForwardSearch.

#### Parameters

##### flipBack

`number`

defines the flip

##### twirlClockwise

`number`

defines the twirl

##### tiltRight

`number`

defines the tilt

#### Returns

`AbstractMesh`

the current mesh

***

### serialize()

> **serialize**(`currentSerializationObject?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1469)

Serializes the objects information.

#### Parameters

##### currentSerializationObject?

`any`

defines the object to serialize in

#### Returns

`any`

the serialized object

#### Inherited from

[`TransformNode`](TransformNode.md).[`serialize`](TransformNode.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L916)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`TransformNode`](TransformNode.md).[`serializeAnimationRanges`](TransformNode.md#serializeanimationranges)

***

### setAbsolutePosition()

> **setAbsolutePosition**(`absolutePosition`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:525](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L525)

Sets the mesh absolute position in the World from a Vector3 or an Array(3).

#### Parameters

##### absolutePosition

[`Vector3`](Vector3.md)

the absolute position to set

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`setAbsolutePosition`](TransformNode.md#setabsoluteposition)

***

### setBoundingInfo()

> **setBoundingInfo**(`boundingInfo`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1567](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1567)

Overwrite the current bounding info

#### Parameters

##### boundingInfo

[`BoundingInfo`](BoundingInfo.md)

defines the new bounding info

#### Returns

`AbstractMesh`

the current mesh

***

### setDirection()

> **setDirection**(`localAxis`, `yawCor?`, `pitchCor?`, `rollCor?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:676](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L676)

Sets this transform node rotation to the given local axis.

#### Parameters

##### localAxis

[`Vector3`](Vector3.md)

the axis in local space

##### yawCor?

`number` = `0`

optional yaw (y-axis) correction in radians

##### pitchCor?

`number` = `0`

optional pitch (x-axis) correction in radians

##### rollCor?

`number` = `0`

optional roll (z-axis) correction in radians

#### Returns

[`TransformNode`](TransformNode.md)

this TransformNode

#### Inherited from

[`TransformNode`](TransformNode.md).[`setDirection`](TransformNode.md#setdirection)

***

### setEnabled()

> **setEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L644)

Set the enabled state of this node

#### Parameters

##### value

`boolean`

defines the new enabled state

#### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`setEnabled`](TransformNode.md#setenabled)

***

### setIndices()

> **setIndices**(`indices`, `totalVertices`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1519](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1519)

Sets the mesh indices,
If the mesh has no geometry, a new Geometry object is created and set to the mesh.

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

Expects an array populated with integers or a typed array (Int32Array, Uint32Array, Uint16Array)

##### totalVertices

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defines the total number of vertices

#### Returns

`AbstractMesh`

the current mesh

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`setIndices`](../interfaces/IGetSetVerticesData.md#setindices)

***

### setMaterialForRenderPass()

> **setMaterialForRenderPass**(`renderPassId`, `material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:779](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L779)

Sets the material to be used to render the mesh in a specific render pass

#### Parameters

##### renderPassId

`number`

render pass id

##### material?

[`Material`](Material.md)

material to use for this render pass. If undefined is passed, no specific material will be used for this render pass but the regular material will be used instead (mesh.material)

#### Returns

`void`

***

### setParent()

> **setParent**(`node`, `preserveScalingSign?`, `updatePivot?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:788](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L788)

Defines the passed node as the parent of the current node.
The node will remain exactly where it is and its position / rotation will be updated accordingly.
If you don't want to preserve the current rotation / position, assign the parent through parent accessor.
Note that if the mesh has a pivot matrix / point defined it will be applied after the parent was updated.
In that case the node will not remain in the same space as it is, as the pivot will be applied.
To avoid this, you can set updatePivot to true and the pivot will be updated to identity

#### Parameters

##### node

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

the node ot set as the parent

##### preserveScalingSign?

`boolean` = `false`

if true, keep scaling sign of child. Otherwise, scaling sign might change.

##### updatePivot?

`boolean` = `false`

if true, update the pivot matrix to keep the node in the same space as before

#### Returns

[`TransformNode`](TransformNode.md)

this TransformNode.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

#### Inherited from

[`TransformNode`](TransformNode.md).[`setParent`](TransformNode.md#setparent)

***

### setPhysicsLinkWith()

> **setPhysicsLinkWith**(`otherMesh`, `pivot1`, `pivot2`, `options?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L43)

Creates a physic joint between two meshes

#### Parameters

##### otherMesh

[`Mesh`](Mesh.md)

defines the other mesh to use

##### pivot1

[`Vector3`](Vector3.md)

defines the pivot to use on this mesh

##### pivot2

[`Vector3`](Vector3.md)

defines the pivot to use on the other mesh

##### options?

`any`

defines additional options (can be plugin dependent)

#### Returns

`AbstractMesh`

the current mesh

#### See

https://www.babylonjs-playground.com/#0BS5U0#0

***

### setPivotMatrix()

> **setPivotMatrix**(`matrix`, `postMultiplyPivotMatrix?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L409)

Sets a new pivot matrix to the current node

#### Parameters

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the new pivot matrix to use

##### postMultiplyPivotMatrix?

`boolean` = `true`

defines if the pivot matrix must be cancelled in the world matrix. When this parameter is set to true (default), the inverse of the pivot matrix is also applied at the end to cancel the transformation effect

#### Returns

[`TransformNode`](TransformNode.md)

the current TransformNode

#### Inherited from

[`TransformNode`](TransformNode.md).[`setPivotMatrix`](TransformNode.md#setpivotmatrix)

***

### setPivotPoint()

> **setPivotPoint**(`point`, `space?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L696)

Sets a new pivot point to the current node

#### Parameters

##### point

[`Vector3`](Vector3.md)

defines the new pivot point to use

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

defines if the point is in world or local space (local by default)

#### Returns

[`TransformNode`](TransformNode.md)

the current TransformNode

#### Inherited from

[`TransformNode`](TransformNode.md).[`setPivotPoint`](TransformNode.md#setpivotpoint)

***

### setPositionWithLocalVector()

> **setPositionWithLocalVector**(`vector3`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L563)

Sets the mesh position in its local space.

#### Parameters

##### vector3

[`Vector3`](Vector3.md)

the position to set in localspace

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`setPositionWithLocalVector`](TransformNode.md#setpositionwithlocalvector)

***

### setPreTransformMatrix()

> **setPreTransformMatrix**(`matrix`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L399)

Sets a new matrix to apply before all other transformation

#### Parameters

##### matrix

[`Matrix`](Matrix.md)

defines the transform matrix

#### Returns

[`TransformNode`](TransformNode.md)

the current TransformNode

#### Inherited from

[`TransformNode`](TransformNode.md).[`setPreTransformMatrix`](TransformNode.md#setpretransformmatrix)

***

### setVerticesData()

> **setVerticesData**(`kind`, `data`, `updatable?`, `stride?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1481)

Sets the vertex data of the mesh geometry for the requested `kind`.
If the mesh has no geometry, a new Geometry object is set to the mesh and then passed this vertex data.
Note that a new underlying VertexBuffer object is created each call.
If the `kind` is the `PositionKind`, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.

#### Parameters

##### kind

`string`

defines vertex data kind:
* VertexBuffer.PositionKind
* VertexBuffer.UVKind
* VertexBuffer.UV2Kind
* VertexBuffer.UV3Kind
* VertexBuffer.UV4Kind
* VertexBuffer.UV5Kind
* VertexBuffer.UV6Kind
* VertexBuffer.ColorKind
* VertexBuffer.MatricesIndicesKind
* VertexBuffer.MatricesIndicesExtraKind
* VertexBuffer.MatricesWeightsKind
* VertexBuffer.MatricesWeightsExtraKind

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the data source

##### updatable?

`boolean`

defines if the data must be flagged as updatable (or static)

##### stride?

`number`

defines the vertex stride (size of an entire vertex). Can be null and in this case will be deduced from vertex data kind

#### Returns

`AbstractMesh`

the current mesh

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`setVerticesData`](../interfaces/IGetSetVerticesData.md#setverticesdata)

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1176)

Gets a string representation of the current mesh

#### Parameters

##### fullDetails?

`boolean`

defines a boolean indicating if full details must be included

#### Returns

`string`

a string representation of the current mesh

***

### transferToEffect()

> **transferToEffect**(`world`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1146)

Transfer the mesh values to its UBO.

#### Parameters

##### world

[`Matrix`](Matrix.md)

The world matrix associated with the mesh

#### Returns

`void`

***

### translate()

> **translate**(`axis`, `distance`, `space?`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1019](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1019)

Translates the mesh along the axis vector for the passed distance in the given space.
space (default LOCAL) can be either Space.LOCAL, either Space.WORLD.

#### Parameters

##### axis

[`Vector3`](Vector3.md)

the axis to translate in

##### distance

`number`

the distance to translate

##### space?

[`Space`](../enumerations/Space.md)

Space to rotate in (Default: local)

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`translate`](TransformNode.md#translate)

***

### unfreezeWorldMatrix()

> **unfreezeWorldMatrix**(): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:498](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L498)

Allows back the World matrix computation.

#### Returns

`AbstractMesh`

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`unfreezeWorldMatrix`](TransformNode.md#unfreezeworldmatrix)

***

### unregisterAfterWorldMatrixUpdate()

> **unregisterAfterWorldMatrixUpdate**(`func`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1402)

Removes a registered callback function.

#### Parameters

##### func

(`mesh`) => `void`

callback function to remove

#### Returns

[`TransformNode`](TransformNode.md)

the TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`unregisterAfterWorldMatrixUpdate`](TransformNode.md#unregisterafterworldmatrixupdate)

***

### updateFacetData()

> **updateFacetData**(): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2531)

Updates the mesh facetData arrays and the internal partitioning when the mesh is morphed or updated.
This method can be called within the render loop.
You don't need to call this method by yourself in the render loop when you update/morph a mesh with the methods CreateXXX() as they automatically manage this computation

#### Returns

`AbstractMesh`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

***

### updateIndices()

> **updateIndices**(`indices`, `offset?`, `gpuMemoryOnly?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2869](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2869)

Updates the AbstractMesh indices array

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the data source

##### offset?

`number`

defines the offset in the index buffer where to store the new data (can be null)

##### gpuMemoryOnly?

`boolean` = `false`

defines a boolean indicating that only the GPU memory must be updated leaving the CPU version of the indices unchanged (false by default)

#### Returns

`AbstractMesh`

the current mesh

***

### updatePoseMatrix()

> **updatePoseMatrix**(`matrix`): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L306)

Copies the parameter passed Matrix into the mesh Pose matrix.

#### Parameters

##### matrix

[`Matrix`](Matrix.md)

the matrix to copy the pose from

#### Returns

[`TransformNode`](TransformNode.md)

this TransformNode.

#### Inherited from

[`TransformNode`](TransformNode.md).[`updatePoseMatrix`](TransformNode.md#updateposematrix)

***

### updateVerticesData()

> **updateVerticesData**(`kind`, `data`, `updateExtends?`, `makeItUnique?`): `AbstractMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1507)

Updates the existing vertex data of the mesh geometry for the requested `kind`.
If the mesh has no geometry, it is simply returned as it is.

#### Parameters

##### kind

`string`

defines vertex data kind:
* VertexBuffer.PositionKind
* VertexBuffer.UVKind
* VertexBuffer.UV2Kind
* VertexBuffer.UV3Kind
* VertexBuffer.UV4Kind
* VertexBuffer.UV5Kind
* VertexBuffer.UV6Kind
* VertexBuffer.ColorKind
* VertexBuffer.MatricesIndicesKind
* VertexBuffer.MatricesIndicesExtraKind
* VertexBuffer.MatricesWeightsKind
* VertexBuffer.MatricesWeightsExtraKind

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the data source

##### updateExtends?

`boolean`

If `kind` is `PositionKind` and if `updateExtends` is true, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed

##### makeItUnique?

`boolean`

If true, a new global geometry is created from this data and is set to the mesh

#### Returns

`AbstractMesh`

the current mesh

#### Implementation of

[`IGetSetVerticesData`](../interfaces/IGetSetVerticesData.md).[`updateVerticesData`](../interfaces/IGetSetVerticesData.md#updateverticesdata)

***

### AddNodeConstructor()

> `static` **AddNodeConstructor**(`type`, `constructorFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L61)

Add a new node constructor

#### Parameters

##### type

`string`

defines the type name of the node to construct

##### constructorFunc

[`NodeConstructor`](../type-aliases/NodeConstructor.md)

defines the constructor function

#### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`AddNodeConstructor`](TransformNode.md#addnodeconstructor)

***

### Construct()

> `static` **Construct**(`type`, `name`, `scene`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L73)

Returns a node constructor based on type name

#### Parameters

##### type

`string`

defines the type name

##### name

`string`

defines the new node name

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### options?

`any`

defines optional options to transmit to constructors

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

the new constructor or null

#### Inherited from

[`TransformNode`](TransformNode.md).[`Construct`](TransformNode.md#construct)

***

### ParseAnimationRanges()

> `static` **ParseAnimationRanges**(`node`, `parsedNode`, `_scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L988)

Parse animation range data from a serialization object and store them into a given node

#### Parameters

##### node

[`Node`](Node.md)

defines where to store the animation ranges

##### parsedNode

`any`

defines the serialization object to read data from

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`void`

#### Inherited from

[`TransformNode`](TransformNode.md).[`ParseAnimationRanges`](TransformNode.md#parseanimationranges)
