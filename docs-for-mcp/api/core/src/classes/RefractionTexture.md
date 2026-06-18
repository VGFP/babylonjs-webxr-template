[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RefractionTexture

# Class: RefractionTexture

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/refractionTexture.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/refractionTexture.ts#L9)

Creates a refraction texture used by refraction channel of the standard material.
It is like a mirror but to see through a material.

## See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#refractiontexture

## Extends

- [`RenderTargetTexture`](RenderTargetTexture.md)

## Constructors

### Constructor

> **new RefractionTexture**(`name`, `size`, `scene?`, `generateMipMaps?`): `RefractionTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/refractionTexture.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/refractionTexture.ts#L31)

Creates a refraction texture used by refraction channel of the standard material.
It is like a mirror but to see through a material.

#### Parameters

##### name

`string`

Define the texture name

##### size

`number`

Define the size of the underlying texture

##### scene?

[`Scene`](Scene.md)

Define the scene the refraction belongs to

##### generateMipMaps?

`boolean`

Define if we need to generate mips level for the refraction

#### Returns

`RefractionTexture`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#refraction

#### Overrides

`RenderTargetTexture.constructor`

## Properties

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:487](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L487)

Define the list of animation attached to the texture.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`animations`](RenderTargetTexture.md#animations)

***

### anisotropicFilteringLevel

> **anisotropicFilteringLevel**: `number` = `BaseTexture.DEFAULT_ANISOTROPIC_FILTERING_LEVEL`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L222)

With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`anisotropicFilteringLevel`](RenderTargetTexture.md#anisotropicfilteringlevel)

***

### boundingBoxPosition

> **boundingBoxPosition**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:499](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L499)

Gets or sets the center of the bounding box associated with the texture (when in cube mode)
It must define where the camera used to render the texture is set

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`boundingBoxPosition`](RenderTargetTexture.md#boundingboxposition)

***

### clearColor

> **clearColor**: [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:401](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L401)

Define the clear color of the Render Target if it should be different from the scene.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`clearColor`](RenderTargetTexture.md#clearcolor)

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L66)

Define the current state of the loading sequence when in delayed load mode.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`delayLoadState`](RenderTargetTexture.md#delayloadstate)

***

### depth

> **depth**: `number` = `2.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/refractionTexture.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/refractionTexture.ts#L20)

Define how deep under the surface we should see.

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L49)

Define the display name of the texture, which is used as tree item name of the dedicated node in the inspector

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`displayName`](RenderTargetTexture.md#displayname)

***

### homogeneousRotationInUVTransform

> **homogeneousRotationInUVTransform**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L287)

Sets this property to true to avoid deformations when rotating the texture with non-uniform scaling

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`homogeneousRotationInUVTransform`](RenderTargetTexture.md#homogeneousrotationinuvtransform)

***

### ignoreCameraViewport

> **ignoreCameraViewport**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L299)

Define if the camera viewport should be respected while rendering the texture or if the render should be done to the entire texture.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`ignoreCameraViewport`](RenderTargetTexture.md#ignorecameraviewport)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`Nullable`](../type-aliases/Nullable.md)\<[`IInspectable`](../interfaces/IInspectable.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L300)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`inspectableCustomProperties`](RenderTargetTexture.md#inspectablecustomproperties)

***

### invertZ

> **invertZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L352)

Is Z inverted in the texture (useful in a cube texture).

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`invertZ`](RenderTargetTexture.md#invertz)

***

### isRenderTarget

> **isRenderTarget**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L451)

Define if the texture is a render target.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`isRenderTarget`](RenderTargetTexture.md#isrendertarget)

***

### level

> **level**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L111)

Intensity or strength of the texture.
It is commonly used by materials to fine tune the intensity of the texture

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`level`](RenderTargetTexture.md#level)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L55)

Gets or sets an object used to store user defined information.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`metadata`](RenderTargetTexture.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L43)

Define the name of the texture.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`name`](RenderTargetTexture.md#name)

***

### noPrePassRenderer

> **noPrePassRenderer**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/prePassRendererSceneComponent.types.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/prePassRendererSceneComponent.types.ts#L33)

Gets or sets a boolean indicating that the prepass renderer should not be used with this render target

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`noPrePassRenderer`](RenderTargetTexture.md#noprepassrenderer)

***

### onAfterUnbindObservable

> **onAfterUnbindObservable**: [`Observable`](Observable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L324)

An event triggered after the texture is unbound.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onAfterUnbindObservable`](RenderTargetTexture.md#onafterunbindobservable)

***

### onBeforeBindObservable

> **onBeforeBindObservable**: [`Observable`](Observable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L319)

An event triggered before the texture is bound to the output.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onBeforeBindObservable`](RenderTargetTexture.md#onbeforebindobservable)

***

### onClearObservable

> **onClearObservable**: [`Observable`](Observable.md)\<[`AbstractEngine`](AbstractEngine.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:379](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L379)

An event triggered after the texture clear

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onClearObservable`](RenderTargetTexture.md#onclearobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L492)

An event triggered when the texture is disposed.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onDisposeObservable`](RenderTargetTexture.md#ondisposeobservable)

***

### onLoadObservable

> **onLoadObservable**: [`Observable`](Observable.md)\<[`Texture`](Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:355](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L355)

Observable triggered once the texture has been loaded.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onLoadObservable`](RenderTargetTexture.md#onloadobservable)

***

### onResizeObservable

> **onResizeObservable**: [`Observable`](Observable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L396)

An event triggered when the texture is resized.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onResizeObservable`](RenderTargetTexture.md#onresizeobservable)

***

### optimizeUVAllocation

> **optimizeUVAllocation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L121)

Gets or sets a boolean indicating that the texture should try to reduce shader code if there is no UV manipulation.
(ie. when texture.getTextureMatrix().isIdentityAs3x2() returns true)

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`optimizeUVAllocation`](RenderTargetTexture.md#optimizeuvallocation)

***

### refractionPlane

> **refractionPlane**: [`Plane`](Plane.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/refractionTexture.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/refractionTexture.ts#L15)

Define the reflection plane we want to use. The refractionPlane is usually set to the constructed refractor.
It is possible to directly set the refractionPlane by directly using a Plane(a, b, c, d) where a, b and c give the plane normal vector (a, b, c) and d is a scalar displacement from the refractionPlane to the origin. However in all but the very simplest of situations it is more straight forward to set it to the refractor as stated in the doc.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/reflectionTexture#refraction

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L63)

For internal use only. Please do not use.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`reservedDataStore`](RenderTargetTexture.md#reserveddatastore)

***

### skipInitialClear

> **skipInitialClear**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L413)

Skip the initial clear of the rtt at the beginning of the frame render loop

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`skipInitialClear`](RenderTargetTexture.md#skipinitialclear)

***

### sphericalPolynomial

> **sphericalPolynomial**: [`Nullable`](../type-aliases/Nullable.md)\<[`SphericalPolynomial`](SphericalPolynomial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts#L11)

Get the polynomial representation of the texture data.
This is mainly use as a fast way to recover IBL Diffuse irradiance data.

#### See

https://learnopengl.com/PBR/IBL/Diffuse-irradiance

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`sphericalPolynomial`](RenderTargetTexture.md#sphericalpolynomial)

***

### uAng

> **uAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L247)

Define an offset on the texture to rotate around the u coordinates of the UVs
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`uAng`](RenderTargetTexture.md#uang)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L37)

Gets or sets the unique id of the texture

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`uniqueId`](RenderTargetTexture.md#uniqueid)

***

### uOffset

> **uOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L218)

Define an offset on the texture to offset the u coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`uOffset`](RenderTargetTexture.md#uoffset)

***

### url

> **url**: [`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L211)

Define the url of the texture.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`url`](RenderTargetTexture.md#url)

***

### uRotationCenter

> **uRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L269)

Defines the center of rotation (U)

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`uRotationCenter`](RenderTargetTexture.md#urotationcenter)

***

### uScale

> **uScale**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L232)

Define an offset on the texture to scale the u coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`uScale`](RenderTargetTexture.md#uscale)

***

### useCameraPostProcesses

> **useCameraPostProcesses**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L295)

Define if camera post processes should be use while rendering the texture.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`useCameraPostProcesses`](RenderTargetTexture.md#usecamerapostprocesses)

***

### vAng

> **vAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L255)

Define an offset on the texture to rotate around the v coordinates of the UVs
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`vAng`](RenderTargetTexture.md#vang)

***

### vOffset

> **vOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L225)

Define an offset on the texture to offset the v coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`vOffset`](RenderTargetTexture.md#voffset)

***

### vRotationCenter

> **vRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L275)

Defines the center of rotation (V)

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`vRotationCenter`](RenderTargetTexture.md#vrotationcenter)

***

### vScale

> **vScale**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L239)

Define an offset on the texture to scale the v coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`vScale`](RenderTargetTexture.md#vscale)

***

### wAng

> **wAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L263)

Define an offset on the texture to rotate around the w coordinates of the UVs (in case of 3d texture)
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`wAng`](RenderTargetTexture.md#wang)

***

### wrapR

> **wrapR**: `number` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L214)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`wrapR`](RenderTargetTexture.md#wrapr)

***

### wRotationCenter

> **wRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L281)

Defines the center of rotation (W)

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`wRotationCenter`](RenderTargetTexture.md#wrotationcenter)

***

### BILINEAR\_SAMPLINGMODE

> `readonly` `static` **BILINEAR\_SAMPLINGMODE**: `2` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L146)

Bilinear is mag = linear and min = linear and no mip

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`BILINEAR_SAMPLINGMODE`](RenderTargetTexture.md#bilinear_samplingmode)

***

### CLAMP\_ADDRESSMODE

> `readonly` `static` **CLAMP\_ADDRESSMODE**: `0` = `Constants.TEXTURE_CLAMP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L196)

Texture is not repeating outside of 0..1 UVs

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`CLAMP_ADDRESSMODE`](RenderTargetTexture.md#clamp_addressmode)

***

### CUBIC\_MODE

> `readonly` `static` **CUBIC\_MODE**: `3` = `Constants.TEXTURE_CUBIC_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L181)

Cubic coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`CUBIC_MODE`](RenderTargetTexture.md#cubic_mode)

***

### DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL

> `static` **DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L31)

Default anisotropic filtering level for the application.
It is set to 4 as a good tradeoff between perf and quality.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`DEFAULT_ANISOTROPIC_FILTERING_LEVEL`](RenderTargetTexture.md#default_anisotropic_filtering_level)

***

### EQUIRECTANGULAR\_MODE

> `readonly` `static` **EQUIRECTANGULAR\_MODE**: `7` = `Constants.TEXTURE_EQUIRECTANGULAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L189)

Equirectangular coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`EQUIRECTANGULAR_MODE`](RenderTargetTexture.md#equirectangular_mode)

***

### EXPLICIT\_MODE

> `readonly` `static` **EXPLICIT\_MODE**: `0` = `Constants.TEXTURE_EXPLICIT_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L175)

Explicit coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`EXPLICIT_MODE`](RenderTargetTexture.md#explicit_mode)

***

### FIXED\_EQUIRECTANGULAR\_MIRRORED\_MODE

> `readonly` `static` **FIXED\_EQUIRECTANGULAR\_MIRRORED\_MODE**: `9` = `Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L193)

Equirectangular Fixed Mirrored coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`FIXED_EQUIRECTANGULAR_MIRRORED_MODE`](RenderTargetTexture.md#fixed_equirectangular_mirrored_mode)

***

### FIXED\_EQUIRECTANGULAR\_MODE

> `readonly` `static` **FIXED\_EQUIRECTANGULAR\_MODE**: `8` = `Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L191)

Equirectangular Fixed coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`FIXED_EQUIRECTANGULAR_MODE`](RenderTargetTexture.md#fixed_equirectangular_mode)

***

### ForceSerializeBuffers

> `static` **ForceSerializeBuffers**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L91)

Gets or sets a general boolean used to indicate that texture buffers must be saved as part of the serialization process.
If no buffer exists, one will be created as base64 string from the internal webgl data.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`ForceSerializeBuffers`](RenderTargetTexture.md#forceserializebuffers)

***

### INVCUBIC\_MODE

> `readonly` `static` **INVCUBIC\_MODE**: `6` = `Constants.TEXTURE_INVCUBIC_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L187)

Inverse Cubic coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`INVCUBIC_MODE`](RenderTargetTexture.md#invcubic_mode)

***

### LINEAR\_LINEAR

> `readonly` `static` **LINEAR\_LINEAR**: `2` = `Constants.TEXTURE_LINEAR_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L170)

mag = linear and min = linear and mip = none

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`LINEAR_LINEAR`](RenderTargetTexture.md#linear_linear)

***

### LINEAR\_LINEAR\_MIPLINEAR

> `readonly` `static` **LINEAR\_LINEAR\_MIPLINEAR**: `3` = `Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L153)

Trilinear is mag = linear and min = linear and mip = linear

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`LINEAR_LINEAR_MIPLINEAR`](RenderTargetTexture.md#linear_linear_miplinear)

***

### LINEAR\_LINEAR\_MIPNEAREST

> `readonly` `static` **LINEAR\_LINEAR\_MIPNEAREST**: `11` = `Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L148)

Bilinear is mag = linear and min = linear and mip = nearest

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`LINEAR_LINEAR_MIPNEAREST`](RenderTargetTexture.md#linear_linear_mipnearest)

***

### LINEAR\_NEAREST

> `readonly` `static` **LINEAR\_NEAREST**: `12` = `Constants.TEXTURE_LINEAR_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L172)

mag = linear and min = nearest and mip = none

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`LINEAR_NEAREST`](RenderTargetTexture.md#linear_nearest)

***

### LINEAR\_NEAREST\_MIPLINEAR

> `readonly` `static` **LINEAR\_NEAREST\_MIPLINEAR**: `10` = `Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L168)

mag = linear and min = nearest and mip = linear

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`LINEAR_NEAREST_MIPLINEAR`](RenderTargetTexture.md#linear_nearest_miplinear)

***

### LINEAR\_NEAREST\_MIPNEAREST

> `readonly` `static` **LINEAR\_NEAREST\_MIPNEAREST**: `9` = `Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L166)

mag = linear and min = nearest and mip = nearest

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`LINEAR_NEAREST_MIPNEAREST`](RenderTargetTexture.md#linear_nearest_mipnearest)

***

### MIRROR\_ADDRESSMODE

> `readonly` `static` **MIRROR\_ADDRESSMODE**: `2` = `Constants.TEXTURE_MIRROR_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L200)

Texture is repeating and mirrored

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`MIRROR_ADDRESSMODE`](RenderTargetTexture.md#mirror_addressmode)

***

### NEAREST\_LINEAR

> `readonly` `static` **NEAREST\_LINEAR**: `7` = `Constants.TEXTURE_NEAREST_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:162](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L162)

mag = nearest and min = linear and mip = none

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`NEAREST_LINEAR`](RenderTargetTexture.md#nearest_linear)

***

### NEAREST\_LINEAR\_MIPLINEAR

> `readonly` `static` **NEAREST\_LINEAR\_MIPLINEAR**: `6` = `Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L160)

mag = nearest and min = linear and mip = linear

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`NEAREST_LINEAR_MIPLINEAR`](RenderTargetTexture.md#nearest_linear_miplinear)

***

### NEAREST\_LINEAR\_MIPNEAREST

> `readonly` `static` **NEAREST\_LINEAR\_MIPNEAREST**: `5` = `Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L158)

mag = nearest and min = linear and mip = nearest

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`NEAREST_LINEAR_MIPNEAREST`](RenderTargetTexture.md#nearest_linear_mipnearest)

***

### NEAREST\_NEAREST

> `readonly` `static` **NEAREST\_NEAREST**: `1` = `Constants.TEXTURE_NEAREST_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L164)

mag = nearest and min = nearest and mip = none

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`NEAREST_NEAREST`](RenderTargetTexture.md#nearest_nearest)

***

### NEAREST\_NEAREST\_MIPLINEAR

> `readonly` `static` **NEAREST\_NEAREST\_MIPLINEAR**: `8` = `Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L143)

nearest is mag = nearest and min = nearest and mip = linear

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`NEAREST_NEAREST_MIPLINEAR`](RenderTargetTexture.md#nearest_nearest_miplinear)

***

### NEAREST\_NEAREST\_MIPNEAREST

> `readonly` `static` **NEAREST\_NEAREST\_MIPNEAREST**: `4` = `Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L156)

mag = nearest and min = nearest and mip = nearest

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`NEAREST_NEAREST_MIPNEAREST`](RenderTargetTexture.md#nearest_nearest_mipnearest)

***

### NEAREST\_SAMPLINGMODE

> `readonly` `static` **NEAREST\_SAMPLINGMODE**: `1` = `Constants.TEXTURE_NEAREST_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L141)

nearest is mag = nearest and min = nearest and no mip

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`NEAREST_SAMPLINGMODE`](RenderTargetTexture.md#nearest_samplingmode)

***

### OnTextureLoadErrorObservable

> `static` **OnTextureLoadErrorObservable**: [`Observable`](Observable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L96)

This observable will notify when any texture had a loading error

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`OnTextureLoadErrorObservable`](RenderTargetTexture.md#ontextureloaderrorobservable)

***

### PLANAR\_MODE

> `readonly` `static` **PLANAR\_MODE**: `2` = `Constants.TEXTURE_PLANAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L179)

Planar coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`PLANAR_MODE`](RenderTargetTexture.md#planar_mode)

***

### PROJECTION\_MODE

> `readonly` `static` **PROJECTION\_MODE**: `4` = `Constants.TEXTURE_PROJECTION_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L183)

Projection coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`PROJECTION_MODE`](RenderTargetTexture.md#projection_mode)

***

### REFRESHRATE\_RENDER\_ONCE

> `readonly` `static` **REFRESHRATE\_RENDER\_ONCE**: `number` = `ObjectRenderer.REFRESHRATE_RENDER_ONCE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L99)

The texture will only be rendered once which can be useful to improve performance if everything in your render is static for instance.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`REFRESHRATE_RENDER_ONCE`](RenderTargetTexture.md#refreshrate_render_once)

***

### REFRESHRATE\_RENDER\_ONEVERYFRAME

> `readonly` `static` **REFRESHRATE\_RENDER\_ONEVERYFRAME**: `number` = `ObjectRenderer.REFRESHRATE_RENDER_ONEVERYFRAME`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L103)

The texture will be rendered every frame and is recommended for dynamic contents.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`REFRESHRATE_RENDER_ONEVERYFRAME`](RenderTargetTexture.md#refreshrate_render_oneveryframe)

***

### REFRESHRATE\_RENDER\_ONEVERYTWOFRAMES

> `readonly` `static` **REFRESHRATE\_RENDER\_ONEVERYTWOFRAMES**: `number` = `ObjectRenderer.REFRESHRATE_RENDER_ONEVERYTWOFRAMES`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L108)

The texture will be rendered every 2 frames which could be enough if your dynamic objects are not
the central point of your effect and can save a lot of performances.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`REFRESHRATE_RENDER_ONEVERYTWOFRAMES`](RenderTargetTexture.md#refreshrate_render_oneverytwoframes)

***

### SerializeBuffers

> `static` **SerializeBuffers**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L85)

Gets or sets a general boolean used to indicate that textures containing direct data (buffers) must be saved as part of the serialization process

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`SerializeBuffers`](RenderTargetTexture.md#serializebuffers)

***

### SKYBOX\_MODE

> `readonly` `static` **SKYBOX\_MODE**: `5` = `Constants.TEXTURE_SKYBOX_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L185)

Inverse Cubic coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`SKYBOX_MODE`](RenderTargetTexture.md#skybox_mode)

***

### SPHERICAL\_MODE

> `readonly` `static` **SPHERICAL\_MODE**: `1` = `Constants.TEXTURE_SPHERICAL_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L177)

Spherical coordinates mode

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`SPHERICAL_MODE`](RenderTargetTexture.md#spherical_mode)

***

### TRILINEAR\_SAMPLINGMODE

> `readonly` `static` **TRILINEAR\_SAMPLINGMODE**: `3` = `Constants.TEXTURE_TRILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L151)

Trilinear is mag = linear and min = linear and mip = linear

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`TRILINEAR_SAMPLINGMODE`](RenderTargetTexture.md#trilinear_samplingmode)

***

### UseSerializedUrlIfAny

> `static` **UseSerializedUrlIfAny**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L205)

Gets or sets a boolean which defines if the texture url must be build from the serialized URL instead of just using the name and loading them side by side with the scene file

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`UseSerializedUrlIfAny`](RenderTargetTexture.md#useserializedurlifany)

***

### WRAP\_ADDRESSMODE

> `readonly` `static` **WRAP\_ADDRESSMODE**: `1` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L198)

Texture is repeating outside of 0..1 UVs

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`WRAP_ADDRESSMODE`](RenderTargetTexture.md#wrap_addressmode)

## Accessors

### activeCamera

#### Get Signature

> **get** **activeCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:224](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L224)

Define the camera used to render the texture.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

#### Set Signature

> **set** **activeCamera**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L228)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`activeCamera`](RenderTargetTexture.md#activecamera)

***

### boundingBoxSize

#### Get Signature

> **get** **boundingBoxSize**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:519](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L519)

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **boundingBoxSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:509](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L509)

Gets or sets the size of the bounding box associated with the texture (when in cube mode)
When defined, the cubemap will switch to local mode

##### See

https://community.arm.com/graphics/b/blog/posts/reflections-based-on-local-cubemaps-in-unity

##### Example

```ts
https://www.babylonjs-playground.com/#RNASML
```

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`boundingBoxSize`](RenderTargetTexture.md#boundingboxsize)

***

### cameraForLOD

#### Get Signature

> **get** **cameraForLOD**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L236)

Define the camera used to calculate the LOD of the objects.
If not defined, activeCamera will be used. If not defined nor activeCamera, scene's active camera will be used.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

#### Set Signature

> **set** **cameraForLOD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L240)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`cameraForLOD`](RenderTargetTexture.md#cameraforlod)

***

### canRescale

#### Get Signature

> **get** **canRescale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:991](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L991)

Get if the texture can be rescaled or not.

##### Returns

`boolean`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`canRescale`](RenderTargetTexture.md#canrescale)

***

### coordinatesIndex

#### Get Signature

> **get** **coordinatesIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L138)

##### Returns

`number`

#### Set Signature

> **set** **coordinatesIndex**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L127)

Define the UV channel to use starting from 0 and defaulting to 0.
This is part of the texture as textures usually maps to one uv set.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`coordinatesIndex`](RenderTargetTexture.md#coordinatesindex)

***

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L172)

How a texture is mapped.
Unused in thin texture mode.

##### Returns

`number`

#### Set Signature

> **set** **coordinatesMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L161)

How a texture is mapped.

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 0     | EXPLICIT_MODE                       |             |
| 1     | SPHERICAL_MODE                      |             |
| 2     | PLANAR_MODE                         |             |
| 3     | CUBIC_MODE                          |             |
| 4     | PROJECTION_MODE                     |             |
| 5     | SKYBOX_MODE                         |             |
| 6     | INVCUBIC_MODE                       |             |
| 7     | EQUIRECTANGULAR_MODE                |             |
| 8     | FIXED_EQUIRECTANGULAR_MODE          |             |
| 9     | FIXED_EQUIRECTANGULAR_MIRRORED_MODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`coordinatesMode`](RenderTargetTexture.md#coordinatesmode)

***

### currentRefreshId

#### Get Signature

> **get** **currentRefreshId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:455](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L455)

Gets the current value of the refreshId counter

##### Returns

`number`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`currentRefreshId`](RenderTargetTexture.md#currentrefreshid)

***

### customIsReadyFunction

#### Get Signature

> **get** **customIsReadyFunction**(): (`mesh`, `refreshRate`, `preWarm?`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:259](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L259)

Override the mesh isReady function with your own one.

##### Returns

(`mesh`, `refreshRate`, `preWarm?`) => `boolean`

#### Set Signature

> **set** **customIsReadyFunction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L263)

##### Parameters

###### value

(`mesh`, `refreshRate`, `preWarm?`) => `boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`customIsReadyFunction`](RenderTargetTexture.md#customisreadyfunction)

***

### customRenderFunction

#### Get Signature

> **get** **customRenderFunction**(): (`opaqueSubMeshes`, `alphaTestSubMeshes`, `transparentSubMeshes`, `depthOnlySubMeshes`, `beforeTransparents?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L270)

Override the render function of the texture with your own one.

##### Returns

(`opaqueSubMeshes`, `alphaTestSubMeshes`, `transparentSubMeshes`, `depthOnlySubMeshes`, `beforeTransparents?`) => `void`

#### Set Signature

> **set** **customRenderFunction**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L280)

##### Parameters

###### value

(`opaqueSubMeshes`, `alphaTestSubMeshes`, `transparentSubMeshes`, `depthOnlySubMeshes`, `beforeTransparents?`) => `void`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`customRenderFunction`](RenderTargetTexture.md#customrenderfunction)

***

### depthStencilTexture

#### Get Signature

> **get** **depthStencilTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:528](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L528)

In case the RTT has been created with a depth texture, get the associated
depth texture.
Otherwise, return null.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`depthStencilTexture`](RenderTargetTexture.md#depthstenciltexture)

***

### disableImageProcessing

#### Get Signature

> **get** **disableImageProcessing**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L248)

If true, the renderer will render all objects without any image processing applied.
If false (default value), the renderer will use the current setting of the scene's image processing configuration.

##### Returns

`boolean`

#### Set Signature

> **set** **disableImageProcessing**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:252](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L252)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`disableImageProcessing`](RenderTargetTexture.md#disableimageprocessing)

***

### enableBoundingBoxRendering

#### Get Signature

> **get** **enableBoundingBoxRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L191)

Define if bounding box rendering should be enabled (still subject to Mesh.showBoundingBox or scene.forceShowBoundingBoxes). (Default: false).

##### Returns

`boolean`

#### Set Signature

> **set** **enableBoundingBoxRendering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L195)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`enableBoundingBoxRendering`](RenderTargetTexture.md#enableboundingboxrendering)

***

### enableOutlineRendering

#### Get Signature

> **get** **enableOutlineRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L202)

Define if outline/overlay rendering should be enabled (still subject to Mesh.renderOutline/Mesh.renderOverlay). (Default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **enableOutlineRendering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L206)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`enableOutlineRendering`](RenderTargetTexture.md#enableoutlinerendering)

***

### errorObject

#### Get Signature

> **get** **errorObject**(): \{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L538)

If a loading error occurred this object will be populated with information about the error.

##### Returns

\{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`errorObject`](RenderTargetTexture.md#errorobject)

***

### forceLayerMaskCheck

#### Get Signature

> **get** **forceLayerMaskCheck**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L213)

Force checking the layerMask property even if a custom list of meshes is provided (ie. if renderList is not undefined) (default: false).

##### Returns

`boolean`

#### Set Signature

> **set** **forceLayerMaskCheck**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L217)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`forceLayerMaskCheck`](RenderTargetTexture.md#forcelayermaskcheck)

***

### gammaSpace

#### Get Signature

> **get** **gammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L297)

Define if the texture contains data in gamma space (most of the png/jpg aside bump).
HDR texture are usually stored in linear space.
This only impacts the PBR and Background materials

##### Returns

`boolean`

#### Set Signature

> **set** **gammaSpace**(`gamma`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L309)

##### Parameters

###### gamma

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`gammaSpace`](RenderTargetTexture.md#gammaspace)

***

### getAlphaFromRGB

#### Get Signature

> **get** **getAlphaFromRGB**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L102)

##### Returns

`boolean`

#### Set Signature

> **set** **getAlphaFromRGB**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L91)

Defines if the alpha value should be determined via the rgb values.
If true the luminance of the pixel might be used to find the corresponding alpha value.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getAlphaFromRGB`](RenderTargetTexture.md#getalphafromrgb)

***

### getCustomRenderList

#### Get Signature

> **get** **getCustomRenderList**(): [`Nullable`](../type-aliases/Nullable.md)\<(`layerOrFace`, `renderList`, `renderListLength`) => [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L154)

Use this function to overload the renderList array at rendering time.
Return null to render with the current renderList, else return the list of meshes to use for rendering.
For 2DArray RTT, layerOrFace is the index of the layer that is going to be rendered, else it is the faceIndex of
the cube (if the RTT is a cube, else layerOrFace=0).
The renderList passed to the function is the current render list (the one that will be used if the function returns null).
The length of this list is passed through renderListLength: don't use renderList.length directly because the array can
hold dummy elements!

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<(`layerOrFace`, `renderList`, `renderListLength`) => [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>\>

#### Set Signature

> **set** **getCustomRenderList**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L160)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<(`layerOrFace`, `renderList`, `renderListLength`) => [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>\>

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getCustomRenderList`](RenderTargetTexture.md#getcustomrenderlist)

***

### hasAlpha

#### Get Signature

> **get** **hasAlpha**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L81)

##### Returns

`boolean`

#### Set Signature

> **set** **hasAlpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L70)

Define if the texture is having a usable alpha value (can be use for transparency or glossiness for instance).

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`hasAlpha`](RenderTargetTexture.md#hasalpha)

***

### invertY

#### Get Signature

> **get** **invertY**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L373)

Gets a boolean indicating if the texture needs to be inverted on the y axis during loading

##### Returns

`boolean`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`invertY`](RenderTargetTexture.md#inverty)

***

### irradianceTexture

#### Get Signature

> **get** **irradianceTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:426](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L426)

In case a better definition than spherical harmonics is required for the diffuse part of the environment.
You can set the irradiance texture to rely on a texture instead of the spherical approach.
This texture need to have the same characteristics than its parent (Cube vs 2d, coordinates mode, Gamma/Linear, RGBD).

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **irradianceTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L433)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`irradianceTexture`](RenderTargetTexture.md#irradiancetexture)

***

### is2DArray

#### Get Signature

> **get** **is2DArray**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L272)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is2DArray**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L281)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`is2DArray`](RenderTargetTexture.md#is2darray)

***

### is3D

#### Get Signature

> **get** **is3D**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L251)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is3D**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L260)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`is3D`](RenderTargetTexture.md#is3d)

***

### isBlocking

#### Get Signature

> **get** **isBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:366](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L366)

Define if the texture is preventing a material to render or not.
If not and the texture is not ready, the engine will use a default black texture instead.

##### Returns

`boolean`

#### Set Signature

> **set** **isBlocking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L362)

Is the texture preventing material to render while loading.
If false, a default texture will be used instead of the loading one during the preparation step.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`isBlocking`](RenderTargetTexture.md#isblocking)

***

### isCube

#### Get Signature

> **get** **isCube**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L230)

Define if the texture is a cube texture or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **isCube**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L239)

Define if the texture is a cube texture or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`isCube`](RenderTargetTexture.md#iscube)

***

### isMulti

#### Get Signature

> **get** **isMulti**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:471](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L471)

Define if the texture has multiple draw buffers or if false a single draw buffer.

##### Returns

`boolean`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`isMulti`](RenderTargetTexture.md#ismulti)

***

### isRGBD

#### Get Signature

> **get** **isRGBD**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L331)

Gets or sets whether or not the texture contains RGBD data.

##### Returns

`boolean`

#### Set Signature

> **set** **isRGBD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:334](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L334)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`isRGBD`](RenderTargetTexture.md#isrgbd)

***

### linearSpecularLOD

#### Get Signature

> **get** **linearSpecularLOD**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L407)

With prefiltered texture, defined if the specular generation is based on a linear ramp.
By default we are using a log2 of the linear roughness helping to keep a better resolution for
average roughness values.

##### Returns

`boolean`

#### Set Signature

> **set** **linearSpecularLOD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L414)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`linearSpecularLOD`](RenderTargetTexture.md#linearspecularlod)

***

### loadingError

#### Get Signature

> **get** **loadingError**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L531)

Was there any loading error?

##### Returns

`boolean`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`loadingError`](RenderTargetTexture.md#loadingerror)

***

### lodGenerationOffset

#### Get Signature

> **get** **lodGenerationOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L371)

With prefiltered texture, defined the offset used during the prefiltering steps.

##### Returns

`number`

#### Set Signature

> **set** **lodGenerationOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L378)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`lodGenerationOffset`](RenderTargetTexture.md#lodgenerationoffset)

***

### lodGenerationScale

#### Get Signature

> **get** **lodGenerationScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L388)

With prefiltered texture, defined the scale used during the prefiltering steps.

##### Returns

`number`

#### Set Signature

> **set** **lodGenerationScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L395)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`lodGenerationScale`](RenderTargetTexture.md#lodgenerationscale)

***

### mimeType

#### Get Signature

> **get** **mimeType**(): `string` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L348)

Returns the texture mime type if it was defined by a loader (undefined else)

##### Returns

`string` \| `undefined`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`mimeType`](RenderTargetTexture.md#mimetype)

***

### noMipmap

#### Get Signature

> **get** **noMipmap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L292)

Are mip maps generated for this texture or not.

##### Returns

`boolean`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`noMipmap`](RenderTargetTexture.md#nomipmap)

***

### onAfterRender

#### Set Signature

> **set** **onAfterRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L369)

Set a after render callback in the texture.
This has been kept for backward compatibility and use of onAfterRenderObservable is recommended.

##### Parameters

###### callback

(`faceIndex`) => `void`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onAfterRender`](RenderTargetTexture.md#onafterrender)

***

### onAfterRenderObservable

#### Get Signature

> **get** **onAfterRenderObservable**(): [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L360)

An event triggered after rendering the texture

##### Returns

[`Observable`](Observable.md)\<`number`\>

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onAfterRenderObservable`](RenderTargetTexture.md#onafterrenderobservable)

***

### onAfterUnbind

#### Set Signature

> **set** **onAfterUnbind**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L331)

Set a after unbind callback in the texture.
This has been kept for backward compatibility and use of onAfterUnbindObservable is recommended.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onAfterUnbind`](RenderTargetTexture.md#onafterunbind)

***

### onBeforeRender

#### Set Signature

> **set** **onBeforeRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:350](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L350)

Set a before render callback in the texture.
This has been kept for backward compatibility and use of onBeforeRenderObservable is recommended.

##### Parameters

###### callback

(`faceIndex`) => `void`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onBeforeRender`](RenderTargetTexture.md#onbeforerender)

***

### onBeforeRenderObservable

#### Get Signature

> **get** **onBeforeRenderObservable**(): [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L341)

An event triggered before rendering the texture

##### Returns

[`Observable`](Observable.md)\<`number`\>

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onBeforeRenderObservable`](RenderTargetTexture.md#onbeforerenderobservable)

***

### onClear

#### Set Signature

> **set** **onClear**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L386)

Set a clear callback in the texture.
This has been kept for backward compatibility and use of onClearObservable is recommended.

##### Parameters

###### callback

(`Engine`) => `void`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onClear`](RenderTargetTexture.md#onclear)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:499](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L499)

Callback triggered when the texture has been disposed.
Kept for back compatibility, you can use the onDisposeObservable instead.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`onDispose`](RenderTargetTexture.md#ondispose)

***

### particleSystemList

#### Get Signature

> **get** **particleSystemList**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L137)

Define the list of particle systems to render in the texture. If not provided, will render all the particle systems of the scene.
Note that the particle systems are rendered only if renderParticles is set to true.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)[]\>

#### Set Signature

> **set** **particleSystemList**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L141)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)[]\>

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`particleSystemList`](RenderTargetTexture.md#particlesystemlist)

***

### postProcesses

#### Get Signature

> **get** **postProcesses**(): [`PostProcess`](PostProcess.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L306)

Post-processes for this render target

##### Returns

[`PostProcess`](PostProcess.md)[]

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`postProcesses`](RenderTargetTexture.md#postprocesses)

***

### refreshRate

#### Get Signature

> **get** **refreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:920](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L920)

Define the refresh rate of the texture or the rendering frequency.
Use 0 to render just once, 1 to render on every frame, 2 to render every two frames and so on...

##### Returns

`number`

#### Set Signature

> **set** **refreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:923](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L923)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`refreshRate`](RenderTargetTexture.md#refreshrate)

***

### renderList

#### Get Signature

> **get** **renderList**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L125)

Use this list to define the list of mesh you want to render.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

#### Set Signature

> **set** **renderList**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L129)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`renderList`](RenderTargetTexture.md#renderlist)

***

### renderListPredicate

#### Get Signature

> **get** **renderListPredicate**(): (`AbstractMesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L114)

Use this predicate to dynamically define the list of mesh you want to render.
If set, the renderList property will be overwritten.

##### Returns

(`AbstractMesh`) => `boolean`

#### Set Signature

> **set** **renderListPredicate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L118)

##### Parameters

###### value

(`AbstractMesh`) => `boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`renderListPredicate`](RenderTargetTexture.md#renderlistpredicate)

***

### renderParticles

#### Get Signature

> **get** **renderParticles**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L169)

Define if particles should be rendered in your texture (default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **renderParticles**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L173)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`renderParticles`](RenderTargetTexture.md#renderparticles)

***

### renderPassId

#### Get Signature

> **get** **renderPassId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:440](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L440)

Current render pass id of the render target texture. Note it can change over the rendering as there's a separate id for each face of a cube / each layer of an array layer!

##### Returns

`number`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`renderPassId`](RenderTargetTexture.md#renderpassid)

***

### renderPassIds

#### Get Signature

> **get** **renderPassIds**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:448](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L448)

Gets the render pass ids used by the render target texture. For a single render target the array length will be 1, for a cube texture it will be 6 and for
a 2D texture array it will return an array of ids the size of the 2D texture array

##### Returns

readonly `number`[]

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`renderPassIds`](RenderTargetTexture.md#renderpassids)

***

### renderSprites

#### Get Signature

> **get** **renderSprites**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L180)

Define if sprites should be rendered in your texture (default: false).

##### Returns

`boolean`

#### Set Signature

> **set** **renderSprites**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L184)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`renderSprites`](RenderTargetTexture.md#rendersprites)

***

### renderTarget

#### Get Signature

> **get** **renderTarget**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:485](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L485)

Gets the render target wrapper associated with this render target

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md)\>

Entry point to access the wrapper on a texture.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`renderTarget`](RenderTargetTexture.md#rendertarget)

***

### renderTargetOptions

#### Get Signature

> **get** **renderTargetOptions**(): [`RenderTargetCreationOptions`](../interfaces/RenderTargetCreationOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L478)

Gets render target creation options that were used.

##### Returns

[`RenderTargetCreationOptions`](../interfaces/RenderTargetCreationOptions.md)

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`renderTargetOptions`](RenderTargetTexture.md#rendertargetoptions)

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:839](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L839)

Define the number of samples to use in case of MSAA.
It defaults to one meaning no MSAA has been enabled.

##### Returns

`number`

#### Set Signature

> **set** **samples**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:843](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L843)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`samples`](RenderTargetTexture.md#samples)

***

### samplingMode

#### Get Signature

> **get** **samplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L254)

Get the current sampling mode associated with the texture.

##### Returns

`number`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`samplingMode`](RenderTargetTexture.md#samplingmode)

***

### textureFormat

#### Get Signature

> **get** **textureFormat**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:696](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L696)

Get the texture underlying format (RGB, RGBA...)

##### Returns

`number`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`textureFormat`](RenderTargetTexture.md#textureformat)

***

### textureType

#### Get Signature

> **get** **textureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L685)

Get the texture underlying type (INT, FLOAT...)

##### Returns

`number`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`textureType`](RenderTargetTexture.md#texturetype)

***

### uid

#### Get Signature

> **get** **uid**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L456)

Define the unique id of the texture in the scene.

##### Returns

`string`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`uid`](RenderTargetTexture.md#uid)

***

### wrapU

#### Get Signature

> **get** **wrapU**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L184)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapU**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L187)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`wrapU`](RenderTargetTexture.md#wrapu)

***

### wrapV

#### Get Signature

> **get** **wrapV**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L199)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapV**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L202)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`wrapV`](RenderTargetTexture.md#wrapv)

## Methods

### addPostProcess()

> **addPostProcess**(`postProcess`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:853](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L853)

Adds a post process to the render target rendering passes.

#### Parameters

##### postProcess

[`PostProcess`](PostProcess.md)

define the post process to add

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`addPostProcess`](RenderTargetTexture.md#addpostprocess)

***

### clearPostProcesses()

> **clearPostProcesses**(`dispose?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:872](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L872)

Clear all the post processes attached to the render target

#### Parameters

##### dispose?

`boolean` = `false`

define if the cleared post processes should also be disposed (false by default)

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`clearPostProcesses`](RenderTargetTexture.md#clearpostprocesses)

***

### clone()

> **clone**(): `RefractionTexture`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/refractionTexture.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/refractionTexture.ts#L47)

Clone the refraction texture.

#### Returns

`RefractionTexture`

the cloned texture

#### Overrides

[`RenderTargetTexture`](RenderTargetTexture.md).[`clone`](RenderTargetTexture.md#clone)

***

### createDepthStencilTexture()

> **createDepthStencilTexture**(`comparisonFunction?`, `bilinearFiltering?`, `generateStencil?`, `samples?`, `format?`, `label?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:811](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L811)

Creates a depth stencil texture.
This is only available in WebGL 2 or with the depth texture extension available.

#### Parameters

##### comparisonFunction?

`number` = `0`

Specifies the comparison function to set on the texture. If 0 or undefined, the texture is not in comparison mode (default: 0)

##### bilinearFiltering?

`boolean` = `true`

Specifies whether or not bilinear filtering is enable on the texture (default: true)

##### generateStencil?

`boolean` = `false`

Specifies whether or not a stencil should be allocated in the texture (default: false)

##### samples?

`number` = `1`

sample count of the depth/stencil texture (default: 1)

##### format?

`number` = `Constants.TEXTUREFORMAT_DEPTH32_FLOAT`

format of the depth texture (default: Constants.TEXTUREFORMAT_DEPTH32_FLOAT)

##### label?

`string`

defines the label of the texture (for debugging purpose)

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`createDepthStencilTexture`](RenderTargetTexture.md#createdepthstenciltexture)

***

### disableRescaling()

> **disableRescaling**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:984](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L984)

Don't allow this render target texture to rescale. Mainly used to prevent rescaling by the scene optimizer.

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`disableRescaling`](RenderTargetTexture.md#disablerescaling)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1322)

Dispose the texture and release its associated resources.

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`dispose`](RenderTargetTexture.md#dispose)

***

### disposeFramebufferObjects()

> **disposeFramebufferObjects**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1307](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1307)

This will remove the attached framebuffer objects. The texture will not be able to be used as render target anymore

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`disposeFramebufferObjects`](RenderTargetTexture.md#disposeframebufferobjects)

***

### forceSphericalPolynomialsRecompute()

> **forceSphericalPolynomialsRecompute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.types.ts#L17)

Force recomputation of spherical polynomials.
Can be useful if you generate a cubemap multiple times (from a probe for eg) and you need the proper polynomials each time

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`forceSphericalPolynomialsRecompute`](RenderTargetTexture.md#forcesphericalpolynomialsrecompute)

***

### freeRenderingGroups()

> **freeRenderingGroups**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1392](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1392)

Clear the info related to rendering groups preventing retention point in material dispose.

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`freeRenderingGroups`](RenderTargetTexture.md#freerenderinggroups)

***

### getBaseSize()

> **getBaseSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:230](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L230)

Get the base size of the texture.
It can be different from the size if the texture has been resized for POT for instance

#### Returns

[`ISize`](../interfaces/ISize.md)

the base size

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getBaseSize`](RenderTargetTexture.md#getbasesize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:946](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L946)

Get the current class name of the texture useful for serialization or dynamic coding.

#### Returns

`string`

"Texture"

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getClassName`](RenderTargetTexture.md#getclassname)

***

### getInternalTexture()

> **getInternalTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L199)

Get the underlying lower level texture from Babylon.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

the internal texture

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getInternalTexture`](RenderTargetTexture.md#getinternaltexture)

***

### getReflectionTextureMatrix()

> **getReflectionTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1009](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1009)

Get the texture reflection matrix used to rotate/transform the reflection.

#### Returns

[`Matrix`](Matrix.md)

the reflection matrix

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getReflectionTextureMatrix`](RenderTargetTexture.md#getreflectiontexturematrix)

***

### getRefractionTextureMatrix()

> **getRefractionTextureMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:613](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L613)

Gets a suitable rotate/transform matrix when the texture is used for refraction.
There's a separate function from getReflectionTextureMatrix because refraction requires a special configuration of the matrix in right-handed mode.

#### Returns

[`Matrix`](Matrix.md)

The refraction matrix

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getRefractionTextureMatrix`](RenderTargetTexture.md#getrefractiontexturematrix)

***

### getRenderHeight()

> **getRenderHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:956](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L956)

Gets the actual render height of the texture.

#### Returns

`number`

the height of the render size

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getRenderHeight`](RenderTargetTexture.md#getrenderheight)

***

### getRenderLayers()

> **getRenderLayers**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:968](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L968)

Gets the actual number of layers of the texture or, in the case of a 3D texture, return the depth.

#### Returns

`number`

the number of layers

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getRenderLayers`](RenderTargetTexture.md#getrenderlayers)

***

### getRenderSize()

> **getRenderSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:936](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L936)

Gets the actual render size of the texture.

#### Returns

`number`

the width of the render size

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getRenderSize`](RenderTargetTexture.md#getrendersize)

***

### getRenderWidth()

> **getRenderWidth**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:944](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L944)

Gets the actual render width of the texture.

#### Returns

`number`

the width of the render size

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getRenderWidth`](RenderTargetTexture.md#getrenderwidth)

***

### getScene()

> **getScene**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:583](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L583)

Get the scene the texture belongs to.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene or null if undefined

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getScene`](RenderTargetTexture.md#getscene)

***

### getSize()

> **getSize**(): [`ISize`](../interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L207)

Get the size of the texture.

#### Returns

[`ISize`](../interfaces/ISize.md)

the texture size.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getSize`](RenderTargetTexture.md#getsize)

***

### getTextureMatrix()

> **getTextureMatrix**(`uBase?`): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:689](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L689)

Get the current texture matrix which includes the requested offsetting, tiling and rotation components.

#### Parameters

##### uBase?

`number` = `1`

The horizontal base offset multiplier (1 by default)

#### Returns

[`Matrix`](Matrix.md)

the transform matrix of the texture.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getTextureMatrix`](RenderTargetTexture.md#gettexturematrix)

***

### getViewCount()

> **getViewCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1400)

Gets the number of views the corresponding to the texture (eg. a MultiviewRenderTarget will have > 1)

#### Returns

`number`

the view count

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`getViewCount`](RenderTargetTexture.md#getviewcount)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L177)

Get if the texture is ready to be used (downloaded, converted, mip mapped...).

#### Returns

`boolean`

true if fully ready

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`isReady`](RenderTargetTexture.md#isready)

***

### isReadyForRendering()

> **isReadyForRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1071)

This function will check if the render target texture can be rendered (textures are loaded, shaders are compiled)

#### Returns

`boolean`

true if all required resources are ready

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`isReadyForRendering`](RenderTargetTexture.md#isreadyforrendering)

***

### isReadyOrNotBlocking()

> **isReadyOrNotBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:621](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L621)

Get if the texture is ready to be consumed (either it is ready or it is not blocking)

#### Returns

`boolean`

true if ready, not blocking or if there was an error loading the texture

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`isReadyOrNotBlocking`](RenderTargetTexture.md#isreadyornotblocking)

***

### readPixels()

> **readPixels**(`faceIndex?`, `level?`, `buffer?`, `flushRenderer?`, `noDataConversion?`, `x?`, `y?`, `width?`, `height?`): [`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:733](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L733)

Reads the pixels stored in the webgl texture and returns them as an ArrayBuffer.
This will returns an RGBA array buffer containing either in values (0-255) or
float values (0-1) depending of the underlying buffer type.
Note that you can use [GetTextureDataAsync](../functions/GetTextureDataAsync.md) instead, which will also support reading from a compressed texture (by rendering it to an intermediate RGBA texture and retrieving the bytes from it).

#### Parameters

##### faceIndex?

`number` = `0`

defines the face of the texture to read (in case of cube texture)

##### level?

`number` = `0`

defines the LOD level of the texture to read (in case of Mip Maps)

##### buffer?

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\> = `null`

defines a user defined buffer to fill with data (can be null)

##### flushRenderer?

`boolean` = `true`

true to flush the renderer from the pending commands before reading the pixels

##### noDataConversion?

`boolean` = `false`

false to convert the data to Uint8Array (if texture type is UNSIGNED_BYTE) or to Float32Array (if texture type is anything but UNSIGNED_BYTE). If true, the type of the generated buffer (if buffer==null) will depend on the type of the texture

##### x?

`number` = `0`

defines the region x coordinates to start reading from (default to 0)

##### y?

`number` = `0`

defines the region y coordinates to start reading from (default to 0)

##### width?

`number` = `Number.MAX_VALUE`

defines the region width to read from (default to the texture size at level)

##### height?

`number` = `Number.MAX_VALUE`

defines the region width to read from (default to the texture size at level)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

The Array buffer promise containing the pixels data.

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`readPixels`](RenderTargetTexture.md#readpixels)

***

### releaseInternalTexture()

> **releaseInternalTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1314)

Release and destroy the underlying lower level texture aka internalTexture.

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`releaseInternalTexture`](RenderTargetTexture.md#releaseinternaltexture)

***

### removePostProcess()

> **removePostProcess**(`postProcess`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:890](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L890)

Remove one of the post process from the list of attached post processes to the texture

#### Parameters

##### postProcess

[`PostProcess`](PostProcess.md)

define the post process to remove from the list

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`removePostProcess`](RenderTargetTexture.md#removepostprocess)

***

### render()

> **render**(`useCameraPostProcess?`, `dumpForDebug?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1060](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1060)

Renders all the objects from the render list into the texture.

#### Parameters

##### useCameraPostProcess?

`boolean` = `false`

Define if camera post processes should be used during the rendering

##### dumpForDebug?

`boolean` = `false`

Define if the rendering result should be dumped (copied) for debugging purpose

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`render`](RenderTargetTexture.md#render)

***

### resetRefreshCounter()

> **resetRefreshCounter**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:912](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L912)

Resets the refresh counter of the texture and start bak from scratch.
Could be useful to regenerate the texture if it is setup to render only once.

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`resetRefreshCounter`](RenderTargetTexture.md#resetrefreshcounter)

***

### resize()

> **resize**(`size`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1025](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1025)

Resize the texture to a new desired size.
Be careful as it will recreate all the data in the new texture.

#### Parameters

##### size

[`TextureSize`](../type-aliases/TextureSize.md) \| \{ `ratio`: `number`; \}

Define the new size. It can be:
  - a number for squared texture,
  - an object containing { width: number, height: number }
  - or an object containing a ratio { ratio: number }

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`resize`](RenderTargetTexture.md#resize)

***

### scale()

> **scale**(`ratio`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:999](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L999)

Resize the texture using a ratio.

#### Parameters

##### ratio

`number`

the ratio to apply to the texture size in order to compute the new target size

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`scale`](RenderTargetTexture.md#scale)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/refractionTexture.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/refractionTexture.ts#L75)

Serialize the texture to a JSON representation you could use in Parse later on

#### Returns

`any`

the serialized JSON representation

#### Overrides

[`RenderTargetTexture`](RenderTargetTexture.md).[`serialize`](RenderTargetTexture.md#serialize)

***

### setMaterialForRendering()

> **setMaterialForRendering**(`mesh`, `material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:464](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L464)

Sets a specific material to be used to render a mesh/a list of meshes in this render target texture

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md) \| [`AbstractMesh`](AbstractMesh.md)[]

mesh or array of meshes

##### material?

[`Material`](Material.md) \| [`Material`](Material.md)[]

material or array of materials to use for this render pass. If undefined is passed, no specific material will be used but the regular material instead (mesh.material). It's possible to provide an array of materials to use a different material for each rendering in the case of a cube texture (6 rendering) and a 2D texture array (as many rendering as the length of the array)

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`setMaterialForRendering`](RenderTargetTexture.md#setmaterialforrendering)

***

### setRenderingAutoClearDepthStencil()

> **setRenderingAutoClearDepthStencil**(`renderingGroupId`, `autoClearDepthStencil`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1241)

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

#### Parameters

##### renderingGroupId

`number`

The rendering group id corresponding to its index

##### autoClearDepthStencil

`boolean`

Automatically clears depth and stencil between groups if true.

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`setRenderingAutoClearDepthStencil`](RenderTargetTexture.md#setrenderingautocleardepthstencil)

***

### setRenderingOrder()

> **setRenderingOrder**(`renderingGroupId`, `opaqueSortCompareFn?`, `alphaTestSortCompareFn?`, `transparentSortCompareFn?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:1226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L1226)

Overrides the default sort function applied in the rendering group to prepare the meshes.
This allowed control for front to back rendering or reversely depending of the special needs.

#### Parameters

##### renderingGroupId

`number`

The rendering group id corresponding to its index

##### opaqueSortCompareFn?

[`Nullable`](../type-aliases/Nullable.md)\<(`a`, `b`) => `number`\> = `null`

The opaque queue comparison function use to sort.

##### alphaTestSortCompareFn?

[`Nullable`](../type-aliases/Nullable.md)\<(`a`, `b`) => `number`\> = `null`

The alpha test queue comparison function use to sort.

##### transparentSortCompareFn?

[`Nullable`](../type-aliases/Nullable.md)\<(`a`, `b`) => `number`\> = `null`

The transparent queue comparison function use to sort.

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`setRenderingOrder`](RenderTargetTexture.md#setrenderingorder)

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:472](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L472)

Return a string representation of the texture.

#### Returns

`string`

the texture as a string

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`toString`](RenderTargetTexture.md#tostring)

***

### updateSamplingMode()

> **updateSamplingMode**(`samplingMode`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:287](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/thinTexture.ts#L287)

Update the sampling mode of the texture.
Default is Trilinear mode.

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 1     | NEAREST_SAMPLINGMODE or NEAREST_NEAREST_MIPLINEAR  | Nearest is: mag = nearest, min = nearest, mip = linear |
| 2     | BILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPNEAREST | Bilinear is: mag = linear, min = linear, mip = nearest |
| 3     | TRILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPLINEAR | Trilinear is: mag = linear, min = linear, mip = linear |
| 4     | NEAREST_NEAREST_MIPNEAREST |             |
| 5    | NEAREST_LINEAR_MIPNEAREST |             |
| 6    | NEAREST_LINEAR_MIPLINEAR |             |
| 7    | NEAREST_LINEAR |             |
| 8    | NEAREST_NEAREST |             |
| 9   | LINEAR_NEAREST_MIPNEAREST |             |
| 10   | LINEAR_NEAREST_MIPLINEAR |             |
| 11   | LINEAR_LINEAR |             |
| 12   | LINEAR_NEAREST |             |

   > _mag_: magnification filter (close to the viewer)
   > _min_: minification filter (far from the viewer)
   > _mip_: filter used between mip map levels

#### Parameters

##### samplingMode

`number`

Define the new sampling mode of the texture

##### generateMipMaps?

`boolean` = `false`

Define if the texture should generate mip maps or not. Default is false.

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`updateSamplingMode`](RenderTargetTexture.md#updatesamplingmode)

***

### updateURL()

> **updateURL**(`url`, `buffer?`, `onLoad?`, `forcedExtension?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L569)

Update the url (and optional buffer) of this texture if url was null during construction.

#### Parameters

##### url

`string`

the url of the texture

##### buffer?

[`Nullable`](../type-aliases/Nullable.md)\<`string` \| `ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `HTMLImageElement` \| `ImageBitmap` \| `Blob`\> = `null`

the buffer of the texture (defaults to null)

##### onLoad?

() => `void`

callback called when the texture is loaded  (defaults to null)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`updateURL`](RenderTargetTexture.md#updateurl)

***

### CreateFromBase64String()

> `static` **CreateFromBase64String**(`data`, `name`, `scene`, `noMipmapOrOptions?`, `invertY?`, `samplingMode?`, `onLoad?`, `onError?`, `format?`, `creationFlags?`, `forcedExtension?`): [`Texture`](Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:1165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L1165)

Creates a texture from its base 64 representation.

#### Parameters

##### data

`string`

Define the base64 payload without the data: prefix

##### name

`string`

Define the name of the texture in the scene useful fo caching purpose for instance

##### scene

[`Scene`](Scene.md)

Define the scene the texture should belong to

##### noMipmapOrOptions?

`boolean` \| [`ITextureCreationOptions`](../interfaces/ITextureCreationOptions.md)

defines if the texture will require mip maps or not or set of all options to create the texture

##### invertY?

`boolean`

define if the texture needs to be inverted on the y axis during loading

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)

##### onLoad?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when the texture has been loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when an error occurred during the loading session

##### format?

`number` = `Constants.TEXTUREFORMAT_RGBA`

define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

[`Texture`](Texture.md)

the created texture

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`CreateFromBase64String`](RenderTargetTexture.md#createfrombase64string)

***

### LoadFromDataString()

> `static` **LoadFromDataString**(`name`, `buffer`, `scene`, `deleteBuffer?`, `noMipmapOrOptions?`, `invertY?`, `samplingMode?`, `onLoad?`, `onError?`, `format?`, `creationFlags?`, `forcedExtension?`): [`Texture`](Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:1212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L1212)

Creates a texture from its data: representation. (data: will be added in case only the payload has been passed in)

#### Parameters

##### name

`string`

Define the name of the texture in the scene useful fo caching purpose for instance

##### buffer

`any`

define the buffer to load the texture from in case the texture is loaded from a buffer representation

##### scene

[`Scene`](Scene.md)

Define the scene the texture should belong to

##### deleteBuffer?

`boolean` = `false`

define if the buffer we are loading the texture from should be deleted after load

##### noMipmapOrOptions?

`boolean` \| [`ITextureCreationOptions`](../interfaces/ITextureCreationOptions.md)

defines if the texture will require mip maps or not or set of all options to create the texture

##### invertY?

`boolean` = `true`

define if the texture needs to be inverted on the y axis during loading

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)

##### onLoad?

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when the texture has been loaded

##### onError?

[`Nullable`](../type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\> = `null`

define a callback triggered when an error occurred during the loading session

##### format?

`number` = `Constants.TEXTUREFORMAT_RGBA`

define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

[`Texture`](Texture.md)

the created texture

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`LoadFromDataString`](RenderTargetTexture.md#loadfromdatastring)

***

### Parse()

> `static` **Parse**(`parsedTexture`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.pure.ts:970](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/texture.pure.ts#L970)

Parse the JSON representation of a texture in order to recreate the texture in the given scene.

#### Parameters

##### parsedTexture

`any`

Define the JSON representation of the texture

##### scene

[`Scene`](Scene.md)

Define the scene the parsed texture should be instantiated in

##### rootUrl

`string`

Define the root url of the parsing sequence in the case of relative dependencies

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

The parsed texture if successful

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`Parse`](RenderTargetTexture.md#parse)

***

### WhenAllReady()

> `static` **WhenAllReady**(`textures`, `callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts:898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/baseTexture.pure.ts#L898)

Helper function to be called back once a list of texture contains only ready textures.

#### Parameters

##### textures

[`BaseTexture`](BaseTexture.md)[]

Define the list of textures to wait for

##### callback

() => `void`

Define the callback triggered once the entire list will be ready

#### Returns

`void`

#### Inherited from

[`RenderTargetTexture`](RenderTargetTexture.md).[`WhenAllReady`](RenderTargetTexture.md#whenallready)
