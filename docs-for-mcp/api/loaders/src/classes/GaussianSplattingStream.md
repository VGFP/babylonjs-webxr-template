[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GaussianSplattingStream

# Class: GaussianSplattingStream

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L178)

**`Experimental`**

Streams a PlayCanvas-style SOG LOD scene (`lod-meta.json`) into a single Gaussian Splatting mesh.

Each selected SOG file (plus the environment) is loaded directly as GPU textures and decoded on the
GPU into one unified, PlayCanvas-style square work buffer (no CPU splat decode or `updateData`). Only
the splats of each node's currently-selected LOD are rendered/sorted via the mesh's interval filter.

The coarsest (least-detail) LOD of every node is streamed first as a permanent base layer so the whole
scene is visible quickly with no holes. A distance-based "optimal" LOD is then computed per node (see
[evaluateOptimalLods](#evaluateoptimallods)); finer LOD source files are streamed on demand and a node only switches to
a finer LOD once that file is decoded, so transitions never flash or leave gaps.

## Extends

- [`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md)

## Constructors

### Constructor

> **new GaussianSplattingStream**(`name`, `metadata`, `rootUrl`, `scene`, `options?`): `GaussianSplattingStream`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L287)

**`Experimental`**

Creates a new SOG LOD streaming mesh and immediately starts streaming (non-blocking).

#### Parameters

##### name

`string`

mesh name

##### metadata

[`ISOGLODMetadata`](../interfaces/ISOGLODMetadata.md)

parsed `lod-meta.json`

##### rootUrl

`string`

base URL the metadata's relative paths resolve against

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

hosting scene

##### options?

[`IGaussianSplattingStreamOptions`](../interfaces/IGaussianSplattingStreamOptions.md) = `{}`

streaming options

#### Returns

`GaussianSplattingStream`

#### Overrides

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`constructor`](../../../core/src/classes/GaussianSplattingMesh.md#constructor)

## Properties

### actionManager

> **actionManager**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractActionManager`](../../../core/src/classes/AbstractActionManager.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:938](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L938)

**`Experimental`**

Gets or sets the current action manager

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`actionManager`](../../../core/src/classes/GaussianSplattingMesh.md#actionmanager)

***

### alphaIndex

> **alphaIndex**: `number` = `Number.MAX_VALUE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:669](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L669)

**`Experimental`**

Gets or sets the alpha index used to sort transparent meshes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#alpha-index

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`alphaIndex`](../../../core/src/classes/GaussianSplattingMesh.md#alphaindex)

***

### alwaysSelectAsActiveMesh

> **alwaysSelectAsActiveMesh**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:927](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L927)

**`Experimental`**

True if the mesh must be rendered in any case (this will shortcut the frustum clipping phase)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`alwaysSelectAsActiveMesh`](../../../core/src/classes/GaussianSplattingMesh.md#alwaysselectasactivemesh)

***

### animations

> **animations**: [`Animation`](../../../core/src/classes/Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L173)

**`Experimental`**

Gets a list of Animations associated with the node

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`animations`](../../../core/src/classes/GaussianSplattingMesh.md#animations)

***

### cullingStrategy

> **cullingStrategy**: `number` = `AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:465](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L465)

**`Experimental`**

The culling strategy to use to check whether the mesh must be rendered or not.
This value can be changed at any time and will be used on the next render mesh selection.
The possible values are :
- AbstractMesh.CULLINGSTRATEGY_STANDARD
- AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
- AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION
- AbstractMesh.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY
Please read each static variable documentation to get details about the culling process.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`cullingStrategy`](../../../core/src/classes/GaussianSplattingMesh.md#cullingstrategy)

***

### customMarkAsDirty

> **customMarkAsDirty**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L264)

**`Experimental`**

Allow user to specify custom mechanism for mark as dirty

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`customMarkAsDirty`](../../../core/src/classes/GaussianSplattingMesh.md#custommarkasdirty)

***

### decalMap

> **decalMap**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`MeshUVSpaceRenderer`](../../../core/src/classes/MeshUVSpaceRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.decalMap.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.decalMap.types.ts#L13)

**`Experimental`**

Gets or sets the decal map for this mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`decalMap`](../../../core/src/classes/GaussianSplattingMesh.md#decalmap)

***

### definedFacingForward

> **definedFacingForward**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L631)

**`Experimental`**

Gets or sets the orientation for POV movement & rotation

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`definedFacingForward`](../../../core/src/classes/GaussianSplattingMesh.md#definedfacingforward)

***

### delayLoadingFile

> **delayLoadingFile**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L507)

**`Experimental`**

Gets the file containing delay loading data for this mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`delayLoadingFile`](../../../core/src/classes/GaussianSplattingMesh.md#delayloadingfile)

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:494](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L494)

**`Experimental`**

Gets the delay loading state of the mesh (when delay loading is turned on)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/incrementalLoading

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`delayLoadState`](../../../core/src/classes/GaussianSplattingMesh.md#delayloadstate)

***

### doNotSyncBoundingInfo

> **doNotSyncBoundingInfo**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:932](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L932)

**`Experimental`**

Gets or sets a boolean indicating that the bounding info does not need to be kept in sync (for performance reason)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`doNotSyncBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#donotsyncboundinginfo)

***

### edgesColor

> **edgesColor**: [`Color4`](../../../core/src/classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1015](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1015)

**`Experimental`**

Defines edge color used when edgesRenderer is enabled

#### See

https://www.babylonjs-playground.com/#10OJSG#13

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`edgesColor`](../../../core/src/classes/GaussianSplattingMesh.md#edgescolor)

***

### edgesRenderer

> **edgesRenderer**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`EdgesRenderer`](../../../core/src/classes/EdgesRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/edgesRenderer.types.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/edgesRenderer.types.ts#L18)

**`Experimental`**

Gets the edgesRenderer associated with the mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`edgesRenderer`](../../../core/src/classes/GaussianSplattingMesh.md#edgesrenderer)

***

### edgesShareWithInstances

> **edgesShareWithInstances**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L23)

**`Experimental`**

true to use the edge renderer for all instances of this mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`edgesShareWithInstances`](../../../core/src/classes/GaussianSplattingMesh.md#edgessharewithinstances)

***

### edgesWidth

> **edgesWidth**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1010](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1010)

**`Experimental`**

Defines edge width used when edgesRenderer is enabled

#### See

https://www.babylonjs-playground.com/#10OJSG#13

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`edgesWidth`](../../../core/src/classes/GaussianSplattingMesh.md#edgeswidth)

***

### ellipsoid

> **ellipsoid**: [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:944](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L944)

**`Experimental`**

Gets or sets the ellipsoid used to impersonate this mesh when using collision engine (default is (0.5, 1, 0.5))

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ellipsoid`](../../../core/src/classes/GaussianSplattingMesh.md#ellipsoid)

***

### ellipsoidOffset

> **ellipsoidOffset**: [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:949](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L949)

**`Experimental`**

Gets or sets the ellipsoid offset used to impersonate this mesh when using collision engine (default is (0, 0, 0))

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ellipsoidOffset`](../../../core/src/classes/GaussianSplattingMesh.md#ellipsoidoffset)

***

### enablePointerMoveEvents

> **enablePointerMoveEvents**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L701)

**`Experimental`**

Gets or sets a boolean indicating that pointer move events must be supported on this mesh (false by default)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`enablePointerMoveEvents`](../../../core/src/classes/GaussianSplattingMesh.md#enablepointermoveevents)

***

### forceRenderingWhenOccluded

> **forceRenderingWhenOccluded**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L101)

**`Experimental`**

Flag to force rendering the mesh even if occluded

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`forceRenderingWhenOccluded`](../../../core/src/classes/GaussianSplattingMesh.md#forcerenderingwhenoccluded)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L95)

**`Experimental`**

Gets or sets the id of the node

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`id`](../../../core/src/classes/GaussianSplattingMesh.md#id)

***

### ignoreCameraMaxZ

> **ignoreCameraMaxZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L623)

**`Experimental`**

Gets or sets a boolean indicating whether to render ignoring the active camera's max z setting. (false by default)
You should not mix meshes that have this property set to true with meshes that have it set to false if they all write
to the depth buffer, because the z-values are not comparable in the two cases and you will get rendering artifacts if you do.
You can set the property to true for meshes that do not write to the depth buffer, or set the same value (either false or true) otherwise.
Note this will reduce performance when set to true.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ignoreCameraMaxZ`](../../../core/src/classes/GaussianSplattingMesh.md#ignorecameramaxz)

***

### ignoreNonUniformScaling

> **ignoreNonUniformScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L134)

**`Experimental`**

Gets or sets a boolean indicating that non uniform scaling (when at least one component is different from others) should be ignored.
By default the system will update normals to compensate

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ignoreNonUniformScaling`](../../../core/src/classes/GaussianSplattingMesh.md#ignorenonuniformscaling)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../../../core/src/interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L127)

**`Experimental`**

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`inspectableCustomProperties`](../../../core/src/classes/GaussianSplattingMesh.md#inspectablecustomproperties)

***

### instancedBuffers

> **instancedBuffers**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L52)

**`Experimental`**

Object used to store instanced buffers defined by user

#### Index Signature

\[`key`: `string`\]: `any`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances#custom-buffers

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`instancedBuffers`](../../../core/src/classes/GaussianSplattingMesh.md#instancedbuffers)

***

### instances

> **instances**: [`InstancedMesh`](../../../core/src/classes/InstancedMesh.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:502](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L502)

**`Experimental`**

Gets the list of instances created from this mesh
it is not supposed to be modified manually.
Note also that the order of the InstancedMesh wihin the array is not significant and might change.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`instances`](../../../core/src/classes/GaussianSplattingMesh.md#instances)

***

### isBlocker

> **isBlocker**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L696)

**`Experimental`**

Gets or sets a boolean indicating if the mesh must be considered as a ray blocker for lens flares (false by default)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isBlocker`](../../../core/src/classes/GaussianSplattingMesh.md#isblocker)

***

### isNearGrabbable

> **isNearGrabbable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L688)

**`Experimental`**

Gets or sets a boolean indicating if the mesh can be grabbed. Default is false.
Setting this to true, while using the XR near interaction feature, will trigger a pointer event when the mesh is grabbed.
Grabbing means that the controller is using the squeeze or main trigger button to grab the mesh.
This is different from nearPickable which only triggers the event when the mesh is touched by the controller

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isNearGrabbable`](../../../core/src/classes/GaussianSplattingMesh.md#isneargrabbable)

***

### isNearPickable

> **isNearPickable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L680)

**`Experimental`**

Gets or sets a boolean indicating if the mesh can be near picked (touched by the XR controller or hands). Default is false

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isNearPickable`](../../../core/src/classes/GaussianSplattingMesh.md#isnearpickable)

***

### isOccluded

> **isOccluded**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L89)

**`Experimental`**

Gets or sets whether the mesh is occluded or not, it is used also to set the initial state of the mesh to be occluded or not

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isOccluded`](../../../core/src/classes/GaussianSplattingMesh.md#isoccluded)

***

### isOcclusionQueryInProgress

> **isOcclusionQueryInProgress**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L95)

**`Experimental`**

Flag to check the progress status of the query

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isOcclusionQueryInProgress`](../../../core/src/classes/GaussianSplattingMesh.md#isocclusionqueryinprogress)

***

### isPickable

> **isPickable**: `boolean` = `AbstractMesh.DefaultIsPickable`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L675)

**`Experimental`**

Gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions).
Default value is determined by [AbstractMesh.DefaultIsPickable](../../../core/src/classes/AbstractMesh.md#defaultispickable) (true unless changed).

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isPickable`](../../../core/src/classes/GaussianSplattingMesh.md#ispickable)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L113)

**`Experimental`**

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`metadata`](../../../core/src/classes/GaussianSplattingMesh.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L89)

**`Experimental`**

Gets or sets the name of the node

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`name`](../../../core/src/classes/GaussianSplattingMesh.md#name)

***

### occlusionForRenderPassId

> **occlusionForRenderPassId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L107)

**`Experimental`**

This number indicates the render pass id used to run the occlusion query. The default value is -1, which means run the occlusion query in all render passes.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`occlusionForRenderPassId`](../../../core/src/classes/GaussianSplattingMesh.md#occlusionforrenderpassid)

***

### occlusionQueryAlgorithmType

> **occlusionQueryAlgorithmType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L83)

**`Experimental`**

This property determines the type of occlusion query algorithm to run in WebGl, you can use:
* AbstractMesh.OCCLUSION_ALGORITHM_TYPE_ACCURATE which is mapped to GL_ANY_SAMPLES_PASSED.
* AbstractMesh.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE (Default Value) which is mapped to GL_ANY_SAMPLES_PASSED_CONSERVATIVE which is a false positive algorithm that is faster than GL_ANY_SAMPLES_PASSED but less accurate.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`occlusionQueryAlgorithmType`](../../../core/src/classes/GaussianSplattingMesh.md#occlusionqueryalgorithmtype)

***

### occlusionRetryCount

> **occlusionRetryCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L66)

**`Experimental`**

This number indicates the number of allowed retries before stop the occlusion query, this is useful if the occlusion query is taking long time before to the query result is retrieved, the query result indicates if the object is visible within the scene or not and based on that Babylon.Js engine decides to show or hide the object.
The default value is -1 which means don't break the query and wait till the result

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`occlusionRetryCount`](../../../core/src/classes/GaussianSplattingMesh.md#occlusionretrycount)

***

### occlusionType

> **occlusionType**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.query.types.ts#L75)

**`Experimental`**

This property is responsible for starting the occlusion query within the Mesh or not, this property is also used to determine what should happen when the occlusionRetryCount is reached. It has supports 3 values:
* OCCLUSION_TYPE_NONE (Default Value): this option means no occlusion query within the Mesh.
* OCCLUSION_TYPE_OPTIMISTIC: this option is means use occlusion query and if occlusionRetryCount is reached and the query is broken show the mesh.
* OCCLUSION_TYPE_STRICT: this option is means use occlusion query and if occlusionRetryCount is reached and the query is broken restore the last state of the mesh occlusion if the mesh was visible then show the mesh if was hidden then hide don't show.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/occlusionQueries

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`occlusionType`](../../../core/src/classes/GaussianSplattingMesh.md#occlusiontype)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L146)

**`Experimental`**

Observable fired when an accessibility tag is changed

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onAccessibilityTagChangedObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onaccessibilitytagchangedobservable)

***

### onAfterWorldMatrixUpdateObservable

> **onAfterWorldMatrixUpdateObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L172)

**`Experimental`**

An event triggered after the world matrix is updated

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onAfterWorldMatrixUpdateObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onafterworldmatrixupdateobservable)

***

### onCollideObservable

> **onCollideObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L598)

**`Experimental`**

An event triggered when this mesh collides with another one

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onCollideObservable`](../../../core/src/classes/GaussianSplattingMesh.md#oncollideobservable)

***

### onCollisionPositionChangeObservable

> **onCollisionPositionChangeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:611](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L611)

**`Experimental`**

An event triggered when the collision's position changes

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onCollisionPositionChangeObservable`](../../../core/src/classes/GaussianSplattingMesh.md#oncollisionpositionchangeobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L350)

**`Experimental`**

An event triggered when the mesh is disposed

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onDisposeObservable`](../../../core/src/classes/GaussianSplattingMesh.md#ondisposeobservable)

***

### onLODLevelSelection

> **onLODLevelSelection**: (`distance`, `mesh`, `selectedLevel`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L516)

**`Experimental`**

User defined function used to change how LOD level selection is done

#### Parameters

##### distance

`number`

##### mesh

[`Mesh`](../../../core/src/classes/Mesh.md)

##### selectedLevel

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onLODLevelSelection`](../../../core/src/classes/GaussianSplattingMesh.md#onlodlevelselection)

***

### onMaterialChangedObservable

> **onMaterialChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:624](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L624)

**`Experimental`**

An event triggered when material is changed

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onMaterialChangedObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onmaterialchangedobservable)

***

### onMeshReadyObservable

> **onMeshReadyObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L384)

**`Experimental`**

Will notify when the mesh is completely ready, including materials.
Observers added to this observable will be removed once triggered

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onMeshReadyObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onmeshreadyobservable)

***

### onPartCountChangedObservable

> `readonly` **onPartCountChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L558)

**`Experimental`**

Fired after parts are added or the mesh is rebuilt following a removal. Payload is the new part count.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onPartCountChangedObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onpartcountchangedobservable)

***

### onPartRemovedObservable

> `readonly` **onPartRemovedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L562)

**`Experimental`**

Fired after part-removal validation passes but before the mesh is rebuilt.
 Payload is the original (pre-removal) part index.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onPartRemovedObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onpartremovedobservable)

***

### onReady

> **onReady**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L179)

**`Experimental`**

Callback raised when the node is ready to be used

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onReady`](../../../core/src/classes/GaussianSplattingMesh.md#onready)

***

### onRebuildObservable

> **onRebuildObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1097](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1097)

**`Experimental`**

An event triggered when the mesh is rebuilt.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onRebuildObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onrebuildobservable)

***

### outlineColor

> **outlineColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L812)

**`Experimental`**

Defines color to use when rendering outline

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`outlineColor`](../../../core/src/classes/GaussianSplattingMesh.md#outlinecolor)

***

### outlineWidth

> **outlineWidth**: `number` = `0.02`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L814)

**`Experimental`**

Define width to use when rendering outline

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`outlineWidth`](../../../core/src/classes/GaussianSplattingMesh.md#outlinewidth)

***

### overlayAlpha

> **overlayAlpha**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L819)

**`Experimental`**

Defines alpha to use when rendering overlay

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`overlayAlpha`](../../../core/src/classes/GaussianSplattingMesh.md#overlayalpha)

***

### overlayColor

> **overlayColor**: [`Color3`](../../../core/src/classes/Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:817](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L817)

**`Experimental`**

Defines color to use when rendering overlay

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`overlayColor`](../../../core/src/classes/GaussianSplattingMesh.md#overlaycolor)

***

### physicsBody

> **physicsBody**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`PhysicsBody`](../../../core/src/classes/PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L15)

**`Experimental`**

Gets or sets the physics body associated with this node.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`physicsBody`](../../../core/src/classes/GaussianSplattingMesh.md#physicsbody)

***

### physicsImpostor

> **physicsImpostor**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`PhysicsImpostor`](../../../core/src/classes/PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L17)

**`Experimental`**

Gets or sets impostor used for physic simulation

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`physicsImpostor`](../../../core/src/classes/GaussianSplattingMesh.md#physicsimpostor)

***

### reIntegrateRotationIntoRotationQuaternion

> **reIntegrateRotationIntoRotationQuaternion**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L140)

**`Experimental`**

Gets or sets a boolean indicating that even if rotationQuaternion is defined, you can keep updating rotation property and Babylon.js will just mix both

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`reIntegrateRotationIntoRotationQuaternion`](../../../core/src/classes/GaussianSplattingMesh.md#reintegraterotationintorotationquaternion)

***

### renderOutline

> **renderOutline**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.types.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.types.ts#L24)

**`Experimental`**

Gets or sets a boolean indicating if the outline must be rendered as well

#### See

https://www.babylonjs-playground.com/#10WJ5S#3

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`renderOutline`](../../../core/src/classes/GaussianSplattingMesh.md#renderoutline)

***

### renderOverlay

> **renderOverlay**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.types.ts#L32)

**`Experimental`**

Gets or sets a boolean indicating if the overlay must be rendered as well

#### See

https://www.babylonjs-playground.com/#10WJ5S#2

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`renderOverlay`](../../../core/src/classes/GaussianSplattingMesh.md#renderoverlay)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L121)

**`Experimental`**

For internal use only. Please do not use.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`reservedDataStore`](../../../core/src/classes/GaussianSplattingMesh.md#reserveddatastore)

***

### scalingDeterminant

> **scalingDeterminant**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L109)

**`Experimental`**

Multiplication factor on scale x/y/z when computing the world matrix. Eg. for a 1x1x1 cube setting this to 2 will make it a 2x2x2 cube

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`scalingDeterminant`](../../../core/src/classes/GaussianSplattingMesh.md#scalingdeterminant)

***

### showBoundingBox

> **showBoundingBox**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/boundingBoxRenderer.types.ts#L32)

**`Experimental`**

Gets or sets a boolean indicating if the bounding box must be rendered as well (false by default)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`showBoundingBox`](../../../core/src/classes/GaussianSplattingMesh.md#showboundingbox)

***

### showSubMeshesBoundingBox

> **showSubMeshesBoundingBox**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L691)

**`Experimental`**

Gets or sets a boolean indicating that bounding boxes of subMeshes must be rendered as well (false by default)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`showSubMeshesBoundingBox`](../../../core/src/classes/GaussianSplattingMesh.md#showsubmeshesboundingbox)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L107)

**`Experimental`**

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`state`](../../../core/src/classes/GaussianSplattingMesh.md#state)

***

### subMeshes

> **subMeshes**: [`SubMesh`](../../../core/src/classes/SubMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1030](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1030)

**`Experimental`**

Gets or sets the list of subMeshes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`subMeshes`](../../../core/src/classes/GaussianSplattingMesh.md#submeshes)

***

### thinInstanceAllowAutomaticStaticBufferRecreation

> **thinInstanceAllowAutomaticStaticBufferRecreation**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L19)

**`Experimental`**

Indicates that a buffer created as static should be recreated if the buffer is updated (by calling thinInstanceSetMatrixAt or thinInstanceSetAttributeAt, for eg.)
If this flag is false (the default behavior), a buffer created as "static" won't show any update done to it, and will stay the same as it was created.
Note however that recreating a buffer each time there's a change will have some performance cost, that's why it is set to false by default.
You should set this flag to true only if your static buffers should change infrequently. If they change frequently, you should create your buffers as "dynamic" instead.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceAllowAutomaticStaticBufferRecreation`](../../../core/src/classes/GaussianSplattingMesh.md#thininstanceallowautomaticstaticbufferrecreation)

***

### thinInstanceCount

> **thinInstanceCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L63)

**`Experimental`**

Gets / sets the number of thin instances to display. Note that you can't set a number higher than what the underlying buffer can handle.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceCount`](../../../core/src/classes/GaussianSplattingMesh.md#thininstancecount)

***

### thinInstanceEnablePicking

> **thinInstanceEnablePicking**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L11)

**`Experimental`**

Gets or sets a boolean defining if we want picking to pick thin instances as well

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceEnablePicking`](../../../core/src/classes/GaussianSplattingMesh.md#thininstanceenablepicking)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L101)

**`Experimental`**

Gets or sets the unique id of the node

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`uniqueId`](../../../core/src/classes/GaussianSplattingMesh.md#uniqueid)

***

### useOctreeForCollisions

> **useOctreeForCollisions**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:906](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L906)

**`Experimental`**

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes collision (true by default)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`useOctreeForCollisions`](../../../core/src/classes/GaussianSplattingMesh.md#useoctreeforcollisions)

***

### useOctreeForPicking

> **useOctreeForPicking**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L904)

**`Experimental`**

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes picking (true by default)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`useOctreeForPicking`](../../../core/src/classes/GaussianSplattingMesh.md#useoctreeforpicking)

***

### useOctreeForRenderingSelection

> **useOctreeForRenderingSelection**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L902)

**`Experimental`**

Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes selection (true by default)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`useOctreeForRenderingSelection`](../../../core/src/classes/GaussianSplattingMesh.md#useoctreeforrenderingselection)

***

### viewUpdateThreshold

> **viewUpdateThreshold**: `number` = `GaussianSplattingMeshBase._DefaultViewUpdateThreshold`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:628](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L628)

**`Experimental`**

Cosine value of the angle threshold to update view dependent splat sorting. Default is 0.0001.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`viewUpdateThreshold`](../../../core/src/classes/GaussianSplattingMesh.md#viewupdatethreshold)

***

### BACKSIDE

> `readonly` `static` **BACKSIDE**: `1` = `VertexData.BACKSIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L276)

**`Experimental`**

Mesh side orientation : usually the internal or back surface

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BACKSIDE`](../../../core/src/classes/GaussianSplattingMesh.md#backside)

***

### BillboardUseParentOrientation

> `static` **BillboardUseParentOrientation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L50)

**`Experimental`**

Child transform with Billboard flags should or should not apply parent rotation (default if off)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BillboardUseParentOrientation`](../../../core/src/classes/GaussianSplattingMesh.md#billboarduseparentorientation)

***

### BOTTOM

> `readonly` `static` **BOTTOM**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L348)

**`Experimental`**

Mesh tile positioning : part tiles on bottom

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BOTTOM`](../../../core/src/classes/GaussianSplattingMesh.md#bottom)

***

### CAP\_ALL

> `readonly` `static` **CAP\_ALL**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L300)

**`Experimental`**

Mesh cap setting : two caps, one at the beginning  and one at the end of the mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CAP_ALL`](../../../core/src/classes/GaussianSplattingMesh.md#cap_all)

***

### CAP\_END

> `readonly` `static` **CAP\_END**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L296)

**`Experimental`**

Mesh cap setting : one cap at the end of the mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CAP_END`](../../../core/src/classes/GaussianSplattingMesh.md#cap_end)

***

### CAP\_START

> `readonly` `static` **CAP\_START**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L292)

**`Experimental`**

Mesh cap setting : one cap at the beginning of the mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CAP_START`](../../../core/src/classes/GaussianSplattingMesh.md#cap_start)

***

### CENTER

> `readonly` `static` **CENTER**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L332)

**`Experimental`**

Mesh tile positioning : part tiles same on left/right or top/bottom

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CENTER`](../../../core/src/classes/GaussianSplattingMesh.md#center)

***

### CULLINGSTRATEGY\_BOUNDINGSPHERE\_ONLY

> `readonly` `static` **CULLINGSTRATEGY\_BOUNDINGSPHERE\_ONLY**: `1` = `Constants.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L378)

**`Experimental`**

Culling strategy : Bounding Sphere Only.
 This is an exclusion test. It's faster than the standard strategy because the bounding box is not tested.
 It's also less accurate than the standard because some not visible objects can still be selected.
 Test : is the bounding sphere outside the frustum ?
 If not, then the cullable object is in the frustum.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`](../../../core/src/classes/GaussianSplattingMesh.md#cullingstrategy_boundingsphere_only)

***

### CULLINGSTRATEGY\_OPTIMISTIC\_INCLUSION

> `readonly` `static` **CULLINGSTRATEGY\_OPTIMISTIC\_INCLUSION**: `2` = `Constants.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L388)

**`Experimental`**

Culling strategy : Optimistic Inclusion.
 This in an inclusion test first, then the standard exclusion test.
 This can be faster when a cullable object is expected to be almost always in the camera frustum.
 This could also be a little slower than the standard test when the tested object center is not the frustum but one of its bounding box vertex is still inside.
 Anyway, it's as accurate as the standard strategy.
 Test :
 Is the cullable object bounding sphere center in the frustum ?
 If not, apply the default culling strategy.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CULLINGSTRATEGY_OPTIMISTIC_INCLUSION`](../../../core/src/classes/GaussianSplattingMesh.md#cullingstrategy_optimistic_inclusion)

***

### CULLINGSTRATEGY\_OPTIMISTIC\_INCLUSION\_THEN\_BSPHERE\_ONLY

> `readonly` `static` **CULLINGSTRATEGY\_OPTIMISTIC\_INCLUSION\_THEN\_BSPHERE\_ONLY**: `3` = `Constants.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L398)

**`Experimental`**

Culling strategy : Optimistic Inclusion then Bounding Sphere Only.
 This in an inclusion test first, then the bounding sphere only exclusion test.
 This can be the fastest test when a cullable object is expected to be almost always in the camera frustum.
 This could also be a little slower than the BoundingSphereOnly strategy when the tested object center is not in the frustum but its bounding sphere still intersects it.
 It's less accurate than the standard strategy and as accurate as the BoundingSphereOnly strategy.
 Test :
 Is the cullable object bounding sphere center in the frustum ?
 If not, apply the Bounding Sphere Only strategy. No Bounding Box is tested here.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY`](../../../core/src/classes/GaussianSplattingMesh.md#cullingstrategy_optimistic_inclusion_then_bsphere_only)

***

### CULLINGSTRATEGY\_STANDARD

> `readonly` `static` **CULLINGSTRATEGY\_STANDARD**: `0` = `Constants.MESHES_CULLINGSTRATEGY_STANDARD`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L371)

**`Experimental`**

Default culling strategy : this is an exclusion test and it's the more accurate.
 Test order :
 Is the bounding sphere outside the frustum ?
 If not, are the bounding box vertices outside the frustum ?
 It not, then the cullable object is in the frustum.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CULLINGSTRATEGY_STANDARD`](../../../core/src/classes/GaussianSplattingMesh.md#cullingstrategy_standard)

***

### DefaultIsPickable

> `static` **DefaultIsPickable**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:437](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L437)

**`Experimental`**

Gets or sets the default value for isPickable for newly created meshes.
When set to false, all meshes created after the change will not be pickable by default.
Individual meshes can still override this by setting their own isPickable property.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`DefaultIsPickable`](../../../core/src/classes/GaussianSplattingMesh.md#defaultispickable)

***

### DEFAULTSIDE

> `readonly` `static` **DEFAULTSIDE**: `0` = `VertexData.DEFAULTSIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L284)

**`Experimental`**

Mesh side orientation : by default, `FRONTSIDE`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`DEFAULTSIDE`](../../../core/src/classes/GaussianSplattingMesh.md#defaultside)

***

### DOUBLESIDE

> `readonly` `static` **DOUBLESIDE**: `2` = `VertexData.DOUBLESIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L280)

**`Experimental`**

Mesh side orientation : both internal and external or front and back surfaces

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`DOUBLESIDE`](../../../core/src/classes/GaussianSplattingMesh.md#doubleside)

***

### FLIP\_N\_ROTATE\_ROW

> `readonly` `static` **FLIP\_N\_ROTATE\_ROW**: `6` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L328)

**`Experimental`**

Mesh pattern setting : rotate pattern and rotate

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`FLIP_N_ROTATE_ROW`](../../../core/src/classes/GaussianSplattingMesh.md#flip_n_rotate_row)

***

### FLIP\_N\_ROTATE\_TILE

> `readonly` `static` **FLIP\_N\_ROTATE\_TILE**: `5` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L324)

**`Experimental`**

Mesh pattern setting : flip and rotate alternate tiles on each row or column

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`FLIP_N_ROTATE_TILE`](../../../core/src/classes/GaussianSplattingMesh.md#flip_n_rotate_tile)

***

### FLIP\_ROW

> `readonly` `static` **FLIP\_ROW**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L316)

**`Experimental`**

Mesh pattern setting : flip (reflect in y axis) all tiles on alternate rows

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`FLIP_ROW`](../../../core/src/classes/GaussianSplattingMesh.md#flip_row)

***

### FLIP\_TILE

> `readonly` `static` **FLIP\_TILE**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L308)

**`Experimental`**

Mesh pattern setting : flip (reflect in y axis) alternate tiles on each row or column

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`FLIP_TILE`](../../../core/src/classes/GaussianSplattingMesh.md#flip_tile)

***

### FRONTSIDE

> `readonly` `static` **FRONTSIDE**: `0` = `VertexData.FRONTSIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L271)

**`Experimental`**

Mesh side orientation : usually the external or front surface

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`FRONTSIDE`](../../../core/src/classes/GaussianSplattingMesh.md#frontside)

***

### INSTANCEDMESH\_SORT\_TRANSPARENT

> `static` **INSTANCEDMESH\_SORT\_TRANSPARENT**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L353)

**`Experimental`**

Indicates that the instanced meshes should be sorted from back to front before rendering if their material is transparent

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`INSTANCEDMESH_SORT_TRANSPARENT`](../../../core/src/classes/GaussianSplattingMesh.md#instancedmesh_sort_transparent)

***

### LEFT

> `readonly` `static` **LEFT**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L336)

**`Experimental`**

Mesh tile positioning : part tiles on left

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`LEFT`](../../../core/src/classes/GaussianSplattingMesh.md#left)

***

### LogSortPerformance

> `static` **LogSortPerformance**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:486](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L486)

**`Experimental`**

When true, the depth-sort worker logs each sort's duration (ms) and active splat count to the console.
Off by default; intended for performance investigation only.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`LogSortPerformance`](../../../core/src/classes/GaussianSplattingMesh.md#logsortperformance)

***

### NO\_CAP

> `readonly` `static` **NO\_CAP**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L288)

**`Experimental`**

Mesh cap setting : no cap

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`NO_CAP`](../../../core/src/classes/GaussianSplattingMesh.md#no_cap)

***

### NO\_FLIP

> `readonly` `static` **NO\_FLIP**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L304)

**`Experimental`**

Mesh pattern setting : no flip or rotate

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`NO_FLIP`](../../../core/src/classes/GaussianSplattingMesh.md#no_flip)

***

### OCCLUSION\_ALGORITHM\_TYPE\_ACCURATE

> `static` **OCCLUSION\_ALGORITHM\_TYPE\_ACCURATE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L361)

**`Experimental`**

Use an accurate occlusion algorithm

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`OCCLUSION_ALGORITHM_TYPE_ACCURATE`](../../../core/src/classes/GaussianSplattingMesh.md#occlusion_algorithm_type_accurate)

***

### OCCLUSION\_ALGORITHM\_TYPE\_CONSERVATIVE

> `static` **OCCLUSION\_ALGORITHM\_TYPE\_CONSERVATIVE**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:363](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L363)

**`Experimental`**

Use a conservative occlusion algorithm

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE`](../../../core/src/classes/GaussianSplattingMesh.md#occlusion_algorithm_type_conservative)

***

### OCCLUSION\_TYPE\_NONE

> `static` **OCCLUSION\_TYPE\_NONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L355)

**`Experimental`**

No occlusion

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`OCCLUSION_TYPE_NONE`](../../../core/src/classes/GaussianSplattingMesh.md#occlusion_type_none)

***

### OCCLUSION\_TYPE\_OPTIMISTIC

> `static` **OCCLUSION\_TYPE\_OPTIMISTIC**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L357)

**`Experimental`**

Occlusion set to optimistic

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`OCCLUSION_TYPE_OPTIMISTIC`](../../../core/src/classes/GaussianSplattingMesh.md#occlusion_type_optimistic)

***

### OCCLUSION\_TYPE\_STRICT

> `static` **OCCLUSION\_TYPE\_STRICT**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L359)

**`Experimental`**

Occlusion set to strict

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`OCCLUSION_TYPE_STRICT`](../../../core/src/classes/GaussianSplattingMesh.md#occlusion_type_strict)

***

### ProgressiveUpdateAmount

> `static` **ProgressiveUpdateAmount**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:828](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L828)

**`Experimental`**

Set the number of batch (a batch is 16384 splats) after which a display update is performed
A value of 0 (default) means display update will not happens before splat is ready.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ProgressiveUpdateAmount`](../../../core/src/classes/GaussianSplattingMesh.md#progressiveupdateamount)

***

### RIGHT

> `readonly` `static` **RIGHT**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L340)

**`Experimental`**

Mesh tile positioning : part tiles on right

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`RIGHT`](../../../core/src/classes/GaussianSplattingMesh.md#right)

***

### ROTATE\_ROW

> `readonly` `static` **ROTATE\_ROW**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L320)

**`Experimental`**

Mesh pattern setting : rotate (180degs) all tiles on alternate rows

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ROTATE_ROW`](../../../core/src/classes/GaussianSplattingMesh.md#rotate_row)

***

### ROTATE\_TILE

> `readonly` `static` **ROTATE\_TILE**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L312)

**`Experimental`**

Mesh pattern setting : rotate (180degs) alternate tiles on each row or column

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ROTATE_TILE`](../../../core/src/classes/GaussianSplattingMesh.md#rotate_tile)

***

### TOP

> `readonly` `static` **TOP**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:344](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L344)

**`Experimental`**

Mesh tile positioning : part tiles on top

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`TOP`](../../../core/src/classes/GaussianSplattingMesh.md#top)

***

### UseCountingSort

> `static` **UseCountingSort**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L480)

**`Experimental`**

When true (default), the depth-sort worker uses the fast O(n) counting (radix) sort. Set to false to
fall back to the legacy comparison sort (useful for A/B comparison or as a safety fallback). The change
takes effect on the next sort.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`UseCountingSort`](../../../core/src/classes/GaussianSplattingMesh.md#usecountingsort)

## Accessors

### absolutePosition

#### Get Signature

> **get** **absolutePosition**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L372)

**`Experimental`**

Returns the current mesh absolute position.
Returns a Vector3.

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`absolutePosition`](../../../core/src/classes/GaussianSplattingMesh.md#absoluteposition)

***

### absoluteRotationQuaternion

#### Get Signature

> **get** **absoluteRotationQuaternion**(): [`Quaternion`](../../../core/src/classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L389)

**`Experimental`**

Returns the current mesh absolute rotation.
Returns a Quaternion.

##### Returns

[`Quaternion`](../../../core/src/classes/Quaternion.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`absoluteRotationQuaternion`](../../../core/src/classes/GaussianSplattingMesh.md#absoluterotationquaternion)

***

### absoluteScaling

#### Get Signature

> **get** **absoluteScaling**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L380)

**`Experimental`**

Returns the current mesh absolute scaling.
Returns a Vector3.

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`absoluteScaling`](../../../core/src/classes/GaussianSplattingMesh.md#absolutescaling)

***

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L137)

**`Experimental`**

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L132)

**`Experimental`**

Gets or sets the accessibility tag to describe the node for accessibility purpose.

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`accessibilityTag`](../../../core/src/classes/GaussianSplattingMesh.md#accessibilitytag)

***

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](../../../core/src/classes/AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L325)

**`Experimental`**

Gets or sets the animation properties override

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](../../../core/src/classes/AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L332)

**`Experimental`**

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](../../../core/src/classes/AnimationPropertiesOverride.md)\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`animationPropertiesOverride`](../../../core/src/classes/GaussianSplattingMesh.md#animationpropertiesoverride)

***

### applyFog

#### Get Signature

> **get** **applyFog**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:881](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L881)

**`Experimental`**

Gets or sets a boolean indicating that this mesh will allow fog to be rendered on it (true by default)

##### Returns

`boolean`

#### Set Signature

> **set** **applyFog**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:884](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L884)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`applyFog`](../../../core/src/classes/GaussianSplattingMesh.md#applyfog)

***

### areNormalsFrozen

#### Get Signature

> **get** **areNormalsFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1573)

**`Experimental`**

Gets a boolean indicating if the normals aren't to be recomputed on next mesh `positions` array update. This property is pertinent only for updatable parametric shapes.

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`areNormalsFrozen`](../../../core/src/classes/GaussianSplattingMesh.md#arenormalsfrozen)

***

### bakedVertexAnimationManager

#### Get Signature

> **get** **bakedVertexAnimationManager**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`IBakedVertexAnimationManager`](../../../core/src/interfaces/IBakedVertexAnimationManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:559](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L559)

**`Experimental`**

Gets or sets the baked vertex animation manager

##### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/baked_texture_animations

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`IBakedVertexAnimationManager`](../../../core/src/interfaces/IBakedVertexAnimationManager.md)\>

#### Set Signature

> **set** **bakedVertexAnimationManager**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L563)

**`Experimental`**

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`IBakedVertexAnimationManager`](../../../core/src/interfaces/IBakedVertexAnimationManager.md)\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`bakedVertexAnimationManager`](../../../core/src/classes/GaussianSplattingMesh.md#bakedvertexanimationmanager)

***

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Node`](../../../core/src/classes/Node.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L472)

**`Experimental`**

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Node`](../../../core/src/classes/Node.md)\>[]

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`behaviors`](../../../core/src/classes/GaussianSplattingMesh.md#behaviors)

***

### billboardMode

#### Get Signature

> **get** **billboardMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L93)

**`Experimental`**

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

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`billboardMode`](../../../core/src/classes/GaussianSplattingMesh.md#billboardmode)

***

### centersTexture

#### Get Signature

> **get** **centersTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:847](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L847)

**`Experimental`**

Gets the centers texture

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`centersTexture`](../../../core/src/classes/GaussianSplattingMesh.md#centerstexture)

***

### checkCollisions

#### Get Signature

> **get** **checkCollisions**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2039](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2039)

**`Experimental`**

Gets or sets a boolean indicating that this mesh can be used in the collision engine

##### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

##### Returns

`boolean`

#### Set Signature

> **set** **checkCollisions**(`collisionEnabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2043](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2043)

**`Experimental`**

##### Parameters

###### collisionEnabled

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`checkCollisions`](../../../core/src/classes/GaussianSplattingMesh.md#checkcollisions)

***

### cloneMeshMap

#### Get Signature

> **get** **cloneMeshMap**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<\{\[`id`: `string`\]: [`Mesh`](../../../core/src/classes/Mesh.md) \| `undefined`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:637](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L637)

**`Experimental`**

Gets the list of clones of this mesh
The scene must have been constructed with useClonedMeshMap=true for this to work!
Note that useClonedMeshMap=true is the default setting

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<\{\[`id`: `string`\]: [`Mesh`](../../../core/src/classes/Mesh.md) \| `undefined`; \}\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`cloneMeshMap`](../../../core/src/classes/GaussianSplattingMesh.md#clonemeshmap)

***

### collider

#### Get Signature

> **get** **collider**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Collider`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2051](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2051)

**`Experimental`**

Gets Collider object used to compute collisions (not physics)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Collider`\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`collider`](../../../core/src/classes/GaussianSplattingMesh.md#collider)

***

### collisionGroup

#### Get Signature

> **get** **collisionGroup**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:980](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L980)

**`Experimental`**

Gets or sets the current collision group mask (-1 by default).
A collision between A and B will happen if A.collisionGroup & b.collisionMask !== 0

##### Returns

`number`

#### Set Signature

> **set** **collisionGroup**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:984](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L984)

**`Experimental`**

##### Parameters

###### mask

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`collisionGroup`](../../../core/src/classes/GaussianSplattingMesh.md#collisiongroup)

***

### collisionMask

#### Get Signature

> **get** **collisionMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:955](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L955)

**`Experimental`**

Gets or sets a collision mask used to mask collisions (default is -1).
A collision between A and B will happen if A.collisionGroup & b.collisionMask !== 0

##### Returns

`number`

#### Set Signature

> **set** **collisionMask**(`mask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:959](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L959)

**`Experimental`**

##### Parameters

###### mask

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`collisionMask`](../../../core/src/classes/GaussianSplattingMesh.md#collisionmask)

***

### collisionResponse

#### Get Signature

> **get** **collisionResponse**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:969](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L969)

**`Experimental`**

Gets or sets a collision response flag (default is true).
when collisionResponse is false, events are still triggered but colliding entity has no response
This helps creating trigger volume when user wants collision feedback events but not position/velocity
to respond to the collision.

##### Returns

`boolean`

#### Set Signature

> **set** **collisionResponse**(`response`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L973)

**`Experimental`**

##### Parameters

###### response

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`collisionResponse`](../../../core/src/classes/GaussianSplattingMesh.md#collisionresponse)

***

### collisionRetryCount

#### Get Signature

> **get** **collisionRetryCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:525](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L525)

**`Experimental`**

number of collision detection tries. Change this value if not all collisions are detected and handled properly

##### Returns

`number`

#### Set Signature

> **set** **collisionRetryCount**(`retryCount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:528](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L528)

**`Experimental`**

##### Parameters

###### retryCount

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`collisionRetryCount`](../../../core/src/classes/GaussianSplattingMesh.md#collisionretrycount)

***

### colorsTexture

#### Get Signature

> **get** **colorsTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:854](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L854)

**`Experimental`**

Gets the colors texture

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`colorsTexture`](../../../core/src/classes/GaussianSplattingMesh.md#colorstexture)

***

### compensation

#### Get Signature

> **get** **compensation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1024](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1024)

**`Experimental`**

Get the compensation state

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`compensation`](../../../core/src/classes/GaussianSplattingMesh.md#compensation)

***

### computeBonesUsingShaders

#### Get Signature

> **get** **computeBonesUsingShaders**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L387)

**`Experimental`**

##### Returns

`boolean`

#### Set Signature

> **set** **computeBonesUsingShaders**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:391](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L391)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`computeBonesUsingShaders`](../../../core/src/classes/GaussianSplattingMesh.md#computebonesusingshaders)

***

### covariancesATexture

#### Get Signature

> **get** **covariancesATexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:833](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L833)

**`Experimental`**

Gets the covariancesA texture

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`covariancesATexture`](../../../core/src/classes/GaussianSplattingMesh.md#covariancesatexture)

***

### covariancesBTexture

#### Get Signature

> **get** **covariancesBTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:840](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L840)

**`Experimental`**

Gets the covariancesB texture

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`covariancesBTexture`](../../../core/src/classes/GaussianSplattingMesh.md#covariancesbtexture)

***

### debugDisplay

#### Get Signature

> **get** **debugDisplay**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L404)

**`Experimental`**

When true, renders a wireframe box per LOD node, colored by the LOD level selected by [debugLodSource](#debuglodsource).

##### Returns

`boolean`

#### Set Signature

> **set** **debugDisplay**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L408)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### debugLodSource

#### Get Signature

> **get** **debugLodSource**(): [`GaussianSplattingStreamDebugLodSource`](../type-aliases/GaussianSplattingStreamDebugLodSource.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:424](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L424)

**`Experimental`**

Selects which LOD value drives the debug wireframe colors: the distance-based `"optimal"` LOD
(default, recomputed as the camera moves) or the `"current"` streamed/rendered LOD.

##### Returns

[`GaussianSplattingStreamDebugLodSource`](../type-aliases/GaussianSplattingStreamDebugLodSource.md)

#### Set Signature

> **set** **debugLodSource**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L428)

**`Experimental`**

##### Parameters

###### value

[`GaussianSplattingStreamDebugLodSource`](../type-aliases/GaussianSplattingStreamDebugLodSource.md)

##### Returns

`void`

***

### disableDepthSort

#### Get Signature

> **get** **disableDepthSort**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:634](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L634)

**`Experimental`**

If true, disables depth sorting of the splats (default: false)

##### Returns

`boolean`

#### Set Signature

> **set** **disableDepthSort**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:637](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L637)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`disableDepthSort`](../../../core/src/classes/GaussianSplattingMesh.md#disabledepthsort)

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L151)

**`Experimental`**

Gets or sets a boolean used to define if the node must be serialized

##### Returns

`boolean`

#### Set Signature

> **set** **doNotSerialize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L163)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`doNotSerialize`](../../../core/src/classes/GaussianSplattingMesh.md#donotserialize)

***

### enableDistantPicking

#### Get Signature

> **get** **enableDistantPicking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:894](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L894)

**`Experimental`**

When enabled, decompose picking matrices for better precision with large values for mesh position and scling

##### Returns

`boolean`

#### Set Signature

> **set** **enableDistantPicking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:897](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L897)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`enableDistantPicking`](../../../core/src/classes/GaussianSplattingMesh.md#enabledistantpicking)

***

### facetDepthSortFrom

#### Get Signature

> **get** **facetDepthSortFrom**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:517](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L517)

**`Experimental`**

The location (Vector3) where the facet depth sort must be computed from.
By default, the active camera position.
Used only when facet depth sort is enabled

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#facet-depth-sort

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **facetDepthSortFrom**(`location`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:520](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L520)

**`Experimental`**

##### Parameters

###### location

[`Vector3`](../../../core/src/classes/Vector3.md)

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`facetDepthSortFrom`](../../../core/src/classes/GaussianSplattingMesh.md#facetdepthsortfrom)

***

### facetNb

#### Get Signature

> **get** **facetNb**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L471)

**`Experimental`**

Gets the number of facets in the mesh

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#what-is-a-mesh-facet

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`facetNb`](../../../core/src/classes/GaussianSplattingMesh.md#facetnb)

***

### forcedInstanceCount

#### Get Signature

> **get** **forcedInstanceCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:534](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L534)

**`Experimental`**

Gets or sets the forced number of instances to display.
If 0 (default value), the number of instances is not forced and depends on the draw type
(regular / instance / thin instances mesh)

##### Returns

`number`

#### Set Signature

> **set** **forcedInstanceCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L538)

**`Experimental`**

##### Parameters

###### count

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`forcedInstanceCount`](../../../core/src/classes/GaussianSplattingMesh.md#forcedinstancecount)

***

### forceWorldMatrixInstancedBufferUpdate

#### Get Signature

> **get** **forceWorldMatrixInstancedBufferUpdate**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:690](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L690)

**`Experimental`**

Gets or sets a boolean indicating that the update of the instance buffer of the world matrices must be performed in all cases (and notably even in frozen mode)

##### Returns

`boolean`

#### Set Signature

> **set** **forceWorldMatrixInstancedBufferUpdate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:694](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L694)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`forceWorldMatrixInstancedBufferUpdate`](../../../core/src/classes/GaussianSplattingMesh.md#forceworldmatrixinstancedbufferupdate)

***

### forward

#### Get Signature

> **get** **forward**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L280)

**`Experimental`**

The forward direction of that transform in world space.

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`forward`](../../../core/src/classes/GaussianSplattingMesh.md#forward)

***

### frustumCulling

#### Get Signature

> **get** **frustumCulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L388)

**`Experimental`**

When true (default), nodes whose bounding box is outside the camera frustum are biased to the coarsest
LOD instead of being hidden. They stay in the sort/render set (their off-screen splats are clipped), so
turning the camera toward them shows low detail immediately with no invisible frames, then refines.
Changes take effect in real time.

##### Returns

`boolean`

#### Set Signature

> **set** **frustumCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L392)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### geometry

#### Get Signature

> **get** **geometry**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Geometry`](../../../core/src/classes/Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1271)

**`Experimental`**

Gets the mesh internal Geometry object

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Geometry`](../../../core/src/classes/Geometry.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`geometry`](../../../core/src/classes/GaussianSplattingMesh.md#geometry)

***

### hasBoundingInfo

#### Get Signature

> **get** **hasBoundingInfo**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1575](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1575)

**`Experimental`**

Returns true if there is already a bounding info

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`hasBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#hasboundinginfo)

***

### hasInstances

#### Get Signature

> **get** **hasInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:479](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L479)

**`Experimental`**

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`hasInstances`](../../../core/src/classes/GaussianSplattingMesh.md#hasinstances)

***

### hasLODLevels

#### Get Signature

> **get** **hasLODLevels**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1109)

**`Experimental`**

Gets a boolean indicating if this mesh has LOD

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`hasLODLevels`](../../../core/src/classes/GaussianSplattingMesh.md#haslodlevels)

***

### hasThinInstances

#### Get Signature

> **get** **hasThinInstances**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:484](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L484)

**`Experimental`**

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`hasThinInstances`](../../../core/src/classes/GaussianSplattingMesh.md#hasthininstances)

***

### hasVertexAlpha

#### Get Signature

> **get** **hasVertexAlpha**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:826](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L826)

**`Experimental`**

Gets or sets a boolean indicating that this mesh needs to use vertex alpha data to render.
This property is misnamed and should be `useVertexAlpha`. Note that the mesh will be rendered
with alpha blending when this flag is set even if vertex alpha data is missing from the geometry.

##### Returns

`boolean`

#### Set Signature

> **set** **hasVertexAlpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:829](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L829)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`hasVertexAlpha`](../../../core/src/classes/GaussianSplattingMesh.md#hasvertexalpha)

***

### infiniteDistance

#### Get Signature

> **get** **infiniteDistance**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L117)

**`Experimental`**

Gets or sets the distance of the object to max, often used by skybox

##### Returns

`boolean`

#### Set Signature

> **set** **infiniteDistance**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L121)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`infiniteDistance`](../../../core/src/classes/GaussianSplattingMesh.md#infinitedistance)

***

### inheritVisibility

#### Get Signature

> **get** **inheritVisibility**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L269)

**`Experimental`**

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

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`inheritVisibility`](../../../core/src/classes/GaussianSplattingMesh.md#inheritvisibility)

***

### isAnInstance

#### Get Signature

> **get** **isAnInstance**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1669](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1669)

**`Experimental`**

Gets a boolean indicating if this mesh is an instance or a regular mesh

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isAnInstance`](../../../core/src/classes/GaussianSplattingMesh.md#isaninstance)

***

### isBlocked

#### Get Signature

> **get** **isBlocked**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1474](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1474)

**`Experimental`**

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isBlocked`](../../../core/src/classes/GaussianSplattingMesh.md#isblocked)

***

### isFacetDataEnabled

#### Get Signature

> **get** **isFacetDataEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L535)

**`Experimental`**

gets a boolean indicating if facetData is enabled

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#what-is-a-mesh-facet

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isFacetDataEnabled`](../../../core/src/classes/GaussianSplattingMesh.md#isfacetdataenabled)

***

### isUnIndexed

#### Get Signature

> **get** **isUnIndexed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L644)

**`Experimental`**

Gets or sets a boolean indicating that this mesh does not use index buffer

##### Returns

`boolean`

#### Set Signature

> **set** **isUnIndexed**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:648](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L648)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isUnIndexed`](../../../core/src/classes/GaussianSplattingMesh.md#isunindexed)

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L281)

**`Experimental`**

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

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isVisible`](../../../core/src/classes/GaussianSplattingMesh.md#isvisible)

***

### isWorldMatrixFrozen

#### Get Signature

> **get** **isWorldMatrixFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L507)

**`Experimental`**

True if the World matrix has been frozen.

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isWorldMatrixFrozen`](../../../core/src/classes/GaussianSplattingMesh.md#isworldmatrixfrozen)

***

### kernelSize

#### Get Signature

> **get** **kernelSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1017](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1017)

**`Experimental`**

Gets the kernel size
Documentation and mathematical explanations here:
https://github.com/graphdeco-inria/gaussian-splatting/issues/294#issuecomment-1772688093
https://github.com/autonomousvision/mip-splatting/issues/18#issuecomment-1929388931

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`kernelSize`](../../../core/src/classes/GaussianSplattingMesh.md#kernelsize)

***

### layerMask

#### Get Signature

> **get** **layerMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:911](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L911)

**`Experimental`**

Gets or sets the current layer mask (default is 0x0FFFFFFF)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/layerMasksAndMultiCam

##### Returns

`number`

#### Set Signature

> **set** **layerMask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:915](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L915)

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`layerMask`](../../../core/src/classes/GaussianSplattingMesh.md#layermask)

***

### lightSources

#### Get Signature

> **get** **lightSources**(): [`Light`](../../../core/src/classes/Light.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1042](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1042)

**`Experimental`**

Gets the list of lights affecting that mesh

##### Returns

[`Light`](../../../core/src/classes/Light.md)[]

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`lightSources`](../../../core/src/classes/GaussianSplattingMesh.md#lightsources)

***

### manualUpdateOfPreviousWorldMatrixInstancedBuffer

#### Get Signature

> **get** **manualUpdateOfPreviousWorldMatrixInstancedBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:681](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L681)

**`Experimental`**

Gets or sets a boolean indicating that the update of the instance buffer of the world matrices is manual

##### Returns

`boolean`

#### Set Signature

> **set** **manualUpdateOfPreviousWorldMatrixInstancedBuffer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L685)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`manualUpdateOfPreviousWorldMatrixInstancedBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#manualupdateofpreviousworldmatrixinstancedbuffer)

***

### manualUpdateOfWorldMatrixInstancedBuffer

#### Get Signature

> **get** **manualUpdateOfWorldMatrixInstancedBuffer**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L672)

**`Experimental`**

Gets or sets a boolean indicating that the update of the instance buffer of the world matrices is manual

##### Returns

`boolean`

#### Set Signature

> **set** **manualUpdateOfWorldMatrixInstancedBuffer**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:676](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L676)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`manualUpdateOfWorldMatrixInstancedBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#manualupdateofworldmatrixinstancedbuffer)

***

### material

#### Get Signature

> **get** **material**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1057](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1057)

**`Experimental`**

get rendering material

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

#### Set Signature

> **set** **material**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1047)

**`Experimental`**

set rendering material

##### Parameters

###### value

[`Material`](../../../core/src/classes/Material.md)

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`material`](../../../core/src/classes/GaussianSplattingMesh.md#material)

***

### maxDetailLod

#### Get Signature

> **get** **maxDetailLod**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L360)

**`Experimental`**

Finest (most detailed) LOD level any node is allowed to render. `0` allows full detail (level 0);
`1` caps detail at the next-coarser level, and so on. Nodes already coarser than this cap (by
distance) are unaffected. Changes take effect in real time.

##### Returns

`number`

#### Set Signature

> **set** **maxDetailLod**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L364)

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

***

### maxLodLevel

#### Get Signature

> **get** **maxLodLevel**(): `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L378)

**`Experimental`**

Coarsest LOD level index in the scene (number of LOD levels minus one). Useful as the upper bound
for [maxDetailLod](#maxdetaillod).

##### Returns

`number`

***

### maxShDegree

#### Get Signature

> **get** **maxShDegree**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:678](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L678)

**`Experimental`**

Maximum SH degree available from the loaded data.

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`maxShDegree`](../../../core/src/classes/GaussianSplattingMesh.md#maxshdegree)

***

### minPixelSize

#### Get Signature

> **get** **minPixelSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1032](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1032)

**`Experimental`**

Minimum projected splat size, in pixels, below which a splat is discarded (0 = disabled).
Applied in real time; no rebuild required.

##### Returns

`number`

#### Set Signature

> **set** **minPixelSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1036](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1036)

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`minPixelSize`](../../../core/src/classes/GaussianSplattingMesh.md#minpixelsize)

***

### morphTargetManager

#### Get Signature

> **get** **morphTargetManager**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`MorphTargetManager`](../../../core/src/classes/MorphTargetManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:543](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L543)

**`Experimental`**

Gets or sets the morph target manager

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/morphTargets

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`MorphTargetManager`](../../../core/src/classes/MorphTargetManager.md)\>

#### Set Signature

> **set** **morphTargetManager**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L547)

**`Experimental`**

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`MorphTargetManager`](../../../core/src/classes/MorphTargetManager.md)\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`morphTargetManager`](../../../core/src/classes/GaussianSplattingMesh.md#morphtargetmanager)

***

### mustDepthSortFacets

#### Get Signature

> **get** **mustDepthSortFacets**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:504](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L504)

**`Experimental`**

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

**`Experimental`**

##### Parameters

###### sort

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`mustDepthSortFacets`](../../../core/src/classes/GaussianSplattingMesh.md#mustdepthsortfacets)

***

### needsRotationScaleTextures

#### Get Signature

> **get** **needsRotationScaleTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:882](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L882)

**`Experimental`**

Enables or disables generation of rotation and scale matrix textures, required for voxel-based IBL shadows.

##### Returns

`boolean`

#### Set Signature

> **set** **needsRotationScaleTextures**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:886](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L886)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`needsRotationScaleTextures`](../../../core/src/classes/GaussianSplattingMesh.md#needsrotationscaletextures)

***

### nonUniformScaling

#### Get Signature

> **get** **nonUniformScaling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:869](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L869)

**`Experimental`**

True if the scaling property of this object is non uniform eg. (1,2,1)

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`nonUniformScaling`](../../../core/src/classes/GaussianSplattingMesh.md#nonuniformscaling)

***

### numBoneInfluencers

#### Get Signature

> **get** **numBoneInfluencers**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:868](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L868)

**`Experimental`**

Gets or sets the number of allowed bone influences per vertex (4 by default)

##### Returns

`number`

#### Set Signature

> **set** **numBoneInfluencers**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:871](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L871)

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`numBoneInfluencers`](../../../core/src/classes/GaussianSplattingMesh.md#numboneinfluencers)

***

### onAfterRenderObservable

#### Get Signature

> **get** **onAfterRenderObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L436)

**`Experimental`**

An event triggered after rendering the mesh

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onAfterRenderObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onafterrenderobservable)

***

### onBeforeBindObservable

#### Get Signature

> **get** **onBeforeBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L425)

**`Experimental`**

An event triggered before binding the mesh

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onBeforeBindObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onbeforebindobservable)

***

### onBeforeDraw

#### Set Signature

> **set** **onBeforeDraw**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L471)

**`Experimental`**

Sets a callback to call before drawing the mesh. It is recommended to use onBeforeDrawObservable instead

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onBeforeDraw`](../../../core/src/classes/GaussianSplattingMesh.md#onbeforedraw)

***

### onBeforeDrawObservable

#### Get Signature

> **get** **onBeforeDrawObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L458)

**`Experimental`**

An event triggered before drawing the mesh

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onBeforeDrawObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onbeforedrawobservable)

***

### onBeforeRenderObservable

#### Get Signature

> **get** **onBeforeRenderObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L414)

**`Experimental`**

An event triggered before rendering the mesh

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onBeforeRenderObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onbeforerenderobservable)

***

### onBetweenPassObservable

#### Get Signature

> **get** **onBetweenPassObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:447](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L447)

**`Experimental`**

An event triggeredbetween rendering pass when using separateCullingPass = true

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onBetweenPassObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onbetweenpassobservable)

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L373)

**`Experimental`**

An event triggered when the node is cloned

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onClonedObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onclonedobservable)

***

### onCollide

#### Set Signature

> **set** **onCollide**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:601](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L601)

**`Experimental`**

Set a function to call when this mesh collides with another one

##### Parameters

###### callback

(`collidedMesh?`) => `void`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onCollide`](../../../core/src/classes/GaussianSplattingMesh.md#oncollide)

***

### onCollisionPositionChange

#### Set Signature

> **set** **onCollisionPositionChange**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:614](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L614)

**`Experimental`**

Set a function to call when the collision's position changes

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onCollisionPositionChange`](../../../core/src/classes/GaussianSplattingMesh.md#oncollisionpositionchange)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L356)

**`Experimental`**

Sets a callback that will be raised when the node will be disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onDispose`](../../../core/src/classes/GaussianSplattingMesh.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L366)

**`Experimental`**

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`onEnabledStateChangedObservable`](../../../core/src/classes/GaussianSplattingMesh.md#onenabledstatechangedobservable)

***

### overrideMaterialSideOrientation

#### Get Signature

> **get** **overrideMaterialSideOrientation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L581)

**`Experimental`**

##### Deprecated

Please use sideOrientation instead.

##### See

https://doc.babylonjs.com/breaking-changes#7110

##### Returns

`number`

#### Set Signature

> **set** **overrideMaterialSideOrientation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:585](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L585)

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`overrideMaterialSideOrientation`](../../../core/src/classes/GaussianSplattingMesh.md#overridematerialsideorientation)

***

### overridenInstanceCount

#### Set Signature

> **set** **overridenInstanceCount**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1598)

**`Experimental`**

Sets a value overriding the instance count. Only applicable when custom instanced InterleavedVertexBuffer are used rather than InstancedMeshs

##### Parameters

###### count

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`overridenInstanceCount`](../../../core/src/classes/GaussianSplattingMesh.md#overrideninstancecount)

***

### overrideRenderingFillMode

#### Get Signature

> **get** **overrideRenderingFillMode**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:595](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L595)

**`Experimental`**

Use this property to override the Material's fillMode value

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **overrideRenderingFillMode**(`fillMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:599](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L599)

**`Experimental`**

##### Parameters

###### fillMode

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`overrideRenderingFillMode`](../../../core/src/classes/GaussianSplattingMesh.md#overriderenderingfillmode)

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L261)

**`Experimental`**

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L222)

**`Experimental`**

Gets or sets the parent of the node (without keeping the current position in the scene)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

##### Parameters

###### parent

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`parent`](../../../core/src/classes/GaussianSplattingMesh.md#parent)

***

### partCount

#### Get Signature

> **get** **partCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L392)

**`Experimental`**

Gets the number of parts in the compound.

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`partCount`](../../../core/src/classes/GaussianSplattingMesh.md#partcount)

***

### partIndicesTexture

#### Get Signature

> **get** **partIndicesTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L116)

**`Experimental`**

Gets the part indices texture used for compound rendering

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`partIndicesTexture`](../../../core/src/classes/GaussianSplattingMesh.md#partindicestexture)

***

### partitioningBBoxRatio

#### Get Signature

> **get** **partitioningBBoxRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:490](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L490)

**`Experimental`**

The ratio (float) to apply to the bounding box size to set to the partitioning space.
Ex : 1.01 (default) the partitioning space is 1% bigger than the bounding box

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#tweaking-the-partitioning

##### Returns

`number`

#### Set Signature

> **set** **partitioningBBoxRatio**(`ratio`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:494](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L494)

**`Experimental`**

##### Parameters

###### ratio

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`partitioningBBoxRatio`](../../../core/src/classes/GaussianSplattingMesh.md#partitioningbboxratio)

***

### partitioningSubdivisions

#### Get Signature

> **get** **partitioningSubdivisions**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L478)

**`Experimental`**

Gets or set the number (integer) of subdivisions per axis in the partitioning space

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#tweaking-the-partitioning

##### Returns

`number`

#### Set Signature

> **set** **partitioningSubdivisions**(`nb`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L481)

**`Experimental`**

##### Parameters

###### nb

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`partitioningSubdivisions`](../../../core/src/classes/GaussianSplattingMesh.md#partitioningsubdivisions)

***

### partVisibility

#### Get Signature

> **get** **partVisibility**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L399)

**`Experimental`**

Gets the part visibility array.

##### Returns

`number`[]

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`partVisibility`](../../../core/src/classes/GaussianSplattingMesh.md#partvisibility)

***

### pointerOverDisableMeshTesting

#### Get Signature

> **get** **pointerOverDisableMeshTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:708](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L708)

**`Experimental`**

Gets or sets the property which disables the test that is checking that the mesh under the pointer is the same than the previous time we tested for it (default: false).
Set this property to true if you want thin instances picking to be reported accurately when moving over the mesh.
Note that setting this property to true will incur some performance penalties when dealing with pointer events for this mesh so use it sparingly.

##### Returns

`boolean`

#### Set Signature

> **set** **pointerOverDisableMeshTesting**(`disable`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:712](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L712)

**`Experimental`**

##### Parameters

###### disable

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`pointerOverDisableMeshTesting`](../../../core/src/classes/GaussianSplattingMesh.md#pointeroverdisablemeshtesting)

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L194)

**`Experimental`**

Gets or set the node position (default is (0.0, 0.0, 0.0))

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **position**(`newPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L198)

**`Experimental`**

##### Parameters

###### newPosition

[`Vector3`](../../../core/src/classes/Vector3.md)

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`position`](../../../core/src/classes/GaussianSplattingMesh.md#position)

***

### previousWorldMatrixInstancedBuffer

#### Get Signature

> **get** **previousWorldMatrixInstancedBuffer**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:664](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L664)

**`Experimental`**

Gets the array buffer used to store the instanced buffer used for instances' previous world matrices

##### Returns

`Float32Array`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`previousWorldMatrixInstancedBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#previousworldmatrixinstancedbuffer)

***

### rawBoundingInfo

#### Set Signature

> **set** **rawBoundingInfo**(`boundingInfo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:589](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L589)

**`Experimental`**

##### Parameters

###### boundingInfo

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BoundingInfo`](../../../core/src/classes/BoundingInfo.md)\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rawBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#rawboundinginfo)

***

### receiveShadows

#### Get Signature

> **get** **receiveShadows**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L799)

**`Experimental`**

Gets or sets a boolean indicating that this mesh can receive realtime shadows

##### See

https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows

##### Returns

`boolean`

#### Set Signature

> **set** **receiveShadows**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:802](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L802)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`receiveShadows`](../../../core/src/classes/GaussianSplattingMesh.md#receiveshadows)

***

### renderedSplatCount

#### Get Signature

> **get** **renderedSplatCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:693](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L693)

**`Experimental`**

Number of source splats currently selected for rendering.
When no range filter is active, this is the mesh's full source splat count.

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`renderedSplatCount`](../../../core/src/classes/GaussianSplattingMesh.md#renderedsplatcount)

***

### renderingGroupId

#### Get Signature

> **get** **renderingGroupId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:720](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L720)

**`Experimental`**

Specifies the rendering group id for this mesh (0 by default)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#rendering-groups

##### Returns

`number`

#### Set Signature

> **set** **renderingGroupId**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:724](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L724)

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`renderingGroupId`](../../../core/src/classes/GaussianSplattingMesh.md#renderinggroupid)

***

### right

#### Get Signature

> **get** **right**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L296)

**`Experimental`**

The right direction of that transform in world space.

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`right`](../../../core/src/classes/GaussianSplattingMesh.md#right-1)

***

### rotation

#### Get Signature

> **get** **rotation**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L222)

**`Experimental`**

Gets or sets the rotation property : a Vector3 defining the rotation value in radians around each local axis X, Y, Z  (default is (0.0, 0.0, 0.0)).
If rotation quaternion is set, this Vector3 will be ignored and copy from the quaternion

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **rotation**(`newRotation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L226)

**`Experimental`**

##### Parameters

###### newRotation

[`Vector3`](../../../core/src/classes/Vector3.md)

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rotation`](../../../core/src/classes/GaussianSplattingMesh.md#rotation)

***

### rotationQuaternion

#### Get Signature

> **get** **rotationQuaternion**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Quaternion`](../../../core/src/classes/Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L248)

**`Experimental`**

Gets or sets the rotation Quaternion property : this a Quaternion object defining the node rotation by using a unit quaternion (undefined by default, but can be null).
If set, only the rotationQuaternion is then used to compute the node rotation (ie. node.rotation will be ignored)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Quaternion`](../../../core/src/classes/Quaternion.md)\>

#### Set Signature

> **set** **rotationQuaternion**(`quaternion`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L252)

**`Experimental`**

##### Parameters

###### quaternion

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Quaternion`](../../../core/src/classes/Quaternion.md)\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rotationQuaternion`](../../../core/src/classes/GaussianSplattingMesh.md#rotationquaternion)

***

### rotationsATexture

#### Get Signature

> **get** **rotationsATexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:861](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L861)

**`Experimental`**

Gets the rotation matrix A texture (rotation elements m[0],m[1],m[2],m[4])

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rotationsATexture`](../../../core/src/classes/GaussianSplattingMesh.md#rotationsatexture)

***

### rotationsBTexture

#### Get Signature

> **get** **rotationsBTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:868](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L868)

**`Experimental`**

Gets the rotation matrix B texture (rotation elements m[5],m[6],m[8],m[9])

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rotationsBTexture`](../../../core/src/classes/GaussianSplattingMesh.md#rotationsbtexture)

***

### rotationScaleTexture

#### Get Signature

> **get** **rotationScaleTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:875](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L875)

**`Experimental`**

Gets the rotation scale texture (rotation element m[10] followed by scale diagonal sx,sy,sz)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rotationScaleTexture`](../../../core/src/classes/GaussianSplattingMesh.md#rotationscaletexture)

***

### scaling

#### Get Signature

> **get** **scaling**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L235)

**`Experimental`**

Gets or sets the scaling property : a Vector3 defining the node scaling along each local axis X, Y, Z (default is (1.0, 1.0, 1.0)).

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **scaling**(`newScaling`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L239)

**`Experimental`**

##### Parameters

###### newScaling

[`Vector3`](../../../core/src/classes/Vector3.md)

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`scaling`](../../../core/src/classes/GaussianSplattingMesh.md#scaling)

***

### shData

#### Get Signature

> **get** **shData**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Uint8Array`\<`ArrayBufferLike`\>[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:808](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L808)

**`Experimental`**

returns the SH data arrays
Only available if the mesh was created with keepInRam: true

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Uint8Array`\<`ArrayBufferLike`\>[]\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`shData`](../../../core/src/classes/GaussianSplattingMesh.md#shdata)

***

### shDegree

#### Get Signature

> **get** **shDegree**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:661](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L661)

**`Experimental`**

SH degree. 0 = no sh (default). 1 = 3 parameters. 2 = 8 parameters. 3 = 15 parameters.
Value is clamped between 0 and the maximum degree available from loaded data.

##### Returns

`number`

#### Set Signature

> **set** **shDegree**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:665](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L665)

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`shDegree`](../../../core/src/classes/GaussianSplattingMesh.md#shdegree)

***

### shTextures

#### Get Signature

> **get** **shTextures**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:906](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L906)

**`Experimental`**

Gets the SH textures

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`shTextures`](../../../core/src/classes/GaussianSplattingMesh.md#shtextures)

***

### sideOrientation

#### Get Signature

> **get** **sideOrientation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L560)

**`Experimental`**

Use this property to change the original side orientation defined at construction time
Material.sideOrientation will override this value if set
User will still be able to change the material sideOrientation afterwards if they really need it

##### Returns

`number`

#### Set Signature

> **set** **sideOrientation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:564](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L564)

**`Experimental`**

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`sideOrientation`](../../../core/src/classes/GaussianSplattingMesh.md#sideorientation)

***

### skeleton

#### Get Signature

> **get** **skeleton**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Skeleton`](../../../core/src/classes/Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1090](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1090)

**`Experimental`**

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Skeleton`](../../../core/src/classes/Skeleton.md)\>

#### Set Signature

> **set** **skeleton**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1071)

**`Experimental`**

Gets or sets a skeleton to apply skinning transformations

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Skeleton`](../../../core/src/classes/Skeleton.md)\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`skeleton`](../../../core/src/classes/GaussianSplattingMesh.md#skeleton)

***

### sogParams

#### Get Signature

> **get** **sogParams**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`ISogPackInternal`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:922](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L922)

**`Experimental`**

SOG dequantization parameters paired with the raw textures.
Set by the splat loader when `useSogTextures: true`. Null otherwise.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`ISogPackInternal`\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`sogParams`](../../../core/src/classes/GaussianSplattingMesh.md#sogparams)

***

### source

#### Get Signature

> **get** **source**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:628](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L628)

**`Experimental`**

Gets the source mesh (the one used to clone this one from)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`source`](../../../core/src/classes/GaussianSplattingMesh.md#source)

***

### splatCount

#### Get Signature

> **get** **splatCount**(): `number` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L685)

**`Experimental`**

Number of splats in the mesh

##### Returns

`number` \| `undefined`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`splatCount`](../../../core/src/classes/GaussianSplattingMesh.md#splatcount)

***

### splatsData

#### Get Signature

> **get** **splatsData**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L800)

**`Experimental`**

returns the splats data array buffer that contains in order : postions (3 floats), size (3 floats), color (4 bytes), orientation quaternion (4 bytes)
Only available if the mesh was created with keepInRam: true

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`ArrayBuffer`\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`splatsData`](../../../core/src/classes/GaussianSplattingMesh.md#splatsdata)

***

### splatSizeRange

#### Get Signature

> **get** **splatSizeRange**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:817](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L817)

**`Experimental`**

Returns the min/max size range of splats in this mesh, where size is pow(|det(Σ)|, 1/6)
of the 3D covariance matrix — equivalent to the geometric mean of the principal radii.
Computed automatically during updateData(). Returns null before any data has been loaded.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`splatSizeRange`](../../../core/src/classes/GaussianSplattingMesh.md#splatsizerange)

***

### surroundingMeshes

#### Get Signature

> **get** **surroundingMeshes**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L997)

**`Experimental`**

Gets or sets current surrounding meshes (null by default).

By default collision detection is tested against every mesh in the scene.
It is possible to set surroundingMeshes to a defined list of meshes and then only these specified
meshes will be tested for the collision.

Note: if set to an empty array no collision will happen when this mesh is moved.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]\>

#### Set Signature

> **set** **surroundingMeshes**(`meshes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1001](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1001)

**`Experimental`**

##### Parameters

###### meshes

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]\>

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`surroundingMeshes`](../../../core/src/classes/GaussianSplattingMesh.md#surroundingmeshes)

***

### up

#### Get Signature

> **get** **up**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L288)

**`Experimental`**

The up direction of that transform in world space.

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`up`](../../../core/src/classes/GaussianSplattingMesh.md#up)

***

### useBones

#### Get Signature

> **get** **useBones**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1603](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1603)

**`Experimental`**

Gets a boolean indicating if this mesh has skinning data and an attached skeleton

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`useBones`](../../../core/src/classes/GaussianSplattingMesh.md#usebones)

***

### useLODScreenCoverage

#### Get Signature

> **get** **useLODScreenCoverage**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L371)

**`Experimental`**

Determines if the LOD levels are intended to be calculated using screen coverage (surface area ratio) instead of distance.

##### Returns

`boolean`

#### Set Signature

> **set** **useLODScreenCoverage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L375)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`useLODScreenCoverage`](../../../core/src/classes/GaussianSplattingMesh.md#uselodscreencoverage)

***

### useSog

#### Get Signature

> **get** **useSog**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:914](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L914)

**`Experimental`**

True when this mesh holds raw SOG webp textures (dequantized in-shader) rather than the
pre-decoded covariance/center/color textures produced by the standard splat loader.

##### Returns

`boolean`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`useSog`](../../../core/src/classes/GaussianSplattingMesh.md#usesog)

***

### useVertexColors

#### Get Signature

> **get** **useVertexColors**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:840](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L840)

**`Experimental`**

Gets or sets a boolean indicating that this mesh needs to use vertex color data to render (if this kind of vertex data is available in the geometry)

##### Returns

`boolean`

#### Set Signature

> **set** **useVertexColors**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:843](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L843)

**`Experimental`**

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`useVertexColors`](../../../core/src/classes/GaussianSplattingMesh.md#usevertexcolors)

***

### viewDirectionFactor

#### Get Signature

> **get** **viewDirectionFactor**(): [`DeepImmutableObject`](../../../core/src/type-aliases/DeepImmutableObject.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:653](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L653)

**`Experimental`**

View direction factor used to compute the SH view direction in the shader.

##### Deprecated

Not used anymore for SH rendering

##### Returns

[`DeepImmutableObject`](../../../core/src/type-aliases/DeepImmutableObject.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`viewDirectionFactor`](../../../core/src/classes/GaussianSplattingMesh.md#viewdirectionfactor)

***

### visibility

#### Get Signature

> **get** **visibility**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:642](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L642)

**`Experimental`**

Gets or sets mesh visibility between 0 and 1 (default is 1)

##### Returns

`number`

#### Set Signature

> **set** **visibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L649)

**`Experimental`**

Gets or sets mesh visibility between 0 and 1 (default is 1)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`visibility`](../../../core/src/classes/GaussianSplattingMesh.md#visibility)

***

### worldMatrixFromCache

#### Get Signature

> **get** **worldMatrixFromCache**(): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L516)

**`Experimental`**

Returns directly the latest state of the mesh World matrix.
A Matrix is returned.

##### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`worldMatrixFromCache`](../../../core/src/classes/GaussianSplattingMesh.md#worldmatrixfromcache)

***

### worldMatrixInstancedBuffer

#### Get Signature

> **get** **worldMatrixInstancedBuffer**(): `Float32Array`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L656)

**`Experimental`**

Gets the array buffer used to store the instanced buffer used for instances' world matrices

##### Returns

`Float32Array`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`worldMatrixInstancedBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#worldmatrixinstancedbuffer)

***

### BILLBOARDMODE\_ALL

#### Get Signature

> **get** `static` **BILLBOARDMODE\_ALL**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:423](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L423)

**`Experimental`**

Billboard on all axes

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BILLBOARDMODE_ALL`](../../../core/src/classes/GaussianSplattingMesh.md#billboardmode_all)

***

### BILLBOARDMODE\_NONE

#### Get Signature

> **get** `static` **BILLBOARDMODE\_NONE**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:403](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L403)

**`Experimental`**

No billboard

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BILLBOARDMODE_NONE`](../../../core/src/classes/GaussianSplattingMesh.md#billboardmode_none)

***

### BILLBOARDMODE\_USE\_POSITION

#### Get Signature

> **get** `static` **BILLBOARDMODE\_USE\_POSITION**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L428)

**`Experimental`**

Billboard on using position instead of orientation

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BILLBOARDMODE_USE_POSITION`](../../../core/src/classes/GaussianSplattingMesh.md#billboardmode_use_position)

***

### BILLBOARDMODE\_X

#### Get Signature

> **get** `static` **BILLBOARDMODE\_X**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L408)

**`Experimental`**

Billboard on X axis

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BILLBOARDMODE_X`](../../../core/src/classes/GaussianSplattingMesh.md#billboardmode_x)

***

### BILLBOARDMODE\_Y

#### Get Signature

> **get** `static` **BILLBOARDMODE\_Y**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L413)

**`Experimental`**

Billboard on Y axis

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BILLBOARDMODE_Y`](../../../core/src/classes/GaussianSplattingMesh.md#billboardmode_y)

***

### BILLBOARDMODE\_Z

#### Get Signature

> **get** `static` **BILLBOARDMODE\_Z**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L418)

**`Experimental`**

Billboard on Z axis

##### Returns

`number`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`BILLBOARDMODE_Z`](../../../core/src/classes/GaussianSplattingMesh.md#billboardmode_z)

## Methods

### \_getCameraDirection()

> **\_getCameraDirection**(`camera`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1262)

**`Experimental`**

#### Parameters

##### camera

[`Camera`](../../../core/src/classes/Camera.md)

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`_getCameraDirection`](../../../core/src/classes/GaussianSplattingMesh.md#_getcameradirection)

***

### \_invalidateInstanceVertexArrayObject()

> **\_invalidateInstanceVertexArrayObject**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L18)

**`Experimental`**

Invalidate VertexArrayObjects belonging to the mesh (but not to the Geometry of the mesh).

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`_invalidateInstanceVertexArrayObject`](../../../core/src/classes/GaussianSplattingMesh.md#_invalidateinstancevertexarrayobject)

***

### \_updateBoundingInfo()

> **\_updateBoundingInfo**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L213)

**`Experimental`**

Override for compound meshes: recomputes bounds from proxy world extents instead of
local bounds × world matrix, which is wrong for proxied parts with independent transforms.

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

this mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`_updateBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#_updateboundinginfo)

***

### addBehavior()

> **addBehavior**(`behavior`, `attachImmediately?`): [`Node`](../../../core/src/classes/Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L421)

**`Experimental`**

Attach a behavior to the node

#### Parameters

##### behavior

[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Node`](../../../core/src/classes/Node.md)\>

defines the behavior to attach

##### attachImmediately?

`boolean` = `false`

defines that the behavior must be attached even if the scene is still loading

#### Returns

[`Node`](../../../core/src/classes/Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`addBehavior`](../../../core/src/classes/GaussianSplattingMesh.md#addbehavior)

***

### addChild()

> **addChild**(`mesh`, `preserveScalingSign?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:846](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L846)

**`Experimental`**

Adds the passed mesh as a child to the current mesh.
The node will remain exactly where it is and its position / rotation will be updated accordingly.
This method is equivalent to calling setParent().

#### Parameters

##### mesh

[`TransformNode`](../../../core/src/classes/TransformNode.md)

defines the child mesh

##### preserveScalingSign?

`boolean` = `false`

if true, keep scaling sign of child. Otherwise, scaling sign might change.

#### Returns

`this`

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`addChild`](../../../core/src/classes/GaussianSplattingMesh.md#addchild)

***

### addLODLevel()

> **addLODLevel**(`distanceOrScreenCoverage`, `mesh`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1145)

**`Experimental`**

Add a mesh as LOD level triggered at the given distance.

#### Parameters

##### distanceOrScreenCoverage

`number`

Either distance from the center of the object to show this level or the screen coverage if `useScreenCoverage` is set to `true`.
If screen coverage, value is a fraction of the screen's total surface, between 0 and 1.
Example Playground for distance https://playground.babylonjs.com/#QE7KM#197
Example Playground for screen coverage https://playground.babylonjs.com/#QE7KM#196

##### mesh

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

The mesh to be added as LOD level (can be null)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

This mesh (for chaining)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`addLODLevel`](../../../core/src/classes/GaussianSplattingMesh.md#addlodlevel)

***

### ~~addPart()~~

> **addPart**(`other`, `disposeOther?`): `GaussianSplattingPartProxyMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:1094](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L1094)

**`Experimental`**

Add another mesh to this mesh, as a new part. This makes the current mesh a compound, if not already.
The source mesh's splat data is read directly and copied into the compound's retained source buffers.

#### Parameters

##### other

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md)

The other mesh to add. Must be fully loaded before calling this method.

##### disposeOther?

`boolean` = `true`

Whether to dispose the other mesh after adding it to the current mesh.

#### Returns

`GaussianSplattingPartProxyMesh`

a placeholder mesh that can be used to manipulate the part transform

#### Deprecated

Use GaussianSplattingCompoundMesh.addPart instead.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`addPart`](../../../core/src/classes/GaussianSplattingMesh.md#addpart)

***

### addRotation()

> **addRotation**(`x`, `y`, `z`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1047)

**`Experimental`**

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

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`addRotation`](../../../core/src/classes/GaussianSplattingMesh.md#addrotation)

***

### alignWithNormal()

> **alignWithNormal**(`normal`, `upDirection?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2919](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2919)

**`Experimental`**

Align the mesh with a normal

#### Parameters

##### normal

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the normal to use

##### upDirection?

[`Vector3`](../../../core/src/classes/Vector3.md)

can be used to redefined the up vector to use (will use the (0, 1, 0) by default)

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`alignWithNormal`](../../../core/src/classes/GaussianSplattingMesh.md#alignwithnormal)

***

### applyAngularImpulse()

> **applyAngularImpulse**(`angularImpulse`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L33)

**`Experimental`**

Apply a physic angular impulse to the mesh

#### Parameters

##### angularImpulse

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the torque to apply

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`applyAngularImpulse`](../../../core/src/classes/GaussianSplattingMesh.md#applyangularimpulse)

***

### applyDisplacementMap()

> **applyDisplacementMap**(`url`, `minHeight`, `maxHeight`, `onSuccess?`, `uvOffset?`, `uvScale?`, `forceUpdate?`, `onError?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3426](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3426)

**`Experimental`**

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

[`Vector2`](../../../core/src/classes/Vector2.md)

is an optional vector2 used to offset UV.

##### uvScale?

[`Vector2`](../../../core/src/classes/Vector2.md)

is an optional vector2 used to scale UV.

##### forceUpdate?

`boolean` = `false`

defines whether or not to force an update of the generated buffers. This is useful to apply on a deserialized model for instance.

##### onError?

(`message?`, `exception?`) => `void`

defines a callback called when an error occurs during the processing of the request.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the Mesh.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`applyDisplacementMap`](../../../core/src/classes/GaussianSplattingMesh.md#applydisplacementmap)

***

### applyDisplacementMapFromBuffer()

> **applyDisplacementMapFromBuffer**(`buffer`, `heightMapWidth`, `heightMapHeight`, `minHeight`, `maxHeight`, `uvOffset?`, `uvScale?`, `forceUpdate?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3476](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3476)

**`Experimental`**

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

[`Vector2`](../../../core/src/classes/Vector2.md)

is an optional vector2 used to offset UV.

##### uvScale?

[`Vector2`](../../../core/src/classes/Vector2.md)

is an optional vector2 used to scale UV.

##### forceUpdate?

`boolean` = `false`

defines whether or not to force an update of the generated buffers. This is useful to apply on a deserialized model for instance.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the Mesh.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`applyDisplacementMapFromBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#applydisplacementmapfrombuffer)

***

### applyImpulse()

> **applyImpulse**(`force`, `contactPoint`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L32)

**`Experimental`**

Apply a physic impulse to the mesh

#### Parameters

##### force

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the force to apply

##### contactPoint

[`Vector3`](../../../core/src/classes/Vector3.md)

defines where to apply the force

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`applyImpulse`](../../../core/src/classes/GaussianSplattingMesh.md#applyimpulse)

***

### applySkeleton()

> **applySkeleton**(`skeleton`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4940](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4940)

**`Experimental`**

Updates the vertex buffer by applying transformation from the bones

#### Parameters

##### skeleton

[`Skeleton`](../../../core/src/classes/Skeleton.md)

defines the skeleton to apply to current mesh

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`applySkeleton`](../../../core/src/classes/GaussianSplattingMesh.md#applyskeleton)

***

### applyTorque()

> **applyTorque**(`torque`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L39)

**`Experimental`**

Apply a physic torque to the mesh

#### Parameters

##### torque

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the torque to apply

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`applyTorque`](../../../core/src/classes/GaussianSplattingMesh.md#applytorque)

***

### attachToBone()

> **attachToBone**(`bone`, `affectedTransformNode`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:891](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L891)

**`Experimental`**

Attach the current TransformNode to another TransformNode associated with a bone

#### Parameters

##### bone

[`Bone`](../../../core/src/classes/Bone.md)

Bone affecting the TransformNode

##### affectedTransformNode

[`TransformNode`](../../../core/src/classes/TransformNode.md)

TransformNode associated with the bone

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

this object

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`attachToBone`](../../../core/src/classes/GaussianSplattingMesh.md#attachtobone)

***

### bakeCurrentTransformIntoVertices()

> **bakeCurrentTransformIntoVertices**(`bakeIndependentlyOfChildren?`, `forceUnique?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3267)

**`Experimental`**

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

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/bakingTransforms

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`bakeCurrentTransformIntoVertices`](../../../core/src/classes/GaussianSplattingMesh.md#bakecurrenttransformintovertices)

***

### bakeTransformIntoVertices()

> **bakeTransformIntoVertices**(`transform`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:3252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L3252)

**`Experimental`**

Modifies the splats according to the passed transformation matrix.

#### Parameters

##### transform

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the transform matrix to use

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`bakeTransformIntoVertices`](../../../core/src/classes/GaussianSplattingMesh.md#baketransformintovertices)

***

### beginAnimation()

> **beginAnimation**(`name`, `loop?`, `speedRatio?`, `onAnimationEnd?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animatable`](../../../core/src/classes/Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L902)

**`Experimental`**

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animatable`](../../../core/src/classes/Animatable.md)\>

the object created for this animation. If range does not exist, it will return null

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`beginAnimation`](../../../core/src/classes/GaussianSplattingMesh.md#beginanimation)

***

### buildBoundingInfo()

> **buildBoundingInfo**(`minimum`, `maximum`, `worldMatrix?`): [`BoundingInfo`](../../../core/src/classes/BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1586](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1586)

**`Experimental`**

Creates a new bounding info for the mesh

#### Parameters

##### minimum

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

min vector of the bounding box/sphere

##### maximum

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

max vector of the bounding box/sphere

##### worldMatrix?

[`DeepImmutableObject`](../../../core/src/type-aliases/DeepImmutableObject.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the new world matrix

#### Returns

[`BoundingInfo`](../../../core/src/classes/BoundingInfo.md)

the new bounding info

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`buildBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#buildboundinginfo)

***

### calcMovePOV()

> **calcMovePOV**(`amountRight`, `amountUp`, `amountForward`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1712](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1712)

**`Experimental`**

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

[`Vector3`](../../../core/src/classes/Vector3.md)

the new displacement vector

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`calcMovePOV`](../../../core/src/classes/GaussianSplattingMesh.md#calcmovepov)

***

### calcRotatePOV()

> **calcRotatePOV**(`flipBack`, `twirlClockwise`, `tiltRight`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1744](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1744)

**`Experimental`**

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

[`Vector3`](../../../core/src/classes/Vector3.md)

the new rotation vector

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`calcRotatePOV`](../../../core/src/classes/GaussianSplattingMesh.md#calcrotatepov)

***

### cleanMatrixWeights()

> **cleanMatrixWeights**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2913)

**`Experimental`**

Renormalize the mesh and patch it up if there are no weights
  Similar to normalization by adding the weights compute the reciprocal and multiply all elements, this wil ensure that everything adds to 1.
  However in the case of zero weights then we set just a single influence to 1.
  We check in the function for extra's present and if so we use the normalizeSkinWeightsWithExtras rather than the FourWeights version.

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`cleanMatrixWeights`](../../../core/src/classes/GaussianSplattingMesh.md#cleanmatrixweights)

***

### clone()

> **clone**(`name?`): `GaussianSplattingMeshBase`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2322)

**`Experimental`**

Returns a new Mesh object generated from the current mesh properties.

#### Parameters

##### name?

`string` = `""`

is a string, the name given to the new mesh

#### Returns

`GaussianSplattingMeshBase`

a new Gaussian Splatting Mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`clone`](../../../core/src/classes/GaussianSplattingMesh.md#clone)

***

### computeWorldMatrix()

> **computeWorldMatrix**(`force?`, `camera?`): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1086](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1086)

**`Experimental`**

Computes the world matrix of the node

#### Parameters

##### force?

`boolean` = `false`

defines if the cache version should be invalidated forcing the world matrix to be created from scratch

##### camera?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Camera`](../../../core/src/classes/Camera.md)\> = `null`

defines the camera used if different from the scene active camera (This is used with modes like Billboard or infinite distance)

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

the world matrix

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`computeWorldMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#computeworldmatrix)

***

### convertToFlatShadedMesh()

> **convertToFlatShadedMesh**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3670](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3670)

**`Experimental`**

Modify the mesh to get a flat shading rendering.
This means each mesh facet will then have its own normals. Usually new vertices are added in the mesh geometry to get this result.
Warning : the mesh is really modified even if not set originally as updatable and, under the hood, a new VertexBuffer is allocated.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`convertToFlatShadedMesh`](../../../core/src/classes/GaussianSplattingMesh.md#converttoflatshadedmesh)

***

### convertToUnIndexedMesh()

> **convertToUnIndexedMesh**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3680](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3680)

**`Experimental`**

This method removes all the mesh indices and add new vertices (duplication) in order to unfold facets into buffers.
In other words, more vertices, no more indices and a single bigger VBO.
The mesh is really modified even if not set originally as updatable. Under the hood, a new VertexBuffer is allocated.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`convertToUnIndexedMesh`](../../../core/src/classes/GaussianSplattingMesh.md#converttounindexedmesh)

***

### copyVerticesData()

> **copyVerticesData**(`kind`, `vertexData`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1327)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`copyVerticesData`](../../../core/src/classes/GaussianSplattingMesh.md#copyverticesdata)

***

### createAnimationRange()

> **createAnimationRange**(`name`, `from`, `to`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L819)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`createAnimationRange`](../../../core/src/classes/GaussianSplattingMesh.md#createanimationrange)

***

### createInstance()

> **createInstance**(`name`): [`InstancedMesh`](../../../core/src/classes/InstancedMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4025](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4025)

**`Experimental`**

Creates a new InstancedMesh object from the mesh model.

#### Parameters

##### name

`string`

defines the name of the new instance

#### Returns

[`InstancedMesh`](../../../core/src/classes/InstancedMesh.md)

a new InstancedMesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/copies/instances

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`createInstance`](../../../core/src/classes/GaussianSplattingMesh.md#createinstance)

***

### createNormals()

> **createNormals**(`updatable`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2878)

**`Experimental`**

Creates new normals data for the mesh

#### Parameters

##### updatable

`boolean`

defines if the normal vertex buffer must be flagged as updatable

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`createNormals`](../../../core/src/classes/GaussianSplattingMesh.md#createnormals)

***

### createOrUpdateSubmeshesOctree()

> **createOrUpdateSubmeshesOctree**(`maxCapacity?`, `maxDepth?`): [`Octree`](../../../core/src/classes/Octree.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.types.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.types.ts#L47)

**`Experimental`**

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

[`Octree`](../../../core/src/classes/Octree.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>

the new octree

#### See

 - https://www.babylonjs-playground.com/#NA4OQ#12
 - https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`createOrUpdateSubmeshesOctree`](../../../core/src/classes/GaussianSplattingMesh.md#createorupdatesubmeshesoctree)

***

### deleteAnimationRange()

> **deleteAnimationRange**(`name`, `deleteFrames?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:836](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L836)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`deleteAnimationRange`](../../../core/src/classes/GaussianSplattingMesh.md#deleteanimationrange)

***

### detachFromBone()

> **detachFromBone**(`resetToPreviousParent?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:909](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L909)

**`Experimental`**

Detach the transform node if its associated with a bone

#### Parameters

##### resetToPreviousParent?

`boolean` = `false`

Indicates if the parent that was in effect when attachToBone was called should be set back or if we should set parent to null instead (defaults to the latter)

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

this object

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`detachFromBone`](../../../core/src/classes/GaussianSplattingMesh.md#detachfrombone)

***

### directRender()

> **directRender**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2679](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2679)

**`Experimental`**

Render a complete mesh by going through all submeshes

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### See

 - [simple test](https://playground.babylonjs.com/#5SPY1V#2)
 - [perf test](https://playground.babylonjs.com/#5SPY1V#5)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`directRender`](../../../core/src/classes/GaussianSplattingMesh.md#directrender)

***

### disableEdgesRendering()

> **disableEdgesRendering**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2948](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2948)

**`Experimental`**

Disables the mesh edge rendering mode

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the currentAbstractMesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`disableEdgesRendering`](../../../core/src/classes/GaussianSplattingMesh.md#disableedgesrendering)

***

### disableFacetData()

> **disableFacetData**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2848](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2848)

**`Experimental`**

Disables the feature FacetData and frees the related memory

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`disableFacetData`](../../../core/src/classes/GaussianSplattingMesh.md#disablefacetdata)

***

### dispose()

> **dispose**(`doNotRecurse?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L438)

**`Experimental`**

Disposes proxy meshes and clears part data in addition to the base class GPU resources.

#### Parameters

##### doNotRecurse?

`boolean`

Set to true to not recurse into each children

#### Returns

`void`

#### Overrides

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`dispose`](../../../core/src/classes/GaussianSplattingMesh.md#dispose)

***

### enableEdgesRendering()

> **enableEdgesRendering**(`epsilon?`, `checkVerticesInsteadOfIndices?`, `options?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2963](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2963)

**`Experimental`**

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

[`IEdgesRendererOptions`](../../../core/src/interfaces/IEdgesRendererOptions.md)

options to the edge renderer

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the currentAbstractMesh

#### See

https://www.babylonjs-playground.com/#19O9TU#0

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`enableEdgesRendering`](../../../core/src/classes/GaussianSplattingMesh.md#enableedgesrendering)

***

### evaluateOptimalLods()

> **evaluateOptimalLods**(`camera?`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L456)

**`Experimental`**

Re-evaluates the optimal LOD for every node based on the camera position. The result is stored in
each node's `optimalLod`. Rendering is unaffected; this currently drives only diagnostics and the
debug wireframe display.

#### Parameters

##### camera?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Camera`](../../../core/src/classes/Camera.md)\> = `...`

camera to evaluate against (defaults to the scene's active camera)

#### Returns

`void`

***

### flipFaces()

> **flipFaces**(`flipNormals?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3690](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3690)

**`Experimental`**

Inverses facet orientations.
Warning : the mesh is really modified even if not set originally as updatable. A new VertexBuffer is created under the hood each call.

#### Parameters

##### flipNormals?

`boolean` = `false`

will also inverts the normals

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`flipFaces`](../../../core/src/classes/GaussianSplattingMesh.md#flipfaces)

***

### forceSharedVertices()

> **forceSharedVertices**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3878)

**`Experimental`**

Force adjacent facets to share vertices and remove any facets that have all vertices in a line
This will undo any application of covertToFlatShadedMesh
Warning : the mesh is really modified even if not set originally as updatable. A new VertexBuffer is created under the hood each call.

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`forceSharedVertices`](../../../core/src/classes/GaussianSplattingMesh.md#forcesharedvertices)

***

### freezeNormals()

> **freezeNormals**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1581)

**`Experimental`**

This function affects parametric shapes on vertex position update only : ribbons, tubes, etc. It has no effect at all on other shapes. It prevents the mesh normals from being recomputed on next `positions` array update.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`freezeNormals`](../../../core/src/classes/GaussianSplattingMesh.md#freezenormals)

***

### freezeWorldMatrix()

> **freezeWorldMatrix**(`newWorldMatrix?`, `decompose?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L473)

**`Experimental`**

Prevents the World matrix to be computed any longer.
Please note that the "moral" contract is that the world matrix is not going to be updated anymore. It is up to the developer to force updates.
You trade flexibility for performance. If you want to update it, you have to unfreeze it first.

#### Parameters

##### newWorldMatrix?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\> = `null`

defines an optional matrix to use as world matrix

##### decompose?

`boolean` = `false`

defines whether to decompose the given newWorldMatrix or directly assign

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`freezeWorldMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#freezeworldmatrix)

***

### getAbsolutePivotPoint()

> **getAbsolutePivotPoint**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L738)

**`Experimental`**

Returns a new Vector3 set with the mesh pivot point World coordinates.

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3 set with the mesh pivot point World coordinates.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getAbsolutePivotPoint`](../../../core/src/classes/GaussianSplattingMesh.md#getabsolutepivotpoint)

***

### getAbsolutePivotPointToRef()

> **getAbsolutePivotPointToRef**(`result`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:749](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L749)

**`Experimental`**

Sets the Vector3 "result" coordinates with the mesh pivot point World coordinates.

#### Parameters

##### result

[`Vector3`](../../../core/src/classes/Vector3.md)

vector3 to store the result

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

this TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getAbsolutePivotPointToRef`](../../../core/src/classes/GaussianSplattingMesh.md#getabsolutepivotpointtoref)

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L515)

**`Experimental`**

Returns the mesh absolute position in the World.

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a Vector3.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getAbsolutePosition`](../../../core/src/classes/GaussianSplattingMesh.md#getabsoluteposition)

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3181)

**`Experimental`**

Returns as a new array populated with the mesh material and/or skeleton, if any.

#### Returns

[`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

an array of IAnimatable

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getAnimatables`](../../../core/src/classes/GaussianSplattingMesh.md#getanimatables)

***

### getAnimationByName()

> **getAnimationByName**(`name`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:801](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L801)

**`Experimental`**

Get an animation by name

#### Parameters

##### name

`string`

defines the name of the animation to look for

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)\>

null if not found else the requested animation

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getAnimationByName`](../../../core/src/classes/GaussianSplattingMesh.md#getanimationbyname)

***

### getAnimationRange()

> **getAnimationRange**(`name`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AnimationRange`](../../../core/src/classes/AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:850](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L850)

**`Experimental`**

Get an animation range by name

#### Parameters

##### name

`string`

defines the name of the animation range to look for

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AnimationRange`](../../../core/src/classes/AnimationRange.md)\>

null if not found else the requested animation range

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getAnimationRange`](../../../core/src/classes/GaussianSplattingMesh.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AnimationRange`](../../../core/src/classes/AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L885)

**`Experimental`**

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AnimationRange`](../../../core/src/classes/AnimationRange.md)\>[]

an array

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getAnimationRanges`](../../../core/src/classes/GaussianSplattingMesh.md#getanimationranges)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Node`](../../../core/src/classes/Node.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:482](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L482)

**`Experimental`**

Gets an attached behavior by name

#### Parameters

##### name

`string`

defines the name of the behavior to look for

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Node`](../../../core/src/classes/Node.md)\>\>

null if behavior was not found else the requested behavior

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getBehaviorByName`](../../../core/src/classes/GaussianSplattingMesh.md#getbehaviorbyname)

***

### getBoundingInfo()

> **getBoundingInfo**(): [`BoundingInfo`](../../../core/src/classes/BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1540)

**`Experimental`**

Returns the mesh BoundingInfo object or creates a new one and returns if it was undefined.
Note that it returns a shallow bounding of the mesh (i.e. it does not include children).
However, if the mesh contains thin instances, it will be expanded to include them. If you want the "raw" bounding data instead, then use `getRawBoundingInfo()`.
To get the full bounding of all children, call `getHierarchyBoundingVectors` instead.

#### Returns

[`BoundingInfo`](../../../core/src/classes/BoundingInfo.md)

a BoundingInfo

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#getboundinginfo)

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

**`Experimental`**

Get all child-meshes of this node

##### Type Parameters

###### T

`T` *extends* [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getChildMeshes`](../../../core/src/classes/GaussianSplattingMesh.md#getchildmeshes)

#### Call Signature

> **getChildMeshes**(`directDescendantsOnly?`, `predicate?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L735)

**`Experimental`**

Get all child-meshes of this node

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

an array of AbstractMesh

##### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getChildMeshes`](../../../core/src/classes/GaussianSplattingMesh.md#getchildmeshes)

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

**`Experimental`**

Get all direct children of this node

##### Type Parameters

###### T

`T` *extends* [`Node`](../../../core/src/classes/Node.md)

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getChildren`](../../../core/src/classes/GaussianSplattingMesh.md#getchildren)

#### Call Signature

> **getChildren**(`predicate?`, `directDescendantsOnly?`): [`Node`](../../../core/src/classes/Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:765](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L765)

**`Experimental`**

Get all direct children of this node

##### Parameters

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

[`Node`](../../../core/src/classes/Node.md)[]

an array of Node

##### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getChildren`](../../../core/src/classes/GaussianSplattingMesh.md#getchildren)

***

### getChildTransformNodes()

> **getChildTransformNodes**(`directDescendantsOnly?`, `predicate?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1500](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1500)

**`Experimental`**

Get all child-transformNodes of this node

#### Parameters

##### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

##### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)[]

an array of TransformNode

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getChildTransformNodes`](../../../core/src/classes/GaussianSplattingMesh.md#getchildtransformnodes)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L351)

**`Experimental`**

Returns the class name

#### Returns

`string`

"GaussianSplattingMesh"

#### Overrides

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getClassName`](../../../core/src/classes/GaussianSplattingMesh.md#getclassname)

***

### getClosestFacetAtCoordinates()

> **getClosestFacetAtCoordinates**(`x`, `y`, `z`, `projected?`, `checkFace?`, `facing?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2752)

**`Experimental`**

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

[`Vector3`](../../../core/src/classes/Vector3.md)

sets as the (x,y,z) world projection on the facet

##### checkFace?

`boolean` = `false`

if true (default false), only the facet "facing" to (x,y,z) or only the ones "turning their backs", according to the parameter "facing" are returned

##### facing?

`boolean` = `true`

if facing and checkFace are true, only the facet "facing" to (x, y, z) are returned : positive dot (x, y, z) * facet position. If facing si false and checkFace is true, only the facet "turning their backs" to (x, y, z) are returned : negative dot (x, y, z) * facet position

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

the face index if found (or null instead)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getClosestFacetAtCoordinates`](../../../core/src/classes/GaussianSplattingMesh.md#getclosestfacetatcoordinates)

***

### getClosestFacetAtLocalCoordinates()

> **getClosestFacetAtLocalCoordinates**(`x`, `y`, `z`, `projected?`, `checkFace?`, `facing?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2777](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2777)

**`Experimental`**

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

[`Vector3`](../../../core/src/classes/Vector3.md)

sets as the (x,y,z) local projection on the facet

##### checkFace?

`boolean` = `false`

if true (default false), only the facet "facing" to (x,y,z) or only the ones "turning their backs", according to the parameter "facing" are returned

##### facing?

`boolean` = `true`

if facing and checkFace are true, only the facet "facing" to (x, y, z) are returned : positive dot (x, y, z) * facet position. If facing si false and checkFace is true, only the facet "turning their backs" to (x, y, z) are returned : negative dot (x, y, z) * facet position

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

the face index if found (or null instead)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getClosestFacetAtLocalCoordinates`](../../../core/src/classes/GaussianSplattingMesh.md#getclosestfacetatlocalcoordinates)

***

### getConnectedParticleSystems()

> **getConnectedParticleSystems**(): [`IParticleSystem`](../../../core/src/interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2971](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2971)

**`Experimental`**

This function returns all of the particle systems in the scene that use the mesh as an emitter.

#### Returns

[`IParticleSystem`](../../../core/src/interfaces/IParticleSystem.md)[]

an array of particle systems in the scene that use the mesh as an emitter

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getConnectedParticleSystems`](../../../core/src/classes/GaussianSplattingMesh.md#getconnectedparticlesystems)

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

**`Experimental`**

Will return all nodes that have this node as ascendant

##### Type Parameters

###### T

`T` *extends* [`Node`](../../../core/src/classes/Node.md)

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getDescendants`](../../../core/src/classes/GaussianSplattingMesh.md#getdescendants)

#### Call Signature

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Node`](../../../core/src/classes/Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:705](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L705)

**`Experimental`**

Will return all nodes that have this node as ascendant

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`Node`](../../../core/src/classes/Node.md)[]

all children nodes of all types

##### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getDescendants`](../../../core/src/classes/GaussianSplattingMesh.md#getdescendants)

***

### getDirection()

> **getDirection**(`localAxis`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:647](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L647)

**`Experimental`**

Returns a new Vector3 that is the localAxis, expressed in the mesh local space, rotated like the mesh.
This Vector3 is expressed in the World space.

#### Parameters

##### localAxis

[`Vector3`](../../../core/src/classes/Vector3.md)

axis to rotate

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3 that is the localAxis, expressed in the mesh local space, rotated like the mesh.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getDirection`](../../../core/src/classes/GaussianSplattingMesh.md#getdirection)

***

### getDirectionToRef()

> **getDirectionToRef**(`localAxis`, `result`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:663](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L663)

**`Experimental`**

Sets the Vector3 "result" as the rotated Vector3 "localAxis" in the same rotation than the mesh.
localAxis is expressed in the mesh local space.
result is computed in the World space from the mesh World matrix.

#### Parameters

##### localAxis

[`Vector3`](../../../core/src/classes/Vector3.md)

axis to rotate

##### result

[`Vector3`](../../../core/src/classes/Vector3.md)

the resulting transformnode

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

this TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getDirectionToRef`](../../../core/src/classes/GaussianSplattingMesh.md#getdirectiontoref)

***

### getDistanceToCamera()

> **getDistanceToCamera**(`camera?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1425)

**`Experimental`**

Returns the distance from the mesh to the active camera

#### Parameters

##### camera?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Camera`](../../../core/src/classes/Camera.md)\> = `null`

defines the camera to use

#### Returns

`number`

the distance

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getDistanceToCamera`](../../../core/src/classes/GaussianSplattingMesh.md#getdistancetocamera)

***

### getEmittedParticleSystems()

> **getEmittedParticleSystems**(): [`IParticleSystem`](../../../core/src/interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemComponent.types.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystemComponent.types.ts#L45)

**`Experimental`**

Returns an array populated with IParticleSystem objects whose the mesh is the emitter

#### Returns

[`IParticleSystem`](../../../core/src/interfaces/IParticleSystem.md)[]

an array of IParticleSystem

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getEmittedParticleSystems`](../../../core/src/classes/GaussianSplattingMesh.md#getemittedparticlesystems)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](../../../core/src/classes/AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L407)

**`Experimental`**

Gets the engine of the node

#### Returns

[`AbstractEngine`](../../../core/src/classes/AbstractEngine.md)

a Engine

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getEngine`](../../../core/src/classes/GaussianSplattingMesh.md#getengine)

***

### getFacetDataParameters()

> **getFacetDataParameters**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2839](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2839)

**`Experimental`**

Returns the object "parameter" set with all the expected parameters for facetData computation by ComputeNormals()

#### Returns

`any`

the parameters

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetDataParameters`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetdataparameters)

***

### getFacetLocalNormals()

> **getFacetLocalNormals**(): [`Vector3`](../../../core/src/classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2631](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2631)

**`Experimental`**

Returns the facetLocalNormals array.
The normals are expressed in the mesh local spac

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)[]

an array of Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetLocalNormals`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetlocalnormals)

***

### getFacetLocalPartitioning()

> **getFacetLocalPartitioning**(): `number`[][]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2658](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2658)

**`Experimental`**

Returns the facetLocalPartitioning array

#### Returns

`number`[][]

an array of array of numbers

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetLocalPartitioning`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetlocalpartitioning)

***

### getFacetLocalPositions()

> **getFacetLocalPositions**(): [`Vector3`](../../../core/src/classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2645](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2645)

**`Experimental`**

Returns the facetLocalPositions array.
The facet positions are expressed in the mesh local space

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)[]

an array of Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetLocalPositions`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetlocalpositions)

***

### getFacetNormal()

> **getFacetNormal**(`i`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2701)

**`Experimental`**

Returns the i-th facet normal in the world system.
This method allocates a new Vector3 per call

#### Parameters

##### i

`number`

defines the facet index

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetNormal`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetnormal)

***

### getFacetNormalToRef()

> **getFacetNormalToRef**(`i`, `ref`): `GaussianSplattingStream`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2714](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2714)

**`Experimental`**

Sets the reference Vector3 with the i-th facet normal in the world system

#### Parameters

##### i

`number`

defines the facet index

##### ref

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the target vector

#### Returns

`GaussianSplattingStream`

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetNormalToRef`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetnormaltoref)

***

### getFacetPosition()

> **getFacetPosition**(`i`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2674](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2674)

**`Experimental`**

Returns the i-th facet position in the world system.
This method allocates a new Vector3 per call

#### Parameters

##### i

`number`

defines the facet index

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetPosition`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetposition)

***

### getFacetPositionToRef()

> **getFacetPositionToRef**(`i`, `ref`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2687](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2687)

**`Experimental`**

Sets the reference Vector3 with the i-th facet position in the world system

#### Parameters

##### i

`number`

defines the facet index

##### ref

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the target vector

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetPositionToRef`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetpositiontoref)

***

### getFacetsAtLocalCoordinates()

> **getFacetsAtLocalCoordinates**(`x`, `y`, `z`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2728](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2728)

**`Experimental`**

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`[]\>

the array of facet indexes

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getFacetsAtLocalCoordinates`](../../../core/src/classes/GaussianSplattingMesh.md#getfacetsatlocalcoordinates)

***

### getHierarchyBoundingVectors()

> **getHierarchyBoundingVectors**(`includeDescendants?`, `predicate?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L231)

**`Experimental`**

Replaces the base hierarchy bounds computation for compound meshes: computes world bounds
from scratch by iterating part 0's local AABB and all proxy meshes, rather than delegating
to the base _children traversal which never reaches proxies (they are not parented to the
compound). Visibility per-part is respected; invisible parts are excluded.

#### Parameters

##### includeDescendants?

`boolean` = `true`

when true, includes descendants (default: true)

##### predicate?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`abstractMesh`) => `boolean`\> = `null`

optional filter predicate

#### Returns

`object`

world-space min/max of the hierarchy bounding box

##### max

> **max**: [`Vector3`](../../../core/src/classes/Vector3.md)

##### min

> **min**: [`Vector3`](../../../core/src/classes/Vector3.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getHierarchyBoundingVectors`](../../../core/src/classes/GaussianSplattingMesh.md#gethierarchyboundingvectors)

***

### getHierarchyEmittedParticleSystems()

> **getHierarchyEmittedParticleSystems**(): [`IParticleSystem`](../../../core/src/interfaces/IParticleSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemComponent.types.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystemComponent.types.ts#L51)

**`Experimental`**

Returns an array populated with IParticleSystem objects whose the mesh or its children are the emitter

#### Returns

[`IParticleSystem`](../../../core/src/interfaces/IParticleSystem.md)[]

an array of IParticleSystem

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getHierarchyEmittedParticleSystems`](../../../core/src/classes/GaussianSplattingMesh.md#gethierarchyemittedparticlesystems)

***

### getIndices()

> **getIndices**(`copyWhenShared?`, `forceCopy?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`IndicesArray`](../../../core/src/type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1466](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1466)

**`Experimental`**

Returns an array of integers or a typed array (Int32Array, Uint32Array, Uint16Array) populated with the mesh indices.

#### Parameters

##### copyWhenShared?

`boolean`

If true (default false) and and if the mesh geometry is shared among some other meshes, the returned array is a copy of the internal one.

##### forceCopy?

`boolean`

defines a boolean indicating that the returned array must be cloned upon returning it

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`IndicesArray`](../../../core/src/type-aliases/IndicesArray.md)\>

the indices array or an empty array if the mesh has no geometry

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getIndices`](../../../core/src/classes/GaussianSplattingMesh.md#getindices)

***

### getLoadingPromise()

> **getLoadingPromise**(): `Promise`\<`void`\> \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1134)

**`Experimental`**

Get the loading promise when loading the mesh from a URL in the constructor

#### Returns

`Promise`\<`void`\> \| `null`

constructor loading promise or null if no URL was provided

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getLoadingPromise`](../../../core/src/classes/GaussianSplattingMesh.md#getloadingpromise)

***

### getLOD()

> **getLOD**(`camera`, `boundingSphere?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1209)

**`Experimental`**

Returns the registered LOD mesh distant from the parameter `camera` position if any, else returns the current mesh.

#### Parameters

##### camera

[`Camera`](../../../core/src/classes/Camera.md)

defines the camera to use to compute distance

##### boundingSphere?

[`BoundingSphere`](../../../core/src/classes/BoundingSphere.md)

defines a custom bounding sphere to use instead of the one from this mesh

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

This mesh (for chaining)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getLOD`](../../../core/src/classes/GaussianSplattingMesh.md#getlod)

***

### getLODLevelAtDistance()

> **getLODLevelAtDistance**(`distance`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1169)

**`Experimental`**

Returns the LOD level mesh at the passed distance or null if not found.

#### Parameters

##### distance

`number`

The distance from the center of the object to show this level

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

a Mesh or `null`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getLODLevelAtDistance`](../../../core/src/classes/GaussianSplattingMesh.md#getlodlevelatdistance)

***

### getLODLevels()

> **getLODLevels**(): [`MeshLODLevel`](../../../core/src/classes/MeshLODLevel.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1117)

**`Experimental`**

Gets the list of MeshLODLevel associated with the current mesh

#### Returns

[`MeshLODLevel`](../../../core/src/classes/MeshLODLevel.md)[]

an array of MeshLODLevel

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getLODLevels`](../../../core/src/classes/GaussianSplattingMesh.md#getlodlevels)

***

### getMaterialForRenderPass()

> **getMaterialForRenderPass**(`renderPassId`): [`Material`](../../../core/src/classes/Material.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:770](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L770)

**`Experimental`**

Gets the material used to render the mesh in a specific render pass

#### Parameters

##### renderPassId

`number`

render pass id

#### Returns

[`Material`](../../../core/src/classes/Material.md) \| `undefined`

material used for the render pass. If no specific material is used for this render pass, undefined is returned (meaning mesh.material is used for this pass)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getMaterialForRenderPass`](../../../core/src/classes/GaussianSplattingMesh.md#getmaterialforrenderpass)

***

### getMeshUniformBuffer()

> **getMeshUniformBuffer**(): [`UniformBuffer`](../../../core/src/classes/UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1159)

**`Experimental`**

Gets the mesh uniform buffer.

#### Returns

[`UniformBuffer`](../../../core/src/classes/UniformBuffer.md)

the uniform buffer of the mesh.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getMeshUniformBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#getmeshuniformbuffer)

***

### getNormalsData()

> **getNormalsData**(`applySkeleton?`, `applyMorph?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1926](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1926)

**`Experimental`**

Get the normals vertex data and optionally apply skeleton and morphing.

#### Parameters

##### applySkeleton?

`boolean` = `false`

defines whether to apply the skeleton

##### applyMorph?

`boolean` = `false`

defines whether to apply the morph target

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)\>

the normals data

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getNormalsData`](../../../core/src/classes/GaussianSplattingMesh.md#getnormalsdata)

***

### getPartVisibility()

> **getPartVisibility**(`partIndex`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L453)

**`Experimental`**

Gets the visibility for a specific part of the compound.

#### Parameters

##### partIndex

`number`

index of the part, that must be between 0 and partCount - 1

#### Returns

`number`

the visibility value (0.0 to 1.0) for the part

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPartVisibility`](../../../core/src/classes/GaussianSplattingMesh.md#getpartvisibility)

***

### getPhysicsBody()

> **getPhysicsBody**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`PhysicsBody`](../../../core/src/classes/PhysicsBody.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsEngineComponent.types.ts#L20)

**`Experimental`**

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`PhysicsBody`](../../../core/src/classes/PhysicsBody.md)\>

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPhysicsBody`](../../../core/src/classes/GaussianSplattingMesh.md#getphysicsbody)

***

### getPhysicsImpostor()

> **getPhysicsImpostor**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`PhysicsImpostor`](../../../core/src/classes/PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L24)

**`Experimental`**

Gets the current physics impostor

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`PhysicsImpostor`](../../../core/src/classes/PhysicsImpostor.md)\>

a physics impostor or null

#### See

https://doc.babylonjs.com/features/featuresDeepDive/physics

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPhysicsImpostor`](../../../core/src/classes/GaussianSplattingMesh.md#getphysicsimpostor)

***

### getPivotMatrix()

> **getPivotMatrix**(): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L432)

**`Experimental`**

Returns the mesh pivot matrix.
Default : Identity.

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

the matrix

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPivotMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#getpivotmatrix)

***

### getPivotPoint()

> **getPivotPoint**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:716](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L716)

**`Experimental`**

Returns a new Vector3 set with the mesh pivot point coordinates in the local space.

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the pivot point

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPivotPoint`](../../../core/src/classes/GaussianSplattingMesh.md#getpivotpoint)

***

### getPivotPointToRef()

> **getPivotPointToRef**(`result`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:727](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L727)

**`Experimental`**

Sets the passed Vector3 "result" with the coordinates of the mesh pivot point in the local space.

#### Parameters

##### result

[`Vector3`](../../../core/src/classes/Vector3.md)

the vector3 to store the result

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

this TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPivotPointToRef`](../../../core/src/classes/GaussianSplattingMesh.md#getpivotpointtoref)

***

### getPoseMatrix()

> **getPoseMatrix**(): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L319)

**`Experimental`**

Returns the mesh Pose matrix.

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

the pose matrix

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPoseMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#getposematrix)

***

### getPositionData()

> **getPositionData**(`applySkeleton?`, `applyMorph?`, `data?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1937](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1937)

**`Experimental`**

Get the position vertex data and optionally apply skeleton and morphing.

#### Parameters

##### applySkeleton?

`boolean` = `false`

defines whether to apply the skeleton

##### applyMorph?

`boolean` = `false`

defines whether to apply the morph target

##### data?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)\> = `null`

defines the position data to apply the skeleton and morph to

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)\>

the position data

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPositionData`](../../../core/src/classes/GaussianSplattingMesh.md#getpositiondata)

***

### getPositionExpressedInLocalSpace()

> **getPositionExpressedInLocalSpace**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L573)

**`Experimental`**

Returns the mesh position in the local space from the current World matrix values.

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a new Vector3.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPositionExpressedInLocalSpace`](../../../core/src/classes/GaussianSplattingMesh.md#getpositionexpressedinlocalspace)

***

### getPositionInCameraSpace()

> **getPositionInCameraSpace**(`camera?`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1412)

**`Experimental`**

Gets the position of the current mesh in camera space

#### Parameters

##### camera?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Camera`](../../../core/src/classes/Camera.md)\> = `null`

defines the camera to use

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a position

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getPositionInCameraSpace`](../../../core/src/classes/GaussianSplattingMesh.md#getpositionincameraspace)

***

### getRawBoundingInfo()

> **getRawBoundingInfo**(): [`BoundingInfo`](../../../core/src/classes/BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1558)

**`Experimental`**

Returns the bounding info unnafected by instance data.

#### Returns

[`BoundingInfo`](../../../core/src/classes/BoundingInfo.md)

the bounding info of the mesh unaffected by instance data.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getRawBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#getrawboundinginfo)

***

### getScene()

> **getScene**(): [`Scene`](../../../core/src/classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L399)

**`Experimental`**

Gets the scene of the node

#### Returns

[`Scene`](../../../core/src/classes/Scene.md)

a scene

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getScene`](../../../core/src/classes/GaussianSplattingMesh.md#getscene)

***

### getTotalIndices()

> **getTotalIndices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1453)

**`Experimental`**

Returns a positive integer : the total number of indices in this mesh geometry.

#### Returns

`number`

the number of indices or zero if the mesh has no geometry.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getTotalIndices`](../../../core/src/classes/GaussianSplattingMesh.md#gettotalindices)

***

### getTotalVertices()

> **getTotalVertices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1150)

**`Experimental`**

Returns the total number of vertices (splats) within the mesh

#### Returns

`number`

the total number of vertices

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getTotalVertices`](../../../core/src/classes/GaussianSplattingMesh.md#gettotalvertices)

***

### getVertexBuffer()

> **getVertexBuffer**(`kind`, `bypassInstanceData?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`VertexBuffer`](../../../core/src/classes/VertexBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1352)

**`Experimental`**

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`VertexBuffer`](../../../core/src/classes/VertexBuffer.md)\>

a FloatArray or null if the mesh has no vertex buffer for this kind.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getVertexBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#getvertexbuffer)

***

### getVerticesData()

> **getVerticesData**(`kind`, `copyWhenShared?`, `forceCopy?`, `bypassInstanceData?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1306)

**`Experimental`**

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)\>

a FloatArray or null if the mesh has no geometry or no vertex buffer for this kind.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getVerticesData`](../../../core/src/classes/GaussianSplattingMesh.md#getverticesdata)

***

### getVerticesDataKinds()

> **getVerticesDataKinds**(`bypassInstanceData?`): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1428)

**`Experimental`**

Returns a string which contains the list of existing `kinds` of Vertex Data associated with this mesh.

#### Parameters

##### bypassInstanceData?

`boolean`

defines a boolean indicating that the function should not take into account the instance data (applies only if the mesh has instances). Default: false

#### Returns

`string`[]

an array of strings

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getVerticesDataKinds`](../../../core/src/classes/GaussianSplattingMesh.md#getverticesdatakinds)

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1649](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1649)

**`Experimental`**

Gets the current world matrix

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

a Matrix

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getWorldMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#getworldmatrix)

***

### getWorldMatrixForPart()

> **getWorldMatrixForPart**(`partIndex`): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L444)

**`Experimental`**

Gets the world matrix for a specific part of the compound.

#### Parameters

##### partIndex

`number`

index of the part, that must be between 0 and partCount - 1

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

the world matrix for the part, or the current world matrix of the mesh if the part is not found

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`getWorldMatrixForPart`](../../../core/src/classes/GaussianSplattingMesh.md#getworldmatrixforpart)

***

### increaseVertices()

> **increaseVertices**(`numberPerEdge?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3720](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3720)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`increaseVertices`](../../../core/src/classes/GaussianSplattingMesh.md#increasevertices)

***

### instantiateHierarchy()

> **instantiateHierarchy**(`newParent?`, `options?`, `onNewNodeCreated?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1011](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1011)

**`Experimental`**

Instantiate (when possible) or clone that node with its hierarchy

#### Parameters

##### newParent?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\> = `null`

defines the new parent to use for the instance (or clone)

##### options?

defines options to configure how copy is done

###### doNotInstantiate

`boolean` \| ((`node`) => `boolean`)

##### onNewNodeCreated?

(`source`, `clone`) => `void`

defines an option callback to call when a clone or an instance is created

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

an instance (or a clone) of the current node with its hierarchy

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`instantiateHierarchy`](../../../core/src/classes/GaussianSplattingMesh.md#instantiatehierarchy)

***

### intersects()

> **intersects**(`ray`, `fastCheck?`, `trianglePredicate?`, `onlyBoundingInfo?`, `worldToUse?`, `skipBoundingInfo?`): [`PickingInfo`](../../../core/src/classes/PickingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2204)

**`Experimental`**

Checks if the passed Ray intersects with the mesh. A mesh triangle can be picked both from its front and back sides,
irrespective of orientation.

#### Parameters

##### ray

[`Ray`](../../../core/src/classes/Ray.md)

defines the ray to use. It should be in the mesh's LOCAL coordinate space.

##### fastCheck?

`boolean`

defines if fast mode (but less precise) must be used (false by default)

##### trianglePredicate?

[`TrianglePickingPredicate`](../../../core/src/type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

##### onlyBoundingInfo?

`boolean` = `false`

defines a boolean indicating if picking should only happen using bounding info (false by default)

##### worldToUse?

[`Matrix`](../../../core/src/classes/Matrix.md)

defines the world matrix to use to get the world coordinate of the intersection point

##### skipBoundingInfo?

`boolean` = `false`

a boolean indicating if we should skip the bounding info check

#### Returns

[`PickingInfo`](../../../core/src/classes/PickingInfo.md)

the picking info

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/mesh_intersect

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`intersects`](../../../core/src/classes/GaussianSplattingMesh.md#intersects)

***

### intersectsMesh()

> **intersectsMesh**(`mesh`, `precise?`, `includeDescendants?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2005)

**`Experimental`**

True if the mesh intersects another mesh or a SolidParticle object

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md) \| [`SolidParticle`](../../../core/src/classes/SolidParticle.md)

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`intersectsMesh`](../../../core/src/classes/GaussianSplattingMesh.md#intersectsmesh)

***

### intersectsPoint()

> **intersectsPoint**(`point`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2029](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2029)

**`Experimental`**

Returns true if the passed point (Vector3) is inside the mesh bounding box

#### Parameters

##### point

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the point to test

#### Returns

`boolean`

true if there is an intersection

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`intersectsPoint`](../../../core/src/classes/GaussianSplattingMesh.md#intersectspoint)

***

### isCompletelyInFrustum()

> **isCompletelyInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1994](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1994)

**`Experimental`**

Returns `true` if the mesh is completely in the frustum defined be the passed array of planes.
A mesh is completely in the frustum if its bounding box it completely inside the frustum.

#### Parameters

##### frustumPlanes

[`Plane`](../../../core/src/classes/Plane.md)[]

defines the frustum to test

#### Returns

`boolean`

true if the mesh is completely in the frustum planes

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isCompletelyInFrustum`](../../../core/src/classes/GaussianSplattingMesh.md#iscompletelyinfrustum)

***

### isDescendantOf()

> **isDescendantOf**(`ancestor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:659](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L659)

**`Experimental`**

Is this node a descendant of the given node?
The function will iterate up the hierarchy until the ancestor was found or no more parents defined

#### Parameters

##### ancestor

[`Node`](../../../core/src/classes/Node.md)

defines the parent node to inspect

#### Returns

`boolean`

a boolean indicating if this node is a descendant of the given node

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isDescendantOf`](../../../core/src/classes/GaussianSplattingMesh.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L214)

**`Experimental`**

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isDisposed`](../../../core/src/classes/GaussianSplattingMesh.md#isdisposed)

***

### isEnabled()

> **isEnabled**(`checkAncestors?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:617](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L617)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isEnabled`](../../../core/src/classes/GaussianSplattingMesh.md#isenabled)

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3137)

**`Experimental`**

Returns `true` if the mesh is within the frustum defined by the passed array of planes.
A mesh is in the frustum if its bounding box intersects the frustum

#### Parameters

##### frustumPlanes

[`Plane`](../../../core/src/classes/Plane.md)[]

defines the frustum to test

#### Returns

`boolean`

true if the mesh is in the frustum planes

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isInFrustum`](../../../core/src/classes/GaussianSplattingMesh.md#isinfrustum)

***

### isReady()

> **isReady**(`completeCheck?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L157)

**`Experimental`**

Is this node ready to be used/rendered.
Force-syncs every part proxy's world matrix into `_partMatrices` BEFORE delegating to
the base readiness check. This guarantees that any pending proxy transform changes
(for example a user-set `proxy.position`) are reflected in the next sort post, so the
base `isReady` will only return true once `sortAppliedId === sortRequestId` for that
up-to-date state. Without this, the proxy's `onAfterWorldMatrixUpdateObservable` would
fire during the first render and queue a fresh sort AFTER readiness was reported,
leaving the rendered frame with stale splat order on `renderCount=1` runs.

#### Parameters

##### completeCheck?

`boolean` = `false`

defines if a complete check (including materials and lights) has to be done (false by default)

#### Returns

`boolean`

true when ready

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isReady`](../../../core/src/classes/GaussianSplattingMesh.md#isready)

***

### isUsingPivotMatrix()

> **isUsingPivotMatrix**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L207)

**`Experimental`**

return true if a pivot has been set

#### Returns

`boolean`

true if a pivot matrix is used

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isUsingPivotMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#isusingpivotmatrix)

***

### isUsingPostMultiplyPivotMatrix()

> **isUsingPostMultiplyPivotMatrix**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L214)

**`Experimental`**

#### Returns

`boolean`

true if pivot matrix must be cancelled in the world matrix. When this parameter is set to true (default), the inverse of the pivot matrix is also applied at the end to cancel the transformation effect.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isUsingPostMultiplyPivotMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#isusingpostmultiplypivotmatrix)

***

### isVertexBufferUpdatable()

> **isVertexBufferUpdatable**(`kind`, `bypassInstanceData?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1407)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isVertexBufferUpdatable`](../../../core/src/classes/GaussianSplattingMesh.md#isvertexbufferupdatable)

***

### isVerticesDataPresent()

> **isVerticesDataPresent**(`kind`, `bypassInstanceData?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1379](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1379)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isVerticesDataPresent`](../../../core/src/classes/GaussianSplattingMesh.md#isverticesdatapresent)

***

### isWorldMatrixCameraDependent()

> **isWorldMatrixCameraDependent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1076](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1076)

**`Experimental`**

Returns whether the transform node world matrix computation needs the camera information to be computed.
This is the case when the node is a billboard or has an infinite distance for instance.

#### Returns

`boolean`

true if the world matrix computation needs the camera information to be computed

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`isWorldMatrixCameraDependent`](../../../core/src/classes/GaussianSplattingMesh.md#isworldmatrixcameradependent)

***

### loadDataAsync()

> **loadDataAsync**(`data`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2233)

**`Experimental`**

Loads a .splat Gaussian Splatting array buffer asynchronously

#### Parameters

##### data

`ArrayBuffer`

arraybuffer containing splat file

#### Returns

`Promise`\<`void`\>

a promise that resolves when the operation is complete

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`loadDataAsync`](../../../core/src/classes/GaussianSplattingMesh.md#loaddataasync)

***

### ~~loadFileAsync()~~

> **loadFileAsync**(`url`, `scene?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2244)

**`Experimental`**

Loads a Gaussian or Splatting file asynchronously

#### Parameters

##### url

`string`

path to the splat file to load

##### scene?

[`Scene`](../../../core/src/classes/Scene.md)

optional scene it belongs to

#### Returns

`Promise`\<`void`\>

a promise that resolves when the operation is complete

#### Deprecated

Please use SceneLoader.ImportMeshAsync instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`loadFileAsync`](../../../core/src/classes/GaussianSplattingMesh.md#loadfileasync)

***

### locallyTranslate()

> **locallyTranslate**(`vector3`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:585](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L585)

**`Experimental`**

Translates the mesh along the passed Vector3 in its local space.

#### Parameters

##### vector3

[`Vector3`](../../../core/src/classes/Vector3.md)

the distance to translate in localspace

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`locallyTranslate`](../../../core/src/classes/GaussianSplattingMesh.md#locallytranslate)

***

### lookAt()

> **lookAt**(`targetPoint`, `yawCor?`, `pitchCor?`, `rollCor?`, `space?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:602](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L602)

**`Experimental`**

Orients a mesh towards a target point. Mesh must be drawn facing user.

#### Parameters

##### targetPoint

[`Vector3`](../../../core/src/classes/Vector3.md)

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

[`Space`](../../../core/src/enumerations/Space.md) = `Space.LOCAL`

the chosen space of the target

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`lookAt`](../../../core/src/classes/GaussianSplattingMesh.md#lookat)

***

### makeGeometryUnique()

> **makeGeometryUnique**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1966](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1966)

**`Experimental`**

Creates a un-shared specific occurence of the geometry for the mesh.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`makeGeometryUnique`](../../../core/src/classes/GaussianSplattingMesh.md#makegeometryunique)

***

### markAsDirty()

> **markAsDirty**(`property?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1350)

**`Experimental`**

Flag the AbstractMesh as dirty (Forcing it to update everything)

#### Parameters

##### property?

`string`

if set to "rotation" the objects rotationQuaternion will be set to null

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

this AbstractMesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`markAsDirty`](../../../core/src/classes/GaussianSplattingMesh.md#markasdirty)

***

### markVerticesDataAsUpdatable()

> **markVerticesDataAsUpdatable**(`kind`, `updatable?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1873](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1873)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`markVerticesDataAsUpdatable`](../../../core/src/classes/GaussianSplattingMesh.md#markverticesdataasupdatable)

***

### movePOV()

> **movePOV**(`amountRight`, `amountUp`, `amountForward`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1698](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1698)

**`Experimental`**

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

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`movePOV`](../../../core/src/classes/GaussianSplattingMesh.md#movepov)

***

### moveWithCollisions()

> **moveWithCollisions**(`displacement`, `slideOnCollide?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2062](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2062)

**`Experimental`**

Move the mesh using collision engine

#### Parameters

##### displacement

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the requested displacement vector

##### slideOnCollide?

`boolean` = `true`

If true, the mesh will slide along a collider's surface.  If false, it will stop moving at the first collision. (true by default)

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`moveWithCollisions`](../../../core/src/classes/GaussianSplattingMesh.md#movewithcollisions)

***

### normalizeToUnitCube()

> **normalizeToUnitCube**(`includeDescendants?`, `ignoreRotation?`, `predicate?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1598)

**`Experimental`**

Uniformly scales the mesh to fit inside of a unit cube (1 X 1 X 1 units)

#### Parameters

##### includeDescendants?

`boolean` = `true`

Use the hierarchy's bounding box instead of the mesh's bounding box. Default is false

##### ignoreRotation?

`boolean` = `false`

ignore rotation when computing the scale (ie. object will be axis aligned). Default is false

##### predicate?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`node`) => `boolean`\>

predicate that is passed in to getHierarchyBoundingVectors when selecting which object should be included when scaling

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`normalizeToUnitCube`](../../../core/src/classes/GaussianSplattingMesh.md#normalizetounitcube)

***

### optimizeIndices()

> **optimizeIndices**(`successCallback?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4053](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4053)

**`Experimental`**

Optimization of the mesh's indices, in case a mesh has duplicated vertices.
The function will only reorder the indices and will not remove unused vertices to avoid problems with submeshes.
This should be used together with the simplification to avoid disappearing triangles.

#### Parameters

##### successCallback?

(`mesh?`) => `void`

an optional success callback to be called after the optimization finished.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`optimizeIndices`](../../../core/src/classes/GaussianSplattingMesh.md#optimizeindices)

***

### optimizeIndicesAsync()

> **optimizeIndicesAsync**(): `Promise`\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2898)

**`Experimental`**

Optimize the indices order so that we keep the faces with similar indices together

#### Returns

`Promise`\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`optimizeIndicesAsync`](../../../core/src/classes/GaussianSplattingMesh.md#optimizeindicesasync)

***

### refreshBoundingInfo()

> **refreshBoundingInfo**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2896](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2896)

**`Experimental`**

Refreshes the bounding info, taking into account all the thin instances defined

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current Gaussian Splatting

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`refreshBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#refreshboundinginfo)

***

### registerAfterRender()

> **registerAfterRender**(`func`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2176)

**`Experimental`**

Registers for this mesh a javascript function called just after the rendering is complete

#### Parameters

##### func

(`mesh`) => `void`

defines the function to call after rendering this mesh

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`registerAfterRender`](../../../core/src/classes/GaussianSplattingMesh.md#registerafterrender)

***

### registerAfterWorldMatrixUpdate()

> **registerAfterWorldMatrixUpdate**(`func`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1392)

**`Experimental`**

If you'd like to be called back after the mesh position, rotation or scaling has been updated.

#### Parameters

##### func

(`mesh`) => `void`

callback function to add

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`registerAfterWorldMatrixUpdate`](../../../core/src/classes/GaussianSplattingMesh.md#registerafterworldmatrixupdate)

***

### registerBeforeRender()

> **registerBeforeRender**(`func`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2156)

**`Experimental`**

Registers for this mesh a javascript function called just before the rendering process

#### Parameters

##### func

(`mesh`) => `void`

defines the function to call before rendering this mesh

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`registerBeforeRender`](../../../core/src/classes/GaussianSplattingMesh.md#registerbeforerender)

***

### registerInstancedBuffer()

> **registerInstancedBuffer**(`kind`, `stride`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/instancedMesh.types.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/instancedMesh.types.ts#L13)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`registerInstancedBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#registerinstancedbuffer)

***

### releaseSubMeshes()

> **releaseSubMeshes**(`immediate?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2340)

**`Experimental`**

Disposes all the submeshes of the current mesh

#### Parameters

##### immediate?

`boolean` = `false`

should dispose the effects immediately or not

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`releaseSubMeshes`](../../../core/src/classes/GaussianSplattingMesh.md#releasesubmeshes)

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Node`](../../../core/src/classes/Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L451)

**`Experimental`**

Remove an attached behavior

#### Parameters

##### behavior

[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Node`](../../../core/src/classes/Node.md)\>

defines the behavior to attach

#### Returns

[`Node`](../../../core/src/classes/Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`removeBehavior`](../../../core/src/classes/GaussianSplattingMesh.md#removebehavior)

***

### removeChild()

> **removeChild**(`mesh`, `preserveScalingSign?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:857](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L857)

**`Experimental`**

Removes the passed mesh from the current mesh children list

#### Parameters

##### mesh

[`TransformNode`](../../../core/src/classes/TransformNode.md)

defines the child mesh

##### preserveScalingSign?

`boolean` = `false`

if true, keep scaling sign of child. Otherwise, scaling sign might change.

#### Returns

`this`

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`removeChild`](../../../core/src/classes/GaussianSplattingMesh.md#removechild)

***

### removeLODLevel()

> **removeLODLevel**(`mesh`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1187)

**`Experimental`**

Remove a mesh from the LOD array

#### Parameters

##### mesh

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

defines the mesh to be removed

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

This mesh (for chaining)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/LOD

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`removeLODLevel`](../../../core/src/classes/GaussianSplattingMesh.md#removelodlevel)

***

### ~~removePart()~~

> **removePart**(`index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:1107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L1107)

**`Experimental`**

Remove a part from this compound mesh.
The remaining parts are rebuilt directly from the compound mesh's retained source buffers.
The current mesh is reset to a plain (single-part) state and then each remaining source is
re-added via addParts.

#### Parameters

##### index

`number`

The index of the part to remove

#### Returns

`void`

#### Deprecated

Use GaussianSplattingCompoundMesh.removePart instead.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`removePart`](../../../core/src/classes/GaussianSplattingMesh.md#removepart)

***

### removeVerticesData()

> **removeVerticesData**(`kind`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1848](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1848)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`removeVerticesData`](../../../core/src/classes/GaussianSplattingMesh.md#removeverticesdata)

***

### render()

> **render**(`subMesh`, `enableAlphaMode`, `effectiveMeshReplacement?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1451)

**`Experimental`**

Triggers the draw call for the mesh. Usually, you don't need to call this method by your own because the mesh rendering is handled by the scene rendering manager

#### Parameters

##### subMesh

[`SubMesh`](../../../core/src/classes/SubMesh.md)

defines the subMesh to render

##### enableAlphaMode

`boolean`

defines if alpha mode can be changed

##### effectiveMeshReplacement?

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines an optional mesh used to provide info for the rendering

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`render`](../../../core/src/classes/GaussianSplattingMesh.md#render)

***

### renderWithRenderPassId()

> **renderWithRenderPassId**(`renderPassId?`, `enableAlphaMode?`, `effectiveMeshReplacement?`, `subMesh?`, `checkFrustumCulling?`): `GaussianSplattingStream`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2645](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2645)

**`Experimental`**

Triggers the draw call for the mesh (or a submesh), for a specific render pass id

#### Parameters

##### renderPassId?

`number`

defines the render pass id to use to draw the mesh / submesh. If not provided, use the current renderPassId of the engine.

##### enableAlphaMode?

`boolean`

defines if alpha mode can be changed (default: false)

##### effectiveMeshReplacement?

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines an optional mesh used to provide info for the rendering (default: undefined)

##### subMesh?

[`SubMesh`](../../../core/src/classes/SubMesh.md)

defines the subMesh to render. If not provided, draw all mesh submeshes (default: undefined)

##### checkFrustumCulling?

`boolean` = `true`

defines if frustum culling must be checked (default: true). If you know the mesh is in the frustum (or if you don't care!), you can pass false to optimize.

#### Returns

`GaussianSplattingStream`

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`renderWithRenderPassId`](../../../core/src/classes/GaussianSplattingMesh.md#renderwithrenderpassid)

***

### resetDrawCache()

> **resetDrawCache**(`passId?`, `immediate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1362)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`resetDrawCache`](../../../core/src/classes/GaussianSplattingMesh.md#resetdrawcache)

***

### resetLocalMatrix()

> **resetLocalMatrix**(`independentOfChildren?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1353)

**`Experimental`**

Resets this nodeTransform's local matrix to Matrix.Identity().

#### Parameters

##### independentOfChildren?

`boolean` = `true`

indicates if all child nodeTransform's world-space transform should be preserved.

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`resetLocalMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#resetlocalmatrix)

***

### rotate()

> **rotate**(`axis`, `amount`, `space?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:940](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L940)

**`Experimental`**

Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in the given space.
space (default LOCAL) can be either Space.LOCAL, either Space.WORLD.
Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.
The passed axis is also normalized.

#### Parameters

##### axis

[`Vector3`](../../../core/src/classes/Vector3.md)

the axis to rotate around

##### amount

`number`

the amount to rotate in radians

##### space?

[`Space`](../../../core/src/enumerations/Space.md)

Space to rotate in (Default: local)

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rotate`](../../../core/src/classes/GaussianSplattingMesh.md#rotate)

***

### rotateAround()

> **rotateAround**(`point`, `axis`, `amount`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:977](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L977)

**`Experimental`**

Rotates the mesh around the axis vector for the passed angle (amount) expressed in radians, in world space.
Note that the property `rotationQuaternion` is then automatically updated and the property `rotation` is set to (0,0,0) and no longer used.
The passed axis is also normalized. .
Method is based on http://www.euclideanspace.com/maths/geometry/affine/aroundPoint/index.htm

#### Parameters

##### point

[`Vector3`](../../../core/src/classes/Vector3.md)

the point to rotate around

##### axis

[`Vector3`](../../../core/src/classes/Vector3.md)

the axis to rotate around

##### amount

`number`

the amount to rotate in radians

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rotateAround`](../../../core/src/classes/GaussianSplattingMesh.md#rotatearound)

***

### rotatePOV()

> **rotatePOV**(`flipBack`, `twirlClockwise`, `tiltRight`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1731](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1731)

**`Experimental`**

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

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`rotatePOV`](../../../core/src/classes/GaussianSplattingMesh.md#rotatepov)

***

### serialize()

> **serialize**(`serializationObject?`, `encoding?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:1261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L1261)

**`Experimental`**

Serialize current GaussianSplattingMesh

#### Parameters

##### serializationObject?

`any` = `{}`

defines the object which will receive the serialization data

##### encoding?

`string` = `"base64"`

the encoding of binary data, defaults to base64 for json serialize,
kept for future internal use like cloning where base64 encoding wastes cycles and memory

#### Returns

`any`

the serialized object

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`serialize`](../../../core/src/classes/GaussianSplattingMesh.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L916)

**`Experimental`**

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`serializeAnimationRanges`](../../../core/src/classes/GaussianSplattingMesh.md#serializeanimationranges)

***

### setAbsolutePosition()

> **setAbsolutePosition**(`absolutePosition`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:525](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L525)

**`Experimental`**

Sets the mesh absolute position in the World from a Vector3 or an Array(3).

#### Parameters

##### absolutePosition

[`Vector3`](../../../core/src/classes/Vector3.md)

the absolute position to set

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setAbsolutePosition`](../../../core/src/classes/GaussianSplattingMesh.md#setabsoluteposition)

***

### setBoundingInfo()

> **setBoundingInfo**(`boundingInfo`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1567](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1567)

**`Experimental`**

Overwrite the current bounding info

#### Parameters

##### boundingInfo

[`BoundingInfo`](../../../core/src/classes/BoundingInfo.md)

defines the new bounding info

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#setboundinginfo)

***

### setDirection()

> **setDirection**(`localAxis`, `yawCor?`, `pitchCor?`, `rollCor?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:676](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L676)

**`Experimental`**

Sets this transform node rotation to the given local axis.

#### Parameters

##### localAxis

[`Vector3`](../../../core/src/classes/Vector3.md)

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

[`TransformNode`](../../../core/src/classes/TransformNode.md)

this TransformNode

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setDirection`](../../../core/src/classes/GaussianSplattingMesh.md#setdirection)

***

### setEnabled()

> **setEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L644)

**`Experimental`**

Set the enabled state of this node

#### Parameters

##### value

`boolean`

defines the new enabled state

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setEnabled`](../../../core/src/classes/GaussianSplattingMesh.md#setenabled)

***

### setIndexBuffer()

> **setIndexBuffer**(`indexBuffer`, `totalVertices`, `totalIndices`, `is32Bits?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1989](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1989)

**`Experimental`**

Sets the index buffer of this mesh.

#### Parameters

##### indexBuffer

[`DataBuffer`](../../../core/src/classes/DataBuffer.md)

Defines the index buffer to use for this mesh

##### totalVertices

`number`

Defines the total number of vertices used by the buffer

##### totalIndices

`number`

Defines the total number of indices in the index buffer

##### is32Bits?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`boolean`\> = `null`

Defines if the indices are 32 bits. If null (default), the value is guessed from the number of vertices

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setIndexBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#setindexbuffer)

***

### setIndices()

> **setIndices**(`indices`, `totalVertices?`, `updatable?`, `dontForceSubMeshRecreation?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2005)

**`Experimental`**

Set the index buffer of this mesh

#### Parameters

##### indices

[`IndicesArray`](../../../core/src/type-aliases/IndicesArray.md)

defines the source data

##### totalVertices?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\> = `null`

defines the total number of vertices referenced by this index data (can be null)

##### updatable?

`boolean` = `false`

defines if the updated index buffer must be flagged as updatable (default is false)

##### dontForceSubMeshRecreation?

`boolean` = `false`

defines a boolean indicating that we don't want to force the recreation of sub-meshes if we don't have to (false by default)

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setIndices`](../../../core/src/classes/GaussianSplattingMesh.md#setindices)

***

### setMaterialById()

> **setMaterialById**(`id`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:3156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L3156)

**`Experimental`**

Sets the mesh material by the material or multiMaterial `id` property

#### Parameters

##### id

`string`

is a string identifying the material or the multiMaterial

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setMaterialById`](../../../core/src/classes/GaussianSplattingMesh.md#setmaterialbyid)

***

### ~~setMaterialByID()~~

> **setMaterialByID**(`id`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5419)

**`Experimental`**

Sets the mesh material by the material or multiMaterial `id` property

#### Parameters

##### id

`string`

is a string identifying the material or the multiMaterial

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Deprecated

Please use MeshBuilder instead Please use setMaterialById instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setMaterialByID`](../../../core/src/classes/GaussianSplattingMesh.md#setmaterialbyid-1)

***

### setMaterialForRenderPass()

> **setMaterialForRenderPass**(`renderPassId`, `material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:779](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L779)

**`Experimental`**

Sets the material to be used to render the mesh in a specific render pass

#### Parameters

##### renderPassId

`number`

render pass id

##### material?

[`Material`](../../../core/src/classes/Material.md)

material to use for this render pass. If undefined is passed, no specific material will be used for this render pass but the regular material will be used instead (mesh.material)

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setMaterialForRenderPass`](../../../core/src/classes/GaussianSplattingMesh.md#setmaterialforrenderpass)

***

### setNormalsForCPUSkinning()

> **setNormalsForCPUSkinning**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4916)

**`Experimental`**

Prepare internal normal array for software CPU skinning

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

original normals used for CPU skinning. Useful for integrating Morphing with skeletons in same mesh.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setNormalsForCPUSkinning`](../../../core/src/classes/GaussianSplattingMesh.md#setnormalsforcpuskinning)

***

### setParent()

> **setParent**(`node`, `preserveScalingSign?`, `updatePivot?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:788](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L788)

**`Experimental`**

Defines the passed node as the parent of the current node.
The node will remain exactly where it is and its position / rotation will be updated accordingly.
If you don't want to preserve the current rotation / position, assign the parent through parent accessor.
Note that if the mesh has a pivot matrix / point defined it will be applied after the parent was updated.
In that case the node will not remain in the same space as it is, as the pivot will be applied.
To avoid this, you can set updatePivot to true and the pivot will be updated to identity

#### Parameters

##### node

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Node`](../../../core/src/classes/Node.md)\>

the node ot set as the parent

##### preserveScalingSign?

`boolean` = `false`

if true, keep scaling sign of child. Otherwise, scaling sign might change.

##### updatePivot?

`boolean` = `false`

if true, update the pivot matrix to keep the node in the same space as before

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

this TransformNode.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setParent`](../../../core/src/classes/GaussianSplattingMesh.md#setparent)

***

### setPartVisibility()

> **setPartVisibility**(`partIndex`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:462](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L462)

**`Experimental`**

Sets the visibility for a specific part of the compound.

#### Parameters

##### partIndex

`number`

index of the part, that must be between 0 and partCount - 1

##### value

`number`

the visibility value (0.0 to 1.0) to set

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setPartVisibility`](../../../core/src/classes/GaussianSplattingMesh.md#setpartvisibility)

***

### setPhysicsLinkWith()

> **setPhysicsLinkWith**(`otherMesh`, `pivot1`, `pivot2`, `options?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsEngineComponent.types.ts#L43)

**`Experimental`**

Creates a physic joint between two meshes

#### Parameters

##### otherMesh

[`Mesh`](../../../core/src/classes/Mesh.md)

defines the other mesh to use

##### pivot1

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the pivot to use on this mesh

##### pivot2

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the pivot to use on the other mesh

##### options?

`any`

defines additional options (can be plugin dependent)

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### See

https://www.babylonjs-playground.com/#0BS5U0#0

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setPhysicsLinkWith`](../../../core/src/classes/GaussianSplattingMesh.md#setphysicslinkwith)

***

### setPivotMatrix()

> **setPivotMatrix**(`matrix`, `postMultiplyPivotMatrix?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L409)

**`Experimental`**

Sets a new pivot matrix to the current node

#### Parameters

##### matrix

[`DeepImmutable`](../../../core/src/type-aliases/DeepImmutable.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

defines the new pivot matrix to use

##### postMultiplyPivotMatrix?

`boolean` = `true`

defines if the pivot matrix must be cancelled in the world matrix. When this parameter is set to true (default), the inverse of the pivot matrix is also applied at the end to cancel the transformation effect

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the current TransformNode

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setPivotMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#setpivotmatrix)

***

### setPivotPoint()

> **setPivotPoint**(`point`, `space?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L696)

**`Experimental`**

Sets a new pivot point to the current node

#### Parameters

##### point

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the new pivot point to use

##### space?

[`Space`](../../../core/src/enumerations/Space.md) = `Space.LOCAL`

defines if the point is in world or local space (local by default)

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the current TransformNode

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setPivotPoint`](../../../core/src/classes/GaussianSplattingMesh.md#setpivotpoint)

***

### setPositionsForCPUSkinning()

> **setPositionsForCPUSkinning**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4895](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4895)

**`Experimental`**

Prepare internal position array for software CPU skinning

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

original positions used for CPU skinning. Useful for integrating Morphing with skeletons in same mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setPositionsForCPUSkinning`](../../../core/src/classes/GaussianSplattingMesh.md#setpositionsforcpuskinning)

***

### setPositionWithLocalVector()

> **setPositionWithLocalVector**(`vector3`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L563)

**`Experimental`**

Sets the mesh position in its local space.

#### Parameters

##### vector3

[`Vector3`](../../../core/src/classes/Vector3.md)

the position to set in localspace

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setPositionWithLocalVector`](../../../core/src/classes/GaussianSplattingMesh.md#setpositionwithlocalvector)

***

### setPreTransformMatrix()

> **setPreTransformMatrix**(`matrix`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L399)

**`Experimental`**

Sets a new matrix to apply before all other transformation

#### Parameters

##### matrix

[`Matrix`](../../../core/src/classes/Matrix.md)

defines the transform matrix

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the current TransformNode

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setPreTransformMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#setpretransformmatrix)

***

### setSplatIndexRanges()

> **setSplatIndexRanges**(`ranges`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:702](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L702)

**`Experimental`**

Restricts rendering to the provided source splat ranges.
Passing `null` clears the range filter and renders the full source splat set.

#### Parameters

##### ranges

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<readonly [`IGaussianSplattingSplatRange`](../../../core/src/interfaces/IGaussianSplattingSplatRange.md)[]\>

contiguous source ranges to render, or null to render all splats

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setSplatIndexRanges`](../../../core/src/classes/GaussianSplattingMesh.md#setsplatindexranges)

***

### setVerticesBuffer()

> **setVerticesBuffer**(`buffer`, `disposeExistingBuffer?`, `totalVertices?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1890](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1890)

**`Experimental`**

Sets the mesh global Vertex Buffer

#### Parameters

##### buffer

[`VertexBuffer`](../../../core/src/classes/VertexBuffer.md)

defines the buffer to use

##### disposeExistingBuffer?

`boolean` = `true`

disposes the existing buffer, if any (default: true)

##### totalVertices?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\> = `null`

defines the total number of vertices for position kind (could be null)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setVerticesBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#setverticesbuffer)

***

### setVerticesData()

> **setVerticesData**(`kind`, `data`, `updatable?`, `stride?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1818](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1818)

**`Experimental`**

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

[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)

defines the data source

##### updatable?

`boolean` = `false`

defines if the updated vertex buffer must be flagged as updatable

##### stride?

`number`

defines the data stride size (can be null)

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setVerticesData`](../../../core/src/classes/GaussianSplattingMesh.md#setverticesdata)

***

### setWorldMatrixForPart()

> **setWorldMatrixForPart**(`partIndex`, `worldMatrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L410)

**`Experimental`**

Sets the world matrix for a specific part of the compound.
This will trigger a re-sort of the mesh.
The `_partMatrices` array is automatically extended when `partIndex >= partCount`.

#### Parameters

##### partIndex

`number`

index of the part

##### worldMatrix

[`Matrix`](../../../core/src/classes/Matrix.md)

the world matrix to set

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`setWorldMatrixForPart`](../../../core/src/classes/GaussianSplattingMesh.md#setworldmatrixforpart)

***

### simplify()

> **simplify**(`settings`, `parallelProcessing?`, `simplificationType?`, `successCallback?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.types.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.types.ts#L30)

**`Experimental`**

Simplify the mesh according to the given array of settings.
Function will return immediately and will simplify async

#### Parameters

##### settings

[`ISimplificationSettings`](../../../core/src/interfaces/ISimplificationSettings.md)[]

a collection of simplification settings

##### parallelProcessing?

`boolean`

should all levels calculate parallel or one after the other

##### simplificationType?

[`QUADRATIC`](../../../core/src/enumerations/SimplificationType.md#quadratic)

the type of simplification to run

##### successCallback?

(`mesh?`, `submeshIndex?`) => `void`

optional success callback to be called after the simplification finished processing all settings

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`simplify`](../../../core/src/classes/GaussianSplattingMesh.md#simplify)

***

### subdivide()

> **subdivide**(`count`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1769](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1769)

**`Experimental`**

This function will subdivide the mesh into multiple submeshes

#### Parameters

##### count

`number`

defines the expected number of submeshes

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`subdivide`](../../../core/src/classes/GaussianSplattingMesh.md#subdivide)

***

### synchronizeInstances()

> **synchronizeInstances**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:4038](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L4038)

**`Experimental`**

Synchronises all the mesh instance submeshes to the current mesh submeshes, if any.
After this call, all the mesh instances have the same submeshes than the current mesh.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`synchronizeInstances`](../../../core/src/classes/GaussianSplattingMesh.md#synchronizeinstances)

***

### thinInstanceAdd()

> **thinInstanceAdd**(`matrix`, `refresh?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L27)

**`Experimental`**

Creates a new thin instance

#### Parameters

##### matrix

[`DeepImmutableObject`](../../../core/src/type-aliases/DeepImmutableObject.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\> \| [`DeepImmutableObject`](../../../core/src/type-aliases/DeepImmutableObject.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>[]

the matrix or array of matrices (position, rotation, scale) of the thin instance(s) to create

##### refresh?

`boolean`

true to refresh the underlying gpu buffer (default: true). If you do multiple calls to this method in a row, set refresh to true only for the last call to save performance

#### Returns

`number`

the thin instance index number. If you pass an array of matrices, other instance indexes are index+1, index+2, etc

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceAdd`](../../../core/src/classes/GaussianSplattingMesh.md#thininstanceadd)

***

### thinInstanceAddSelf()

> **thinInstanceAddSelf**(`refresh?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L34)

**`Experimental`**

Adds the transformation (matrix) of the current mesh as a thin instance

#### Parameters

##### refresh?

`boolean`

true to refresh the underlying gpu buffer (default: true). If you do multiple calls to this method in a row, set refresh to true only for the last call to save performance

#### Returns

`number`

the thin instance index number

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceAddSelf`](../../../core/src/classes/GaussianSplattingMesh.md#thininstanceaddself)

***

### thinInstanceBufferUpdated()

> **thinInstanceBufferUpdated**(`kind`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L84)

**`Experimental`**

Synchronize the gpu buffers with a thin instance buffer. Call this method if you update later on the buffers passed to thinInstanceSetBuffer

#### Parameters

##### kind

`string`

name of the attribute to update. Use "matrix" to update the buffer of matrices

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceBufferUpdated`](../../../core/src/classes/GaussianSplattingMesh.md#thininstancebufferupdated)

***

### thinInstanceGetWorldMatrices()

> **thinInstanceGetWorldMatrices**(): [`Matrix`](../../../core/src/classes/Matrix.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L78)

**`Experimental`**

Gets the list of world matrices

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)[]

an array containing all the world matrices from the thin instances

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceGetWorldMatrices`](../../../core/src/classes/GaussianSplattingMesh.md#thininstancegetworldmatrices)

***

### thinInstancePartialBufferUpdate()

> **thinInstancePartialBufferUpdate**(`kind`, `dataOrLength`, `offset`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L97)

**`Experimental`**

Applies a partial update to a buffer directly on the GPU
Note that the buffer located on the CPU is NOT updated! It's up to you to update it (or not) with the same data you pass to this method

#### Parameters

##### kind

`string`

name of the attribute to update. Use "matrix" to update the buffer of matrices

##### dataOrLength

`number` \| `Float32Array`\<`ArrayBufferLike`\>

the data to set in the GPU buffer, or the length (in elements) of data to update starting from the offset.
If you pass a length (number), it is the number of elements to update. For example, if kind is "matrix" and you pass 2 as length, it will update 2 matrices (2*16 floats) in the GPU buffer starting from the offset; in this case [offset](../../../core/src/classes/GoldbergMesh.md#thininstancepartialbufferupdate) should also be expressed as a number of elements.
If you pass a Float32Array, [offset](../../../core/src/classes/GoldbergMesh.md#thininstancepartialbufferupdate) is interpreted in floats in the underlying GPU buffer, consistent with low-level buffer update methods such as updateDirectly.

##### offset

`number`

the offset in the GPU buffer where to update the data:
 - when [dataOrLength](../../../core/src/classes/GoldbergMesh.md#thininstancepartialbufferupdate) is a number, this is an element offset (for example, a matrix index);
 - when [dataOrLength](../../../core/src/classes/GoldbergMesh.md#thininstancepartialbufferupdate) is a Float32Array, this is a float offset in the underlying buffer.

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstancePartialBufferUpdate`](../../../core/src/classes/GaussianSplattingMesh.md#thininstancepartialbufferupdate)

***

### thinInstanceRefreshBoundingInfo()

> **thinInstanceRefreshBoundingInfo**(`forceRefreshParentInfo?`, `applySkeleton?`, `applyMorph?`, `applyBakedVertexAnimation?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L106)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceRefreshBoundingInfo`](../../../core/src/classes/GaussianSplattingMesh.md#thininstancerefreshboundinginfo)

***

### thinInstanceRegisterAttribute()

> **thinInstanceRegisterAttribute**(`kind`, `stride`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L41)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceRegisterAttribute`](../../../core/src/classes/GaussianSplattingMesh.md#thininstanceregisterattribute)

***

### thinInstanceSetAttributeAt()

> **thinInstanceSetAttributeAt**(`kind`, `index`, `value`, `refresh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L58)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceSetAttributeAt`](../../../core/src/classes/GaussianSplattingMesh.md#thininstancesetattributeat)

***

### thinInstanceSetBuffer()

> **thinInstanceSetBuffer**(`kind`, `buffer`, `stride?`, `staticBuffer?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L72)

**`Experimental`**

Sets a buffer to be used with thin instances. This method is a faster way to setup multiple instances than calling thinInstanceAdd repeatedly

#### Parameters

##### kind

`string`

name of the attribute. Use "matrix" to setup the buffer of matrices

##### buffer

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceSetBuffer`](../../../core/src/classes/GaussianSplattingMesh.md#thininstancesetbuffer)

***

### thinInstanceSetMatrixAt()

> **thinInstanceSetMatrixAt**(`index`, `matrix`, `refresh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/thinInstanceMesh.types.ts#L49)

**`Experimental`**

Sets the matrix of a thin instance

#### Parameters

##### index

`number`

index of the thin instance

##### matrix

[`DeepImmutableObject`](../../../core/src/type-aliases/DeepImmutableObject.md)\<[`Matrix`](../../../core/src/classes/Matrix.md)\>

matrix to set

##### refresh?

`boolean`

true to refresh the underlying gpu buffer (default: true). If you do multiple calls to this method in a row, set refresh to true only for the last call to save performance

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`thinInstanceSetMatrixAt`](../../../core/src/classes/GaussianSplattingMesh.md#thininstancesetmatrixat)

***

### toLeftHanded()

> **toLeftHanded**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2039](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2039)

**`Experimental`**

Invert the geometry to move from a right handed system to a left handed one.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`toLeftHanded`](../../../core/src/classes/GaussianSplattingMesh.md#tolefthanded)

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1071)

**`Experimental`**

Returns a description of this mesh

#### Parameters

##### fullDetails?

`boolean`

define if full details about this mesh must be used

#### Returns

`string`

a descriptive string representing this mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`toString`](../../../core/src/classes/GaussianSplattingMesh.md#tostring)

***

### transferToEffect()

> **transferToEffect**(`world`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:1146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L1146)

**`Experimental`**

Transfer the mesh values to its UBO.

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

The world matrix associated with the mesh

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`transferToEffect`](../../../core/src/classes/GaussianSplattingMesh.md#transfertoeffect)

***

### translate()

> **translate**(`axis`, `distance`, `space?`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1019](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1019)

**`Experimental`**

Translates the mesh along the axis vector for the passed distance in the given space.
space (default LOCAL) can be either Space.LOCAL, either Space.WORLD.

#### Parameters

##### axis

[`Vector3`](../../../core/src/classes/Vector3.md)

the axis to translate in

##### distance

`number`

the distance to translate

##### space?

[`Space`](../../../core/src/enumerations/Space.md)

Space to rotate in (Default: local)

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`translate`](../../../core/src/classes/GaussianSplattingMesh.md#translate)

***

### unfreezeNormals()

> **unfreezeNormals**(): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1590](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1590)

**`Experimental`**

This function affects parametric shapes on vertex position update only : ribbons, tubes, etc. It has no effect at all on other shapes. It reactivates the mesh normals computation if it was previously frozen

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`unfreezeNormals`](../../../core/src/classes/GaussianSplattingMesh.md#unfreezenormals)

***

### unfreezeWorldMatrix()

> **unfreezeWorldMatrix**(): `GaussianSplattingStream`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:498](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L498)

**`Experimental`**

Allows back the World matrix computation.

#### Returns

`GaussianSplattingStream`

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`unfreezeWorldMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#unfreezeworldmatrix)

***

### unregisterAfterRender()

> **unregisterAfterRender**(`func`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2186)

**`Experimental`**

Disposes a previously registered javascript function called after the rendering.

#### Parameters

##### func

(`mesh`) => `void`

defines the function to remove

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`unregisterAfterRender`](../../../core/src/classes/GaussianSplattingMesh.md#unregisterafterrender)

***

### unregisterAfterWorldMatrixUpdate()

> **unregisterAfterWorldMatrixUpdate**(`func`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:1402](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L1402)

**`Experimental`**

Removes a registered callback function.

#### Parameters

##### func

(`mesh`) => `void`

callback function to remove

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

the TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`unregisterAfterWorldMatrixUpdate`](../../../core/src/classes/GaussianSplattingMesh.md#unregisterafterworldmatrixupdate)

***

### unregisterBeforeRender()

> **unregisterBeforeRender**(`func`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2166)

**`Experimental`**

Disposes a previously registered javascript function called before the rendering

#### Parameters

##### func

(`mesh`) => `void`

defines the function to remove

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`unregisterBeforeRender`](../../../core/src/classes/GaussianSplattingMesh.md#unregisterbeforerender)

***

### updateData()

> **updateData**(`data`, `sh?`, `options?`, `partIndices?`, `shDegree?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2888](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2888)

**`Experimental`**

Update data from GS (position, orientation, color, scaling)

#### Parameters

##### data

`ArrayBuffer`

array that contain all the datas

##### sh?

`Uint8Array`\<`ArrayBufferLike`\>[]

optional array of uint8 array for SH data

##### options?

`IUpdateOptions` = `...`

optional informations on how to treat data (needs to be 3rd for backward compatibility)

##### partIndices?

`Uint8Array`\<`ArrayBufferLike`\>

optional array of uint8 for rig node indices

##### shDegree?

`number`

optional SH degree of the data

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`updateData`](../../../core/src/classes/GaussianSplattingMesh.md#updatedata)

***

### updateDataAsync()

> **updateDataAsync**(`data`, `sh?`, `partIndices?`, `shDegree?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2875](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2875)

**`Experimental`**

Update asynchronously the buffer

#### Parameters

##### data

`ArrayBuffer`

array buffer containing center, color, orientation and scale of splats

##### sh?

`Uint8Array`\<`ArrayBufferLike`\>[]

optional array of uint8 array for SH data

##### partIndices?

`Uint8Array`\<`ArrayBufferLike`\>

optional array of uint8 for rig node indices

##### shDegree?

`number`

optional SH degree of the data

#### Returns

`Promise`\<`void`\>

a promise

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`updateDataAsync`](../../../core/src/classes/GaussianSplattingMesh.md#updatedataasync)

***

### updateFacetData()

> **updateFacetData**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/abstractMesh.pure.ts:2531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/abstractMesh.pure.ts#L2531)

**`Experimental`**

Updates the mesh facetData arrays and the internal partitioning when the mesh is morphed or updated.
This method can be called within the render loop.
You don't need to call this method by yourself in the render loop when you update/morph a mesh with the methods CreateXXX() as they automatically manage this computation

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`updateFacetData`](../../../core/src/classes/GaussianSplattingMesh.md#updatefacetdata)

***

### updateIndices()

> **updateIndices**(`indices`, `offset?`, `gpuMemoryOnly?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2026](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2026)

**`Experimental`**

Update the current index buffer

#### Parameters

##### indices

[`IndicesArray`](../../../core/src/type-aliases/IndicesArray.md)

defines the source data

##### offset?

`number`

defines the offset in the index buffer where to store the new data (can be null)

##### gpuMemoryOnly?

`boolean` = `false`

defines a boolean indicating that only the GPU memory must be updated leaving the CPU version of the indices unchanged (false by default)

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`updateIndices`](../../../core/src/classes/GaussianSplattingMesh.md#updateindices)

***

### updateMeshPositions()

> **updateMeshPositions**(`positionFunction`, `computeNormals?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1939](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1939)

**`Experimental`**

This method updates the vertex positions of an updatable mesh according to the `positionFunction` returned values.

#### Parameters

##### positionFunction

(`data`) => `void`

is a simple JS function what is passed the mesh `positions` array. It doesn't need to return anything

##### computeNormals?

`boolean` = `true`

is a boolean (default true) to enable/disable the mesh normal recomputation after the vertex position update

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the current mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#other-shapes-updatemeshpositions

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`updateMeshPositions`](../../../core/src/classes/GaussianSplattingMesh.md#updatemeshpositions)

***

### updatePoseMatrix()

> **updatePoseMatrix**(`matrix`): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/transformNode.pure.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/transformNode.pure.ts#L306)

**`Experimental`**

Copies the parameter passed Matrix into the mesh Pose matrix.

#### Parameters

##### matrix

[`Matrix`](../../../core/src/classes/Matrix.md)

the matrix to copy the pose from

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

this TransformNode.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`updatePoseMatrix`](../../../core/src/classes/GaussianSplattingMesh.md#updateposematrix)

***

### updateVerticesData()

> **updateVerticesData**(`kind`, `data`, `updateExtends?`, `makeItUnique?`): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:1919](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L1919)

**`Experimental`**

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

[`FloatArray`](../../../core/src/type-aliases/FloatArray.md)

defines the data source

##### updateExtends?

`boolean`

defines if extends info of the mesh must be updated (can be null). This is mostly useful for "position" kind

##### makeItUnique?

`boolean`

defines if the geometry associated with the mesh must be cloned to make the change only for this mesh (and not all meshes associated with the same geometry)

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

the current mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`updateVerticesData`](../../../core/src/classes/GaussianSplattingMesh.md#updateverticesdata)

***

### validateSkinning()

> **validateSkinning**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:2982](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L2982)

**`Experimental`**

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`validateSkinning`](../../../core/src/classes/GaussianSplattingMesh.md#validateskinning)

***

### AddNodeConstructor()

> `static` **AddNodeConstructor**(`type`, `constructorFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L61)

**`Experimental`**

Add a new node constructor

#### Parameters

##### type

`string`

defines the type name of the node to construct

##### constructorFunc

[`NodeConstructor`](../../../core/src/type-aliases/NodeConstructor.md)

defines the constructor function

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`AddNodeConstructor`](../../../core/src/classes/GaussianSplattingMesh.md#addnodeconstructor)

***

### Center()

> `static` **Center**(`meshesOrMinMaxVector`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5110)

**`Experimental`**

Returns the center of the `{min:` Vector3`, max:` Vector3`}` or the center of MinMax vector3 computed from a mesh array

#### Parameters

##### meshesOrMinMaxVector

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[] \| \{ `max`: [`Vector3`](../../../core/src/classes/Vector3.md); `min`: [`Vector3`](../../../core/src/classes/Vector3.md); \}

could be an array of meshes or a `{min:` Vector3`, max:` Vector3`}` object

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

a vector3

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`Center`](../../../core/src/classes/GaussianSplattingMesh.md#center-1)

***

### Construct()

> `static` **Construct**(`type`, `name`, `scene`, `options?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => [`Node`](../../../core/src/classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L73)

**`Experimental`**

Returns a node constructor based on type name

#### Parameters

##### type

`string`

defines the type name

##### name

`string`

defines the new node name

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### options?

`any`

defines optional options to transmit to constructors

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => [`Node`](../../../core/src/classes/Node.md)\>

the new constructor or null

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`Construct`](../../../core/src/classes/GaussianSplattingMesh.md#construct)

***

### ConvertPLYToSplat()

> `static` **ConvertPLYToSplat**(`data`, `useCoroutine?`): `Generator`\<`undefined`, `ArrayBuffer`, `unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2189)

**`Experimental`**

Converts a .ply data array buffer to splat
if data array buffer is not ply, returns the original buffer

#### Parameters

##### data

`ArrayBuffer`

the .ply data to load

##### useCoroutine?

`boolean` = `false`

use coroutine and yield

#### Returns

`Generator`\<`undefined`, `ArrayBuffer`, `unknown`\>

the loaded splat buffer without SH coefficient, whether ply contains or not SH.

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ConvertPLYToSplat`](../../../core/src/classes/GaussianSplattingMesh.md#convertplytosplat)

***

### ConvertPLYToSplatAsync()

> `static` **ConvertPLYToSplatAsync**(`data`): `Promise`\<`ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2214)

**`Experimental`**

Converts a .ply data array buffer to splat
if data array buffer is not ply, returns the original buffer

#### Parameters

##### data

`ArrayBuffer`

the .ply data to load

#### Returns

`Promise`\<`ArrayBuffer`\>

the loaded splat buffer

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ConvertPLYToSplatAsync`](../../../core/src/classes/GaussianSplattingMesh.md#convertplytosplatasync)

***

### ConvertPLYWithSHToSplat()

> `static` **ConvertPLYWithSHToSplat**(`data`, `useCoroutine?`): `Generator`\<`undefined`, \{ `buffer`: `ArrayBuffer`; `sh?`: `undefined`; `shDegree?`: `undefined`; \} \| \{ `buffer`: `ArrayBuffer`; `sh`: `any`[] \| `null`; `shDegree`: `number`; \}, `unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2130)

**`Experimental`**

Converts a .ply data with SH coefficients splat
if data array buffer is not ply, returns the original buffer

#### Parameters

##### data

`ArrayBuffer`

the .ply data to load

##### useCoroutine?

`boolean` = `false`

use coroutine and yield

#### Returns

`Generator`\<`undefined`, \{ `buffer`: `ArrayBuffer`; `sh?`: `undefined`; `shDegree?`: `undefined`; \} \| \{ `buffer`: `ArrayBuffer`; `sh`: `any`[] \| `null`; `shDegree`: `number`; \}, `unknown`\>

the loaded splat buffer and optional array of sh coefficients

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ConvertPLYWithSHToSplat`](../../../core/src/classes/GaussianSplattingMesh.md#convertplywithshtosplat)

***

### ConvertPLYWithSHToSplatAsync()

> `static` **ConvertPLYWithSHToSplatAsync**(`data`): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:2224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L2224)

**`Experimental`**

Converts a .ply with SH data array buffer to splat
if data array buffer is not ply, returns the original buffer

#### Parameters

##### data

`ArrayBuffer`

the .ply data to load

#### Returns

`Promise`\<`unknown`\>

the loaded splat buffer with SH

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ConvertPLYWithSHToSplatAsync`](../../../core/src/classes/GaussianSplattingMesh.md#convertplywithshtosplatasync)

***

### ~~CreateBox()~~

> `static` **CreateBox**(`_name`, `_size`, `_scene`, `_updatable?`, `_sideOrientation?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5477](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5477)

**`Experimental`**

Creates a box mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_size

`number`

sets the size (float) of each box side (default 1)

##### \_scene

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\>

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateBox`](../../../core/src/classes/GaussianSplattingMesh.md#createbox)

***

### ~~CreateCapsule()~~

> `static` **CreateCapsule**(`_name`, `_options`, `_scene`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5981](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5981)

**`Experimental`**

Creates a Capsule Mesh

#### Parameters

##### \_name

`string`

defines the name of the mesh.

##### \_options

[`ICreateCapsuleOptions`](../../../core/src/interfaces/ICreateCapsuleOptions.md)

the constructors options used to shape the mesh.

##### \_scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the scene the mesh is scoped to.

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the capsule mesh

#### See

https://doc.babylonjs.com/how_to/capsule_shape

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateCapsule`](../../../core/src/classes/GaussianSplattingMesh.md#createcapsule)

***

### ~~CreateCylinder()~~

> `static` **CreateCylinder**(`_name`, `_height`, `_diameterTop`, `_diameterBottom`, `_tessellation`, `_subdivisions`, `_scene?`, `_updatable?`, `_sideOrientation?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5523)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`any`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateCylinder`](../../../core/src/classes/GaussianSplattingMesh.md#createcylinder)

***

### ~~CreateDashedLines()~~

> `static` **CreateDashedLines**(`_name`, `_points`, `_dashSize`, `_gapSize`, `_dashNb`, `_scene`, `_updatable?`, `_instance?`): [`LinesMesh`](../../../core/src/classes/LinesMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5611](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5611)

**`Experimental`**

Creates a dashed line mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_points

[`Vector3`](../../../core/src/classes/Vector3.md)[]

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\>

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_instance?

[`LinesMesh`](../../../core/src/classes/LinesMesh.md)

is an instance of an existing LineMesh object to be updated with the passed `points` parameter (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#lines-and-dashedlines)

#### Returns

[`LinesMesh`](../../../core/src/classes/LinesMesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateDashedLines`](../../../core/src/classes/GaussianSplattingMesh.md#createdashedlines)

***

### ~~CreateDecal()~~

> `static` **CreateDecal**(`_name`, `_sourceMesh`, `_position`, `_normal`, `_size`, `_angle`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5969](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5969)

**`Experimental`**

Creates a decal mesh.
.
A decal is a mesh usually applied as a model onto the surface of another mesh

#### Parameters

##### \_name

`string`

defines the name of the mesh

##### \_sourceMesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh receiving the decal

##### \_position

[`Vector3`](../../../core/src/classes/Vector3.md)

sets the position of the decal in world coordinates

##### \_normal

[`Vector3`](../../../core/src/classes/Vector3.md)

sets the normal of the mesh where the decal is applied onto in world coordinates

##### \_size

[`Vector3`](../../../core/src/classes/Vector3.md)

sets the decal scaling

##### \_angle

`number`

sets the angle to rotate the decal

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateDecal`](../../../core/src/classes/GaussianSplattingMesh.md#createdecal)

***

### ~~CreateDisc()~~

> `static` **CreateDisc**(`_name`, `_radius`, `_tessellation`, `_scene`, `_updatable?`, `_sideOrientation?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5463](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5463)

**`Experimental`**

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\>

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateDisc`](../../../core/src/classes/GaussianSplattingMesh.md#createdisc)

***

### ~~CreateGround()~~

> `static` **CreateGround**(`_name`, `_width`, `_height`, `_subdivisions`, `_scene?`, `_updatable?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5794](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5794)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateGround`](../../../core/src/classes/GaussianSplattingMesh.md#createground)

***

### ~~CreateGroundFromHeightMap()~~

> `static` **CreateGroundFromHeightMap**(`_name`, `_url`, `_width`, `_height`, `_subdivisions`, `_minHeight`, `_maxHeight`, `_scene`, `_updatable?`, `_onReady?`, `_alphaFilter?`): [`GroundMesh`](../../../core/src/classes/GroundMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5843](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5843)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

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

[`GroundMesh`](../../../core/src/classes/GroundMesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/height_map

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateGroundFromHeightMap`](../../../core/src/classes/GaussianSplattingMesh.md#creategroundfromheightmap)

***

### ~~CreateHemisphere()~~

> `static` **CreateHemisphere**(`_name`, `_segments`, `_diameter`, `_scene?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5505](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5505)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateHemisphere`](../../../core/src/classes/GaussianSplattingMesh.md#createhemisphere)

***

### ~~CreateIcoSphere()~~

> `static` **CreateIcoSphere**(`_name`, `_options`, `_scene`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5948](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5948)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra#icosphere

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateIcoSphere`](../../../core/src/classes/GaussianSplattingMesh.md#createicosphere)

***

### ~~CreateLathe()~~

> `static` **CreateLathe**(`_name`, `_shape`, `_radius`, `_tessellation`, `_scene`, `_updatable?`, `_sideOrientation?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5765](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5765)

**`Experimental`**

Creates lathe mesh.
The lathe is a shape with a symmetry axis : a 2D model shape is rotated around this axis to design the lathe.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](../../../core/src/classes/Vector3.md)[]

is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero

##### \_radius

`number`

is the radius value of the lathe

##### \_tessellation

`number`

is the side number of the lathe.

##### \_scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateLathe`](../../../core/src/classes/GaussianSplattingMesh.md#createlathe)

***

### ~~CreateLines()~~

> `static` **CreateLines**(`_name`, `_points`, `_scene`, `_updatable`, `_instance?`): [`LinesMesh`](../../../core/src/classes/LinesMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5594](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5594)

**`Experimental`**

Creates a line mesh..

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_points

[`Vector3`](../../../core/src/classes/Vector3.md)[]

is an array successive Vector3

##### \_scene

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\>

defines the hosting scene

##### \_updatable

`boolean`

defines if the mesh must be flagged as updatable

##### \_instance?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`LinesMesh`](../../../core/src/classes/LinesMesh.md)\>

is an instance of an existing LineMesh object to be updated with the passed `points` parameter (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#lines-and-dashedlines).

#### Returns

[`LinesMesh`](../../../core/src/classes/LinesMesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateLines`](../../../core/src/classes/GaussianSplattingMesh.md#createlines)

***

### ~~CreatePlane()~~

> `static` **CreatePlane**(`_name`, `_size`, `_scene`, `_updatable?`, `_sideOrientation?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5779](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5779)

**`Experimental`**

Creates a plane mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_size

`number`

sets the size (float) of both sides of the plane at once (default 1)

##### \_scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreatePlane`](../../../core/src/classes/GaussianSplattingMesh.md#createplane)

***

### ~~CreatePolygon()~~

> `static` **CreatePolygon**(`_name`, `_shape`, `_scene`, `_holes?`, `_updatable?`, `_sideOrientation?`, `_earcutInjection?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5642](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5642)

**`Experimental`**

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

[`Vector3`](../../../core/src/classes/Vector3.md)[]

is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors

##### \_scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_holes?

[`Vector3`](../../../core/src/classes/Vector3.md)[][]

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

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#non-regular-polygon

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreatePolygon`](../../../core/src/classes/GaussianSplattingMesh.md#createpolygon)

***

### ~~CreatePolyhedron()~~

> `static` **CreatePolyhedron**(`_name`, `_options`, `_scene`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5913)

**`Experimental`**

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

[`Color4`](../../../core/src/classes/Color4.md)[]

###### faceUV?

[`Vector4`](../../../core/src/classes/Vector4.md)[]

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreatePolyhedron`](../../../core/src/classes/GaussianSplattingMesh.md#createpolyhedron)

***

### ~~CreateRibbon()~~

> `static` **CreateRibbon**(`_name`, `_pathArray`, `_closeArray`, `_closePath`, `_offset`, `_scene?`, `_updatable?`, `_sideOrientation?`, `_instance?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5438)

**`Experimental`**

Creates a ribbon mesh.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_pathArray

[`Vector3`](../../../core/src/classes/Vector3.md)[][]

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_instance?

[`Mesh`](../../../core/src/classes/Mesh.md)

defines an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#ribbon)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateRibbon`](../../../core/src/classes/GaussianSplattingMesh.md#createribbon)

***

### ~~CreateSphere()~~

> `static` **CreateSphere**(`_name`, `_segments`, `_diameter`, `_scene?`, `_updatable?`, `_sideOrientation?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5492)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateSphere`](../../../core/src/classes/GaussianSplattingMesh.md#createsphere)

***

### ~~CreateTiledGround()~~

> `static` **CreateTiledGround**(`_name`, `_xmin`, `_zmin`, `_xmax`, `_zmax`, `_subdivisions`, `_precision`, `_scene`, `_updatable?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5812)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateTiledGround`](../../../core/src/classes/GaussianSplattingMesh.md#createtiledground)

***

### ~~CreateTorus()~~

> `static` **CreateTorus**(`_name`, `_diameter`, `_thickness`, `_tessellation`, `_scene?`, `_updatable?`, `_sideOrientation?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5550](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5550)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateTorus`](../../../core/src/classes/GaussianSplattingMesh.md#createtorus)

***

### ~~CreateTorusKnot()~~

> `static` **CreateTorusKnot**(`_name`, `_radius`, `_tube`, `_radialSegments`, `_tubularSegments`, `_p`, `_q`, `_scene?`, `_updatable?`, `_sideOrientation?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5569)

**`Experimental`**

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateTorusKnot`](../../../core/src/classes/GaussianSplattingMesh.md#createtorusknot)

***

### ~~CreateTube()~~

> `static` **CreateTube**(`_name`, `_path`, `_radius`, `_tessellation`, `_radiusFunction`, `_cap`, `_scene`, `_updatable?`, `_sideOrientation?`, `_instance?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5878)

**`Experimental`**

Creates a tube mesh.
The tube is a parametric shape.
It has no predefined shape. Its final shape will depend on the input parameters.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_path

[`Vector3`](../../../core/src/classes/Vector3.md)[]

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_instance?

[`Mesh`](../../../core/src/classes/Mesh.md)

is an instance of an existing Tube object to be updated with the passed `pathArray` parameter (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#tube)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`CreateTube`](../../../core/src/classes/GaussianSplattingMesh.md#createtube)

***

### ~~ExtendToGoldberg()~~

> `static` **ExtendToGoldberg**(`_mesh`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5992](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5992)

**`Experimental`**

Extends a mesh to a Goldberg mesh
Warning  the mesh to convert MUST be an import of a perviously exported Goldberg mesh

#### Parameters

##### \_mesh

[`Mesh`](../../../core/src/classes/Mesh.md)

the mesh to convert

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

the extended mesh

#### Deprecated

Please use ExtendMeshToGoldberg instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ExtendToGoldberg`](../../../core/src/classes/GaussianSplattingMesh.md#extendtogoldberg)

***

### ~~ExtrudePolygon()~~

> `static` **ExtrudePolygon**(`_name`, `_shape`, `_depth`, `_scene`, `_holes?`, `_updatable?`, `_sideOrientation?`, `_earcutInjection?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5668](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5668)

**`Experimental`**

Creates an extruded polygon mesh, with depth in the Y direction..

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](../../../core/src/classes/Vector3.md)[]

is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors

##### \_depth

`number`

defines the height of extrusion

##### \_scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_holes?

[`Vector3`](../../../core/src/classes/Vector3.md)[][]

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

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-non-regular-polygon

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ExtrudePolygon`](../../../core/src/classes/GaussianSplattingMesh.md#extrudepolygon)

***

### ~~ExtrudeShape()~~

> `static` **ExtrudeShape**(`_name`, `_shape`, `_path`, `_scale`, `_rotation`, `_cap`, `_scene`, `_updatable?`, `_sideOrientation?`, `_instance?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5699](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5699)

**`Experimental`**

Creates an extruded shape mesh.
The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](../../../core/src/classes/Vector3.md)[]

is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis

##### \_path

[`Vector3`](../../../core/src/classes/Vector3.md)[]

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

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\>

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_instance?

[`Mesh`](../../../core/src/classes/Mesh.md)

is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters (https://doc.babylonjs.com/how_to/How_to_dynamically_morph_a_mesh#extruded-shape)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-shapes

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ExtrudeShape`](../../../core/src/classes/GaussianSplattingMesh.md#extrudeshape)

***

### ~~ExtrudeShapeCustom()~~

> `static` **ExtrudeShapeCustom**(`_name`, `_shape`, `_path`, `_scaleFunction`, `_rotationFunction`, `_ribbonCloseArray`, `_ribbonClosePath`, `_cap`, `_scene`, `_updatable?`, `_sideOrientation?`, `_instance?`): [`Mesh`](../../../core/src/classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5735)

**`Experimental`**

Creates an custom extruded shape mesh.
The custom extrusion is a parametric shape.
It has no predefined shape. Its final shape will depend on the input parameters.

#### Parameters

##### \_name

`string`

defines the name of the mesh to create

##### \_shape

[`Vector3`](../../../core/src/classes/Vector3.md)[]

is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis

##### \_path

[`Vector3`](../../../core/src/classes/Vector3.md)[]

is a required array of successive Vector3. This is the axis curve the shape is extruded along

##### \_scaleFunction

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`i`, `distance`) => `number`\>

is a custom Javascript function called on each path point

##### \_rotationFunction

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`i`, `distance`) => `number`\>

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

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### \_updatable?

`boolean`

defines if the mesh must be flagged as updatable

##### \_sideOrientation?

`number`

defines the mesh side orientation (https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation)

##### \_instance?

[`Mesh`](../../../core/src/classes/Mesh.md)

is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters (https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#extruded-shape)

#### Returns

[`Mesh`](../../../core/src/classes/Mesh.md)

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-shapes

#### Deprecated

Please use MeshBuilder instead

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ExtrudeShapeCustom`](../../../core/src/classes/GaussianSplattingMesh.md#extrudeshapecustom)

***

### IsLODMetadata()

> `static` **IsLODMetadata**(`data`): `data is ISOGLODMetadata`

Defined in: [babylonjs-source/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:271](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L271)

**`Experimental`**

Returns true when the parsed JSON looks like a PlayCanvas-style `lod-meta.json` payload.

#### Parameters

##### data

`unknown`

parsed JSON

#### Returns

`data is ISOGLODMetadata`

whether the data is SOG LOD metadata

***

### MergeMeshes()

> `static` **MergeMeshes**(`meshes`, `disposeSource?`, `allow32BitsIndices?`, `meshSubclass?`, `subdivideWithSubMeshes?`, `multiMultiMaterials?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5125)

**`Experimental`**

Merge the array of meshes into a single mesh for performance reasons.

#### Parameters

##### meshes

[`Mesh`](../../../core/src/classes/Mesh.md)[]

array of meshes with the vertices to merge. Entries cannot be empty meshes.

##### disposeSource?

`boolean` = `true`

when true (default), dispose of the vertices from the source meshes.

##### allow32BitsIndices?

`boolean`

when the sum of the vertices \> 64k, this must be set to true.

##### meshSubclass?

[`Mesh`](../../../core/src/classes/Mesh.md)

(optional) can be set to a Mesh where the merged vertices will be inserted.

##### subdivideWithSubMeshes?

`boolean`

when true (false default), subdivide mesh into subMeshes.

##### multiMultiMaterials?

`boolean`

when true (false default), subdivide mesh into subMeshes with multiple materials, ignores subdivideWithSubMeshes.

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Mesh`](../../../core/src/classes/Mesh.md)\>

a new mesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`MergeMeshes`](../../../core/src/classes/GaussianSplattingMesh.md#mergemeshes)

***

### MergeMeshesAsync()

> `static` **MergeMeshesAsync**(`meshes`, `disposeSource?`, `allow32BitsIndices?`, `meshSubclass?`, `subdivideWithSubMeshes?`, `multiMultiMaterials?`): `Promise`\<`any`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5146)

**`Experimental`**

Merge the array of meshes into a single mesh for performance reasons.

#### Parameters

##### meshes

[`Mesh`](../../../core/src/classes/Mesh.md)[]

array of meshes with the vertices to merge. Entries cannot be empty meshes.

##### disposeSource?

`boolean` = `true`

when true (default), dispose of the vertices from the source meshes.

##### allow32BitsIndices?

`boolean`

when the sum of the vertices \> 64k, this must be set to true.

##### meshSubclass?

[`Mesh`](../../../core/src/classes/Mesh.md)

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

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`MergeMeshesAsync`](../../../core/src/classes/GaussianSplattingMesh.md#mergemeshesasync)

***

### MinMax()

> `static` **MinMax**(`meshes`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/mesh.pure.ts:5075](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/mesh.pure.ts#L5075)

**`Experimental`**

Returns an object containing a min and max Vector3 which are the minimum and maximum vectors of each mesh bounding box from the passed array, in the world coordinates

#### Parameters

##### meshes

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

defines the list of meshes to scan

#### Returns

`object`

an object `{min:` Vector3`, max:` Vector3`}`

##### max

> **max**: [`Vector3`](../../../core/src/classes/Vector3.md)

##### min

> **min**: [`Vector3`](../../../core/src/classes/Vector3.md)

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`MinMax`](../../../core/src/classes/GaussianSplattingMesh.md#minmax)

***

### Parse()

> `static` **Parse**(`parsedMesh`, `scene`): [`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:1367](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L1367)

**`Experimental`**

Parses a serialized GaussianSplattingMesh

#### Parameters

##### parsedMesh

`any`

the serialized mesh

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene to create the GaussianSplattingMesh in

#### Returns

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md)

the created GaussianSplattingMesh

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`Parse`](../../../core/src/classes/GaussianSplattingMesh.md#parse)

***

### ParseAnimationRanges()

> `static` **ParseAnimationRanges**(`node`, `parsedNode`, `_scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L988)

**`Experimental`**

Parse animation range data from a serialization object and store them into a given node

#### Parameters

##### node

[`Node`](../../../core/src/classes/Node.md)

defines where to store the animation ranges

##### parsedNode

`any`

defines the serialization object to read data from

##### \_scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

#### Returns

`void`

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ParseAnimationRanges`](../../../core/src/classes/GaussianSplattingMesh.md#parseanimationranges)

***

### ParseHeader()

> `static` **ParseHeader**(`data`): [`PLYHeader`](../../../core/src/interfaces/PLYHeader.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:1750](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L1750)

**`Experimental`**

Parse a PLY file header and returns metas infos on splats and chunks

#### Parameters

##### data

`ArrayBuffer`

the loaded buffer

#### Returns

[`PLYHeader`](../../../core/src/interfaces/PLYHeader.md) \| `null`

a PLYHeader

#### Inherited from

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md).[`ParseHeader`](../../../core/src/classes/GaussianSplattingMesh.md#parseheader)
