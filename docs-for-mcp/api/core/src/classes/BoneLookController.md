[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoneLookController

# Class: BoneLookController

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L12)

Class used to make a bone look toward a point in space

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons#bonelookcontroller

## Constructors

### Constructor

> **new BoneLookController**(`mesh`, `bone`, `target`, `options?`): `BoneLookController`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L177)

Create a BoneLookController

#### Parameters

##### mesh

[`TransformNode`](TransformNode.md)

the TransformNode that the bone belongs to

##### bone

[`Bone`](Bone.md)

the bone that will be looking to the target

##### target

[`Vector3`](Vector3.md)

the target Vector3 to look at

##### options?

optional settings:
* maxYaw: the maximum angle the bone will yaw to
* minYaw: the minimum angle the bone will yaw to
* maxPitch: the maximum angle the bone will pitch to
* minPitch: the minimum angle the bone will yaw to
* slerpAmount: set the between 0 and 1 to make the bone slerp to the target.
* upAxis: the up axis of the coordinate system
* upAxisSpace: the space that the up axis is in - Space.BONE, Space.LOCAL (default), or Space.WORLD.
* yawAxis: set yawAxis if the bone does not yaw on the y axis
* pitchAxis: set pitchAxis if the bone does not pitch on the x axis
* adjustYaw: used to make an adjustment to the yaw of the bone
* adjustPitch: used to make an adjustment to the pitch of the bone
* adjustRoll: used to make an adjustment to the roll of the bone

###### adjustPitch?

`number`

###### adjustRoll?

`number`

###### adjustYaw?

`number`

###### maxPitch?

`number`

###### maxYaw?

`number`

###### minPitch?

`number`

###### minYaw?

`number`

###### pitchAxis?

[`Vector3`](Vector3.md)

###### slerpAmount?

`number`

###### upAxis?

[`Vector3`](Vector3.md)

###### upAxisSpace?

[`Space`](../enumerations/Space.md)

###### useAbsoluteValueForYaw?

`boolean`

###### yawAxis?

[`Vector3`](Vector3.md)

#### Returns

`BoneLookController`

## Properties

### adjustPitch

> **adjustPitch**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L51)

Used to make an adjustment to the pitch of the bone

***

### adjustRoll

> **adjustRoll**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L56)

Used to make an adjustment to the roll of the bone

***

### adjustYaw

> **adjustYaw**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L46)

Used to make an adjustment to the yaw of the bone

***

### bone

> **bone**: [`Bone`](Bone.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L31)

The bone that will be looking to the target

***

### mesh

> **mesh**: [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L26)

The TransformNode that the bone is attached to
Name kept as mesh for back compatibility

***

### slerpAmount

> **slerpAmount**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L61)

The amount to slerp (spherical linear interpolation) to the target.  Set this to a value between 0 and 1 (a value of 1 disables slerp)

***

### target

> **target**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L20)

The target Vector3 that the bone will look at

***

### upAxis

> **upAxis**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L36)

The up axis of the coordinate system that is used when the bone is rotated

***

### upAxisSpace

> **upAxisSpace**: [`Space`](../enumerations/Space.md) = `Space.LOCAL`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L41)

The space that the up axis is in - Space.BONE, Space.LOCAL (default), or Space.WORLD

***

### useAbsoluteValueForYaw

> **useAbsoluteValueForYaw**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L120)

Use the absolute value for yaw when checking the min/max constraints

## Accessors

### maxPitch

#### Get Signature

> **get** **maxPitch**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L137)

Gets or sets the maximum pitch angle that the bone can look to

##### Returns

`number`

#### Set Signature

> **set** **maxPitch**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L141)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### maxYaw

#### Get Signature

> **get** **maxYaw**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L103)

Gets or sets the maximum yaw angle that the bone can look to

##### Returns

`number`

#### Set Signature

> **set** **maxYaw**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L107)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### minPitch

#### Get Signature

> **get** **minPitch**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L125)

Gets or sets the minimum pitch angle that the bone can look to

##### Returns

`number`

#### Set Signature

> **set** **minPitch**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L129)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### minYaw

#### Get Signature

> **get** **minYaw**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L86)

Gets or sets the minimum yaw angle that the bone can look to

##### Returns

`number`

#### Set Signature

> **set** **minYaw**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L90)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneLookController.ts:286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Bones/boneLookController.ts#L286)

Update the bone to look at the target.  This should be called before the scene is rendered (use scene.registerBeforeRender())

#### Returns

`void`
