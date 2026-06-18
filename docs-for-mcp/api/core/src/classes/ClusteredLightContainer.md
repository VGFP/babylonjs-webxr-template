[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ClusteredLightContainer

# Class: ClusteredLightContainer

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L38)

A special light that renders all its associated spot or point lights using a clustered or forward+ system.

## Extends

- [`Light`](Light.md)

## Constructors

### Constructor

> **new ClusteredLightContainer**(`name`, `lights?`, `scene?`): `ClusteredLightContainer`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L235)

Creates a new clustered light system with an initial set of lights.

#### Parameters

##### name

`string`

The name of the clustered light container

##### lights?

[`Light`](Light.md)[] = `[]`

The initial set of lights to add

##### scene?

[`Scene`](Scene.md)

The scene the clustered light container belongs to

#### Returns

`ClusteredLightContainer`

#### Overrides

[`Light`](Light.md).[`constructor`](Light.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`Light`](Light.md).[`animations`](Light.md#animations)

***

### diffuse

> **diffuse**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L116)

Diffuse gives the basic color to an object.

#### Inherited from

[`Light`](Light.md).[`diffuse`](Light.md#diffuse)

***

### falloffType

> **falloffType**: `number` = `Light.FALLOFF_DEFAULT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L134)

Defines the falloff type for this light. This lets overriding how punctual light are
falling off base on range or angle.
This can be set to any values in Light.FALLOFF_x.

Note: This is only useful for PBR Materials at the moment. This could be extended if required to
other types of materials.

#### Inherited from

[`Light`](Light.md).[`falloffType`](Light.md#fallofftype)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`Light`](Light.md).[`id`](Light.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`Light`](Light.md).[`inspectableCustomProperties`](Light.md#inspectablecustomproperties)

***

### intensity

> **intensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L142)

Strength of the light.
Note: By default it is define in the framework own unit.
Note: In PBR materials the intensityMode can be use to chose what unit the intensity is defined in.

#### Inherited from

[`Light`](Light.md).[`intensity`](Light.md#intensity)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`Light`](Light.md).[`metadata`](Light.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L89)

Gets or sets the name of the node

#### Inherited from

[`Light`](Light.md).[`name`](Light.md#name)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`Light`](Light.md).[`onAccessibilityTagChangedObservable`](Light.md#onaccessibilitytagchangedobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`Light`](Light.md).[`onDisposeObservable`](Light.md#ondisposeobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`Light`](Light.md).[`onReady`](Light.md#onready)

***

### renderPriority

> **renderPriority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L212)

Defines the rendering priority of the lights. It can help in case of fallback or number of lights
exceeding the number allowed of the materials.

#### Inherited from

[`Light`](Light.md).[`renderPriority`](Light.md#renderpriority)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`Light`](Light.md).[`reservedDataStore`](Light.md#reserveddatastore)

***

### specular

> **specular**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L123)

Specular produces a highlight color on an object.
Note: This is not affecting PBR materials.

#### Inherited from

[`Light`](Light.md).[`specular`](Light.md#specular)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`Light`](Light.md).[`state`](Light.md#state)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`Light`](Light.md).[`uniqueId`](Light.md#uniqueid)

***

### FALLOFF\_DEFAULT

> `readonly` `static` **FALLOFF\_DEFAULT**: `0` = `LightConstants.FALLOFF_DEFAULT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L25)

Falloff Default: light is falling off following the material specification:
standard material is using standard falloff whereas pbr material can request special falloff per materials.

#### Inherited from

[`Light`](Light.md).[`FALLOFF_DEFAULT`](Light.md#falloff_default)

***

### FALLOFF\_GLTF

> `readonly` `static` **FALLOFF\_GLTF**: `2` = `LightConstants.FALLOFF_GLTF`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L36)

Falloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`Light`](Light.md).[`FALLOFF_GLTF`](Light.md#falloff_gltf)

***

### FALLOFF\_PHYSICAL

> `readonly` `static` **FALLOFF\_PHYSICAL**: `1` = `LightConstants.FALLOFF_PHYSICAL`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L30)

Falloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`Light`](Light.md).[`FALLOFF_PHYSICAL`](Light.md#falloff_physical)

***

### FALLOFF\_STANDARD

> `readonly` `static` **FALLOFF\_STANDARD**: `3` = `LightConstants.FALLOFF_STANDARD`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L42)

Falloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`Light`](Light.md).[`FALLOFF_STANDARD`](Light.md#falloff_standard)

***

### INTENSITYMODE\_AUTOMATIC

> `readonly` `static` **INTENSITYMODE\_AUTOMATIC**: `0` = `LightConstants.INTENSITYMODE_AUTOMATIC`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L71)

Each light type uses the default quantity according to its type:
     point/spot lights use luminous intensity
     directional lights use illuminance

#### Inherited from

[`Light`](Light.md).[`INTENSITYMODE_AUTOMATIC`](Light.md#intensitymode_automatic)

***

### INTENSITYMODE\_ILLUMINANCE

> `readonly` `static` **INTENSITYMODE\_ILLUMINANCE**: `3` = `LightConstants.INTENSITYMODE_ILLUMINANCE`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L83)

lux (lm/m^2)

#### Inherited from

[`Light`](Light.md).[`INTENSITYMODE_ILLUMINANCE`](Light.md#intensitymode_illuminance)

***

### INTENSITYMODE\_LUMINANCE

> `readonly` `static` **INTENSITYMODE\_LUMINANCE**: `4` = `LightConstants.INTENSITYMODE_LUMINANCE`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L87)

nit (cd/m^2)

#### Inherited from

[`Light`](Light.md).[`INTENSITYMODE_LUMINANCE`](Light.md#intensitymode_luminance)

***

### INTENSITYMODE\_LUMINOUSINTENSITY

> `readonly` `static` **INTENSITYMODE\_LUMINOUSINTENSITY**: `2` = `LightConstants.INTENSITYMODE_LUMINOUSINTENSITY`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L79)

candela (lm/sr)

#### Inherited from

[`Light`](Light.md).[`INTENSITYMODE_LUMINOUSINTENSITY`](Light.md#intensitymode_luminousintensity)

***

### INTENSITYMODE\_LUMINOUSPOWER

> `readonly` `static` **INTENSITYMODE\_LUMINOUSPOWER**: `1` = `LightConstants.INTENSITYMODE_LUMINOUSPOWER`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L75)

lumen (lm)

#### Inherited from

[`Light`](Light.md).[`INTENSITYMODE_LUMINOUSPOWER`](Light.md#intensitymode_luminouspower)

***

### LIGHTMAP\_DEFAULT

> `readonly` `static` **LIGHTMAP\_DEFAULT**: `0` = `LightConstants.LIGHTMAP_DEFAULT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L51)

If every light affecting the material is in this lightmapMode,
material.lightmapTexture adds or multiplies
(depends on material.useLightmapAsShadowmap)
after every other light calculations.

#### Inherited from

[`Light`](Light.md).[`LIGHTMAP_DEFAULT`](Light.md#lightmap_default)

***

### LIGHTMAP\_SHADOWSONLY

> `readonly` `static` **LIGHTMAP\_SHADOWSONLY**: `2` = `LightConstants.LIGHTMAP_SHADOWSONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L63)

material.lightmapTexture as only lighting
no light calculation from this light
only adds dynamic shadows from this light

#### Inherited from

[`Light`](Light.md).[`LIGHTMAP_SHADOWSONLY`](Light.md#lightmap_shadowsonly)

***

### LIGHTMAP\_SPECULAR

> `readonly` `static` **LIGHTMAP\_SPECULAR**: `1` = `LightConstants.LIGHTMAP_SPECULAR`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L57)

material.lightmapTexture as only diffuse lighting from this light
adds only specular lighting from this light
adds dynamic shadows

#### Inherited from

[`Light`](Light.md).[`LIGHTMAP_SPECULAR`](Light.md#lightmap_specular)

***

### LIGHTTYPEID\_DIRECTIONALLIGHT

> `readonly` `static` **LIGHTTYPEID\_DIRECTIONALLIGHT**: `1` = `LightConstants.LIGHTTYPEID_DIRECTIONALLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L97)

Light type const id of the directional light.

#### Inherited from

[`Light`](Light.md).[`LIGHTTYPEID_DIRECTIONALLIGHT`](Light.md#lighttypeid_directionallight)

***

### LIGHTTYPEID\_HEMISPHERICLIGHT

> `readonly` `static` **LIGHTTYPEID\_HEMISPHERICLIGHT**: `3` = `LightConstants.LIGHTTYPEID_HEMISPHERICLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L105)

Light type const id of the hemispheric light.

#### Inherited from

[`Light`](Light.md).[`LIGHTTYPEID_HEMISPHERICLIGHT`](Light.md#lighttypeid_hemisphericlight)

***

### LIGHTTYPEID\_POINTLIGHT

> `readonly` `static` **LIGHTTYPEID\_POINTLIGHT**: `0` = `LightConstants.LIGHTTYPEID_POINTLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L93)

Light type const id of the point light.

#### Inherited from

[`Light`](Light.md).[`LIGHTTYPEID_POINTLIGHT`](Light.md#lighttypeid_pointlight)

***

### LIGHTTYPEID\_RECT\_AREALIGHT

> `readonly` `static` **LIGHTTYPEID\_RECT\_AREALIGHT**: `4` = `LightConstants.LIGHTTYPEID_RECT_AREALIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L110)

Light type const id of the area light.

#### Inherited from

[`Light`](Light.md).[`LIGHTTYPEID_RECT_AREALIGHT`](Light.md#lighttypeid_rect_arealight)

***

### LIGHTTYPEID\_SPOTLIGHT

> `readonly` `static` **LIGHTTYPEID\_SPOTLIGHT**: `2` = `LightConstants.LIGHTTYPEID_SPOTLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L101)

Light type const id of the spot light.

#### Inherited from

[`Light`](Light.md).[`LIGHTTYPEID_SPOTLIGHT`](Light.md#lighttypeid_spotlight)

## Accessors

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L137)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L132)

Gets or sets the accessibility tag to describe the node for accessibility purpose.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`accessibilityTag`](Light.md#accessibilitytag)

***

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L325)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L332)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`animationPropertiesOverride`](Light.md#animationpropertiesoverride)

***

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L472)

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

#### Inherited from

[`Light`](Light.md).[`behaviors`](Light.md#behaviors)

***

### depthSlices

#### Get Signature

> **get** **depthSlices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L183)

The number of slices to split the depth range by and cluster lights into.

##### Returns

`number`

#### Set Signature

> **set** **depthSlices**(`slices`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L187)

##### Parameters

###### slices

`number`

##### Returns

`void`

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L151)

Gets or sets a boolean used to define if the node must be serialized

##### Returns

`boolean`

#### Set Signature

> **set** **doNotSerialize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L163)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`doNotSerialize`](Light.md#donotserialize)

***

### excludedMeshes

#### Get Signature

> **get** **excludedMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L255)

Gets the meshes not impacted by this light.

##### Returns

[`AbstractMesh`](AbstractMesh.md)[]

#### Set Signature

> **set** **excludedMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L261)

Sets the meshes not impacted by this light.

##### Parameters

###### value

[`AbstractMesh`](AbstractMesh.md)[]

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`excludedMeshes`](Light.md#excludedmeshes)

***

### excludeWithLayerMask

#### Get Signature

> **get** **excludeWithLayerMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L272)

Gets the layer id use to find what meshes are not impacted by the light.
Inactive if 0

##### Returns

`number`

#### Set Signature

> **set** **excludeWithLayerMask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:279](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L279)

Sets the layer id use to find what meshes are not impacted by the light.
Inactive if 0

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`excludeWithLayerMask`](Light.md#excludewithlayermask)

***

### horizontalTiles

#### Get Signature

> **get** **horizontalTiles**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L136)

The number of tiles in the horizontal direction to cluster lights into.
A lower value will reduce memory and make the clustering step faster, while a higher value increases memory and makes the rendering step faster.

##### Returns

`number`

#### Set Signature

> **set** **horizontalTiles**(`horizontal`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L140)

##### Parameters

###### horizontal

`number`

##### Returns

`void`

***

### includedOnlyMeshes

#### Get Signature

> **get** **includedOnlyMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L240)

Gets the only meshes impacted by this light.

##### Returns

[`AbstractMesh`](AbstractMesh.md)[]

#### Set Signature

> **set** **includedOnlyMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L246)

Sets the only meshes impacted by this light.

##### Parameters

###### value

[`AbstractMesh`](AbstractMesh.md)[]

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`includedOnlyMeshes`](Light.md#includedonlymeshes)

***

### includeOnlyWithLayerMask

#### Get Signature

> **get** **includeOnlyWithLayerMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L290)

Gets the layer id use to find what meshes are impacted by the light.
Inactive if 0

##### Returns

`number`

#### Set Signature

> **set** **includeOnlyWithLayerMask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L297)

Sets the layer id use to find what meshes are impacted by the light.
Inactive if 0

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`includeOnlyWithLayerMask`](Light.md#includeonlywithlayermask)

***

### inheritVisibility

#### Get Signature

> **get** **inheritVisibility**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L269)

If set to true, this node, when renderable, will only be visible if its parent(s) are also visible.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **inheritVisibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L273)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`inheritVisibility`](Light.md#inheritvisibility)

***

### intensityMode

#### Get Signature

> **get** **intensityMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L177)

Gets the photometric scale used to interpret the intensity.
This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

##### Returns

`number`

#### Set Signature

> **set** **intensityMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L184)

Sets the photometric scale used to interpret the intensity.
This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`intensityMode`](Light.md#intensitymode)

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L105)

True if clustered lighting is supported.

##### Returns

`boolean`

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L281)

Gets or sets a boolean indicating whether this node is visible, either this node itself when it is renderable or its renderable child nodes when `inheritVisibility` is true.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L289)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`isVisible`](Light.md#isvisible)

***

### lightmapMode

#### Get Signature

> **get** **lightmapMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L307)

Gets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)

##### Returns

`number`

#### Set Signature

> **set** **lightmapMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L313)

Sets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`lightmapMode`](Light.md#lightmapmode)

***

### lights

#### Get Signature

> **get** **lights**(): readonly [`Light`](Light.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L113)

Gets the current list of lights added to this clustering system.

##### Returns

readonly [`Light`](Light.md)[]

***

### maxRange

#### Get Signature

> **get** **maxRange**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L216)

This limits the range of all the added lights, so even lights with extreme ranges will still have bounds for clustering.

##### Returns

`number`

#### Set Signature

> **set** **maxRange**(`range`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L220)

##### Parameters

###### range

`number`

##### Returns

`void`

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`Light`](Light.md).[`onClonedObservable`](Light.md#onclonedobservable)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L356)

Sets a callback that will be raised when the node will be disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`onDispose`](Light.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`Light`](Light.md).[`onEnabledStateChangedObservable`](Light.md#onenabledstatechangedobservable)

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L261)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L222)

Gets or sets the parent of the node (without keeping the current position in the scene)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

##### Parameters

###### parent

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`parent`](Light.md#parent)

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L194)

Gets the light radius used by PBR Materials to simulate soft area lights.

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L200)

sets the light radius used by PBR Materials to simulate soft area lights.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`radius`](Light.md#radius)

***

### range

#### Get Signature

> **get** **range**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L153)

Defines how far from the source the light is impacting in scene units.
Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.

##### Returns

`number`

#### Set Signature

> **set** **range**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L160)

Defines how far from the source the light is impacting in scene units.
Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`range`](Light.md#range)

***

### shadowEnabled

#### Get Signature

> **get** **shadowEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L220)

Gets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
the current shadow generator.

##### Returns

`boolean`

#### Set Signature

> **set** **shadowEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:227](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L227)

Sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
the current shadow generator.

##### Parameters

###### value

`boolean`

##### Returns

`void`

Gets or sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
the current shadow generator.

#### Inherited from

[`Light`](Light.md).[`shadowEnabled`](Light.md#shadowenabled)

***

### verticalTiles

#### Get Signature

> **get** **verticalTiles**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L155)

The number of tiles in the vertical direction to cluster lights into.
A lower value will reduce memory and make the clustering step faster, while a higher value increases memory and makes the rendering step faster.

##### Returns

`number`

#### Set Signature

> **set** **verticalTiles**(`vertical`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L159)

##### Parameters

###### vertical

`number`

##### Returns

`void`

***

### worldMatrixFromCache

#### Get Signature

> **get** **worldMatrixFromCache**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L516)

Returns directly the latest state of the mesh World matrix.
A Matrix is returned.

##### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[`Light`](Light.md).[`worldMatrixFromCache`](Light.md#worldmatrixfromcache)

## Methods

### \_bindLight()

> **\_bindLight**(`lightIndex`, `scene`, `effect`, `useSpecular`, `receiveShadows?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L434)

Binds the lights information from the scene to the effect for the given mesh.

#### Parameters

##### lightIndex

`number`

Light index

##### scene

[`Scene`](Scene.md)

The scene where the light belongs to

##### effect

[`Effect`](Effect.md)

The effect we are binding the data to

##### useSpecular

`boolean`

Defines if specular is supported

##### receiveShadows?

`boolean` = `true`

Defines if the effect (mesh) we bind the light for receives shadows

#### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`_bindLight`](Light.md#_bindlight)

***

### \_isReady()

> **\_isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:647](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L647)

Returns whether this light is ready to be used

#### Returns

`boolean`

true if the light is ready

#### Overrides

`Light._isReady`

***

### addBehavior()

> **addBehavior**(`behavior`, `attachImmediately?`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L421)

Attach a behavior to the node

#### Parameters

##### behavior

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>

defines the behavior to attach

##### attachImmediately?

`boolean` = `false`

defines that the behavior must be attached even if the scene is still loading

#### Returns

[`Node`](Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Light`](Light.md).[`addBehavior`](Light.md#addbehavior)

***

### addLight()

> **addLight**(`light`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L536)

Adds a light to the clustering system.

#### Parameters

##### light

[`Light`](Light.md)

The light to add

#### Returns

`void`

***

### areLightTexturesReady()

> **areLightTexturesReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L973)

Returns true when all texture resources used by this light are ready (e.g. projection textures).
Override in subclasses that use texture resources.

#### Returns

`boolean`

true if all light textures are ready

#### Inherited from

[`Light`](Light.md).[`areLightTexturesReady`](Light.md#arelighttexturesready)

***

### beginAnimation()

> **beginAnimation**(`name`, `loop?`, `speedRatio?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L902)

Will start the animation sequence

#### Parameters

##### name

`string`

defines the range frames for animation sequence

##### loop?

`boolean`

defines if the animation should loop (false by default)

##### speedRatio?

`number`

defines the speed factor in which to run the animation (1 by default)

##### onAnimationEnd?

() => `void`

defines a function to be executed when the animation ended (undefined by default)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

the object created for this animation. If range does not exist, it will return null

#### Inherited from

[`Light`](Light.md).[`beginAnimation`](Light.md#beginanimation)

***

### canAffectMesh()

> **canAffectMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:563](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L563)

Specifies if the light will affect the passed mesh.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to test against the light

#### Returns

`boolean`

true the mesh is affected otherwise, false.

#### Inherited from

[`Light`](Light.md).[`canAffectMesh`](Light.md#canaffectmesh)

***

### clone()

> **clone**(`name`, `newParent?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:648](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L648)

Returns a new Light object, named "name", from the current one.

#### Parameters

##### name

`string`

The name of the cloned light

##### newParent?

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\> = `null`

The parent of this light, if it has one

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

the new created light

#### Inherited from

[`Light`](Light.md).[`clone`](Light.md#clone)

***

### computeWorldMatrix()

> **computeWorldMatrix**(`_force?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:937](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L937)

Computes the world matrix of the node

#### Parameters

##### \_force?

`boolean`

defines if the cache version should be invalidated forcing the world matrix to be created from scratch

#### Returns

[`Matrix`](Matrix.md)

the world matrix

#### Inherited from

[`Light`](Light.md).[`computeWorldMatrix`](Light.md#computeworldmatrix)

***

### createAnimationRange()

> **createAnimationRange**(`name`, `from`, `to`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L819)

Creates an animation range for this node

#### Parameters

##### name

`string`

defines the name of the range

##### from

`number`

defines the starting key

##### to

`number`

defines the end key

#### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`createAnimationRange`](Light.md#createanimationrange)

***

### deleteAnimationRange()

> **deleteAnimationRange**(`name`, `deleteFrames?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:836](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L836)

Delete a specific animation range

#### Parameters

##### name

`string`

defines the name of the range to delete

##### deleteFrames?

`boolean` = `true`

defines if animation frames from the range must be deleted as well

#### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`deleteAnimationRange`](Light.md#deleteanimationrange)

***

### dispose()

> **dispose**(`doNotRecurse?`, `disposeMaterialAndTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:521](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L521)

Releases resources associated with this node.

#### Parameters

##### doNotRecurse?

`boolean`

Set to true to not recurse into each children (recurse into each children by default)

##### disposeMaterialAndTextures?

`boolean`

Set to true to also dispose referenced materials and textures (false by default)

#### Returns

`void`

#### Overrides

[`Light`](Light.md).[`dispose`](Light.md#dispose)

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:554](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L554)

Returns a Vector3, the absolute light position in the World.

#### Returns

[`Vector3`](Vector3.md)

the world space position of the light

#### Inherited from

[`Light`](Light.md).[`getAbsolutePosition`](Light.md#getabsoluteposition)

***

### getAnimationByName()

> **getAnimationByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:801](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L801)

Get an animation by name

#### Parameters

##### name

`string`

defines the name of the animation to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

null if not found else the requested animation

#### Inherited from

[`Light`](Light.md).[`getAnimationByName`](Light.md#getanimationbyname)

***

### getAnimationRange()

> **getAnimationRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:850](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L850)

Get an animation range by name

#### Parameters

##### name

`string`

defines the name of the animation range to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

null if not found else the requested animation range

#### Inherited from

[`Light`](Light.md).[`getAnimationRange`](Light.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L885)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`Light`](Light.md).[`getAnimationRanges`](Light.md#getanimationranges)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:482](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L482)

Gets an attached behavior by name

#### Parameters

##### name

`string`

defines the name of the behavior to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

null if behavior was not found else the requested behavior

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Light`](Light.md).[`getBehaviorByName`](Light.md#getbehaviorbyname)

***

### getChildMeshes()

Get all child-meshes of this node

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getChildMeshes**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:727](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L727)

Get all child-meshes of this node

##### Type Parameters

###### T

`T` *extends* [`AbstractMesh`](AbstractMesh.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

an array of AbstractMesh

##### Inherited from

[`Light`](Light.md).[`getChildMeshes`](Light.md#getchildmeshes)

#### Call Signature

> **getChildMeshes**(`directDescendantsOnly?`, `predicate?`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:735](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L735)

Get all child-meshes of this node

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of AbstractMesh

##### Inherited from

[`Light`](Light.md).[`getChildMeshes`](Light.md#getchildmeshes)

***

### getChildren()

Get all direct children of this node

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

#### Call Signature

> **getChildren**\<`T`\>(`predicate?`, `directDescendantsOnly?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:757](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L757)

Get all direct children of this node

##### Type Parameters

###### T

`T` *extends* [`Node`](Node.md)

##### Parameters

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

`T`[]

an array of Node

##### Inherited from

[`Light`](Light.md).[`getChildren`](Light.md#getchildren)

#### Call Signature

> **getChildren**(`predicate?`, `directDescendantsOnly?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:765](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L765)

Get all direct children of this node

##### Parameters

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

[`Node`](Node.md)[]

an array of Node

##### Inherited from

[`Light`](Light.md).[`getChildren`](Light.md#getchildren)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L285)

Returns the string "Light".

#### Returns

`string`

the class name

#### Overrides

[`Light`](Light.md).[`getClassName`](Light.md#getclassname)

***

### getDescendants()

Will return all nodes that have this node as ascendant

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getDescendants**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:697](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L697)

Will return all nodes that have this node as ascendant

##### Type Parameters

###### T

`T` *extends* [`Node`](Node.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

all children nodes of all types

##### Inherited from

[`Light`](Light.md).[`getDescendants`](Light.md#getdescendants)

#### Call Signature

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:705](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L705)

Will return all nodes that have this node as ascendant

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`Node`](Node.md)[]

all children nodes of all types

##### Inherited from

[`Light`](Light.md).[`getDescendants`](Light.md#getdescendants)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`Light`](Light.md).[`getEngine`](Light.md#getengine)

***

### getHierarchyBoundingVectors()

> **getHierarchyBoundingVectors**(`includeDescendants?`, `predicate?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:1002](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L1002)

Return the minimum and maximum world vectors of the entire hierarchy under current node

#### Parameters

##### includeDescendants?

`boolean` = `true`

Include bounding info from descendants as well (true by default)

##### predicate?

[`Nullable`](../type-aliases/Nullable.md)\<(`abstractMesh`) => `boolean`\> = `null`

defines a callback function that can be customize to filter what meshes should be included in the list used to compute the bounding vectors

#### Returns

`object`

the new bounding vectors

##### max

> **max**: [`Vector3`](Vector3.md)

##### min

> **min**: [`Vector3`](Vector3.md)

#### Inherited from

[`Light`](Light.md).[`getHierarchyBoundingVectors`](Light.md#gethierarchyboundingvectors)

***

### getProjectionMatrix()

> **getProjectionMatrix**(`_viewMatrix?`, `_renderList?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:338](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L338)

Returns the projection matrix.
Note that viewMatrix and renderList are optional and are only used by lights that calculate the projection matrix from a list of meshes (e.g. directional lights with automatic extents calculation).

#### Parameters

##### \_viewMatrix?

[`Matrix`](Matrix.md)

The view transform matrix of the light (optional).

##### \_renderList?

[`AbstractMesh`](AbstractMesh.md)[]

The list of meshes to take into account when calculating the projection matrix (optional).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

The projection matrix. Can be null, if a projection matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).

#### Inherited from

[`Light`](Light.md).[`getProjectionMatrix`](Light.md#getprojectionmatrix)

***

### getScaledIntensity()

> **getScaledIntensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:638](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L638)

Returns the intensity scaled by the Photometric Scale according to the light type and intensity mode.

#### Returns

`number`

the scaled intensity in intensity mode unit

#### Inherited from

[`Light`](Light.md).[`getScaledIntensity`](Light.md#getscaledintensity)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`Light`](Light.md).[`getScene`](Light.md#getscene)

***

### getShadowGenerator()

> **getShadowGenerator**(`camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`IShadowGenerator`](../interfaces/IShadowGenerator.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:534](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L534)

Returns the Light associated shadow generator if any.

#### Parameters

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

Camera for which the shadow generator should be retrieved (default: null). If null, retrieves the default shadow generator

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IShadowGenerator`](../interfaces/IShadowGenerator.md)\>

the associated shadow generator.

#### Inherited from

[`Light`](Light.md).[`getShadowGenerator`](Light.md#getshadowgenerator)

***

### getShadowGenerators()

> **getShadowGenerators**(): [`Nullable`](../type-aliases/Nullable.md)\<`Map`\<[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>, [`IShadowGenerator`](../interfaces/IShadowGenerator.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L546)

Returns all the shadow generators associated to this light

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Map`\<[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>, [`IShadowGenerator`](../interfaces/IShadowGenerator.md)\>\>

#### Inherited from

[`Light`](Light.md).[`getShadowGenerators`](Light.md#getshadowgenerators)

***

### getTypeID()

> **getTypeID**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L290)

Returns the light type ID (integer).

#### Returns

`number`

The light Type id as a constant defines in Light.LIGHTTYPEID_x

#### Overrides

[`Light`](Light.md).[`getTypeID`](Light.md#gettypeid)

***

### getViewMatrix()

> **getViewMatrix**(`_faceIndex?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L327)

Returns the view matrix.

#### Parameters

##### \_faceIndex?

`number`

The index of the face for which we want to extract the view matrix. Only used for point light types.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

The view matrix. Can be null, if a view matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).

#### Inherited from

[`Light`](Light.md).[`getViewMatrix`](Light.md#getviewmatrix)

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L496)

Returns the latest update of the World matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix

#### Inherited from

[`Light`](Light.md).[`getWorldMatrix`](Light.md#getworldmatrix)

***

### isDescendantOf()

> **isDescendantOf**(`ancestor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:659](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L659)

Is this node a descendant of the given node?
The function will iterate up the hierarchy until the ancestor was found or no more parents defined

#### Parameters

##### ancestor

[`Node`](Node.md)

defines the parent node to inspect

#### Returns

`boolean`

a boolean indicating if this node is a descendant of the given node

#### Inherited from

[`Light`](Light.md).[`isDescendantOf`](Light.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`Light`](Light.md).[`isDisposed`](Light.md#isdisposed)

***

### isEnabled()

> **isEnabled**(`checkAncestors?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:617](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L617)

Is this node enabled?
If the node has a parent, all ancestors will be checked and false will be returned if any are false (not enabled), otherwise will return true

#### Parameters

##### checkAncestors?

`boolean` = `true`

indicates if this method should check the ancestors. The default is to check the ancestors. If set to false, the method will return the value of this node without checking ancestors

#### Returns

`boolean`

whether this node (and its parent) is enabled

#### Inherited from

[`Light`](Light.md).[`isEnabled`](Light.md#isenabled)

***

### isReady()

> **isReady**(`_completeCheck?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L596)

Is this node ready to be used/rendered

#### Parameters

##### \_completeCheck?

`boolean` = `false`

defines if a complete check (including materials and lights) has to be done (false by default)

#### Returns

`boolean`

true if the node is ready

#### Inherited from

[`Light`](Light.md).[`isReady`](Light.md#isready)

***

### markAsDirty()

> **markAsDirty**(`_property?`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:605](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L605)

Flag the  node as dirty (Forcing it to update everything)

#### Parameters

##### \_property?

`string`

helps children apply precise "dirtyfication"

#### Returns

[`Node`](Node.md)

this node

#### Inherited from

[`Light`](Light.md).[`markAsDirty`](Light.md#markasdirty)

***

### prepareLightSpecificDefines()

> **prepareLightSpecificDefines**(`defines`, `lightIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:637](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L637)

Prepares the list of defines specific to the light type.

#### Parameters

##### defines

`any`

the list of defines

##### lightIndex

`number`

defines the index of the light for the effect

#### Returns

`void`

#### Overrides

[`Light`](Light.md).[`prepareLightSpecificDefines`](Light.md#preparelightspecificdefines)

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L451)

Remove an attached behavior

#### Parameters

##### behavior

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>

defines the behavior to attach

#### Returns

[`Node`](Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Light`](Light.md).[`removeBehavior`](Light.md#removebehavior)

***

### removeLight()

> **removeLight**(`light`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L569)

Removes a light from the clustering system.

#### Parameters

##### light

[`Light`](Light.md)

The light to remove

#### Returns

`number`

the index where the light was in the light list

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:656](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L656)

Serializes the ClusteredLightContainer to a JSON object, including all child lights.

#### Returns

`any`

the serialized object

#### Overrides

[`Light`](Light.md).[`serialize`](Light.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L916)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`Light`](Light.md).[`serializeAnimationRanges`](Light.md#serializeanimationranges)

***

### setEnabled()

> **setEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:523](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L523)

Set the enabled state of this node.

#### Parameters

##### value

`boolean`

the new enabled state

#### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`setEnabled`](Light.md#setenabled)

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:500](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L500)

Converts the light information to a readable string for debug purpose.

#### Parameters

##### fullDetails?

`boolean`

Supports for multiple levels of logging within scene loading

#### Returns

`string`

the human readable light info

#### Inherited from

[`Light`](Light.md).[`toString`](Light.md#tostring)

***

### transferTexturesToEffect()

> **transferTexturesToEffect**(`effect`, `lightIndex`): [`Light`](Light.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:617](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L617)

Sets the passed Effect "effect" with the Light textures.

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to update

##### lightIndex

`string`

The index of the light in the effect to update

#### Returns

[`Light`](Light.md)

The light

#### Overrides

[`Light`](Light.md).[`transferTexturesToEffect`](Light.md#transfertexturestoeffect)

***

### transferToEffect()

> **transferToEffect**(`effect`, `lightIndex`): [`Light`](Light.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:606](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L606)

Sets the passed Effect "effect" with the Light information.

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to update

##### lightIndex

`string`

The index of the light in the effect to update

#### Returns

[`Light`](Light.md)

The light

#### Overrides

[`Light`](Light.md).[`transferToEffect`](Light.md#transfertoeffect)

***

### transferToNodeMaterialEffect()

> **transferToNodeMaterialEffect**(`_effect`): [`Light`](Light.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:633](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L633)

Transfers the effect to the node material effect

#### Parameters

##### \_effect

[`Effect`](Effect.md)

the effect to transfer to

#### Returns

[`Light`](Light.md)

the light

#### Overrides

[`Light`](Light.md).[`transferToNodeMaterialEffect`](Light.md#transfertonodematerialeffect)

***

### AddNodeConstructor()

> `static` **AddNodeConstructor**(`type`, `constructorFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L61)

Add a new node constructor

#### Parameters

##### type

`string`

defines the type name of the node to construct

##### constructorFunc

[`NodeConstructor`](../type-aliases/NodeConstructor.md)

defines the constructor function

#### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`AddNodeConstructor`](Light.md#addnodeconstructor)

***

### Construct()

> `static` **Construct**(`type`, `name`, `scene`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L73)

Returns a node constructor based on type name

#### Parameters

##### type

`string`

defines the type name

##### name

`string`

defines the new node name

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### options?

`any`

defines optional options to transmit to constructors

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

the new constructor or null

#### Inherited from

[`Light`](Light.md).[`Construct`](Light.md#construct)

***

### GetConstructorFromName()

> `static` **GetConstructorFromName**(`type`, `name`, `scene`): [`Nullable`](../type-aliases/Nullable.md)\<() => [`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:716](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L716)

Creates a new typed light from the passed type (integer) : point light = 0, directional light = 1, spot light = 2, hemispheric light = 3.
This new light is named "name" and added to the passed scene.

#### Parameters

##### type

`number`

Type according to the types available in Light.LIGHTTYPEID_x

##### name

`string`

The friendly name of the light

##### scene

[`Scene`](Scene.md)

The scene the new light will belong to

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<() => [`Light`](Light.md)\>

the constructor function

#### Inherited from

[`Light`](Light.md).[`GetConstructorFromName`](Light.md#getconstructorfromname)

***

### IsLightSupported()

> `static` **IsLightSupported**(`light`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Clustered/clusteredLightContainer.pure.ts#L67)

Checks if the clustered lighting system supports the given light with its current parameters.
This will also check if the light's associated engine supports clustered lighting.

#### Parameters

##### light

[`Light`](Light.md)

The light to test

#### Returns

`boolean`

true if the light and its engine is supported

***

### Parse()

> `static` **Parse**(`parsedLight`, `scene`): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:733](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L733)

Parses the passed "parsedLight" and returns a new instanced Light from this parsing.

#### Parameters

##### parsedLight

`any`

The JSON representation of the light

##### scene

[`Scene`](Scene.md)

The scene to create the parsed light in

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

the created light after parsing

#### Inherited from

[`Light`](Light.md).[`Parse`](Light.md#parse)

***

### ParseAnimationRanges()

> `static` **ParseAnimationRanges**(`node`, `parsedNode`, `_scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L988)

Parse animation range data from a serialization object and store them into a given node

#### Parameters

##### node

[`Node`](Node.md)

defines where to store the animation ranges

##### parsedNode

`any`

defines the serialization object to read data from

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`void`

#### Inherited from

[`Light`](Light.md).[`ParseAnimationRanges`](Light.md#parseanimationranges)
