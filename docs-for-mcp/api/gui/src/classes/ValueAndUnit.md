[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / ValueAndUnit

# Class: ValueAndUnit

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:7](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L7)

Class used to specific a value and its associated unit

## Constructors

### Constructor

> **new ValueAndUnit**(`value`, `unit?`, `negativeValueAllowed?`): `ValueAndUnit`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L29)

Creates a new ValueAndUnit

#### Parameters

##### value

`number`

defines the value to store

##### unit?

`number` = `ValueAndUnit.UNITMODE_PIXEL`

defines the unit to store - defaults to ValueAndUnit.UNITMODE_PIXEL

##### negativeValueAllowed?

`boolean` = `true`

defines a boolean indicating if the value can be negative

#### Returns

`ValueAndUnit`

## Properties

### ignoreAdaptiveScaling

> **ignoreAdaptiveScaling**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L16)

Gets or sets a value indicating that this value will not scale accordingly with adaptive scaling property

#### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#adaptive-scaling

***

### negativeValueAllowed

> **negativeValueAllowed**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L34)

defines a boolean indicating if the value can be negative

***

### onChangedObservable

> **onChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L21)

Observable event triggered each time the value or unit changes

## Accessors

### internalValue

#### Get Signature

> **get** **internalValue**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L55)

Gets value (without units)

##### Deprecated

use value property instead

##### Returns

`number`

***

### isPercentage

#### Get Signature

> **get** **isPercentage**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L42)

Gets a boolean indicating if the value is a percentage

##### Returns

`boolean`

***

### isPixel

#### Get Signature

> **get** **isPixel**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L47)

Gets a boolean indicating if the value is store as pixel

##### Returns

`boolean`

***

### unit

#### Get Signature

> **get** **unit**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L73)

Gets units (without value)

##### Returns

`number`

#### Set Signature

> **set** **unit**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L78)

Sets units (without value)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### value

#### Get Signature

> **get** **value**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L60)

Gets value (without units)

##### Returns

`number`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L65)

Sets value (without units)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### UNITMODE\_PERCENTAGE

#### Get Signature

> **get** `static` **UNITMODE\_PERCENTAGE**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L222)

UNITMODE_PERCENTAGE

##### Returns

`number`

***

### UNITMODE\_PIXEL

#### Get Signature

> **get** `static` **UNITMODE\_PIXEL**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L227)

UNITMODE_PIXEL

##### Returns

`number`

## Methods

### fromString()

> **fromString**(`source`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L177)

Store a value parsed from a string

#### Parameters

##### source

`string` \| `number`

defines the source string

#### Returns

`boolean`

true if the value was successfully parsed and updated

***

### getValue()

> **getValue**(`host`): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L121)

Gets the value accordingly to its unit

#### Parameters

##### host

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

defines the root host

#### Returns

`number`

the value

***

### getValueInPixel()

> **getValueInPixel**(`host`, `refValue`): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L91)

Gets value as pixel

#### Parameters

##### host

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

defines the root host

##### refValue

`number`

defines the reference value for percentages

#### Returns

`number`

the value as pixel

***

### toString()

> **toString**(`host`, `decimals?`): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L157)

Gets a string representation of the value

#### Parameters

##### host

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

defines the root host

##### decimals?

`number`

defines an optional number of decimals to display

#### Returns

`string`

a string

***

### updateInPlace()

> **updateInPlace**(`value`, `unit?`): `ValueAndUnit`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/valueAndUnit.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/valueAndUnit.ts#L105)

Update the current value and unit.

#### Parameters

##### value

`number`

defines the value to store

##### unit?

`number` = `ValueAndUnit.UNITMODE_PIXEL`

defines the unit to store

#### Returns

`ValueAndUnit`

the current ValueAndUnit
