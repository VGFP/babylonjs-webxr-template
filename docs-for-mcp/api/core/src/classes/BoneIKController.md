[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoneIKController

# Class: BoneIKController

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L12)

Class used to apply inverse kinematics to bones

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons#boneikcontroller

## Constructors

### Constructor

> **new BoneIKController**(`mesh`, `bone`, `options?`): `BoneIKController`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L107)

Creates a new BoneIKController

#### Parameters

##### mesh

[`TransformNode`](TransformNode.md)

defines the TransformNode to control

##### bone

[`Bone`](Bone.md)

defines the bone to control. The bone needs to have a parent bone. It also needs to have a length greater than 0 or a children we can use to infer its length.

##### options?

defines options to set up the controller

###### bendAxis?

[`Vector3`](Vector3.md)

###### maxAngle?

`number`

###### poleAngle?

`number`

###### poleTargetBone?

[`Bone`](Bone.md)

###### poleTargetLocalOffset?

[`Vector3`](Vector3.md)

###### poleTargetMesh?

[`TransformNode`](TransformNode.md)

###### slerpAmount?

`number`

###### targetMesh?

[`TransformNode`](TransformNode.md)

#### Returns

`BoneIKController`

## Properties

### mesh

> **mesh**: [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L55)

Gets or sets the TransformNode associated with the controller
Name kept as mesh for back compatibility

***

### poleAngle

> **poleAngle**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L49)

Gets or sets the pole angle

***

### poleTargetBone

> **poleTargetBone**: [`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L29)

Gets or sets the bone used as pole

***

### poleTargetLocalOffset

> **poleTargetLocalOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L44)

Gets or sets the pole target local offset

***

### poleTargetMesh

> **poleTargetMesh**: [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L24)

Gets or sets the mesh used as pole

***

### poleTargetPosition

> **poleTargetPosition**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L39)

Gets or sets the pole target position

***

### slerpAmount

> **slerpAmount**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L60)

The amount to slerp (spherical linear interpolation) to the target.  Set this to a value between 0 and 1 (a value of 1 disables slerp)

***

### targetMesh

> **targetMesh**: [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L21)

Gets or sets the target TransformNode
Name kept as mesh for back compatibility

***

### targetPosition

> **targetPosition**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L34)

Gets or sets the target position

## Accessors

### maxAngle

#### Get Signature

> **get** **maxAngle**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L85)

Gets or sets maximum allowed angle

##### Returns

`number`

#### Set Signature

> **set** **maxAngle**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L89)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/boneIKController.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/boneIKController.ts#L242)

Force the controller to update the bones

#### Returns

`void`
