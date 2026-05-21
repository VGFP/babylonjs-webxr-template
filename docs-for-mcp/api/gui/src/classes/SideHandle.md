[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / SideHandle

# Class: SideHandle

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L177)

Side handle class that rotates the slate

## Extends

- [`GizmoHandle`](GizmoHandle.md)

## Constructors

### Constructor

> **new SideHandle**(`gizmo`, `scene`): `SideHandle`

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

`SideHandle`

#### Inherited from

[`GizmoHandle`](GizmoHandle.md).[`constructor`](GizmoHandle.md#constructor)

## Properties

### node

> **node**: [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L89)

Node of this handle

#### Inherited from

[`GizmoHandle`](GizmoHandle.md).[`node`](GizmoHandle.md#node)

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

#### Inherited from

[`GizmoHandle`](GizmoHandle.md).[`drag`](GizmoHandle.md#drag)

***

### gizmo

#### Get Signature

> **get** **gizmo**(): [`SlateGizmo`](SlateGizmo.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L57)

Returns the gizmo carrying this handle

##### Returns

[`SlateGizmo`](SlateGizmo.md)

#### Inherited from

[`GizmoHandle`](GizmoHandle.md).[`gizmo`](GizmoHandle.md#gizmo)

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

#### Inherited from

[`GizmoHandle`](GizmoHandle.md).[`hover`](GizmoHandle.md#hover)

***

### state

#### Get Signature

> **get** **state**(): [`HandleState`](../enumerations/HandleState.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L48)

The current state of the handle

##### Returns

[`HandleState`](../enumerations/HandleState.md)

#### Inherited from

[`GizmoHandle`](GizmoHandle.md).[`state`](GizmoHandle.md#state)

## Methods

### createNode()

> **createNode**(): [`TransformNode`](../../../core/src/classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L182)

Creates the meshes and parent node of the handle

#### Returns

[`TransformNode`](../../../core/src/classes/TransformNode.md)

created node

#### Overrides

[`GizmoHandle`](GizmoHandle.md).[`createNode`](GizmoHandle.md#createnode)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/3D/gizmos/gizmoHandle.ts#L160)

Disposes the handle

#### Returns

`void`

#### Inherited from

[`GizmoHandle`](GizmoHandle.md).[`dispose`](GizmoHandle.md#dispose)

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

#### Inherited from

[`GizmoHandle`](GizmoHandle.md).[`setDragBehavior`](GizmoHandle.md#setdragbehavior)
