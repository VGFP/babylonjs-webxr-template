[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Xbox360Pad

# Class: Xbox360Pad

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L44)

Defines a XBox360 gamepad

## Extends

- [`Gamepad`](Gamepad.md)

## Constructors

### Constructor

> **new Xbox360Pad**(`id`, `index`, `gamepad`, `xboxOne?`): `Xbox360Pad`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L90)

Creates a new XBox360 gamepad object

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

##### xboxOne?

`boolean` = `false`

defines if it is a XBox One gamepad

#### Returns

`Xbox360Pad`

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

> **onButtonDownObservable**: [`Observable`](Observable.md)\<[`Xbox360Button`](../enumerations/Xbox360Button.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L57)

Observable raised when a button is pressed

***

### onButtonUpObservable

> **onButtonUpObservable**: [`Observable`](Observable.md)\<[`Xbox360Button`](../enumerations/Xbox360Button.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L59)

Observable raised when a button is released

***

### onPadDownObservable

> **onPadDownObservable**: [`Observable`](Observable.md)\<[`Xbox360Dpad`](../enumerations/Xbox360Dpad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L61)

Observable raised when a pad is pressed

***

### onPadUpObservable

> **onPadUpObservable**: [`Observable`](Observable.md)\<[`Xbox360Dpad`](../enumerations/Xbox360Dpad.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L63)

Observable raised when a pad is released

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

### buttonA

#### Get Signature

> **get** **buttonA**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L219)

Gets the value of the `A` button

##### Returns

`number`

#### Set Signature

> **set** **buttonA**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L225)

Sets the value of the `A` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonB

#### Get Signature

> **get** **buttonB**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L232)

Gets the value of the `B` button

##### Returns

`number`

#### Set Signature

> **set** **buttonB**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L238)

Sets the value of the `B` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonBack

#### Get Signature

> **get** **buttonBack**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L284)

Gets the value of the `Back` button

##### Returns

`number`

#### Set Signature

> **set** **buttonBack**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L290)

Sets the value of the `Back` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonLB

#### Get Signature

> **get** **buttonLB**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L298)

Gets the value of the `Left` button

##### Returns

`number`

#### Set Signature

> **set** **buttonLB**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L305)

Sets the value of the `Left` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonLeftStick

#### Get Signature

> **get** **buttonLeftStick**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L327)

Gets the value of the Left joystick

##### Returns

`number`

#### Set Signature

> **set** **buttonLeftStick**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L333)

Sets the value of the Left joystick

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonRB

#### Get Signature

> **get** **buttonRB**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L313)

Gets the value of the `Right` button

##### Returns

`number`

#### Set Signature

> **set** **buttonRB**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L320)

Sets the value of the `Right` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonRightStick

#### Get Signature

> **get** **buttonRightStick**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L340)

Gets the value of the Right joystick

##### Returns

`number`

#### Set Signature

> **set** **buttonRightStick**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L346)

Sets the value of the Right joystick

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonStart

#### Get Signature

> **get** **buttonStart**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L271)

Gets the value of the `Start` button

##### Returns

`number`

#### Set Signature

> **set** **buttonStart**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L277)

Sets the value of the `Start` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonX

#### Get Signature

> **get** **buttonX**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L245)

Gets the value of the `X` button

##### Returns

`number`

#### Set Signature

> **set** **buttonX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L251)

Sets the value of the `X` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### buttonY

#### Get Signature

> **get** **buttonY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L258)

Gets the value of the `Y` button

##### Returns

`number`

#### Set Signature

> **set** **buttonY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L264)

Sets the value of the `Y` button

##### Parameters

###### value

`number`

##### Returns

`void`

***

### dPadDown

#### Get Signature

> **get** **dPadDown**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L366)

Gets the value of D-pad down

##### Returns

`number`

#### Set Signature

> **set** **dPadDown**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L372)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L379)

Gets the value of D-pad left

##### Returns

`number`

#### Set Signature

> **set** **dPadLeft**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:385](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L385)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:392](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L392)

Gets the value of D-pad right

##### Returns

`number`

#### Set Signature

> **set** **dPadRight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:398](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L398)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L353)

Gets the value of D-pad up

##### Returns

`number`

#### Set Signature

> **set** **dPadUp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L359)

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

### leftTrigger

#### Get Signature

> **get** **leftTrigger**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L115)

Gets the left trigger value

##### Returns

`number`

#### Set Signature

> **set** **leftTrigger**(`newValue`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L121)

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

***

### rightTrigger

#### Get Signature

> **get** **rightTrigger**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L131)

Gets the right trigger value

##### Returns

`number`

#### Set Signature

> **set** **rightTrigger**(`newValue`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L137)

Sets the right trigger value

##### Parameters

###### newValue

`number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L447)

Disposes the gamepad

#### Returns

`void`

#### Overrides

[`Gamepad`](Gamepad.md).[`dispose`](Gamepad.md#dispose)

***

### onbuttondown()

> **onbuttondown**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L148)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L156)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L164)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L172)

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

### onlefttriggerchanged()

> **onlefttriggerchanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L100)

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

### onrighttriggerchanged()

> **onrighttriggerchanged**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L108)

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

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/xboxGamepad.ts:405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/xboxGamepad.ts#L405)

Force the gamepad to synchronize with device values

#### Returns

`void`

#### Overrides

[`Gamepad`](Gamepad.md).[`update`](Gamepad.md#update)
