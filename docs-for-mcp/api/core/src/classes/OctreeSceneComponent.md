[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OctreeSceneComponent

# Class: OctreeSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L19)

Defines the octree scene component responsible to manage any octrees
in a given scene.

## Constructors

### Constructor

> **new OctreeSceneComponent**(`scene?`): `OctreeSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L39)

Creates a new instance of the component for the given scene

#### Parameters

##### scene?

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`OctreeSceneComponent`

## Properties

### checksIsEnabled

> `readonly` **checksIsEnabled**: `true` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L33)

Indicates if the meshes have been checked to make sure they are isEnabled()

***

### name

> `readonly` **name**: `"Octree"` = `SceneComponentConstants.NAME_OCTREE`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L23)

The component name help to identify the component in the list of scene components.

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L28)

The scene the component belongs to.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L140)

Disposes the component and the associated resources.

#### Returns

`void`

***

### getActiveMeshCandidates()

> **getActiveMeshCandidates**(): [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L79)

Return the list of active meshes

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the list of active meshes

***

### getActiveSubMeshCandidates()

> **getActiveSubMeshCandidates**(`mesh`): [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L88)

Return the list of active sub meshes

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to get the candidates sub meshes from

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

the list of active sub meshes

***

### getCollidingSubMeshCandidates()

> **getCollidingSubMeshCandidates**(`mesh`, `collider`): [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L119)

Return the list of sub meshes colliding with a collider

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to find the submesh for

##### collider

`Collider`

defines the collider to evaluate the collision against

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

the list of colliding sub meshes

***

### getIntersectingSubMeshCandidates()

> **getIntersectingSubMeshCandidates**(`mesh`, `localRay`): [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L103)

Return the list of sub meshes intersecting with a given local ray

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to find the submesh for

##### localRay

[`Ray`](Ray.md)

defines the ray in local space

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

the list of intersecting sub meshes

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L133)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.pure.ts#L55)

Registers the component in a given scene

#### Returns

`void`
