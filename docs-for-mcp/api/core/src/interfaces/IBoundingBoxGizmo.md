[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IBoundingBoxGizmo

# Interface: IBoundingBoxGizmo

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L26)

Interface for bounding box gizmo

## Extends

- [`IGizmo`](IGizmo.md)

## Properties

### \_rootMesh

> **\_rootMesh**: [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L66)

The root mesh of the gizmo

#### Inherited from

[`IGizmo`](IGizmo.md).[`_rootMesh`](IGizmo.md#_rootmesh)

***

### additionalTransformNode?

> `optional` **additionalTransformNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L120)

Additional transform applied to the gizmo.
It's useful when the gizmo is attached to a bone: if the bone is part of a skeleton attached to a mesh, you should define the mesh as additionalTransformNode if you want the gizmo to be displayed at the bone's correct location.
Otherwise, as the gizmo is relative to the skeleton root, the mesh transformation will not be taken into account.

#### Inherited from

[`IGizmo`](IGizmo.md).[`additionalTransformNode`](IGizmo.md#additionaltransformnode)

***

### anchorPoint

> **anchorPoint**: [`GizmoAnchorPoint`](../enumerations/GizmoAnchorPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L93)

Defines where the gizmo will be positioned if `updateGizmoPositionToMatchAttachedMesh` is enabled.
(Default: GizmoAnchorPoint.Origin)

#### Inherited from

[`IGizmo`](IGizmo.md).[`anchorPoint`](IGizmo.md#anchorpoint)

***

### attachedMesh

> **attachedMesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L73)

Mesh that the gizmo will be attached to. (eg. on a drag gizmo the mesh that will be dragged)
* When set, interactions will be enabled

#### Inherited from

[`IGizmo`](IGizmo.md).[`attachedMesh`](IGizmo.md#attachedmesh)

***

### attachedNode

> **attachedNode**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L78)

Node that the gizmo will be attached to. (eg. on a drag gizmo the mesh, bone or NodeTransform that will be dragged)
* When set, interactions will be enabled

#### Inherited from

[`IGizmo`](IGizmo.md).[`attachedNode`](IGizmo.md#attachednode)

***

### axisFactor

> **axisFactor**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L72)

Scale factor vector used for masking some axis

***

### coloredMaterial

> **coloredMaterial**: [`StandardMaterial`](../classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L103)

Default material used to render when gizmo is not disabled or hovered

***

### coordinatesMode

> **coordinatesMode**: [`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L98)

Set the coordinate mode to use. By default it's local.

#### Inherited from

[`IGizmo`](IGizmo.md).[`coordinatesMode`](IGizmo.md#coordinatesmode)

***

### customRotationQuaternion

> **customRotationQuaternion**: [`Nullable`](../type-aliases/Nullable.md)\<[`Quaternion`](../classes/Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L108)

Orientation that the gizmo will be displayed with.
When set null, default value will be used (Quaternion(0, 0, 0, 1))

#### Inherited from

[`IGizmo`](IGizmo.md).[`customRotationQuaternion`](IGizmo.md#customrotationquaternion)

***

### fixedDragMeshBoundsSize

> **fixedDragMeshBoundsSize**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L48)

If set, the rotation anchors and scale boxes will increase in size based on the size of the bounding box
Note : fixedDragMeshScreenSize takes precedence over fixedDragMeshBoundsSize if both are true

***

### fixedDragMeshScreenSize

> **fixedDragMeshScreenSize**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L43)

If set, the rotation anchors and scale boxes will increase in size based on the distance away from the camera to have a consistent screen size
Note : fixedDragMeshScreenSize takes precedence over fixedDragMeshBoundsSize if both are true

***

### fixedDragMeshScreenSizeDistanceFactor

> **fixedDragMeshScreenSizeDistanceFactor**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L52)

The distance away from the object which the draggable meshes should appear world sized when fixedDragMeshScreenSize is set to true

***

### gizmoLayer

> **gizmoLayer**: [`UtilityLayerRenderer`](../classes/UtilityLayerRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L84)

The utility layer the gizmo will be added to

#### Inherited from

[`IGizmo`](IGizmo.md).[`gizmoLayer`](IGizmo.md#gizmolayer)

***

### hoverMaterial

> **hoverMaterial**: [`StandardMaterial`](../classes/StandardMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L105)

Material used to render when gizmo is hovered with mouse

***

### ignoreChildren

> **ignoreChildren**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L30)

If child meshes should be ignored when calculating the bounding box. This should be set to true to avoid perf hits with heavily nested meshes.

***

### includeChildPredicate

> **includeChildPredicate**: [`Nullable`](../type-aliases/Nullable.md)\<(`abstractMesh`) => `boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L34)

Returns true if a descendant should be included when computing the bounding box. When null, all descendants are included. If ignoreChildren is set this will be ignored.

***

### isDragging

> `readonly` **isDragging**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L54)

True when a rotation anchor or scale box or a attached mesh is dragged

***

### isHovered

> `readonly` **isHovered**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L64)

True when the mouse pointer is hovered a gizmo mesh

#### Inherited from

[`IGizmo`](IGizmo.md).[`isHovered`](IGizmo.md#ishovered)

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](../classes/Observable.md)\<\{ `dragAxis`: [`Vector3`](../classes/Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L56)

Fired when a rotation anchor or scale box is dragged

***

### onHoverEndObservable

> **onHoverEndObservable**: [`Observable`](../classes/Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L60)

Fired when the gizmo mesh hovering ends

***

### onHoverStartObservable

> **onHoverStartObservable**: [`Observable`](../classes/Observable.md)\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L58)

Fired when the gizmo mesh hovering starts

***

### onRotationSphereDragEndObservable

> **onRotationSphereDragEndObservable**: [`Observable`](../classes/Observable.md)\<\{ `dragAxis`: [`Vector3`](../classes/Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L68)

Fired when a rotation anchor drag is ended

***

### onRotationSphereDragObservable

> **onRotationSphereDragObservable**: [`Observable`](../classes/Observable.md)\<\{ `dragAxis`: [`Vector3`](../classes/Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L66)

Fired when a rotation anchor is dragged

***

### onScaleBoxDragEndObservable

> **onScaleBoxDragEndObservable**: [`Observable`](../classes/Observable.md)\<\{ `dragAxis`: [`Vector3`](../classes/Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L64)

Fired when a scale box drag is ended

***

### onScaleBoxDragObservable

> **onScaleBoxDragObservable**: [`Observable`](../classes/Observable.md)\<\{ `dragAxis`: [`Vector3`](../classes/Vector3.md); `dragOperation`: [`DragOperation`](../enumerations/DragOperation.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L62)

Fired when a scale box is dragged

***

### rotationSnapDistance

> **rotationSnapDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L110)

Drag distance in babylon units that the gizmo will snap rotation to when dragged

***

### rotationSphereSize

> **rotationSphereSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L36)

The size of the rotation anchors attached to the bounding box

***

### scaleBoxSize

> **scaleBoxSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L38)

The size of the scale boxes attached to the bounding box

***

### scaleDragSpeed

> **scaleDragSpeed**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L74)

Scale factor scalar affecting all axes' drag speed

***

### scalePivot

> **scalePivot**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L70)

Relative bounding box pivot used when scaling the attached node.

***

### scaleRatio

> **scaleRatio**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L68)

Ratio for the scale of the gizmo

#### Inherited from

[`IGizmo`](IGizmo.md).[`scaleRatio`](IGizmo.md#scaleratio)

***

### scalingSnapDistance

> **scalingSnapDistance**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L108)

Drag distance in babylon units that the gizmo will snap scaling to when dragged

***

### updateGizmoPositionToMatchAttachedMesh

> **updateGizmoPositionToMatchAttachedMesh**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L88)

If set the gizmo's position will be updated to match the attached mesh each frame (Default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateGizmoPositionToMatchAttachedMesh`](IGizmo.md#updategizmopositiontomatchattachedmesh)

***

### updateGizmoRotationToMatchAttachedMesh

> **updateGizmoRotationToMatchAttachedMesh**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L82)

If set the gizmo's rotation will be updated to match the attached mesh each frame (Default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateGizmoRotationToMatchAttachedMesh`](IGizmo.md#updategizmorotationtomatchattachedmesh)

***

### updateScale

> **updateScale**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L103)

When set, the gizmo will always appear the same size no matter where the camera is (default: true)

#### Inherited from

[`IGizmo`](IGizmo.md).[`updateScale`](IGizmo.md#updatescale)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L120)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IGizmo`](IGizmo.md).[`dispose`](IGizmo.md#dispose)

***

### enableDragBehavior()

> **enableDragBehavior**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L96)

Enables a pointer drag behavior on the bounding box of the gizmo

#### Returns

`void`

***

### getScaleBoxes()

> **getScaleBoxes**(): [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L81)

Returns an array containing all boxes used for scaling (in increasing x, y and z orders)

#### Returns

[`AbstractMesh`](../classes/AbstractMesh.md)[]

***

### releaseDrag()

> **releaseDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L100)

Force release the drag action by code

#### Returns

`void`

***

### setColor()

> **setColor**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L79)

Sets the color of the bounding box gizmo

#### Parameters

##### color

[`Color3`](../classes/Color3.md)

the color to set

#### Returns

`void`

***

### setCustomMesh()

> **setCustomMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmo.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/gizmo.ts#L113)

Disposes and replaces the current meshes in the gizmo with the specified mesh

#### Parameters

##### mesh

[`Mesh`](../classes/Mesh.md)

The mesh to replace the default mesh of the gizmo

#### Returns

`void`

#### Inherited from

[`IGizmo`](IGizmo.md).[`setCustomMesh`](IGizmo.md#setcustommesh)

***

### setEnabledRotationAxis()

> **setEnabledRotationAxis**(`axis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L88)

Enables rotation on the specified axis and disables rotation on the others

#### Parameters

##### axis

`string`

The list of axis that should be enabled (eg. "xy" or "xyz")

#### Returns

`void`

***

### setEnabledScaling()

> **setEnabledScaling**(`enable`, `homogeneousScaling?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L94)

Enables/disables scaling

#### Parameters

##### enable

`boolean`

if scaling should be enabled

##### homogeneousScaling?

`boolean`

defines if scaling should only be homogeneous

#### Returns

`void`

***

### updateBoundingBox()

> **updateBoundingBox**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gizmos/boundingBoxGizmo.ts#L83)

Updates the bounding box information for the Gizmo

#### Returns

`void`
