[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IShadowGenerator

# Interface: IShadowGenerator

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L75)

Interface to implement to create a shadow generator compatible with BJS.

## Properties

### doNotSerialize?

> `optional` **doNotSerialize?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L83)

Specifies if the `ShadowGenerator` should be serialized, `true` to skip serialization.
Note a `ShadowGenerator` will not be serialized if its light has `doNotSerialize=true`

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L77)

Gets or set the id of the shadow generator. It will be the one from the light if not defined

## Methods

### bindShadowLight()

> **bindShadowLight**(`lightIndex`, `effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L113)

Binds the shadow related information inside of an effect (information like near, far, darkness...
defined in the generator but impacting the effect).
It implies the uniforms available on the materials are the standard BJS ones.

#### Parameters

##### lightIndex

`string`

Index of the light in the enabled light list of the material owning the effect

##### effect

[`Effect`](../classes/Effect.md)

The effect we are binding the information for

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L150)

Disposes the Shadow map and related Textures and effects.

#### Returns

`void`

***

### forceCompilation()

> **forceCompilation**(`onCompiled?`, `options?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L132)

Forces all the attached effect to compile to enable rendering only once ready vs. lazily compiling effects.

#### Parameters

##### onCompiled?

(`generator`) => `void`

Callback triggered at the and of the effects compilation

##### options?

`Partial`\<\{ `useInstances`: `boolean`; \}\>

Sets of optional options forcing the compilation with different modes

#### Returns

`void`

***

### forceCompilationAsync()

> **forceCompilationAsync**(`options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L139)

Forces all the attached effect to compile to enable rendering only once ready vs. lazily compiling effects.

#### Parameters

##### options?

`Partial`\<\{ `useInstances`: `boolean`; \}\>

Sets of optional options forcing the compilation with different modes

#### Returns

`Promise`\<`void`\>

A promise that resolves when the compilation completes

***

### getShadowMap()

> **getShadowMap**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L89)

Gets the main RTT containing the shadow map (usually storing depth from the light point of view).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

The render target texture if present otherwise, null

***

### getTransformMatrix()

> **getTransformMatrix**(): [`Matrix`](../classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L119)

Gets the transformation matrix used to project the meshes into the map from the light point of view.
(eq to shadow projection matrix * light transform matrix)

#### Returns

[`Matrix`](../classes/Matrix.md)

The transform matrix used to create the shadow map

***

### isReady()

> **isReady**(`subMesh`, `useInstances`, `isTransparent`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L98)

Determine whether the shadow generator is ready or not (mainly all effects and related post processes needs to be ready).

#### Parameters

##### subMesh

[`SubMesh`](../classes/SubMesh.md)

The submesh we want to render in the shadow map

##### useInstances

`boolean`

Defines whether will draw in the map using instances

##### isTransparent

`boolean`

Indicates that isReady is called for a transparent subMesh

#### Returns

`boolean`

true if ready otherwise, false

***

### prepareDefines()

> **prepareDefines**(`defines`, `lightIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L105)

Prepare all the defines in a material relying on a shadow map at the specified light index.

#### Parameters

##### defines

[`MaterialDefines`](../classes/MaterialDefines.md)

Defines of the material we want to update

##### lightIndex

`number`

Index of the light in the enabled light list of the material

#### Returns

`void`

***

### recreateShadowMap()

> **recreateShadowMap**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L125)

Recreates the shadow map dependencies like RTT and post processes. This can be used during the switch between
Cube and 2D textures for instance.

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Lights/Shadows/shadowGenerator.ts#L145)

Serializes the shadow generator setup to a json object.

#### Returns

`any`

The serialized JSON object
