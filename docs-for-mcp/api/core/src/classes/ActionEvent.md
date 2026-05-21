[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ActionEvent

# Class: ActionEvent

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L28)

ActionEvent is the event being sent when an action is triggered.

## Implements

- [`IActionEvent`](../interfaces/IActionEvent.md)

## Constructors

### Constructor

> **new ActionEvent**(`source`, `pointerX`, `pointerY`, `meshUnderPointer`, `sourceEvent?`, `additionalData?`): `ActionEvent`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L38)

Creates a new ActionEvent

#### Parameters

##### source

`any`

The mesh or sprite that triggered the action

##### pointerX

`number`

The X mouse cursor position at the time of the event

##### pointerY

`number`

The Y mouse cursor position at the time of the event

##### meshUnderPointer

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

The mesh that is currently pointed at (can be null)

##### sourceEvent?

`any`

the original (browser) event that triggered the ActionEvent

##### additionalData?

`any`

additional data for the event

#### Returns

`ActionEvent`

## Properties

### additionalData?

> `optional` **additionalData?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L50)

additional data for the event

#### Implementation of

[`IActionEvent`](../interfaces/IActionEvent.md).[`additionalData`](../interfaces/IActionEvent.md#additionaldata)

***

### meshUnderPointer

> **meshUnderPointer**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L46)

The mesh that is currently pointed at (can be null)

#### Implementation of

[`IActionEvent`](../interfaces/IActionEvent.md).[`meshUnderPointer`](../interfaces/IActionEvent.md#meshunderpointer)

***

### pointerX

> **pointerX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L42)

The X mouse cursor position at the time of the event

#### Implementation of

[`IActionEvent`](../interfaces/IActionEvent.md).[`pointerX`](../interfaces/IActionEvent.md#pointerx)

***

### pointerY

> **pointerY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L44)

The Y mouse cursor position at the time of the event

#### Implementation of

[`IActionEvent`](../interfaces/IActionEvent.md).[`pointerY`](../interfaces/IActionEvent.md#pointery)

***

### source

> **source**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L40)

The mesh or sprite that triggered the action

#### Implementation of

[`IActionEvent`](../interfaces/IActionEvent.md).[`source`](../interfaces/IActionEvent.md#source)

***

### sourceEvent?

> `optional` **sourceEvent?**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L48)

the original (browser) event that triggered the ActionEvent

#### Implementation of

[`IActionEvent`](../interfaces/IActionEvent.md).[`sourceEvent`](../interfaces/IActionEvent.md#sourceevent)

## Methods

### CreateNew()

> `static` **CreateNew**(`source`, `evt?`, `additionalData?`): `ActionEvent`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L60)

Helper function to auto-create an ActionEvent from a source mesh.

#### Parameters

##### source

[`AbstractMesh`](AbstractMesh.md)

The source mesh that triggered the event

##### evt?

`any`

The original (browser) event

##### additionalData?

`any`

additional data for the event

#### Returns

`ActionEvent`

the new ActionEvent

***

### CreateNewFromPrimitive()

> `static` **CreateNewFromPrimitive**(`prim`, `pointerPos`, `evt?`, `additionalData?`): `ActionEvent`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L95)

Helper function to auto-create an ActionEvent from a primitive

#### Parameters

##### prim

`any`

defines the target primitive

##### pointerPos

[`Vector2`](Vector2.md)

defines the pointer position

##### evt?

`Event`

The original (browser) event

##### additionalData?

`any`

additional data for the event

#### Returns

`ActionEvent`

the new ActionEvent

***

### CreateNewFromScene()

> `static` **CreateNewFromScene**(`scene`, `evt`): `ActionEvent`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L83)

Helper function to auto-create an ActionEvent from a scene. If triggered by a mesh use ActionEvent.CreateNew

#### Parameters

##### scene

[`Scene`](Scene.md)

the scene where the event occurred

##### evt

`any`

The original (browser) event

#### Returns

`ActionEvent`

the new ActionEvent

***

### CreateNewFromSprite()

> `static` **CreateNewFromSprite**(`source`, `scene`, `evt?`, `additionalData?`): `ActionEvent`

Defined in: [babylonjs-source/packages/dev/core/src/Actions/actionEvent.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Actions/actionEvent.ts#L73)

Helper function to auto-create an ActionEvent from a source sprite

#### Parameters

##### source

[`Sprite`](Sprite.md)

The source sprite that triggered the event

##### scene

[`Scene`](Scene.md)

Scene associated with the sprite

##### evt?

`any`

The original (browser) event

##### additionalData?

`any`

additional data for the event

#### Returns

`ActionEvent`

the new ActionEvent
