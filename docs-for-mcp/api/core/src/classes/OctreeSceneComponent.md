[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OctreeSceneComponent

# Class: OctreeSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L125)

Defines the octree scene component responsible to manage any octrees
in a given scene.

## Constructors

### Constructor

> **new OctreeSceneComponent**(`scene?`): `OctreeSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L145)

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

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L139)

Indicates if the meshes have been checked to make sure they are isEnabled()

***

### name

> `readonly` **name**: `"Octree"` = `SceneComponentConstants.NAME_OCTREE`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L129)

The component name help to identify the component in the list of scene components.

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L134)

The scene the component belongs to.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L246)

Disposes the component and the associated resources.

#### Returns

`void`

***

### getActiveMeshCandidates()

> **getActiveMeshCandidates**(): [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L185)

Return the list of active meshes

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the list of active meshes

***

### getActiveSubMeshCandidates()

> **getActiveSubMeshCandidates**(`mesh`): [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L194)

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

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L225)

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

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L209)

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

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L239)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L161)

Registers the component in a given scene

#### Returns

`void`
