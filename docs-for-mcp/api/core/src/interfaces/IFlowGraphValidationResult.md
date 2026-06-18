[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphValidationResult

# Interface: IFlowGraphValidationResult

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphValidator.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L36)

The result of validating a flow graph.

## Properties

### errorCount

> **errorCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphValidator.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L42)

Convenience: number of error-level issues.

***

### issues

> **issues**: [`IFlowGraphValidationIssue`](IFlowGraphValidationIssue.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphValidator.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L40)

All issues found, ordered by severity (errors first).

***

### issuesByBlock

> **issuesByBlock**: `Map`\<`string`, [`IFlowGraphValidationIssue`](IFlowGraphValidationIssue.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphValidator.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L46)

Map from block uniqueId to the issues affecting that block.

***

### isValid

> **isValid**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphValidator.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L38)

Whether the graph passed validation with no errors.

***

### warningCount

> **warningCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/flowGraphValidator.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L44)

Convenience: number of warning-level issues.
