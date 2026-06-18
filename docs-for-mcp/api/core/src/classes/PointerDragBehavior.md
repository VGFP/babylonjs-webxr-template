[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointerDragBehavior

# Class: PointerDragBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L22)

A behavior that when attached to a mesh will allow the mesh to be dragged around the screen based on pointer events

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`AbstractMesh`](AbstractMesh.md)\>

## Constructors

### Constructor

> **new PointerDragBehavior**(`options?`): `PointerDragBehavior`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L168)

Creates a pointer drag behavior that can be attached to a mesh

#### Parameters

##### options?

The drag axis or normal of the plane that will be dragged across. If no options are specified the drag plane will always face the ray's origin (eg. camera)

###### dragAxis?

[`Vector3`](Vector3.md)

###### dragPlaneNormal?

[`Vector3`](Vector3.md)

#### Returns

`PointerDragBehavior`

## Properties

### additionalTransformNode?

> `optional` **additionalTransformNode?**: [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L144)

If set, the drag axis will be transformed by the inverse of this node's world matrix.
Useful when the drag behavior is used with a gizmo that has an additionalTransformNode.

***

### allowOtherButtonsDuringDrag

> **allowOtherButtonsDuringDrag**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L138)

Normally a drag is canceled when the user presses another button on the same pointer. If this is set to true,
the drag will continue even if another button is pressed on the same pointer.

***

### attachedNode

> **attachedNode**: [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L27)

Abstract mesh the behavior is set on

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### currentDraggingPointerId

> **currentDraggingPointerId**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L63)

The id of the pointer that is currently interacting with the behavior (-1 when no pointer is active)

***

### detachCameraControls

> **detachCameraControls**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L127)

If camera controls should be detached during the drag

***

### dragButtons

> **dragButtons**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L43)

Butttons that can be used to initiate a drag

***

### dragDeltaRatio

> **dragDeltaRatio**: `number` = `0.2`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L75)

The distance towards the target drag position to move each frame. This can be useful to avoid jitter. Set this to 1 for no delay. (Default: 0.2)

***

### dragging

> **dragging**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L71)

If the behavior is currently in a dragging state

***

### lastDragPosition

> **lastDragPosition**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:67](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L67)

The last position where the pointer hit the drag plane in world space

***

### maxDragAngle

> **maxDragAngle**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L39)

The maximum tolerated angle between the drag plane and dragging pointer rays to trigger pointer events. Set to 0 to allow any angle (default: 0)

***

### moveAttached

> **moveAttached**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L103)

If the attached mesh should be moved when dragged

***

### onDragEndObservable

> **onDragEndObservable**: [`Observable`](Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L94)

Fires each time a drag ends (eg. mouse release after drag)

***

### onDragObservable

> **onDragObservable**: [`Observable`](Observable.md)\<[`DragEvent`](../type-aliases/DragEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:86](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L86)

Fires each time the attached mesh is dragged with the pointer

***

### onDragStartObservable

> **onDragStartObservable**: [`Observable`](Observable.md)\<[`DragStartEndEvent`](../type-aliases/DragStartEndEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L90)

Fires each time a drag begins (eg. mouse down on mesh)

***

### onEnabledObservable

> **onEnabledObservable**: [`Observable`](Observable.md)\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L98)

Fires each time behavior enabled state changes

***

### startAndReleaseDragOnPointerEvents

> **startAndReleaseDragOnPointerEvents**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L123)

If pointer events should start and release the drag (Default: true)

***

### updateDragPlane

> **updateDragPlane**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L79)

If the drag plane orientation should be updated during the dragging (Default: true)

***

### useObjectOrientationForDragging

> **useObjectOrientationForDragging**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L132)

If set, the drag plane/axis will be rotated based on the attached mesh's world rotation (Default: true)

## Accessors

### currentDraggingPointerID

#### Get Signature

> **get** **currentDraggingPointerID**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L53)

Get or set the currentDraggingPointerId

##### Deprecated

Please use currentDraggingPointerId instead

##### Returns

`number`

#### Set Signature

> **set** **currentDraggingPointerID**(`currentDraggingPointerId`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L57)

##### Parameters

###### currentDraggingPointerId

`number`

##### Returns

`void`

***

### enabled

#### Get Signature

> **get** **enabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L115)

##### Returns

`boolean`

#### Set Signature

> **set** **enabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L108)

If the drag behavior will react to drag events (Default: true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L198)

The name of the behavior

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

***

### options

#### Get Signature

> **get** **options**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L151)

Gets the options used by the behavior

##### Returns

`object`

###### dragAxis?

> `optional` **dragAxis?**: [`Vector3`](Vector3.md)

###### dragPlaneNormal?

> `optional` **dragPlaneNormal?**: [`Vector3`](Vector3.md)

#### Set Signature

> **set** **options**(`options`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L158)

Sets the options used by the behavior

##### Parameters

###### options

###### dragAxis?

[`Vector3`](Vector3.md)

###### dragPlaneNormal?

[`Vector3`](Vector3.md)

##### Returns

`void`

## Methods

### attach()

> **attach**(`ownerNode`, `predicate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L217)

Attaches the drag behavior the passed in mesh

#### Parameters

##### ownerNode

[`AbstractMesh`](AbstractMesh.md)

The mesh that will be dragged around once attached

##### predicate?

(`m`) => `boolean`

Predicate to use for pick filtering

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:603](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L603)

Detaches the behavior from the mesh

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L205)

Initializes the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### releaseDrag()

> **releaseDrag**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L353)

Force release the drag action by code.

#### Returns

`void`

***

### startDrag()

> **startDrag**(`pointerId?`, `fromRay?`, `startPickedPoint?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L388)

Simulates the start of a pointer drag event on the behavior

#### Parameters

##### pointerId?

`number` = `PointerDragBehavior._AnyMouseId`

pointerID of the pointer that should be simulated (Default: Any mouse pointer ID)

##### fromRay?

[`Ray`](Ray.md)

initial ray of the pointer to be simulated (Default: Ray from camera to attached mesh)

##### startPickedPoint?

[`Vector3`](Vector3.md)

picked point of the pointer to be simulated (Default: attached mesh position)

#### Returns

`void`

***

### validateDrag()

> **validateDrag**(`target`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Behaviors/Meshes/pointerDragBehavior.ts#L191)

Predicate to determine if it is valid to move the object to a new position when it is moved.
In the case of rotation gizmo, target contains the angle.

#### Parameters

##### target

[`Vector3`](Vector3.md)

destination position or desired angle delta

#### Returns

`boolean`

boolean for whether or not it is valid to move
