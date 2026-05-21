[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMouseEvent

# Interface: IMouseEvent

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L107)

Native friendly interface for MouseEvent Object

## Extends

- [`IUIEvent`](IUIEvent.md)

## Extended by

- [`IPointerEvent`](IPointerEvent.md)
- [`IWheelEvent`](IWheelEvent.md)

## Properties

### altKey

> **altKey**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L116)

Status of Alt key being pressed

***

### button

> **button**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L121)

Value of single mouse button pressed

***

### buttons

> **buttons**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L126)

Value of all mouse buttons pressed

***

### clientX

> **clientX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L131)

Current X coordinate

***

### clientY

> **clientY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L136)

Current Y coordinate

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L141)

Status of Ctrl key being pressed

***

### currentTarget?

> `optional` **currentTarget?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L28)

Current target for an event

#### Inherited from

[`IUIEvent`](IUIEvent.md).[`currentTarget`](IUIEvent.md#currenttarget)

***

### detail?

> `optional` **detail?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L146)

Provides current click count

***

### inputIndex

> **inputIndex**: [`LeftClick`](../enumerations/PointerInput.md#leftclick) \| [`MiddleClick`](../enumerations/PointerInput.md#middleclick) \| [`RightClick`](../enumerations/PointerInput.md#rightclick) \| [`BrowserBack`](../enumerations/PointerInput.md#browserback) \| [`BrowserForward`](../enumerations/PointerInput.md#browserforward) \| [`MouseWheelX`](../enumerations/PointerInput.md#mousewheelx) \| [`MouseWheelY`](../enumerations/PointerInput.md#mousewheely) \| [`MouseWheelZ`](../enumerations/PointerInput.md#mousewheelz) \| [`Move`](../enumerations/PointerInput.md#move)

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L111)

Subset of possible PointerInput values for events, excluding ones that CANNOT be in events organically

#### Overrides

[`IUIEvent`](IUIEvent.md).[`inputIndex`](IUIEvent.md#inputindex)

***

### metaKey

> **metaKey**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L151)

Status of Meta key (eg. Windows key) being pressed

***

### movementX

> **movementX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L156)

Delta of movement on X axis

***

### movementY

> **movementY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L161)

Delta of movement on Y axis

***

### ~~mozMovementX?~~

> `optional` **mozMovementX?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L167)

Delta of movement on X axis

#### Deprecated

Use 'movementX' instead

***

### ~~mozMovementY?~~

> `optional` **mozMovementY?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L173)

Delta of movement on Y axis

#### Deprecated

Use 'movementY' instead

***

### ~~msMovementX?~~

> `optional` **msMovementX?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L179)

Delta of movement on X axis

#### Deprecated

Use 'movementX' instead

***

### ~~msMovementY?~~

> `optional` **msMovementY?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L185)

Delta of movement on Y axis

#### Deprecated

Use 'movementY' instead

***

### offsetX

> **offsetX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L190)

Current coordinate of X within container

***

### offsetY

> **offsetY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L195)

Current coordinate of Y within container

***

### pageX

> **pageX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L200)

Horizontal coordinate of event

***

### pageY

> **pageY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L205)

Vertical coordinate of event

***

### preventDefault

> **preventDefault**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L49)

Tells user agent what to do when not explicitly handled

#### Returns

`void`

#### Inherited from

[`IUIEvent`](IUIEvent.md).[`preventDefault`](IUIEvent.md#preventdefault)

***

### shiftKey

> **shiftKey**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L210)

Status of Shift key being pressed

***

### ~~srcElement?~~

> `optional` **srcElement?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L34)

Alias for target

#### Deprecated

Use target instead

#### Inherited from

[`IUIEvent`](IUIEvent.md).[`srcElement`](IUIEvent.md#srcelement)

***

### target

> **target**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L44)

Reference to object where object was dispatched

#### Inherited from

[`IUIEvent`](IUIEvent.md).[`target`](IUIEvent.md#target)

***

### type

> **type**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L39)

Type of event

#### Inherited from

[`IUIEvent`](IUIEvent.md).[`type`](IUIEvent.md#type)

***

### ~~webkitMovementX?~~

> `optional` **webkitMovementX?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L216)

Delta of movement on X axis

#### Deprecated

Use 'movementX' instead

***

### ~~webkitMovementY?~~

> `optional` **webkitMovementY?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L222)

Delta of movement on Y axis

#### Deprecated

Use 'movementY' instead

***

### x

> **x**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L227)

Alias of clientX

***

### y

> **y**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/deviceInputEvents.ts#L232)

Alias of clientY
