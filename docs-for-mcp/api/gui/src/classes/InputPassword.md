[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / InputPassword

# Class: InputPassword

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputPassword.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputPassword.ts#L8)

Class used to create a password control

## Extends

- [`InputText`](InputText.md)

## Constructors

### Constructor

> **new InputPassword**(`name?`, `text?`): `InputPassword`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L402)

Creates a new InputText

#### Parameters

##### name?

`string`

defines the control name

##### text?

`string` = `""`

defines the text of the control

#### Returns

`InputPassword`

#### Inherited from

[`InputText`](InputText.md).[`constructor`](InputText.md#constructor)

## Properties

### animations

> **animations**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1311)

Array of animations

#### Inherited from

[`InputText`](InputText.md).[`animations`](InputText.md#animations)

***

### disableMobilePrompt

> **disableMobilePrompt**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L62)

Force disable prompt on mobile device

#### Inherited from

[`InputText`](InputText.md).[`disableMobilePrompt`](InputText.md#disablemobileprompt)

***

### hoverCursor

> **hoverCursor**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L296)

Gets or sets the cursor to use when the control is hovered

#### Inherited from

[`InputText`](InputText.md).[`hoverCursor`](InputText.md#hovercursor)

***

### isFocusInvisible

> **isFocusInvisible**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L189)

Gets or sets a boolean indicating if the control can be focusable

#### Inherited from

[`InputText`](InputText.md).[`isFocusInvisible`](InputText.md#isfocusinvisible)

***

### isHitTestVisible

> **isHitTestVisible**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L177)

Gets or sets a boolean indicating if the control can be hit with pointer events

#### Inherited from

[`InputText`](InputText.md).[`isHitTestVisible`](InputText.md#ishittestvisible)

***

### isPointerBlocker

> **isPointerBlocker**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L186)

Gets or sets a boolean indicating if the control can block pointer events. False by default except on the following controls:
* Button controls (Button, RadioButton, ToggleButton)
* Checkbox
* ColorPicker
* InputText
* Slider

#### Inherited from

[`InputText`](InputText.md).[`isPointerBlocker`](InputText.md#ispointerblocker)

***

### isSerializable

> **isSerializable**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L470)

Indicates if the control should be serialized. Defaults to true.

#### Inherited from

[`InputText`](InputText.md).[`isSerializable`](InputText.md#isserializable)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L173)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`InputText`](InputText.md).[`metadata`](InputText.md#metadata)

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L403)

defines the control name

#### Inherited from

[`InputText`](InputText.md).[`name`](InputText.md#name)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L336)

Observable that fires whenever the accessibility event of the control has changed

#### Inherited from

[`InputText`](InputText.md).[`onAccessibilityTagChangedObservable`](InputText.md#onaccessibilitytagchangedobservable)

***

### onAfterDrawObservable

> **onAfterDrawObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L390)

An event triggered after the control was drawn

#### Inherited from

[`InputText`](InputText.md).[`onAfterDrawObservable`](InputText.md#onafterdrawobservable)

***

### onBeforeDrawObservable

> **onBeforeDrawObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L385)

An event triggered before drawing the control

#### Inherited from

[`InputText`](InputText.md).[`onBeforeDrawObservable`](InputText.md#onbeforedrawobservable)

***

### onBeforeKeyAddObservable

> **onBeforeKeyAddObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`InputText`](InputText.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L97)

Observable raised just before an entered character is to be added

#### Inherited from

[`InputText`](InputText.md).[`onBeforeKeyAddObservable`](InputText.md#onbeforekeyaddobservable)

***

### onBlurObservable

> **onBlurObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1341)

Observable raised when the control loses the focus

#### Inherited from

[`InputText`](InputText.md).[`onBlurObservable`](InputText.md#onblurobservable)

***

### onDirtyObservable

> **onDirtyObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L380)

An event triggered when the control is marked as dirty

#### Inherited from

[`InputText`](InputText.md).[`onDirtyObservable`](InputText.md#ondirtyobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L395)

An event triggered when the control has been disposed

#### Inherited from

[`InputText`](InputText.md).[`onDisposeObservable`](InputText.md#ondisposeobservable)

***

### onEnabledStateChangedObservable

> **onEnabledStateChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L131)

Observable that fires when the control's enabled state changes

#### Inherited from

[`InputText`](InputText.md).[`onEnabledStateChangedObservable`](InputText.md#onenabledstatechangedobservable)

***

### onEnterPressedObservable

> **onEnterPressedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L370)

An event triggered when a control receives an ENTER key down event

#### Inherited from

[`InputText`](InputText.md).[`onEnterPressedObservable`](InputText.md#onenterpressedobservable)

***

### onFocusObservable

> **onFocusObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1339)

Observable raised when the control gets the focus

#### Inherited from

[`InputText`](InputText.md).[`onFocusObservable`](InputText.md#onfocusobservable)

***

### onIsVisibleChangedObservable

> **onIsVisibleChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L400)

An event triggered when the control isVisible is changed

#### Inherited from

[`InputText`](InputText.md).[`onIsVisibleChangedObservable`](InputText.md#onisvisiblechangedobservable)

***

### onKeyboardEventProcessedObservable

> **onKeyboardEventProcessedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IKeyboardEvent`](../../../core/src/interfaces/IKeyboardEvent.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1343)

Observable raised when a key event was processed

#### Inherited from

[`InputText`](InputText.md).[`onKeyboardEventProcessedObservable`](InputText.md#onkeyboardeventprocessedobservable)

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L365)

An event triggered when a control is clicked on

#### Inherited from

[`InputText`](InputText.md).[`onPointerClickObservable`](InputText.md#onpointerclickobservable)

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L355)

An event triggered when the pointer taps the control

#### Inherited from

[`InputText`](InputText.md).[`onPointerDownObservable`](InputText.md#onpointerdownobservable)

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L375)

An event triggered when pointer enters the control

#### Inherited from

[`InputText`](InputText.md).[`onPointerEnterObservable`](InputText.md#onpointerenterobservable)

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L345)

An event triggered when the pointer moves over the control.

#### Inherited from

[`InputText`](InputText.md).[`onPointerMoveObservable`](InputText.md#onpointermoveobservable)

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L350)

An event triggered when the pointer moves out of the control.

#### Inherited from

[`InputText`](InputText.md).[`onPointerOutObservable`](InputText.md#onpointeroutobservable)

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L360)

An event triggered when pointer up

#### Inherited from

[`InputText`](InputText.md).[`onPointerUpObservable`](InputText.md#onpointerupobservable)

***

### onTextChangedObservable

> **onTextChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`InputText`](InputText.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L95)

Observable raised when the text changes

#### Inherited from

[`InputText`](InputText.md).[`onTextChangedObservable`](InputText.md#ontextchangedobservable)

***

### onTextCopyObservable

> **onTextCopyObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`InputText`](InputText.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L101)

Observable raised when copy event is triggered

#### Inherited from

[`InputText`](InputText.md).[`onTextCopyObservable`](InputText.md#ontextcopyobservable)

***

### onTextCutObservable

> **onTextCutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`InputText`](InputText.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L103)

Observable raised when cut event is triggered

#### Inherited from

[`InputText`](InputText.md).[`onTextCutObservable`](InputText.md#ontextcutobservable)

***

### onTextHighlightObservable

> **onTextHighlightObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`InputText`](InputText.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L99)

Observable raised when the text is highlighted

#### Inherited from

[`InputText`](InputText.md).[`onTextHighlightObservable`](InputText.md#ontexthighlightobservable)

***

### onTextPasteObservable

> **onTextPasteObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`InputText`](InputText.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L105)

Observable raised when paste event is triggered

#### Inherited from

[`InputText`](InputText.md).[`onTextPasteObservable`](InputText.md#ontextpasteobservable)

***

### onWheelObservable

> **onWheelObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L341)

An event triggered when pointer wheel is scrolled

#### Inherited from

[`InputText`](InputText.md).[`onWheelObservable`](InputText.md#onwheelobservable)

***

### overlapDeltaMultiplier?

> `optional` **overlapDeltaMultiplier?**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1306)

Gets/sets the deoverlap movement multiplier

#### Inherited from

[`InputText`](InputText.md).[`overlapDeltaMultiplier`](InputText.md#overlapdeltamultiplier)

***

### overlapGroup?

> `optional` **overlapGroup?**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1301)

Gets/sets the overlap group of the control.
Controls with overlapGroup set to a number can be deoverlapped.
Controls with overlapGroup set to undefined are not deoverlapped.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#deoverlapping

#### Inherited from

[`InputText`](InputText.md).[`overlapGroup`](InputText.md#overlapgroup)

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container`](Container.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L47)

Gets or sets the control parent

#### Inherited from

[`InputText`](InputText.md).[`parent`](InputText.md#parent)

***

### promptMessage

> **promptMessage**: `string` = `"Please enter text:"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L59)

Gets or sets a string representing the message displayed on mobile when the control gets the focus

#### Inherited from

[`InputText`](InputText.md).[`promptMessage`](InputText.md#promptmessage)

***

### tabIndex

> **tabIndex**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1334)

The tab index of this control. -1 indicates this control is not part of the tab navigation.
A positive value indicates the order of the control in the tab navigation.
A value of 0 indicated the control will be focused after all controls with a positive index.
More than one control can have the same tab index and the navigation would then go through all controls with the same value in an order defined by the layout or the hierarchy.
The value can be changed at any time.

#### See

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex

#### Inherited from

[`InputText`](InputText.md).[`tabIndex`](InputText.md#tabindex)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L148)

Gets or sets the unique id of the node. Please note that this number will be updated when the control is added to a container

#### Inherited from

[`InputText`](InputText.md).[`uniqueId`](InputText.md#uniqueid)

***

### useBitmapCache

> **useBitmapCache**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L223)

Gets or sets a boolean indicating that the current control should cache its rendering (useful when the control does not change often)

#### Inherited from

[`InputText`](InputText.md).[`useBitmapCache`](InputText.md#usebitmapcache)

***

### AddHeader

> `static` **AddHeader**: (`control`, `text`, `size`, `options`) => `any`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2865](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2865)

#### Parameters

##### control

[`Control`](Control.md)

##### text

`string`

##### size

`string` \| `number`

##### options

###### controlFirst

`boolean`

###### isHorizontal

`boolean`

#### Returns

`any`

#### Inherited from

[`InputText`](InputText.md).[`AddHeader`](InputText.md#addheader)

***

### AllowAlphaInheritance

> `static` **AllowAlphaInheritance**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L39)

Gets or sets a boolean indicating if alpha must be an inherited value (false by default)

#### Inherited from

[`InputText`](InputText.md).[`AllowAlphaInheritance`](InputText.md#allowalphainheritance)

## Accessors

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L327)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L322)

Gets or sets the accessibility tag to describe the control for accessibility purpose.
By default, GUI controls already indicate accessibility info, but one can override the info using this tag.

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`accessibilityTag`](InputText.md#accessibilitytag)

***

### addKey

#### Get Signature

> **get** **addKey**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L329)

Gets or sets if the current key should be added

##### Returns

`boolean`

#### Set Signature

> **set** **addKey**(`flag`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L333)

##### Parameters

###### flag

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`addKey`](InputText.md#addkey)

***

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L421)

Gets or sets alpha value for the control (1 means opaque and 0 means entirely transparent)

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L425)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`alpha`](InputText.md#alpha)

***

### autoStretchWidth

#### Get Signature

> **get** **autoStretchWidth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L209)

Gets or sets a boolean indicating if the control can auto stretch its width to adapt to the text

##### Returns

`boolean`

#### Set Signature

> **set** **autoStretchWidth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L213)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`autoStretchWidth`](InputText.md#autostretchwidth)

***

### background

#### Get Signature

> **get** **background**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L264)

Gets or sets the background color

##### Returns

`string`

#### Set Signature

> **set** **background**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L268)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`background`](InputText.md#background)

***

### centerX

#### Get Signature

> **get** **centerX**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1223)

Gets the center coordinate on X axis

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`centerX`](InputText.md#centerx)

***

### centerY

#### Get Signature

> **get** **centerY**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1228)

Gets the center coordinate on Y axis

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`centerY`](InputText.md#centery)

***

### clipChildren

#### Get Signature

> **get** **clipChildren**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L201)

##### Returns

`boolean`

#### Set Signature

> **set** **clipChildren**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L196)

Sets/Gets a boolean indicating if the children are clipped to the current control bounds.
Please note that not clipping children may generate issues with adt.useInvalidateRectOptimization so it is recommended to turn this optimization off if you want to use unclipped children

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`clipChildren`](InputText.md#clipchildren)

***

### clipContent

#### Get Signature

> **get** **clipContent**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L215)

##### Returns

`boolean`

#### Set Signature

> **set** **clipContent**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L210)

Sets/Gets a boolean indicating that control content must be clipped
Please note that not clipping content may generate issues with adt.useInvalidateRectOptimization so it is recommended to turn this optimization off if you want to use unclipped children

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`clipContent`](InputText.md#clipcontent)

***

### color

#### Get Signature

> **get** **color**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:838](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L838)

Gets or sets foreground color

##### Returns

`string`

#### Set Signature

> **set** **color**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:842](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L842)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`color`](InputText.md#color)

***

### currentKey

#### Get Signature

> **get** **currentKey**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L338)

Gets or sets the value of the current key being entered

##### Returns

`string`

#### Set Signature

> **set** **currentKey**(`key`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L342)

##### Parameters

###### key

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`currentKey`](InputText.md#currentkey)

***

### deadKey

#### Get Signature

> **get** **deadKey**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L308)

Gets or sets the dead key. 0 to disable.

##### Returns

`boolean`

#### Set Signature

> **set** **deadKey**(`flag`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L312)

##### Parameters

###### flag

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`deadKey`](InputText.md#deadkey)

***

### descendantsOnlyPadding

#### Get Signature

> **get** **descendantsOnlyPadding**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:933](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L933)

Gets or sets a value indicating the padding should work like in CSS.
Basically, it will add the padding amount on each side of the parent control for its children.

##### Returns

`boolean`

#### Set Signature

> **set** **descendantsOnlyPadding**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:937](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L937)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`descendantsOnlyPadding`](InputText.md#descendantsonlypadding)

***

### disabledColor

#### Get Signature

> **get** **disabledColor**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1267)

Gets or sets background color of control if it's disabled. Only applies to Button class.

##### Returns

`string`

#### Set Signature

> **set** **disabledColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1271)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`disabledColor`](InputText.md#disabledcolor)

***

### disabledColorItem

#### Get Signature

> **get** **disabledColorItem**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1281)

Gets or sets front color of control if it's disabled. Only applies to Checkbox class.

##### Returns

`string`

#### Set Signature

> **set** **disabledColorItem**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1285)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`disabledColorItem`](InputText.md#disabledcoloritem)

***

### fixedRatio

#### Get Signature

> **get** **fixedRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L631)

Gets or sets a fixed ratio for this control.
When different from 0, the ratio is used to compute the "second" dimension.
The first dimension used in the computation is the last one set (by setting width / widthInPixels or height / heightInPixels), and the
second dimension is computed as first dimension * fixedRatio

##### Returns

`number`

#### Set Signature

> **set** **fixedRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:615](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L615)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`fixedRatio`](InputText.md#fixedratio)

***

### fixedRatioMasterIsWidth

#### Get Signature

> **get** **fixedRatioMasterIsWidth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:649](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L649)

Gets or sets a boolean indicating that the fixed ratio is set on the width instead of the height. True by default.
When the height of a control is set, this property is changed to false.

##### Returns

`boolean`

#### Set Signature

> **set** **fixedRatioMasterIsWidth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L636)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`fixedRatioMasterIsWidth`](InputText.md#fixedratiomasteriswidth)

***

### focusedBackground

#### Get Signature

> **get** **focusedBackground**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L239)

Gets or sets the background color when focused

##### Returns

`string`

#### Set Signature

> **set** **focusedBackground**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L243)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`focusedBackground`](InputText.md#focusedbackground)

***

### focusedColor

#### Set Signature

> **set** **focusedColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L253)

Gets or sets the background color when focused

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`focusedColor`](InputText.md#focusedcolor)

***

### fontFamily

#### Get Signature

> **get** **fontFamily**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:728](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L728)

Gets or set font family

##### Returns

`string`

#### Set Signature

> **set** **fontFamily**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:732](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L732)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`fontFamily`](InputText.md#fontfamily)

***

### fontOffset

#### Get Signature

> **get** **fontOffset**(): `object`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:411](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L411)

Gets or set information about font offsets (used to render and align text)

##### Returns

`object`

###### ascent

> **ascent**: `number`

###### descent

> **descent**: `number`

###### height

> **height**: `number`

#### Set Signature

> **set** **fontOffset**(`offset`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L415)

##### Parameters

###### offset

###### ascent

`number`

###### descent

`number`

###### height

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`fontOffset`](InputText.md#fontoffset)

***

### fontSize

#### Get Signature

> **get** **fontSize**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:821](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L821)

Gets or sets font size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **fontSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:825](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L825)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`fontSize`](InputText.md#fontsize)

***

### fontSizeInPixels

#### Get Signature

> **get** **fontSizeInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:803](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L803)

Gets or sets font size in pixels

##### Returns

`number`

#### Set Signature

> **set** **fontSizeInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:813](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L813)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`fontSizeInPixels`](InputText.md#fontsizeinpixels)

***

### fontStyle

#### Get Signature

> **get** **fontStyle**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:742](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L742)

Gets or sets font style

##### Returns

`string`

#### Set Signature

> **set** **fontStyle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:746](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L746)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`fontStyle`](InputText.md#fontstyle)

***

### fontWeight

#### Get Signature

> **get** **fontWeight**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:756](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L756)

Gets or sets font weight

##### Returns

`string`

#### Set Signature

> **set** **fontWeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:760](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L760)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`fontWeight`](InputText.md#fontweight)

***

### gradient

#### Get Signature

> **get** **gradient**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseGradient`](BaseGradient.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:853](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L853)

Gets or sets gradient. Setting a gradient will override the color

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseGradient`](BaseGradient.md)\>

#### Set Signature

> **set** **gradient**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:857](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L857)

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseGradient`](BaseGradient.md)\>

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`gradient`](InputText.md#gradient)

***

### height

#### Get Signature

> **get** **height**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:695](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L695)

Gets or sets control height

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **height**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:699](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L699)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`height`](InputText.md#height)

***

### heightInPixels

#### Get Signature

> **get** **heightInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:715](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L715)

Gets or sets control height in pixel

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`number`

#### Set Signature

> **set** **heightInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:719](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L719)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`heightInPixels`](InputText.md#heightinpixels)

***

### highligherOpacity

#### Get Signature

> **get** **highligherOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L133)

Gets or sets the text highlighter transparency; default: 0.4

##### Deprecated

Please use highlighterOpacity instead

##### Returns

`number`

#### Set Signature

> **set** **highligherOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L137)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`highligherOpacity`](InputText.md#highligheropacity)

***

### highlightColor

#### Get Signature

> **get** **highlightColor**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:475](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L475)

Gets or sets a string defining the color to use for highlighting this control

##### Returns

`string`

#### Set Signature

> **set** **highlightColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L479)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`highlightColor`](InputText.md#highlightcolor)

***

### highlightedText

#### Get Signature

> **get** **highlightedText**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L317)

Gets or sets the highlight text

##### Returns

`string`

#### Set Signature

> **set** **highlightedText**(`text`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L320)

##### Parameters

###### text

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`highlightedText`](InputText.md#highlightedtext)

***

### highlighterOpacity

#### Get Signature

> **get** **highlighterOpacity**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L145)

Gets or sets the text highlighter transparency; default: 0.4

##### Returns

`number`

#### Set Signature

> **set** **highlighterOpacity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L149)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`highlighterOpacity`](InputText.md#highlighteropacity)

***

### highlightLineWidth

#### Get Signature

> **get** **highlightLineWidth**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L437)

Gets or sets a number indicating size of stroke we want to highlight the control with (mostly for debugging purpose)

##### Returns

`number`

#### Set Signature

> **set** **highlightLineWidth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L441)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`highlightLineWidth`](InputText.md#highlightlinewidth)

***

### horizontalAlignment

#### Get Signature

> **get** **horizontalAlignment**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:583](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L583)

Gets or sets the horizontal alignment

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#alignments

##### Returns

`number`

#### Set Signature

> **set** **horizontalAlignment**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:587](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L587)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`horizontalAlignment`](InputText.md#horizontalalignment)

***

### host

#### Get Signature

> **get** **host**(): [`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L405)

Get the hosting AdvancedDynamicTexture

##### Returns

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

#### Inherited from

[`InputText`](InputText.md).[`host`](InputText.md#host)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:917](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L917)

Gets a boolean indicating that the control needs to update its rendering

##### Returns

`boolean`

#### Inherited from

[`InputText`](InputText.md).[`isDirty`](InputText.md#isdirty)

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1234)

Gets or sets if control is Enabled

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1238)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`isEnabled`](InputText.md#isenabled)

***

### isHighlighted

#### Get Signature

> **get** **isHighlighted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:453](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L453)

Gets or sets a boolean indicating that we want to highlight the control (mostly for debugging purpose)

##### Returns

`boolean`

#### Set Signature

> **set** **isHighlighted**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:457](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L457)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`isHighlighted`](InputText.md#ishighlighted)

***

### isReadOnly

#### Get Signature

> **get** **isReadOnly**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L154)

Gets or sets a boolean indicating if the control is readonly (default: false).
A readonly control will still raise pointer events but will not react to them

##### Returns

`boolean`

#### Set Signature

> **set** **isReadOnly**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L158)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`isReadOnly`](InputText.md#isreadonly)

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:901](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L901)

Gets or sets a boolean indicating if the control is visible

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:905](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L905)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`isVisible`](InputText.md#isvisible)

***

### left

#### Get Signature

> **get** **left**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1107)

Gets or sets a value indicating the left coordinate of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **left**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1111)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`left`](InputText.md#left)

***

### leftInPixels

#### Get Signature

> **get** **leftInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1121)

Gets or sets a value indicating the left coordinate in pixels of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`number`

#### Set Signature

> **set** **leftInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1125)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`leftInPixels`](InputText.md#leftinpixels)

***

### linkedMesh

#### Get Signature

> **get** **linkedMesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:924](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L924)

Gets the current linked mesh (or null if none)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

[`InputText`](InputText.md).[`linkedMesh`](InputText.md#linkedmesh)

***

### linkOffsetX

#### Get Signature

> **get** **linkOffsetX**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1167)

Gets or sets a value indicating the offset on X axis to the linked mesh

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#tracking-positions

##### Returns

`string` \| `number`

#### Set Signature

> **set** **linkOffsetX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1171)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`linkOffsetX`](InputText.md#linkoffsetx)

***

### linkOffsetXInPixels

#### Get Signature

> **get** **linkOffsetXInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1181)

Gets or sets a value indicating the offset in pixels on X axis to the linked mesh

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#tracking-positions

##### Returns

`number`

#### Set Signature

> **set** **linkOffsetXInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1185)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`linkOffsetXInPixels`](InputText.md#linkoffsetxinpixels)

***

### linkOffsetY

#### Get Signature

> **get** **linkOffsetY**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1197)

Gets or sets a value indicating the offset on Y axis to the linked mesh

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#tracking-positions

##### Returns

`string` \| `number`

#### Set Signature

> **set** **linkOffsetY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1201)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`linkOffsetY`](InputText.md#linkoffsety)

***

### linkOffsetYInPixels

#### Get Signature

> **get** **linkOffsetYInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1211)

Gets or sets a value indicating the offset in pixels on Y axis to the linked mesh

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#tracking-positions

##### Returns

`number`

#### Set Signature

> **set** **linkOffsetYInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1215)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`linkOffsetYInPixels`](InputText.md#linkoffsetyinpixels)

***

### margin

#### Get Signature

> **get** **margin**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L188)

Gets or sets control margin

##### Returns

`string`

#### Set Signature

> **set** **margin**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L197)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`margin`](InputText.md#margin)

***

### marginInPixels

#### Get Signature

> **get** **marginInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L193)

Gets control margin in pixels

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`marginInPixels`](InputText.md#margininpixels)

***

### maxWidth

#### Get Signature

> **get** **maxWidth**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L109)

Gets or sets the maximum width allowed by the control

##### Returns

`string` \| `number`

#### Set Signature

> **set** **maxWidth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L118)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`maxWidth`](InputText.md#maxwidth)

***

### maxWidthInPixels

#### Get Signature

> **get** **maxWidthInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L114)

Gets the maximum width allowed by the control in pixels

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`maxWidthInPixels`](InputText.md#maxwidthinpixels)

***

### notRenderable

#### Get Signature

> **get** **notRenderable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:886](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L886)

Gets or sets a boolean indicating if the control can be rendered

##### Returns

`boolean`

#### Set Signature

> **set** **notRenderable**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:890](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L890)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`notRenderable`](InputText.md#notrenderable)

***

### onFocusSelectAll

#### Get Signature

> **get** **onFocusSelectAll**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L159)

Gets or sets a boolean indicating whether to select complete text by default on input focus

##### Returns

`boolean`

#### Set Signature

> **set** **onFocusSelectAll**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L163)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`onFocusSelectAll`](InputText.md#onfocusselectall)

***

### outlineColor

#### Get Signature

> **get** **outlineColor**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L82)

Gets or sets outlineColor of the text to display

##### Returns

`string`

#### Set Signature

> **set** **outlineColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L86)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`outlineColor`](InputText.md#outlinecolor)

***

### outlineWidth

#### Get Signature

> **get** **outlineWidth**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L67)

Gets or sets outlineWidth of the text to display

##### Returns

`number`

#### Set Signature

> **set** **outlineWidth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L71)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`outlineWidth`](InputText.md#outlinewidth)

***

### paddingBottom

#### Get Signature

> **get** **paddingBottom**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1068](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1068)

Gets or sets a value indicating the padding to use on the bottom of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **paddingBottom**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1072](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1072)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`paddingBottom`](InputText.md#paddingbottom)

***

### paddingBottomInPixels

#### Get Signature

> **get** **paddingBottomInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1082](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1082)

Gets or sets a value indicating the padding in pixels to use on the bottom of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`number`

#### Set Signature

> **set** **paddingBottomInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1086](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1086)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`paddingBottomInPixels`](InputText.md#paddingbottominpixels)

***

### paddingLeft

#### Get Signature

> **get** **paddingLeft**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:951](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L951)

Gets or sets a value indicating the padding to use on the left of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **paddingLeft**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:955](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L955)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`paddingLeft`](InputText.md#paddingleft)

***

### paddingLeftInPixels

#### Get Signature

> **get** **paddingLeftInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:965](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L965)

Gets or sets a value indicating the padding in pixels to use on the left of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`number`

#### Set Signature

> **set** **paddingLeftInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:969](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L969)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`paddingLeftInPixels`](InputText.md#paddingleftinpixels)

***

### paddingRight

#### Get Signature

> **get** **paddingRight**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:990](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L990)

Gets or sets a value indicating the padding to use on the right of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **paddingRight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:994](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L994)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`paddingRight`](InputText.md#paddingright)

***

### paddingRightInPixels

#### Get Signature

> **get** **paddingRightInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1004](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1004)

Gets or sets a value indicating the padding in pixels to use on the right of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`number`

#### Set Signature

> **set** **paddingRightInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1008](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1008)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`paddingRightInPixels`](InputText.md#paddingrightinpixels)

***

### paddingTop

#### Get Signature

> **get** **paddingTop**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1029](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1029)

Gets or sets a value indicating the padding to use on the top of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **paddingTop**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1033)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`paddingTop`](InputText.md#paddingtop)

***

### paddingTopInPixels

#### Get Signature

> **get** **paddingTopInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1043)

Gets or sets a value indicating the padding in pixels to use on the top of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`number`

#### Set Signature

> **set** **paddingTopInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1047)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`paddingTopInPixels`](InputText.md#paddingtopinpixels)

***

### placeholderColor

#### Get Signature

> **get** **placeholderColor**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L279)

Gets or sets the placeholder color

##### Returns

`string`

#### Set Signature

> **set** **placeholderColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L283)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`placeholderColor`](InputText.md#placeholdercolor)

***

### placeholderText

#### Get Signature

> **get** **placeholderText**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L294)

Gets or sets the text displayed when the control is empty

##### Returns

`string`

#### Set Signature

> **set** **placeholderText**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L298)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`placeholderText`](InputText.md#placeholdertext)

***

### rotation

#### Get Signature

> **get** **rotation**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:528](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L528)

Gets or sets the rotation angle (0 by default)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#rotation-and-scaling

##### Returns

`number`

#### Set Signature

> **set** **rotation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:532](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L532)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`rotation`](InputText.md#rotation)

***

### scaleX

#### Get Signature

> **get** **scaleX**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:492](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L492)

Gets or sets a value indicating the scale factor on X axis (1 by default)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#rotation-and-scaling

##### Returns

`number`

#### Set Signature

> **set** **scaleX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L496)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`scaleX`](InputText.md#scalex)

***

### scaleY

#### Get Signature

> **get** **scaleY**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:510](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L510)

Gets or sets a value indicating the scale factor on Y axis (1 by default)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#rotation-and-scaling

##### Returns

`number`

#### Set Signature

> **set** **scaleY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:514](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L514)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`scaleY`](InputText.md#scaley)

***

### shadowBlur

#### Get Signature

> **get** **shadowBlur**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L263)

Gets or sets a value indicating the amount of blur to use to render the shadow

##### Returns

`number`

#### Set Signature

> **set** **shadowBlur**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L267)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`shadowBlur`](InputText.md#shadowblur)

***

### shadowColor

#### Get Signature

> **get** **shadowColor**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L281)

Gets or sets a value indicating the color of the shadow (black by default ie. "#000")

##### Returns

`string`

#### Set Signature

> **set** **shadowColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L285)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`shadowColor`](InputText.md#shadowcolor)

***

### shadowOffsetX

#### Get Signature

> **get** **shadowOffsetX**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L230)

Gets or sets a value indicating the offset in pixels to apply on X axis to render the shadow

##### Returns

`number`

#### Set Signature

> **set** **shadowOffsetX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L234)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`shadowOffsetX`](InputText.md#shadowoffsetx)

***

### shadowOffsetY

#### Get Signature

> **get** **shadowOffsetY**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L246)

Gets or sets a value indicating the offset in pixels to apply on Y axis to render the shadow

##### Returns

`number`

#### Set Signature

> **set** **shadowOffsetY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L250)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`shadowOffsetY`](InputText.md#shadowoffsety)

***

### style

#### Get Signature

> **get** **style**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Style`](Style.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:774](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L774)

Gets or sets style

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#styles

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Style`](Style.md)\>

#### Set Signature

> **set** **style**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:778](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L778)

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Style`](Style.md)\>

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`style`](InputText.md#style)

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L348)

Gets or sets the text displayed in the control

##### Returns

`string`

#### Set Signature

> **set** **text**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:352](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L352)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`text`](InputText.md#text)

***

### textHighlightColor

#### Get Signature

> **get** **textHighlightColor**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L174)

Gets or sets the text hightlight color

##### Returns

`string`

#### Set Signature

> **set** **textHighlightColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L178)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`textHighlightColor`](InputText.md#texthighlightcolor)

***

### thickness

#### Get Signature

> **get** **thickness**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L224)

Gets or sets border thickness

##### Returns

`number`

#### Set Signature

> **set** **thickness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L228)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`thickness`](InputText.md#thickness)

***

### top

#### Get Signature

> **get** **top**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1137)

Gets or sets a value indicating the top coordinate of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **top**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1141)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`top`](InputText.md#top)

***

### topInPixels

#### Get Signature

> **get** **topInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1151)

Gets or sets a value indicating the top coordinate in pixels of the control

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`number`

#### Set Signature

> **set** **topInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1155)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`topInPixels`](InputText.md#topinpixels)

***

### transformCenterX

#### Get Signature

> **get** **transformCenterX**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:564](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L564)

Gets or sets the transformation center on X axis (0 by default)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#rotation-and-scaling

##### Returns

`number`

#### Set Signature

> **set** **transformCenterX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L568)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`transformCenterX`](InputText.md#transformcenterx)

***

### transformCenterY

#### Get Signature

> **get** **transformCenterY**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L546)

Gets or sets the transformation center on Y axis (0 by default)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#rotation-and-scaling

##### Returns

`number`

#### Set Signature

> **set** **transformCenterY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L550)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`transformCenterY`](InputText.md#transformcentery)

***

### transformedMeasure

#### Get Signature

> **get** **transformedMeasure**(): [`Measure`](Measure.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L165)

Gets the transformed measure, that is the bounding box of the control after applying all transformations

##### Returns

[`Measure`](Measure.md)

#### Inherited from

[`InputText`](InputText.md).[`transformedMeasure`](InputText.md#transformedmeasure)

***

### typeName

#### Get Signature

> **get** **typeName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L306)

Gets the control type name

##### Returns

`string`

#### Inherited from

[`InputText`](InputText.md).[`typeName`](InputText.md#typename)

***

### verticalAlignment

#### Get Signature

> **get** **verticalAlignment**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L601)

Gets or sets the vertical alignment

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#alignments

##### Returns

`number`

#### Set Signature

> **set** **verticalAlignment**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:605](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L605)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`verticalAlignment`](InputText.md#verticalalignment)

***

### width

#### Get Signature

> **get** **width**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L381)

Gets or sets control width

##### Returns

`string` \| `number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L385)

Gets or sets control width

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`width`](InputText.md#width)

***

### widthInPixels

#### Get Signature

> **get** **widthInPixels**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:678](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L678)

Gets or sets the control width in pixel

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`number`

#### Set Signature

> **set** **widthInPixels**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:682](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L682)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`widthInPixels`](InputText.md#widthinpixels)

***

### zIndex

#### Get Signature

> **get** **zIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:868](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L868)

Gets or sets z index which is used to reorder controls on the z axis

##### Returns

`number`

#### Set Signature

> **set** **zIndex**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:872](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L872)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`zIndex`](InputText.md#zindex)

***

### HORIZONTAL\_ALIGNMENT\_CENTER

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_CENTER**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2799](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2799)

HORIZONTAL_ALIGNMENT_CENTER

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`HORIZONTAL_ALIGNMENT_CENTER`](InputText.md#horizontal_alignment_center)

***

### HORIZONTAL\_ALIGNMENT\_LEFT

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_LEFT**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2789](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2789)

HORIZONTAL_ALIGNMENT_LEFT

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`HORIZONTAL_ALIGNMENT_LEFT`](InputText.md#horizontal_alignment_left)

***

### HORIZONTAL\_ALIGNMENT\_RIGHT

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_RIGHT**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2794](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2794)

HORIZONTAL_ALIGNMENT_RIGHT

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`HORIZONTAL_ALIGNMENT_RIGHT`](InputText.md#horizontal_alignment_right)

***

### VERTICAL\_ALIGNMENT\_BOTTOM

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_BOTTOM**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2809](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2809)

VERTICAL_ALIGNMENT_BOTTOM

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`VERTICAL_ALIGNMENT_BOTTOM`](InputText.md#vertical_alignment_bottom)

***

### VERTICAL\_ALIGNMENT\_CENTER

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_CENTER**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2814](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2814)

VERTICAL_ALIGNMENT_CENTER

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`VERTICAL_ALIGNMENT_CENTER`](InputText.md#vertical_alignment_center)

***

### VERTICAL\_ALIGNMENT\_TOP

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_TOP**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2804)

VERTICAL_ALIGNMENT_TOP

##### Returns

`number`

#### Inherited from

[`InputText`](InputText.md).[`VERTICAL_ALIGNMENT_TOP`](InputText.md#vertical_alignment_top)

## Methods

### \_onPointerPick()

> **\_onPointerPick**(`target`, `coordinates`, `pointerId`, `buttonIndex`, `notifyClick`, `pi`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2429)

#### Parameters

##### target

[`Control`](Control.md)

##### coordinates

[`Vector2`](../../../core/src/classes/Vector2.md)

##### pointerId

`number`

##### buttonIndex

`number`

##### notifyClick

`boolean`

##### pi

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`PointerInfoBase`](../../../core/src/classes/PointerInfoBase.md)\>

#### Returns

`boolean`

#### Inherited from

[`InputText`](InputText.md).[`_onPointerPick`](InputText.md#_onpointerpick)

***

### blur()

> **blur**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1387)

Function to unfocus a button programmatically

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`blur`](InputText.md#blur)

***

### clone()

> **clone**(`host?`): [`Control`](Control.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2602)

Clones a control and its descendants

#### Parameters

##### host?

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

the texture where the control will be instantiated. Can be empty, in which case the control will be created on the same texture

#### Returns

[`Control`](Control.md)

the cloned control

#### Inherited from

[`InputText`](InputText.md).[`clone`](InputText.md#clone)

***

### contains()

> **contains**(`x`, `y`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2257)

Tests if a given coordinates belong to the current control

#### Parameters

##### x

`number`

defines x coordinate to test

##### y

`number`

defines y coordinate to test

#### Returns

`boolean`

true if the coordinates are inside the control

#### Inherited from

[`InputText`](InputText.md).[`contains`](InputText.md#contains)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:1140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L1140)

Releases associated resources

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`dispose`](InputText.md#dispose)

***

### focus()

> **focus**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1380)

Function to focus a button programmatically

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`focus`](InputText.md#focus)

***

### getAscendantOfClass()

> **getAscendantOfClass**(`className`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1424)

Gets the first ascendant in the hierarchy of the given type

#### Parameters

##### className

`string`

defines the required type

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

the ascendant or null if not found

#### Inherited from

[`InputText`](InputText.md).[`getAscendantOfClass`](InputText.md#getascendantofclass)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L314)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

[`InputText`](InputText.md).[`getClassName`](InputText.md#getclassname)

***

### getDescendants()

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Control`](Control.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1555](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1555)

Will return all controls that have this control as ascendant

#### Parameters

##### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

##### predicate?

(`control`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Returns

[`Control`](Control.md)[]

all child controls

#### Inherited from

[`InputText`](InputText.md).[`getDescendants`](InputText.md#getdescendants)

***

### getDescendantsToRef()

> **getDescendantsToRef**(`results`, `directDescendantsOnly?`, `predicate?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1545](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1545)

Will store all controls that have this control as ascendant in a given array

#### Parameters

##### results

[`Control`](Control.md)[]

defines the array where to store the descendants

##### directDescendantsOnly?

`boolean` = `false`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

##### predicate?

(`control`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`getDescendantsToRef`](InputText.md#getdescendantstoref)

***

### getDimension()

> **getDimension**(`dim`): [`ValueAndUnit`](ValueAndUnit.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2589](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2589)

Gets the dimension of the control along a specified axis

#### Parameters

##### dim

`"width"` \| `"height"`

the dimension to retrieve (width or height)

#### Returns

[`ValueAndUnit`](ValueAndUnit.md)

the dimension value along the specified axis

#### Inherited from

[`InputText`](InputText.md).[`getDimension`](InputText.md#getdimension)

***

### getLocalCoordinates()

> **getLocalCoordinates**(`globalCoordinates`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1479)

Gets coordinates in local control space

#### Parameters

##### globalCoordinates

[`Vector2`](../../../core/src/classes/Vector2.md)

defines the coordinates to transform

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

the new coordinates in local space

#### Inherited from

[`InputText`](InputText.md).[`getLocalCoordinates`](InputText.md#getlocalcoordinates)

***

### getLocalCoordinatesToRef()

> **getLocalCoordinatesToRef**(`globalCoordinates`, `result`): [`Control`](Control.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1493](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1493)

Gets coordinates in local control space

#### Parameters

##### globalCoordinates

[`Vector2`](../../../core/src/classes/Vector2.md)

defines the coordinates to transform

##### result

[`Vector2`](../../../core/src/classes/Vector2.md)

defines the target vector2 where to store the result

#### Returns

[`Control`](Control.md)

the current control

#### Inherited from

[`InputText`](InputText.md).[`getLocalCoordinatesToRef`](InputText.md#getlocalcoordinatestoref)

***

### getParentLocalCoordinates()

> **getParentLocalCoordinates**(`globalCoordinates`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1504](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1504)

Gets coordinates in parent local control space

#### Parameters

##### globalCoordinates

[`Vector2`](../../../core/src/classes/Vector2.md)

defines the coordinates to transform

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

the new coordinates in parent local space

#### Inherited from

[`InputText`](InputText.md).[`getParentLocalCoordinates`](InputText.md#getparentlocalcoordinates)

***

### isAscendant()

> **isAscendant**(`container`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1462](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1462)

Determines if a container is an ascendant of the current control

#### Parameters

##### container

[`Control`](Control.md)

defines the container to look for

#### Returns

`boolean`

true if the container is one of the ascendant of the control

#### Inherited from

[`InputText`](InputText.md).[`isAscendant`](InputText.md#isascendant)

***

### isDimensionFullyDefined()

> **isDimensionFullyDefined**(`dim`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2580](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2580)

A control has a dimension fully defined if that dimension doesn't depend on the parent's dimension.
As an example, a control that has dimensions in pixels is fully defined, while in percentage is not fully defined.

#### Parameters

##### dim

`"width"` \| `"height"`

the dimension to check (width or height)

#### Returns

`boolean`

if the dimension is fully defined

#### Inherited from

[`InputText`](InputText.md).[`isDimensionFullyDefined`](InputText.md#isdimensionfullydefined)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2889](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2889)

Returns true if the control is ready to be used

#### Returns

`boolean`

#### Inherited from

[`InputText`](InputText.md).[`isReady`](InputText.md#isready)

***

### keepsFocusWith()

> **keepsFocusWith**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)[]\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:504](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L504)

Function called to get the list of controls that should not steal the focus from this control

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)[]\>

an array of controls

#### Inherited from

[`InputText`](InputText.md).[`keepsFocusWith`](InputText.md#keepsfocuswith)

***

### linkWithMesh()

> **linkWithMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1568)

Link current control with a target mesh

#### Parameters

##### mesh

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

defines the mesh to link with

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#tracking-positions

#### Inherited from

[`InputText`](InputText.md).[`linkWithMesh`](InputText.md#linkwithmesh)

***

### markAllAsDirty()

> **markAllAsDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1447)

Mark the element and its children as dirty

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`markAllAsDirty`](InputText.md#markallasdirty)

***

### markAsDirty()

> **markAsDirty**(`force?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1440](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1440)

Mark control element as dirty

#### Parameters

##### force?

`boolean` = `false`

force non visible elements to be marked too

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`markAsDirty`](InputText.md#markasdirty)

***

### moveToVector3()

> **moveToVector3**(`position`, `scene`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1518](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1518)

Move the current control to a vector3 position projected onto the screen.

#### Parameters

##### position

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the target position

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`moveToVector3`](InputText.md#movetovector3)

***

### parse()

> **parse**(`serializedObject`, `host?`, `urlRewriter?`): [`Control`](Control.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2619](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2619)

Parses a serialized object into this control

#### Parameters

##### serializedObject

`any`

the object with the serialized properties

##### host?

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

the texture where the control will be instantiated. Can be empty, in which case the control will be created on the same texture

##### urlRewriter?

(`url`) => `string`

defines an url rewriter to update urls before sending them to the controls

#### Returns

[`Control`](Control.md)

this control

#### Inherited from

[`InputText`](InputText.md).[`parse`](InputText.md#parse)

***

### processKeyboard()

> **processKeyboard**(`evt`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:838](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L838)

Handles the keyboard event

#### Parameters

##### evt

[`IKeyboardEvent`](../../../core/src/interfaces/IKeyboardEvent.md)

Defines the KeyboardEvent

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`processKeyboard`](InputText.md#processkeyboard)

***

### selectAllText()

> **selectAllText**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/inputText.ts:823](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/inputText.ts#L823)

Allow the user to select all text

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`selectAllText`](InputText.md#selectalltext)

***

### serialize()

> **serialize**(`serializationObject`, `force?`, `allowCanvas?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2636)

Serializes the current control

#### Parameters

##### serializationObject

`any`

defined the JSON serialized object

##### force?

`boolean` = `false`

if the control should be serialized even if the isSerializable flag is set to false (default false)

##### allowCanvas?

`boolean` = `true`

defines if the control is allowed to use a Canvas2D object to serialize (true by default)

#### Returns

`void`

#### Inherited from

[`InputText`](InputText.md).[`serialize`](InputText.md#serialize)

***

### setPadding()

> **setPadding**(`paddingTop`, `paddingRight?`, `paddingBottom?`, `paddingLeft?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1601)

Shorthand function to set the top, right, bottom, and left padding values on the control.

#### Parameters

##### paddingTop

`string` \| `number`

The value of the top padding.

##### paddingRight?

`string` \| `number`

The value of the right padding. If omitted, top is used.

##### paddingBottom?

`string` \| `number`

The value of the bottom padding. If omitted, top is used.

##### paddingLeft?

`string` \| `number`

The value of the left padding. If omitted, right is used.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

#### Inherited from

[`InputText`](InputText.md).[`setPadding`](InputText.md#setpadding)

***

### setPaddingInPixels()

> **setPaddingInPixels**(`paddingTop`, `paddingRight?`, `paddingBottom?`, `paddingLeft?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1621](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1621)

Shorthand funtion to set the top, right, bottom, and left padding values in pixels on the control.

#### Parameters

##### paddingTop

`number`

The value in pixels of the top padding.

##### paddingRight?

`number`

The value in pixels of the right padding. If omitted, top is used.

##### paddingBottom?

`number`

The value in pixels of the bottom padding. If omitted, top is used.

##### paddingLeft?

`number`

The value in pixels of the left padding. If omitted, right is used.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

#### Inherited from

[`InputText`](InputText.md).[`setPaddingInPixels`](InputText.md#setpaddinginpixels)

***

### Parse()

> `static` **Parse**(`serializedObject`, `host`, `urlRewriter?`): [`Control`](Control.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2846)

Creates a Control from parsed data

#### Parameters

##### serializedObject

`any`

defines parsed data

##### host

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

defines the hosting AdvancedDynamicTexture

##### urlRewriter?

(`url`) => `string`

defines an url rewriter to update urls before sending them to the controls

#### Returns

[`Control`](Control.md)

a new Control

#### Inherited from

[`InputText`](InputText.md).[`Parse`](InputText.md#parse-1)
