[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GPUParticleSystem

# Class: GPUParticleSystem

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L48)

This represents a GPU particle system in Babylon
This is the fastest particle system in Babylon as it uses the GPU to update the individual particle data

## See

https://www.babylonjs-playground.com/#PU4WYI#4

## Extends

- [`BaseParticleSystem`](BaseParticleSystem.md)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)
- [`IParticleSystem`](../interfaces/IParticleSystem.md)
- [`IAnimatable`](../interfaces/IAnimatable.md)

## Constructors

### Constructor

> **new GPUParticleSystem**(`name`, `options`, `sceneOrEngine`, `customEffect?`, `isAnimationSheetEnabled?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:957](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L957)

Instantiates a GPU particle system.
Particles are often small sprites used to simulate hard-to-reproduce phenomena like fire, smoke, water, or abstract visual effects like magic glitter and faery dust.

#### Parameters

##### name

`string`

The name of the particle system

##### options

`Partial`\<\{ `capacity`: `number`; `emitRateControl`: `boolean`; `maxAttractors`: `number`; `randomTextureSize`: `number`; \}\>

The options used to create the system

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

The scene the particle system belongs to or the engine to use if no scene

##### customEffect?

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\> = `null`

a custom effect used to change the way particles are rendered by default

##### isAnimationSheetEnabled?

`boolean` = `false`

Must be true if using a spritesheet to animate the particles texture

#### Returns

`GPUParticleSystem`

#### Overrides

[`BaseParticleSystem`](BaseParticleSystem.md).[`constructor`](BaseParticleSystem.md#constructor)

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:78](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L78)

List of animations used by the particle system.

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`animations`](BaseParticleSystem.md#animations)

***

### applyFog

> **applyFog**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L235)

Gets or sets a boolean indicating that this particle system will allow fog to be rendered on it (false by default)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`applyFog`](BaseParticleSystem.md#applyfog)

***

### beginAnimationFrom

> **beginAnimationFrom**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L379)

Gets or sets the frame to start the animation from when beginAnimationOnStart is true

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`beginAnimationFrom`](../interfaces/IParticleSystem.md#beginanimationfrom)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`beginAnimationFrom`](BaseParticleSystem.md#beginanimationfrom)

***

### beginAnimationLoop

> **beginAnimationLoop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L389)

Gets or sets a boolean indicating if animations must loop when beginAnimationOnStart is true

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`beginAnimationLoop`](../interfaces/IParticleSystem.md#beginanimationloop)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`beginAnimationLoop`](BaseParticleSystem.md#beginanimationloop)

***

### beginAnimationOnStart

> **beginAnimationOnStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:374](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L374)

Gets or sets a boolean indicating that hosted animations (in the system.animations array) must be started when system.start() is called

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`beginAnimationOnStart`](../interfaces/IParticleSystem.md#beginanimationonstart)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`beginAnimationOnStart`](BaseParticleSystem.md#beginanimationonstart)

***

### beginAnimationTo

> **beginAnimationTo**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L384)

Gets or sets the frame to end the animation on when beginAnimationOnStart is true

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`beginAnimationTo`](../interfaces/IParticleSystem.md#beginanimationto)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`beginAnimationTo`](BaseParticleSystem.md#beginanimationto)

***

### blendMode

> **blendMode**: `number` = `BaseParticleSystem.BLENDMODE_ONEONE`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L309)

Blend mode use to render the particle
For original blend modes which are exposed from ParticleSystem (OneOne, Standard, Add, Multiply, MultiplyAdd, and Subtract), use ParticleSystem.BLENDMODE_FOO
For all other blend modes, use Engine Constants.ALPHA_FOO blend modes

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`blendMode`](../interfaces/IParticleSystem.md#blendmode)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`blendMode`](BaseParticleSystem.md#blendmode)

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L399)

Gets or sets the active clipplane 1

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane`](BaseParticleSystem.md#clipplane)

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:404](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L404)

Gets or sets the active clipplane 2

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane2`](BaseParticleSystem.md#clipplane2)

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L409)

Gets or sets the active clipplane 3

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane3`](BaseParticleSystem.md#clipplane3)

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:414](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L414)

Gets or sets the active clipplane 4

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane4`](BaseParticleSystem.md#clipplane4)

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L419)

Gets or sets the active clipplane 5

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane5`](BaseParticleSystem.md#clipplane5)

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L424)

Gets or sets the active clipplane 6

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane6`](BaseParticleSystem.md#clipplane6)

***

### color1

> **color1**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:736](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L736)

Random color of each particle after it has been emitted, between color1 and color2 vectors

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`color1`](../interfaces/IParticleSystem.md#color1)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`color1`](BaseParticleSystem.md#color1)

***

### color2

> **color2**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:740](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L740)

Random color of each particle after it has been emitted, between color1 and color2 vectors

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`color2`](../interfaces/IParticleSystem.md#color2)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`color2`](BaseParticleSystem.md#color2)

***

### colorDead

> **colorDead**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:744](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L744)

Color the particle will have at the end of its lifetime

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`colorDead`](../interfaces/IParticleSystem.md#colordead)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`colorDead`](BaseParticleSystem.md#colordead)

***

### customShader

> **customShader**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L224)

This can help using your own shader to render the particle system.
The according effect will be created

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`customShader`](BaseParticleSystem.md#customshader)

***

### defaultProjectionMatrix

> **defaultProjectionMatrix**: [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L246)

Gets or sets a matrix to use to compute projection

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`defaultProjectionMatrix`](../interfaces/IParticleSystem.md#defaultprojectionmatrix)

***

### disposeOnStop

> **disposeOnStop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L145)

Specifies whether the particle system will be disposed once it reaches the end of the animation.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`disposeOnStop`](../interfaces/IParticleSystem.md#disposeonstop)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`disposeOnStop`](BaseParticleSystem.md#disposeonstop)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L133)

Specifies if the particle system should be serialized

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`doNotSerialize`](../interfaces/IParticleSystem.md#donotserialize)

***

### emitRate

> **emitRate**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L113)

The maximum number of particles to emit per frame

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`emitRate`](../interfaces/IParticleSystem.md#emitrate)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`emitRate`](BaseParticleSystem.md#emitrate)

***

### emitter

> **emitter**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L108)

The emitter represents the Mesh or position we are attaching the particle system to.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`emitter`](../interfaces/IParticleSystem.md#emitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`emitter`](BaseParticleSystem.md#emitter)

***

### endSpriteCellID

> **endSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L336)

If using a spritesheet (isAnimationSheetEnabled) defines the last sprite cell to display

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`endSpriteCellID`](../interfaces/IParticleSystem.md#endspritecellid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`endSpriteCellID`](BaseParticleSystem.md#endspritecellid)

***

### flowMapStrength

> **flowMapStrength**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L261)

The strength of the flow map

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L189)

Forces the particle to write their depth information to the depth buffer. This can help preventing other draw calls
to override the particles.

#### Overrides

[`BaseParticleSystem`](BaseParticleSystem.md).[`forceDepthWrite`](BaseParticleSystem.md#forcedepthwrite)

***

### gravity

> **gravity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:467](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L467)

You can use gravity if you want to give an orientation to your particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`gravity`](../interfaces/IParticleSystem.md#gravity)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`gravity`](BaseParticleSystem.md#gravity)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L88)

The id of the Particle system.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`id`](../interfaces/IParticleSystem.md#id)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`id`](BaseParticleSystem.md#id)

***

### isGPU

> `readonly` **isGPU**: `true` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L223)

Indicates that the particle system is GPU based

***

### isLocal

> **isLocal**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L220)

Specifies if the particles are updated in emitter local space or world space.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isLocal`](../interfaces/IParticleSystem.md#islocal)

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L52)

The layer mask we are rendering the particles through.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`layerMask`](../interfaces/IParticleSystem.md#layermask)

#### Overrides

[`BaseParticleSystem`](BaseParticleSystem.md).[`layerMask`](BaseParticleSystem.md#layermask)

***

### limitVelocityDamping

> **limitVelocityDamping**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L543)

Gets or sets a value indicating the damping to apply if the limit velocity factor is reached

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`limitVelocityDamping`](../interfaces/IParticleSystem.md#limitvelocitydamping)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`limitVelocityDamping`](BaseParticleSystem.md#limitvelocitydamping)

***

### manualEmitCount

> **manualEmitCount**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L118)

If you want to launch only a few particles at once, that can be done, as well.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`manualEmitCount`](../interfaces/IParticleSystem.md#manualemitcount)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`manualEmitCount`](BaseParticleSystem.md#manualemitcount)

***

### maxAngularSpeed

> **maxAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L208)

Maximum angular speed of emitting particles (Z-axis rotation for each particle).

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxAngularSpeed`](../interfaces/IParticleSystem.md#maxangularspeed)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxAngularSpeed`](BaseParticleSystem.md#maxangularspeed)

***

### maxAttractors

> `readonly` **maxAttractors**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L231)

Maximum number of attractors for this GPU particle system instance.
Determined at construction time via the `maxAttractors` option (default 8).
Limited by the fixed-size uniform arrays in the update shaders.

***

### maxEmitPower

> **maxEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L154)

Maximum power of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxEmitPower`](../interfaces/IParticleSystem.md#maxemitpower)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxEmitPower`](BaseParticleSystem.md#maxemitpower)

***

### maxInitialRotation

> **maxInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L199)

Gets or sets the maximal initial rotation in radians.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxInitialRotation`](../interfaces/IParticleSystem.md#maxinitialrotation)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxInitialRotation`](BaseParticleSystem.md#maxinitialrotation)

***

### maxLifeTime

> **maxLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L163)

Maximum life time of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxLifeTime`](../interfaces/IParticleSystem.md#maxlifetime)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxLifeTime`](BaseParticleSystem.md#maxlifetime)

***

### maxScaleX

> **maxScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L181)

Maximum scale of emitting particles on X axis.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxScaleX`](../interfaces/IParticleSystem.md#maxscalex)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxScaleX`](BaseParticleSystem.md#maxscalex)

***

### maxScaleY

> **maxScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L190)

Maximum scale of emitting particles on Y axis.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxScaleY`](../interfaces/IParticleSystem.md#maxscaley)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxScaleY`](BaseParticleSystem.md#maxscaley)

***

### maxSize

> **maxSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L172)

Maximum Size of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxSize`](../interfaces/IParticleSystem.md#maxsize)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxSize`](BaseParticleSystem.md#maxsize)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L251)

Gets or sets an object used to store user defined information for the particle system

***

### minAngularSpeed

> **minAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:204](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L204)

Minimum angular speed of emitting particles (Z-axis rotation for each particle).

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minAngularSpeed`](../interfaces/IParticleSystem.md#minangularspeed)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minAngularSpeed`](BaseParticleSystem.md#minangularspeed)

***

### minEmitPower

> **minEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L150)

Minimum power of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minEmitPower`](../interfaces/IParticleSystem.md#minemitpower)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minEmitPower`](BaseParticleSystem.md#minemitpower)

***

### minInitialRotation

> **minInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L195)

Gets or sets the minimal initial rotation in radians.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minInitialRotation`](../interfaces/IParticleSystem.md#mininitialrotation)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minInitialRotation`](BaseParticleSystem.md#mininitialrotation)

***

### minLifeTime

> **minLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L159)

Minimum life time of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minLifeTime`](../interfaces/IParticleSystem.md#minlifetime)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minLifeTime`](BaseParticleSystem.md#minlifetime)

***

### minScaleX

> **minScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L177)

Minimum scale of emitting particles on X axis.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minScaleX`](../interfaces/IParticleSystem.md#minscalex)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minScaleX`](BaseParticleSystem.md#minscalex)

***

### minScaleY

> **minScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L186)

Minimum scale of emitting particles on Y axis.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minScaleY`](../interfaces/IParticleSystem.md#minscaley)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minScaleY`](BaseParticleSystem.md#minscaley)

***

### minSize

> **minSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L168)

Minimum Size of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minSize`](../interfaces/IParticleSystem.md#minsize)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minSize`](BaseParticleSystem.md#minsize)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L93)

The friendly name of the Particle system.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`name`](../interfaces/IParticleSystem.md#name)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`name`](BaseParticleSystem.md#name)

***

### noiseStrength

> **noiseStrength**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:267](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L267)

Gets or sets the strength to apply to the noise value (default is (10, 10, 10))

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`noiseStrength`](../interfaces/IParticleSystem.md#noisestrength)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`noiseStrength`](BaseParticleSystem.md#noisestrength)

***

### onAnimationEnd

> **onAnimationEnd**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:302](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L302)

Callback triggered when the particle animation is ending.

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`onAnimationEnd`](BaseParticleSystem.md#onanimationend)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L150)

An event triggered when the system is disposed.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`onDisposeObservable`](../interfaces/IParticleSystem.md#ondisposeobservable)

***

### onStartedObservable

> **onStartedObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L159)

An event triggered when the system is started

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`onStartedObservable`](../interfaces/IParticleSystem.md#onstartedobservable)

***

### onStoppedObservable

> **onStoppedObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L154)

An event triggered when the system is stopped

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`onStoppedObservable`](../interfaces/IParticleSystem.md#onstoppedobservable)

***

### particleEmitterType

> **particleEmitterType**: [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:755](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L755)

The particle emitter type defines the emitter used by the particle system.
It can be for example box, sphere, or cone...

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`particleEmitterType`](../interfaces/IParticleSystem.md#particleemittertype)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`particleEmitterType`](BaseParticleSystem.md#particleemittertype)

***

### particleTexture

> **particleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L213)

The texture used to render each particle. (this can be a spritesheet)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`particleTexture`](../interfaces/IParticleSystem.md#particletexture)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`particleTexture`](BaseParticleSystem.md#particletexture)

***

### preventAutoStart

> **preventAutoStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L230)

By default particle system starts as soon as they are created. This prevents the
automatic start to happen and let you decide when to start emitting particles.

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`preventAutoStart`](BaseParticleSystem.md#preventautostart)

***

### preWarmCycles

> **preWarmCycles**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L318)

Gets or sets a value indicating how many cycles (or frames) must be executed before first rendering (this value has to be set before starting the system). Default is 0

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`preWarmCycles`](../interfaces/IParticleSystem.md#prewarmcycles)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`preWarmCycles`](BaseParticleSystem.md#prewarmcycles)

***

### preWarmStepOffset

> **preWarmStepOffset**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L321)

Gets or sets a value indicating the time step multiplier to use in pre-warm mode (default is 1)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`preWarmStepOffset`](../interfaces/IParticleSystem.md#prewarmstepoffset)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`preWarmStepOffset`](BaseParticleSystem.md#prewarmstepoffset)

***

### renderingGroupId

> **renderingGroupId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L103)

The rendering group used by the Particle system to chose when to render.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`renderingGroupId`](../interfaces/IParticleSystem.md#renderinggroupid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`renderingGroupId`](BaseParticleSystem.md#renderinggroupid)

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L98)

Snippet ID if the particle system was created from the snippet server

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`snippetId`](../interfaces/IParticleSystem.md#snippetid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`snippetId`](BaseParticleSystem.md#snippetid)

***

### spriteCellChangeSpeed

> **spriteCellChangeSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L326)

If using a spritesheet (isAnimationSheetEnabled) defines the speed of the sprite loop (default is 1 meaning the animation will play once during the entire particle lifetime)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteCellChangeSpeed`](../interfaces/IParticleSystem.md#spritecellchangespeed)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteCellChangeSpeed`](BaseParticleSystem.md#spritecellchangespeed)

***

### spriteCellHeight

> **spriteCellHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L344)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell height to use

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteCellHeight`](../interfaces/IParticleSystem.md#spritecellheight)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteCellHeight`](BaseParticleSystem.md#spritecellheight)

***

### spriteCellLoop

> **spriteCellLoop**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L348)

If using a spritesheet (isAnimationSheetEnabled), defines wether the sprite animation is looping

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteCellLoop`](../interfaces/IParticleSystem.md#spritecellloop)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteCellLoop`](BaseParticleSystem.md#spritecellloop)

***

### spriteCellWidth

> **spriteCellWidth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:340](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L340)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell width to use

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteCellWidth`](../interfaces/IParticleSystem.md#spritecellwidth)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteCellWidth`](BaseParticleSystem.md#spritecellwidth)

***

### spriteRandomStartCell

> **spriteRandomStartCell**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:352](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L352)

This allows the system to random pick the start cell ID between startSpriteCellID and endSpriteCellID

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteRandomStartCell`](../interfaces/IParticleSystem.md#spriterandomstartcell)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteRandomStartCell`](BaseParticleSystem.md#spriterandomstartcell)

***

### startDelay

> **startDelay**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:531](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L531)

Defines the delay in milliseconds before starting the system (0 by default)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`startDelay`](../interfaces/IParticleSystem.md#startdelay)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`startDelay`](BaseParticleSystem.md#startdelay)

***

### startSpriteCellID

> **startSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L331)

If using a spritesheet (isAnimationSheetEnabled) defines the first sprite cell to display

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`startSpriteCellID`](../interfaces/IParticleSystem.md#startspritecellid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`startSpriteCellID`](BaseParticleSystem.md#startspritecellid)

***

### textureMask

> **textureMask**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:749](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L749)

An optional mask to filter some colors out of the texture, or filter a part of the alpha channel

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`textureMask`](BaseParticleSystem.md#texturemask)

***

### translationPivot

> **translationPivot**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L355)

Gets or sets a Vector2 used to move the pivot (by default (0,0))

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`translationPivot`](../interfaces/IParticleSystem.md#translationpivot)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`translationPivot`](BaseParticleSystem.md#translationpivot)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L83)

Gets or sets the unique id of the particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`uniqueId`](../interfaces/IParticleSystem.md#uniqueid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`uniqueId`](BaseParticleSystem.md#uniqueid)

***

### updateInAnimate

> **updateInAnimate**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L90)

Indicates that the update of particles is done in the animate function (and not in render). Default: false

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`updateInAnimate`](../interfaces/IParticleSystem.md#updateinanimate)

***

### updateSpeed

> **updateSpeed**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L123)

The overall motion speed (0.01 is default update speed, faster updates = faster animation)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`updateSpeed`](../interfaces/IParticleSystem.md#updatespeed)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`updateSpeed`](BaseParticleSystem.md#updatespeed)

***

### worldOffset

> **worldOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L394)

Gets or sets a world offset applied to all particles

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`worldOffset`](BaseParticleSystem.md#worldoffset)

***

### BLENDMODE\_ADD

> `static` **BLENDMODE\_ADD**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L60)

Add current color and particle color multiplied by particle’s alpha

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_ADD`](BaseParticleSystem.md#blendmode_add)

***

### BLENDMODE\_MULTIPLY

> `static` **BLENDMODE\_MULTIPLY**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L64)

Multiply current color with particle color

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_MULTIPLY`](BaseParticleSystem.md#blendmode_multiply)

***

### BLENDMODE\_MULTIPLYADD

> `static` **BLENDMODE\_MULTIPLYADD**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L68)

Multiply current color with particle color then add current color and particle color multiplied by particle’s alpha

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_MULTIPLYADD`](BaseParticleSystem.md#blendmode_multiplyadd)

***

### BLENDMODE\_ONEONE

> `static` **BLENDMODE\_ONEONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L52)

Source color is added to the destination color without alpha affecting the result. Great for additive glow effects (fire, magic, lasers)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_ONEONE`](BaseParticleSystem.md#blendmode_oneone)

***

### BLENDMODE\_STANDARD

> `static` **BLENDMODE\_STANDARD**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L56)

Blend current color and particle color using particle’s alpha. Same as Constants.ALPHA_COMBINE, the go-to for transparency. 100% alpha means source, 0% alpha means background. Glass, UI fade, smoke

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_STANDARD`](BaseParticleSystem.md#blendmode_standard)

***

### BLENDMODE\_SUBTRACT

> `static` **BLENDMODE\_SUBTRACT**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L73)

Subtracts source (particle) from destination (current color), leading to darker results
- NOTE: Init as -1 so we can properly map all modes to Engine Const's (otherwise ALPHA_SUBTRACT will conflict with BLENDMODE_MULTIPLY since both use 3)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_SUBTRACT`](BaseParticleSystem.md#blendmode_subtract)

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`_isAnimationSheetEnabled`](BaseParticleSystem.md#_isanimationsheetenabled)

***

### activeParticleCount

#### Get Signature

> **get** **activeParticleCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L207)

Gets or set the number of active particles

##### Deprecated

Please use maxActiveParticleCount instead.

##### Returns

`number`

#### Set Signature

> **set** **activeParticleCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L211)

##### Parameters

###### value

`number`

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`attractors`](BaseParticleSystem.md#attractors)

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

Gets or sets the billboard mode to use when isBillboardBased = true.
Value can be: ParticleSystem.BILLBOARDMODE_ALL, ParticleSystem.BILLBOARDMODE_Y, ParticleSystem.BILLBOARDMODE_STRETCHED

##### Parameters

###### value

`number`

##### Returns

`void`

Gets or sets the billboard mode to use when isBillboardBased = true.
Value can be: ParticleSystem.BILLBOARDMODE_ALL, ParticleSystem.BILLBOARDMODE_Y, ParticleSystem.BILLBOARDMODE_STRETCHED

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`billboardMode`](../interfaces/IParticleSystem.md#billboardmode)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`billboardMode`](BaseParticleSystem.md#billboardmode)

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`direction1`](BaseParticleSystem.md#direction1)

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`direction2`](BaseParticleSystem.md#direction2)

***

### emitRateControl

#### Get Signature

> **get** **emitRateControl**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L181)

Gets whether emit rate control is enabled.
When true, the GPU particle system limits the number of active particles
to approximately emitRate * maxLifeTime (matching CPU particle behavior)
and uses a circular buffer to recycle particle slots.
When false (default), all dead particles are recycled immediately,
which is the legacy GPU particle behavior.

##### Returns

`boolean`

***

### flowMap

#### Get Signature

> **get** **flowMap**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L264)

Gets or sets the current flow map

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

#### Set Signature

> **set** **flowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:268](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L268)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`imageProcessingConfiguration`](BaseParticleSystem.md#imageprocessingconfiguration)

***

### indexBuffer

#### Get Signature

> **get** **indexBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:507](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L507)

Gets the index buffer used by the particle system (null for GPU particle systems)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Gets the index buffer used by the particle system (or null if no index buffer is used)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`indexBuffer`](../interfaces/IParticleSystem.md#indexbuffer)

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

Gets or sets a boolean indicating if a spritesheet is used to animate the particles texture

##### Parameters

###### value

`boolean`

##### Returns

`void`

Gets or sets a boolean indicating if a spritesheet is used to animate the particles texture

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isAnimationSheetEnabled`](../interfaces/IParticleSystem.md#isanimationsheetenabled)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`isAnimationSheetEnabled`](BaseParticleSystem.md#isanimationsheetenabled)

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

Gets or sets a boolean indicating if the particles must be rendered as billboard or aligned with the direction

##### Parameters

###### value

`boolean`

##### Returns

`void`

Gets or sets a boolean indicating if the particles must be rendered as billboard or aligned with the direction

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isBillboardBased`](../interfaces/IParticleSystem.md#isbillboardbased)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`isBillboardBased`](BaseParticleSystem.md#isbillboardbased)

***

### isNodeGenerated

#### Get Signature

> **get** **isNodeGenerated**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L246)

Returns true if the particle system was generated by a node particle system set

##### Returns

`boolean`

Returns true if the particle system was generated by a node particle system set

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isNodeGenerated`](../interfaces/IParticleSystem.md#isnodegenerated)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`isNodeGenerated`](BaseParticleSystem.md#isnodegenerated)

***

### maxActiveParticleCount

#### Get Signature

> **get** **maxActiveParticleCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L195)

Gets or set the number of active particles
The value cannot be greater than "capacity" (if it is, it will be limited to "capacity").

##### Returns

`number`

#### Set Signature

> **set** **maxActiveParticleCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L199)

##### Parameters

###### value

`number`

##### Returns

`void`

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxEmitBox`](BaseParticleSystem.md#maxemitbox)

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minEmitBox`](BaseParticleSystem.md#minemitbox)

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

Gets or sets a texture used to add random noise to particle positions

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ProceduralTexture`](ProceduralTexture.md)\>

##### Returns

`void`

Gets or sets a texture used to add random noise to particle positions

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`noiseTexture`](../interfaces/IParticleSystem.md#noisetexture)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`noiseTexture`](BaseParticleSystem.md#noisetexture)

***

### onBeforeDrawParticlesObservable

#### Get Signature

> **get** **onBeforeDrawParticlesObservable**(): [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:476](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L476)

Observable that will be called just before the particles are drawn

##### Returns

[`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>\>

Observable that will be called just before the particles are drawn

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`onBeforeDrawParticlesObservable`](../interfaces/IParticleSystem.md#onbeforedrawparticlesobservable)

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

The amount of time the particle system is running (depends of the overall update speed).

##### Parameters

###### value

`number`

##### Returns

`void`

The amount of time the particle system is running (depends of the overall update speed).

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`targetStopDuration`](../interfaces/IParticleSystem.md#targetstopduration)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`targetStopDuration`](BaseParticleSystem.md#targetstopduration)

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

Gets or sets a boolean enabling the use of logarithmic depth buffers, which is good for wide depth buffers.

##### Parameters

###### value

`boolean`

##### Returns

`void`

Gets or sets a boolean enabling the use of logarithmic depth buffers, which is good for wide depth buffers.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`useLogarithmicDepth`](../interfaces/IParticleSystem.md#uselogarithmicdepth)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`useLogarithmicDepth`](BaseParticleSystem.md#uselogarithmicdepth)

***

### useRampGradients

#### Get Signature

> **get** **useRampGradients**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:905](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L905)

Not supported by GPUParticleSystem
Gets or sets a boolean indicating that ramp gradients must be used

##### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro#ramp-gradients

##### Returns

`boolean`

#### Set Signature

> **set** **useRampGradients**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:910](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L910)

Gets or sets a boolean indicating that ramp gradients must be used

##### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/ramps_and_blends

##### Parameters

###### value

`boolean`

##### Returns

`void`

Gets or sets a boolean indicating that ramp gradients must be used

#### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/ramps_and_blends

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`useRampGradients`](../interfaces/IParticleSystem.md#userampgradients)

***

### vertexBuffers

#### Get Signature

> **get** **vertexBuffers**(): [`Immutable`](../type-aliases/Immutable.md)\<\{\[`key`: `string`\]: [`VertexBuffer`](VertexBuffer.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L496)

Gets the vertex buffers used by the particle system
Should be called after render() has been called for the current frame so that the buffers returned are the ones that have been updated
in the current frame (there's a ping-pong between two sets of buffers - for a given frame, one set is used as the source and the other as the destination)

##### Returns

[`Immutable`](../type-aliases/Immutable.md)\<\{\[`key`: `string`\]: [`VertexBuffer`](VertexBuffer.md); \}\>

Gets the vertex buffers used by the particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`vertexBuffers`](../interfaces/IParticleSystem.md#vertexbuffers)

***

### vertexShaderName

#### Get Signature

> **get** **vertexShaderName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:487](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L487)

Gets the name of the particle vertex shader

##### Returns

`string`

Gets the name of the particle vertex shader

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`vertexShaderName`](../interfaces/IParticleSystem.md#vertexshadername)

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L138)

Gets a boolean indicating if the GPU particles can be rendered on current browser

##### Returns

`boolean`

## Methods

### addAlphaRemapGradient()

> **addAlphaRemapGradient**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:856](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L856)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addAlphaRemapGradient`](../interfaces/IParticleSystem.md#addalpharemapgradient)

***

### addAngularSpeedGradient()

> **addAngularSpeedGradient**(`gradient`, `factor`, `factor2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:677](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L677)

Adds a new angular speed gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the angular speed to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addAngularSpeedGradient`](../interfaces/IParticleSystem.md#addangularspeedgradient)

***

### addAttractor()

> **addAttractor**(`attractor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:237](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L237)

Add an attractor to the particle system. Attractors are used to change the direction of the particles in the system.

#### Parameters

##### attractor

[`Attractor`](Attractor.md)

The attractor to add to the particle system

#### Returns

`void`

#### Overrides

[`BaseParticleSystem`](BaseParticleSystem.md).[`addAttractor`](BaseParticleSystem.md#addattractor)

***

### addColorGradient()

> **addColorGradient**(`gradient`, `color1`, `color2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:528](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L528)

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

defines an optional second color to be used to produce a random color per particle at the gradient (lerped with color1 using a per-particle random value)

#### Returns

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addColorGradient`](../interfaces/IParticleSystem.md#addcolorgradient)

***

### addColorRemapGradient()

> **addColorRemapGradient**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:836](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L836)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addColorRemapGradient`](../interfaces/IParticleSystem.md#addcolorremapgradient)

***

### addDragGradient()

> **addDragGradient**(`gradient`, `factor`, `factor2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:773](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L773)

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

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addDragGradient`](../interfaces/IParticleSystem.md#adddraggradient)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addEmitRateGradient`](../interfaces/IParticleSystem.md#addemitrategradient)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`addEmitRateGradient`](BaseParticleSystem.md#addemitrategradient)

***

### addLifeTimeGradient()

> **addLifeTimeGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:921](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L921)

Adds a new life time gradient (please note that this will only work if you set the targetStopDuration property)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addLifeTimeGradient`](../interfaces/IParticleSystem.md#addlifetimegradient)

***

### addLimitVelocityGradient()

> **addLimitVelocityGradient**(`gradient`, `factor`, `factor2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:741](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L741)

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

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addLimitVelocityGradient`](../interfaces/IParticleSystem.md#addlimitvelocitygradient)

***

### addRampGradient()

> **addRampGradient**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:876](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L876)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addRampGradient`](../interfaces/IParticleSystem.md#addrampgradient)

***

### addSizeGradient()

> **addSizeGradient**(`gradient`, `factor`, `factor2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:632](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L632)

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

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addSizeGradient`](../interfaces/IParticleSystem.md#addsizegradient)

***

### addStartSizeGradient()

> **addStartSizeGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:805](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L805)

Adds a new start size gradient (please note that this will only work if you set the targetStopDuration property)

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the start size factor to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addStartSizeGradient`](../interfaces/IParticleSystem.md#addstartsizegradient)

***

### addVelocityGradient()

> **addVelocityGradient**(`gradient`, `factor`, `factor2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:709](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L709)

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

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addVelocityGradient`](../interfaces/IParticleSystem.md#addvelocitygradient)

***

### animate()

> **animate**(`preWarm?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:1667](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L1667)

Animates the particle system for the current frame by emitting new particles and or animating the living ones.

#### Parameters

##### preWarm?

`boolean` = `false`

defines if we are in the pre-warmimg phase

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`animate`](../interfaces/IParticleSystem.md#animate)

***

### clone()

> **clone**(`name`, `newEmitter`, `cloneTexture?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:2455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L2455)

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

`GPUParticleSystem`

the cloned particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`clone`](../interfaces/IParticleSystem.md#clone)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createBoxEmitter`](../interfaces/IParticleSystem.md#createboxemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createBoxEmitter`](BaseParticleSystem.md#createboxemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createConeEmitter`](../interfaces/IParticleSystem.md#createconeemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createConeEmitter`](BaseParticleSystem.md#createconeemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createCylinderEmitter`](../interfaces/IParticleSystem.md#createcylinderemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createCylinderEmitter`](BaseParticleSystem.md#createcylinderemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createDirectedConeEmitter`](../interfaces/IParticleSystem.md#createdirectedconeemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createDirectedConeEmitter`](BaseParticleSystem.md#createdirectedconeemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createDirectedCylinderEmitter`](../interfaces/IParticleSystem.md#createdirectedcylinderemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createDirectedCylinderEmitter`](BaseParticleSystem.md#createdirectedcylinderemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createDirectedSphereEmitter`](../interfaces/IParticleSystem.md#createdirectedsphereemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createDirectedSphereEmitter`](BaseParticleSystem.md#createdirectedsphereemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createHemisphericEmitter`](../interfaces/IParticleSystem.md#createhemisphericemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createHemisphericEmitter`](BaseParticleSystem.md#createhemisphericemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createMeshEmitter`](../interfaces/IParticleSystem.md#createmeshemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createMeshEmitter`](BaseParticleSystem.md#createmeshemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createPointEmitter`](../interfaces/IParticleSystem.md#createpointemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createPointEmitter`](BaseParticleSystem.md#createpointemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createSphereEmitter`](../interfaces/IParticleSystem.md#createsphereemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createSphereEmitter`](BaseParticleSystem.md#createsphereemitter)

***

### dispose()

> **dispose**(`disposeTexture?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:2359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L2359)

Disposes the particle system and free the associated resources

#### Parameters

##### disposeTexture?

`boolean` = `true`

defines if the particule texture must be disposed as well (true by default)

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`dispose`](../interfaces/IParticleSystem.md#dispose)

***

### fillDefines()

> **fillDefines**(`defines`, `blendMode?`, `fillImageProcessing?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:1572](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L1572)

Fill the defines array according to the current settings of the particle system

#### Parameters

##### defines

`string`[]

Array to be updated

##### blendMode?

`number` = `0`

blend mode to take into account when updating the array

##### fillImageProcessing?

`boolean` = `true`

fills the image processing defines

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`fillDefines`](../interfaces/IParticleSystem.md#filldefines)

***

### fillUniformsAttributesAndSamplerNames()

> **fillUniformsAttributesAndSamplerNames**(`uniforms`, `attributes`, `samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:1641](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L1641)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`fillUniformsAttributesAndSamplerNames`](../interfaces/IParticleSystem.md#filluniformsattributesandsamplernames)

***

### forceRefreshGradients()

> **forceRefreshGradients**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:578](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L578)

Force the system to rebuild all gradients that need to be resync

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`forceRefreshGradients`](../interfaces/IParticleSystem.md#forcerefreshgradients)

***

### getActiveCount()

> **getActiveCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L359)

Gets the number of particles active at the same time.

#### Returns

`number`

The number of active particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getActiveCount`](../interfaces/IParticleSystem.md#getactivecount)

***

### getAlphaRemapGradients()

> **getAlphaRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:586](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L586)

Gets the current list of alpha remap gradients.
You must use addAlphaRemapGradient and removeAlphaRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of alpha remap gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getAlphaRemapGradients`](../interfaces/IParticleSystem.md#getalpharemapgradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getAlphaRemapGradients`](BaseParticleSystem.md#getalpharemapgradients)

***

### getAngularSpeedGradients()

> **getAngularSpeedGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:604](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L604)

Gets the current list of angular speed gradients.
You must use addAngularSpeedGradient and removeAngularSpeedGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of angular speed gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getAngularSpeedGradients`](../interfaces/IParticleSystem.md#getangularspeedgradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getAngularSpeedGradients`](BaseParticleSystem.md#getangularspeedgradients)

***

### getCapacity()

> **getCapacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L169)

Gets the maximum number of particles active at the same time.

#### Returns

`number`

The max number of active particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getCapacity`](../interfaces/IParticleSystem.md#getcapacity)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L443)

Returns the string "GPUParticleSystem"

#### Returns

`string`

a string containing the class name

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getClassName`](../interfaces/IParticleSystem.md#getclassname)

***

### getColorGradients()

> **getColorGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:559](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L559)

Gets the current list of color gradients.
You must use addColorGradient and removeColorGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

the list of color gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getColorGradients`](../interfaces/IParticleSystem.md#getcolorgradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getColorGradients`](BaseParticleSystem.md#getcolorgradients)

***

### getColorRemapGradients()

> **getColorRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:577](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L577)

Gets the current list of color remap gradients.
You must use addColorRemapGradient and removeColorRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of color remap gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getColorRemapGradients`](../interfaces/IParticleSystem.md#getcolorremapgradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getColorRemapGradients`](BaseParticleSystem.md#getcolorremapgradients)

***

### getCustomEffect()

> **getCustomEffect**(`blendMode?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:452](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L452)

Gets the custom effect used to render the particles

#### Parameters

##### blendMode?

`number` = `0`

Blend mode for which the effect should be retrieved

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

The effect

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getCustomEffect`](../interfaces/IParticleSystem.md#getcustomeffect)

***

### getDragGradients()

> **getDragGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L538)

Gets the current list of drag gradients.
You must use addDragGradient and removeDragGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of drag gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getDragGradients`](../interfaces/IParticleSystem.md#getdraggradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getDragGradients`](BaseParticleSystem.md#getdraggradients)

***

### getEmitRateGradients()

> **getEmitRateGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L631)

Gets the current list of emit rate gradients.
You must use addEmitRateGradient and removeEmitRateGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of emit rate gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getEmitRateGradients`](../interfaces/IParticleSystem.md#getemitrategradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getEmitRateGradients`](BaseParticleSystem.md#getemitrategradients)

***

### getLifeTimeGradients()

> **getLifeTimeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:595](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L595)

Gets the current list of life time gradients.
You must use addLifeTimeGradient and removeLifeTimeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of life time gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getLifeTimeGradients`](../interfaces/IParticleSystem.md#getlifetimegradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getLifeTimeGradients`](BaseParticleSystem.md#getlifetimegradients)

***

### getLimitVelocityGradients()

> **getLimitVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:550](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L550)

Gets the current list of limit velocity gradients.
You must use addLimitVelocityGradient and removeLimitVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of limit velocity gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getLimitVelocityGradients`](../interfaces/IParticleSystem.md#getlimitvelocitygradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getLimitVelocityGradients`](BaseParticleSystem.md#getlimitvelocitygradients)

***

### getRampGradients()

> **getRampGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Color3Gradient`](Color3Gradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:896](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L896)

Not supported by GPUParticleSystem

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3Gradient`](Color3Gradient.md)[]\>

the list of ramp gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getRampGradients`](../interfaces/IParticleSystem.md#getrampgradients)

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L460)

Get hosting scene

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getScene`](../interfaces/IParticleSystem.md#getscene)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getScene`](BaseParticleSystem.md#getscene)

***

### getSizeGradients()

> **getSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L568)

Gets the current list of size gradients.
You must use addSizeGradient and removeSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of size gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getSizeGradients`](../interfaces/IParticleSystem.md#getsizegradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getSizeGradients`](BaseParticleSystem.md#getsizegradients)

***

### getStartSizeGradients()

> **getStartSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:622](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L622)

Gets the current list of start size gradients.
You must use addStartSizeGradient and removeStartSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of start size gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getStartSizeGradients`](../interfaces/IParticleSystem.md#getstartsizegradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getStartSizeGradients`](BaseParticleSystem.md#getstartsizegradients)

***

### getVelocityGradients()

> **getVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.ts:613](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/baseParticleSystem.ts#L613)

Gets the current list of velocity gradients.
You must use addVelocityGradient and removeVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

the list of velocity gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getVelocityGradients`](../interfaces/IParticleSystem.md#getvelocitygradients)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`getVelocityGradients`](BaseParticleSystem.md#getvelocitygradients)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:298](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L298)

Is this system ready to be used/rendered

#### Returns

`boolean`

true if the system is ready

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isReady`](../interfaces/IParticleSystem.md#isready)

***

### isStarted()

> **isStarted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L335)

Gets if the system has been started. (Note: this will still be true after stop is called)

#### Returns

`boolean`

True if it has been started, otherwise false.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isStarted`](../interfaces/IParticleSystem.md#isstarted)

***

### isStopped()

> **isStopped**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L343)

Gets if the system has been stopped. (Note: rendering is still happening but the system is frozen)

#### Returns

`boolean`

True if it has been stopped, otherwise false.

***

### isStopping()

> **isStopping**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L351)

Gets a boolean indicating that the system is stopping

#### Returns

`boolean`

true if the system is currently stopping

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isStopping`](../interfaces/IParticleSystem.md#isstopping)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:2316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L2316)

Rebuilds the particle system

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`rebuild`](../interfaces/IParticleSystem.md#rebuild)

***

### removeAlphaRemapGradient()

> **removeAlphaRemapGradient**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:866](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L866)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

***

### removeAngularSpeedGradient()

> **removeAngularSpeedGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:695](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L695)

Remove a specific angular speed gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeAngularSpeedGradient`](../interfaces/IParticleSystem.md#removeangularspeedgradient)

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`removeAttractor`](BaseParticleSystem.md#removeattractor)

***

### removeColorGradient()

> **removeColorGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:594](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L594)

Remove a specific color gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeColorGradient`](../interfaces/IParticleSystem.md#removecolorgradient)

***

### removeColorRemapGradient()

> **removeColorRemapGradient**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:846](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L846)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

***

### removeDragGradient()

> **removeDragGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:791](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L791)

Remove a specific drag gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeDragGradient`](../interfaces/IParticleSystem.md#removedraggradient)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeEmitRateGradient`](../interfaces/IParticleSystem.md#removeemitrategradient)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`removeEmitRateGradient`](BaseParticleSystem.md#removeemitrategradient)

***

### removeLifeTimeGradient()

> **removeLifeTimeGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:939](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L939)

Remove a specific life time gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeLifeTimeGradient`](../interfaces/IParticleSystem.md#removelifetimegradient)

***

### removeLimitVelocityGradient()

> **removeLimitVelocityGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:759](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L759)

Remove a specific limit velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeLimitVelocityGradient`](../interfaces/IParticleSystem.md#removelimitvelocitygradient)

***

### removeRampGradient()

> **removeRampGradient**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:886](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L886)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

***

### removeSizeGradient()

> **removeSizeGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:651](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L651)

Remove a specific size gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeSizeGradient`](../interfaces/IParticleSystem.md#removesizegradient)

***

### removeStartSizeGradient()

> **removeStartSizeGradient**(`gradient`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:823](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L823)

Remove a specific start size gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeStartSizeGradient`](../interfaces/IParticleSystem.md#removestartsizegradient)

***

### removeVelocityGradient()

> **removeVelocityGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:727](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L727)

Remove a specific velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`GPUParticleSystem`

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`removeVelocityGradient`](../interfaces/IParticleSystem.md#removevelocitygradient)

***

### render()

> **render**(`preWarm?`, `forceUpdateOnly?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:2126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L2126)

Renders the particle system in its current state

#### Parameters

##### preWarm?

`boolean` = `false`

defines if the system should only update the particles but not render them

##### forceUpdateOnly?

`boolean` = `false`

if true, force to only update the particles and never display them (meaning, even if preWarm=false, when forceUpdateOnly=true the particles won't be displayed)

#### Returns

`number`

the current number of particles

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`render`](../interfaces/IParticleSystem.md#render)

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L428)

Remove all active particles

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`reset`](../interfaces/IParticleSystem.md#reset)

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:607](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L607)

Resets the draw wrappers cache

#### Returns

`void`

***

### serialize()

> **serialize**(`serializeTexture?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:2760](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L2760)

Serializes the particle system to a JSON object

#### Parameters

##### serializeTexture?

`boolean` = `false`

defines if the texture must be serialized as well

#### Returns

`any`

the JSON object

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`serialize`](../interfaces/IParticleSystem.md#serialize)

***

### setCustomEffect()

> **setCustomEffect**(`effect`, `blendMode?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L465)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`setCustomEffect`](../interfaces/IParticleSystem.md#setcustomeffect)

***

### start()

> **start**(`delay?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L367)

Starts the particle system and begins to emit

#### Parameters

##### delay?

`number` = `...`

defines the delay in milliseconds before starting the system (this.startDelay by default)

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`start`](../interfaces/IParticleSystem.md#start)

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L415)

Stops the particle system.

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`stop`](../interfaces/IParticleSystem.md#stop)

***

### fromParticleSystem()

> `static` **fromParticleSystem**(`source`, `sceneOrEngine`, `options?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:2518](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L2518)

Creates a new GPUParticleSystem from an existing CPU ParticleSystem, copying all shared properties.
Features that are not supported on the GPU (sub-emitters, custom `startDirectionFunction` /
`startPositionFunction`, `customShader`, ramp/remap gradients) are logged as warnings and skipped.
Flow maps are converted: the CPU `FlowMap` image data is uploaded to a new `RawTexture` which is
assigned to the result.

Note: a custom `updateFunction` on the source cannot be detected (the property is always assigned
to a default) and has no equivalent on the GPU path, so any custom per-frame update logic will be
silently dropped.

Textures (particleTexture, noiseTexture) are shared by reference between the source and the result.
All other mutable state (colors, vectors, emitter type, gradients, attractors) is cloned so that
the two systems can be modified independently after the call.

Note: unlike the GPUParticleSystem constructor, `emitRateControl` defaults to `true` here so that
changes to `emitRate` on the converted system behave the same as on the CPU source. Pass
`{ emitRateControl: false }` explicitly to opt out.

#### Parameters

##### source

[`ParticleSystem`](ParticleSystem.md)

The CPU ParticleSystem to convert

##### sceneOrEngine

[`Scene`](Scene.md) \| [`AbstractEngine`](AbstractEngine.md)

The scene or engine the new GPU particle system belongs to

##### options?

`Partial`\<\{ `capacity`: `number`; `emitRateControl`: `boolean`; `maxAttractors`: `number`; `randomTextureSize`: `number`; \}\>

Optional options forwarded to the new GPU particle system (capacity, randomTextureSize, emitRateControl, maxAttractors). `capacity` defaults to the source capacity and `emitRateControl` defaults to `true`.

#### Returns

`GPUParticleSystem`

A new GPUParticleSystem with shared properties copied from the source

***

### Parse()

> `static` **Parse**(`parsedParticleSystem`, `sceneOrEngine`, `rootUrl`, `doNotStart?`, `capacity?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.ts:2798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/gpuParticleSystem.ts#L2798)

Parses a JSON object to create a GPU particle system.

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

`GPUParticleSystem`

the parsed GPU particle system
