[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeMaterialParseFromSnippetAsync

# Function: NodeMaterialParseFromSnippetAsync()

> **NodeMaterialParseFromSnippetAsync**(`this`, `snippetId`, `scene?`, `rootUrl?`, `nodeMaterial?`, `skipBuild?`, `waitForTextureReadyness?`, `urlRewriter?`, `options?`): `Promise`\<[`NodeMaterial`](../classes/NodeMaterial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterial.pure.ts:2726](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/nodeMaterial.pure.ts#L2726)

Creates a node material from a snippet saved by the node material editor

## Parameters

### this

`void` \| *typeof* [`NodeMaterial`](../namespaces/NodeMaterial/README.md)

### snippetId

`string`

defines the snippet to load

### scene?

[`Scene`](../classes/Scene.md) = `...`

defines the hosting scene

### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

### nodeMaterial?

[`NodeMaterial`](../classes/NodeMaterial.md)

defines a node material to update (instead of creating a new one)

### skipBuild?

`boolean` = `false`

defines whether to build the node material

### waitForTextureReadyness?

`boolean` = `false`

defines whether to wait for texture readiness resolving the promise (default: false)

### urlRewriter?

(`url`) => `string`

defines a function used to rewrite urls

### options?

`Partial`\<[`INodeMaterialOptions`](../interfaces/INodeMaterialOptions.md)\>

defines options to be used with the node material

## Returns

`Promise`\<[`NodeMaterial`](../classes/NodeMaterial.md)\>

a promise that will resolve to the new node material
