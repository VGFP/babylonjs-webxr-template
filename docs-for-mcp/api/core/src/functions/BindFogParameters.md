[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BindFogParameters

# Function: BindFogParameters()

> **BindFogParameters**(`scene`, `mesh?`, `effect?`, `linearSpace?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L48)

Binds the fog information from the scene to the effect for the given mesh.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene the lights belongs to

### mesh?

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh we are binding the information to render

### effect?

[`Effect`](../classes/Effect.md)

The effect we are binding the data to

### linearSpace?

`boolean` = `false`

Defines if the fog effect is applied in linear space

## Returns

`void`
