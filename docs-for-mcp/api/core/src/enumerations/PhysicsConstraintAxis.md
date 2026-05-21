[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsConstraintAxis

# Enumeration: PhysicsConstraintAxis

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L31)

The constraint specific axis to use when setting Friction, `ConstraintAxisLimitMode`, max force, ...

## Enumeration Members

### ANGULAR\_X

> **ANGULAR\_X**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L51)

Rotation around the primary axis of the constraint (i.e. the
axis specified by PhysicsConstraintParameters.axisA/axisB)

***

### ANGULAR\_Y

> **ANGULAR\_Y**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L56)

Rotation around the second axis of the constraint (i.e. the
axis specified by PhysicsConstraintParameters.perpAxisA/perpAxisB)

***

### ANGULAR\_Z

> **ANGULAR\_Z**: `5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L61)

Rotation around the third axis of the constraint. This axis is
computed from the cross product of axisA/axisB and perpAxisA/perpAxisB)

***

### LINEAR\_DISTANCE

> **LINEAR\_DISTANCE**: `6`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L67)

A 3D distance limit; similar to specifying the LINEAR_X/Y/Z axes
individually, but the distance calculation uses all three axes
simultaneously, instead of individually.

***

### LINEAR\_X

> **LINEAR\_X**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L36)

Translation along the primary axis of the constraint (i.e. the
direction specified by PhysicsConstraintParameters.axisA/axisB)

***

### LINEAR\_Y

> **LINEAR\_Y**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L41)

Translation along the second axis of the constraint (i.e. the
direction specified by PhysicsConstraintParameters.perpAxisA/perpAxisB)

***

### LINEAR\_Z

> **LINEAR\_Z**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L46)

Translation along the third axis of the constraint. This axis is
computed from the cross product of axisA/axisB and perpAxisA/perpAxisB)
