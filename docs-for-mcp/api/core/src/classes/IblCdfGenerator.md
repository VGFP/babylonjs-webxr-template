[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IblCdfGenerator

# Class: IblCdfGenerator

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L25)

Build cdf maps to be used for IBL importance sampling.

## Constructors

### Constructor

> **new IblCdfGenerator**(`sceneOrEngine`): `IblCdfGenerator`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L201)

Instanciates the CDF renderer

#### Parameters

##### sceneOrEngine

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)\>

Scene to attach to

#### Returns

`IblCdfGenerator`

The CDF renderer

## Properties

### debugEnabled

> **debugEnabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L155)

Enable the debug view for this pass

***

### onGeneratedObservable

> **onGeneratedObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L229)

Observable that triggers when the CDF renderer is ready

***

### onTextureChangedObservable

> **onTextureChangedObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L236)

Observable that triggers when CDF texture references change.
It is raised after disposing textures (so fallback ICDF can be used)
and after creating new textures (so consumers can rebind immediately).

## Accessors

### debugPassName

#### Get Signature

> **get** **debugPassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L173)

The name of the debug pass post process

##### Returns

`string`

***

### iblSource

#### Get Signature

> **get** **iblSource**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L55)

Gets the IBL source texture being used by the CDF renderer

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **iblSource**(`source`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L63)

Sets the IBL source texture to be used by the CDF renderer.
This will trigger recreation of the CDF assets.

##### Parameters

###### source

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L44)

Returns whether the CDF renderer is supported by the current engine

##### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:514](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L514)

Disposes the CDF renderer and associated resources

#### Returns

`void`

***

### findDominantDirection()

> **findDominantDirection**(): `Promise`\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L475)

Finds the average direction of the highest intensity areas of the IBL source

#### Returns

`Promise`\<[`Vector3`](Vector3.md)\>

Async promise that resolves to the dominant direction of the IBL source

***

### getDebugPassPP()

> **getDebugPassPP**(): [`PostProcess`](PostProcess.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L182)

Gets the debug pass post process

#### Returns

[`PostProcess`](PostProcess.md)

The post process

***

### getIcdfTexture()

> **getIcdfTexture**(): [`Texture`](Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L150)

Return the cumulative distribution function (CDF) texture

#### Returns

[`Texture`](Texture.md)

Return the cumulative distribution function (CDF) texture

***

### isReady()

> **isReady**(): `boolean` \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:411](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L411)

Checks if the CDF renderer is ready

#### Returns

`boolean` \| `null`

true if the CDF renderer is ready

***

### renderWhenReady()

> **renderWhenReady**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:432](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L432)

Explicitly trigger generation of CDF maps when they are ready to render.

#### Returns

`Promise`\<`void`\>

Promise that resolves when the CDF maps are rendered.

***

### setDebugDisplayParams()

> **setDebugDisplayParams**(`x`, `y`, `widthScale`, `heightScale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGenerator.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/iblCdfGenerator.ts#L166)

Sets params that control the position and scaling of the debug display on the screen.

#### Parameters

##### x

`number`

Screen X offset of the debug display (0-1)

##### y

`number`

Screen Y offset of the debug display (0-1)

##### widthScale

`number`

X scale of the debug display (0-1)

##### heightScale

`number`

Y scale of the debug display (0-1)

#### Returns

`void`
