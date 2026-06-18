[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GradientBlockColorStep

# Class: GradientBlockColorStep

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts#L16)

Class used to store a color step for the GradientBlock

## Constructors

### Constructor

> **new GradientBlockColorStep**(`step`, `color`): `GradientBlockColorStep`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts#L53)

Creates a new GradientBlockColorStep

#### Parameters

##### step

`number`

defines a value indicating which step this color is associated with (between 0 and 1)

##### color

[`Color3`](Color3.md)

defines the color associated with this step

#### Returns

`GradientBlockColorStep`

## Accessors

### color

#### Get Signature

> **get** **color**(): [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts#L37)

Gets the color associated with this step

##### Returns

[`Color3`](Color3.md)

#### Set Signature

> **set** **color**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts#L44)

Sets the color associated with this step

##### Parameters

###### val

[`Color3`](Color3.md)

##### Returns

`void`

***

### step

#### Get Signature

> **get** **step**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts#L21)

Gets value indicating which step this color is associated with (between 0 and 1)

##### Returns

`number`

#### Set Signature

> **set** **step**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.pure.ts#L28)

Sets a value indicating which step this color is associated with (between 0 and 1)

##### Parameters

###### val

`number`

##### Returns

`void`
