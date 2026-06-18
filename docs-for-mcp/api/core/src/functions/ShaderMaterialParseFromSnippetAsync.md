[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ShaderMaterialParseFromSnippetAsync

# Function: ShaderMaterialParseFromSnippetAsync()

> **ShaderMaterialParseFromSnippetAsync**(`this`, `snippetId`, `scene`, `rootUrl?`): `Promise`\<[`ShaderMaterial`](../classes/ShaderMaterial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shaderMaterial.pure.ts:1915](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1915)

Creates a ShaderMaterial from a snippet saved by the Inspector

## Parameters

### this

`void` \| *typeof* [`ShaderMaterial`](../namespaces/ShaderMaterial/README.md)

### snippetId

`string`

defines the snippet to load

### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

## Returns

`Promise`\<[`ShaderMaterial`](../classes/ShaderMaterial.md)\>

a promise that will resolve to the new ShaderMaterial
