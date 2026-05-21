[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITexturePackerOptions

# Interface: ITexturePackerOptions

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L18)

Defines the basic options interface of a TexturePacker

## Properties

### colnum?

> `optional` **colnum?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L42)

number of columns if using custom column count layout(2).  This defaults to 4.

***

### customFillColor?

> `optional` **customFillColor?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L62)

string value representing the context fill style color.  Defaults to 'black'.

***

### disposeSources?

> `optional` **disposeSources?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L52)

boolean flag to dispose all the source textures.  Defaults to true.

***

### fillBlanks?

> `optional` **fillBlanks?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L57)

Fills the blank cells in a set to the customFillColor.  Defaults to true.

***

### frameSize?

> `optional` **frameSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L67)

Width and Height Value of each Frame in the TexturePacker Sets

***

### layout?

> `optional` **layout?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L37)

number representing the layout style. Defaults to LAYOUT_STRIP

***

### map?

> `optional` **map?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L22)

Custom targets for the channels of a texture packer.  Default is all the channels of the Standard Material

***

### paddingColor?

> `optional` **paddingColor?**: [`Color3`](../classes/Color3.md) \| [`Color4`](../classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L82)

If in SUBUV_COLOR padding mode what color to use.

***

### paddingMode?

> `optional` **paddingMode?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L77)

Number that declares the fill method for the padding gutter.

***

### paddingRatio?

> `optional` **paddingRatio?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L72)

Ratio of the value to add padding wise to each cell.  Defaults to 0.0115

***

### updateInputMeshes?

> `optional` **updateInputMeshes?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L47)

flag to update the input meshes to the new packed texture after compilation. Defaults to true.

***

### uvsIn?

> `optional` **uvsIn?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L27)

the UV input targets, as a single value for all meshes. Defaults to VertexBuffer.UVKind

***

### uvsOut?

> `optional` **uvsOut?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L32)

the UV output targets, as a single value for all meshes.  Defaults to VertexBuffer.UVKind
