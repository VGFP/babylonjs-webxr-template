[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeGeometryBuildState

# Class: NodeGeometryBuildState

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L13)

Class used to store node based geometry build state

## Constructors

### Constructor

> **new NodeGeometryBuildState**(): `NodeGeometryBuildState`

#### Returns

`NodeGeometryBuildState`

## Properties

### buildId

> **buildId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L26)

Gets or sets the build identifier

***

### noContextualData

> **noContextualData**: [`NodeGeometryContextualSources`](../enumerations/NodeGeometryContextualSources.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L24)

Gets or sets the list of non contextual inputs having no contextudal data

***

### notConnectedNonOptionalInputs

> **notConnectedNonOptionalInputs**: [`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L22)

Gets or sets the list of non connected mandatory inputs

***

### verbose

> **verbose**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L28)

Gets or sets a boolean indicating that verbose mode is on

***

### vertexData

> **vertexData**: [`Nullable`](../type-aliases/Nullable.md)\<[`VertexData`](VertexData.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L30)

Gets or sets the vertex data

## Accessors

### executionContext

#### Get Signature

> **get** **executionContext**(): [`Nullable`](../type-aliases/Nullable.md)\<[`INodeGeometryExecutionContext`](../interfaces/INodeGeometryExecutionContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L46)

Gets or sets the execution context

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`INodeGeometryExecutionContext`](../interfaces/INodeGeometryExecutionContext.md)\>

***

### geometryContext

#### Get Signature

> **get** **geometryContext**(): [`Nullable`](../type-aliases/Nullable.md)\<[`VertexData`](VertexData.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L41)

Gets or sets the geometry context

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`VertexData`](VertexData.md)\>

***

### instancingContext

#### Get Signature

> **get** **instancingContext**(): [`Nullable`](../type-aliases/Nullable.md)\<`INodeGeometryInstancingContext`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L51)

Gets or sets the instancing context

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`INodeGeometryInstancingContext`\>

## Methods

### adapt()

> **adapt**(`source`, `targetType`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L221)

Adapt a value to a target type

#### Parameters

##### source

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

defines the value to adapt

##### targetType

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

defines the target type

#### Returns

`any`

the adapted value

***

### adaptInput()

> **adaptInput**(`source`, `targetType`, `defaultValue`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L247)

Adapt an input value to a target type

#### Parameters

##### source

[`NodeGeometryConnectionPoint`](NodeGeometryConnectionPoint.md)

defines the value to adapt

##### targetType

[`NodeGeometryBlockConnectionPointTypes`](../enumerations/NodeGeometryBlockConnectionPointTypes.md)

defines the target type

##### defaultValue

`any`

defines the default value to use if not connected

#### Returns

`any`

the adapted value

***

### emitErrors()

> **emitErrors**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L273)

Emits console errors and exceptions if there is a failing check

#### Returns

`void`

***

### getContextualValue()

> **getContextualValue**(`source`, `skipWarning?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L112)

Gets the value associated with a contextual source

#### Parameters

##### source

[`NodeGeometryContextualSources`](../enumerations/NodeGeometryContextualSources.md)

Source of the contextual value

##### skipWarning?

`boolean` = `false`

Do not store the warning for reporting if true

#### Returns

`any`

the value associated with the source

***

### pushExecutionContext()

> **pushExecutionContext**(`executionContext`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L68)

Push the new active execution context

#### Parameters

##### executionContext

[`INodeGeometryExecutionContext`](../interfaces/INodeGeometryExecutionContext.md)

defines the execution context

#### Returns

`void`

***

### pushGeometryContext()

> **pushGeometryContext**(`geometryContext`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L59)

Push the new active geometry context

#### Parameters

##### geometryContext

[`VertexData`](VertexData.md)

defines the geometry context

#### Returns

`void`

***

### pushInstancingContext()

> **pushInstancingContext**(`instancingContext`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L77)

Push the new active instancing context

#### Parameters

##### instancingContext

`INodeGeometryInstancingContext`

defines the instancing context

#### Returns

`void`

***

### restoreExecutionContext()

> **restoreExecutionContext**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L93)

Remove current execution context and restore the previous one

#### Returns

`void`

***

### restoreGeometryContext()

> **restoreGeometryContext**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L85)

Remove current geometry context and restore the previous one

#### Returns

`void`

***

### restoreInstancingContext()

> **restoreInstancingContext**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Node/nodeGeometryBuildState.ts#L101)

Remove current isntancing context and restore the previous one

#### Returns

`void`
