[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ColorCurves

# Class: ColorCurves

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L15)

The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

## Constructors

### Constructor

> **new ColorCurves**(): `ColorCurves`

#### Returns

`ColorCurves`

## Properties

### PrepareUniforms

> `static` **PrepareUniforms**: (`uniformsList`) => `void` = `PrepareUniformsForColorCurves`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L334)

Prepare the list of uniforms associated with the ColorCurves effects.

#### Parameters

##### uniformsList

`string`[]

The list of uniforms used in the effect

#### Returns

`void`

## Accessors

### globalDensity

#### Get Signature

> **get** **globalDensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L60)

Gets the global Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Returns

`number`

#### Set Signature

> **set** **globalDensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L68)

Sets the global Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### globalExposure

#### Get Signature

> **get** **globalExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L92)

Gets the global Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Returns

`number`

#### Set Signature

> **set** **globalExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L99)

Sets the global Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### globalHue

#### Get Signature

> **get** **globalHue**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L44)

Gets the global Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Returns

`number`

#### Set Signature

> **set** **globalHue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L51)

Sets the global Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### globalSaturation

#### Get Signature

> **get** **globalSaturation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L76)

Gets the global Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Returns

`number`

#### Set Signature

> **set** **globalSaturation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L83)

Sets the global Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsDensity

#### Get Signature

> **get** **highlightsDensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L136)

Gets the highlights Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Returns

`number`

#### Set Signature

> **set** **highlightsDensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L144)

Sets the highlights Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsExposure

#### Get Signature

> **get** **highlightsExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:167](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L167)

Gets the highlights Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Returns

`number`

#### Set Signature

> **set** **highlightsExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L174)

Sets the highlights Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsHue

#### Get Signature

> **get** **highlightsHue**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L120)

Gets the highlights Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Returns

`number`

#### Set Signature

> **set** **highlightsHue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L127)

Sets the highlights Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### highlightsSaturation

#### Get Signature

> **get** **highlightsSaturation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L152)

Gets the highlights Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Returns

`number`

#### Set Signature

> **set** **highlightsSaturation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L159)

Sets the highlights Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### midtonesDensity

#### Get Signature

> **get** **midtonesDensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L211)

Gets the midtones Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Returns

`number`

#### Set Signature

> **set** **midtonesDensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L219)

Sets the midtones Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### midtonesExposure

#### Get Signature

> **get** **midtonesExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L242)

Gets the midtones Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Returns

`number`

#### Set Signature

> **set** **midtonesExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L249)

Sets the midtones Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### midtonesHue

#### Get Signature

> **get** **midtonesHue**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L195)

Gets the midtones Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Returns

`number`

#### Set Signature

> **set** **midtonesHue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L202)

Sets the midtones Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### midtonesSaturation

#### Get Signature

> **get** **midtonesSaturation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L227)

Gets the midtones Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Returns

`number`

#### Set Signature

> **set** **midtonesSaturation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L234)

Sets the midtones Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowsDensity

#### Get Signature

> **get** **shadowsDensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L279)

Gets the shadows Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Returns

`number`

#### Set Signature

> **set** **shadowsDensity**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L287)

Sets the shadows Density value.
The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.
Values less than zero provide a filter of opposite hue.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowsExposure

#### Get Signature

> **get** **shadowsExposure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L310)

Gets the shadows Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Returns

`number`

#### Set Signature

> **set** **shadowsExposure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L317)

Sets the shadows Exposure value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowsHue

#### Get Signature

> **get** **shadowsHue**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L263)

Gets the shadows Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Returns

`number`

#### Set Signature

> **set** **shadowsHue**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L270)

Sets the shadows Hue value.
The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowsSaturation

#### Get Signature

> **get** **shadowsSaturation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L295)

Gets the shadows Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Returns

`number`

#### Set Signature

> **set** **shadowsSaturation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L302)

Sets the shadows Saturation value.
This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### clone()

> **clone**(): `ColorCurves`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L473)

Clones the current color curve instance.

#### Returns

`ColorCurves`

The cloned curves

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L326)

Returns the class name

#### Returns

`string`

The class name

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/colorCurves.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/colorCurves.pure.ts#L481)

Serializes the current color curve instance to a json representation.

#### Returns

`any`

a JSON representation
