[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeMaterialConnectionPointCompatibilityStates

# Enumeration: NodeMaterialConnectionPointCompatibilityStates

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L11)

Enum used to define the compatibility state between two connection points

## Enumeration Members

### Compatible

> **Compatible**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L13)

Points are compatibles

***

### HierarchyIssue

> **HierarchyIssue**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L19)

Points are incompatible because they are in the same hierarchy *

***

### TargetIncompatible

> **TargetIncompatible**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L17)

Points are incompatible because of their targets (vertex vs fragment)

***

### TypeIncompatible

> **TypeIncompatible**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterialBlockConnectionPoint.ts#L15)

Points are incompatible because of their types
