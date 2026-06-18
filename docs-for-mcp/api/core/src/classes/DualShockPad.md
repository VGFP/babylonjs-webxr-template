[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DualShockPad

# Class: DualShockPad

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L45)

Defines a DualShock gamepad

## Extends

- [`Gamepad`](Gamepad.md)

## Constructors

### Constructor

> **new DualShockPad**(`id`, `index`, `gamepad`): `DualShockPad`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L88)

Creates a new DualShock gamepad object

#### Parameters

##### id

`string`

defines the id of this gamepad

##### index

`number`

defines its index

##### gamepad

`any`

defines the internal HTML gamepad object

#### Returns

`DualShockPad`

#### Overrides

[`Gamepad`](Gamepad.md).[`constructor`](Gamepad.md#constructor)

## Properties

### browserGamepad

> **browserGamepad**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L132)

The browser gamepad

#### Inherited from

[`Gamepad`](Gamepad.md).[`browserGamepad`](Gamepad.md#browsergamepad)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L124)

The id of the gamepad

#### Inherited from

[`Gamepad`](Gamepad.md).[`id`](Gamepad.md#id)

***

### index

> **index**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L128)

The index of the gamepad

#### Inherited from

[`Gamepad`](Gamepad.md).[`index`](Gamepad.md#index)

***

### onButtonDownObservable

> **onButtonDownObservable**: [`Observable`](Observable.md)\<[`DualShockButton`](../enumerations/DualShockButton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L58)

Observable raised when a button is pressed

***

### onButtonUpObservable

> **onButtonUpObservable**: [`Observable`](Observable.md)\<[`DualShockButton`](../enumerations/DualShockButton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L60)

Observable raised when a button is released

***

### onPadDownObservable

> **onPadDownObservable**: [`Observable`](Observable.md)\<[`DualShockDpad`](../enumerations/DualShockDpad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L62)

Observable raised when a pad is pressed

***

### onPadUpObservable

> **onPadUpObservable**: [`Observable`](Observable.md)\<[`DualShockDpad`](../enumerations/DualShockDpad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L64)

Observable raised when a pad is released

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L54)

Specifies what type of gamepad this represents

#### Inherited from

[`Gamepad`](Gamepad.md).[`type`](Gamepad.md#type)

***

### DUALSHOCK

> `static` **DUALSHOCK**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L96)

Represents an Dual Shock controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`DUALSHOCK`](Gamepad.md#dualshock)

***

### GAMEPAD

> `static` **GAMEPAD**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:80](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L80)

Represents a gamepad controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`GAMEPAD`](Gamepad.md#gamepad)

***

### GENERIC

> `static` **GENERIC**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L84)

Represents a generic controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`GENERIC`](Gamepad.md#generic)

***

### POSE\_ENABLED

> `static` **POSE\_ENABLED**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L92)

Represents a pose-enabled controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`POSE_ENABLED`](Gamepad.md#pose_enabled)

***

### XBOX

> `static` **XBOX**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L88)

Represents an XBox controller

#### Inherited from

[`Gamepad`](Gamepad.md).[`XBOX`](Gamepad.md#xbox)

## Accessors

### buttonCircle

#### Get Signature

> **get** **buttonCircle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L229)

Gets the value of the `Circle` button

##### Returns

`number`

#### Set Signature

> **set** **buttonCircle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L235)

Sets the value of the `Circle` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonCross

#### Get Signature

> **get** **buttonCross**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L216)

Gets the value of the `Cross` button

##### Returns

`number`

#### Set Signature

> **set** **buttonCross**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L222)

Sets the value of the `Cross` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonL1

#### Get Signature

> **get** **buttonL1**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L294)

Gets the value of the `L1` button

##### Returns

`number`

#### Set Signature

> **set** **buttonL1**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L300)

Sets the value of the `L1` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonLeftStick

#### Get Signature

> **get** **buttonLeftStick**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L320)

Gets the value of the Left joystick

##### Returns

`number`

#### Set Signature

> **set** **buttonLeftStick**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L326)

Sets the value of the Left joystick

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonOptions

#### Get Signature

> **get** **buttonOptions**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L268)

Gets the value of the `Options` button

##### Returns

`number`

#### Set Signature

> **set** **buttonOptions**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L274)

Sets the value of the `Options` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonR1

#### Get Signature

> **get** **buttonR1**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L307)

Gets the value of the `R1` button

##### Returns

`number`

#### Set Signature

> **set** **buttonR1**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L313)

Sets the value of the `R1` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonRightStick

#### Get Signature

> **get** **buttonRightStick**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L333)

Gets the value of the Right joystick

##### Returns

`number`

#### Set Signature

> **set** **buttonRightStick**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L339)

Sets the value of the Right joystick

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonShare

#### Get Signature

> **get** **buttonShare**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L281)

Gets the value of the `Share` button

##### Returns

`number`

#### Set Signature

> **set** **buttonShare**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L287)

Sets the value of the `Share` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonSquare

#### Get Signature

> **get** **buttonSquare**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L242)

Gets the value of the `Square` button

##### Returns

`number`

#### Set Signature

> **set** **buttonSquare**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L248)

Sets the value of the `Square` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonTriangle

#### Get Signature

> **get** **buttonTriangle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L255)

Gets the value of the `Triangle` button

##### Returns

`number`

#### Set Signature

> **set** **buttonTriangle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L261)

Sets the value of the `Triangle` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dPadDown

#### Get Signature

> **get** **dPadDown**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L359)

Gets the value of D-pad down

##### Returns

`number`

#### Set Signature

> **set** **dPadDown**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L365)

Sets the value of D-pad down

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dPadLeft

#### Get Signature

> **get** **dPadLeft**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L372)

Gets the value of D-pad left

##### Returns

`number`

#### Set Signature

> **set** **dPadLeft**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L378)

Sets the value of D-pad left

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dPadRight

#### Get Signature

> **get** **dPadRight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L385)

Gets the value of D-pad right

##### Returns

`number`

#### Set Signature

> **set** **dPadRight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:391](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L391)

Sets the value of D-pad right

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dPadUp

#### Get Signature

> **get** **dPadUp**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:346](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L346)

Gets the value of D-pad up

##### Returns

`number`

#### Set Signature

> **set** **dPadUp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L352)

Sets the value of D-pad up

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isConnected

#### Get Signature

> **get** **isConnected**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L106)

Specifies if the gamepad has been connected

##### Returns

`boolean`

#### Inherited from

[`Gamepad`](Gamepad.md).[`isConnected`](Gamepad.md#isconnected)

***

### leftStick

#### Get Signature

> **get** **leftStick**(): [`StickValues`](StickValues.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L170)

Gets the left joystick

##### Returns

[`StickValues`](StickValues.md)

#### Set Signature

> **set** **leftStick**(`newValues`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L176)

Sets the left joystick values

##### Parameters

###### newValues

[`StickValues`](StickValues.md)

##### Returns

`void`

#### Inherited from

[`Gamepad`](Gamepad.md).[`leftStick`](Gamepad.md#leftstick)

***

### leftTrigger

#### Get Signature

> **get** **leftTrigger**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L112)

Gets the left trigger value

##### Returns

`number`

#### Set Signature

> **set** **leftTrigger**(`newValue`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L118)

Sets the left trigger value

##### Parameters

###### newValue

`number`

##### Returns

`void`

***

### rightStick

#### Get Signature

> **get** **rightStick**(): [`StickValues`](StickValues.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L185)

Gets the right joystick

##### Returns

[`StickValues`](StickValues.md)

#### Set Signature

> **set** **rightStick**(`newValues`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L191)

Sets the right joystick value

##### Parameters

###### newValues

[`StickValues`](StickValues.md)

##### Returns

`void`

#### Inherited from

[`Gamepad`](Gamepad.md).[`rightStick`](Gamepad.md#rightstick)

***

### rightTrigger

#### Get Signature

> **get** **rightTrigger**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L128)

Gets the right trigger value

##### Returns

`number`

#### Set Signature

> **set** **rightTrigger**(`newValue`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L134)

Sets the right trigger value

##### Parameters

###### newValue

`number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L421)

Disposes the gamepad

#### Returns

`void`

#### Overrides

[`Gamepad`](Gamepad.md).[`dispose`](Gamepad.md#dispose)

***

### onbuttondown()

> **onbuttondown**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L145)

Defines the callback to call when a button is pressed

#### Parameters

##### callback

(`buttonPressed`) => `void`

defines the callback to use

#### Returns

`void`

***

### onbuttonup()

> **onbuttonup**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L153)

Defines the callback to call when a button is released

#### Parameters

##### callback

(`buttonReleased`) => `void`

defines the callback to use

#### Returns

`void`

***

### ondpaddown()

> **ondpaddown**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L161)

Defines the callback to call when a pad is pressed

#### Parameters

##### callback

(`dPadPressed`) => `void`

defines the callback to use

#### Returns

`void`

***

### ondpadup()

> **ondpadup**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L169)

Defines the callback to call when a pad is released

#### Parameters

##### callback

(`dPadReleased`) => `void`

defines the callback to use

#### Returns

`void`

***

### onleftstickchanged()

> **onleftstickchanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L155)

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

### onlefttriggerchanged()

> **onlefttriggerchanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L97)

Defines the callback to call when left trigger is pressed

#### Parameters

##### callback

(`value`) => `void`

defines the callback to use

#### Returns

`void`

***

### onrightstickchanged()

> **onrightstickchanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepad.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/gamepad.ts#L163)

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

### onrighttriggerchanged()

> **onrighttriggerchanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L105)

Defines the callback to call when right trigger is pressed

#### Parameters

##### callback

(`value`) => `void`

defines the callback to use

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/dualShockGamepad.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gamepads/dualShockGamepad.ts#L398)

Force the gamepad to synchronize with device values

#### Returns

`void`

#### Overrides

[`Gamepad`](Gamepad.md).[`update`](Gamepad.md#update)
