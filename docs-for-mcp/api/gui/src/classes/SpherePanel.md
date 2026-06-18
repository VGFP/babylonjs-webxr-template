[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / SpherePanel

# Class: SpherePanel

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/spherePanel.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/spherePanel.ts#L13)

Class used to create a container panel deployed on the surface of a sphere

## Extends

- [`VolumeBasedPanel`](VolumeBasedPanel.md)

## Constructors

### Constructor

> **new SpherePanel**(`name?`): `SpherePanel`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts#L99)

Creates new VolumeBasedPanel

#### Parameters

##### name?

`string`

#### Returns

`SpherePanel`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`constructor`](VolumeBasedPanel.md#constructor)

## Properties

### margin

> **margin**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts#L25)

Gets or sets the distance between elements

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`margin`](VolumeBasedPanel.md#margin)

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L220)

Defines the control name

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`name`](VolumeBasedPanel.md#name)

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L106)

An event triggered when a control is clicked on (with a mouse)

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`onPointerClickObservable`](VolumeBasedPanel.md#onpointerclickobservable)

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L96)

An event triggered when the pointer taps the control

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`onPointerDownObservable`](VolumeBasedPanel.md#onpointerdownobservable)

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L111)

An event triggered when pointer enters the control

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`onPointerEnterObservable`](VolumeBasedPanel.md#onpointerenterobservable)

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L86)

An event triggered when the pointer moves over the control

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`onPointerMoveObservable`](VolumeBasedPanel.md#onpointermoveobservable)

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L91)

An event triggered when the pointer moves out of the control

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`onPointerOutObservable`](VolumeBasedPanel.md#onpointeroutobservable)

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L101)

An event triggered when pointer is up

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`onPointerUpObservable`](VolumeBasedPanel.md#onpointerupobservable)

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container3D`](Container3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L116)

Gets or sets the parent container

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`parent`](VolumeBasedPanel.md#parent)

***

### pointerDownAnimation

> **pointerDownAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L79)

Callback used to start pointer down animation

#### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`pointerDownAnimation`](VolumeBasedPanel.md#pointerdownanimation)

***

### pointerEnterAnimation

> **pointerEnterAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L75)

Callback used to start pointer enter animation

#### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`pointerEnterAnimation`](VolumeBasedPanel.md#pointerenteranimation)

***

### pointerOutAnimation

> **pointerOutAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L77)

Callback used to start pointer out animation

#### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`pointerOutAnimation`](VolumeBasedPanel.md#pointeroutanimation)

***

### pointerUpAnimation

> **pointerUpAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L81)

Callback used to start pointer up animation

#### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`pointerUpAnimation`](VolumeBasedPanel.md#pointerupanimation)

***

### FACEFORWARD\_ORIENTATION

> `readonly` `static` **FACEFORWARD\_ORIENTATION**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L156)

Control will rotate to look at z axis (0, 0, 1)

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`FACEFORWARD_ORIENTATION`](VolumeBasedPanel.md#faceforward_orientation)

***

### FACEFORWARDREVERSED\_ORIENTATION

> `readonly` `static` **FACEFORWARDREVERSED\_ORIENTATION**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L159)

Control will rotate to look at negative z axis (0, 0, -1)

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`FACEFORWARDREVERSED_ORIENTATION`](VolumeBasedPanel.md#faceforwardreversed_orientation)

***

### FACEORIGIN\_ORIENTATION

> `readonly` `static` **FACEORIGIN\_ORIENTATION**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L150)

Control will rotate to make it look at sphere central axis

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`FACEORIGIN_ORIENTATION`](VolumeBasedPanel.md#faceorigin_orientation)

***

### FACEORIGINREVERSED\_ORIENTATION

> `readonly` `static` **FACEORIGINREVERSED\_ORIENTATION**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L153)

Control will rotate to make it look back at sphere central axis

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`FACEORIGINREVERSED_ORIENTATION`](VolumeBasedPanel.md#faceoriginreversed_orientation)

***

### UNSET\_ORIENTATION

> `readonly` `static` **UNSET\_ORIENTATION**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L147)

Control rotation will remain unchanged

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`UNSET_ORIENTATION`](VolumeBasedPanel.md#unset_orientation)

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

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`behaviors`](VolumeBasedPanel.md#behaviors)

***

### blockLayout

#### Get Signature

> **get** **blockLayout**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L29)

Gets or sets a boolean indicating if the layout must be blocked (default is false).
This is helpful to optimize layout operation when adding multiple children in a row

##### Returns

`boolean`

#### Set Signature

> **set** **blockLayout**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L33)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`blockLayout`](VolumeBasedPanel.md#blocklayout)

***

### children

#### Get Signature

> **get** **children**(): [`Control3D`](Control3D.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L21)

Gets the list of child controls

##### Returns

[`Control3D`](Control3D.md)[]

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`children`](VolumeBasedPanel.md#children)

***

### columns

#### Get Signature

> **get** **columns**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts#L57)

Gets or sets the number of columns requested (10 by default).
The panel will automatically compute the number of rows based on number of child controls.

##### Returns

`number`

#### Set Signature

> **set** **columns**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts#L61)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`columns`](VolumeBasedPanel.md#columns)

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

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`isVisible`](VolumeBasedPanel.md#isvisible)

***

### mesh

#### Get Signature

> **get** **mesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L252)

Gets the mesh used to render this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`mesh`](VolumeBasedPanel.md#mesh)

***

### node

#### Get Signature

> **get** **node**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L245)

Gets the transform node used by this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`node`](VolumeBasedPanel.md#node)

***

### orientation

#### Get Signature

> **get** **orientation**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts#L37)

Gets or sets the orientation to apply to all controls (BABYLON.Container3D.FaceOriginReversedOrientation by default)
| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 0     | UNSET_ORIENTATION                   |  Control rotation will remain unchanged |
| 1     | FACEORIGIN_ORIENTATION              |  Control will rotate to make it look at sphere central axis |
| 2     | FACEORIGINREVERSED_ORIENTATION      |  Control will rotate to make it look back at sphere central axis |
| 3     | FACEFORWARD_ORIENTATION             |  Control will rotate to look at z axis (0, 0, 1) |
| 4     | FACEFORWARDREVERSED_ORIENTATION     |  Control will rotate to look at negative z axis (0, 0, -1) |

##### Returns

`number`

#### Set Signature

> **set** **orientation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts#L41)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`orientation`](VolumeBasedPanel.md#orientation)

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

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`position`](VolumeBasedPanel.md#position)

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/spherePanel.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/spherePanel.ts#L19)

Gets or sets the radius of the sphere where to project controls (5 by default)

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/spherePanel.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/spherePanel.ts#L23)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rows

#### Get Signature

> **get** **rows**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts#L78)

Gets or sets a the number of rows requested.
The panel will automatically compute the number of columns based on number of child controls.

##### Returns

`number`

#### Set Signature

> **set** **rows**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/volumeBasedPanel.ts#L82)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`rows`](VolumeBasedPanel.md#rows)

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

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`scaling`](VolumeBasedPanel.md#scaling)

***

### typeName

#### Get Signature

> **get** **typeName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L226)

Gets a string representing the class name

##### Returns

`string`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`typeName`](VolumeBasedPanel.md#typename)

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

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`addBehavior`](VolumeBasedPanel.md#addbehavior)

***

### addControl()

> **addControl**(`control`): [`Container3D`](Container3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:76](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L76)

Adds a control to the children of this control

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to add

#### Returns

[`Container3D`](Container3D.md)

the current container

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`addControl`](VolumeBasedPanel.md#addcontrol)

***

### containsControl()

> **containsControl**(`control`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L67)

Gets a boolean indicating if the given control is in the children of this control

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to check

#### Returns

`boolean`

true if the control is in the child list

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`containsControl`](VolumeBasedPanel.md#containscontrol)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L136)

Releases all associated resources

#### Returns

`void`

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`dispose`](VolumeBasedPanel.md#dispose)

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

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`getBehaviorByName`](VolumeBasedPanel.md#getbehaviorbyname)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L234)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`getClassName`](VolumeBasedPanel.md#getclassname)

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

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`linkToTransformNode`](VolumeBasedPanel.md#linktotransformnode)

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

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`removeBehavior`](VolumeBasedPanel.md#removebehavior)

***

### removeControl()

> **removeControl**(`control`): [`Container3D`](Container3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L116)

Removes a control from the children of this control

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to remove

#### Returns

[`Container3D`](Container3D.md)

the current container

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`removeControl`](VolumeBasedPanel.md#removecontrol)

***

### updateLayout()

> **updateLayout**(): [`Container3D`](Container3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/container3D.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/container3D.ts#L57)

Force the container to update the layout. Please note that it will not take blockLayout property in account

#### Returns

[`Container3D`](Container3D.md)

the current container

#### Inherited from

[`VolumeBasedPanel`](VolumeBasedPanel.md).[`updateLayout`](VolumeBasedPanel.md#updatelayout)
