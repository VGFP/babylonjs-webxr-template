[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GPUParticleSystem

# Class: GPUParticleSystem

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L49)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:959](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L959)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L79)

List of animations used by the particle system.

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`animations`](BaseParticleSystem.md#animations)

***

### applyFog

> **applyFog**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L236)

Gets or sets a boolean indicating that this particle system will allow fog to be rendered on it (false by default)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`applyFog`](BaseParticleSystem.md#applyfog)

***

### beginAnimationFrom

> **beginAnimationFrom**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L380)

Gets or sets the frame to start the animation from when beginAnimationOnStart is true

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`beginAnimationFrom`](../interfaces/IParticleSystem.md#beginanimationfrom)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`beginAnimationFrom`](BaseParticleSystem.md#beginanimationfrom)

***

### beginAnimationLoop

> **beginAnimationLoop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:390](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L390)

Gets or sets a boolean indicating if animations must loop when beginAnimationOnStart is true

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`beginAnimationLoop`](../interfaces/IParticleSystem.md#beginanimationloop)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`beginAnimationLoop`](BaseParticleSystem.md#beginanimationloop)

***

### beginAnimationOnStart

> **beginAnimationOnStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L375)

Gets or sets a boolean indicating that hosted animations (in the system.animations array) must be started when system.start() is called

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`beginAnimationOnStart`](../interfaces/IParticleSystem.md#beginanimationonstart)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`beginAnimationOnStart`](BaseParticleSystem.md#beginanimationonstart)

***

### beginAnimationTo

> **beginAnimationTo**: `number` = `60`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L385)

Gets or sets the frame to end the animation on when beginAnimationOnStart is true

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`beginAnimationTo`](../interfaces/IParticleSystem.md#beginanimationto)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`beginAnimationTo`](BaseParticleSystem.md#beginanimationto)

***

### blendMode

> **blendMode**: `number` = `BaseParticleSystem.BLENDMODE_ONEONE`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L310)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L400)

Gets or sets the active clipplane 1

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane`](BaseParticleSystem.md#clipplane)

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L405)

Gets or sets the active clipplane 2

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane2`](BaseParticleSystem.md#clipplane2)

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L410)

Gets or sets the active clipplane 3

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane3`](BaseParticleSystem.md#clipplane3)

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:415](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L415)

Gets or sets the active clipplane 4

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane4`](BaseParticleSystem.md#clipplane4)

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L420)

Gets or sets the active clipplane 5

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane5`](BaseParticleSystem.md#clipplane5)

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:425](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L425)

Gets or sets the active clipplane 6

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`clipPlane6`](BaseParticleSystem.md#clipplane6)

***

### color1

> **color1**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:737](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L737)

Random color of each particle after it has been emitted, between color1 and color2 vectors

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`color1`](../interfaces/IParticleSystem.md#color1)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`color1`](BaseParticleSystem.md#color1)

***

### color2

> **color2**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:741](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L741)

Random color of each particle after it has been emitted, between color1 and color2 vectors

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`color2`](../interfaces/IParticleSystem.md#color2)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`color2`](BaseParticleSystem.md#color2)

***

### colorDead

> **colorDead**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:745](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L745)

Color the particle will have at the end of its lifetime

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`colorDead`](../interfaces/IParticleSystem.md#colordead)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`colorDead`](BaseParticleSystem.md#colordead)

***

### customShader

> **customShader**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L225)

This can help using your own shader to render the particle system.
The according effect will be created

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`customShader`](BaseParticleSystem.md#customshader)

***

### defaultProjectionMatrix

> **defaultProjectionMatrix**: [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L248)

Gets or sets a matrix to use to compute projection

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`defaultProjectionMatrix`](../interfaces/IParticleSystem.md#defaultprojectionmatrix)

***

### disposeOnStop

> **disposeOnStop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L146)

Specifies whether the particle system will be disposed once it reaches the end of the animation.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`disposeOnStop`](../interfaces/IParticleSystem.md#disposeonstop)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`disposeOnStop`](BaseParticleSystem.md#disposeonstop)

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L135)

Specifies if the particle system should be serialized

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`doNotSerialize`](../interfaces/IParticleSystem.md#donotserialize)

***

### emitRate

> **emitRate**: `number` = `10`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L114)

The maximum number of particles to emit per frame

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`emitRate`](../interfaces/IParticleSystem.md#emitrate)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`emitRate`](BaseParticleSystem.md#emitrate)

***

### emitter

> **emitter**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md) \| [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L109)

The emitter represents the Mesh or position we are attaching the particle system to.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`emitter`](../interfaces/IParticleSystem.md#emitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`emitter`](BaseParticleSystem.md#emitter)

***

### endSpriteCellID

> **endSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L337)

If using a spritesheet (isAnimationSheetEnabled) defines the last sprite cell to display

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`endSpriteCellID`](../interfaces/IParticleSystem.md#endspritecellid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`endSpriteCellID`](BaseParticleSystem.md#endspritecellid)

***

### flowMapStrength

> **flowMapStrength**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L263)

The strength of the flow map

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L191)

Forces the particle to write their depth information to the depth buffer. This can help preventing other draw calls
to override the particles.

#### Overrides

[`BaseParticleSystem`](BaseParticleSystem.md).[`forceDepthWrite`](BaseParticleSystem.md#forcedepthwrite)

***

### gravity

> **gravity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:468](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L468)

You can use gravity if you want to give an orientation to your particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`gravity`](../interfaces/IParticleSystem.md#gravity)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`gravity`](BaseParticleSystem.md#gravity)

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L89)

The id of the Particle system.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`id`](../interfaces/IParticleSystem.md#id)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`id`](BaseParticleSystem.md#id)

***

### isGPU

> `readonly` **isGPU**: `true` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L225)

Indicates that the particle system is GPU based

***

### isLocal

> **isLocal**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L222)

Specifies if the particles are updated in emitter local space or world space.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isLocal`](../interfaces/IParticleSystem.md#islocal)

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L53)

The layer mask we are rendering the particles through.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`layerMask`](../interfaces/IParticleSystem.md#layermask)

#### Overrides

[`BaseParticleSystem`](BaseParticleSystem.md).[`layerMask`](BaseParticleSystem.md#layermask)

***

### limitVelocityDamping

> **limitVelocityDamping**: `number` = `0.4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:544](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L544)

Gets or sets a value indicating the damping to apply if the limit velocity factor is reached

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`limitVelocityDamping`](../interfaces/IParticleSystem.md#limitvelocitydamping)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`limitVelocityDamping`](BaseParticleSystem.md#limitvelocitydamping)

***

### manualEmitCount

> **manualEmitCount**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L119)

If you want to launch only a few particles at once, that can be done, as well.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`manualEmitCount`](../interfaces/IParticleSystem.md#manualemitcount)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`manualEmitCount`](BaseParticleSystem.md#manualemitcount)

***

### maxAngularSpeed

> **maxAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L209)

Maximum angular speed of emitting particles (Z-axis rotation for each particle).

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxAngularSpeed`](../interfaces/IParticleSystem.md#maxangularspeed)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxAngularSpeed`](BaseParticleSystem.md#maxangularspeed)

***

### maxAttractors

> `readonly` **maxAttractors**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L233)

Maximum number of attractors for this GPU particle system instance.
Determined at construction time via the `maxAttractors` option (default 8).
Limited by the fixed-size uniform arrays in the update shaders.

***

### maxEmitPower

> **maxEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L155)

Maximum power of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxEmitPower`](../interfaces/IParticleSystem.md#maxemitpower)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxEmitPower`](BaseParticleSystem.md#maxemitpower)

***

### maxInitialRotation

> **maxInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L200)

Gets or sets the maximal initial rotation in radians.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxInitialRotation`](../interfaces/IParticleSystem.md#maxinitialrotation)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxInitialRotation`](BaseParticleSystem.md#maxinitialrotation)

***

### maxLifeTime

> **maxLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L164)

Maximum life time of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxLifeTime`](../interfaces/IParticleSystem.md#maxlifetime)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxLifeTime`](BaseParticleSystem.md#maxlifetime)

***

### maxScaleX

> **maxScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L182)

Maximum scale of emitting particles on X axis.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxScaleX`](../interfaces/IParticleSystem.md#maxscalex)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxScaleX`](BaseParticleSystem.md#maxscalex)

***

### maxScaleY

> **maxScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L191)

Maximum scale of emitting particles on Y axis.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxScaleY`](../interfaces/IParticleSystem.md#maxscaley)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxScaleY`](BaseParticleSystem.md#maxscaley)

***

### maxSize

> **maxSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L173)

Maximum Size of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`maxSize`](../interfaces/IParticleSystem.md#maxsize)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxSize`](BaseParticleSystem.md#maxsize)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L253)

Gets or sets an object used to store user defined information for the particle system

***

### minAngularSpeed

> **minAngularSpeed**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L205)

Minimum angular speed of emitting particles (Z-axis rotation for each particle).

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minAngularSpeed`](../interfaces/IParticleSystem.md#minangularspeed)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minAngularSpeed`](BaseParticleSystem.md#minangularspeed)

***

### minEmitPower

> **minEmitPower**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L151)

Minimum power of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minEmitPower`](../interfaces/IParticleSystem.md#minemitpower)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minEmitPower`](BaseParticleSystem.md#minemitpower)

***

### minInitialRotation

> **minInitialRotation**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L196)

Gets or sets the minimal initial rotation in radians.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minInitialRotation`](../interfaces/IParticleSystem.md#mininitialrotation)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minInitialRotation`](BaseParticleSystem.md#mininitialrotation)

***

### minLifeTime

> **minLifeTime**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L160)

Minimum life time of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minLifeTime`](../interfaces/IParticleSystem.md#minlifetime)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minLifeTime`](BaseParticleSystem.md#minlifetime)

***

### minScaleX

> **minScaleX**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L178)

Minimum scale of emitting particles on X axis.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minScaleX`](../interfaces/IParticleSystem.md#minscalex)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minScaleX`](BaseParticleSystem.md#minscalex)

***

### minScaleY

> **minScaleY**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L187)

Minimum scale of emitting particles on Y axis.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minScaleY`](../interfaces/IParticleSystem.md#minscaley)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minScaleY`](BaseParticleSystem.md#minscaley)

***

### minSize

> **minSize**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L169)

Minimum Size of emitting particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`minSize`](../interfaces/IParticleSystem.md#minsize)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`minSize`](BaseParticleSystem.md#minsize)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L94)

The friendly name of the Particle system.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`name`](../interfaces/IParticleSystem.md#name)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`name`](BaseParticleSystem.md#name)

***

### noiseStrength

> **noiseStrength**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L268)

Gets or sets the strength to apply to the noise value (default is (10, 10, 10))

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`noiseStrength`](../interfaces/IParticleSystem.md#noisestrength)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`noiseStrength`](BaseParticleSystem.md#noisestrength)

***

### onAnimationEnd

> **onAnimationEnd**: [`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L303)

Callback triggered when the particle animation is ending.

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`onAnimationEnd`](BaseParticleSystem.md#onanimationend)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L152)

An event triggered when the system is disposed.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`onDisposeObservable`](../interfaces/IParticleSystem.md#ondisposeobservable)

***

### onStartedObservable

> **onStartedObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L161)

An event triggered when the system is started

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`onStartedObservable`](../interfaces/IParticleSystem.md#onstartedobservable)

***

### onStoppedObservable

> **onStoppedObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L156)

An event triggered when the system is stopped

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`onStoppedObservable`](../interfaces/IParticleSystem.md#onstoppedobservable)

***

### particleEmitterType

> **particleEmitterType**: [`IParticleEmitterType`](../interfaces/IParticleEmitterType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:756](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L756)

The particle emitter type defines the emitter used by the particle system.
It can be for example box, sphere, or cone...

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`particleEmitterType`](../interfaces/IParticleSystem.md#particleemittertype)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`particleEmitterType`](BaseParticleSystem.md#particleemittertype)

***

### particleTexture

> **particleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L214)

The texture used to render each particle. (this can be a spritesheet)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`particleTexture`](../interfaces/IParticleSystem.md#particletexture)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`particleTexture`](BaseParticleSystem.md#particletexture)

***

### preventAutoStart

> **preventAutoStart**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L231)

By default particle system starts as soon as they are created. This prevents the
automatic start to happen and let you decide when to start emitting particles.

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`preventAutoStart`](BaseParticleSystem.md#preventautostart)

***

### preWarmCycles

> **preWarmCycles**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L319)

Gets or sets a value indicating how many cycles (or frames) must be executed before first rendering (this value has to be set before starting the system). Default is 0

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`preWarmCycles`](../interfaces/IParticleSystem.md#prewarmcycles)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`preWarmCycles`](BaseParticleSystem.md#prewarmcycles)

***

### preWarmStepOffset

> **preWarmStepOffset**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L322)

Gets or sets a value indicating the time step multiplier to use in pre-warm mode (default is 1)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`preWarmStepOffset`](../interfaces/IParticleSystem.md#prewarmstepoffset)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`preWarmStepOffset`](BaseParticleSystem.md#prewarmstepoffset)

***

### renderingGroupId

> **renderingGroupId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L104)

The rendering group used by the Particle system to chose when to render.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`renderingGroupId`](../interfaces/IParticleSystem.md#renderinggroupid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`renderingGroupId`](BaseParticleSystem.md#renderinggroupid)

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L99)

Snippet ID if the particle system was created from the snippet server

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`snippetId`](../interfaces/IParticleSystem.md#snippetid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`snippetId`](BaseParticleSystem.md#snippetid)

***

### spriteCellChangeSpeed

> **spriteCellChangeSpeed**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L327)

If using a spritesheet (isAnimationSheetEnabled) defines the speed of the sprite loop (default is 1 meaning the animation will play once during the entire particle lifetime)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteCellChangeSpeed`](../interfaces/IParticleSystem.md#spritecellchangespeed)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteCellChangeSpeed`](BaseParticleSystem.md#spritecellchangespeed)

***

### spriteCellHeight

> **spriteCellHeight**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L345)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell height to use

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteCellHeight`](../interfaces/IParticleSystem.md#spritecellheight)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteCellHeight`](BaseParticleSystem.md#spritecellheight)

***

### spriteCellLoop

> **spriteCellLoop**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L349)

If using a spritesheet (isAnimationSheetEnabled), defines wether the sprite animation is looping

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteCellLoop`](../interfaces/IParticleSystem.md#spritecellloop)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteCellLoop`](BaseParticleSystem.md#spritecellloop)

***

### spriteCellWidth

> **spriteCellWidth**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L341)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell width to use

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteCellWidth`](../interfaces/IParticleSystem.md#spritecellwidth)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteCellWidth`](BaseParticleSystem.md#spritecellwidth)

***

### spriteRandomStartCell

> **spriteRandomStartCell**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L353)

This allows the system to random pick the start cell ID between startSpriteCellID and endSpriteCellID

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`spriteRandomStartCell`](../interfaces/IParticleSystem.md#spriterandomstartcell)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`spriteRandomStartCell`](BaseParticleSystem.md#spriterandomstartcell)

***

### startDelay

> **startDelay**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L532)

Defines the delay in milliseconds before starting the system (0 by default)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`startDelay`](../interfaces/IParticleSystem.md#startdelay)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`startDelay`](BaseParticleSystem.md#startdelay)

***

### startSpriteCellID

> **startSpriteCellID**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L332)

If using a spritesheet (isAnimationSheetEnabled) defines the first sprite cell to display

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`startSpriteCellID`](../interfaces/IParticleSystem.md#startspritecellid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`startSpriteCellID`](BaseParticleSystem.md#startspritecellid)

***

### textureMask

> **textureMask**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:750](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L750)

An optional mask to filter some colors out of the texture, or filter a part of the alpha channel

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`textureMask`](BaseParticleSystem.md#texturemask)

***

### translationPivot

> **translationPivot**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L356)

Gets or sets a Vector2 used to move the pivot (by default (0,0))

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`translationPivot`](../interfaces/IParticleSystem.md#translationpivot)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`translationPivot`](BaseParticleSystem.md#translationpivot)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L84)

Gets or sets the unique id of the particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`uniqueId`](../interfaces/IParticleSystem.md#uniqueid)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`uniqueId`](BaseParticleSystem.md#uniqueid)

***

### updateInAnimate

> **updateInAnimate**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L91)

Indicates that the update of particles is done in the animate function (and not in render). Default: false

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`updateInAnimate`](../interfaces/IParticleSystem.md#updateinanimate)

***

### updateSpeed

> **updateSpeed**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L124)

The overall motion speed (0.01 is default update speed, faster updates = faster animation)

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`updateSpeed`](../interfaces/IParticleSystem.md#updatespeed)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`updateSpeed`](BaseParticleSystem.md#updatespeed)

***

### worldOffset

> **worldOffset**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L395)

Gets or sets a world offset applied to all particles

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`worldOffset`](BaseParticleSystem.md#worldoffset)

***

### BLENDMODE\_ADD

> `static` **BLENDMODE\_ADD**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L61)

Add current color and particle color multiplied by particle’s alpha

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_ADD`](BaseParticleSystem.md#blendmode_add)

***

### BLENDMODE\_MULTIPLY

> `static` **BLENDMODE\_MULTIPLY**: `number` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L65)

Multiply current color with particle color

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_MULTIPLY`](BaseParticleSystem.md#blendmode_multiply)

***

### BLENDMODE\_MULTIPLYADD

> `static` **BLENDMODE\_MULTIPLYADD**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L69)

Multiply current color with particle color then add current color and particle color multiplied by particle’s alpha

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_MULTIPLYADD`](BaseParticleSystem.md#blendmode_multiplyadd)

***

### BLENDMODE\_ONEONE

> `static` **BLENDMODE\_ONEONE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L53)

Source color is added to the destination color without alpha affecting the result. Great for additive glow effects (fire, magic, lasers)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_ONEONE`](BaseParticleSystem.md#blendmode_oneone)

***

### BLENDMODE\_STANDARD

> `static` **BLENDMODE\_STANDARD**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L57)

Blend current color and particle color using particle’s alpha. Same as Constants.ALPHA_COMBINE, the go-to for transparency. 100% alpha means source, 0% alpha means background. Glass, UI fade, smoke

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_STANDARD`](BaseParticleSystem.md#blendmode_standard)

***

### BLENDMODE\_SUBTRACT

> `static` **BLENDMODE\_SUBTRACT**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L74)

Subtracts source (particle) from destination (current color), leading to darker results
- NOTE: Init as -1 so we can properly map all modes to Engine Const's (otherwise ALPHA_SUBTRACT will conflict with BLENDMODE_MULTIPLY since both use 3)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`BLENDMODE_SUBTRACT`](BaseParticleSystem.md#blendmode_subtract)

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`_isAnimationSheetEnabled`](BaseParticleSystem.md#_isanimationsheetenabled)

***

### activeParticleCount

#### Get Signature

> **get** **activeParticleCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L209)

Gets or set the number of active particles

##### Deprecated

Please use maxActiveParticleCount instead.

##### Returns

`number`

#### Set Signature

> **set** **activeParticleCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L213)

##### Parameters

###### value

`number`

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

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`attractors`](BaseParticleSystem.md#attractors)

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

[`BaseParticleSystem`](BaseParticleSystem.md).[`direction1`](BaseParticleSystem.md#direction1)

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

[`BaseParticleSystem`](BaseParticleSystem.md).[`direction2`](BaseParticleSystem.md#direction2)

***

### emitRateControl

#### Get Signature

> **get** **emitRateControl**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L183)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L266)

Gets or sets the current flow map

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

#### Set Signature

> **set** **flowMap**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L270)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Texture`](Texture.md)\>

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

[`BaseParticleSystem`](BaseParticleSystem.md).[`imageProcessingConfiguration`](BaseParticleSystem.md#imageprocessingconfiguration)

***

### indexBuffer

#### Get Signature

> **get** **indexBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:509](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L509)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:430](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L430)

Gets or sets whether an animation sprite sheet is enabled or not on the particle system

##### Returns

`boolean`

#### Set Signature

> **set** **isAnimationSheetEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L434)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:785](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L785)

Gets or sets a boolean indicating if the particles must be rendered as billboard or aligned with the direction

##### Returns

`boolean`

#### Set Signature

> **set** **isBillboardBased**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:789](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L789)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L247)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L197)

Gets or set the number of active particles
The value cannot be greater than "capacity" (if it is, it will be limited to "capacity").

##### Returns

`number`

#### Set Signature

> **set** **maxActiveParticleCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L201)

##### Parameters

###### value

`number`

##### Returns

`void`

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

[`BaseParticleSystem`](BaseParticleSystem.md).[`maxEmitBox`](BaseParticleSystem.md#maxemitbox)

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

[`BaseParticleSystem`](BaseParticleSystem.md).[`minEmitBox`](BaseParticleSystem.md#minemitbox)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L478)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L131)

The amount of time the particle system is running (depends of the overall update speed).

##### Returns

`number`

#### Set Signature

> **set** **targetStopDuration**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L135)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:449](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L449)

Gets or sets a boolean enabling the use of logarithmic depth buffers, which is good for wide depth buffers.

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:453](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L453)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L907)

Not supported by GPUParticleSystem
Gets or sets a boolean indicating that ramp gradients must be used

##### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro#ramp-gradients

##### Returns

`boolean`

#### Set Signature

> **set** **useRampGradients**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:912](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L912)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:498](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L498)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:489](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L489)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L140)

Gets a boolean indicating if the GPU particles can be rendered on current browser

##### Returns

`boolean`

## Methods

### addAlphaRemapGradient()

> **addAlphaRemapGradient**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:858](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L858)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addAlphaRemapGradient`](../interfaces/IParticleSystem.md#addalpharemapgradient)

***

### addAngularSpeedGradient()

> **addAngularSpeedGradient**(`gradient`, `factor`, `factor2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:679](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L679)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L239)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:530](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L530)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:838](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L838)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addColorRemapGradient`](../interfaces/IParticleSystem.md#addcolorremapgradient)

***

### addDragGradient()

> **addDragGradient**(`gradient`, `factor`, `factor2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:775](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L775)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addEmitRateGradient`](../interfaces/IParticleSystem.md#addemitrategradient)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`addEmitRateGradient`](BaseParticleSystem.md#addemitrategradient)

***

### addLifeTimeGradient()

> **addLifeTimeGradient**(`gradient`, `factor`, `factor2?`): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:923](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L923)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:743](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L743)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:878](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L878)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`addRampGradient`](../interfaces/IParticleSystem.md#addrampgradient)

***

### addSizeGradient()

> **addSizeGradient**(`gradient`, `factor`, `factor2?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:634](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L634)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:807](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L807)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:711](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L711)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:1693](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L1693)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:2481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L2481)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createBoxEmitter`](../interfaces/IParticleSystem.md#createboxemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createBoxEmitter`](BaseParticleSystem.md#createboxemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createConeEmitter`](../interfaces/IParticleSystem.md#createconeemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createConeEmitter`](BaseParticleSystem.md#createconeemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createCylinderEmitter`](../interfaces/IParticleSystem.md#createcylinderemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createCylinderEmitter`](BaseParticleSystem.md#createcylinderemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createDirectedConeEmitter`](../interfaces/IParticleSystem.md#createdirectedconeemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createDirectedConeEmitter`](BaseParticleSystem.md#createdirectedconeemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createDirectedCylinderEmitter`](../interfaces/IParticleSystem.md#createdirectedcylinderemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createDirectedCylinderEmitter`](BaseParticleSystem.md#createdirectedcylinderemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createDirectedSphereEmitter`](../interfaces/IParticleSystem.md#createdirectedsphereemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createDirectedSphereEmitter`](BaseParticleSystem.md#createdirectedsphereemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createHemisphericEmitter`](../interfaces/IParticleSystem.md#createhemisphericemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createHemisphericEmitter`](BaseParticleSystem.md#createhemisphericemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createMeshEmitter`](../interfaces/IParticleSystem.md#createmeshemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createMeshEmitter`](BaseParticleSystem.md#createmeshemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createPointEmitter`](../interfaces/IParticleSystem.md#createpointemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createPointEmitter`](BaseParticleSystem.md#createpointemitter)

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

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`createSphereEmitter`](../interfaces/IParticleSystem.md#createsphereemitter)

#### Inherited from

[`BaseParticleSystem`](BaseParticleSystem.md).[`createSphereEmitter`](BaseParticleSystem.md#createsphereemitter)

***

### dispose()

> **dispose**(`disposeTexture?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:2385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L2385)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:1598](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L1598)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:1667](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L1667)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:580](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L580)

Force the system to rebuild all gradients that need to be resync

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`forceRefreshGradients`](../interfaces/IParticleSystem.md#forcerefreshgradients)

***

### getActiveCount()

> **getActiveCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:361](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L361)

Gets the number of particles active at the same time.

#### Returns

`number`

The number of active particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getActiveCount`](../interfaces/IParticleSystem.md#getactivecount)

***

### getAlphaRemapGradients()

> **getAlphaRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:587](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L587)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:605](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L605)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:171](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L171)

Gets the maximum number of particles active at the same time.

#### Returns

`number`

The max number of active particles.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getCapacity`](../interfaces/IParticleSystem.md#getcapacity)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:445](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L445)

Returns the string "GPUParticleSystem"

#### Returns

`string`

a string containing the class name

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getClassName`](../interfaces/IParticleSystem.md#getclassname)

***

### getColorGradients()

> **getColorGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](ColorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:560](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L560)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:578](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L578)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:454](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L454)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:539](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L539)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L632)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L596)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L551)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L898)

Not supported by GPUParticleSystem

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3Gradient`](Color3Gradient.md)[]\>

the list of ramp gradients

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`getRampGradients`](../interfaces/IParticleSystem.md#getrampgradients)

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L461)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L569)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L623)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:614](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L614)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L300)

Is this system ready to be used/rendered

#### Returns

`boolean`

true if the system is ready

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isReady`](../interfaces/IParticleSystem.md#isready)

***

### isStarted()

> **isStarted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L337)

Gets if the system has been started. (Note: this will still be true after stop is called)

#### Returns

`boolean`

True if it has been started, otherwise false.

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isStarted`](../interfaces/IParticleSystem.md#isstarted)

***

### isStopped()

> **isStopped**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L345)

Gets if the system has been stopped. (Note: rendering is still happening but the system is frozen)

#### Returns

`boolean`

True if it has been stopped, otherwise false.

***

### isStopping()

> **isStopping**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L353)

Gets a boolean indicating that the system is stopping

#### Returns

`boolean`

true if the system is currently stopping

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`isStopping`](../interfaces/IParticleSystem.md#isstopping)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:2342](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L2342)

Rebuilds the particle system

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`rebuild`](../interfaces/IParticleSystem.md#rebuild)

***

### removeAlphaRemapGradient()

> **removeAlphaRemapGradient**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:868](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L868)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

***

### removeAngularSpeedGradient()

> **removeAngularSpeedGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:697](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L697)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L293)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:596](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L596)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:848](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L848)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

***

### removeDragGradient()

> **removeDragGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:793](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L793)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/baseParticleSystem.pure.ts:657](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/baseParticleSystem.pure.ts#L657)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:941](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L941)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:761](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L761)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:888](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L888)

Not supported by GPUParticleSystem

#### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

the current particle system

***

### removeSizeGradient()

> **removeSizeGradient**(`gradient`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:653](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L653)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:825](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L825)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:729](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L729)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:2152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L2152)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:430](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L430)

Remove all active particles

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`reset`](../interfaces/IParticleSystem.md#reset)

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L609)

Resets the draw wrappers cache

#### Returns

`void`

***

### serialize()

> **serialize**(`serializeTexture?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:2786](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L2786)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:467](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L467)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L369)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:417](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L417)

Stops the particle system.

#### Returns

`void`

#### Implementation of

[`IParticleSystem`](../interfaces/IParticleSystem.md).[`stop`](../interfaces/IParticleSystem.md#stop)

***

### fromParticleSystem()

> `static` **fromParticleSystem**(`source`, `sceneOrEngine`, `options?`): `GPUParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:2544](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L2544)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts:2824](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/gpuParticleSystem.pure.ts#L2824)

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
