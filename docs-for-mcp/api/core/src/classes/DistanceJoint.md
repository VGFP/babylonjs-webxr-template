[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DistanceJoint

# Class: DistanceJoint

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L152)

A class representing a physics distance joint

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Extends

- [`PhysicsJoint`](PhysicsJoint.md)

## Constructors

### Constructor

> **new DistanceJoint**(`jointData`): `DistanceJoint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L157)

#### Parameters

##### jointData

[`DistanceJointData`](../interfaces/DistanceJointData.md)

The data for the Distance-Joint

#### Returns

`DistanceJoint`

#### Overrides

[`PhysicsJoint`](PhysicsJoint.md).[`constructor`](PhysicsJoint.md#constructor)

## Properties

### jointData

> **jointData**: [`PhysicsJointData`](../interfaces/PhysicsJointData.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L58)

The data for the physics joint

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`jointData`](PhysicsJoint.md#jointdata)

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L54)

The type of the physics joint

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`type`](PhysicsJoint.md#type)

***

### BallAndSocketJoint

> `static` **BallAndSocketJoint**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L108)

Ball-and-Socket joint type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`BallAndSocketJoint`](PhysicsJoint.md#ballandsocketjoint)

***

### DistanceJoint

> `static` **DistanceJoint**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L100)

Distance-Joint type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`DistanceJoint`](PhysicsJoint.md#distancejoint)

***

### Hinge2Joint

> `static` **Hinge2Joint**: `number` = `PhysicsJoint.WheelJoint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L131)

Hinge-Joint 2 type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`Hinge2Joint`](PhysicsJoint.md#hinge2joint)

***

### HingeJoint

> `static` **HingeJoint**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L104)

Hinge-Joint type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`HingeJoint`](PhysicsJoint.md#hingejoint)

***

### LockJoint

> `static` **LockJoint**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L145)

Lock-Joint type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`LockJoint`](PhysicsJoint.md#lockjoint)

***

### PointToPointJoint

> `static` **PointToPointJoint**: `number` = `8`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L136)

Point to Point Joint type.  Similar to a Ball-Joint.  Different in parameters

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`PointToPointJoint`](PhysicsJoint.md#pointtopointjoint)

***

### PrismaticJoint

> `static` **PrismaticJoint**: `number` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L121)

Prismatic-Joint type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`PrismaticJoint`](PhysicsJoint.md#prismaticjoint)

***

### SliderJoint

> `static` **SliderJoint**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L116)

Slider-Joint type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`SliderJoint`](PhysicsJoint.md#sliderjoint)

***

### SpringJoint

> `static` **SpringJoint**: `number` = `9`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L141)

Spring-Joint type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`SpringJoint`](PhysicsJoint.md#springjoint)

***

### UniversalJoint

> `static` **UniversalJoint**: `number` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L127)

Universal-Joint type
ENERGY FTW! (compare with this -

#### See

http://ode-wiki.org/wiki/index.php?title=Manual:_Joint_Types_and_Functions)

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`UniversalJoint`](PhysicsJoint.md#universaljoint)

***

### WheelJoint

> `static` **WheelJoint**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L112)

Wheel-Joint type

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`WheelJoint`](PhysicsJoint.md#wheeljoint)

## Accessors

### physicsJoint

#### Get Signature

> **get** **physicsJoint**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L66)

Gets the physics joint

##### Returns

`any`

#### Set Signature

> **set** **physicsJoint**(`newJoint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L74)

Sets the physics joint

##### Parameters

###### newJoint

`any`

##### Returns

`void`

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`physicsJoint`](PhysicsJoint.md#physicsjoint)

***

### physicsPlugin

#### Set Signature

> **set** **physicsPlugin**(`physicsPlugin`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L81)

Sets the physics plugin

##### Parameters

###### physicsPlugin

`IPhysicsEnginePlugin`

##### Returns

`void`

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`physicsPlugin`](PhysicsJoint.md#physicsplugin)

## Methods

### executeNativeFunction()

> **executeNativeFunction**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L90)

Execute a function that is physics-plugin specific.

#### Parameters

##### func

(`world`, `physicsJoint`) => `void`

the function that will be executed.
                       It accepts two parameters: the physics world and the physics joint

#### Returns

`void`

#### Inherited from

[`PhysicsJoint`](PhysicsJoint.md).[`executeNativeFunction`](PhysicsJoint.md#executenativefunction)

***

### updateDistance()

> **updateDistance**(`maxDistance`, `minDistance?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsJoint.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsJoint.ts#L166)

Update the predefined distance.

#### Parameters

##### maxDistance

`number`

The maximum preferred distance

##### minDistance?

`number`

The minimum preferred distance

#### Returns

`void`
