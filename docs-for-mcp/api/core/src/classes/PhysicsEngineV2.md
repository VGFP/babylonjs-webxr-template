[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsEngineV2

# Class: PhysicsEngineV2

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L13)

Class used to control physics engine

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Implements

- `IPhysicsEngine`

## Constructors

### Constructor

> **new PhysicsEngineV2**(`gravity`, `_physicsPlugin?`): `PhysicsEngine`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L44)

Creates a new Physics Engine

#### Parameters

##### gravity

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

defines the gravity vector used by the simulation

##### \_physicsPlugin?

`IPhysicsEnginePluginV2` = `...`

defines the plugin to use (CannonJS by default)

#### Returns

`PhysicsEngine`

## Properties

### gravity

> **gravity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L21)

Gets the gravity vector used by the simulation

#### Implementation of

`IPhysicsEngine.gravity`

## Methods

### \_step()

> **\_step**(`delta`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L142)

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

### addBody()

> **addBody**(`physicsBody`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L156)

Add a body as an active component of this engine

#### Parameters

##### physicsBody

[`PhysicsBody`](PhysicsBody.md)

The body to add

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L103)

Release all resources

#### Returns

`void`

#### Implementation of

`IPhysicsEngine.dispose`

***

### getBodies()

> **getBodies**(): [`PhysicsBody`](PhysicsBody.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L172)

#### Returns

[`PhysicsBody`](PhysicsBody.md)[]

an array of bodies added to this engine

***

### getMaxAngularVelocity()

> **getMaxAngularVelocity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L134)

#### Returns

`number`

maximum allowed angular velocity

***

### getMaxLinearVelocity()

> **getMaxLinearVelocity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L127)

#### Returns

`number`

maximum allowed linear velocity

***

### getPhysicsPlugin()

> **getPhysicsPlugin**(): `IPhysicsEnginePluginV2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L180)

Gets the current plugin used to run the simulation

#### Returns

`IPhysicsEnginePluginV2`

current plugin

#### Implementation of

`IPhysicsEngine.getPhysicsPlugin`

***

### getPhysicsPluginName()

> **getPhysicsPluginName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L111)

Gets the name of the current physics plugin

#### Returns

`string`

the name of the plugin

#### Implementation of

`IPhysicsEngine.getPhysicsPluginName`

***

### getPluginVersion()

> **getPluginVersion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L27)

#### Returns

`number`

physics plugin version

#### Implementation of

`IPhysicsEngine.getPluginVersion`

***

### getSubTimeStep()

> **getSubTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L96)

Get the sub time step of the physics engine.

#### Returns

`number`

the current sub time step

#### Implementation of

`IPhysicsEngine.getSubTimeStep`

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L78)

Get the time step of the physics engine.

#### Returns

`number`

the current time step

#### Implementation of

`IPhysicsEngine.getTimeStep`

***

### raycast()

> **raycast**(`from`, `to`, `query?`): [`PhysicsRaycastResult`](PhysicsRaycastResult.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L204)

Does a raycast in the physics world

#### Parameters

##### from

[`Vector3`](Vector3.md)

when should the ray start?

##### to

[`Vector3`](Vector3.md)

when should the ray end?

##### query?

[`IRaycastQuery`](../interfaces/IRaycastQuery.md)

raycast query object

#### Returns

[`PhysicsRaycastResult`](PhysicsRaycastResult.md)

PhysicsRaycastResult

#### Implementation of

`IPhysicsEngine.raycast`

***

### raycastMulti()

> **raycastMulti**(`from`, `to`, `query?`): [`PhysicsRaycastResult`](PhysicsRaycastResult.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L217)

Does a raycast through multiple objects in the physics world

#### Parameters

##### from

[`Vector3`](Vector3.md)

when should the ray start?

##### to

[`Vector3`](Vector3.md)

when should the ray end?

##### query?

[`IRaycastQuery`](../interfaces/IRaycastQuery.md)

raycast query object

#### Returns

[`PhysicsRaycastResult`](PhysicsRaycastResult.md)[]

array of PhysicsRaycastResult

***

### raycastToRef()

> **raycastToRef**(`from`, `to`, `result`, `query?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L193)

Does a raycast in the physics world

#### Parameters

##### from

[`Vector3`](Vector3.md)

when should the ray start?

##### to

[`Vector3`](Vector3.md)

when should the ray end?

##### result

[`PhysicsRaycastResult`](PhysicsRaycastResult.md) \| [`PhysicsRaycastResult`](PhysicsRaycastResult.md)[]

resulting PhysicsRaycastResult or array of PhysicsRaycastResults

##### query?

[`IRaycastQuery`](../interfaces/IRaycastQuery.md)

raycast query object
If result is an empty array, it will be populated with every detected raycast hit.
If result is a populated array, it will only fill the PhysicsRaycastResults present in the array.

#### Returns

`void`

***

### removeBody()

> **removeBody**(`physicsBody`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L163)

Removes a particular body from this engine

#### Parameters

##### physicsBody

[`PhysicsBody`](PhysicsBody.md)

The body to remove from the simulation

#### Returns

`void`

***

### setGravity()

> **setGravity**(`gravity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L57)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L88)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L70)

Set the time step of the physics engine.
Default is 1/60.
To slow it down, enter 1/600 for example.
To speed it up, 1/30
Unit is seconds.

#### Parameters

##### newTimeStep?

`number` = `...`

defines the new timestep to apply to this world.

#### Returns

`void`

#### Implementation of

`IPhysicsEngine.setTimeStep`

***

### setVelocityLimits()

> **setVelocityLimits**(`maxLinearVelocity`, `maxAngularVelocity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L120)

Set the maximum allowed linear and angular velocities

#### Parameters

##### maxLinearVelocity

`number`

maximum allowed linear velocity

##### maxAngularVelocity

`number`

maximum allowed angular velocity

#### Returns

`void`

***

### DefaultPluginFactory()

> `static` **DefaultPluginFactory**(): `IPhysicsEnginePluginV2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsEngine.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsEngine.ts#L35)

Factory used to create the default physics plugin.

#### Returns

`IPhysicsEnginePluginV2`

The default physics plugin
