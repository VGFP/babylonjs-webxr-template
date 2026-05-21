[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BindLight

# Function: BindLight()

> **BindLight**(`light`, `lightIndex`, `scene`, `effect`, `useSpecular`, `receiveShadows?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:487](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L487)

Binds the lights information from the scene to the effect for the given mesh.

## Parameters

### light

[`Light`](../classes/Light.md)

Light to bind

### lightIndex

`number`

Light index

### scene

[`Scene`](../classes/Scene.md)

The scene where the light belongs to

### effect

[`Effect`](../classes/Effect.md)

The effect we are binding the data to

### useSpecular

`boolean`

Defines if specular is supported

### receiveShadows?

`boolean` = `true`

Defines if the effect (mesh) we bind the light for receives shadows

## Returns

`void`
