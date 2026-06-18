[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / Style

# Class: Style

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L10)

Define a style used by control to automatically setup properties based on a template.
Only support font related properties so far

## Implements

- [`IDisposable`](../../../core/src/interfaces/IDisposable.md)

## Constructors

### Constructor

> **new Style**(`host`): `Style`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L28)

Creates a new style object

#### Parameters

##### host

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

defines the AdvancedDynamicTexture which hosts this style

#### Returns

`Style`

## Properties

### onChangedObservable

> **onChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`Style`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L22)

Observable raised when the style values are changed

## Accessors

### fontFamily

#### Get Signature

> **get** **fontFamily**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L52)

Gets or sets the font family

##### Returns

`string`

#### Set Signature

> **set** **fontFamily**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L56)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### fontSize

#### Get Signature

> **get** **fontSize**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L35)

Gets or sets the font size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **fontSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L39)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

***

### fontStyle

#### Get Signature

> **get** **fontStyle**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L68)

Gets or sets the font style

##### Returns

`string`

#### Set Signature

> **set** **fontStyle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L72)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### fontWeight

#### Get Signature

> **get** **fontWeight**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L82)

Gets or sets font weight

##### Returns

`string`

#### Set Signature

> **set** **fontWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L86)

##### Parameters

###### value

`string`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/style.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/style.ts#L96)

Dispose all associated resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../../../core/src/interfaces/IDisposable.md).[`dispose`](../../../core/src/interfaces/IDisposable.md#dispose)
