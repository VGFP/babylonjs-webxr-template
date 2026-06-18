[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HandConstraintBehavior

# Class: HandConstraintBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L83)

**`Since`**

Hand constraint behavior that makes the attached `TransformNode` follow hands in XR experiences.
 5.0.0

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`TransformNode`](TransformNode.md)\>

## Constructors

### Constructor

> **new HandConstraintBehavior**(): `HandConstraintBehavior`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L149)

Builds a hand constraint behavior

#### Returns

`HandConstraintBehavior`

## Properties

### gazeProximityRadius

> **gazeProximityRadius**: `number` = `0.15`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L107)

The radius in meters around the center of the hand that the user must gaze inside for the attached node to be enabled and appear.
Used with HandConstraintVisibility.GAZE_FOCUS

***

### handConstraintVisibility

> **handConstraintVisibility**: [`HandConstraintVisibility`](../enumerations/HandConstraintVisibility.md) = `HandConstraintVisibility.PALM_AND_GAZE`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L94)

Sets the HandConstraintVisibility level for the hand constraint

***

### handedness

> **handedness**: `XRHandedness` = `"none"`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L131)

Set the hand this behavior should follow. If set to "none", it will follow any visible hand (prioritising the left one).

***

### lerpTime

> **lerpTime**: `number` = `100`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L137)

Rate of interpolation of position and rotation of the attached node.
Higher values will give a slower interpolation.

***

### nodeOrientationMode

> **nodeOrientationMode**: [`HandConstraintOrientation`](../enumerations/HandConstraintOrientation.md) = `HandConstraintOrientation.HAND_ROTATION`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L126)

Orientation mode of the node attached to this behavior

***

### palmUpStrictness

> **palmUpStrictness**: `number` = `0.95`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L101)

A number from 0.0 to 1.0, marking how restricted the direction the palm faces is for the attached node to be enabled.
A 1 means the palm must be directly facing the user before the node is enabled, a 0 means it is always enabled.
Used with HandConstraintVisibility.PALM_UP

***

### targetOffset

> **targetOffset**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L112)

Offset distance from the hand in meters

***

### targetZone

> **targetZone**: [`HandConstraintZone`](../enumerations/HandConstraintZone.md) = `HandConstraintZone.ULNAR_SIDE`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L117)

Where to place the node regarding the center of the hand.

***

### zoneOrientationMode

> **zoneOrientationMode**: [`HandConstraintOrientation`](../enumerations/HandConstraintOrientation.md) = `HandConstraintOrientation.HAND_ROTATION`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L122)

Orientation mode of the 4 zones around the hand

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L142)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L159)

gets or sets behavior's name

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### attach()

> **attach**(`node`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L231)

Attaches the hand constraint to a `TransformNode`

#### Parameters

##### node

[`TransformNode`](TransformNode.md)

defines the node to attach the behavior to

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L352)

Detaches the behavior from the `TransformNode`

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### disable()

> **disable**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L169)

Disable the behavior

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L164)

Enable the behavior

#### Returns

`void`

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L225)

Initializes the hand constraint behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### linkToXRExperience()

> **linkToXRExperience**(`xr`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/handConstraintBehavior.ts#L361)

Links the behavior to the XR experience in which to retrieve hand transform information.

#### Parameters

##### xr

[`WebXRExperienceHelper`](WebXRExperienceHelper.md) \| [`WebXRFeaturesManager`](WebXRFeaturesManager.md)

xr experience

#### Returns

`void`
