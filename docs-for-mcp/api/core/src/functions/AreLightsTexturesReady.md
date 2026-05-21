[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AreLightsTexturesReady

# Function: AreLightsTexturesReady()

> **AreLightsTexturesReady**(`scene`, `mesh`, `maxSimultaneousLights`, `disableLighting?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:660](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L660)

Checks whether the texture resources used by the lights that will affect the given mesh are ready.
This mirrors the light iteration performed by [PrepareDefinesForLights](PrepareDefinesForLights.md) and [BindLights](BindLights.md):
it only considers lights that can affect the mesh (already filtered into `mesh.lightSources`)
and respects the material's `maxSimultaneousLights` cap and the `disableLighting` flag.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene the mesh belongs to

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh to check

### maxSimultaneousLights

`number`

The material's max simultaneous lights cap

### disableLighting?

`boolean` = `false`

Whether lighting is disabled for the material

## Returns

`boolean`

true if all affecting lights report their textures are ready
