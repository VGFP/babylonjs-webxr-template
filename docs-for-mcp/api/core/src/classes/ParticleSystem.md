[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParticleSystem

# Class: ParticleSystem

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L40)

This represents a particle system in Babylon.
Particles are often small sprites used to simulate hard-to-reproduce phenomena like fire, smoke, water, or abstract visual effects like magic glitter and faery dust.
Particles can take different shapes while emitted like box, sphere, cone or you can write your custom function.

## Example

```ts
https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro
```

## Extends

- `ThinParticleSystem`

## Constructors

### Constructor

> **new ParticleSystem**(`name`, `capacity`, `sceneOrEngine`, `customEffect?`, `isAnimationSheetEnabled?`, `epsilon?`, `noUpdateQueue?`): `ParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L547)

Instantiates a particle system.
Particles are often small sprites used to simulate hard-to-reproduce phenomena like fire, smoke, water, or abstract visual effects like magic glitter and faery dust.

#### Parameters

##### name

`string`

The name of the particle system

##### capacity

`number`

The max number of particles alive at the same time

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

The scene the particle system belongs to or the engine to use if no scene

##### customEffect?

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\> = `null`

a custom effect used to change the way particles are rendered by default

##### isAnimationSheetEnabled?

`boolean` = `false`

Must be true if using a spritesheet to animate the particles texture

##### epsilon?

`number` = `0.01`

Offset used to render the particles

##### noUpdateQueue?

`boolean` = `false`

If true, the particle system will start with an empty update queue

#### Returns

`ParticleSystem`

#### Inherited from

`ThinParticleSystem.constructor`

## Properties

### activeSubSystems

> **activeSubSystems**: `ParticleSystem`[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L77)

The current active Sub-systems, this property is used by the root particle system only.

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L79)

List of animations used by the particle system.

#### Inherited from

`ThinParticleSystem.animations`

***

### applyFog

> **applyFog**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L236)

Gets or sets a boolean indicating that this particle system will allow fog to be rendered on it (false by default)

#### Inherited from

`ThinParticleSystem.applyFog`

***

### beginAnimationFrom

> **beginAnimationFrom**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L380)

Gets or sets the frame to start the animation from when beginAnimationOnStart is true

#### Inherited from

`ThinParticleSystem.beginAnimationFrom`

***

### beginAnimationLoop

> **beginAnimationLoop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L390)

Gets or sets a boolean indicating if animations must loop when beginAnimationOnStart is true

#### Inherited from

`ThinParticleSystem.beginAnimationLoop`

***

### beginAnimationOnStart

> **beginAnimationOnStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L375)

Gets or sets a boolean indicating that hosted animations (in the system.animations array) must be started when system.start() is called

#### Inherited from

`ThinParticleSystem.beginAnimationOnStart`

***

### beginAnimationTo

> **beginAnimationTo**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L385)

Gets or sets the frame to end the animation on when beginAnimationOnStart is true

#### Inherited from

`ThinParticleSystem.beginAnimationTo`

***

### blendMode

> **blendMode**: `number` = `BaseParticleSystem.BLENDMODE_ONEONE`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L310)

Blend mode use to render the particle
For original blend modes which are exposed from ParticleSystem (OneOne, Standard, Add, Multiply, MultiplyAdd, and Subtract), use ParticleSystem.BLENDMODE_FOO
For all other blend modes, use Engine Constants.ALPHA_FOO blend modes

#### Inherited from

`ThinParticleSystem.blendMode`

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L400)

Gets or sets the active clipplane 1

#### Inherited from

`ThinParticleSystem.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L405)

Gets or sets the active clipplane 2

#### Inherited from

`ThinParticleSystem.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L410)

Gets or sets the active clipplane 3

#### Inherited from

`ThinParticleSystem.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L415)

Gets or sets the active clipplane 4

#### Inherited from

`ThinParticleSystem.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L420)

Gets or sets the active clipplane 5

#### Inherited from

`ThinParticleSystem.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L425)

Gets or sets the active clipplane 6

#### Inherited from

`ThinParticleSystem.clipPlane6`

***

### color1

> **color1**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:737](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L737)

Random color of each particle after it has been emitted, between color1 and color2 vectors

#### Inherited from

`ThinParticleSystem.color1`

***

### color2

> **color2**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:741](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L741)

Random color of each particle after it has been emitted, between color1 and color2 vectors

#### Inherited from

`ThinParticleSystem.color2`

***

### colorDead

> **colorDead**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:745](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L745)

Color the particle will have at the end of its lifetime

#### Inherited from

`ThinParticleSystem.colorDead`

***

### customShader

> **customShader**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L225)

This can help using your own shader to render the particle system.
The according effect will be created

#### Inherited from

`ThinParticleSystem.customShader`

***

### defaultProjectionMatrix

> **defaultProjectionMatrix**: [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L295)

Gets or sets a matrix to use to compute projection

#### Inherited from

`ThinParticleSystem.defaultProjectionMatrix`

***

### defaultViewMatrix

> **defaultViewMatrix**: [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L298)

Gets or sets a matrix to use to compute view

#### Inherited from

`ThinParticleSystem.defaultViewMatrix`

***

### disposeOnStop

> **disposeOnStop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L146)

Specifies whether the particle system will be disposed once it reaches the end of the animation.

#### Inherited from

`ThinParticleSystem.disposeOnStop`

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L82)

Specifies if the particle system should be serialized

***

### emitRate

> **emitRate**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L114)

The maximum number of particles to emit per frame

#### Inherited from

`ThinParticleSystem.emitRate`

***

### emitter

> **emitter**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L109)

The emitter represents the Mesh or position we are attaching the particle system to.

#### Inherited from

`ThinParticleSystem.emitter`

***

### endSpriteCellID

> **endSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L337)

If using a spritesheet (isAnimationSheetEnabled) defines the last sprite cell to display

#### Inherited from

`ThinParticleSystem.endSpriteCellID`

***

### flowMapStrength

> **flowMapStrength**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L118)

The strength of the flow map

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L316)

Forces the particle to write their depth information to the depth buffer. This can help preventing other draw calls
to override the particles.

#### Inherited from

`ThinParticleSystem.forceDepthWrite`

***

### gravity

> **gravity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L468)

You can use gravity if you want to give an orientation to your particles.

#### Inherited from

`ThinParticleSystem.gravity`

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L89)

The id of the Particle system.

#### Inherited from

`ThinParticleSystem.id`

***

### isGPU

> `readonly` **isGPU**: `false` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L370)

Indicates that the particle system is CPU based

#### Inherited from

`ThinParticleSystem.isGPU`

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L219)

The layer mask we are rendering the particles through.

#### Inherited from

`ThinParticleSystem.layerMask`

***

### limitVelocityDamping

> **limitVelocityDamping**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:544](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L544)

Gets or sets a value indicating the damping to apply if the limit velocity factor is reached

#### Inherited from

`ThinParticleSystem.limitVelocityDamping`

***

### manualEmitCount

> **manualEmitCount**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L119)

If you want to launch only a few particles at once, that can be done, as well.

#### Inherited from

`ThinParticleSystem.manualEmitCount`

***

### maxAngularSpeed

> **maxAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L209)

Maximum angular speed of emitting particles (Z-axis rotation for each particle).

#### Inherited from

`ThinParticleSystem.maxAngularSpeed`

***

### maxEmitPower

> **maxEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L155)

Maximum power of emitting particles.

#### Inherited from

`ThinParticleSystem.maxEmitPower`

***

### maxInitialRotation

> **maxInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L200)

Gets or sets the maximal initial rotation in radians.

#### Inherited from

`ThinParticleSystem.maxInitialRotation`

***

### maxLifeTime

> **maxLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L164)

Maximum life time of emitting particles.

#### Inherited from

`ThinParticleSystem.maxLifeTime`

***

### maxScaleX

> **maxScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L182)

Maximum scale of emitting particles on X axis.

#### Inherited from

`ThinParticleSystem.maxScaleX`

***

### maxScaleY

> **maxScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L191)

Maximum scale of emitting particles on Y axis.

#### Inherited from

`ThinParticleSystem.maxScaleY`

***

### maxSize

> **maxSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L173)

Maximum Size of emitting particles.

#### Inherited from

`ThinParticleSystem.maxSize`

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L155)

Gets or sets an object used to store user defined information for the particle system

***

### minAngularSpeed

> **minAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L205)

Minimum angular speed of emitting particles (Z-axis rotation for each particle).

#### Inherited from

`ThinParticleSystem.minAngularSpeed`

***

### minEmitPower

> **minEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L151)

Minimum power of emitting particles.

#### Inherited from

`ThinParticleSystem.minEmitPower`

***

### minInitialRotation

> **minInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L196)

Gets or sets the minimal initial rotation in radians.

#### Inherited from

`ThinParticleSystem.minInitialRotation`

***

### minLifeTime

> **minLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L160)

Minimum life time of emitting particles.

#### Inherited from

`ThinParticleSystem.minLifeTime`

***

### minScaleX

> **minScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L178)

Minimum scale of emitting particles on X axis.

#### Inherited from

`ThinParticleSystem.minScaleX`

***

### minScaleY

> **minScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L187)

Minimum scale of emitting particles on Y axis.

#### Inherited from

`ThinParticleSystem.minScaleY`

***

### minSize

> **minSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L169)

Minimum Size of emitting particles.

#### Inherited from

`ThinParticleSystem.minSize`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L94)

The friendly name of the Particle system.

#### Inherited from

`ThinParticleSystem.name`

***

### noiseStrength

> **noiseStrength**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L268)

Gets or sets the strength to apply to the noise value (default is (10, 10, 10))

#### Inherited from

`ThinParticleSystem.noiseStrength`

***

### onAnimationEnd

> **onAnimationEnd**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L303)

Callback triggered when the particle animation is ending.

#### Inherited from

`ThinParticleSystem.onAnimationEnd`

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L155)

An event triggered when the system is disposed

#### Inherited from

`ThinParticleSystem.onDisposeObservable`

***

### onStartedObservable

> **onStartedObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L163)

An event triggered when the system is started

#### Inherited from

`ThinParticleSystem.onStartedObservable`

***

### onStoppedObservable

> **onStoppedObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L159)

An event triggered when the system is stopped

#### Inherited from

`ThinParticleSystem.onStoppedObservable`

***

### particleEmitterType

> **particleEmitterType**: [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:756](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L756)

The particle emitter type defines the emitter used by the particle system.
It can be for example box, sphere, or cone...

#### Inherited from

`ThinParticleSystem.particleEmitterType`

***

### particleTexture

> **particleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L214)

The texture used to render each particle. (this can be a spritesheet)

#### Inherited from

`ThinParticleSystem.particleTexture`

***

### paused

> **paused**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1988](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1988)

Gets or sets a boolean indicating that the particle system is paused (no animation will be done).

#### Inherited from

`ThinParticleSystem.paused`

***

### preventAutoStart

> **preventAutoStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L231)

By default particle system starts as soon as they are created. This prevents the
automatic start to happen and let you decide when to start emitting particles.

#### Inherited from

`ThinParticleSystem.preventAutoStart`

***

### preWarmCycles

> **preWarmCycles**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L319)

Gets or sets a value indicating how many cycles (or frames) must be executed before first rendering (this value has to be set before starting the system). Default is 0

#### Inherited from

`ThinParticleSystem.preWarmCycles`

***

### preWarmStepOffset

> **preWarmStepOffset**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L322)

Gets or sets a value indicating the time step multiplier to use in pre-warm mode (default is 1)

#### Inherited from

`ThinParticleSystem.preWarmStepOffset`

***

### recycleParticle

> **recycleParticle**: (`particle`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1728](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1728)

"Recycles" one of the particle by copying it back to the "stock" of particles and removing it from the active list.
Its lifetime will start back at 0.

#### Parameters

##### particle

[`Particle`](Particle.md)

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.recycleParticle`

***

### renderingGroupId

> **renderingGroupId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L104)

The rendering group used by the Particle system to chose when to render.

#### Inherited from

`ThinParticleSystem.renderingGroupId`

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L99)

Snippet ID if the particle system was created from the snippet server

#### Inherited from

`ThinParticleSystem.snippetId`

***

### spriteCellChangeSpeed

> **spriteCellChangeSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L327)

If using a spritesheet (isAnimationSheetEnabled) defines the speed of the sprite loop (default is 1 meaning the animation will play once during the entire particle lifetime)

#### Inherited from

`ThinParticleSystem.spriteCellChangeSpeed`

***

### spriteCellHeight

> **spriteCellHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L345)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell height to use

#### Inherited from

`ThinParticleSystem.spriteCellHeight`

***

### spriteCellLoop

> **spriteCellLoop**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L349)

If using a spritesheet (isAnimationSheetEnabled), defines wether the sprite animation is looping

#### Inherited from

`ThinParticleSystem.spriteCellLoop`

***

### spriteCellWidth

> **spriteCellWidth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L341)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell width to use

#### Inherited from

`ThinParticleSystem.spriteCellWidth`

***

### spriteRandomStartCell

> **spriteRandomStartCell**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L353)

This allows the system to random pick the start cell ID between startSpriteCellID and endSpriteCellID

#### Inherited from

`ThinParticleSystem.spriteRandomStartCell`

***

### startDelay

> **startDelay**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L532)

Defines the delay in milliseconds before starting the system (0 by default)

#### Inherited from

`ThinParticleSystem.startDelay`

***

### startSpriteCellID

> **startSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L332)

If using a spritesheet (isAnimationSheetEnabled) defines the first sprite cell to display

#### Inherited from

`ThinParticleSystem.startSpriteCellID`

***

### subEmitters

> **subEmitters**: (`ParticleSystem` \| [`SubEmitter`](SubEmitter.md) \| [`SubEmitter`](SubEmitter.md)[])[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L65)

The Sub-emitters templates that will be used to generate the sub particle system to be associated with the system, this property is used by the root particle system only.
When a particle is spawned, an array will be chosen at random and all the emitters in that array will be attached to the particle.  (Default: [])

***

### textureMask

> **textureMask**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:750](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L750)

An optional mask to filter some colors out of the texture, or filter a part of the alpha channel

#### Inherited from

`ThinParticleSystem.textureMask`

***

### translationPivot

> **translationPivot**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L356)

Gets or sets a Vector2 used to move the pivot (by default (0,0))

#### Inherited from

`ThinParticleSystem.translationPivot`

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L84)

Gets or sets the unique id of the particle system

#### Inherited from

`ThinParticleSystem.uniqueId`

***

### updateFunction

> **updateFunction**: (`particles`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L95)

This function can be defined to provide custom update for active particles.
This function will be called instead of regular update (age, position, color, etc.).
Do not forget that this function will be called on every frame so try to keep it simple and fast :)

#### Parameters

##### particles

[`Particle`](Particle.md)[]

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.updateFunction`

***

### updateInAnimate

> `readonly` **updateInAnimate**: `true` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L241)

Indicates that the update of particles is done in the animate function

#### Inherited from

`ThinParticleSystem.updateInAnimate`

***

### updateSpeed

> **updateSpeed**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L124)

The overall motion speed (0.01 is default update speed, faster updates = faster animation)

#### Inherited from

`ThinParticleSystem.updateSpeed`

***

### worldOffset

> **worldOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L395)

Gets or sets a world offset applied to all particles

#### Inherited from

`ThinParticleSystem.worldOffset`

***

### BILLBOARDMODE\_ALL

> `readonly` `static` **BILLBOARDMODE\_ALL**: `7` = `Constants.PARTICLES_BILLBOARDMODE_ALL`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L48)

Billboard mode will apply to all axes

***

### BILLBOARDMODE\_STRETCHED

> `readonly` `static` **BILLBOARDMODE\_STRETCHED**: `8` = `Constants.PARTICLES_BILLBOARDMODE_STRETCHED`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L52)

Special billboard mode where the particle will be biilboard to the camera but rotated to align with direction

***

### BILLBOARDMODE\_STRETCHED\_LOCAL

> `readonly` `static` **BILLBOARDMODE\_STRETCHED\_LOCAL**: `9` = `Constants.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L56)

Special billboard mode where the particle will be billboard to the camera but only around the axis of the direction of particle emission

***

### BILLBOARDMODE\_Y

> `readonly` `static` **BILLBOARDMODE\_Y**: `2` = `Constants.PARTICLES_BILLBOARDMODE_Y`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L44)

Billboard mode will only apply to Y axis

***

### BLENDMODE\_ADD

> `static` **BLENDMODE\_ADD**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L61)

Add current color and particle color multiplied by particle’s alpha

#### Inherited from

`ThinParticleSystem.BLENDMODE_ADD`

***

### BLENDMODE\_MULTIPLY

> `static` **BLENDMODE\_MULTIPLY**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L65)

Multiply current color with particle color

#### Inherited from

`ThinParticleSystem.BLENDMODE_MULTIPLY`

***

### BLENDMODE\_MULTIPLYADD

> `static` **BLENDMODE\_MULTIPLYADD**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L69)

Multiply current color with particle color then add current color and particle color multiplied by particle’s alpha

#### Inherited from

`ThinParticleSystem.BLENDMODE_MULTIPLYADD`

***

### BLENDMODE\_ONEONE

> `static` **BLENDMODE\_ONEONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L53)

Source color is added to the destination color without alpha affecting the result. Great for additive glow effects (fire, magic, lasers)

#### Inherited from

`ThinParticleSystem.BLENDMODE_ONEONE`

***

### BLENDMODE\_STANDARD

> `static` **BLENDMODE\_STANDARD**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L57)

Blend current color and particle color using particle’s alpha. Same as Constants.ALPHA_COMBINE, the go-to for transparency. 100% alpha means source, 0% alpha means background. Glass, UI fade, smoke

#### Inherited from

`ThinParticleSystem.BLENDMODE_STANDARD`

***

### BLENDMODE\_SUBTRACT

> `static` **BLENDMODE\_SUBTRACT**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L74)

Subtracts source (particle) from destination (current color), leading to darker results
- NOTE: Init as -1 so we can properly map all modes to Engine Const's (otherwise ALPHA_SUBTRACT will conflict with BLENDMODE_MULTIPLY since both use 3)

#### Inherited from

`ThinParticleSystem.BLENDMODE_SUBTRACT`

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L88)

Force all the particle systems to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

`ThinParticleSystem.ForceGLSL`

## Accessors

### attractors

#### Get Signature

> **get** **attractors**(): [`Attractor`](Attractor.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L277)

The list of attractors used to change the direction of the particles in the system.
Please note that this is a copy of the internal array. If you want to modify it, please use the addAttractor and removeAttractor methods.

##### Returns

[`Attractor`](Attractor.md)[]

#### Inherited from

`ThinParticleSystem.attractors`

***

### billboardMode

#### Get Signature

> **get** **billboardMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:767](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L767)

Gets or sets the billboard mode to use when isBillboardBased = true.
Value can be: ParticleSystem.BILLBOARDMODE_ALL, ParticleSystem.BILLBOARDMODE_Y, ParticleSystem.BILLBOARDMODE_STRETCHED, ParticleSystem.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL

##### Returns

`number`

#### Set Signature

> **set** **billboardMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:771](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L771)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.billboardMode`

***

### direction1

#### Get Signature

> **get** **direction1**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:666](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L666)

Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.
This only works when particleEmitterTyps is a BoxParticleEmitter

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **direction1**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:674](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L674)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.direction1`

***

### direction2

#### Get Signature

> **get** **direction2**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:684](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L684)

Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.
This only works when particleEmitterTyps is a BoxParticleEmitter

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **direction2**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L692)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.direction2`

***

### flowMap

#### Get Signature

> **get** **flowMap**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FlowMap`](FlowMap.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L121)

Gets or sets the current flow map

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FlowMap`](FlowMap.md)\>

#### Set Signature

> **set** **flowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L125)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`FlowMap`](FlowMap.md)\>

##### Returns

`void`

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:821](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L821)

Gets the image processing configuration used either in this material.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:830](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L830)

Sets the Default image processing configuration used either in the this material.

If sets to null, the scene one is in use.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.imageProcessingConfiguration`

***

### indexBuffer

#### Get Signature

> **get** **indexBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:497](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L497)

Gets the index buffer used by the particle system (or null if no index buffer is used (if _useInstancing=true))

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

#### Inherited from

`ThinParticleSystem.indexBuffer`

***

### isAnimationSheetEnabled

#### Get Signature

> **get** **isAnimationSheetEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:430](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L430)

Gets or sets whether an animation sprite sheet is enabled or not on the particle system

##### Returns

`boolean`

#### Set Signature

> **set** **isAnimationSheetEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L434)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.isAnimationSheetEnabled`

***

### isBillboardBased

#### Get Signature

> **get** **isBillboardBased**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L785)

Gets or sets a boolean indicating if the particles must be rendered as billboard or aligned with the direction

##### Returns

`boolean`

#### Set Signature

> **set** **isBillboardBased**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:789](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L789)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.isBillboardBased`

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L214)

Gets a boolean indicating that the particle system was disposed

##### Returns

`boolean`

#### Inherited from

`ThinParticleSystem.isDisposed`

***

### isLocal

#### Get Signature

> **get** **isLocal**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L345)

Specifies if the particles are updated in emitter local space or world space

##### Returns

`boolean`

#### Set Signature

> **set** **isLocal**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L349)

Specifies if the particles are updated in emitter local space or world space

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.isLocal`

***

### isNodeGenerated

#### Get Signature

> **get** **isNodeGenerated**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L112)

Returns true if the particle system was generated by a node particle system set

##### Returns

`boolean`

#### Overrides

`ThinParticleSystem.isNodeGenerated`

***

### maxEmitBox

#### Get Signature

> **get** **maxEmitBox**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:720](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L720)

Maximum box point around our emitter. Our emitter is the center of particles source, but if you want your particles to emit from more than one point, then you can tell it to do so.
This only works when particleEmitterTyps is a BoxParticleEmitter

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **maxEmitBox**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:728](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L728)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.maxEmitBox`

***

### minEmitBox

#### Get Signature

> **get** **minEmitBox**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:702](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L702)

Minimum box point around our emitter. Our emitter is the center of particles source, but if you want your particles to emit from more than one point, then you can tell it to do so.
This only works when particleEmitterTyps is a BoxParticleEmitter

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **minEmitBox**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:710](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L710)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.minEmitBox`

***

### noiseTexture

#### Get Signature

> **get** **noiseTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:504](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L504)

Gets or sets a texture used to add random noise to particle positions

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

#### Set Signature

> **set** **noiseTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:508](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L508)

Gets or sets a texture used to add random noise to particle positions

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.noiseTexture`

***

### onBeforeDrawParticlesObservable

#### Get Signature

> **get** **onBeforeDrawParticlesObservable**(): [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L472)

Observable that will be called just before the particles are drawn

##### Returns

[`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>\>

#### Inherited from

`ThinParticleSystem.onBeforeDrawParticlesObservable`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L169)

Sets a callback that will be triggered when the system is disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.onDispose`

***

### particles

#### Get Signature

> **get** **particles**(): [`Particle`](Particle.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L375)

Gets the current list of active particles

##### Returns

[`Particle`](Particle.md)[]

#### Inherited from

`ThinParticleSystem.particles`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L385)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

`ThinParticleSystem.shaderLanguage`

***

### source

#### Get Signature

> **get** **source**(): [`Nullable`](../type-aliases/Nullable.md)\<[`NodeParticleSystemSet`](NodeParticleSystemSet.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L105)

Gets the NodeParticleSystemSet that this particle system belongs to.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeParticleSystemSet`](NodeParticleSystemSet.md)\>

***

### startDirectionFunction

#### Get Signature

> **get** **startDirectionFunction**(): [`Nullable`](../type-aliases/Nullable.md)\<(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L108)

This function can be defined to specify initial direction for every new particle.
It by default use the emitterType defined function

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`) => `void`\>

#### Set Signature

> **set** **startDirectionFunction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L112)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<(`worldMatrix`, `directionToUpdate`, `particle`, `isLocal`) => `void`\>

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.startDirectionFunction`

***

### startPositionFunction

#### Get Signature

> **get** **startPositionFunction**(): [`Nullable`](../type-aliases/Nullable.md)\<(`worldMatrix`, `positionToUpdate`, `particle`, `isLocal`) => `void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L131)

This function can be defined to specify initial position for every new particle.
It by default use the emitterType defined function

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<(`worldMatrix`, `positionToUpdate`, `particle`, `isLocal`) => `void`\>

#### Set Signature

> **set** **startPositionFunction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L135)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<(`worldMatrix`, `positionToUpdate`, `particle`, `isLocal`) => `void`\>

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.startPositionFunction`

***

### targetStopDuration

#### Get Signature

> **get** **targetStopDuration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:819](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L819)

The amount of time the particle system is running (depends of the overall update speed).

##### Returns

`number`

#### Set Signature

> **set** **targetStopDuration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:823](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L823)

The amount of time the particle system is running (depends of the overall update speed).

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.targetStopDuration`

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:449](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L449)

Gets or sets a boolean enabling the use of logarithmic depth buffers, which is good for wide depth buffers.

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L453)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.useLogarithmicDepth`

***

### useRampGradients

#### Get Signature

> **get** **useRampGradients**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L303)

Gets or sets a boolean indicating that ramp gradients must be used

##### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro#ramp-gradients

##### Returns

`boolean`

#### Set Signature

> **set** **useRampGradients**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L307)

Gets or sets a boolean indicating that ramp gradients must be used

##### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/ramps_and_blends

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`ThinParticleSystem.useRampGradients`

***

### vertexBuffers

#### Get Signature

> **get** **vertexBuffers**(): [`Immutable`](../type-aliases/Immutable.md)\<\{\[`key`: `string`\]: [`VertexBuffer`](VertexBuffer.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:490](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L490)

Gets the vertex buffers used by the particle system

##### Returns

[`Immutable`](../type-aliases/Immutable.md)\<\{\[`key`: `string`\]: [`VertexBuffer`](VertexBuffer.md); \}\>

#### Inherited from

`ThinParticleSystem.vertexBuffers`

***

### vertexShaderName

#### Get Signature

> **get** **vertexShaderName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:483](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L483)

Gets the name of the particle vertex shader

##### Returns

`string`

#### Inherited from

`ThinParticleSystem.vertexShaderName`

## Methods

### addAlphaRemapGradient()

> **addAlphaRemapGradient**(`gradient`, `min`, `max`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:945](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L945)

Adds a new alpha remap gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### min

`number`

defines the alpha remap minimal range

##### max

`number`

defines the alpha remap maximal range

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addAlphaRemapGradient`

***

### addAngularSpeedGradient()

> **addAngularSpeedGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L973)

Adds a new angular speed gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the angular speed  to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addAngularSpeedGradient`

***

### addAttractor()

> **addAttractor**(`attractor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L161)

Add an attractor to the particle system. Attractors are used to change the direction of the particles in the system.

#### Parameters

##### attractor

[`Attractor`](Attractor.md)

The attractor to add to the particle system

#### Returns

`void`

#### Overrides

`ThinParticleSystem.addAttractor`

***

### addColorGradient()

> **addColorGradient**(`gradient`, `color1`, `color2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1292)

Adds a new color gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### color1

[`Color4`](Color4.md)

defines the color to affect to the specified gradient

##### color2?

[`Color4`](Color4.md)

defines an additional color used to define a range ([color, color2]) with main color to pick the final color from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

this particle system

#### Inherited from

`ThinParticleSystem.addColorGradient`

***

### addColorRemapGradient()

> **addColorRemapGradient**(`gradient`, `min`, `max`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:917](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L917)

Adds a new color remap gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### min

`number`

defines the color remap minimal range

##### max

`number`

defines the color remap maximal range

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addColorRemapGradient`

***

### addDragGradient()

> **addDragGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1116)

Adds a new drag gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the drag value to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addDragGradient`

***

### addEmitRateGradient()

> **addEmitRateGradient**(`gradient`, `factor`, `factor2?`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:643](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L643)

Adds a new emit rate gradient (please note that this will only work if you set the targetStopDuration property)

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the emit rate value to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

`this`

the current particle system

#### Inherited from

`ThinParticleSystem.addEmitRateGradient`

***

### addLifeTimeGradient()

> **addLifeTimeGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:841](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L841)

Adds a new life time gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the life time factor to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addLifeTimeGradient`

***

### addLimitVelocityGradient()

> **addLimitVelocityGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1067](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1067)

Adds a new limit velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the limit velocity value to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addLimitVelocityGradient`

***

### addRampGradient()

> **addRampGradient**(`gradient`, `color`): `ThinParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1256)

Adds a new ramp gradient used to remap particle colors

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### color

[`Color3`](Color3.md)

defines the color to affect to the specified gradient

#### Returns

`ThinParticleSystem`

the current particle system

#### Inherited from

`ThinParticleSystem.addRampGradient`

***

### addSizeGradient()

> **addSizeGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:873](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L873)

Adds a new size gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the size factor to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addSizeGradient`

***

### addStartSizeGradient()

> **addStartSizeGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1165)

Adds a new start size gradient (please note that this will only work if you set the targetStopDuration property)

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the start size value to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addStartSizeGradient`

***

### addVelocityGradient()

> **addVelocityGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1018](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1018)

Adds a new velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the velocity to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.addVelocityGradient`

***

### animate()

> **animate**(`preWarmOnly?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1994](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1994)

Animates the particle system for the current frame by emitting new particles and or animating the living ones.

#### Parameters

##### preWarmOnly?

`boolean` = `false`

will prevent the system from updating the vertex buffer (default is false)

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.animate`

***

### canStart()

> **canStart**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L88)

Gets or sets a function indicating if the particle system can start.

#### Returns

`boolean`

true if the particle system can start, false otherwise.

***

### clone()

> **clone**(`name`, `newEmitter`, `cloneTexture?`): `ParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:1092](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L1092)

Clones the particle system.

#### Parameters

##### name

`string`

The name of the cloned object

##### newEmitter

`any`

The new emitter to use

##### cloneTexture?

`boolean` = `false`

Also clone the textures if true

#### Returns

`ParticleSystem`

the cloned particle system

#### Overrides

`ThinParticleSystem.clone`

***

### createBoxEmitter()

> **createBoxEmitter**(`direction1`, `direction2`, `minEmitBox`, `maxEmitBox`): [`BoxParticleEmitter`](BoxParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:1048](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L1048)

Creates a Box Emitter for the particle system. (emits between direction1 and direction2 from within the box defined by minEmitBox and maxEmitBox)

#### Parameters

##### direction1

[`Vector3`](Vector3.md)

Particles are emitted between the direction1 and direction2 from within the box

##### direction2

[`Vector3`](Vector3.md)

Particles are emitted between the direction1 and direction2 from within the box

##### minEmitBox

[`Vector3`](Vector3.md)

Particles are emitted from the box between minEmitBox and maxEmitBox

##### maxEmitBox

[`Vector3`](Vector3.md)

Particles are emitted from the box between minEmitBox and maxEmitBox

#### Returns

[`BoxParticleEmitter`](BoxParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createBoxEmitter`

***

### createConeEmitter()

> **createConeEmitter**(`radius?`, `angle?`): [`ConeParticleEmitter`](ConeParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:1020](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L1020)

Creates a Cone Emitter for the particle system (emits from the cone to the particle position)

#### Parameters

##### radius?

`number` = `1`

The radius of the cone to emit from

##### angle?

`number` = `...`

The base angle of the cone

#### Returns

[`ConeParticleEmitter`](ConeParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createConeEmitter`

***

### createCylinderEmitter()

> **createCylinderEmitter**(`radius?`, `height?`, `radiusRange?`, `directionRandomizer?`): [`CylinderParticleEmitter`](CylinderParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:987](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L987)

Creates a Cylinder Emitter for the particle system (emits from the cylinder to the particle position)

#### Parameters

##### radius?

`number` = `1`

The radius of the emission cylinder

##### height?

`number` = `1`

The height of the emission cylinder

##### radiusRange?

`number` = `1`

The range of emission [0-1] 0 Surface only, 1 Entire Radius

##### directionRandomizer?

`number` = `0`

How much to randomize the particle direction [0-1]

#### Returns

[`CylinderParticleEmitter`](CylinderParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createCylinderEmitter`

***

### createDirectedConeEmitter()

> **createDirectedConeEmitter**(`radius?`, `angle?`, `direction1?`, `direction2?`): [`ConeDirectedParticleEmitter`](ConeDirectedParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:1034](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L1034)

Creates a Directed Cone Emitter for the particle system (emits between direction1 and direction2)

#### Parameters

##### radius?

`number` = `1`

The radius of the cone to emit from

##### angle?

`number` = `...`

The base angle of the cone

##### direction1?

[`Vector3`](Vector3.md) = `...`

Particles are emitted between the direction1 and direction2 from within the cone

##### direction2?

[`Vector3`](Vector3.md) = `...`

Particles are emitted between the direction1 and direction2 from within the cone

#### Returns

[`ConeDirectedParticleEmitter`](ConeDirectedParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createDirectedConeEmitter`

***

### createDirectedCylinderEmitter()

> **createDirectedCylinderEmitter**(`radius?`, `height?`, `radiusRange?`, `direction1?`, `direction2?`): [`CylinderDirectedParticleEmitter`](CylinderDirectedParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:1002](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L1002)

Creates a Directed Cylinder Emitter for the particle system (emits between direction1 and direction2)

#### Parameters

##### radius?

`number` = `1`

The radius of the cylinder to emit from

##### height?

`number` = `1`

The height of the emission cylinder

##### radiusRange?

`number` = `1`

the range of the emission cylinder [0-1] 0 Surface only, 1 Entire Radius (1 by default)

##### direction1?

[`Vector3`](Vector3.md) = `...`

Particles are emitted between the direction1 and direction2 from within the cylinder

##### direction2?

[`Vector3`](Vector3.md) = `...`

Particles are emitted between the direction1 and direction2 from within the cylinder

#### Returns

[`CylinderDirectedParticleEmitter`](CylinderDirectedParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createDirectedCylinderEmitter`

***

### createDirectedSphereEmitter()

> **createDirectedSphereEmitter**(`radius?`, `direction1?`, `direction2?`): [`SphereDirectedParticleEmitter`](SphereDirectedParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:973](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L973)

Creates a Directed Sphere Emitter for the particle system (emits between direction1 and direction2)

#### Parameters

##### radius?

`number` = `1`

The radius of the sphere to emit from

##### direction1?

[`Vector3`](Vector3.md) = `...`

Particles are emitted between the direction1 and direction2 from within the sphere

##### direction2?

[`Vector3`](Vector3.md) = `...`

Particles are emitted between the direction1 and direction2 from within the sphere

#### Returns

[`SphereDirectedParticleEmitter`](SphereDirectedParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createDirectedSphereEmitter`

***

### createHemisphericEmitter()

> **createHemisphericEmitter**(`radius?`, `radiusRange?`): [`HemisphericParticleEmitter`](HemisphericParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:948](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L948)

Creates a Hemisphere Emitter for the particle system (emits along the hemisphere radius)

#### Parameters

##### radius?

`number` = `1`

The radius of the hemisphere to emit from

##### radiusRange?

`number` = `1`

The range of the hemisphere to emit from [0-1] 0 Surface Only, 1 Entire Radius

#### Returns

[`HemisphericParticleEmitter`](HemisphericParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createHemisphericEmitter`

***

### createMeshEmitter()

> **createMeshEmitter**(`mesh?`): [`MeshParticleEmitter`](MeshParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:1063](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L1063)

Creates a Mesh Emitter for the particle system (emits from the surface of a mesh)

#### Parameters

##### mesh?

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\> = `null`

The mesh to use as the emitter source

#### Returns

[`MeshParticleEmitter`](MeshParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createMeshEmitter`

***

### createPointEmitter()

> **createPointEmitter**(`direction1`, `direction2`): [`PointParticleEmitter`](PointParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:936](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L936)

Creates a Point Emitter for the particle system (emits directly from the emitter position)

#### Parameters

##### direction1

[`Vector3`](Vector3.md)

Particles are emitted between the direction1 and direction2 from within the box

##### direction2

[`Vector3`](Vector3.md)

Particles are emitted between the direction1 and direction2 from within the box

#### Returns

[`PointParticleEmitter`](PointParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createPointEmitter`

***

### createSphereEmitter()

> **createSphereEmitter**(`radius?`, `radiusRange?`): [`SphereParticleEmitter`](SphereParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:960](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L960)

Creates a Sphere Emitter for the particle system (emits along the sphere radius)

#### Parameters

##### radius?

`number` = `1`

The radius of the sphere to emit from

##### radiusRange?

`number` = `1`

The range of the sphere to emit from [0-1] 0 Surface Only, 1 Entire Radius

#### Returns

[`SphereParticleEmitter`](SphereParticleEmitter.md)

the emitter

#### Inherited from

`ThinParticleSystem.createSphereEmitter`

***

### dispose()

> **dispose**(`disposeTexture?`, `disposeAttachedSubEmitters?`, `disposeEndSubEmitters?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:2354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L2354)

Disposes the particle system and free the associated resources

#### Parameters

##### disposeTexture?

`boolean` = `true`

defines if the particle texture must be disposed as well (true by default)

##### disposeAttachedSubEmitters?

`boolean` = `false`

defines if the attached sub-emitters must be disposed as well (false by default)

##### disposeEndSubEmitters?

`boolean` = `false`

defines if the end type sub-emitters must be disposed as well (false by default)

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.dispose`

***

### fillDefines()

> **fillDefines**(`defines`, `blendMode`, `fillImageProcessing?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1849](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1849)

Fill the defines array according to the current settings of the particle system

#### Parameters

##### defines

`string`[]

Array to be updated

##### blendMode

`number`

blend mode to take into account when updating the array

##### fillImageProcessing?

`boolean` = `true`

fills the image processing defines

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.fillDefines`

***

### fillUniformsAttributesAndSamplerNames()

> **fillUniformsAttributesAndSamplerNames**(`uniforms`, `attributes`, `samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1907)

Fill the uniforms, attributes and samplers arrays according to the current settings of the particle system

#### Parameters

##### uniforms

`string`[]

Uniforms array to fill

##### attributes

`string`[]

Attributes array to fill

##### samplers

`string`[]

Samplers array to fill

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.fillUniformsAttributesAndSamplerNames`

***

### forceRefreshGradients()

> **forceRefreshGradients**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1223)

Force the system to rebuild all gradients that need to be resync

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.forceRefreshGradients`

***

### getActiveCount()

> **getActiveCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L420)

Gets the number of particles active at the same time.

#### Returns

`number`

The number of active particles.

#### Inherited from

`ThinParticleSystem.getActiveCount`

***

### getAlphaRemapGradients()

> **getAlphaRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:587](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L587)

Gets the current list of alpha remap gradients.
You must use addAlphaRemapGradient and removeAlphaRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of alpha remap gradients

#### Inherited from

`ThinParticleSystem.getAlphaRemapGradients`

***

### getAngularSpeedGradients()

> **getAngularSpeedGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:605](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L605)

Gets the current list of angular speed gradients.
You must use addAngularSpeedGradient and removeAngularSpeedGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of angular speed gradients

#### Inherited from

`ThinParticleSystem.getAngularSpeedGradients`

***

### getCapacity()

> **getCapacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1500](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1500)

Gets the maximum number of particles active at the same time.

#### Returns

`number`

The max number of active particles.

#### Inherited from

`ThinParticleSystem.getCapacity`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L428)

Returns the string "ParticleSystem"

#### Returns

`string`

a string containing the class name

#### Inherited from

`ThinParticleSystem.getClassName`

***

### getColorGradients()

> **getColorGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L560)

Gets the current list of color gradients.
You must use addColorGradient and removeColorGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

the list of color gradients

#### Inherited from

`ThinParticleSystem.getColorGradients`

***

### getColorRemapGradients()

> **getColorRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:578](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L578)

Gets the current list of color remap gradients.
You must use addColorRemapGradient and removeColorRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of color remap gradients

#### Inherited from

`ThinParticleSystem.getColorRemapGradients`

***

### getCustomEffect()

> **getCustomEffect**(`blendMode?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L445)

Gets the custom effect used to render the particles

#### Parameters

##### blendMode?

`number` = `0`

Blend mode for which the effect should be retrieved

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

The effect

#### Inherited from

`ThinParticleSystem.getCustomEffect`

***

### getDragGradients()

> **getDragGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L539)

Gets the current list of drag gradients.
You must use addDragGradient and removeDragGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of drag gradients

#### Inherited from

`ThinParticleSystem.getDragGradients`

***

### getEmitRateGradients()

> **getEmitRateGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L632)

Gets the current list of emit rate gradients.
You must use addEmitRateGradient and removeEmitRateGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of emit rate gradients

#### Inherited from

`ThinParticleSystem.getEmitRateGradients`

***

### getLifeTimeGradients()

> **getLifeTimeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L596)

Gets the current list of life time gradients.
You must use addLifeTimeGradient and removeLifeTimeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of life time gradients

#### Inherited from

`ThinParticleSystem.getLifeTimeGradients`

***

### getLimitVelocityGradients()

> **getLimitVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L551)

Gets the current list of limit velocity gradients.
You must use addLimitVelocityGradient and removeLimitVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of limit velocity gradients

#### Inherited from

`ThinParticleSystem.getLimitVelocityGradients`

***

### getRampGradients()

> **getRampGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Color3Gradient`](Color3Gradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1218)

Gets the current list of ramp gradients.
You must use addRampGradient and removeRampGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3Gradient`](Color3Gradient.md)[]\>

the list of ramp gradients

#### Inherited from

`ThinParticleSystem.getRampGradients`

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L461)

Get hosting scene

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene

#### Inherited from

`ThinParticleSystem.getScene`

***

### getSizeGradients()

> **getSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L569)

Gets the current list of size gradients.
You must use addSizeGradient and removeSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of size gradients

#### Inherited from

`ThinParticleSystem.getSizeGradients`

***

### getStartSizeGradients()

> **getStartSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L623)

Gets the current list of start size gradients.
You must use addStartSizeGradient and removeStartSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of start size gradients

#### Inherited from

`ThinParticleSystem.getStartSizeGradients`

***

### getVelocityGradients()

> **getVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:614](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L614)

Gets the current list of velocity gradients.
You must use addVelocityGradient and removeVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of velocity gradients

#### Inherited from

`ThinParticleSystem.getVelocityGradients`

***

### isAlive()

> **isAlive**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1508](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1508)

Gets whether there are still active particles in the system.

#### Returns

`boolean`

True if it is alive, otherwise false.

#### Inherited from

`ThinParticleSystem.isAlive`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:2183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L2183)

Is this system ready to be used/rendered

#### Returns

`boolean`

true if the system is ready

#### Inherited from

`ThinParticleSystem.isReady`

***

### isStarted()

> **isStarted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1516](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1516)

Gets if the system has been started. (Note: this will still be true after stop is called)

#### Returns

`boolean`

True if it has been started, otherwise false.

#### Inherited from

`ThinParticleSystem.isStarted`

***

### isStopping()

> **isStopping**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L436)

Gets a boolean indicating that the system is stopping

#### Returns

`boolean`

true if the system is currently stopping

#### Inherited from

`ThinParticleSystem.isStopping`

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:2150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L2150)

Rebuilds the particle system.

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.rebuild`

***

### removeAlphaRemapGradient()

> **removeAlphaRemapGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:960](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L960)

Remove a specific alpha remap gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeAlphaRemapGradient`

***

### removeAngularSpeedGradient()

> **removeAngularSpeedGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1000](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1000)

Remove a specific angular speed gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeAngularSpeedGradient`

***

### removeAttractor()

> **removeAttractor**(`attractor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L182)

Removes an attractor from the particle system. Attractors are used to change the direction of the particles in the system.

#### Parameters

##### attractor

[`Attractor`](Attractor.md)

The attractor to remove from the particle system

#### Returns

`void`

#### Overrides

`ThinParticleSystem.removeAttractor`

***

### removeColorGradient()

> **removeColorGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1323)

Remove a specific color gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

this particle system

#### Inherited from

`ThinParticleSystem.removeColorGradient`

***

### removeColorRemapGradient()

> **removeColorRemapGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:932](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L932)

Remove a specific color remap gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeColorRemapGradient`

***

### removeDragGradient()

> **removeDragGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1147)

Remove a specific drag gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeDragGradient`

***

### removeEmitRateGradient()

> **removeEmitRateGradient**(`gradient`): `this`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:657](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L657)

Remove a specific emit rate gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`this`

the current particle system

#### Inherited from

`ThinParticleSystem.removeEmitRateGradient`

***

### removeLifeTimeGradient()

> **removeLifeTimeGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:858](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L858)

Remove a specific life time gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeLifeTimeGradient`

***

### removeLimitVelocityGradient()

> **removeLimitVelocityGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1098](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1098)

Remove a specific limit velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeLimitVelocityGradient`

***

### removeRampGradient()

> **removeRampGradient**(`gradient`): `ThinParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1274)

Remove a specific ramp gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`ThinParticleSystem`

the current particle system

#### Inherited from

`ThinParticleSystem.removeRampGradient`

***

### removeSizeGradient()

> **removeSizeGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:899](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L899)

Remove a specific size gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeSizeGradient`

***

### removeStartSizeGradient()

> **removeStartSizeGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1182)

Remove a specific start size gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeStartSizeGradient`

***

### removeVelocityGradient()

> **removeVelocityGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1049](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1049)

Remove a specific velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Inherited from

`ThinParticleSystem.removeVelocityGradient`

***

### render()

> **render**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:2314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L2314)

Renders the particle system in its current state.

#### Returns

`number`

the current number of particles

#### Inherited from

`ThinParticleSystem.render`

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1632)

Remove all active particles

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.reset`

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1348)

Resets the draw wrappers cache

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.resetDrawCache`

***

### serialize()

> **serialize**(`serializeTexture?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:725](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L725)

Serializes the particle system to a JSON object

#### Parameters

##### serializeTexture?

`boolean` = `false`

defines if the texture must be serialized as well

#### Returns

`any`

the JSON object

#### Overrides

`ThinParticleSystem.serialize`

***

### setCustomEffect()

> **setCustomEffect**(`effect`, `blendMode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L458)

Sets the custom effect used to render the particles

#### Parameters

##### effect

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

The effect to set

##### blendMode?

`number` = `0`

Blend mode for which the effect should be set

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.setCustomEffect`

***

### start()

> **start**(`delay?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L194)

Starts the particle system and begins to emit

#### Parameters

##### delay?

`number` = `...`

defines the delay in milliseconds before starting the system (this.startDelay by default)

#### Returns

`void`

#### Overrides

`ThinParticleSystem.start`

***

### stop()

> **stop**(`stopSubEmitters?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/thinParticleSystem.pure.ts:1610](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/thinParticleSystem.pure.ts#L1610)

Stops the particle system.

#### Parameters

##### stopSubEmitters?

`boolean` = `true`

if true it will stop the current system and all created sub-Systems if false it will stop the current root system only, this param is used by the root particle system only. The default value is true.

#### Returns

`void`

#### Inherited from

`ThinParticleSystem.stop`

***

### Parse()

> `static` **Parse**(`parsedParticleSystem`, `sceneOrEngine`, `rootUrl`, `doNotStart?`, `capacity?`): `ParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/particleSystem.pure.ts:644](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/particleSystem.pure.ts#L644)

Parses a JSON object to create a particle system.

#### Parameters

##### parsedParticleSystem

`any`

The JSON object to parse

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

The scene or the engine to create the particle system in

##### rootUrl

`string`

The root url to use to load external dependencies like texture

##### doNotStart?

`boolean` = `false`

Ignore the preventAutoStart attribute and does not start

##### capacity?

`number`

defines the system capacity (if null or undefined the sotred capacity will be used)

#### Returns

`ParticleSystem`

the Parsed particle system
