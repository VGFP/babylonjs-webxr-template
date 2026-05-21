[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ResolveFormatOptions

# Function: ResolveFormatOptions()

> **ResolveFormatOptions**(`opts?`): `object`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/xml/xml.serializer.format.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/xml/xml.serializer.format.ts#L98)

## Parameters

### opts?

[`IXmlSerializerFormatOptions`](../interfaces/IXmlSerializerFormatOptions.md)

## Returns

`object`

### number

> **number**: `Required`\<`Omit`\<[`IXmlSerializerNumberOptions`](../interfaces/IXmlSerializerNumberOptions.md), `"perAttributeEps"` \| `"fixedDecimals"` \| `"maxDecimalsCap"` \| `"trimTrailingZeros"` \| `"allowScientific"` \| `"snapNearZero"` \| `"zeroThreshold"`\>\> & `Pick`\<[`IXmlSerializerNumberOptions`](../interfaces/IXmlSerializerNumberOptions.md), `"perAttributeEps"` \| `"fixedDecimals"`\> & `object`

#### Type Declaration

##### allowScientific

> **allowScientific**: `boolean`

##### maxDecimalsCap

> **maxDecimalsCap**: `number`

##### snapNearZero

> **snapNearZero**: `boolean`

##### trimTrailingZeros

> **trimTrailingZeros**: `boolean`

##### zeroThreshold

> **zeroThreshold**: `number`
