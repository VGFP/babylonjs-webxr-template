[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GenericPad

# Class: GenericPad

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L223)

Represents a generic gamepad

## Extends

- [`Gamepad`](Gamepad.md)

## Constructors

### Constructor

> **new GenericPad**(`id`, `index`, `browserGamepad`): `GenericPad`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L258)

Initializes the generic gamepad

#### Parameters

##### id

`string`

The id of the generic gamepad

##### index

`number`

The index of the generic gamepad

##### browserGamepad

`any`

The browser gamepad

#### Returns

`GenericPad`

#### Overrides

[`Gamepad`](Gamepad.md).[`constructor`](Gamepad.md#constructor)

## Properties

### browserGamepad

> **browserGamepad**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L132)

The browser gamepad

#### Inherited from

[`Gamepad`](Gamepad.md).[`browserGamepad`](Gamepad.md#browsergamepad)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L124)

The id of the gamepad

#### Inherited from

[`Gamepad`](Gamepad.md).[`id`](Gamepad.md#id)

***

### index

> **index**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L128)

The index of the gamepad

#### Inherited from

[`Gamepad`](Gamepad.md).[`index`](Gamepad.md#index)

***

### onButtonDownObservable

> **onButtonDownObservable**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L231)

Observable triggered when a button has been pressed

***

### onButtonUpObservable

> **onButtonUpObservable**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L235)

Observable triggered when a button has been released

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L54)

Specifies what type of gamepad this represents

#### Inherited from

[`Gamepad`](Gamepad.md).[`type`](Gamepad.md#type)

***

### DUALSHOCK

> `static` **DUALSHOCK**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L96)

Represents an Dual Shock controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`DUALSHOCK`](Gamepad.md#dualshock)

***

### GAMEPAD

> `static` **GAMEPAD**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L80)

Represents a gamepad controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`GAMEPAD`](Gamepad.md#gamepad)

***

### GENERIC

> `static` **GENERIC**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L84)

Represents a generic controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`GENERIC`](Gamepad.md#generic)

***

### POSE\_ENABLED

> `static` **POSE\_ENABLED**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L92)

Represents a pose-enabled controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`POSE_ENABLED`](Gamepad.md#pose_enabled)

***

### XBOX

> `static` **XBOX**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L88)

Represents an XBox controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`XBOX`](Gamepad.md#xbox)

## Accessors

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L106)

Specifies if the gamepad has been connected

##### Returns

`boolean`

#### Inherited from

[`Gamepad`](Gamepad.md).[`isConnected`](Gamepad.md#isconnected)

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

#### Inherited from

[`Gamepad`](Gamepad.md).[`leftStick`](Gamepad.md#leftstick)

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

#### Inherited from

[`Gamepad`](Gamepad.md).[`rightStick`](Gamepad.md#rightstick)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L297)

Disposes the generic gamepad

#### Returns

`void`

#### Overrides

[`Gamepad`](Gamepad.md).[`dispose`](Gamepad.md#dispose)

***

### onbuttondown()

> **onbuttondown**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L241)

Callback triggered when a button has been pressed

#### Parameters

##### callback

(`buttonPressed`) => `void`

Called when a button has been pressed

#### Returns

`void`

***

### onbuttonup()

> **onbuttonup**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L248)

Callback triggered when a button has been released

#### Parameters

##### callback

(`buttonReleased`) => `void`

Called when a button has been released

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

#### Inherited from

[`Gamepad`](Gamepad.md).[`onleftstickchanged`](Gamepad.md#onleftstickchanged)

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

#### Inherited from

[`Gamepad`](Gamepad.md).[`onrightstickchanged`](Gamepad.md#onrightstickchanged)

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepad.ts#L287)

Updates the generic gamepad

#### Returns

`void`

#### Overrides

[`Gamepad`](Gamepad.md).[`update`](Gamepad.md#update)
