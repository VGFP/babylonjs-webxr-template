[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HandConstraintVisibility

# Enumeration: HandConstraintVisibility

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L53)

Orientations for the hand zones and for the attached node

## Enumeration Members

### ALWAYS\_VISIBLE

> **ALWAYS\_VISIBLE**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L57)

Constraint is always visible

***

### GAZE\_FOCUS

> **GAZE\_FOCUS**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L66)

Constraint is only visible when the user is looking at the constraint.
Uses XR Eye Tracking if enabled/available, otherwise uses camera direction

***

### PALM\_AND\_GAZE

> **PALM\_AND\_GAZE**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L70)

Constraint is only visible when the palm is up and the user is looking at it

***

### PALM\_UP

> **PALM\_UP**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L61)

Constraint is only visible when the palm is up
