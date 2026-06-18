[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / TouchMeshButton3D

# Class: TouchMeshButton3D

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchMeshButton3D.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchMeshButton3D.ts#L11)

**`Since`**

Class used to create an interactable object. It's a touchable 3D button using a mesh coming from the current scene
 5.0.0

## Extends

- [`TouchButton3D`](TouchButton3D.md)

## Constructors

### Constructor

> **new TouchMeshButton3D**(`mesh`, `name?`): `TouchMeshButton3D`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchMeshButton3D.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchMeshButton3D.ts#L20)

Creates a new 3D button based on a mesh

#### Parameters

##### mesh

[`Mesh`](../../../core/src/classes/Mesh.md)

mesh to become a 3D button. By default this is also the mesh for near interaction collision checking

##### name?

`string`

defines the control name

#### Returns

`TouchMeshButton3D`

#### Overrides

[`TouchButton3D`](TouchButton3D.md).[`constructor`](TouchButton3D.md#constructor)

## Properties

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L220)

Defines the control name

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`name`](TouchButton3D.md#name)

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L106)

An event triggered when a control is clicked on (with a mouse)

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerClickObservable`](TouchButton3D.md#onpointerclickobservable)

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L96)

An event triggered when the pointer taps the control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerDownObservable`](TouchButton3D.md#onpointerdownobservable)

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L111)

An event triggered when pointer enters the control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerEnterObservable`](TouchButton3D.md#onpointerenterobservable)

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L86)

An event triggered when the pointer moves over the control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerMoveObservable`](TouchButton3D.md#onpointermoveobservable)

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L91)

An event triggered when the pointer moves out of the control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerOutObservable`](TouchButton3D.md#onpointeroutobservable)

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L101)

An event triggered when pointer is up

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerUpObservable`](TouchButton3D.md#onpointerupobservable)

***

### onToggleObservable

> **onToggleObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L33)

An event triggered when the button is toggled. Only fired if 'isToggleButton' is true

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onToggleObservable`](TouchButton3D.md#ontoggleobservable)

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container3D`](Container3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L116)

Gets or sets the parent container

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`parent`](TouchButton3D.md#parent)

***

### pointerDownAnimation

> **pointerDownAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L79)

Callback used to start pointer down animation

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`pointerDownAnimation`](TouchButton3D.md#pointerdownanimation)

***

### pointerEnterAnimation

> **pointerEnterAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L75)

Callback used to start pointer enter animation

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`pointerEnterAnimation`](TouchButton3D.md#pointerenteranimation)

***

### pointerOutAnimation

> **pointerOutAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L77)

Callback used to start pointer out animation

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`pointerOutAnimation`](TouchButton3D.md#pointeroutanimation)

***

### pointerUpAnimation

> **pointerUpAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L81)

Callback used to start pointer up animation

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`pointerUpAnimation`](TouchButton3D.md#pointerupanimation)

## Accessors

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>[]

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L125)

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>[]

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`behaviors`](TouchButton3D.md#behaviors)

***

### collidableFrontDirection

#### Get Signature

> **get** **collidableFrontDirection**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L77)

Returns the front-facing direction of the button, or Vector3.Zero if there is no 'front'

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **collidableFrontDirection**(`frontWorldDir`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L61)

Sets the front-facing direction of the button. Pass in Vector3.Zero to allow interactions from any direction

##### Parameters

###### frontWorldDir

[`Vector3`](../../../core/src/classes/Vector3.md)

the forward direction of the button

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`collidableFrontDirection`](TouchButton3D.md#collidablefrontdirection)

***

### collisionMesh

#### Set Signature

> **set** **collisionMesh**(`collisionMesh`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L93)

Sets the mesh used for testing input collision

##### Parameters

###### collisionMesh

[`Mesh`](../../../core/src/classes/Mesh.md)

the new collision mesh for the button

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`collisionMesh`](TouchButton3D.md#collisionmesh)

***

### content

#### Get Signature

> **get** **content**(): [`Control`](Control.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/contentDisplay3D.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/contentDisplay3D.ts#L20)

Gets or sets the GUI 2D content used to display the button's facade

##### Returns

[`Control`](Control.md)

#### Set Signature

> **set** **content**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/contentDisplay3D.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/contentDisplay3D.ts#L24)

##### Parameters

###### value

[`Control`](Control.md)

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`content`](TouchButton3D.md#content)

***

### contentResolution

#### Get Signature

> **get** **contentResolution**(): `number` \| \{ `height`: `number`; `width`: `number`; \}

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/contentDisplay3D.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/contentDisplay3D.ts#L59)

Gets or sets the texture resolution used to render content (512 by default)

##### Returns

`number` \| \{ `height`: `number`; `width`: `number`; \}

#### Set Signature

> **set** **contentResolution**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/contentDisplay3D.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/contentDisplay3D.ts#L63)

##### Parameters

###### value

`number` \| \{ `height`: `number`; `width`: `number`; \}

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`contentResolution`](TouchButton3D.md#contentresolution)

***

### isActiveNearInteraction

#### Get Signature

> **get** **isActiveNearInteraction**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L53)

Whether the current interaction is caused by near interaction or not

##### Returns

`boolean`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`isActiveNearInteraction`](TouchButton3D.md#isactivenearinteraction)

***

### isToggleButton

#### Get Signature

> **get** **isToggleButton**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L144)

##### Returns

`boolean`

#### Set Signature

> **set** **isToggleButton**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L126)

Setter for if this TouchButton3D should be treated as a toggle button

##### Parameters

###### value

`boolean`

If this TouchHolographicButton should act like a toggle button

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`isToggleButton`](TouchButton3D.md#istogglebutton)

***

### isToggled

#### Get Signature

> **get** **isToggled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L157)

##### Returns

`boolean`

#### Set Signature

> **set** **isToggled**(`newState`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L152)

A public entrypoint to set the toggle state of the TouchHolographicButton. Only works if 'isToggleButton' is true

##### Parameters

###### newState

`boolean`

The new state to set the TouchHolographicButton's toggle state to

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`isToggled`](TouchButton3D.md#istoggled)

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L197)

Gets or sets a boolean indicating if the control is visible

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L201)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`isVisible`](TouchButton3D.md#isvisible)

***

### mesh

#### Get Signature

> **get** **mesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L252)

Gets the mesh used to render this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`mesh`](TouchButton3D.md#mesh)

***

### node

#### Get Signature

> **get** **node**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L245)

Gets the transform node used by this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`node`](TouchButton3D.md#node)

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L36)

Gets or sets the control position in world space

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L45)

##### Parameters

###### value

[`Vector3`](../../../core/src/classes/Vector3.md)

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`position`](TouchButton3D.md#position)

***

### scaling

#### Get Signature

> **get** **scaling**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L55)

Gets or sets the control scaling in world space

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **scaling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L64)

##### Parameters

###### value

[`Vector3`](../../../core/src/classes/Vector3.md)

##### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`scaling`](TouchButton3D.md#scaling)

***

### typeName

#### Get Signature

> **get** **typeName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L226)

Gets a string representing the class name

##### Returns

`string`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`typeName`](TouchButton3D.md#typename)

## Methods

### addBehavior()

> **addBehavior**(`behavior`): [`Control3D`](Control3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L135)

Attach a behavior to the control

#### Parameters

##### behavior

[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>

defines the behavior to attach

#### Returns

[`Control3D`](Control3D.md)

the current control

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`addBehavior`](TouchButton3D.md#addbehavior)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L234)

Releases all associated resources

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`dispose`](TouchButton3D.md#dispose)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L186)

Gets an attached behavior by name

#### Parameters

##### name

`string`

defines the name of the behavior to look for

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>\>

null if behavior was not found else the requested behavior

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`getBehaviorByName`](TouchButton3D.md#getbehaviorbyname)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L234)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`getClassName`](TouchButton3D.md#getclassname)

***

### getPressDepth()

> **getPressDepth**(`touchPoint`): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/touchButton3D.ts#L176)

Get the height of the touchPoint from the collidable part of the button

#### Parameters

##### touchPoint

[`Vector3`](../../../core/src/classes/Vector3.md)

the point to compare to the button, in absolute position

#### Returns

`number`

the depth of the touch point into the front of the button

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`getPressDepth`](TouchButton3D.md#getpressdepth)

***

### linkToTransformNode()

> **linkToTransformNode**(`node`): [`Control3D`](Control3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L265)

Link the control as child of the given node

#### Parameters

##### node

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

defines the node to link to. Use null to unlink the control

#### Returns

[`Control3D`](Control3D.md)

the current control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`linkToTransformNode`](TouchButton3D.md#linktotransformnode)

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Control3D`](Control3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L163)

Remove an attached behavior

#### Parameters

##### behavior

[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>

defines the behavior to attach

#### Returns

[`Control3D`](Control3D.md)

the current control

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`removeBehavior`](TouchButton3D.md#removebehavior)
