[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsRaycastResult

# Class: PhysicsRaycastResult

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L24)

Holds the data for the raycast result

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Extends

- `CastingResult`

## Constructors

### Constructor

> **new PhysicsRaycastResult**(): `PhysicsRaycastResult`

#### Returns

`PhysicsRaycastResult`

#### Inherited from

`CastingResult.constructor`

## Properties

### body?

> `optional` **body?**: [`PhysicsBody`](PhysicsBody.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/castingResult.ts#L17)

The Physics body that the query hit.

#### Inherited from

`CastingResult.body`

***

### bodyIndex?

> `optional` **bodyIndex?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/castingResult.ts#L21)

The body Index in case the Physics body is using instances

#### Inherited from

`CastingResult.bodyIndex`

***

### shape?

> `optional` **shape?**: [`PhysicsShape`](PhysicsShape.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/castingResult.ts#L26)

The shape hit by the query.

#### Inherited from

`CastingResult.shape`

## Accessors

### hasHit

#### Get Signature

> **get** **hasHit**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/castingResult.ts#L43)

Gets if there was a hit

##### Returns

`boolean`

#### Inherited from

`CastingResult.hasHit`

***

### hitDistance

#### Get Signature

> **get** **hitDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L32)

Gets the distance from the hit

##### Returns

`number`

***

### hitNormal

#### Get Signature

> **get** **hitNormal**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/castingResult.ts#L37)

Gets the hit normal.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`CastingResult.hitNormal`

***

### hitNormalWorld

#### Get Signature

> **get** **hitNormalWorld**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L39)

Gets the hit normal/direction in the world

##### Returns

[`Vector3`](Vector3.md)

***

### hitPoint

#### Get Signature

> **get** **hitPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/castingResult.ts#L31)

Gets the hit point.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`CastingResult.hitPoint`

***

### hitPointWorld

#### Get Signature

> **get** **hitPointWorld**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L46)

Gets the hit point in the world

##### Returns

[`Vector3`](Vector3.md)

***

### rayFromWorld

#### Get Signature

> **get** **rayFromWorld**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L53)

Gets the ray "start point" of the ray in the world

##### Returns

[`Vector3`](Vector3.md)

***

### rayToWorld

#### Get Signature

> **get** **rayToWorld**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L60)

Gets the ray "end point" of the ray in the world

##### Returns

[`Vector3`](Vector3.md)

***

### triangleIndex

#### Get Signature

> **get** **triangleIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/castingResult.ts#L50)

The index of the original triangle which was hit. Will be -1 if contact point is not on a mesh shape

##### Returns

`number`

#### Inherited from

`CastingResult.triangleIndex`

## Methods

### calculateHitDistance()

> **calculateHitDistance**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L75)

Calculates the distance manually

#### Returns

`void`

***

### reset()

> **reset**(`from?`, `to?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L84)

Resets all the values to default

#### Parameters

##### from?

[`Vector3`](Vector3.md) = `...`

The from point on world space

##### to?

[`Vector3`](Vector3.md) = `...`

The to point on world space

#### Returns

`void`

#### Overrides

`CastingResult.reset`

***

### setHitData()

> **setHitData**(`hitNormal`, `hitPoint`, `triangleIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/castingResult.ts#L60)

Sets the hit data

#### Parameters

##### hitNormal

`IXYZ`

defines the normal in world space

##### hitPoint

`IXYZ`

defines the point in world space

##### triangleIndex?

`number`

defines the index of the triangle in case of mesh shape

#### Returns

`void`

#### Inherited from

`CastingResult.setHitData`

***

### setHitDistance()

> **setHitDistance**(`distance`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsRaycastResult.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsRaycastResult.ts#L68)

Sets the distance from the start point to the hit point

#### Parameters

##### distance

`number`

defines the distance to set

#### Returns

`void`
