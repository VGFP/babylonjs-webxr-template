[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / ScrollViewer

# Class: ScrollViewer

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L21)

Class used to hold a viewer window and sliders in a grid

## Extends

- [`Rectangle`](Rectangle.md)

## Constructors

### Constructor

> **new ScrollViewer**(`name?`, `isImageBased?`): `ScrollViewer`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L174)

Creates a new ScrollViewer

#### Parameters

##### name?

`string`

of ScrollViewer

##### isImageBased?

`boolean`

#### Returns

`ScrollViewer`

#### Overrides

[`Rectangle`](Rectangle.md).[`constructor`](Rectangle.md#constructor)

## Properties

### animations

> **animations**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1311)

Array of animations

#### Inherited from

[`Rectangle`](Rectangle.md).[`animations`](Rectangle.md#animations)

***

### delegatePickingToChildren

> **delegatePickingToChildren**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L45)

Gets or sets a boolean indicating that the container will let internal controls handle picking instead of doing it directly using its bounding info

#### Inherited from

[`Rectangle`](Rectangle.md).[`delegatePickingToChildren`](Rectangle.md#delegatepickingtochildren)

***

### hoverCursor

> **hoverCursor**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L296)

Gets or sets the cursor to use when the control is hovered

#### Inherited from

[`Rectangle`](Rectangle.md).[`hoverCursor`](Rectangle.md#hovercursor)

***

### isFocusInvisible

> **isFocusInvisible**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L189)

Gets or sets a boolean indicating if the control can be focusable

#### Inherited from

[`Rectangle`](Rectangle.md).[`isFocusInvisible`](Rectangle.md#isfocusinvisible)

***

### isHitTestVisible

> **isHitTestVisible**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L177)

Gets or sets a boolean indicating if the control can be hit with pointer events

#### Inherited from

[`Rectangle`](Rectangle.md).[`isHitTestVisible`](Rectangle.md#ishittestvisible)

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

[`Rectangle`](Rectangle.md).[`isPointerBlocker`](Rectangle.md#ispointerblocker)

***

### isSerializable

> **isSerializable**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L470)

Indicates if the control should be serialized. Defaults to true.

#### Inherited from

[`Rectangle`](Rectangle.md).[`isSerializable`](Rectangle.md#isserializable)

***

### logLayoutCycleErrors

> **logLayoutCycleErrors**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L63)

Gets or sets a boolean indicating that layout cycle errors should be displayed on the console

#### Inherited from

[`Rectangle`](Rectangle.md).[`logLayoutCycleErrors`](Rectangle.md#loglayoutcycleerrors)

***

### maxLayoutCycle

> **maxLayoutCycle**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L69)

Gets or sets the number of layout cycles (a change involved by a control while evaluating the layout) allowed

#### Inherited from

[`Rectangle`](Rectangle.md).[`maxLayoutCycle`](Rectangle.md#maxlayoutcycle)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L173)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`Rectangle`](Rectangle.md).[`metadata`](Rectangle.md#metadata)

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L103)

defines the control name

#### Inherited from

[`Rectangle`](Rectangle.md).[`name`](Rectangle.md#name)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L336)

Observable that fires whenever the accessibility event of the control has changed

#### Inherited from

[`Rectangle`](Rectangle.md).[`onAccessibilityTagChangedObservable`](Rectangle.md#onaccessibilitytagchangedobservable)

***

### onAfterDrawObservable

> **onAfterDrawObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L390)

An event triggered after the control was drawn

#### Inherited from

[`Rectangle`](Rectangle.md).[`onAfterDrawObservable`](Rectangle.md#onafterdrawobservable)

***

### onBeforeDrawObservable

> **onBeforeDrawObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L385)

An event triggered before drawing the control

#### Inherited from

[`Rectangle`](Rectangle.md).[`onBeforeDrawObservable`](Rectangle.md#onbeforedrawobservable)

***

### onBlurObservable

> **onBlurObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1341)

Observable raised when the control loses the focus

#### Inherited from

[`Rectangle`](Rectangle.md).[`onBlurObservable`](Rectangle.md#onblurobservable)

***

### onControlAddedObservable

> **onControlAddedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L289)

An event triggered when any control is added to this container.

#### Inherited from

[`Rectangle`](Rectangle.md).[`onControlAddedObservable`](Rectangle.md#oncontroladdedobservable)

***

### onControlRemovedObservable

> **onControlRemovedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L294)

An event triggered when any control is removed from this container.

#### Inherited from

[`Rectangle`](Rectangle.md).[`onControlRemovedObservable`](Rectangle.md#oncontrolremovedobservable)

***

### onDirtyObservable

> **onDirtyObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L380)

An event triggered when the control is marked as dirty

#### Inherited from

[`Rectangle`](Rectangle.md).[`onDirtyObservable`](Rectangle.md#ondirtyobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L395)

An event triggered when the control has been disposed

#### Inherited from

[`Rectangle`](Rectangle.md).[`onDisposeObservable`](Rectangle.md#ondisposeobservable)

***

### onEnabledStateChangedObservable

> **onEnabledStateChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L131)

Observable that fires when the control's enabled state changes

#### Inherited from

[`Rectangle`](Rectangle.md).[`onEnabledStateChangedObservable`](Rectangle.md#onenabledstatechangedobservable)

***

### onEnterPressedObservable

> **onEnterPressedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L370)

An event triggered when a control receives an ENTER key down event

#### Inherited from

[`Rectangle`](Rectangle.md).[`onEnterPressedObservable`](Rectangle.md#onenterpressedobservable)

***

### onFocusObservable

> **onFocusObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1339)

Observable raised when the control gets the focus

#### Inherited from

[`Rectangle`](Rectangle.md).[`onFocusObservable`](Rectangle.md#onfocusobservable)

***

### onIsVisibleChangedObservable

> **onIsVisibleChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L400)

An event triggered when the control isVisible is changed

#### Inherited from

[`Rectangle`](Rectangle.md).[`onIsVisibleChangedObservable`](Rectangle.md#onisvisiblechangedobservable)

***

### onKeyboardEventProcessedObservable

> **onKeyboardEventProcessedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IKeyboardEvent`](../../../core/src/interfaces/IKeyboardEvent.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1343)

Observable raised when a key event was processed

#### Inherited from

[`Rectangle`](Rectangle.md).[`onKeyboardEventProcessedObservable`](Rectangle.md#onkeyboardeventprocessedobservable)

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L365)

An event triggered when a control is clicked on

#### Inherited from

[`Rectangle`](Rectangle.md).[`onPointerClickObservable`](Rectangle.md#onpointerclickobservable)

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L355)

An event triggered when the pointer taps the control

#### Inherited from

[`Rectangle`](Rectangle.md).[`onPointerDownObservable`](Rectangle.md#onpointerdownobservable)

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L375)

An event triggered when pointer enters the control

#### Inherited from

[`Rectangle`](Rectangle.md).[`onPointerEnterObservable`](Rectangle.md#onpointerenterobservable)

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L345)

An event triggered when the pointer moves over the control.

#### Inherited from

[`Rectangle`](Rectangle.md).[`onPointerMoveObservable`](Rectangle.md#onpointermoveobservable)

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L350)

An event triggered when the pointer moves out of the control.

#### Inherited from

[`Rectangle`](Rectangle.md).[`onPointerOutObservable`](Rectangle.md#onpointeroutobservable)

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2WithInfo`](Vector2WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L360)

An event triggered when pointer up

#### Inherited from

[`Rectangle`](Rectangle.md).[`onPointerUpObservable`](Rectangle.md#onpointerupobservable)

***

### onWheelObservable

> **onWheelObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector2`](../../../core/src/classes/Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L341)

An event triggered when pointer wheel is scrolled

#### Inherited from

[`Rectangle`](Rectangle.md).[`onWheelObservable`](Rectangle.md#onwheelobservable)

***

### overlapDeltaMultiplier?

> `optional` **overlapDeltaMultiplier?**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1306)

Gets/sets the deoverlap movement multiplier

#### Inherited from

[`Rectangle`](Rectangle.md).[`overlapDeltaMultiplier`](Rectangle.md#overlapdeltamultiplier)

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

[`Rectangle`](Rectangle.md).[`overlapGroup`](Rectangle.md#overlapgroup)

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container`](Container.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L47)

Gets or sets the control parent

#### Inherited from

[`Rectangle`](Rectangle.md).[`parent`](Rectangle.md#parent)

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

[`Rectangle`](Rectangle.md).[`tabIndex`](Rectangle.md#tabindex)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L148)

Gets or sets the unique id of the node. Please note that this number will be updated when the control is added to a container

#### Inherited from

[`Rectangle`](Rectangle.md).[`uniqueId`](Rectangle.md#uniqueid)

***

### useBitmapCache

> **useBitmapCache**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L223)

Gets or sets a boolean indicating that the current control should cache its rendering (useful when the control does not change often)

#### Inherited from

[`Rectangle`](Rectangle.md).[`useBitmapCache`](Rectangle.md#usebitmapcache)

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

[`Rectangle`](Rectangle.md).[`AddHeader`](Rectangle.md#addheader)

***

### AllowAlphaInheritance

> `static` **AllowAlphaInheritance**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L39)

Gets or sets a boolean indicating if alpha must be an inherited value (false by default)

#### Inherited from

[`Rectangle`](Rectangle.md).[`AllowAlphaInheritance`](Rectangle.md#allowalphainheritance)

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

[`Rectangle`](Rectangle.md).[`accessibilityTag`](Rectangle.md#accessibilitytag)

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

[`Rectangle`](Rectangle.md).[`adaptHeightToChildren`](Rectangle.md#adaptheighttochildren)

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

[`Rectangle`](Rectangle.md).[`adaptWidthToChildren`](Rectangle.md#adaptwidthtochildren)

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

[`Rectangle`](Rectangle.md).[`alpha`](Rectangle.md#alpha)

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

[`Rectangle`](Rectangle.md).[`background`](Rectangle.md#background)

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

[`Rectangle`](Rectangle.md).[`backgroundGradient`](Rectangle.md#backgroundgradient)

***

### barBackground

#### Get Signature

> **get** **barBackground**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L512)

Gets or sets the bar background

##### Returns

`string`

#### Set Signature

> **set** **barBackground**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:516](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L516)

##### Parameters

###### color

`string`

##### Returns

`void`

***

### barColor

#### Get Signature

> **get** **barColor**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L316)

Gets or sets the bar color

##### Returns

`string`

#### Set Signature

> **set** **barColor**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L320)

##### Parameters

###### color

`string`

##### Returns

`void`

***

### barImage

#### Get Signature

> **get** **barImage**(): [`Image`](Image.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:530](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L530)

Gets or sets the bar background image

##### Returns

[`Image`](Image.md)

#### Set Signature

> **set** **barImage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:534](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L534)

##### Parameters

###### value

[`Image`](Image.md)

##### Returns

`void`

***

### barImageHeight

#### Get Signature

> **get** **barImageHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L446)

Gets or sets the height of the bar image

##### Returns

`number`

#### Set Signature

> **set** **barImageHeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L450)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### barSize

#### Get Signature

> **get** **barSize**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L379)

Gets or sets the size of the bar

##### Returns

`number`

#### Set Signature

> **set** **barSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:383](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L383)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bucketHeight

#### Get Signature

> **get** **bucketHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L121)

Gets the bucket height

##### Returns

`number`

***

### bucketWidth

#### Get Signature

> **get** **bucketWidth**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L116)

Gets the bucket width

##### Returns

`number`

***

### centerX

#### Get Signature

> **get** **centerX**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1223)

Gets the center coordinate on X axis

##### Returns

`number`

#### Inherited from

[`Rectangle`](Rectangle.md).[`centerX`](Rectangle.md#centerx)

***

### centerY

#### Get Signature

> **get** **centerY**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1228)

Gets the center coordinate on Y axis

##### Returns

`number`

#### Inherited from

[`Rectangle`](Rectangle.md).[`centerY`](Rectangle.md#centery)

***

### children

#### Get Signature

> **get** **children**(): [`Control`](Control.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L92)

Gets the list of children

##### Returns

[`Control`](Control.md)[]

#### Overrides

[`Rectangle`](Rectangle.md).[`children`](Rectangle.md#children)

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

[`Rectangle`](Rectangle.md).[`clipChildren`](Rectangle.md#clipchildren)

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

[`Rectangle`](Rectangle.md).[`clipContent`](Rectangle.md#clipcontent)

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

[`Rectangle`](Rectangle.md).[`color`](Rectangle.md#color)

***

### cornerRadius

#### Get Signature

> **get** **cornerRadius**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L30)

Gets or sets the corner radius of all angles

##### Returns

`number`

#### Set Signature

> **set** **cornerRadius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L34)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`cornerRadius`](Rectangle.md#cornerradius)

***

### cornerRadiusW

#### Get Signature

> **get** **cornerRadiusW**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L88)

Gets or sets the corner radius bottom right angle

##### Returns

`number`

#### Set Signature

> **set** **cornerRadiusW**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L92)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`cornerRadiusW`](Rectangle.md#cornerradiusw)

***

### cornerRadiusX

#### Get Signature

> **get** **cornerRadiusX**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L49)

Gets or sets the corner radius top left angle

##### Returns

`number`

#### Set Signature

> **set** **cornerRadiusX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L53)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`cornerRadiusX`](Rectangle.md#cornerradiusx)

***

### cornerRadiusY

#### Get Signature

> **get** **cornerRadiusY**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L62)

Gets or sets the corner radius top right angle

##### Returns

`number`

#### Set Signature

> **set** **cornerRadiusY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L66)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`cornerRadiusY`](Rectangle.md#cornerradiusy)

***

### cornerRadiusZ

#### Get Signature

> **get** **cornerRadiusZ**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L75)

Gets or sets the corner radius bottom left angle

##### Returns

`number`

#### Set Signature

> **set** **cornerRadiusZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L79)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`cornerRadiusZ`](Rectangle.md#cornerradiusz)

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

[`Rectangle`](Rectangle.md).[`descendantsOnlyPadding`](Rectangle.md#descendantsonlypadding)

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

[`Rectangle`](Rectangle.md).[`disabledColor`](Rectangle.md#disabledcolor)

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

[`Rectangle`](Rectangle.md).[`disabledColorItem`](Rectangle.md#disabledcoloritem)

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

[`Rectangle`](Rectangle.md).[`fixedRatio`](Rectangle.md#fixedratio)

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

[`Rectangle`](Rectangle.md).[`fixedRatioMasterIsWidth`](Rectangle.md#fixedratiomasteriswidth)

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

[`Rectangle`](Rectangle.md).[`focusedColor`](Rectangle.md#focusedcolor)

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

[`Rectangle`](Rectangle.md).[`fontFamily`](Rectangle.md#fontfamily)

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

[`Rectangle`](Rectangle.md).[`fontOffset`](Rectangle.md#fontoffset)

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

[`Rectangle`](Rectangle.md).[`fontSize`](Rectangle.md#fontsize)

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

[`Rectangle`](Rectangle.md).[`fontSizeInPixels`](Rectangle.md#fontsizeinpixels)

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

[`Rectangle`](Rectangle.md).[`fontStyle`](Rectangle.md#fontstyle)

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

[`Rectangle`](Rectangle.md).[`fontWeight`](Rectangle.md#fontweight)

***

### forceHorizontalBar

#### Get Signature

> **get** **forceHorizontalBar**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L146)

Forces the horizontal scroll bar to be displayed

##### Returns

`boolean`

#### Set Signature

> **set** **forceHorizontalBar**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L150)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### forceVerticalBar

#### Get Signature

> **get** **forceVerticalBar**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L159)

Forces the vertical scroll bar to be displayed

##### Returns

`boolean`

#### Set Signature

> **set** **forceVerticalBar**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L163)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### freezeControls

#### Get Signature

> **get** **freezeControls**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L107)

Freezes or unfreezes the controls in the window.
When controls are frozen, the scroll viewer can render a lot more quickly but updates to positions/sizes of controls
are not taken into account. If you want to change positions/sizes, unfreeze, perform the changes then freeze again

##### Returns

`boolean`

#### Set Signature

> **set** **freezeControls**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L111)

##### Parameters

###### value

`boolean`

##### Returns

`void`

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

[`Rectangle`](Rectangle.md).[`gradient`](Rectangle.md#gradient)

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

[`Rectangle`](Rectangle.md).[`height`](Rectangle.md#height)

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

[`Rectangle`](Rectangle.md).[`heightInPixels`](Rectangle.md#heightinpixels)

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

[`Rectangle`](Rectangle.md).[`highlightColor`](Rectangle.md#highlightcolor)

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

[`Rectangle`](Rectangle.md).[`highlightLineWidth`](Rectangle.md#highlightlinewidth)

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

[`Rectangle`](Rectangle.md).[`horizontalAlignment`](Rectangle.md#horizontalalignment)

***

### horizontalBar

#### Get Signature

> **get** **horizontalBar**(): [`ScrollBar`](ScrollBar.md) \| [`ImageScrollBar`](ImageScrollBar.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L55)

Gets the horizontal scrollbar

##### Returns

[`ScrollBar`](ScrollBar.md) \| [`ImageScrollBar`](ImageScrollBar.md)

***

### horizontalBarImage

#### Get Signature

> **get** **horizontalBarImage**(): [`Image`](Image.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L543)

Gets or sets the horizontal bar background image

##### Returns

[`Image`](Image.md)

#### Set Signature

> **set** **horizontalBarImage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:547](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L547)

##### Parameters

###### value

[`Image`](Image.md)

##### Returns

`void`

***

### horizontalBarImageHeight

#### Get Signature

> **get** **horizontalBarImageHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:469](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L469)

Gets or sets the height of the horizontal bar image

##### Returns

`number`

#### Set Signature

> **set** **horizontalBarImageHeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L473)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### horizontalThumbImage

#### Get Signature

> **get** **horizontalThumbImage**(): [`Image`](Image.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L348)

Gets or sets the horizontal bar image

##### Returns

[`Image`](Image.md)

#### Set Signature

> **set** **horizontalThumbImage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:352](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L352)

##### Parameters

###### value

[`Image`](Image.md)

##### Returns

`void`

***

### host

#### Get Signature

> **get** **host**(): [`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L405)

Get the hosting AdvancedDynamicTexture

##### Returns

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

#### Inherited from

[`Rectangle`](Rectangle.md).[`host`](Rectangle.md#host)

***

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:917](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L917)

Gets a boolean indicating that the control needs to update its rendering

##### Returns

`boolean`

#### Inherited from

[`Rectangle`](Rectangle.md).[`isDirty`](Rectangle.md#isdirty)

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

[`Rectangle`](Rectangle.md).[`isEnabled`](Rectangle.md#isenabled)

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

[`Rectangle`](Rectangle.md).[`isHighlighted`](Rectangle.md#ishighlighted)

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

[`Rectangle`](Rectangle.md).[`isReadOnly`](Rectangle.md#isreadonly)

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

[`Rectangle`](Rectangle.md).[`isVisible`](Rectangle.md#isvisible)

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

[`Rectangle`](Rectangle.md).[`left`](Rectangle.md#left)

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

[`Rectangle`](Rectangle.md).[`leftInPixels`](Rectangle.md#leftinpixels)

***

### linkedMesh

#### Get Signature

> **get** **linkedMesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:924](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L924)

Gets the current linked mesh (or null if none)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

[`Rectangle`](Rectangle.md).[`linkedMesh`](Rectangle.md#linkedmesh)

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

[`Rectangle`](Rectangle.md).[`linkOffsetX`](Rectangle.md#linkoffsetx)

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

[`Rectangle`](Rectangle.md).[`linkOffsetXInPixels`](Rectangle.md#linkoffsetxinpixels)

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

[`Rectangle`](Rectangle.md).[`linkOffsetY`](Rectangle.md#linkoffsety)

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

[`Rectangle`](Rectangle.md).[`linkOffsetYInPixels`](Rectangle.md#linkoffsetyinpixels)

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

[`Rectangle`](Rectangle.md).[`notRenderable`](Rectangle.md#notrenderable)

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

[`Rectangle`](Rectangle.md).[`paddingBottom`](Rectangle.md#paddingbottom)

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

[`Rectangle`](Rectangle.md).[`paddingBottomInPixels`](Rectangle.md#paddingbottominpixels)

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

[`Rectangle`](Rectangle.md).[`paddingLeft`](Rectangle.md#paddingleft)

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

[`Rectangle`](Rectangle.md).[`paddingLeftInPixels`](Rectangle.md#paddingleftinpixels)

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

[`Rectangle`](Rectangle.md).[`paddingRight`](Rectangle.md#paddingright)

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

[`Rectangle`](Rectangle.md).[`paddingRightInPixels`](Rectangle.md#paddingrightinpixels)

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

[`Rectangle`](Rectangle.md).[`paddingTop`](Rectangle.md#paddingtop)

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

[`Rectangle`](Rectangle.md).[`paddingTopInPixels`](Rectangle.md#paddingtopinpixels)

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

[`Rectangle`](Rectangle.md).[`renderToIntermediateTexture`](Rectangle.md#rendertointermediatetexture)

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

[`Rectangle`](Rectangle.md).[`rotation`](Rectangle.md#rotation)

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

[`Rectangle`](Rectangle.md).[`scaleX`](Rectangle.md#scalex)

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

[`Rectangle`](Rectangle.md).[`scaleY`](Rectangle.md#scaley)

***

### scrollBackground

#### Get Signature

> **get** **scrollBackground**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L302)

Gets or sets the scroll bar container background color

##### Returns

`string`

#### Set Signature

> **set** **scrollBackground**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L306)

##### Parameters

###### color

`string`

##### Returns

`void`

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

[`Rectangle`](Rectangle.md).[`shadowBlur`](Rectangle.md#shadowblur)

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

[`Rectangle`](Rectangle.md).[`shadowColor`](Rectangle.md#shadowcolor)

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

[`Rectangle`](Rectangle.md).[`shadowOffsetX`](Rectangle.md#shadowoffsetx)

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

[`Rectangle`](Rectangle.md).[`shadowOffsetY`](Rectangle.md#shadowoffsety)

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

[`Rectangle`](Rectangle.md).[`style`](Rectangle.md#style)

***

### thickness

#### Get Signature

> **get** **thickness**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L15)

Gets or sets border thickness

##### Returns

`number`

#### Set Signature

> **set** **thickness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/rectangle.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/rectangle.ts#L19)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`thickness`](Rectangle.md#thickness)

***

### thumbHeight

#### Get Signature

> **get** **thumbHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:423](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L423)

Gets or sets the height of the thumb

##### Returns

`number`

#### Set Signature

> **set** **thumbHeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:427](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L427)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### thumbImage

#### Get Signature

> **get** **thumbImage**(): [`Image`](Image.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L331)

Gets or sets the bar image

##### Returns

[`Image`](Image.md)

#### Set Signature

> **set** **thumbImage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L335)

##### Parameters

###### value

[`Image`](Image.md)

##### Returns

`void`

***

### thumbLength

#### Get Signature

> **get** **thumbLength**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L400)

Gets or sets the length of the thumb

##### Returns

`number`

#### Set Signature

> **set** **thumbLength**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:404](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L404)

##### Parameters

###### value

`number`

##### Returns

`void`

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

[`Rectangle`](Rectangle.md).[`top`](Rectangle.md#top)

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

[`Rectangle`](Rectangle.md).[`topInPixels`](Rectangle.md#topinpixels)

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

[`Rectangle`](Rectangle.md).[`transformCenterX`](Rectangle.md#transformcenterx)

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

[`Rectangle`](Rectangle.md).[`transformCenterY`](Rectangle.md#transformcentery)

***

### transformedMeasure

#### Get Signature

> **get** **transformedMeasure**(): [`Measure`](Measure.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L165)

Gets the transformed measure, that is the bounding box of the control after applying all transformations

##### Returns

[`Measure`](Measure.md)

#### Inherited from

[`Rectangle`](Rectangle.md).[`transformedMeasure`](Rectangle.md#transformedmeasure)

***

### typeName

#### Get Signature

> **get** **typeName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L306)

Gets the control type name

##### Returns

`string`

#### Inherited from

[`Rectangle`](Rectangle.md).[`typeName`](Rectangle.md#typename)

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

[`Rectangle`](Rectangle.md).[`verticalAlignment`](Rectangle.md#verticalalignment)

***

### verticalBar

#### Get Signature

> **get** **verticalBar**(): [`ScrollBar`](ScrollBar.md) \| [`ImageScrollBar`](ImageScrollBar.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L62)

Gets the vertical scrollbar

##### Returns

[`ScrollBar`](ScrollBar.md) \| [`ImageScrollBar`](ImageScrollBar.md)

***

### verticalBarImage

#### Get Signature

> **get** **verticalBarImage**(): [`Image`](Image.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:554](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L554)

Gets or sets the vertical bar background image

##### Returns

[`Image`](Image.md)

#### Set Signature

> **set** **verticalBarImage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L558)

##### Parameters

###### value

[`Image`](Image.md)

##### Returns

`void`

***

### verticalBarImageHeight

#### Get Signature

> **get** **verticalBarImageHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L490)

Gets or sets the height of the vertical bar image

##### Returns

`number`

#### Set Signature

> **set** **verticalBarImageHeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:494](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L494)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### verticalThumbImage

#### Get Signature

> **get** **verticalThumbImage**(): [`Image`](Image.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:363](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L363)

Gets or sets the vertical bar image

##### Returns

[`Image`](Image.md)

#### Set Signature

> **set** **verticalThumbImage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L367)

##### Parameters

###### value

[`Image`](Image.md)

##### Returns

`void`

***

### wheelPrecision

#### Get Signature

> **get** **wheelPrecision**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L280)

Gets or sets the mouse wheel precision
from 0 to 1 with a default value of 0.05

##### Returns

`number`

#### Set Signature

> **set** **wheelPrecision**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L284)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### width

#### Get Signature

> **get** **width**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:658](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L658)

Gets or sets control width

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#position-and-size

##### Returns

`string` \| `number`

#### Set Signature

> **set** **width**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:662](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L662)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`width`](Rectangle.md#width)

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

[`Rectangle`](Rectangle.md).[`widthInPixels`](Rectangle.md#widthinpixels)

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

[`Rectangle`](Rectangle.md).[`zIndex`](Rectangle.md#zindex)

***

### HORIZONTAL\_ALIGNMENT\_CENTER

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_CENTER**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2799](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2799)

HORIZONTAL_ALIGNMENT_CENTER

##### Returns

`number`

#### Inherited from

[`Rectangle`](Rectangle.md).[`HORIZONTAL_ALIGNMENT_CENTER`](Rectangle.md#horizontal_alignment_center)

***

### HORIZONTAL\_ALIGNMENT\_LEFT

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_LEFT**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2789](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2789)

HORIZONTAL_ALIGNMENT_LEFT

##### Returns

`number`

#### Inherited from

[`Rectangle`](Rectangle.md).[`HORIZONTAL_ALIGNMENT_LEFT`](Rectangle.md#horizontal_alignment_left)

***

### HORIZONTAL\_ALIGNMENT\_RIGHT

#### Get Signature

> **get** `static` **HORIZONTAL\_ALIGNMENT\_RIGHT**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2794](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2794)

HORIZONTAL_ALIGNMENT_RIGHT

##### Returns

`number`

#### Inherited from

[`Rectangle`](Rectangle.md).[`HORIZONTAL_ALIGNMENT_RIGHT`](Rectangle.md#horizontal_alignment_right)

***

### VERTICAL\_ALIGNMENT\_BOTTOM

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_BOTTOM**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2809](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2809)

VERTICAL_ALIGNMENT_BOTTOM

##### Returns

`number`

#### Inherited from

[`Rectangle`](Rectangle.md).[`VERTICAL_ALIGNMENT_BOTTOM`](Rectangle.md#vertical_alignment_bottom)

***

### VERTICAL\_ALIGNMENT\_CENTER

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_CENTER**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2814](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2814)

VERTICAL_ALIGNMENT_CENTER

##### Returns

`number`

#### Inherited from

[`Rectangle`](Rectangle.md).[`VERTICAL_ALIGNMENT_CENTER`](Rectangle.md#vertical_alignment_center)

***

### VERTICAL\_ALIGNMENT\_TOP

#### Get Signature

> **get** `static` **VERTICAL\_ALIGNMENT\_TOP**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:2804](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L2804)

VERTICAL_ALIGNMENT_TOP

##### Returns

`number`

#### Inherited from

[`Rectangle`](Rectangle.md).[`VERTICAL_ALIGNMENT_TOP`](Rectangle.md#vertical_alignment_top)

## Methods

### \_flagDescendantsAsMatrixDirty()

> **\_flagDescendantsAsMatrixDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L96)

#### Returns

`void`

#### Overrides

`Rectangle._flagDescendantsAsMatrixDirty`

***

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

[`Rectangle`](Rectangle.md).[`_onPointerPick`](Rectangle.md#_onpointerpick)

***

### addControl()

> **addControl**(`control`): [`Container`](Container.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L71)

Adds a new control to the current container

#### Parameters

##### control

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

defines the control to add

#### Returns

[`Container`](Container.md)

the current container

#### Overrides

[`Rectangle`](Rectangle.md).[`addControl`](Rectangle.md#addcontrol)

***

### blur()

> **blur**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1387)

Function to unfocus a button programmatically

#### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`blur`](Rectangle.md#blur)

***

### clearControls()

> **clearControls**(): [`Container`](Container.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L250)

Removes all controls from the current container

#### Returns

[`Container`](Container.md)

the current container

#### Inherited from

[`Rectangle`](Rectangle.md).[`clearControls`](Rectangle.md#clearcontrols)

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

[`Rectangle`](Rectangle.md).[`clone`](Rectangle.md#clone)

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

[`Rectangle`](Rectangle.md).[`contains`](Rectangle.md#contains)

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

[`Rectangle`](Rectangle.md).[`containsControl`](Rectangle.md#containscontrol)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:701](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L701)

Releases associated resources

#### Returns

`void`

#### Overrides

[`Rectangle`](Rectangle.md).[`dispose`](Rectangle.md#dispose)

***

### focus()

> **focus**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1380)

Function to focus a button programmatically

#### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`focus`](Rectangle.md#focus)

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

[`Rectangle`](Rectangle.md).[`getAscendantOfClass`](Rectangle.md#getascendantofclass)

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

[`Rectangle`](Rectangle.md).[`getChildByName`](Rectangle.md#getchildbyname)

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

[`Rectangle`](Rectangle.md).[`getChildByType`](Rectangle.md#getchildbytype)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L314)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

[`Rectangle`](Rectangle.md).[`getClassName`](Rectangle.md#getclassname)

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

[`Rectangle`](Rectangle.md).[`getDescendants`](Rectangle.md#getdescendants)

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

[`Rectangle`](Rectangle.md).[`getDescendantsToRef`](Rectangle.md#getdescendantstoref)

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

[`Rectangle`](Rectangle.md).[`getDimension`](Rectangle.md#getdimension)

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

[`Rectangle`](Rectangle.md).[`getLocalCoordinates`](Rectangle.md#getlocalcoordinates)

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

[`Rectangle`](Rectangle.md).[`getLocalCoordinatesToRef`](Rectangle.md#getlocalcoordinatestoref)

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

[`Rectangle`](Rectangle.md).[`getParentLocalCoordinates`](Rectangle.md#getparentlocalcoordinates)

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

[`Rectangle`](Rectangle.md).[`isAscendant`](Rectangle.md#isascendant)

***

### isDimensionFullyDefined()

> **isDimensionFullyDefined**(`dim`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:664](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L664)

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

[`Rectangle`](Rectangle.md).[`isDimensionFullyDefined`](Rectangle.md#isdimensionfullydefined)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:741](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L741)

Returns true if the control is ready to be used

#### Returns

`boolean`

#### Inherited from

[`Rectangle`](Rectangle.md).[`isReady`](Rectangle.md#isready)

***

### keepsFocusWith()

> **keepsFocusWith**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)[]\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1373)

Function called to get the list of controls that should not steal the focus from this control

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)[]\>

an array of controls

#### Inherited from

[`Rectangle`](Rectangle.md).[`keepsFocusWith`](Rectangle.md#keepsfocuswith)

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

[`Rectangle`](Rectangle.md).[`linkWithMesh`](Rectangle.md#linkwithmesh)

***

### markAllAsDirty()

> **markAllAsDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/control.ts:1447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/control.ts#L1447)

Mark the element and its children as dirty

#### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`markAllAsDirty`](Rectangle.md#markallasdirty)

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

[`Rectangle`](Rectangle.md).[`markAsDirty`](Rectangle.md#markasdirty)

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

[`Rectangle`](Rectangle.md).[`moveToVector3`](Rectangle.md#movetovector3)

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

[`Rectangle`](Rectangle.md).[`parse`](Rectangle.md#parse)

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

[`Rectangle`](Rectangle.md).[`processKeyboard`](Rectangle.md#processkeyboard)

***

### removeControl()

> **removeControl**(`control`): [`Container`](Container.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L86)

Removes a control from the current container

#### Parameters

##### control

[`Control`](Control.md)

defines the control to remove

#### Returns

[`Container`](Container.md)

the current container

#### Overrides

[`Rectangle`](Rectangle.md).[`removeControl`](Rectangle.md#removecontrol)

***

### resetWindow()

> **resetWindow**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L242)

Reset the scroll viewer window to initial size

#### Returns

`void`

***

### serialize()

> **serialize**(`serializationObject`, `force?`, `allowCanvas?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/container.ts:682](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/container.ts#L682)

Serializes the current control

#### Parameters

##### serializationObject

`any`

defined the JSON serialized object

##### force?

`boolean` = `false`

force serialization even if isSerializable === false

##### allowCanvas?

`boolean` = `true`

defines if the control is allowed to use a Canvas2D object to serialize (true by default)

#### Returns

`void`

#### Inherited from

[`Rectangle`](Rectangle.md).[`serialize`](Rectangle.md#serialize)

***

### setBucketSizes()

> **setBucketSizes**(`width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/scrollViewers/scrollViewer.ts#L136)

Sets the bucket sizes.
When freezeControls is true, setting a non-zero bucket size will improve performances by updating only
controls that are visible. The bucket sizes is used to subdivide (internally) the window area to smaller areas into which
controls are dispatched. So, the size should be roughly equals to the mean size of all the controls of
the window. To disable the usage of buckets, sets either width or height (or both) to 0.
Please note that using this option will raise the memory usage (the higher the bucket sizes, the less memory
used), that's why it is not enabled by default.

#### Parameters

##### width

`number`

width of the bucket

##### height

`number`

height of the bucket

#### Returns

`void`

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

[`Rectangle`](Rectangle.md).[`setPadding`](Rectangle.md#setpadding)

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

[`Rectangle`](Rectangle.md).[`setPaddingInPixels`](Rectangle.md#setpaddinginpixels)

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

[`Rectangle`](Rectangle.md).[`Parse`](Rectangle.md#parse-1)
