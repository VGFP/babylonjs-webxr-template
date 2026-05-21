[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IParticleSystem

# Interface: IParticleSystem

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L33)

Interface representing a particle system in Babylon.js.
This groups the common functionalities that needs to be implemented in order to create a particle system.
A particle system represents a way to manage particles from their emission to their animation and rendering.

## Properties

### animations

> **animations**: [`Animation`](../classes/Animation.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L42)

List of animations used by the particle system.

***

### beginAnimationFrom

> **beginAnimationFrom**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L259)

Gets or sets the frame to start the animation from when beginAnimationOnStart is true

***

### beginAnimationLoop

> **beginAnimationLoop**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L269)

Gets or sets a boolean indicating if animations must loop when beginAnimationOnStart is true

***

### beginAnimationOnStart

> **beginAnimationOnStart**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L254)

Gets or sets a boolean indicating that hosted animations (in the system.animations array) must be started when system.start() is called

***

### beginAnimationTo

> **beginAnimationTo**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L264)

Gets or sets the frame to end the animation on when beginAnimationOnStart is true

***

### billboardMode

> **billboardMode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L241)

Gets or sets the billboard mode to use when isBillboardBased = true.
Value can be: ParticleSystem.BILLBOARDMODE_ALL, ParticleSystem.BILLBOARDMODE_Y, ParticleSystem.BILLBOARDMODE_STRETCHED

***

### blendMode

> **blendMode**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L86)

Blend mode use to render the particle. It can be any of the ParticleSystem.BLENDMODE_* constants

***

### color1

> **color1**: [`Color4`](../classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L127)

Random color of each particle after it has been emitted, between color1 and color2 vectors.

***

### color2

> **color2**: [`Color4`](../classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L131)

Random color of each particle after it has been emitted, between color1 and color2 vectors.

***

### colorDead

> **colorDead**: [`Color4`](../classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L136)

Color the particle will have at the end of its lifetime.

***

### defaultProjectionMatrix

> **defaultProjectionMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L290)

Gets or sets a matrix to use to compute projection

***

### disposeOnStop

> **disposeOnStop**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L274)

Specifies whether the particle system will be disposed once it reaches the end of the animation.

***

### doNotSerialize?

> `optional` **doNotSerialize?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L306)

Specifies if the particle system should be serialized

***

### emitRate

> **emitRate**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L141)

The maximum number of particles to emit per frame until we reach the activeParticleCount value

***

### emitter

> **emitter**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md) \| [`Vector3`](../classes/Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L54)

The emitter represents the Mesh or position we are attaching the particle system to.

***

### endSpriteCellID

> **endSpriteCellID**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L203)

If using a spritesheet (isAnimationSheetEnabled) defines the last sprite cell to display

***

### gravity

> **gravity**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L146)

You can use gravity if you want to give an orientation to your particles.

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L46)

The id of the Particle system.

***

### indexBuffer

> **indexBuffer**: [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](../classes/DataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L450)

Gets the index buffer used by the particle system (or null if no index buffer is used)

***

### isAnimationSheetEnabled

> **isAnimationSheetEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L224)

Gets or sets a boolean indicating if a spritesheet is used to animate the particles texture

***

### isBillboardBased

> **isBillboardBased**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L58)

Gets or sets a boolean indicating if the particles must be rendered as billboard or aligned with the direction

***

### isLocal

> **isLocal**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L284)

Specifies if the particles are updated in emitter local space or world space

***

### isNodeGenerated

> **isNodeGenerated**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L301)

Returns true if the particle system was generated by a node particle system set

***

### layerMask

> **layerMask**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L66)

The layer mask we are rendering the particles through.

***

### limitVelocityDamping

> **limitVelocityDamping**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L249)

Gets or sets a value indicating the damping to apply if the limit velocity factor is reached

***

### manualEmitCount

> **manualEmitCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L279)

If you want to launch only a few particles at once, that can be done, as well.

***

### maxAngularSpeed

> **maxAngularSpeed**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L163)

Maximum angular speed of emitting particles (Z-axis rotation for each particle).

***

### maxEmitPower

> **maxEmitPower**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L155)

Maximum power of emitting particles.

***

### maxInitialRotation

> **maxInitialRotation**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L171)

Gets or sets the maximal initial rotation in radians.

***

### maxLifeTime

> **maxLifeTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L95)

Maximum life time of emitting particles.

***

### maxScaleX

> **maxScaleX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L113)

Maximum scale of emitting particles on X axis.

***

### maxScaleY

> **maxScaleY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L122)

Maximum scale of emitting particles on Y axis.

***

### maxSize

> **maxSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L104)

Maximum Size of emitting particles.

***

### minAngularSpeed

> **minAngularSpeed**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L159)

Minimum angular speed of emitting particles (Z-axis rotation for each particle).

***

### minEmitPower

> **minEmitPower**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L151)

Minimum power of emitting particles.

***

### minInitialRotation

> **minInitialRotation**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L167)

Gets or sets the minimal initial rotation in radians.

***

### minLifeTime

> **minLifeTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L91)

Minimum life time of emitting particles.

***

### minScaleX

> **minScaleX**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L109)

Minimum scale of emitting particles on X axis.

***

### minScaleY

> **minScaleY**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L118)

Minimum scale of emitting particles on Y axis.

***

### minSize

> **minSize**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L100)

Minimum Size of emitting particles.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L50)

The name of the Particle system.

***

### noiseStrength

> **noiseStrength**: [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L235)

Gets or sets the strength to apply to the noise value (default is (10, 10, 10))

***

### noiseTexture

> **noiseTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L232)

Gets or sets a texture used to add random noise to particle positions

***

### onBeforeDrawParticlesObservable

> **onBeforeDrawParticlesObservable**: [`Observable`](../classes/Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](../classes/Effect.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L437)

Observable that will be called just before the particles are drawn

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../classes/Observable.md)\<`IParticleSystem`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L345)

An event triggered when the system is disposed

***

### onStartedObservable

> **onStartedObservable**: [`Observable`](../classes/Observable.md)\<`IParticleSystem`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:353](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L353)

An event triggered when the system is started

***

### onStoppedObservable

> **onStoppedObservable**: [`Observable`](../classes/Observable.md)\<`IParticleSystem`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L349)

An event triggered when the system is stopped

***

### particleEmitterType

> **particleEmitterType**: [`Nullable`](../type-aliases/Nullable.md)\<[`IParticleEmitterType`](IParticleEmitterType.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L176)

The particle emitter type defines the emitter used by the particle system.
It can be for example box, sphere, or cone...

***

### particleTexture

> **particleTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L81)

The texture used to render each particle. (this can be a spritesheet)

***

### preWarmCycles

> **preWarmCycles**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L184)

Gets or sets a value indicating how many cycles (or frames) must be executed before first rendering (this value has to be set before starting the system). Default is 0

***

### preWarmStepOffset

> **preWarmStepOffset**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:188](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L188)

Gets or sets a value indicating the time step multiplier to use in pre-warm mode (default is 1)

***

### renderingGroupId

> **renderingGroupId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L62)

The rendering group used by the Particle system to chose when to render.

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L287)

Snippet ID if the particle system was created from the snippet server

***

### spriteCellChangeSpeed

> **spriteCellChangeSpeed**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L193)

If using a spritesheet (isAnimationSheetEnabled) defines the speed of the sprite loop (default is 1 meaning the animation will play once during the entire particle lifetime)

***

### spriteCellHeight

> **spriteCellHeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L215)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell height to use

***

### spriteCellLoop

> **spriteCellLoop**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L207)

If using a spritesheet (isAnimationSheetEnabled), defines whether the sprite animation is looping

***

### spriteCellWidth

> **spriteCellWidth**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L211)

If using a spritesheet (isAnimationSheetEnabled), defines the sprite cell width to use

***

### spriteRandomStartCell

> **spriteRandomStartCell**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L219)

This allows the system to random pick the start cell ID between startSpriteCellID and endSpriteCellID

***

### startDelay

> **startDelay**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L180)

Defines the delay in milliseconds before starting the system (0 by default)

***

### startSpriteCellID

> **startSpriteCellID**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L198)

If using a spritesheet (isAnimationSheetEnabled) defines the first sprite cell to display

***

### targetStopDuration

> **targetStopDuration**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L76)

The amount of time the particle system is running (depends of the overall update speed).

***

### translationPivot

> **translationPivot**: [`Vector2`](../classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L227)

Gets or sets a Vector2 used to move the pivot (by default (0,0))

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L37)

Gets or sets the unique id of the particle system.

***

### updateInAnimate

> **updateInAnimate**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L293)

Indicates that the update of particles is done in the animate function (and not in render)

***

### updateSpeed

> **updateSpeed**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L71)

The overall motion speed (0.01 is default update speed, faster updates = faster animation)

***

### useLogarithmicDepth

> **useLogarithmicDepth**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L246)

Gets or sets a boolean enabling the use of logarithmic depth buffers, which is good for wide depth buffers.

***

### useRampGradients

> **useRampGradients**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:659](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L659)

Gets or sets a boolean indicating that ramp gradients must be used

#### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/ramps_and_blends

***

### vertexBuffers

> **vertexBuffers**: [`Immutable`](../type-aliases/Immutable.md)\<\{\[`key`: `string`\]: [`VertexBuffer`](../classes/VertexBuffer.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L446)

Gets the vertex buffers used by the particle system

***

### vertexShaderName

> **vertexShaderName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L441)

Gets the name of the particle vertex shader

## Methods

### addAlphaRemapGradient()

> **addAlphaRemapGradient**(`gradient`, `min`, `max`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:683](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L683)

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

`IParticleSystem`

the current particle system

***

### addAngularSpeedGradient()

> **addAngularSpeedGradient**(`gradient`, `factor`, `factor2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:505](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L505)

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

`IParticleSystem`

the current particle system

***

### addColorGradient()

> **addColorGradient**(`gradient`, `color1`, `color2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:459](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L459)

Adds a new color gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### color1

[`Color4`](../classes/Color4.md)

defines the color to affect to the specified gradient

##### color2?

[`Color4`](../classes/Color4.md)

defines an additional color used to define a range ([color, color2]) with main color to pick the final color from

#### Returns

`IParticleSystem`

the current particle system

***

### addColorRemapGradient()

> **addColorRemapGradient**(`gradient`, `min`, `max`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:668](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L668)

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

`IParticleSystem`

the current particle system

***

### addDragGradient()

> **addDragGradient**(`gradient`, `factor`, `factor2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:559](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L559)

Adds a new drag gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the drag to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

`IParticleSystem`

the current particle system

***

### addEmitRateGradient()

> **addEmitRateGradient**(`gradient`, `factor`, `factor2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:579](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L579)

Adds a new emit rate gradient (please note that this will only work if you set the targetStopDuration property)

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the emit rate to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

`IParticleSystem`

the current particle system

***

### addLifeTimeGradient()

> **addLifeTimeGradient**(`gradient`, `factor`, `factor2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:621](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L621)

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

`IParticleSystem`

the current particle system

***

### addLimitVelocityGradient()

> **addLimitVelocityGradient**(`gradient`, `factor`, `factor2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:545](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L545)

Adds a new limit velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the limit velocity to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

`IParticleSystem`

the current particle system

***

### addRampGradient()

> **addRampGradient**(`gradient`, `color`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:648](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L648)

Adds a new ramp gradient used to remap particle colors

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### color

[`Color3`](../classes/Color3.md)

defines the color to affect to the specified gradient

#### Returns

`IParticleSystem`

the current particle system

***

### addSizeGradient()

> **addSizeGradient**(`gradient`, `factor`, `factor2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:473](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L473)

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

`IParticleSystem`

the current particle system

***

### addStartSizeGradient()

> **addStartSizeGradient**(`gradient`, `factor`, `factor2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:600](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L600)

Adds a new start size gradient (please note that this will only work if you set the targetStopDuration property)

#### Parameters

##### gradient

`number`

defines the gradient to use (between 0 and 1)

##### factor

`number`

defines the start size to affect to the specified gradient

##### factor2?

`number`

defines an additional factor used to define a range ([factor, factor2]) with main value to pick the final value from

#### Returns

`IParticleSystem`

the current particle system

***

### addVelocityGradient()

> **addVelocityGradient**(`gradient`, `factor`, `factor2?`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:525](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L525)

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

`IParticleSystem`

the current particle system

***

### animate()

> **animate**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L329)

Animates the particle system for this frame.

#### Returns

`void`

***

### clone()

> **clone**(`name`, `newEmitter`): [`Nullable`](../type-aliases/Nullable.md)\<`IParticleSystem`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L360)

Clones the particle system.

#### Parameters

##### name

`string`

The name of the cloned object

##### newEmitter

`any`

The new emitter to use

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IParticleSystem`\>

the cloned particle system

***

### createBoxEmitter()

> **createBoxEmitter**(`direction1`, `direction2`, `minEmitBox`, `maxEmitBox`): [`BoxParticleEmitter`](../classes/BoxParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:763](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L763)

Creates a Box Emitter for the particle system. (emits between direction1 and direction2 from withing the box defined by minEmitBox and maxEmitBox)

#### Parameters

##### direction1

[`Vector3`](../classes/Vector3.md)

Particles are emitted between the direction1 and direction2 from within the box

##### direction2

[`Vector3`](../classes/Vector3.md)

Particles are emitted between the direction1 and direction2 from within the box

##### minEmitBox

[`Vector3`](../classes/Vector3.md)

Particles are emitted from the box between minEmitBox and maxEmitBox

##### maxEmitBox

[`Vector3`](../classes/Vector3.md)

Particles are emitted from the box between minEmitBox and maxEmitBox

#### Returns

[`BoxParticleEmitter`](../classes/BoxParticleEmitter.md)

the emitter

***

### createConeEmitter()

> **createConeEmitter**(`radius`, `angle`): [`ConeParticleEmitter`](../classes/ConeParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:751](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L751)

Creates a Cone Emitter for the particle system (emits from the cone to the particle position)

#### Parameters

##### radius

`number`

The radius of the cone to emit from

##### angle

`number`

The base angle of the cone

#### Returns

[`ConeParticleEmitter`](../classes/ConeParticleEmitter.md)

the emitter

***

### createCylinderEmitter()

> **createCylinderEmitter**(`radius`, `height`, `radiusRange`, `directionRandomizer`): [`CylinderParticleEmitter`](../classes/CylinderParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:732](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L732)

Creates a Cylinder Emitter for the particle system (emits from the cylinder to the particle position)

#### Parameters

##### radius

`number`

The radius of the emission cylinder

##### height

`number`

The height of the emission cylinder

##### radiusRange

`number`

The range of emission [0-1] 0 Surface only, 1 Entire Radius

##### directionRandomizer

`number`

How much to randomize the particle direction [0-1]

#### Returns

[`CylinderParticleEmitter`](../classes/CylinderParticleEmitter.md)

the emitter

***

### createDirectedConeEmitter()

> **createDirectedConeEmitter**(`radius`, `angle`, `direction1`, `direction2`): [`ConeDirectedParticleEmitter`](../classes/ConeDirectedParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:753](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L753)

#### Parameters

##### radius

`number`

##### angle

`number`

##### direction1

[`Vector3`](../classes/Vector3.md)

##### direction2

[`Vector3`](../classes/Vector3.md)

#### Returns

[`ConeDirectedParticleEmitter`](../classes/ConeDirectedParticleEmitter.md)

***

### createDirectedCylinderEmitter()

> **createDirectedCylinderEmitter**(`radius`, `height`, `radiusRange`, `direction1`, `direction2`): [`CylinderDirectedParticleEmitter`](../classes/CylinderDirectedParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:743](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L743)

Creates a Directed Cylinder Emitter for the particle system (emits between direction1 and direction2)

#### Parameters

##### radius

`number`

The radius of the cylinder to emit from

##### height

`number`

The height of the emission cylinder

##### radiusRange

`number`

the range of the emission cylinder [0-1] 0 Surface only, 1 Entire Radius (1 by default)

##### direction1

[`Vector3`](../classes/Vector3.md)

Particles are emitted between the direction1 and direction2 from within the cylinder

##### direction2

[`Vector3`](../classes/Vector3.md)

Particles are emitted between the direction1 and direction2 from within the cylinder

#### Returns

[`CylinderDirectedParticleEmitter`](../classes/CylinderDirectedParticleEmitter.md)

the emitter

***

### createDirectedSphereEmitter()

> **createDirectedSphereEmitter**(`radius`, `direction1`, `direction2`): [`SphereDirectedParticleEmitter`](../classes/SphereDirectedParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:722](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L722)

Creates a Directed Sphere Emitter for the particle system (emits between direction1 and direction2)

#### Parameters

##### radius

`number`

The radius of the sphere to emit from

##### direction1

[`Vector3`](../classes/Vector3.md)

Particles are emitted between the direction1 and direction2 from within the sphere

##### direction2

[`Vector3`](../classes/Vector3.md)

Particles are emitted between the direction1 and direction2 from within the sphere

#### Returns

[`SphereDirectedParticleEmitter`](../classes/SphereDirectedParticleEmitter.md)

the emitter

***

### createHemisphericEmitter()

> **createHemisphericEmitter**(`radius`, `radiusRange`): [`HemisphericParticleEmitter`](../classes/HemisphericParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:705](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L705)

Creates a Hemisphere Emitter for the particle system (emits along the hemisphere radius)

#### Parameters

##### radius

`number`

The radius of the hemisphere to emit from

##### radiusRange

`number`

The range of the hemisphere to emit from [0-1] 0 Surface Only, 1 Entire Radius

#### Returns

[`HemisphericParticleEmitter`](../classes/HemisphericParticleEmitter.md)

the emitter

***

### createMeshEmitter()

> **createMeshEmitter**(`mesh`): [`MeshParticleEmitter`](../classes/MeshParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:770](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L770)

Creates a Mesh Emitter for the particle system (emits from the surface of a mesh)

#### Parameters

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md)\>

The mesh to use as the emitter source

#### Returns

[`MeshParticleEmitter`](../classes/MeshParticleEmitter.md)

the emitter

***

### createPointEmitter()

> **createPointEmitter**(`direction1`, `direction2`): [`PointParticleEmitter`](../classes/PointParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:697](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L697)

Creates a Point Emitter for the particle system (emits directly from the emitter position)

#### Parameters

##### direction1

[`Vector3`](../classes/Vector3.md)

Particles are emitted between the direction1 and direction2 from within the box

##### direction2

[`Vector3`](../classes/Vector3.md)

Particles are emitted between the direction1 and direction2 from within the box

#### Returns

[`PointParticleEmitter`](../classes/PointParticleEmitter.md)

the emitter

***

### createSphereEmitter()

> **createSphereEmitter**(`radius`, `radiusRange`): [`SphereParticleEmitter`](../classes/SphereParticleEmitter.md)

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:713](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L713)

Creates a Sphere Emitter for the particle system (emits along the sphere radius)

#### Parameters

##### radius

`number`

The radius of the sphere to emit from

##### radiusRange

`number`

The range of the sphere to emit from [0-1] 0 Surface Only, 1 Entire Radius

#### Returns

[`SphereParticleEmitter`](../classes/SphereParticleEmitter.md)

the emitter

***

### dispose()

> **dispose**(`disposeTexture?`, `disposeAttachedSubEmitters?`, `disposeEndSubEmitters?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L341)

Dispose the particle system and frees its associated resources.

#### Parameters

##### disposeTexture?

`boolean`

defines if the particle texture must be disposed as well (true by default)

##### disposeAttachedSubEmitters?

`boolean`

defines if the attached sub-emitters must be disposed as well (false by default)

##### disposeEndSubEmitters?

`boolean`

defines if the end type sub-emitters must be disposed as well (false by default)

#### Returns

`void`

***

### fillDefines()

> **fillDefines**(`defines`, `blendMode`, `fillImageProcessing?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L426)

Fill the defines array according to the current settings of the particle system

#### Parameters

##### defines

`string`[]

Array to be updated

##### blendMode

`number`

blend mode to take into account when updating the array

##### fillImageProcessing?

`boolean`

fills the image processing defines

#### Returns

`void`

***

### fillUniformsAttributesAndSamplerNames()

> **fillUniformsAttributesAndSamplerNames**(`uniforms`, `attributes`, `samplers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:433](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L433)

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

***

### forceRefreshGradients()

> **forceRefreshGradients**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L373)

Force the system to rebuild all gradients that need to be resync

#### Returns

`void`

***

### getActiveCount()

> **getActiveCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L318)

Gets the number of particles active at the same time.

#### Returns

`number`

The number of active particles.

***

### getAlphaRemapGradients()

> **getAlphaRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:689](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L689)

Gets the current list of alpha remap gradients.
You must use addAlphaRemapGradient and removeAlphaRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of alpha remap gradients

***

### getAngularSpeedGradients()

> **getAngularSpeedGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:497](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L497)

Gets the current list of angular speed gradients.
You must use addAngularSpeedGradient and removeAngularSpeedGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of angular speed gradients

***

### getCapacity()

> **getCapacity**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L312)

Gets the maximum number of particles active at the same time.

#### Returns

`number`

The max number of active particles.

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L406)

Returns the string "ParticleSystem"

#### Returns

`string`

a string containing the class name

***

### getColorGradients()

#### Call Signature

> **getColorGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](../classes/ColorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:485](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L485)

Gets the current list of color gradients.
You must use addColorGradient and removeColorGradient to update this list

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](../classes/ColorGradient.md)[]\>

the list of color gradients

#### Call Signature

> **getColorGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](../classes/ColorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:640](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L640)

Gets the current list of color gradients.
You must use addColorGradient and removeColorGradient to update this list

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorGradient`](../classes/ColorGradient.md)[]\>

the list of color gradients

***

### getColorRemapGradients()

> **getColorRemapGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:674](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L674)

Gets the current list of color remap gradients.
You must use addColorRemapGradient and removeColorRemapGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of color remap gradients

***

### getCustomEffect()

> **getCustomEffect**(`blendMode`): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](../classes/Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:412](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L412)

Gets the custom effect used to render the particles

#### Parameters

##### blendMode

`number`

Blend mode for which the effect should be retrieved

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](../classes/Effect.md)\>

The effect

***

### getDragGradients()

> **getDragGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:571](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L571)

Gets the current list of drag gradients.
You must use addDragGradient and removeDragGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of drag gradients

***

### getEmitRateGradients()

> **getEmitRateGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L591)

Gets the current list of emit rate gradients.
You must use addEmitRateGradient and removeEmitRateGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of emit rate gradients

***

### getLifeTimeGradients()

> **getLifeTimeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:633](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L633)

Gets the current list of life time gradients.
You must use addLifeTimeGradient and removeLifeTimeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of life time gradients

***

### getLimitVelocityGradients()

> **getLimitVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L537)

Gets the current list of limit velocity gradients.
You must use addLimitVelocityGradient and removeLimitVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of limit velocity gradients

***

### getRampGradients()

> **getRampGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Color3Gradient`](../classes/Color3Gradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:654](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L654)

Gets the current list of ramp gradients.
You must use addRampGradient and removeRampGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Color3Gradient`](../classes/Color3Gradient.md)[]\>

the list of ramp gradients

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:776](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L776)

Get hosting scene

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

the scene

***

### getSizeGradients()

> **getSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L491)

Gets the current list of size gradients.
You must use addSizeGradient and removeSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of size gradients

***

### getStartSizeGradients()

> **getStartSizeGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L612)

Gets the current list of start size gradients.
You must use addStartSizeGradient and removeStartSizeGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of start size gradients

***

### getVelocityGradients()

> **getVelocityGradients**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:517](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L517)

Gets the current list of velocity gradients.
You must use addVelocityGradient and removeVelocityGradient to update this list

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FactorGradient`](../classes/FactorGradient.md)[]\>

the list of velocity gradients

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L401)

Is this system ready to be used/rendered

#### Returns

`boolean`

true if the system is ready

***

### isStarted()

> **isStarted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L324)

Gets if the system has been started. (Note: this will still be true after stop is called)

#### Returns

`boolean`

True if it has been started, otherwise false.

***

### isStopping()

> **isStopping**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L395)

Gets a boolean indicating that the system is stopping

#### Returns

`boolean`

true if the system is currently stopping

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L370)

Rebuild the particle system

#### Returns

`void`

***

### removeAngularSpeedGradient()

> **removeAngularSpeedGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:511](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L511)

Remove a specific angular speed gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### removeColorGradient()

> **removeColorGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L465)

Remove a specific color gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### removeDragGradient()

> **removeDragGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L565)

Remove a specific drag gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### removeEmitRateGradient()

> **removeEmitRateGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:585](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L585)

Remove a specific emit rate gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### removeLifeTimeGradient()

> **removeLifeTimeGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L627)

Remove a specific life time gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### removeLimitVelocityGradient()

> **removeLimitVelocityGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L551)

Remove a specific limit velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### removeSizeGradient()

> **removeSizeGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L479)

Remove a specific size gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### removeStartSizeGradient()

> **removeStartSizeGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:606](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L606)

Remove a specific start size gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### removeVelocityGradient()

> **removeVelocityGradient**(`gradient`): `IParticleSystem`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:531](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L531)

Remove a specific velocity gradient

#### Parameters

##### gradient

`number`

defines the gradient to remove

#### Returns

`IParticleSystem`

the current particle system

***

### render()

> **render**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L334)

Renders the particle system in its current state.

#### Returns

`number`

the current number of particles

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L389)

Remove all active particles

#### Returns

`void`

***

### serialize()

> **serialize**(`serializeTexture`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L366)

Serializes the particle system to a JSON object

#### Parameters

##### serializeTexture

`boolean`

defines if the texture must be serialized as well

#### Returns

`any`

the JSON object

***

### setCustomEffect()

> **setCustomEffect**(`effect`, `blendMode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:418](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L418)

Sets the custom effect used to render the particles

#### Parameters

##### effect

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](../classes/Effect.md)\>

The effect to set

##### blendMode

`number`

Blend mode for which the effect should be set

#### Returns

`void`

***

### start()

> **start**(`delay?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:379](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L379)

Starts the particle system and begins to emit

#### Parameters

##### delay?

`number`

defines the delay in milliseconds before starting the system (0 by default)

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/IParticleSystem.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/IParticleSystem.ts#L384)

Stops the particle system.

#### Returns

`void`
