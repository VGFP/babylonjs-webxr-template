[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SpringJointData

# Interface: SpringJointData

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L320)

Joint data from a spring joint

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Extends

- [`PhysicsJointData`](PhysicsJointData.md)

## Properties

### collision?

> `optional` **collision?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L29)

The collision of the joint

#### Inherited from

[`PhysicsJointData`](PhysicsJointData.md).[`collision`](PhysicsJointData.md#collision)

***

### connectedAxis?

> `optional` **connectedAxis?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L25)

The connected axis of the joint

#### Inherited from

[`PhysicsJointData`](PhysicsJointData.md).[`connectedAxis`](PhysicsJointData.md#connectedaxis)

***

### connectedPivot?

> `optional` **connectedPivot?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L17)

The connected pivot of the joint

#### Inherited from

[`PhysicsJointData`](PhysicsJointData.md).[`connectedPivot`](PhysicsJointData.md#connectedpivot)

***

### damping

> **damping**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L332)

Damping of the spring

***

### forceApplicationCallback

> **forceApplicationCallback**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L334)

this callback will be called when applying the force to the impostors.

#### Returns

`void`

***

### length

> **length**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L324)

Length of the spring

***

### mainAxis?

> `optional` **mainAxis?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L21)

The main axis of the joint

#### Inherited from

[`PhysicsJointData`](PhysicsJointData.md).[`mainAxis`](PhysicsJointData.md#mainaxis)

***

### mainPivot?

> `optional` **mainPivot?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L13)

The main pivot of the joint

#### Inherited from

[`PhysicsJointData`](PhysicsJointData.md).[`mainPivot`](PhysicsJointData.md#mainpivot)

***

### nativeParams?

> `optional` **nativeParams?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L33)

Native Oimo/Cannon/Energy data

#### Inherited from

[`PhysicsJointData`](PhysicsJointData.md).[`nativeParams`](PhysicsJointData.md#nativeparams)

***

### stiffness

> **stiffness**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L328)

Stiffness of the spring
