[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLineRibbonMesh

# Class: GreasedLineRibbonMesh

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L26)

GreasedLineRibbonMesh
Use the GreasedLineBuilder.CreateGreasedLine function to create an instance of this class.

## Extends

- [`GreasedLineBaseMesh`](GreasedLineBaseMesh.md)

## Constructors

### Constructor

> **new GreasedLineRibbonMesh**(`name`, `scene`, `_options`, `_pathOptions?`): `GreasedLineRibbonMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L67)

GreasedLineRibbonMesh

#### Parameters

##### name

`string`

name of the mesh

##### scene

[`Scene`](Scene.md)

the scene

##### \_options

[`GreasedLineMeshOptions`](../interfaces/GreasedLineMeshOptions.md)

mesh options

##### \_pathOptions?

`object`[]

used internaly when parsing a serialized GreasedLineRibbonMesh

#### Returns

`GreasedLineRibbonMesh`

#### Overrides

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`constructor`](GreasedLineBaseMesh.md#constructor)

## Properties

### actionManager

> **actionManager**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractActionManager`](AbstractActionManager.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:938](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L938)

Gets or sets the current action manager

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`actionManager`](GreasedLineBaseMesh.md#actionmanager)

***

### alphaIndex

> **alphaIndex**: `number` = `Number.MAX_VALUE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:669](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L669)

Gets or sets the alpha index used to sort transparent meshes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#alpha-index

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`alphaIndex`](GreasedLineBaseMesh.md#alphaindex)

***

### alwaysSelectAsActiveMesh

> **alwaysSelectAsActiveMesh**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:927](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L927)

True if the mesh must be rendered in any case (this will shortcut the frustum clipping phase)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`alwaysSelectAsActiveMesh`](GreasedLineBaseMesh.md#alwaysselectasactivemesh)

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`animations`](GreasedLineBaseMesh.md#animations)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`cullingStrategy`](GreasedLineBaseMesh.md#cullingstrategy)

***

### customMarkAsDirty

> **customMarkAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L264)

Allow user to specify custom mechanism for mark as dirty

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`customMarkAsDirty`](GreasedLineBaseMesh.md#custommarkasdirty)

***

### decalMap

> **decalMap**: [`Nullable`](../type-aliases/Nullable.md)\<[`MeshUVSpaceRenderer`](MeshUVSpaceRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.decalMap.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.decalMap.types.ts#L13)

Gets or sets the decal map for this mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`decalMap`](GreasedLineBaseMesh.md#decalmap)

***

### definedFacingForward

> **definedFacingForward**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L631)

Gets or sets the orientation for POV movement & rotation

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`definedFacingForward`](GreasedLineBaseMesh.md#definedfacingforward)

***

### delayLoadingFile

> **delayLoadingFile**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L507)

Gets the file containing delay loading data for this mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`delayLoadingFile`](GreasedLineBaseMesh.md#delayloadingfile)

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:494](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L494)

Gets the delay loading state of the mesh (when delay loading is turned on)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/incrementalLoading

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`delayLoadState`](GreasedLineBaseMesh.md#delayloadstate)

***

### doNotSyncBoundingInfo

> **doNotSyncBoundingInfo**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:932](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L932)

Gets or sets a boolean indicating that the bounding info does not need to be kept in sync (for performance reason)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`doNotSyncBoundingInfo`](GreasedLineBaseMesh.md#donotsyncboundinginfo)

***

### edgesColor

> **edgesColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1015](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1015)

Defines edge color used when edgesRenderer is enabled

#### See

https://www.babylonjs-playground.com/#10OJSG#13

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`edgesColor`](GreasedLineBaseMesh.md#edgescolor)

***

### edgesRenderer

> **edgesRenderer**: [`Nullable`](../type-aliases/Nullable.md)\<[`EdgesRenderer`](EdgesRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.types.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.types.ts#L18)

Gets the edgesRenderer associated with the mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`edgesRenderer`](GreasedLineBaseMesh.md#edgesrenderer)

***

### edgesShareWithInstances

> **edgesShareWithInstances**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L23)

true to use the edge renderer for all instances of this mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`edgesShareWithInstances`](GreasedLineBaseMesh.md#edgessharewithinstances)

***

### edgesWidth

> **edgesWidth**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1010](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1010)

Defines edge width used when edgesRenderer is enabled

#### See

https://www.babylonjs-playground.com/#10OJSG#13

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`edgesWidth`](GreasedLineBaseMesh.md#edgeswidth)

***

### ellipsoid

> **ellipsoid**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:944](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L944)

Gets or sets the ellipsoid used to impersonate this mesh when using collision engine (default is (0.5, 1, 0.5))

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ellipsoid`](GreasedLineBaseMesh.md#ellipsoid)

***

### ellipsoidOffset

> **ellipsoidOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:949](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L949)

Gets or sets the ellipsoid offset used to impersonate this mesh when using collision engine (default is (0, 0, 0))

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ellipsoidOffset`](GreasedLineBaseMesh.md#ellipsoidoffset)

***

### enablePointerMoveEvents

> **enablePointerMoveEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L701)

Gets or sets a boolean indicating that pointer move events must be supported on this mesh (false by default)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`enablePointerMoveEvents`](GreasedLineBaseMesh.md#enablepointermoveevents)

***

### forceRenderingWhenOccluded

> **forceRenderingWhenOccluded**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L101)

Flag to force rendering the mesh even if occluded

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`forceRenderingWhenOccluded`](GreasedLineBaseMesh.md#forcerenderingwhenoccluded)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`id`](GreasedLineBaseMesh.md#id)

***

### ignoreCameraMaxZ

> **ignoreCameraMaxZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L623)

Gets or sets a boolean indicating whether to render ignoring the active camera's max z setting. (false by default)
You should not mix meshes that have this property set to true with meshes that have it set to false if they all write
to the depth buffer, because the z-values are not comparable in the two cases and you will get rendering artifacts if you do.
You can set the property to true for meshes that do not write to the depth buffer, or set the same value (either false or true) otherwise.
Note this will reduce performance when set to true.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ignoreCameraMaxZ`](GreasedLineBaseMesh.md#ignorecameramaxz)

***

### ignoreNonUniformScaling

> **ignoreNonUniformScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L134)

Gets or sets a boolean indicating that non uniform scaling (when at least one component is different from others) should be ignored.
By default the system will update normals to compensate

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ignoreNonUniformScaling`](GreasedLineBaseMesh.md#ignorenonuniformscaling)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`inspectableCustomProperties`](GreasedLineBaseMesh.md#inspectablecustomproperties)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`instancedBuffers`](GreasedLineBaseMesh.md#instancedbuffers)

***

### instances

> **instances**: [`InstancedMesh`](InstancedMesh.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:502](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L502)

Gets the list of instances created from this mesh
it is not supposed to be modified manually.
Note also that the order of the InstancedMesh wihin the array is not significant and might change.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`instances`](GreasedLineBaseMesh.md#instances)

***

### isBlocker

> **isBlocker**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L696)

Gets or sets a boolean indicating if the mesh must be considered as a ray blocker for lens flares (false by default)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isBlocker`](GreasedLineBaseMesh.md#isblocker)

***

### isNearGrabbable

> **isNearGrabbable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L688)

Gets or sets a boolean indicating if the mesh can be grabbed. Default is false.
Setting this to true, while using the XR near interaction feature, will trigger a pointer event when the mesh is grabbed.
Grabbing means that the controller is using the squeeze or main trigger button to grab the mesh.
This is different from nearPickable which only triggers the event when the mesh is touched by the controller

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isNearGrabbable`](GreasedLineBaseMesh.md#isneargrabbable)

***

### isNearPickable

> **isNearPickable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L680)

Gets or sets a boolean indicating if the mesh can be near picked (touched by the XR controller or hands). Default is false

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isNearPickable`](GreasedLineBaseMesh.md#isnearpickable)

***

### isOccluded

> **isOccluded**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L89)

Gets or sets whether the mesh is occluded or not, it is used also to set the initial state of the mesh to be occluded or not

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isOccluded`](GreasedLineBaseMesh.md#isoccluded)

***

### isOcclusionQueryInProgress

> **isOcclusionQueryInProgress**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L95)

Flag to check the progress status of the query

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isOcclusionQueryInProgress`](GreasedLineBaseMesh.md#isocclusionqueryinprogress)

***

### isPickable

> **isPickable**: `boolean` = `AbstractMesh.DefaultIsPickable`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L675)

Gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions).
Default value is determined by [AbstractMesh.DefaultIsPickable](AbstractMesh.md#defaultispickable) (true unless changed).

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isPickable`](GreasedLineBaseMesh.md#ispickable)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`metadata`](GreasedLineBaseMesh.md#metadata)

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L68)

name of the mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`name`](GreasedLineBaseMesh.md#name)

***

### occlusionForRenderPassId

> **occlusionForRenderPassId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L107)

This number indicates the render pass id used to run the occlusion query. The default value is -1, which means run the occlusion query in all render passes.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`occlusionForRenderPassId`](GreasedLineBaseMesh.md#occlusionforrenderpassid)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`occlusionQueryAlgorithmType`](GreasedLineBaseMesh.md#occlusionqueryalgorithmtype)

***

### occlusionRetryCount

> **occlusionRetryCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L66)

This number indicates the number of allowed retries before stop the occlusion query, this is useful if the occlusion query is taking long time before to the query result is retrieved, the query result indicates if the object is visible within the scene or not and based on that Babylon.Js engine decides to show or hide the object.
The default value is -1 which means don't break the query and wait till the result

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`occlusionRetryCount`](GreasedLineBaseMesh.md#occlusionretrycount)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`occlusionType`](GreasedLineBaseMesh.md#occlusiontype)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onAccessibilityTagChangedObservable`](GreasedLineBaseMesh.md#onaccessibilitytagchangedobservable)

***

### onAfterWorldMatrixUpdateObservable

> **onAfterWorldMatrixUpdateObservable**: [`Observable`](Observable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L172)

An event triggered after the world matrix is updated

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onAfterWorldMatrixUpdateObservable`](GreasedLineBaseMesh.md#onafterworldmatrixupdateobservable)

***

### onCollideObservable

> **onCollideObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L598)

An event triggered when this mesh collides with another one

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onCollideObservable`](GreasedLineBaseMesh.md#oncollideobservable)

***

### onCollisionPositionChangeObservable

> **onCollisionPositionChangeObservable**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:611](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L611)

An event triggered when the collision's position changes

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onCollisionPositionChangeObservable`](GreasedLineBaseMesh.md#oncollisionpositionchangeobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onDisposeObservable`](GreasedLineBaseMesh.md#ondisposeobservable)

***

### onLODLevelSelection

> **onLODLevelSelection**: (`distance`, `mesh`, `selectedLevel`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L516)

User defined function used to change how LOD level selection is done

#### Parameters

##### distance

`number`

##### mesh

[`Mesh`](Mesh.md)

##### selectedLevel

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onLODLevelSelection`](GreasedLineBaseMesh.md#onlodlevelselection)

***

### onMaterialChangedObservable

> **onMaterialChangedObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:624](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L624)

An event triggered when material is changed

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onMaterialChangedObservable`](GreasedLineBaseMesh.md#onmaterialchangedobservable)

***

### onMeshReadyObservable

> **onMeshReadyObservable**: [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L384)

Will notify when the mesh is completely ready, including materials.
Observers added to this observable will be removed once triggered

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onMeshReadyObservable`](GreasedLineBaseMesh.md#onmeshreadyobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onReady`](GreasedLineBaseMesh.md#onready)

***

### onRebuildObservable

> **onRebuildObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1097](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1097)

An event triggered when the mesh is rebuilt.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onRebuildObservable`](GreasedLineBaseMesh.md#onrebuildobservable)

***

### outlineColor

> **outlineColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L812)

Defines color to use when rendering outline

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`outlineColor`](GreasedLineBaseMesh.md#outlinecolor)

***

### outlineWidth

> **outlineWidth**: `number` = `0.02`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L814)

Define width to use when rendering outline

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`outlineWidth`](GreasedLineBaseMesh.md#outlinewidth)

***

### overlayAlpha

> **overlayAlpha**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L819)

Defines alpha to use when rendering overlay

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`overlayAlpha`](GreasedLineBaseMesh.md#overlayalpha)

***

### overlayColor

> **overlayColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:817](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L817)

Defines color to use when rendering overlay

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`overlayColor`](GreasedLineBaseMesh.md#overlaycolor)

***

### physicsBody

> **physicsBody**: [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L15)

Gets or sets the physics body associated with this node.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`physicsBody`](GreasedLineBaseMesh.md#physicsbody)

***

### physicsImpostor

> **physicsImpostor**: [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L17)

Gets or sets impostor used for physic simulation

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`physicsImpostor`](GreasedLineBaseMesh.md#physicsimpostor)

***

### reIntegrateRotationIntoRotationQuaternion

> **reIntegrateRotationIntoRotationQuaternion**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L140)

Gets or sets a boolean indicating that even if rotationQuaternion is defined, you can keep updating rotation property and Babylon.js will just mix both

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`reIntegrateRotationIntoRotationQuaternion`](GreasedLineBaseMesh.md#reintegraterotationintorotationquaternion)

***

### renderOutline

> **renderOutline**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.types.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.types.ts#L24)

Gets or sets a boolean indicating if the outline must be rendered as well

#### See

https://www.babylonjs-playground.com/#10WJ5S#3

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`renderOutline`](GreasedLineBaseMesh.md#renderoutline)

***

### renderOverlay

> **renderOverlay**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.types.ts#L32)

Gets or sets a boolean indicating if the overlay must be rendered as well

#### See

https://www.babylonjs-playground.com/#10WJ5S#2

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`renderOverlay`](GreasedLineBaseMesh.md#renderoverlay)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`reservedDataStore`](GreasedLineBaseMesh.md#reserveddatastore)

***

### scalingDeterminant

> **scalingDeterminant**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L109)

Multiplication factor on scale x/y/z when computing the world matrix. Eg. for a 1x1x1 cube setting this to 2 will make it a 2x2x2 cube

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`scalingDeterminant`](GreasedLineBaseMesh.md#scalingdeterminant)

***

### showBoundingBox

> **showBoundingBox**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.types.ts#L32)

Gets or sets a boolean indicating if the bounding box must be rendered as well (false by default)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`showBoundingBox`](GreasedLineBaseMesh.md#showboundingbox)

***

### showSubMeshesBoundingBox

> **showSubMeshesBoundingBox**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L691)

Gets or sets a boolean indicating that bounding boxes of subMeshes must be rendered as well (false by default)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`showSubMeshesBoundingBox`](GreasedLineBaseMesh.md#showsubmeshesboundingbox)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`state`](GreasedLineBaseMesh.md#state)

***

### subMeshes

> **subMeshes**: [`SubMesh`](SubMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1030](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1030)

Gets or sets the list of subMeshes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`subMeshes`](GreasedLineBaseMesh.md#submeshes)

***

### thinInstanceAllowAutomaticStaticBufferRecreation

> **thinInstanceAllowAutomaticStaticBufferRecreation**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L19)

Indicates that a buffer created as static should be recreated if the buffer is updated (by calling thinInstanceSetMatrixAt or thinInstanceSetAttributeAt, for eg.)
If this flag is false (the default behavior), a buffer created as "static" won't show any update done to it, and will stay the same as it was created.
Note however that recreating a buffer each time there's a change will have some performance cost, that's why it is set to false by default.
You should set this flag to true only if your static buffers should change infrequently. If they change frequently, you should create your buffers as "dynamic" instead.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceAllowAutomaticStaticBufferRecreation`](GreasedLineBaseMesh.md#thininstanceallowautomaticstaticbufferrecreation)

***

### thinInstanceCount

> **thinInstanceCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L63)

Gets / sets the number of thin instances to display. Note that you can't set a number higher than what the underlying buffer can handle.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceCount`](GreasedLineBaseMesh.md#thininstancecount)

***

### thinInstanceEnablePicking

> **thinInstanceEnablePicking**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L11)

Gets or sets a boolean defining if we want picking to pick thin instances as well

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceEnablePicking`](GreasedLineBaseMesh.md#thininstanceenablepicking)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`uniqueId`](GreasedLineBaseMesh.md#uniqueid)

***

### useOctreeForCollisions

> **useOctreeForCollisions**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:906](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L906)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes collision (true by default)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`useOctreeForCollisions`](GreasedLineBaseMesh.md#useoctreeforcollisions)

***

### useOctreeForPicking

> **useOctreeForPicking**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L904)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes picking (true by default)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`useOctreeForPicking`](GreasedLineBaseMesh.md#useoctreeforpicking)

***

### useOctreeForRenderingSelection

> **useOctreeForRenderingSelection**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L902)

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes selection (true by default)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`useOctreeForRenderingSelection`](GreasedLineBaseMesh.md#useoctreeforrenderingselection)

***

### BACKSIDE

> `readonly` `static` **BACKSIDE**: `1` = `VertexData.BACKSIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L276)

Mesh side orientation : usually the internal or back surface

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BACKSIDE`](GreasedLineBaseMesh.md#backside)

***

### BillboardUseParentOrientation

> `static` **BillboardUseParentOrientation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L50)

Child transform with Billboard flags should or should not apply parent rotation (default if off)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BillboardUseParentOrientation`](GreasedLineBaseMesh.md#billboarduseparentorientation)

***

### BOTTOM

> `readonly` `static` **BOTTOM**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L348)

Mesh tile positioning : part tiles on bottom

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BOTTOM`](GreasedLineBaseMesh.md#bottom)

***

### CAP\_ALL

> `readonly` `static` **CAP\_ALL**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L300)

Mesh cap setting : two caps, one at the beginning  and one at the end of the mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CAP_ALL`](GreasedLineBaseMesh.md#cap_all)

***

### CAP\_END

> `readonly` `static` **CAP\_END**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L296)

Mesh cap setting : one cap at the end of the mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CAP_END`](GreasedLineBaseMesh.md#cap_end)

***

### CAP\_START

> `readonly` `static` **CAP\_START**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L292)

Mesh cap setting : one cap at the beginning of the mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CAP_START`](GreasedLineBaseMesh.md#cap_start)

***

### CENTER

> `readonly` `static` **CENTER**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L332)

Mesh tile positioning : part tiles same on left/right or top/bottom

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CENTER`](GreasedLineBaseMesh.md#center)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`](GreasedLineBaseMesh.md#cullingstrategy_boundingsphere_only)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CULLINGSTRATEGY_OPTIMISTIC_INCLUSION`](GreasedLineBaseMesh.md#cullingstrategy_optimistic_inclusion)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY`](GreasedLineBaseMesh.md#cullingstrategy_optimistic_inclusion_then_bsphere_only)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CULLINGSTRATEGY_STANDARD`](GreasedLineBaseMesh.md#cullingstrategy_standard)

***

### DEFAULT\_WIDTH

> `static` **DEFAULT\_WIDTH**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L30)

Default line width

***

### DefaultIsPickable

> `static` **DefaultIsPickable**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:437](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L437)

Gets or sets the default value for isPickable for newly created meshes.
When set to false, all meshes created after the change will not be pickable by default.
Individual meshes can still override this by setting their own isPickable property.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`DefaultIsPickable`](GreasedLineBaseMesh.md#defaultispickable)

***

### DEFAULTSIDE

> `readonly` `static` **DEFAULTSIDE**: `0` = `VertexData.DEFAULTSIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L284)

Mesh side orientation : by default, `FRONTSIDE`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`DEFAULTSIDE`](GreasedLineBaseMesh.md#defaultside)

***

### DIRECTION\_XY

> `static` **DIRECTION\_XY**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Vector3`](Vector3.md)\> = `Vector3.LeftHandedForwardReadOnly`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L39)

Direction which the line segment will be thickened if drawn on the XY plane

***

### DIRECTION\_XZ

> `static` **DIRECTION\_XZ**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Vector3`](Vector3.md)\> = `Vector3.UpReadOnly`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L43)

Direction which the line segment will be thickened if drawn on the XZ plane

***

### DIRECTION\_YZ

> `static` **DIRECTION\_YZ**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Vector3`](Vector3.md)\> = `Vector3.LeftReadOnly`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L47)

Direction which the line segment will be thickened if drawn on the YZ plane

***

### DOUBLESIDE

> `readonly` `static` **DOUBLESIDE**: `2` = `VertexData.DOUBLESIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L280)

Mesh side orientation : both internal and external or front and back surfaces

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`DOUBLESIDE`](GreasedLineBaseMesh.md#doubleside)

***

### FLIP\_N\_ROTATE\_ROW

> `readonly` `static` **FLIP\_N\_ROTATE\_ROW**: `6` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L328)

Mesh pattern setting : rotate pattern and rotate

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`FLIP_N_ROTATE_ROW`](GreasedLineBaseMesh.md#flip_n_rotate_row)

***

### FLIP\_N\_ROTATE\_TILE

> `readonly` `static` **FLIP\_N\_ROTATE\_TILE**: `5` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L324)

Mesh pattern setting : flip and rotate alternate tiles on each row or column

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`FLIP_N_ROTATE_TILE`](GreasedLineBaseMesh.md#flip_n_rotate_tile)

***

### FLIP\_ROW

> `readonly` `static` **FLIP\_ROW**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L316)

Mesh pattern setting : flip (reflect in y axis) all tiles on alternate rows

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`FLIP_ROW`](GreasedLineBaseMesh.md#flip_row)

***

### FLIP\_TILE

> `readonly` `static` **FLIP\_TILE**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L308)

Mesh pattern setting : flip (reflect in y axis) alternate tiles on each row or column

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`FLIP_TILE`](GreasedLineBaseMesh.md#flip_tile)

***

### FRONTSIDE

> `readonly` `static` **FRONTSIDE**: `0` = `VertexData.FRONTSIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L271)

Mesh side orientation : usually the external or front surface

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`FRONTSIDE`](GreasedLineBaseMesh.md#frontside)

***

### INSTANCEDMESH\_SORT\_TRANSPARENT

> `static` **INSTANCEDMESH\_SORT\_TRANSPARENT**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L353)

Indicates that the instanced meshes should be sorted from back to front before rendering if their material is transparent

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`INSTANCEDMESH_SORT_TRANSPARENT`](GreasedLineBaseMesh.md#instancedmesh_sort_transparent)

***

### LEFT

> `readonly` `static` **LEFT**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L336)

Mesh tile positioning : part tiles on left

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`LEFT`](GreasedLineBaseMesh.md#left)

***

### NO\_CAP

> `readonly` `static` **NO\_CAP**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L288)

Mesh cap setting : no cap

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`NO_CAP`](GreasedLineBaseMesh.md#no_cap)

***

### NO\_FLIP

> `readonly` `static` **NO\_FLIP**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L304)

Mesh pattern setting : no flip or rotate

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`NO_FLIP`](GreasedLineBaseMesh.md#no_flip)

***

### OCCLUSION\_ALGORITHM\_TYPE\_ACCURATE

> `static` **OCCLUSION\_ALGORITHM\_TYPE\_ACCURATE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L361)

Use an accurate occlusion algorithm

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`OCCLUSION_ALGORITHM_TYPE_ACCURATE`](GreasedLineBaseMesh.md#occlusion_algorithm_type_accurate)

***

### OCCLUSION\_ALGORITHM\_TYPE\_CONSERVATIVE

> `static` **OCCLUSION\_ALGORITHM\_TYPE\_CONSERVATIVE**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:363](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L363)

Use a conservative occlusion algorithm

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE`](GreasedLineBaseMesh.md#occlusion_algorithm_type_conservative)

***

### OCCLUSION\_TYPE\_NONE

> `static` **OCCLUSION\_TYPE\_NONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L355)

No occlusion

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`OCCLUSION_TYPE_NONE`](GreasedLineBaseMesh.md#occlusion_type_none)

***

### OCCLUSION\_TYPE\_OPTIMISTIC

> `static` **OCCLUSION\_TYPE\_OPTIMISTIC**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L357)

Occlusion set to optimistic

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`OCCLUSION_TYPE_OPTIMISTIC`](GreasedLineBaseMesh.md#occlusion_type_optimistic)

***

### OCCLUSION\_TYPE\_STRICT

> `static` **OCCLUSION\_TYPE\_STRICT**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L359)

Occlusion set to strict

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`OCCLUSION_TYPE_STRICT`](GreasedLineBaseMesh.md#occlusion_type_strict)

***

### RIGHT

> `readonly` `static` **RIGHT**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L340)

Mesh tile positioning : part tiles on right

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`RIGHT`](GreasedLineBaseMesh.md#right)

***

### ROTATE\_ROW

> `readonly` `static` **ROTATE\_ROW**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L320)

Mesh pattern setting : rotate (180degs) all tiles on alternate rows

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ROTATE_ROW`](GreasedLineBaseMesh.md#rotate_row)

***

### ROTATE\_TILE

> `readonly` `static` **ROTATE\_TILE**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L312)

Mesh pattern setting : rotate (180degs) alternate tiles on each row or column

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ROTATE_TILE`](GreasedLineBaseMesh.md#rotate_tile)

***

### TOP

> `readonly` `static` **TOP**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L344)

Mesh tile positioning : part tiles on top

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`TOP`](GreasedLineBaseMesh.md#top)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`absolutePosition`](GreasedLineBaseMesh.md#absoluteposition)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`absoluteRotationQuaternion`](GreasedLineBaseMesh.md#absoluterotationquaternion)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`absoluteScaling`](GreasedLineBaseMesh.md#absolutescaling)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`accessibilityTag`](GreasedLineBaseMesh.md#accessibilitytag)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`animationPropertiesOverride`](GreasedLineBaseMesh.md#animationpropertiesoverride)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`applyFog`](GreasedLineBaseMesh.md#applyfog)

***

### areNormalsFrozen

#### Get Signature

> **get** **areNormalsFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1573)

Gets a boolean indicating if the normals aren't to be recomputed on next mesh `positions` array update. This property is pertinent only for updatable parametric shapes.

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`areNormalsFrozen`](GreasedLineBaseMesh.md#arenormalsfrozen)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`bakedVertexAnimationManager`](GreasedLineBaseMesh.md#bakedvertexanimationmanager)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`behaviors`](GreasedLineBaseMesh.md#behaviors)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`billboardMode`](GreasedLineBaseMesh.md#billboardmode)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`checkCollisions`](GreasedLineBaseMesh.md#checkcollisions)

***

### cloneMeshMap

#### Get Signature

> **get** **cloneMeshMap**(): [`Nullable`](../type-aliases/Nullable.md)\<\{\[`id`: `string`\]: [`Mesh`](Mesh.md) \| `undefined`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:637](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L637)

Gets the list of clones of this mesh
The scene must have been constructed with useClonedMeshMap=true for this to work!
Note that useClonedMeshMap=true is the default setting

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{\[`id`: `string`\]: [`Mesh`](Mesh.md) \| `undefined`; \}\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`cloneMeshMap`](GreasedLineBaseMesh.md#clonemeshmap)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`collider`](GreasedLineBaseMesh.md#collider)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`collisionGroup`](GreasedLineBaseMesh.md#collisiongroup)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`collisionMask`](GreasedLineBaseMesh.md#collisionmask)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`collisionResponse`](GreasedLineBaseMesh.md#collisionresponse)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`collisionRetryCount`](GreasedLineBaseMesh.md#collisionretrycount)

***

### colorPointers

#### Get Signature

> **get** **colorPointers**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L323)

Gets the color pointer. Each vertex need a color pointer. These color pointers points to the colors in the color table

##### See

colors

##### Returns

`number`[]

#### Set Signature

> **set** **colorPointers**(`colorPointers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L331)

Sets the color pointer

##### Parameters

###### colorPointers

`number`[]

array of color pointer in the colors array. One pointer for every vertex is needed.

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`colorPointers`](GreasedLineBaseMesh.md#colorpointers)

***

### computeBonesUsingShaders

#### Get Signature

> **get** **computeBonesUsingShaders**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L387)

##### Returns

`boolean`

#### Set Signature

> **set** **computeBonesUsingShaders**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:391](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L391)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`computeBonesUsingShaders`](GreasedLineBaseMesh.md#computebonesusingshaders)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`doNotSerialize`](GreasedLineBaseMesh.md#donotserialize)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`enableDistantPicking`](GreasedLineBaseMesh.md#enabledistantpicking)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`facetDepthSortFrom`](GreasedLineBaseMesh.md#facetdepthsortfrom)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`facetNb`](GreasedLineBaseMesh.md#facetnb)

***

### forcedInstanceCount

#### Get Signature

> **get** **forcedInstanceCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:534](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L534)

Gets or sets the forced number of instances to display.
If 0 (default value), the number of instances is not forced and depends on the draw type
(regular / instance / thin instances mesh)

##### Returns

`number`

#### Set Signature

> **set** **forcedInstanceCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L538)

##### Parameters

###### count

`number`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`forcedInstanceCount`](GreasedLineBaseMesh.md#forcedinstancecount)

***

### forceWorldMatrixInstancedBufferUpdate

#### Get Signature

> **get** **forceWorldMatrixInstancedBufferUpdate**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:690](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L690)

Gets or sets a boolean indicating that the update of the instance buffer of the world matrices must be performed in all cases (and notably even in frozen mode)

##### Returns

`boolean`

#### Set Signature

> **set** **forceWorldMatrixInstancedBufferUpdate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:694](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L694)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`forceWorldMatrixInstancedBufferUpdate`](GreasedLineBaseMesh.md#forceworldmatrixinstancedbufferupdate)

***

### forward

#### Get Signature

> **get** **forward**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L280)

The forward direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`forward`](GreasedLineBaseMesh.md#forward)

***

### geometry

#### Get Signature

> **get** **geometry**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1271)

Gets the mesh internal Geometry object

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`geometry`](GreasedLineBaseMesh.md#geometry)

***

### greasedLineMaterial

#### Get Signature

> **get** **greasedLineMaterial**(): [`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L341)

Gets the pluginMaterial associated with line

##### Returns

[`IGreasedLineMaterial`](../interfaces/IGreasedLineMaterial.md) \| `undefined`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`greasedLineMaterial`](GreasedLineBaseMesh.md#greasedlinematerial)

***

### hasBoundingInfo

#### Get Signature

> **get** **hasBoundingInfo**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1575](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1575)

Returns true if there is already a bounding info

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`hasBoundingInfo`](GreasedLineBaseMesh.md#hasboundinginfo)

***

### hasInstances

#### Get Signature

> **get** **hasInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:479](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L479)

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`hasInstances`](GreasedLineBaseMesh.md#hasinstances)

***

### hasLODLevels

#### Get Signature

> **get** **hasLODLevels**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1109)

Gets a boolean indicating if this mesh has LOD

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`hasLODLevels`](GreasedLineBaseMesh.md#haslodlevels)

***

### hasThinInstances

#### Get Signature

> **get** **hasThinInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:484](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L484)

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`hasThinInstances`](GreasedLineBaseMesh.md#hasthininstances)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`hasVertexAlpha`](GreasedLineBaseMesh.md#hasvertexalpha)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`infiniteDistance`](GreasedLineBaseMesh.md#infinitedistance)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`inheritVisibility`](GreasedLineBaseMesh.md#inheritvisibility)

***

### isAnInstance

#### Get Signature

> **get** **isAnInstance**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1669](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1669)

Gets a boolean indicating if this mesh is an instance or a regular mesh

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isAnInstance`](GreasedLineBaseMesh.md#isaninstance)

***

### isBlocked

#### Get Signature

> **get** **isBlocked**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1474](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1474)

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isBlocked`](GreasedLineBaseMesh.md#isblocked)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isFacetDataEnabled`](GreasedLineBaseMesh.md#isfacetdataenabled)

***

### isFlatLine

#### Get Signature

> **get** **isFlatLine**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L121)

Return true if the line was created from two edge paths or one points path.
In this case the line is always flat.

##### Returns

`boolean`

***

### isUnIndexed

#### Get Signature

> **get** **isUnIndexed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L644)

Gets or sets a boolean indicating that this mesh does not use index buffer

##### Returns

`boolean`

#### Set Signature

> **set** **isUnIndexed**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:648](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L648)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isUnIndexed`](GreasedLineBaseMesh.md#isunindexed)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isVisible`](GreasedLineBaseMesh.md#isvisible)

***

### isWorldMatrixFrozen

#### Get Signature

> **get** **isWorldMatrixFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L507)

True if the World matrix has been frozen.

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isWorldMatrixFrozen`](GreasedLineBaseMesh.md#isworldmatrixfrozen)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`layerMask`](GreasedLineBaseMesh.md#layermask)

***

### lightSources

#### Get Signature

> **get** **lightSources**(): [`Light`](Light.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1042](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1042)

Gets the list of lights affecting that mesh

##### Returns

[`Light`](Light.md)[]

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`lightSources`](GreasedLineBaseMesh.md#lightsources)

***

### manualUpdateOfPreviousWorldMatrixInstancedBuffer

#### Get Signature

> **get** **manualUpdateOfPreviousWorldMatrixInstancedBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:681](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L681)

Gets or sets a boolean indicating that the update of the instance buffer of the world matrices is manual

##### Returns

`boolean`

#### Set Signature

> **set** **manualUpdateOfPreviousWorldMatrixInstancedBuffer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L685)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`manualUpdateOfPreviousWorldMatrixInstancedBuffer`](GreasedLineBaseMesh.md#manualupdateofpreviousworldmatrixinstancedbuffer)

***

### manualUpdateOfWorldMatrixInstancedBuffer

#### Get Signature

> **get** **manualUpdateOfWorldMatrixInstancedBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L672)

Gets or sets a boolean indicating that the update of the instance buffer of the world matrices is manual

##### Returns

`boolean`

#### Set Signature

> **set** **manualUpdateOfWorldMatrixInstancedBuffer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:676](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L676)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`manualUpdateOfWorldMatrixInstancedBuffer`](GreasedLineBaseMesh.md#manualupdateofworldmatrixinstancedbuffer)

***

### material

#### Get Signature

> **get** **material**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:604](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L604)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

#### Set Signature

> **set** **material**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L609)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`material`](GreasedLineBaseMesh.md#material)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`morphTargetManager`](GreasedLineBaseMesh.md#morphtargetmanager)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`mustDepthSortFacets`](GreasedLineBaseMesh.md#mustdepthsortfacets)

***

### nonUniformScaling

#### Get Signature

> **get** **nonUniformScaling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:869](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L869)

True if the scaling property of this object is non uniform eg. (1,2,1)

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`nonUniformScaling`](GreasedLineBaseMesh.md#nonuniformscaling)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`numBoneInfluencers`](GreasedLineBaseMesh.md#numboneinfluencers)

***

### offsets

#### Get Signature

> **get** **offsets**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L282)

Returns the points offsets
Return the points offsets

##### Returns

`number`[]

#### Set Signature

> **set** **offsets**(`offsets`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L290)

Sets point offests

##### Parameters

###### offsets

`number`[]

offset table [x,y,z, x,y,z, ....]

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`offsets`](GreasedLineBaseMesh.md#offsets)

***

### onAfterRenderObservable

#### Get Signature

> **get** **onAfterRenderObservable**(): [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L436)

An event triggered after rendering the mesh

##### Returns

[`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onAfterRenderObservable`](GreasedLineBaseMesh.md#onafterrenderobservable)

***

### onBeforeBindObservable

#### Get Signature

> **get** **onBeforeBindObservable**(): [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L425)

An event triggered before binding the mesh

##### Returns

[`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onBeforeBindObservable`](GreasedLineBaseMesh.md#onbeforebindobservable)

***

### onBeforeDraw

#### Set Signature

> **set** **onBeforeDraw**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L471)

Sets a callback to call before drawing the mesh. It is recommended to use onBeforeDrawObservable instead

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onBeforeDraw`](GreasedLineBaseMesh.md#onbeforedraw)

***

### onBeforeDrawObservable

#### Get Signature

> **get** **onBeforeDrawObservable**(): [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L458)

An event triggered before drawing the mesh

##### Returns

[`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onBeforeDrawObservable`](GreasedLineBaseMesh.md#onbeforedrawobservable)

***

### onBeforeRenderObservable

#### Get Signature

> **get** **onBeforeRenderObservable**(): [`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L414)

An event triggered before rendering the mesh

##### Returns

[`Observable`](Observable.md)\<[`Mesh`](Mesh.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onBeforeRenderObservable`](GreasedLineBaseMesh.md#onbeforerenderobservable)

***

### onBetweenPassObservable

#### Get Signature

> **get** **onBetweenPassObservable**(): [`Observable`](Observable.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:447](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L447)

An event triggeredbetween rendering pass when using separateCullingPass = true

##### Returns

[`Observable`](Observable.md)\<[`SubMesh`](SubMesh.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onBetweenPassObservable`](GreasedLineBaseMesh.md#onbetweenpassobservable)

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onClonedObservable`](GreasedLineBaseMesh.md#onclonedobservable)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onCollide`](GreasedLineBaseMesh.md#oncollide)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onCollisionPositionChange`](GreasedLineBaseMesh.md#oncollisionpositionchange)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onDispose`](GreasedLineBaseMesh.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`onEnabledStateChangedObservable`](GreasedLineBaseMesh.md#onenabledstatechangedobservable)

***

### overrideMaterialSideOrientation

#### Get Signature

> **get** **overrideMaterialSideOrientation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L581)

##### Deprecated

Please use sideOrientation instead.

##### See

https://doc.babylonjs.com/breaking-changes#7110

##### Returns

`number`

#### Set Signature

> **set** **overrideMaterialSideOrientation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:585](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L585)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`overrideMaterialSideOrientation`](GreasedLineBaseMesh.md#overridematerialsideorientation)

***

### overridenInstanceCount

#### Set Signature

> **set** **overridenInstanceCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1598)

Sets a value overriding the instance count. Only applicable when custom instanced InterleavedVertexBuffer are used rather than InstancedMeshs

##### Parameters

###### count

`number`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`overridenInstanceCount`](GreasedLineBaseMesh.md#overrideninstancecount)

***

### overrideRenderingFillMode

#### Get Signature

> **get** **overrideRenderingFillMode**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:595](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L595)

Use this property to override the Material's fillMode value

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **overrideRenderingFillMode**(`fillMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:599](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L599)

##### Parameters

###### fillMode

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`overrideRenderingFillMode`](GreasedLineBaseMesh.md#overriderenderingfillmode)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`parent`](GreasedLineBaseMesh.md#parent)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`partitioningBBoxRatio`](GreasedLineBaseMesh.md#partitioningbboxratio)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`partitioningSubdivisions`](GreasedLineBaseMesh.md#partitioningsubdivisions)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`pointerOverDisableMeshTesting`](GreasedLineBaseMesh.md#pointeroverdisablemeshtesting)

***

### points

#### Get Signature

> **get** **points**(): `number`[][]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L355)

Return copy the points.

##### Returns

`number`[][]

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`points`](GreasedLineBaseMesh.md#points)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`position`](GreasedLineBaseMesh.md#position)

***

### previousWorldMatrixInstancedBuffer

#### Get Signature

> **get** **previousWorldMatrixInstancedBuffer**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:664](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L664)

Gets the array buffer used to store the instanced buffer used for instances' previous world matrices

##### Returns

`Float32Array`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`previousWorldMatrixInstancedBuffer`](GreasedLineBaseMesh.md#previousworldmatrixinstancedbuffer)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`rawBoundingInfo`](GreasedLineBaseMesh.md#rawboundinginfo)

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

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`receiveShadows`](GreasedLineBaseMesh.md#receiveshadows)

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

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`renderingGroupId`](GreasedLineBaseMesh.md#renderinggroupid)

***

### right

#### Get Signature

> **get** **right**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L296)

The right direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`right`](GreasedLineBaseMesh.md#right-1)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`rotation`](GreasedLineBaseMesh.md#rotation)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`rotationQuaternion`](GreasedLineBaseMesh.md#rotationquaternion)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`scaling`](GreasedLineBaseMesh.md#scaling)

***

### sideOrientation

#### Get Signature

> **get** **sideOrientation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L560)

Use this property to change the original side orientation defined at construction time
Material.sideOrientation will override this value if set
User will still be able to change the material sideOrientation afterwards if they really need it

##### Returns

`number`

#### Set Signature

> **set** **sideOrientation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:564](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L564)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`sideOrientation`](GreasedLineBaseMesh.md#sideorientation)

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

#### Inherited from

[`GaussianSplattingStream`](../../../loaders/src/classes/GaussianSplattingStream.md).[`skeleton`](../../../loaders/src/classes/GaussianSplattingStream.md#skeleton)

***

### slopes

#### Get Signature

> **get** **slopes**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L128)

Returns the slopes of the line at each point relative to the center of the line

##### Returns

`number`[]

#### Set Signature

> **set** **slopes**(`slopes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L135)

Set the slopes of the line at each point relative to the center of the line

##### Parameters

###### slopes

`number`[]

##### Returns

`void`

***

### source

#### Get Signature

> **get** **source**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:628](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L628)

Gets the source mesh (the one used to clone this one from)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`source`](GreasedLineBaseMesh.md#source)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`surroundingMeshes`](GreasedLineBaseMesh.md#surroundingmeshes)

***

### up

#### Get Signature

> **get** **up**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L288)

The up direction of that transform in world space.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`up`](GreasedLineBaseMesh.md#up)

***

### useBones

#### Get Signature

> **get** **useBones**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1603](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1603)

Gets a boolean indicating if this mesh has skinning data and an attached skeleton

##### Returns

`boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`useBones`](GreasedLineBaseMesh.md#usebones)

***

### useLODScreenCoverage

#### Get Signature

> **get** **useLODScreenCoverage**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L371)

Determines if the LOD levels are intended to be calculated using screen coverage (surface area ratio) instead of distance.

##### Returns

`boolean`

#### Set Signature

> **set** **useLODScreenCoverage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L375)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`useLODScreenCoverage`](GreasedLineBaseMesh.md#uselodscreencoverage)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`useVertexColors`](GreasedLineBaseMesh.md#usevertexcolors)

***

### uvs

#### Get Signature

> **get** **uvs**(): [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L265)

Returns the UVs

##### Returns

[`FloatArray`](../type-aliases/FloatArray.md)

#### Set Signature

> **set** **uvs**(`uvs`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L273)

Sets the UVs

##### Parameters

###### uvs

[`FloatArray`](../type-aliases/FloatArray.md)

the UVs

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`uvs`](GreasedLineBaseMesh.md#uvs)

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

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`visibility`](GreasedLineBaseMesh.md#visibility)

***

### widths

#### Get Signature

> **get** **widths**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L305)

Gets widths at each line point like [widthLower, widthUpper, widthLower, widthUpper, ...]

##### Returns

`number`[]

#### Set Signature

> **set** **widths**(`widths`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L313)

Sets widths at each line point

##### Parameters

###### widths

`number`[]

width table [widthLower, widthUpper, widthLower, widthUpper ...]

##### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`widths`](GreasedLineBaseMesh.md#widths)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`worldMatrixFromCache`](GreasedLineBaseMesh.md#worldmatrixfromcache)

***

### worldMatrixInstancedBuffer

#### Get Signature

> **get** **worldMatrixInstancedBuffer**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L656)

Gets the array buffer used to store the instanced buffer used for instances' world matrices

##### Returns

`Float32Array`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`worldMatrixInstancedBuffer`](GreasedLineBaseMesh.md#worldmatrixinstancedbuffer)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BILLBOARDMODE_ALL`](GreasedLineBaseMesh.md#billboardmode_all)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BILLBOARDMODE_NONE`](GreasedLineBaseMesh.md#billboardmode_none)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BILLBOARDMODE_USE_POSITION`](GreasedLineBaseMesh.md#billboardmode_use_position)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BILLBOARDMODE_X`](GreasedLineBaseMesh.md#billboardmode_x)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BILLBOARDMODE_Y`](GreasedLineBaseMesh.md#billboardmode_y)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`BILLBOARDMODE_Z`](GreasedLineBaseMesh.md#billboardmode_z)

## Methods

### \_invalidateInstanceVertexArrayObject()

> **\_invalidateInstanceVertexArrayObject**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L18)

Invalidate VertexArrayObjects belonging to the mesh (but not to the Geometry of the mesh).

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`_invalidateInstanceVertexArrayObject`](GreasedLineBaseMesh.md#_invalidateinstancevertexarrayobject)

***

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`addBehavior`](GreasedLineBaseMesh.md#addbehavior)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`addChild`](GreasedLineBaseMesh.md#addchild)

***

### addLODLevel()

> **addLODLevel**(`distanceOrScreenCoverage`, `mesh`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1145)

Add a mesh as LOD level triggered at the given distance.

#### Parameters

##### distanceOrScreenCoverage

`number`

Either distance from the center of the object to show this level or the screen coverage if `useScreenCoverage` is set to `true`.
If screen coverage, value is a fraction of the screen's total surface, between 0 and 1.
Example Playground for distance https://playground.babylonjs.com/#QE7KM#197
Example Playground for screen coverage https://playground.babylonjs.com/#QE7KM#196

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

The mesh to be added as LOD level (can be null)

#### Returns

[`Mesh`](Mesh.md)

This mesh (for chaining)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`addLODLevel`](GreasedLineBaseMesh.md#addlodlevel)

***

### addPoints()

> **addPoints**(`points`, `options`, `hasPathOptions?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L97)

Adds new points to the line. It doesn't rerenders the line if in lazy mode.

#### Parameters

##### points

`number`[][]

points table

##### options

[`GreasedLineMeshOptions`](../interfaces/GreasedLineMeshOptions.md)

mesh options

##### hasPathOptions?

`boolean` = `false`

defaults to false

#### Returns

`void`

#### Overrides

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`addPoints`](GreasedLineBaseMesh.md#addpoints)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`addRotation`](GreasedLineBaseMesh.md#addrotation)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`alignWithNormal`](GreasedLineBaseMesh.md#alignwithnormal)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`applyAngularImpulse`](GreasedLineBaseMesh.md#applyangularimpulse)

***

### applyDisplacementMap()

> **applyDisplacementMap**(`url`, `minHeight`, `maxHeight`, `onSuccess?`, `uvOffset?`, `uvScale?`, `forceUpdate?`, `onError?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3426](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3426)

Modifies the mesh geometry according to a displacement map.
A displacement map is a colored image. Each pixel color value (actually a gradient computed from red, green, blue values) will give the displacement to apply to each mesh vertex.
The mesh must be set as updatable. Its internal geometry is directly modified, no new buffer are allocated.

#### Parameters

##### url

`string`

is a string, the URL from the image file is to be downloaded.

##### minHeight

`number`

is the lower limit of the displacement.

##### maxHeight

`number`

is the upper limit of the displacement.

##### onSuccess?

(`mesh`) => `void`

is an optional Javascript function to be called just after the mesh is modified. It is passed the modified mesh and must return nothing.

##### uvOffset?

[`Vector2`](Vector2.md)

is an optional vector2 used to offset UV.

##### uvScale?

[`Vector2`](Vector2.md)

is an optional vector2 used to scale UV.

##### forceUpdate?

`boolean` = `false`

defines whether or not to force an update of the generated buffers. This is useful to apply on a deserialized model for instance.

##### onError?

(`message?`, `exception?`) => `void`

defines a callback called when an error occurs during the processing of the request.

#### Returns

[`Mesh`](Mesh.md)

the Mesh.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`applyDisplacementMap`](GreasedLineBaseMesh.md#applydisplacementmap)

***

### applyDisplacementMapFromBuffer()

> **applyDisplacementMapFromBuffer**(`buffer`, `heightMapWidth`, `heightMapHeight`, `minHeight`, `maxHeight`, `uvOffset?`, `uvScale?`, `forceUpdate?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3476](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3476)

Modifies the mesh geometry according to a displacementMap buffer.
A displacement map is a colored image. Each pixel color value (actually a gradient computed from red, green, blue values) will give the displacement to apply to each mesh vertex.
The mesh must be set as updatable. Its internal geometry is directly modified, no new buffer are allocated.

#### Parameters

##### buffer

`Uint8Array`

is a `Uint8Array` buffer containing series of `Uint8` lower than 255, the red, green, blue and alpha values of each successive pixel.

##### heightMapWidth

`number`

is the width of the buffer image.

##### heightMapHeight

`number`

is the height of the buffer image.

##### minHeight

`number`

is the lower limit of the displacement.

##### maxHeight

`number`

is the upper limit of the displacement.

##### uvOffset?

[`Vector2`](Vector2.md)

is an optional vector2 used to offset UV.

##### uvScale?

[`Vector2`](Vector2.md)

is an optional vector2 used to scale UV.

##### forceUpdate?

`boolean` = `false`

defines whether or not to force an update of the generated buffers. This is useful to apply on a deserialized model for instance.

#### Returns

[`Mesh`](Mesh.md)

the Mesh.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`applyDisplacementMapFromBuffer`](GreasedLineBaseMesh.md#applydisplacementmapfrombuffer)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`applyImpulse`](GreasedLineBaseMesh.md#applyimpulse)

***

### applySkeleton()

> **applySkeleton**(`skeleton`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4940](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4940)

Updates the vertex buffer by applying transformation from the bones

#### Parameters

##### skeleton

[`Skeleton`](Skeleton.md)

defines the skeleton to apply to current mesh

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`applySkeleton`](GreasedLineBaseMesh.md#applyskeleton)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`applyTorque`](GreasedLineBaseMesh.md#applytorque)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`attachToBone`](GreasedLineBaseMesh.md#attachtobone)

***

### bakeCurrentTransformIntoVertices()

> **bakeCurrentTransformIntoVertices**(`bakeIndependentlyOfChildren?`, `forceUnique?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3267)

Modifies the mesh geometry according to its own current World Matrix.
The mesh World Matrix is then reset.
This method returns nothing but really modifies the mesh even if it's originally not set as updatable.
Note that, under the hood, this method sets a new VertexBuffer each call.

#### Parameters

##### bakeIndependentlyOfChildren?

`boolean` = `true`

indicates whether to preserve all child nodes' World Matrix during baking

##### forceUnique?

`boolean` = `false`

indicates whether to force the mesh geometry to be unique

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/bakingTransforms

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`bakeCurrentTransformIntoVertices`](GreasedLineBaseMesh.md#bakecurrenttransformintovertices)

***

### bakeTransformIntoVertices()

> **bakeTransformIntoVertices**(`transform`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3204)

Modifies the mesh geometry according to the passed transformation matrix.
This method returns nothing, but it really modifies the mesh even if it's originally not set as updatable.
The mesh normals are modified using the same transformation.
Note that, under the hood, this method sets a new VertexBuffer each call.

#### Parameters

##### transform

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transform matrix to use

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/bakingTransforms

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`bakeTransformIntoVertices`](GreasedLineBaseMesh.md#baketransformintovertices)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`beginAnimation`](GreasedLineBaseMesh.md#beginanimation)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`buildBoundingInfo`](GreasedLineBaseMesh.md#buildboundinginfo)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`calcMovePOV`](GreasedLineBaseMesh.md#calcmovepov)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`calcRotatePOV`](GreasedLineBaseMesh.md#calcrotatepov)

***

### cleanMatrixWeights()

> **cleanMatrixWeights**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2913)

Renormalize the mesh and patch it up if there are no weights
  Similar to normalization by adding the weights compute the reciprocal and multiply all elements, this wil ensure that everything adds to 1.
  However in the case of zero weights then we set just a single influence to 1.
  We check in the function for extra's present and if so we use the normalizeSkinWeightsWithExtras rather than the FourWeights version.

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`cleanMatrixWeights`](GreasedLineBaseMesh.md#cleanmatrixweights)

***

### clone()

> **clone**(`name?`, `newParent?`): `GreasedLineRibbonMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L450)

Clones the GreasedLineRibbonMesh.

#### Parameters

##### name?

`string` = `...`

new line name

##### newParent?

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

new parent node

#### Returns

`GreasedLineRibbonMesh`

cloned line

#### Overrides

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`clone`](GreasedLineBaseMesh.md#clone)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`computeWorldMatrix`](GreasedLineBaseMesh.md#computeworldmatrix)

***

### convertToFlatShadedMesh()

> **convertToFlatShadedMesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3670](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3670)

Modify the mesh to get a flat shading rendering.
This means each mesh facet will then have its own normals. Usually new vertices are added in the mesh geometry to get this result.
Warning : the mesh is really modified even if not set originally as updatable and, under the hood, a new VertexBuffer is allocated.

#### Returns

[`Mesh`](Mesh.md)

current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`convertToFlatShadedMesh`](GreasedLineBaseMesh.md#converttoflatshadedmesh)

***

### convertToUnIndexedMesh()

> **convertToUnIndexedMesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3680)

This method removes all the mesh indices and add new vertices (duplication) in order to unfold facets into buffers.
In other words, more vertices, no more indices and a single bigger VBO.
The mesh is really modified even if not set originally as updatable. Under the hood, a new VertexBuffer is allocated.

#### Returns

[`Mesh`](Mesh.md)

current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`convertToUnIndexedMesh`](GreasedLineBaseMesh.md#converttounindexedmesh)

***

### copyVerticesData()

> **copyVerticesData**(`kind`, `vertexData`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1327)

Copies the requested vertex data kind into the given vertex data map. Float data is constructed if the map doesn't have the data.

#### Parameters

##### kind

`string`

defines the vertex data kind to use

##### vertexData

defines the map that stores the resulting data

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`copyVerticesData`](GreasedLineBaseMesh.md#copyverticesdata)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`createAnimationRange`](GreasedLineBaseMesh.md#createanimationrange)

***

### createInstance()

> **createInstance**(`name`): [`InstancedMesh`](InstancedMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4025](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4025)

Creates a new InstancedMesh object from the mesh model.

#### Parameters

##### name

`string`

defines the name of the new instance

#### Returns

[`InstancedMesh`](InstancedMesh.md)

a new InstancedMesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`createInstance`](GreasedLineBaseMesh.md#createinstance)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`createNormals`](GreasedLineBaseMesh.md#createnormals)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`createOrUpdateSubmeshesOctree`](GreasedLineBaseMesh.md#createorupdatesubmeshesoctree)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`deleteAnimationRange`](GreasedLineBaseMesh.md#deleteanimationrange)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`detachFromBone`](GreasedLineBaseMesh.md#detachfrombone)

***

### directRender()

> **directRender**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2679](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2679)

Render a complete mesh by going through all submeshes

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### See

 - [simple test](https://playground.babylonjs.com/#5SPY1V#2)
 - [perf test](https://playground.babylonjs.com/#5SPY1V#5)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`directRender`](GreasedLineBaseMesh.md#directrender)

***

### disableEdgesRendering()

> **disableEdgesRendering**(): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2948](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2948)

Disables the mesh edge rendering mode

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the currentAbstractMesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`disableEdgesRendering`](GreasedLineBaseMesh.md#disableedgesrendering)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`disableFacetData`](GreasedLineBaseMesh.md#disablefacetdata)

***

### dispose()

> **dispose**(`doNotRecurse?`, `disposeMaterialAndTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L251)

Dispose the line and it's resources

#### Parameters

##### doNotRecurse?

`boolean`

Set to true to not recurse into each children (recurse into each children by default)

##### disposeMaterialAndTextures?

`boolean` = `false`

Set to true to also dispose referenced materials and textures (false by default)

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`dispose`](GreasedLineBaseMesh.md#dispose)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`enableEdgesRendering`](GreasedLineBaseMesh.md#enableedgesrendering)

***

### flipFaces()

> **flipFaces**(`flipNormals?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3690](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3690)

Inverses facet orientations.
Warning : the mesh is really modified even if not set originally as updatable. A new VertexBuffer is created under the hood each call.

#### Parameters

##### flipNormals?

`boolean` = `false`

will also inverts the normals

#### Returns

[`Mesh`](Mesh.md)

current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`flipFaces`](GreasedLineBaseMesh.md#flipfaces)

***

### forceSharedVertices()

> **forceSharedVertices**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3878)

Force adjacent facets to share vertices and remove any facets that have all vertices in a line
This will undo any application of covertToFlatShadedMesh
Warning : the mesh is really modified even if not set originally as updatable. A new VertexBuffer is created under the hood each call.

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`forceSharedVertices`](GreasedLineBaseMesh.md#forcesharedvertices)

***

### freezeNormals()

> **freezeNormals**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1581)

This function affects parametric shapes on vertex position update only : ribbons, tubes, etc. It has no effect at all on other shapes. It prevents the mesh normals from being recomputed on next `positions` array update.

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`freezeNormals`](GreasedLineBaseMesh.md#freezenormals)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`freezeWorldMatrix`](GreasedLineBaseMesh.md#freezeworldmatrix)

***

### getAbsolutePivotPoint()

> **getAbsolutePivotPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L738)

Returns a new Vector3 set with the mesh pivot point World coordinates.

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 set with the mesh pivot point World coordinates.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getAbsolutePivotPoint`](GreasedLineBaseMesh.md#getabsolutepivotpoint)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getAbsolutePivotPointToRef`](GreasedLineBaseMesh.md#getabsolutepivotpointtoref)

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L515)

Returns the mesh absolute position in the World.

#### Returns

[`Vector3`](Vector3.md)

a Vector3.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getAbsolutePosition`](GreasedLineBaseMesh.md#getabsoluteposition)

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3181)

Returns as a new array populated with the mesh material and/or skeleton, if any.

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

an array of IAnimatable

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getAnimatables`](GreasedLineBaseMesh.md#getanimatables)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getAnimationByName`](GreasedLineBaseMesh.md#getanimationbyname)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getAnimationRange`](GreasedLineBaseMesh.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L885)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getAnimationRanges`](GreasedLineBaseMesh.md#getanimationranges)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getBehaviorByName`](GreasedLineBaseMesh.md#getbehaviorbyname)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getBoundingInfo`](GreasedLineBaseMesh.md#getboundinginfo)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getChildMeshes`](GreasedLineBaseMesh.md#getchildmeshes)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getChildMeshes`](GreasedLineBaseMesh.md#getchildmeshes)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getChildren`](GreasedLineBaseMesh.md#getchildren)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getChildren`](GreasedLineBaseMesh.md#getchildren)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getChildTransformNodes`](GreasedLineBaseMesh.md#getchildtransformnodes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L113)

"GreasedLineRibbonMesh"

#### Returns

`string`

"GreasedLineRibbonMesh"

#### Overrides

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getClassName`](GreasedLineBaseMesh.md#getclassname)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getClosestFacetAtCoordinates`](GreasedLineBaseMesh.md#getclosestfacetatcoordinates)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getClosestFacetAtLocalCoordinates`](GreasedLineBaseMesh.md#getclosestfacetatlocalcoordinates)

***

### getConnectedParticleSystems()

> **getConnectedParticleSystems**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2971](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2971)

This function returns all of the particle systems in the scene that use the mesh as an emitter.

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)[]

an array of particle systems in the scene that use the mesh as an emitter

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getConnectedParticleSystems`](GreasedLineBaseMesh.md#getconnectedparticlesystems)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getDescendants`](GreasedLineBaseMesh.md#getdescendants)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getDescendants`](GreasedLineBaseMesh.md#getdescendants)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getDirection`](GreasedLineBaseMesh.md#getdirection)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getDirectionToRef`](GreasedLineBaseMesh.md#getdirectiontoref)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getDistanceToCamera`](GreasedLineBaseMesh.md#getdistancetocamera)

***

### getEmittedParticleSystems()

> **getEmittedParticleSystems**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemComponent.types.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystemComponent.types.ts#L45)

Returns an array populated with IParticleSystem objects whose the mesh is the emitter

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)[]

an array of IParticleSystem

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getEmittedParticleSystems`](GreasedLineBaseMesh.md#getemittedparticlesystems)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getEngine`](GreasedLineBaseMesh.md#getengine)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetDataParameters`](GreasedLineBaseMesh.md#getfacetdataparameters)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetLocalNormals`](GreasedLineBaseMesh.md#getfacetlocalnormals)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetLocalPartitioning`](GreasedLineBaseMesh.md#getfacetlocalpartitioning)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetLocalPositions`](GreasedLineBaseMesh.md#getfacetlocalpositions)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetNormal`](GreasedLineBaseMesh.md#getfacetnormal)

***

### getFacetNormalToRef()

> **getFacetNormalToRef**(`i`, `ref`): `GreasedLineRibbonMesh`

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

`GreasedLineRibbonMesh`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetNormalToRef`](GreasedLineBaseMesh.md#getfacetnormaltoref)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetPosition`](GreasedLineBaseMesh.md#getfacetposition)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetPositionToRef`](GreasedLineBaseMesh.md#getfacetpositiontoref)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getFacetsAtLocalCoordinates`](GreasedLineBaseMesh.md#getfacetsatlocalcoordinates)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getHierarchyBoundingVectors`](GreasedLineBaseMesh.md#gethierarchyboundingvectors)

***

### getHierarchyEmittedParticleSystems()

> **getHierarchyEmittedParticleSystems**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemComponent.types.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystemComponent.types.ts#L51)

Returns an array populated with IParticleSystem objects whose the mesh or its children are the emitter

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)[]

an array of IParticleSystem

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getHierarchyEmittedParticleSystems`](GreasedLineBaseMesh.md#gethierarchyemittedparticlesystems)

***

### getIndices()

> **getIndices**(`copyWhenShared?`, `forceCopy?`): [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1466](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1466)

Returns an array of integers or a typed array (Int32Array, Uint32Array, Uint16Array) populated with the mesh indices.

#### Parameters

##### copyWhenShared?

`boolean`

If true (default false) and and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.

##### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

the indices array or an empty array if the mesh has no geometry

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getIndices`](GreasedLineBaseMesh.md#getindices)

***

### getLOD()

> **getLOD**(`camera`, `boundingSphere?`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1209)

Returns the registered LOD mesh distant from the parameter `camera` position if any, else returns the current mesh.

#### Parameters

##### camera

[`Camera`](Camera.md)

defines the camera to use to compute distance

##### boundingSphere?

[`BoundingSphere`](BoundingSphere.md)

defines a custom bounding sphere to use instead of the one from this mesh

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

This mesh (for chaining)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getLOD`](GreasedLineBaseMesh.md#getlod)

***

### getLODLevelAtDistance()

> **getLODLevelAtDistance**(`distance`): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1169)

Returns the LOD level mesh at the passed distance or null if not found.

#### Parameters

##### distance

`number`

The distance from the center of the object to show this level

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

a Mesh or `null`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getLODLevelAtDistance`](GreasedLineBaseMesh.md#getlodlevelatdistance)

***

### getLODLevels()

> **getLODLevels**(): [`MeshLODLevel`](MeshLODLevel.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1117)

Gets the list of MeshLODLevel associated with the current mesh

#### Returns

[`MeshLODLevel`](MeshLODLevel.md)[]

an array of MeshLODLevel

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getLODLevels`](GreasedLineBaseMesh.md#getlodlevels)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getMaterialForRenderPass`](GreasedLineBaseMesh.md#getmaterialforrenderpass)

***

### getMeshUniformBuffer()

> **getMeshUniformBuffer**(): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1159)

Gets the mesh uniform buffer.

#### Returns

[`UniformBuffer`](UniformBuffer.md)

the uniform buffer of the mesh.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getMeshUniformBuffer`](GreasedLineBaseMesh.md#getmeshuniformbuffer)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getNormalsData`](GreasedLineBaseMesh.md#getnormalsdata)

***

### getPhysicsBody()

> **getPhysicsBody**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L20)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPhysicsBody`](GreasedLineBaseMesh.md#getphysicsbody)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPhysicsImpostor`](GreasedLineBaseMesh.md#getphysicsimpostor)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPivotMatrix`](GreasedLineBaseMesh.md#getpivotmatrix)

***

### getPivotPoint()

> **getPivotPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:716](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L716)

Returns a new Vector3 set with the mesh pivot point coordinates in the local space.

#### Returns

[`Vector3`](Vector3.md)

the pivot point

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPivotPoint`](GreasedLineBaseMesh.md#getpivotpoint)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPivotPointToRef`](GreasedLineBaseMesh.md#getpivotpointtoref)

***

### getPoseMatrix()

> **getPoseMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L319)

Returns the mesh Pose matrix.

#### Returns

[`Matrix`](Matrix.md)

the pose matrix

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPoseMatrix`](GreasedLineBaseMesh.md#getposematrix)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPositionData`](GreasedLineBaseMesh.md#getpositiondata)

***

### getPositionExpressedInLocalSpace()

> **getPositionExpressedInLocalSpace**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L573)

Returns the mesh position in the local space from the current World matrix values.

#### Returns

[`Vector3`](Vector3.md)

a new Vector3.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPositionExpressedInLocalSpace`](GreasedLineBaseMesh.md#getpositionexpressedinlocalspace)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getPositionInCameraSpace`](GreasedLineBaseMesh.md#getpositionincameraspace)

***

### getRawBoundingInfo()

> **getRawBoundingInfo**(): [`BoundingInfo`](BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1558)

Returns the bounding info unnafected by instance data.

#### Returns

[`BoundingInfo`](BoundingInfo.md)

the bounding info of the mesh unaffected by instance data.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getRawBoundingInfo`](GreasedLineBaseMesh.md#getrawboundinginfo)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getScene`](GreasedLineBaseMesh.md#getscene)

***

### getTotalIndices()

> **getTotalIndices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1453)

Returns a positive integer : the total number of indices in this mesh geometry.

#### Returns

`number`

the number of indices or zero if the mesh has no geometry.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getTotalIndices`](GreasedLineBaseMesh.md#gettotalindices)

***

### getTotalVertices()

> **getTotalVertices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1279)

Returns the total number of vertices within the mesh geometry or zero if the mesh has no geometry.

#### Returns

`number`

the total number of vertices

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getTotalVertices`](GreasedLineBaseMesh.md#gettotalvertices)

***

### getVertexBuffer()

> **getVertexBuffer**(`kind`, `bypassInstanceData?`): [`Nullable`](../type-aliases/Nullable.md)\<[`VertexBuffer`](VertexBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1352)

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

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getVertexBuffer`](GreasedLineBaseMesh.md#getvertexbuffer)

***

### getVerticesData()

> **getVerticesData**(`kind`, `copyWhenShared?`, `forceCopy?`, `bypassInstanceData?`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1306)

Returns the content of an associated vertex buffer

#### Parameters

##### kind

`string`

defines which buffer to read from (positions, indices, normals, etc). Possible `kind` values :
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

##### copyWhenShared?

`boolean`

defines a boolean indicating that if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one

##### forceCopy?

`boolean`

defines a boolean forcing the copy of the buffer no matter what the value of copyWhenShared is

##### bypassInstanceData?

`boolean`

defines a boolean indicating that the function should not take into account the instance data (applies only if the mesh has instances). Default: false

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a FloatArray or null if the mesh has no geometry or no vertex buffer for this kind.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getVerticesData`](GreasedLineBaseMesh.md#getverticesdata)

***

### getVerticesDataKinds()

> **getVerticesDataKinds**(`bypassInstanceData?`): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1428)

Returns a string which contains the list of existing `kinds` of Vertex Data associated with this mesh.

#### Parameters

##### bypassInstanceData?

`boolean`

defines a boolean indicating that the function should not take into account the instance data (applies only if the mesh has instances). Default: false

#### Returns

`string`[]

an array of strings

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getVerticesDataKinds`](GreasedLineBaseMesh.md#getverticesdatakinds)

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1649)

Gets the current world matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`getWorldMatrix`](GreasedLineBaseMesh.md#getworldmatrix)

***

### increaseVertices()

> **increaseVertices**(`numberPerEdge?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3720](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3720)

Increase the number of facets and hence vertices in a mesh
Vertex normals are interpolated from existing vertex normals
Warning : the mesh is really modified even if not set originally as updatable. A new VertexBuffer is created under the hood each call.

#### Parameters

##### numberPerEdge?

`number` = `1`

the number of new vertices to add to each edge of a facet, optional default 1

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`increaseVertices`](GreasedLineBaseMesh.md#increasevertices)

***

### instantiateHierarchy()

> **instantiateHierarchy**(`newParent?`, `options?`, `onNewNodeCreated?`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1011](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1011)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`instantiateHierarchy`](GreasedLineBaseMesh.md#instantiatehierarchy)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`intersects`](GreasedLineBaseMesh.md#intersects)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`intersectsMesh`](GreasedLineBaseMesh.md#intersectsmesh)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`intersectsPoint`](GreasedLineBaseMesh.md#intersectspoint)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isCompletelyInFrustum`](GreasedLineBaseMesh.md#iscompletelyinfrustum)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isDescendantOf`](GreasedLineBaseMesh.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isDisposed`](GreasedLineBaseMesh.md#isdisposed)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isEnabled`](GreasedLineBaseMesh.md#isenabled)

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3137)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isInFrustum`](GreasedLineBaseMesh.md#isinfrustum)

***

### isLazy()

> **isLazy**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L258)

#### Returns

`boolean`

true if the mesh was created in lazy mode

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isLazy`](GreasedLineBaseMesh.md#islazy)

***

### isReady()

> **isReady**(`completeCheck?`, `forceInstanceSupport?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1484](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1484)

Determine if the current mesh is ready to be rendered

#### Parameters

##### completeCheck?

`boolean` = `false`

defines if a complete check (including materials and lights) has to be done (false by default)

##### forceInstanceSupport?

`boolean` = `false`

will check if the mesh will be ready when used with instances (false by default)

#### Returns

`boolean`

true if all associated assets are ready (material, textures, shaders)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isReady`](GreasedLineBaseMesh.md#isready)

***

### isUsingPivotMatrix()

> **isUsingPivotMatrix**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L207)

return true if a pivot has been set

#### Returns

`boolean`

true if a pivot matrix is used

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isUsingPivotMatrix`](GreasedLineBaseMesh.md#isusingpivotmatrix)

***

### isUsingPostMultiplyPivotMatrix()

> **isUsingPostMultiplyPivotMatrix**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L214)

#### Returns

`boolean`

true if pivot matrix must be cancelled in the world matrix. When this parameter is set to true (default), the inverse of the pivot matrix is also applied at the end to cancel the transformation effect.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isUsingPostMultiplyPivotMatrix`](GreasedLineBaseMesh.md#isusingpostmultiplypivotmatrix)

***

### isVertexBufferUpdatable()

> **isVertexBufferUpdatable**(`kind`, `bypassInstanceData?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1407)

Returns a boolean defining if the vertex data for the requested `kind` is updatable.

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

##### bypassInstanceData?

`boolean`

defines a boolean indicating that the function should not take into account the instance data (applies only if the mesh has instances). Default: false

#### Returns

`boolean`

a boolean

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isVertexBufferUpdatable`](GreasedLineBaseMesh.md#isvertexbufferupdatable)

***

### isVerticesDataPresent()

> **isVerticesDataPresent**(`kind`, `bypassInstanceData?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1379](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1379)

Tests if a specific vertex buffer is associated with this mesh

#### Parameters

##### kind

`string`

defines which buffer to check (positions, indices, normals, etc). Possible `kind` values :
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

`boolean`

a boolean

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isVerticesDataPresent`](GreasedLineBaseMesh.md#isverticesdatapresent)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`isWorldMatrixCameraDependent`](GreasedLineBaseMesh.md#isworldmatrixcameradependent)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`locallyTranslate`](GreasedLineBaseMesh.md#locallytranslate)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`lookAt`](GreasedLineBaseMesh.md#lookat)

***

### makeGeometryUnique()

> **makeGeometryUnique**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1966](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1966)

Creates a un-shared specific occurence of the geometry for the mesh.

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`makeGeometryUnique`](GreasedLineBaseMesh.md#makegeometryunique)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`markAsDirty`](GreasedLineBaseMesh.md#markasdirty)

***

### markVerticesDataAsUpdatable()

> **markVerticesDataAsUpdatable**(`kind`, `updatable?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1873](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1873)

Flags an associated vertex buffer as updatable

#### Parameters

##### kind

`string`

defines which buffer to use (positions, indices, normals, etc). Possible `kind` values :
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

##### updatable?

`boolean` = `true`

defines if the updated vertex buffer must be flagged as updatable

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`markVerticesDataAsUpdatable`](GreasedLineBaseMesh.md#markverticesdataasupdatable)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`movePOV`](GreasedLineBaseMesh.md#movepov)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`moveWithCollisions`](GreasedLineBaseMesh.md#movewithcollisions)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`normalizeToUnitCube`](GreasedLineBaseMesh.md#normalizetounitcube)

***

### optimizeIndices()

> **optimizeIndices**(`successCallback?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4053](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4053)

Optimization of the mesh's indices, in case a mesh has duplicated vertices.
The function will only reorder the indices and will not remove unused vertices to avoid problems with submeshes.
This should be used together with the simplification to avoid disappearing triangles.

#### Parameters

##### successCallback?

(`mesh?`) => `void`

an optional success callback to be called after the optimization finished.

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`optimizeIndices`](GreasedLineBaseMesh.md#optimizeindices)

***

### optimizeIndicesAsync()

> **optimizeIndicesAsync**(): `Promise`\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2898)

Optimize the indices order so that we keep the faces with similar indices together

#### Returns

`Promise`\<[`AbstractMesh`](AbstractMesh.md)\>

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`optimizeIndicesAsync`](GreasedLineBaseMesh.md#optimizeindicesasync)

***

### refreshBoundingInfo()

> **refreshBoundingInfo**(`applySkeletonOrOptions?`, `applyMorph?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1700](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1700)

This method recomputes and sets a new BoundingInfo to the mesh unless it is locked.
This means the mesh underlying bounding box and sphere are recomputed.

#### Parameters

##### applySkeletonOrOptions?

`boolean` \| [`IMeshDataOptions`](../interfaces/IMeshDataOptions.md)

defines whether to apply the skeleton before computing the bounding info or a set of options

##### applyMorph?

`boolean` = `false`

defines whether to apply the morph target before computing the bounding info

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`refreshBoundingInfo`](GreasedLineBaseMesh.md#refreshboundinginfo)

***

### registerAfterRender()

> **registerAfterRender**(`func`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2176)

Registers for this mesh a javascript function called just after the rendering is complete

#### Parameters

##### func

(`mesh`) => `void`

defines the function to call after rendering this mesh

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`registerAfterRender`](GreasedLineBaseMesh.md#registerafterrender)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`registerAfterWorldMatrixUpdate`](GreasedLineBaseMesh.md#registerafterworldmatrixupdate)

***

### registerBeforeRender()

> **registerBeforeRender**(`func`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2156)

Registers for this mesh a javascript function called just before the rendering process

#### Parameters

##### func

(`mesh`) => `void`

defines the function to call before rendering this mesh

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`registerBeforeRender`](GreasedLineBaseMesh.md#registerbeforerender)

***

### registerInstancedBuffer()

> **registerInstancedBuffer**(`kind`, `stride`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L13)

Register a custom buffer that will be instanced

#### Parameters

##### kind

`string`

defines the buffer kind

##### stride

`number`

defines the stride in floats

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances#custom-buffers

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`registerInstancedBuffer`](GreasedLineBaseMesh.md#registerinstancedbuffer)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`releaseSubMeshes`](GreasedLineBaseMesh.md#releasesubmeshes)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`removeBehavior`](GreasedLineBaseMesh.md#removebehavior)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`removeChild`](GreasedLineBaseMesh.md#removechild)

***

### removeLODLevel()

> **removeLODLevel**(`mesh`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1187)

Remove a mesh from the LOD array

#### Parameters

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

defines the mesh to be removed

#### Returns

[`Mesh`](Mesh.md)

This mesh (for chaining)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`removeLODLevel`](GreasedLineBaseMesh.md#removelodlevel)

***

### removeVerticesData()

> **removeVerticesData**(`kind`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1848](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1848)

Delete a vertex buffer associated with this mesh

#### Parameters

##### kind

`string`

defines which buffer to delete (positions, indices, normals, etc). Possible `kind` values :
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

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`removeVerticesData`](GreasedLineBaseMesh.md#removeverticesdata)

***

### render()

> **render**(`subMesh`, `enableAlphaMode`, `effectiveMeshReplacement?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2697](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2697)

Triggers the draw call for the mesh. Usually, you don't need to call this method by your own because the mesh rendering is handled by the scene rendering manager

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

defines the subMesh to render

##### enableAlphaMode

`boolean`

defines if alpha mode can be changed

##### effectiveMeshReplacement?

[`AbstractMesh`](AbstractMesh.md)

defines an optional mesh used to provide info for the rendering

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`render`](GreasedLineBaseMesh.md#render)

***

### renderWithRenderPassId()

> **renderWithRenderPassId**(`renderPassId?`, `enableAlphaMode?`, `effectiveMeshReplacement?`, `subMesh?`, `checkFrustumCulling?`): `GreasedLineRibbonMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2645](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2645)

Triggers the draw call for the mesh (or a submesh), for a specific render pass id

#### Parameters

##### renderPassId?

`number`

defines the render pass id to use to draw the mesh / submesh. If not provided, use the current renderPassId of the engine.

##### enableAlphaMode?

`boolean`

defines if alpha mode can be changed (default: false)

##### effectiveMeshReplacement?

[`AbstractMesh`](AbstractMesh.md)

defines an optional mesh used to provide info for the rendering (default: undefined)

##### subMesh?

[`SubMesh`](SubMesh.md)

defines the subMesh to render. If not provided, draw all mesh submeshes (default: undefined)

##### checkFrustumCulling?

`boolean` = `true`

defines if frustum culling must be checked (default: true). If you know the mesh is in the frustum (or if you don't care!), you can pass false to optimize.

#### Returns

`GreasedLineRibbonMesh`

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`renderWithRenderPassId`](GreasedLineBaseMesh.md#renderwithrenderpassid)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`resetDrawCache`](GreasedLineBaseMesh.md#resetdrawcache)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`resetLocalMatrix`](GreasedLineBaseMesh.md#resetlocalmatrix)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`rotate`](GreasedLineBaseMesh.md#rotate)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`rotateAround`](GreasedLineBaseMesh.md#rotatearound)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`rotatePOV`](GreasedLineBaseMesh.md#rotatepov)

***

### serialize()

> **serialize**(`serializationObject`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L471)

Serializes this GreasedLineRibbonMesh

#### Parameters

##### serializationObject

`any`

object to write serialization to

#### Returns

`void`

#### Overrides

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`serialize`](GreasedLineBaseMesh.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L916)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`serializeAnimationRanges`](GreasedLineBaseMesh.md#serializeanimationranges)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setAbsolutePosition`](GreasedLineBaseMesh.md#setabsoluteposition)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setBoundingInfo`](GreasedLineBaseMesh.md#setboundinginfo)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setDirection`](GreasedLineBaseMesh.md#setdirection)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setEnabled`](GreasedLineBaseMesh.md#setenabled)

***

### setIndexBuffer()

> **setIndexBuffer**(`indexBuffer`, `totalVertices`, `totalIndices`, `is32Bits?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1989](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1989)

Sets the index buffer of this mesh.

#### Parameters

##### indexBuffer

[`DataBuffer`](DataBuffer.md)

Defines the index buffer to use for this mesh

##### totalVertices

`number`

Defines the total number of vertices used by the buffer

##### totalIndices

`number`

Defines the total number of indices in the index buffer

##### is32Bits?

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\> = `null`

Defines if the indices are 32 bits. If null (default), the value is guessed from the number of vertices

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setIndexBuffer`](GreasedLineBaseMesh.md#setindexbuffer)

***

### setIndices()

> **setIndices**(`indices`, `totalVertices?`, `updatable?`, `dontForceSubMeshRecreation?`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2005)

Set the index buffer of this mesh

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the source data

##### totalVertices?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the total number of vertices referenced by this index data (can be null)

##### updatable?

`boolean` = `false`

defines if the updated index buffer must be flagged as updatable (default is false)

##### dontForceSubMeshRecreation?

`boolean` = `false`

defines a boolean indicating that we don't want to force the recreation of sub-meshes if we don't have to (false by default)

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setIndices`](GreasedLineBaseMesh.md#setindices)

***

### setMaterialById()

> **setMaterialById**(`id`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3156)

Sets the mesh material by the material or multiMaterial `id` property

#### Parameters

##### id

`string`

is a string identifying the material or the multiMaterial

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setMaterialById`](GreasedLineBaseMesh.md#setmaterialbyid)

***

### ~~setMaterialByID()~~

> **setMaterialByID**(`id`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5419)

Sets the mesh material by the material or multiMaterial `id` property

#### Parameters

##### id

`string`

is a string identifying the material or the multiMaterial

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Deprecated

Please use MeshBuilder instead Please use setMaterialById instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setMaterialByID`](GreasedLineBaseMesh.md#setmaterialbyid-1)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setMaterialForRenderPass`](GreasedLineBaseMesh.md#setmaterialforrenderpass)

***

### setNormalsForCPUSkinning()

> **setNormalsForCPUSkinning**(): [`Nullable`](../type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4916)

Prepare internal normal array for software CPU skinning

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

original normals used for CPU skinning. Useful for integrating Morphing with skeletons in same mesh.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setNormalsForCPUSkinning`](GreasedLineBaseMesh.md#setnormalsforcpuskinning)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setParent`](GreasedLineBaseMesh.md#setparent)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setPhysicsLinkWith`](GreasedLineBaseMesh.md#setphysicslinkwith)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setPivotMatrix`](GreasedLineBaseMesh.md#setpivotmatrix)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setPivotPoint`](GreasedLineBaseMesh.md#setpivotpoint)

***

### setPoints()

> **setPoints**(`points`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L366)

Sets line points and rerenders the line.

#### Parameters

##### points

[`GreasedLinePoints`](../type-aliases/GreasedLinePoints.md)

points table

##### options?

[`GreasedLineMeshOptions`](../interfaces/GreasedLineMeshOptions.md)

optional options

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setPoints`](GreasedLineBaseMesh.md#setpoints)

***

### setPositionsForCPUSkinning()

> **setPositionsForCPUSkinning**(): [`Nullable`](../type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4895](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4895)

Prepare internal position array for software CPU skinning

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

original positions used for CPU skinning. Useful for integrating Morphing with skeletons in same mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setPositionsForCPUSkinning`](GreasedLineBaseMesh.md#setpositionsforcpuskinning)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setPositionWithLocalVector`](GreasedLineBaseMesh.md#setpositionwithlocalvector)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setPreTransformMatrix`](GreasedLineBaseMesh.md#setpretransformmatrix)

***

### setVerticesBuffer()

> **setVerticesBuffer**(`buffer`, `disposeExistingBuffer?`, `totalVertices?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1890](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1890)

Sets the mesh global Vertex Buffer

#### Parameters

##### buffer

[`VertexBuffer`](VertexBuffer.md)

defines the buffer to use

##### disposeExistingBuffer?

`boolean` = `true`

disposes the existing buffer, if any (default: true)

##### totalVertices?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the total number of vertices for position kind (could be null)

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setVerticesBuffer`](GreasedLineBaseMesh.md#setverticesbuffer)

***

### setVerticesData()

> **setVerticesData**(`kind`, `data`, `updatable?`, `stride?`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1818](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1818)

Copy a FloatArray into a specific associated vertex buffer

#### Parameters

##### kind

`string`

defines which buffer to write to (positions, indices, normals, etc). Possible `kind` values :
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

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the data source

##### updatable?

`boolean` = `false`

defines if the updated vertex buffer must be flagged as updatable

##### stride?

`number`

defines the data stride size (can be null)

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`setVerticesData`](GreasedLineBaseMesh.md#setverticesdata)

***

### simplify()

> **simplify**(`settings`, `parallelProcessing?`, `simplificationType?`, `successCallback?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.types.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.types.ts#L30)

Simplify the mesh according to the given array of settings.
Function will return immediately and will simplify async

#### Parameters

##### settings

[`ISimplificationSettings`](../interfaces/ISimplificationSettings.md)[]

a collection of simplification settings

##### parallelProcessing?

`boolean`

should all levels calculate parallel or one after the other

##### simplificationType?

[`QUADRATIC`](../enumerations/SimplificationType.md#quadratic)

the type of simplification to run

##### successCallback?

(`mesh?`, `submeshIndex?`) => `void`

optional success callback to be called after the simplification finished processing all settings

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`simplify`](GreasedLineBaseMesh.md#simplify)

***

### subdivide()

> **subdivide**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1769](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1769)

This function will subdivide the mesh into multiple submeshes

#### Parameters

##### count

`number`

defines the expected number of submeshes

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`subdivide`](GreasedLineBaseMesh.md#subdivide)

***

### synchronizeInstances()

> **synchronizeInstances**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4038](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4038)

Synchronises all the mesh instance submeshes to the current mesh submeshes, if any.
After this call, all the mesh instances have the same submeshes than the current mesh.

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`synchronizeInstances`](GreasedLineBaseMesh.md#synchronizeinstances)

***

### thinInstanceAdd()

> **thinInstanceAdd**(`matrix`, `refresh?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L27)

Creates a new thin instance

#### Parameters

##### matrix

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Matrix`](Matrix.md)\> \| [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Matrix`](Matrix.md)\>[]

the matrix or array of matrices (position, rotation, scale) of the thin instance(s) to create

##### refresh?

`boolean`

true to refresh the underlying gpu buffer (default: true). If you do multiple calls to this method in a row, set refresh to true only for the last call to save performance

#### Returns

`number`

the thin instance index number. If you pass an array of matrices, other instance indexes are index+1, index+2, etc

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceAdd`](GreasedLineBaseMesh.md#thininstanceadd)

***

### thinInstanceAddSelf()

> **thinInstanceAddSelf**(`refresh?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L34)

Adds the transformation (matrix) of the current mesh as a thin instance

#### Parameters

##### refresh?

`boolean`

true to refresh the underlying gpu buffer (default: true). If you do multiple calls to this method in a row, set refresh to true only for the last call to save performance

#### Returns

`number`

the thin instance index number

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceAddSelf`](GreasedLineBaseMesh.md#thininstanceaddself)

***

### thinInstanceBufferUpdated()

> **thinInstanceBufferUpdated**(`kind`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L84)

Synchronize the gpu buffers with a thin instance buffer. Call this method if you update later on the buffers passed to thinInstanceSetBuffer

#### Parameters

##### kind

`string`

name of the attribute to update. Use "matrix" to update the buffer of matrices

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceBufferUpdated`](GreasedLineBaseMesh.md#thininstancebufferupdated)

***

### thinInstanceGetWorldMatrices()

> **thinInstanceGetWorldMatrices**(): [`Matrix`](Matrix.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L78)

Gets the list of world matrices

#### Returns

[`Matrix`](Matrix.md)[]

an array containing all the world matrices from the thin instances

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceGetWorldMatrices`](GreasedLineBaseMesh.md#thininstancegetworldmatrices)

***

### thinInstancePartialBufferUpdate()

> **thinInstancePartialBufferUpdate**(`kind`, `dataOrLength`, `offset`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L97)

Applies a partial update to a buffer directly on the GPU
Note that the buffer located on the CPU is NOT updated! It's up to you to update it (or not) with the same data you pass to this method

#### Parameters

##### kind

`string`

name of the attribute to update. Use "matrix" to update the buffer of matrices

##### dataOrLength

`number` \| `Float32Array`\<`ArrayBufferLike`\>

the data to set in the GPU buffer, or the length (in elements) of data to update starting from the offset.
If you pass a length (number), it is the number of elements to update. For example, if kind is "matrix" and you pass 2 as length, it will update 2 matrices (2*16 floats) in the GPU buffer starting from the offset; in this case [offset](GoldbergMesh.md#thininstancepartialbufferupdate) should also be expressed as a number of elements.
If you pass a Float32Array, [offset](GoldbergMesh.md#thininstancepartialbufferupdate) is interpreted in floats in the underlying GPU buffer, consistent with low-level buffer update methods such as updateDirectly.

##### offset

`number`

the offset in the GPU buffer where to update the data:
 - when [dataOrLength](GoldbergMesh.md#thininstancepartialbufferupdate) is a number, this is an element offset (for example, a matrix index);
 - when [dataOrLength](GoldbergMesh.md#thininstancepartialbufferupdate) is a Float32Array, this is a float offset in the underlying buffer.

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstancePartialBufferUpdate`](GreasedLineBaseMesh.md#thininstancepartialbufferupdate)

***

### thinInstanceRefreshBoundingInfo()

> **thinInstanceRefreshBoundingInfo**(`forceRefreshParentInfo?`, `applySkeleton?`, `applyMorph?`, `applyBakedVertexAnimation?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L106)

Refreshes the bounding info, taking into account all the thin instances defined

#### Parameters

##### forceRefreshParentInfo?

`boolean`

true to force recomputing the mesh bounding info and use it to compute the aggregated bounding info

##### applySkeleton?

`boolean`

defines whether to apply the skeleton before computing the bounding info

##### applyMorph?

`boolean`

defines whether to apply the morph target before computing the bounding info

##### applyBakedVertexAnimation?

`boolean`

defines whether to apply baked vertex animation before computing the bounding info

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceRefreshBoundingInfo`](GreasedLineBaseMesh.md#thininstancerefreshboundinginfo)

***

### thinInstanceRegisterAttribute()

> **thinInstanceRegisterAttribute**(`kind`, `stride`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L41)

Registers a custom attribute to be used with thin instances

#### Parameters

##### kind

`string`

name of the attribute

##### stride

`number`

size in floats of the attribute

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceRegisterAttribute`](GreasedLineBaseMesh.md#thininstanceregisterattribute)

***

### thinInstanceSetAttributeAt()

> **thinInstanceSetAttributeAt**(`kind`, `index`, `value`, `refresh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L58)

Sets the value of a custom attribute for a thin instance

#### Parameters

##### kind

`string`

name of the attribute

##### index

`number`

index of the thin instance

##### value

`number`[]

value to set

##### refresh?

`boolean`

true to refresh the underlying gpu buffer (default: true). If you do multiple calls to this method in a row, set refresh to true only for the last call to save performance

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceSetAttributeAt`](GreasedLineBaseMesh.md#thininstancesetattributeat)

***

### thinInstanceSetBuffer()

> **thinInstanceSetBuffer**(`kind`, `buffer`, `stride?`, `staticBuffer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L72)

Sets a buffer to be used with thin instances. This method is a faster way to setup multiple instances than calling thinInstanceAdd repeatedly

#### Parameters

##### kind

`string`

name of the attribute. Use "matrix" to setup the buffer of matrices

##### buffer

[`Nullable`](../type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

buffer to set

##### stride?

`number`

size in floats of each value of the buffer

##### staticBuffer?

`boolean`

indicates that the buffer is static, so that you won't change it after it is set (better performances - true by default)

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceSetBuffer`](GreasedLineBaseMesh.md#thininstancesetbuffer)

***

### thinInstanceSetMatrixAt()

> **thinInstanceSetMatrixAt**(`index`, `matrix`, `refresh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L49)

Sets the matrix of a thin instance

#### Parameters

##### index

`number`

index of the thin instance

##### matrix

[`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<[`Matrix`](Matrix.md)\>

matrix to set

##### refresh?

`boolean`

true to refresh the underlying gpu buffer (default: true). If you do multiple calls to this method in a row, set refresh to true only for the last call to save performance

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`thinInstanceSetMatrixAt`](GreasedLineBaseMesh.md#thininstancesetmatrixat)

***

### toLeftHanded()

> **toLeftHanded**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2039](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2039)

Invert the geometry to move from a right handed system to a left handed one.

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`toLeftHanded`](GreasedLineBaseMesh.md#tolefthanded)

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1071)

Returns a description of this mesh

#### Parameters

##### fullDetails?

`boolean`

define if full details about this mesh must be used

#### Returns

`string`

a descriptive string representing this mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`toString`](GreasedLineBaseMesh.md#tostring)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`transferToEffect`](GreasedLineBaseMesh.md#transfertoeffect)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`translate`](GreasedLineBaseMesh.md#translate)

***

### unfreezeNormals()

> **unfreezeNormals**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1590](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1590)

This function affects parametric shapes on vertex position update only : ribbons, tubes, etc. It has no effect at all on other shapes. It reactivates the mesh normals computation if it was previously frozen

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`unfreezeNormals`](GreasedLineBaseMesh.md#unfreezenormals)

***

### unfreezeWorldMatrix()

> **unfreezeWorldMatrix**(): `GreasedLineRibbonMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:498](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L498)

Allows back the World matrix computation.

#### Returns

`GreasedLineRibbonMesh`

the TransformNode.

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`unfreezeWorldMatrix`](GreasedLineBaseMesh.md#unfreezeworldmatrix)

***

### unregisterAfterRender()

> **unregisterAfterRender**(`func`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2186)

Disposes a previously registered javascript function called after the rendering.

#### Parameters

##### func

(`mesh`) => `void`

defines the function to remove

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`unregisterAfterRender`](GreasedLineBaseMesh.md#unregisterafterrender)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`unregisterAfterWorldMatrixUpdate`](GreasedLineBaseMesh.md#unregisterafterworldmatrixupdate)

***

### unregisterBeforeRender()

> **unregisterBeforeRender**(`func`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2166)

Disposes a previously registered javascript function called before the rendering

#### Parameters

##### func

(`mesh`) => `void`

defines the function to remove

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`unregisterBeforeRender`](GreasedLineBaseMesh.md#unregisterbeforerender)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`updateFacetData`](GreasedLineBaseMesh.md#updatefacetdata)

***

### updateIndices()

> **updateIndices**(`indices`, `offset?`, `gpuMemoryOnly?`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2026](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2026)

Update the current index buffer

#### Parameters

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines the source data

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`updateIndices`](GreasedLineBaseMesh.md#updateindices)

***

### updateLazy()

> **updateLazy**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L220)

Updated a lazy line. Rerenders the line and updates boundinfo as well.

#### Returns

`void`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`updateLazy`](GreasedLineBaseMesh.md#updatelazy)

***

### updateMeshPositions()

> **updateMeshPositions**(`positionFunction`, `computeNormals?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1939](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1939)

This method updates the vertex positions of an updatable mesh according to the `positionFunction` returned values.

#### Parameters

##### positionFunction

(`data`) => `void`

is a simple JS function what is passed the mesh `positions` array. It doesn't need to return anything

##### computeNormals?

`boolean` = `true`

is a boolean (default true) to enable/disable the mesh normal recomputation after the vertex position update

#### Returns

[`Mesh`](Mesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#other-shapes-updatemeshpositions

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`updateMeshPositions`](GreasedLineBaseMesh.md#updatemeshpositions)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`updatePoseMatrix`](GreasedLineBaseMesh.md#updateposematrix)

***

### updateVerticesData()

> **updateVerticesData**(`kind`, `data`, `updateExtends?`, `makeItUnique?`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1919](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1919)

Update a specific associated vertex buffer

#### Parameters

##### kind

`string`

defines which buffer to write to (positions, indices, normals, etc). Possible `kind` values :
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

##### data

[`FloatArray`](../type-aliases/FloatArray.md)

defines the data source

##### updateExtends?

`boolean`

defines if extends info of the mesh must be updated (can be null). This is mostly useful for "position" kind

##### makeItUnique?

`boolean`

defines if the geometry associated with the mesh must be cloned to make the change only for this mesh (and not all meshes associated with the same geometry)

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the current mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`updateVerticesData`](GreasedLineBaseMesh.md#updateverticesdata)

***

### validateSkinning()

> **validateSkinning**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2982](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2982)

ValidateSkinning is used to determine that a mesh has valid skinning data along with skin metrics, if missing weights,
or not normalized it is returned as invalid mesh the string can be used for console logs, or on screen messages to let
the user know there was an issue with importing the mesh

#### Returns

`object`

a validation object with skinned, valid and report string

##### report

> **report**: `string`

##### skinned

> **skinned**: `boolean`

##### valid

> **valid**: `boolean`

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`validateSkinning`](GreasedLineBaseMesh.md#validateskinning)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`AddNodeConstructor`](GreasedLineBaseMesh.md#addnodeconstructor)

***

### Center()

> `static` **Center**(`meshesOrMinMaxVector`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5110)

Returns the center of the `{min:` Vector3`, max:` Vector3`}` or the center of MinMax vector3 computed from a mesh array

#### Parameters

##### meshesOrMinMaxVector

[`AbstractMesh`](AbstractMesh.md)[] \| \{ `max`: [`Vector3`](Vector3.md); `min`: [`Vector3`](Vector3.md); \}

could be an array of meshes or a `{min:` Vector3`, max:` Vector3`}` object

#### Returns

[`Vector3`](Vector3.md)

a vector3

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`Center`](GreasedLineBaseMesh.md#center-1)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`Construct`](GreasedLineBaseMesh.md#construct)

***

### ~~CreateBox()~~

> `static` **CreateBox**(`_name`, `_size`, `_scene`, `_updatable?`, `_sideOrientation?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5477)

Creates a box mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_size

`number`

sets the size (float) of each box side (default 1)

##### \_scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateBox`](GreasedLineBaseMesh.md#createbox)

***

### ~~CreateCapsule()~~

> `static` **CreateCapsule**(`_name`, `_options`, `_scene`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5981](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5981)

Creates a Capsule Mesh

#### Parameters

##### \_name

`string`

defines the name of the mesh.

##### \_options

[`ICreateCapsuleOptions`](../interfaces/ICreateCapsuleOptions.md)

the constructors options used to shape the mesh.

##### \_scene

[`Scene`](Scene.md)

defines the scene the mesh is scoped to.

#### Returns

[`Mesh`](Mesh.md)

the capsule mesh

#### See

https://doc.babylonjs.com/how_to/capsule_shape

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateCapsule`](GreasedLineBaseMesh.md#createcapsule)

***

### ~~CreateCylinder()~~

> `static` **CreateCylinder**(`_name`, `_height`, `_diameterTop`, `_diameterBottom`, `_tessellation`, `_subdivisions`, `_scene?`, `_updatable?`, `_sideOrientation?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5523)

Creates a cylinder or a cone mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_height

`number`

sets the height size (float) of the cylinder/cone (float, default 2)

##### \_diameterTop

`number`

set the top cap diameter (floats, default 1)

##### \_diameterBottom

`number`

set the bottom cap diameter (floats, default 1). This value can't be zero

##### \_tessellation

`number`

sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance

##### \_subdivisions

`any`

sets the number of rings along the cylinder height (positive integer, default 1)

##### \_scene?

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`any`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateCylinder`](GreasedLineBaseMesh.md#createcylinder)

***

### ~~CreateDashedLines()~~

> `static` **CreateDashedLines**(`_name`, `_points`, `_dashSize`, `_gapSize`, `_dashNb`, `_scene`, `_updatable?`, `_instance?`): [`LinesMesh`](LinesMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5611](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5611)

Creates a dashed line mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_points

[`Vector3`](Vector3.md)[]

is an array successive Vector3

##### \_dashSize

`number`

is the size of the dashes relatively the dash number (positive float, default 3)

##### \_gapSize

`number`

is the size of the gap between two successive dashes relatively the dash number (positive float, default 1)

##### \_dashNb

`number`

is the intended total number of dashes (positive integer, default 200)

##### \_scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_instance?

[`LinesMesh`](LinesMesh.md)

is an instance of an existing LineMesh object to be updated with the passed `points` parameter (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#lines-and-dashedlines)

#### Returns

[`LinesMesh`](LinesMesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateDashedLines`](GreasedLineBaseMesh.md#createdashedlines)

***

### ~~CreateDecal()~~

> `static` **CreateDecal**(`_name`, `_sourceMesh`, `_position`, `_normal`, `_size`, `_angle`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5969](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5969)

Creates a decal mesh.
.
A decal is a mesh usually applied as a model onto the surface of another mesh

#### Parameters

##### \_name

`string`

defines the name of the mesh

##### \_sourceMesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh receiving the decal

##### \_position

[`Vector3`](Vector3.md)

sets the position of the decal in world coordinates

##### \_normal

[`Vector3`](Vector3.md)

sets the normal of the mesh where the decal is applied onto in world coordinates

##### \_size

[`Vector3`](Vector3.md)

sets the decal scaling

##### \_angle

`number`

sets the angle to rotate the decal

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateDecal`](GreasedLineBaseMesh.md#createdecal)

***

### ~~CreateDisc()~~

> `static` **CreateDisc**(`_name`, `_radius`, `_tessellation`, `_scene`, `_updatable?`, `_sideOrientation?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5463](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5463)

Creates a plane polygonal mesh.  By default, this is a disc.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_radius

`number`

sets the radius size (float) of the polygon (default 0.5)

##### \_tessellation

`number`

sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc

##### \_scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateDisc`](GreasedLineBaseMesh.md#createdisc)

***

### ~~CreateGround()~~

> `static` **CreateGround**(`_name`, `_width`, `_height`, `_subdivisions`, `_scene?`, `_updatable?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5794](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5794)

Creates a ground mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_width

`number`

set the width of the ground

##### \_height

`number`

set the height of the ground

##### \_subdivisions

`number`

sets the number of subdivisions per side

##### \_scene?

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateGround`](GreasedLineBaseMesh.md#createground)

***

### ~~CreateGroundFromHeightMap()~~

> `static` **CreateGroundFromHeightMap**(`_name`, `_url`, `_width`, `_height`, `_subdivisions`, `_minHeight`, `_maxHeight`, `_scene`, `_updatable?`, `_onReady?`, `_alphaFilter?`): [`GroundMesh`](GroundMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5843](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5843)

Creates a ground mesh from a height map.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_url

`string`

sets the URL of the height map image resource

##### \_width

`number`

set the ground width size

##### \_height

`number`

set the ground height size

##### \_subdivisions

`number`

sets the number of subdivision per side

##### \_minHeight

`number`

is the minimum altitude on the ground

##### \_maxHeight

`number`

is the maximum altitude on the ground

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_onReady?

(`mesh`) => `void`

is a callback function that will be called  once the mesh is built (the height map download can last some time)

##### \_alphaFilter?

`number`

will filter any data where the alpha channel is below this value, defaults 0 (all data visible)

#### Returns

[`GroundMesh`](GroundMesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/height_map

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateGroundFromHeightMap`](GreasedLineBaseMesh.md#creategroundfromheightmap)

***

### ~~CreateHemisphere()~~

> `static` **CreateHemisphere**(`_name`, `_segments`, `_diameter`, `_scene?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5505](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5505)

Creates a hemisphere mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_segments

`number`

sets the sphere number of horizontal stripes (positive integer, default 32)

##### \_diameter

`number`

sets the diameter size (float) of the sphere (default 1)

##### \_scene?

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateHemisphere`](GreasedLineBaseMesh.md#createhemisphere)

***

### ~~CreateIcoSphere()~~

> `static` **CreateIcoSphere**(`_name`, `_options`, `_scene`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5948](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5948)

Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
* The parameter `radius` sets the radius size (float) of the icosphere (default 1)
* You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value than `radius`)
* The parameter `subdivisions` sets the number of subdivisions (positive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
* The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
* You can also set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### \_name

`string`

defines the name of the mesh

##### \_options

defines the options used to create the mesh

###### flat?

`boolean`

###### radius?

`number`

###### sideOrientation?

`number`

###### subdivisions?

`number`

###### updatable?

`boolean`

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra#icosphere

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateIcoSphere`](GreasedLineBaseMesh.md#createicosphere)

***

### ~~CreateLathe()~~

> `static` **CreateLathe**(`_name`, `_shape`, `_radius`, `_tessellation`, `_scene`, `_updatable?`, `_sideOrientation?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5765](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5765)

Creates lathe mesh.
The lathe is a shape with a symmetry axis : a 2D model shape is rotated around this axis to design the lathe.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](Vector3.md)[]

is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero

##### \_radius

`number`

is the radius value of the lathe

##### \_tessellation

`number`

is the side number of the lathe.

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateLathe`](GreasedLineBaseMesh.md#createlathe)

***

### ~~CreateLines()~~

> `static` **CreateLines**(`_name`, `_points`, `_scene`, `_updatable`, `_instance?`): [`LinesMesh`](LinesMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5594](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5594)

Creates a line mesh..

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_points

[`Vector3`](Vector3.md)[]

is an array successive Vector3

##### \_scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

##### \_updatable

`boolean`

defines if the mesh must be flagged as updatable

##### \_instance?

[`Nullable`](../type-aliases/Nullable.md)\<[`LinesMesh`](LinesMesh.md)\>

is an instance of an existing LineMesh object to be updated with the passed `points` parameter (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#lines-and-dashedlines).

#### Returns

[`LinesMesh`](LinesMesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateLines`](GreasedLineBaseMesh.md#createlines)

***

### ~~CreatePlane()~~

> `static` **CreatePlane**(`_name`, `_size`, `_scene`, `_updatable?`, `_sideOrientation?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5779](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5779)

Creates a plane mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_size

`number`

sets the size (float) of both sides of the plane at once (default 1)

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreatePlane`](GreasedLineBaseMesh.md#createplane)

***

### ~~CreatePolygon()~~

> `static` **CreatePolygon**(`_name`, `_shape`, `_scene`, `_holes?`, `_updatable?`, `_sideOrientation?`, `_earcutInjection?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5642](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5642)

Creates a polygon mesh.Please consider using the same method from the MeshBuilder class instead
The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh.
The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors.
You can set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
Remember you can only change the shape positions, not their number when updating a polygon.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](Vector3.md)[]

is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

##### \_holes?

[`Vector3`](Vector3.md)[][]

is a required array of arrays of successive Vector3 used to defines holes in the polygon

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_earcutInjection?

`any`

can be used to inject your own earcut reference

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#non-regular-polygon

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreatePolygon`](GreasedLineBaseMesh.md#createpolygon)

***

### ~~CreatePolyhedron()~~

> `static` **CreatePolyhedron**(`_name`, `_options`, `_scene`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5913)

Creates a polyhedron mesh.
.
* The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embedded types. Please refer to the type sheet in the tutorial to choose the wanted type
* The parameter `size` (positive float, default 1) sets the polygon size
* You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value)
* You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`
* A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
* You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`)
* To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
* The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
* You can also set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_options

defines the options used to create the mesh

###### custom?

`any`

###### faceColors?

[`Color4`](Color4.md)[]

###### faceUV?

[`Vector4`](Vector4.md)[]

###### sideOrientation?

`number`

###### size?

`number`

###### sizeX?

`number`

###### sizeY?

`number`

###### sizeZ?

`number`

###### type?

`number`

###### updatable?

`boolean`

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreatePolyhedron`](GreasedLineBaseMesh.md#createpolyhedron)

***

### ~~CreateRibbon()~~

> `static` **CreateRibbon**(`_name`, `_pathArray`, `_closeArray`, `_closePath`, `_offset`, `_scene?`, `_updatable?`, `_sideOrientation?`, `_instance?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5438)

Creates a ribbon mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_pathArray

[`Vector3`](Vector3.md)[][]

is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry.

##### \_closeArray

`boolean`

creates a seam between the first and the last paths of the path array (default is false)

##### \_closePath

`boolean`

creates a seam between the first and the last points of each path of the path array

##### \_offset

`number`

is taken in account only if the `pathArray` is containing a single path

##### \_scene?

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_instance?

[`Mesh`](Mesh.md)

defines an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#ribbon)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateRibbon`](GreasedLineBaseMesh.md#createribbon)

***

### ~~CreateSphere()~~

> `static` **CreateSphere**(`_name`, `_segments`, `_diameter`, `_scene?`, `_updatable?`, `_sideOrientation?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5492)

Creates a sphere mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_segments

`number`

sets the sphere number of horizontal stripes (positive integer, default 32)

##### \_diameter

`number`

sets the diameter size (float) of the sphere (default 1)

##### \_scene?

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateSphere`](GreasedLineBaseMesh.md#createsphere)

***

### ~~CreateTiledGround()~~

> `static` **CreateTiledGround**(`_name`, `_xmin`, `_zmin`, `_xmax`, `_zmax`, `_subdivisions`, `_precision`, `_scene`, `_updatable?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5812)

Creates a tiled ground mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_xmin

`number`

set the ground minimum X coordinate

##### \_zmin

`number`

set the ground minimum Y coordinate

##### \_xmax

`number`

set the ground maximum X coordinate

##### \_zmax

`number`

set the ground maximum Z coordinate

##### \_subdivisions

is an object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile

###### h

`number`

###### w

`number`

##### \_precision

is an object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile

###### h

`number`

###### w

`number`

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateTiledGround`](GreasedLineBaseMesh.md#createtiledground)

***

### ~~CreateTorus()~~

> `static` **CreateTorus**(`_name`, `_diameter`, `_thickness`, `_tessellation`, `_scene?`, `_updatable?`, `_sideOrientation?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5550](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5550)

Creates a torus mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_diameter

`number`

sets the diameter size (float) of the torus (default 1)

##### \_thickness

`number`

sets the diameter size of the tube of the torus (float, default 0.5)

##### \_tessellation

`number`

sets the number of torus sides (positive integer, default 16)

##### \_scene?

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateTorus`](GreasedLineBaseMesh.md#createtorus)

***

### ~~CreateTorusKnot()~~

> `static` **CreateTorusKnot**(`_name`, `_radius`, `_tube`, `_radialSegments`, `_tubularSegments`, `_p`, `_q`, `_scene?`, `_updatable?`, `_sideOrientation?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5569)

Creates a torus knot mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_radius

`number`

sets the global radius size (float) of the torus knot (default 2)

##### \_tube

`number`

sets the diameter size of the tube of the torus (float, default 0.5)

##### \_radialSegments

`number`

sets the number of sides on each tube segments (positive integer, default 32)

##### \_tubularSegments

`number`

sets the number of tubes to decompose the knot into (positive integer, default 32)

##### \_p

`number`

the number of windings on X axis (positive integers, default 2)

##### \_q

`number`

the number of windings on Y axis (positive integers, default 3)

##### \_scene?

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateTorusKnot`](GreasedLineBaseMesh.md#createtorusknot)

***

### ~~CreateTube()~~

> `static` **CreateTube**(`_name`, `_path`, `_radius`, `_tessellation`, `_radiusFunction`, `_cap`, `_scene`, `_updatable?`, `_sideOrientation?`, `_instance?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5878)

Creates a tube mesh.
The tube is a parametric shape.
It has no predefined shape. Its final shape will depend on the input parameters.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_path

[`Vector3`](Vector3.md)[]

is a required array of successive Vector3. It is the curve used as the axis of the tube

##### \_radius

`number`

sets the tube radius size

##### \_tessellation

`number`

is the number of sides on the tubular surface

##### \_radiusFunction

(`i`, `distance`) => `number`

is a custom function. If it is not null, it overrides the parameter `radius`. This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path

##### \_cap

`number`

sets the way the extruded shape is capped. Possible values : Mesh.NO_CAP (default), Mesh.CAP_START, Mesh.CAP_END, Mesh.CAP_ALL

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_instance?

[`Mesh`](Mesh.md)

is an instance of an existing Tube object to be updated with the passed `pathArray` parameter (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#tube)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`CreateTube`](GreasedLineBaseMesh.md#createtube)

***

### ~~ExtendToGoldberg()~~

> `static` **ExtendToGoldberg**(`_mesh`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5992](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5992)

Extends a mesh to a Goldberg mesh
Warning  the mesh to convert MUST be an import of a perviously exported Goldberg mesh

#### Parameters

##### \_mesh

[`Mesh`](Mesh.md)

the mesh to convert

#### Returns

[`Mesh`](Mesh.md)

the extended mesh

#### Deprecated

Please use ExtendMeshToGoldberg instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ExtendToGoldberg`](GreasedLineBaseMesh.md#extendtogoldberg)

***

### ~~ExtrudePolygon()~~

> `static` **ExtrudePolygon**(`_name`, `_shape`, `_depth`, `_scene`, `_holes?`, `_updatable?`, `_sideOrientation?`, `_earcutInjection?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5668](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5668)

Creates an extruded polygon mesh, with depth in the Y direction..

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](Vector3.md)[]

is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors

##### \_depth

`number`

defines the height of extrusion

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

##### \_holes?

[`Vector3`](Vector3.md)[][]

is a required array of arrays of successive Vector3 used to defines holes in the polygon

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_earcutInjection?

`any`

can be used to inject your own earcut reference

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-non-regular-polygon

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ExtrudePolygon`](GreasedLineBaseMesh.md#extrudepolygon)

***

### ~~ExtrudeShape()~~

> `static` **ExtrudeShape**(`_name`, `_shape`, `_path`, `_scale`, `_rotation`, `_cap`, `_scene`, `_updatable?`, `_sideOrientation?`, `_instance?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5699](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5699)

Creates an extruded shape mesh.
The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](Vector3.md)[]

is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis

##### \_path

[`Vector3`](Vector3.md)[]

is a required array of successive Vector3. This is the axis curve the shape is extruded along

##### \_scale

`number`

is the value to scale the shape

##### \_rotation

`number`

is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve

##### \_cap

`number`

sets the way the extruded shape is capped. Possible values : Mesh.NO_CAP (default), Mesh.CAP_START, Mesh.CAP_END, Mesh.CAP_ALL

##### \_scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_instance?

[`Mesh`](Mesh.md)

is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#extruded-shape)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-shapes

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ExtrudeShape`](GreasedLineBaseMesh.md#extrudeshape)

***

### ~~ExtrudeShapeCustom()~~

> `static` **ExtrudeShapeCustom**(`_name`, `_shape`, `_path`, `_scaleFunction`, `_rotationFunction`, `_ribbonCloseArray`, `_ribbonClosePath`, `_cap`, `_scene`, `_updatable?`, `_sideOrientation?`, `_instance?`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5735)

Creates an custom extruded shape mesh.
The custom extrusion is a parametric shape.
It has no predefined shape. Its final shape will depend on the input parameters.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](Vector3.md)[]

is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis

##### \_path

[`Vector3`](Vector3.md)[]

is a required array of successive Vector3. This is the axis curve the shape is extruded along

##### \_scaleFunction

[`Nullable`](../type-aliases/Nullable.md)\<(`i`, `distance`) => `number`\>

is a custom Javascript function called on each path point

##### \_rotationFunction

[`Nullable`](../type-aliases/Nullable.md)\<(`i`, `distance`) => `number`\>

is a custom Javascript function called on each path point

##### \_ribbonCloseArray

`boolean`

forces the extrusion underlying ribbon to close all the paths in its `pathArray`

##### \_ribbonClosePath

`boolean`

forces the extrusion underlying ribbon to close its `pathArray`

##### \_cap

`number`

sets the way the extruded shape is capped. Possible values : Mesh.NO_CAP (default), Mesh.CAP_START, Mesh.CAP_END, Mesh.CAP_ALL

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_instance?

[`Mesh`](Mesh.md)

is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters (https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#extruded-shape)

#### Returns

[`Mesh`](Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-shapes

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ExtrudeShapeCustom`](GreasedLineBaseMesh.md#extrudeshapecustom)

***

### MergeMeshes()

> `static` **MergeMeshes**(`meshes`, `disposeSource?`, `allow32BitsIndices?`, `meshSubclass?`, `subdivideWithSubMeshes?`, `multiMultiMaterials?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5125)

Merge the array of meshes into a single mesh for performance reasons.

#### Parameters

##### meshes

[`Mesh`](Mesh.md)[]

array of meshes with the vertices to merge. Entries cannot be empty meshes.

##### disposeSource?

`boolean` = `true`

when true (default), dispose of the vertices from the source meshes.

##### allow32BitsIndices?

`boolean`

when the sum of the vertices \> 64k, this must be set to true.

##### meshSubclass?

[`Mesh`](Mesh.md)

(optional) can be set to a Mesh where the merged vertices will be inserted.

##### subdivideWithSubMeshes?

`boolean`

when true (false default), subdivide mesh into subMeshes.

##### multiMultiMaterials?

`boolean`

when true (false default), subdivide mesh into subMeshes with multiple materials, ignores subdivideWithSubMeshes.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

a new mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`MergeMeshes`](GreasedLineBaseMesh.md#mergemeshes)

***

### MergeMeshesAsync()

> `static` **MergeMeshesAsync**(`meshes`, `disposeSource?`, `allow32BitsIndices?`, `meshSubclass?`, `subdivideWithSubMeshes?`, `multiMultiMaterials?`): `Promise`\<`any`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5146)

Merge the array of meshes into a single mesh for performance reasons.

#### Parameters

##### meshes

[`Mesh`](Mesh.md)[]

array of meshes with the vertices to merge. Entries cannot be empty meshes.

##### disposeSource?

`boolean` = `true`

when true (default), dispose of the vertices from the source meshes.

##### allow32BitsIndices?

`boolean`

when the sum of the vertices \> 64k, this must be set to true.

##### meshSubclass?

[`Mesh`](Mesh.md)

(optional) can be set to a Mesh where the merged vertices will be inserted.

##### subdivideWithSubMeshes?

`boolean`

when true (false default), subdivide mesh into subMeshes.

##### multiMultiMaterials?

`boolean`

when true (false default), subdivide mesh into subMeshes with multiple materials, ignores subdivideWithSubMeshes.

#### Returns

`Promise`\<`any`\>

a new mesh

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`MergeMeshesAsync`](GreasedLineBaseMesh.md#mergemeshesasync)

***

### MinMax()

> `static` **MinMax**(`meshes`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5075](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5075)

Returns an object containing a min and max Vector3 which are the minimum and maximum vectors of each mesh bounding box from the passed array, in the world coordinates

#### Parameters

##### meshes

[`AbstractMesh`](AbstractMesh.md)[]

defines the list of meshes to scan

#### Returns

`object`

an object `{min:` Vector3`, max:` Vector3`}`

##### max

> **max**: [`Vector3`](Vector3.md)

##### min

> **min**: [`Vector3`](Vector3.md)

#### Inherited from

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`MinMax`](GreasedLineBaseMesh.md#minmax)

***

### Parse()

> `static` **Parse**(`parsedMesh`, `scene`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts:485](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GreasedLine/greasedLineRibbonMesh.pure.ts#L485)

Parses a serialized GreasedLineRibbonMesh

#### Parameters

##### parsedMesh

`any`

the serialized GreasedLineRibbonMesh

##### scene

[`Scene`](Scene.md)

the scene to create the GreasedLineRibbonMesh in

#### Returns

[`Mesh`](Mesh.md)

the created GreasedLineRibbonMesh

#### Overrides

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`Parse`](GreasedLineBaseMesh.md#parse)

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

[`GreasedLineBaseMesh`](GreasedLineBaseMesh.md).[`ParseAnimationRanges`](GreasedLineBaseMesh.md#parseanimationranges)
