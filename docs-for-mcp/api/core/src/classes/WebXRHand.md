[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRHand

# Class: WebXRHand

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L294)

Representing a single hand (with its corresponding native XRHand object)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new WebXRHand**(`xrController`, `_jointMeshes`, `_handMesh`, `rigMapping`, `_leftHandedMeshes?`, `_jointsInvisible?`, `_jointScaleFactor?`): `WebXRHand`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:364](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L364)

Construct a new hand object

#### Parameters

##### xrController

[`WebXRInputSource`](WebXRInputSource.md)

The controller to which the hand correlates.

##### \_jointMeshes

[`AbstractMesh`](AbstractMesh.md)[]

The meshes to be used to track the hand joints.

##### \_handMesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

An optional hand mesh.

##### rigMapping

[`Nullable`](../type-aliases/Nullable.md)\<[`XRHandMeshRigMapping`](../type-aliases/XRHandMeshRigMapping.md)\>

An optional rig mapping for the hand mesh.
                  If not provided (but a hand mesh is provided),
                  it will be assumed that the hand mesh's bones are named
                  directly after the WebXR bone names.

##### \_leftHandedMeshes?

`boolean` = `false`

Are the hand meshes left-handed-system meshes

##### \_jointsInvisible?

`boolean` = `false`

Are the tracked joint meshes visible

##### \_jointScaleFactor?

`number` = `1`

Scale factor for all joint meshes

#### Returns

`WebXRHand`

## Properties

### onHandMeshSetObservable

> **onHandMeshSetObservable**: [`Observable`](Observable.md)\<`WebXRHand`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L299)

This observable will notify registered observers when the hand object has been set with a new mesh.
you can get the hand mesh using `webxrHand.handMesh`

***

### rigMapping

> `readonly` **rigMapping**: [`Nullable`](../type-aliases/Nullable.md)\<[`XRHandMeshRigMapping`](../type-aliases/XRHandMeshRigMapping.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L371)

An optional rig mapping for the hand mesh. If not provided (but a hand mesh is provided),
it will be assumed that the hand mesh's bones are named directly after the WebXR bone names.

***

### xrController

> `readonly` **xrController**: [`WebXRInputSource`](WebXRInputSource.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L366)

The controller to which the hand correlates.

## Accessors

### handMesh

#### Get Signature

> **get** **handMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L329)

Get the hand mesh.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

## Methods

### dispose()

> **dispose**(`disposeMeshes?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:535](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L535)

Dispose this Hand object

#### Parameters

##### disposeMeshes?

`boolean` = `false`

Should the meshes be disposed as well

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getHandPartMeshes()

> **getHandPartMeshes**(`part`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:338](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L338)

Get meshes of part of the hand.

#### Parameters

##### part

[`HandPart`](../enumerations/HandPart.md)

The part of hand to get.

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

An array of meshes that correlate to the hand part requested.

***

### getJointMesh()

> **getJointMesh**(`jointName`): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:347](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L347)

Retrieves a mesh linked to a named joint in the hand.

#### Parameters

##### jointName

[`WebXRHandJoint`](../enumerations/WebXRHandJoint.md)

The name of the joint.

#### Returns

[`AbstractMesh`](AbstractMesh.md)

An AbstractMesh whose position corresponds with the joint position.

***

### setHandMesh()

> **setHandMesh**(`handMesh`, `rigMapping`, `_xrSessionManager?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:413](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L413)

Sets the current hand mesh to render for the WebXRHand.

#### Parameters

##### handMesh

[`AbstractMesh`](AbstractMesh.md)

The rigged hand mesh that will be tracked to the user's hand.

##### rigMapping

[`Nullable`](../type-aliases/Nullable.md)\<[`XRHandMeshRigMapping`](../type-aliases/XRHandMeshRigMapping.md)\>

The mapping from XRHandJoint to bone names to use with the mesh.

##### \_xrSessionManager?

[`WebXRSessionManager`](WebXRSessionManager.md)

The XRSessionManager used to initialize the hand mesh.

#### Returns

`void`

***

### updateFromXRFrame()

> **updateFromXRFrame**(`xrFrame`, `referenceSpace`, `xrCamera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.ts:449](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRHandTracking.ts#L449)

Update this hand from the latest xr frame.

#### Parameters

##### xrFrame

`XRFrame`

The latest frame received from WebXR.

##### referenceSpace

`XRReferenceSpace`

The current viewer reference space.

##### xrCamera

[`WebXRCamera`](WebXRCamera.md)

the xr camera, used for parenting

#### Returns

`void`
