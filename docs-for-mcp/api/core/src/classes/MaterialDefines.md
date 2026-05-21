[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MaterialDefines

# Class: MaterialDefines

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:4](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L4)

Manages the defines for the Material

## Indexable

> \[`id`: `string`\]: `any`

## Constructors

### Constructor

> **new MaterialDefines**(`externalProperties?`): `MaterialDefines`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L48)

Creates a new instance

#### Parameters

##### externalProperties?

list of external properties to inject into the object

#### Returns

`MaterialDefines`

## Properties

### VERTEXOUTPUT\_INVARIANT

> **VERTEXOUTPUT\_INVARIANT**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:5](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L5)

## Accessors

### isDirty

#### Get Signature

> **get** **isDirty**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L64)

Specifies if the material needs to be re-calculated

##### Returns

`boolean`

## Methods

### cloneTo()

> **cloneTo**(`other`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L210)

Clones this instance's defines to another instance

#### Parameters

##### other

`MaterialDefines`

material defines to clone values to

#### Returns

`void`

***

### isEqual()

> **isEqual**(`other`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L190)

Specifies if two material defines are equal

#### Parameters

##### other

`MaterialDefines`

A material define instance to compare to

#### Returns

`boolean`

- Boolean indicating if the material defines are equal (true) or not (false)

***

### markAllAsDirty()

> **markAllAsDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L93)

Marks the material to indicate all of its defines need to be re-calculated

#### Returns

`void`

***

### markAsAttributesDirty()

> **markAsAttributesDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L125)

Marks the attribute state as changed

#### Returns

`void`

***

### markAsFresnelDirty()

> **markAsFresnelDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L141)

Marks the fresnel state as changed

#### Returns

`void`

***

### markAsImageProcessingDirty()

> **markAsImageProcessingDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L107)

Marks the material to indicate that image processing needs to be re-calculated

#### Returns

`void`

***

### markAsLightDirty()

> **markAsLightDirty**(`disposed?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L116)

Marks the material to indicate the lights need to be re-calculated

#### Parameters

##### disposed?

`boolean` = `false`

Defines whether the light is dirty due to dispose or not

#### Returns

`void`

***

### markAsMiscDirty()

> **markAsMiscDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L149)

Marks the misc state as changed

#### Returns

`void`

***

### markAsPrePassDirty()

> **markAsPrePassDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L157)

Marks the prepass state as changed

#### Returns

`void`

***

### markAsProcessed()

> **markAsProcessed**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L71)

Marks the material to indicate that it has been re-calculated

#### Returns

`void`

***

### markAsTexturesDirty()

> **markAsTexturesDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L133)

Marks the texture state as changed

#### Returns

`void`

***

### markAsUnprocessed()

> **markAsUnprocessed**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L86)

Marks the material to indicate that it needs to be re-calculated

#### Returns

`void`

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L165)

Rebuilds the material defines

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L225)

Resets the material define values

#### Returns

`void`

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialDefines.ts:252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialDefines.ts#L252)

Converts the material define values to a string

#### Returns

`string`

- String of material define information
