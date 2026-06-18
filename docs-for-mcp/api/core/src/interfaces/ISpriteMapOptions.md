[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISpriteMapOptions

# Interface: ISpriteMapOptions

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L25)

Defines the basic options interface of a SpriteMap

## Properties

### baseTile?

> `optional` **baseTile?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L59)

number cell index of the base tile when the system compiles.

***

### colorMultiply?

> `optional` **colorMultiply?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L69)

Vector3 scalar of the global RGB values of the SpriteMap.

***

### flipU?

> `optional` **flipU?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L64)

boolean flip the sprite after its been repositioned by the framing data.

***

### frameRotationDirection?

> `optional` **frameRotationDirection?**: [`SpriteMapFrameRotationDirection`](../enumerations/SpriteMapFrameRotationDirection.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L76)

Rotation direction of the frame by 90 degrees.
Applied when the the frame's "rotated" parameter is true.
Default is CCW.

***

### layerCount?

> `optional` **layerCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L49)

number of layers that the system will reserve in resources.

***

### maxAnimationFrames?

> `optional` **maxAnimationFrames?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L54)

number of max animation frames a single cell will reserve in resources.

***

### outputPosition?

> `optional` **outputPosition?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L39)

Vector3 of the position of the output plane in World Units.

***

### outputRotation?

> `optional` **outputRotation?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L44)

Vector3 of the rotation of the output plane.

***

### outputSize?

> `optional` **outputSize?**: [`Vector2`](../classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L34)

Vector2 of the size of the output plane in World Units.

***

### stageSize?

> `optional` **stageSize?**: [`Vector2`](../classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L29)

Vector2 of the number of cells in the grid.
