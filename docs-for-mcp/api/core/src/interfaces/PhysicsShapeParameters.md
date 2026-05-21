[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsShapeParameters

# Interface: PhysicsShapeParameters

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L190)

Parameters used to describe the Shape

## Properties

### center?

> `optional` **center?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L194)

Shape center position

***

### extents?

> `optional` **extents?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L214)

Dimension extents for the box

***

### groundMesh?

> `optional` **groundMesh?**: [`GroundMesh`](../classes/GroundMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L246)

Ground mesh used for display

***

### heightFieldData?

> `optional` **heightFieldData?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L242)

The data for the heightfield

***

### heightFieldSizeX?

> `optional` **heightFieldSizeX?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L226)

The size of the heightfield in the X axis

***

### heightFieldSizeZ?

> `optional` **heightFieldSizeZ?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L230)

The size of the heightfield in the Z axis

***

### includeChildMeshes?

> `optional` **includeChildMeshes?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L222)

Use children hierarchy

***

### mesh?

> `optional` **mesh?**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L218)

Mesh used for Mesh shape or convex hull. It can be different than the mesh the body is attached to.

***

### numHeightFieldSamplesX?

> `optional` **numHeightFieldSamplesX?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L234)

The number of samples along the X axis

***

### numHeightFieldSamplesZ?

> `optional` **numHeightFieldSamplesZ?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L238)

The number of samples along the Z axis

***

### pointA?

> `optional` **pointA?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L202)

First point position that defines the cylinder or capsule

***

### pointB?

> `optional` **pointB?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L206)

Second point position that defines the cylinder or capsule

***

### radius?

> `optional` **radius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L198)

Radius for cylinder, shape and capsule

***

### rotation?

> `optional` **rotation?**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L210)

Shape orientation
