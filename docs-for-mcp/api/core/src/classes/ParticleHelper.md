[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParticleHelper

# Class: ParticleHelper

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L18)

This class is made for on one-liner static method to help creating particle system set.

## Constructors

### Constructor

> **new ParticleHelper**(): `ParticleHelper`

#### Returns

`ParticleHelper`

## Properties

### BaseAssetsUrl

> `static` **BaseAssetsUrl**: `string` = `ParticleSystemSet.BaseAssetsUrl`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L22)

Gets or sets base Assets URL

***

### ~~CreateFromSnippetAsync~~

> `static` **CreateFromSnippetAsync**: (`snippetId`, `scene`, `gpu`, `rootUrl`, `capacity?`) => `Promise`\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\> = `ParticleHelper.ParseFromSnippetAsync`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L229)

Creates a particle system from a snippet saved by the particle system editor

Creates a particle system from a snippet saved by the particle system editor

#### Parameters

##### snippetId

`string`

defines the snippet to load (can be set to _BLANK to create a default one)

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### gpu?

`boolean` = `false`

If the system will use gpu

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

##### capacity?

`number`

defines the system capacity (if null or undefined the sotred capacity will be used)

#### Returns

`Promise`\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

a promise that will resolve to the new particle system

#### Deprecated

Please use ParseFromSnippetAsync instead

#### Param

**snippetId**

defines the snippet to load (can be set to _BLANK to create a default one)

#### Param

**scene**

defines the hosting scene

#### Param

**gpu**

If the system will use gpu

#### Param

**rootUrl**

defines the root URL to use to load textures and relative dependencies

#### Param

**capacity**

defines the system capacity (if null or undefined the sotred capacity will be used)

#### Returns

a promise that will resolve to the new particle system

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L25)

Define the Url to load snippets

## Methods

### CreateAsync()

> `static` **CreateAsync**(`type`, `scene`, `gpu?`, `capacity?`): `Promise`\<[`ParticleSystemSet`](ParticleSystemSet.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L79)

This is the main static method (one-liner) of this helper to create different particle systems

#### Parameters

##### type

`string`

This string represents the type to the particle system to create

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

The scene where the particle system should live

##### gpu?

`boolean` = `false`

If the system will use gpu

##### capacity?

`number`

defines the system capacity (if null or undefined the sotred capacity will be used)

#### Returns

`Promise`\<[`ParticleSystemSet`](ParticleSystemSet.md)\>

the ParticleSystemSet created

***

### CreateDefault()

> `static` **CreateDefault**(`emitter`, `capacity?`, `scene?`, `useGPU?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L35)

Create a default particle system that you can tweak

#### Parameters

##### emitter

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

defines the emitter to use

##### capacity?

`number` = `500`

defines the system capacity (default is 500 particles)

##### scene?

[`Scene`](Scene.md)

defines the hosting scene

##### useGPU?

`boolean` = `false`

defines if a GPUParticleSystem must be created (default is false)

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the new Particle system

***

### ExportSet()

> `static` **ExportSet**(`systems`): [`ParticleSystemSet`](ParticleSystemSet.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L120)

Static function used to export a particle system to a ParticleSystemSet variable.
Please note that the emitter shape is not exported

#### Parameters

##### systems

[`IParticleSystem`](../interfaces/IParticleSystem.md)[]

defines the particle systems to export

#### Returns

[`ParticleSystemSet`](ParticleSystemSet.md)

the created particle system set

***

### ParseFromFileAsync()

> `static` **ParseFromFileAsync**(`name`, `url`, `scene`, `gpu?`, `rootUrl?`, `capacity?`): `Promise`\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L141)

Creates a particle system from a snippet saved in a remote file

#### Parameters

##### name

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the name of the particle system to create (can be null or empty to use the one from the json data)

##### url

`string`

defines the url to load from

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### gpu?

`boolean` = `false`

If the system will use gpu

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

##### capacity?

`number`

defines the system capacity (if null or undefined the sotred capacity will be used)

#### Returns

`Promise`\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

a promise that will resolve to the new particle system

***

### ParseFromSnippetAsync()

> `static` **ParseFromSnippetAsync**(`snippetId`, `scene`, `gpu?`, `rootUrl?`, `capacity?`): `Promise`\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleHelper.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleHelper.ts#L183)

Creates a particle system from a snippet saved by the particle system editor

#### Parameters

##### snippetId

`string`

defines the snippet to load (can be set to _BLANK to create a default one)

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### gpu?

`boolean` = `false`

If the system will use gpu

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

##### capacity?

`number`

defines the system capacity (if null or undefined the sotred capacity will be used)

#### Returns

`Promise`\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

a promise that will resolve to the new particle system
