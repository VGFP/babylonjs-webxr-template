[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MorphTarget

# Class: MorphTarget

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L19)

Defines a target to use with MorphTargetManager

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/morphTargets

## Implements

- [`IAnimatable`](../interfaces/IAnimatable.md)

## Constructors

### Constructor

> **new MorphTarget**(`name`, `influence?`, `scene?`, `morphTargetManager?`): `MorphTarget`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L98)

Creates a new MorphTarget

#### Parameters

##### name

`string`

defines the name of the target

##### influence?

`number` = `0`

defines the influence to use

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `null`

defines the scene the morphtarget belongs to

##### morphTargetManager?

[`Nullable`](../type-aliases/Nullable.md)\<[`MorphTargetManager`](MorphTargetManager.md)\> = `null`

morph target manager this morph target is associated with

#### Returns

`MorphTarget`

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L23)

Gets or sets the list of animations

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L67)

Gets or sets the id of the morph Target

***

### morphTargetManager

> **morphTargetManager**: [`Nullable`](../type-aliases/Nullable.md)\<[`MorphTargetManager`](MorphTargetManager.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L73)

Gets or sets the morph target manager this morph target is associated with

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L99)

defines the name of the target

***

### onInfluenceChanged

> **onInfluenceChanged**: [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L38)

Observable raised when the influence changes

## Accessors

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L80)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L87)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

##### Returns

`void`

***

### hasColors

#### Get Signature

> **get** **hasColors**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L156)

##### Returns

`boolean`

***

### hasNormals

#### Get Signature

> **get** **hasNormals**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L131)

Gets a boolean defining if the target contains normal data

##### Returns

`boolean`

***

### hasPositions

#### Get Signature

> **get** **hasPositions**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L124)

Gets a boolean defining if the target contains position data

##### Returns

`boolean`

***

### hasTangents

#### Get Signature

> **get** **hasTangents**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L138)

Gets a boolean defining if the target contains tangent data

##### Returns

`boolean`

***

### hasUV2s

#### Get Signature

> **get** **hasUV2s**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L152)

Gets a boolean defining if the target contains texture coordinates 2 data

##### Returns

`boolean`

***

### hasUVs

#### Get Signature

> **get** **hasUVs**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L145)

Gets a boolean defining if the target contains texture coordinates data

##### Returns

`boolean`

***

### influence

#### Get Signature

> **get** **influence**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L46)

Gets or sets the influence of this target (ie. its weight in the overall morphing)

##### Returns

`number`

#### Set Signature

> **set** **influence**(`influence`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L50)

##### Parameters

###### influence

`number`

##### Returns

`void`

***

### uniqueId

#### Get Signature

> **get** **uniqueId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L117)

Gets the unique ID of this manager

##### Returns

`number`

***

### vertexCount

#### Get Signature

> **get** **vertexCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L163)

Gets the number of vertices stored in this target

##### Returns

`number`

## Methods

### clone()

> **clone**(): `MorphTarget`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:315](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L315)

Clone the current target

#### Returns

`MorphTarget`

a new MorphTarget

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L370)

Returns the string "MorphTarget"

#### Returns

`string`

"MorphTarget"

***

### getColors()

> **getColors**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L307)

Gets the color data stored in this target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a FloatArray containing the color data (or null if not present)

***

### getNormals()

> **getNormals**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L219)

Gets the normal data stored in this target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a FloatArray containing the normal data (or null if not present)

***

### getPositions()

> **getPositions**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L197)

Gets the position data stored in this target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a FloatArray containing the position data (or null if not present)

***

### getTangents()

> **getTangents**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L241)

Gets the tangent data stored in this target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a FloatArray containing the tangent data (or null if not present)

***

### getUV2s()

> **getUV2s**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L285)

Gets the texture coordinates 2 data stored in this target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a FloatArray containing the texture coordinates 2 data (or null if not present)

***

### getUVs()

> **getUVs**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L263)

Gets the texture coordinates data stored in this target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

a FloatArray containing the texture coordinates data (or null if not present)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:332](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L332)

Serializes the current target into a Serialization object

#### Returns

`any`

the serialized object

***

### setColors()

> **setColors**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L293)

Affects color data to this target

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the color data to use

#### Returns

`void`

***

### setNormals()

> **setNormals**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L205)

Affects normal data to this target

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the normal data to use

#### Returns

`void`

***

### setPositions()

> **setPositions**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L183)

Affects position data to this target

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the position data to use

#### Returns

`void`

***

### setTangents()

> **setTangents**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L227)

Affects tangent data to this target

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the tangent data to use

#### Returns

`void`

***

### setUV2s()

> **setUV2s**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L271)

Affects texture coordinates 2 data to this target

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the texture coordinates 2 data to use

#### Returns

`void`

***

### setUVs()

> **setUVs**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L249)

Affects texture coordinates data to this target

#### Parameters

##### data

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\>

defines the texture coordinates data to use

#### Returns

`void`

***

### FromMesh()

> `static` **FromMesh**(`mesh`, `name?`, `influence?`): `MorphTarget`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:438](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L438)

Creates a MorphTarget from mesh data

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the source mesh

##### name?

`string`

defines the name to use for the new target

##### influence?

`number`

defines the influence to attach to the target

#### Returns

`MorphTarget`

a new MorphTarget

***

### Parse()

> `static` **Parse**(`serializationObject`, `scene?`, `morphTargetManager?`): `MorphTarget`

Defined in: [babylonjs-source/packages/dev/core/src/Morph/morphTarget.ts:383](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Morph/morphTarget.ts#L383)

Creates a new target from serialized data

#### Parameters

##### serializationObject

`any`

defines the serialized data to use

##### scene?

[`Scene`](Scene.md)

defines the hosting scene

##### morphTargetManager?

[`Nullable`](../type-aliases/Nullable.md)\<[`MorphTargetManager`](MorphTargetManager.md)\> = `null`

morph target manager this morph target is associated with

#### Returns

`MorphTarget`

a new MorphTarget
