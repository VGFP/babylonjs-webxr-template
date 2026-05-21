[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / StackPanel3D

# Class: StackPanel3D

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/stackPanel3D.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/stackPanel3D.ts#L9)

Class used to create a stack panel in 3D on XY plane

## Extends

- [`Container3D`](Container3D.md)

## Constructors

### Constructor

> **new StackPanel3D**(`isVertical?`): `StackPanel3D`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/stackPanel3D.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/stackPanel3D.ts#L40)

Creates new StackPanel

#### Parameters

##### isVertical?

`boolean` = `false`

#### Returns

`StackPanel3D`

#### Overrides

[`Container3D`](Container3D.md).[`constructor`](Container3D.md#constructor)

## Properties

### margin

> **margin**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/stackPanel3D.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/stackPanel3D.ts#L34)

Gets or sets the distance between elements

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L216)

Defines the control name

#### Inherited from

[`Container3D`](Container3D.md).[`name`](Container3D.md#name)

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L106)

An event triggered when a control is clicked on (with a mouse)

#### Inherited from

[`Container3D`](Container3D.md).[`onPointerClickObservable`](Container3D.md#onpointerclickobservable)

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L96)

An event triggered when the pointer taps the control

#### Inherited from

[`Container3D`](Container3D.md).[`onPointerDownObservable`](Container3D.md#onpointerdownobservable)

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L111)

An event triggered when pointer enters the control

#### Inherited from

[`Container3D`](Container3D.md).[`onPointerEnterObservable`](Container3D.md#onpointerenterobservable)

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L86)

An event triggered when the pointer moves over the control

#### Inherited from

[`Container3D`](Container3D.md).[`onPointerMoveObservable`](Container3D.md#onpointermoveobservable)

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L91)

An event triggered when the pointer moves out of the control

#### Inherited from

[`Container3D`](Container3D.md).[`onPointerOutObservable`](Container3D.md#onpointeroutobservable)

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L101)

An event triggered when pointer is up

#### Inherited from

[`Container3D`](Container3D.md).[`onPointerUpObservable`](Container3D.md#onpointerupobservable)

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container3D`](Container3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L116)

Gets or sets the parent container

#### Inherited from

[`Container3D`](Container3D.md).[`parent`](Container3D.md#parent)

***

### pointerDownAnimation

> **pointerDownAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L79)

Callback used to start pointer down animation

#### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`pointerDownAnimation`](Container3D.md#pointerdownanimation)

***

### pointerEnterAnimation

> **pointerEnterAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L75)

Callback used to start pointer enter animation

#### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`pointerEnterAnimation`](Container3D.md#pointerenteranimation)

***

### pointerOutAnimation

> **pointerOutAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L77)

Callback used to start pointer out animation

#### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`pointerOutAnimation`](Container3D.md#pointeroutanimation)

***

### pointerUpAnimation

> **pointerUpAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L81)

Callback used to start pointer up animation

#### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`pointerUpAnimation`](Container3D.md#pointerupanimation)

***

### FACEFORWARD\_ORIENTATION

> `readonly` `static` **FACEFORWARD\_ORIENTATION**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L156)

Control will rotate to look at z axis (0, 0, 1)

#### Inherited from

[`Container3D`](Container3D.md).[`FACEFORWARD_ORIENTATION`](Container3D.md#faceforward_orientation)

***

### FACEFORWARDREVERSED\_ORIENTATION

> `readonly` `static` **FACEFORWARDREVERSED\_ORIENTATION**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L159)

Control will rotate to look at negative z axis (0, 0, -1)

#### Inherited from

[`Container3D`](Container3D.md).[`FACEFORWARDREVERSED_ORIENTATION`](Container3D.md#faceforwardreversed_orientation)

***

### FACEORIGIN\_ORIENTATION

> `readonly` `static` **FACEORIGIN\_ORIENTATION**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L150)

Control will rotate to make it look at sphere central axis

#### Inherited from

[`Container3D`](Container3D.md).[`FACEORIGIN_ORIENTATION`](Container3D.md#faceorigin_orientation)

***

### FACEORIGINREVERSED\_ORIENTATION

> `readonly` `static` **FACEORIGINREVERSED\_ORIENTATION**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L153)

Control will rotate to make it look back at sphere central axis

#### Inherited from

[`Container3D`](Container3D.md).[`FACEORIGINREVERSED_ORIENTATION`](Container3D.md#faceoriginreversed_orientation)

***

### UNSET\_ORIENTATION

> `readonly` `static` **UNSET\_ORIENTATION**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L147)

Control rotation will remain unchanged

#### Inherited from

[`Container3D`](Container3D.md).[`UNSET_ORIENTATION`](Container3D.md#unset_orientation)

## Accessors

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>[]

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L125)

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>[]

#### Inherited from

[`Container3D`](Container3D.md).[`behaviors`](Container3D.md#behaviors)

***

### blockLayout

#### Get Signature

> **get** **blockLayout**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L29)

Gets or sets a boolean indicating if the layout must be blocked (default is false).
This is helpful to optimize layout operation when adding multiple children in a row

##### Returns

`boolean`

#### Set Signature

> **set** **blockLayout**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L33)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`blockLayout`](Container3D.md#blocklayout)

***

### children

#### Get Signature

> **get** **children**(): [`Control3D`](Control3D.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L21)

Gets the list of child controls

##### Returns

[`Control3D`](Control3D.md)[]

#### Inherited from

[`Container3D`](Container3D.md).[`children`](Container3D.md#children)

***

### isVertical

#### Get Signature

> **get** **isVertical**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/stackPanel3D.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/stackPanel3D.ts#L15)

Gets or sets a boolean indicating if the stack panel is vertical or horizontal (horizontal by default)

##### Returns

`boolean`

#### Set Signature

> **set** **isVertical**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/stackPanel3D.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/stackPanel3D.ts#L19)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L193)

Gets or sets a boolean indicating if the control is visible

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L197)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`isVisible`](Container3D.md#isvisible)

***

### mesh

#### Get Signature

> **get** **mesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L248)

Gets the mesh used to render this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Inherited from

[`Container3D`](Container3D.md).[`mesh`](Container3D.md#mesh)

***

### node

#### Get Signature

> **get** **node**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L241)

Gets the transform node used by this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

[`Container3D`](Container3D.md).[`node`](Container3D.md#node)

***

### position

#### Get Signature

> **get** **position**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L36)

Gets or sets the control position in world space

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L45)

##### Parameters

###### value

[`Vector3`](../../../core/src/classes/Vector3.md)

##### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`position`](Container3D.md#position)

***

### scaling

#### Get Signature

> **get** **scaling**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L55)

Gets or sets the control scaling in world space

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **scaling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L64)

##### Parameters

###### value

[`Vector3`](../../../core/src/classes/Vector3.md)

##### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`scaling`](Container3D.md#scaling)

***

### typeName

#### Get Signature

> **get** **typeName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L222)

Gets a string representing the class name

##### Returns

`string`

#### Inherited from

[`Container3D`](Container3D.md).[`typeName`](Container3D.md#typename)

## Methods

### addBehavior()

> **addBehavior**(`behavior`): [`Control3D`](Control3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L135)

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

[`Container3D`](Container3D.md).[`addBehavior`](Container3D.md#addbehavior)

***

### addControl()

> **addControl**(`control`): [`Container3D`](Container3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L76)

Adds a control to the children of this control

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to add

#### Returns

[`Container3D`](Container3D.md)

the current container

#### Inherited from

[`Container3D`](Container3D.md).[`addControl`](Container3D.md#addcontrol)

***

### containsControl()

> **containsControl**(`control`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L67)

Gets a boolean indicating if the given control is in the children of this control

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to check

#### Returns

`boolean`

true if the control is in the child list

#### Inherited from

[`Container3D`](Container3D.md).[`containsControl`](Container3D.md#containscontrol)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L136)

Releases all associated resources

#### Returns

`void`

#### Inherited from

[`Container3D`](Container3D.md).[`dispose`](Container3D.md#dispose)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Behavior`](../../../core/src/interfaces/Behavior.md)\<[`Control3D`](Control3D.md)\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L182)

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

[`Container3D`](Container3D.md).[`getBehaviorByName`](Container3D.md#getbehaviorbyname)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L230)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

[`Container3D`](Container3D.md).[`getClassName`](Container3D.md#getclassname)

***

### linkToTransformNode()

> **linkToTransformNode**(`node`): [`Control3D`](Control3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L261)

Link the control as child of the given node

#### Parameters

##### node

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

defines the node to link to. Use null to unlink the control

#### Returns

[`Control3D`](Control3D.md)

the current control

#### Inherited from

[`Container3D`](Container3D.md).[`linkToTransformNode`](Container3D.md#linktotransformnode)

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Control3D`](Control3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L163)

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

[`Container3D`](Container3D.md).[`removeBehavior`](Container3D.md#removebehavior)

***

### removeControl()

> **removeControl**(`control`): [`Container3D`](Container3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L116)

Removes a control from the children of this control

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to remove

#### Returns

[`Container3D`](Container3D.md)

the current container

#### Inherited from

[`Container3D`](Container3D.md).[`removeControl`](Container3D.md#removecontrol)

***

### updateLayout()

> **updateLayout**(): [`Container3D`](Container3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/container3D.ts#L57)

Force the container to update the layout. Please note that it will not take blockLayout property in account

#### Returns

[`Container3D`](Container3D.md)

the current container

#### Inherited from

[`Container3D`](Container3D.md).[`updateLayout`](Container3D.md#updatelayout)
