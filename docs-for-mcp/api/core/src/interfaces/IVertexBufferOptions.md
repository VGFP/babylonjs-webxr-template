[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IVertexBufferOptions

# Interface: IVertexBufferOptions

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L285)

Options to be used when creating a vertex buffer

## Properties

### divisor?

> `optional` **divisor?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L325)

defines the instance divisor to use (default: 1, only used if instanced is true)

***

### instanced?

> `optional` **instanced?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L301)

whether the buffer is instanced (default: false)

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L333)

label to use for this vertex buffer (debugging purpose)

***

### normalized?

> `optional` **normalized?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L317)

whether the data contains normalized data (default: false)

***

### offset?

> `optional` **offset?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L305)

the offset of the data (default: 0)

***

### postponeInternalCreation?

> `optional` **postponeInternalCreation?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L293)

whether to postpone creating the internal WebGL buffer (default: false)

***

### size?

> `optional` **size?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L309)

the number of components (will be automatically computed from the kind parameter if not specified)

***

### stride?

> `optional` **stride?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L297)

the stride (will be automatically computed from the kind parameter if not specified)

***

### takeBufferOwnership?

> `optional` **takeBufferOwnership?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L329)

defines if the buffer should be released when the vertex buffer is disposed (default: false)

***

### type?

> `optional` **type?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L313)

the type of the component (will be deduce from the data parameter if not specified)

***

### updatable?

> `optional` **updatable?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L289)

whether the data is updatable (default: false)

***

### useBytes?

> `optional` **useBytes?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Buffers/buffer.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Buffers/buffer.ts#L321)

set to true if stride and offset are in bytes (default: false)
