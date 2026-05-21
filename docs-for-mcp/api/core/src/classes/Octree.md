[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Octree

# Class: Octree\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L13)

Octrees are a really powerful data structure that can quickly select entities based on space coordinates.

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Octree**\<`T`\>(`creationFunc`, `maxBlockCapacity?`, `maxDepth?`): `Octree`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L34)

Creates a octree

#### Parameters

##### creationFunc

(`entry`, `block`) => `void`

function to be used to instantiate the octree

##### maxBlockCapacity?

`number`

defines the maximum number of meshes you want on your octree's leaves (default: 64)

##### maxDepth?

`number` = `2`

defines the maximum depth (sub-levels) for your octree. Default value is 2, which means 8 8 8 = 512 blocks :) (This parameter takes precedence over capacity.)

#### Returns

`Octree`\<`T`\>

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees

## Properties

### blocks

> **blocks**: [`OctreeBlock`](OctreeBlock.md)\<`T`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L17)

Blocks within the octree containing objects

***

### dynamicContent

> **dynamicContent**: `T`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L21)

Content stored in the octree

***

### maxDepth

> **maxDepth**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L38)

[2] Defines the maximum depth (sub-levels) for your octree. Default value is 2, which means 8 8 8 = 512 blocks :) (This parameter takes precedence over capacity.)

## Methods

### addMesh()

> **addMesh**(`entry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L60)

Adds a mesh to the octree

#### Parameters

##### entry

`T`

Mesh to add to the octree

#### Returns

`void`

***

### intersects()

> **intersects**(`sphereCenter`, `sphereRadius`, `allowDuplicate?`): [`SmartArray`](SmartArray.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L108)

Test if the octree intersect with the given bounding sphere and if yes, then add its content to the selection array

#### Parameters

##### sphereCenter

[`Vector3`](Vector3.md)

defines the bounding sphere center

##### sphereRadius

`number`

defines the bounding sphere radius

##### allowDuplicate?

`boolean`

defines if the selection array can contains duplicated entries

#### Returns

[`SmartArray`](SmartArray.md)\<`T`\>

an array of objects that intersect the sphere

***

### intersectsRay()

> **intersectsRay**(`ray`): [`SmartArray`](SmartArray.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L130)

Test if the octree intersect with the given ray and if yes, then add its content to resulting array

#### Parameters

##### ray

[`Ray`](Ray.md)

defines the ray to test with

#### Returns

[`SmartArray`](SmartArray.md)\<`T`\>

array of intersected objects

***

### removeMesh()

> **removeMesh**(`entry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L71)

Remove an element from the octree

#### Parameters

##### entry

`T`

defines the element to remove

#### Returns

`void`

***

### select()

> **select**(`frustumPlanes`, `allowDuplicate?`): [`SmartArray`](SmartArray.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L84)

Selects an array of meshes within the frustum

#### Parameters

##### frustumPlanes

[`Plane`](Plane.md)[]

The frustum planes to use which will select all meshes within it

##### allowDuplicate?

`boolean`

If duplicate objects are allowed in the resulting object array

#### Returns

[`SmartArray`](SmartArray.md)\<`T`\>

array of meshes within the frustum

***

### update()

> **update**(`worldMin`, `worldMax`, `entries`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L52)

Updates the octree by adding blocks for the passed in meshes within the min and max world parameters

#### Parameters

##### worldMin

[`Vector3`](Vector3.md)

worldMin for the octree blocks var blockSize = new Vector3((worldMax.x - worldMin.x) / 2, (worldMax.y - worldMin.y) / 2, (worldMax.z - worldMin.z) / 2);

##### worldMax

[`Vector3`](Vector3.md)

worldMax for the octree blocks var blockSize = new Vector3((worldMax.x - worldMin.x) / 2, (worldMax.y - worldMin.y) / 2, (worldMax.z - worldMin.z) / 2);

##### entries

`T`[]

meshes to be added to the octree blocks

#### Returns

`void`

***

### CreationFuncForMeshes()

> `static` **CreationFuncForMeshes**(`entry`, `block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L148)

Adds a mesh into the octree block if it intersects the block

#### Parameters

##### entry

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to try to add to the block

##### block

[`OctreeBlock`](OctreeBlock.md)\<[`AbstractMesh`](AbstractMesh.md)\>

defines the block where the mesh should be added

#### Returns

`void`

***

### CreationFuncForSubMeshes()

> `static` **CreationFuncForSubMeshes**(`entry`, `block`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octree.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octree.ts#L160)

Adds a submesh into the octree block if it intersects the block

#### Parameters

##### entry

[`SubMesh`](SubMesh.md)

defines the submesh to try to add to the block

##### block

[`OctreeBlock`](OctreeBlock.md)\<[`SubMesh`](SubMesh.md)\>

defines the block where the submesh should be added

#### Returns

`void`
