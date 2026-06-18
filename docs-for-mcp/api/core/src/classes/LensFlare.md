[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LensFlare

# Class: LensFlare

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L13)

This represents one of the lens effect in a `lensFlareSystem`.
It controls one of the individual texture used in the effect.

## See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

## Constructors

### Constructor

> **new LensFlare**(`size`, `position`, `color`, `imgUrl`, `system`): `LensFlare`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L61)

Instantiates a new Lens Flare.
This represents one of the lens effect in a `lensFlareSystem`.
It controls one of the individual texture used in the effect.

#### Parameters

##### size

`number`

Define the size of the lens flare in the system (a floating value between 0 and 1)

##### position

`number`

Define the position of the lens flare in the system. (a floating value between -1 and 1). A value of 0 is located on the emitter. A value greater than 0 is beyond the emitter and a value lesser than 0 is behind.

##### color

[`Color3`](Color3.md)

Define the lens color

##### imgUrl

`string`

Define the lens texture url

##### system

[`LensFlareSystem`](LensFlareSystem.md)

Define the `lensFlareSystem` this flare is part of

#### Returns

`LensFlare`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

## Properties

### alphaMode

> **alphaMode**: `number` = `Constants.ALPHA_ONEONE`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L27)

Define the alpha mode to render this particular lens.

***

### color

> **color**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L17)

Define the lens color.

***

### position

> **position**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L69)

Define the position of the lens flare in the system. (a floating value between -1 and 1). A value of 0 is located on the emitter. A value greater than 0 is beyond the emitter and a value lesser than 0 is behind.

***

### size

> **size**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L65)

Define the size of the lens flare in the system (a floating value between 0 and 1)

***

### texture

> **texture**: [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L22)

Define the lens texture.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L102)

Dispose and release the lens flare with its associated resources.

#### Returns

`void`

***

### AddFlare()

> `static` **AddFlare**(`size`, `position`, `color`, `imgUrl`, `system`): `LensFlare`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlare.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlare.ts#L46)

Creates a new Lens Flare.
This represents one of the lens effect in a `lensFlareSystem`.
It controls one of the individual texture used in the effect.

#### Parameters

##### size

`number`

Define the size of the lens flare (a floating value between 0 and 1)

##### position

`number`

Define the position of the lens flare in the system. (a floating value between -1 and 1). A value of 0 is located on the emitter. A value greater than 0 is beyond the emitter and a value lesser than 0 is behind.

##### color

[`Color3`](Color3.md)

Define the lens color

##### imgUrl

`string`

Define the lens texture url

##### system

[`LensFlareSystem`](LensFlareSystem.md)

Define the `lensFlareSystem` this flare is part of

#### Returns

`LensFlare`

The newly created Lens Flare

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare
