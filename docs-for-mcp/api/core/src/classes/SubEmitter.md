[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SubEmitter

# Class: SubEmitter

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L27)

Sub emitter class used to emit particles from an existing particle

## Constructors

### Constructor

> **new SubEmitter**(`particleSystem`): `SubEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L46)

Creates a sub emitter

#### Parameters

##### particleSystem

[`ParticleSystem`](ParticleSystem.md)

the particle system to be used by the sub emitter

#### Returns

`SubEmitter`

## Properties

### inheritDirection

> **inheritDirection**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L36)

If the particle should inherit the direction from the particle it's attached to. (+Y will face the direction the particle is moving) (Default: false)
Note: This only is supported when using an emitter of type Mesh

***

### inheritedVelocityAmount

> **inheritedVelocityAmount**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L40)

How much of the attached particles speed should be added to the sub emitted particle (default: 0)

***

### particleSystem

> **particleSystem**: [`ParticleSystem`](ParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L50)

the particle system to be used by the sub emitter

***

### type

> **type**: [`SubEmitterType`](../enumerations/SubEmitterType.md) = `SubEmitterType.END`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L31)

Type of the submitter (Default: END)

## Methods

### clone()

> **clone**(): `SubEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L63)

Clones the sub emitter

#### Returns

`SubEmitter`

the cloned sub emitter

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L131)

Release associated resources

#### Returns

`void`

***

### serialize()

> **serialize**(`serializeTexture?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L93)

Serialize current object to a JSON object

#### Parameters

##### serializeTexture?

`boolean` = `false`

defines if the texture must be serialized as well

#### Returns

`any`

the serialized object

***

### Parse()

> `static` **Parse**(`serializationObject`, `sceneOrEngine`, `rootUrl`): `SubEmitter`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/subEmitter.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/subEmitter.ts#L119)

Creates a new SubEmitter from a serialized JSON version

#### Parameters

##### serializationObject

`any`

defines the JSON object to read from

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

defines the hosting scene or the hosting engine

##### rootUrl

`string`

defines the rootUrl for data loading

#### Returns

`SubEmitter`

a new SubEmitter
