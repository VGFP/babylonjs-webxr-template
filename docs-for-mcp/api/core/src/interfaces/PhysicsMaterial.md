[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsMaterial

# Interface: PhysicsMaterial

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L39)

Physics material class
Helps setting friction and restitution that are used to compute responding forces in collision response

## Properties

### friction?

> `optional` **friction?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L48)

Sets the friction used by this material

The friction determines how much an object will slow down when it is in contact with another object.
This is important for simulating realistic physics, such as when an object slides across a surface.

If not provided, a default value of 0.5 will be used.

***

### frictionCombine?

> `optional` **frictionCombine?**: [`PhysicsMaterialCombineMode`](../enumerations/PhysicsMaterialCombineMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L81)

Describes how two different friction values should be combined. See PhysicsMaterialCombineMode for
more details.

If not provided, will use PhysicsMaterialCombineMode.MINIMUM

***

### restitution?

> `optional` **restitution?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L73)

Sets the restitution of the physics material.

The restitution is a factor which describes, the amount of energy that is retained after a collision,
which should be a number between 0 and 1..

A restitution of 0 means that no energy is retained and the objects will not bounce off each other,
while a restitution of 1 means that all energy is retained and the objects will bounce.

Note, though, due that due to the simulation implementation, an object with a restitution of 1 may
still lose energy over time.

If not provided, a default value of 0 will be used.

***

### restitutionCombine?

> `optional` **restitutionCombine?**: [`PhysicsMaterialCombineMode`](../enumerations/PhysicsMaterialCombineMode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L89)

Describes how two different restitution values should be combined. See PhysicsMaterialCombineMode for
more details.

If not provided, will use PhysicsMaterialCombineMode.MAXIMUM

***

### staticFriction?

> `optional` **staticFriction?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsMaterial.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/physicsMaterial.ts#L57)

Sets the static friction used by this material.

Static friction is the friction that must be overcome before a pair of objects can start sliding
relative to each other; for physically-realistic behaviour, it should be at least as high as the
normal friction value. If not provided, the friction value will be used
