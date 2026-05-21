[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SpriteMap

# Class: SpriteMap

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L107)

Class used to manage a grid restricted sprite deployment on an Output plane.

## Implements

- [`ISpriteMap`](../interfaces/ISpriteMap.md)

## Constructors

### Constructor

> **new SpriteMap**(`name`, `atlasJSON`, `spriteSheet`, `options`, `scene`): `SpriteMap`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L209)

Creates a new SpriteMap

#### Parameters

##### name

`string`

defines the SpriteMaps Name

##### atlasJSON

[`ISpriteJSONAtlas`](../interfaces/ISpriteJSONAtlas.md)

is the JSON file that controls the Sprites Frames and Meta

##### spriteSheet

[`Texture`](Texture.md)

is the Texture that the Sprites are on.

##### options

[`ISpriteMapOptions`](../interfaces/ISpriteMapOptions.md)

a basic deployment configuration

##### scene

[`Scene`](Scene.md)

The Scene that the map is deployed on

#### Returns

`SpriteMap`

## Properties

### atlasJSON

> **atlasJSON**: [`ISpriteJSONAtlas`](../interfaces/ISpriteJSONAtlas.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L112)

The JSON file with the frame and meta data

#### Implementation of

[`ISpriteMap`](../interfaces/ISpriteMap.md).[`atlasJSON`](../interfaces/ISpriteMap.md#atlasjson)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L109)

The Name of the spriteMap

#### Implementation of

[`ISpriteMap`](../interfaces/ISpriteMap.md).[`name`](../interfaces/ISpriteMap.md#name)

***

### options

> **options**: [`ISpriteMapOptions`](../interfaces/ISpriteMapOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L118)

Arguments passed with the Constructor

#### Implementation of

[`ISpriteMap`](../interfaces/ISpriteMap.md).[`options`](../interfaces/ISpriteMap.md#options)

***

### sprites

> **sprites**: [`ISpriteJSONSprite`](../interfaces/ISpriteJSONSprite.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L121)

Public Sprite Storage array, parsed from atlasJSON

***

### spriteSheet

> **spriteSheet**: [`Texture`](Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L115)

The systems Sprite Sheet Texture

#### Implementation of

[`ISpriteMap`](../interfaces/ISpriteMap.md).[`spriteSheet`](../interfaces/ISpriteMap.md#spritesheet)

## Accessors

### animationMap

#### Get Signature

> **get** **animationMap**(): [`RawTexture`](RawTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L149)

Sets the AnimationMap

##### Returns

[`RawTexture`](RawTexture.md)

#### Set Signature

> **set** **animationMap**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L154)

Sets the AnimationMap

##### Parameters

###### v

[`RawTexture`](RawTexture.md)

##### Returns

`void`

***

### fogEnabled

#### Get Signature

> **get** **fogEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L163)

Gets or sets a boolean indicating if the sprite map must consider scene fog when rendering

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L166)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L129)

Returns the Position of Output Plane

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L134)

Returns the Position of Output Plane

##### Parameters

###### v

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### rotation

#### Get Signature

> **get** **rotation**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L139)

Returns the Rotation of Output Plane

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **rotation**(`v`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L144)

Returns the Rotation of Output Plane

##### Parameters

###### v

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### spriteCount

#### Get Signature

> **get** **spriteCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L124)

Returns the Number of Sprites in the System

##### Returns

`number`

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L173)

Gets or sets a boolean indicating if the sprite map must use logarithmic depth when rendering

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L176)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### addAnimationToTile()

> **addAnimationToTile**(`cellID?`, `_frame?`, `toCell?`, `time?`, `speed?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:563](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L563)

Modifies the data of the animationMap

#### Parameters

##### cellID?

`number` = `0`

is the Index of the Sprite

##### \_frame?

`number` = `0`

is the target Animation frame

##### toCell?

`number` = `0`

is the Target Index of the next frame of the animation

##### time?

`number` = `0`

is a value between 0-1 that is the trigger for when the frame should change tiles

##### speed?

`number` = `1`

is a global scalar of the time variable on the map.

#### Returns

`void`

***

### changeTiles()

> **changeTiles**(`_layer?`, `pos`, `tile?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:490](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L490)

Modifies the data of the tileMaps

#### Parameters

##### \_layer?

`number` = `0`

is the ID of the layer you want to edit on the SpriteMap

##### pos

[`Vector2`](Vector2.md) \| [`Vector2`](Vector2.md)[]

is the iVector2 Coordinates of the Tile

##### tile?

`number` = `0`

The SpriteIndex of the new Tile

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:624](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L624)

Release associated resources

#### Returns

`void`

#### Implementation of

[`ISpriteMap`](../interfaces/ISpriteMap.md).[`dispose`](../interfaces/ISpriteMap.md#dispose)

***

### getMousePosition()

> **getMousePosition**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L379)

Gets the UV location of the mouse over the SpriteMap.

#### Returns

[`Vector2`](Vector2.md)

Vector2 the UV position of the mouse interaction

***

### getTileID()

> **getTileID**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L367)

Returns tileID location

#### Returns

[`Vector2`](Vector2.md)

Vector2 the cell position ID

***

### getTileIdxByName()

> **getTileIdxByName**(`name`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:357](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L357)

Returns the index of the frame for a given filename

#### Parameters

##### name

`string`

filename of the frame

#### Returns

`number`

index of the frame

***

### loadTileMaps()

> **loadTileMaps**(`url`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L602)

Imports the .tilemaps file

#### Parameters

##### url

`string`

of the .tilemaps file

#### Returns

`void`

***

### saveTileMaps()

> **saveTileMaps**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteMap.ts:581](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteMap.ts#L581)

Exports the .tilemaps file

#### Returns

`void`
