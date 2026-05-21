[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsEngine

# Class: PhysicsEngine

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L14)

Class used to control physics engine

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Implements

- `IPhysicsEngine`

## Constructors

### Constructor

> **new PhysicsEngine**(`gravity`, `_physicsPlugin?`): `PhysicsEngine`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L49)

Creates a new Physics Engine

#### Parameters

##### gravity

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

defines the gravity vector used by the simulation

##### \_physicsPlugin?

`IPhysicsEnginePlugin` = `...`

defines the plugin to use (CannonJS by default)

#### Returns

`PhysicsEngine`

## Properties

### gravity

> **gravity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L26)

Gets the gravity vector used by the simulation

#### Implementation of

`IPhysicsEngine.gravity`

## Methods

### \_step()

> **\_step**(`delta`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L192)

Called by the scene. No need to call it.

#### Parameters

##### delta

`number`

defines the timespan between frames

#### Returns

`void`

#### Implementation of

`IPhysicsEngine._step`

***

### addImpostor()

> **addImpostor**(`impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L130)

Adding a new impostor for the impostor tracking.
This will be done by the impostor itself.

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

the impostor to add

#### Returns

`void`

***

### addJoint()

> **addJoint**(`mainImpostor`, `connectedImpostor`, `joint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L161)

Add a joint to the physics engine

#### Parameters

##### mainImpostor

[`PhysicsImpostor`](PhysicsImpostor.md)

defines the main impostor to which the joint is added.

##### connectedImpostor

[`PhysicsImpostor`](PhysicsImpostor.md)

defines the impostor that is connected to the main impostor using this joint

##### joint

[`PhysicsJoint`](PhysicsJoint.md)

defines the joint that will connect both impostors.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L110)

Release all resources

#### Returns

`void`

#### Implementation of

`IPhysicsEngine.dispose`

***

### getImpostorForPhysicsObject()

> **getImpostorForPhysicsObject**(`object`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L230)

Gets the impostor for a physics enabled object

#### Parameters

##### object

[`IPhysicsEnabledObject`](../interfaces/IPhysicsEnabledObject.md)

defines the object impersonated by the impostor

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

the PhysicsImpostor or null if not found

***

### getImpostors()

> **getImpostors**(): [`PhysicsImpostor`](PhysicsImpostor.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L221)

Gets the list of physic impostors

#### Returns

[`PhysicsImpostor`](PhysicsImpostor.md)[]

an array of PhysicsImpostor

***

### getImpostorWithPhysicsBody()

> **getImpostorWithPhysicsBody**(`body`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L245)

Gets the impostor for a physics body object

#### Parameters

##### body

`any`

defines physics body used by the impostor

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsImpostor`](PhysicsImpostor.md)\>

the PhysicsImpostor or null if not found

***

### getPhysicsPlugin()

> **getPhysicsPlugin**(): `IPhysicsEnginePlugin`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L213)

Gets the current plugin used to run the simulation

#### Returns

`IPhysicsEnginePlugin`

current plugin

#### Implementation of

`IPhysicsEngine.getPhysicsPlugin`

***

### getPhysicsPluginName()

> **getPhysicsPluginName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L121)

Gets the name of the current physics plugin

#### Returns

`string`

the name of the plugin

#### Implementation of

`IPhysicsEngine.getPhysicsPluginName`

***

### getPluginVersion()

> **getPluginVersion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L32)

#### Returns

`number`

version

#### Implementation of

`IPhysicsEngine.getPluginVersion`

***

### getSubTimeStep()

> **getSubTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L103)

Get the sub time step of the physics engine.

#### Returns

`number`

the current sub time step

#### Implementation of

`IPhysicsEngine.getSubTimeStep`

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L85)

Get the time step of the physics engine.

#### Returns

`number`

the current time step

#### Implementation of

`IPhysicsEngine.getTimeStep`

***

### raycast()

> **raycast**(`from`, `to`): [`PhysicsRaycastResult`](PhysicsRaycastResult.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L261)

Does a raycast in the physics world

#### Parameters

##### from

[`Vector3`](Vector3.md)

when should the ray start?

##### to

[`Vector3`](Vector3.md)

when should the ray end?

#### Returns

[`PhysicsRaycastResult`](PhysicsRaycastResult.md)

PhysicsRaycastResult

#### Implementation of

`IPhysicsEngine.raycast`

***

### raycastToRef()

> **raycastToRef**(`from`, `to`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L272)

Does a raycast in the physics world

#### Parameters

##### from

[`Vector3`](Vector3.md)

when should the ray start?

##### to

[`Vector3`](Vector3.md)

when should the ray end?

##### result

[`PhysicsRaycastResult`](PhysicsRaycastResult.md)

resulting PhysicsRaycastResult

#### Returns

`void`

true if the ray hits an impostor, else false

***

### removeImpostor()

> **removeImpostor**(`impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L144)

Remove an impostor from the engine.
This impostor and its mesh will not longer be updated by the physics engine.

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

the impostor to remove

#### Returns

`void`

***

### removeJoint()

> **removeJoint**(`mainImpostor`, `connectedImpostor`, `joint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L178)

Removes a joint from the simulation

#### Parameters

##### mainImpostor

[`PhysicsImpostor`](PhysicsImpostor.md)

defines the impostor used with the joint

##### connectedImpostor

[`PhysicsImpostor`](PhysicsImpostor.md)

defines the other impostor connected to the main one by the joint

##### joint

[`PhysicsJoint`](PhysicsJoint.md)

defines the joint to remove

#### Returns

`void`

***

### setGravity()

> **setGravity**(`gravity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L65)

Sets the gravity vector used by the simulation

#### Parameters

##### gravity

[`Vector3`](Vector3.md)

defines the gravity vector to use

#### Returns

`void`

#### Implementation of

`IPhysicsEngine.setGravity`

***

### setSubTimeStep()

> **setSubTimeStep**(`subTimeStep?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L95)

Set the sub time step of the physics engine.
Default is 0 meaning there is no sub steps
To increase physics resolution precision, set a small value (like 1 ms)

#### Parameters

##### subTimeStep?

`number` = `0`

defines the new sub timestep used for physics resolution.

#### Returns

`void`

#### Implementation of

`IPhysicsEngine.setSubTimeStep`

***

### setTimeStep()

> **setTimeStep**(`newTimeStep?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L77)

Set the time step of the physics engine.
Default is 1/60.
To slow it down, enter 1/600 for example.
To speed it up, 1/30

#### Parameters

##### newTimeStep?

`number` = `...`

defines the new timestep to apply to this world.

#### Returns

`void`

#### Implementation of

`IPhysicsEngine.setTimeStep`

***

### DefaultPluginFactory()

> `static` **DefaultPluginFactory**(): `IPhysicsEnginePlugin`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsEngine.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsEngine.ts#L40)

Factory used to create the default physics plugin.

#### Returns

`IPhysicsEnginePlugin`

The default physics plugin
