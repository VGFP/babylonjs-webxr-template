[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SurfaceMagnetismBehavior

# Class: SurfaceMagnetismBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L15)

**`Since`**

A behavior that allows a transform node to stick to a surface position/orientation
 5.0.0

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`Mesh`](Mesh.md)\>

## Constructors

### Constructor

> **new SurfaceMagnetismBehavior**(): `SurfaceMagnetismBehavior`

#### Returns

`SurfaceMagnetismBehavior`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L67)

Is this behavior reacting to pointer events

***

### hitNormalOffset

> **hitNormalOffset**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L29)

Distance offset from the hit point to place the target at, along the hit normal.

***

### interpolatePose

> **interpolatePose**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L51)

Set to false if the node should strictly follow the camera without any interpolation time

***

### keepOrientationVertical

> **keepOrientationVertical**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L62)

If true, pitch and roll are omitted.

***

### lerpTime

> **lerpTime**: `number` = `250`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L57)

Rate of interpolation of position and rotation of the attached node.
Higher values will give a slower interpolation.

***

### maxStickingDistance

> **maxStickingDistance**: `number` = `0.8`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L72)

Maximum distance for the node to stick to the surface

***

### meshes

> **meshes**: [`AbstractMesh`](AbstractMesh.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L41)

Spatial mapping meshes to collide with

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L77)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L34)

Name of the behavior

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### attach()

> **attach**(`target`, `scene?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L86)

Attaches the behavior to a transform node

#### Parameters

##### target

[`Mesh`](Mesh.md)

defines the target where the behavior is attached to

##### scene?

[`Scene`](Scene.md)

the scene

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L102)

Detaches the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### findAndUpdateTarget()

> **findAndUpdateTarget**(`pickInfo`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L158)

Finds the intersection point of the given ray onto the meshes and updates the target.
Transformation will be interpolated according to `interpolatePose` and `lerpTime` properties.
If no mesh of `meshes` are hit, this does nothing.

#### Parameters

##### pickInfo

[`PickingInfo`](PickingInfo.md)

The input pickingInfo that will be used to intersect the meshes

#### Returns

`boolean`

a boolean indicating if we found a hit to stick to

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L46)

Function called when the behavior needs to be initialized (after attaching it to a target)

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)

***

### updateAttachPoint()

> **updateAttachPoint**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/surfaceMagnetismBehavior.ts#L147)

Updates the attach point with the current geometry extents of the attached mesh

#### Returns

`void`
