[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeMaterialParse

# Function: NodeMaterialParse()

> **NodeMaterialParse**(`source`, `scene`, `rootUrl?`, `shaderLanguage?`): [`NodeMaterial`](../classes/NodeMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterial.pure.ts:2639](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterial.pure.ts#L2639)

Creates a node material from parsed material data

## Parameters

### source

`any`

defines the JSON representation of the material

### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md) = `ShaderLanguage.GLSL`

defines the language to use (GLSL by default)

## Returns

[`NodeMaterial`](../classes/NodeMaterial.md)

a new node material
