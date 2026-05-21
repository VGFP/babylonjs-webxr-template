[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsMassProperties

# Interface: PhysicsMassProperties

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:304](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L304)

Parameters used to describe mass and inertia of the Physics Body

## Properties

### centerOfMass?

> `optional` **centerOfMass?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L313)

The center of mass, in local space. This is The
point the body will rotate around when applying
an angular velocity.

If not provided, the physics engine will compute
an appropriate value.

***

### inertia?

> `optional` **inertia?**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L333)

The principal moments of inertia of this object
for a unit mass. This determines how easy it is
for the body to rotate. A value of zero on any
axis will be used as infinite inertia about that
axis.

If not provided, the physics engine will compute
an appropriate value.

***

### inertiaOrientation?

> `optional` **inertiaOrientation?**: [`Quaternion`](../classes/Quaternion.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L345)

The rotation rotating from inertia major axis space
to parent space (i.e., the rotation which, when
applied to the 3x3 inertia tensor causes the inertia
tensor to become a diagonal matrix). This determines
how the values of inertia are aligned with the parent
object.

If not provided, the physics engine will compute
an appropriate value.

***

### mass?

> `optional` **mass?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L322)

The total mass of this object, in kilograms. This
affects how easy it is to move the body. A value
of zero will be used as an infinite mass.

If not provided, the physics engine will compute
an appropriate value.
