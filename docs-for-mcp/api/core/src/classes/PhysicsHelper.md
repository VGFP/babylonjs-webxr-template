[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsHelper

# Class: PhysicsHelper

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L73)

A helper for physics simulations

## See

https://doc.babylonjs.com/features/featuresDeepDive/physics/usingPhysicsEngine#further-functionality-of-the-impostor-class

## Constructors

### Constructor

> **new PhysicsHelper**(`scene`): `PhysicsHelper`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L82)

Initializes the Physics helper

#### Parameters

##### scene

[`Scene`](Scene.md)

Babylon.js scene

#### Returns

`PhysicsHelper`

## Methods

### applyRadialExplosionForce()

> **applyRadialExplosionForce**(`origin`, `radiusOrEventOptions`, `strength?`, `falloff?`): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsRadialExplosionEvent`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L171)

Applies a radial explosion force

#### Parameters

##### origin

[`Vector3`](Vector3.md)

the origin of the explosion

##### radiusOrEventOptions

`number` \| [`PhysicsRadialExplosionEventOptions`](PhysicsRadialExplosionEventOptions.md)

the radius or the options of radial explosion

##### strength?

`number`

the explosion strength

##### falloff?

[`PhysicsRadialImpulseFalloff`](../enumerations/PhysicsRadialImpulseFalloff.md)

possible options: Constant & Linear. Defaults to Constant

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsRadialExplosionEvent`\>

A physics radial explosion event, or null

***

### applyRadialExplosionImpulse()

> **applyRadialExplosionImpulse**(`origin`, `radiusOrEventOptions`, `strength?`, `falloff?`): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsRadialExplosionEvent`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L100)

Applies a radial explosion impulse

#### Parameters

##### origin

[`Vector3`](Vector3.md)

the origin of the explosion

##### radiusOrEventOptions

`number` \| [`PhysicsRadialExplosionEventOptions`](PhysicsRadialExplosionEventOptions.md)

the radius or the options of radial explosion

##### strength?

`number`

the explosion strength

##### falloff?

[`PhysicsRadialImpulseFalloff`](../enumerations/PhysicsRadialImpulseFalloff.md)

possible options: Constant & Linear. Defaults to Constant

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsRadialExplosionEvent`\>

A physics radial explosion event, or null

***

### gravitationalField()

> **gravitationalField**(`origin`, `radiusOrEventOptions`, `strength?`, `falloff?`): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsGravitationalFieldEvent`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L270)

Creates a gravitational field

#### Parameters

##### origin

[`Vector3`](Vector3.md)

the origin of the gravitational field

##### radiusOrEventOptions

`number` \| [`PhysicsRadialExplosionEventOptions`](PhysicsRadialExplosionEventOptions.md)

the radius or the options of radial gravitational field

##### strength?

`number`

the gravitational field strength

##### falloff?

[`PhysicsRadialImpulseFalloff`](../enumerations/PhysicsRadialImpulseFalloff.md)

possible options: Constant & Linear. Defaults to Constant

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsGravitationalFieldEvent`\>

A physics gravitational field event, or null

***

### updraft()

> **updraft**(`origin`, `radiusOrEventOptions`, `strength?`, `height?`, `updraftMode?`): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsUpdraftEvent`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L313)

Creates a physics updraft event

#### Parameters

##### origin

[`Vector3`](Vector3.md)

the origin of the updraft

##### radiusOrEventOptions

`number` \| [`PhysicsUpdraftEventOptions`](PhysicsUpdraftEventOptions.md)

the radius or the options of the updraft

##### strength?

`number`

the strength of the updraft

##### height?

`number`

the height of the updraft

##### updraftMode?

[`PhysicsUpdraftMode`](../enumerations/PhysicsUpdraftMode.md)

possible options: Center & Perpendicular. Defaults to Center

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsUpdraftEvent`\>

A physics updraft event, or null

***

### vortex()

> **vortex**(`origin`, `radiusOrEventOptions`, `strength?`, `height?`): [`Nullable`](../type-aliases/Nullable.md)\<`PhysicsVortexEvent`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/physicsHelper.ts:358](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/physicsHelper.ts#L358)

Creates a physics vortex event

#### Parameters

##### origin

[`Vector3`](Vector3.md)

the of the vortex

##### radiusOrEventOptions

`number` \| [`PhysicsVortexEventOptions`](PhysicsVortexEventOptions.md)

the radius or the options of the vortex

##### strength?

`number`

the strength of the vortex

##### height?

`number`

the height of the vortex

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`PhysicsVortexEvent`\>

a Physics vortex event, or null
A physics vortex event or null
