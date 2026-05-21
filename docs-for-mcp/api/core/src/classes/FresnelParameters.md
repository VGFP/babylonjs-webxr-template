[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FresnelParameters

# Class: FresnelParameters

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L74)

This represents all the required information to add a fresnel effect on a material:

## See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

## Constructors

### Constructor

> **new FresnelParameters**(`options?`): `FresnelParameters`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L116)

Creates a new FresnelParameters object.

#### Parameters

##### options?

[`IFresnelParametersCreationOptions`](../type-aliases/IFresnelParametersCreationOptions.md) = `{}`

provide your own settings to optionally to override defaults

#### Returns

`FresnelParameters`

## Properties

### bias

> **bias**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L104)

Define bias applied to computed fresnel term

***

### leftColor

> **leftColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L94)

Define the color used on edges (grazing angle)

***

### power

> **power**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L109)

Defined the power exponent applied to fresnel term

***

### rightColor

> **rightColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L99)

Define the color used on center

## Accessors

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L79)

Define if the fresnel effect is enable or not.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L82)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### clone()

> **clone**(): `FresnelParameters`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L130)

Clones the current fresnel and its values

#### Returns

`FresnelParameters`

a clone fresnel configuration

***

### equals()

> **equals**(`otherFresnelParameters`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L143)

Determines equality between FresnelParameters objects

#### Parameters

##### otherFresnelParameters

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`FresnelParameters`\>

defines the second operand

#### Returns

`boolean`

true if the power, bias, leftColor, rightColor and isEnabled values are equal to the given ones

***

### serialize()

> **serialize**(): [`IFresnelParametersSerialized`](../type-aliases/IFresnelParametersSerialized.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L158)

Serializes the current fresnel parameters to a JSON representation.

#### Returns

[`IFresnelParametersSerialized`](../type-aliases/IFresnelParametersSerialized.md)

the JSON serialization

***

### Parse()

> `static` **Parse**(`parsedFresnelParameters`): `FresnelParameters`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/fresnelParameters.ts#L173)

Parse a JSON object and deserialize it to a new Fresnel parameter object.

#### Parameters

##### parsedFresnelParameters

[`IFresnelParametersSerialized`](../type-aliases/IFresnelParametersSerialized.md)

Define the JSON representation

#### Returns

`FresnelParameters`

the parsed parameters
