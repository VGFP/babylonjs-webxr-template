[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ProximityCastResult

# Class: ProximityCastResult

Defined in: [babylonjs-source/packages/dev/core/src/Physics/proximityCastResult.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/proximityCastResult.ts#L6)

Class representing a contact point produced in a proximity cast

## Extends

- `CastingResult`

## Constructors

### Constructor

> **new ProximityCastResult**(): `ProximityCastResult`

#### Returns

`ProximityCastResult`

#### Inherited from

`CastingResult.constructor`

## Properties

### body?

> `optional` **body?**: [`PhysicsBody`](PhysicsBody.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/castingResult.ts#L17)

The Physics body that the query hit.

#### Inherited from

`CastingResult.body`

***

### bodyIndex?

> `optional` **bodyIndex?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/castingResult.ts#L21)

The body Index in case the Physics body is using instances

#### Inherited from

`CastingResult.bodyIndex`

***

### shape?

> `optional` **shape?**: [`PhysicsShape`](PhysicsShape.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/castingResult.ts#L26)

The shape hit by the query.

#### Inherited from

`CastingResult.shape`

## Accessors

### hasHit

#### Get Signature

> **get** **hasHit**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/castingResult.ts#L43)

Gets if there was a hit

##### Returns

`boolean`

#### Inherited from

`CastingResult.hasHit`

***

### hitDistance

#### Get Signature

> **get** **hitDistance**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/proximityCastResult.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/proximityCastResult.ts#L12)

Gets the distance from the hit

##### Returns

`number`

***

### hitNormal

#### Get Signature

> **get** **hitNormal**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/castingResult.ts#L37)

Gets the hit normal.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`CastingResult.hitNormal`

***

### hitPoint

#### Get Signature

> **get** **hitPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/castingResult.ts#L31)

Gets the hit point.

##### Returns

[`Vector3`](Vector3.md)

#### Inherited from

`CastingResult.hitPoint`

***

### triangleIndex

#### Get Signature

> **get** **triangleIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/castingResult.ts#L50)

The index of the original triangle which was hit. Will be -1 if contact point is not on a mesh shape

##### Returns

`number`

#### Inherited from

`CastingResult.triangleIndex`

## Methods

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/proximityCastResult.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/proximityCastResult.ts#L27)

Resets all the values to default

#### Returns

`void`

#### Overrides

`CastingResult.reset`

***

### setHitData()

> **setHitData**(`hitNormal`, `hitPoint`, `triangleIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/castingResult.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/castingResult.ts#L60)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/proximityCastResult.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/proximityCastResult.ts#L20)

Sets the distance from the start point to the hit point

#### Parameters

##### distance

`number`

#### Returns

`void`
