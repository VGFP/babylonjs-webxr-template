[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / Slider3D

# Class: Slider3D

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L27)

Class used to create a slider in 3D

## Extends

- [`Control3D`](Control3D.md)

## Constructors

### Constructor

> **new Slider3D**(`name?`, `sliderBackplateVisible?`): `Slider3D`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L61)

Creates a new slider

#### Parameters

##### name?

`string`

defines the control name

##### sliderBackplateVisible?

`boolean`

defines if the control has a backplate, default is false

#### Returns

`Slider3D`

#### Overrides

[`Control3D`](Control3D.md).[`constructor`](Control3D.md#constructor)

## Properties

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L220)

Defines the control name

#### Inherited from

[`Control3D`](Control3D.md).[`name`](Control3D.md#name)

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:106](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L106)

An event triggered when a control is clicked on (with a mouse)

#### Inherited from

[`Control3D`](Control3D.md).[`onPointerClickObservable`](Control3D.md#onpointerclickobservable)

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L96)

An event triggered when the pointer taps the control

#### Inherited from

[`Control3D`](Control3D.md).[`onPointerDownObservable`](Control3D.md#onpointerdownobservable)

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L111)

An event triggered when pointer enters the control

#### Inherited from

[`Control3D`](Control3D.md).[`onPointerEnterObservable`](Control3D.md#onpointerenterobservable)

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L86)

An event triggered when the pointer moves over the control

#### Inherited from

[`Control3D`](Control3D.md).[`onPointerMoveObservable`](Control3D.md#onpointermoveobservable)

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L91)

An event triggered when the pointer moves out of the control

#### Inherited from

[`Control3D`](Control3D.md).[`onPointerOutObservable`](Control3D.md#onpointeroutobservable)

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L101)

An event triggered when pointer is up

#### Inherited from

[`Control3D`](Control3D.md).[`onPointerUpObservable`](Control3D.md#onpointerupobservable)

***

### onValueChangedObservable

> **onValueChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L54)

Observable raised when the sldier value changes

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container3D`](Container3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L116)

Gets or sets the parent container

#### Inherited from

[`Control3D`](Control3D.md).[`parent`](Control3D.md#parent)

***

### pointerDownAnimation

> **pointerDownAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L79)

Callback used to start pointer down animation

#### Returns

`void`

#### Inherited from

[`Control3D`](Control3D.md).[`pointerDownAnimation`](Control3D.md#pointerdownanimation)

***

### pointerEnterAnimation

> **pointerEnterAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L75)

Callback used to start pointer enter animation

#### Returns

`void`

#### Inherited from

[`Control3D`](Control3D.md).[`pointerEnterAnimation`](Control3D.md#pointerenteranimation)

***

### pointerOutAnimation

> **pointerOutAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L77)

Callback used to start pointer out animation

#### Returns

`void`

#### Inherited from

[`Control3D`](Control3D.md).[`pointerOutAnimation`](Control3D.md#pointeroutanimation)

***

### pointerUpAnimation

> **pointerUpAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L81)

Callback used to start pointer up animation

#### Returns

`void`

#### Inherited from

[`Control3D`](Control3D.md).[`pointerUpAnimation`](Control3D.md#pointerupanimation)

***

### MODEL\_BASE\_URL

> `static` **MODEL\_BASE\_URL**: `string` = `"https://assets.babylonjs.com/core/MRTK/"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L31)

Base Url for the models.

***

### MODEL\_FILENAME

> `static` **MODEL\_FILENAME**: `string` = `"mrtk-fluent-backplate.glb"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L36)

File name for the 8x4 model.

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

[`Control3D`](Control3D.md).[`behaviors`](Control3D.md#behaviors)

***

### isVisible

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L199)

Sets a boolean indicating if the control is visible

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

[`Control3D`](Control3D.md).[`isVisible`](Control3D.md#isvisible)

***

### maximum

#### Get Signature

> **get** **maximum**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L97)

Gets or sets maximum value

##### Returns

`number`

#### Set Signature

> **set** **maximum**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L101)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### mesh

#### Get Signature

> **get** **mesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L74)

Gets the mesh used to render this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Overrides

[`Control3D`](Control3D.md).[`mesh`](Control3D.md#mesh)

***

### minimum

#### Get Signature

> **get** **minimum**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L83)

Gets or sets minimum value

##### Returns

`number`

#### Set Signature

> **set** **minimum**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L87)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### node

#### Get Signature

> **get** **node**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L245)

Gets the transform node used by this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

[`Control3D`](Control3D.md).[`node`](Control3D.md#node)

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

[`Control3D`](Control3D.md).[`position`](Control3D.md#position)

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

[`Control3D`](Control3D.md).[`scaling`](Control3D.md#scaling)

***

### sliderBackplate

#### Get Signature

> **get** **sliderBackplate**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L194)

Gets the slider backplate mesh used by this control

##### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

***

### sliderBackplateMaterial

#### Get Signature

> **get** **sliderBackplateMaterial**(): [`MRDLBackplateMaterial`](MRDLBackplateMaterial.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L173)

Gets the slider backplate material used by this control

##### Returns

[`MRDLBackplateMaterial`](MRDLBackplateMaterial.md)

***

### sliderBar

#### Get Signature

> **get** **sliderBar**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L180)

Gets the slider bar mesh used by this control

##### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

***

### sliderBarMaterial

#### Get Signature

> **get** **sliderBarMaterial**(): [`MRDLSliderBarMaterial`](MRDLSliderBarMaterial.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L159)

Gets the slider bar material used by this control

##### Returns

[`MRDLSliderBarMaterial`](MRDLSliderBarMaterial.md)

***

### sliderThumb

#### Get Signature

> **get** **sliderThumb**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L187)

Gets the slider thumb mesh used by this control

##### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

***

### sliderThumbMaterial

#### Get Signature

> **get** **sliderThumbMaterial**(): [`MRDLSliderThumbMaterial`](MRDLSliderThumbMaterial.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L166)

Gets the slider thumb material used by this control

##### Returns

[`MRDLSliderThumbMaterial`](MRDLSliderThumbMaterial.md)

***

### step

#### Get Signature

> **get** **step**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L111)

Gets or sets step value

##### Returns

`number`

#### Set Signature

> **set** **step**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L115)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### typeName

#### Get Signature

> **get** **typeName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L226)

Gets a string representing the class name

##### Returns

`string`

#### Inherited from

[`Control3D`](Control3D.md).[`typeName`](Control3D.md#typename)

***

### value

#### Get Signature

> **get** **value**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L124)

Gets or sets current value

##### Returns

`number`

#### Set Signature

> **set** **value**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L128)

##### Parameters

###### value

`number`

##### Returns

`void`

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

[`Control3D`](Control3D.md).[`addBehavior`](Control3D.md#addbehavior)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/slider3D.ts:318](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/slider3D.ts#L318)

Releases all associated resources

#### Returns

`void`

#### Overrides

[`Control3D`](Control3D.md).[`dispose`](Control3D.md#dispose)

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

[`Control3D`](Control3D.md).[`getBehaviorByName`](Control3D.md#getbehaviorbyname)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/controls/control3D.ts#L234)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

[`Control3D`](Control3D.md).[`getClassName`](Control3D.md#getclassname)

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

[`Control3D`](Control3D.md).[`linkToTransformNode`](Control3D.md#linktotransformnode)

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

[`Control3D`](Control3D.md).[`removeBehavior`](Control3D.md#removebehavior)
