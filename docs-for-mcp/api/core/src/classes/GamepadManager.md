[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GamepadManager

# Class: GamepadManager

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepadManager.ts#L14)

Manager for handling gamepads

## Constructors

### Constructor

> **new GamepadManager**(`_scene?`): `GamepadManager`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepadManager.ts#L40)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepadManager.ts#L26)

observable to be triggered when the gamepad controller has been connected

***

### onGamepadDisconnectedObservable

> **onGamepadDisconnectedObservable**: [`Observable`](Observable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepadManager.ts#L31)

observable to be triggered when the gamepad controller has been disconnected

## Accessors

### gamepads

#### Get Signature

> **get** **gamepads**(): [`Gamepad`](Gamepad.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepadManager.ts#L123)

The gamepads in the game pad manager

##### Returns

[`Gamepad`](Gamepad.md)[]

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepadManager.ts#L145)

Disposes the gamepad manager

#### Returns

`void`

***

### getGamepadByType()

> **getGamepadByType**(`type?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadManager.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepadManager.ts#L132)

Get the gamepad controllers based on type

#### Parameters

##### type?

`number` = `Gamepad.XBOX`

The type of gamepad controller

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Gamepad`](Gamepad.md)\>

Nullable gamepad
