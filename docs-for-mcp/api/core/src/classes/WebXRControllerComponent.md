[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRControllerComponent

# Class: WebXRControllerComponent

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L57)

This class represents a single component (for example button or thumbstick) of a motion controller

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new WebXRControllerComponent**(`id`, `type`, `_buttonIndex?`, `_axesIndices?`): `WebXRControllerComponent`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L109)

Creates a new component for a motion controller.
It is created by the motion controller itself

#### Parameters

##### id

`string`

the id of this component

##### type

[`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md)

the type of the component

##### \_buttonIndex?

`number` = `-1`

index in the buttons array of the gamepad

##### \_axesIndices?

`number`[] = `[]`

indices of the values in the axes array of the gamepad

#### Returns

`WebXRControllerComponent`

## Properties

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L113)

the id of this component

***

### onAxisValueChangedObservable

> **onAxisValueChangedObservable**: [`Observable`](Observable.md)\<\{ `x`: `number`; `y`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L93)

If axes are available for this component (like a touchpad or thumbstick) the observers will be notified when
the axes data changes

***

### onButtonStateChangedObservable

> **onButtonStateChangedObservable**: [`Observable`](Observable.md)\<`WebXRControllerComponent`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L98)

Observers registered here will be triggered when the state of a button changes
State change is either pressed / touched / value

***

### type

> **type**: [`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L117)

the type of the component

***

### BUTTON\_TYPE

> `static` **BUTTON\_TYPE**: [`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md) = `"button"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L71)

button component type

***

### SQUEEZE\_TYPE

> `static` **SQUEEZE\_TYPE**: [`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md) = `"squeeze"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L75)

squeeze component type

***

### THUMBSTICK\_TYPE

> `static` **THUMBSTICK\_TYPE**: [`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md) = `"thumbstick"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L79)

Thumbstick component type

***

### TOUCHPAD\_TYPE

> `static` **TOUCHPAD\_TYPE**: [`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md) = `"touchpad"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L83)

Touchpad component type

***

### TRIGGER\_TYPE

> `static` **TRIGGER\_TYPE**: [`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md) = `"trigger"`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L87)

trigger component type

## Accessors

### axes

#### Get Signature

> **get** **axes**(): [`IWebXRMotionControllerAxesValue`](../interfaces/IWebXRMotionControllerAxesValue.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L125)

The current axes data. If this component has no axes it will still return an object { x: 0, y: 0 }

##### Returns

[`IWebXRMotionControllerAxesValue`](../interfaces/IWebXRMotionControllerAxesValue.md)

***

### changes

#### Get Signature

> **get** **changes**(): [`IWebXRMotionControllerComponentChanges`](../interfaces/IWebXRMotionControllerComponentChanges.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L132)

Get the changes. Elements will be populated only if they changed with their previous and current value

##### Returns

[`IWebXRMotionControllerComponentChanges`](../interfaces/IWebXRMotionControllerComponentChanges.md)

***

### hasChanges

#### Get Signature

> **get** **hasChanges**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L139)

Return whether or not the component changed the last frame

##### Returns

`boolean`

***

### pressed

#### Get Signature

> **get** **pressed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L146)

is the button currently pressed

##### Returns

`boolean`

***

### touched

#### Get Signature

> **get** **touched**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L153)

is the button currently touched

##### Returns

`boolean`

***

### value

#### Get Signature

> **get** **value**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L160)

Get the current value of this component

##### Returns

`number`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L167)

Dispose this component

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### isAxes()

> **isAxes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L176)

Are there axes correlating to this component

#### Returns

`boolean`

true is axes data is available

***

### isButton()

> **isButton**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L184)

Is this component a button (hence - pressable)

#### Returns

`boolean`

true if can be pressed

***

### update()

> **update**(`nativeController`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/motionController/webXRControllerComponent.ts#L192)

update this component using the gamepad object it is in. Called on every frame

#### Parameters

##### nativeController

[`IMinimalMotionControllerObject`](../interfaces/IMinimalMotionControllerObject.md)

the native gamepad controller object

#### Returns

`void`
