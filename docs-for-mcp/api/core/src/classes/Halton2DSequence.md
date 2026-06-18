[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Halton2DSequence

# Class: Halton2DSequence

Defined in: [babylonjs-source/packages/dev/core/src/Maths/halton2DSequence.ts:5](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/halton2DSequence.ts#L5)

Class for generating 2D Halton sequences.
From https://observablehq.com/@jrus/halton

## Constructors

### Constructor

> **new Halton2DSequence**(`numSamples`, `baseX?`, `baseY?`, `width?`, `height?`): `Halton2DSequence`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/halton2DSequence.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/halton2DSequence.ts#L32)

Creates a new Halton2DSequence.

#### Parameters

##### numSamples

`number`

Number of samples in the sequence.

##### baseX?

`number` = `2`

The base for the x coordinate (default: 2).

##### baseY?

`number` = `3`

The base for the y coordinate (default: 3).

##### width?

`number` = `1`

Factor to scale the x coordinate by (default: 1). The scaling factor is 1/width.

##### height?

`number` = `1`

Factor to scale the y coordinate by (default: 1). The scaling factor is 1/height.

#### Returns

`Halton2DSequence`

## Properties

### x

> `readonly` **x**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/halton2DSequence.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/halton2DSequence.ts#L17)

The x coordinate of the current sample.

***

### y

> `readonly` **y**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/halton2DSequence.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/halton2DSequence.ts#L22)

The y coordinate of the current sample.

## Methods

### next()

> **next**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/halton2DSequence.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/halton2DSequence.ts#L64)

Advances to the next sample in the sequence.

#### Returns

`void`

***

### regenerate()

> **regenerate**(`numSamples`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/halton2DSequence.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/halton2DSequence.ts#L46)

Regenerates the sequence with a new number of samples.

#### Parameters

##### numSamples

`number`

Number of samples in the sequence.

#### Returns

`void`

***

### setDimensions()

> **setDimensions**(`width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/halton2DSequence.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/halton2DSequence.ts#L56)

Sets the dimensions of the sequence.

#### Parameters

##### width

`number`

Factor to scale the x coordinate by. The scaling factor is 1/width.

##### height

`number`

Factor to scale the y coordinate by. The scaling factor is 1/height.

#### Returns

`void`
