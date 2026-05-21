[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / KeyboardInfo

# Class: KeyboardInfo

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L20)

This class is used to store keyboard related info for the onKeyboardObservable event.

## Extended by

- [`KeyboardInfoPre`](KeyboardInfoPre.md)

## Constructors

### Constructor

> **new KeyboardInfo**(`type`, `event`): `KeyboardInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L27)

Instantiates a new keyboard info.
This class is used to store keyboard related info for the onKeyboardObservable event.

#### Parameters

##### type

`number`

Defines the type of event (KeyboardEventTypes)

##### event

[`IKeyboardEvent`](../interfaces/IKeyboardEvent.md)

Defines the related dom event

#### Returns

`KeyboardInfo`

## Properties

### event

> **event**: [`IKeyboardEvent`](../interfaces/IKeyboardEvent.md)

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L35)

Defines the related dom event

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/keyboardEvents.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/keyboardEvents.ts#L31)

Defines the type of event (KeyboardEventTypes)
