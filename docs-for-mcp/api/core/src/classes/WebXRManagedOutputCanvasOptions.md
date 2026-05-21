[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRManagedOutputCanvasOptions

# Class: WebXRManagedOutputCanvasOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L13)

Configuration object for WebXR output canvas

## Constructors

### Constructor

> **new WebXRManagedOutputCanvasOptions**(): `WebXRManagedOutputCanvasOptions`

#### Returns

`WebXRManagedOutputCanvasOptions`

## Properties

### canvasElement?

> `optional` **canvasElement?**: `HTMLCanvasElement`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L18)

An optional canvas in case you wish to create it yourself and provide it here.
If not provided, a new canvas will be created

***

### canvasOptions?

> `optional` **canvasOptions?**: `XRWebGLLayerInit`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L22)

Options for this XR Layer output

***

### newCanvasCssStyle?

> `optional` **newCanvasCssStyle?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L26)

CSS styling for a newly created canvas (if not provided)

## Methods

### GetDefaults()

> `static` **GetDefaults**(`engine?`): `WebXRManagedOutputCanvasOptions`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRManagedOutputCanvas.ts#L33)

Get the default values of the configuration object

#### Parameters

##### engine?

[`AbstractEngine`](AbstractEngine.md)

defines the engine to use (can be null)

#### Returns

`WebXRManagedOutputCanvasOptions`

default values of this configuration object
