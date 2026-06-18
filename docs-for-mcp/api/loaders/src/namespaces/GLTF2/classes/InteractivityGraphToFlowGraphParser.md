[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / InteractivityGraphToFlowGraphParser

# Class: InteractivityGraphToFlowGraphParser

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L36)

## Constructors

### Constructor

> **new InteractivityGraphToFlowGraphParser**(`_interactivityGraph`, `_gltf`, `_animationTargetFps?`): `InteractivityGraphToFlowGraphParser`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L48)

#### Parameters

##### \_interactivityGraph

`IKHRInteractivity_Graph`

##### \_gltf

[`IGLTF`](../interfaces/IGLTF.md)

##### \_animationTargetFps?

`number` = `60`

#### Returns

`InteractivityGraphToFlowGraphParser`

## Properties

### \_animationTargetFps

> **\_animationTargetFps**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L51)

## Accessors

### arrays

#### Get Signature

> **get** **arrays**(): `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L62)

##### Returns

`object`

###### events

> **events**: [`InteractivityEvent`](../interfaces/InteractivityEvent.md)[]

###### mappings

> **mappings**: `object`[]

###### nodes

> **nodes**: `object`[]

###### staticVariables

> **staticVariables**: `object`[]

###### types

> **types**: `object`[]

## Methods

### getVariableName()

> **getVariableName**(`index`): `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:465](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L465)

#### Parameters

##### index

`number`

#### Returns

`string`

***

### serializeToFlowGraph()

> **serializeToFlowGraph**(): [`ISerializedFlowGraph`](../../../../../core/src/interfaces/ISerializedFlowGraph.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:469](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L469)

#### Returns

[`ISerializedFlowGraph`](../../../../../core/src/interfaces/ISerializedFlowGraph.md)
