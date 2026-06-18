[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialClippingBehavior

# Class: GeospatialClippingBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts#L14)

The GeospatialClippingBehavior automatically adjusts the near and far clip planes of a GeospatialCamera
based on altitude to optimize depth buffer precision for geospatial applications.

The near plane scales with altitude (distance to planet surface) to maintain good depth precision.
The far plane is calculated based on the visible horizon distance.

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`GeospatialCamera`](GeospatialCamera.md)\>

## Constructors

### Constructor

> **new GeospatialClippingBehavior**(): `GeospatialClippingBehavior`

#### Returns

`GeospatialClippingBehavior`

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`GeospatialCamera`](GeospatialCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts#L28)

Gets the attached camera.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`GeospatialCamera`](GeospatialCamera.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts#L18)

Gets the name of the behavior.

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### attach()

> **attach**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts#L43)

Attaches the behavior to its geospatial camera.

#### Parameters

##### camera

[`GeospatialCamera`](GeospatialCamera.md)

Defines the camera to attach the behavior to

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts#L55)

Detaches the behavior from its current geospatial camera.

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/geospatialClippingBehavior.ts#L35)

Initializes the behavior.

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)
