[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Hinge2Joint

# Class: Hinge2Joint

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L244)

This class represents a dual hinge physics joint (same as wheel joint)

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Extends

- [`MotorEnabledJoint`](MotorEnabledJoint.md)

## Constructors

### Constructor

> **new Hinge2Joint**(`jointData`): `Hinge2Joint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L249)

Initializes the Hinge2-Joint

#### Parameters

##### jointData

[`PhysicsJointData`](../interfaces/PhysicsJointData.md)

The joint data for the Hinge2-Joint

#### Returns

`Hinge2Joint`

#### Overrides

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`constructor`](MotorEnabledJoint.md#constructor)

## Properties

### jointData

> **jointData**: [`PhysicsJointData`](../interfaces/PhysicsJointData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L58)

The data for the physics joint

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`jointData`](MotorEnabledJoint.md#jointdata)

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L54)

The type of the physics joint

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`type`](MotorEnabledJoint.md#type)

***

### BallAndSocketJoint

> `static` **BallAndSocketJoint**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L108)

Ball-and-Socket joint type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`BallAndSocketJoint`](MotorEnabledJoint.md#ballandsocketjoint)

***

### DistanceJoint

> `static` **DistanceJoint**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L100)

Distance-Joint type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`DistanceJoint`](MotorEnabledJoint.md#distancejoint)

***

### Hinge2Joint

> `static` **Hinge2Joint**: `number` = `PhysicsJoint.WheelJoint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L131)

Hinge-Joint 2 type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`Hinge2Joint`](MotorEnabledJoint.md#hinge2joint)

***

### HingeJoint

> `static` **HingeJoint**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L104)

Hinge-Joint type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`HingeJoint`](MotorEnabledJoint.md#hingejoint)

***

### LockJoint

> `static` **LockJoint**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L145)

Lock-Joint type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`LockJoint`](MotorEnabledJoint.md#lockjoint)

***

### PointToPointJoint

> `static` **PointToPointJoint**: `number` = `8`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L136)

Point to Point Joint type.  Similar to a Ball-Joint.  Different in parameters

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`PointToPointJoint`](MotorEnabledJoint.md#pointtopointjoint)

***

### PrismaticJoint

> `static` **PrismaticJoint**: `number` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L121)

Prismatic-Joint type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`PrismaticJoint`](MotorEnabledJoint.md#prismaticjoint)

***

### SliderJoint

> `static` **SliderJoint**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L116)

Slider-Joint type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`SliderJoint`](MotorEnabledJoint.md#sliderjoint)

***

### SpringJoint

> `static` **SpringJoint**: `number` = `9`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L141)

Spring-Joint type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`SpringJoint`](MotorEnabledJoint.md#springjoint)

***

### UniversalJoint

> `static` **UniversalJoint**: `number` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L127)

Universal-Joint type
ENERGY FTW! (compare with this -

#### See

http://ode-wiki.org/wiki/index.php?title=Manual:_Joint_Types_and_Functions)

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`UniversalJoint`](MotorEnabledJoint.md#universaljoint)

***

### WheelJoint

> `static` **WheelJoint**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L112)

Wheel-Joint type

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`WheelJoint`](MotorEnabledJoint.md#wheeljoint)

## Accessors

### physicsJoint

#### Get Signature

> **get** **physicsJoint**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L66)

Gets the physics joint

##### Returns

`any`

#### Set Signature

> **set** **physicsJoint**(`newJoint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L74)

Sets the physics joint

##### Parameters

###### newJoint

`any`

##### Returns

`void`

Physics joint

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`physicsJoint`](MotorEnabledJoint.md#physicsjoint)

***

### physicsPlugin

#### Set Signature

> **set** **physicsPlugin**(`physicsPlugin`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L81)

Sets the physics plugin

##### Parameters

###### physicsPlugin

`IPhysicsEnginePlugin`

##### Returns

`void`

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`physicsPlugin`](MotorEnabledJoint.md#physicsplugin)

## Methods

### executeNativeFunction()

> **executeNativeFunction**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L90)

Execute a function that is physics-plugin specific.

#### Parameters

##### func

(`world`, `physicsJoint`) => `void`

the function that will be executed.
                       It accepts two parameters: the physics world and the physics joint

#### Returns

`void`

#### Inherited from

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`executeNativeFunction`](MotorEnabledJoint.md#executenativefunction)

***

### setLimit()

> **setLimit**(`upperLimit`, `lowerLimit?`, `motorIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L271)

Set the motor limits.
Attention, this function is plugin specific. Engines won't react 100% the same.

#### Parameters

##### upperLimit

`number`

the upper limit

##### lowerLimit?

`number`

lower limit

##### motorIndex?

`number` = `0`

the motor's index, 0 or 1.

#### Returns

`void`

#### Overrides

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`setLimit`](MotorEnabledJoint.md#setlimit)

***

### setMotor()

> **setMotor**(`targetSpeed?`, `maxForce?`, `motorIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L260)

Set the motor values.
Attention, this function is plugin specific. Engines won't react 100% the same.

#### Parameters

##### targetSpeed?

`number`

the speed the motor is to reach

##### maxForce?

`number`

max force for this motor.

##### motorIndex?

`number` = `0`

motor's index, 0 or 1.

#### Returns

`void`

#### Overrides

[`MotorEnabledJoint`](MotorEnabledJoint.md).[`setMotor`](MotorEnabledJoint.md#setmotor)
