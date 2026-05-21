[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForAttributes

# Function: PrepareDefinesForAttributes()

> **PrepareDefinesForAttributes**(`mesh`, `defines`, `useVertexColor`, `useBones`, `useMorphTargets?`, `useVertexAlpha?`, `useBakedVertexAnimation?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:1153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L1153)

Prepares the defines used in the shader depending on the attributes data available in the mesh

## Parameters

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh containing the geometry data we will draw

### defines

`any`

The defines to update

### useVertexColor

`boolean`

Precise whether vertex colors should be used or not (override mesh info)

### useBones

`boolean`

Precise whether bones should be used or not (override mesh info)

### useMorphTargets?

`boolean` = `false`

Precise whether morph targets should be used or not (override mesh info)

### useVertexAlpha?

`boolean` = `true`

Precise whether vertex alpha should be used or not (override mesh info)

### useBakedVertexAnimation?

`boolean` = `true`

Precise whether baked vertex animation should be used or not (override mesh info)

## Returns

`boolean`

false if defines are considered not dirty and have not been checked
