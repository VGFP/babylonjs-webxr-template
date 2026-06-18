[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VirtualJoystick

# Class: VirtualJoystick

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L63)

Class used to define virtual joystick (used in touch mode)

## Constructors

### Constructor

> **new VirtualJoystick**(`leftJoystick?`, `customizations?`): `VirtualJoystick`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L147)

Creates a new virtual joystick

#### Parameters

##### leftJoystick?

`boolean`

defines that the joystick is for left hand (false by default)

##### customizations?

`Partial`\<`IVirtualJoystickCustomizations`\>

Defines the options we want to customize the VirtualJoystick

#### Returns

`VirtualJoystick`

## Properties

### deltaPosition

> **deltaPosition**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L75)

Gets the offset value for the position (ie. the change of the position value)

***

### limitToContainer

> **limitToContainer**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L88)

boolean indicating whether or not the joystick's puck's movement should be limited to the joystick's container area

***

### pressed

> **pressed**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L79)

Gets a boolean indicating if the virtual joystick was pressed

***

### reverseLeftRight

> **reverseLeftRight**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L67)

Gets or sets a boolean indicating that left and right values must be inverted

***

### reverseUpDown

> **reverseUpDown**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L71)

Gets or sets a boolean indicating that up and down values must be inverted

***

### Canvas

> `static` **Canvas**: [`Nullable`](../type-aliases/Nullable.md)\<`HTMLCanvasElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L83)

Canvas the virtual joystick will render onto, default z-index of this is 5

## Accessors

### alwaysVisible

#### Get Signature

> **get** **alwaysVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:474](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L474)

##### Returns

`boolean`

#### Set Signature

> **set** **alwaysVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:459](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L459)

Defines whether or not the joystick container is always visible

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### containerSize

#### Get Signature

> **get** **containerSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L431)

##### Returns

`number`

#### Set Signature

> **set** **containerSize**(`newSize`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:426](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L426)

Size of the joystick's container

##### Parameters

###### newSize

`number`

##### Returns

`void`

***

### puckSize

#### Get Signature

> **get** **puckSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:443](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L443)

##### Returns

`number`

#### Set Signature

> **set** **puckSize**(`newSize`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L438)

Size of the joystick's puck

##### Parameters

###### newSize

`number`

##### Returns

`void`

## Methods

### clearPosition()

> **clearPosition**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L450)

Clears the set position of the joystick

#### Returns

`void`

***

### releaseCanvas()

> **releaseCanvas**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L673)

Release internal HTML canvas

#### Returns

`void`

***

### setActionOnTouch()

> **setActionOnTouch**(`action`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L496)

Defines a callback to call when the joystick is touched

#### Parameters

##### action

() => `any`

defines the callback

#### Returns

`void`

***

### setAxisForLeftRight()

> **setAxisForLeftRight**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:504](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L504)

Defines which axis you'd like to control for left & right

#### Parameters

##### axis

[`JoystickAxis`](../enumerations/JoystickAxis.md)

defines the axis to use

#### Returns

`void`

***

### setAxisForUpDown()

> **setAxisForUpDown**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:521](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L521)

Defines which axis you'd like to control for up & down

#### Parameters

##### axis

[`JoystickAxis`](../enumerations/JoystickAxis.md)

defines the axis to use

#### Returns

`void`

***

### setContainerImage()

> **setContainerImage**(`urlPath`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L561)

Loads `urlPath` to be used for the container's image

#### Parameters

##### urlPath

`string`

defines the urlPath of an image to use

#### Returns

`void`

***

### setJoystickColor()

> **setJoystickColor**(`newColor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:419](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L419)

Change the color of the virtual joystick

#### Parameters

##### newColor

`string`

a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000")

#### Returns

`void`

***

### setJoystickSensibility()

> **setJoystickSensibility**(`newJoystickSensibility`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L281)

Defines joystick sensibility (ie. the ratio between a physical move and virtual joystick position change)

#### Parameters

##### newJoystickSensibility

`number`

defines the new sensibility

#### Returns

`void`

***

### setPosition()

> **setPosition**(`x`, `y`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:483](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L483)

Sets the constant position of the Joystick container

#### Parameters

##### x

`number`

X axis coordinate

##### y

`number`

Y axis coordinate

#### Returns

`void`

***

### setPuckImage()

> **setPuckImage**(`urlPath`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/virtualJoystick.ts:572](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/virtualJoystick.ts#L572)

Loads `urlPath` to be used for the puck's image

#### Parameters

##### urlPath

`string`

defines the urlPath of an image to use

#### Returns

`void`
