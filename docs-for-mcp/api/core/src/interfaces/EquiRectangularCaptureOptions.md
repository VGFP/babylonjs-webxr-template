[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EquiRectangularCaptureOptions

# Interface: EquiRectangularCaptureOptions

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/equirectangularCapture.ts#L15)

Interface containing options related to equirectangular capture of the current scene

## Properties

### filename?

> `optional` **filename?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/equirectangularCapture.ts#L29)

Optional argument to specify filename, passing this would auto download the given file

***

### meshesFilter?

> `optional` **meshesFilter?**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/equirectangularCapture.ts#L25)

Optional function to map which meshes should get rendered on the equirectangular map
This is specifically helpful when you have certain meshes that you want to skip, especially ground

#### Parameters

##### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

#### Returns

`boolean`

***

### position?

> `optional` **position?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/equirectangularCapture.ts#L34)

Optional argument to specify position in 3D Space from where the equirectangular capture should be taken, if not specified, it would take the position of the scene's active camera or else origin

***

### probe?

> `optional` **probe?**: [`ReflectionProbe`](../classes/ReflectionProbe.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/equirectangularCapture.ts#L40)

Optional argument to specify probe with which the equirectangular image is generated
When passing this, size and position arguments are ignored

***

### size

> **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/equirectangularCapture.ts#L20)

This option relates to smallest dimension of the given equirectangular capture
Giving a 512px size would result in an image that 512 x 1024px
