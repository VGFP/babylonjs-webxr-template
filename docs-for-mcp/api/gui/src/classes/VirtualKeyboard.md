[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / VirtualKeyboard

# Class: VirtualKeyboard

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L45)

Class used to create virtual keyboard

## Extends

- [`StackPanel`](StackPanel.md)

## Constructors

### Constructor

> **new VirtualKeyboard**(`name?`): `VirtualKeyboard`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L108)

Creates a new StackPanel

#### Parameters

##### name?

`string`

defines control name

#### Returns

`VirtualKeyboard`

#### Inherited from

[`StackPanel`](StackPanel.md).[`constructor`](StackPanel.md#constructor)

## Properties

### animations

> **animations**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1311)

Array of animations

#### Inherited from

[`StackPanel`](StackPanel.md).[`animations`](StackPanel.md#animations)

***

### defaultButtonBackground

> **defaultButtonBackground**: `string` = `"#070707"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L66)

Gets or sets default key button background color

***

### defaultButtonColor

> **defaultButtonColor**: `string` = `"#DDD"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L64)

Gets or sets default key button foreground color

***

### defaultButtonHeight

> **defaultButtonHeight**: `string` = `"40px"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L52)

Gets or sets default key button height

***

### defaultButtonPaddingBottom

> **defaultButtonPaddingBottom**: `string` = `"2px"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L61)

Gets or sets default key button bottom padding

***

### defaultButtonPaddingLeft

> **defaultButtonPaddingLeft**: `string` = `"2px"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L55)

Gets or sets default key button left padding

***

### defaultButtonPaddingRight

> **defaultButtonPaddingRight**: `string` = `"2px"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L57)

Gets or sets default key button right padding

***

### defaultButtonPaddingTop

> **defaultButtonPaddingTop**: `string` = `"2px"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L59)

Gets or sets default key button top padding

***

### defaultButtonWidth

> **defaultButtonWidth**: `string` = `"40px"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L50)

Gets or sets default key button width

***

### delegatePickingToChildren

> **delegatePickingToChildren**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L45)

Gets or sets a boolean indicating that the container will let internal controls handle picking instead of doing it directly using its bounding info

#### Inherited from

[`StackPanel`](StackPanel.md).[`delegatePickingToChildren`](StackPanel.md#delegatepickingtochildren)

***

### hoverCursor

> **hoverCursor**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L296)

Gets or sets the cursor to use when the control is hovered

#### Inherited from

[`StackPanel`](StackPanel.md).[`hoverCursor`](StackPanel.md#hovercursor)

***

### ignoreLayoutWarnings

> **ignoreLayoutWarnings**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L24)

Gets or sets a boolean indicating that layout warnings should be ignored

#### Inherited from

[`StackPanel`](StackPanel.md).[`ignoreLayoutWarnings`](StackPanel.md#ignorelayoutwarnings)

***

### isFocusInvisible

> **isFocusInvisible**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L189)

Gets or sets a boolean indicating if the control can be focusable

#### Inherited from

[`StackPanel`](StackPanel.md).[`isFocusInvisible`](StackPanel.md#isfocusinvisible)

***

### isHitTestVisible

> **isHitTestVisible**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L177)

Gets or sets a boolean indicating if the control can be hit with pointer events

#### Inherited from

[`StackPanel`](StackPanel.md).[`isHitTestVisible`](StackPanel.md#ishittestvisible)

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

[`StackPanel`](StackPanel.md).[`isPointerBlocker`](StackPanel.md#ispointerblocker)

***

### isSerializable

> **isSerializable**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L470)

Indicates if the control should be serialized. Defaults to true.

#### Inherited from

[`StackPanel`](StackPanel.md).[`isSerializable`](StackPanel.md#isserializable)

***

### logLayoutCycleErrors

> **logLayoutCycleErrors**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L63)

Gets or sets a boolean indicating that layout cycle errors should be displayed on the console

#### Inherited from

[`StackPanel`](StackPanel.md).[`logLayoutCycleErrors`](StackPanel.md#loglayoutcycleerrors)

***

### maxLayoutCycle

> **maxLayoutCycle**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L69)

Gets or sets the number of layout cycles (a change involved by a control while evaluating the layout) allowed

#### Inherited from

[`StackPanel`](StackPanel.md).[`maxLayoutCycle`](StackPanel.md#maxlayoutcycle)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L173)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`StackPanel`](StackPanel.md).[`metadata`](StackPanel.md#metadata)

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L108)

defines control name

#### Inherited from

[`StackPanel`](StackPanel.md).[`name`](StackPanel.md#name)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L336)

Observable that fires whenever the accessibility event of the control has changed

#### Inherited from

[`StackPanel`](StackPanel.md).[`onAccessibilityTagChangedObservable`](StackPanel.md#onaccessibilitytagchangedobservable)

***

### onAfterDrawObservable

> **onAfterDrawObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L390)

An event triggered after the control was drawn

#### Inherited from

[`StackPanel`](StackPanel.md).[`onAfterDrawObservable`](StackPanel.md#onafterdrawobservable)

***

### onBeforeDrawObservable

> **onBeforeDrawObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L385)

An event triggered before drawing the control

#### Inherited from

[`StackPanel`](StackPanel.md).[`onBeforeDrawObservable`](StackPanel.md#onbeforedrawobservable)

***

### onBlurObservable

> **onBlurObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1341)

Observable raised when the control loses the focus

#### Inherited from

[`StackPanel`](StackPanel.md).[`onBlurObservable`](StackPanel.md#onblurobservable)

***

### onControlAddedObservable

> **onControlAddedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L289)

An event triggered when any control is added to this container.

#### Inherited from

[`StackPanel`](StackPanel.md).[`onControlAddedObservable`](StackPanel.md#oncontroladdedobservable)

***

### onControlRemovedObservable

> **onControlRemovedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L294)

An event triggered when any control is removed from this container.

#### Inherited from

[`StackPanel`](StackPanel.md).[`onControlRemovedObservable`](StackPanel.md#oncontrolremovedobservable)

***

### onDirtyObservable

> **onDirtyObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L380)

An event triggered when the control is marked as dirty

#### Inherited from

[`StackPanel`](StackPanel.md).[`onDirtyObservable`](StackPanel.md#ondirtyobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L395)

An event triggered when the control has been disposed

#### Inherited from

[`StackPanel`](StackPanel.md).[`onDisposeObservable`](StackPanel.md#ondisposeobservable)

***

### onEnabledStateChangedObservable

> **onEnabledStateChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L131)

Observable that fires when the control's enabled state changes

#### Inherited from

[`StackPanel`](StackPanel.md).[`onEnabledStateChangedObservable`](StackPanel.md#onenabledstatechangedobservable)

***

### onEnterPressedObservable

> **onEnterPressedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L370)

An event triggered when a control receives an ENTER key down event

#### Inherited from

[`StackPanel`](StackPanel.md).[`onEnterPressedObservable`](StackPanel.md#onenterpressedobservable)

***

### onFocusObservable

> **onFocusObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1339)

Observable raised when the control gets the focus

#### Inherited from

[`StackPanel`](StackPanel.md).[`onFocusObservable`](StackPanel.md#onfocusobservable)

***

### onIsVisibleChangedObservable

> **onIsVisibleChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L400)

An event triggered when the control isVisible is changed

#### Inherited from

[`StackPanel`](StackPanel.md).[`onIsVisibleChangedObservable`](StackPanel.md#onisvisiblechangedobservable)

***

### onKeyboardEventProcessedObservable

> **onKeyboardEventProcessedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IKeyboardEvent`](../../../core/src/interfaces/IKeyboardEvent.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1343)

Observable raised when a key event was processed

#### Inherited from

[`StackPanel`](StackPanel.md).[`onKeyboardEventProcessedObservable`](StackPanel.md#onkeyboardeventprocessedobservable)

***

### onKeyPressObservable

> **onKeyPressObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L47)

Observable raised when a key is pressed

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L365)

An event triggered when a control is clicked on

#### Inherited from

[`StackPanel`](StackPanel.md).[`onPointerClickObservable`](StackPanel.md#onpointerclickobservable)

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L355)

An event triggered when the pointer taps the control

#### Inherited from

[`StackPanel`](StackPanel.md).[`onPointerDownObservable`](StackPanel.md#onpointerdownobservable)

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L375)

An event triggered when pointer enters the control

#### Inherited from

[`StackPanel`](StackPanel.md).[`onPointerEnterObservable`](StackPanel.md#onpointerenterobservable)

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L345)

An event triggered when the pointer moves over the control.

#### Inherited from

[`StackPanel`](StackPanel.md).[`onPointerMoveObservable`](StackPanel.md#onpointermoveobservable)

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L350)

An event triggered when the pointer moves out of the control.

#### Inherited from

[`StackPanel`](StackPanel.md).[`onPointerOutObservable`](StackPanel.md#onpointeroutobservable)

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L360)

An event triggered when pointer up

#### Inherited from

[`StackPanel`](StackPanel.md).[`onPointerUpObservable`](StackPanel.md#onpointerupobservable)

***

### onWheelObservable

> **onWheelObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L341)

An event triggered when pointer wheel is scrolled

#### Inherited from

[`StackPanel`](StackPanel.md).[`onWheelObservable`](StackPanel.md#onwheelobservable)

***

### overlapDeltaMultiplier?

> `optional` **overlapDeltaMultiplier?**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1306)

Gets/sets the deoverlap movement multiplier

#### Inherited from

[`StackPanel`](StackPanel.md).[`overlapDeltaMultiplier`](StackPanel.md#overlapdeltamultiplier)

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

[`StackPanel`](StackPanel.md).[`overlapGroup`](StackPanel.md#overlapgroup)

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container`](Container.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L47)

Gets or sets the control parent

#### Inherited from

[`StackPanel`](StackPanel.md).[`parent`](StackPanel.md#parent)

***

### selectedShiftThickness

> **selectedShiftThickness**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L71)

Gets or sets shift button thickness

***

### shiftButtonColor

> **shiftButtonColor**: `string` = `"#7799FF"`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L69)

Gets or sets shift button foreground color

***

### shiftState

> **shiftState**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L74)

Gets shift key state

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

[`StackPanel`](StackPanel.md).[`tabIndex`](StackPanel.md#tabindex)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L148)

Gets or sets the unique id of the node. Please note that this number will be updated when the control is added to a container

#### Inherited from

[`StackPanel`](StackPanel.md).[`uniqueId`](StackPanel.md#uniqueid)

***

### useBitmapCache

> **useBitmapCache**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L223)

Gets or sets a boolean indicating that the current control should cache its rendering (useful when the control does not change often)

#### Inherited from

[`StackPanel`](StackPanel.md).[`useBitmapCache`](StackPanel.md#usebitmapcache)

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

[`StackPanel`](StackPanel.md).[`AddHeader`](StackPanel.md#addheader)

***

### AllowAlphaInheritance

> `static` **AllowAlphaInheritance**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L39)

Gets or sets a boolean indicating if alpha must be an inherited value (false by default)

#### Inherited from

[`StackPanel`](StackPanel.md).[`AllowAlphaInheritance`](StackPanel.md#allowalphainheritance)

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

[`StackPanel`](StackPanel.md).[`accessibilityTag`](StackPanel.md#accessibilitytag)

***

### adaptHeightToChildren

#### Get Signature

> **get** **adaptHeightToChildren**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L73)

Gets or sets a boolean indicating if the container should try to adapt to its children height

##### Returns

`boolean`

#### Set Signature

> **set** **adaptHeightToChildren**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L77)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`adaptHeightToChildren`](StackPanel.md#adaptheighttochildren)

***

### adaptWidthToChildren

#### Get Signature

> **get** **adaptWidthToChildren**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L94)

Gets or sets a boolean indicating if the container should try to adapt to its children width

##### Returns

`boolean`

#### Set Signature

> **set** **adaptWidthToChildren**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L98)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`adaptWidthToChildren`](StackPanel.md#adaptwidthtochildren)

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

[`StackPanel`](StackPanel.md).[`alpha`](StackPanel.md#alpha)

***

### background

#### Get Signature

> **get** **background**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L115)

Gets or sets background color

##### Returns

`string`

#### Set Signature

> **set** **background**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L119)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`background`](StackPanel.md#background)

***

### backgroundGradient

#### Get Signature

> **get** **backgroundGradient**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseGradient`](BaseGradient.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L130)

Gets or sets background gradient color. Takes precedence over background

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseGradient`](BaseGradient.md)\>

#### Set Signature

> **set** **backgroundGradient**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L134)

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseGradient`](BaseGradient.md)\>

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`backgroundGradient`](StackPanel.md#backgroundgradient)

***

### centerX

#### Get Signature

> **get** **centerX**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1223)

Gets the center coordinate on X axis

##### Returns

`number`

#### Inherited from

[`StackPanel`](StackPanel.md).[`centerX`](StackPanel.md#centerx)

***

### centerY

#### Get Signature

> **get** **centerY**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1228)

Gets the center coordinate on Y axis

##### Returns

`number`

#### Inherited from

[`StackPanel`](StackPanel.md).[`centerY`](StackPanel.md#centery)

***

### children

#### Get Signature

> **get** **children**(): [`Control`](Control.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L143)

Gets the list of children

##### Returns

[`Control`](Control.md)[]

#### Inherited from

[`StackPanel`](StackPanel.md).[`children`](StackPanel.md#children)

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

[`StackPanel`](StackPanel.md).[`clipChildren`](StackPanel.md#clipchildren)

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

[`StackPanel`](StackPanel.md).[`clipContent`](StackPanel.md#clipcontent)

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

[`StackPanel`](StackPanel.md).[`color`](StackPanel.md#color)

***

### connectedInputText

#### Get Signature

> **get** **connectedInputText**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`InputText`](InputText.md) \| [`InputTextArea`](InputTextArea.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L178)

Gets the input text control currently attached to the keyboard

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`InputText`](InputText.md) \| [`InputTextArea`](InputTextArea.md)\>

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

[`StackPanel`](StackPanel.md).[`descendantsOnlyPadding`](StackPanel.md#descendantsonlypadding)

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

[`StackPanel`](StackPanel.md).[`disabledColor`](StackPanel.md#disabledcolor)

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

[`StackPanel`](StackPanel.md).[`disabledColorItem`](StackPanel.md#disabledcoloritem)

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

[`StackPanel`](StackPanel.md).[`fixedRatio`](StackPanel.md#fixedratio)

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

[`StackPanel`](StackPanel.md).[`fixedRatioMasterIsWidth`](StackPanel.md#fixedratiomasteriswidth)

***

### focusedColor

#### Get Signature

> **get** **focusedColor**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1320)

Border color when control is focused
When not defined the ADT color will be used. If no ADT color is defined, focused state won't have any border

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string`\>

#### Set Signature

> **set** **focusedColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1323)

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string`\>

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`focusedColor`](StackPanel.md#focusedcolor)

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

[`StackPanel`](StackPanel.md).[`fontFamily`](StackPanel.md#fontfamily)

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

[`StackPanel`](StackPanel.md).[`fontOffset`](StackPanel.md#fontoffset)

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

[`StackPanel`](StackPanel.md).[`fontSize`](StackPanel.md#fontsize)

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

[`StackPanel`](StackPanel.md).[`fontSizeInPixels`](StackPanel.md#fontsizeinpixels)

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

[`StackPanel`](StackPanel.md).[`fontStyle`](StackPanel.md#fontstyle)

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

[`StackPanel`](StackPanel.md).[`fontWeight`](StackPanel.md#fontweight)

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

[`StackPanel`](StackPanel.md).[`gradient`](StackPanel.md#gradient)

***

### height

#### Get Signature

> **get** **height**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L100)

Gets or sets control height

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **height**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L86)

Gets or sets panel height.
This value should not be set when in vertical mode as it will be computed automatically

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`height`](StackPanel.md#height)

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

[`StackPanel`](StackPanel.md).[`heightInPixels`](StackPanel.md#heightinpixels)

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

[`StackPanel`](StackPanel.md).[`highlightColor`](StackPanel.md#highlightcolor)

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

[`StackPanel`](StackPanel.md).[`highlightLineWidth`](StackPanel.md#highlightlinewidth)

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

[`StackPanel`](StackPanel.md).[`horizontalAlignment`](StackPanel.md#horizontalalignment)

***

### host

#### Get Signature

> **get** **host**(): [`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L405)

Get the hosting AdvancedDynamicTexture

##### Returns

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

#### Inherited from

[`StackPanel`](StackPanel.md).[`host`](StackPanel.md#host)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:917](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L917)

Gets a boolean indicating that the control needs to update its rendering

##### Returns

`boolean`

#### Inherited from

[`StackPanel`](StackPanel.md).[`isDirty`](StackPanel.md#isdirty)

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

[`StackPanel`](StackPanel.md).[`isEnabled`](StackPanel.md#isenabled)

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

[`StackPanel`](StackPanel.md).[`isHighlighted`](StackPanel.md#ishighlighted)

***

### isReadOnly

#### Get Signature

> **get** **isReadOnly**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L147)

Gets or sets a boolean indicating if the control is readonly (default: false).
A readonly control will still raise pointer events but will not react to them

##### Returns

`boolean`

#### Set Signature

> **set** **isReadOnly**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L151)

Gets or sets a boolean indicating if the control is readonly (default: false).
A readonly control will still raise pointer events but will not react to them

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`isReadOnly`](StackPanel.md#isreadonly)

***

### isVertical

#### Get Signature

> **get** **isVertical**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L28)

Gets or sets a boolean indicating if the stack panel is vertical or horizontal

##### Returns

`boolean`

#### Set Signature

> **set** **isVertical**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L32)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`isVertical`](StackPanel.md#isvertical)

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

[`StackPanel`](StackPanel.md).[`isVisible`](StackPanel.md#isvisible)

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

[`StackPanel`](StackPanel.md).[`left`](StackPanel.md#left)

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

[`StackPanel`](StackPanel.md).[`leftInPixels`](StackPanel.md#leftinpixels)

***

### linkedMesh

#### Get Signature

> **get** **linkedMesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:924](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L924)

Gets the current linked mesh (or null if none)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

[`StackPanel`](StackPanel.md).[`linkedMesh`](StackPanel.md#linkedmesh)

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

[`StackPanel`](StackPanel.md).[`linkOffsetX`](StackPanel.md#linkoffsetx)

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

[`StackPanel`](StackPanel.md).[`linkOffsetXInPixels`](StackPanel.md#linkoffsetxinpixels)

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

[`StackPanel`](StackPanel.md).[`linkOffsetY`](StackPanel.md#linkoffsety)

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

[`StackPanel`](StackPanel.md).[`linkOffsetYInPixels`](StackPanel.md#linkoffsetyinpixels)

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

[`StackPanel`](StackPanel.md).[`notRenderable`](StackPanel.md#notrenderable)

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

[`StackPanel`](StackPanel.md).[`paddingBottom`](StackPanel.md#paddingbottom)

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

[`StackPanel`](StackPanel.md).[`paddingBottomInPixels`](StackPanel.md#paddingbottominpixels)

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

[`StackPanel`](StackPanel.md).[`paddingLeft`](StackPanel.md#paddingleft)

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

[`StackPanel`](StackPanel.md).[`paddingLeftInPixels`](StackPanel.md#paddingleftinpixels)

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

[`StackPanel`](StackPanel.md).[`paddingRight`](StackPanel.md#paddingright)

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

[`StackPanel`](StackPanel.md).[`paddingRightInPixels`](StackPanel.md#paddingrightinpixels)

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

[`StackPanel`](StackPanel.md).[`paddingTop`](StackPanel.md#paddingtop)

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

[`StackPanel`](StackPanel.md).[`paddingTopInPixels`](StackPanel.md#paddingtopinpixels)

***

### renderToIntermediateTexture

#### Get Signature

> **get** **renderToIntermediateTexture**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L49)

Gets or sets boolean indicating if children should be rendered to an intermediate texture rather than directly to host, useful for alpha blending

##### Returns

`boolean`

#### Set Signature

> **set** **renderToIntermediateTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L52)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`renderToIntermediateTexture`](StackPanel.md#rendertointermediatetexture)

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

[`StackPanel`](StackPanel.md).[`rotation`](StackPanel.md#rotation)

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

[`StackPanel`](StackPanel.md).[`scaleX`](StackPanel.md#scalex)

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

[`StackPanel`](StackPanel.md).[`scaleY`](StackPanel.md#scaley)

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

[`StackPanel`](StackPanel.md).[`shadowBlur`](StackPanel.md#shadowblur)

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

[`StackPanel`](StackPanel.md).[`shadowColor`](StackPanel.md#shadowcolor)

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

[`StackPanel`](StackPanel.md).[`shadowOffsetX`](StackPanel.md#shadowoffsetx)

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

[`StackPanel`](StackPanel.md).[`shadowOffsetY`](StackPanel.md#shadowoffsety)

***

### spacing

#### Get Signature

> **get** **spacing**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L45)

Gets or sets the spacing (in pixels) between each child.

##### Returns

`number`

#### Set Signature

> **set** **spacing**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L49)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`spacing`](StackPanel.md#spacing)

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

[`StackPanel`](StackPanel.md).[`style`](StackPanel.md#style)

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

[`StackPanel`](StackPanel.md).[`top`](StackPanel.md#top)

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

[`StackPanel`](StackPanel.md).[`topInPixels`](StackPanel.md#topinpixels)

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

[`StackPanel`](StackPanel.md).[`transformCenterX`](StackPanel.md#transformcenterx)

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

[`StackPanel`](StackPanel.md).[`transformCenterY`](StackPanel.md#transformcentery)

***

### transformedMeasure

#### Get Signature

> **get** **transformedMeasure**(): [`Measure`](Measure.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L165)

Gets the transformed measure, that is the bounding box of the control after applying all transformations

##### Returns

[`Measure`](Measure.md)

#### Inherited from

[`StackPanel`](StackPanel.md).[`transformedMeasure`](StackPanel.md#transformedmeasure)

***

### typeName

#### Get Signature

> **get** **typeName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L306)

Gets the control type name

##### Returns

`string`

#### Inherited from

[`StackPanel`](StackPanel.md).[`typeName`](StackPanel.md#typename)

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

[`StackPanel`](StackPanel.md).[`verticalAlignment`](StackPanel.md#verticalalignment)

***

### width

#### Get Signature

> **get** **width**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L77)

Gets or sets control width

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L63)

Gets or sets panel width.
This value should not be set when in horizontal mode as it will be computed automatically

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`width`](StackPanel.md#width)

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

[`StackPanel`](StackPanel.md).[`widthInPixels`](StackPanel.md#widthinpixels)

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

[`StackPanel`](StackPanel.md).[`zIndex`](StackPanel.md#zindex)

***

### HORIZONTAL\_ALIGNMENT\_CENTER

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_CENTER**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2799](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2799)

HORIZONTAL_ALIGNMENT_CENTER

##### Returns

`number`

#### Inherited from

[`StackPanel`](StackPanel.md).[`HORIZONTAL_ALIGNMENT_CENTER`](StackPanel.md#horizontal_alignment_center)

***

### HORIZONTAL\_ALIGNMENT\_LEFT

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_LEFT**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2789](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2789)

HORIZONTAL_ALIGNMENT_LEFT

##### Returns

`number`

#### Inherited from

[`StackPanel`](StackPanel.md).[`HORIZONTAL_ALIGNMENT_LEFT`](StackPanel.md#horizontal_alignment_left)

***

### HORIZONTAL\_ALIGNMENT\_RIGHT

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_RIGHT**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2794](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2794)

HORIZONTAL_ALIGNMENT_RIGHT

##### Returns

`number`

#### Inherited from

[`StackPanel`](StackPanel.md).[`HORIZONTAL_ALIGNMENT_RIGHT`](StackPanel.md#horizontal_alignment_right)

***

### VERTICAL\_ALIGNMENT\_BOTTOM

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_BOTTOM**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2809](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2809)

VERTICAL_ALIGNMENT_BOTTOM

##### Returns

`number`

#### Inherited from

[`StackPanel`](StackPanel.md).[`VERTICAL_ALIGNMENT_BOTTOM`](StackPanel.md#vertical_alignment_bottom)

***

### VERTICAL\_ALIGNMENT\_CENTER

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_CENTER**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2814](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2814)

VERTICAL_ALIGNMENT_CENTER

##### Returns

`number`

#### Inherited from

[`StackPanel`](StackPanel.md).[`VERTICAL_ALIGNMENT_CENTER`](StackPanel.md#vertical_alignment_center)

***

### VERTICAL\_ALIGNMENT\_TOP

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_TOP**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2804)

VERTICAL_ALIGNMENT_TOP

##### Returns

`number`

#### Inherited from

[`StackPanel`](StackPanel.md).[`VERTICAL_ALIGNMENT_TOP`](StackPanel.md#vertical_alignment_top)

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

[`StackPanel`](StackPanel.md).[`_onPointerPick`](StackPanel.md#_onpointerpick)

***

### addControl()

> **addControl**(`control`): [`Container`](Container.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L223)

Adds a new control to the current container

#### Parameters

##### control

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

defines the control to add

#### Returns

[`Container`](Container.md)

the current container

#### Inherited from

[`StackPanel`](StackPanel.md).[`addControl`](StackPanel.md#addcontrol)

***

### addKeysRow()

> **addKeysRow**(`keys`, `propertySets?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L112)

Adds a new row of keys

#### Parameters

##### keys

`string`[]

defines the list of keys to add

##### propertySets?

[`KeyPropertySet`](KeyPropertySet.md)[]

defines the associated property sets

#### Returns

`void`

***

### applyShiftState()

> **applyShiftState**(`shiftState`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L142)

Set the shift key to a specific state

#### Parameters

##### shiftState

`number`

defines the new shift state

#### Returns

`void`

***

### blur()

> **blur**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1387)

Function to unfocus a button programmatically

#### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`blur`](StackPanel.md#blur)

***

### clearControls()

> **clearControls**(): [`Container`](Container.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L250)

Removes all controls from the current container

#### Returns

[`Container`](Container.md)

the current container

#### Inherited from

[`StackPanel`](StackPanel.md).[`clearControls`](StackPanel.md#clearcontrols)

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

[`StackPanel`](StackPanel.md).[`clone`](StackPanel.md#clone)

***

### connect()

> **connect**(`input`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L187)

Connects the keyboard with an input text control

#### Parameters

##### input

[`InputText`](InputText.md)

defines the target control

#### Returns

`void`

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

[`StackPanel`](StackPanel.md).[`contains`](StackPanel.md#contains)

***

### containsControl()

> **containsControl**(`control`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L214)

Search for a specific control in children

#### Parameters

##### control

[`Control`](Control.md)

defines the control to look for

#### Returns

`boolean`

true if the control is in child list

#### Inherited from

[`StackPanel`](StackPanel.md).[`containsControl`](StackPanel.md#containscontrol)

***

### disconnect()

> **disconnect**(`input?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L266)

Disconnects the keyboard from connected InputText controls

#### Parameters

##### input?

[`InputText`](InputText.md)

optionally defines a target control, otherwise all are disconnected

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L301)

Release all resources

#### Returns

`void`

#### Overrides

[`StackPanel`](StackPanel.md).[`dispose`](StackPanel.md#dispose)

***

### focus()

> **focus**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1380)

Function to focus a button programmatically

#### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`focus`](StackPanel.md#focus)

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

[`StackPanel`](StackPanel.md).[`getAscendantOfClass`](StackPanel.md#getascendantofclass)

***

### getChildByName()

> **getChildByName**(`name`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L183)

Gets a child using its name

#### Parameters

##### name

`string`

defines the child name to look for

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

the child control if found

#### Inherited from

[`StackPanel`](StackPanel.md).[`getChildByName`](StackPanel.md#getchildbyname)

***

### getChildByType()

> **getChildByType**(`name`, `type`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L199)

Gets a child using its type and its name

#### Parameters

##### name

`string`

defines the child name to look for

##### type

`string`

defines the child type to look for

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

the child control if found

#### Inherited from

[`StackPanel`](StackPanel.md).[`getChildByType`](StackPanel.md#getchildbytype)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L314)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

[`StackPanel`](StackPanel.md).[`getClassName`](StackPanel.md#getclassname)

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

[`StackPanel`](StackPanel.md).[`getDescendants`](StackPanel.md#getdescendants)

***

### getDescendantsToRef()

> **getDescendantsToRef**(`results`, `directDescendantsOnly?`, `predicate?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:567](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L567)

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

[`StackPanel`](StackPanel.md).[`getDescendantsToRef`](StackPanel.md#getdescendantstoref)

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

[`StackPanel`](StackPanel.md).[`getDimension`](StackPanel.md#getdimension)

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

[`StackPanel`](StackPanel.md).[`getLocalCoordinates`](StackPanel.md#getlocalcoordinates)

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

[`StackPanel`](StackPanel.md).[`getLocalCoordinatesToRef`](StackPanel.md#getlocalcoordinatestoref)

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

[`StackPanel`](StackPanel.md).[`getParentLocalCoordinates`](StackPanel.md#getparentlocalcoordinates)

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

[`StackPanel`](StackPanel.md).[`isAscendant`](StackPanel.md#isascendant)

***

### isDimensionFullyDefined()

> **isDimensionFullyDefined**(`dim`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L240)

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

[`StackPanel`](StackPanel.md).[`isDimensionFullyDefined`](StackPanel.md#isdimensionfullydefined)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:741](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L741)

Returns true if the control is ready to be used

#### Returns

`boolean`

#### Inherited from

[`StackPanel`](StackPanel.md).[`isReady`](StackPanel.md#isready)

***

### keepsFocusWith()

> **keepsFocusWith**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)[]\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1373)

Function called to get the list of controls that should not steal the focus from this control

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)[]\>

an array of controls

#### Inherited from

[`StackPanel`](StackPanel.md).[`keepsFocusWith`](StackPanel.md#keepsfocuswith)

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

[`StackPanel`](StackPanel.md).[`linkWithMesh`](StackPanel.md#linkwithmesh)

***

### markAllAsDirty()

> **markAllAsDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1447)

Mark the element and its children as dirty

#### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`markAllAsDirty`](StackPanel.md#markallasdirty)

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

[`StackPanel`](StackPanel.md).[`markAsDirty`](StackPanel.md#markasdirty)

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

[`StackPanel`](StackPanel.md).[`moveToVector3`](StackPanel.md#movetovector3)

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

[`StackPanel`](StackPanel.md).[`parse`](StackPanel.md#parse)

***

### processKeyboard()

> **processKeyboard**(`evt`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1395)

Handles the keyboard event

#### Parameters

##### evt

[`IKeyboardEvent`](../../../core/src/interfaces/IKeyboardEvent.md)

Defines the KeyboardEvent

#### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`processKeyboard`](StackPanel.md#processkeyboard)

***

### removeControl()

> **removeControl**(`control`): [`Container`](Container.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L265)

Removes a control from the current container

#### Parameters

##### control

[`Control`](Control.md)

defines the control to remove

#### Returns

[`Container`](Container.md)

the current container

#### Inherited from

[`StackPanel`](StackPanel.md).[`removeControl`](StackPanel.md#removecontrol)

***

### serialize()

> **serialize**(`serializationObject`, `force`, `allowCanvas`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/stackPanel.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/stackPanel.ts#L259)

Serializes the current control

#### Parameters

##### serializationObject

`any`

defined the JSON serialized object

##### force

`boolean`

force serialization even if isSerializable === false

##### allowCanvas

`boolean`

defines if the control is allowed to use a Canvas2D object to serialize

#### Returns

`void`

#### Inherited from

[`StackPanel`](StackPanel.md).[`serialize`](StackPanel.md#serialize)

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

[`StackPanel`](StackPanel.md).[`setPadding`](StackPanel.md#setpadding)

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

[`StackPanel`](StackPanel.md).[`setPaddingInPixels`](StackPanel.md#setpaddinginpixels)

***

### CreateDefaultLayout()

> `static` **CreateDefaultLayout**(`name?`): `VirtualKeyboard`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/virtualKeyboard.ts:315](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/virtualKeyboard.ts#L315)

Creates a new keyboard using a default layout

#### Parameters

##### name?

`string`

defines control name

#### Returns

`VirtualKeyboard`

a new VirtualKeyboard

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

[`StackPanel`](StackPanel.md).[`Parse`](StackPanel.md#parse-1)
