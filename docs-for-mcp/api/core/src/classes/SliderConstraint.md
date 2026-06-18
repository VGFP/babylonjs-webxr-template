[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SliderConstraint

# Class: SliderConstraint

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:397](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L397)

Creates a SliderConstraint, which is a type of PhysicsConstraint.

This code is useful for creating a SliderConstraint, which is a type of PhysicsConstraint.
It allows the user to specify the two pivots and two axes of the constraint in world space, as well as the scene the constraint belongs to.
This is useful for creating a constraint between two rigid bodies that allows them to move along a certain axis.

## Param

**pivotA**

The first pivot of the constraint, in world space.

## Param

**pivotB**

The second pivot of the constraint, in world space.

## Param

**axisA**

The first axis of the constraint, in world space.

## Param

**axisB**

The second axis of the constraint, in world space.

## Param

**scene**

The scene the constraint belongs to.

## Extends

- [`PhysicsConstraint`](PhysicsConstraint.md)

## Constructors

### Constructor

> **new SliderConstraint**(`pivotA`, `pivotB`, `axisA`, `axisB`, `scene`): `SliderConstraint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L398)

#### Parameters

##### pivotA

[`Vector3`](Vector3.md)

##### pivotB

[`Vector3`](Vector3.md)

##### axisA

[`Vector3`](Vector3.md)

##### axisB

[`Vector3`](Vector3.md)

##### scene

[`Scene`](Scene.md)

#### Returns

`SliderConstraint`

#### Overrides

[`PhysicsConstraint`](PhysicsConstraint.md).[`constructor`](PhysicsConstraint.md#constructor)

## Properties

### \_pluginData

> **\_pluginData**: `any` = `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L23)

V2 Physics plugin private data for a physics material

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`_pluginData`](PhysicsConstraint.md#_plugindata)

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

### getBodiesUsingConstraint()

> **getBodiesUsingConstraint**(): [`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L126)

Gets all bodies that are using this constraint

#### Returns

[`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

#### Inherited from

[`PhysicsConstraint`](PhysicsConstraint.md).[`getBodiesUsingConstraint`](PhysicsConstraint.md#getbodiesusingconstraint)
