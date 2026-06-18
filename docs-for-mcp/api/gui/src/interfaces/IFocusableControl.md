[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / IFocusableControl

# Interface: IFocusableControl

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L8)

Interface used to define a control that can receive focus

## Properties

### focusBorderColor?

> `optional` **focusBorderColor?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L45)

Gets or sets the color used to draw the focus border
Defaults to "white"

***

### tabIndex?

> `optional` **tabIndex?**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L39)

Gets or sets the tabIndex of the control

## Methods

### blur()

> **blur**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L34)

Function to unfocus the control programmatically

#### Returns

`void`

***

### focus()

> **focus**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L30)

Function to focus the control programmatically

#### Returns

`void`

***

### keepsFocusWith()

> **keepsFocusWith**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](../classes/Control.md)[]\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L26)

Function called to get the list of controls that should not steal the focus from this control

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](../classes/Control.md)[]\>

an array of controls

***

### onBlur()

> **onBlur**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L16)

Function called when the control loses the focus

#### Returns

`void`

***

### onFocus()

> **onFocus**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L12)

Function called when the control receives the focus

#### Returns

`void`

***

### processKeyboard()

> **processKeyboard**(`evt`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/focusableControl.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/focusableControl.ts#L21)

Function called to let the control handle keyboard events

#### Parameters

##### evt

[`IKeyboardEvent`](../../../core/src/interfaces/IKeyboardEvent.md)

defines the current keyboard event

#### Returns

`void`
