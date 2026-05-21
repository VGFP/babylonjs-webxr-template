[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Bone

# Class: Bone

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L16)

Class used to store bone information

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons

## Extends

- [`Node`](Node.md)

## Constructors

### Constructor

> **new Bone**(`name`, `skeleton`, `parentBone?`, `localMatrix?`, `restMatrix?`, `bindMatrix?`, `index?`): `Bone`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L95)

Create a new bone

#### Parameters

##### name

`string`

defines the bone name

##### skeleton

[`Skeleton`](Skeleton.md)

defines the parent skeleton

##### parentBone?

[`Nullable`](../type-aliases/Nullable.md)\<`Bone`\> = `null`

defines the parent (can be null if the bone is the root)

##### localMatrix?

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\> = `null`

defines the local matrix (default: identity)

##### restMatrix?

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\> = `null`

defines the rest matrix (default: localMatrix)

##### bindMatrix?

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\> = `null`

defines the bind matrix (default: localMatrix)

##### index?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines index of the bone in the hierarchy (default: null)

#### Returns

`Bone`

#### Overrides

[`Node`](Node.md).[`constructor`](Node.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L27)

Gets the animations associated with this bone

#### Overrides

[`Node`](Node.md).[`animations`](Node.md#animations)

***

### children

> **children**: `Bone`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L24)

Gets the list of child bones

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L95)

Gets or sets the id of the node

#### Inherited from

[`Node`](Node.md).[`id`](Node.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L127)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`Node`](Node.md).[`inspectableCustomProperties`](Node.md#inspectablecustomproperties)

***

### length

> **length**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L32)

Gets or sets bone length

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L113)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`Node`](Node.md).[`metadata`](Node.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L99)

defines the bone name

#### Inherited from

[`Node`](Node.md).[`name`](Node.md#name)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L146)

Observable fired when an accessibility tag is changed

#### Inherited from

[`WebXRCamera`](WebXRCamera.md).[`onAccessibilityTagChangedObservable`](WebXRCamera.md#onaccessibilitytagchangedobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L350)

An event triggered when the mesh is disposed

#### Inherited from

[`WebXRCamera`](WebXRCamera.md).[`onDisposeObservable`](WebXRCamera.md#ondisposeobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L179)

Callback raised when the node is ready to be used

#### Inherited from

[`Node`](Node.md).[`onReady`](Node.md#onready)

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L121)

For internal use only. Please do not use.

#### Inherited from

[`Node`](Node.md).[`reservedDataStore`](Node.md#reserveddatastore)

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L107)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`WebXRCamera`](WebXRCamera.md).[`state`](WebXRCamera.md#state)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L101)

Gets or sets the unique id of the node

#### Inherited from

[`Node`](Node.md).[`uniqueId`](Node.md#uniqueid)

## Accessors

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L137)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L132)

Gets or sets the accessibility tag to describe the node for accessibility purpose.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

##### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`accessibilityTag`](Node.md#accessibilitytag)

***

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L437)

Gets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Overrides

[`Node`](Node.md).[`animationPropertiesOverride`](Node.md#animationpropertiesoverride)

***

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L468)

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>[]

#### Inherited from

[`Node`](Node.md).[`behaviors`](Node.md#behaviors)

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L151)

Gets or sets a boolean used to define if the node must be serialized

##### Returns

`boolean`

#### Set Signature

> **set** **doNotSerialize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L163)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`doNotSerialize`](Node.md#donotserialize)

***

### inheritVisibility

#### Get Signature

> **get** **inheritVisibility**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L269)

If set to true, this node, when renderable, will only be visible if its parent(s) are also visible.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **inheritVisibility**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L273)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`inheritVisibility`](Node.md#inheritvisibility)

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L281)

Gets or sets a boolean indicating whether this node is visible, either this node itself when it is renderable or its renderable child nodes when `inheritVisibility` is true.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L289)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`isVisible`](Node.md#isvisible)

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](Observable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L373)

An event triggered when the node is cloned

##### Returns

[`Observable`](Observable.md)\<[`Node`](Node.md)\>

#### Inherited from

[`Node`](Node.md).[`onClonedObservable`](Node.md#onclonedobservable)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L356)

Sets a callback that will be raised when the node will be disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`onDispose`](Node.md#ondispose)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L366)

An event triggered when the enabled state of the node changes

##### Returns

[`Observable`](Observable.md)\<`boolean`\>

#### Inherited from

[`Node`](Node.md).[`onEnabledStateChangedObservable`](Node.md#onenabledstatechangedobservable)

***

### parent

#### Get Signature

> **get** **parent**(): `Bone`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L144)

Gets or sets the parent of the node (without keeping the current position in the scene)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

##### Returns

`Bone`

#### Set Signature

> **set** **parent**(`newParent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L172)

Gets or sets the parent of the node (without keeping the current position in the scene)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

##### Parameters

###### newParent

[`Nullable`](../type-aliases/Nullable.md)\<`Bone`\>

##### Returns

`void`

#### Overrides

[`Node`](Node.md).[`parent`](Node.md#parent)

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L394)

Gets or sets current position (in local space)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`newPosition`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L399)

##### Parameters

###### newPosition

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### rotation

#### Get Signature

> **get** **rotation**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L407)

Gets or sets current rotation (in local space)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **rotation**(`newRotation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:411](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L411)

##### Parameters

###### newRotation

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### rotationQuaternion

#### Get Signature

> **get** **rotationQuaternion**(): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L416)

Gets or sets current rotation quaternion (in local space)

##### Returns

[`Quaternion`](Quaternion.md)

#### Set Signature

> **set** **rotationQuaternion**(`newRotation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L421)

##### Parameters

###### newRotation

[`Quaternion`](Quaternion.md)

##### Returns

`void`

***

### scaling

#### Get Signature

> **get** **scaling**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L426)

Gets or sets current scaling (in local space)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **scaling**(`newScaling`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L430)

##### Parameters

###### newScaling

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### worldMatrixFromCache

#### Get Signature

> **get** **worldMatrixFromCache**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L512)

Returns directly the latest state of the mesh World matrix.
A Matrix is returned.

##### Returns

[`Matrix`](Matrix.md)

#### Inherited from

[`Node`](Node.md).[`worldMatrixFromCache`](Node.md#worldmatrixfromcache)

## Methods

### addBehavior()

> **addBehavior**(`behavior`, `attachImmediately?`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L421)

Attach a behavior to the node

#### Parameters

##### behavior

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>

defines the behavior to attach

##### attachImmediately?

`boolean` = `false`

defines that the behavior must be attached even if the scene is still loading

#### Returns

[`Node`](Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Node`](Node.md).[`addBehavior`](Node.md#addbehavior)

***

### beginAnimation()

> **beginAnimation**(`name`, `loop?`, `speedRatio?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:898](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L898)

Will start the animation sequence

#### Parameters

##### name

`string`

defines the range frames for animation sequence

##### loop?

`boolean`

defines if the animation should loop (false by default)

##### speedRatio?

`number`

defines the speed factor in which to run the animation (1 by default)

##### onAnimationEnd?

() => `void`

defines a function to be executed when the animation ended (undefined by default)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

the object created for this animation. If range does not exist, it will return null

#### Inherited from

[`Node`](Node.md).[`beginAnimation`](Node.md#beginanimation)

***

### clone()

> **clone**(`name`, `newParent`, `doNotCloneChildren?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:857](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L857)

Clone the current node

#### Parameters

##### name

`string`

Name of the new clone

##### newParent

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

New parent for the clone

##### doNotCloneChildren?

`boolean`

Do not clone children hierarchy

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

the new transform node

#### Inherited from

[`Node`](Node.md).[`clone`](Node.md#clone)

***

### computeAbsoluteMatrices()

> **computeAbsoluteMatrices**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:938](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L938)

Compute the absolute matrices of this bone and its children

#### Returns

`void`

***

### ~~computeAbsoluteTransforms()~~

> **computeAbsoluteTransforms**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:965](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L965)

Compute the absolute matrices of this bone and its children

#### Returns

`void`

#### Deprecated

Please use computeAbsoluteMatrices instead

***

### computeWorldMatrix()

> **computeWorldMatrix**(`_force?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:933](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L933)

Computes the world matrix of the node

#### Parameters

##### \_force?

`boolean`

defines if the cache version should be invalidated forcing the world matrix to be created from scratch

#### Returns

[`Matrix`](Matrix.md)

the world matrix

#### Inherited from

[`Node`](Node.md).[`computeWorldMatrix`](Node.md#computeworldmatrix)

***

### copyAnimationRange()

> **copyAnimationRange**(`source`, `rangeName`, `frameOffset`, `rescaleAsRequired`, `skelDimensionsRatio`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L197)

Copy an animation range from another bone

#### Parameters

##### source

`Bone`

defines the source bone

##### rangeName

`string`

defines the range name to copy

##### frameOffset

`number`

defines the frame offset

##### rescaleAsRequired

`boolean`

defines if rescaling must be applied if required

##### skelDimensionsRatio

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

defines the scaling ratio

#### Returns

`boolean`

true if operation was successful

***

### createAnimationRange()

> **createAnimationRange**(`name`, `from`, `to`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:815](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L815)

Creates an animation range for this node

#### Parameters

##### name

`string`

defines the name of the range

##### from

`number`

defines the starting key

##### to

`number`

defines the end key

#### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`createAnimationRange`](Node.md#createanimationrange)

***

### deleteAnimationRange()

> **deleteAnimationRange**(`name`, `deleteFrames?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:832](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L832)

Delete a specific animation range

#### Parameters

##### name

`string`

defines the name of the range to delete

##### deleteFrames?

`boolean` = `true`

defines if animation frames from the range must be deleted as well

#### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`deleteAnimationRange`](Node.md#deleteanimationrange)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1184)

Releases associated resources

#### Returns

`void`

#### Overrides

[`Node`](Node.md).[`dispose`](Node.md#dispose)

***

### getAbsoluteInverseBindMatrix()

> **getAbsoluteInverseBindMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L335)

Gets the inverse of the bind matrix, in world space (relative to the skeleton root)

#### Returns

[`Matrix`](Matrix.md)

the inverse bind matrix, in world space

***

### getAbsoluteMatrix()

> **getAbsoluteMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:352](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L352)

Gets the bone matrix, in world space (relative to the skeleton root)

#### Returns

[`Matrix`](Matrix.md)

the bone matrix, in world space

***

### getAbsolutePosition()

> **getAbsolutePosition**(`tNode?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:918](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L918)

Get the absolute position of the bone (world space)

#### Parameters

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

[`Vector3`](Vector3.md)

The absolute position of the bone

***

### getAbsolutePositionFromLocal()

> **getAbsolutePositionFromLocal**(`position`, `tNode?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1118)

Get the world position of a point that is in the local space of the bone

#### Parameters

##### position

[`Vector3`](Vector3.md)

The local position

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

[`Vector3`](Vector3.md)

The world position

***

### getAbsolutePositionFromLocalToRef()

> **getAbsolutePositionFromLocalToRef**(`position`, `tNode?`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1132)

Get the world position of a point that is in the local space of the bone and copy it to the result param

#### Parameters

##### position

[`Vector3`](Vector3.md)

The local position

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

##### result

[`Vector3`](Vector3.md)

The vector3 that the world position should be copied to

#### Returns

`void`

***

### getAbsolutePositionToRef()

> **getAbsolutePositionToRef**(`tNode`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:931](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L931)

Copy the absolute position of the bone (world space) to the result param

#### Parameters

##### tNode

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

##### result

[`Vector3`](Vector3.md)

The vector3 to copy the absolute position to

#### Returns

`void`

***

### ~~getAbsoluteTransform()~~

> **getAbsoluteTransform**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L362)

Gets the bone matrix, in world space (relative to the skeleton root)

#### Returns

[`Matrix`](Matrix.md)

the bone matrix, in world space

#### Deprecated

Please use getAbsoluteMatrix instead

***

### getAnimationByName()

> **getAnimationByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:797](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L797)

Get an animation by name

#### Parameters

##### name

`string`

defines the name of the animation to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)\>

null if not found else the requested animation

#### Inherited from

[`Node`](Node.md).[`getAnimationByName`](Node.md#getanimationbyname)

***

### getAnimationRange()

> **getAnimationRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L846)

Get an animation range by name

#### Parameters

##### name

`string`

defines the name of the animation range to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>

null if not found else the requested animation range

#### Inherited from

[`Node`](Node.md).[`getAnimationRange`](Node.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:881](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L881)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](AnimationRange.md)\>[]

an array

#### Inherited from

[`Node`](Node.md).[`getAnimationRanges`](Node.md#getanimationranges)

***

### ~~getBaseMatrix()~~

> **getBaseMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L228)

Gets the bind matrix.

#### Returns

[`Matrix`](Matrix.md)

the bind matrix

#### Deprecated

Please use getBindMatrix instead

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:478](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L478)

Gets an attached behavior by name

#### Parameters

##### name

`string`

defines the name of the behavior to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>\>

null if behavior was not found else the requested behavior

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Node`](Node.md).[`getBehaviorByName`](Node.md#getbehaviorbyname)

***

### getBindMatrix()

> **getBindMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L219)

Gets the bind matrix

#### Returns

[`Matrix`](Matrix.md)

the bind matrix

***

### ~~getBindPose()~~

> **getBindPose**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L271)

Gets the bind matrix

#### Returns

[`Matrix`](Matrix.md)

the bind matrix

#### Deprecated

Please use getBindMatrix instead

***

### getChildMeshes()

Get all child-meshes of this node

#### Param

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

#### Param

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getChildMeshes**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:723](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L723)

Get all child-meshes of this node

##### Type Parameters

###### T

`T` *extends* [`AbstractMesh`](AbstractMesh.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

an array of AbstractMesh

##### Inherited from

[`Node`](Node.md).[`getChildMeshes`](Node.md#getchildmeshes)

#### Call Signature

> **getChildMeshes**(`directDescendantsOnly?`, `predicate?`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:731](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L731)

Get all child-meshes of this node

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of AbstractMesh

##### Inherited from

[`Node`](Node.md).[`getChildMeshes`](Node.md#getchildmeshes)

***

### getChildren()

> **getChildren**(): `Bone`[]

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L160)

Returns an array containing the children of the bone

#### Returns

`Bone`[]

an array containing the children of the bone (can be empty if the bone has no children)

#### Overrides

[`Node`](Node.md).[`getChildren`](Node.md#getchildren)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L130)

Gets the current object class name.

#### Returns

`string`

the class name

#### Overrides

[`Node`](Node.md).[`getClassName`](Node.md#getclassname)

***

### getDescendants()

Will return all nodes that have this node as ascendant

#### Param

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

#### Param

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getDescendants**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L693)

Will return all nodes that have this node as ascendant

##### Type Parameters

###### T

`T` *extends* [`Node`](Node.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

all children nodes of all types

##### Inherited from

[`Node`](Node.md).[`getDescendants`](Node.md#getdescendants)

#### Call Signature

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:701](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L701)

Will return all nodes that have this node as ascendant

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`Node`](Node.md)[]

all children nodes of all types

##### Inherited from

[`Node`](Node.md).[`getDescendants`](Node.md#getdescendants)

***

### getDirection()

> **getDirection**(`localAxis`, `tNode?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:975](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L975)

Get the world direction from an axis that is in the local space of the bone

#### Parameters

##### localAxis

[`Vector3`](Vector3.md)

The local direction that is used to compute the world direction

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

[`Vector3`](Vector3.md)

The world direction

***

### getDirectionToRef()

> **getDirectionToRef**(`localAxis`, `tNode?`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:989](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L989)

Copy the world direction to a vector3 from an axis that is in the local space of the bone

#### Parameters

##### localAxis

[`Vector3`](Vector3.md)

The local direction that is used to compute the world direction

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

##### result

[`Vector3`](Vector3.md)

The vector3 that the world direction will be copied to

#### Returns

`void`

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L407)

Gets the engine of the node

#### Returns

[`AbstractEngine`](AbstractEngine.md)

a Engine

#### Inherited from

[`Node`](Node.md).[`getEngine`](Node.md#getengine)

***

### getFinalMatrix()

> **getFinalMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L298)

Gets the matrix used to store the final world transformation of the bone (ie. the matrix sent to shaders)

#### Returns

[`Matrix`](Matrix.md)

the final world matrix

***

### getHierarchyBoundingVectors()

> **getHierarchyBoundingVectors**(`includeDescendants?`, `predicate?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:998](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L998)

Return the minimum and maximum world vectors of the entire hierarchy under current node

#### Parameters

##### includeDescendants?

`boolean` = `true`

Include bounding info from descendants as well (true by default)

##### predicate?

[`Nullable`](../type-aliases/Nullable.md)\<(`abstractMesh`) => `boolean`\> = `null`

defines a callback function that can be customize to filter what meshes should be included in the list used to compute the bounding vectors

#### Returns

`object`

the new bounding vectors

##### max

> **max**: [`Vector3`](Vector3.md)

##### min

> **min**: [`Vector3`](Vector3.md)

#### Inherited from

[`Node`](Node.md).[`getHierarchyBoundingVectors`](Node.md#gethierarchyboundingvectors)

***

### getIndex()

> **getIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L168)

Gets the node index in matrix array generated for rendering

#### Returns

`number`

the node index

***

### ~~getInvertedAbsoluteTransform()~~

> **getInvertedAbsoluteTransform**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L344)

Gets the inverse of the bind matrix, in world space (relative to the skeleton root)

#### Returns

[`Matrix`](Matrix.md)

the inverse bind matrix, in world space

#### Deprecated

Please use getAbsoluteInverseBindMatrix instead

***

### getLocalMatrix()

> **getLocalMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L210)

Gets the local matrix

#### Returns

[`Matrix`](Matrix.md)

the local matrix

***

### getLocalPositionFromAbsolute()

> **getLocalPositionFromAbsolute**(`position`, `tNode?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1148)

Get the local position of a point that is in world space

#### Parameters

##### position

[`Vector3`](Vector3.md)

The world position

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

[`Vector3`](Vector3.md)

The local position

***

### getLocalPositionFromAbsoluteToRef()

> **getLocalPositionFromAbsoluteToRef**(`position`, `tNode?`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1162)

Get the local position of a point that is in world space and copy it to the result param

#### Parameters

##### position

[`Vector3`](Vector3.md)

The world position

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

##### result

[`Vector3`](Vector3.md)

The vector3 that the local position should be copied to

#### Returns

`void`

***

### getParent()

> **getParent**(): [`Nullable`](../type-aliases/Nullable.md)\<`Bone`\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L152)

Gets parent bone

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Bone`\>

a bone or null if the bone is the root of the bone hierarchy

***

### getPosition()

> **getPosition**(`space?`, `tNode?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:879](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L879)

Get the position of the bone in local or world space

#### Parameters

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the returned position is in

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

[`Vector3`](Vector3.md)

The position of the bone

***

### getPositionToRef()

> **getPositionToRef**(`space?`, `tNode`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:893](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L893)

Copy the position of the bone to a vector3 in local or world space

#### Parameters

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the returned position is in

##### tNode

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

##### result

[`Vector3`](Vector3.md)

The vector3 to copy the position to

#### Returns

`void`

***

### getRestMatrix()

> **getRestMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L236)

Gets the rest matrix

#### Returns

[`Matrix`](Matrix.md)

the rest matrix

***

### ~~getRestPose()~~

> **getRestPose**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L245)

Gets the rest matrix

#### Returns

[`Matrix`](Matrix.md)

the rest matrix

#### Deprecated

Please use getRestMatrix instead

***

### getRotation()

> **getRotation**(`space?`, `tNode?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1007](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1007)

Get the euler rotation of the bone in local or world space

#### Parameters

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation should be in

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

[`Vector3`](Vector3.md)

The euler rotation

***

### getRotationMatrix()

> **getRotationMatrix**(`space?`, `tNode`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1077](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1077)

Get the rotation matrix of the bone in local or world space

#### Parameters

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation should be in

##### tNode

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

[`Matrix`](Matrix.md)

The rotation matrix

***

### getRotationMatrixToRef()

> **getRotationMatrixToRef**(`space?`, `tNode`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1091](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1091)

Copy the rotation matrix of the bone to a matrix.  The rotation can be in either local or world space

#### Parameters

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation should be in

##### tNode

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

##### result

[`Matrix`](Matrix.md)

The quaternion that the rotation should be copied to

#### Returns

`void`

***

### getRotationQuaternion()

> **getRotationQuaternion**(`space?`, `tNode?`): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1035](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1035)

Get the quaternion rotation of the bone in either local or world space

#### Parameters

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation should be in

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

[`Quaternion`](Quaternion.md)

The quaternion rotation

***

### getRotationQuaternionToRef()

> **getRotationQuaternionToRef**(`space?`, `tNode?`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1049](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1049)

Copy the quaternion rotation of the bone to a quaternion.  The rotation can be in either local or world space

#### Parameters

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation should be in

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

##### result

[`Quaternion`](Quaternion.md)

The quaternion that the rotation should be copied to

#### Returns

`void`

***

### getRotationToRef()

> **getRotationToRef**(`space?`, `tNode?`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1021](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1021)

Copy the euler rotation of the bone to a vector3.  The rotation can be in either local or world space

#### Parameters

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation should be in

##### tNode?

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

##### result

[`Vector3`](Vector3.md)

The vector3 that the rotation should be copied to

#### Returns

`void`

***

### getScale()

> **getScale**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:660](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L660)

Gets the current scaling in local space

#### Returns

[`Vector3`](Vector3.md)

the current scaling vector

***

### getScaleToRef()

> **getScaleToRef**(`result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:669](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L669)

Gets the current scaling in local space and stores it in a target vector

#### Parameters

##### result

[`Vector3`](Vector3.md)

defines the target vector

#### Returns

`void`

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L399)

Gets the scene of the node

#### Returns

[`Scene`](Scene.md)

a scene

#### Inherited from

[`Node`](Node.md).[`getScene`](Node.md#getscene)

***

### getSkeleton()

> **getSkeleton**(): [`Skeleton`](Skeleton.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L140)

Gets the parent skeleton

#### Returns

[`Skeleton`](Skeleton.md)

a skeleton

***

### getTransformNode()

> **getTransformNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L389)

Gets the node used to drive the bone's transformation

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

a transform node or null

***

### ~~getWorldMatrix()~~

> **getWorldMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L307)

Gets the matrix used to store the final world transformation of the bone (ie. the matrix sent to shaders)

#### Returns

[`Matrix`](Matrix.md)

the final world matrix

#### Deprecated

Please use getFinalMatrix instead

#### Overrides

[`Node`](Node.md).[`getWorldMatrix`](Node.md#getworldmatrix)

***

### isDescendantOf()

> **isDescendantOf**(`ancestor`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:655](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L655)

Is this node a descendant of the given node?
The function will iterate up the hierarchy until the ancestor was found or no more parents defined

#### Parameters

##### ancestor

[`Node`](Node.md)

defines the parent node to inspect

#### Returns

`boolean`

a boolean indicating if this node is a descendant of the given node

#### Inherited from

[`Node`](Node.md).[`isDescendantOf`](Node.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L214)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`Node`](Node.md).[`isDisposed`](Node.md#isdisposed)

***

### isEnabled()

> **isEnabled**(`checkAncestors?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:613](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L613)

Is this node enabled?
If the node has a parent, all ancestors will be checked and false will be returned if any are false (not enabled), otherwise will return true

#### Parameters

##### checkAncestors?

`boolean` = `true`

indicates if this method should check the ancestors. The default is to check the ancestors. If set to false, the method will return the value of this node without checking ancestors

#### Returns

`boolean`

whether this node (and its parent) is enabled

#### Inherited from

[`Node`](Node.md).[`isEnabled`](Node.md#isenabled)

***

### isReady()

> **isReady**(`_completeCheck?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:592](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L592)

Is this node ready to be used/rendered

#### Parameters

##### \_completeCheck?

`boolean` = `false`

defines if a complete check (including materials and lights) has to be done (false by default)

#### Returns

`boolean`

true if the node is ready

#### Inherited from

[`Node`](Node.md).[`isReady`](Node.md#isready)

***

### linkTransformNode()

> **linkTransformNode**(`transformNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L371)

Links with the given transform node.
The local matrix of this bone is overwritten by the transform of the node every frame.

#### Parameters

##### transformNode

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

defines the transform node to link to

#### Returns

`void`

***

### markAsDirty()

> **markAsDirty**(): `Bone`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:520](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L520)

Flag the bone as dirty (Forcing it to update everything)

#### Returns

`Bone`

this bone

#### Overrides

[`Node`](Node.md).[`markAsDirty`](Node.md#markasdirty)

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Node`](Node.md)

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:451](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L451)

Remove an attached behavior

#### Parameters

##### behavior

[`Behavior`](../interfaces/Behavior.md)\<[`Node`](Node.md)\>

defines the behavior to attach

#### Returns

[`Node`](Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Node`](Node.md).[`removeBehavior`](Node.md#removebehavior)

***

### returnToRest()

> **returnToRest**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L314)

Sets the local matrix to the rest matrix

#### Returns

`void`

***

### rotate()

> **rotate**(`axis`, `amount`, `space?`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:709](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L709)

Add a rotation to the bone on an axis in local or world space

#### Parameters

##### axis

[`Vector3`](Vector3.md)

The axis to rotate the bone on

##### amount

`number`

The amount to rotate the bone

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the axis is in

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### scale()

> **scale**(`x`, `y`, `z`, `scaleChildren?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L616)

Scale the bone on the x, y and z axes (in local space)

#### Parameters

##### x

`number`

The amount to scale the bone on the x axis

##### y

`number`

The amount to scale the bone on the y axis

##### z

`number`

The amount to scale the bone on the z axis

##### scaleChildren?

`boolean` = `false`

sets this to true if children of the bone should be scaled as well (false by default)

#### Returns

`void`

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:912](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L912)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`Node`](Node.md).[`serializeAnimationRanges`](Node.md#serializeanimationranges)

***

### setAbsolutePosition()

> **setAbsolutePosition**(`position`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:605](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L605)

Set the absolute position of the bone (world space)

#### Parameters

##### position

[`Vector3`](Vector3.md)

The position to set the bone

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### setAxisAngle()

> **setAxisAngle**(`axis`, `angle`, `space?`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:723](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L723)

Set the rotation of the bone to a particular axis angle in local or world space

#### Parameters

##### axis

[`Vector3`](Vector3.md)

The axis to rotate the bone on

##### angle

`number`

The angle that the bone should be rotated to

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the axis is in

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### setBindMatrix()

> **setBindMatrix**(`matrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L281)

Sets the bind matrix
This will trigger a recomputation of the absolute bind and absolute inverse bind matrices for this bone and its children
Note that the local matrix will also be set with the matrix passed in parameter!

#### Parameters

##### matrix

[`Matrix`](Matrix.md)

the local-space bind matrix to set for this bone

#### Returns

`void`

***

### ~~setBindPose()~~

> **setBindPose**(`matrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L290)

Sets the bind matrix

#### Parameters

##### matrix

[`Matrix`](Matrix.md)

the local-space bind to set for this bone

#### Returns

`void`

#### Deprecated

Please use setBindMatrix instead

***

### setCurrentPoseAsRest()

> **setCurrentPoseAsRest**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:1177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L1177)

Set the current local matrix as the restMatrix for this bone.

#### Returns

`void`

***

### setEnabled()

> **setEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:640](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L640)

Set the enabled state of this node

#### Parameters

##### value

`boolean`

defines the new enabled state

#### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`setEnabled`](Node.md#setenabled)

***

### setParent()

> **setParent**(`parent`, `updateAbsoluteBindMatrices?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L181)

Sets the parent bone

#### Parameters

##### parent

[`Nullable`](../type-aliases/Nullable.md)\<`Bone`\>

defines the parent (can be null if the bone is the root)

##### updateAbsoluteBindMatrices?

`boolean` = `true`

defines if the absolute bind and absolute inverse bind matrices must be updated

#### Returns

`void`

***

### setPosition()

> **setPosition**(`position`, `space?`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:596](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L596)

Set the position of the bone in local or world space

#### Parameters

##### position

[`Vector3`](Vector3.md)

The position to set the bone

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the position is in (default: Space.LOCAL)

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### setRestMatrix()

> **setRestMatrix**(`matrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L253)

Sets the rest matrix

#### Parameters

##### matrix

[`Matrix`](Matrix.md)

the local-space rest matrix to set for this bone

#### Returns

`void`

***

### ~~setRestPose()~~

> **setRestPose**(`matrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L262)

Sets the rest matrix

#### Parameters

##### matrix

[`Matrix`](Matrix.md)

the local-space rest to set for this bone

#### Returns

`void`

#### Deprecated

Please use setRestMatrix instead

***

### setRotation()

> **setRotation**(`rotation`, `space?`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:750](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L750)

Set the euler rotation of the bone in local or world space

#### Parameters

##### rotation

[`Vector3`](Vector3.md)

The euler rotation that the bone should be set to

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation is in

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### setRotationMatrix()

> **setRotationMatrix**(`rotMat`, `space?`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:789](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L789)

Set the rotation matrix of the bone in local or world space

#### Parameters

##### rotMat

[`Matrix`](Matrix.md)

The rotation matrix that the bone should be set to

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation is in

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### setRotationQuaternion()

> **setRotationQuaternion**(`quat`, `space?`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:760](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L760)

Set the quaternion rotation of the bone in local or world space

#### Parameters

##### quat

[`Quaternion`](Quaternion.md)

The quaternion rotation that the bone should be set to

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the rotation is in

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### setScale()

> **setScale**(`scale`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:650](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L650)

Set the bone scaling in local space

#### Parameters

##### scale

[`Vector3`](Vector3.md)

defines the scaling vector

#### Returns

`void`

***

### setYawPitchRoll()

> **setYawPitchRoll**(`yaw`, `pitch`, `roll`, `space?`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:682](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L682)

Set the yaw, pitch, and roll of the bone in local or world space

#### Parameters

##### yaw

`number`

The rotation of the bone on the y axis

##### pitch

`number`

The rotation of the bone on the x axis

##### roll

`number`

The rotation of the bone on the z axis

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the axes of rotation are in

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### translate()

> **translate**(`vec`, `space?`, `tNode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:586](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L586)

Translate the bone in local or world space

#### Parameters

##### vec

[`Vector3`](Vector3.md)

The amount to translate the bone

##### space?

[`Space`](../enumerations/Space.md) = `Space.LOCAL`

The space that the translation is in (default: Space.LOCAL)

##### tNode?

[`TransformNode`](TransformNode.md)

A TransformNode whose world matrix is to be applied to the calculated absolute matrix. In most cases, you'll want to pass the mesh associated with the skeleton from which this bone comes. Used only when space=Space.WORLD

#### Returns

`void`

***

### updateMatrix()

> **updateMatrix**(`bindMatrix`, `updateAbsoluteBindMatrices?`, `updateLocalMatrix?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Bones/bone.ts:477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Bones/bone.ts#L477)

Update the bind (and optionally the local) matrix

#### Parameters

##### bindMatrix

[`Matrix`](Matrix.md)

defines the new matrix to set to the bind/local matrix, in local space

##### updateAbsoluteBindMatrices?

`boolean` = `true`

defines if the absolute bind and absolute inverse bind matrices must be recomputed (default: true)

##### updateLocalMatrix?

`boolean` = `true`

defines if the local matrix should also be updated with the matrix passed in parameter (default: true)

#### Returns

`void`

***

### AddNodeConstructor()

> `static` **AddNodeConstructor**(`type`, `constructorFunc`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L61)

Add a new node constructor

#### Parameters

##### type

`string`

defines the type name of the node to construct

##### constructorFunc

[`NodeConstructor`](../type-aliases/NodeConstructor.md)

defines the constructor function

#### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`AddNodeConstructor`](Node.md#addnodeconstructor)

***

### Construct()

> `static` **Construct**(`type`, `name`, `scene`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L73)

Returns a node constructor based on type name

#### Parameters

##### type

`string`

defines the type name

##### name

`string`

defines the new node name

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### options?

`any`

defines optional options to transmit to constructors

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<() => [`Node`](Node.md)\>

the new constructor or null

#### Inherited from

[`Node`](Node.md).[`Construct`](Node.md#construct)

***

### ParseAnimationRanges()

> `static` **ParseAnimationRanges**(`node`, `parsedNode`, `_scene`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/node.ts:984](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/node.ts#L984)

Parse animation range data from a serialization object and store them into a given node

#### Parameters

##### node

[`Node`](Node.md)

defines where to store the animation ranges

##### parsedNode

`any`

defines the serialization object to read data from

##### \_scene

[`Scene`](Scene.md)

defines the hosting scene

#### Returns

`void`

#### Inherited from

[`Node`](Node.md).[`ParseAnimationRanges`](Node.md#parseanimationranges)
