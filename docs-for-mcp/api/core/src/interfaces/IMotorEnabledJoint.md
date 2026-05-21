[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotorEnabledJoint

# Interface: IMotorEnabledJoint

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L280)

Interface for a motor enabled joint

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Properties

### physicsJoint

> **physicsJoint**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L284)

Physics joint

## Methods

### setLimit()

> **setLimit**(`upperLimit`, `lowerLimit?`, `motorIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L298)

Sets the limit of the motor

#### Parameters

##### upperLimit

`number`

The upper limit of the motor

##### lowerLimit?

`number`

The lower limit of the motor

##### motorIndex?

`number`

The index of the motor

#### Returns

`void`

***

### setMotor()

> **setMotor**(`force?`, `maxForce?`, `motorIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L291)

Sets the motor of the motor-enabled joint

#### Parameters

##### force?

`number`

The force of the motor

##### maxForce?

`number`

The maximum force of the motor

##### motorIndex?

`number`

The index of the motor

#### Returns

`void`
