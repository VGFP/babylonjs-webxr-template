[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsCharacterController

# Class: PhysicsCharacterController

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L214)

Character controller using physics

## Constructors

### Constructor

> **new PhysicsCharacterController**(`position`, `characterShapeOptions`, `scene`): `PhysicsCharacterController`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L358)

instanciate a new characterController

#### Parameters

##### position

[`Vector3`](Vector3.md)

Initial position

##### characterShapeOptions

[`CharacterShapeOptions`](../interfaces/CharacterShapeOptions.md)

character physics shape options

##### scene

[`Scene`](Scene.md)

Scene

#### Returns

`PhysicsCharacterController`

## Properties

### acceleration

> **acceleration**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L327)

Acceleration factor. A value of 1 means reaching max velocity immediately

***

### characterMass

> **characterMass**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:338](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L338)

character mass
default 0

***

### characterStrength

> **characterStrength**: `number` = `1e38`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L322)

Strength when pushing other bodies
default 1e38

***

### dynamicFriction

> **dynamicFriction**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L261)

friction with dynamic surfaces
default 1

***

### footOffset

> **footOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:308](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L308)

Distance from the body's `position` to the character's foot along `up`.
Used by `maxStepHeight` to measure how high a contact sits above the foot.
Defaults to half the capsule height passed at construction. Override when
supplying a custom collision shape whose center is not at half-height.

***

### keepContactTolerance

> **keepContactTolerance**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L241)

maximum distance to keep contact
default 0.1

***

### keepDistance

> **keepDistance**: `number` = `0.05`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L236)

minimum distance to make contact
default 0.05

***

### maxAcceleration

> **maxAcceleration**: `number` = `50`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L332)

maximum acceleration in world space coordinate

***

### maxCastIterations

> **maxCastIterations**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L246)

maximum number of raycast per integration starp
default 10

***

### maxCharacterSpeedForSolver

> **maxCharacterSpeedForSolver**: `number` = `10.0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L313)

character maximum speed
default 10

***

### maxSlopeCosine

> **maxSlopeCosine**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L267)

cosine value of slope angle that can be climbed
computed as `Math.cos(Math.PI * (angleInDegree / 180.0));`
default 0.5 (value for a 60deg angle)

***

### maxStepHeight

> **maxStepHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L301)

Maximum height the character can automatically step up onto a walkable surface.
When greater than 0 the controller enforces this as a strict cap on step climbing,
independent of the collision shape's geometry:

 - Obstacles whose top is at most maxStepHeight above the character's foot are
   climbed (either rolled over naturally by the capsule, or snapped up via the
   step-up sweep when the simplex would otherwise be blocked).
 - Obstacles taller than maxStepHeight are blocked, even ones the capsule's
   rounded bottom would otherwise glide over.

This is enforced by demoting any "walkable" contact that sits more than
maxStepHeight above the foot into an extra horizontal wall constraint, so the
step-height limit does not depend on the capsule radius. As a documented side
effect, slopes whose contact rises above maxStepHeight (roughly when
`capsuleRadius * (1 - cos(slopeAngle)) > maxStepHeight`) are also treated as
walls. Pick maxStepHeight large enough to clear the slope angles you want to
remain walkable, or rely on `maxSlopeCosine` alone (with maxStepHeight = 0)
when the rounded-capsule riding behavior is acceptable.

Step-up only triggers against STATIC and ANIMATED bodies. Dynamic bodies fall
through to normal contact resolution and pushing behavior.

Thin walls / fences with floor behind them are not considered steppable: the
landing must be measurably higher than the starting position along `up`.

The foot is computed as `position - up * footOffset`. Override `footOffset` if
you supply a custom collision shape whose center is not at half-height.

Assumes `up` is a unit vector.

default 0 (disabled)

***

### onTriggerCollisionObservable

> **onTriggerCollisionObservable**: [`Observable`](Observable.md)\<[`ICharacterControllerCollisionEvent`](../interfaces/ICharacterControllerCollisionEvent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:343](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L343)

Observable for trigger entered and trigger exited events

***

### penetrationRecoverySpeed

> **penetrationRecoverySpeed**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L251)

speed when recovery from penetration
default 1.0

***

### staticFriction

> **staticFriction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L256)

friction with static surfaces
default 0

***

### up

> **up**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:317](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L317)

up vector

## Accessors

### shape

#### Get Signature

> **get** **shape**(): [`PhysicsShape`](PhysicsShape.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L405)

Get shape used for collision

##### Returns

[`PhysicsShape`](PhysicsShape.md)

#### Set Signature

> **set** **shape**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:412](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L412)

Set shape used for collision

##### Parameters

###### value

[`PhysicsShape`](PhysicsShape.md)

##### Returns

`void`

## Methods

### calculateMovement()

> **calculateMovement**(`deltaTime`, `forwardWorld`, `surfaceNormal`, `currentVelocity`, `surfaceVelocity`, `desiredVelocity`, `upWorld`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:2120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L2120)

Helper function to calculate velocity based on surface informations and current velocity state and target

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### forwardWorld

[`Vector3`](Vector3.md)

character forward in world coordinates

##### surfaceNormal

[`Vector3`](Vector3.md)

surface normal direction

##### currentVelocity

[`Vector3`](Vector3.md)

current velocity

##### surfaceVelocity

[`Vector3`](Vector3.md)

velocity induced by the surface

##### desiredVelocity

[`Vector3`](Vector3.md)

desired character velocity

##### upWorld

[`Vector3`](Vector3.md)

up vector in world space

#### Returns

[`Vector3`](Vector3.md)

a new velocity vector

***

### calculateMovementToRef()

> **calculateMovementToRef**(`deltaTime`, `forwardWorld`, `surfaceNormal`, `currentVelocity`, `surfaceVelocity`, `desiredVelocity`, `upWorld`, `result`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:2029](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L2029)

Helper function to calculate velocity based on surface informations and current velocity state and target

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### forwardWorld

[`Vector3`](Vector3.md)

character forward in world coordinates

##### surfaceNormal

[`Vector3`](Vector3.md)

surface normal direction

##### currentVelocity

[`Vector3`](Vector3.md)

current velocity

##### surfaceVelocity

[`Vector3`](Vector3.md)

velocity induced by the surface

##### desiredVelocity

[`Vector3`](Vector3.md)

desired character velocity

##### upWorld

[`Vector3`](Vector3.md)

up vector in world space

##### result

[`Vector3`](Vector3.md)

resulting velocity vector

#### Returns

`boolean`

boolean true if result has been computed

***

### checkSupport()

> **checkSupport**(`deltaTime`, `direction`): [`CharacterSurfaceInfo`](../interfaces/CharacterSurfaceInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:1370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L1370)

Compute a CharacterSurfaceInfo from current state and a direction

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### direction

[`Vector3`](Vector3.md)

direction to check, usually gravity direction

#### Returns

[`CharacterSurfaceInfo`](../interfaces/CharacterSurfaceInfo.md)

a CharacterSurfaceInfo object

***

### checkSupportToRef()

> **checkSupportToRef**(`deltaTime`, `direction`, `surfaceInfo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:1388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L1388)

Compute a CharacterSurfaceInfo from current state and a direction

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### direction

[`Vector3`](Vector3.md)

direction to check, usually gravity direction

##### surfaceInfo

[`CharacterSurfaceInfo`](../interfaces/CharacterSurfaceInfo.md)

output for surface info

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L389)

Dispose the character controller

#### Returns

`void`

***

### getPosition()

> **getPosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L425)

Character position

#### Returns

[`Vector3`](Vector3.md)

Character position

***

### getVelocity()

> **getVelocity**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:442](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L442)

Character velocity

#### Returns

[`Vector3`](Vector3.md)

Character velocity vector

***

### integrate()

> **integrate**(`deltaTime`, `surfaceInfo`, `gravity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:1984](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L1984)

Update internal state. Must be called once per frame

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### surfaceInfo

[`CharacterSurfaceInfo`](../interfaces/CharacterSurfaceInfo.md)

surface information returned by checkSupport

##### gravity

[`Vector3`](Vector3.md)

gravity applied to the character. Can be different that world gravity

#### Returns

`void`

***

### moveWithCollisions()

> **moveWithCollisions**(`displacement`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:1962](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L1962)

Move the character with collisions

#### Parameters

##### displacement

[`Vector3`](Vector3.md)

defines the requested displacement vector

#### Returns

`void`

***

### setPosition()

> **setPosition**(`position`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L433)

Teleport character to a new position

#### Parameters

##### position

[`Vector3`](Vector3.md)

new position

#### Returns

`void`

***

### setVelocity()

> **setVelocity**(`velocity`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/characterController.ts:450](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/characterController.ts#L450)

Set velocity vector

#### Parameters

##### velocity

[`Vector3`](Vector3.md)

vector

#### Returns

`void`
