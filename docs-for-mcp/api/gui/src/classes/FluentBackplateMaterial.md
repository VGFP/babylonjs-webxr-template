[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / FluentBackplateMaterial

# Class: FluentBackplateMaterial

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L45)

Class used to render square buttons with fluent design

## Constructors

### Constructor

> **new FluentBackplateMaterial**(`name`, `scene?`): `FluentBackplateMaterial`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L226)

#### Parameters

##### name

`string`

##### scene?

[`Scene`](../../../core/src/classes/Scene.md)

#### Returns

`FluentBackplateMaterial`

#### Overrides

`PushMaterial.constructor`

## Properties

### absoluteSizes

> **absoluteSizes**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L78)

Gets or sets whether to use absolute sizes when calculating effects on the backplate.
Since desktop and VR/AR have different relative sizes, it's usually best to keep this false.

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L258)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

`PushMaterial.allowShaderHotSwapping`

***

### animations

> **animations**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Animation`](../../../core/src/classes/Animation.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L565)

Stores the animations for the material

#### Inherited from

`PushMaterial.animations`

***

### baseColor

> **baseColor**: [`Color4`](../../../core/src/classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L87)

Gets or sets the base color of the backplate.

***

### blobFade

> **blobFade**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L141)

Gets or sets the opacity of the fluent hover glow effect corresponding to the left pointer (0.0 - 1.0). Default is 0.

***

### blobFade2

> **blobFade2**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L159)

Gets or sets the opacity of the fluent hover glow effect corresponding to the right pointer (0.0 - 1.0). Default is 0.

***

### blobFadeLength

> **blobFadeLength**: `number` = `0.08`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L123)

Gets or sets the length of the fluent hover glow effect fade.

***

### blobFarDistance

> **blobFarDistance**: `number` = `0.08`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L117)

Gets or sets the distance considered "far" from the backplate, which controls the size of the fluent hover glow effect (see blobFarSize).

***

### blobFarSize

> **blobFarSize**: `number` = `0.04`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L105)

Gets or sets the far size of the fluent hover glow effect.

***

### blobIntensity

> **blobIntensity**: `number` = `0.98`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L99)

Gets or sets the intensity of the fluent hover glow effect.

***

### blobNearDistance

> **blobNearDistance**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L111)

Gets or sets the distance considered "near" to the backplate, which controls the size of the fluent hover glow effect (see blobNearSize).

***

### blobNearSize

> **blobNearSize**: `number` = `0.22`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L129)

Gets or sets the size of the fluent hover glow effect when the left pointer is considered "near" to the backplate (see blobNearDistance).

***

### blobNearSize2

> **blobNearSize2**: `number` = `0.22`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:147](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L147)

Gets or sets the size of the fluent hover glow effect when the right pointer is considered "near" to the backplate (see blobNearDistance).

***

### blobPulse

> **blobPulse**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L135)

Gets or sets the progress of the fluent hover glow effect selection animation corresponding to the left pointer (0.0 - 1.0).

***

### blobPulse2

> **blobPulse2**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L153)

Gets or sets the progress of the fluent hover glow effect selection animation corresponding to the right pointer (0.0 - 1.0).

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L339)

Specifies if the ready state should be checked on each call

#### Inherited from

`PushMaterial.checkReadyOnEveryCall`

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L345)

Specifies if the ready state should be checked once

#### Inherited from

`PushMaterial.checkReadyOnlyOnce`

***

### clipPlane

> **clipPlane**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:877](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L877)

Gets or sets the active clipplane 1

#### Inherited from

`PushMaterial.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:882](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L882)

Gets or sets the active clipplane 2

#### Inherited from

`PushMaterial.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:887](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L887)

Gets or sets the active clipplane 3

#### Inherited from

`PushMaterial.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:892](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L892)

Gets or sets the active clipplane 4

#### Inherited from

`PushMaterial.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:897](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L897)

Gets or sets the active clipplane 5

#### Inherited from

`PushMaterial.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Plane`](../../../core/src/classes/Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:902](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L902)

Gets or sets the active clipplane 6

#### Inherited from

`PushMaterial.clipPlane6`

***

### customShaderNameResolve

> **customShaderNameResolve**: (`shaderName`, `uniforms`, `uniformBuffers`, `samplers`, `defines`, `attributes?`, `options?`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L238)

Custom callback helping to override the default shader used in the material.

#### Parameters

##### shaderName

`string`

##### uniforms

`string`[]

##### uniformBuffers

`string`[]

##### samplers

`string`[]

##### defines

`string`[] \| [`MaterialDefines`](../../../core/src/classes/MaterialDefines.md)

##### attributes?

`string`[]

##### options?

[`ICustomShaderNameResolveOptions`](../../../core/src/interfaces/ICustomShaderNameResolveOptions.md)

#### Returns

`string`

#### Inherited from

`PushMaterial.customShaderNameResolve`

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:764](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L764)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

`PushMaterial.depthFunction`

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:752](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L752)

Specifies if color writing should be disabled

#### Inherited from

`PushMaterial.disableColorWrite`

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:746](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L746)

Specifies if depth writing should be disabled

#### Inherited from

`PushMaterial.disableDepthWrite`

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L555)

Specifies if the material should be serialized

#### Inherited from

`PushMaterial.doNotSerialize`

***

### fadeOut

> **fadeOut**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L201)

Gets or sets the opacity of the backplate (0.0 - 1.0).

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L758)

Specifies if depth writing should be forced

#### Inherited from

`PushMaterial.forceDepthWrite`

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => [`SmartArray`](../../../core/src/classes/SmartArray.md)\<[`RenderTargetTexture`](../../../core/src/classes/RenderTargetTexture.md)\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L541)

Callback triggered to get the render target textures

#### Inherited from

`PushMaterial.getRenderTargetTextures`

***

### globalLeftIndexTipPosition

> **globalLeftIndexTipPosition**: [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L216)

Gets or sets the world-space position of the tip of the left index finger.

***

### globalRightIndexTipPosition

> **globalRightIndexTipPosition**: [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L223)

Gets or sets the world-space position of the tip of the right index finger.

***

### highlightColor

> **highlightColor**: [`Color4`](../../../core/src/classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L168)

Gets or sets the color of the highlights on the backplate line.

***

### highlightWidth

> **highlightWidth**: `number` = `0.25`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L174)

Gets or sets the width of the highlights on the backplate line.

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L304)

The ID of the material

#### Inherited from

`PushMaterial.id`

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../../../core/src/interfaces/IInspectable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L372)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

`PushMaterial.inspectableCustomProperties`

***

### iridescenceEdgeIntensity

> **iridescenceEdgeIntensity**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:192](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L192)

Gets or sets the intensity of the iridescence effect on the backplate edges.

***

### iridescenceIntensity

> **iridescenceIntensity**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L186)

Gets or sets the intensity of the iridescence effect.

***

### lineColor

> **lineColor**: [`Color4`](../../../core/src/classes/Color4.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:93](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L93)

Gets or sets the line color of the backplate.

***

### lineWidth

> **lineWidth**: `number` = `0.01`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L71)

Gets or sets the line width of the backplate.

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L325)

Gets or sets user defined metadata

#### Inherited from

`PushMaterial.metadata`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L319)

The name of the material

#### Inherited from

`PushMaterial.name`

***

### onCompiled

> **onCompiled**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L531)

Callback triggered when the material is compiled

#### Inherited from

`PushMaterial.onCompiled`

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L570)

An event triggered when the material is disposed

#### Inherited from

`PushMaterial.onDisposeObservable`

***

### onError

> **onError**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L536)

Callback triggered when an error occurs

#### Inherited from

`PushMaterial.onError`

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](../../../core/src/classes/MaterialPluginManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.types.ts:8](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.types.ts#L8)

Plugin manager for this material

#### Inherited from

`PushMaterial.pluginManager`

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L800)

Stores the size of points

#### Inherited from

`PushMaterial.pointSize`

***

### radius

> **radius**: `number` = `0.03`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L65)

Gets or sets the corner radius on the backplate. Best to keep this value between 0.01 and 0.5. Default is 0.03.

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L333)

For internal use only. Please do not use.

#### Inherited from

`PushMaterial.reservedDataStore`

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:770](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L770)

Specifies if there should be a separate pass for culling

#### Inherited from

`PushMaterial.separateCullingPass`

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](../../../core/src/classes/ShadowDepthWrapper.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L251)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

`PushMaterial.shadowDepthWrapper`

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L526)

Stores the value for side orientation

#### Inherited from

`PushMaterial.sideOrientation`

***

### state

> **state**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L351)

The state of the material

#### Inherited from

`PushMaterial.state`

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](../../../core/src/classes/MaterialStencilState.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L907)

Gives access to the stencil properties of the material

#### Inherited from

`PushMaterial.stencil`

***

### textureRepetitionHexTilingParams

> **textureRepetitionHexTilingParams**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:459](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L459)

Parameters for the hex tiling texture repetition mode (TEXTURE_REPETITION_HEX_TILING).
x = rotation strength (0..1, default 1.0) — how much each hex tile is rotated.
y = fall-off contrast (0..1, default 0.6) — how much luminance affects blending weight at tile borders.
z = exponent (1..20, default 7.0) — controls the sharpness of weight falloff between tiles.
w = contrast (0..1, default 0.5) — boost blending contrast via Gain3 (0.5 = neutral, &gt;0.5 = higher contrast).

#### See

https://jcgt.org/published/0011/03/05/

#### Inherited from

`PushMaterial.textureRepetitionHexTilingParams`

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L310)

Gets or sets the unique id of the material

#### Inherited from

`PushMaterial.uniqueId`

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:806](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L806)

Stores the z offset Factor value

#### Inherited from

`PushMaterial.zOffset`

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:812](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L812)

Stores the z offset Units value

#### Inherited from

`PushMaterial.zOffsetUnits`

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L173)

The all dirty flag value

#### Inherited from

`PushMaterial.AllDirtyFlag`

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L158)

The dirty attribute flag value

#### Inherited from

`PushMaterial.AttributesDirtyFlag`

***

### BLOB\_TEXTURE\_URL

> `static` **BLOB\_TEXTURE\_URL**: `string` = `"https://assets.babylonjs.com/core/MRTK/mrtk-fluent-backplate-blob.png"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L51)

URL pointing to the texture used to define the coloring for the fluent blob effect.

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L128)

Stores the clock-wise side orientation

#### Inherited from

`PushMaterial.ClockWiseSideOrientation`

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L133)

Stores the counter clock-wise side orientation

#### Inherited from

`PushMaterial.CounterClockWiseSideOrientation`

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L233)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

`PushMaterial.ForceVertexOutputInvariant`

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L153)

The dirty fresnel flag value

#### Inherited from

`PushMaterial.FresnelDirtyFlag`

***

### IM\_TEXTURE\_URL

> `static` **IM\_TEXTURE\_URL**: `string` = `"https://assets.babylonjs.com/core/MRTK/mrtk-fluent-backplate-iridescence.png"`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L56)

URL pointing to the texture used to define iridescent map.

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L138)

The dirty image processing flag value

#### Inherited from

`PushMaterial.ImageProcessingDirtyFlag`

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L148)

The dirty light flag value

#### Inherited from

`PushMaterial.LightDirtyFlag`

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L217)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

`PushMaterial.LIGHTFALLOFF_GLTF`

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L211)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

`PushMaterial.LIGHTFALLOFF_PHYSICAL`

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L223)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

`PushMaterial.LIGHTFALLOFF_STANDARD`

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L107)

Returns the line list draw mode

#### Inherited from

`PushMaterial.LineListDrawMode`

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L111)

Returns the line loop draw mode

#### Inherited from

`PushMaterial.LineLoopDrawMode`

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L115)

Returns the line strip draw mode

#### Inherited from

`PushMaterial.LineStripDrawMode`

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L188)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

`PushMaterial.MATERIAL_ALPHABLEND`

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L183)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

`PushMaterial.MATERIAL_ALPHATEST`

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L194)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

`PushMaterial.MATERIAL_ALPHATESTANDBLEND`

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L206)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`PushMaterial.MATERIAL_NORMALBLENDMETHOD_RNM`

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L200)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`PushMaterial.MATERIAL_NORMALBLENDMETHOD_WHITEOUT`

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L178)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

`PushMaterial.MATERIAL_OPAQUE`

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L163)

The dirty misc flag value

#### Inherited from

`PushMaterial.MiscDirtyFlag`

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L228)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

`PushMaterial.OnEventObservable`

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L99)

Returns the point fill mode

#### Inherited from

`PushMaterial.PointFillMode`

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L103)

Returns the point list draw mode

#### Inherited from

`PushMaterial.PointListDrawMode`

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L168)

The dirty prepass flag value

#### Inherited from

`PushMaterial.PrePassDirtyFlag`

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L143)

The dirty texture flag value

#### Inherited from

`PushMaterial.TextureDirtyFlag`

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L123)

Returns the triangle fan draw mode

#### Inherited from

`PushMaterial.TriangleFanDrawMode`

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L91)

Returns the triangle fill mode

#### Inherited from

`PushMaterial.TriangleFillMode`

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L119)

Returns the triangle strip draw mode

#### Inherited from

`PushMaterial.TriangleStripDrawMode`

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L95)

Returns the wireframe mode

#### Inherited from

`PushMaterial.WireFrameFillMode`

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L394)

Gets the alpha value of the material

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L377)

Sets the alpha value of the material

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PushMaterial.alpha`

***

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L685)

Gets the value of the alpha mode

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:674](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L674)

Sets the value of the alpha mode.

| Value | Type | Description |
| --- | --- | --- |
| 0 | ALPHA_DISABLE |  |
| 1 | ALPHA_ADD | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + DEST, ALPHA=DEST_ALPHA |
| 2 | ALPHA_COMBINE | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 3 | ALPHA_SUBTRACT | Defines that alpha blending is COLOR=(1 - SRC) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 4 | ALPHA_MULTIPLY | Defines that alpha blending is COLOR=DEST * SRC, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 5 | ALPHA_MAXIMIZED | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 6 | ALPHA_ONEONE | Defines that alpha blending is COLOR=SRC + DEST, ALPHA=DEST_ALPHA |
| 7 | ALPHA_PREMULTIPLIED | Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 8 | ALPHA_PREMULTIPLIED_PORTERDUFF | Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 9 | ALPHA_INTERPOLATE | Defines that alpha blending is COLOR=CST * SRC + (1 - CST) * DEST, ALPHA=CST_ALPHA * SRC + (1 - CST_ALPHA) * DEST_ALPHA |
| 10 | ALPHA_SCREENMODE | Defines that alpha blending is COLOR=SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 11 | ALPHA_ONEONE_ONEONE | Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 12 | ALPHA_ALPHATOCOLOR | Defines that alpha blending is COLOR=DEST_ALPHA * SRC + DST, ALPHA=0 |
| 13 | ALPHA_REVERSEONEMINUS | Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=(1 - DEST_ALPHA) * SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 14 | ALPHA_SRC_DSTONEMINUSSRCALPHA | Defines that alpha blending is ALPHA=SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC ALPHA) * DEST_ALPHA |
| 15 | ALPHA_ONEONE_ONEZERO | Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA |
| 16 | ALPHA_EXCLUSION | Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=DEST_ALPHA |
| 17 | ALPHA_LAYER_ACCUMULATE | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 18 | ALPHA_MIN | Defines that alpha blending is COLOR=MIN(SRC, DEST), ALPHA=MIN(SRC_ALPHA, DEST_ALPHA) |
| 19 | ALPHA_MAX | Defines that alpha blending is COLOR=MAX(SRC, DEST), ALPHA=MAX(SRC_ALPHA, DEST_ALPHA) |
| 20 | ALPHA_DUAL_SRC0_ADD_SRC1xDST | Defines that alpha blending uses dual source blending and is COLOR=SRC + SRC1 * DEST, ALPHA=DST_ALPHA |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PushMaterial.alphaMode`

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L692)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

`PushMaterial.alphaModes`

***

### backFaceCulling

#### Get Signature

> **get** **backFaceCulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L418)

Gets the culling state

##### Returns

`boolean`

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L407)

Sets the culling state (true to enable culling, false to disable)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.backFaceCulling`

***

### blockDirtyMechanism

#### Get Signature

> **get** **blockDirtyMechanism**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L491)

Block the dirty-mechanism for this specific material
When set to false after being true the material will be marked as dirty.

##### Returns

`boolean`

#### Set Signature

> **set** **blockDirtyMechanism**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:495](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L495)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.blockDirtyMechanism`

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L356)

If the material can be rendered to several textures with MRT extension

##### Returns

`boolean`

#### Inherited from

`PushMaterial.canRenderToMRT`

***

### cullBackFaces

#### Get Signature

> **get** **cullBackFaces**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L481)

Gets the type of faces that should be culled

##### Returns

`boolean`

#### Set Signature

> **set** **cullBackFaces**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:470](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L470)

Sets the type of faces that should be culled (true for back faces, false for front faces)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.cullBackFaces`

***

### fillMode

#### Get Signature

> **get** **fillMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:858](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L858)

Gets the material fill mode

##### Returns

`number`

#### Set Signature

> **set** **fillMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:865](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L865)

Sets the material fill mode

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PushMaterial.fillMode`

***

### fogEnabled

#### Get Signature

> **get** **fogEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:792](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L792)

Gets the value of the fog enabled state

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:781](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L781)

Sets the state for enabling fog

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.fogEnabled`

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:546](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L546)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Inherited from

`PushMaterial.hasRenderTargetTextures`

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1158)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

`PushMaterial.isFrozen`

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L738)

Can this material render to prepass

##### Returns

`boolean`

#### Inherited from

`PushMaterial.isPrePassCapable`

***

### isVertexOutputInvariant

#### Get Signature

> **get** **isVertexOutputInvariant**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:942](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L942)

Gets or sets the vertex output invariant state
Setting this property to true will force the shader compiler to disable some optimization to make sure the vertex output is always calculated
the same way across different compilation units.
You may need to enable this option if you are seeing some depth artifacts when using a depth pre-pass, for e.g.
Note that this may have an impact on performance, so leave this option disabled if not needed.

##### Returns

`boolean`

#### Set Signature

> **set** **isVertexOutputInvariant**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:946](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L946)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.isVertexOutputInvariant`

***

### needDepthPrePass

#### Get Signature

> **get** **needDepthPrePass**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:731](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L731)

Gets the depth pre-pass value

##### Returns

`boolean`

#### Set Signature

> **set** **needDepthPrePass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:718](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L718)

Sets the need depth pre-pass value

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.needDepthPrePass`

***

### onBind

#### Set Signature

> **set** **onBind**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L609)

Called during a bind event

##### Parameters

###### callback

(`Mesh`) => `void`

##### Returns

`void`

#### Inherited from

`PushMaterial.onBind`

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L593)

An event triggered when the material is bound

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Inherited from

`PushMaterial.onBindObservable`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L581)

Called during a dispose event

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

`PushMaterial.onDispose`

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<\{ `effect`: [`Effect`](../../../core/src/classes/Effect.md); `subMesh`: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L632)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<\{ `effect`: [`Effect`](../../../core/src/classes/Effect.md); `subMesh`: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SubMesh`](../../../core/src/classes/SubMesh.md)\>; \}\>

#### Inherited from

`PushMaterial.onEffectCreatedObservable`

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L619)

An event triggered when the material is unbound

##### Returns

[`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

#### Inherited from

`PushMaterial.onUnBindObservable`

***

### pointsCloud

#### Get Signature

> **get** **pointsCloud**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:837](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L837)

Gets the value specifying if point clouds are enabled

##### Returns

`boolean`

#### Set Signature

> **set** **pointsCloud**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:850](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L850)

Sets the state of point cloud mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.pointsCloud`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../../../core/src/enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L296)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../../../core/src/enumerations/ShaderLanguage.md)

#### Inherited from

`PushMaterial.shaderLanguage`

***

### textureRepetitionMode

#### Get Signature

> **get** **textureRepetitionMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L446)

Gets the texture repetition breaking mode.

##### See

https://iquilezles.org/articles/texturerepetition/

##### Returns

`number`

#### Set Signature

> **set** **textureRepetitionMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L433)

Sets the texture repetition breaking mode.
Use one of the Constants.TEXTURE_REPETITION_* values to break visible texture tiling patterns.
Ordered by cost: NONE (1 fetch), NOISE_BLEND (3), HEX_TILING (3), TILE_RANDOMIZATION (4), VORONOI_BOMBING (9).
Not supported on WebGL1 — the mode will be forced to NONE.

##### See

 - https://iquilezles.org/articles/texturerepetition/
 - https://jcgt.org/published/0011/03/05/

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PushMaterial.textureRepetitionMode`

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1255)

Gets the current transparency mode.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **transparencyMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1270)

Sets the transparency mode of the material.

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 0     | OPAQUE                              |             |
| 1     | ALPHATEST                           |             |
| 2     | ALPHABLEND                          |             |
| 3     | ALPHATESTANDBLEND                   |             |

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

`PushMaterial.transparencyMode`

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:917](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L917)

In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
You can try switching to logarithmic depth.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/logarithmicDepthBuffer

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:921](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L921)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.useLogarithmicDepth`

***

### useVertexPulling

#### Get Signature

> **get** **useVertexPulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L270)

Tells the engine to draw geometry using vertex pulling instead of index drawing. This will automatically
set the vertex buffers as storage buffers and make them accessible to the vertex shader (WebGPU only).

##### Returns

`boolean`

#### Set Signature

> **set** **useVertexPulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L274)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.useVertexPulling`

***

### wireframe

#### Get Signature

> **get** **wireframe**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:814](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L814)

##### Returns

`boolean`

#### Set Signature

> **set** **wireframe**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:829](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L829)

Sets the state of wireframe mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PushMaterial.wireframe`

## Methods

### atomicMaterialsUpdate()

> **atomicMaterialsUpdate**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L513)

This allows you to modify the material without marking it as dirty after every change.
This function should be used if you need to make more than one dirty-enabling change to the material - adding a texture, setting a new fill mode and so on.
The callback will pass the material as an argument, so you can make your changes to it.

#### Parameters

##### callback

(`material`) => `void`

the callback to be executed that will update the material

#### Returns

`void`

#### Inherited from

`PushMaterial.atomicMaterialsUpdate`

***

### bind()

> **bind**(`world`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L72)

Binds the material to the mesh

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

defines the world transformation matrix

##### mesh?

[`Mesh`](../../../core/src/classes/Mesh.md)

defines the mesh to bind the material to

#### Returns

`void`

#### Inherited from

`PushMaterial.bind`

***

### bindEyePosition()

> **bindEyePosition**(`effect`, `variableName?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1507](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1507)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

defines the effect to bind the view matrix to

##### variableName?

`string`

name of the shader variable that will hold the eye position

#### Returns

`void`

#### Inherited from

`PushMaterial.bindEyePosition`

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:420](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L420)

Binds the submesh to the material

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

defines the world transformation matrix

##### mesh

[`Mesh`](../../../core/src/classes/Mesh.md)

defines the mesh containing the submesh

##### subMesh

[`SubMesh`](../../../core/src/classes/SubMesh.md)

defines the submesh to bind the material to

#### Returns

`void`

#### Overrides

`PushMaterial.bindForSubMesh`

***

### bindOnlyNormalMatrix()

> **bindOnlyNormalMatrix**(`normalMatrix`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L68)

Binds the given normal matrix to the active effect

#### Parameters

##### normalMatrix

[`Matrix`](../../../core/src/classes/Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

`PushMaterial.bindOnlyNormalMatrix`

***

### bindOnlyWorldMatrix()

> **bindOnlyWorldMatrix**(`world`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L59)

Binds the given world matrix to the active effect

#### Parameters

##### world

[`Matrix`](../../../core/src/classes/Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

`PushMaterial.bindOnlyWorldMatrix`

***

### bindView()

> **bindView**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1480](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1480)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

defines the effect to bind the view matrix to

#### Returns

`void`

#### Inherited from

`PushMaterial.bindView`

***

### bindViewProjection()

> **bindViewProjection**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1492)

Binds the view projection and projection matrices to the effect

#### Parameters

##### effect

[`Effect`](../../../core/src/classes/Effect.md)

defines the effect to bind the view projection and projection matrices to

#### Returns

`void`

#### Inherited from

`PushMaterial.bindViewProjection`

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1444](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1444)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Inherited from

`PushMaterial.buildUniformLayout`

***

### clone()

> **clone**(`name`): `FluentBackplateMaterial`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:533](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L533)

Makes a duplicate of the material, and gives it a new name

#### Parameters

##### name

`string`

defines the new name for the duplicated material

#### Returns

`FluentBackplateMaterial`

the cloned material

#### Overrides

`PushMaterial.clone`

***

### dispose()

> **dispose**(`forceDisposeEffect?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L526)

Disposes the material.

#### Parameters

##### forceDisposeEffect?

`boolean`

specifies if effects should be forcefully disposed

#### Returns

`void`

#### Overrides

`PushMaterial.dispose`

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`, `onError?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1673](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1673)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh associated with this material

##### onCompiled?

(`material`) => `void`

defines a function to execute once the material is compiled

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../../../core/src/interfaces/IMaterialCompilationOptions.md)\>

defines the options to configure the compilation

##### onError?

(`reason`) => `void`

defines a function to execute if the material fails compiling

#### Returns

`void`

#### Inherited from

`PushMaterial.forceCompilation`

***

### forceCompilationAsync()

> **forceCompilationAsync**(`mesh`, `options?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1753](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1753)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh that will use this material

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../../../core/src/interfaces/IMaterialCompilationOptions.md)\>

defines additional options for compiling the shaders

#### Returns

`Promise`\<`void`\>

a promise that resolves when the compilation completes

#### Inherited from

`PushMaterial.forceCompilationAsync`

***

### freeze()

> **freeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1180)

Locks updates for the material.

Note: while a material is frozen, the scene can still rebind it at least
once per camera render (and again whenever another material was bound in
between). What can be skipped while the frozen material stays cached are
per-mesh updates performed during a rebind.

This includes per-mesh morph target influences. If the same frozen
material is shared across several meshes that each have different
per-mesh morph influences, only the mesh that triggers the rebind updates
those values. Other meshes rendered afterward with the same cached frozen
material may reuse stale influences and render with the wrong values.

For that scenario either keep the material unfrozen, clone the material
per mesh and freeze each clone, or `unfreeze()` before changing
influences and `freeze()` again afterwards.

#### Returns

`void`

#### Inherited from

`PushMaterial.freeze`

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1599](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1599)

Gets the active textures from the material

#### Returns

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

an array of textures

#### Inherited from

`PushMaterial.getActiveTextures`

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L244)

Gets the texture used for the alpha test

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

the texture to use for alpha testing

#### Overrides

`PushMaterial.getAlphaTestTexture`

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:518](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L518)

Get the list of animatables in the material.

#### Returns

[`IAnimatable`](../../../core/src/interfaces/IAnimatable.md)[]

the list of animatables object used in the material

#### Overrides

`PushMaterial.getAnimatables`

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1650)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

`PushMaterial.getBindedMeshes`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:543](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L543)

Gets the class name of the material

#### Returns

`string`

a string with the class name of the material

#### Overrides

`PushMaterial.getClassName`

***

### getEffect()

> **getEffect**(): [`Effect`](../../../core/src/classes/Effect.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](../../../core/src/classes/Effect.md)

the effect associated with the material

#### Inherited from

`PushMaterial.getEffect`

***

### getScene()

> **getScene**(): [`Scene`](../../../core/src/classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1237](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1237)

Returns the current scene

#### Returns

[`Scene`](../../../core/src/classes/Scene.md)

a Scene

#### Inherited from

`PushMaterial.getScene`

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1610](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1610)

Specifies if the material uses a texture

#### Parameters

##### texture

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)

defines the texture to check against the material

#### Returns

`boolean`

a boolean specifying if the material uses the texture

#### Inherited from

`PushMaterial.hasTexture`

***

### isReady()

> **isReady**(`mesh?`, `useInstances?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/pushMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/pushMaterial.ts#L27)

Specifies if the material is ready to be used

#### Parameters

##### mesh?

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

##### useInstances?

`boolean`

specifies if instances should be used

#### Returns

`boolean`

a boolean indicating if the material is ready to be used

#### Inherited from

`PushMaterial.isReady`

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L248)

Specifies that the submesh is ready to be used

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

##### subMesh

[`SubMesh`](../../../core/src/classes/SubMesh.md)

defines which submesh to check

#### Returns

`boolean`

a boolean indicating that the submesh is ready or not

#### Overrides

`PushMaterial.isReadyForSubMesh`

***

### markAsDirty()

> **markAsDirty**(`flag`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1799](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1799)

Marks a define in the material to indicate that it needs to be re-computed

#### Parameters

##### flag

`number`

defines a flag used to determine which parts of the material have to be marked as dirty

#### Returns

`void`

#### Inherited from

`PushMaterial.markAsDirty`

***

### markDirty()

> **markDirty**(`forceMaterialDirty?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1375)

Marks the material to indicate that it needs to be re-calculated

#### Parameters

##### forceMaterialDirty?

`boolean` = `false`

Forces the material to be marked as dirty for all components (same as this.markAsDirty(Material.AllDirtyFlag)). You should use this flag if the material is frozen and you want to force a recompilation.

#### Returns

`void`

#### Inherited from

`PushMaterial.markDirty`

***

### ~~needAlphaBlending()~~

> **needAlphaBlending**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L236)

Specifies whether or not this material should be rendered in alpha blend mode.

#### Returns

`boolean`

a boolean specifying if alpha blending is needed

#### Deprecated

Please use needAlphaBlendingForMesh instead

#### Overrides

`PushMaterial.needAlphaBlending`

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1321)

Specifies if the mesh will require alpha blending

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha blending is needed for the mesh

#### Inherited from

`PushMaterial.needAlphaBlendingForMesh`

***

### ~~needAlphaTesting()~~

> **needAlphaTesting**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L240)

Specifies whether or not this material should be rendered in alpha test mode.

#### Returns

`boolean`

a boolean specifying if an alpha test is needed.

#### Deprecated

Please use needAlphaTestingForMesh instead

#### Overrides

`PushMaterial.needAlphaTesting`

***

### needAlphaTestingForMesh()

> **needAlphaTestingForMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1355)

Specifies if material alpha testing should be turned on for the mesh

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha testing should be turned on for the mesh

#### Inherited from

`PushMaterial.needAlphaTestingForMesh`

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1844](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1844)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

`PushMaterial.resetDrawCache`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:537](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L537)

Serializes this material

#### Returns

`any`

the serialized material object

#### Overrides

`PushMaterial.serialize`

***

### setAlphaMode()

> **setAlphaMode**(`value`, `targetIndex?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L701)

Sets the value of the alpha mode for a specific target index.

#### Parameters

##### value

`number`

The alpha mode value to set.

##### targetIndex?

`number` = `0`

The index of the target to set the alpha mode for. Defaults to 0.

#### Returns

`void`

#### Inherited from

`PushMaterial.setAlphaMode`

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1998](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1998)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](../../../core/src/classes/PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

`PushMaterial.setPrePassRenderer`

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1137)

Returns a string representation of the current material

#### Parameters

##### fullDetails?

`boolean`

defines a boolean indicating which levels of logging is desired

#### Returns

`string`

a string with material information

#### Inherited from

`PushMaterial.toString`

***

### unbind()

> **unbind**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1562](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1562)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

`PushMaterial.unbind`

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:1188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L1188)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

`PushMaterial.unfreeze`

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): `FluentBackplateMaterial`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts:555](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/materials/fluentBackplate/fluentBackplateMaterial.ts#L555)

Creates a fluent backplate material from parsed material data.

#### Parameters

##### source

`any`

defines the JSON representation of the material

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

defines the hosting scene

##### rootUrl

`string`

defines the root URL to use to load textures and relative dependencies

#### Returns

`FluentBackplateMaterial`

a new fluent backplate material

#### Overrides

`PushMaterial.Parse`

***

### ParseAlphaMode()

> `static` **ParseAlphaMode**(`parsedMaterial`, `material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/material.pure.ts:2143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/material.pure.ts#L2143)

Parses the alpha mode from the material data to parse

#### Parameters

##### parsedMaterial

`any`

defines the material data to parse

##### material

[`Material`](../../../core/src/classes/Material.md)

defines the material to update

#### Returns

`void`

#### Inherited from

`PushMaterial.ParseAlphaMode`
