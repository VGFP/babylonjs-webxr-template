[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsConstraint

# Class: PhysicsConstraint

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L19)

This is a holder class for the physics constraint created by the physics plugin
It holds a set of functions to control the underlying constraint

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Extended by

- [`Physics6DoFConstraint`](Physics6DoFConstraint.md)
- [`BallAndSocketConstraint`](BallAndSocketConstraint.md)
- [`DistanceConstraint`](DistanceConstraint.md)
- [`HingeConstraint`](HingeConstraint.md)
- [`SliderConstraint`](SliderConstraint.md)
- [`LockConstraint`](LockConstraint.md)
- [`PrismaticConstraint`](PrismaticConstraint.md)

## Constructors

### Constructor

> **new PhysicsConstraint**(`type`, `options`, `scene`): `PhysicsConstraint`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L45)

Constructs a new constraint for the physics constraint.

#### Parameters

##### type

[`PhysicsConstraintType`](../enumerations/PhysicsConstraintType.md)

The type of constraint to create.

##### options

[`PhysicsConstraintParameters`](../interfaces/PhysicsConstraintParameters.md)

The options for the constraint.

##### scene

[`Scene`](Scene.md)

The scene the constraint belongs to.

This code is useful for creating a new constraint for the physics engine. It checks if the scene has a physics engine, and if the plugin version is correct.
If all checks pass, it initializes the constraint with the given type and options.

#### Returns

`PhysicsConstraint`

## Properties

### \_pluginData

> **\_pluginData**: `any` = `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L23)

V2 Physics plugin private data for a physics material

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

***

### options

#### Get Signature

> **get** **options**(): [`PhysicsConstraintParameters`](../interfaces/PhysicsConstraintParameters.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L82)

Retrieves the options of the physics constraint.

##### Returns

[`PhysicsConstraintParameters`](../interfaces/PhysicsConstraintParameters.md)

The physics constraint parameters.

***

### type

#### Get Signature

> **get** **type**(): [`PhysicsConstraintType`](../enumerations/PhysicsConstraintType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L72)

Gets the type of the constraint.

##### Returns

[`PhysicsConstraintType`](../enumerations/PhysicsConstraintType.md)

The type of the constraint.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L135)

Disposes the constraint from the physics engine.

This method is useful for cleaning up the physics engine when a body is no longer needed. Disposing the body will free up resources and prevent memory leaks.

#### Returns

`void`

***

### getBodiesUsingConstraint()

> **getBodiesUsingConstraint**(): [`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L126)

Gets all bodies that are using this constraint

#### Returns

[`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]
