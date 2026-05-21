[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IIOptionShadowDepthMaterial

# Interface: IIOptionShadowDepthMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L19)

Options to be used when creating a shadow depth material

## Properties

### doNotInjectCode?

> `optional` **doNotInjectCode?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L33)

Set doNotInjectCode if the specific shadow map generation code is already implemented by the material. That will prevent this code to be injected twice by ShadowDepthWrapper

***

### remappedVariables?

> `optional` **remappedVariables?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L27)

Variables in the vertex shader code that need to have their names remapped.
The format is: ["var_name", "var_remapped_name", "var_name", "var_remapped_name", ...]
"var_name" should be either: worldPos or vNormalW
So, if the variable holding the world position in your vertex shader is not named worldPos, you must tell the system
the name to use instead by using: ["worldPos", "myWorldPosVar"] assuming the variable is named myWorldPosVar in your code.
If the normal must also be remapped: ["worldPos", "myWorldPosVar", "vNormalW", "myWorldNormal"]

***

### standalone?

> `optional` **standalone?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L30)

Set standalone to true if the base material wrapped by ShadowDepthMaterial is not used for a regular object but for depth shadow generation only
