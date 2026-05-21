[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FollowBehavior

# Class: FollowBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L15)

**`Since`**

A behavior that when attached to a mesh will follow a camera
 5.0.0

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`TransformNode`](TransformNode.md)\>

## Constructors

### Constructor

> **new FollowBehavior**(): `FollowBehavior`

#### Returns

`FollowBehavior`

## Properties

### attachedNode

> **attachedNode**: [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L38)

Attached node of this behavior

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### defaultDistance

> **defaultDistance**: `number` = `0.8`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L90)

Default distance from eye to attached node, i.e. the sphere radius

***

### fixedVerticalOffset

> **fixedVerticalOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L108)

Fixed vertical position offset distance.

***

### ignoreAngleClamp

> **ignoreAngleClamp**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L82)

Option to ignore angle clamping

***

### ignoreCameraPitchAndRoll

> **ignoreCameraPitchAndRoll**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L54)

If the behavior should ignore the pitch and roll of the camera.

***

### ignoreDistanceClamp

> **ignoreDistanceClamp**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L78)

Option to ignore distance clamping

***

### interpolatePose

> **interpolatePose**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L43)

Set to false if the node should strictly follow the camera without any interpolation time

***

### lerpTime

> **lerpTime**: `number` = `500`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L49)

Rate of interpolation of position and rotation of the attached node.
Higher values will give a slower interpolation.

***

### maximumDistance

> **maximumDistance**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L94)

Max distance from eye to attached node, i.e. the sphere radius

***

### maxViewHorizontalDegrees

> **maxViewHorizontalDegrees**: `number` = `30`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L70)

The horizontal angle from the camera forward axis to the owner will not exceed this value

***

### maxViewVerticalDegrees

> **maxViewVerticalDegrees**: `number` = `30`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L65)

The vertical angle from the camera forward axis to the owner will not exceed this value

***

### minimumDistance

> **minimumDistance**: `number` = `0.3`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L98)

Min distance from eye to attached node, i.e. the sphere radius

***

### orientToCameraDeadzoneDegrees

> **orientToCameraDeadzoneDegrees**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L74)

The attached node will not reorient until the angle between its forward vector and the vector to the camera is greater than this value

***

### pitchOffset

> **pitchOffset**: `number` = `15`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L60)

Pitch offset from camera (relative to Max Distance)
Is only effective if `ignoreCameraPitchAndRoll` is set to `true`.

***

### useFixedVerticalOffset

> **useFixedVerticalOffset**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L103)

Ignore vertical movement and lock the Y position of the object.

***

### verticalMaxDistance

> **verticalMaxDistance**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L86)

Max vertical distance between the attachedNode and camera

## Accessors

### followedCamera

#### Get Signature

> **get** **followedCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L119)

The camera that should be followed by this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

#### Set Signature

> **set** **followedCamera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L123)

##### Parameters

###### camera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L130)

The name of the behavior

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### attach()

> **attach**(`ownerNode`, `followedCamera?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L144)

Attaches the follow behavior

#### Parameters

##### ownerNode

[`TransformNode`](TransformNode.md)

The mesh that will be following once attached

##### followedCamera?

[`Camera`](Camera.md)

The camera that should be followed by the node

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L158)

Detaches the behavior from the mesh

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L137)

Initializes the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### recenter()

> **recenter**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/followBehavior.ts#L166)

Recenters the attached node in front of the camera on the next update

#### Returns

`void`
