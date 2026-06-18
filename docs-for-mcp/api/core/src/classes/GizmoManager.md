[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GizmoManager

# Class: GizmoManager

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L21)

Helps set up gizmos in the scene to rotate/scale/position nodes

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new GizmoManager**(`_scene`, `thickness?`, `utilityLayer?`, `keepDepthUtilityLayer?`): `GizmoManager`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L183)

Instantiates a gizmo manager

#### Parameters

##### \_scene

[`Scene`](Scene.md)

the scene to overlay the gizmos on top of

##### thickness?

`number` = `1`

display gizmo axis thickness

##### utilityLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

the layer where gizmos are rendered

##### keepDepthUtilityLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultKeepDepthUtilityLayer`

the layer where occluded gizmos are rendered

#### Returns

`GizmoManager`

## Properties

### attachableMeshes

> **attachableMeshes**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L65)

Array of meshes which will have the gizmo attached when a pointer selected them. If null, all meshes are attachable. (Default: null)

***

### attachableNodes

> **attachableNodes**: [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L69)

Array of nodes which will have the gizmo attached when a pointer selected them. If null, all nodes are attachable. (Default: null)

***

### boundingBoxDragBehavior

> **boundingBoxDragBehavior**: [`SixDofDragBehavior`](SixDofDragBehavior.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L61)

When bounding box gizmo is enabled, this can be used to track drag/end events

***

### clearGizmoOnEmptyPointerEvent

> **clearGizmoOnEmptyPointerEvent**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L33)

When true, the gizmo will be detached from the current object when a pointer down occurs with an empty picked mesh

***

### enableAutoPicking

> **enableAutoPicking**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L36)

When true (default), picking to attach a new mesh is enabled. This works in sync with inspector autopicking.

***

### gizmos

> **gizmos**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L25)

Gizmos created by the gizmo manager, gizmo will be null until gizmo has been enabled for the first time

#### boundingBoxGizmo

> **boundingBoxGizmo**: [`Nullable`](../type-aliases/Nullable.md)\<[`IBoundingBoxGizmo`](../interfaces/IBoundingBoxGizmo.md)\>

#### positionGizmo

> **positionGizmo**: [`Nullable`](../type-aliases/Nullable.md)\<[`IPositionGizmo`](../interfaces/IPositionGizmo.md)\>

#### rotationGizmo

> **rotationGizmo**: [`Nullable`](../type-aliases/Nullable.md)\<[`IRotationGizmo`](../interfaces/IRotationGizmo.md)\>

#### scaleGizmo

> **scaleGizmo**: [`Nullable`](../type-aliases/Nullable.md)\<[`IScaleGizmo`](../interfaces/IScaleGizmo.md)\>

***

### onAttachedToMeshObservable

> **onAttachedToMeshObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L39)

Fires an event when the manager is attached to a mesh

***

### onAttachedToNodeObservable

> **onAttachedToNodeObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L42)

Fires an event when the manager is attached to a node

***

### usePointerToAttachGizmos

> **usePointerToAttachGizmos**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L73)

If pointer events should perform attaching/detaching a gizmo, if false this can be done manually via attachToMesh/attachToNode. (Default: true)

## Accessors

### additionalTransformNode

#### Get Signature

> **get** **additionalTransformNode**(): [`TransformNode`](TransformNode.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L172)

Additional transform node that will be used to transform all the gizmos

##### Returns

[`TransformNode`](TransformNode.md) \| `undefined`

#### Set Signature

> **set** **additionalTransformNode**(`node`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:406](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L406)

Sets the additional transform applied to all the gizmos.

##### See

Gizmo.additionalTransformNode for more detail

##### Parameters

###### node

[`TransformNode`](TransformNode.md) \| `undefined`

##### Returns

`void`

***

### attachedMesh

#### Get Signature

> **get** **attachedMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L158)

The mesh the gizmo's is attached to

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

***

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L165)

The node the gizmo's is attached to

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

***

### boundingBoxGizmoEnabled

#### Get Signature

> **get** **boundingBoxGizmoEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:398](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L398)

##### Returns

`boolean`

#### Set Signature

> **set** **boundingBoxGizmoEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L371)

If the boundingBox gizmo is enabled

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): [`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L151)

##### Returns

[`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

#### Set Signature

> **set** **coordinatesMode**(`coordinatesMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L141)

Set the coordinate system to use. By default it's local.
But it's possible for a user to tweak so its local for translation and world for rotation.
In that case, setting the coordinate system will change `updateGizmoRotationToMatchAttachedMesh` and `updateGizmoPositionToMatchAttachedMesh`

##### Parameters

###### coordinatesMode

[`GizmoCoordinatesMode`](../enumerations/GizmoCoordinatesMode.md)

##### Returns

`void`

***

### isDragging

#### Get Signature

> **get** **isDragging**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L107)

True when the mouse pointer is dragging a gizmo mesh

##### Returns

`boolean`

***

### isHovered

#### Get Signature

> **get** **isHovered**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L92)

True when the mouse pointer is hovering a gizmo mesh

##### Returns

`boolean`

***

### keepDepthUtilityLayer

#### Get Signature

> **get** **keepDepthUtilityLayer**(): [`UtilityLayerRenderer`](UtilityLayerRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L78)

Utility layer that the bounding box gizmo belongs to

##### Returns

[`UtilityLayerRenderer`](UtilityLayerRenderer.md)

***

### positionGizmoEnabled

#### Get Signature

> **get** **positionGizmoEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L323)

##### Returns

`boolean`

#### Set Signature

> **set** **positionGizmoEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L307)

If the position gizmo is enabled

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### rotationGizmoEnabled

#### Get Signature

> **get** **rotationGizmoEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L345)

##### Returns

`boolean`

#### Set Signature

> **set** **rotationGizmoEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L329)

If the rotation gizmo is enabled

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scaleGizmoEnabled

#### Get Signature

> **get** **scaleGizmoEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L365)

##### Returns

`boolean`

#### Set Signature

> **set** **scaleGizmoEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L351)

If the scale gizmo is enabled

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scaleRatio

#### Get Signature

> **get** **scaleRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L132)

##### Returns

`number`

#### Set Signature

> **set** **scaleRatio**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L123)

Ratio for the scale of the gizmo (Default: 1)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### utilityLayer

#### Get Signature

> **get** **utilityLayer**(): [`UtilityLayerRenderer`](UtilityLayerRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L85)

Utility layer that all gizmos besides bounding box belong to

##### Returns

[`UtilityLayerRenderer`](UtilityLayerRenderer.md)

## Methods

### addToAxisCache()

> **addToAxisCache**(`gizmoAxisCache`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:424](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L424)

Builds Gizmo Axis Cache to enable features such as hover state preservation and graying out other axis during manipulation

#### Parameters

##### gizmoAxisCache

`Map`\<[`Mesh`](Mesh.md), [`GizmoAxisCache`](../interfaces/GizmoAxisCache.md)\>

Gizmo axis definition used for reactive gizmo UI

#### Returns

`void`

***

### attachToMesh()

> **attachToMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L258)

Attaches a set of gizmos to the specified mesh

#### Parameters

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

The mesh the gizmo's should be attached to

#### Returns

`void`

***

### attachToNode()

> **attachToNode**(`node`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:283](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L283)

Attaches a set of gizmos to the specified node

#### Parameters

##### node

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

The node the gizmo's should be attached to

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L445)

Disposes of the gizmo manager

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### releaseDrag()

> **releaseDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Gizmos/gizmoManager.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Gizmos/gizmoManager.ts#L435)

Force release the drag action by code

#### Returns

`void`
