[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InstancingAttributeInfo

# Interface: InstancingAttributeInfo

Defined in: [babylonjs-source/packages/dev/core/src/Engines/instancingAttributeInfo.ts:5](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/instancingAttributeInfo.ts#L5)

Interface for attribute information associated with buffer instantiation

## Properties

### attributeName

> **attributeName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/instancingAttributeInfo.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/instancingAttributeInfo.ts#L10)

Name of the GLSL attribute
if attribute index is not specified, this is used to retrieve the index from the effect

***

### attributeSize

> **attributeSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/instancingAttributeInfo.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/instancingAttributeInfo.ts#L21)

size of the attribute, 1, 2, 3 or 4

***

### attributeType?

> `optional` **attributeType?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/instancingAttributeInfo.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/instancingAttributeInfo.ts#L38)

type of the attribute, gl.BYTE, gl.UNSIGNED_BYTE, gl.SHORT, gl.UNSIGNED_SHORT, gl.FIXED, gl.FLOAT.
default is FLOAT

***

### divisor?

> `optional` **divisor?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/instancingAttributeInfo.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/instancingAttributeInfo.ts#L32)

Modifies the rate at which generic vertex attributes advance when rendering multiple instances
default to 1

***

### index?

> `optional` **index?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/instancingAttributeInfo.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/instancingAttributeInfo.ts#L16)

Index/offset of the attribute in the vertex shader
if not specified, this will be computes from the name.

***

### normalized?

> `optional` **normalized?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/instancingAttributeInfo.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/instancingAttributeInfo.ts#L43)

normalization of fixed-point data. behavior unclear, use FALSE, default is FALSE

***

### offset

> **offset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/instancingAttributeInfo.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/instancingAttributeInfo.ts#L26)

Offset of the data in the Vertex Buffer acting as the instancing buffer
