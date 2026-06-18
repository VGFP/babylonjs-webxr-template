[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshUVSpaceRenderer

# Class: MeshUVSpaceRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L54)

**`Since`**

Class used to render in the mesh UV space
 5.49.1

## Constructors

### Constructor

> **new MeshUVSpaceRenderer**(`mesh`, `scene`, `options?`): `MeshUVSpaceRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L156)

Creates a new MeshUVSpaceRenderer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh used for the source UV space

##### scene

[`Scene`](Scene.md)

The scene the mesh belongs to

##### options?

[`IMeshUVSpaceRendererOptions`](../interfaces/IMeshUVSpaceRendererOptions.md)

The options to use when creating the texture

#### Returns

`MeshUVSpaceRenderer`

## Properties

### clearColor

> **clearColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L131)

Clear color of the texture

***

### texture

> **texture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L138)

Target texture used for rendering
If you don't set the property, a RenderTargetTexture will be created internally given the options provided to the constructor.
If you provide a RenderTargetTexture, it will be used directly.

## Accessors

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L146)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L269)

Clears the texture map

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L289)

Disposes of the resources

#### Returns

`void`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L208)

Checks if the texture is ready to be used

#### Returns

`boolean`

true if the texture is ready to be used

***

### renderTexture()

> **renderTexture**(`texture`, `position`, `normal`, `size`, `angle?`, `checkIsReady?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/meshUVSpaceRenderer.pure.ts#L236)

Projects and renders a texture in the mesh UV space

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

The texture

##### position

[`Vector3`](Vector3.md)

The position of the center of projection (world space coordinates)

##### normal

[`Vector3`](Vector3.md)

The direction of the projection (world space coordinates)

##### size

[`Vector3`](Vector3.md)

The size of the projection

##### angle?

`number` = `0`

The rotation angle around the direction of the projection (default: 0)

##### checkIsReady?

`boolean` = `true`

If true, it will check if the texture is ready before rendering (default: true). If the texture is not ready, a new attempt will be scheduled in 16ms

#### Returns

`void`
