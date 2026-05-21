[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebGPURenderPipelineAsyncCreationOptions

# Interface: IWebGPURenderPipelineAsyncCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L212)

Options for pre-warming a render pipeline asynchronously.
All render state properties are optional and default to the most common opaque rendering state.

## Properties

### alphaMode?

> `optional` **alphaMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L241)

The alpha blending mode (e.g. Constants.ALPHA_DISABLE, Constants.ALPHA_COMBINE).
Defaults to Constants.ALPHA_DISABLE.

***

### colorFormat?

> `optional` **colorFormat?**: `GPUTextureFormat`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L232)

The color render target format. Defaults to the engine's current canvas color format.

***

### cullEnabled?

> `optional` **cullEnabled?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L257)

Whether back-face culling is enabled. Defaults to true.

***

### cullFace?

> `optional` **cullFace?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L261)

Which face to cull (1 = back, 2 = front). Defaults to 1 (back).

***

### depthCompare?

> `optional` **depthCompare?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L253)

The depth comparison function (e.g. Constants.LEQUAL). Defaults to Constants.LEQUAL.

***

### depthStencilFormat?

> `optional` **depthStencilFormat?**: `GPUTextureFormat`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L236)

The depth-stencil render target format. Defaults to the engine's current depth format.

***

### depthTest?

> `optional` **depthTest?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L249)

Whether depth testing is enabled. Defaults to true.

***

### depthWrite?

> `optional` **depthWrite?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L245)

Whether depth writing is enabled. Defaults to true.

***

### effect

> **effect**: [`Effect`](../classes/Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L216)

The compiled effect (shader stages) for the pipeline.

***

### fillMode?

> `optional` **fillMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L224)

The fill mode / primitive topology. Defaults to Constants.MATERIAL_TriangleFillMode.

***

### frontFace?

> `optional` **frontFace?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L265)

Front face winding order (1 = CCW, 2 = CW). Defaults to 2 (CW).

***

### mesh

> **mesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L220)

The mesh whose vertex buffer layout to use.

***

### sampleCount?

> `optional` **sampleCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L228)

The MSAA sample count. Defaults to the engine's current sample count.

***

### stencilEnabled?

> `optional` **stencilEnabled?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L273)

Whether stencil testing is enabled. Defaults to false.

***

### writeMask?

> `optional` **writeMask?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/webgpuEngine.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/webgpuEngine.ts#L269)

Color channel write mask (bitmask of RGBA channels). Defaults to 0xF (all channels).
