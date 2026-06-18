[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SpriteManager

# Class: SpriteManager

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:134](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L134)

Class used to manage multiple sprites on the same spritesheet

## See

https://doc.babylonjs.com/features/featuresDeepDive/sprites

## Extended by

- [`SpritePackedManager`](SpritePackedManager.md)

## Implements

- [`ISpriteManager`](../interfaces/ISpriteManager.md)

## Constructors

### Constructor

> **new SpriteManager**(`name`, `imgUrl`, `capacity`, `cellSize`, `scene`, `epsilon?`, `samplingMode?`, `fromPacked?`, `spriteJSON?`, `options?`): `SpriteManager`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:326](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L326)

Creates a new sprite manager

#### Parameters

##### name

`string`

defines the manager's name

##### imgUrl

`string`

defines the sprite sheet url

##### capacity

`number`

defines the maximum allowed number of sprites

##### cellSize

`any`

defines the size of a sprite cell

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### epsilon?

`number` = `0.01`

defines the epsilon value to align texture (0.01 by default)

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

defines the sampling mode to use with spritesheet

##### fromPacked?

`boolean` = `false`

set to false; do not alter

##### spriteJSON?

`string` \| `null`

null otherwise a JSON object defining sprite sheet data; do not alter

##### options?

[`SpriteManagerOptions`](../interfaces/SpriteManagerOptions.md)

options used to create the SpriteManager instance

#### Returns

`SpriteManager`

## Properties

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L184)

Specifies if the sprite manager should be serialized

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`doNotSerialize`](../interfaces/ISpriteManager.md#donotserialize)

***

### isPickable

> **isPickable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L151)

Gets or sets a boolean indicating if the sprites are pickable

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`isPickable`](../interfaces/ISpriteManager.md#ispickable)

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L149)

Gets or sets camera layer mask

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`layerMask`](../interfaces/ISpriteManager.md#layermask)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L156)

Gets or sets an object used to store user defined information for the sprite manager

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L328)

defines the manager's name

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`name`](../interfaces/ISpriteManager.md#name)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<`SpriteManager`\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L164)

An event triggered when the manager is disposed.

***

### renderingGroupId

> **renderingGroupId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L147)

Gets or sets the rendering group id (0 by default)

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`renderingGroupId`](../interfaces/ISpriteManager.md#renderinggroupid)

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L142)

Snippet ID if the manager was created from the snippet server

***

### sprites

> **sprites**: [`Sprite`](Sprite.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L145)

Gets the list of sprites

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`sprites`](../interfaces/ISpriteManager.md#sprites)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L179)

Gets or sets the unique id of the sprite

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`uniqueId`](../interfaces/ISpriteManager.md#uniqueid)

***

### ~~CreateFromSnippetAsync~~

> `static` **CreateFromSnippetAsync**: (`snippetId`, `scene`, `rootUrl`) => `Promise`\<`SpriteManager`\> = `SpriteManager.ParseFromSnippetAsync`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:888](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L888)

Creates a sprite manager from a snippet saved by the sprite editor

Creates a sprite manager from a snippet saved by the sprite editor

#### Parameters

##### snippetId

`string`

defines the snippet to load (can be set to _BLANK to create a default one)

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

#### Returns

`Promise`\<`SpriteManager`\>

a promise that will resolve to the new sprite manager

#### Deprecated

Please use ParseFromSnippetAsync instead

#### Param

**snippetId**

defines the snippet to load (can be set to _BLANK to create a default one)

#### Param

**scene**

defines the hosting scene

#### Param

**rootUrl**

defines the root URL to use to load textures and relative dependencies

#### Returns

a promise that will resolve to the new sprite manager

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L139)

Define the Url to load snippets

## Accessors

### blendMode

#### Get Signature

> **get** **blendMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L257)

Blend mode use to render the particle, it can be any of
the static Constants.ALPHA_x properties provided in this class.
Default value is Constants.ALPHA_COMBINE

##### Returns

`number`

#### Set Signature

> **set** **blendMode**(`blendMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L260)

##### Parameters

###### blendMode

`number`

##### Returns

`void`

***

### capacity

#### Get Signature

> **get** **capacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L203)

Gets the capacity of the manager

##### Returns

`number`

***

### cellHeight

#### Get Signature

> **get** **cellHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L229)

Defines the default height of a cell in the spritesheet

##### Returns

`number`

#### Set Signature

> **set** **cellHeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L232)

Defines the default height of a cell in the spritesheet

##### Parameters

###### value

`number`

##### Returns

`void`

Defines the default height of a cell in the spritesheet

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`cellHeight`](../interfaces/ISpriteManager.md#cellheight)

***

### cellWidth

#### Get Signature

> **get** **cellWidth**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L221)

Defines the default width of a cell in the spritesheet

##### Returns

`number`

#### Set Signature

> **set** **cellWidth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L224)

Defines the default width of a cell in the spritesheet

##### Parameters

###### value

`number`

##### Returns

`void`

Defines the default width of a cell in the spritesheet

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`cellWidth`](../interfaces/ISpriteManager.md#cellwidth)

***

### children

#### Get Signature

> **get** **children**(): [`Sprite`](Sprite.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L189)

Gets the array of sprites

##### Returns

[`Sprite`](Sprite.md)[]

***

### disableDepthWrite

#### Get Signature

> **get** **disableDepthWrite**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L269)

Disables writing to the depth buffer when rendering the sprites.
 It can be handy to disable depth writing when using textures without alpha channel
 and setting some specific blend modes.

##### Returns

`boolean`

#### Set Signature

> **set** **disableDepthWrite**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L273)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### fogEnabled

#### Get Signature

> **get** **fogEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L237)

Gets or sets a boolean indicating if the manager must consider scene fog when rendering

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L240)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L169)

Callback called when the manager is disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### pixelPerfect

#### Get Signature

> **get** **pixelPerfect**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L283)

Gets or sets a boolean indicating if the renderer must render sprites with pixel perfect rendering
In this mode, sprites are rendered as "pixel art", which means that they appear as pixelated but remain stable when moving or when rotated or scaled.
Note that for this mode to work as expected, the sprite texture must use the BILINEAR sampling mode, not NEAREST!

##### Returns

`boolean`

#### Set Signature

> **set** **pixelPerfect**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L287)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): `InternalSpriteAugmentedScene`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L196)

Gets the hosting scene

##### Returns

`InternalSpriteAugmentedScene`

Gets the hosting scene

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`scene`](../interfaces/ISpriteManager.md#scene)

***

### spriteRenderer

#### Get Signature

> **get** **spriteRenderer**(): `SpriteRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L297)

Gets the sprite renderer associated with this manager

##### Returns

`SpriteRenderer`

***

### texture

#### Get Signature

> **get** **texture**(): [`Texture`](Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L210)

Gets or sets the spritesheet texture

##### Returns

[`Texture`](Texture.md)

#### Set Signature

> **set** **texture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L213)

Gets or sets the spritesheet texture

##### Parameters

###### value

[`Texture`](Texture.md)

##### Returns

`void`

Gets or sets the spritesheet texture

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`texture`](../interfaces/ISpriteManager.md#texture)

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L245)

Gets or sets a boolean indicating if the manager must use logarithmic depth when rendering

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L248)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:689](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L689)

Release associated resources

#### Returns

`void`

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`dispose`](../interfaces/ISpriteManager.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L384)

Returns the string "SpriteManager"

#### Returns

`string`

"SpriteManager"

***

### intersects()

> **intersects**(`ray`, `camera`, `predicate?`, `fastCheck?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L492)

Intersects the sprites with a ray

#### Parameters

##### ray

[`Ray`](Ray.md)

defines the ray to intersect with

##### camera

[`Camera`](Camera.md)

defines the current active camera

##### predicate?

(`sprite`) => `boolean`

defines a predicate used to select candidate sprites

##### fastCheck?

`boolean`

defines if a fast check only must be done (the first potential sprite is will be used and not the closer)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

null if no hit or a PickingInfo

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`intersects`](../interfaces/ISpriteManager.md#intersects)

***

### multiIntersects()

> **multiIntersects**(`ray`, `camera`, `predicate?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:589](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L589)

Intersects the sprites with a ray

#### Parameters

##### ray

[`Ray`](Ray.md)

defines the ray to intersect with

##### camera

[`Camera`](Camera.md)

defines the current active camera

##### predicate?

(`sprite`) => `boolean`

defines a predicate used to select candidate sprites

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

null if no hit or a PickingInfo array

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`multiIntersects`](../interfaces/ISpriteManager.md#multiintersects)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:682](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L682)

Rebuilds the manager (after a context lost, for eg)

#### Returns

`void`

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`rebuild`](../interfaces/ISpriteManager.md#rebuild)

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L650)

Render all child sprites

#### Returns

`void`

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`render`](../interfaces/ISpriteManager.md#render)

***

### serialize()

> **serialize**(`serializeTexture?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:724](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L724)

Serializes the sprite manager to a JSON object

#### Parameters

##### serializeTexture?

`boolean` = `false`

defines if the texture must be serialized as well

#### Returns

`any`

the JSON object

#### Implementation of

[`ISpriteManager`](../interfaces/ISpriteManager.md).[`serialize`](../interfaces/ISpriteManager.md#serialize)

***

### Parse()

> `static` **Parse**(`parsedManager`, `scene`, `rootUrl`): `SpriteManager`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L764)

Parses a JSON object to create a new sprite manager.

#### Parameters

##### parsedManager

`any`

The JSON object to parse

##### scene

[`Scene`](Scene.md)

The scene to create the sprite manager

##### rootUrl

`string`

The root url to use to load external dependencies like texture

#### Returns

`SpriteManager`

the new sprite manager

***

### ParseFromFileAsync()

> `static` **ParseFromFileAsync**(`name`, `url`, `scene`, `rootUrl?`): `Promise`\<`SpriteManager`\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:817](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L817)

Creates a sprite manager from a snippet saved in a remote file

#### Parameters

##### name

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the name of the sprite manager to create (can be null or empty to use the one from the json data)

##### url

`string`

defines the url to load from

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

#### Returns

`Promise`\<`SpriteManager`\>

a promise that will resolve to the new sprite manager

***

### ParseFromSnippetAsync()

> `static` **ParseFromSnippetAsync**(`snippetId`, `scene`, `rootUrl?`): `Promise`\<`SpriteManager`\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:851](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L851)

Creates a sprite manager from a snippet saved by the sprite editor

#### Parameters

##### snippetId

`string`

defines the snippet to load (can be set to _BLANK to create a default one)

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

#### Returns

`Promise`\<`SpriteManager`\>

a promise that will resolve to the new sprite manager
