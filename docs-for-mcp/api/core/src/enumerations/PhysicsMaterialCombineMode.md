[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsMaterialCombineMode

# Enumeration: PhysicsMaterialCombineMode

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L8)

Determines how values from the PhysicsMaterial are combined when
two objects are in contact. When each PhysicsMaterial specifies
a different combine mode for some property, the combine mode which
is used will be selected based on their order in this enum - i.e.
a value later in this list will be preferentially used.

## Enumeration Members

### ARITHMETIC\_MEAN

> **ARITHMETIC\_MEAN**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L26)

The final value will be the arithmetic mean of the two values:
(valueA + valueB) / 2

***

### GEOMETRIC\_MEAN

> **GEOMETRIC\_MEAN**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L13)

The final value will be the geometric mean of the two values:
sqrt( valueA *  valueB )

***

### MAXIMUM

> **MAXIMUM**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L22)

The final value will be the larger of the two:
max( valueA , valueB )

***

### MINIMUM

> **MINIMUM**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L18)

The final value will be the smaller of the two:
min( valueA , valueB )

***

### MULTIPLY

> **MULTIPLY**: `4`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L31)

The final value will be the product of the two values:
valueA * valueB
