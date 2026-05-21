[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsViewer

# Class: PhysicsViewer

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L32)

Used to show the physics impostor around the specific mesh

## Constructors

### Constructor

> **new PhysicsViewer**(`scene?`, `size?`, `utilityLayer?`): `PhysicsViewer`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:84](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L84)

Creates a new PhysicsViewer

#### Parameters

##### scene?

[`Scene`](Scene.md)

defines the hosting scene

##### size?

`number`

Physics V2 size scalar

##### utilityLayer?

[`UtilityLayerRenderer`](UtilityLayerRenderer.md) = `UtilityLayerRenderer.DefaultUtilityLayer`

The utility layer the viewer will be added to

#### Returns

`PhysicsViewer`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:1091](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L1091)

Clean up physics debug display

#### Returns

`void`

***

### hideBody()

> **hideBody**(`body`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:497](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L497)

Hides a body from the physics engine.

#### Parameters

##### body

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

The body to hide.

#### Returns

`boolean`

true if body actually removed

This function is useful for hiding a body from the physics engine.
It removes the body from the utility layer scene and disposes the mesh associated with it.
It also unregisters the render function if the number of bodies is 0.
This is useful for hiding a body from the physics engine without deleting it.

***

### hideConstraint()

> **hideConstraint**(`constraint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:580](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L580)

Hide a physics constraint from the viewer utility layer

#### Parameters

##### constraint

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraint`](PhysicsConstraint.md)\>

the constraint to hide

#### Returns

`void`

***

### hideImpostor()

> **hideImpostor**(`impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L443)

Hides an impostor from the scene.

#### Parameters

##### impostor

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

The impostor to hide.

This method is useful for hiding an impostor from the scene. It removes the
impostor from the utility layer scene, disposes the mesh, and removes the
impostor from the list of impostors. If the impostor is the last one in the
list, it also unregisters the render function.

#### Returns

`void`

***

### hideInertia()

> **hideInertia**(`body`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:542](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L542)

Hides a body's inertia from the viewer utility layer

#### Parameters

##### body

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsBody`](PhysicsBody.md)\>

the body to hide

#### Returns

`boolean`

true if inertia actually removed

***

### showBody()

> **showBody**(`body`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L342)

Shows a debug mesh for a given physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to show.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

The debug mesh, or null if the body is already shown.

This function is useful for visualizing the physics body in the scene.
It creates a debug mesh for the given body and adds it to the scene.
It also registers a before render function to update the debug mesh position and rotation.

***

### showConstraint()

> **showConstraint**(`constraint`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L407)

Shows a debug mesh for a given physics constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

the physics constraint to show

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the debug mesh, or null if the constraint is already shown

***

### showImpostor()

> **showImpostor**(`impostor`, `targetMesh?`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L305)

Renders a specified physic impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

defines the impostor to render

##### targetMesh?

[`Mesh`](Mesh.md)

defines the mesh represented by the impostor

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the new debug mesh used to render the impostor

***

### showInertia()

> **showInertia**(`body`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/physicsViewer.ts:375](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/physicsViewer.ts#L375)

Shows a debug box corresponding to the inertia of a given body

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

the physics body used to get the inertia

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the debug mesh used to show the inertia, or null if the body is already shown
