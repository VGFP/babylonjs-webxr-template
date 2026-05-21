[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointLight

# Class: PointLight

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L21)

A point light is a light defined by an unique point in world space.
The light is emitted in every direction from this point.
A good example of a point light is a standard light bulb.
Documentation: https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction

## Extends

- [`ShadowLight`](ShadowLight.md)

## Constructors

### Constructor

> **new PointLight**(`name`, `position`, `scene?`, `dontAddToScene?`): `PointLight`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L81)

Creates a PointLight object from the passed name and position (Vector3) and adds it in the scene.
A PointLight emits the light in every direction.
It can cast shadows.
If the scene camera is already defined and you want to set your PointLight at the camera position, just set it :
```javascript
var pointLight = new PointLight("pl", camera.position, scene);
```
Documentation : https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction

#### Parameters

##### name

`string`

The light friendly name

##### position

[`Vector3`](Vector3.md)

The position of the point light in the scene

##### scene?

[`Scene`](Scene.md)

The scene the lights belongs to

##### dontAddToScene?

`boolean`

True to not add the light to the scene

#### Returns

`PointLight`

#### Overrides

[`ShadowLight`](ShadowLight.md).[`constructor`](ShadowLight.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L173)

Gets a list of Animations associated with the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`animations`](ShadowLight.md#animations)

***

### customProjectionMatrixBuilder

> **customProjectionMatrixBuilder**: (`viewMatrix`, `renderList`, `result`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L204)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L116)

Diffuse gives the basic color to an object.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`diffuse`](ShadowLight.md#diffuse)

***

### falloffType

> **falloffType**: `number` = `Light.FALLOFF_DEFAULT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L134)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`id`](ShadowLight.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`inspectableCustomProperties`](ShadowLight.md#inspectablecustomproperties)

***

### intensity

> **intensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L142)

Strength of the light.
Note: By default it is define in the framework own unit.
Note: In PBR materials the intensityMode can be use to chose what unit the intensity is defined in.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`intensity`](ShadowLight.md#intensity)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`metadata`](ShadowLight.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L89)

Gets or sets the name of the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`name`](ShadowLight.md#name)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onAccessibilityTagChangedObservable`](ShadowLight.md#onaccessibilitytagchangedobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onDisposeObservable`](ShadowLight.md#ondisposeobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onReady`](ShadowLight.md#onready)

***

### renderPriority

> **renderPriority**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L212)

Defines the rendering priority of the lights. It can help in case of fallback or number of lights
exceeding the number allowed of the materials.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`renderPriority`](ShadowLight.md#renderpriority)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`reservedDataStore`](ShadowLight.md#reserveddatastore)

***

### specular

> **specular**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L123)

Specular produces a highlight color on an object.
Note: This is not affecting PBR materials.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`specular`](ShadowLight.md#specular)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`state`](ShadowLight.md#state)

***

### transformedDirection

> **transformedDirection**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L214)

The transformed direction. Direction of the light in world space taking parenting in account.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`transformedDirection`](ShadowLight.md#transformeddirection)

***

### transformedPosition

> **transformedPosition**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L209)

The transformed position. Position of the light in world space taking parenting in account. Needs to be computed by calling computeTransformedInformation.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`transformedPosition`](ShadowLight.md#transformedposition)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`uniqueId`](ShadowLight.md#uniqueid)

***

### FALLOFF\_DEFAULT

> `readonly` `static` **FALLOFF\_DEFAULT**: `0` = `LightConstants.FALLOFF_DEFAULT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L25)

Falloff Default: light is falling off following the material specification:
standard material is using standard falloff whereas pbr material can request special falloff per materials.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`FALLOFF_DEFAULT`](ShadowLight.md#falloff_default)

***

### FALLOFF\_GLTF

> `readonly` `static` **FALLOFF\_GLTF**: `2` = `LightConstants.FALLOFF_GLTF`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L36)

Falloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`FALLOFF_GLTF`](ShadowLight.md#falloff_gltf)

***

### FALLOFF\_PHYSICAL

> `readonly` `static` **FALLOFF\_PHYSICAL**: `1` = `LightConstants.FALLOFF_PHYSICAL`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L30)

Falloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`FALLOFF_PHYSICAL`](ShadowLight.md#falloff_physical)

***

### FALLOFF\_STANDARD

> `readonly` `static` **FALLOFF\_STANDARD**: `3` = `LightConstants.FALLOFF_STANDARD`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L42)

Falloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`FALLOFF_STANDARD`](ShadowLight.md#falloff_standard)

***

### INTENSITYMODE\_AUTOMATIC

> `readonly` `static` **INTENSITYMODE\_AUTOMATIC**: `0` = `LightConstants.INTENSITYMODE_AUTOMATIC`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L71)

Each light type uses the default quantity according to its type:
     point/spot lights use luminous intensity
     directional lights use illuminance

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_AUTOMATIC`](ShadowLight.md#intensitymode_automatic)

***

### INTENSITYMODE\_ILLUMINANCE

> `readonly` `static` **INTENSITYMODE\_ILLUMINANCE**: `3` = `LightConstants.INTENSITYMODE_ILLUMINANCE`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L83)

lux (lm/m^2)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_ILLUMINANCE`](ShadowLight.md#intensitymode_illuminance)

***

### INTENSITYMODE\_LUMINANCE

> `readonly` `static` **INTENSITYMODE\_LUMINANCE**: `4` = `LightConstants.INTENSITYMODE_LUMINANCE`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L87)

nit (cd/m^2)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_LUMINANCE`](ShadowLight.md#intensitymode_luminance)

***

### INTENSITYMODE\_LUMINOUSINTENSITY

> `readonly` `static` **INTENSITYMODE\_LUMINOUSINTENSITY**: `2` = `LightConstants.INTENSITYMODE_LUMINOUSINTENSITY`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L79)

candela (lm/sr)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_LUMINOUSINTENSITY`](ShadowLight.md#intensitymode_luminousintensity)

***

### INTENSITYMODE\_LUMINOUSPOWER

> `readonly` `static` **INTENSITYMODE\_LUMINOUSPOWER**: `1` = `LightConstants.INTENSITYMODE_LUMINOUSPOWER`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L75)

lumen (lm)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`INTENSITYMODE_LUMINOUSPOWER`](ShadowLight.md#intensitymode_luminouspower)

***

### LIGHTMAP\_DEFAULT

> `readonly` `static` **LIGHTMAP\_DEFAULT**: `0` = `LightConstants.LIGHTMAP_DEFAULT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L51)

If every light affecting the material is in this lightmapMode,
material.lightmapTexture adds or multiplies
(depends on material.useLightmapAsShadowmap)
after every other light calculations.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTMAP_DEFAULT`](ShadowLight.md#lightmap_default)

***

### LIGHTMAP\_SHADOWSONLY

> `readonly` `static` **LIGHTMAP\_SHADOWSONLY**: `2` = `LightConstants.LIGHTMAP_SHADOWSONLY`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L63)

material.lightmapTexture as only lighting
no light calculation from this light
only adds dynamic shadows from this light

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTMAP_SHADOWSONLY`](ShadowLight.md#lightmap_shadowsonly)

***

### LIGHTMAP\_SPECULAR

> `readonly` `static` **LIGHTMAP\_SPECULAR**: `1` = `LightConstants.LIGHTMAP_SPECULAR`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L57)

material.lightmapTexture as only diffuse lighting from this light
adds only specular lighting from this light
adds dynamic shadows

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTMAP_SPECULAR`](ShadowLight.md#lightmap_specular)

***

### LIGHTTYPEID\_DIRECTIONALLIGHT

> `readonly` `static` **LIGHTTYPEID\_DIRECTIONALLIGHT**: `1` = `LightConstants.LIGHTTYPEID_DIRECTIONALLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L97)

Light type const id of the directional light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_DIRECTIONALLIGHT`](ShadowLight.md#lighttypeid_directionallight)

***

### LIGHTTYPEID\_HEMISPHERICLIGHT

> `readonly` `static` **LIGHTTYPEID\_HEMISPHERICLIGHT**: `3` = `LightConstants.LIGHTTYPEID_HEMISPHERICLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L105)

Light type const id of the hemispheric light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_HEMISPHERICLIGHT`](ShadowLight.md#lighttypeid_hemisphericlight)

***

### LIGHTTYPEID\_POINTLIGHT

> `readonly` `static` **LIGHTTYPEID\_POINTLIGHT**: `0` = `LightConstants.LIGHTTYPEID_POINTLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L93)

Light type const id of the point light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_POINTLIGHT`](ShadowLight.md#lighttypeid_pointlight)

***

### LIGHTTYPEID\_RECT\_AREALIGHT

> `readonly` `static` **LIGHTTYPEID\_RECT\_AREALIGHT**: `4` = `LightConstants.LIGHTTYPEID_RECT_AREALIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L110)

Light type const id of the area light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_RECT_AREALIGHT`](ShadowLight.md#lighttypeid_rect_arealight)

***

### LIGHTTYPEID\_SPOTLIGHT

> `readonly` `static` **LIGHTTYPEID\_SPOTLIGHT**: `2` = `LightConstants.LIGHTTYPEID_SPOTLIGHT`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L101)

Light type const id of the spot light.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`LIGHTTYPEID_SPOTLIGHT`](ShadowLight.md#lighttypeid_spotlight)

## Accessors

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L137)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L132)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L325)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L332)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L468)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L48)

Gets the direction if it has been set.
In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **direction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L55)

In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

In 2d mode (needCube being false), the direction used to cast the shadow.

#### Overrides

[`ShadowLight`](ShadowLight.md).[`direction`](ShadowLight.md#direction)

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L151)

Gets or sets a boolean used to define if the node must be serialized

##### Returns

`boolean`

#### Set Signature

> **set** **doNotSerialize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L163)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L255)

Gets the meshes not impacted by this light.

##### Returns

[`AbstractMesh`](AbstractMesh.md)[]

#### Set Signature

> **set** **excludedMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L261)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L272)

Gets the layer id use to find what meshes are not impacted by the light.
Inactive if 0

##### Returns

`number`

#### Set Signature

> **set** **excludeWithLayerMask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L279)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L240)

Gets the only meshes impacted by this light.

##### Returns

[`AbstractMesh`](AbstractMesh.md)[]

#### Set Signature

> **set** **includedOnlyMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L246)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L290)

Gets the layer id use to find what meshes are impacted by the light.
Inactive if 0

##### Returns

`number`

#### Set Signature

> **set** **includeOnlyWithLayerMask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L297)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L269)

If set to true, this node, when renderable, will only be visible if its parent(s) are also visible.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **inheritVisibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L273)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L177)

Gets the photometric scale used to interpret the intensity.
This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

##### Returns

`number`

#### Set Signature

> **set** **intensityMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L184)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L281)

Gets or sets a boolean indicating whether this node is visible, either this node itself when it is renderable or its renderable child nodes when `inheritVisibility` is true.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L289)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L307)

Gets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)

##### Returns

`number`

#### Set Signature

> **set** **lightmapMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L313)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onClonedObservable`](ShadowLight.md#onclonedobservable)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L356)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`onEnabledStateChangedObservable`](ShadowLight.md#onenabledstatechangedobservable)

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L261)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L222)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L137)

Sets the position the shadow will be casted from. Also use as the light position for both
point and spot lights.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L144)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L194)

Gets the light radius used by PBR Materials to simulate soft area lights.

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L200)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L153)

Defines how far from the source the light is impacting in scene units.
Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.

##### Returns

`number`

#### Set Signature

> **set** **range**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L160)

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

### shadowAngle

#### Get Signature

> **get** **shadowAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L30)

Getter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
This specifies what angle the shadow will use to be created.

It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.

##### Returns

`number`

#### Set Signature

> **set** **shadowAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L39)

Setter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback
This specifies what angle the shadow will use to be created.

It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowEnabled

#### Get Signature

> **get** **shadowEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L220)

Gets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
the current shadow generator.

##### Returns

`boolean`

#### Set Signature

> **set** **shadowEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L227)

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

### shadowMaxZ

#### Get Signature

> **get** **shadowMaxZ**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L189)

Sets the shadow projection clipping maximum z value.

##### Returns

`number`

#### Set Signature

> **set** **shadowMaxZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L195)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L173)

Gets the shadow projection clipping minimum z value.

##### Returns

`number`

#### Set Signature

> **set** **shadowMinZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L179)

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

### worldMatrixFromCache

#### Get Signature

> **get** **worldMatrixFromCache**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L512)

Returns directly the latest state of the mesh World matrix.
A Matrix is returned.

##### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`worldMatrixFromCache`](ShadowLight.md#worldmatrixfromcache)

## Methods

### \_bindLight()

> **\_bindLight**(`lightIndex`, `scene`, `effect`, `useSpecular`, `receiveShadows?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L434)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L421)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:973](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L973)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:898](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L898)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L563)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L648)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L222)

Computes the transformed information (transformedPosition and transformedDirection in World space) of the current light

#### Returns

`boolean`

true if the information has been computed, false if it does not need to (no parenting)

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`computeTransformedInformation`](ShadowLight.md#computetransformedinformation)

***

### computeWorldMatrix()

> **computeWorldMatrix**(`force?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L332)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:815](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L815)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:832](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L832)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:592](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L592)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L307)

Forces the shadow generator to recompute the projection matrix even if position and direction did not changed.

#### Returns

`void`

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`forceProjectionMatrixCompute`](ShadowLight.md#forceprojectionmatrixcompute)

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L263)

If computeTransformedInformation has been called, returns the ShadowLight absolute position in the world. Otherwise, returns the local position.

#### Returns

[`Vector3`](Vector3.md)

the position vector in world space

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getAbsolutePosition`](ShadowLight.md#getabsoluteposition)

***

### getAnimationByName()

> **getAnimationByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:797](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L797)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L846)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:881](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L881)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getAnimationRanges`](ShadowLight.md#getanimationranges)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:478](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L478)

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

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

#### Param

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getChildMeshes**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:723](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L723)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:731](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L731)

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

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Param

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

#### Call Signature

> **getChildren**\<`T`\>(`predicate?`, `directDescendantsOnly?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:753](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L753)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:761](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L761)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L90)

Returns the string "PointLight"

#### Returns

`string`

the class name

#### Overrides

[`ShadowLight`](ShadowLight.md).[`getClassName`](ShadowLight.md#getclassname)

***

### getDepthMaxZ()

> **getDepthMaxZ**(`activeCamera`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L373)

Gets the maxZ used for shadow according to both the scene and the light.

#### Parameters

##### activeCamera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera we are returning the max for

#### Returns

`number`

the depth max z

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getDepthMaxZ`](ShadowLight.md#getdepthmaxz)

***

### getDepthMinZ()

> **getDepthMinZ**(`activeCamera`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:364](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L364)

Gets the minZ used for shadow according to both the scene and the light.

#### Parameters

##### activeCamera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera we are returning the min for

#### Returns

`number`

the depth min z

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getDepthMinZ`](ShadowLight.md#getdepthminz)

***

### getDepthScale()

> **getDepthScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L245)

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

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

#### Param

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getDescendants**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L693)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:701](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L701)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getEngine`](ShadowLight.md#getengine)

***

### getHierarchyBoundingVectors()

> **getHierarchyBoundingVectors**(`includeDescendants?`, `predicate?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:998](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L998)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:438](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L438)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L281)

Returns the light rotation in euler definition.

#### Returns

[`Vector3`](Vector3.md)

the x y z rotation in local space.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getRotation`](ShadowLight.md#getrotation)

***

### getScaledIntensity()

> **getScaledIntensity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:638](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L638)

Returns the intensity scaled by the Photometric Scale according to the light type and intensity mode.

#### Returns

`number`

the scaled intensity in intensity mode unit

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getScaledIntensity`](ShadowLight.md#getscaledintensity)

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getScene`](ShadowLight.md#getscene)

***

### getShadowDirection()

> **getShadowDirection**(`faceIndex?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L116)

Returns a new Vector3 aligned with the PointLight cube system according to the passed cube face index (integer).

#### Parameters

##### faceIndex?

`number`

The index of the face we are computed the direction to generate shadow

#### Returns

[`Vector3`](Vector3.md)

The set direction in 2d mode otherwise the direction to the cubemap face if needCube() is true

#### Overrides

[`ShadowLight`](ShadowLight.md).[`getShadowDirection`](ShadowLight.md#getshadowdirection)

***

### getShadowGenerator()

> **getShadowGenerator**(`camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`IShadowGenerator`](../interfaces/IShadowGenerator.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:534](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L534)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L546)

Returns all the shadow generators associated to this light

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Map`\<[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>, [`IShadowGenerator`](../interfaces/IShadowGenerator.md)\>\>

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getShadowGenerators`](ShadowLight.md#getshadowgenerators)

***

### getTypeID()

> **getTypeID**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L99)

Returns the integer 0.

#### Returns

`number`

The light Type id as a constant defines in Light.LIGHTTYPEID_x

#### Overrides

[`ShadowLight`](ShadowLight.md).[`getTypeID`](ShadowLight.md#gettypeid)

***

### getViewMatrix()

> **getViewMatrix**(`faceIndex?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L410)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:492](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L492)

Returns the latest update of the World matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`getWorldMatrix`](ShadowLight.md#getworldmatrix)

***

### isDescendantOf()

> **isDescendantOf**(`ancestor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:655](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L655)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`isDisposed`](ShadowLight.md#isdisposed)

***

### isEnabled()

> **isEnabled**(`checkAncestors?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:613](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L613)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:592](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L592)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L601)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L107)

Specifies whether or not the shadowmap should be a cube texture.

#### Returns

`boolean`

true if the shadowmap needs to be a cube texture.

#### Overrides

[`ShadowLight`](ShadowLight.md).[`needCube`](ShadowLight.md#needcube)

***

### needProjectionMatrixCompute()

> **needProjectionMatrixCompute**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L300)

Detects if the projection matrix requires to be recomputed this frame.

#### Returns

`boolean`

true if it requires to be recomputed otherwise, false.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`needProjectionMatrixCompute`](ShadowLight.md#needprojectionmatrixcompute)

***

### prepareLightSpecificDefines()

> **prepareLightSpecificDefines**(`defines`, `lightIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L222)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:451](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L451)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:672](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L672)

Serializes the current light into a Serialization object.

#### Returns

`any`

the serialized object.

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`serialize`](ShadowLight.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:912](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L912)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`ShadowLight`](ShadowLight.md).[`serializeAnimationRanges`](ShadowLight.md#serializeanimationranges)

***

### setDirectionToTarget()

> **setDirectionToTarget**(`target`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L272)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:523](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L523)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/shadowLight.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/shadowLight.ts#L384)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:500](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L500)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L421)

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

> **transferToEffect**(`effect`, `lightIndex`): `PointLight`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L187)

Sets the passed Effect "effect" with the PointLight transformed position (or position, if none) and passed name (string).

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to update

##### lightIndex

`string`

The index of the light in the effect to update

#### Returns

`PointLight`

The point light

#### Overrides

[`ShadowLight`](ShadowLight.md).[`transferToEffect`](ShadowLight.md#transfertoeffect)

***

### transferToNodeMaterialEffect()

> **transferToNodeMaterialEffect**(`effect`, `lightDataUniformName`): `PointLight`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/pointLight.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/pointLight.ts#L206)

Sets the passed Effect "effect" with the Light information.

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to update

##### lightDataUniformName

`string`

The uniform used to store light data (position or direction)

#### Returns

`PointLight`

The light

#### Overrides

[`ShadowLight`](ShadowLight.md).[`transferToNodeMaterialEffect`](ShadowLight.md#transfertonodematerialeffect)

***

### AddNodeConstructor()

> `static` **AddNodeConstructor**(`type`, `constructorFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L61)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L73)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:716](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L716)

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

Defined in: [babylonjs-source/packages/dev/core/src/Lights/light.ts:733](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/light.ts#L733)

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

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:984](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L984)

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
