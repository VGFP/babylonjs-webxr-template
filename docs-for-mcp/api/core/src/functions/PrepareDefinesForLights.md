[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForLights

# Function: PrepareDefinesForLights()

> **PrepareDefinesForLights**(`scene`, `mesh`, `defines`, `specularSupported`, `maxSimultaneousLights?`, `disableLighting?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:684](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L684)

Prepares the defines related to the light information passed in parameter

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene we are intending to draw

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh the effect is compiling for

### defines

`any`

The defines to update

### specularSupported

`boolean`

Specifies whether specular is supported or not (override lights data)

### maxSimultaneousLights?

`number` = `4`

Specifies how manuy lights can be added to the effect at max

### disableLighting?

`boolean` = `false`

Specifies whether the lighting is disabled (override scene and light)

## Returns

`boolean`

true if normals will be required for the rest of the effect
