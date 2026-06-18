[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Physics6DoFLimit

# Class: Physics6DoFLimit

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L143)

This describes a single limit used by Physics6DoFConstraint

## Constructors

### Constructor

> **new Physics6DoFLimit**(): `Physics6DoFLimit`

#### Returns

`Physics6DoFLimit`

## Properties

### axis

> **axis**: [`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L147)

The axis ID to limit

***

### damping?

> `optional` **damping?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L165)

A constraint parameter that specifies damping.

***

### maxLimit?

> `optional` **maxLimit?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L157)

An optional maximum limit for the axis.
Corresponds to a distance in meters for linear axes, an angle in radians for angular axes.

***

### minLimit?

> `optional` **minLimit?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L152)

An optional minimum limit for the axis.
Corresponds to a distance in meters for linear axes, an angle in radians for angular axes.

***

### stiffness?

> `optional` **stiffness?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsConstraint.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsConstraint.ts#L161)

The stiffness of the constraint.
