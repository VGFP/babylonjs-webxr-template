[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Physics6DoFConstraint

# Class: Physics6DoFConstraint

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L174)

A generic constraint, which can be used to build more complex constraints than those specified
in PhysicsConstraintType. The axis and pivot options in PhysicsConstraintParameters define the space
the constraint operates in. This constraint contains a set of limits, which restrict the
relative movement of the bodies in that coordinate system

## Extends

- [`PhysicsConstraint`](PhysicsConstraint.md)

## Extended by

- [`SpringConstraint`](SpringConstraint.md)

## Constructors

### Constructor

> **new Physics6DoFConstraint**(`constraintParams`, `limits`, `scene`): `Physics6DoFConstraint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L180)

#### Parameters

##### constraintParams

[`PhysicsConstraintParameters`](../interfaces/PhysicsConstraintParameters.md)

##### limits

[`Physics6DoFLimit`](Physics6DoFLimit.md)[]

##### scene

[`Scene`](Scene.md)

#### Returns

`Physics6DoFConstraint`

#### Overrides

[`PhysicsConstraint`](PhysicsConstraint.md).[`constructor`](PhysicsConstraint.md#constructor)

## Properties

### \_pluginData

> **\_pluginData**: `any` = `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L23)

V2 Physics plugin private data for a physics material

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`_pluginData`](PhysicsConstraint.md#_plugindata)

***

### limits

> **limits**: [`Physics6DoFLimit`](Physics6DoFLimit.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L178)

The collection of limits which this constraint will apply

## Accessors

### isCollisionsEnabled

#### Get Signature

> **get** **isCollisionsEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L118)

Gets whether collisions are enabled for this physics object.

##### Returns

`boolean`

`true` if collisions are enabled, `false` otherwise.

#### Set Signature

> **set** **isCollisionsEnabled**(`isEnabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L108)

Enables or disables collisions for the physics engine.

##### Parameters

###### isEnabled

`boolean`

A boolean value indicating whether collisions should be enabled or disabled.

##### Returns

`void`

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`isCollisionsEnabled`](PhysicsConstraint.md#iscollisionsenabled)

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L98)

##### Returns

`boolean`

true if constraint is enabled

#### Set Signature

> **set** **isEnabled**(`isEnabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L90)

Enable/disable the constraint

##### Parameters

###### isEnabled

`boolean`

value for the constraint

##### Returns

`void`

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`isEnabled`](PhysicsConstraint.md#isenabled)

***

### options

#### Get Signature

> **get** **options**(): [`PhysicsConstraintParameters`](../interfaces/PhysicsConstraintParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L82)

Retrieves the options of the physics constraint.

##### Returns

[`PhysicsConstraintParameters`](../interfaces/PhysicsConstraintParameters.md)

The physics constraint parameters.

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`options`](PhysicsConstraint.md#options)

***

### type

#### Get Signature

> **get** **type**(): [`PhysicsConstraintType`](../enumerations/PhysicsConstraintType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L72)

Gets the type of the constraint.

##### Returns

[`PhysicsConstraintType`](../enumerations/PhysicsConstraintType.md)

The type of the constraint.

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`type`](PhysicsConstraint.md#type)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L135)

Disposes the constraint from the physics engine.

This method is useful for cleaning up the physics engine when a body is no longer needed. Disposing the body will free up resources and prevent memory leaks.

#### Returns

`void`

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`dispose`](PhysicsConstraint.md#dispose)

***

### getAxisFriction()

> **getAxisFriction**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L201)

Gets the friction of the given axis of the physics engine.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the physics engine.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The friction of the given axis, or null if the constraint hasn't been initialized yet.

***

### getAxisMaxLimit()

> **getAxisMaxLimit**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L269)

Gets the maximum limit of the given axis of the physics engine.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the physics engine.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The maximum limit of the given axis, or null if the constraint hasn't been initialized yet.

***

### getAxisMinLimit()

> **getAxisMinLimit**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L246)

Gets the minimum limit of the given axis of the physics engine.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the physics engine.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The minimum limit of the given axis, or null if the constraint hasn't been initialized yet.

***

### getAxisMode()

> **getAxisMode**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintAxisLimitMode`](../enumerations/PhysicsConstraintAxisLimitMode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L226)

Gets the limit mode of the given axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintAxisLimitMode`](../enumerations/PhysicsConstraintAxisLimitMode.md)\>

The limit mode of the given axis, or null if the constraint hasn't been initialized yet.

***

### getAxisMotorMaxForce()

> **getAxisMotorMaxForce**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L330)

Gets the maximum force of the motor of the given axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The maximum force of the motor, or null if the constraint hasn't been initialized yet.

***

### getAxisMotorTarget()

> **getAxisMotorTarget**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L310)

Gets the target velocity of the motor associated to the given constraint axis.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The constraint axis associated to the motor.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The target velocity of the motor, or null if the constraint hasn't been initialized yet.

***

### getAxisMotorType()

> **getAxisMotorType**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintMotorType`](../enumerations/PhysicsConstraintMotorType.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L289)

Gets the motor type of the specified axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintMotorType`](../enumerations/PhysicsConstraintMotorType.md)\>

The motor type of the specified axis, or null if the constraint hasn't been initialized yet.

***

### getBodiesUsingConstraint()

> **getBodiesUsingConstraint**(): [`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L126)

Gets all bodies that are using this constraint

#### Returns

[`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`getBodiesUsingConstraint`](PhysicsConstraint.md#getbodiesusingconstraint)

***

### setAxisFriction()

> **setAxisFriction**(`axis`, `friction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L191)

Sets the friction of the given axis of the physics engine.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the physics engine to set the friction for.

##### friction

`number`

The friction to set for the given axis.

#### Returns

`void`

***

### setAxisMaxLimit()

> **setAxisMaxLimit**(`axis`, `limit`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L259)

Sets the maximum limit of the given axis for the physics engine.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to set the limit for.

##### limit

`number`

The maximum limit of the axis.

This method is useful for setting the maximum limit of the given axis for the physics engine,
which can be used to control the movement of the physics object. This helps to ensure that the
physics object does not move beyond the given limit.

#### Returns

`void`

***

### setAxisMinLimit()

> **setAxisMinLimit**(`axis`, `minLimit`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L236)

Sets the minimum limit of a given axis of a constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

##### minLimit

`number`

The minimum limit of the axis.

#### Returns

`void`

***

### setAxisMode()

> **setAxisMode**(`axis`, `limitMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L215)

Sets the limit mode for the given axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to set the limit mode for.

##### limitMode

[`PhysicsConstraintAxisLimitMode`](../enumerations/PhysicsConstraintAxisLimitMode.md)

The limit mode to set.

This method is useful for setting the limit mode for a given axis of the constraint. This is important for
controlling the behavior of the physics engine when the constraint is reached. By setting the limit mode,
the engine can be configured to either stop the motion of the objects, or to allow them to continue
moving beyond the constraint.

#### Returns

`void`

***

### setAxisMotorMaxForce()

> **setAxisMotorMaxForce**(`axis`, `maxForce`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L320)

Sets the maximum force of the motor of the given axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

##### maxForce

`number`

The maximum force of the motor.

#### Returns

`void`

***

### setAxisMotorTarget()

> **setAxisMotorTarget**(`axis`, `target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L300)

Sets the target velocity of the motor associated with the given axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

##### target

`number`

The target velocity of the motor.

This method is useful for setting the target velocity of the motor associated with the given axis of the constraint.

#### Returns

`void`

***

### setAxisMotorType()

> **setAxisMotorType**(`axis`, `motorType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L278)

Sets the motor type of the given axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

##### motorType

[`PhysicsConstraintMotorType`](../enumerations/PhysicsConstraintMotorType.md)

The type of motor to use.

#### Returns

`void`
