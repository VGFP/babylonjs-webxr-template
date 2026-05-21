[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISpriteMap

# Interface: ISpriteMap

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L82)

Defines the IDisposable interface in order to be cleanable from resources.

## Extends

- [`IDisposable`](IDisposable.md)

## Properties

### atlasJSON

> **atlasJSON**: [`ISpriteJSONAtlas`](ISpriteJSONAtlas.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L91)

The JSON Array file from a https://www.codeandweb.com/texturepacker export.  Or similar structure.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L86)

String name of the SpriteMap.

***

### options

> **options**: [`ISpriteMapOptions`](ISpriteMapOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L101)

The parameters to initialize the SpriteMap with.

***

### spriteSheet

> **spriteSheet**: [`Texture`](../classes/Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L96)

Texture of the SpriteMap.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L120)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)
