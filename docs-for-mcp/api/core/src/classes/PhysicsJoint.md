[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsJoint

# Class: PhysicsJoint

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L41)

This is a holder class for the physics joint created by the physics plugin
It holds a set of functions to control the underlying joint

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Extended by

- [`DistanceJoint`](DistanceJoint.md)
- [`MotorEnabledJoint`](MotorEnabledJoint.md)

## Constructors

### Constructor

> **new PhysicsJoint**(`type`, `jointData`): `PhysicsJoint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L50)

Initializes the physics joint

#### Parameters

##### type

`number`

The type of the physics joint

##### jointData

[`PhysicsJointData`](../interfaces/PhysicsJointData.md)

The data for the physics joint

#### Returns

`PhysicsJoint`

## Properties

### jointData

> **jointData**: [`PhysicsJointData`](../interfaces/PhysicsJointData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L58)

The data for the physics joint

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L54)

The type of the physics joint

***

### BallAndSocketJoint

> `static` **BallAndSocketJoint**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L108)

Ball-and-Socket joint type

***

### DistanceJoint

> `static` **DistanceJoint**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L100)

Distance-Joint type

***

### Hinge2Joint

> `static` **Hinge2Joint**: `number` = `PhysicsJoint.WheelJoint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L131)

Hinge-Joint 2 type

***

### HingeJoint

> `static` **HingeJoint**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L104)

Hinge-Joint type

***

### LockJoint

> `static` **LockJoint**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L145)

Lock-Joint type

***

### PointToPointJoint

> `static` **PointToPointJoint**: `number` = `8`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L136)

Point to Point Joint type.  Similar to a Ball-Joint.  Different in parameters

***

### PrismaticJoint

> `static` **PrismaticJoint**: `number` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L121)

Prismatic-Joint type

***

### SliderJoint

> `static` **SliderJoint**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L116)

Slider-Joint type

***

### SpringJoint

> `static` **SpringJoint**: `number` = `9`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L141)

Spring-Joint type

***

### UniversalJoint

> `static` **UniversalJoint**: `number` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L127)

Universal-Joint type
ENERGY FTW! (compare with this -

#### See

http://ode-wiki.org/wiki/index.php?title=Manual:_Joint_Types_and_Functions)

***

### WheelJoint

> `static` **WheelJoint**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsJoint.ts#L112)

Wheel-Joint type

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
