[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRHandTrackingOptions

# Interface: IWebXRHandTrackingOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L39)

Configuration interface for the hand tracking feature

## Properties

### handMeshes?

> `optional` **handMeshes?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L89)

Configuration object for the hand meshes.

#### customColors?

> `optional` **customColors?**: `object`

Override the colors of the hand meshes.

##### customColors.base?

> `optional` **base?**: [`Color3`](../classes/Color3.md)

##### customColors.fingerColor?

> `optional` **fingerColor?**: [`Color3`](../classes/Color3.md)

##### customColors.fresnel?

> `optional` **fresnel?**: [`Color3`](../classes/Color3.md)

##### customColors.tipFresnel?

> `optional` **tipFresnel?**: [`Color3`](../classes/Color3.md)

#### customMeshes?

> `optional` **customMeshes?**: `object`

Rigged hand meshes that will be tracked to the user's hands. This will override the default hand mesh.

##### customMeshes.left

> **left**: [`AbstractMesh`](../classes/AbstractMesh.md)

##### customMeshes.right

> **right**: [`AbstractMesh`](../classes/AbstractMesh.md)

#### customRigMappings?

> `optional` **customRigMappings?**: `object`

If a hand mesh was provided, this array will define what axis will update which node. This will override the default hand mesh

##### customRigMappings.left

> **left**: [`XRHandMeshRigMapping`](../type-aliases/XRHandMeshRigMapping.md)

##### customRigMappings.right

> **right**: [`XRHandMeshRigMapping`](../type-aliases/XRHandMeshRigMapping.md)

#### disableDefaultMeshes?

> `optional` **disableDefaultMeshes?**: `boolean`

Should the default hand mesh be disabled. In this case, the spheres will be visible (unless set invisible).

#### disableHandShader?

> `optional` **disableHandShader?**: `boolean`

Setting this will allow the developer to avoid loading the NME material and use the standard material instead.

#### disposeOnSessionEnd?

> `optional` **disposeOnSessionEnd?**: `boolean`

Define whether or not the hand meshes should be disposed on just invisible when the session ends.
Not setting, or setting to false, will maintain the hand meshes in the scene after the session ends, which will allow q quicker re-entry into XR.

#### meshesUseLeftHandedCoordinates?

> `optional` **meshesUseLeftHandedCoordinates?**: `boolean`

Are the meshes prepared for a left-handed system. Default hand meshes are right-handed.

***

### jointMeshes?

> `optional` **jointMeshes?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L48)

Configuration object for the joint meshes.

#### enablePhysics?

> `optional` **enablePhysics?**: `boolean`

Should each instance have its own physics impostor

#### invisible?

> `optional` **invisible?**: `boolean`

Should the meshes created be invisible (defaults to false).

#### keepOriginalVisible?

> `optional` **keepOriginalVisible?**: `boolean`

Should the source mesh stay visible (defaults to false).

#### onHandJointMeshGenerated?

> `optional` **onHandJointMeshGenerated?**: (`meshInstance`, `jointId`, `hand`) => [`AbstractMesh`](../classes/AbstractMesh.md) \| `undefined`

This function will be called after a mesh was created for a specific joint.
Using this function you can either manipulate the instance or return a new mesh.
When returning a new mesh the instance created before will be disposed.

##### Parameters

###### meshInstance

[`InstancedMesh`](../classes/InstancedMesh.md)

An instance of the original joint mesh being used for the joint.

###### jointId

`number`

The joint's index, see https://immersive-web.github.io/webxr-hand-input/#skeleton-joints-section for more info.

###### hand

`XRHandedness`

Which hand ("left", "right") the joint will be on.

##### Returns

[`AbstractMesh`](../classes/AbstractMesh.md) \| `undefined`

#### physicsProps?

> `optional` **physicsProps?**: `object`

If enabled, override default physics properties

##### physicsProps.friction?

> `optional` **friction?**: `number`

##### physicsProps.impostorType?

> `optional` **impostorType?**: `number`

##### physicsProps.restitution?

> `optional` **restitution?**: `number`

#### scaleFactor?

> `optional` **scaleFactor?**: `number`

Scale factor for all joint meshes (defaults to 1)

#### sourceMesh?

> `optional` **sourceMesh?**: [`Mesh`](../classes/Mesh.md)

A source mesh to be used to create instances. Defaults to an icosphere with two subdivisions and smooth lighting.
This mesh will be the source for all other (25) meshes.
It should have the general size of a single unit, as the instances will be scaled according to the provided radius.

***

### xrInput

> **xrInput**: [`WebXRInput`](../classes/WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/features/WebXRHandTracking.pure.ts#L43)

The xrInput that will be used as source for new hands
