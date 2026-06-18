[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BaseParticleSystem

# Class: BaseParticleSystem

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L49)

This represents the base class for particle system in Babylon.
Particles are often small sprites used to simulate hard-to-reproduce phenomena like fire, smoke, water, or abstract visual effects like magic glitter and faery dust.
Particles can take different shapes while emitted like box, sphere, cone or you can write your custom function.

## Example

```ts
https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro
```

## Extended by

- [`GPUParticleSystem`](GPUParticleSystem.md)

## Implements

- `IClipPlanesHolder`

## Constructors

### Constructor

> **new BaseParticleSystem**(`name`): `BaseParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:925](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L925)

Instantiates a particle system.
Particles are often small sprites used to simulate hard-to-reproduce phenomena like fire, smoke, water, or abstract visual effects like magic glitter and faery dust.

#### Parameters

##### name

`string`

The name of the particle system

#### Returns

`BaseParticleSystem`

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L79)

List of animations used by the particle system.

***

### applyFog

> **applyFog**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L236)

Gets or sets a boolean indicating that this particle system will allow fog to be rendered on it (false by default)

***

### beginAnimationFrom

> **beginAnimationFrom**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L380)

Gets or sets the frame to start the animation from when beginAnimationOnStart is true

***

### beginAnimationLoop

> **beginAnimationLoop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L390)

Gets or sets a boolean indicating if animations must loop when beginAnimationOnStart is true

***

### beginAnimationOnStart

> **beginAnimationOnStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L375)

Gets or sets a boolean indicating that hosted animations (in the system.animations array) must be started when system.start() is called

***

### beginAnimationTo

> **beginAnimationTo**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L385)

Gets or sets the frame to end the animation on when beginAnimationOnStart is true

***

### blendMode

> **blendMode**: `number` = `BaseParticleSystem.BLENDMODE_ONEONE`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L310)

Blend mode use to render the particle
For original blend modes which are exposed from ParticleSystem (OneOne, Standard, Add, Multiply, MultiplyAdd, and Subtract), use ParticleSystem.BLENDMODE_FOO
For all other blend modes, use Engine Constants.ALPHA_FOO blend modes

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L400)

Gets or sets the active clipplane 1

#### Implementation of

`IClipPlanesHolder.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L405)

Gets or sets the active clipplane 2

#### Implementation of

`IClipPlanesHolder.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L410)

Gets or sets the active clipplane 3

#### Implementation of

`IClipPlanesHolder.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L415)

Gets or sets the active clipplane 4

#### Implementation of

`IClipPlanesHolder.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L420)

Gets or sets the active clipplane 5

#### Implementation of

`IClipPlanesHolder.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L425)

Gets or sets the active clipplane 6

#### Implementation of

`IClipPlanesHolder.clipPlane6`

***

### color1

> **color1**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:737](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L737)

Random color of each particle after it has been emitted, between color1 and color2 vectors

***

### color2

> **color2**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:741](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L741)

Random color of each particle after it has been emitted, between color1 and color2 vectors

***

### colorDead

> **colorDead**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:745](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L745)

Color the particle will have at the end of its lifetime

***

### customShader

> **customShader**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L225)

This can help using your own shader to render the particle system.
The according effect will be created

***

### disposeOnStop

> **disposeOnStop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L146)

Specifies whether the particle system will be disposed once it reaches the end of the animation.

***

### emitRate

> **emitRate**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L114)

The maximum number of particles to emit per frame

***

### emitter

> **emitter**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L109)

The emitter represents the Mesh or position we are attaching the particle system to.

***

### endSpriteCellID

> **endSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L337)

If using a spritesheet (isAnimationSheetEnabled) defines the last sprite cell to display

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:316](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L316)

Forces the particle to write their depth information to the depth buffer. This can help preventing other draw calls
to override the particles.

***

### gravity

> **gravity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L468)

You can use gravity if you want to give an orientation to your particles.

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L89)

The id of the Particle system.

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L219)

The layer mask we are rendering the particles through.

***

### limitVelocityDamping

> **limitVelocityDamping**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:544](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L544)

Gets or sets a value indicating the damping to apply if the limit velocity factor is reached

***

### manualEmitCount

> **manualEmitCount**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L119)

If you want to launch only a few particles at once, that can be done, as well.

***

### maxAngularSpeed

> **maxAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L209)

Maximum angular speed of emitting particles (Z-axis rotation for each particle).

***

### maxEmitPower

> **maxEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L155)

Maximum power of emitting particles.

***

### maxInitialRotation

> **maxInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L200)

Gets or sets the maximal initial rotation in radians.

***

### maxLifeTime

> **maxLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L164)

Maximum life time of emitting particles.

***

### maxScaleX

> **maxScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L182)

Maximum scale of emitting particles on X axis.

***

### maxScaleY

> **maxScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L191)

Maximum scale of emitting particles on Y axis.

***

### maxSize

> **maxSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L173)

Maximum Size of emitting particles.

***

### minAngularSpeed

> **minAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L205)

Minimum angular speed of emitting particles (Z-axis rotation for each particle).

***

### minEmitPower

> **minEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L151)

Minimum power of emitting particles.

***

### minInitialRotation

> **minInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L196)

Gets or sets the minimal initial rotation in radians.

***

### minLifeTime

> **minLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L160)

Minimum life time of emitting particles.

***

### minScaleX

> **minScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L178)

Minimum scale of emitting particles on X axis.

***

### minScaleY

> **minScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L187)

Minimum scale of emitting particles on Y axis.

***

### minSize

> **minSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L169)

Minimum Size of emitting particles.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L94)

The friendly name of the Particle system.

***

### noiseStrength

> **noiseStrength**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L268)

Gets or sets the strength to apply to the noise value (default is (10, 10, 10))

***

### onAnimationEnd

> **onAnimationEnd**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L303)

Callback triggered when the particle animation is ending.

***

### particleEmitterType

> **particleEmitterType**: [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:756](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L756)

The particle emitter type defines the emitter used by the particle system.
It can be for example box, sphere, or cone...

***

### particleTexture

> **particleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L214)

The texture used to render each particle. (this can be a spritesheet)

***

### preventAutoStart

> **preventAutoStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L231)

By default particle system starts as soon as they are created. This prevents the
automatic start to happen and let you decide when to start emitting particles.

***

### preWarmCycles

> **preWarmCycles**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L319)

Gets or sets a value indicating how many cycles (or frames) must be executed before first rendering (this value has to be set before starting the system). Default is 0

***

### preWarmStepOffset

> **preWarmStepOffset**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L322)

Gets or sets a value indicating the time step multiplier to use in pre-warm mode (default is 1)

***

### renderingGroupId

> **renderingGroupId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L104)

The rendering group used by the Particle system to chose when to render.

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L99)

Snippet ID if the particle system was created from the snippet server

***

### spriteCellChangeSpeed

> **spriteCellChangeSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L327)

If using a spritesheet (isAnimationSheetEnabled) defines the speed of the sprite loop (default is 1 meaning the animation will play once during the entire particle lifetime)

***

### spriteCellHeight

> **spriteCellHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L345)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell height to use

***

### spriteCellLoop

> **spriteCellLoop**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L349)

If using a spritesheet (isAnimationSheetEnabled), defines wether the sprite animation is looping

***

### spriteCellWidth

> **spriteCellWidth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L341)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell width to use

***

### spriteRandomStartCell

> **spriteRandomStartCell**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L353)

This allows the system to random pick the start cell ID between startSpriteCellID and endSpriteCellID

***

### startDelay

> **startDelay**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L532)

Defines the delay in milliseconds before starting the system (0 by default)

***

### startSpriteCellID

> **startSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L332)

If using a spritesheet (isAnimationSheetEnabled) defines the first sprite cell to display

***

### textureMask

> **textureMask**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:750](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L750)

An optional mask to filter some colors out of the texture, or filter a part of the alpha channel

***

### translationPivot

> **translationPivot**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L356)

Gets or sets a Vector2 used to move the pivot (by default (0,0))

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L84)

Gets or sets the unique id of the particle system

***

### updateSpeed

> **updateSpeed**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L124)

The overall motion speed (0.01 is default update speed, faster updates = faster animation)

***

### worldOffset

> **worldOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L395)

Gets or sets a world offset applied to all particles

***

### BLENDMODE\_ADD

> `static` **BLENDMODE\_ADD**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L61)

Add current color and particle color multiplied by particle’s alpha

***

### BLENDMODE\_MULTIPLY

> `static` **BLENDMODE\_MULTIPLY**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L65)

Multiply current color with particle color

***

### BLENDMODE\_MULTIPLYADD

> `static` **BLENDMODE\_MULTIPLYADD**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L69)

Multiply current color with particle color then add current color and particle color multiplied by particle’s alpha

***

### BLENDMODE\_ONEONE

> `static` **BLENDMODE\_ONEONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L53)

Source color is added to the destination color without alpha affecting the result. Great for additive glow effects (fire, magic, lasers)

***

### BLENDMODE\_STANDARD

> `static` **BLENDMODE\_STANDARD**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L57)

Blend current color and particle color using particle’s alpha. Same as Constants.ALPHA_COMBINE, the go-to for transparency. 100% alpha means source, 0% alpha means background. Glass, UI fade, smoke

***

### BLENDMODE\_SUBTRACT

> `static` **BLENDMODE\_SUBTRACT**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L74)

Subtracts source (particle) from destination (current color), leading to darker results
- NOTE: Init as -1 so we can properly map all modes to Engine Const's (otherwise ALPHA_SUBTRACT will conflict with BLENDMODE_MULTIPLY since both use 3)

## Accessors

### \_isAnimationSheetEnabled

#### Set Signature

> **set** **\_isAnimationSheetEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:364](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L364)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### attractors

#### Get Signature

> **get** **attractors**(): [`Attractor`](Attractor.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L277)

The list of attractors used to change the direction of the particles in the system.
Please note that this is a copy of the internal array. If you want to modify it, please use the addAttractor and removeAttractor methods.

##### Returns

[`Attractor`](Attractor.md)[]

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

***

### isNodeGenerated

#### Get Signature

> **get** **isNodeGenerated**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L247)

Returns true if the particle system was generated by a node particle system set

##### Returns

`boolean`

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

***

### noiseTexture

#### Get Signature

> **get** **noiseTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L254)

Gets or sets a texture used to add random noise to particle positions

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

#### Set Signature

> **set** **noiseTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L258)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

##### Returns

`void`

***

### targetStopDuration

#### Get Signature

> **get** **targetStopDuration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L131)

The amount of time the particle system is running (depends of the overall update speed).

##### Returns

`number`

#### Set Signature

> **set** **targetStopDuration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L135)

##### Parameters

###### value

`number`

##### Returns

`void`

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

## Methods

### addAttractor()

> **addAttractor**(`attractor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L285)

Add an attractor to the particle system. Attractors are used to change the direction of the particles in the system.

#### Parameters

##### attractor

[`Attractor`](Attractor.md)

The attractor to add to the particle system

#### Returns

`void`

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

***

### getAlphaRemapGradients()

> **getAlphaRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:587](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L587)

Gets the current list of alpha remap gradients.
You must use addAlphaRemapGradient and removeAlphaRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of alpha remap gradients

***

### getAngularSpeedGradients()

> **getAngularSpeedGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:605](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L605)

Gets the current list of angular speed gradients.
You must use addAngularSpeedGradient and removeAngularSpeedGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of angular speed gradients

***

### getColorGradients()

> **getColorGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L560)

Gets the current list of color gradients.
You must use addColorGradient and removeColorGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

the list of color gradients

***

### getColorRemapGradients()

> **getColorRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:578](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L578)

Gets the current list of color remap gradients.
You must use addColorRemapGradient and removeColorRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of color remap gradients

***

### getDragGradients()

> **getDragGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L539)

Gets the current list of drag gradients.
You must use addDragGradient and removeDragGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of drag gradients

***

### getEmitRateGradients()

> **getEmitRateGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L632)

Gets the current list of emit rate gradients.
You must use addEmitRateGradient and removeEmitRateGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of emit rate gradients

***

### getLifeTimeGradients()

> **getLifeTimeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L596)

Gets the current list of life time gradients.
You must use addLifeTimeGradient and removeLifeTimeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of life time gradients

***

### getLimitVelocityGradients()

> **getLimitVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L551)

Gets the current list of limit velocity gradients.
You must use addLimitVelocityGradient and removeLimitVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of limit velocity gradients

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L461)

Get hosting scene

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene

***

### getSizeGradients()

> **getSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L569)

Gets the current list of size gradients.
You must use addSizeGradient and removeSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of size gradients

***

### getStartSizeGradients()

> **getStartSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L623)

Gets the current list of start size gradients.
You must use addStartSizeGradient and removeStartSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of start size gradients

***

### getVelocityGradients()

> **getVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:614](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L614)

Gets the current list of velocity gradients.
You must use addVelocityGradient and removeVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of velocity gradients

***

### removeAttractor()

> **removeAttractor**(`attractor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L293)

Removes an attractor from the particle system. Attractors are used to change the direction of the particles in the system.

#### Parameters

##### attractor

[`Attractor`](Attractor.md)

The attractor to remove from the particle system

#### Returns

`void`

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
