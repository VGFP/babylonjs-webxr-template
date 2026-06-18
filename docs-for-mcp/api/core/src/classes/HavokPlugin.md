[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HavokPlugin

# Class: HavokPlugin

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L360)

The Havok Physics plugin

## Constructors

### Constructor

> **new HavokPlugin**(`_useDeltaForWorldStep?`, `hpInjection?`, `parameters?`): `HavokPlugin`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:568](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L568)

#### Parameters

##### \_useDeltaForWorldStep?

`boolean` = `true`

##### hpInjection?

`any` = `HK`

##### parameters?

[`HavokPluginParameters`](../interfaces/HavokPluginParameters.md) = `{}`

#### Returns

`HavokPlugin`

## Properties

### \_hknp

> **\_hknp**: `any` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L364)

Reference to the WASM library

***

### name

> **name**: `string` = `"HavokPlugin"`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L372)

Name of the plugin

#### Implementation of

`IPhysicsEnginePluginV2.name`

***

### onCollisionEndedObservable

> **onCollisionEndedObservable**: [`Observable`](Observable.md)\<[`IBasePhysicsCollisionEvent`](../interfaces/IBasePhysicsCollisionEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L562)

Observable for collision ended events

#### Implementation of

`IPhysicsEnginePluginV2.onCollisionEndedObservable`

***

### onCollisionObservable

> **onCollisionObservable**: [`Observable`](Observable.md)\<[`IPhysicsCollisionEvent`](../interfaces/IPhysicsCollisionEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:558](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L558)

Observable for collision started and collision continued events

#### Implementation of

`IPhysicsEnginePluginV2.onCollisionObservable`

***

### onTriggerCollisionObservable

> **onTriggerCollisionObservable**: [`Observable`](Observable.md)\<[`IBasePhysicsCollisionEvent`](../interfaces/IBasePhysicsCollisionEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:566](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L566)

Observable for trigger entered and trigger exited events

#### Implementation of

`IPhysicsEnginePluginV2.onTriggerCollisionObservable`

***

### world

> **world**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L368)

Created Havok world which physics bodies are added to (default world for non-floating-origin)

#### Implementation of

`IPhysicsEnginePluginV2.world`

## Accessors

### numBodies

#### Get Signature

> **get** **numBodies**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2924](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2924)

Gets the number of bodies in the world

##### Returns

`any`

## Methods

### \_internalSetMotionType()

> **\_internalSetMotionType**(`pluginData`, `motionType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1189)

#### Parameters

##### pluginData

`BodyPluginData`

##### motionType

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

#### Returns

`void`

***

### addChild()

> **addChild**(`shape`, `newChild`, `translation?`, `rotation?`, `scale?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1971](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1971)

Adds a child shape to the given shape.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The parent shape.

##### newChild

[`PhysicsShape`](PhysicsShape.md)

The child shape to add.

##### translation?

[`Vector3`](Vector3.md)

The relative translation of the child from the parent shape

##### rotation?

[`Quaternion`](Quaternion.md)

The relative rotation of the child from the parent shape

##### scale?

[`Vector3`](Vector3.md)

The relative scale scale of the child from the parent shaep

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.addChild`

***

### addConstraint()

> **addConstraint**(`body`, `childBody`, `constraint`, `instanceIndex?`, `childInstanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2258)

Adds a constraint to the physics engine.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The main body to which the constraint is applied.

##### childBody

[`PhysicsBody`](PhysicsBody.md)

The body to which the constraint is applied.

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to be applied.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.

##### childInstanceIndex?

`number`

If the child body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.addConstraint`

***

### applyAngularImpulse()

> **applyAngularImpulse**(`body`, `angularImpulse`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1460](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1460)

Applies an angular impulse(torque) to a physics body

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to apply the impulse to.

##### angularImpulse

[`Vector3`](Vector3.md)

The torque value

##### instanceIndex?

`number`

The index of the instance to apply the impulse to. If not specified, the impulse will be applied to all instances.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.applyAngularImpulse`

***

### applyForce()

> **applyForce**(`body`, `force`, `location`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1479](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1479)

Applies a force to a physics body at a given location.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to apply the impulse to.

##### force

[`Vector3`](Vector3.md)

The force vector to apply.

##### location

[`Vector3`](Vector3.md)

The location in world space to apply the impulse.

##### instanceIndex?

`number`

The index of the instance to apply the force to. If not specified, the force will be applied to all instances.

This method is useful for applying a force to a physics body at a given location.
This can be used to simulate physical forces such as explosions, collisions, and gravity.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.applyForce`

***

### applyImpulse()

> **applyImpulse**(`body`, `impulse`, `location`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1443](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1443)

Applies an impulse to a physics body at a given location.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to apply the impulse to.

##### impulse

[`Vector3`](Vector3.md)

The impulse vector to apply.

##### location

[`Vector3`](Vector3.md)

The location in world space to apply the impulse.

##### instanceIndex?

`number`

The index of the instance to apply the impulse to. If not specified, the impulse will be applied to all instances.

This method is useful for applying an impulse to a physics body at a given location.
This can be used to simulate physical forces such as explosions, collisions, and gravity.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.applyImpulse`

***

### applyTorque()

> **applyTorque**(`body`, `torque`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1493)

Applies a torque to a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to apply the torque to.

##### torque

[`Vector3`](Vector3.md)

The torque vector.

##### instanceIndex?

`number`

The index of the instance to apply the torque to. If not specified, the torque will be applied to all instances.

This method is useful for applying a torque to a physics body.
This can be used to simulate rotational forces such as motors, angular momentum, and rotational dynamics.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.applyTorque`

***

### computeMassProperties()

> **computeMassProperties**(`body`, `instanceIndex?`): [`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1278](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1278)

Computes the mass properties of a physics body, from it's shape

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to copmute the mass properties of

##### instanceIndex?

`number`

The index of the instance to compute the mass properties of.

#### Returns

[`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

The mass properties of the physics body.

#### Implementation of

`IPhysicsEnginePluginV2.computeMassProperties`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2931](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2931)

Dispose the world and free resources

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.dispose`

***

### disposeBody()

> **disposeBody**(`body`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1666](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1666)

Disposes a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to dispose.

This method is useful for releasing the resources associated with a physics body when it is no longer needed.
This is important for avoiding memory leaks in the physics engine.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.disposeBody`

***

### disposeConstraint()

> **disposeConstraint**(`constraint`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2526)

Disposes a physics constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The physics constraint to dispose.

This method is useful for releasing the resources associated with a physics constraint, such as
the Havok constraint, when it is no longer needed. This is important for avoiding memory leaks.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.disposeConstraint`

***

### disposeShape()

> **disposeShape**(`shape`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2086](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2086)

Releases a physics shape from the physics engine.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics shape to be released.

This method is useful for releasing a physics shape from the physics engine, freeing up resources and preventing memory leaks.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.disposeShape`

***

### executeStep()

> **executeStep**(`delta`, `physicsBodies`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:706](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L706)

Executes a single step of the physics engine.

#### Parameters

##### delta

`number`

The time delta in seconds since the last step.

##### physicsBodies

[`PhysicsBody`](PhysicsBody.md)[]

An array of physics bodies to be simulated.

This method is useful for simulating the physics engine. It sets the physics body transformation,
steps the world, syncs the physics body, and notifies collisions. This allows for the physics engine
to accurately simulate the physics bodies in the world.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.executeStep`

***

### getAngularDamping()

> **getAngularDamping**(`body`, `instanceIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1380)

Gets the angular damping of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to get the angular damping from.

##### instanceIndex?

`number`

The index of the instance to get the angular damping from. If not specified, the angular damping of the first instance will be returned.

#### Returns

`number`

The angular damping of the body.

This function is useful for retrieving the angular damping of a physics body,
which is used to control the rotational motion of the body. The angular damping is a value between 0 and 1, where 0 is no damping and 1 is full damping.

#### Implementation of

`IPhysicsEnginePluginV2.getAngularDamping`

***

### getAngularVelocityToRef()

> **getAngularVelocityToRef**(`body`, `angVel`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1529)

Gets the angular velocity of a body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The body to get the angular velocity from.

##### angVel

[`Vector3`](Vector3.md)

The vector3 to store the angular velocity.

##### instanceIndex?

`number`

The index of the instance to get the angular velocity from. If not specified, the angular velocity of the first instance will be returned.

This method is useful for getting the angular velocity of a body in a physics engine. It
takes the body and a vector3 as parameters and stores the angular velocity of the body
in the vector3. This is useful for getting the angular velocity of a body in order to
calculate the motion of the body in the physics engine.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.getAngularVelocityToRef`

***

### getAxisFriction()

> **getAxisFriction**(`constraint`, `axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2337)

Gets the friction value of the specified axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get the axis friction from.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to get the friction from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The friction value of the specified axis.

#### Implementation of

`IPhysicsEnginePluginV2.getAxisFriction`

***

### getAxisMaxLimit()

> **getAxisMaxLimit**(`constraint`, `axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2423](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2423)

Gets the maximum limit of the given axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get the maximum limit from.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to get the maximum limit from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The maximum limit of the given axis of the given constraint.

#### Implementation of

`IPhysicsEnginePluginV2.getAxisMaxLimit`

***

### getAxisMinLimit()

> **getAxisMinLimit**(`constraint`, `axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2394)

Gets the minimum limit of the specified axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get the minimum limit from.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to get the minimum limit from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The minimum limit of the specified axis of the given constraint.

#### Implementation of

`IPhysicsEnginePluginV2.getAxisMinLimit`

***

### getAxisMode()

> **getAxisMode**(`constraint`, `axis`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintAxisLimitMode`](../enumerations/PhysicsConstraintAxisLimitMode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2365)

Gets the axis limit mode of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get the axis limit mode from.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to get the limit mode from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintAxisLimitMode`](../enumerations/PhysicsConstraintAxisLimitMode.md)\>

The axis limit mode of the given constraint.

#### Implementation of

`IPhysicsEnginePluginV2.getAxisMode`

***

### getAxisMotorMaxForce()

> **getAxisMotorMaxForce**(`constraint`, `axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2510)

Gets the maximum force of the motor of the given constraint axis.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get the motor maximum force from.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint to get the motor maximum force from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The maximum force of the motor of the given constraint axis.

#### Implementation of

`IPhysicsEnginePluginV2.getAxisMotorMaxForce`

***

### getAxisMotorTarget()

> **getAxisMotorTarget**(`constraint`, `axis`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2481)

Gets the target of the motor of the given axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get the motor target from.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint to get the motor target from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The target of the motor of the given axis of the given constraint.

#### Implementation of

`IPhysicsEnginePluginV2.getAxisMotorTarget`

***

### getAxisMotorType()

> **getAxisMotorType**(`constraint`, `axis`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintMotorType`](../enumerations/PhysicsConstraintMotorType.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2451)

Gets the motor type of the specified axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get the motor type from.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint to get the motor type from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsConstraintMotorType`](../enumerations/PhysicsConstraintMotorType.md)\>

The motor type of the specified axis of the given constraint.

#### Implementation of

`IPhysicsEnginePluginV2.getAxisMotorType`

***

### getBodiesUsingConstraint()

> **getBodiesUsingConstraint**(`constraint`): [`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2234)

Get a list of all the pairs of bodies that are connected by this constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

the constraint to search from

#### Returns

[`ConstrainedBodyPair`](../type-aliases/ConstrainedBodyPair.md)[]

a list of parent, child pairs

#### Implementation of

`IPhysicsEnginePluginV2.getBodiesUsingConstraint`

***

### getBodyBoundingBox()

> **getBodyBoundingBox**(`body`): [`BoundingBox`](BoundingBox.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2041](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2041)

Calculates the world bounding box of a given physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to calculate the bounding box for.

#### Returns

[`BoundingBox`](BoundingBox.md)

The calculated bounding box.

This method is useful for physics engines as it allows to calculate the
boundaries of a given body.

#### Implementation of

`IPhysicsEnginePluginV2.getBodyBoundingBox`

***

### getBodyGeometry()

> **getBodyGeometry**(`body`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2055](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2055)

Gets the geometry of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body.

#### Returns

`object`

An object containing the positions and indices of the body's geometry.

##### indices

> **indices**: `number`[] \| `Uint32Array`\<`ArrayBufferLike`\>

##### positions

> **positions**: `number`[] \| `Float32Array`\<`ArrayBufferLike`\>

#### Implementation of

`IPhysicsEnginePluginV2.getBodyGeometry`

***

### getBoundingBox()

> **getBoundingBox**(`_shape`): [`BoundingBox`](BoundingBox.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2020](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2020)

Calculates the bounding box of a given physics shape.

#### Parameters

##### \_shape

[`PhysicsShape`](PhysicsShape.md)

The physics shape to calculate the bounding box for.

#### Returns

[`BoundingBox`](BoundingBox.md)

The calculated bounding box.

This method is useful for physics engines as it allows to calculate the
boundaries of a given shape. Knowing the boundaries of a shape is important
for collision detection and other physics calculations.

#### Implementation of

`IPhysicsEnginePluginV2.getBoundingBox`

***

### getCollisionEndedObservable()

> **getCollisionEndedObservable**(`body`, `instanceIndex?`): [`Observable`](Observable.md)\<[`IBasePhysicsCollisionEvent`](../interfaces/IBasePhysicsCollisionEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2746)

Return the collision ended observable for a particular physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

the physics body

##### instanceIndex?

`number`

optionally, the index of the instance in the body

#### Returns

[`Observable`](Observable.md)\<[`IBasePhysicsCollisionEvent`](../interfaces/IBasePhysicsCollisionEvent.md)\>

the collision ended observable for the body

#### Implementation of

`IPhysicsEnginePluginV2.getCollisionEndedObservable`

***

### getCollisionObservable()

> **getCollisionObservable**(`body`, `instanceIndex?`): [`Observable`](Observable.md)\<[`IPhysicsCollisionEvent`](../interfaces/IPhysicsCollisionEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2729](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2729)

Return the collision observable for a particular physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

the physics body

##### instanceIndex?

`number`

optionally, the index of the instance in the body

#### Returns

[`Observable`](Observable.md)\<[`IPhysicsCollisionEvent`](../interfaces/IPhysicsCollisionEvent.md)\>

the collision observable for the body

#### Implementation of

`IPhysicsEnginePluginV2.getCollisionObservable`

***

### getCollisionsEnabled()

> **getCollisionsEnabled**(`constraint`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2307)

Gets whether collisions are enabled for the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get collisions enabled for.

#### Returns

`boolean`

Whether collisions are enabled for the given constraint.

#### Implementation of

`IPhysicsEnginePluginV2.getCollisionsEnabled`

***

### getDensity()

> **getDensity**(`shape`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1932](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1932)

Calculates the density of a given physics shape.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics shape to calculate the density of.

#### Returns

`number`

The density of the given physics shape.

#### Implementation of

`IPhysicsEnginePluginV2.getDensity`

***

### getEnabled()

> **getEnabled**(`constraint`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2281)

Gets the enabled state of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to get the enabled state from.

#### Returns

`boolean`

The enabled state of the given constraint.

#### Implementation of

`IPhysicsEnginePluginV2.getEnabled`

***

### getEventMask()

> **getEventMask**(`body`, `instanceIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1154)

Retrieves the event mask of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to retrieve the event mask from.

##### instanceIndex?

`number`

The index of the instance to retrieve the event mask from.

#### Returns

`number`

The event mask of the physics body.

#### Implementation of

`IPhysicsEnginePluginV2.getEventMask`

***

### getGravity()

> **getGravity**(`worldPosition?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:639](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L639)

Gets the gravity of the physics world or a specific region.

#### Parameters

##### worldPosition?

[`Vector3`](Vector3.md)

Optional world position to get the gravity for that region.
                       If not provided, returns the default gravity.

#### Returns

[`Vector3`](Vector3.md)

The gravity vector.

***

### getGravityFactor()

> **getGravityFactor**(`body`, `instanceIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1653](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1653)

Get the gravity factor of a body

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

the physics body to get the gravity factor from

##### instanceIndex?

`number`

the index of the instance in an instanced body. If not specified, the gravity factor of the first instance will be returned.

#### Returns

`number`

the gravity factor

#### Implementation of

`IPhysicsEnginePluginV2.getGravityFactor`

***

### getLinearDamping()

> **getLinearDamping**(`body`, `instanceIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1347)

Gets the linear damping of the given body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The body to get the linear damping from.

##### instanceIndex?

`number`

The index of the instance to get the linear damping from. If not specified, the linear damping of the first instance will be returned.

#### Returns

`number`

The linear damping of the given body.

This method is useful for getting the linear damping of a body in a physics engine.
Linear damping is a force that opposes the motion of the body and is proportional to the velocity of the body.
It is used to simulate the effects of air resistance and other forms of friction.

#### Implementation of

`IPhysicsEnginePluginV2.getLinearDamping`

***

### getLinearVelocityToRef()

> **getLinearVelocityToRef**(`body`, `linVel`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1414)

Gets the linear velocity of a physics body and stores it in a given vector.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to get the linear velocity from.

##### linVel

[`Vector3`](Vector3.md)

The vector to store the linear velocity in.

##### instanceIndex?

`number`

The index of the instance to get the linear velocity from. If not specified, the linear velocity of the first instance will be returned.

This function is useful for retrieving the linear velocity of a physics body,
which can be used to determine the speed and direction of the body. This
information can be used to simulate realistic physics behavior in a game.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.getLinearVelocityToRef`

***

### getMassProperties()

> **getMassProperties**(`body`, `instanceIndex?`): [`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1311](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1311)

Gets the mass properties of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to get the mass properties from.

##### instanceIndex?

`number`

The index of the instance to get the mass properties from. If not specified, the mass properties of the first instance will be returned.

#### Returns

[`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

The mass properties of the physics body.

#### Implementation of

`IPhysicsEnginePluginV2.getMassProperties`

***

### getMaterial()

> **getMaterial**(`shape`): [`PhysicsMaterial`](../interfaces/PhysicsMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1904](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1904)

Gets the material associated with a physics shape.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The shape to get the material from.

#### Returns

[`PhysicsMaterial`](../interfaces/PhysicsMaterial.md)

The material associated with the shape.

#### Implementation of

`IPhysicsEnginePluginV2.getMaterial`

***

### getMaxAngularVelocity()

> **getMaxAngularVelocity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:783](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L783)

#### Returns

`number`

maximum allowed angular velocity

#### Implementation of

`IPhysicsEnginePluginV2.getMaxAngularVelocity`

***

### getMaxLinearVelocity()

> **getMaxLinearVelocity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:775](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L775)

#### Returns

`number`

maximum allowed linear velocity

#### Implementation of

`IPhysicsEnginePluginV2.getMaxLinearVelocity`

***

### getMaxQueryCollectorHits()

> **getMaxQueryCollectorHits**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L692)

Gets the maximum number of raycast hits to process.

#### Returns

`number`

The maximum number of raycast hits to process.

***

### getMotionType()

> **getMotionType**(`body`, `instanceIndex?`): [`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1225)

Gets the motion type of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to get the motion type from.

##### instanceIndex?

`number`

The index of the instance to get the motion type from. If not specified, the motion type of the first instance will be returned.

#### Returns

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

The motion type of the physics body.

#### Implementation of

`IPhysicsEnginePluginV2.getMotionType`

***

### getNumChildren()

> **getNumChildren**(`shape`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1997](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1997)

Returns the number of children of the given shape.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The shape to get the number of children from.

#### Returns

`number`

The number of children of the given shape.

#### Implementation of

`IPhysicsEnginePluginV2.getNumChildren`

***

### getPluginVersion()

> **getPluginVersion**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:757](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L757)

Returns the version of the physics engine plugin.

#### Returns

`number`

The version of the physics engine plugin.

This method is useful for determining the version of the physics engine plugin that is currently running.

#### Implementation of

`IPhysicsEnginePluginV2.getPluginVersion`

***

### getShape()

> **getShape**(`body`): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsShape`](PhysicsShape.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1103)

Gets the shape of a physics body. This will create a new shape object

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsShape`](PhysicsShape.md)\>

The shape of the physics body.

#### Implementation of

`IPhysicsEnginePluginV2.getShape`

***

### getShapeFilterCollideMask()

> **getShapeFilterCollideMask**(`shape`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1878)

Gets the shape filter collide mask of a body

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics body to get the shape filter collide mask from.

#### Returns

`number`

The shape filter collide mask of the given body.

#### Implementation of

`IPhysicsEnginePluginV2.getShapeFilterCollideMask`

***

### getShapeFilterMembershipMask()

> **getShapeFilterMembershipMask**(`shape`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1859](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1859)

Gets the shape filter membership mask of a body

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics body to get the shape filter membership mask from.

#### Returns

`number`

The shape filter membership mask of the given body.

#### Implementation of

`IPhysicsEnginePluginV2.getShapeFilterMembershipMask`

***

### getShapeType()

> **getShapeType**(`shape`): [`PhysicsShapeType`](../enumerations/PhysicsShapeType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1119)

Gets the type of a physics shape.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics shape to get the type for.

#### Returns

[`PhysicsShapeType`](../enumerations/PhysicsShapeType.md)

The type of the physics shape.

#### Implementation of

`IPhysicsEnginePluginV2.getShapeType`

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:663](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L663)

Gets the fixed time step used by the physics engine.

#### Returns

`number`

The fixed time step used by the physics engine.

#### Implementation of

`IPhysicsEnginePluginV2.getTimeStep`

***

### initBody()

> **initBody**(`body`, `motionType`, `position`, `orientation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L799)

Initializes a physics body with the given position and orientation.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to initialize.

##### motionType

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

The motion type of the body.

##### position

[`Vector3`](Vector3.md)

The position of the body.

##### orientation

[`Quaternion`](Quaternion.md)

The orientation of the body.
This code is useful for initializing a physics body with the given position and orientation.
It creates a plugin data for the body and adds it to the world. It then converts the position
and orientation to a transform and sets the body's transform to the given values.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.initBody`

***

### initBodyInstances()

> **initBodyInstances**(`body`, `motionType`, `mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:847](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L847)

Initializes the body instances for a given physics body and mesh.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to initialize.

##### motionType

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

How the body will be handled by the engine

##### mesh

[`Mesh`](Mesh.md)

The mesh to initialize.

This code is useful for creating a physics body from a mesh. It creates a
body instance for each instance of the mesh and adds it to the world. It also
sets the position of the body instance to the position of the mesh instance.
This allows for the physics engine to accurately simulate the mesh in the
world.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.initBodyInstances`

***

### initConstraint()

> **initConstraint**(`constraint`, `body`, `childBody`, `instanceIndex?`, `childInstanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2105)

Initializes a physics constraint with the given parameters.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The physics constraint to be initialized.

##### body

[`PhysicsBody`](PhysicsBody.md)

The main body

##### childBody

[`PhysicsBody`](PhysicsBody.md)

The child body.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.

##### childInstanceIndex?

`number`

If the child body is instanced, the index of the instance to which the constraint will be applied. If not specified, no constraint will be applied.

This function is useful for setting up a physics constraint in a physics engine.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.initConstraint`

***

### initShape()

> **initShape**(`shape`, `type`, `options`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1736](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1736)

Initializes a physics shape with the given type and parameters.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics shape to initialize.

##### type

[`PhysicsShapeType`](../enumerations/PhysicsShapeType.md)

The type of shape to initialize.

##### options

[`PhysicsShapeParameters`](../interfaces/PhysicsShapeParameters.md)

The parameters for the shape.

This code is useful for initializing a physics shape with the given type and parameters.
It allows for the creation of a sphere, box, capsule, container, cylinder, mesh, and heightfield.
Depending on the type of shape, different parameters are required.
For example, a sphere requires a radius, while a box requires extents and a rotation.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.initShape`

***

### isSupported()

> **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:601](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L601)

If this plugin is supported

#### Returns

`boolean`

true if its supported

***

### pointProximity()

> **pointProximity**(`query`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2632)

Given a point, returns the closest physics
body to that point.

#### Parameters

##### query

[`IPhysicsPointProximityQuery`](../interfaces/IPhysicsPointProximityQuery.md)

the query to perform.

##### result

[`ProximityCastResult`](ProximityCastResult.md)

contact point on the hit shape, in world space

#### Returns

`void`

#### See

IPhysicsPointProximityQuery

***

### raycast()

> **raycast**(`from`, `to`, `result`, `query?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2564](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2564)

Performs a raycast from a given start point to a given end point and stores the result in a given PhysicsRaycastResult object.

#### Parameters

##### from

[`Vector3`](Vector3.md)

The start point of the raycast.

##### to

[`Vector3`](Vector3.md)

The end point of the raycast.

##### result

[`PhysicsRaycastResult`](PhysicsRaycastResult.md) \| [`PhysicsRaycastResult`](PhysicsRaycastResult.md)[]

The PhysicsRaycastResult object (or array of PhysicsRaycastResults) to store the result of the raycast.

##### query?

[`IRaycastQuery`](../interfaces/IRaycastQuery.md)

The raycast query options. See [[IRaycastQuery]] for more information.

Performs a raycast. It takes in two points, from and to, and a PhysicsRaycastResult object to store the result of the raycast.
It then performs the raycast and stores the hit data in the PhysicsRaycastResult object.
If result is an empty array, it will be populated with every detected raycast hit.
If result is a populated array, it will only fill the PhysicsRaycastResults present in the array.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.raycast`

***

### removeBody()

> **removeBody**(`body`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L819)

Removes a body from the world. To dispose of a body, it is necessary to remove it from the world first.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The body to remove.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.removeBody`

***

### removeChild()

> **removeChild**(`shape`, `childIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1986](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1986)

Removes a child shape from a parent shape.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The parent shape.

##### childIndex

`number`

The index of the child shape to remove.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.removeChild`

***

### setActivationControl()

> **setActivationControl**(`body`, `controlMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1244)

sets the activation control mode of a physics body, for instance if you need the body to never sleep.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the activation control mode.

##### controlMode

[`PhysicsActivationControl`](../enumerations/PhysicsActivationControl.md)

The activation control mode.

#### Returns

`void`

***

### setAngularDamping()

> **setAngularDamping**(`body`, `damping`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1361)

Sets the angular damping of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the angular damping for.

##### damping

`number`

The angular damping value to set.

##### instanceIndex?

`number`

The index of the instance to set the angular damping for. If not specified, the angular damping of the first instance will be set.

This function is useful for controlling the angular velocity of a physics body.
By setting the angular damping, the body's angular velocity will be reduced over time, allowing for more realistic physics simulations.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAngularDamping`

***

### setAngularVelocity()

> **setAngularVelocity**(`body`, `angVel`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1508](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1508)

Sets the angular velocity of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the angular velocity of.

##### angVel

[`Vector3`](Vector3.md)

The angular velocity to set.

##### instanceIndex?

`number`

The index of the instance to set the angular velocity of. If not specified, the angular velocity of the first instance will be set.

This function is useful for setting the angular velocity of a physics body in a physics engine.
This allows for more realistic simulations of physical objects, as they can be given a rotational velocity.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAngularVelocity`

***

### setAxisFriction()

> **setAxisFriction**(`constraint`, `axis`, `friction`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2323)

Sets the friction of the given axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to set the friction of.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint to set the friction of.

##### friction

`number`

The friction to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAxisFriction`

***

### setAxisMaxLimit()

> **setAxisMaxLimit**(`constraint`, `axis`, `limit`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2409](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2409)

Sets the maximum limit of the given axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to set the maximum limit of the given axis.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to set the maximum limit of.

##### limit

`number`

The maximum limit to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAxisMaxLimit`

***

### setAxisMinLimit()

> **setAxisMinLimit**(`constraint`, `axis`, `limit`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2381)

Sets the minimum limit of the given axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to set the minimum limit of.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to set the minimum limit of.

##### limit

`number`

The minimum limit to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAxisMinLimit`

***

### setAxisMode()

> **setAxisMode**(`constraint`, `axis`, `limitMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2351)

Sets the limit mode of the specified axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to set the axis mode of.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis to set the limit mode of.

##### limitMode

[`PhysicsConstraintAxisLimitMode`](../enumerations/PhysicsConstraintAxisLimitMode.md)

The limit mode to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAxisMode`

***

### setAxisMotorMaxForce()

> **setAxisMotorMaxForce**(`constraint`, `axis`, `maxForce`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2496)

Sets the maximum force that can be applied by the motor of the given constraint axis.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to set the motor max force for.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint to set the motor max force for.

##### maxForce

`number`

The maximum force that can be applied by the motor.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAxisMotorMaxForce`

***

### setAxisMotorTarget()

> **setAxisMotorTarget**(`constraint`, `axis`, `target`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2467](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2467)

Sets the target of an axis motor of a constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to set the axis motor target of.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint to set the motor target of.

##### target

`number`

The target of the axis motor.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAxisMotorTarget`

***

### setAxisMotorType()

> **setAxisMotorType**(`constraint`, `axis`, `motorType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2438)

Sets the motor type of the given axis of the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to set the motor type of.

##### axis

[`PhysicsConstraintAxis`](../enumerations/PhysicsConstraintAxis.md)

The axis of the constraint to set the motor type of.

##### motorType

[`PhysicsConstraintMotorType`](../enumerations/PhysicsConstraintMotorType.md)

The motor type to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setAxisMotorType`

***

### setCollisionCallbackEnabled()

> **setCollisionCallbackEnabled**(`body`, `enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2762](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2762)

Enable collision to be reported for a body when a callback is setup on the world

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

the physics body

##### enabled

`boolean`

whether to enable or disable collision events

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setCollisionCallbackEnabled`

***

### setCollisionEndedCallbackEnabled()

> **setCollisionEndedCallbackEnabled**(`body`, `enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2780](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2780)

Enable collision ended to be reported for a body when a callback is setup on the world

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

the physics body

##### enabled

`boolean`

whether to enable or disable collision ended events

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setCollisionEndedCallbackEnabled`

***

### setCollisionsEnabled()

> **setCollisionsEnabled**(`constraint`, `isEnabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2295)

Enables or disables collisions for the given constraint.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to enable or disable collisions for.

##### isEnabled

`boolean`

Whether collisions should be enabled or disabled.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setCollisionsEnabled`

***

### setDensity()

> **setDensity**(`shape`, `density`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1921](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1921)

Sets the density of a physics shape.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics shape to set the density of.

##### density

`number`

The density to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setDensity`

***

### setEnabled()

> **setEnabled**(`constraint`, `isEnabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2269)

Enables or disables a constraint in the physics engine.

#### Parameters

##### constraint

[`PhysicsConstraint`](PhysicsConstraint.md)

The constraint to enable or disable.

##### isEnabled

`boolean`

Whether the constraint should be enabled or disabled.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setEnabled`

***

### setEventMask()

> **setEventMask**(`body`, `eventMask`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1136)

Sets the event mask of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the event mask for.

##### eventMask

`number`

The event mask to set.

##### instanceIndex?

`number`

The index of the instance to set the event mask for

This function is useful for setting the event mask of a physics body, which is used to determine which events the body will respond to. This is important for ensuring that the physics engine is able to accurately simulate the behavior of the body in the game world.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setEventMask`

***

### setGravity()

> **setGravity**(`gravity`, `worldPosition?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:614](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L614)

Sets the gravity of the physics world.

#### Parameters

##### gravity

[`Vector3`](Vector3.md)

The gravity vector to set.

##### worldPosition?

[`Vector3`](Vector3.md)

Optional world position to specify which region's gravity to set.
                       If provided, only the region containing this position will be updated.
                       If not provided, all regions will be updated (default behavior).
                       This is useful for planetary scenarios where gravity direction varies by location.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setGravity`

***

### setGravityFactor()

> **setGravityFactor**(`body`, `factor`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1637](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1637)

Sets the gravity factor of a body

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

the physics body to set the gravity factor for

##### factor

`number`

the gravity factor

##### instanceIndex?

`number`

the index of the instance in an instanced body

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setGravityFactor`

***

### setLinearDamping()

> **setLinearDamping**(`body`, `damping`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1327)

Sets the linear damping of the given body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The body to set the linear damping for.

##### damping

`number`

The linear damping to set.

##### instanceIndex?

`number`

The index of the instance to set the linear damping for. If not specified, the linear damping of the first instance will be set.

This method is useful for controlling the linear damping of a body in a physics engine.
Linear damping is a force that opposes the motion of the body, and is proportional to the velocity of the body.
This method allows the user to set the linear damping of a body, which can be used to control the motion of the body.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setLinearDamping`

***

### setLinearVelocity()

> **setLinearVelocity**(`body`, `linVel`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1394)

Sets the linear velocity of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the linear velocity of.

##### linVel

[`Vector3`](Vector3.md)

The linear velocity to set.

##### instanceIndex?

`number`

The index of the instance to set the linear velocity of. If not specified, the linear velocity of the first instance will be set.

This function is useful for setting the linear velocity of a physics body, which is necessary for simulating
motion in a physics engine. The linear velocity is the speed and direction of the body's movement.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setLinearVelocity`

***

### setMassProperties()

> **setMassProperties**(`body`, `massProps`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1295)

Sets the mass properties of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the mass properties of.

##### massProps

[`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

The mass properties to set.

##### instanceIndex?

`number`

The index of the instance to set the mass properties of. If undefined, the mass properties of all the bodies will be set.
This function is useful for setting the mass properties of a physics body,
such as its mass, inertia, and center of mass. This is important for
accurately simulating the physics of the body in the physics engine.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setMassProperties`

***

### setMaterial()

> **setMaterial**(`shape`, `material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1888](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1888)

Sets the material of a physics shape.

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics shape to set the material of.

##### material

[`PhysicsMaterial`](../interfaces/PhysicsMaterial.md)

The material to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setMaterial`

***

### setMaxQueryCollectorHits()

> **setMaxQueryCollectorHits**(`maxQueryCollectorHits`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:672](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L672)

Sets the maximum number of raycast hits to process.

#### Parameters

##### maxQueryCollectorHits

`number`

The maximum number of raycast hits to process.

#### Returns

`void`

***

### setMotionType()

> **setMotionType**(`body`, `motionType`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1209)

sets the motion type of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the motion type for.

##### motionType

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

The motion type to set.

##### instanceIndex?

`number`

The index of the instance to set the motion type for. If undefined, the motion type of all the bodies will be set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setMotionType`

***

### setPhysicsBodyTransformation()

> **setPhysicsBodyTransformation**(`body`, `node`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1547)

Sets the transformation of the given physics body to the given transform node.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the transformation for.

##### node

[`TransformNode`](TransformNode.md)

The transform node to set the transformation from.
Sets the transformation of the given physics body to the given transform node.

This function is useful for setting the transformation of a physics body to a
transform node, which is necessary for the physics engine to accurately simulate
the motion of the body. It also takes into account instances of the transform
node, which is necessary for accurate simulation of multiple bodies with the
same transformation.

#### Returns

`void`

***

### setShape()

> **setShape**(`body`, `shape`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1071)

Sets the shape of a physics body.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the shape for.

##### shape

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsShape`](PhysicsShape.md)\>

The physics shape to set.

This function is used to set the shape of a physics body. It is useful for
creating a physics body with a specific shape, such as a box or a sphere,
which can then be used to simulate physical interactions in a physics engine.
This function is especially useful for meshes with multiple instances, as it
will set the shape for each instance of the mesh.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setShape`

***

### setShapeFilterCollideMask()

> **setShapeFilterCollideMask**(`shape`, `collideMask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1868](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1868)

Sets the shape filter collide mask of a body

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics body to set the shape filter collide mask for.

##### collideMask

`number`

The shape filter collide mask to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setShapeFilterCollideMask`

***

### setShapeFilterMembershipMask()

> **setShapeFilterMembershipMask**(`shape`, `membershipMask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1849](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1849)

Sets the shape filter membership mask of a body

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

The physics body to set the shape filter membership mask for.

##### membershipMask

`number`

The shape filter membership mask to set.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setShapeFilterMembershipMask`

***

### setTargetTransform()

> **setTargetTransform**(`body`, `position`, `rotation`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:1620](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L1620)

Set the target transformation (position and rotation) of the body, such that the body will set its velocity to reach that target

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to set the target transformation for.

##### position

[`Vector3`](Vector3.md)

The target position

##### rotation

[`Quaternion`](Quaternion.md)

The target rotation

##### instanceIndex?

`number`

The index of the instance in an instanced body

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setTargetTransform`

***

### setTimeStep()

> **setTimeStep**(`timeStep`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:653](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L653)

Sets the fixed time step for the physics engine.

#### Parameters

##### timeStep

`number`

The fixed time step to use for the physics engine.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setTimeStep`

***

### setTrigger()

> **setTrigger**(`shape`, `isTrigger`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2006](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2006)

Marks the shape as a trigger

#### Parameters

##### shape

[`PhysicsShape`](PhysicsShape.md)

the shape to mark as a trigger

##### isTrigger

`boolean`

if the shape is a trigger

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.setTrigger`

***

### setVelocityLimits()

> **setVelocityLimits**(`maxLinearVelocity`, `maxAngularVelocity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:766](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L766)

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

#### Implementation of

`IPhysicsEnginePluginV2.setVelocityLimits`

***

### shapeCast()

> **shapeCast**(`query`, `inputShapeResult`, `hitShapeResult`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2691](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2691)

Given a shape in a specific orientation, cast it from the start to end position specified by the query, and return the first hit.

#### Parameters

##### query

`IPhysicsShapeCastQuery`

the query to perform.

##### inputShapeResult

[`ShapeCastResult`](ShapeCastResult.md)

contact point on input shape, in input shape space

##### hitShapeResult

[`ShapeCastResult`](ShapeCastResult.md)

contact point on hit shape, in world space

#### Returns

`void`

#### See

IPhysicsShapeCastQuery

***

### shapeProximity()

> **shapeProximity**(`query`, `inputShapeResult`, `hitShapeResult`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:2661](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L2661)

Given a shape in a specific position and orientation, returns the closest point to that shape.

#### Parameters

##### query

[`IPhysicsShapeProximityCastQuery`](../interfaces/IPhysicsShapeProximityCastQuery.md)

the query to perform.

##### inputShapeResult

[`ProximityCastResult`](ProximityCastResult.md)

contact point on input shape, in input shape space

##### hitShapeResult

[`ProximityCastResult`](ProximityCastResult.md)

contact point on hit shape, in world space

#### Returns

`void`

#### See

IPhysicsShapeProximityCastQuery

***

### sync()

> **sync**(`body`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:955](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L955)

Synchronizes the transform of a physics body with its transform node.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to synchronize.

This function is useful for keeping the physics body's transform in sync with its transform node.
This is important for ensuring that the physics body is accurately represented in the physics engine.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.sync`

***

### syncTransform()

> **syncTransform**(`body`, `transformNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L973)

Synchronizes the transform of a physics body with the transform of its
corresponding transform node.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

The physics body to synchronize.

##### transformNode

[`TransformNode`](TransformNode.md)

The destination Transform Node.

This code is useful for synchronizing the position and orientation of a
physics body with the position and orientation of its corresponding
transform node. This is important for ensuring that the physics body and
the transform node are in the same position and orientation in the scene.
This is necessary for the physics engine to accurately simulate the
physical behavior of the body.

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.syncTransform`

***

### updateBodyInstances()

> **updateBodyInstances**(`body`, `mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:914](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L914)

Update the internal body instances for a given physics body to match the instances in a mesh.

#### Parameters

##### body

[`PhysicsBody`](PhysicsBody.md)

the body that will be updated

##### mesh

[`Mesh`](Mesh.md)

the mesh with reference instances

#### Returns

`void`

#### Implementation of

`IPhysicsEnginePluginV2.updateBodyInstances`
