[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPhysicsEnabledObject

# Interface: IPhysicsEnabledObject

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L91)

Interface for a physics-enabled object

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Properties

### parent?

> `optional` **parent?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L111)

The parent of the physics-enabled object

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L95)

The position of the physics-enabled object

***

### rotation?

> `optional` **rotation?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L107)

The rotation of the physics-enabled object

***

### rotationQuaternion

> **rotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](../classes/Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L99)

The rotation of the physics-enabled object

***

### scaling

> **scaling**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L103)

The scale of the physics-enabled object

## Methods

### computeWorldMatrix()

> **computeWorldMatrix**(`force`): [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L122)

Computes the world matrix

#### Parameters

##### force

`boolean`

Specifies if the world matrix should be computed by force

#### Returns

[`Matrix`](../classes/Matrix.md)

A world matrix

***

### getAbsolutePivotPoint()

> **getAbsolutePivotPoint**(): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L159)

Gets the absolute pivot point from the mesh

#### Returns

[`Vector3`](../classes/Vector3.md)

the absolute pivot point

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L154)

Gets the absolute position from the mesh

#### Returns

[`Vector3`](../classes/Vector3.md)

the absolute position

***

### getBoundingInfo()

> **getBoundingInfo**(): [`BoundingInfo`](../classes/BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L116)

The bounding info of the physics-enabled object

#### Returns

[`BoundingInfo`](../classes/BoundingInfo.md)

The bounding info of the physics-enabled object

***

### getChildMeshes()?

> `optional` **getChildMeshes**(`directDescendantsOnly?`): [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L133)

Gets the child meshes

#### Parameters

##### directDescendantsOnly?

`boolean`

Specifies if only direct-descendants should be obtained

#### Returns

[`AbstractMesh`](../classes/AbstractMesh.md)[]

An array of abstract meshes

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L186)

Gets the class name of the mesh

#### Returns

`string`

The class name

***

### getIndices()?

> `optional` **getIndices**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L144)

Gets the indices from the mesh

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

A nullable array of index arrays

***

### getScene()?

> `optional` **getScene**(): [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L149)

Gets the scene from the mesh

#### Returns

[`Scene`](../classes/Scene.md)

the indices array or null

***

### getVerticesData()

> **getVerticesData**(`kind`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L139)

Gets the vertex data

#### Parameters

##### kind

`string`

The type of vertex data

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

A nullable array of numbers, or a float32 array

***

### getWorldMatrix()?

> `optional` **getWorldMatrix**(): [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L127)

Gets the world matrix

#### Returns

[`Matrix`](../classes/Matrix.md)

A world matrix

***

### rotate()

> **rotate**(`axis`, `amount`, `space?`): [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L167)

Rotates the mesh

#### Parameters

##### axis

[`Vector3`](../classes/Vector3.md)

The axis of rotation

##### amount

`number`

The amount of rotation

##### space?

[`Space`](../enumerations/Space.md)

The space of the rotation

#### Returns

[`TransformNode`](../classes/TransformNode.md)

The rotation transform node

***

### setAbsolutePosition()

> **setAbsolutePosition**(`absolutePosition`): [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L181)

Sets the absolute position of the mesh

#### Parameters

##### absolutePosition

[`Vector3`](../classes/Vector3.md)

The absolute position of the mesh

#### Returns

[`TransformNode`](../classes/TransformNode.md)

The transform node

***

### translate()

> **translate**(`axis`, `distance`, `space?`): [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L175)

Translates the mesh

#### Parameters

##### axis

[`Vector3`](../classes/Vector3.md)

The axis of translation

##### distance

`number`

The distance of translation

##### space?

[`Space`](../enumerations/Space.md)

The space of the translation

#### Returns

[`TransformNode`](../classes/TransformNode.md)

The transform node
