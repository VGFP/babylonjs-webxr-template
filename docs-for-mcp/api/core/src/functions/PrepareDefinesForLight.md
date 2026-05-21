[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForLight

# Function: PrepareDefinesForLight()

> **PrepareDefinesForLight**(`scene`, `mesh`, `light`, `lightIndex`, `defines`, `specularSupported`, `state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:915](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L915)

Prepares the defines related to the light information passed in parameter

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene we are intending to draw

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh the effect is compiling for

### light

[`Light`](../classes/Light.md)

The light the effect is compiling for

### lightIndex

`number`

The index of the light

### defines

`any`

The defines to update

### specularSupported

`boolean`

Specifies whether specular is supported or not (override lights data)

### state

Defines the current state regarding what is needed (normals, etc...)

#### lightmapMode

`boolean`

#### needNormals

`boolean`

#### needRebuild

`boolean`

#### shadowEnabled

`boolean`

#### specularEnabled

`boolean`

## Returns

`void`
