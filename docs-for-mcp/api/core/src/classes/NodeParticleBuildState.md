[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeParticleBuildState

# Class: NodeParticleBuildState

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L17)

Class used to store node based geometry build state

## Constructors

### Constructor

> **new NodeParticleBuildState**(): `NodeParticleBuildState`

#### Returns

`NodeParticleBuildState`

## Properties

### buildId

> **buildId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L31)

Gets or sets the build identifier

***

### capacity

> **capacity**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L23)

Gets the capactity of the particle system to build

***

### gradientIndex

> **gradientIndex**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L52)

Gets or sets the index of the gradient to use

***

### nextGradientIndex

> **nextGradientIndex**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L56)

Gets or sets next gradient in line

***

### nextGradientValue

> **nextGradientValue**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L60)

Gets or sets the next gradient value

***

### notConnectedNonOptionalInputs

> **notConnectedNonOptionalInputs**: [`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L34)

Gets or sets the list of non connected mandatory inputs

***

### particleContext

> **particleContext**: [`Nullable`](../type-aliases/Nullable.md)\<[`Particle`](Particle.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L42)

Gets or sets the particle context for contextual data

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L28)

Gets the scene where the particle system is built

***

### systemContext

> **systemContext**: [`Nullable`](../type-aliases/Nullable.md)\<`ThinParticleSystem`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L47)

Gets or sets the system context for contextual data

***

### verbose

> **verbose**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L37)

Gets or sets a boolean indicating that verbose mode is on

## Accessors

### emitterInverseWorldMatrix

#### Get Signature

> **get** **emitterInverseWorldMatrix**(): [`Matrix`](Matrix.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L195)

Gets the emitter inverse world matrix

##### Returns

[`Matrix`](Matrix.md) \| `null`

***

### emitterPosition

#### Get Signature

> **get** **emitterPosition**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L205)

Gets the emitter position

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

***

### emitterWorldMatrix

#### Get Signature

> **get** **emitterWorldMatrix**(): [`Matrix`](Matrix.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L185)

Gets the emitter world matrix

##### Returns

[`Matrix`](Matrix.md) \| `null`

## Methods

### adapt()

> **adapt**(`source`, `targetType`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L102)

Adapt a value to a target type

#### Parameters

##### source

[`NodeParticleConnectionPoint`](NodeParticleConnectionPoint.md)

defines the value to adapt

##### targetType

[`NodeParticleBlockConnectionPointTypes`](../enumerations/NodeParticleBlockConnectionPointTypes.md)

defines the target type

#### Returns

`any`

the adapted value

***

### emitErrors()

> **emitErrors**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L65)

Emits errors if any

#### Returns

`void`

***

### getContextualValue()

> **getContextualValue**(`source`): `number` \| [`Vector2`](Vector2.md) \| [`Color4`](Color4.md) \| [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L126)

Gets the value associated with a contextual source

#### Parameters

##### source

[`NodeParticleContextualSources`](../enumerations/NodeParticleContextualSources.md)

Source of the contextual value

#### Returns

`number` \| [`Vector2`](Vector2.md) \| [`Color4`](Color4.md) \| [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the value associated with the source

***

### getSystemValue()

> **getSystemValue**(`source`): `number` \| [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L226)

Gets the value associated with a system source

#### Parameters

##### source

[`NodeParticleSystemSources`](../enumerations/NodeParticleSystemSources.md)

Source of the system value

#### Returns

`number` \| [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

the value associated with the source

***

### registerBuildPromise()

> **registerBuildPromise**(`promise`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L84)

Registers an asynchronous operation that must complete before the node particle system is ready.

#### Parameters

##### promise

`Promise`\<`void`\>

defines the promise to wait for

#### Returns

`void`

***

### waitForBuildPromisesAsync()

> **waitForBuildPromisesAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/Node/nodeParticleBuildState.ts#L92)

Waits for all asynchronous build operations to complete.

#### Returns

`Promise`\<`void`\>

a promise that resolves when all registered build operations are complete
