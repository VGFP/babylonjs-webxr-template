[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InstancedMesh

# Class: InstancedMesh

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L26)

Creates an instance based on a source mesh.

## Extends

- [`AbstractMesh`](AbstractMesh.md)

## Extended by

- [`InstancedLinesMesh`](InstancedLinesMesh.md)

## Constructors

### Constructor

> **new InstancedMesh**(`name`, `source`): `InstancedMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L43)

Creates a new InstancedMesh object from the mesh source.

#### Parameters

##### name

`string`

defines the name of the instance

##### source

[`Mesh`](Mesh.md)

the mesh to create the instance from

#### Returns

`InstancedMesh`

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`constructor`](AbstractMesh.md#constructor)

## Properties

### actionManager

> **actionManager**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractActionManager`](AbstractActionManager.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:938](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L938)

Gets or sets the current action manager

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`actionManager`](AbstractMesh.md#actionmanager)

***

### alphaIndex

> **alphaIndex**: `number` = `Number.MAX_VALUE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:669](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L669)

Gets or sets the alpha index used to sort transparent meshes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#alpha-index

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`alphaIndex`](AbstractMesh.md#alphaindex)

***

### alwaysSelectAsActiveMesh

> **alwaysSelectAsActiveMesh**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:927](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L927)

True if the mesh must be rendered in any case (this will shortcut the frustum clipping phase)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`alwaysSelectAsActiveMesh`](AbstractMesh.md#alwaysselectasactivemesh)

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`animations`](AbstractMesh.md#animations)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`cullingStrategy`](AbstractMesh.md#cullingstrategy)

***

### customMarkAsDirty

> **customMarkAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L264)

Allow user to specify custom mechanism for mark as dirty

#### Returns

`void`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`customMarkAsDirty`](AbstractMesh.md#custommarkasdirty)

***

### decalMap

> **decalMap**: [`Nullable`](../type-aliases/Nullable.md)\<[`MeshUVSpaceRenderer`](MeshUVSpaceRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.decalMap.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.decalMap.types.ts#L13)

Gets or sets the decal map for this mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`decalMap`](AbstractMesh.md#decalmap)

***

### definedFacingForward

> **definedFacingForward**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L631)

Gets or sets the orientation for POV movement & rotation

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`definedFacingForward`](AbstractMesh.md#definedfacingforward)

***

### doNotSyncBoundingInfo

> **doNotSyncBoundingInfo**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:932](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L932)

Gets or sets a boolean indicating that the bounding info does not need to be kept in sync (for performance reason)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`doNotSyncBoundingInfo`](AbstractMesh.md#donotsyncboundinginfo)

***

### edgesColor

> **edgesColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1015](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1015)

Defines edge color used when edgesRenderer is enabled

#### See

https://www.babylonjs-playground.com/#10OJSG#13

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`edgesColor`](AbstractMesh.md#edgescolor)

***

### edgesRenderer

> **edgesRenderer**: [`Nullable`](../type-aliases/Nullable.md)\<[`EdgesRenderer`](EdgesRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.types.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.types.ts#L18)

Gets the edgesRenderer associated with the mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`edgesRenderer`](AbstractMesh.md#edgesrenderer)

***

### edgesWidth

> **edgesWidth**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1010](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1010)

Defines edge width used when edgesRenderer is enabled

#### See

https://www.babylonjs-playground.com/#10OJSG#13

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`edgesWidth`](AbstractMesh.md#edgeswidth)

***

### ellipsoid

> **ellipsoid**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:944](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L944)

Gets or sets the ellipsoid used to impersonate this mesh when using collision engine (default is (0.5, 1, 0.5))

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`ellipsoid`](AbstractMesh.md#ellipsoid)

***

### ellipsoidOffset

> **ellipsoidOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:949](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L949)

Gets or sets the ellipsoid offset used to impersonate this mesh when using collision engine (default is (0, 0, 0))

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`ellipsoidOffset`](AbstractMesh.md#ellipsoidoffset)

***

### enablePointerMoveEvents

> **enablePointerMoveEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L701)

Gets or sets a boolean indicating that pointer move events must be supported on this mesh (false by default)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`enablePointerMoveEvents`](AbstractMesh.md#enablepointermoveevents)

***

### forceRenderingWhenOccluded

> **forceRenderingWhenOccluded**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L101)

Flag to force rendering the mesh even if occluded

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`forceRenderingWhenOccluded`](AbstractMesh.md#forcerenderingwhenoccluded)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`id`](AbstractMesh.md#id)

***

### ignoreNonUniformScaling

> **ignoreNonUniformScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L134)

Gets or sets a boolean indicating that non uniform scaling (when at least one component is different from others) should be ignored.
By default the system will update normals to compensate

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`ignoreNonUniformScaling`](AbstractMesh.md#ignorenonuniformscaling)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`inspectableCustomProperties`](AbstractMesh.md#inspectablecustomproperties)

***

### instancedBuffers

> **instancedBuffers**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L52)

Object used to store instanced buffers defined by user

#### Index Signature

\[`key`: `string`\]: `any`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances#custom-buffers

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`instancedBuffers`](AbstractMesh.md#instancedbuffers)

***

### isBlocker

> **isBlocker**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L696)

Gets or sets a boolean indicating if the mesh must be considered as a ray blocker for lens flares (false by default)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isBlocker`](AbstractMesh.md#isblocker)

***

### isNearGrabbable

> **isNearGrabbable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L688)

Gets or sets a boolean indicating if the mesh can be grabbed. Default is false.
Setting this to true, while using the XR near interaction feature, will trigger a pointer event when the mesh is grabbed.
Grabbing means that the controller is using the squeeze or main trigger button to grab the mesh.
This is different from nearPickable which only triggers the event when the mesh is touched by the controller

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isNearGrabbable`](AbstractMesh.md#isneargrabbable)

***

### isNearPickable

> **isNearPickable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L680)

Gets or sets a boolean indicating if the mesh can be near picked (touched by the XR controller or hands). Default is false

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isNearPickable`](AbstractMesh.md#isnearpickable)

***

### isOccluded

> **isOccluded**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L89)

Gets or sets whether the mesh is occluded or not, it is used also to set the initial state of the mesh to be occluded or not

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isOccluded`](AbstractMesh.md#isoccluded)

***

### isOcclusionQueryInProgress

> **isOcclusionQueryInProgress**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L95)

Flag to check the progress status of the query

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isOcclusionQueryInProgress`](AbstractMesh.md#isocclusionqueryinprogress)

***

### isPickable

> **isPickable**: `boolean` = `AbstractMesh.DefaultIsPickable`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L675)

Gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions).
Default value is determined by [AbstractMesh.DefaultIsPickable](AbstractMesh.md#defaultispickable) (true unless changed).

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isPickable`](AbstractMesh.md#ispickable)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`metadata`](AbstractMesh.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L89)

Gets or sets the name of the node

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`name`](AbstractMesh.md#name)

***

### occlusionForRenderPassId

> **occlusionForRenderPassId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L107)

This number indicates the render pass id used to run the occlusion query. The default value is -1, which means run the occlusion query in all render passes.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`occlusionForRenderPassId`](AbstractMesh.md#occlusionforrenderpassid)

***

### occlusionQueryAlgorithmType

> **occlusionQueryAlgorithmType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L83)

This property determines the type of occlusion query algorithm to run in WebGl, you can use:
* AbstractMesh.OCCLUSION_ALGORITHM_TYPE_ACCURATE which is mapped to GL_ANY_SAMPLES_PASSED.
* AbstractMesh.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE (Default Value) which is mapped to GL_ANY_SAMPLES_PASSED_CONSERVATIVE which is a false positive algorithm that is faster than GL_ANY_SAMPLES_PASSED but less accurate.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`occlusionQueryAlgorithmType`](AbstractMesh.md#occlusionqueryalgorithmtype)

***

### occlusionRetryCount

> **occlusionRetryCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L66)

This number indicates the number of allowed retries before stop the occlusion query, this is useful if the occlusion query is taking long time before to the query result is retrieved, the query result indicates if the object is visible within the scene or not and based on that Babylon.Js engine decides to show or hide the object.
The default value is -1 which means don't break the query and wait till the result

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`occlusionRetryCount`](AbstractMesh.md#occlusionretrycount)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`occlusionType`](AbstractMesh.md#occlusiontype)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onAccessibilityTagChangedObservable`](AbstractMesh.md#onaccessibilitytagchangedobservable)

***

### onAfterWorldMatrixUpdateObservable

> **onAfterWorldMatrixUpdateObservable**: [`Observable`](Observable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L172)

An event triggered after the world matrix is updated

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onAfterWorldMatrixUpdateObservable`](AbstractMesh.md#onafterworldmatrixupdateobservable)

***

### onCollideObservable

> **onCollideObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L598)

An event triggered when this mesh collides with another one

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onCollideObservable`](AbstractMesh.md#oncollideobservable)

***

### onCollisionPositionChangeObservable

> **onCollisionPositionChangeObservable**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:611](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L611)

An event triggered when the collision's position changes

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onCollisionPositionChangeObservable`](AbstractMesh.md#oncollisionpositionchangeobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onDisposeObservable`](AbstractMesh.md#ondisposeobservable)

***

### onMaterialChangedObservable

> **onMaterialChangedObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:624](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L624)

An event triggered when material is changed

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onMaterialChangedObservable`](AbstractMesh.md#onmaterialchangedobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onReady`](AbstractMesh.md#onready)

***

### onRebuildObservable

> **onRebuildObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1097](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1097)

An event triggered when the mesh is rebuilt.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onRebuildObservable`](AbstractMesh.md#onrebuildobservable)

***

### outlineColor

> **outlineColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L812)

Defines color to use when rendering outline

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`outlineColor`](AbstractMesh.md#outlinecolor)

***

### outlineWidth

> **outlineWidth**: `number` = `0.02`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L814)

Define width to use when rendering outline

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`outlineWidth`](AbstractMesh.md#outlinewidth)

***

### overlayAlpha

> **overlayAlpha**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L819)

Defines alpha to use when rendering overlay

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`overlayAlpha`](AbstractMesh.md#overlayalpha)

***

### overlayColor

> **overlayColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:817](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L817)

Defines color to use when rendering overlay

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`overlayColor`](AbstractMesh.md#overlaycolor)

***

### physicsBody

> **physicsBody**: [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L15)

Gets or sets the physics body associated with this node.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`physicsBody`](AbstractMesh.md#physicsbody)

***

### physicsImpostor

> **physicsImpostor**: [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L17)

Gets or sets impostor used for physic simulation

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`physicsImpostor`](AbstractMesh.md#physicsimpostor)

***

### reIntegrateRotationIntoRotationQuaternion

> **reIntegrateRotationIntoRotationQuaternion**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L140)

Gets or sets a boolean indicating that even if rotationQuaternion is defined, you can keep updating rotation property and Babylon.js will just mix both

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`reIntegrateRotationIntoRotationQuaternion`](AbstractMesh.md#reintegraterotationintorotationquaternion)

***

### renderOutline

> **renderOutline**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.types.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.types.ts#L24)

Gets or sets a boolean indicating if the outline must be rendered as well

#### See

https://www.babylonjs-playground.com/#10WJ5S#3

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`renderOutline`](AbstractMesh.md#renderoutline)

***

### renderOverlay

> **renderOverlay**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.types.ts#L32)

Gets or sets a boolean indicating if the overlay must be rendered as well

#### See

https://www.babylonjs-playground.com/#10WJ5S#2

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`renderOverlay`](AbstractMesh.md#renderoverlay)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`reservedDataStore`](AbstractMesh.md#reserveddatastore)

***

### scalingDeterminant

> **scalingDeterminant**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L109)

Multiplication factor on scale x/y/z when computing the world matrix. Eg. for a 1x1x1 cube setting this to 2 will make it a 2x2x2 cube

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`scalingDeterminant`](AbstractMesh.md#scalingdeterminant)

***

### showBoundingBox

> **showBoundingBox**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.types.ts#L32)

Gets or sets a boolean indicating if the bounding box must be rendered as well (false by default)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`showBoundingBox`](AbstractMesh.md#showboundingbox)

***

### showSubMeshesBoundingBox

> **showSubMeshesBoundingBox**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L691)

Gets or sets a boolean indicating that bounding boxes of subMeshes must be rendered as well (false by default)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`showSubMeshesBoundingBox`](AbstractMesh.md#showsubmeshesboundingbox)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`state`](AbstractMesh.md#state)

***

### subMeshes

> **subMeshes**: [`SubMesh`](SubMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1030](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1030)

Gets or sets the list of subMeshes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`subMeshes`](AbstractMesh.md#submeshes)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`uniqueId`](AbstractMesh.md#uniqueid)

***

### useOctreeForCollisions

> **useOctreeForCollisions**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:906](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L906)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes collision (true by default)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`useOctreeForCollisions`](AbstractMesh.md#useoctreeforcollisions)

***

### useOctreeForPicking

> **useOctreeForPicking**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L904)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes picking (true by default)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`useOctreeForPicking`](AbstractMesh.md#useoctreeforpicking)

***

### useOctreeForRenderingSelection

> **useOctreeForRenderingSelection**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L902)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes selection (true by default)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`useOctreeForRenderingSelection`](AbstractMesh.md#useoctreeforrenderingselection)

***

### BillboardUseParentOrientation

> `static` **BillboardUseParentOrientation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L50)

Child transform with Billboard flags should or should not apply parent rotation (default if off)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`BillboardUseParentOrientation`](AbstractMesh.md#billboarduseparentorientation)

***

### CULLINGSTRATEGY\_BOUNDINGSPHERE\_ONLY

> `readonly` `static` **CULLINGSTRATEGY\_BOUNDINGSPHERE\_ONLY**: `1` = `Constants.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L378)

Culling strategy : Bounding Sphere Only.
 This is an exclusion test. It's faster than the standard strategy because the bounding box is not tested.
 It's also less accurate than the standard because some not visible objects can still be selected.
 Test : is the bounding sphere outside the frustum ?
 If not, then the cullable object is in the frustum.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`](AbstractMesh.md#cullingstrategy_boundingsphere_only)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`CULLINGSTRATEGY_OPTIMISTIC_INCLUSION`](AbstractMesh.md#cullingstrategy_optimistic_inclusion)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY`](AbstractMesh.md#cullingstrategy_optimistic_inclusion_then_bsphere_only)

***

### CULLINGSTRATEGY\_STANDARD

> `readonly` `static` **CULLINGSTRATEGY\_STANDARD**: `0` = `Constants.MESHES_CULLINGSTRATEGY_STANDARD`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L371)

Default culling strategy : this is an exclusion test and it's the more accurate.
 Test order :
 Is the bounding sphere outside the frustum ?
 If not, are the bounding box vertices outside the frustum ?
 It not, then the cullable object is in the frustum.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`CULLINGSTRATEGY_STANDARD`](AbstractMesh.md#cullingstrategy_standard)

***

### DefaultIsPickable

> `static` **DefaultIsPickable**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:437](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L437)

Gets or sets the default value for isPickable for newly created meshes.
When set to false, all meshes created after the change will not be pickable by default.
Individual meshes can still override this by setting their own isPickable property.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`DefaultIsPickable`](AbstractMesh.md#defaultispickable)

***

### OCCLUSION\_ALGORITHM\_TYPE\_ACCURATE

> `static` **OCCLUSION\_ALGORITHM\_TYPE\_ACCURATE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L361)

Use an accurate occlusion algorithm

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`OCCLUSION_ALGORITHM_TYPE_ACCURATE`](AbstractMesh.md#occlusion_algorithm_type_accurate)

***

### OCCLUSION\_ALGORITHM\_TYPE\_CONSERVATIVE

> `static` **OCCLUSION\_ALGORITHM\_TYPE\_CONSERVATIVE**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:363](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L363)

Use a conservative occlusion algorithm

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE`](AbstractMesh.md#occlusion_algorithm_type_conservative)

***

### OCCLUSION\_TYPE\_NONE

> `static` **OCCLUSION\_TYPE\_NONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L355)

No occlusion

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`OCCLUSION_TYPE_NONE`](AbstractMesh.md#occlusion_type_none)

***

### OCCLUSION\_TYPE\_OPTIMISTIC

> `static` **OCCLUSION\_TYPE\_OPTIMISTIC**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L357)

Occlusion set to optimistic

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`OCCLUSION_TYPE_OPTIMISTIC`](AbstractMesh.md#occlusion_type_optimistic)

***

### OCCLUSION\_TYPE\_STRICT

> `static` **OCCLUSION\_TYPE\_STRICT**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L359)

Occlusion set to strict

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`OCCLUSION_TYPE_STRICT`](AbstractMesh.md#occlusion_type_strict)

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

[`AbstractMesh`](AbstractMesh.md).[`absolutePosition`](AbstractMesh.md#absoluteposition)

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

[`AbstractMesh`](AbstractMesh.md).[`absoluteRotationQuaternion`](AbstractMesh.md#absoluterotationquaternion)

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

[`AbstractMesh`](AbstractMesh.md).[`absoluteScaling`](AbstractMesh.md#absolutescaling)

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

[`AbstractMesh`](AbstractMesh.md).[`accessibilityTag`](AbstractMesh.md#accessibilitytag)

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

[`AbstractMesh`](AbstractMesh.md).[`animationPropertiesOverride`](AbstractMesh.md#animationpropertiesoverride)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`applyFog`](AbstractMesh.md#applyfog)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`bakedVertexAnimationManager`](AbstractMesh.md#bakedvertexanimationmanager)

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

[`AbstractMesh`](AbstractMesh.md).[`behaviors`](AbstractMesh.md#behaviors)

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

[`AbstractMesh`](AbstractMesh.md).[`billboardMode`](AbstractMesh.md#billboardmode)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`checkCollisions`](AbstractMesh.md#checkcollisions)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`collider`](AbstractMesh.md#collider)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`collisionGroup`](AbstractMesh.md#collisiongroup)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`collisionMask`](AbstractMesh.md#collisionmask)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`collisionResponse`](AbstractMesh.md#collisionresponse)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`collisionRetryCount`](AbstractMesh.md#collisionretrycount)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`computeBonesUsingShaders`](AbstractMesh.md#computebonesusingshaders)

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

[`AbstractMesh`](AbstractMesh.md).[`doNotSerialize`](AbstractMesh.md#donotserialize)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`enableDistantPicking`](AbstractMesh.md#enabledistantpicking)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`facetDepthSortFrom`](AbstractMesh.md#facetdepthsortfrom)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`facetNb`](AbstractMesh.md#facetnb)

***

### forward

#### Get Signature

> **get** **forward**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L280)

The forward direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`forward`](AbstractMesh.md#forward)

***

### geometry

#### Get Signature

> **get** **geometry**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L202)

Gets the mesh internal Geometry object

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`geometry`](AbstractMesh.md#geometry)

***

### hasBoundingInfo

#### Get Signature

> **get** **hasBoundingInfo**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1575](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1575)

Returns true if there is already a bounding info

##### Returns

`boolean`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`hasBoundingInfo`](AbstractMesh.md#hasboundinginfo)

***

### hasInstances

#### Get Signature

> **get** **hasInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1676](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1676)

Gets a boolean indicating if this mesh has instances

##### Returns

`boolean`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`hasInstances`](AbstractMesh.md#hasinstances)

***

### hasThinInstances

#### Get Signature

> **get** **hasThinInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1683](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1683)

Gets a boolean indicating if this mesh has thin instances

##### Returns

`boolean`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`hasThinInstances`](AbstractMesh.md#hasthininstances)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`hasVertexAlpha`](AbstractMesh.md#hasvertexalpha)

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

[`AbstractMesh`](AbstractMesh.md).[`infiniteDistance`](AbstractMesh.md#infinitedistance)

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

[`AbstractMesh`](AbstractMesh.md).[`inheritVisibility`](AbstractMesh.md#inheritvisibility)

***

### isBlocked

#### Get Signature

> **get** **isBlocked**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1376](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1376)

Returns true if the mesh is blocked. Implemented by child classes

##### Returns

`boolean`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isBlocked`](AbstractMesh.md#isblocked)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isFacetDataEnabled`](AbstractMesh.md#isfacetdataenabled)

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

[`AbstractMesh`](AbstractMesh.md).[`isVisible`](AbstractMesh.md#isvisible)

***

### isWorldMatrixFrozen

#### Get Signature

> **get** **isWorldMatrixFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L507)

True if the World matrix has been frozen.

##### Returns

`boolean`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isWorldMatrixFrozen`](AbstractMesh.md#isworldmatrixfrozen)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`layerMask`](AbstractMesh.md#layermask)

***

### lightSources

#### Get Signature

> **get** **lightSources**(): [`Light`](Light.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L89)

Gets the list of lights affecting that mesh

##### Returns

[`Light`](Light.md)[]

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`lightSources`](AbstractMesh.md#lightsources)

***

### material

#### Get Signature

> **get** **material**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L125)

The material of the source mesh

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

#### Set Signature

> **set** **material**(`_value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L129)

Gets or sets current material

##### Parameters

###### \_value

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

##### Returns

`void`

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`material`](AbstractMesh.md#material)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`morphTargetManager`](AbstractMesh.md#morphtargetmanager)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`mustDepthSortFacets`](AbstractMesh.md#mustdepthsortfacets)

***

### nonUniformScaling

#### Get Signature

> **get** **nonUniformScaling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:869](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L869)

True if the scaling property of this object is non uniform eg. (1,2,1)

##### Returns

`boolean`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`nonUniformScaling`](AbstractMesh.md#nonuniformscaling)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`numBoneInfluencers`](AbstractMesh.md#numboneinfluencers)

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onClonedObservable`](AbstractMesh.md#onclonedobservable)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onCollide`](AbstractMesh.md#oncollide)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onCollisionPositionChange`](AbstractMesh.md#oncollisionpositionchange)

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

[`AbstractMesh`](AbstractMesh.md).[`onDispose`](AbstractMesh.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`onEnabledStateChangedObservable`](AbstractMesh.md#onenabledstatechangedobservable)

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

[`AbstractMesh`](AbstractMesh.md).[`parent`](AbstractMesh.md#parent)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`partitioningBBoxRatio`](AbstractMesh.md#partitioningbboxratio)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`partitioningSubdivisions`](AbstractMesh.md#partitioningsubdivisions)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`pointerOverDisableMeshTesting`](AbstractMesh.md#pointeroverdisablemeshtesting)

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

[`AbstractMesh`](AbstractMesh.md).[`position`](AbstractMesh.md#position)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`rawBoundingInfo`](AbstractMesh.md#rawboundinginfo)

***

### receiveShadows

#### Get Signature

> **get** **receiveShadows**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L112)

If the source mesh receives shadows

##### Returns

`boolean`

#### Set Signature

> **set** **receiveShadows**(`_value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L116)

Gets or sets a boolean indicating that this mesh can receive realtime shadows

##### See

https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows

##### Parameters

###### \_value

`boolean`

##### Returns

`void`

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`receiveShadows`](AbstractMesh.md#receiveshadows)

***

### renderingGroupId

#### Get Signature

> **get** **renderingGroupId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L164)

Rendering ground id of the source mesh

##### Returns

`number`

#### Set Signature

> **set** **renderingGroupId**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L168)

Specifies the rendering group id for this mesh (0 by default)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#rendering-groups

##### Parameters

###### value

`number`

##### Returns

`void`

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`renderingGroupId`](AbstractMesh.md#renderinggroupid)

***

### right

#### Get Signature

> **get** **right**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L296)

The right direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`right`](AbstractMesh.md#right)

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

[`AbstractMesh`](AbstractMesh.md).[`rotation`](AbstractMesh.md#rotation)

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

[`AbstractMesh`](AbstractMesh.md).[`rotationQuaternion`](AbstractMesh.md#rotationquaternion)

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

[`AbstractMesh`](AbstractMesh.md).[`scaling`](AbstractMesh.md#scaling)

***

### skeleton

#### Get Signature

> **get** **skeleton**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L151)

Skeleton of the source mesh

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

#### Set Signature

> **set** **skeleton**(`_value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L155)

Gets or sets a skeleton to apply skinning transformations

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons

##### Parameters

###### \_value

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

##### Returns

`void`

#### Overrides

[`GaussianSplattingStream`](../../../loaders/src/classes/GaussianSplattingStream.md).[`skeleton`](../../../loaders/src/classes/GaussianSplattingStream.md#skeleton)

***

### sourceMesh

#### Get Signature

> **get** **sourceMesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L195)

The source mesh of the instance

##### Returns

[`Mesh`](Mesh.md)

***

### surroundingMeshes

#### Get Signature

> **get** **surroundingMeshes**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L997)

Gets or sets current surrounding meshes (null by default).

By default collision detection is tested against every mesh in the scene.
It is possible to set surroundingMeshes to a defined list of meshes and then only these specified
meshes will be tested for the collision.

Note: if set to an empty array no collision will happen when this mesh is moved.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

#### Set Signature

> **set** **surroundingMeshes**(`meshes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1001](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1001)

##### Parameters

###### meshes

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

##### Returns

`void`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`surroundingMeshes`](AbstractMesh.md#surroundingmeshes)

***

### up

#### Get Signature

> **get** **up**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L288)

The up direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`up`](AbstractMesh.md#up)

***

### useBones

#### Get Signature

> **get** **useBones**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1603](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1603)

Gets a boolean indicating if this mesh has skinning data and an attached skeleton

##### Returns

`boolean`

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`useBones`](AbstractMesh.md#usebones)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`useVertexColors`](AbstractMesh.md#usevertexcolors)

***

### visibility

#### Get Signature

> **get** **visibility**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L138)

Visibility of the source mesh

##### Returns

`number`

#### Set Signature

> **set** **visibility**(`_value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L142)

Gets or sets mesh visibility between 0 and 1 (default is 1)

##### Parameters

###### \_value

`number`

##### Returns

`void`

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`visibility`](AbstractMesh.md#visibility)

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

[`AbstractMesh`](AbstractMesh.md).[`worldMatrixFromCache`](AbstractMesh.md#worldmatrixfromcache)

***

### BILLBOARDMODE\_ALL

#### Get Signature

> **get** `static` **BILLBOARDMODE\_ALL**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:423](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L423)

Billboard on all axes

##### Returns

`number`

Object will rotate to face the camera

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`BILLBOARDMODE_ALL`](AbstractMesh.md#billboardmode_all)

***

### BILLBOARDMODE\_NONE

#### Get Signature

> **get** `static` **BILLBOARDMODE\_NONE**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L403)

No billboard

##### Returns

`number`

Object will not rotate to face the camera

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`BILLBOARDMODE_NONE`](AbstractMesh.md#billboardmode_none)

***

### BILLBOARDMODE\_USE\_POSITION

#### Get Signature

> **get** `static` **BILLBOARDMODE\_USE\_POSITION**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L428)

Billboard on using position instead of orientation

##### Returns

`number`

Object will rotate to face the camera's position instead of orientation

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`BILLBOARDMODE_USE_POSITION`](AbstractMesh.md#billboardmode_use_position)

***

### BILLBOARDMODE\_X

#### Get Signature

> **get** `static` **BILLBOARDMODE\_X**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L408)

Billboard on X axis

##### Returns

`number`

Object will rotate to face the camera but only on the x axis

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`BILLBOARDMODE_X`](AbstractMesh.md#billboardmode_x)

***

### BILLBOARDMODE\_Y

#### Get Signature

> **get** `static` **BILLBOARDMODE\_Y**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L413)

Billboard on Y axis

##### Returns

`number`

Object will rotate to face the camera but only on the y axis

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`BILLBOARDMODE_Y`](AbstractMesh.md#billboardmode_y)

***

### BILLBOARDMODE\_Z

#### Get Signature

> **get** `static` **BILLBOARDMODE\_Z**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L418)

Billboard on Z axis

##### Returns

`number`

Object will rotate to face the camera but only on the z axis

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`BILLBOARDMODE_Z`](AbstractMesh.md#billboardmode_z)

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

[`AbstractMesh`](AbstractMesh.md).[`addBehavior`](AbstractMesh.md#addbehavior)

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

[`AbstractMesh`](AbstractMesh.md).[`addChild`](AbstractMesh.md#addchild)

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

[`AbstractMesh`](AbstractMesh.md).[`addRotation`](AbstractMesh.md#addrotation)

***

### alignWithNormal()

> **alignWithNormal**(`normal`, `upDirection?`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`alignWithNormal`](AbstractMesh.md#alignwithnormal)

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

[`AbstractMesh`](AbstractMesh.md).[`applyAngularImpulse`](AbstractMesh.md#applyangularimpulse)

***

### applyImpulse()

> **applyImpulse**(`force`, `contactPoint`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`applyImpulse`](AbstractMesh.md#applyimpulse)

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

[`AbstractMesh`](AbstractMesh.md).[`applyTorque`](AbstractMesh.md#applytorque)

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

[`AbstractMesh`](AbstractMesh.md).[`attachToBone`](AbstractMesh.md#attachtobone)

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

[`AbstractMesh`](AbstractMesh.md).[`beginAnimation`](AbstractMesh.md#beginanimation)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`buildBoundingInfo`](AbstractMesh.md#buildboundinginfo)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`calcMovePOV`](AbstractMesh.md#calcmovepov)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`calcRotatePOV`](AbstractMesh.md#calcrotatepov)

***

### clone()

> **clone**(`name`, `newParent?`, `doNotCloneChildren?`, `newSourceMesh?`): `InstancedMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L539)

Creates a new InstancedMesh from the current mesh.

Returns the clone.

#### Parameters

##### name

`string`

the cloned mesh name

##### newParent?

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\> = `null`

the optional Node to parent the clone to.

##### doNotCloneChildren?

`boolean`

if `true` the model children aren't cloned.

##### newSourceMesh?

[`Mesh`](Mesh.md)

if set this mesh will be used as the source mesh instead of ths instance's one

#### Returns

`InstancedMesh`

the clone

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`clone`](AbstractMesh.md#clone)

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

[`AbstractMesh`](AbstractMesh.md).[`computeWorldMatrix`](AbstractMesh.md#computeworldmatrix)

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

[`AbstractMesh`](AbstractMesh.md).[`createAnimationRange`](AbstractMesh.md#createanimationrange)

***

### createInstance()

> **createInstance**(`name`): `InstancedMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L212)

Creates a new InstancedMesh object from the mesh model.

#### Parameters

##### name

`string`

defines the name of the new instance

#### Returns

`InstancedMesh`

a new InstancedMesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances

***

### createNormals()

> **createNormals**(`updatable`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2878)

Creates new normals data for the mesh

#### Parameters

##### updatable

`boolean`

defines if the normal vertex buffer must be flagged as updatable

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`createNormals`](AbstractMesh.md#createnormals)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`createOrUpdateSubmeshesOctree`](AbstractMesh.md#createorupdatesubmeshesoctree)

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

[`AbstractMesh`](AbstractMesh.md).[`deleteAnimationRange`](AbstractMesh.md#deleteanimationrange)

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

[`AbstractMesh`](AbstractMesh.md).[`detachFromBone`](AbstractMesh.md#detachfrombone)

***

### disableEdgesRendering()

> **disableEdgesRendering**(): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2948](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2948)

Disables the mesh edge rendering mode

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the currentAbstractMesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`disableEdgesRendering`](AbstractMesh.md#disableedgesrendering)

***

### disableFacetData()

> **disableFacetData**(): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2848](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2848)

Disables the feature FacetData and frees the related memory

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`disableFacetData`](AbstractMesh.md#disablefacetdata)

***

### dispose()

> **dispose**(`doNotRecurse?`, `disposeMaterialAndTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:611](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L611)

Disposes the InstancedMesh.
Returns nothing.

#### Parameters

##### doNotRecurse?

`boolean`

Set to true to not recurse into each children (recurse into each children by default)

##### disposeMaterialAndTextures?

`boolean` = `false`

Set to true to also dispose referenced materials and textures (false by default)

#### Returns

`void`

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`dispose`](AbstractMesh.md#dispose)

***

### enableEdgesRendering()

> **enableEdgesRendering**(`epsilon?`, `checkVerticesInsteadOfIndices?`, `options?`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the currentAbstractMesh

#### See

https://www.babylonjs-playground.com/#19O9TU#0

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`enableEdgesRendering`](AbstractMesh.md#enableedgesrendering)

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

[`AbstractMesh`](AbstractMesh.md).[`freezeWorldMatrix`](AbstractMesh.md#freezeworldmatrix)

***

### getAbsolutePivotPoint()

> **getAbsolutePivotPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L738)

Returns a new Vector3 set with the mesh pivot point World coordinates.

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 set with the mesh pivot point World coordinates.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getAbsolutePivotPoint`](AbstractMesh.md#getabsolutepivotpoint)

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

[`AbstractMesh`](AbstractMesh.md).[`getAbsolutePivotPointToRef`](AbstractMesh.md#getabsolutepivotpointtoref)

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L515)

Returns the mesh absolute position in the World.

#### Returns

[`Vector3`](Vector3.md)

a Vector3.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getAbsolutePosition`](AbstractMesh.md#getabsoluteposition)

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

[`AbstractMesh`](AbstractMesh.md).[`getAnimationByName`](AbstractMesh.md#getanimationbyname)

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

[`AbstractMesh`](AbstractMesh.md).[`getAnimationRange`](AbstractMesh.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L885)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getAnimationRanges`](AbstractMesh.md#getanimationranges)

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

[`AbstractMesh`](AbstractMesh.md).[`getBehaviorByName`](AbstractMesh.md#getbehaviorbyname)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getBoundingInfo`](AbstractMesh.md#getboundinginfo)

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

`T` *extends* [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md).[`getChildMeshes`](AbstractMesh.md#getchildmeshes)

#### Call Signature

> **getChildMeshes**(`directDescendantsOnly?`, `predicate?`): [`AbstractMesh`](AbstractMesh.md)[]

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

[`AbstractMesh`](AbstractMesh.md)[]

an array of AbstractMesh

##### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getChildMeshes`](AbstractMesh.md#getchildmeshes)

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

[`AbstractMesh`](AbstractMesh.md).[`getChildren`](AbstractMesh.md#getchildren)

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

[`AbstractMesh`](AbstractMesh.md).[`getChildren`](AbstractMesh.md#getchildren)

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

[`AbstractMesh`](AbstractMesh.md).[`getChildTransformNodes`](AbstractMesh.md#getchildtransformnodes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L84)

#### Returns

`string`

the string "InstancedMesh".

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`getClassName`](AbstractMesh.md#getclassname)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getClosestFacetAtCoordinates`](AbstractMesh.md#getclosestfacetatcoordinates)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getClosestFacetAtLocalCoordinates`](AbstractMesh.md#getclosestfacetatlocalcoordinates)

***

### getConnectedParticleSystems()

> **getConnectedParticleSystems**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2971](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2971)

This function returns all of the particle systems in the scene that use the mesh as an emitter.

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)[]

an array of particle systems in the scene that use the mesh as an emitter

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getConnectedParticleSystems`](AbstractMesh.md#getconnectedparticlesystems)

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

[`AbstractMesh`](AbstractMesh.md).[`getDescendants`](AbstractMesh.md#getdescendants)

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

[`AbstractMesh`](AbstractMesh.md).[`getDescendants`](AbstractMesh.md#getdescendants)

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

[`AbstractMesh`](AbstractMesh.md).[`getDirection`](AbstractMesh.md#getdirection)

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

[`AbstractMesh`](AbstractMesh.md).[`getDirectionToRef`](AbstractMesh.md#getdirectiontoref)

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

[`AbstractMesh`](AbstractMesh.md).[`getDistanceToCamera`](AbstractMesh.md#getdistancetocamera)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getEngine`](AbstractMesh.md#getengine)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetDataParameters`](AbstractMesh.md#getfacetdataparameters)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetLocalNormals`](AbstractMesh.md#getfacetlocalnormals)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetLocalPartitioning`](AbstractMesh.md#getfacetlocalpartitioning)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetLocalPositions`](AbstractMesh.md#getfacetlocalpositions)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetNormal`](AbstractMesh.md#getfacetnormal)

***

### getFacetNormalToRef()

> **getFacetNormalToRef**(`i`, `ref`): `InstancedMesh`

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

`InstancedMesh`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetNormalToRef`](AbstractMesh.md#getfacetnormaltoref)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetPosition`](AbstractMesh.md#getfacetposition)

***

### getFacetPositionToRef()

> **getFacetPositionToRef**(`i`, `ref`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetPositionToRef`](AbstractMesh.md#getfacetpositiontoref)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getFacetsAtLocalCoordinates`](AbstractMesh.md#getfacetsatlocalcoordinates)

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

[`AbstractMesh`](AbstractMesh.md).[`getHierarchyBoundingVectors`](AbstractMesh.md#gethierarchyboundingvectors)

***

### getIndices()

> **getIndices**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L360)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

an array of indices (IndicesArray).

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`getIndices`](AbstractMesh.md#getindices)

***

### getLOD()

> **getLOD**(`camera`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:479](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L479)

Returns the current associated LOD AbstractMesh.

#### Parameters

##### camera

[`Camera`](Camera.md)

defines the camera to use to pick the LOD level

#### Returns

[`AbstractMesh`](AbstractMesh.md)

a Mesh or `null` if no LOD is associated with the AbstractMesh

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`getLOD`](AbstractMesh.md#getlod)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getMaterialForRenderPass`](AbstractMesh.md#getmaterialforrenderpass)

***

### getMeshUniformBuffer()

> **getMeshUniformBuffer**(): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1159)

Gets the mesh uniform buffer.

#### Returns

[`UniformBuffer`](UniformBuffer.md)

the uniform buffer of the mesh.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getMeshUniformBuffer`](AbstractMesh.md#getmeshuniformbuffer)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getNormalsData`](AbstractMesh.md#getnormalsdata)

***

### getPhysicsBody()

> **getPhysicsBody**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L20)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getPhysicsBody`](AbstractMesh.md#getphysicsbody)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getPhysicsImpostor`](AbstractMesh.md#getphysicsimpostor)

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

[`AbstractMesh`](AbstractMesh.md).[`getPivotMatrix`](AbstractMesh.md#getpivotmatrix)

***

### getPivotPoint()

> **getPivotPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:716](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L716)

Returns a new Vector3 set with the mesh pivot point coordinates in the local space.

#### Returns

[`Vector3`](Vector3.md)

the pivot point

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getPivotPoint`](AbstractMesh.md#getpivotpoint)

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

[`AbstractMesh`](AbstractMesh.md).[`getPivotPointToRef`](AbstractMesh.md#getpivotpointtoref)

***

### getPoseMatrix()

> **getPoseMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L319)

Returns the mesh Pose matrix.

#### Returns

[`Matrix`](Matrix.md)

the pose matrix

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getPoseMatrix`](AbstractMesh.md#getposematrix)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getPositionData`](AbstractMesh.md#getpositiondata)

***

### getPositionExpressedInLocalSpace()

> **getPositionExpressedInLocalSpace**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L573)

Returns the mesh position in the local space from the current World matrix values.

#### Returns

[`Vector3`](Vector3.md)

a new Vector3.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getPositionExpressedInLocalSpace`](AbstractMesh.md#getpositionexpressedinlocalspace)

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

[`AbstractMesh`](AbstractMesh.md).[`getPositionInCameraSpace`](AbstractMesh.md#getpositionincameraspace)

***

### getRawBoundingInfo()

> **getRawBoundingInfo**(): [`BoundingInfo`](BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1558)

Returns the bounding info unnafected by instance data.

#### Returns

[`BoundingInfo`](BoundingInfo.md)

the bounding info of the mesh unaffected by instance data.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getRawBoundingInfo`](AbstractMesh.md#getrawboundinginfo)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`getScene`](AbstractMesh.md#getscene)

***

### getTotalIndices()

> **getTotalIndices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L188)

Returns a positive integer : the total number of indices in this mesh geometry.

#### Returns

`number`

the number of indices or zero if the mesh has no geometry.

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`getTotalIndices`](AbstractMesh.md#gettotalindices)

***

### getTotalVertices()

> **getTotalVertices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L180)

#### Returns

`number`

the total number of vertices (integer).

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`getTotalVertices`](AbstractMesh.md#gettotalvertices)

***

### getVerticesData()

> **getVerticesData**(`kind`, `copyWhenShared?`, `forceCopy?`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L232)

Returns an array of integers or a typed array (Int32Array, Uint32Array, Uint16Array) populated with the mesh indices.

#### Parameters

##### kind

`string`

kind of verticies to retrieve (eg. positions, normals, uvs, etc.)

##### copyWhenShared?

`boolean`

If true (default false) and and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.

##### forceCopy?

`boolean`

defines a boolean forcing the copy of the buffer no matter what the value of copyWhenShared is

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a float array or a Float32Array of the requested kind of data : positions, normals, uvs, etc.

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`getVerticesData`](AbstractMesh.md#getverticesdata)

***

### instantiateHierarchy()

> **instantiateHierarchy**(`newParent?`, `options?`, `onNewNodeCreated?`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:634](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L634)

Instantiate (when possible) or clone that node with its hierarchy

#### Parameters

##### newParent?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

defines the new parent to use for the instance (or clone)

##### options?

defines options to configure how copy is done

###### doNotInstantiate

`boolean` \| ((`node`) => `boolean`)

###### newSourcedMesh?

[`Mesh`](Mesh.md)

##### onNewNodeCreated?

(`source`, `clone`) => `void`

defines an option callback to call when a clone or an instance is created

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

an instance (or a clone) of the current node with its hierarchy

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`instantiateHierarchy`](AbstractMesh.md#instantiatehierarchy)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`intersects`](AbstractMesh.md#intersects)

***

### intersectsMesh()

> **intersectsMesh**(`mesh`, `precise?`, `includeDescendants?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2005)

True if the mesh intersects another mesh or a SolidParticle object

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md) \| [`SolidParticle`](SolidParticle.md)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`intersectsMesh`](AbstractMesh.md#intersectsmesh)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`intersectsPoint`](AbstractMesh.md#intersectspoint)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isCompletelyInFrustum`](AbstractMesh.md#iscompletelyinfrustum)

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

[`AbstractMesh`](AbstractMesh.md).[`isDescendantOf`](AbstractMesh.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isDisposed`](AbstractMesh.md#isdisposed)

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

[`AbstractMesh`](AbstractMesh.md).[`isEnabled`](AbstractMesh.md#isenabled)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isInFrustum`](AbstractMesh.md#isinfrustum)

***

### isReady()

> **isReady**(`completeCheck?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L221)

Is this node ready to be used/rendered

#### Parameters

##### completeCheck?

`boolean` = `false`

defines if a complete check (including materials and lights) has to be done (false by default)

#### Returns

`boolean`

is it ready

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`isReady`](AbstractMesh.md#isready)

***

### isUsingPivotMatrix()

> **isUsingPivotMatrix**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L207)

return true if a pivot has been set

#### Returns

`boolean`

true if a pivot matrix is used

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isUsingPivotMatrix`](AbstractMesh.md#isusingpivotmatrix)

***

### isUsingPostMultiplyPivotMatrix()

> **isUsingPostMultiplyPivotMatrix**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L214)

#### Returns

`boolean`

true if pivot matrix must be cancelled in the world matrix. When this parameter is set to true (default), the inverse of the pivot matrix is also applied at the end to cancel the transformation effect.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`isUsingPostMultiplyPivotMatrix`](AbstractMesh.md#isusingpostmultiplypivotmatrix)

***

### isVerticesDataPresent()

> **isVerticesDataPresent**(`kind`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L353)

Boolean : True if the mesh owns the requested kind of data.

#### Parameters

##### kind

`string`

defines which buffer to check (positions, indices, normals, etc). Possible `kind` values :
- VertexBuffer.PositionKind
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

#### Returns

`boolean`

true if data kind is present

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`isVerticesDataPresent`](AbstractMesh.md#isverticesdatapresent)

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

[`AbstractMesh`](AbstractMesh.md).[`isWorldMatrixCameraDependent`](AbstractMesh.md#isworldmatrixcameradependent)

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

[`AbstractMesh`](AbstractMesh.md).[`locallyTranslate`](AbstractMesh.md#locallytranslate)

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

[`AbstractMesh`](AbstractMesh.md).[`lookAt`](AbstractMesh.md#lookat)

***

### markAsDirty()

> **markAsDirty**(`property?`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1350)

Flag the AbstractMesh as dirty (Forcing it to update everything)

#### Parameters

##### property?

`string`

if set to "rotation" the objects rotationQuaternion will be set to null

#### Returns

[`AbstractMesh`](AbstractMesh.md)

this AbstractMesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`markAsDirty`](AbstractMesh.md#markasdirty)

***

### movePOV()

> **movePOV**(`amountRight`, `amountUp`, `amountForward`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`movePOV`](AbstractMesh.md#movepov)

***

### moveWithCollisions()

> **moveWithCollisions**(`displacement`, `slideOnCollide?`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`moveWithCollisions`](AbstractMesh.md#movewithcollisions)

***

### normalizeToUnitCube()

> **normalizeToUnitCube**(`includeDescendants?`, `ignoreRotation?`, `predicate?`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`normalizeToUnitCube`](AbstractMesh.md#normalizetounitcube)

***

### optimizeIndicesAsync()

> **optimizeIndicesAsync**(): `Promise`\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2898)

Optimize the indices order so that we keep the faces with similar indices together

#### Returns

`Promise`\<[`AbstractMesh`](AbstractMesh.md)\>

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`optimizeIndicesAsync`](AbstractMesh.md#optimizeindicesasync)

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

[`AbstractMesh`](AbstractMesh.md).[`registerAfterWorldMatrixUpdate`](AbstractMesh.md#registerafterworldmatrixupdate)

***

### releaseSubMeshes()

> **releaseSubMeshes**(`immediate?`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2340)

Disposes all the submeshes of the current mesh

#### Parameters

##### immediate?

`boolean` = `false`

should dispose the effects immediately or not

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`releaseSubMeshes`](AbstractMesh.md#releasesubmeshes)

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

[`AbstractMesh`](AbstractMesh.md).[`removeBehavior`](AbstractMesh.md#removebehavior)

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

[`AbstractMesh`](AbstractMesh.md).[`removeChild`](AbstractMesh.md#removechild)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`resetDrawCache`](AbstractMesh.md#resetdrawcache)

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

[`AbstractMesh`](AbstractMesh.md).[`resetLocalMatrix`](AbstractMesh.md#resetlocalmatrix)

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

[`AbstractMesh`](AbstractMesh.md).[`rotate`](AbstractMesh.md#rotate)

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

[`AbstractMesh`](AbstractMesh.md).[`rotateAround`](AbstractMesh.md#rotatearound)

***

### rotatePOV()

> **rotatePOV**(`flipBack`, `twirlClockwise`, `tiltRight`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`rotatePOV`](AbstractMesh.md#rotatepov)

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

[`AbstractMesh`](AbstractMesh.md).[`serialize`](AbstractMesh.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L916)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`serializeAnimationRanges`](AbstractMesh.md#serializeanimationranges)

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

[`AbstractMesh`](AbstractMesh.md).[`setAbsolutePosition`](AbstractMesh.md#setabsoluteposition)

***

### setBoundingInfo()

> **setBoundingInfo**(`boundingInfo`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1567](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1567)

Overwrite the current bounding info

#### Parameters

##### boundingInfo

[`BoundingInfo`](BoundingInfo.md)

defines the new bounding info

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`setBoundingInfo`](AbstractMesh.md#setboundinginfo)

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

[`AbstractMesh`](AbstractMesh.md).[`setDirection`](AbstractMesh.md#setdirection)

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

[`AbstractMesh`](AbstractMesh.md).[`setEnabled`](AbstractMesh.md#setenabled)

***

### setIndices()

> **setIndices**(`indices`, `totalVertices?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L329)

Sets the mesh indices.
Expects an array populated with integers or a typed array (Int32Array, Uint32Array, Uint16Array).
If the mesh has no geometry, a new Geometry object is created and set to the mesh.
This method creates a new index buffer each call.
Returns the Mesh.

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

the source data

##### totalVertices?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the total number of vertices referenced by indices (could be null)

#### Returns

[`Mesh`](Mesh.md)

source mesh

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`setIndices`](AbstractMesh.md#setindices)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`setMaterialForRenderPass`](AbstractMesh.md#setmaterialforrenderpass)

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

[`AbstractMesh`](AbstractMesh.md).[`setParent`](AbstractMesh.md#setparent)

***

### setPhysicsLinkWith()

> **setPhysicsLinkWith**(`otherMesh`, `pivot1`, `pivot2`, `options?`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### See

https://www.babylonjs-playground.com/#0BS5U0#0

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`setPhysicsLinkWith`](AbstractMesh.md#setphysicslinkwith)

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

[`AbstractMesh`](AbstractMesh.md).[`setPivotMatrix`](AbstractMesh.md#setpivotmatrix)

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

[`AbstractMesh`](AbstractMesh.md).[`setPivotPoint`](AbstractMesh.md#setpivotpoint)

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

[`AbstractMesh`](AbstractMesh.md).[`setPositionWithLocalVector`](AbstractMesh.md#setpositionwithlocalvector)

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

[`AbstractMesh`](AbstractMesh.md).[`setPreTransformMatrix`](AbstractMesh.md#setpretransformmatrix)

***

### setVerticesData()

> **setVerticesData**(`kind`, `data`, `updatable?`, `stride?`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L276)

Sets the vertex data of the mesh geometry for the requested `kind`.
If the mesh has no geometry, a new Geometry object is set to the mesh and then passed this vertex data.
The `data` are either a numeric array either a Float32Array.
The parameter `updatable` is passed as is to the underlying Geometry object constructor (if initially none) or updater.
The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).
Note that a new underlying VertexBuffer object is created each call.
If the `kind` is the `PositionKind`, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.

Possible `kind` values :
- VertexBuffer.PositionKind
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

Returns the Mesh.

#### Parameters

##### kind

`string`

defines vertex data kind

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the data source

##### updatable?

`boolean`

defines if the data must be flagged as updatable (false as default)

##### stride?

`number`

defines the vertex stride (optional)

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`setVerticesData`](AbstractMesh.md#setverticesdata)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`toString`](AbstractMesh.md#tostring)

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

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`transferToEffect`](AbstractMesh.md#transfertoeffect)

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

[`AbstractMesh`](AbstractMesh.md).[`translate`](AbstractMesh.md#translate)

***

### unfreezeWorldMatrix()

> **unfreezeWorldMatrix**(): `InstancedMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:498](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L498)

Allows back the World matrix computation.

#### Returns

`InstancedMesh`

the TransformNode.

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`unfreezeWorldMatrix`](AbstractMesh.md#unfreezeworldmatrix)

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

[`AbstractMesh`](AbstractMesh.md).[`unregisterAfterWorldMatrixUpdate`](AbstractMesh.md#unregisterafterworldmatrixupdate)

***

### updateFacetData()

> **updateFacetData**(): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2531)

Updates the mesh facetData arrays and the internal partitioning when the mesh is morphed or updated.
This method can be called within the render loop.
You don't need to call this method by yourself in the render loop when you update/morph a mesh with the methods CreateXXX() as they automatically manage this computation

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`updateFacetData`](AbstractMesh.md#updatefacetdata)

***

### updateIndices()

> **updateIndices**(`indices`, `offset?`, `gpuMemoryOnly?`): [`AbstractMesh`](AbstractMesh.md)

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

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`AbstractMesh`](AbstractMesh.md).[`updateIndices`](AbstractMesh.md#updateindices)

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

[`AbstractMesh`](AbstractMesh.md).[`updatePoseMatrix`](AbstractMesh.md#updateposematrix)

***

### updateVerticesData()

> **updateVerticesData**(`kind`, `data`, `updateExtends?`, `makeItUnique?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.pure.ts#L312)

Updates the existing vertex data of the mesh geometry for the requested `kind`.
If the mesh has no geometry, it is simply returned as it is.
The `data` are either a numeric array either a Float32Array.
No new underlying VertexBuffer object is created.
If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh BoundingInfo is renewed, so the bounding box and sphere, and the mesh World Matrix is recomputed.
If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.

Possible `kind` values :
- VertexBuffer.PositionKind
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

Returns the Mesh.

#### Parameters

##### kind

`string`

defines vertex data kind

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the data source

##### updateExtends?

`boolean`

defines if extends info of the mesh must be updated (can be null). This is mostly useful for "position" kind

##### makeItUnique?

`boolean`

defines it the updated vertex buffer must be flagged as unique (false by default)

#### Returns

[`Mesh`](Mesh.md)

the source mesh

#### Overrides

[`AbstractMesh`](AbstractMesh.md).[`updateVerticesData`](AbstractMesh.md#updateverticesdata)

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

[`AbstractMesh`](AbstractMesh.md).[`AddNodeConstructor`](AbstractMesh.md#addnodeconstructor)

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

[`AbstractMesh`](AbstractMesh.md).[`Construct`](AbstractMesh.md#construct)

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

[`AbstractMesh`](AbstractMesh.md).[`ParseAnimationRanges`](AbstractMesh.md#parseanimationranges)
