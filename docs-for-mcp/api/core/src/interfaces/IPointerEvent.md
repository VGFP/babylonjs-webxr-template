[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPointerEvent

# Interface: IPointerEvent

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L238)

Native friendly interface for PointerEvent Object

## Extends

- [`IMouseEvent`](IMouseEvent.md)

## Properties

### altKey

> **altKey**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L116)

Status of Alt key being pressed

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`altKey`](IMouseEvent.md#altkey)

***

### button

> **button**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L121)

Value of single mouse button pressed

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`button`](IMouseEvent.md#button)

***

### buttons

> **buttons**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L126)

Value of all mouse buttons pressed

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`buttons`](IMouseEvent.md#buttons)

***

### clientX

> **clientX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L131)

Current X coordinate

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`clientX`](IMouseEvent.md#clientx)

***

### clientY

> **clientY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L136)

Current Y coordinate

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`clientY`](IMouseEvent.md#clienty)

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L141)

Status of Ctrl key being pressed

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`ctrlKey`](IMouseEvent.md#ctrlkey)

***

### currentTarget?

> `optional` **currentTarget?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L28)

Current target for an event

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`currentTarget`](IMouseEvent.md#currenttarget)

***

### detail?

> `optional` **detail?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L146)

Provides current click count

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`detail`](IMouseEvent.md#detail)

***

### inputIndex

> **inputIndex**: [`LeftClick`](../enumerations/PointerInput.md#leftclick) \| [`MiddleClick`](../enumerations/PointerInput.md#middleclick) \| [`RightClick`](../enumerations/PointerInput.md#rightclick) \| [`BrowserBack`](../enumerations/PointerInput.md#browserback) \| [`BrowserForward`](../enumerations/PointerInput.md#browserforward) \| [`Move`](../enumerations/PointerInput.md#move)

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L242)

Subset of possible PointerInput values for events, excluding ones that CANNOT be in events organically and mouse wheel values

#### Overrides

[`IMouseEvent`](IMouseEvent.md).[`inputIndex`](IMouseEvent.md#inputindex)

***

### metaKey

> **metaKey**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L151)

Status of Meta key (eg. Windows key) being pressed

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`metaKey`](IMouseEvent.md#metakey)

***

### movementX

> **movementX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L156)

Delta of movement on X axis

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`movementX`](IMouseEvent.md#movementx)

***

### movementY

> **movementY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L161)

Delta of movement on Y axis

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`movementY`](IMouseEvent.md#movementy)

***

### ~~mozMovementX?~~

> `optional` **mozMovementX?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L167)

Delta of movement on X axis

#### Deprecated

Use 'movementX' instead

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`mozMovementX`](IMouseEvent.md#mozmovementx)

***

### ~~mozMovementY?~~

> `optional` **mozMovementY?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L173)

Delta of movement on Y axis

#### Deprecated

Use 'movementY' instead

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`mozMovementY`](IMouseEvent.md#mozmovementy)

***

### ~~msMovementX?~~

> `optional` **msMovementX?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L179)

Delta of movement on X axis

#### Deprecated

Use 'movementX' instead

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`msMovementX`](IMouseEvent.md#msmovementx)

***

### ~~msMovementY?~~

> `optional` **msMovementY?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L185)

Delta of movement on Y axis

#### Deprecated

Use 'movementY' instead

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`msMovementY`](IMouseEvent.md#msmovementy)

***

### offsetX

> **offsetX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L190)

Current coordinate of X within container

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`offsetX`](IMouseEvent.md#offsetx)

***

### offsetY

> **offsetY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L195)

Current coordinate of Y within container

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`offsetY`](IMouseEvent.md#offsety)

***

### pageX

> **pageX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L200)

Horizontal coordinate of event

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`pageX`](IMouseEvent.md#pagex)

***

### pageY

> **pageY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L205)

Vertical coordinate of event

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`pageY`](IMouseEvent.md#pagey)

***

### pointerId

> **pointerId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L247)

Pointer Event ID

***

### pointerType

> **pointerType**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L252)

Type of pointer

***

### preventDefault

> **preventDefault**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L49)

Tells user agent what to do when not explicitly handled

#### Returns

`void`

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`preventDefault`](IMouseEvent.md#preventdefault)

***

### shiftKey

> **shiftKey**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L210)

Status of Shift key being pressed

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`shiftKey`](IMouseEvent.md#shiftkey)

***

### ~~srcElement?~~

> `optional` **srcElement?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L34)

Alias for target

#### Deprecated

Use target instead

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`srcElement`](IMouseEvent.md#srcelement)

***

### target

> **target**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L44)

Reference to object where object was dispatched

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`target`](IMouseEvent.md#target)

***

### type

> **type**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L39)

Type of event

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`type`](IMouseEvent.md#type)

***

### ~~webkitMovementX?~~

> `optional` **webkitMovementX?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L216)

Delta of movement on X axis

#### Deprecated

Use 'movementX' instead

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`webkitMovementX`](IMouseEvent.md#webkitmovementx)

***

### ~~webkitMovementY?~~

> `optional` **webkitMovementY?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L222)

Delta of movement on Y axis

#### Deprecated

Use 'movementY' instead

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`webkitMovementY`](IMouseEvent.md#webkitmovementy)

***

### x

> **x**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L227)

Alias of clientX

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`x`](IMouseEvent.md#x)

***

### y

> **y**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/deviceInputEvents.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/deviceInputEvents.ts#L232)

Alias of clientY

#### Inherited from

[`IMouseEvent`](IMouseEvent.md).[`y`](IMouseEvent.md#y)
