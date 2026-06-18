[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RayHelper

# Class: RayHelper

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L17)

As raycast might be hard to debug, the RayHelper can help rendering the different rays
in order to better appreciate the issue one might have.

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/picking_collisions#debugging

## Constructors

### Constructor

> **new RayHelper**(`ray`): `RayHelper`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L56)

Instantiate a new ray helper.
As raycast might be hard to debug, the RayHelper can help rendering the different rays
in order to better appreciate the issue one might have.

#### Parameters

##### ray

[`Ray`](Ray.md)

Defines the ray we are currently trying to visualize

#### Returns

`RayHelper`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/picking_collisions#debugging

## Properties

### ray

> **ray**: [`Nullable`](../type-aliases/Nullable.md)\<[`Ray`](Ray.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L21)

Defines the ray we are currently trying to visualize.

## Methods

### attachToMesh()

> **attachToMesh**(`mesh`, `meshSpaceDirection?`, `meshSpaceOrigin?`, `length?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L130)

Attach a ray helper to a mesh so that we can easily see its orientation for instance or information like its normals.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Defines the mesh we want the helper attached to

##### meshSpaceDirection?

[`Vector3`](Vector3.md)

Defines the direction of the Ray in mesh space (local space of the mesh node)

##### meshSpaceOrigin?

[`Vector3`](Vector3.md)

Defines the origin of the Ray in mesh space (local space of the mesh node)

##### length?

`number`

Defines the length of the ray

#### Returns

`void`

***

### detachFromMesh()

> **detachFromMesh**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L186)

Detach the ray helper from the mesh it has previously been attached to.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L218)

Dispose the helper and release its associated resources.

#### Returns

`void`

***

### hide()

> **hide**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L88)

Hides the ray we are debugging.

#### Returns

`void`

***

### show()

> **show**(`scene`, `color?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L65)

Shows the ray we are willing to debug.

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene the ray needs to be rendered in

##### color?

[`Color3`](Color3.md)

Defines the color the ray needs to be rendered in

#### Returns

`void`

***

### CreateAndShow()

> `static` **CreateAndShow**(`ray`, `scene`, `color`): `RayHelper`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/rayHelper.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/rayHelper.ts#L41)

Helper function to create a colored helper in a scene in one line.

#### Parameters

##### ray

[`Ray`](Ray.md)

Defines the ray we are currently trying to visualize

##### scene

[`Scene`](Scene.md)

Defines the scene the ray is used in

##### color

[`Color3`](Color3.md)

Defines the color we want to see the ray in

#### Returns

`RayHelper`

The newly created ray helper.
