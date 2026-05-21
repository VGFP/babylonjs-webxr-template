[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IUIEvent

# Interface: IUIEvent

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L19)

Native friendly interface for Event Object

## Extended by

- [`IKeyboardEvent`](IKeyboardEvent.md)
- [`IMouseEvent`](IMouseEvent.md)

## Properties

### currentTarget?

> `optional` **currentTarget?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L28)

Current target for an event

***

### inputIndex

> **inputIndex**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L23)

Input array index

***

### preventDefault

> **preventDefault**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L49)

Tells user agent what to do when not explicitly handled

#### Returns

`void`

***

### ~~srcElement?~~

> `optional` **srcElement?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L34)

Alias for target

#### Deprecated

Use target instead

***

### target

> **target**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L44)

Reference to object where object was dispatched

***

### type

> **type**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L39)

Type of event
