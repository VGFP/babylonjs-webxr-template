[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DefaultLoadingScreen

# Class: DefaultLoadingScreen

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L32)

Class used for the default loading screen

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

## Implements

- [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

## Constructors

### Constructor

> **new DefaultLoadingScreen**(`_renderingCanvas`, `_loadingText?`, `_loadingDivBackgroundColor?`): `DefaultLoadingScreen`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L56)

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

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L45)

Gets or sets the logo url to use for the default loading screen

***

### DefaultSpinnerUrl

> `static` **DefaultSpinnerUrl**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L48)

Gets or sets the spinner url to use for the default loading screen

## Accessors

### loadingUIBackgroundColor

#### Get Signature

> **get** **loadingUIBackgroundColor**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L280)

Gets or sets the color to use for the background

##### Returns

`string`

#### Set Signature

> **set** **loadingUIBackgroundColor**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L284)

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

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L273)

Gets or sets the text to display while loading

##### Returns

`string`

#### Set Signature

> **set** **loadingUIText**(`text`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L262)

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

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L65)

Function called to display the loading screen

#### Returns

`void`

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`displayLoadingUI`](../interfaces/ILoadingScreen.md#displayloadingui)

***

### hideLoadingUI()

> **hideLoadingUI**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/loadingScreen.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/loadingScreen.ts#L216)

Function called to hide the loading screen

#### Returns

`void`

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`hideLoadingUI`](../interfaces/ILoadingScreen.md#hideloadingui)
