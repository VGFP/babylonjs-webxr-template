[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISpriteMap

# Interface: ISpriteMap

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L82)

Defines the IDisposable interface in order to be cleanable from resources.

## Extends

- [`IDisposable`](IDisposable.md)

## Properties

### atlasJSON

> **atlasJSON**: [`ISpriteJSONAtlas`](ISpriteJSONAtlas.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L91)

The JSON Array file from a https://www.codeandweb.com/texturepacker export.  Or similar structure.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L86)

String name of the SpriteMap.

***

### options

> **options**: [`ISpriteMapOptions`](ISpriteMapOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L101)

The parameters to initialize the SpriteMap with.

***

### spriteSheet

> **spriteSheet**: [`Texture`](../classes/Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteMap.pure.ts#L96)

Texture of the SpriteMap.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)
