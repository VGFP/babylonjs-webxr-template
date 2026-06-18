[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsConstraintType

# Enumeration: PhysicsConstraintType

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L71)

Type of Constraint

## Enumeration Members

### BALL\_AND\_SOCKET

> **BALL\_AND\_SOCKET**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L76)

A ball and socket constraint will attempt to line up the pivot
positions in each body, and have no restrictions on rotation

***

### DISTANCE

> **DISTANCE**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L81)

A distance constraint will attempt to keep the pivot locations
within a specified distance.

***

### HINGE

> **HINGE**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L86)

A hinge constraint will keep the pivot positions aligned as well
as two angular axes. The remaining angular axis will be free to rotate.

***

### LOCK

> **LOCK**: `5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L97)

A lock constraint will attempt to keep the pivots completely lined
up between both bodies, allowing no relative movement.

***

### PRISMATIC

> **PRISMATIC**: `6`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L102)

A prismatic will lock the rotations of the bodies, and allow translation
only along one axis

***

### SIX\_DOF

> **SIX\_DOF**: `7`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L108)

A generic constraint; this starts with no limits on how the bodies can
move relative to each other, but limits can be added via the PhysicsConstraint
interfaces. This can be used to specify a large variety of constraints

***

### SLIDER

> **SLIDER**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L92)

A slider constraint allows bodies to translate along one axis and
rotate about the same axis. The remaining two axes are locked in
place
