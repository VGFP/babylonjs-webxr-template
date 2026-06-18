[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeometryRenderingConfiguration

# Type Alias: GeometryRenderingConfiguration

> **GeometryRenderingConfiguration** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L34)

Configuration for geometry rendering.
A configuration is created for each rendering pass a geometry rendering is used in.

## Properties

### currentViewProjection

> **currentViewProjection**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L53)

Current view projection matrix.

***

### defines

> **defines**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L38)

Defines used for the geometry rendering.

#### Index Signature

\[`name`: `string`\]: `number`

***

### excludedSkinnedMesh

> **excludedSkinnedMesh**: [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L68)

List of excluded skinned meshes.

***

### lastUpdateFrameId

> **lastUpdateFrameId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L63)

Last frame id the configuration was updated.

***

### previousBones

> **previousBones**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:58](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L58)

Previous bones for skinned meshes.

#### Index Signature

\[`index`: `number`\]: `Float32Array`\<`ArrayBufferLike`\>

***

### previousViewProjection

> **previousViewProjection**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L48)

Previous view projection matrix.

***

### previousWorldMatrices

> **previousWorldMatrices**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L43)

Previous world matrices for meshes.

#### Index Signature

\[`index`: `number`\]: [`Matrix`](../classes/Matrix.md)

***

### reverseCulling

> **reverseCulling**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.geometryrendering.ts#L73)

Whether to reverse culling for the geometry rendering (meaning, if back faces should be culled, front faces are culled instead, and the other way around).
