[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsImpostor

# Class: PhysicsImpostor

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L197)

Represents a physics imposter

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Constructors

### Constructor

> **new PhysicsImpostor**(`object`, `type`, `_options?`, `_scene?`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L431)

Initializes the physics imposter

#### Parameters

##### object

[`IPhysicsEnabledObject`](../interfaces/IPhysicsEnabledObject.md)

The physics-enabled object used as the physics imposter

##### type

`number`

The type of the physics imposter. Types are available as static members of this class.

##### \_options?

[`PhysicsImpostorParameters`](../interfaces/PhysicsImpostorParameters.md) = `...`

The options for the physics imposter

##### \_scene?

[`Scene`](Scene.md)

The Babylon scene

#### Returns

`PhysicsImpostor`

## Properties

### object

> **object**: [`IPhysicsEnabledObject`](../interfaces/IPhysicsEnabledObject.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:435](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L435)

The physics-enabled object used as the physics imposter

***

### onCollideEvent

> **onCollideEvent**: [`Nullable`](../type-aliases/Nullable.md)\<(`collider`, `collidedWith`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:906](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L906)

Legacy collision detection event support

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L439)

The type of the physics imposter

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L407)

The unique id of the physics imposter
set by the physics engine when adding this impostor to the array

***

### BoxImpostor

> `static` **BoxImpostor**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1254)

Box-Imposter type

***

### CapsuleImpostor

> `static` **CapsuleImpostor**: `number` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1266)

Capsule-Impostor type (Ammo.js plugin only)

***

### ClothImpostor

> `static` **ClothImpostor**: `number` = `102`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1294)

Cloth-Imposter type

***

### ConvexHullImpostor

> `static` **ConvexHullImpostor**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1282)

ConvexHull-Impostor type (Ammo.js plugin only)

***

### CustomImpostor

> `static` **CustomImpostor**: `number` = `100`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1286](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1286)

Custom-Imposter type (Ammo.js plugin only)

***

### CylinderImpostor

> `static` **CylinderImpostor**: `number` = `7`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1270)

Cylinder-Imposter type

***

### DEFAULT\_OBJECT\_SIZE

> `static` **DEFAULT\_OBJECT\_SIZE**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L201)

The default object size of the imposter

***

### HeightmapImpostor

> `static` **HeightmapImpostor**: `number` = `9`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1278)

Heightmap-Imposter type

***

### IDENTITY\_QUATERNION

> `static` **IDENTITY\_QUATERNION**: [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L206)

The identity quaternion of the imposter

***

### MeshImpostor

> `static` **MeshImpostor**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1262)

Mesh-imposter type (Only available to objects with vertices data)

***

### NoImpostor

> `static` **NoImpostor**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1246)

No-Imposter type

***

### ParticleImpostor

> `static` **ParticleImpostor**: `number` = `8`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1274)

Particle-Imposter type

***

### PlaneImpostor

> `static` **PlaneImpostor**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1258)

Plane-Imposter type

***

### RopeImpostor

> `static` **RopeImpostor**: `number` = `101`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1290)

Rope-Imposter type

***

### SoftbodyImpostor

> `static` **SoftbodyImpostor**: `number` = `103`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1298)

Softbody-Imposter type

***

### SphereImpostor

> `static` **SphereImpostor**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1250)

Sphere-Imposter type

## Accessors

### friction

#### Get Signature

> **get** **friction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L260)

Gets the coefficient of friction

##### Returns

`number`

#### Set Signature

> **set** **friction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L267)

Sets the coefficient of friction

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L242)

Specifies if the physics imposter is disposed

##### Returns

`boolean`

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:249](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L249)

Gets the mass of the physics imposter

##### Returns

`number`

#### Set Signature

> **set** **mass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L253)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsImpostor`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L573)

Get the parent of the physics imposter

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsImpostor`\>

Physics imposter or null

#### Set Signature

> **set** **parent**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:580](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L580)

Sets the parent of the physics imposter

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsImpostor`\>

##### Returns

`void`

***

### physicsBody

#### Get Signature

> **get** **physicsBody**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L565)

Gets the body that holds this impostor. Either its own, or its parent.

##### Returns

`any`

#### Set Signature

> **set** **physicsBody**(`physicsBody`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:587](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L587)

Set the physics body. Used mainly by the physics engine/plugin

##### Parameters

###### physicsBody

`any`

##### Returns

`void`

***

### positionIterations

#### Get Signature

> **get** **positionIterations**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L378)

Gets the positionIterations of a soft body; only supported by the AmmoJSPlugin

##### Returns

`number`

#### Set Signature

> **set** **positionIterations**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L392)

Sets the positionIterations of a soft body; only supported by the AmmoJSPlugin

##### Parameters

###### value

`number`

##### Returns

`void`

***

### pressure

#### Get Signature

> **get** **pressure**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L294)

Gets the pressure of a soft body; only supported by the AmmoJSPlugin

##### Returns

`number`

#### Set Signature

> **set** **pressure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L308)

Sets the pressure of a soft body; only supported by the AmmoJSPlugin

##### Parameters

###### value

`number`

##### Returns

`void`

***

### restitution

#### Get Signature

> **get** **restitution**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L277)

Gets the coefficient of restitution

##### Returns

`number`

#### Set Signature

> **set** **restitution**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L284)

Sets the coefficient of restitution

##### Parameters

###### value

`number`

##### Returns

`void`

***

### stiffness

#### Get Signature

> **get** **stiffness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L322)

Gets the stiffness of a soft body; only supported by the AmmoJSPlugin

##### Returns

`number`

#### Set Signature

> **set** **stiffness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L336)

Sets the stiffness of a soft body; only supported by the AmmoJSPlugin

##### Parameters

###### value

`number`

##### Returns

`void`

***

### velocityIterations

#### Get Signature

> **get** **velocityIterations**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L350)

Gets the velocityIterations of a soft body; only supported by the AmmoJSPlugin

##### Returns

`number`

#### Set Signature

> **set** **velocityIterations**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L364)

Sets the velocityIterations of a soft body; only supported by the AmmoJSPlugin

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addAnchor()

> **addAnchor**(`otherImpostor`, `width`, `height`, `influence`, `noCollisionBetweenLinkedBodies`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1005](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1005)

Add an anchor to a cloth impostor

#### Parameters

##### otherImpostor

`PhysicsImpostor`

rigid impostor to anchor to

##### width

`number`

ratio across width from 0 to 1

##### height

`number`

ratio up height from 0 to 1

##### influence

`number`

the elasticity between cloth impostor and anchor from 0, very stretchy to 1, little stretch

##### noCollisionBetweenLinkedBodies

`boolean`

when true collisions between cloth impostor and anchor are ignored; default false

#### Returns

`PhysicsImpostor`

impostor the soft imposter

***

### addHook()

> **addHook**(`otherImpostor`, `length`, `influence`, `noCollisionBetweenLinkedBodies`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1027](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1027)

Add a hook to a rope impostor

#### Parameters

##### otherImpostor

`PhysicsImpostor`

rigid impostor to anchor to

##### length

`number`

ratio across rope from 0 to 1

##### influence

`number`

the elasticity between rope impostor and anchor from 0, very stretchy to 1, little stretch

##### noCollisionBetweenLinkedBodies

`boolean`

when true collisions between soft impostor and anchor are ignored; default false

#### Returns

`PhysicsImpostor`

impostor the rope imposter

***

### addJoint()

> **addJoint**(`otherImpostor`, `joint`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:983](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L983)

Add a joint to this impostor with a different impostor

#### Parameters

##### otherImpostor

`PhysicsImpostor`

A physics imposter used to add a joint

##### joint

[`PhysicsJoint`](PhysicsJoint.md)

The joint to add

#### Returns

`PhysicsImpostor`

The physics imposter

***

### afterStep()

> **afterStep**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:873](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L873)

this function is executed by the physics engine

#### Returns

`void`

***

### applyForce()

> **applyForce**(`force`, `contactPoint`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:942](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L942)

Apply a force

#### Parameters

##### force

[`Vector3`](Vector3.md)

The force to apply

##### contactPoint

[`Vector3`](Vector3.md)

The contact point for the force

#### Returns

`PhysicsImpostor`

The physics imposter

***

### applyImpulse()

> **applyImpulse**(`force`, `contactPoint`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:955](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L955)

Apply an impulse

#### Parameters

##### force

[`Vector3`](Vector3.md)

The impulse force

##### contactPoint

[`Vector3`](Vector3.md)

The contact point for the impulse force

#### Returns

`PhysicsImpostor`

The physics imposter

***

### beforeStep()

> **beforeStep**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:843](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L843)

this function is executed by the physics engine.

#### Returns

`void`

***

### clone()

> **clone**(`newObject`): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsImpostor`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1070](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1070)

Clones the physics imposter

#### Parameters

##### newObject

[`IPhysicsEnabledObject`](../interfaces/IPhysicsEnabledObject.md)

The physics imposter clones to this physics-enabled object

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsImpostor`\>

A nullable physics imposter

***

### createJoint()

> **createJoint**(`otherImpostor`, `jointType`, `jointData`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:970](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L970)

A help function to create a joint

#### Parameters

##### otherImpostor

`PhysicsImpostor`

A physics imposter used to create a joint

##### jointType

`number`

The type of joint

##### jointData

[`PhysicsJointData`](../interfaces/PhysicsJointData.md)

The data for the joint

#### Returns

`PhysicsImpostor`

The physics imposter

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1080](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1080)

Disposes the physics imposter

#### Returns

`void`

***

### executeNativeFunction()

> **executeNativeFunction**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:721](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L721)

Execute a function with the physics plugin native code
Provide a function the will have two variables - the world object and the physics body object

#### Parameters

##### func

(`world`, `physicsBody`) => `void`

The function to execute with the physics plugin native code

#### Returns

`void`

***

### forceUpdate()

> **forceUpdate**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L551)

Force a regeneration of this or the parent's impostor's body.
Use with caution - This will remove all previously-instantiated joints.

#### Returns

`void`

***

### getAngularVelocity()

> **getAngularVelocity**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:702](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L702)

Gets the angular velocity

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

angular velocity or null

***

### getBoxSizeToRef()

> **getBoxSizeToRef**(`result`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1125)

Gets the box size of the physics imposter and stores the result in the input parameter

#### Parameters

##### result

[`Vector3`](Vector3.md)

Stores the box size

#### Returns

`PhysicsImpostor`

The physics imposter

***

### getLinearVelocity()

> **getLinearVelocity**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:684](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L684)

Gets the linear velocity

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

linear velocity or null

***

### getObjectCenter()

> **getObjectCenter**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:639](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L639)

Gets the object center

#### Returns

[`Vector3`](Vector3.md)

The object center

***

### getObjectExtents()

> **getObjectExtents**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:606](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L606)

Gets the object extents

#### Returns

[`Vector3`](Vector3.md)

the object extents

***

### getParam()

> **getParam**(`paramName`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:653](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L653)

Get a specific parameter from the options parameters

#### Parameters

##### paramName

`string`

The object parameter name

#### Returns

`any`

The object parameter

***

### getParentsRotation()

> **getParentsRotation**(): [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:825](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L825)

Get the parent rotation

#### Returns

[`Quaternion`](Quaternion.md)

The parent rotation

***

### getRadius()

> **getRadius**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1137)

Gets the radius of the physics imposter

#### Returns

`number`

Radius of the physics imposter

***

### isBodyInitRequired()

> **isBodyInitRequired**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L536)

Should a new body be generated.

#### Returns

`boolean`

boolean specifying if body initialization is required

***

### onCollide()

> **onCollide**(`e`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:912](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L912)

define an onCollide function to call when this impostor collides against a different body

#### Parameters

##### e

collide event data

###### body

`any`

###### distance

`number`

###### impulse

`number`

###### normal

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

###### point

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

#### Returns

`void`

***

### registerAfterPhysicsStep()

> **registerAfterPhysicsStep**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:753](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L753)

Register a function that will be executed after the physics step

#### Parameters

##### func

(`impostor`) => `void`

The function to execute after physics step

#### Returns

`void`

***

### registerBeforePhysicsStep()

> **registerBeforePhysicsStep**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:731](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L731)

Register a function that will be executed before the physics world is stepping forward

#### Parameters

##### func

(`impostor`) => `void`

The function to execute before the physics world is stepped forward

#### Returns

`void`

***

### registerOnPhysicsCollide()

> **registerOnPhysicsCollide**(`collideAgainst`, `func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:776](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L776)

register a function that will be executed when this impostor collides against a different body

#### Parameters

##### collideAgainst

`PhysicsImpostor` \| `PhysicsImpostor`[]

Physics imposter, or array of physics imposters to collide against

##### func

(`collider`, `collidedAgainst`, `point`) => `void`

Callback that is executed on collision

#### Returns

`void`

***

### resetUpdateFlags()

> **resetUpdateFlags**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L598)

Resets the update flags

#### Returns

`void`

***

### setAngularVelocity()

> **setAngularVelocity**(`velocity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:710](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L710)

Sets the angular velocity

#### Parameters

##### velocity

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

The velocity or null

#### Returns

`void`

***

### setDeltaPosition()

> **setDeltaPosition**(`position`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1104)

Sets the delta position

#### Parameters

##### position

[`Vector3`](Vector3.md)

The delta position amount

#### Returns

`void`

***

### setDeltaRotation()

> **setDeltaRotation**(`rotation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1112)

Sets the delta rotation

#### Parameters

##### rotation

[`Quaternion`](Quaternion.md)

The delta rotation amount

#### Returns

`void`

***

### setLinearVelocity()

> **setLinearVelocity**(`velocity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L692)

Sets the linear velocity

#### Parameters

##### velocity

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

linear velocity or null

#### Returns

`void`

***

### setMass()

> **setMass**(`mass`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:671](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L671)

Specifically change the body's mass. Won't recreate the physics body object

#### Parameters

##### mass

`number`

The mass of the physics imposter

#### Returns

`void`

***

### setParam()

> **setParam**(`paramName`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:662](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L662)

Sets a specific parameter in the options given to the physics plugin

#### Parameters

##### paramName

`string`

The parameter name

##### value

`number`

The value of the parameter

#### Returns

`void`

***

### setScalingUpdated()

> **setScalingUpdated**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:543](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L543)

Sets the updated scaling

#### Returns

`void`

***

### sleep()

> **sleep**(): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1045](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1045)

Will keep this body still, in a sleep mode.

#### Returns

`PhysicsImpostor`

the physics imposter

***

### syncBoneWithImpostor()

> **syncBoneWithImpostor**(`bone`, `boneMesh`, `jointPivot`, `distToJoint?`, `adjustRotation?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1149)

Sync a bone with this impostor

#### Parameters

##### bone

[`Bone`](Bone.md)

The bone to sync to the impostor.

##### boneMesh

[`AbstractMesh`](AbstractMesh.md)

The mesh that the bone is influencing.

##### jointPivot

[`Vector3`](Vector3.md)

The pivot of the joint / bone in local space.

##### distToJoint?

`number`

Optional distance from the impostor to the joint.

##### adjustRotation?

[`Quaternion`](Quaternion.md)

Optional quaternion for adjusting the local rotation of the bone.

#### Returns

`void`

***

### syncImpostorWithBone()

> **syncImpostorWithBone**(`bone`, `boneMesh`, `jointPivot`, `distToJoint?`, `adjustRotation?`, `boneAxis?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1203)

Sync impostor to a bone

#### Parameters

##### bone

[`Bone`](Bone.md)

The bone that the impostor will be synced to.

##### boneMesh

[`AbstractMesh`](AbstractMesh.md)

The mesh that the bone is influencing.

##### jointPivot

[`Vector3`](Vector3.md)

The pivot of the joint / bone in local space.

##### distToJoint?

`number`

Optional distance from the impostor to the joint.

##### adjustRotation?

[`Quaternion`](Quaternion.md)

Optional quaternion for adjusting the local rotation of the bone.

##### boneAxis?

[`Vector3`](Vector3.md)

Optional vector3 axis the bone is aligned with

#### Returns

`void`

***

### unregisterAfterPhysicsStep()

> **unregisterAfterPhysicsStep**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:761](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L761)

Unregisters a function that will be executed after the physics step

#### Parameters

##### func

(`impostor`) => `void`

The function to execute after physics step

#### Returns

`void`

***

### unregisterBeforePhysicsStep()

> **unregisterBeforePhysicsStep**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:739](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L739)

Unregister a function that will be executed before the physics world is stepping forward

#### Parameters

##### func

(`impostor`) => `void`

The function to execute before the physics world is stepped forward

#### Returns

`void`

***

### unregisterOnPhysicsCollide()

> **unregisterOnPhysicsCollide**(`collideAgainst`, `func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:789](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L789)

Unregisters the physics imposter's collision callback

#### Parameters

##### collideAgainst

`PhysicsImpostor` \| `PhysicsImpostor`[]

The physics object to collide against

##### func

(`collider`, `collidedAgainst`, `point`) => `void`

Callback to execute on collision

#### Returns

`void`

***

### wakeUp()

> **wakeUp**(): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts:1057](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v1/physicsImpostor.pure.ts#L1057)

Wake the body up.

#### Returns

`PhysicsImpostor`

The physics imposter
