[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Viewport

# Class: Viewport

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L6)

Class used to represent a viewport on screen

## Constructors

### Constructor

> **new Viewport**(`x`, `y`, `width`, `height`): `Viewport`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L14)

Creates a Viewport object located at (x, y) and sized (width, height)

#### Parameters

##### x

`number`

defines viewport left coordinate

##### y

`number`

defines viewport top coordinate

##### width

`number`

defines the viewport width

##### height

`number`

defines the viewport height

#### Returns

`Viewport`

## Properties

### height

> **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L22)

viewport height

#### Implementation of

`IViewportLike.height`

***

### width

> **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L20)

viewport width

#### Implementation of

`IViewportLike.width`

***

### x

> **x**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L16)

viewport left coordinate

#### Implementation of

`IViewportLike.x`

***

### y

> **y**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L18)

viewport top coordinate

#### Implementation of

`IViewportLike.y`

## Methods

### clone()

> **clone**(): `Viewport`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L54)

Returns a new Viewport copied from the current one

#### Returns

`Viewport`

a new Viewport

***

### toGlobal()

> **toGlobal**(`renderWidth`, `renderHeight`): `Viewport`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L31)

Creates a new viewport using absolute sizing (from 0-> width, 0-> height instead of 0->1)

#### Parameters

##### renderWidth

`number`

defines the rendering width

##### renderHeight

`number`

defines the rendering height

#### Returns

`Viewport`

a new Viewport

***

### toGlobalToRef()

> **toGlobalToRef**(`renderWidth`, `renderHeight`, `ref`): `Viewport`

Defined in: [babylonjs-source/packages/dev/core/src/Maths/math.viewport.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Maths/math.viewport.ts#L42)

Stores absolute viewport value into a target viewport (from 0-> width, 0-> height instead of 0->1)

#### Parameters

##### renderWidth

`number`

defines the rendering width

##### renderHeight

`number`

defines the rendering height

##### ref

`Viewport`

defines the target viewport

#### Returns

`Viewport`

the current viewport
