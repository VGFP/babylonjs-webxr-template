[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GamepadManager

# Class: GamepadManager

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepadManager.ts#L13)

Manager for handling gamepads

## Constructors

### Constructor

> **new GamepadManager**(`_scene?`): `GamepadManager`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepadManager.ts#L39)

Initializes the gamepad manager

#### Parameters

##### \_scene?

[`Scene`](Scene.md)

BabylonJS scene

#### Returns

`GamepadManager`

## Properties

### onGamepadConnectedObservable

> **onGamepadConnectedObservable**: [`Observable`](Observable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepadManager.ts#L25)

observable to be triggered when the gamepad controller has been connected

***

### onGamepadDisconnectedObservable

> **onGamepadDisconnectedObservable**: [`Observable`](Observable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepadManager.ts#L30)

observable to be triggered when the gamepad controller has been disconnected

## Accessors

### gamepads

#### Get Signature

> **get** **gamepads**(): [`Gamepad`](Gamepad.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepadManager.ts#L120)

The gamepads in the game pad manager

##### Returns

[`Gamepad`](Gamepad.md)[]

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepadManager.ts#L142)

Disposes the gamepad manager

#### Returns

`void`

***

### getGamepadByType()

> **getGamepadByType**(`type?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepadManager.ts#L129)

Get the gamepad controllers based on type

#### Parameters

##### type?

`number` = `Gamepad.XBOX`

The type of gamepad controller

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Gamepad`](Gamepad.md)\>

Nullable gamepad
