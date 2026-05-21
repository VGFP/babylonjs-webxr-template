[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ST\_ColorValue

# Type Alias: ST\_ColorValue

> **ST\_ColorValue** = `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L49)

3MF color value.
In the 3MF core spec, colors are typically expressed as sRGB hex strings: "#RRGGBB" (and sometimes "#AARRGGBB").
This type is kept as string because we serialize directly into XML and want to avoid coupling to a specific color class.
