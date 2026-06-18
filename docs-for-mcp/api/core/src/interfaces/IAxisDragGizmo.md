[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAxisDragGizmo

# Interface: IAxisDragGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisDragGizmo.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisDragGizmo.ts#L20)

Interface for axis drag gizmo

## Extends

- [`IGizmo`](IGizmo.md)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L66)

The root mesh of the gizmo

#### Inherited from

[`IGizmo`](IGizmo.md).[`_rootMesh`](IGizmo.md#_rootmesh)

***

### additionalTransformNode?

> `optional` **additionalTransformNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L120)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

#### Inherited from

[`IGizmo`](IGizmo.md).[`additionalTransformNode`](IGizmo.md#additionaltransformnode)

***

### anchorPoint

> **anchorPoint**: [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L93)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

#### Inherited from

[`IGizmo`](IGizmo.md).[`anchorPoint`](IGizmo.md#anchorpoint)

***

### attachedMesh

> **attachedMesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L73)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

#### Inherited from

[`IGizmo`](IGizmo.md).[`attachedMesh`](IGizmo.md#attachedmesh)

***

### attachedNode

> **attachedNode**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L78)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

#### Inherited from

[`IGizmo`](IGizmo.md).[`attachedNode`](IGizmo.md#attachednode)

***

### coloredMaterial

> **coloredMaterial**: [`StandardMaterial`](../classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisDragGizmo.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisDragGizmo.ts#L34)

Default material used to render when gizmo is not disabled or hovered

***

### coordinatesMode

> **coordinatesMode**: [`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L98)

Set the coordinate mode to use. By default it's local.

#### Inherited from

[`IGizmo`](IGizmo.md).[`coordinatesMode`](IGizmo.md#coordinatesmode)

***

### customRotationQuaternion

> **customRotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](../classes/Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L108)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

#### Inherited from

[`IGizmo`](IGizmo.md).[`customRotationQuaternion`](IGizmo.md#customrotationquaternion)

***

### disableMaterial

> **disableMaterial**: [`StandardMaterial`](../classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisDragGizmo.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisDragGizmo.ts#L38)

Material used to render when gizmo is disabled. typically grey.

***

### dragBehavior

> **dragBehavior**: [`PointerDragBehavior`](../classes/PointerDragBehavior.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisDragGizmo.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisDragGizmo.ts#L22)

Drag behavior responsible for the gizmos dragging interactions

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](../classes/UtilityLayerRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L84)

The utility layer the gizmo will be added to

#### Inherited from

[`IGizmo`](IGizmo.md).[`gizmoLayer`](IGizmo.md#gizmolayer)

***

### hoverMaterial

> **hoverMaterial**: [`StandardMaterial`](../classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisDragGizmo.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisDragGizmo.ts#L36)

Material used to render when gizmo is hovered with mouse

***

### isEnabled

> **isEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisDragGizmo.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisDragGizmo.ts#L31)

If the gizmo is enabled

***

### isHovered

> `readonly` **isHovered**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L64)

True when the mouse pointer is hovered a gizmo mesh

#### Inherited from

[`IGizmo`](IGizmo.md).[`isHovered`](IGizmo.md#ishovered)

***

### onSnapObservable

> **onSnapObservable**: [`Observable`](../classes/Observable.md)\<\{ `snapDistance`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisDragGizmo.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisDragGizmo.ts#L29)

Event that fires each time the gizmo snaps to a new location.
* snapDistance is the change in distance

***

### scaleRatio

> **scaleRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L68)

Ratio for the scale of the gizmo

#### Inherited from

[`IGizmo`](IGizmo.md).[`scaleRatio`](IGizmo.md#scaleratio)

***

### snapDistance

> **snapDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/axisDragGizmo.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/axisDragGizmo.ts#L24)

Drag distance in babylon units that the gizmo will snap to when dragged

***

### updateGizmoPositionToMatchAttachedMesh

> **updateGizmoPositionToMatchAttachedMesh**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L88)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](IGizmo.md#updategizmopositiontomatchattachedmesh)

***

### updateGizmoRotationToMatchAttachedMesh

> **updateGizmoRotationToMatchAttachedMesh**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L82)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](IGizmo.md#updategizmorotationtomatchattachedmesh)

***

### updateScale

> **updateScale**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L103)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateScale`](IGizmo.md#updatescale)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IGizmo`](IGizmo.md).[`dispose`](IGizmo.md#dispose)

***

### setCustomMesh()

> **setCustomMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmo.ts#L113)

Disposes and replaces the current meshes in the gizmo with the specified mesh

#### Parameters

##### mesh

[`Mesh`](../classes/Mesh.md)

The mesh to replace the default mesh of the gizmo

#### Returns

`void`

#### Inherited from

[`IGizmo`](IGizmo.md).[`setCustomMesh`](IGizmo.md#setcustommesh)
