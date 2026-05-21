[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / GizmoHandle

# Abstract Class: GizmoHandle

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L32)

Base class for SlateGizmo handles

## Extended by

- [`SideHandle`](SideHandle.md)
- [`CornerHandle`](CornerHandle.md)

## Constructors

### Constructor

> **new GizmoHandle**(`gizmo`, `scene`): `GizmoHandle`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L96)

Creates a handle for a SlateGizmo

#### Parameters

##### gizmo

[`SlateGizmo`](SlateGizmo.md)

associated SlateGizmo

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

scene

#### Returns

`GizmoHandle`

## Properties

### node

> **node**: [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L89)

Node of this handle

## Accessors

### drag

#### Set Signature

> **set** **drag**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L76)

Sets drag state

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### gizmo

#### Get Signature

> **get** **gizmo**(): [`SlateGizmo`](SlateGizmo.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L57)

Returns the gizmo carrying this handle

##### Returns

[`SlateGizmo`](SlateGizmo.md)

***

### hover

#### Set Signature

> **set** **hover**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L64)

Sets hover state

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### state

#### Get Signature

> **get** **state**(): [`HandleState`](../enumerations/HandleState.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L48)

The current state of the handle

##### Returns

[`HandleState`](../enumerations/HandleState.md)

## Methods

### createNode()

> `abstract` **createNode**(): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L155)

Creates the meshes and parent node of the handle
Should be overridden by child classes

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

created node

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L160)

Disposes the handle

#### Returns

`void`

***

### setDragBehavior()

> **setDragBehavior**(`dragStartFn`, `dragFn`, `dragEndFn`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L138)

Binds callbacks from dragging interaction

#### Parameters

##### dragStartFn

(`event`) => `void`

Function to call on drag start

##### dragFn

(`event`) => `void`

Function to call on drag

##### dragEndFn

() => `void`

Function to call on drag end

#### Returns

`void`
