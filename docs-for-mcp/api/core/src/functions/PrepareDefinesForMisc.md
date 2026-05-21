[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForMisc

# Function: PrepareDefinesForMisc()

> **PrepareDefinesForMisc**(`mesh`, `scene`, `useLogarithmicDepth`, `pointsCloud`, `fogEnabled`, `alphaTest`, `defines`, `applyDecalAfterDetail?`, `useVertexPulling?`, `renderingMesh?`, `setVertexOutputInvariant?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L616)

Helper used to prepare the list of defines associated with misc. values for shader compilation

## Parameters

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

defines the current mesh

### scene

[`Scene`](../classes/Scene.md)

defines the current scene

### useLogarithmicDepth

`boolean`

defines if logarithmic depth has to be turned on

### pointsCloud

`boolean`

defines if point cloud rendering has to be turned on

### fogEnabled

`boolean`

defines if fog has to be turned on

### alphaTest

`boolean`

defines if alpha testing has to be turned on

### defines

`any`

defines the current list of defines

### applyDecalAfterDetail?

`boolean` = `false`

Defines if the decal is applied after or before the detail

### useVertexPulling?

`boolean` = `false`

Defines if vertex pulling is used

### renderingMesh?

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh used for rendering

### setVertexOutputInvariant?

`boolean`

Defines if the vertex output should be invariant

## Returns

`void`
