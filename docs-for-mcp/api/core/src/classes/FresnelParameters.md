[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FresnelParameters

# Class: FresnelParameters

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L76)

This represents all the required information to add a fresnel effect on a material:

## See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/fresnelParameters

## Constructors

### Constructor

> **new FresnelParameters**(`options?`): `FresnelParameters`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L118)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L106)

Define bias applied to computed fresnel term

***

### leftColor

> **leftColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L96)

Define the color used on edges (grazing angle)

***

### power

> **power**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L111)

Defined the power exponent applied to fresnel term

***

### rightColor

> **rightColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L101)

Define the color used on center

## Accessors

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L81)

Define if the fresnel effect is enable or not.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L84)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### clone()

> **clone**(): `FresnelParameters`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L132)

Clones the current fresnel and its values

#### Returns

`FresnelParameters`

a clone fresnel configuration

***

### equals()

> **equals**(`otherFresnelParameters`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L145)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/fresnelParameters.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/fresnelParameters.pure.ts#L160)

Serializes the current fresnel parameters to a JSON representation.

#### Returns

[`IFresnelParametersSerialized`](../type-aliases/IFresnelParametersSerialized.md)

the JSON serialization
