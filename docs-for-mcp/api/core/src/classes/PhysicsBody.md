[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsBody

# Class: PhysicsBody

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L29)

PhysicsBody is useful for creating a physics body that can be used in a physics engine. It allows
the user to set the mass and velocity of the body, which can then be used to calculate the
motion of the body in the physics engine.

## Constructors

### Constructor

> **new PhysicsBody**(`transformNode`, `motionType`, `startsAsleep`, `scene`): `PhysicsBody`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L102)

Constructs a new physics body for the given node.

#### Parameters

##### transformNode

[`TransformNode`](TransformNode.md)

The Transform Node to construct the physics body for. For better performance, it is advised that this node does not have a parent.

##### motionType

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

The motion type of the physics body. The options are:
 - PhysicsMotionType.STATIC - Static bodies are not moving and unaffected by forces or collisions. They are good for level boundaries or terrain.
 - PhysicsMotionType.DYNAMIC - Dynamic bodies are fully simulated. They can move and collide with other objects.
 - PhysicsMotionType.ANIMATED - They behave like dynamic bodies, but they won't be affected by other bodies, but still push other bodies out of the way.

##### startsAsleep

`boolean`

Whether the physics body should start in a sleeping state (not a guarantee). Defaults to false.

##### scene

[`Scene`](Scene.md)

The scene containing the physics engine.

This code is useful for creating a physics body for a given Transform Node in a scene.
It checks the version of the physics engine and the physics plugin, and initializes the body accordingly.
It also sets the node's rotation quaternion if it is not already set. Finally, it adds the body to the physics engine.

#### Returns

`PhysicsBody`

## Properties

### \_pluginData

> **\_pluginData**: `any` = `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L33)

V2 Physics plugin private data for single Transform

***

### \_pluginDataInstances

> **\_pluginDataInstances**: `any`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L37)

V2 Physics plugin private data for instances

***

### disableSync

> **disableSync**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L74)

Disable sync from physics to transformNode. This value is set to true at body creation or at motionType setting when the body is not dynamic.

***

### startAsleep

> **startAsleep**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L79)

Physics engine will try to make this body sleeping and not active

***

### transformNode

> **transformNode**: [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L57)

The transform node associated with this Physics Body

## Accessors

### disablePreStep

#### Get Signature

> **get** **disablePreStep**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L63)

Disable pre-step that consists in updating Physics Body from Transform Node Translation/Orientation.
True by default for maximum performance.

##### Returns

`boolean`

#### Set Signature

> **set** **disablePreStep**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L67)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:699](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L699)

Returns if the body has been disposed.

##### Returns

`boolean`

true if disposed, false otherwise.

***

### motionType

#### Get Signature

> **get** **motionType**(): [`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L192)

Get the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.

##### Returns

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

***

### numInstances

#### Get Signature

> **get** **numInstances**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L185)

This returns the number of internal instances of the physics body

##### Returns

`number`

***

### shape

#### Get Signature

> **get** **shape**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsShape`](PhysicsShape.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L219)

Retrieves the physics shape associated with this object.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsShape`](PhysicsShape.md)\>

The physics shape associated with this object, or `undefined` if no
shape is associated.

This method is useful for retrieving the physics shape associated with this object,
which can be used to apply physical forces to the object or to detect collisions.

#### Set Signature

> **set** **shape**(`shape`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L203)

Sets the shape of the physics body.

##### Parameters

###### shape

[`Nullable`](../type-aliases/Nullable.md)\<[`PhysicsShape`](PhysicsShape.md)\>

The shape of the physics body.

This method is useful for setting the shape of the physics body, which is necessary for the physics engine to accurately simulate the body's behavior.
The shape is used to calculate the body's mass, inertia, and other properties.

##### Returns

`void`

## Methods

### addConstraint()

> **addConstraint**(`childBody`, `constraint`, `instanceIndex?`, `childInstanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L601)

Adds a constraint to the physics engine.

#### Parameters

##### childBody

`PhysicsBody`

The body to which the constraint will be applied.

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

***

### applyAngularImpulse()

> **applyAngularImpulse**(`angularImpulse`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:485](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L485)

Add torque to a physics body

#### Parameters

##### angularImpulse

[`Vector3`](Vector3.md)

The angular impulse vector.

##### instanceIndex?

`number`

For a instanced body, the instance to where the impulse should be applied. If not specified, the impulse is applied to all instances.

#### Returns

`void`

***

### applyForce()

> **applyForce**(`force`, `location`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L512)

Applies a force to the physics object.

#### Parameters

##### force

[`Vector3`](Vector3.md)

The force vector.

##### location

[`Vector3`](Vector3.md)

The location of the force.

##### instanceIndex?

`number`

For a instanced body, the instance to where the force should be applied. If not specified, the force is applied to all instances.

This method is useful for applying a force to a physics object, which can be used to simulate physical forces such as gravity,
collisions, and explosions. This can be used to create realistic physics simulations in a game or other application.

#### Returns

`void`

***

### applyImpulse()

> **applyImpulse**(`impulse`, `location`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:476](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L476)

Applies an impulse to the physics object.

#### Parameters

##### impulse

[`Vector3`](Vector3.md)

The impulse vector.

##### location

[`Vector3`](Vector3.md)

The location of the impulse.

##### instanceIndex?

`number`

For a instanced body, the instance to where the impulse should be applied. If not specified, the impulse is applied to all instances.

This method is useful for applying an impulse to a physics object, which can be used to simulate physical forces such as gravity,
collisions, and explosions. This can be used to create realistic physics simulations in a game or other application.

#### Returns

`void`

***

### applyTorque()

> **applyTorque**(`torque`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L498)

Applies a torque to the physics body.

#### Parameters

##### torque

[`Vector3`](Vector3.md)

The torque vector.

##### instanceIndex?

`number`

For a instanced body, the instance to where the torque should be applied. If not specified, the torque is applied to all instances.

This method is useful for applying a torque to a physics body, which can be used to simulate rotational forces such as motors,
angular momentum, and rotational dynamics. This can be used to create realistic physics simulations in a game or other application.

#### Returns

`void`

***

### clone()

> **clone**(`transformNode`): `PhysicsBody`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L163)

Clone the PhysicsBody to a new body and assign it to the transformNode parameter

#### Parameters

##### transformNode

[`TransformNode`](TransformNode.md)

transformNode that will be used for the cloned PhysicsBody

#### Returns

`PhysicsBody`

the newly cloned PhysicsBody

***

### computeMassProperties()

> **computeMassProperties**(`instanceIndex?`): [`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L302)

Computes the mass properties of the physics object, based on the set of physics shapes this body uses.
This method is useful for computing the initial mass properties of a physics object, such as its mass,
inertia, and center of mass; these values are important for accurately simulating the physics of the
object in the physics engine, and computing values based on the shape will provide you with reasonable
initial values, which you can then customize.

#### Parameters

##### instanceIndex?

`number`

The index of the instance to compute the mass properties for.

#### Returns

[`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

The mass properties of the object.

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:708](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L708)

Disposes the body from the physics engine.

This method is useful for cleaning up the physics engine when a body is no longer needed. Disposing the body will free up resources and prevent memory leaks.

#### Returns

`void`

***

### getAngularDamping()

> **getAngularDamping**(`instanceIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:383](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L383)

Gets the angular damping of the physics body.

#### Parameters

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the angular damping for.

#### Returns

`number`

The angular damping of the physics body.

This method is useful for getting the angular damping of the physics body,
which is the rate of reduction of the angular velocity over time.
This is important for simulating realistic physics behavior in a game.

***

### getAngularVelocity()

> **getAngularVelocity**(`instanceIndex?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L460)

Gets the angular velocity of the physics body as a new vector3.

#### Parameters

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the angular velocity for.

#### Returns

[`Vector3`](Vector3.md)

The angular velocity of the physics body.

This method is useful for getting the angular velocity of a physics body, which can be used to determine the body's
rotational speed. This information can be used to create realistic physics simulations.

***

### getAngularVelocityToRef()

> **getAngularVelocityToRef**(`angVel`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:448](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L448)

Gets the angular velocity of the physics body and stores it in the given vector3.

#### Parameters

##### angVel

[`Vector3`](Vector3.md)

The vector3 to store the angular velocity in.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the angular velocity for.

This method is useful for getting the angular velocity of a physics body, which can be used to determine the body's
rotational speed. This information can be used to create realistic physics simulations.

#### Returns

`void`

***

### getBoundingBox()

> **getBoundingBox**(): [`BoundingBox`](BoundingBox.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L227)

Returns the bounding box of the physics body.

#### Returns

[`BoundingBox`](BoundingBox.md)

The bounding box of the physics body.

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L154)

Returns the string "PhysicsBody".

#### Returns

`string`

"PhysicsBody"

***

### getCollisionEndedObservable()

> **getCollisionEndedObservable**(`instanceIndex?`): [`Observable`](Observable.md)\<[`IBasePhysicsCollisionEvent`](../interfaces/IBasePhysicsCollisionEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:541](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L541)

Returns an observable that will be notified when the body has finished colliding with another body

#### Parameters

##### instanceIndex?

`number`

optionally, the index of the instance in the body

#### Returns

[`Observable`](Observable.md)\<[`IBasePhysicsCollisionEvent`](../interfaces/IBasePhysicsCollisionEvent.md)\>

Observable

***

### getCollisionObservable()

> **getCollisionObservable**(`instanceIndex?`): [`Observable`](Observable.md)\<[`IPhysicsCollisionEvent`](../interfaces/IPhysicsCollisionEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:532](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L532)

Returns an observable that will be notified for when a collision starts or continues for this PhysicsBody

#### Parameters

##### instanceIndex?

`number`

optionally, the index of the instance in the body

#### Returns

[`Observable`](Observable.md)\<[`IPhysicsCollisionEvent`](../interfaces/IPhysicsCollisionEvent.md)\>

Observable

***

### getEventMask()

> **getEventMask**(`instanceIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L254)

Gets the event mask of the physics engine.

#### Parameters

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the event mask for.

#### Returns

`number`

The event mask of the physics engine.

This method is useful for getting the event mask of the physics engine,
which is used to determine which events the engine will respond to.
This is important for ensuring that the engine is responding to the correct events and not
wasting resources on unnecessary events.

***

### getGeometry()

> **getGeometry**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:523](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L523)

Retrieves the geometry of the body from the physics plugin.

#### Returns

`object`

The geometry of the body.

This method is useful for retrieving the geometry of the body from the physics plugin, which can be used for various physics calculations.

***

### getGravityFactor()

> **getGravityFactor**(`instanceIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:681](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L681)

Gets the gravity factor of the physics body

#### Parameters

##### instanceIndex?

`number`

the instance of the body to get, if undefined the value of first instance will be returned

#### Returns

`number`

the gravity factor

***

### getLinearDamping()

> **getLinearDamping**(`instanceIndex?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L356)

Gets the linear damping of the physics body.

#### Parameters

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the linear damping for.

#### Returns

`number`

The linear damping of the physics body.

This method is useful for retrieving the linear damping of the physics body, which is the amount of
resistance the body has to linear motion. This is useful for simulating realistic physics behavior
in a game.

***

### getLinearVelocity()

> **getLinearVelocity**(`instanceIndex?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L421)

Gets the linear velocity of the physics body as a new vector3.

#### Parameters

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the linear velocity for.

#### Returns

[`Vector3`](Vector3.md)

The linear velocity of the physics body.

This method is useful for getting the linear velocity of a physics body in a physics engine.
This can be used to determine the speed and direction of the body, which can be used to calculate the motion of the body.

***

### getLinearVelocityToRef()

> **getLinearVelocityToRef**(`linVel`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L409)

Gets the linear velocity of the physics body and stores it in the given vector3.

#### Parameters

##### linVel

[`Vector3`](Vector3.md)

The vector3 to store the linear velocity in.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the linear velocity for.

This method is useful for getting the linear velocity of a physics body in a physics engine.
This can be used to determine the speed and direction of the body, which can be used to calculate the motion of the body.

#### Returns

`void`

***

### getMassProperties()

> **getMassProperties**(`instanceIndex?`): [`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L329)

Retrieves the mass properties of the object.

#### Parameters

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the mass properties for.

#### Returns

[`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

The mass properties of the object.

This method is useful for physics simulations, as it allows the user to
retrieve the mass properties of the object, such as its mass, center of mass,
and moment of inertia. This information is necessary for accurate physics
simulations.

***

### getMotionType()

> **getMotionType**(`instanceIndex?`): [`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L273)

Gets the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.

#### Parameters

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the motion type for.

#### Returns

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

The motion type of the physics body.

***

### getObjectCenterWorld()

> **getObjectCenterWorld**(`instanceIndex?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L568)

Get the center of the object in world space.

#### Parameters

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the center for.

#### Returns

[`Vector3`](Vector3.md)

geometric center of the associated mesh

***

### getObjectCenterWorldToRef()

> **getObjectCenterWorldToRef**(`ref`, `instanceIndex?`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:579](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L579)

Get the center of the object in world space.

#### Parameters

##### ref

[`Vector3`](Vector3.md)

The vector3 to store the result in.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to get the center for.

#### Returns

[`Vector3`](Vector3.md)

geometric center of the associated mesh

***

### getPrestepType()

> **getPrestepType**(): [`PhysicsPrestepType`](../enumerations/PhysicsPrestepType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L289)

Get the current prestep type of the body

#### Returns

[`PhysicsPrestepType`](../enumerations/PhysicsPrestepType.md)

the type of prestep associated with the body and its instance index

***

### iterateOverAllInstances()

> **iterateOverAllInstances**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:657](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L657)

Executes a callback on the body or all of the instances of a body

#### Parameters

##### callback

(`body`, `instanceIndex?`) => `void`

the callback to execute

#### Returns

`void`

***

### setAngularDamping()

> **setAngularDamping**(`damping`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:369](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L369)

Sets the angular damping of the physics body.

#### Parameters

##### damping

`number`

The angular damping of the body.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to set the angular damping for.

This method is useful for controlling the angular velocity of a physics body.
By setting the damping, the body's angular velocity will be reduced over time, simulating the effect of friction.
This can be used to create realistic physical behavior in a physics engine.

#### Returns

`void`

***

### setAngularVelocity()

> **setAngularVelocity**(`angVel`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:436](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L436)

Sets the angular velocity of the physics object.

#### Parameters

##### angVel

[`Vector3`](Vector3.md)

The angular velocity to set.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to set the angular velocity for.

This method is useful for setting the angular velocity of a physics object, which is necessary for
simulating realistic physics behavior. The angular velocity is used to determine the rate of rotation of the object,
which is important for simulating realistic motion.

#### Returns

`void`

***

### setCollisionCallbackEnabled()

> **setCollisionCallbackEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:549](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L549)

Enable or disable collision callback for this PhysicsBody.

#### Parameters

##### enabled

`boolean`

true if PhysicsBody's collision will rise a collision event and notifies the observable

#### Returns

`void`

***

### setCollisionEndedCallbackEnabled()

> **setCollisionEndedCallbackEnabled**(`enabled`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:558](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L558)

Enable or disable collision ended callback for this PhysicsBody.

#### Parameters

##### enabled

`boolean`

true if PhysicsBody's collision ended will rise a collision event and notifies the observable

#### Returns

`void`

***

### setEventMask()

> **setEventMask**(`eventMask`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L240)

Sets the event mask for the physics engine.

#### Parameters

##### eventMask

`number`

A bitmask that determines which events will be sent to the physics engine.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to set the event mask for.

This method is useful for setting the event mask for the physics engine, which determines which events
will be sent to the physics engine. This allows the user to control which events the physics engine will respond to.

#### Returns

`void`

***

### setGravityFactor()

> **setGravityFactor**(`factor`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:672](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L672)

Sets the gravity factor of the physics body

#### Parameters

##### factor

`number`

the gravity factor to set

##### instanceIndex?

`number`

the instance of the body to set, if undefined all instances will be set

#### Returns

`void`

***

### setLinearDamping()

> **setLinearDamping**(`damping`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L343)

Sets the linear damping of the physics body.

#### Parameters

##### damping

`number`

The linear damping value.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to set the linear damping for.

This method is useful for controlling the linear damping of the physics body,
which is the rate at which the body's velocity decreases over time. This is useful for simulating
the effects of air resistance or other forms of friction.

#### Returns

`void`

***

### setLinearVelocity()

> **setLinearVelocity**(`linVel`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:397](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L397)

Sets the linear velocity of the physics object.

#### Parameters

##### linVel

[`Vector3`](Vector3.md)

The linear velocity to set.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to set the linear velocity for.

This method is useful for setting the linear velocity of a physics object,
which is necessary for simulating realistic physics in a game engine.
By setting the linear velocity, the physics object will move in the direction and speed specified by the vector.
This allows for realistic physics simulations, such as simulating the motion of a ball rolling down a hill.

#### Returns

`void`

***

### setMassProperties()

> **setMassProperties**(`massProps`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:315](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L315)

Sets the mass properties of the physics object.

#### Parameters

##### massProps

[`PhysicsMassProperties`](../interfaces/PhysicsMassProperties.md)

The mass properties to set.

##### instanceIndex?

`number`

The index of the instance to set the mass properties for. If not defined, the mass properties will be set for all instances.

This method is useful for setting the mass properties of a physics object, such as its mass,
inertia, and center of mass. This is important for accurately simulating the physics of the object in the physics engine.

#### Returns

`void`

***

### setMotionType()

> **setMotionType**(`motionType`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L263)

Sets the motion type of the physics body. Can be STATIC, DYNAMIC, or ANIMATED.

#### Parameters

##### motionType

[`PhysicsMotionType`](../enumerations/PhysicsMotionType.md)

The motion type to set.

##### instanceIndex?

`number`

If this body is instanced, the index of the instance to set the motion type for. If body is instanced but instanceIndex is undefined, the motion type will be set for all instances.

#### Returns

`void`

***

### setPrestepType()

> **setPrestepType**(`prestepType`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L281)

Set the prestep type of the body

#### Parameters

##### prestepType

[`PhysicsPrestepType`](../enumerations/PhysicsPrestepType.md)

prestep type provided by PhysicsPrestepType

#### Returns

`void`

***

### setTargetTransform()

> **setTargetTransform**(`position`, `rotation`, `instanceIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:691](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L691)

Set the target transformation (position and rotation) of the body, such that the body will set its velocity to reach that target

#### Parameters

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

***

### syncWithBone()

> **syncWithBone**(`bone`, `boneMesh`, `jointPivot`, `distToJoint?`, `adjustRotation?`, `boneAxis?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:614](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L614)

Sync with a bone

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

### updateBodyInstances()

> **updateBodyInstances**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsBody.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsBody.ts#L175)

If a physics body is connected to an instanced node, update the number physic instances to match the number of node instances.

#### Returns

`void`
