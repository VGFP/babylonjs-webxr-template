[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SpecularPowerToRoughness

# Function: SpecularPowerToRoughness()

> **SpecularPowerToRoughness**(`specularPower`, `p0?`, `p1?`, `p2?`, `p3?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/materialConversionHelper.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/materialConversionHelper.ts#L27)

Evaluates a specified specular power value to determine the appropriate roughness value,
based on a pre-defined cubic bezier curve with specular on the abscissa axis (x-axis)
and roughness on the ordinant axis (y-axis)

## Parameters

### specularPower

`number`

specular power of standard material

### p0?

[`Vector2`](../classes/Vector2.md) = `...`

first control point

### p1?

[`Vector2`](../classes/Vector2.md) = `...`

second control point

### p2?

[`Vector2`](../classes/Vector2.md) = `...`

third control point

### p3?

[`Vector2`](../classes/Vector2.md) = `...`

fourth control point

## Returns

`number`

Number representing the roughness value
