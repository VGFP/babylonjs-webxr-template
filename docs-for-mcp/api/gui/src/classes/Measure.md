[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / Measure

# Class: Measure

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L14)

Class used to store 2D control sizes

## Constructors

### Constructor

> **new Measure**(`left`, `top`, `width`, `height`): `Measure`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L22)

Creates a new measure

#### Parameters

##### left

`number`

defines left coordinate

##### top

`number`

defines top coordinate

##### width

`number`

defines width dimension

##### height

`number`

defines height dimension

#### Returns

`Measure`

## Properties

### height

> **height**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L30)

defines height dimension

***

### left

> **left**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L24)

defines left coordinate

***

### top

> **top**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L26)

defines top coordinate

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L28)

defines width dimension

## Methods

### addAndTransformToRef()

> **addAndTransformToRef**(`transform`, `addX`, `addY`, `addWidth`, `addHeight`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L84)

Computes the axis aligned bounding box of the measure after it is modified by a given transform

#### Parameters

##### transform

[`Matrix2D`](Matrix2D.md)

the matrix to transform the measure before computing the AABB

##### addX

`number`

number to add to left

##### addY

`number`

number to add to top

##### addWidth

`number`

number to add to width

##### addHeight

`number`

number to add to height

##### result

`Measure`

the resulting AABB

#### Returns

`void`

***

### copyFrom()

> **copyFrom**(`other`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L37)

Copy from another measure

#### Parameters

##### other

`Measure`

defines the other measure to copy from

#### Returns

`void`

***

### copyFromFloats()

> **copyFromFloats**(`left`, `top`, `width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L51)

Copy from a group of 4 floats

#### Parameters

##### left

`number`

defines left coordinate

##### top

`number`

defines top coordinate

##### width

`number`

defines width dimension

##### height

`number`

defines height dimension

#### Returns

`void`

***

### isEqualsTo()

> **isEqualsTo**(`other`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L123)

Check equality between this measure and another one

#### Parameters

##### other

`Measure`

defines the other measures

#### Returns

`boolean`

true if both measures are equals

***

### transformToRef()

> **transformToRef**(`transform`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L115)

Computes the axis aligned bounding box of the measure after it is modified by a given transform

#### Parameters

##### transform

[`Matrix2D`](Matrix2D.md)

the matrix to transform the measure before computing the AABB

##### result

`Measure`

the resulting AABB

#### Returns

`void`

***

### CombineToRef()

> `static` **CombineToRef**(`a`, `b`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L64)

Computes the axis aligned bounding box measure for two given measures

#### Parameters

##### a

`Measure`

Input measure

##### b

`Measure`

Input measure

##### result

`Measure`

the resulting bounding measure

#### Returns

`void`

***

### Empty()

> `static` **Empty**(): `Measure`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/measure.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/measure.ts#L147)

Creates an empty measure

#### Returns

`Measure`

a new measure
