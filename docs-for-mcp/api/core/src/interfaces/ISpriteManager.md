[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISpriteManager

# Interface: ISpriteManager

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L29)

Defines the minimum interface to fulfill in order to be a sprite manager.

## Extends

- [`IDisposable`](IDisposable.md)

## Properties

### cellHeight

> **cellHeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L75)

Defines the default height of a cell in the spritesheet

***

### cellWidth

> **cellWidth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L73)

Defines the default width of a cell in the spritesheet

***

### doNotSerialize?

> `optional` **doNotSerialize?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L83)

Specifies if the sprite manager should be serialized

***

### isPickable

> **isPickable**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L49)

Gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions). Default is true

***

### layerMask

> **layerMask**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L44)

Restricts the camera to viewing objects with the same layerMask.
A camera with a layerMask of 1 will render spriteManager.layerMask & camera.layerMask!== 0

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L38)

Gets manager's name

***

### renderingGroupId

> **renderingGroupId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L60)

Specifies the rendering group id for this mesh (0 by default)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#rendering-groups

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L54)

Gets the hosting scene

***

### sprites

> **sprites**: [`Sprite`](../classes/Sprite.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L65)

Defines the list of sprites managed by the manager.

***

### texture

> **texture**: [`Texture`](../classes/Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L70)

Gets or sets the spritesheet texture

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L33)

Gets or sets the unique id of the sprite manager

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### intersects()

> **intersects**(`ray`, `camera`, `predicate?`, `fastCheck?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L93)

Tests the intersection of a sprite with a specific ray.

#### Parameters

##### ray

[`Ray`](../classes/Ray.md)

The ray we are sending to test the collision

##### camera

[`Camera`](../classes/Camera.md)

The camera space we are sending rays in

##### predicate?

(`sprite`) => `boolean`

A predicate allowing excluding sprites from the list of object to test

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)\>

picking info or null.

***

### multiIntersects()

> **multiIntersects**(`ray`, `camera`, `predicate?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L102)

Intersects the sprites with a ray

#### Parameters

##### ray

[`Ray`](../classes/Ray.md)

defines the ray to intersect with

##### camera

[`Camera`](../classes/Camera.md)

defines the current active camera

##### predicate?

(`sprite`) => `boolean`

defines a predicate used to select candidate sprites

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)[]\>

null if no hit or a PickingInfo array

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L112)

Rebuilds the manager (after a context lost, for eg)

#### Returns

`void`

***

### render()

> **render**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L107)

Renders the list of sprites on screen.

#### Returns

`void`

***

### serialize()

> **serialize**(`serializeTexture?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteManager.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Sprites/spriteManager.ts#L118)

Serializes the sprite manager to a JSON object

#### Parameters

##### serializeTexture?

`boolean`

defines whether the texture must be serialized as well (false by default)

#### Returns

`any`
