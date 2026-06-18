[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoundingInfoHelper

# Class: BoundingInfoHelper

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts#L15)

Utility class to help with bounding info management
Warning: using the BoundingInfoHelper class may be slower than executing calculations on the CPU!
This will happen if there are a lot of meshes / few vertices (like with the BrainStem model)
The BoundingInfoHelper will perform better if there are few meshes / a lot of vertices
 https://playground.babylonjs.com/#QPOERJ#9 : WebGL
 https://playground.babylonjs.com/#QPOERJ#10 : WebGPU

## Constructors

### Constructor

> **new BoundingInfoHelper**(`engine`): `BoundingInfoHelper`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts#L23)

Creates a new BoundingInfoHelper

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the engine to use

#### Returns

`BoundingInfoHelper`

## Methods

### batchFetchResultsAsync()

> **batchFetchResultsAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts#L78)

Update the bounding info of the meshes registered with batchRegisterAsync, after batchProcess has been called once or several times

#### Returns

`Promise`\<`void`\>

a promise that resolves when the bounding info is/are computed

***

### batchInitializeAsync()

> **batchInitializeAsync**(`target`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts#L57)

Register a mesh / array of meshes to be processed per batch
This method must be called before calling batchProcess (which can be called several times) and batchFetchResultsAsync

#### Parameters

##### target

[`AbstractMesh`](AbstractMesh.md) \| [`AbstractMesh`](AbstractMesh.md)[]

defines the mesh(es) to be processed per batch

#### Returns

`Promise`\<`void`\>

a promise that resolves when the initialization is done

***

### batchProcess()

> **batchProcess**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts#L66)

Processes meshes registered with batchRegisterAsync
If called multiple times, the second, third, etc calls will perform a union of the bounding boxes calculated in the previous calls

#### Returns

`void`

***

### computeAsync()

> **computeAsync**(`target`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts#L46)

Compute the bounding info of a mesh / array of meshes using shaders

#### Parameters

##### target

[`AbstractMesh`](AbstractMesh.md) \| [`AbstractMesh`](AbstractMesh.md)[]

defines the mesh(es) to update

#### Returns

`Promise`\<`void`\>

a promise that resolves when the bounding info is/are computed

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Culling/Helper/boundingInfoHelper.ts#L86)

Dispose and release associated resources

#### Returns

`void`
