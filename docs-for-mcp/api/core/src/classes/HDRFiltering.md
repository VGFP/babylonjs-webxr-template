[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HDRFiltering

# Class: HDRFiltering

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts#L31)

Filters HDR maps to get correct renderings of PBR reflections

## Constructors

### Constructor

> **new HDRFiltering**(`engine`, `options?`): `HDRFiltering`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts#L56)

Instantiates HDR filter for reflection maps

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

Thin engine

##### options?

`IHDRFilteringOptions` = `{}`

Options

#### Returns

`HDRFiltering`

## Properties

### hdrScale

> **hdrScale**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts#L48)

Scales pixel intensity for the input HDR map.

***

### quality

> **quality**: `number` = `Constants.TEXTURE_FILTERING_QUALITY_OFFLINE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts#L43)

Quality switch for prefiltering. Should be set to `Constants.TEXTURE_FILTERING_QUALITY_OFFLINE` unless
you care about baking speed.

## Methods

### isReady()

> **isReady**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts#L206)

Get a value indicating if the filter is ready to be used

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

Texture to filter

#### Returns

`boolean`

true if the filter is ready

***

### prefilter()

> **prefilter**(`texture`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Filtering/hdrFiltering.ts#L219)

Prefilters a cube texture to have mipmap levels representing roughness values.
Prefiltering will be invoked at the end of next rendering pass.
This has to be done once the map is loaded, and has not been prefiltered by a third party software.
See http://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf for more information

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

Texture to filter

#### Returns

`Promise`\<`void`\>

Promise called when prefiltering is done
