[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GradientBlockColorStep

# Class: GradientBlockColorStep

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts#L14)

Class used to store a color step for the GradientBlock

## Constructors

### Constructor

> **new GradientBlockColorStep**(`step`, `color`): `GradientBlockColorStep`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts#L51)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts#L35)

Gets the color associated with this step

##### Returns

[`Color3`](Color3.md)

#### Set Signature

> **set** **color**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts#L42)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts#L19)

Gets value indicating which step this color is associated with (between 0 and 1)

##### Returns

`number`

#### Set Signature

> **set** **step**(`val`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/gradientBlock.ts#L26)

Sets a value indicating which step this color is associated with (between 0 and 1)

##### Parameters

###### val

`number`

##### Returns

`void`
