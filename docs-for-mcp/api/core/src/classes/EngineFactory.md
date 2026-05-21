[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EngineFactory

# Class: EngineFactory

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineFactory.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineFactory.ts#L10)

Helper class to create the best engine depending on the current hardware

## Constructors

### Constructor

> **new EngineFactory**(): `EngineFactory`

#### Returns

`EngineFactory`

## Methods

### CreateAsync()

> `static` **CreateAsync**(`canvas`, `options?`): `Promise`\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Engines/engineFactory.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/engineFactory.ts#L17)

Creates an engine based on the capabilities of the underlying hardware

#### Parameters

##### canvas

`HTMLCanvasElement`

Defines the canvas to use to display the result

##### options?

[`EngineOptions`](../interfaces/EngineOptions.md) \| [`NullEngineOptions`](NullEngineOptions.md) \| [`WebGPUEngineOptions`](../interfaces/WebGPUEngineOptions.md)

Defines the options passed to the engine to create the context dependencies

#### Returns

`Promise`\<[`AbstractEngine`](AbstractEngine.md)\>

a promise that resolves with the created engine
