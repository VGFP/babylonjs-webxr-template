[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AmmoJSPlugin

# Class: AmmoJSPlugin

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L26)

AmmoJS Physics plugin

## See

 - https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine
 - https://github.com/kripken/ammo.js/

## Constructors

### Constructor

> **new AmmoJSPlugin**(`_useDeltaForWorldStep?`, `ammoInjection?`, `overlappingPairCache?`): `AmmoJSPlugin`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L78)

Initializes the ammoJS plugin

#### Parameters

##### \_useDeltaForWorldStep?

`boolean` = `true`

if the time between frames should be used when calculating physics steps (Default: true)

##### ammoInjection?

`any` = `Ammo`

can be used to inject your own ammo reference

##### overlappingPairCache?

`any` = `null`

can be used to specify your own overlapping pair cache

#### Returns

`AmmoJSPlugin`

## Properties

### bjsAMMO

> **bjsAMMO**: `any` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L31)

Reference to the Ammo library

***

### name

> **name**: `string` = `"AmmoJSPlugin"`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L39)

Name of the plugin

#### Implementation of

`IPhysicsEnginePlugin.name`

***

### onCreateCustomConvexHullImpostor

> **onCreateCustomConvexHullImpostor**: (`impostor`) => `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L194)

The create custom convex hull impostor handler function to support building custom convex hull impostor vertex data

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

#### Returns

`any`

***

### onCreateCustomMeshImpostor

> **onCreateCustomMeshImpostor**: (`impostor`) => `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L189)

The create custom mesh impostor handler function to support building custom mesh impostor vertex data

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

#### Returns

`any`

***

### onCreateCustomShape

> **onCreateCustomShape**: (`impostor`) => `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L184)

The create custom shape handler function to be called when using BABYLON.PhysicsImposter.CustomImpostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

#### Returns

`any`

***

### world

> **world**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L35)

Created ammoJS world which physics bodies are added to

#### Implementation of

`IPhysicsEnginePlugin.world`

## Methods

### appendAnchor()

> **appendAnchor**(`impostor`, `otherImpostor`, `width`, `height`, `influence?`, `noCollisionBetweenLinkedBodies?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1485](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1485)

Append an anchor to a cloth object

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

is the cloth impostor to add anchor to

##### otherImpostor

[`PhysicsImpostor`](PhysicsImpostor.md)

is the rigid impostor to anchor to

##### width

`number`

ratio across width from 0 to 1

##### height

`number`

ratio up height from 0 to 1

##### influence?

`number` = `1`

the elasticity between cloth impostor and anchor from 0, very stretchy to 1, little stretch

##### noCollisionBetweenLinkedBodies?

`boolean` = `false`

when true collisions between soft impostor and anchor are ignored; default false

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.appendAnchor`

***

### appendHook()

> **appendHook**(`impostor`, `otherImpostor`, `length`, `influence?`, `noCollisionBetweenLinkedBodies?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1509](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1509)

Append an hook to a rope object

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

is the rope impostor to add hook to

##### otherImpostor

[`PhysicsImpostor`](PhysicsImpostor.md)

is the rigid impostor to hook to

##### length

`number`

ratio along the rope from 0 to 1

##### influence?

`number` = `1`

the elasticity between soft impostor and anchor from 0, very stretchy to 1, little stretch

##### noCollisionBetweenLinkedBodies?

`boolean` = `false`

when true collisions between soft impostor and anchor are ignored; default false

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.appendHook`

***

### applyForce()

> **applyForce**(`impostor`, `force`, `contactPoint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L416)

Applies a force on the imposter

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to apply force

##### force

[`Vector3`](Vector3.md)

amount of force to be applied to the imposter

##### contactPoint

[`Vector3`](Vector3.md)

the location to apply the force on the imposter

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.applyForce`

***

### applyImpulse()

> **applyImpulse**(`impostor`, `force`, `contactPoint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L390)

Applies an impulse on the imposter

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to apply impulse to

##### force

[`Vector3`](Vector3.md)

amount of force to be applied to the imposter

##### contactPoint

[`Vector3`](Vector3.md)

the location to apply the impulse on the imposter

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.applyImpulse`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1601)

Disposes of the impostor

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.dispose`

***

### executeStep()

> **executeStep**(`delta`, `impostors`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L241)

Moves the physics simulation forward delta seconds and updates the given physics imposters
Prior to the step the imposters physics location is set to the position of the babylon meshes
After the step the babylon meshes are set to the position of the physics imposters

#### Parameters

##### delta

`number`

amount of time to step forward

##### impostors

[`PhysicsImpostor`](PhysicsImpostor.md)[]

array of imposters to update before/after the step

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.executeStep`

***

### generateJoint()

> **generateJoint**(`impostorJoint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L558)

Generates a joint

#### Parameters

##### impostorJoint

[`PhysicsImpostorJoint`](../interfaces/PhysicsImpostorJoint.md)

the imposter joint to create the joint with

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.generateJoint`

***

### generatePhysicsBody()

> **generatePhysicsBody**(`impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:442](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L442)

Creates a physics body using the plugin

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

the imposter to create the physics body on

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.generatePhysicsBody`

***

### getAngularVelocity()

> **getAngularVelocity**(`impostor`): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1278)

gets the angular velocity

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to get angular velocity from

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

angular velocity

#### Implementation of

`IPhysicsEnginePlugin.getAngularVelocity`

***

### getBodyFriction()

> **getBodyFriction**(`impostor`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1321)

Gets friction of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to get friction from

#### Returns

`number`

friction value

#### Implementation of

`IPhysicsEnginePlugin.getBodyFriction`

***

### getBodyMass()

> **getBodyMass**(`impostor`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1312)

Gets the mass of the physics body

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to get the mass from

#### Returns

`number`

mass

#### Implementation of

`IPhysicsEnginePlugin.getBodyMass`

***

### getBodyPositionIterations()

> **getBodyPositionIterations**(`impostor`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1453](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1453)

Gets positionIterations of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to get position iterations from

#### Returns

`number`

positionIterations value

#### Implementation of

`IPhysicsEnginePlugin.getBodyPositionIterations`

***

### getBodyPressure()

> **getBodyPressure**(`impostor`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1363](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1363)

Gets pressure inside the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to get pressure from

#### Returns

`number`

pressure value

#### Implementation of

`IPhysicsEnginePlugin.getBodyPressure`

***

### getBodyRestitution()

> **getBodyRestitution**(`impostor`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1344)

Gets restitution of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to get restitution from

#### Returns

`number`

restitution value

#### Implementation of

`IPhysicsEnginePlugin.getBodyRestitution`

***

### getBodyStiffness()

> **getBodyStiffness**(`impostor`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1396)

Gets stiffness of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to get stiffness from

#### Returns

`number`

pressure value

#### Implementation of

`IPhysicsEnginePlugin.getBodyStiffness`

***

### getBodyVelocityIterations()

> **getBodyVelocityIterations**(`impostor`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1425)

Gets velocityIterations of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to get velocity iterations from

#### Returns

`number`

velocityIterations value

#### Implementation of

`IPhysicsEnginePlugin.getBodyVelocityIterations`

***

### getBoxSizeToRef()

> **getBoxSizeToRef**(`impostor`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1591)

Gets the box size of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to get box size from

##### result

[`Vector3`](Vector3.md)

the resulting box size

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.getBoxSizeToRef`

***

### getLinearVelocity()

> **getLinearVelocity**(`impostor`): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1258)

gets the linear velocity

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to get linear velocity from

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

linear velocity

#### Implementation of

`IPhysicsEnginePlugin.getLinearVelocity`

***

### getPluginVersion()

> **getPluginVersion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L135)

#### Returns

`number`

plugin version

#### Implementation of

`IPhysicsEnginePlugin.getPluginVersion`

***

### getRadius()

> **getRadius**(`impostor`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1581](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1581)

Gets the radius of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to get radius from

#### Returns

`number`

the radius

#### Implementation of

`IPhysicsEnginePlugin.getRadius`

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L177)

Gets the current timestep (only used if useDeltaForWorldStep is false in the constructor)

#### Returns

`number`

the current timestep in seconds

#### Implementation of

`IPhysicsEnginePlugin.getTimeStep`

***

### isSupported()

> **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1221)

If this plugin is supported

#### Returns

`boolean`

true if its supported

#### Implementation of

`IPhysicsEnginePlugin.isSupported`

***

### raycast()

> **raycast**(`from`, `to`): [`PhysicsRaycastResult`](PhysicsRaycastResult.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1628](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1628)

Does a raycast in the physics world

#### Parameters

##### from

[`Vector3`](Vector3.md)

where should the ray start?

##### to

[`Vector3`](Vector3.md)

where should the ray end?

#### Returns

[`PhysicsRaycastResult`](PhysicsRaycastResult.md)

PhysicsRaycastResult

#### Implementation of

`IPhysicsEnginePlugin.raycast`

***

### raycastToRef()

> **raycastToRef**(`from`, `to`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1638](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1638)

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

#### Implementation of

`IPhysicsEnginePlugin.raycastToRef`

***

### removeJoint()

> **removeJoint**(`impostorJoint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:650](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L650)

Removes a joint

#### Parameters

##### impostorJoint

[`PhysicsImpostorJoint`](../interfaces/PhysicsImpostorJoint.md)

the imposter joint to remove the joint from

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.removeJoint`

***

### removePhysicsBody()

> **removePhysicsBody**(`impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L537)

Removes the physics body from the imposter and disposes of the body's memory

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to remove the physics body from

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.removePhysicsBody`

***

### setAngularVelocity()

> **setAngularVelocity**(`impostor`, `velocity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1244)

Sets the angular velocity of the physics body

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to set the velocity on

##### velocity

[`Vector3`](Vector3.md)

velocity to set

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setAngularVelocity`

***

### setBodyFriction()

> **setBodyFriction**(`impostor`, `friction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1330)

Sets friction of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to set friction on

##### friction

`number`

friction value

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setBodyFriction`

***

### setBodyMass()

> **setBodyMass**(`impostor`, `mass`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1298)

Sets the mass of physics body

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to set the mass on

##### mass

`number`

mass to set

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setBodyMass`

***

### setBodyPositionIterations()

> **setBodyPositionIterations**(`impostor`, `positionIterations`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1466](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1466)

Sets positionIterations of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to set position on

##### positionIterations

`number`

positionIterations value

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setBodyPositionIterations`

***

### setBodyPressure()

> **setBodyPressure**(`impostor`, `pressure`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1377](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1377)

Sets pressure inside a soft body impostor
Cloth and rope must remain 0 pressure

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to set pressure on

##### pressure

`number`

pressure value

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setBodyPressure`

***

### setBodyRestitution()

> **setBodyRestitution**(`impostor`, `restitution`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1353)

Sets restitution of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to set resitution on

##### restitution

`number`

resitution value

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setBodyRestitution`

***

### setBodyStiffness()

> **setBodyStiffness**(`impostor`, `stiffness`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1409)

Sets stiffness of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to set stiffness on

##### stiffness

`number`

stiffness value from 0 to 1

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setBodyStiffness`

***

### setBodyVelocityIterations()

> **setBodyVelocityIterations**(`impostor`, `velocityIterations`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1438](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1438)

Sets velocityIterations of the impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to set velocity iterations on

##### velocityIterations

`number`

velocityIterations value

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setBodyVelocityIterations`

***

### setFixedTimeStep()

> **setFixedTimeStep**(`fixedTimeStep`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L161)

Increment to step forward in the physics engine (If timeStep is set to 1/60 and fixedTimeStep is set to 1/120 the physics engine should run 2 steps per frame) (Default: 1/60)

#### Parameters

##### fixedTimeStep

`number`

fixedTimeStep to use in seconds

#### Returns

`void`

***

### setGravity()

> **setGravity**(`gravity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L143)

Sets the gravity of the physics world (m/(s^2))

#### Parameters

##### gravity

[`Vector3`](Vector3.md)

Gravity to set

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setGravity`

***

### setLimit()

> **setLimit**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1550)

Sets the motors limit

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setLimit`

***

### setLinearVelocity()

> **setLinearVelocity**(`impostor`, `velocity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1230)

Sets the linear velocity of the physics body

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter to set the velocity on

##### velocity

[`Vector3`](Vector3.md)

velocity to set

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setLinearVelocity`

***

### setMaxSteps()

> **setMaxSteps**(`maxSteps`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L169)

Sets the maximum number of steps by the physics engine per frame (Default: 5)

#### Parameters

##### maxSteps

`number`

the maximum number of steps by the physics engine per frame

#### Returns

`void`

***

### setMotor()

> **setMotor**(`joint`, `speed?`, `maxForce?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1543)

Sets a motor on the joint

#### Parameters

##### joint

[`IMotorEnabledJoint`](../interfaces/IMotorEnabledJoint.md)

joint to set motor on

##### speed?

`number`

speed of the motor

##### maxForce?

`number`

maximum force of the motor

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setMotor`

***

### setPhysicsBodyTransformation()

> **setPhysicsBodyTransformation**(`impostor`, `newPosition`, `newRotation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1185)

Sets the babylon object's position/rotation from the physics body's position/rotation

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter containing the physics body and babylon object

##### newPosition

[`Vector3`](Vector3.md)

new position

##### newRotation

[`Quaternion`](Quaternion.md)

new rotation

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setPhysicsBodyTransformation`

***

### setTimeStep()

> **setTimeStep**(`timeStep`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L153)

Amount of time to step forward on each frame (only used if useDeltaForWorldStep is false in the constructor)

#### Parameters

##### timeStep

`number`

timestep to use in seconds

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setTimeStep`

***

### setTransformationFromPhysicsBody()

> **setTransformationFromPhysicsBody**(`impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1155)

Sets the mesh body position/rotation from the babylon impostor

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

imposter containing the physics body and babylon object

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.setTransformationFromPhysicsBody`

***

### sleepBody()

> **sleepBody**(`impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1518](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1518)

Sleeps the physics body and stops it from being active

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to sleep

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.sleepBody`

***

### syncMeshWithImpostor()

> **syncMeshWithImpostor**(`mesh`, `impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1559](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1559)

Syncs the position and rotation of a mesh with the impostor

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

mesh to sync

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to update the mesh with

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.syncMeshWithImpostor`

***

### updateDistanceJoint()

> **updateDistanceJoint**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1533)

Updates the distance parameters of the joint

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.updateDistanceJoint`

***

### wakeUpBody()

> **wakeUpBody**(`impostor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts:1526](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/Plugins/ammoJSPlugin.ts#L1526)

Activates the physics body

#### Parameters

##### impostor

[`PhysicsImpostor`](PhysicsImpostor.md)

impostor to activate

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePlugin.wakeUpBody`
