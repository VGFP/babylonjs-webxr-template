[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IStencilStateProperties

# Interface: IStencilStateProperties

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:4](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L4)

Interface defining the properties of the stencil state.

## Extended by

- [`IStencilState`](IStencilState.md)

## Properties

### backFunc

> **backFunc**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L46)

The stencil comparison function to use for back faces.

***

### backOpDepthFail

> **backOpDepthFail**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L58)

The operation to perform when the stencil test passes but the depth test fails for back faces.

***

### backOpStencilDepthPass

> **backOpStencilDepthPass**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L50)

The operation to perform when both the stencil and depth tests pass for back faces.

***

### backOpStencilFail

> **backOpStencilFail**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L54)

The operation to perform when the stencil test fails for back faces.

***

### enabled

> **enabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L8)

Whether the stencil test is enabled or not.

***

### func

> **func**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L28)

The stencil comparison function to use for front faces.

***

### funcMask

> **funcMask**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L17)

The stencil mask to use for reading.

***

### funcRef

> **funcRef**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L22)

The reference value to use for the stencil test.

***

### mask

> **mask**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L13)

The stencil mask to use for writing.

***

### opDepthFail

> **opDepthFail**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L40)

The operation to perform when the stencil test passes but the depth test fails for front faces.

***

### opStencilDepthPass

> **opStencilDepthPass**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L32)

The operation to perform when both the stencil and depth tests pass for front faces.

***

### opStencilFail

> **opStencilFail**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/States/IStencilState.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/States/IStencilState.ts#L36)

The operation to perform when the stencil test fails for front faces.
