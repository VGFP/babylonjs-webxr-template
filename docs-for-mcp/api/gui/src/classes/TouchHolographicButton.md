[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / TouchHolographicButton

# Class: TouchHolographicButton

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L30)

**`Since`**

Class used to create a holographic button in 3D
 5.0.0

## Extends

- [`TouchButton3D`](TouchButton3D.md)

## Constructors

### Constructor

> **new TouchHolographicButton**(`name?`, `shareMaterials?`): `TouchHolographicButton`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L242)

Creates a new button

#### Parameters

##### name?

`string`

defines the control name

##### shareMaterials?

`boolean` = `true`

#### Returns

`TouchHolographicButton`

#### Overrides

[`TouchButton3D`](TouchButton3D.md).[`constructor`](TouchButton3D.md#constructor)

## Properties

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L216)

Defines the control name

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`name`](TouchButton3D.md#name)

***

### onPointerClickObservable

> **onPointerClickObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L106)

An event triggered when a control is clicked on (with a mouse)

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerClickObservable`](TouchButton3D.md#onpointerclickobservable)

***

### onPointerDownObservable

> **onPointerDownObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L96)

An event triggered when the pointer taps the control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerDownObservable`](TouchButton3D.md#onpointerdownobservable)

***

### onPointerEnterObservable

> **onPointerEnterObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L111)

An event triggered when pointer enters the control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerEnterObservable`](TouchButton3D.md#onpointerenterobservable)

***

### onPointerMoveObservable

> **onPointerMoveObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L86)

An event triggered when the pointer moves over the control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerMoveObservable`](TouchButton3D.md#onpointermoveobservable)

***

### onPointerOutObservable

> **onPointerOutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control3D`](Control3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L91)

An event triggered when the pointer moves out of the control

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerOutObservable`](TouchButton3D.md#onpointeroutobservable)

***

### onPointerUpObservable

> **onPointerUpObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Vector3WithInfo`](Vector3WithInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L101)

An event triggered when pointer is up

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onPointerUpObservable`](TouchButton3D.md#onpointerupobservable)

***

### onToggleObservable

> **onToggleObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L33)

An event triggered when the button is toggled. Only fired if 'isToggleButton' is true

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`onToggleObservable`](TouchButton3D.md#ontoggleobservable)

***

### parent

> **parent**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Container3D`](Container3D.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L116)

Gets or sets the parent container

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`parent`](TouchButton3D.md#parent)

***

### pointerDownAnimation

> **pointerDownAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L79)

Callback used to start pointer down animation

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`pointerDownAnimation`](TouchButton3D.md#pointerdownanimation)

***

### pointerEnterAnimation

> **pointerEnterAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L75)

Callback used to start pointer enter animation

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`pointerEnterAnimation`](TouchButton3D.md#pointerenteranimation)

***

### pointerOutAnimation

> **pointerOutAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L77)

Callback used to start pointer out animation

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`pointerOutAnimation`](TouchButton3D.md#pointeroutanimation)

***

### pointerUpAnimation

> **pointerUpAnimation**: () => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L81)

Callback used to start pointer up animation

#### Returns

`void`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`pointerUpAnimation`](TouchButton3D.md#pointerupanimation)

***

### MODEL\_BASE\_URL

> `static` **MODEL\_BASE\_URL**: `string` = `"https://assets.babylonjs.com/core/MRTK/"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L34)

Base Url for the button model.

***

### MODEL\_FILENAME

> `static` **MODEL\_FILENAME**: `string` = `"mrtk-fluent-button.glb"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L38)

File name for the button model.

## Accessors

### backMaterial

#### Get Signature

> **get** **backMaterial**(): [`FluentMaterial`](FluentMaterial.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L197)

Gets the back material used by this button

##### Returns

[`FluentMaterial`](FluentMaterial.md)

***

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

[`TouchButton3D`](TouchButton3D.md).[`behaviors`](TouchButton3D.md#behaviors)

***

### collidableFrontDirection

#### Get Signature

> **get** **collidableFrontDirection**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L77)

Returns the front-facing direction of the button, or Vector3.Zero if there is no 'front'

##### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

#### Set Signature

> **set** **collidableFrontDirection**(`frontWorldDir`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L61)

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

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L93)

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

[`TouchButton3D`](TouchButton3D.md).[`content`](TouchButton3D.md#content)

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

[`TouchButton3D`](TouchButton3D.md).[`contentResolution`](TouchButton3D.md#contentresolution)

***

### frontMaterial

#### Get Signature

> **get** **frontMaterial**(): [`FluentButtonMaterial`](FluentButtonMaterial.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L204)

Gets the front material used by this button

##### Returns

[`FluentButtonMaterial`](FluentButtonMaterial.md)

***

### imageUrl

#### Get Signature

> **get** **imageUrl**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L181)

Gets or sets the image url for the button

##### Returns

`string`

#### Set Signature

> **set** **imageUrl**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L185)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### isActiveNearInteraction

#### Get Signature

> **get** **isActiveNearInteraction**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L53)

Whether the current interaction is caused by near interaction or not

##### Returns

`boolean`

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`isActiveNearInteraction`](TouchButton3D.md#isactivenearinteraction)

***

### isBackplateVisible

#### Set Signature

> **set** **isBackplateVisible**(`isVisible`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L225)

Sets whether the backplate is visible or hidden. Hiding the backplate is not recommended without some sort of replacement

##### Parameters

###### isVisible

`boolean`

##### Returns

`void`

***

### isToggleButton

#### Get Signature

> **get** **isToggleButton**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L144)

##### Returns

`boolean`

#### Set Signature

> **set** **isToggleButton**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L126)

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

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L157)

##### Returns

`boolean`

#### Set Signature

> **set** **isToggled**(`newState`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L152)

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

[`TouchButton3D`](TouchButton3D.md).[`isVisible`](TouchButton3D.md#isvisible)

***

### mesh

#### Get Signature

> **get** **mesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L99)

Gets the mesh used to render this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Overrides

[`TouchButton3D`](TouchButton3D.md).[`mesh`](TouchButton3D.md#mesh)

***

### node

#### Get Signature

> **get** **node**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L241)

Gets the transform node used by this control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`node`](TouchButton3D.md#node)

***

### plateMaterial

#### Get Signature

> **get** **plateMaterial**(): [`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L211)

Gets the plate material used by this button

##### Returns

[`StandardMaterial`](../../../core/src/classes/StandardMaterial.md)

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

[`TouchButton3D`](TouchButton3D.md).[`position`](TouchButton3D.md#position)

***

### renderingGroupId

#### Get Signature

> **get** **renderingGroupId**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L92)

##### Returns

`number`

#### Set Signature

> **set** **renderingGroupId**(`id`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L83)

Rendering ground id of all the mesh in the button

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

[`TouchButton3D`](TouchButton3D.md).[`scaling`](TouchButton3D.md#scaling)

***

### shareMaterials

#### Get Signature

> **get** **shareMaterials**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L218)

Gets a boolean indicating if this button shares its material with other HolographicButtons

##### Returns

`boolean`

***

### text

#### Get Signature

> **get** **text**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L165)

Gets or sets text for the button

##### Returns

`string`

#### Set Signature

> **set** **text**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L169)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### tooltipText

#### Get Signature

> **get** **tooltipText**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L155)

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string`\>

#### Set Signature

> **set** **tooltipText**(`text`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L106)

Text to be displayed on the tooltip shown when hovering on the button. When set to null tooltip is disabled. (Default: null)

##### Parameters

###### text

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string`\>

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

[`TouchButton3D`](TouchButton3D.md).[`typeName`](TouchButton3D.md#typename)

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

[`TouchButton3D`](TouchButton3D.md).[`addBehavior`](TouchButton3D.md#addbehavior)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchHolographicButton.ts:472](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchHolographicButton.ts#L472)

Releases all associated resources

#### Returns

`void`

#### Overrides

[`TouchButton3D`](TouchButton3D.md).[`dispose`](TouchButton3D.md#dispose)

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

[`TouchButton3D`](TouchButton3D.md).[`getBehaviorByName`](TouchButton3D.md#getbehaviorbyname)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/control3D.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/control3D.ts#L230)

Get the current class name of the control.

#### Returns

`string`

current class name

#### Inherited from

[`TouchButton3D`](TouchButton3D.md).[`getClassName`](TouchButton3D.md#getclassname)

***

### getPressDepth()

> **getPressDepth**(`touchPoint`): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/controls/touchButton3D.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/controls/touchButton3D.ts#L176)

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

[`TouchButton3D`](TouchButton3D.md).[`linkToTransformNode`](TouchButton3D.md#linktotransformnode)

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

[`TouchButton3D`](TouchButton3D.md).[`removeBehavior`](TouchButton3D.md#removebehavior)
