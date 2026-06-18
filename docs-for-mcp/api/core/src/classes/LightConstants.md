[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LightConstants

# Class: LightConstants

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:2](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L2)

Defines the cross module constantsused by lights to avoid circular dependencies

## Constructors

### Constructor

> **new LightConstants**(): `LightConstants`

#### Returns

`LightConstants`

## Properties

### FALLOFF\_DEFAULT

> `readonly` `static` **FALLOFF\_DEFAULT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:7](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L7)

Falloff Default: light is falling off following the material specification:
standard material is using standard falloff whereas pbr material can request special falloff per materials.

***

### FALLOFF\_GLTF

> `readonly` `static` **FALLOFF\_GLTF**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L18)

Falloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

***

### FALLOFF\_PHYSICAL

> `readonly` `static` **FALLOFF\_PHYSICAL**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L12)

Falloff Physical: light is falling off following the inverse squared distance law.

***

### FALLOFF\_STANDARD

> `readonly` `static` **FALLOFF\_STANDARD**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L24)

Falloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

***

### INTENSITYMODE\_AUTOMATIC

> `readonly` `static` **INTENSITYMODE\_AUTOMATIC**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L53)

Each light type uses the default quantity according to its type:
     point/spot lights use luminous intensity
     directional lights use illuminance

***

### INTENSITYMODE\_ILLUMINANCE

> `readonly` `static` **INTENSITYMODE\_ILLUMINANCE**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L65)

lux (lm/m^2)

***

### INTENSITYMODE\_LUMINANCE

> `readonly` `static` **INTENSITYMODE\_LUMINANCE**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L69)

nit (cd/m^2)

***

### INTENSITYMODE\_LUMINOUSINTENSITY

> `readonly` `static` **INTENSITYMODE\_LUMINOUSINTENSITY**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L61)

candela (lm/sr)

***

### INTENSITYMODE\_LUMINOUSPOWER

> `readonly` `static` **INTENSITYMODE\_LUMINOUSPOWER**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L57)

lumen (lm)

***

### LIGHTMAP\_DEFAULT

> `readonly` `static` **LIGHTMAP\_DEFAULT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L33)

If every light affecting the material is in this lightmapMode,
material.lightmapTexture adds or multiplies
(depends on material.useLightmapAsShadowmap)
after every other light calculations.

***

### LIGHTMAP\_SHADOWSONLY

> `readonly` `static` **LIGHTMAP\_SHADOWSONLY**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L45)

material.lightmapTexture as only lighting
no light calculation from this light
only adds dynamic shadows from this light

***

### LIGHTMAP\_SPECULAR

> `readonly` `static` **LIGHTMAP\_SPECULAR**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L39)

material.lightmapTexture as only diffuse lighting from this light
adds only specular lighting from this light
adds dynamic shadows

***

### LIGHTTYPEID\_CLUSTERED\_CONTAINER

> `readonly` `static` **LIGHTTYPEID\_CLUSTERED\_CONTAINER**: `5` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L97)

Light type const id of the clustered light.

***

### LIGHTTYPEID\_DIRECTIONALLIGHT

> `readonly` `static` **LIGHTTYPEID\_DIRECTIONALLIGHT**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L79)

Light type const id of the directional light.

***

### LIGHTTYPEID\_HEMISPHERICLIGHT

> `readonly` `static` **LIGHTTYPEID\_HEMISPHERICLIGHT**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L87)

Light type const id of the hemispheric light.

***

### LIGHTTYPEID\_POINTLIGHT

> `readonly` `static` **LIGHTTYPEID\_POINTLIGHT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L75)

Light type const id of the point light.

***

### LIGHTTYPEID\_RECT\_AREALIGHT

> `readonly` `static` **LIGHTTYPEID\_RECT\_AREALIGHT**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L92)

Light type const id of the area light.

***

### LIGHTTYPEID\_SPOTLIGHT

> `readonly` `static` **LIGHTTYPEID\_SPOTLIGHT**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L83)

Light type const id of the spot light.

## Methods

### CompareLightsPriority()

> `static` **CompareLightsPriority**(`a`, `b`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightConstants.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/lightConstants.ts#L105)

Sort function to order lights for rendering.

#### Parameters

##### a

[`ISortableLight`](../interfaces/ISortableLight.md)

First Light object to compare to second.

##### b

[`ISortableLight`](../interfaces/ISortableLight.md)

Second Light object to compare first.

#### Returns

`number`

-1 to reduce's a's index relative to be, 0 for no change, 1 to increase a's index relative to b.
