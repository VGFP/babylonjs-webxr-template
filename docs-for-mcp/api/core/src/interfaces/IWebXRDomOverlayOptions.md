[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRDomOverlayOptions

# Interface: IWebXRDomOverlayOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDOMOverlay.ts#L10)

Options for DOM Overlay feature

## Properties

### element

> **element**: `string` \| `Element`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDOMOverlay.ts#L16)

DOM Element or document query selector string for overlay.

NOTE: UA may make this element background transparent in XR.

***

### supressXRSelectEvents?

> `optional` **supressXRSelectEvents?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRDOMOverlay.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRDOMOverlay.ts#L20)

Supress XR Select events on container element (DOM blocks interaction to scene).
