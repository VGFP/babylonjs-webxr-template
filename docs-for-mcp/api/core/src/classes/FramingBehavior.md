[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FramingBehavior

# Class: FramingBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L20)

The framing behavior (FramingBehavior) is designed to automatically position an ArcRotateCamera when its target is set to a mesh. It is also useful if you want to prevent the camera to go under a virtual horizontal plane.

## See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors/cameraBehaviors#framing-behavior

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

## Constructors

### Constructor

> **new FramingBehavior**(): `FramingBehavior`

#### Returns

`FramingBehavior`

## Properties

### autoCorrectCameraLimitsAndSensibility

> **autoCorrectCameraLimitsAndSensibility**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L172)

Define if the behavior should automatically change the configured
camera limits and sensibilities.

***

### onTargetFramingAnimationEndObservable

> **onTargetFramingAnimationEndObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L31)

An event triggered when the animation to zoom on target mesh has ended

***

### EasingFunction

> `static` **EasingFunction**: [`ExponentialEase`](ExponentialEase.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L45)

The easing function used by animations

***

### EasingMode

> `static` **EasingMode**: `number` = `EasingFunction.EASINGMODE_EASEINOUT`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:50](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L50)

The easing mode used by animations

***

### FitFrustumSidesMode

> `static` **FitFrustumSidesMode**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:535](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L535)

The camera is not allowed to zoom closer to the mesh than the point at which the adjusted bounding sphere touches the frustum sides

***

### IgnoreBoundsSizeMode

> `static` **IgnoreBoundsSizeMode**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:530](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L530)

The camera can move all the way towards the mesh.

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L177)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### defaultElevation

#### Get Signature

> **get** **defaultElevation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L106)

Gets the angle above/below the horizontal plane to return to when the return to default elevation idle
behaviour is triggered, in radians.

##### Returns

`number`

#### Set Signature

> **set** **defaultElevation**(`elevation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L98)

Sets the angle above/below the horizontal plane to return to when the return to default elevation idle
behaviour is triggered, in radians.

##### Parameters

###### elevation

`number`

##### Returns

`void`

***

### elevationReturnTime

#### Get Signature

> **get** **elevationReturnTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L122)

Gets the time (in milliseconds) taken to return to the default beta position.
Negative value indicates camera should not return to default.

##### Returns

`number`

#### Set Signature

> **set** **elevationReturnTime**(`speed`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L114)

Sets the time (in milliseconds) taken to return to the default beta position.
Negative value indicates camera should not return to default.

##### Parameters

###### speed

`number`

##### Returns

`void`

***

### elevationReturnWaitTime

#### Get Signature

> **get** **elevationReturnWaitTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L136)

Gets the delay (in milliseconds) taken before the camera returns to the default beta position.

##### Returns

`number`

#### Set Signature

> **set** **elevationReturnWaitTime**(`time`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L129)

Sets the delay (in milliseconds) taken before the camera returns to the default beta position.

##### Parameters

###### time

`number`

##### Returns

`void`

***

### framingTime

#### Get Signature

> **get** **framingTime**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L164)

Gets the transition time when framing the mesh, in milliseconds

##### Returns

`number`

#### Set Signature

> **set** **framingTime**(`time`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L157)

Sets the transition time when framing the mesh, in milliseconds

##### Parameters

###### time

`number`

##### Returns

`void`

***

### isUserIsMoving

#### Get Signature

> **get** **isUserIsMoving**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L510)

Gets a value indicating if the user is moving the camera

##### Returns

`boolean`

***

### mode

#### Get Signature

> **get** **mode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L62)

Gets current mode used by the behavior.

##### Returns

`number`

#### Set Signature

> **set** **mode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L55)

Sets the current mode used by the behavior

##### Parameters

###### mode

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L24)

Gets the name of the behavior.

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

***

### positionScale

#### Get Signature

> **get** **positionScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L90)

Gets the scale to apply on Y axis to position camera focus. 0.5 by default which means the center of the bounding box.

##### Returns

`number`

#### Set Signature

> **set** **positionScale**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L83)

Sets the scale to apply on Y axis to position camera focus. 0.5 by default which means the center of the bounding box.

##### Parameters

###### scale

`number`

##### Returns

`void`

***

### radiusScale

#### Get Signature

> **get** **radiusScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L76)

Gets the scale applied to the radius

##### Returns

`number`

#### Set Signature

> **set** **radiusScale**(`radius`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L69)

Sets the scale applied to the radius (1 by default)

##### Parameters

###### radius

`number`

##### Returns

`void`

***

### zoomStopsAnimation

#### Get Signature

> **get** **zoomStopsAnimation**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L150)

Gets the flag that indicates if user zooming should stop animation.

##### Returns

`boolean`

#### Set Signature

> **set** **zoomStopsAnimation**(`flag`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L143)

Sets the flag that indicates if user zooming should stop animation.

##### Parameters

###### flag

`boolean`

##### Returns

`void`

## Methods

### attach()

> **attach**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L200)

Attaches the behavior to its arc rotate camera.

#### Parameters

##### camera

[`ArcRotateCamera`](ArcRotateCamera.md)

Defines the camera to attach the behavior to

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L238)

Detaches the behavior from its current arc rotate camera.

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L192)

Initializes the behavior.

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### stopAllAnimations()

> **stopAllAnimations**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L493)

Stops and removes all animations that have been applied to the camera

#### Returns

`void`

***

### zoomOnBoundingInfo()

> **zoomOnBoundingInfo**(`minimumWorld`, `maximumWorld`, `focusOnOriginXZ?`, `onAnimationEnd?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L320)

Targets the bounding box info defined by its extends and updates zoom level accordingly.

#### Parameters

##### minimumWorld

[`Vector3`](Vector3.md)

Determines the smaller position of the bounding box extend

##### maximumWorld

[`Vector3`](Vector3.md)

Determines the bigger position of the bounding box extend

##### focusOnOriginXZ?

`boolean` = `false`

Determines if the camera should focus on 0 in the X and Z axis instead of the mesh

##### onAnimationEnd?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Callback triggered at the end of the framing animation

#### Returns

`boolean`

true if the zoom was done

***

### zoomOnMesh()

> **zoomOnMesh**(`mesh`, `focusOnOriginXZ?`, `onAnimationEnd?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L273)

Targets the given mesh and updates zoom level accordingly.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to target.

##### focusOnOriginXZ?

`boolean` = `false`

Determines if the camera should focus on 0 in the X and Z axis instead of the mesh

##### onAnimationEnd?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Callback triggered at the end of the framing animation

#### Returns

`void`

***

### zoomOnMeshesHierarchy()

> **zoomOnMeshesHierarchy**(`meshes`, `focusOnOriginXZ?`, `onAnimationEnd?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L299)

Targets the given meshes with their children and updates zoom level accordingly.

#### Parameters

##### meshes

[`AbstractMesh`](AbstractMesh.md)[]

The mesh to target.

##### focusOnOriginXZ?

`boolean` = `false`

Determines if the camera should focus on 0 in the X and Z axis instead of the mesh

##### onAnimationEnd?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Callback triggered at the end of the framing animation

#### Returns

`void`

***

### zoomOnMeshHierarchy()

> **zoomOnMeshHierarchy**(`mesh`, `focusOnOriginXZ?`, `onAnimationEnd?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts:286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Cameras/framingBehavior.ts#L286)

Targets the given mesh with its children and updates zoom level accordingly.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to target.

##### focusOnOriginXZ?

`boolean` = `false`

Determines if the camera should focus on 0 in the X and Z axis instead of the mesh

##### onAnimationEnd?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Callback triggered at the end of the framing animation

#### Returns

`void`
