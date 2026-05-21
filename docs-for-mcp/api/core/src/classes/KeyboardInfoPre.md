[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / KeyboardInfoPre

# Class: KeyboardInfoPre

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L43)

This class is used to store keyboard related info for the onPreKeyboardObservable event.
Set the skipOnKeyboardObservable property to true if you want the engine to stop any process after this event is triggered, even not calling onKeyboardObservable

## Extends

- [`KeyboardInfo`](KeyboardInfo.md)

## Constructors

### Constructor

> **new KeyboardInfoPre**(`type`, `event`): `KeyboardInfoPre`

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L66)

Instantiates a new keyboard pre info.
This class is used to store keyboard related info for the onPreKeyboardObservable event.

#### Parameters

##### type

`number`

Defines the type of event (KeyboardEventTypes)

##### event

[`IKeyboardEvent`](../interfaces/IKeyboardEvent.md)

Defines the related dom event

#### Returns

`KeyboardInfoPre`

#### Overrides

[`KeyboardInfo`](KeyboardInfo.md).[`constructor`](KeyboardInfo.md#constructor)

## Properties

### event

> **event**: [`IKeyboardEvent`](../interfaces/IKeyboardEvent.md)

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L74)

Defines the related dom event

#### Inherited from

[`KeyboardInfo`](KeyboardInfo.md).[`event`](KeyboardInfo.md#event)

***

### skipOnKeyboardObservable

> **skipOnKeyboardObservable**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L47)

Defines whether the engine should skip the next onKeyboardObservable associated to this pre.

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L70)

Defines the type of event (KeyboardEventTypes)

#### Inherited from

[`KeyboardInfo`](KeyboardInfo.md).[`type`](KeyboardInfo.md#type)

## Accessors

### skipOnPointerObservable

#### Get Signature

> **get** **skipOnPointerObservable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L53)

Defines whether the engine should skip the next onKeyboardObservable associated to this pre.

##### Deprecated

use skipOnKeyboardObservable property instead

##### Returns

`boolean`

#### Set Signature

> **set** **skipOnPointerObservable**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L56)

##### Parameters

###### value

`boolean`

##### Returns

`void`
