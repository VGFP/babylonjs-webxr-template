[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / HolographicSlate

# Class: HolographicSlate

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L33)

**`Since`**

Class used to create a holographic slate
 5.0.0

## Extends

- `ContentDisplay3D`

## Constructors

### Constructor

> **new HolographicSlate**(`name?`): `HolographicSlate`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L175)

Creates a new slate

#### Parameters

##### name?

`string`

defines the control name

#### Returns

`HolographicSlate`

#### Overrides

`ContentDisplay3D.constructor`

## Properties

### defaultDimensions

> `readonly` **defaultDimensions**: [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L133)

Default dimensions of the slate

***

### fitContentToDimensions

> **fitContentToDimensions**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L79)

If true, the content will be scaled to fit the dimensions of the slate

***

### minDimensions

> **minDimensions**: [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L128)

Minimum dimensions of the slate

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L216)

Defines the control name

#### Inherited from

`ContentDisplay3D.name`

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L106)

An event triggered when a control is clicked on (with a mouse)

#### Inherited from

`ContentDisplay3D.onPointerClickObservable`

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L96)

An event triggered when the pointer taps the control

#### Inherited from

`ContentDisplay3D.onPointerDownObservable`

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L111)

An event triggered when pointer enters the control

#### Inherited from

`ContentDisplay3D.onPointerEnterObservable`

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L86)

An event triggered when the pointer moves over the control

#### Inherited from

`ContentDisplay3D.onPointerMoveObservable`

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L91)

An event triggered when the pointer moves out of the control

#### Inherited from

`ContentDisplay3D.onPointerOutObservable`

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L101)

An event triggered when pointer is up

#### Inherited from

`ContentDisplay3D.onPointerUpObservable`

***

### origin

> **origin**: [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L57)

Origin in local coordinates (top left corner)

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container3D`](Container3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L116)

Gets or sets the parent container

#### Inherited from

`ContentDisplay3D.parent`

***

### pointerDownAnimation

> **pointerDownAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L79)

Callback used to start pointer down animation

#### Returns

`void`

#### Inherited from

`ContentDisplay3D.pointerDownAnimation`

***

### pointerEnterAnimation

> **pointerEnterAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L75)

Callback used to start pointer enter animation

#### Returns

`void`

#### Inherited from

`ContentDisplay3D.pointerEnterAnimation`

***

### pointerOutAnimation

> **pointerOutAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L77)

Callback used to start pointer out animation

#### Returns

`void`

#### Inherited from

`ContentDisplay3D.pointerOutAnimation`

***

### pointerUpAnimation

> **pointerUpAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L81)

Callback used to start pointer up animation

#### Returns

`void`

#### Inherited from

`ContentDisplay3D.pointerUpAnimation`

***

### titleBarMargin

> **titleBarMargin**: `number` = `0.005`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L52)

Margin between title bar and contentplate

***

### ASSETS\_BASE\_URL

> `static` **ASSETS\_BASE\_URL**: `string` = `"https://assets.babylonjs.com/core/MRTK/"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L37)

Base Url for the assets.

***

### CLOSE\_ICON\_FILENAME

> `static` **CLOSE\_ICON\_FILENAME**: `string` = `"IconClose.png"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L41)

File name for the close icon.

***

### FOLLOW\_ICON\_FILENAME

> `static` **FOLLOW\_ICON\_FILENAME**: `string` = `"IconFollowMe.png"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L45)

File name for the close icon.

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

`ContentDisplay3D.behaviors`

***

### content

#### Get Signature

> **get** **content**(): [`Control`](Control.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/contentDisplay3D.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/contentDisplay3D.ts#L20)

Gets or sets the GUI 2D content used to display the button's facade

##### Returns

[`Control`](Control.md)

#### Set Signature

> **set** **content**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/contentDisplay3D.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/contentDisplay3D.ts#L24)

##### Parameters

###### value

[`Control`](Control.md)

##### Returns

`void`

#### Inherited from

`ContentDisplay3D.content`

***

### contentResolution

#### Get Signature

> **get** **contentResolution**(): `number` \| \{ `height`: `number`; `width`: `number`; \}

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/contentDisplay3D.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/contentDisplay3D.ts#L59)

Gets or sets the texture resolution used to render content (512 by default)

##### Returns

`number` \| \{ `height`: `number`; `width`: `number`; \}

#### Set Signature

> **set** **contentResolution**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/contentDisplay3D.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/contentDisplay3D.ts#L63)

##### Parameters

###### value

`number` \| \{ `height`: `number`; `width`: `number`; \}

##### Returns

`void`

#### Inherited from

`ContentDisplay3D.contentResolution`

***

### defaultBehavior

#### Get Signature

> **get** **defaultBehavior**(): `DefaultBehavior`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L83)

Regroups all mesh behaviors for the slate

##### Returns

`DefaultBehavior`

***

### dimensions

#### Get Signature

> **get** **dimensions**(): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L102)

2D dimensions of the slate

##### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

#### Set Signature

> **set** **dimensions**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L105)

##### Parameters

###### value

[`Vector2`](../../../core/src/classes/Vector2.md)

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

`ContentDisplay3D.isVisible`

***

### mesh

#### Get Signature

> **get** **mesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:248](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L248)

Gets the mesh used to render this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Inherited from

`ContentDisplay3D.mesh`

***

### node

#### Get Signature

> **get** **node**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L241)

Gets the transform node used by this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

`ContentDisplay3D.node`

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

`ContentDisplay3D.position`

***

### renderingGroupId

#### Get Signature

> **get** **renderingGroupId**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L154)

##### Returns

`number`

#### Set Signature

> **set** **renderingGroupId**(`id`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L148)

Rendering ground id of all the meshes

##### Parameters

###### id

`number`

##### Returns

`void`

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

`ContentDisplay3D.scaling`

***

### title

#### Get Signature

> **get** **title**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L167)

##### Returns

`string`

#### Set Signature

> **set** **title**(`title`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L161)

The title text displayed at the top of the slate

##### Parameters

###### title

`string`

##### Returns

`void`

***

### titleBarHeight

#### Get Signature

> **get** **titleBarHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L138)

Height of the title bar component

##### Returns

`number`

#### Set Signature

> **set** **titleBarHeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L141)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### typeName

#### Get Signature

> **get** **typeName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:222](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L222)

Gets a string representing the class name

##### Returns

`string`

#### Inherited from

`ContentDisplay3D.typeName`

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

`ContentDisplay3D.addBehavior`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:492](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L492)

Releases all associated resources

#### Returns

`void`

#### Overrides

`ContentDisplay3D.dispose`

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

`ContentDisplay3D.getBehaviorByName`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L230)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

`ContentDisplay3D.getClassName`

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

`ContentDisplay3D.linkToTransformNode`

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

`ContentDisplay3D.removeBehavior`

***

### resetDefaultAspectAndPose()

> **resetDefaultAspectAndPose**(`resetAspect?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/holographicSlate.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/holographicSlate.ts#L465)

Resets the aspect and pose of the slate so it is right in front of the active camera, facing towards it.

#### Parameters

##### resetAspect?

`boolean` = `true`

Should the slate's dimensions/aspect ratio be reset as well

#### Returns

`void`
