[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRMotionControllerTeleportation

# Class: WebXRMotionControllerTeleportation

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L161)

This is a teleportation feature to be used with WebXR-enabled motion controllers.
When enabled and attached, the feature will allow a user to move around and rotate in the scene using
the input of the attached controllers.

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRMotionControllerTeleportation**(`_xrSessionManager`, `_options`): `WebXRMotionControllerTeleportation`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L310)

constructs a new teleportation system

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

an instance of WebXRSessionManager

##### \_options

[`IWebXRTeleportationOptions`](../interfaces/IWebXRTeleportationOptions.md)

configuration object for this feature

#### Returns

`WebXRMotionControllerTeleportation`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`constructor`](WebXRAbstractFeature.md#constructor)

## Properties

### backwardsMovementEnabled

> **backwardsMovementEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L214)

Is movement backwards enabled

***

### backwardsTeleportationDistance

> **backwardsTeleportationDistance**: `number` = `0.7`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L218)

Distance to travel when moving backwards

***

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L58)

The dependencies of this feature, if any

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dependsOn`](WebXRAbstractFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L27)

Should auto-attach be disabled?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`disableAutoAttach`](WebXRAbstractFeature.md#disableautoattach)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L22)

Is this feature disposed?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isDisposed`](WebXRAbstractFeature.md#isdisposed)

***

### onAfterCameraTeleport

> **onAfterCameraTeleport**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L273)

Observable raised after camera teleportation

***

### onAfterCameraTeleportRotation

> **onAfterCameraTeleportRotation**: [`Observable`](Observable.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L263)

Observable raised after camera rotation

***

### onBeforeCameraTeleport

> **onBeforeCameraTeleport**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L268)

Observable raised before camera teleportation

***

### onBeforeCameraTeleportRotation

> **onBeforeCameraTeleportRotation**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L258)

Observable raised before camera rotation

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L49)

Observers registered here will be executed when the feature is attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureAttachObservable`](WebXRAbstractFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L53)

Observers registered here will be executed when the feature is detached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureDetachObservable`](WebXRAbstractFeature.md#onfeaturedetachobservable)

***

### onTargetMeshPositionUpdatedObservable

> **onTargetMeshPositionUpdatedObservable**: [`Observable`](Observable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L246)

This observable will notify when the target mesh position was updated.
The picking info it provides contains the point to which the target mesh will move ()

***

### parabolicCheckRadius

> **parabolicCheckRadius**: `number` = `5`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L224)

The distance from the user to the inspection point in the direction of the controller
A higher number will allow the user to move further
defaults to 5 (meters, in xr units)

***

### parabolicRayEnabled

> **parabolicRayEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L230)

Should the module support parabolic ray on top of direct ray
If enabled, the user will be able to point "at the sky" and move according to predefined radius distance
Very helpful when moving between floors / different heights

***

### rotationAngle

> **rotationAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L240)

How much rotation should be applied when rotating right and left

***

### skipNextTeleportation

> **skipNextTeleportation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L198)

Skip the next teleportation. This can be controlled by the user to prevent the user from teleportation
to sections that are not yet "unlocked", but should still show the teleportation mesh.

***

### straightRayEnabled

> **straightRayEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:236](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L236)

The second type of ray - straight line.
Should it be enabled or should the parabolic line be the only one.

***

### teleportationEnabled

> **teleportationEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L251)

Is teleportation enabled. Can be used to allow rotation only.

***

### Name

> `readonly` `static` **Name**: `"xr-controller-teleportation"` = `WebXRFeatureName.TELEPORTATION`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L203)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L209)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number does not correspond to the webxr specs version

## Accessors

### attached

#### Get Signature

> **get** **attached**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L69)

Is this feature attached

##### Returns

`boolean`

Is this feature attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attached`](WebXRAbstractFeature.md#attached)

***

### rotationEnabled

#### Get Signature

> **get** **rotationEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L279)

Is rotation enabled when moving forward?
Disabling this feature will prevent the user from deciding the direction when teleporting

##### Returns

`boolean`

#### Set Signature

> **set** **rotationEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L287)

Sets whether rotation is enabled or not

##### Parameters

###### enabled

`boolean`

is rotation enabled when teleportation is shown

##### Returns

`void`

***

### snapPointsOnly

#### Get Signature

> **get** **snapPointsOnly**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L340)

Get the snapPointsOnly flag

##### Returns

`boolean`

#### Set Signature

> **set** **snapPointsOnly**(`snapToPoints`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L348)

Sets the snapPointsOnly flag

##### Parameters

###### snapToPoints

`boolean`

should teleportation be exclusively to snap points

##### Returns

`void`

***

### teleportationTargetMesh

#### Get Signature

> **get** **teleportationTargetMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L301)

Exposes the currently set teleportation target mesh.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

***

### xrNativeFeatureName

#### Get Signature

> **get** **xrNativeFeatureName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L34)

The name of the native xr feature name (like anchor, hit-test, or hand-tracking)

##### Returns

`string`

#### Set Signature

> **set** **xrNativeFeatureName**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L38)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

##### Parameters

###### name

`string`

##### Returns

`void`

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`xrNativeFeatureName`](WebXRAbstractFeature.md#xrnativefeaturename)

## Methods

### addBlockerMesh()

> **addBlockerMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:364](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L364)

Add a mesh to the list of meshes blocking the teleportation ray

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to add to the teleportation-blocking meshes

#### Returns

`void`

***

### addFloorMesh()

> **addFloorMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L356)

Add a new mesh to the floor meshes array

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh to use as floor mesh

#### Returns

`void`

***

### addSnapPoint()

> **addSnapPoint**(`newSnapPoint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L373)

Add a new snap-to point to fix teleportation to this position

#### Parameters

##### newSnapPoint

[`Vector3`](Vector3.md)

The new Snap-To point

#### Returns

`void`

***

### attach()

> **attach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:377](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L377)

attach this feature

#### Returns

`boolean`

true if successful, false is failed or already attached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:397](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L397)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L415)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L144)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)

***

### removeBlockerMesh()

> **removeBlockerMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L443)

Remove a mesh from the blocker meshes array

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh to remove

#### Returns

`void`

***

### removeFloorMesh()

> **removeFloorMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L432)

Remove a mesh from the floor meshes array

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh to remove

#### Returns

`void`

***

### removeFloorMeshByName()

> **removeFloorMeshByName**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L455)

Remove a mesh from the floor meshes array using its name

#### Parameters

##### name

`string`

the mesh name to remove

#### Returns

`void`

***

### removeSnapPoint()

> **removeSnapPoint**(`snapPointToRemove`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:467](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L467)

This function will iterate through the array, searching for this point or equal to it. It will then remove it from the snap-to array

#### Parameters

##### snapPointToRemove

[`Vector3`](Vector3.md)

the point (or a clone of it) to be removed from the array

#### Returns

`boolean`

was the point found and removed or not

***

### setSelectionFeature()

> **setSelectionFeature**(`selectionFeature`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts:494](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerTeleportation.ts#L494)

This function sets a selection feature that will be disabled when
the forward ray is shown and will be reattached when hidden.
This is used to remove the selection rays when moving.

#### Parameters

##### selectionFeature

[`Nullable`](../type-aliases/Nullable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

the feature to disable when forward movement is enabled

#### Returns

`void`
