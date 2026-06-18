[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OctreeBlock

# Class: OctreeBlock\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L21)

Class used to store a cell in an octree

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new OctreeBlock**\<`T`\>(`minPoint`, `maxPoint`, `capacity`, `depth`, `maxDepth`, `creationFunc`): `OctreeBlock`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L49)

Creates a new block

#### Parameters

##### minPoint

[`Vector3`](Vector3.md)

defines the minimum vector (in world space) of the block's bounding box

##### maxPoint

[`Vector3`](Vector3.md)

defines the maximum vector (in world space) of the block's bounding box

##### capacity

`number`

defines the maximum capacity of this block (if capacity is reached the block will be split into sub blocks)

##### depth

`number`

defines the current depth of this block in the octree

##### maxDepth

`number`

defines the maximal depth allowed (beyond this value, the capacity is ignored)

##### creationFunc

(`entry`, `block`) => `void`

defines a callback to call when an element is added to the block

#### Returns

`OctreeBlock`\<`T`\>

## Properties

### blocks

> **blocks**: `OctreeBlock`\<`T`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L30)

Gets the list of block children

***

### entries

> **entries**: `T`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L25)

Gets the content of the current block

## Accessors

### capacity

#### Get Signature

> **get** **capacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L85)

Gets the maximum capacity of this block (if capacity is reached the block will be split into sub blocks)

##### Returns

`number`

***

### maxPoint

#### Get Signature

> **get** **maxPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L99)

Gets the maximum vector (in world space) of the block's bounding box

##### Returns

[`Vector3`](Vector3.md)

***

### minPoint

#### Get Signature

> **get** **minPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L92)

Gets the minimum vector (in world space) of the block's bounding box

##### Returns

[`Vector3`](Vector3.md)

## Methods

### addEntries()

> **addEntries**(`entries`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L149)

Add an array of elements to this block

#### Parameters

##### entries

`T`[]

defines the array of elements to add

#### Returns

`void`

***

### addEntry()

> **addEntry**(`entry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L109)

Add a new element to this block

#### Parameters

##### entry

`T`

defines the element to add

#### Returns

`void`

***

### createInnerBlocks()

> **createInnerBlocks**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L226)

Subdivide the content into child blocks (this block will then be empty)

#### Returns

`void`

***

### intersects()

> **intersects**(`sphereCenter`, `sphereRadius`, `selection`, `allowDuplicate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L187)

Test if the current block intersect with the given bounding sphere and if yes, then add its content to the selection array

#### Parameters

##### sphereCenter

[`Vector3`](Vector3.md)

defines the bounding sphere center

##### sphereRadius

`number`

defines the bounding sphere radius

##### selection

[`SmartArrayNoDuplicate`](SmartArrayNoDuplicate.md)\<`T`\>

defines the array to store current content if selection is positive

##### allowDuplicate?

`boolean`

defines if the selection array can contains duplicated entries

#### Returns

`void`

***

### intersectsRay()

> **intersectsRay**(`ray`, `selection`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L210)

Test if the current block intersect with the given ray and if yes, then add its content to the selection array

#### Parameters

##### ray

[`Ray`](Ray.md)

defines the ray to test with

##### selection

[`SmartArrayNoDuplicate`](SmartArrayNoDuplicate.md)\<`T`\>

defines the array to store current content if selection is positive

#### Returns

`void`

***

### removeEntry()

> **removeEntry**(`entry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L129)

Remove an element from this block

#### Parameters

##### entry

`T`

defines the element to remove

#### Returns

`void`

***

### select()

> **select**(`frustumPlanes`, `selection`, `allowDuplicate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeBlock.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Octrees/octreeBlock.ts#L162)

Test if the current block intersects the frustum planes and if yes, then add its content to the selection array

#### Parameters

##### frustumPlanes

[`Plane`](Plane.md)[]

defines the frustum planes to test

##### selection

[`SmartArrayNoDuplicate`](SmartArrayNoDuplicate.md)\<`T`\>

defines the array to store current content if selection is positive

##### allowDuplicate?

`boolean`

defines if the selection array can contains duplicated entries

#### Returns

`void`
