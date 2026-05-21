[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Gamepad

# Class: Gamepad

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L50)

Represents a gamepad

## Extended by

- [`GenericPad`](GenericPad.md)
- [`Xbox360Pad`](Xbox360Pad.md)
- [`DualShockPad`](DualShockPad.md)

## Constructors

### Constructor

> **new Gamepad**(`id`, `index`, `browserGamepad`, `leftStickX?`, `leftStickY?`, `rightStickX?`, `rightStickY?`): `Gamepad`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L120)

Initializes the gamepad

#### Parameters

##### id

`string`

The id of the gamepad

##### index

`number`

The index of the gamepad

##### browserGamepad

`any`

The browser gamepad

##### leftStickX?

`number` = `0`

The x component of the left joystick

##### leftStickY?

`number` = `1`

The y component of the left joystick

##### rightStickX?

`number` = `2`

The x component of the right joystick

##### rightStickY?

`number` = `3`

The y component of the right joystick

#### Returns

`Gamepad`

## Properties

### browserGamepad

> **browserGamepad**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L132)

The browser gamepad

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L124)

The id of the gamepad

***

### index

> **index**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L128)

The index of the gamepad

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L54)

Specifies what type of gamepad this represents

***

### DUALSHOCK

> `static` **DUALSHOCK**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L96)

Represents an Dual Shock controller

***

### GAMEPAD

> `static` **GAMEPAD**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L80)

Represents a gamepad controller

***

### GENERIC

> `static` **GENERIC**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L84)

Represents a generic controller

***

### POSE\_ENABLED

> `static` **POSE\_ENABLED**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L92)

Represents a pose-enabled controller

***

### XBOX

> `static` **XBOX**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L88)

Represents an XBox controller

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L106)

Specifies if the gamepad has been connected

##### Returns

`boolean`

***

### leftStick

#### Get Signature

> **get** **leftStick**(): [`StickValues`](StickValues.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L170)

Gets the left joystick

##### Returns

[`StickValues`](StickValues.md)

#### Set Signature

> **set** **leftStick**(`newValues`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L176)

Sets the left joystick values

##### Parameters

###### newValues

[`StickValues`](StickValues.md)

##### Returns

`void`

***

### rightStick

#### Get Signature

> **get** **rightStick**(): [`StickValues`](StickValues.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L185)

Gets the right joystick

##### Returns

[`StickValues`](StickValues.md)

#### Set Signature

> **set** **rightStick**(`newValues`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L191)

Sets the right joystick value

##### Parameters

###### newValues

[`StickValues`](StickValues.md)

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L217)

Disposes the gamepad

#### Returns

`void`

***

### onleftstickchanged()

> **onleftstickchanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L155)

Callback triggered when the left joystick has changed

#### Parameters

##### callback

(`values`) => `void`

callback to trigger

#### Returns

`void`

***

### onrightstickchanged()

> **onrightstickchanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L163)

Callback triggered when the right joystick has changed

#### Parameters

##### callback

(`values`) => `void`

callback to trigger

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L202)

Updates the gamepad joystick positions

#### Returns

`void`
