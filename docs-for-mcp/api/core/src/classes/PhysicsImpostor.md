[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsImpostor

# Class: PhysicsImpostor

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L206)

Represents a physics imposter

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine

## Constructors

### Constructor

> **new PhysicsImpostor**(`object`, `type`, `_options?`, `_scene?`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:440](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L440)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L444)

The physics-enabled object used as the physics imposter

***

### onCollideEvent

> **onCollideEvent**: [`Nullable`](../type-aliases/Nullable.md)\<(`collider`, `collidedWith`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:915](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L915)

Legacy collision detection event support

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:448](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L448)

The type of the physics imposter

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L416)

The unique id of the physics imposter
set by the physics engine when adding this impostor to the array

***

### BoxImpostor

> `static` **BoxImpostor**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1263)

Box-Imposter type

***

### CapsuleImpostor

> `static` **CapsuleImpostor**: `number` = `6`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1275)

Capsule-Impostor type (Ammo.js plugin only)

***

### ClothImpostor

> `static` **ClothImpostor**: `number` = `102`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1303)

Cloth-Imposter type

***

### ConvexHullImpostor

> `static` **ConvexHullImpostor**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1291)

ConvexHull-Impostor type (Ammo.js plugin only)

***

### CustomImpostor

> `static` **CustomImpostor**: `number` = `100`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1295)

Custom-Imposter type (Ammo.js plugin only)

***

### CylinderImpostor

> `static` **CylinderImpostor**: `number` = `7`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1279)

Cylinder-Imposter type

***

### DEFAULT\_OBJECT\_SIZE

> `static` **DEFAULT\_OBJECT\_SIZE**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:210](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L210)

The default object size of the imposter

***

### HeightmapImpostor

> `static` **HeightmapImpostor**: `number` = `9`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1287)

Heightmap-Imposter type

***

### IDENTITY\_QUATERNION

> `static` **IDENTITY\_QUATERNION**: [`Quaternion`](Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L215)

The identity quaternion of the imposter

***

### MeshImpostor

> `static` **MeshImpostor**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1271)

Mesh-imposter type (Only available to objects with vertices data)

***

### NoImpostor

> `static` **NoImpostor**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1255)

No-Imposter type

***

### ParticleImpostor

> `static` **ParticleImpostor**: `number` = `8`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1283)

Particle-Imposter type

***

### PlaneImpostor

> `static` **PlaneImpostor**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1267)

Plane-Imposter type

***

### RopeImpostor

> `static` **RopeImpostor**: `number` = `101`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1299)

Rope-Imposter type

***

### SoftbodyImpostor

> `static` **SoftbodyImpostor**: `number` = `103`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1307)

Softbody-Imposter type

***

### SphereImpostor

> `static` **SphereImpostor**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1259)

Sphere-Imposter type

## Accessors

### friction

#### Get Signature

> **get** **friction**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L269)

Gets the coefficient of friction

##### Returns

`number`

#### Set Signature

> **set** **friction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L276)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L251)

Specifies if the physics imposter is disposed

##### Returns

`boolean`

***

### mass

#### Get Signature

> **get** **mass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:258](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L258)

Gets the mass of the physics imposter

##### Returns

`number`

#### Set Signature

> **set** **mass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L262)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsImpostor`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L582)

Get the parent of the physics imposter

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsImpostor`\>

Physics imposter or null

#### Set Signature

> **set** **parent**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:589](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L589)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:574](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L574)

Gets the body that holds this impostor. Either its own, or its parent.

##### Returns

`any`

#### Set Signature

> **set** **physicsBody**(`physicsBody`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:596](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L596)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L387)

Gets the positionIterations of a soft body; only supported by the AmmoJSPlugin

##### Returns

`number`

#### Set Signature

> **set** **positionIterations**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L401)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L303)

Gets the pressure of a soft body; only supported by the AmmoJSPlugin

##### Returns

`number`

#### Set Signature

> **set** **pressure**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L317)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L286)

Gets the coefficient of restitution

##### Returns

`number`

#### Set Signature

> **set** **restitution**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L293)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L331)

Gets the stiffness of a soft body; only supported by the AmmoJSPlugin

##### Returns

`number`

#### Set Signature

> **set** **stiffness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L345)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L359)

Gets the velocityIterations of a soft body; only supported by the AmmoJSPlugin

##### Returns

`number`

#### Set Signature

> **set** **velocityIterations**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L373)

Sets the velocityIterations of a soft body; only supported by the AmmoJSPlugin

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addAnchor()

> **addAnchor**(`otherImpostor`, `width`, `height`, `influence`, `noCollisionBetweenLinkedBodies`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1014](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1014)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1036](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1036)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:992](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L992)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:882](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L882)

this function is executed by the physics engine

#### Returns

`void`

***

### applyForce()

> **applyForce**(`force`, `contactPoint`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:951](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L951)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:964](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L964)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:852](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L852)

this function is executed by the physics engine.

#### Returns

`void`

***

### clone()

> **clone**(`newObject`): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsImpostor`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1079](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1079)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:979](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L979)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1089](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1089)

Disposes the physics imposter

#### Returns

`void`

***

### executeNativeFunction()

> **executeNativeFunction**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:730](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L730)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:560](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L560)

Force a regeneration of this or the parent's impostor's body.
Use with caution - This will remove all previously-instantiated joints.

#### Returns

`void`

***

### getAngularVelocity()

> **getAngularVelocity**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:711](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L711)

Gets the angular velocity

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

angular velocity or null

***

### getBoxSizeToRef()

> **getBoxSizeToRef**(`result`): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1134)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L693)

Gets the linear velocity

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

linear velocity or null

***

### getObjectCenter()

> **getObjectCenter**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L648)

Gets the object center

#### Returns

[`Vector3`](Vector3.md)

The object center

***

### getObjectExtents()

> **getObjectExtents**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:615](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L615)

Gets the object extents

#### Returns

[`Vector3`](Vector3.md)

the object extents

***

### getParam()

> **getParam**(`paramName`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:662](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L662)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:834](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L834)

Get the parent rotation

#### Returns

[`Quaternion`](Quaternion.md)

The parent rotation

***

### getRadius()

> **getRadius**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1146)

Gets the radius of the physics imposter

#### Returns

`number`

Radius of the physics imposter

***

### isBodyInitRequired()

> **isBodyInitRequired**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:545](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L545)

Should a new body be generated.

#### Returns

`boolean`

boolean specifying if body initialization is required

***

### onCollide()

> **onCollide**(`e`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:921](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L921)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L762)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:740](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L740)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:785](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L785)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:607](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L607)

Resets the update flags

#### Returns

`void`

***

### setAngularVelocity()

> **setAngularVelocity**(`velocity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:719](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L719)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1113)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1121)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:701](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L701)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:680](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L680)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:671](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L671)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:552](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L552)

Sets the updated scaling

#### Returns

`void`

***

### sleep()

> **sleep**(): `PhysicsImpostor`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1054](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1054)

Will keep this body still, in a sleep mode.

#### Returns

`PhysicsImpostor`

the physics imposter

***

### syncBoneWithImpostor()

> **syncBoneWithImpostor**(`bone`, `boneMesh`, `jointPivot`, `distToJoint?`, `adjustRotation?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1158)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1212)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:770](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L770)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:748](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L748)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L798)

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

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v1/physicsImpostor.ts:1066](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v1/physicsImpostor.ts#L1066)

Wake the body up.

#### Returns

`PhysicsImpostor`

The physics imposter
