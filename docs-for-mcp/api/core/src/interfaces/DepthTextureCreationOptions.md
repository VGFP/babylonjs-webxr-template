[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DepthTextureCreationOptions

# Interface: DepthTextureCreationOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L51)

Define options used to create a depth texture

## Properties

### bilinearFiltering?

> `optional` **bilinearFiltering?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L55)

Specifies whether or not bilinear filtering is enable on the texture

***

### comparisonFunction?

> `optional` **comparisonFunction?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L57)

Specifies the comparison function to set on the texture. If 0 or undefined, the texture is not in comparison mode

***

### depthTextureFormat?

> `optional` **depthTextureFormat?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L63)

Specifies the depth texture format to use

***

### generateStencil?

> `optional` **generateStencil?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L53)

Specifies whether or not a stencil should be allocated in the texture. Not used if depthTextureFormat is supplied, in which case stencil creation will depend on this value.

***

### isCube?

> `optional` **isCube?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L59)

Specifies if the created texture is a cube texture

***

### label?

> `optional` **label?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L65)

Label of the texture (used for debugging only)

***

### samples?

> `optional` **samples?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/textureCreationOptions.ts#L61)

Specifies the sample count of the depth/stencil texture texture
