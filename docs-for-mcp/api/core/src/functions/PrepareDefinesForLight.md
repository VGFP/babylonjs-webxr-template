[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForLight

# Function: PrepareDefinesForLight()

> **PrepareDefinesForLight**(`scene`, `mesh`, `light`, `lightIndex`, `defines`, `specularSupported`, `state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:928](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L928)

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
