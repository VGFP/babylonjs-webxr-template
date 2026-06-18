[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DirectionalLight

# Class: DirectionalLight

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L22)

A directional light is defined by a direction (what a surprise!).
The light is emitted from everywhere in the specified direction, and has an infinite range.
An example of a directional light is when a distance planet is lit by the apparently parallel lines of light from its sun. Light in a downward direction will light the top of an object.
Documentation: https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction

## Extends

- [`ShadowLight`](ShadowLight.md)

## Constructors

### Constructor

> **new DirectionalLight**(`name`, `direction`, `scene?`, `dontAddToScene?`): `DirectionalLight`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L137)

Creates a DirectionalLight object in the scene, oriented towards the passed direction (Vector3).
The directional light is emitted from everywhere in the given direction.
It can cast shadows.
Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction

#### Parameters

##### name

`string`

The friendly name of the light

##### direction

[`Vector3`](Vector3.md)

The direction of the light

##### scene?

[`Scene`](Scene.md)

The scene the light belongs to

##### dontAddToScene?

`boolean`

True to not add the light to the scene

#### Returns

`DirectionalLight`

#### Overrides

[`ShadowLight`](ShadowLight.md).[`constructor`](ShadowLight.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`animations`](ShadowLight.md#animations)

***

### autoCalcShadowZBounds

> **autoCalcShadowZBounds**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L71)

Automatically compute the shadowMinZ and shadowMaxZ for the projection matrix to best fit (including all the casters)
on each frame. autoUpdateExtends must be set to true for this to work

***

### autoUpdateExtends

> **autoUpdateExtends**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L64)

Automatically compute the projection matrix to best fit (including all the casters)
on each frame.

***

### customProjectionMatrixBuilder

> **customProjectionMatrixBuilder**: (`viewMatrix`, `renderList`, `result`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L204)

Callback defining a custom Projection Matrix Builder.
This can be used to override the default projection matrix computation.

#### Parameters

##### viewMatrix

[`Matrix`](Matrix.md)

##### renderList

[`AbstractMesh`](AbstractMesh.md)[]

##### result

[`Matrix`](Matrix.md)

#### Returns

`void`

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`customProjectionMatrixBuilder`](ShadowLight.md#customprojectionmatrixbuilder)

***

### diffuse

> **diffuse**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L116)

Diffuse gives the basic color to an object.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`diffuse`](ShadowLight.md#diffuse)

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

[`ShadowLight`](ShadowLight.md).[`falloffType`](ShadowLight.md#fallofftype)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`id`](ShadowLight.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`inspectableCustomProperties`](ShadowLight.md#inspectablecustomproperties)

***

### intensity

> **intensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L142)

Strength of the light.
Note: By default it is define in the framework own unit.
Note: In PBR materials the intensityMode can be use to chose what unit the intensity is defined in.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`intensity`](ShadowLight.md#intensity)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`metadata`](ShadowLight.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L89)

Gets or sets the name of the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`name`](ShadowLight.md#name)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onAccessibilityTagChangedObservable`](ShadowLight.md#onaccessibilitytagchangedobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onDisposeObservable`](ShadowLight.md#ondisposeobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onReady`](ShadowLight.md#onready)

***

### renderPriority

> **renderPriority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L212)

Defines the rendering priority of the lights. It can help in case of fallback or number of lights
exceeding the number allowed of the materials.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`renderPriority`](ShadowLight.md#renderpriority)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`reservedDataStore`](ShadowLight.md#reserveddatastore)

***

### specular

> **specular**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L123)

Specular produces a highlight color on an object.
Note: This is not affecting PBR materials.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`specular`](ShadowLight.md#specular)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`state`](ShadowLight.md#state)

***

### transformedDirection

> **transformedDirection**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L214)

The transformed direction. Direction of the light in world space taking parenting in account.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`transformedDirection`](ShadowLight.md#transformeddirection)

***

### transformedPosition

> **transformedPosition**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L209)

The transformed position. Position of the light in world space taking parenting in account. Needs to be computed by calling computeTransformedInformation.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`transformedPosition`](ShadowLight.md#transformedposition)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`uniqueId`](ShadowLight.md#uniqueid)

***

### FALLOFF\_DEFAULT

> `readonly` `static` **FALLOFF\_DEFAULT**: `0` = `LightConstants.FALLOFF_DEFAULT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L25)

Falloff Default: light is falling off following the material specification:
standard material is using standard falloff whereas pbr material can request special falloff per materials.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`FALLOFF_DEFAULT`](ShadowLight.md#falloff_default)

***

### FALLOFF\_GLTF

> `readonly` `static` **FALLOFF\_GLTF**: `2` = `LightConstants.FALLOFF_GLTF`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L36)

Falloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`FALLOFF_GLTF`](ShadowLight.md#falloff_gltf)

***

### FALLOFF\_PHYSICAL

> `readonly` `static` **FALLOFF\_PHYSICAL**: `1` = `LightConstants.FALLOFF_PHYSICAL`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L30)

Falloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`FALLOFF_PHYSICAL`](ShadowLight.md#falloff_physical)

***

### FALLOFF\_STANDARD

> `readonly` `static` **FALLOFF\_STANDARD**: `3` = `LightConstants.FALLOFF_STANDARD`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L42)

Falloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`FALLOFF_STANDARD`](ShadowLight.md#falloff_standard)

***

### INTENSITYMODE\_AUTOMATIC

> `readonly` `static` **INTENSITYMODE\_AUTOMATIC**: `0` = `LightConstants.INTENSITYMODE_AUTOMATIC`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L71)

Each light type uses the default quantity according to its type:
     point/spot lights use luminous intensity
     directional lights use illuminance

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_AUTOMATIC`](ShadowLight.md#intensitymode_automatic)

***

### INTENSITYMODE\_ILLUMINANCE

> `readonly` `static` **INTENSITYMODE\_ILLUMINANCE**: `3` = `LightConstants.INTENSITYMODE_ILLUMINANCE`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L83)

lux (lm/m^2)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_ILLUMINANCE`](ShadowLight.md#intensitymode_illuminance)

***

### INTENSITYMODE\_LUMINANCE

> `readonly` `static` **INTENSITYMODE\_LUMINANCE**: `4` = `LightConstants.INTENSITYMODE_LUMINANCE`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L87)

nit (cd/m^2)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_LUMINANCE`](ShadowLight.md#intensitymode_luminance)

***

### INTENSITYMODE\_LUMINOUSINTENSITY

> `readonly` `static` **INTENSITYMODE\_LUMINOUSINTENSITY**: `2` = `LightConstants.INTENSITYMODE_LUMINOUSINTENSITY`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L79)

candela (lm/sr)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_LUMINOUSINTENSITY`](ShadowLight.md#intensitymode_luminousintensity)

***

### INTENSITYMODE\_LUMINOUSPOWER

> `readonly` `static` **INTENSITYMODE\_LUMINOUSPOWER**: `1` = `LightConstants.INTENSITYMODE_LUMINOUSPOWER`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L75)

lumen (lm)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_LUMINOUSPOWER`](ShadowLight.md#intensitymode_luminouspower)

***

### LIGHTMAP\_DEFAULT

> `readonly` `static` **LIGHTMAP\_DEFAULT**: `0` = `LightConstants.LIGHTMAP_DEFAULT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L51)

If every light affecting the material is in this lightmapMode,
material.lightmapTexture adds or multiplies
(depends on material.useLightmapAsShadowmap)
after every other light calculations.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTMAP_DEFAULT`](ShadowLight.md#lightmap_default)

***

### LIGHTMAP\_SHADOWSONLY

> `readonly` `static` **LIGHTMAP\_SHADOWSONLY**: `2` = `LightConstants.LIGHTMAP_SHADOWSONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L63)

material.lightmapTexture as only lighting
no light calculation from this light
only adds dynamic shadows from this light

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTMAP_SHADOWSONLY`](ShadowLight.md#lightmap_shadowsonly)

***

### LIGHTMAP\_SPECULAR

> `readonly` `static` **LIGHTMAP\_SPECULAR**: `1` = `LightConstants.LIGHTMAP_SPECULAR`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L57)

material.lightmapTexture as only diffuse lighting from this light
adds only specular lighting from this light
adds dynamic shadows

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTMAP_SPECULAR`](ShadowLight.md#lightmap_specular)

***

### LIGHTTYPEID\_DIRECTIONALLIGHT

> `readonly` `static` **LIGHTTYPEID\_DIRECTIONALLIGHT**: `1` = `LightConstants.LIGHTTYPEID_DIRECTIONALLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L97)

Light type const id of the directional light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_DIRECTIONALLIGHT`](ShadowLight.md#lighttypeid_directionallight)

***

### LIGHTTYPEID\_HEMISPHERICLIGHT

> `readonly` `static` **LIGHTTYPEID\_HEMISPHERICLIGHT**: `3` = `LightConstants.LIGHTTYPEID_HEMISPHERICLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L105)

Light type const id of the hemispheric light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_HEMISPHERICLIGHT`](ShadowLight.md#lighttypeid_hemisphericlight)

***

### LIGHTTYPEID\_POINTLIGHT

> `readonly` `static` **LIGHTTYPEID\_POINTLIGHT**: `0` = `LightConstants.LIGHTTYPEID_POINTLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L93)

Light type const id of the point light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_POINTLIGHT`](ShadowLight.md#lighttypeid_pointlight)

***

### LIGHTTYPEID\_RECT\_AREALIGHT

> `readonly` `static` **LIGHTTYPEID\_RECT\_AREALIGHT**: `4` = `LightConstants.LIGHTTYPEID_RECT_AREALIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:110](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L110)

Light type const id of the area light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_RECT_AREALIGHT`](ShadowLight.md#lighttypeid_rect_arealight)

***

### LIGHTTYPEID\_SPOTLIGHT

> `readonly` `static` **LIGHTTYPEID\_SPOTLIGHT**: `2` = `LightConstants.LIGHTTYPEID_SPOTLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L101)

Light type const id of the spot light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_SPOTLIGHT`](ShadowLight.md#lighttypeid_spotlight)

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

[`ShadowLight`](ShadowLight.md).[`accessibilityTag`](ShadowLight.md#accessibilitytag)

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

[`ShadowLight`](ShadowLight.md).[`animationPropertiesOverride`](ShadowLight.md#animationpropertiesoverride)

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

[`ShadowLight`](ShadowLight.md).[`behaviors`](ShadowLight.md#behaviors)

***

### direction

#### Get Signature

> **get** **direction**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L157)

In 2d mode (needCube being false), gets the direction used to cast the shadow.
Also use as the light direction on spot and directional lights.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **direction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L164)

In 2d mode (needCube being false), sets the direction used to cast the shadow.
Also use as the light direction on spot and directional lights.

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

In 2d mode (needCube being false), the direction used to cast the shadow.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`direction`](ShadowLight.md#direction)

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

[`ShadowLight`](ShadowLight.md).[`doNotSerialize`](ShadowLight.md#donotserialize)

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

[`ShadowLight`](ShadowLight.md).[`excludedMeshes`](ShadowLight.md#excludedmeshes)

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

[`ShadowLight`](ShadowLight.md).[`excludeWithLayerMask`](ShadowLight.md#excludewithlayermask)

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

[`ShadowLight`](ShadowLight.md).[`includedOnlyMeshes`](ShadowLight.md#includedonlymeshes)

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

[`ShadowLight`](ShadowLight.md).[`includeOnlyWithLayerMask`](ShadowLight.md#includeonlywithlayermask)

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

[`ShadowLight`](ShadowLight.md).[`inheritVisibility`](ShadowLight.md#inheritvisibility)

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

[`ShadowLight`](ShadowLight.md).[`intensityMode`](ShadowLight.md#intensitymode)

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

[`ShadowLight`](ShadowLight.md).[`isVisible`](ShadowLight.md#isvisible)

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

[`ShadowLight`](ShadowLight.md).[`lightmapMode`](ShadowLight.md#lightmapmode)

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onClonedObservable`](ShadowLight.md#onclonedobservable)

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

[`ShadowLight`](ShadowLight.md).[`onDispose`](ShadowLight.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onEnabledStateChangedObservable`](ShadowLight.md#onenabledstatechangedobservable)

***

### orthoBottom

#### Get Signature

> **get** **orthoBottom**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L119)

Gets or sets the orthoBottom property used to build the light frustum

##### Returns

`number`

#### Set Signature

> **set** **orthoBottom**(`bottom`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L123)

##### Parameters

###### bottom

`number`

##### Returns

`void`

***

### orthoLeft

#### Get Signature

> **get** **orthoLeft**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L86)

Gets or sets the orthoLeft property used to build the light frustum

##### Returns

`number`

#### Set Signature

> **set** **orthoLeft**(`left`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L90)

##### Parameters

###### left

`number`

##### Returns

`void`

***

### orthoRight

#### Get Signature

> **get** **orthoRight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L97)

Gets or sets the orthoRight property used to build the light frustum

##### Returns

`number`

#### Set Signature

> **set** **orthoRight**(`right`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L101)

##### Parameters

###### right

`number`

##### Returns

`void`

***

### orthoTop

#### Get Signature

> **get** **orthoTop**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L108)

Gets or sets the orthoTop property used to build the light frustum

##### Returns

`number`

#### Set Signature

> **set** **orthoTop**(`top`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L112)

##### Parameters

###### top

`number`

##### Returns

`void`

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

[`ShadowLight`](ShadowLight.md).[`parent`](ShadowLight.md#parent)

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L137)

Sets the position the shadow will be casted from. Also use as the light position for both
point and spot lights.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L144)

Sets the position the shadow will be casted from. Also use as the light position for both
point and spot lights.

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

The position the shadow will be casted from.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`position`](ShadowLight.md#position)

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

[`ShadowLight`](ShadowLight.md).[`radius`](ShadowLight.md#radius)

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

[`ShadowLight`](ShadowLight.md).[`range`](ShadowLight.md#range)

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

[`ShadowLight`](ShadowLight.md).[`shadowEnabled`](ShadowLight.md#shadowenabled)

***

### shadowFrustumSize

#### Get Signature

> **get** **shadowFrustumSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L28)

Fix frustum size for the shadow generation. This is disabled if the value is 0.

##### Returns

`number`

#### Set Signature

> **set** **shadowFrustumSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L34)

Specifies a fix frustum size for the shadow generation.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowMaxZ

#### Get Signature

> **get** **shadowMaxZ**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L189)

Sets the shadow projection clipping maximum z value.

##### Returns

`number`

#### Set Signature

> **set** **shadowMaxZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L195)

Gets the shadow projection clipping maximum z value.

##### Parameters

###### value

`number`

##### Returns

`void`

Defines the shadow projection clipping maximum z value.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`shadowMaxZ`](ShadowLight.md#shadowmaxz)

***

### shadowMinZ

#### Get Signature

> **get** **shadowMinZ**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L173)

Gets the shadow projection clipping minimum z value.

##### Returns

`number`

#### Set Signature

> **set** **shadowMinZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L179)

Sets the shadow projection clipping minimum z value.

##### Parameters

###### value

`number`

##### Returns

`void`

Defines the shadow projection clipping minimum z value.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`shadowMinZ`](ShadowLight.md#shadowminz)

***

### shadowOrthoScale

#### Get Signature

> **get** **shadowOrthoScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L46)

Gets the shadow projection scale against the optimal computed one.
0.1 by default which means that the projection window is increase by 10% from the optimal size.
This does not impact in fixed frustum size (shadowFrustumSize being set)

##### Returns

`number`

#### Set Signature

> **set** **shadowOrthoScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L54)

Sets the shadow projection scale against the optimal computed one.
0.1 by default which means that the projection window is increase by 10% from the optimal size.
This does not impact in fixed frustum size (shadowFrustumSize being set)

##### Parameters

###### value

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

[`ShadowLight`](ShadowLight.md).[`worldMatrixFromCache`](ShadowLight.md#worldmatrixfromcache)

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

[`ShadowLight`](ShadowLight.md).[`_bindLight`](ShadowLight.md#_bindlight)

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

[`ShadowLight`](ShadowLight.md).[`addBehavior`](ShadowLight.md#addbehavior)

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

[`ShadowLight`](ShadowLight.md).[`areLightTexturesReady`](ShadowLight.md#arelighttexturesready)

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

[`ShadowLight`](ShadowLight.md).[`beginAnimation`](ShadowLight.md#beginanimation)

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

[`ShadowLight`](ShadowLight.md).[`canAffectMesh`](ShadowLight.md#canaffectmesh)

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

[`ShadowLight`](ShadowLight.md).[`clone`](ShadowLight.md#clone)

***

### computeTransformedInformation()

> **computeTransformedInformation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L222)

Computes the transformed information (transformedPosition and transformedDirection in World space) of the current light

#### Returns

`boolean`

true if the information has been computed, false if it does not need to (no parenting)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`computeTransformedInformation`](ShadowLight.md#computetransformedinformation)

***

### computeWorldMatrix()

> **computeWorldMatrix**(`force?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L332)

Computes the world matrix of the node

#### Parameters

##### force?

`boolean`

defines if the cache version should be invalidated forcing the world matrix to be created from scratch

#### Returns

[`Matrix`](Matrix.md)

the world matrix

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`computeWorldMatrix`](ShadowLight.md#computeworldmatrix)

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

[`ShadowLight`](ShadowLight.md).[`createAnimationRange`](ShadowLight.md#createanimationrange)

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

[`ShadowLight`](ShadowLight.md).[`deleteAnimationRange`](ShadowLight.md#deleteanimationrange)

***

### dispose()

> **dispose**(`doNotRecurse?`, `disposeMaterialAndTextures?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:592](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L592)

Releases resources associated with this node.

#### Parameters

##### doNotRecurse?

`boolean`

Set to true to not recurse into each children (recurse into each children by default)

##### disposeMaterialAndTextures?

`boolean` = `false`

Set to true to also dispose referenced materials and textures (false by default)

#### Returns

`void`

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`dispose`](ShadowLight.md#dispose)

***

### forceProjectionMatrixCompute()

> **forceProjectionMatrixCompute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L307)

Forces the shadow generator to recompute the projection matrix even if position and direction did not changed.

#### Returns

`void`

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`forceProjectionMatrixCompute`](ShadowLight.md#forceprojectionmatrixcompute)

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L263)

If computeTransformedInformation has been called, returns the ShadowLight absolute position in the world. Otherwise, returns the local position.

#### Returns

[`Vector3`](Vector3.md)

the position vector in world space

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getAbsolutePosition`](ShadowLight.md#getabsoluteposition)

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

[`ShadowLight`](ShadowLight.md).[`getAnimationByName`](ShadowLight.md#getanimationbyname)

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

[`ShadowLight`](ShadowLight.md).[`getAnimationRange`](ShadowLight.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:885](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L885)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getAnimationRanges`](ShadowLight.md#getanimationranges)

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

[`ShadowLight`](ShadowLight.md).[`getBehaviorByName`](ShadowLight.md#getbehaviorbyname)

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

[`ShadowLight`](ShadowLight.md).[`getChildMeshes`](ShadowLight.md#getchildmeshes)

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

[`ShadowLight`](ShadowLight.md).[`getChildMeshes`](ShadowLight.md#getchildmeshes)

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

[`ShadowLight`](ShadowLight.md).[`getChildren`](ShadowLight.md#getchildren)

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

[`ShadowLight`](ShadowLight.md).[`getChildren`](ShadowLight.md#getchildren)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L147)

Returns the string "DirectionalLight".

#### Returns

`string`

The class name

#### Overrides

[`ShadowLight`](ShadowLight.md).[`getClassName`](ShadowLight.md#getclassname)

***

### getDepthMaxZ()

> **getDepthMaxZ**(`_activeCamera`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L337)

Gets the maxZ used for shadow according to both the scene and the light.

Values are fixed on directional lights as it relies on an ortho projection hence the need to convert being
-1 and 1 to 0 and 1 doing (depth + min) / (min + max) -> (depth + 1) / (1 + 1) -> (depth * 0.5) + 0.5.
(when not using reverse depth buffer / NDC half Z range)

#### Parameters

##### \_activeCamera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera we are returning the max for

#### Returns

`number`

the depth max z

#### Overrides

[`ShadowLight`](ShadowLight.md).[`getDepthMaxZ`](ShadowLight.md#getdepthmaxz)

***

### getDepthMinZ()

> **getDepthMinZ**(`_activeCamera`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L322)

Gets the minZ used for shadow according to both the scene and the light.

Values are fixed on directional lights as it relies on an ortho projection hence the need to convert being
-1 and 1 to 0 and 1 doing (depth + min) / (min + max) -> (depth + 1) / (1 + 1) -> (depth * 0.5) + 0.5.
(when not using reverse depth buffer / NDC half Z range)

#### Parameters

##### \_activeCamera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera we are returning the min for (not used)

#### Returns

`number`

the depth min z

#### Overrides

[`ShadowLight`](ShadowLight.md).[`getDepthMinZ`](ShadowLight.md#getdepthminz)

***

### getDepthScale()

> **getDepthScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L245)

Return the depth scale used for the shadow map.

#### Returns

`number`

the depth scale.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getDepthScale`](ShadowLight.md#getdepthscale)

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

[`ShadowLight`](ShadowLight.md).[`getDescendants`](ShadowLight.md#getdescendants)

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

[`ShadowLight`](ShadowLight.md).[`getDescendants`](ShadowLight.md#getdescendants)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getEngine`](ShadowLight.md#getengine)

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

[`ShadowLight`](ShadowLight.md).[`getHierarchyBoundingVectors`](ShadowLight.md#gethierarchyboundingvectors)

***

### getProjectionMatrix()

> **getProjectionMatrix**(`viewMatrix?`, `renderList?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L438)

Returns the projection matrix.
Note that viewMatrix and renderList are optional and are only used by lights that calculate the projection matrix from a list of meshes (e.g. directional lights with automatic extents calculation).

#### Parameters

##### viewMatrix?

[`Matrix`](Matrix.md)

The view transform matrix of the light (optional).

##### renderList?

[`AbstractMesh`](AbstractMesh.md)[]

The list of meshes to take into account when calculating the projection matrix (optional).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

The projection matrix. Can be null, if a projection matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getProjectionMatrix`](ShadowLight.md#getprojectionmatrix)

***

### getRotation()

> **getRotation**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L281)

Returns the light rotation in euler definition.

#### Returns

[`Vector3`](Vector3.md)

the x y z rotation in local space.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getRotation`](ShadowLight.md#getrotation)

***

### getScaledIntensity()

> **getScaledIntensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:638](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L638)

Returns the intensity scaled by the Photometric Scale according to the light type and intensity mode.

#### Returns

`number`

the scaled intensity in intensity mode unit

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getScaledIntensity`](ShadowLight.md#getscaledintensity)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getScene`](ShadowLight.md#getscene)

***

### getShadowDirection()

> **getShadowDirection**(`faceIndex?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L255)

Get the direction to use to render the shadow map. In case of cube texture, the face index can be passed.

#### Parameters

##### faceIndex?

`number`

The index of the face we are computed the direction to generate shadow

#### Returns

[`Vector3`](Vector3.md)

The set direction in 2d mode otherwise the direction to the cubemap face if needCube() is true

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getShadowDirection`](ShadowLight.md#getshadowdirection)

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

[`ShadowLight`](ShadowLight.md).[`getShadowGenerator`](ShadowLight.md#getshadowgenerator)

***

### getShadowGenerators()

> **getShadowGenerators**(): [`Nullable`](../type-aliases/Nullable.md)\<`Map`\<[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>, [`IShadowGenerator`](../interfaces/IShadowGenerator.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L546)

Returns all the shadow generators associated to this light

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Map`\<[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>, [`IShadowGenerator`](../interfaces/IShadowGenerator.md)\>\>

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getShadowGenerators`](ShadowLight.md#getshadowgenerators)

***

### getTypeID()

> **getTypeID**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L156)

Returns the integer 1.

#### Returns

`number`

The light Type id as a constant defines in Light.LIGHTTYPEID_x

#### Overrides

[`ShadowLight`](ShadowLight.md).[`getTypeID`](ShadowLight.md#gettypeid)

***

### getViewMatrix()

> **getViewMatrix**(`faceIndex?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L410)

Returns the view matrix.

#### Parameters

##### faceIndex?

`number`

The index of the face for which we want to extract the view matrix. Only used for point light types.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

The view matrix. Can be null, if a view matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getViewMatrix`](ShadowLight.md#getviewmatrix)

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L496)

Returns the latest update of the World matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getWorldMatrix`](ShadowLight.md#getworldmatrix)

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

[`ShadowLight`](ShadowLight.md).[`isDescendantOf`](ShadowLight.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`isDisposed`](ShadowLight.md#isdisposed)

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

[`ShadowLight`](ShadowLight.md).[`isEnabled`](ShadowLight.md#isenabled)

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

[`ShadowLight`](ShadowLight.md).[`isReady`](ShadowLight.md#isready)

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

[`ShadowLight`](ShadowLight.md).[`markAsDirty`](ShadowLight.md#markasdirty)

***

### needCube()

> **needCube**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L292)

Returns whether or not the shadow generation require a cube texture or a 2d texture.

#### Returns

`boolean`

true if a cube texture needs to be use

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`needCube`](ShadowLight.md#needcube)

***

### needProjectionMatrixCompute()

> **needProjectionMatrixCompute**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L300)

Detects if the projection matrix requires to be recomputed this frame.

#### Returns

`boolean`

true if it requires to be recomputed otherwise, false.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`needProjectionMatrixCompute`](ShadowLight.md#needprojectionmatrixcompute)

***

### prepareLightSpecificDefines()

> **prepareLightSpecificDefines**(`defines`, `lightIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L347)

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

[`ShadowLight`](ShadowLight.md).[`prepareLightSpecificDefines`](ShadowLight.md#preparelightspecificdefines)

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

[`ShadowLight`](ShadowLight.md).[`removeBehavior`](ShadowLight.md#removebehavior)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L672)

Serializes the current light into a Serialization object.

#### Returns

`any`

the serialized object.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`serialize`](ShadowLight.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:916](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/node.ts#L916)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`serializeAnimationRanges`](ShadowLight.md#serializeanimationranges)

***

### setDirectionToTarget()

> **setDirectionToTarget**(`target`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L272)

Sets the ShadowLight direction toward the passed target.

#### Parameters

##### target

[`Vector3`](Vector3.md)

The point to target in local space

#### Returns

[`Vector3`](Vector3.md)

the updated ShadowLight direction

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`setDirectionToTarget`](ShadowLight.md#setdirectiontotarget)

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

[`ShadowLight`](ShadowLight.md).[`setEnabled`](ShadowLight.md#setenabled)

***

### setShadowProjectionMatrix()

> **setShadowProjectionMatrix**(`matrix`, `viewMatrix`, `renderList`): [`IShadowLight`](../interfaces/IShadowLight.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/shadowLight.ts#L384)

Sets the shadow projection matrix in parameter to the generated projection matrix.

#### Parameters

##### matrix

[`Matrix`](Matrix.md)

The matrix to updated with the projection information

##### viewMatrix

[`Matrix`](Matrix.md)

The transform matrix of the light

##### renderList

[`AbstractMesh`](AbstractMesh.md)[]

The list of mesh to render in the map

#### Returns

[`IShadowLight`](../interfaces/IShadowLight.md)

The current light

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`setShadowProjectionMatrix`](ShadowLight.md#setshadowprojectionmatrix)

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

[`ShadowLight`](ShadowLight.md).[`toString`](ShadowLight.md#tostring)

***

### transferTexturesToEffect()

> **transferTexturesToEffect**(`effect`, `lightIndex`): [`Light`](Light.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:421](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/light.ts#L421)

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

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`transferTexturesToEffect`](ShadowLight.md#transfertexturestoeffect)

***

### transferToEffect()

> **transferToEffect**(`effect`, `lightIndex`): `DirectionalLight`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L293)

Sets the passed Effect object with the DirectionalLight transformed position (or position if not parented) and the passed name.

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to update

##### lightIndex

`string`

The index of the light in the effect to update

#### Returns

`DirectionalLight`

The directional light

#### Overrides

[`ShadowLight`](ShadowLight.md).[`transferToEffect`](ShadowLight.md#transfertoeffect)

***

### transferToNodeMaterialEffect()

> **transferToNodeMaterialEffect**(`effect`, `lightDataUniformName`): [`Light`](Light.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/directionalLight.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/directionalLight.pure.ts#L302)

Sets the passed Effect "effect" with the Light information.

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to update

##### lightDataUniformName

`string`

The uniform used to store light data (position or direction)

#### Returns

[`Light`](Light.md)

The light

#### Overrides

[`ShadowLight`](ShadowLight.md).[`transferToNodeMaterialEffect`](ShadowLight.md#transfertonodematerialeffect)

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

[`ShadowLight`](ShadowLight.md).[`AddNodeConstructor`](ShadowLight.md#addnodeconstructor)

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

[`ShadowLight`](ShadowLight.md).[`Construct`](ShadowLight.md#construct)

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

[`ShadowLight`](ShadowLight.md).[`GetConstructorFromName`](ShadowLight.md#getconstructorfromname)

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

[`ShadowLight`](ShadowLight.md).[`Parse`](ShadowLight.md#parse)

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

[`ShadowLight`](ShadowLight.md).[`ParseAnimationRanges`](ShadowLight.md#parseanimationranges)
