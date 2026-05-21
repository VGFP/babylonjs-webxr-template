[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParticleSystemSet

# Class: ParticleSystemSet

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L23)

Represents a set of particle systems working together to create a specific effect

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new ParticleSystemSet**(): `ParticleSystemSet`

#### Returns

`ParticleSystemSet`

## Properties

### systems

> **systems**: [`IParticleSystem`](../interfaces/IParticleSystem.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L37)

Gets the particle system list

***

### BaseAssetsUrl

> `static` **BaseAssetsUrl**: `string` = `"https://assets.babylonjs.com/particles"`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L28)

Gets or sets base Assets URL
Only used when parsing particle systems from JSON, not part of the core assets

## Accessors

### emitterNode

#### Get Signature

> **get** **emitterNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L42)

Gets or sets the emitter node used with this set

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

#### Set Signature

> **set** **emitterNode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L46)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L115)

Release all associated resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### serialize()

> **serialize**(`serializeTexture?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L135)

Serialize the set into a JSON compatible object

#### Parameters

##### serializeTexture?

`boolean` = `false`

defines if the texture must be serialized as well

#### Returns

`any`

a JSON compatible representation of the set

***

### setEmitterAsSphere()

> **setEmitterAsSphere**(`options`, `renderingGroupId`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L70)

Creates a new emitter mesh as a sphere

#### Parameters

##### options

defines the options used to create the sphere

###### color

[`Color3`](Color3.md)

###### diameter

`number`

###### segments

`number`

##### renderingGroupId

`number`

defines the renderingGroupId to use for the sphere

##### scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`void`

***

### start()

> **start**(`emitter?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L103)

Starts all particle systems of the set

#### Parameters

##### emitter?

[`AbstractMesh`](AbstractMesh.md)

defines an optional mesh to use as emitter for the particle systems

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`data`, `scene`, `gpu?`, `capacity?`): `ParticleSystemSet`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystemSet.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/particleSystemSet.ts#L160)

Parse a new ParticleSystemSet from a serialized source

#### Parameters

##### data

`any`

defines a JSON compatible representation of the set

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### gpu?

`boolean` = `false`

defines if we want GPU particles or CPU particles

##### capacity?

`number`

defines the system capacity (if null or undefined the sotred capacity will be used)

#### Returns

`ParticleSystemSet`

a new ParticleSystemSet
