[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BaseParticleSystem

# Class: BaseParticleSystem

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L48)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:924](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L924)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L78)

List of animations used by the particle system.

***

### applyFog

> **applyFog**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L235)

Gets or sets a boolean indicating that this particle system will allow fog to be rendered on it (false by default)

***

### beginAnimationFrom

> **beginAnimationFrom**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L379)

Gets or sets the frame to start the animation from when beginAnimationOnStart is true

***

### beginAnimationLoop

> **beginAnimationLoop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L389)

Gets or sets a boolean indicating if animations must loop when beginAnimationOnStart is true

***

### beginAnimationOnStart

> **beginAnimationOnStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:374](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L374)

Gets or sets a boolean indicating that hosted animations (in the system.animations array) must be started when system.start() is called

***

### beginAnimationTo

> **beginAnimationTo**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L384)

Gets or sets the frame to end the animation on when beginAnimationOnStart is true

***

### blendMode

> **blendMode**: `number` = `BaseParticleSystem.BLENDMODE_ONEONE`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L309)

Blend mode use to render the particle
For original blend modes which are exposed from ParticleSystem (OneOne, Standard, Add, Multiply, MultiplyAdd, and Subtract), use ParticleSystem.BLENDMODE_FOO
For all other blend modes, use Engine Constants.ALPHA_FOO blend modes

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L399)

Gets or sets the active clipplane 1

#### Implementation of

`IClipPlanesHolder.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:404](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L404)

Gets or sets the active clipplane 2

#### Implementation of

`IClipPlanesHolder.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L409)

Gets or sets the active clipplane 3

#### Implementation of

`IClipPlanesHolder.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:414](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L414)

Gets or sets the active clipplane 4

#### Implementation of

`IClipPlanesHolder.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L419)

Gets or sets the active clipplane 5

#### Implementation of

`IClipPlanesHolder.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L424)

Gets or sets the active clipplane 6

#### Implementation of

`IClipPlanesHolder.clipPlane6`

***

### color1

> **color1**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:736](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L736)

Random color of each particle after it has been emitted, between color1 and color2 vectors

***

### color2

> **color2**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:740](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L740)

Random color of each particle after it has been emitted, between color1 and color2 vectors

***

### colorDead

> **colorDead**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L744)

Color the particle will have at the end of its lifetime

***

### customShader

> **customShader**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L224)

This can help using your own shader to render the particle system.
The according effect will be created

***

### disposeOnStop

> **disposeOnStop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L145)

Specifies whether the particle system will be disposed once it reaches the end of the animation.

***

### emitRate

> **emitRate**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L113)

The maximum number of particles to emit per frame

***

### emitter

> **emitter**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L108)

The emitter represents the Mesh or position we are attaching the particle system to.

***

### endSpriteCellID

> **endSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L336)

If using a spritesheet (isAnimationSheetEnabled) defines the last sprite cell to display

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:315](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L315)

Forces the particle to write their depth information to the depth buffer. This can help preventing other draw calls
to override the particles.

***

### gravity

> **gravity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:467](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L467)

You can use gravity if you want to give an orientation to your particles.

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L88)

The id of the Particle system.

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L218)

The layer mask we are rendering the particles through.

***

### limitVelocityDamping

> **limitVelocityDamping**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L543)

Gets or sets a value indicating the damping to apply if the limit velocity factor is reached

***

### manualEmitCount

> **manualEmitCount**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L118)

If you want to launch only a few particles at once, that can be done, as well.

***

### maxAngularSpeed

> **maxAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L208)

Maximum angular speed of emitting particles (Z-axis rotation for each particle).

***

### maxEmitPower

> **maxEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L154)

Maximum power of emitting particles.

***

### maxInitialRotation

> **maxInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L199)

Gets or sets the maximal initial rotation in radians.

***

### maxLifeTime

> **maxLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L163)

Maximum life time of emitting particles.

***

### maxScaleX

> **maxScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L181)

Maximum scale of emitting particles on X axis.

***

### maxScaleY

> **maxScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L190)

Maximum scale of emitting particles on Y axis.

***

### maxSize

> **maxSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L172)

Maximum Size of emitting particles.

***

### minAngularSpeed

> **minAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L204)

Minimum angular speed of emitting particles (Z-axis rotation for each particle).

***

### minEmitPower

> **minEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L150)

Minimum power of emitting particles.

***

### minInitialRotation

> **minInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L195)

Gets or sets the minimal initial rotation in radians.

***

### minLifeTime

> **minLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L159)

Minimum life time of emitting particles.

***

### minScaleX

> **minScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L177)

Minimum scale of emitting particles on X axis.

***

### minScaleY

> **minScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L186)

Minimum scale of emitting particles on Y axis.

***

### minSize

> **minSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L168)

Minimum Size of emitting particles.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L93)

The friendly name of the Particle system.

***

### noiseStrength

> **noiseStrength**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L267)

Gets or sets the strength to apply to the noise value (default is (10, 10, 10))

***

### onAnimationEnd

> **onAnimationEnd**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L302)

Callback triggered when the particle animation is ending.

***

### particleEmitterType

> **particleEmitterType**: [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:755](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L755)

The particle emitter type defines the emitter used by the particle system.
It can be for example box, sphere, or cone...

***

### particleTexture

> **particleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L213)

The texture used to render each particle. (this can be a spritesheet)

***

### preventAutoStart

> **preventAutoStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L230)

By default particle system starts as soon as they are created. This prevents the
automatic start to happen and let you decide when to start emitting particles.

***

### preWarmCycles

> **preWarmCycles**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L318)

Gets or sets a value indicating how many cycles (or frames) must be executed before first rendering (this value has to be set before starting the system). Default is 0

***

### preWarmStepOffset

> **preWarmStepOffset**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L321)

Gets or sets a value indicating the time step multiplier to use in pre-warm mode (default is 1)

***

### renderingGroupId

> **renderingGroupId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L103)

The rendering group used by the Particle system to chose when to render.

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L98)

Snippet ID if the particle system was created from the snippet server

***

### spriteCellChangeSpeed

> **spriteCellChangeSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L326)

If using a spritesheet (isAnimationSheetEnabled) defines the speed of the sprite loop (default is 1 meaning the animation will play once during the entire particle lifetime)

***

### spriteCellHeight

> **spriteCellHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L344)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell height to use

***

### spriteCellLoop

> **spriteCellLoop**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L348)

If using a spritesheet (isAnimationSheetEnabled), defines wether the sprite animation is looping

***

### spriteCellWidth

> **spriteCellWidth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L340)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell width to use

***

### spriteRandomStartCell

> **spriteRandomStartCell**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:352](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L352)

This allows the system to random pick the start cell ID between startSpriteCellID and endSpriteCellID

***

### startDelay

> **startDelay**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:531](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L531)

Defines the delay in milliseconds before starting the system (0 by default)

***

### startSpriteCellID

> **startSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L331)

If using a spritesheet (isAnimationSheetEnabled) defines the first sprite cell to display

***

### textureMask

> **textureMask**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:749](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L749)

An optional mask to filter some colors out of the texture, or filter a part of the alpha channel

***

### translationPivot

> **translationPivot**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L355)

Gets or sets a Vector2 used to move the pivot (by default (0,0))

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L83)

Gets or sets the unique id of the particle system

***

### updateSpeed

> **updateSpeed**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L123)

The overall motion speed (0.01 is default update speed, faster updates = faster animation)

***

### worldOffset

> **worldOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L394)

Gets or sets a world offset applied to all particles

***

### BLENDMODE\_ADD

> `static` **BLENDMODE\_ADD**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L60)

Add current color and particle color multiplied by particle’s alpha

***

### BLENDMODE\_MULTIPLY

> `static` **BLENDMODE\_MULTIPLY**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L64)

Multiply current color with particle color

***

### BLENDMODE\_MULTIPLYADD

> `static` **BLENDMODE\_MULTIPLYADD**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L68)

Multiply current color with particle color then add current color and particle color multiplied by particle’s alpha

***

### BLENDMODE\_ONEONE

> `static` **BLENDMODE\_ONEONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L52)

Source color is added to the destination color without alpha affecting the result. Great for additive glow effects (fire, magic, lasers)

***

### BLENDMODE\_STANDARD

> `static` **BLENDMODE\_STANDARD**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L56)

Blend current color and particle color using particle’s alpha. Same as Constants.ALPHA_COMBINE, the go-to for transparency. 100% alpha means source, 0% alpha means background. Glass, UI fade, smoke

***

### BLENDMODE\_SUBTRACT

> `static` **BLENDMODE\_SUBTRACT**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L73)

Subtracts source (particle) from destination (current color), leading to darker results
- NOTE: Init as -1 so we can properly map all modes to Engine Const's (otherwise ALPHA_SUBTRACT will conflict with BLENDMODE_MULTIPLY since both use 3)

## Accessors

### \_isAnimationSheetEnabled

#### Set Signature

> **set** **\_isAnimationSheetEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:363](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L363)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### attractors

#### Get Signature

> **get** **attractors**(): [`Attractor`](Attractor.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L276)

The list of attractors used to change the direction of the particles in the system.
Please note that this is a copy of the internal array. If you want to modify it, please use the addAttractor and removeAttractor methods.

##### Returns

[`Attractor`](Attractor.md)[]

***

### billboardMode

#### Get Signature

> **get** **billboardMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:766](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L766)

Gets or sets the billboard mode to use when isBillboardBased = true.
Value can be: ParticleSystem.BILLBOARDMODE_ALL, ParticleSystem.BILLBOARDMODE_Y, ParticleSystem.BILLBOARDMODE_STRETCHED, ParticleSystem.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL

##### Returns

`number`

#### Set Signature

> **set** **billboardMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:770](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L770)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### direction1

#### Get Signature

> **get** **direction1**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:665](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L665)

Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.
This only works when particleEmitterTyps is a BoxParticleEmitter

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **direction1**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:673](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L673)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### direction2

#### Get Signature

> **get** **direction2**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:683](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L683)

Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.
This only works when particleEmitterTyps is a BoxParticleEmitter

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **direction2**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:691](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L691)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:820](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L820)

Gets the image processing configuration used either in this material.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:829](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L829)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L429)

Gets or sets whether an animation sprite sheet is enabled or not on the particle system

##### Returns

`boolean`

#### Set Signature

> **set** **isAnimationSheetEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:433](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L433)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isBillboardBased

#### Get Signature

> **get** **isBillboardBased**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:784](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L784)

Gets or sets a boolean indicating if the particles must be rendered as billboard or aligned with the direction

##### Returns

`boolean`

#### Set Signature

> **set** **isBillboardBased**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:788](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L788)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isNodeGenerated

#### Get Signature

> **get** **isNodeGenerated**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L246)

Returns true if the particle system was generated by a node particle system set

##### Returns

`boolean`

***

### maxEmitBox

#### Get Signature

> **get** **maxEmitBox**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:719](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L719)

Maximum box point around our emitter. Our emitter is the center of particles source, but if you want your particles to emit from more than one point, then you can tell it to do so.
This only works when particleEmitterTyps is a BoxParticleEmitter

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **maxEmitBox**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:727](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L727)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### minEmitBox

#### Get Signature

> **get** **minEmitBox**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:701](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L701)

Minimum box point around our emitter. Our emitter is the center of particles source, but if you want your particles to emit from more than one point, then you can tell it to do so.
This only works when particleEmitterTyps is a BoxParticleEmitter

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **minEmitBox**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:709](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L709)

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### noiseTexture

#### Get Signature

> **get** **noiseTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L253)

Gets or sets a texture used to add random noise to particle positions

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

#### Set Signature

> **set** **noiseTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L257)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

##### Returns

`void`

***

### targetStopDuration

#### Get Signature

> **get** **targetStopDuration**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L130)

The amount of time the particle system is running (depends of the overall update speed).

##### Returns

`number`

#### Set Signature

> **set** **targetStopDuration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:134](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L134)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:448](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L448)

Gets or sets a boolean enabling the use of logarithmic depth buffers, which is good for wide depth buffers.

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:452](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L452)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### addAttractor()

> **addAttractor**(`attractor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L284)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:642](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L642)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L1047)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:1019](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L1019)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:986](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L986)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L1033)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:1001](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L1001)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:972](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L972)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:947](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L947)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:1062](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L1062)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:935](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L935)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:959](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L959)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:586](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L586)

Gets the current list of alpha remap gradients.
You must use addAlphaRemapGradient and removeAlphaRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of alpha remap gradients

***

### getAngularSpeedGradients()

> **getAngularSpeedGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:604](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L604)

Gets the current list of angular speed gradients.
You must use addAngularSpeedGradient and removeAngularSpeedGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of angular speed gradients

***

### getColorGradients()

> **getColorGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:559](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L559)

Gets the current list of color gradients.
You must use addColorGradient and removeColorGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

the list of color gradients

***

### getColorRemapGradients()

> **getColorRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:577](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L577)

Gets the current list of color remap gradients.
You must use addColorRemapGradient and removeColorRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of color remap gradients

***

### getDragGradients()

> **getDragGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L538)

Gets the current list of drag gradients.
You must use addDragGradient and removeDragGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of drag gradients

***

### getEmitRateGradients()

> **getEmitRateGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L631)

Gets the current list of emit rate gradients.
You must use addEmitRateGradient and removeEmitRateGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of emit rate gradients

***

### getLifeTimeGradients()

> **getLifeTimeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:595](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L595)

Gets the current list of life time gradients.
You must use addLifeTimeGradient and removeLifeTimeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of life time gradients

***

### getLimitVelocityGradients()

> **getLimitVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L550)

Gets the current list of limit velocity gradients.
You must use addLimitVelocityGradient and removeLimitVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of limit velocity gradients

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L460)

Get hosting scene

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene

***

### getSizeGradients()

> **getSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L568)

Gets the current list of size gradients.
You must use addSizeGradient and removeSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of size gradients

***

### getStartSizeGradients()

> **getStartSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:622](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L622)

Gets the current list of start size gradients.
You must use addStartSizeGradient and removeStartSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of start size gradients

***

### getVelocityGradients()

> **getVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:613](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L613)

Gets the current list of velocity gradients.
You must use addVelocityGradient and removeVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of velocity gradients

***

### removeAttractor()

> **removeAttractor**(`attractor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L292)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:656](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L656)

Remove a specific emit rate gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`this`

the current particle system
