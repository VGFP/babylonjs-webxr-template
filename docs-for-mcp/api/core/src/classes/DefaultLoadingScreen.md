[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DefaultLoadingScreen

# Class: DefaultLoadingScreen

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L35)

Class used for the default loading screen

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

## Implements

- [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

## Constructors

### Constructor

> **new DefaultLoadingScreen**(`_renderingCanvas`, `_loadingText?`, `_loadingDivBackgroundColor?`): `DefaultLoadingScreen`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L59)

Creates a new default loading screen

#### Parameters

##### \_renderingCanvas

`HTMLCanvasElement`

defines the canvas used to render the scene

##### \_loadingText?

`string` = `""`

defines the default text to display

##### \_loadingDivBackgroundColor?

`string` = `"black"`

defines the default background color

#### Returns

`DefaultLoadingScreen`

## Properties

### DefaultLogoUrl

> `static` **DefaultLogoUrl**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L48)

Gets or sets the logo url to use for the default loading screen

***

### DefaultSpinnerUrl

> `static` **DefaultSpinnerUrl**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L51)

Gets or sets the spinner url to use for the default loading screen

## Accessors

### loadingUIBackgroundColor

#### Get Signature

> **get** **loadingUIBackgroundColor**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L283)

Gets or sets the color to use for the background

##### Returns

`string`

#### Set Signature

> **set** **loadingUIBackgroundColor**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L287)

Gets or sets the color to use for the background

##### Parameters

###### color

`string`

##### Returns

`void`

Gets or sets the color to use for the background

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`loadingUIBackgroundColor`](../interfaces/ILoadingScreen.md#loadinguibackgroundcolor)

***

### loadingUIText

#### Get Signature

> **get** **loadingUIText**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:276](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L276)

Gets or sets the text to display while loading

##### Returns

`string`

#### Set Signature

> **set** **loadingUIText**(`text`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L265)

Gets or sets the text to display while loading

##### Parameters

###### text

`string`

##### Returns

`void`

Gets or sets the text to display while loading

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`loadingUIText`](../interfaces/ILoadingScreen.md#loadinguitext)

## Methods

### displayLoadingUI()

> **displayLoadingUI**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L68)

Function called to display the loading screen

#### Returns

`void`

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`displayLoadingUI`](../interfaces/ILoadingScreen.md#displayloadingui)

***

### hideLoadingUI()

> **hideLoadingUI**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.pure.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/loadingScreen.pure.ts#L219)

Function called to hide the loading screen

#### Returns

`void`

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`hideLoadingUI`](../interfaces/ILoadingScreen.md#hideloadingui)
