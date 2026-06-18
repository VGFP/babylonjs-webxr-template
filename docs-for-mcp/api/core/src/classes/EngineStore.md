[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EngineStore

# Class: EngineStore

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineStore.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engineStore.ts#L11)

The engine store class is responsible to hold all the instances of Engine and Scene created
during the life time of the application.

## Constructors

### Constructor

> **new EngineStore**(): `EngineStore`

#### Returns

`EngineStore`

## Properties

### FallbackTexture

> `static` **FallbackTexture**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineStore.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engineStore.ts#L50)

Texture content used if a texture cannot loaded

***

### Instances

> `static` **Instances**: [`AbstractEngine`](AbstractEngine.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineStore.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engineStore.ts#L13)

Gets the list of created engines

***

### OnEnginesDisposedObservable

> `static` **OnEnginesDisposedObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineStore.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engineStore.ts#L19)

Notifies when an engine was disposed.
Mainly used for static/cache cleanup

***

### UseFallbackTexture

> `static` **UseFallbackTexture**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineStore.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engineStore.ts#L45)

Gets or sets a global variable indicating if fallback texture must be used when a texture cannot be loaded

## Accessors

### LastCreatedEngine

#### Get Signature

> **get** `static` **LastCreatedEngine**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineStore.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engineStore.ts#L27)

Gets the latest created engine

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

***

### LastCreatedScene

#### Get Signature

> **get** `static` **LastCreatedScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineStore.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/engineStore.ts#L38)

Gets the latest created scene

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>
