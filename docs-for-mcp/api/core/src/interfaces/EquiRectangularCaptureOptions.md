[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EquiRectangularCaptureOptions

# Interface: EquiRectangularCaptureOptions

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/equirectangularCapture.pure.ts#L16)

Interface containing options related to equirectangular capture of the current scene

## Properties

### filename?

> `optional` **filename?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/equirectangularCapture.pure.ts#L30)

Optional argument to specify filename, passing this would auto download the given file

***

### meshesFilter?

> `optional` **meshesFilter?**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/equirectangularCapture.pure.ts#L26)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/equirectangularCapture.pure.ts#L35)

Optional argument to specify position in 3D Space from where the equirectangular capture should be taken, if not specified, it would take the position of the scene's active camera or else origin

***

### probe?

> `optional` **probe?**: [`ReflectionProbe`](../classes/ReflectionProbe.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/equirectangularCapture.pure.ts#L41)

Optional argument to specify probe with which the equirectangular image is generated
When passing this, size and position arguments are ignored

***

### size

> **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/equirectangularCapture.pure.ts#L21)

This option relates to smallest dimension of the given equirectangular capture
Giving a 512px size would result in an image that 512 x 1024px
