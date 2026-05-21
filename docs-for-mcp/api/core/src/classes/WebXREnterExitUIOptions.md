[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXREnterExitUIOptions

# Class: WebXREnterExitUIOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L37)

Options to create the webXR UI

## Constructors

### Constructor

> **new WebXREnterExitUIOptions**(): `WebXREnterExitUIOptions`

#### Returns

`WebXREnterExitUIOptions`

## Properties

### customButtons?

> `optional` **customButtons?**: [`WebXREnterExitUIButton`](WebXREnterExitUIButton.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L41)

User provided buttons to enable/disable WebXR. The system will provide default if not set

***

### ignoreSessionGrantedEvent?

> `optional` **ignoreSessionGrantedEvent?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L72)

If set, the `sessiongranted` event will not be registered. `sessiongranted` is used to move seamlessly between WebXR experiences.
If set to true the user will be forced to press the "enter XR" button even if sessiongranted event was triggered.
If not set and a sessiongranted event was triggered, the XR session will start automatically.

***

### onError?

> `optional` **onError?**: (`error`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L77)

If defined, this function will be executed if the UI encounters an error when entering XR

#### Parameters

##### error

`any`

#### Returns

`void`

***

### optionalFeatures?

> `optional` **optionalFeatures?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L60)

A list of optional features to init the session with

***

### referenceSpaceType?

> `optional` **referenceSpaceType?**: `XRReferenceSpaceType`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L46)

A reference space type to use when creating the default button.
Default is local-floor

***

### renderTarget?

> `optional` **renderTarget?**: [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L50)

Context to enter xr with

***

### requiredFeatures?

> `optional` **requiredFeatures?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L65)

A list of optional features to init the session with

***

### sessionMode?

> `optional` **sessionMode?**: `XRSessionMode`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXREnterExitUI.ts#L55)

A session mode to use when creating the default button.
Default is immersive-vr
