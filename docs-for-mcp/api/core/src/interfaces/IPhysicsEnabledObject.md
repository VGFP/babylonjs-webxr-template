[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPhysicsEnabledObject

# Interface: IPhysicsEnabledObject

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L95)

Interface for a physics-enabled object

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Properties

### parent?

> `optional` **parent?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L115)

The parent of the physics-enabled object

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L99)

The position of the physics-enabled object

***

### rotation?

> `optional` **rotation?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L111)

The rotation of the physics-enabled object

***

### rotationQuaternion

> **rotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](../classes/Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L103)

The rotation of the physics-enabled object

***

### scaling

> **scaling**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L107)

The scale of the physics-enabled object

## Methods

### computeWorldMatrix()

> **computeWorldMatrix**(`force`): [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L126)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L163)

Gets the absolute pivot point from the mesh

#### Returns

[`Vector3`](../classes/Vector3.md)

the absolute pivot point

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L158)

Gets the absolute position from the mesh

#### Returns

[`Vector3`](../classes/Vector3.md)

the absolute position

***

### getBoundingInfo()

> **getBoundingInfo**(): [`BoundingInfo`](../classes/BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L120)

The bounding info of the physics-enabled object

#### Returns

[`BoundingInfo`](../classes/BoundingInfo.md)

The bounding info of the physics-enabled object

***

### getChildMeshes()?

> `optional` **getChildMeshes**(`directDescendantsOnly?`): [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L137)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L190)

Gets the class name of the mesh

#### Returns

`string`

The class name

***

### getIndices()?

> `optional` **getIndices**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L148)

Gets the indices from the mesh

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IndicesArray`](../type-aliases/IndicesArray.md)\>

A nullable array of index arrays

***

### getScene()?

> `optional` **getScene**(): [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L153)

Gets the scene from the mesh

#### Returns

[`Scene`](../classes/Scene.md)

the indices array or null

***

### getVerticesData()

> **getVerticesData**(`kind`): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L143)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L131)

Gets the world matrix

#### Returns

[`Matrix`](../classes/Matrix.md)

A world matrix

***

### rotate()

> **rotate**(`axis`, `amount`, `space?`): [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L171)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L185)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L179)

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
