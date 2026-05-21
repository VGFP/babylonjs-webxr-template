[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Sprite

# Class: Sprite

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L16)

Class used to represent a sprite

## See

https://doc.babylonjs.com/features/featuresDeepDive/sprites

## Extends

- `ThinSprite`

## Implements

- [`IAnimatable`](../interfaces/IAnimatable.md)

## Constructors

### Constructor

> **new Sprite**(`name`, `manager`): `Sprite`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L72)

Creates a new Sprite

#### Parameters

##### name

`string`

defines the name

##### manager

[`ISpriteManager`](../interfaces/ISpriteManager.md)

defines the manager

#### Returns

`Sprite`

#### Overrides

`ThinSprite.constructor`

## Properties

### actionManager

> **actionManager**: [`Nullable`](../type-aliases/Nullable.md)\<[`ActionManager`](ActionManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L33)

Gets or sets the associated action manager

***

### angle

> **angle**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L23)

Gets or sets rotation angle

#### Inherited from

`ThinSprite.angle`

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L24)

Gets the list of attached animations

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

***

### cellIndex

> **cellIndex**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L11)

Gets or sets the cell index in the sprite sheet

#### Inherited from

`ThinSprite.cellIndex`

***

### cellRef

> **cellRef**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L13)

Gets or sets the cell reference in the sprite sheet, uses sprite's filename when added to sprite sheet

#### Inherited from

`ThinSprite.cellRef`

***

### color

> **color**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L20)

Gets or sets the main color

#### Overrides

`ThinSprite.color`

***

### disposeWhenFinishedAnimating

> **disposeWhenFinishedAnimating**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L22)

Gets or sets a boolean indicating that this sprite should be disposed after animation ends

***

### height

> **height**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L21)

Gets or sets the height

#### Inherited from

`ThinSprite.height`

***

### invertU

> **invertU**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L25)

Gets or sets a boolean indicating if UV coordinates should be inverted in U axis

#### Inherited from

`ThinSprite.invertU`

***

### invertV

> **invertV**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L27)

Gets or sets a boolean indicating if UV coordinates should be inverted in B axis

#### Inherited from

`ThinSprite.invertV`

***

### isPickable

> **isPickable**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L26)

Gets or sets a boolean indicating if the sprite can be picked

***

### isVisible

> **isVisible**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L29)

Gets or sets a boolean indicating if the sprite is visible (renderable). Default is true

#### Inherited from

`ThinSprite.isVisible`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L74)

defines the name

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<`Sprite`\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L38)

An event triggered when the control has been disposed

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L18)

Gets or sets the current world position

#### Overrides

`ThinSprite.position`

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L58)

Gets or sets the unique id of the sprite

***

### useAlphaForPicking

> **useAlphaForPicking**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L28)

Gets or sets a boolean indicating that sprite texture alpha will be used for precise picking (false by default)

***

### width

> **width**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L19)

Gets or sets the width

#### Inherited from

`ThinSprite.width`

## Accessors

### animationStarted

#### Get Signature

> **get** **animationStarted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L34)

Returns a boolean indicating if the animation is started

##### Returns

`boolean`

#### Inherited from

`ThinSprite.animationStarted`

***

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L119)

Gets or sets the delay between cell changes (setting it will restart the animation)

##### Returns

`number`

#### Set Signature

> **set** **delay**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L122)

Gets or sets the delay between cell changes (setting it will restart the animation)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Overrides

`ThinSprite.delay`

***

### fromIndex

#### Get Signature

> **get** **fromIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L95)

Gets or sets the initial key for the animation (setting it will restart the animation)

##### Returns

`number`

#### Set Signature

> **set** **fromIndex**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L98)

Gets the initial key for the animation (setting it will restart the animation)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Overrides

`ThinSprite.fromIndex`

***

### loopAnimation

#### Get Signature

> **get** **loopAnimation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L111)

Gets or sets a boolean indicating if the animation is looping (setting it will restart the animation)

##### Returns

`boolean`

#### Set Signature

> **set** **loopAnimation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L114)

Gets or sets a boolean indicating if the animation is looping (setting it will restart the animation)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

`ThinSprite.loopAnimation`

***

### manager

#### Get Signature

> **get** **manager**(): [`ISpriteManager`](../interfaces/ISpriteManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L63)

Gets the manager of this sprite

##### Returns

[`ISpriteManager`](../interfaces/ISpriteManager.md)

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L46)

Gets or sets the sprite size

##### Returns

`number`

#### Set Signature

> **set** **size**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L50)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### toIndex

#### Get Signature

> **get** **toIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L103)

Gets or sets the end key for the animation (setting it will restart the animation)

##### Returns

`number`

#### Set Signature

> **set** **toIndex**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L106)

Gets or sets the end key for the animation (setting it will restart the animation)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Overrides

`ThinSprite.toIndex`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L150)

Release associated resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L90)

Returns the string "Sprite"

#### Returns

`string`

"Sprite"

***

### playAnimation()

> **playAnimation**(`from`, `to`, `loop`, `delay`, `onAnimationEnd?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L134)

Starts an animation

#### Parameters

##### from

`number`

defines the initial key

##### to

`number`

defines the end key

##### loop

`boolean`

defines if the animation must loop

##### delay

`number`

defines the start delay (in ms)

##### onAnimationEnd?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

defines a callback to call when animation ends

#### Returns

`void`

#### Overrides

`ThinSprite.playAnimation`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L166)

Serializes the sprite to a JSON object

#### Returns

`any`

the JSON object

***

### stopAnimation()

> **stopAnimation**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/thinSprite.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/thinSprite.ts#L113)

Stops current animation (if any)

#### Returns

`void`

#### Inherited from

`ThinSprite.stopAnimation`

***

### Parse()

> `static` **Parse**(`parsedSprite`, `manager`): `Sprite`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/sprite.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/sprite.ts#L199)

Parses a JSON object to create a new sprite

#### Parameters

##### parsedSprite

`any`

The JSON object to parse

##### manager

[`SpriteManager`](SpriteManager.md)

defines the hosting manager

#### Returns

`Sprite`

the new sprite
