[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SpringConstraint

# Class: SpringConstraint

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:454](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L454)

Creates a SpringConstraint, which is a type of Physics6DoFConstraint. This constraint applies a force at the ends which is proportional
to the distance between ends, and a stiffness and damping factor. The force is calculated as (stiffness * positionError) - (damping * velocity)

## Param

The first pivot of the constraint in local space.

## Param

The second pivot of the constraint in local space.

## Param

The first axis of the constraint in local space.

## Param

The second axis of the constraint in local space.

## Param

The minimum distance between the two pivots.

## Param

The maximum distance between the two pivots.

## Param

The stiffness of the spring.

## Param

The damping of the spring.

## Param

The scene the constraint belongs to.

## Extends

- [`Physics6DoFConstraint`](Physics6DoFConstraint.md)

## Constructors

### Constructor

> **new SpringConstraint**(`pivotA`, `pivotB`, `axisA`, `axisB`, `minDistance`, `maxDistance`, `stiffness`, `damping`, `scene`): `SpringConstraint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L455)

#### Parameters

##### pivotA

[`Vector3`](Vector3.md)

##### pivotB

[`Vector3`](Vector3.md)

##### axisA

[`Vector3`](Vector3.md)

##### axisB

[`Vector3`](Vector3.md)

##### minDistance

`number`

##### maxDistance

`number`

##### stiffness

`number`

##### damping

`number`

##### scene

[`Scene`](Scene.md)

#### Returns

`SpringConstraint`

#### Overrides

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`constructor`](Physics6DoFConstraint.md#constructor)

## Properties

### \_pluginData

> **\_pluginData**: `any` = `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L23)

V2 Physics plugin private data for a physics material

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`_pluginData`](Physics6DoFConstraint.md#_plugindata)

***

### limits

> **limits**: [`Physics6DoFLimit`](Physics6DoFLimit.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L178)

The collection of limits which this constraint will apply

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`limits`](Physics6DoFConstraint.md#limits)

## Accessors

### isCollisionsEnabled

#### Get Signature

> **get** **isCollisionsEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L118)

Gets whether collisions are enabled for this physics object.

##### Returns

`boolean`

`true` if collisions are enabled, `false` otherwise.

#### Set Signature

> **set** **isCollisionsEnabled**(`isEnabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L108)

Enables or disables collisions for the physics engine.

##### Parameters

###### isEnabled

`boolean`

A boolean value indicating whether collisions should be enabled or disabled.

##### Returns

`void`

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`isCollisionsEnabled`](Physics6DoFConstraint.md#iscollisionsenabled)

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L98)

##### Returns

`boolean`

true if constraint is enabled

#### Set Signature

> **set** **isEnabled**(`isEnabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L90)

Enable/disable the constraint

##### Parameters

###### isEnabled

`boolean`

value for the constraint

##### Returns

`void`

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`isEnabled`](Physics6DoFConstraint.md#isenabled)

***

### options

#### Get Signature

> **get** **options**(): [`PhysicsConstraintParameters`](../interfaces/PhysicsConstraintParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L82)

Retrieves the options of the physics constraint.

##### Returns

[`PhysicsConstraintParameters`](../interfaces/PhysicsConstraintParameters.md)

The physics constraint parameters.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`options`](Physics6DoFConstraint.md#options)

***

### type

#### Get Signature

> **get** **type**(): [`PhysicsConstraintType`](../enumerations/PhysicsConstraintType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L72)

Gets the type of the constraint.

##### Returns

[`PhysicsConstraintType`](../enumerations/PhysicsConstraintType.md)

The type of the constraint.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`type`](Physics6DoFConstraint.md#type)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L135)

Disposes the constraint from the physics engine.

This method is useful for cleaning up the physics engine when a body is no longer needed. Disposing the body will free up resources and prevent memory leaks.

#### Returns

`void`

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`dispose`](Physics6DoFConstraint.md#dispose)

***

### getAxisFriction()

> **getAxisFriction**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L201)

Gets the friction of the given axis of the physics engine.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the physics engine.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The friction of the given axis, or null if the constraint hasn't been initialized yet.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`getAxisFriction`](Physics6DoFConstraint.md#getaxisfriction)

***

### getAxisMaxLimit()

> **getAxisMaxLimit**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L269)

Gets the maximum limit of the given axis of the physics engine.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the physics engine.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The maximum limit of the given axis, or null if the constraint hasn't been initialized yet.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`getAxisMaxLimit`](Physics6DoFConstraint.md#getaxismaxlimit)

***

### getAxisMinLimit()

> **getAxisMinLimit**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L246)

Gets the minimum limit of the given axis of the physics engine.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the physics engine.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The minimum limit of the given axis, or null if the constraint hasn't been initialized yet.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`getAxisMinLimit`](Physics6DoFConstraint.md#getaxisminlimit)

***

### getAxisMode()

> **getAxisMode**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintAxisLimitMode`](../enumerations/PhysicsConstraintAxisLimitMode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L226)

Gets the limit mode of the given axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintAxisLimitMode`](../enumerations/PhysicsConstraintAxisLimitMode.md)\>

The limit mode of the given axis, or null if the constraint hasn't been initialized yet.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`getAxisMode`](Physics6DoFConstraint.md#getaxismode)

***

### getAxisMotorMaxForce()

> **getAxisMotorMaxForce**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L330)

Gets the maximum force of the motor of the given axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The maximum force of the motor, or null if the constraint hasn't been initialized yet.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`getAxisMotorMaxForce`](Physics6DoFConstraint.md#getaxismotormaxforce)

***

### getAxisMotorTarget()

> **getAxisMotorTarget**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L310)

Gets the target velocity of the motor associated to the given constraint axis.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The constraint axis associated to the motor.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The target velocity of the motor, or null if the constraint hasn't been initialized yet.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`getAxisMotorTarget`](Physics6DoFConstraint.md#getaxismotortarget)

***

### getAxisMotorType()

> **getAxisMotorType**(`axis`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintMotorType`](../enumerations/PhysicsConstraintMotorType.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L289)

Gets the motor type of the specified axis of the constraint.

#### Parameters

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintMotorType`](../enumerations/PhysicsConstraintMotorType.md)\>

The motor type of the specified axis, or null if the constraint hasn't been initialized yet.

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`getAxisMotorType`](Physics6DoFConstraint.md#getaxismotortype)

***

### getBodiesUsingConstraint()

> **getBodiesUsingConstraint**(): [`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L126)

Gets all bodies that are using this constraint

#### Returns

[`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`getBodiesUsingConstraint`](Physics6DoFConstraint.md#getbodiesusingconstraint)

***

### setAxisFriction()

> **setAxisFriction**(`axis`, `friction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L191)

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

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`setAxisFriction`](Physics6DoFConstraint.md#setaxisfriction)

***

### setAxisMaxLimit()

> **setAxisMaxLimit**(`axis`, `limit`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L259)

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

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`setAxisMaxLimit`](Physics6DoFConstraint.md#setaxismaxlimit)

***

### setAxisMinLimit()

> **setAxisMinLimit**(`axis`, `minLimit`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L236)

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

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`setAxisMinLimit`](Physics6DoFConstraint.md#setaxisminlimit)

***

### setAxisMode()

> **setAxisMode**(`axis`, `limitMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L215)

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

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`setAxisMode`](Physics6DoFConstraint.md#setaxismode)

***

### setAxisMotorMaxForce()

> **setAxisMotorMaxForce**(`axis`, `maxForce`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L320)

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

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`setAxisMotorMaxForce`](Physics6DoFConstraint.md#setaxismotormaxforce)

***

### setAxisMotorTarget()

> **setAxisMotorTarget**(`axis`, `target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L300)

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

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`setAxisMotorTarget`](Physics6DoFConstraint.md#setaxismotortarget)

***

### setAxisMotorType()

> **setAxisMotorType**(`axis`, `motorType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L278)

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

#### Inherited from

[`Physics6DoFConstraint`](Physics6DoFConstraint.md).[`setAxisMotorType`](Physics6DoFConstraint.md#setaxismotortype)
