[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXREnterExitUI

# Class: WebXREnterExitUI

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L82)

UI to allow the user to enter/exit XR mode

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new WebXREnterExitUI**(`_scene`, `options`): `WebXREnterExitUI`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L107)

Construct a new EnterExit UI class

#### Parameters

##### \_scene

[`Scene`](Scene.md)

babylon scene object to use

##### options

[`WebXREnterExitUIOptions`](WebXREnterExitUIOptions.md)

(read-only) version of the options passed to this UI

#### Returns

`WebXREnterExitUI`

## Properties

### activeButtonChangedObservable

> **activeButtonChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`WebXREnterExitUIButton`](WebXREnterExitUIButton.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L99)

Fired every time the active button is changed.

When xr is entered via a button that launches xr that button will be the callback parameter

When exiting xr the callback parameter will be null)

***

### options

> **options**: [`WebXREnterExitUIOptions`](WebXREnterExitUIOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L110)

version of the options passed to this UI

***

### overlay

> `readonly` **overlay**: `HTMLDivElement`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L90)

The HTML Div Element to which buttons are added.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L240)

Disposes of the XR UI component

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### setHelperAsync()

> **setHelperAsync**(`helper`, `renderTarget?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L176)

Set the helper to be used with this UI component.
The UI is bound to an experience helper. If not provided the UI can still be used but the events should be registered by the developer.

#### Parameters

##### helper

[`WebXRExperienceHelper`](WebXRExperienceHelper.md)

the experience helper to attach

##### renderTarget?

[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)

an optional render target (in case it is created outside of the helper scope)

#### Returns

`Promise`\<`void`\>

a promise that resolves when the ui is ready

***

### CreateAsync()

> `static` **CreateAsync**(`scene`, `helper`, `options`): `Promise`\<`WebXREnterExitUI`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L206)

Creates UI to allow the user to enter/exit XR mode

#### Parameters

##### scene

[`Scene`](Scene.md)

the scene to add the ui to

##### helper

[`WebXRExperienceHelper`](WebXRExperienceHelper.md)

the xr experience helper to enter/exit xr with

##### options

[`WebXREnterExitUIOptions`](WebXREnterExitUIOptions.md)

options to configure the UI

#### Returns

`Promise`\<`WebXREnterExitUI`\>

the created ui
