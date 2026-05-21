[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IShaderPath

# Type Alias: IShaderPath

> **IShaderPath** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L28)

Defines the route to the shader code. The priority is as follows:
 * object: `{ vertexSource: "vertex shader code string", fragmentSource: "fragment shader code string" }` for directly passing the shader code
 * object: `{ vertexElement: "vertexShaderCode", fragmentElement: "fragmentShaderCode" }`, used with shader code in script tags
 * object: `{ vertex: "custom", fragment: "custom" }`, used with `Effect.ShadersStore["customVertexShader"]` and `Effect.ShadersStore["customFragmentShader"]`
 * string: `"./COMMON_NAME"`, used with external files COMMON_NAME.vertex.fx and COMMON_NAME.fragment.fx in index.html folder.

## Properties

### fragment?

> `optional` **fragment?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L47)

Used with Effect.ShadersStore. If the `fragment` is set to `"custom`, then
Babylon.js will read from Effect.ShadersStore["customFragmentShader"]

***

### fragmentElement?

> `optional` **fragmentElement?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L55)

Used with shader code in script tags

***

### fragmentSource?

> `optional` **fragmentSource?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L37)

Directly pass the shader code

***

### spectorName?

> `optional` **spectorName?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L59)

Defines the name appearing in spector when framgent/vertex...source are being used

***

### vertex?

> `optional` **vertex?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L42)

Used with Effect.ShadersStore. If the `vertex` is set to `"custom`, then
Babylon.js will read from Effect.ShadersStore["customVertexShader"]

***

### vertexElement?

> `optional` **vertexElement?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L51)

Used with shader code in script tags

***

### vertexSource?

> `optional` **vertexSource?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effect.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effect.ts#L33)

Directly pass the shader code
