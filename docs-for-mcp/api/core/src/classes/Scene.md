[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Scene

# Class: Scene

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L187)

Represents a scene to be rendered by the engine.

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene

## Implements

- [`IAnimatable`](../interfaces/IAnimatable.md)
- `IClipPlanesHolder`
- `IAssetContainer`

## Constructors

### Constructor

> **new Scene**(`engine`, `options?`): `Scene`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2034](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2034)

Creates a new Scene

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the engine to use to render this scene

##### options?

[`SceneOptions`](../interfaces/SceneOptions.md)

defines the scene options

#### Returns

`Scene`

## Properties

### \_afterRenderTargetPostProcessStage

> **\_afterRenderTargetPostProcessStage**: `Stage`\<[`RenderTargetStageAction`](../type-aliases/RenderTargetStageAction.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1993](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1993)

Defines the actions happening just after the post processing on a render target

***

### actionManager

> **actionManager**: [`AbstractActionManager`](AbstractActionManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1700](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1700)

Gets or sets the action manager associated with the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/events/actions

***

### actionManagers

> **actionManagers**: [`AbstractActionManager`](AbstractActionManager.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L538)

ActionManagers available on the scene.

#### Implementation of

`IAssetContainer.actionManagers`

***

### ambientColor

> **ambientColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L285)

Defines the color used to simulate the ambient color (Default is (0, 0, 0))

***

### animationGroups

> **animationGroups**: [`AnimationGroup`](AnimationGroup.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L498)

All of the animation groups added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/groupAnimations

#### Implementation of

`IAssetContainer.animationGroups`

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:492](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L492)

Gets a list of Animations associated with the scene

#### Implementation of

[`IAnimatable`](../interfaces/IAnimatable.md).[`animations`](../interfaces/IAnimatable.md#animations)

***

### animationsEnabled

> **animationsEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:628](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L628)

Gets or sets a boolean indicating if animations are enabled

***

### animationTimeScale

> **animationTimeScale**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1734](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1734)

Gets or sets a general scale for animation speed

#### See

https://www.babylonjs-playground.com/#IBU2W7#3

***

### ~~audioEnabled~~

> **audioEnabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L75)

Gets or sets if audio support is enabled

#### Deprecated

please use AudioEngineV2 instead

***

### ~~audioListenerPositionProvider~~

> **audioListenerPositionProvider**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L87)

Gets or sets custom audio listener position provider

#### Deprecated

please use AudioEngineV2 instead

***

### ~~audioListenerRotationProvider~~

> **audioListenerRotationProvider**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L93)

Gets or sets custom audio listener rotation provider

#### Deprecated

please use AudioEngineV2 instead

***

### ~~audioPositioningRefreshRate~~

> **audioPositioningRefreshRate**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L99)

Gets or sets a refresh rate when using 3D audio positioning

#### Deprecated

please use AudioEngineV2 instead

***

### autoClear

> **autoClear**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L255)

Gets or sets a boolean that indicates if the scene must clear the render buffer before rendering a frame

***

### autoClearDepthAndStencil

> **autoClearDepthAndStencil**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L259)

Gets or sets a boolean that indicates if the scene must clear the depth and stencil buffers before rendering a frame

***

### cameras

> **cameras**: [`Camera`](Camera.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:459](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L459)

All of the cameras added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras

#### Implementation of

`IAssetContainer.cameras`

***

### cameraToUseForPointers

> **cameraToUseForPointers**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:244](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L244)

Define this parameter if you are using multiple cameras and you want to specify which one should be used for pointer position

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L424)

Gets or sets the active clipplane 1

#### Implementation of

`IClipPlanesHolder.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:429](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L429)

Gets or sets the active clipplane 2

#### Implementation of

`IClipPlanesHolder.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L434)

Gets or sets the active clipplane 3

#### Implementation of

`IClipPlanesHolder.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:439](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L439)

Gets or sets the active clipplane 4

#### Implementation of

`IClipPlanesHolder.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L444)

Gets or sets the active clipplane 5

#### Implementation of

`IClipPlanesHolder.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:449](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L449)

Gets or sets the active clipplane 6

#### Implementation of

`IClipPlanesHolder.clipPlane6`

***

### collisionsEnabled

> **collisionsEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1627)

Gets or sets a boolean indicating if collisions are enabled on this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

***

### constantlyUpdateMeshUnderPointer

> **constantlyUpdateMeshUnderPointer**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:652](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L652)

Gets or sets a boolean indicating if the scene must keep the meshUnderPointer property updated
Please note that it requires to run a ray cast through the scene on every frame

***

### customLODSelector

> **customLODSelector**: (`mesh`, `camera`) => [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1054](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1054)

Gets or sets a user defined funtion to select LOD from a mesh and a camera.
By default this function is undefined and Babylon.js will select LOD based on distance to camera

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

##### camera

[`Camera`](Camera.md)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

***

### customRenderFunction?

> `optional` **customRenderFunction?**: (`updateCameras`, `ignoreAnimations`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5374](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5374)

If this function is defined it will take precedence over the standard render() function.

#### Parameters

##### updateCameras

`boolean`

##### ignoreAnimations

`boolean`

#### Returns

`void`

***

### customRenderTargets

> **customRenderTargets**: [`RenderTargetTexture`](RenderTargetTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1670](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1670)

The list of user defined render targets added to the scene

***

### debugLayer

> **debugLayer**: [`DebugLayer`](DebugLayer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L183)

Gets the debug layer (aka Inspector) associated with the scene

#### See

https://doc.babylonjs.com/toolsAndResources/inspector

***

### defaultCameraLayerMask

> **defaultCameraLayerMask**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1826](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1826)

Gets or sets the default layerMask used for cameras created in this scene.

***

### defaultCursor

> **defaultCursor**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:661](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L661)

Defines the HTML default cursor to use (empty by default)

***

### defaultRenderableLayerMask

> **defaultRenderableLayerMask**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1831](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1831)

Gets or sets the default layerMask used for renderable objects created in this scene.

***

### deltaTime

> **deltaTime**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:487](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L487)

Gets the current delta time used by animation engine

***

### depthPeelingRenderer

> **depthPeelingRenderer**: [`Nullable`](../type-aliases/Nullable.md)\<`ThinDepthPeelingRenderer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingSceneComponent.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthPeelingSceneComponent.ts#L14)

The depth peeling renderer

***

### disableOfflineSupportExceptionRules

> **disableOfflineSupportExceptionRules**: `RegExp`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:697](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L697)

Use this array to add regular expressions used to disable offline support for specific urls

***

### dispatchAllSubMeshesOfActiveMeshes

> **dispatchAllSubMeshesOfActiveMeshes**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1766](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1766)

Gets or sets a boolean indicating that all submeshes of active meshes must be rendered
Use this boolean to avoid computing frustum clipping on submeshes (This could help when you are CPU bound)

***

### doNotHandleCursors

> **doNotHandleCursors**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:665](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L665)

Defines whether cursors are handled by the scene.

***

### dumpNextRenderTargets

> **dumpNextRenderTargets**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1666](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1666)

Gets or sets a boolean indicating if next render targets must be dumped as image for debugging purposes
We recommend not using it and instead rely on Spector.js: http://spector.babylonjs.com

***

### effectLayers

> **effectLayers**: [`EffectLayer`](EffectLayer.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:585](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L585)

The list of effect layers (highlights/glow) added to the scene

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/highlightLayer
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/glowLayer

#### Implementation of

`IAssetContainer.effectLayers`

***

### environmentBRDFTexture

> **environmentBRDFTexture**: [`BaseTexture`](BaseTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L295)

This is use to store the default BRDF lookup for PBR materials in your scene.
It should only be one of the following (if not the default embedded one):
* For uncorrelated BRDF (pbr.brdf.useEnergyConservation = false and pbr.brdf.useSmithVisibilityHeightCorrelated = false) : https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds
* For correlated BRDF (pbr.brdf.useEnergyConservation = false and pbr.brdf.useSmithVisibilityHeightCorrelated = true) : https://assets.babylonjs.com/environments/correlatedBRDF.dds
* For correlated multi scattering BRDF (pbr.brdf.useEnergyConservation = true and pbr.brdf.useSmithVisibilityHeightCorrelated = true) : https://assets.babylonjs.com/environments/correlatedMSBRDF.dds
The material properties need to be setup according to the type of texture in use.

***

### environmentFuzzBRDFTexture

> **environmentFuzzBRDFTexture**: [`BaseTexture`](BaseTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L300)

This stores the brdf lookup for the fuzz layer of PBR materials in your scene.

***

### environmentIntensity

> **environmentIntensity**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L310)

Intensity of the environment (i.e. all indirect lighting) in all pbr material.
This dims or reinforces the indirect lighting overall (reflection and diffuse).
As in the majority of the scene they are the same (exception for multi room and so on),
this is easier to reference from here than from all the materials.
Note that this is more of a debugging parameter and is not physically accurate.
If you want to modify the intensity of the IBL texture, you should update iblIntensity instead.

***

### fluidRenderer

> **fluidRenderer**: [`Nullable`](../type-aliases/Nullable.md)\<[`FluidRenderer`](FluidRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L29)

Gets or Sets the fluid renderer associated to the scene.

***

### fogColor

> **fogColor**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1409)

Gets or sets the fog color to use

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
(Default is Color3(0.2, 0.2, 0.3))

***

### fogDensity

> **fogDensity**: `number` = `0.1`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1415)

Gets or sets the fog density to use

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
(Default is 0.1)

***

### fogEnd

> **fogEnd**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1427](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1427)

Gets or sets the fog end distance to use

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
(Default is 1000)

***

### fogStart

> **fogStart**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1421](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1421)

Gets or sets the fog start distance to use

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
(Default is 0)

***

### forceShowBoundingBoxes

> **forceShowBoundingBoxes**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/boundingBoxRenderer.ts#L36)

Gets or sets a boolean indicating if all bounding boxes must be rendered

***

### frameGraphs

> **frameGraphs**: [`FrameGraph`](FrameGraph.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1579](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1579)

List of frame graphs associated with the scene

***

### gamepadManager

> **gamepadManager**: [`GamepadManager`](GamepadManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Gamepads/gamepadSceneComponent.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Gamepads/gamepadSceneComponent.ts#L21)

Gets the gamepad manager associated with the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/input/gamepads

***

### geometries

> **geometries**: [`Geometry`](Geometry.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:524](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L524)

The list of geometries used in the scene.

#### Implementation of

`IAssetContainer.geometries`

***

### geometryBufferRenderer

> **geometryBufferRenderer**: [`Nullable`](../type-aliases/Nullable.md)\<[`GeometryBufferRenderer`](GeometryBufferRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRendererSceneComponent.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/geometryBufferRendererSceneComponent.ts#L18)

Gets or Sets the current geometry buffer associated to the scene.

***

### getActiveMeshCandidates

> **getActiveMeshCandidates**: () => [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4564](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4564)

Lambda returning the list of potentially active meshes.

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`AbstractMesh`](AbstractMesh.md)\>

***

### getActiveSubMeshCandidates

> **getActiveSubMeshCandidates**: (`mesh`) => [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4569](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4569)

Lambda returning the list of potentially active sub meshes.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

***

### getCollidingSubMeshCandidates

> **getCollidingSubMeshCandidates**: (`mesh`, `collider`) => [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4579](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4579)

Lambda returning the list of potentially colliding sub meshes.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

##### collider

`Collider`

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

***

### getDeterministicFrameTime

> **getDeterministicFrameTime**: () => `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5278)

User updatable function that will return a deterministic frame time when engine is in deterministic lock step mode

#### Returns

`number`

the frame time

***

### getIntersectingSubMeshCandidates

> **getIntersectingSubMeshCandidates**: (`mesh`, `localRay`) => [`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4574](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4574)

Lambda returning the list of potentially intersecting sub meshes.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

##### localRay

[`Ray`](Ray.md)

#### Returns

[`ISmartArrayLike`](../interfaces/ISmartArrayLike.md)\<[`SubMesh`](SubMesh.md)\>

***

### gravity

> **gravity**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1645](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1645)

Defines the gravity applied to this scene (used only for collisions)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions

***

### ~~headphone~~

> **headphone**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L81)

Gets or sets if audio will be output to headphones

#### Deprecated

please use AudioEngineV2 instead

***

### hoverCursor

> **hoverCursor**: `string` = `"pointer"`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:657](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L657)

Defines the HTML cursor to use when hovering over interactive elements

***

### iblCdfGenerator

> **iblCdfGenerator**: [`Nullable`](../type-aliases/Nullable.md)\<[`IblCdfGenerator`](IblCdfGenerator.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L20)

Gets or Sets the current CDF generator associated to the scene.
The CDF (cumulative distribution function) generator creates CDF maps
for a given IBL texture that can then be used for more efficient
importance sampling.

***

### iblIntensity

> **iblIntensity**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L316)

Overall intensity of the IBL texture.
This value is multiplied with the reflectionTexture.level value to calculate the final IBL intensity.

***

### importedMeshesFiles

> **importedMeshesFiles**: `string`[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1681](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1681)

Gets the list of meshes imported to the scene through SceneLoader

***

### layers

> **layers**: [`Layer`](Layer.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:596](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L596)

The list of layers (background and foreground) of the scene

#### Implementation of

`IAssetContainer.layers`

***

### lensFlaresEnabled

> **lensFlaresEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1620](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1620)

Gets or sets a boolean indicating if lens flares are enabled on this scene

***

### lensFlareSystems

> **lensFlareSystems**: [`LensFlareSystem`](LensFlareSystem.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L602)

The list of lens flare system added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

#### Implementation of

`IAssetContainer.lensFlareSystems`

***

### lights

> **lights**: [`Light`](Light.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L465)

All of the lights added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction

#### Implementation of

`IAssetContainer.lights`

***

### loadingPluginName

> **loadingPluginName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:692](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L692)

Gets the name of the plugin used to load this scene (null by default)

***

### ~~mainSoundTrack~~

> **mainSoundTrack**: [`SoundTrack`](SoundTrack.md)

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L56)

The main sound track played by the scene.
It contains your primary collection of sounds.

#### Deprecated

please use AudioEngineV2 instead

***

### materials

> **materials**: [`Material`](Material.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:513](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L513)

All of the materials added to this scene
In the context of a Scene, it is not supposed to be modified manually.
Any addition or removal should be done using the addMaterial and removeMaterial Scene methods.
Note also that the order of the Material within the array is not significant and might change.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction

#### Implementation of

`IAssetContainer.materials`

***

### meshes

> **meshes**: [`AbstractMesh`](AbstractMesh.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L470)

All of the (abstract) meshes added to this scene

#### Implementation of

`IAssetContainer.meshes`

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:682](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L682)

Gets or sets user defined metadata

***

### morphTargetManagers

> **morphTargetManagers**: [`MorphTargetManager`](MorphTargetManager.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:519](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L519)

The list of morph target managers added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph

#### Implementation of

`IAssetContainer.morphTargetManagers`

***

### multiMaterials

> **multiMaterials**: [`MultiMaterial`](MultiMaterial.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:504](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L504)

All of the multi-materials added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials

#### Implementation of

`IAssetContainer.multiMaterials`

***

### needsPreviousWorldMatrices

> **needsPreviousWorldMatrices**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1439](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1439)

Flag indicating if we need to store previous matrices when rendering

***

### objectRenderers

> **objectRenderers**: [`ObjectRenderer`](ObjectRenderer.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L543)

Object renderers available on the scene.

***

### offlineProvider

> **offlineProvider**: [`IOfflineProvider`](../interfaces/IOfflineProvider.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1694](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1694)

Gets or sets the current offline provider to use to store scene data

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeCached

***

### onActiveCameraChanged

> **onActiveCameraChanged**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1009](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1009)

An event triggered when the activeCamera property is updated

***

### onActiveCamerasChanged

> **onActiveCamerasChanged**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1014](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1014)

An event triggered when the activeCameras property is updated

***

### onAfterActiveMeshesEvaluationObservable

> **onAfterActiveMeshesEvaluationObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:815](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L815)

An event triggered when active meshes evaluation is done

***

### onAfterAnimationsObservable

> **onAfterAnimationsObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:760](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L760)

An event triggered after animations processing

***

### onAfterCameraRenderObservable

> **onAfterCameraRenderObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:796](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L796)

An event triggered after rendering a camera
This is triggered for the full rig Camera only unlike onAfterRenderCameraObservable

***

### onAfterDrawPhaseObservable

> **onAfterDrawPhaseObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:770](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L770)

An event triggered after draw calls have been sent

***

### onAfterParticlesRenderingObservable

> **onAfterParticlesRenderingObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:827](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L827)

An event triggered when particles rendering is done
Note: This event can be trigger more than once per frame (because particles can be rendered by render target textures as well)

***

### onAfterPhysicsObservable

> **onAfterPhysicsObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts#L61)

An event triggered when physic simulation has been done

***

### onAfterRenderCameraObservable

> **onAfterRenderCameraObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:738](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L738)

An event triggered after rendering the scene for an active camera (When scene.render is called this will be called after each camera)
This is triggered for each "sub" camera in a Camera Rig unlike onAfterCameraRenderObservable

***

### onAfterRenderingGroupObservable

> **onAfterRenderingGroupObservable**: [`Observable`](Observable.md)\<[`RenderingGroupInfo`](RenderingGroupInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1028](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1028)

This Observable will be triggered after rendering each renderingGroup of each rendered camera.
The RenderingGroupInfo class contains all the information about the context in which the observable is called
If you wish to register an Observer only for a given set of renderingGroup, use the mask with a combination of the renderingGroup index elevated to the power of two (1 for renderingGroup 0, 2 for renderingrOup1, 4 for 2 and 8 for 3)

***

### onAfterRenderObservable

> **onAfterRenderObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:732](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L732)

An event triggered after rendering the scene

***

### onAfterRenderTargetsRenderObservable

> **onAfterRenderTargetsRenderObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:994](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L994)

An event triggered when render targets were rendered.
Can happen multiple times per frame.

***

### onAfterSpritesRenderingObservable

> **onAfterSpritesRenderingObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L52)

An event triggered when sprites rendering is done
Note: This event can be trigger more than once per frame (because sprites can be rendered by render target textures as well)

***

### onAfterStepObservable

> **onAfterStepObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1004](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1004)

An event triggered after calculating deterministic simulation step

***

### onAnimationFileImportedObservable

> **onAnimationFileImportedObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1038](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1038)

This Observable will when an animation file has been imported into the scene.

***

### onAnimationGroupRemovedObservable

> **onAnimationGroupRemovedObservable**: [`Observable`](Observable.md)\<[`AnimationGroup`](AnimationGroup.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:912](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L912)

An event triggered when an animation group is removed

***

### onBeforeActiveMeshesEvaluationObservable

> **onBeforeActiveMeshesEvaluationObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:810](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L810)

An event triggered when active meshes evaluation is about to start

***

### onBeforeAnimationsObservable

> **onBeforeAnimationsObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:755](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L755)

An event triggered before animating the scene

***

### onBeforeCameraRenderObservable

> **onBeforeCameraRenderObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:780](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L780)

An event triggered before rendering a camera

***

### onBeforeDrawPhaseObservable

> **onBeforeDrawPhaseObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:765](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L765)

An event triggered before draw calls are ready to be sent

***

### onBeforeParticlesRenderingObservable

> **onBeforeParticlesRenderingObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:821](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L821)

An event triggered when particles rendering is about to start
Note: This event can be trigger more than once per frame (because particles can be rendered by render target textures as well)

***

### onBeforePhysicsObservable

> **onBeforePhysicsObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts#L56)

An event triggered when physic simulation is about to be run

***

### onBeforeRenderingGroupObservable

> **onBeforeRenderingGroupObservable**: [`Observable`](Observable.md)\<[`RenderingGroupInfo`](RenderingGroupInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1021](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1021)

This Observable will be triggered before rendering each renderingGroup of each rendered camera.
The RenderingGroupInfo class contains all the information about the context in which the observable is called
If you wish to register an Observer only for a given set of renderingGroup, use the mask with a combination of the renderingGroup index elevated to the power of two (1 for renderingGroup 0, 2 for renderingrOup1, 4 for 2 and 8 for 3)

***

### onBeforeRenderObservable

> **onBeforeRenderObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:716](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L716)

An event triggered before rendering the scene (right after animations and physics)

***

### onBeforeRenderTargetsRenderObservable

> **onBeforeRenderTargetsRenderObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:988](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L988)

An event triggered when render targets are about to be rendered
Can happen multiple times per frame.

***

### onBeforeSpritesRenderingObservable

> **onBeforeSpritesRenderingObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L46)

An event triggered when sprites rendering is about to start
Note: This event can be trigger more than once per frame (because sprites can be rendered by render target textures as well)

***

### onBeforeStepObservable

> **onBeforeStepObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:999](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L999)

An event triggered before calculating deterministic simulation step

***

### onCameraRemovedObservable

> **onCameraRemovedObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:842](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L842)

An event triggered when a camera is removed

***

### onClearColorChangedObservable

> **onClearColorChangedObservable**: [`Observable`](Observable.md)\<[`Color4`](Color4.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L266)

Observable triggered when the performance priority is changed

***

### onDataLoadedObservable

> **onDataLoadedObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:832](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L832)

An event triggered when SceneLoader.Append or SceneLoader.Load or SceneLoader.ImportMesh were successfully executed

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:702](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L702)

An event triggered when the scene is disposed.

***

### onEffectLayerRemovedObservable

> **onEffectLayerRemovedObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:982](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L982)

An event triggered when an effect layer is removed

***

### onEnvironmentTextureChangedObservable

> **onEnvironmentTextureChangedObservable**: [`Observable`](Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1043)

An event triggered when the environmentTexture is changed.

***

### onFrameGraphRemovedObservable

> **onFrameGraphRemovedObservable**: [`Observable`](Observable.md)\<[`FrameGraph`](FrameGraph.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:952](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L952)

An event triggered when a frame graph is removed

***

### onGeometryRemovedObservable

> **onGeometryRemovedObservable**: [`Observable`](Observable.md)\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:862](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L862)

An event triggered when a geometry is removed

***

### onKeyboardObservable

> **onKeyboardObservable**: [`Observable`](Observable.md)\<[`KeyboardInfo`](KeyboardInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1312)

Observable event triggered each time an keyboard event is received from the hosting window

***

### onLightRemovedObservable

> **onLightRemovedObservable**: [`Observable`](Observable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:852](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L852)

An event triggered when a light is removed

***

### onMaterialRemovedObservable

> **onMaterialRemovedObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:927](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L927)

An event triggered when a material is removed

***

### onMeshImportedObservable

> **onMeshImportedObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1033](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1033)

This Observable will when a mesh has been imported into the scene.

***

### onMeshRemovedObservable

> **onMeshRemovedObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:882](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L882)

An event triggered when a mesh is removed

***

### onMeshUnderPointerUpdatedObservable

> **onMeshUnderPointerUpdatedObservable**: [`Observable`](Observable.md)\<\{ `mesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>; `pointerId`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1048](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1048)

An event triggered when the state of mesh under pointer, for a specific pointerId, changes.

***

### onMultiMaterialRemovedObservable

> **onMultiMaterialRemovedObservable**: [`Observable`](Observable.md)\<[`MultiMaterial`](MultiMaterial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:932](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L932)

An event triggered when a multi material is removed

***

### onNewAnimationGroupAddedObservable

> **onNewAnimationGroupAddedObservable**: [`Observable`](Observable.md)\<[`AnimationGroup`](AnimationGroup.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:907](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L907)

An event triggered when an animation group is created

***

### onNewCameraAddedObservable

> **onNewCameraAddedObservable**: [`Observable`](Observable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:837](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L837)

An event triggered when a camera is created

***

### onNewEffectLayerAddedObservable

> **onNewEffectLayerAddedObservable**: [`Observable`](Observable.md)\<[`EffectLayer`](EffectLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:977](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L977)

An event triggered when an effect layer is created

***

### onNewFrameGraphAddedObservable

> **onNewFrameGraphAddedObservable**: [`Observable`](Observable.md)\<[`FrameGraph`](FrameGraph.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:947](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L947)

An event triggered when a frame graph is created

***

### onNewGeometryAddedObservable

> **onNewGeometryAddedObservable**: [`Observable`](Observable.md)\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:857](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L857)

An event triggered when a geometry is created

***

### onNewLightAddedObservable

> **onNewLightAddedObservable**: [`Observable`](Observable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:847](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L847)

An event triggered when a light is created

***

### onNewMaterialAddedObservable

> **onNewMaterialAddedObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:917](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L917)

An event triggered when a material is created

***

### onNewMeshAddedObservable

> **onNewMeshAddedObservable**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:877](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L877)

An event triggered when a mesh is created

***

### onNewMultiMaterialAddedObservable

> **onNewMultiMaterialAddedObservable**: [`Observable`](Observable.md)\<[`MultiMaterial`](MultiMaterial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:922](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L922)

An event triggered when a multi material is created

***

### onNewObjectRendererAddedObservable

> **onNewObjectRendererAddedObservable**: [`Observable`](Observable.md)\<[`ObjectRenderer`](ObjectRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:957](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L957)

An event triggered when an object renderer is created

***

### onNewParticleSystemAddedObservable

> **onNewParticleSystemAddedObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:897](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L897)

An event triggered when a particle system is created

***

### onNewPostProcessAddedObservable

> **onNewPostProcessAddedObservable**: [`Observable`](Observable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:967](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L967)

An event triggered when a post process is created

***

### onNewSkeletonAddedObservable

> **onNewSkeletonAddedObservable**: [`Observable`](Observable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:887](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L887)

An event triggered when a skeleton is created

***

### onNewSpriteManagerAddedObservable

> `readonly` **onNewSpriteManagerAddedObservable**: [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`ISpriteManager`](../interfaces/ISpriteManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L35)

An event triggered when a sprite manager is added to the scene

***

### onNewTextureAddedObservable

> **onNewTextureAddedObservable**: [`Observable`](Observable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:937](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L937)

An event triggered when a texture is created

***

### onNewTransformNodeAddedObservable

> **onNewTransformNodeAddedObservable**: [`Observable`](Observable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:867](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L867)

An event triggered when a transform node is created

***

### onObjectRendererRemovedObservable

> **onObjectRendererRemovedObservable**: [`Observable`](Observable.md)\<[`ObjectRenderer`](ObjectRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:962](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L962)

An event triggered when an object renderer is removed

***

### onParticleSystemRemovedObservable

> **onParticleSystemRemovedObservable**: [`Observable`](Observable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:902](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L902)

An event triggered when a particle system is removed

***

### onPointerDown?

> `optional` **onPointerDown?**: (`evt`, `pickInfo`, `type`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1166)

Callback called when a pointer down is detected

#### Parameters

##### evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

##### pickInfo

[`PickingInfo`](PickingInfo.md)

##### type

[`PointerEventTypes`](PointerEventTypes.md)

#### Returns

`void`

***

### onPointerMove?

> `optional` **onPointerMove?**: (`evt`, `pickInfo`, `type`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1164)

Callback called when a pointer move is detected

#### Parameters

##### evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

##### pickInfo

[`PickingInfo`](PickingInfo.md)

##### type

[`PointerEventTypes`](PointerEventTypes.md)

#### Returns

`void`

***

### onPointerObservable

> **onPointerObservable**: [`Observable`](Observable.md)\<[`PointerInfo`](PointerInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1196)

Observable event triggered each time an input event is received from the rendering canvas

***

### onPointerPick?

> `optional` **onPointerPick?**: (`evt`, `pickInfo`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1170)

Callback called when a pointer pick is detected

#### Parameters

##### evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

##### pickInfo

[`PickingInfo`](PickingInfo.md)

#### Returns

`void`

***

### onPointerUp?

> `optional` **onPointerUp?**: (`evt`, `pickInfo`, `type`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1168)

Callback called when a pointer up is detected

#### Parameters

##### evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

##### pickInfo

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

##### type

[`PointerEventTypes`](PointerEventTypes.md)

#### Returns

`void`

***

### onPostProcessRemovedObservable

> **onPostProcessRemovedObservable**: [`Observable`](Observable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:972](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L972)

An event triggered when a post process is removed

***

### onPreKeyboardObservable

> **onPreKeyboardObservable**: [`Observable`](Observable.md)\<[`KeyboardInfoPre`](KeyboardInfoPre.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1307)

This observable event is triggered when any keyboard event si raised and registered during Scene.attachControl()
You have the possibility to skip the process and the call to onKeyboardObservable by setting KeyboardInfoPre.skipOnPointerObservable to true

***

### onPrePointerObservable

> **onPrePointerObservable**: [`Observable`](Observable.md)\<[`PointerInfoPre`](PointerInfoPre.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1191)

This observable event is triggered when any ponter event is triggered. It is registered during Scene.attachControl() and it is called BEFORE the 3D engine process anything (mesh/sprite picking for instance).
You have the possibility to skip the process and the call to onPointerObservable by setting PointerInfoPre.skipOnPointerObservable to true

***

### onReadyObservable

> **onReadyObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:775](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L775)

An event triggered when the scene is ready

***

### onReadyTimeoutDuration

> **onReadyTimeoutDuration**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2735](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2735)

Duration in milliseconds to wait before triggering the onReadyTimeoutObservable event.

***

### onReadyTimeoutObservable

> **onReadyTimeoutObservable**: [`Observable`](Observable.md)\<`Scene`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2730](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2730)

An event triggered when the scene ready checks has timed out.

***

### onScenePerformancePriorityChangedObservable

> **onScenePerformancePriorityChangedObservable**: [`Observable`](Observable.md)\<[`ScenePerformancePriority`](../enumerations/ScenePerformancePriority.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:337](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L337)

Observable triggered when the performance priority is changed

***

### onSkeletonRemovedObservable

> **onSkeletonRemovedObservable**: [`Observable`](Observable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:892](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L892)

An event triggered when a skeleton is removed

***

### onSpriteManagerRemovedObservable

> `readonly` **onSpriteManagerRemovedObservable**: [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`ISpriteManager`](../interfaces/ISpriteManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L40)

An event triggered when a sprite manager is removed from the scene

***

### onTextureRemovedObservable

> **onTextureRemovedObservable**: [`Observable`](Observable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:942](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L942)

An event triggered when a texture is removed

***

### onTransformNodeRemovedObservable

> **onTransformNodeRemovedObservable**: [`Observable`](Observable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:872](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L872)

An event triggered when a transform node is removed

***

### particlesEnabled

> **particlesEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1591)

Gets or sets a boolean indicating if particles are enabled on this scene

***

### particleSystems

> **particleSystems**: [`IParticleSystem`](../interfaces/IParticleSystem.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:482](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L482)

All of the particle systems added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro

#### Implementation of

`IAssetContainer.particleSystems`

***

### physicsEnabled

> **physicsEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1585](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1585)

Gets or sets a boolean indicating if physic engines are enabled on this scene

***

### pointerDownTrianglePredicate

> **pointerDownTrianglePredicate**: ((`p0`, `p1`, `p2`, `ray`) => `boolean`) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1180)

Gets or sets a predicate used to select candidate faces for a pointer down event

***

### pointerMoveTrianglePredicate

> **pointerMoveTrianglePredicate**: ((`p0`, `p1`, `p2`, `ray`) => `boolean`) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1175)

Gets or sets a predicate used to select candidate faces for a pointer move event

***

### pointerUpTrianglePredicate

> **pointerUpTrianglePredicate**: ((`p0`, `p1`, `p2`, `ray`) => `boolean`) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1185)

Gets or sets a predicate used to select candidate faces for a pointer up event

***

### postProcesses

> **postProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:578](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L578)

The list of postprocesses added to the scene

#### Implementation of

`IAssetContainer.postProcesses`

***

### postProcessesEnabled

> **postProcessesEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1651](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1651)

Gets or sets a boolean indicating if postprocesses are enabled on this scene

***

### postProcessManager

> **postProcessManager**: [`PostProcessManager`](PostProcessManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1655](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1655)

Gets the current postprocess manager

***

### postProcessRenderPipelineManager

> `readonly` **postProcessRenderPipelineManager**: [`PostProcessRenderPipelineManager`](PostProcessRenderPipelineManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipelineManagerSceneComponent.ts#L16)

Gets the postprocess render pipeline manager

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/postProcessRenderPipeline
 - https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/defaultRenderingPipeline

***

### prePassRenderer

> **prePassRenderer**: [`Nullable`](../type-aliases/Nullable.md)\<[`PrePassRenderer`](PrePassRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/prePassRendererSceneComponent.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/prePassRendererSceneComponent.ts#L23)

Gets or Sets the current prepass renderer associated to the scene.

***

### preventDefaultOnPointerDown

> **preventDefaultOnPointerDown**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:670](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L670)

This is used to call preventDefault() on pointer down
in order to block unwanted artifacts like system double clicks

***

### preventDefaultOnPointerUp

> **preventDefaultOnPointerUp**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:676](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L676)

This is used to call preventDefault() on pointer up
in order to block unwanted artifacts like system double clicks

***

### probesEnabled

> **probesEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1687](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1687)

Gets or sets a boolean indicating if probes are enabled on this scene

***

### proceduralTextures

> **proceduralTextures**: [`ProceduralTexture`](ProceduralTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:608](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L608)

The list of procedural textures added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/proceduralTextures

#### Implementation of

`IAssetContainer.proceduralTextures`

***

### proceduralTexturesEnabled

> **proceduralTexturesEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1708](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1708)

Gets or sets a boolean indicating if procedural textures are enabled on this scene

***

### reflectionProbes

> **reflectionProbes**: [`ReflectionProbe`](ReflectionProbe.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L19)

The list of reflection probes added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/reflectionProbes

#### Implementation of

`IAssetContainer.reflectionProbes`

***

### renderTargetsEnabled

> **renderTargetsEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1661](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1661)

Gets or sets a boolean indicating if render targets are enabled on this scene

***

### requireLightSorting

> **requireLightSorting**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1813](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1813)

Gets or sets a boolean indicating if lights must be sorted by priority (off by default)
This is useful if there are more lights that the maximum simulteanous authorized

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:687](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L687)

For internal use only. Please do not use.

***

### rootNodes

> **rootNodes**: [`Node`](Node.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:454](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L454)

Gets the list of root nodes (ie. nodes with no parent)

#### Implementation of

`IAssetContainer.rootNodes`

***

### selectionOctree

> **selectionOctree**: [`Octree`](Octree.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L27)

Gets the octree used to boost mesh selection (picking)

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees

***

### simplificationQueue

> **simplificationQueue**: [`SimplificationQueue`](SimplificationQueue.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshSimplificationSceneComponent.ts#L17)

Gets or sets the simplification queue attached to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/simplifyingMeshes

***

### skeletons

> **skeletons**: [`Skeleton`](Skeleton.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:476](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L476)

The list of skeletons added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons

#### Implementation of

`IAssetContainer.skeletons`

***

### ~~sounds~~

> **sounds**: [`Nullable`](../type-aliases/Nullable.md)\<[`Sound`](Sound.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:591](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L591)

The list of sounds used in the scene.

#### Deprecated

please use AudioEngineV2 instead

#### Implementation of

`IAssetContainer.sounds`

***

### ~~soundTracks~~

> **soundTracks**: [`Nullable`](../type-aliases/Nullable.md)\<[`SoundTrack`](SoundTrack.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L61)

The list of sound tracks added to the scene

#### Deprecated

please use AudioEngineV2 instead

***

### spriteManagers?

> `optional` **spriteManagers?**: [`ISpriteManager`](../interfaces/ISpriteManager.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L30)

All of the sprite managers added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/sprites

#### Implementation of

`IAssetContainer.spriteManagers`

***

### spritesEnabled

> **spritesEnabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1597)

Gets or sets a boolean indicating if sprites are enabled on this scene

***

### subSurfaceConfiguration

> **subSurfaceConfiguration**: [`Nullable`](../type-aliases/Nullable.md)\<`SubSurfaceConfiguration`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/subSurfaceSceneComponent.ts#L31)

Gets or Sets the current prepass renderer associated to the scene.

***

### textures

> **textures**: [`BaseTexture`](BaseTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:548](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L548)

Textures to keep.

#### Implementation of

`IAssetContainer.textures`

***

### transformNodes

> **transformNodes**: [`TransformNode`](TransformNode.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L533)

All of the transform nodes added to this scene
In the context of a Scene, it is not supposed to be modified manually.
Any addition or removal should be done using the addTransformNode and removeTransformNode Scene methods.
Note also that the order of the TransformNode within the array is not significant and might change.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/transform_node

#### Implementation of

`IAssetContainer.transformNodes`

***

### useConstantAnimationDeltaTime

> **useConstantAnimationDeltaTime**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:647](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L647)

Gets or sets a boolean indicating if a constant deltatime has to be used
This is mostly useful for testing purposes when you do not want the animations to scale with the framerate

***

### useDelayedTextureLoading

> **useDelayedTextureLoading**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1676](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1676)

Defines if texture loading must be delayed
If true, textures will only be loaded when they need to be rendered

***

### useOrderIndependentTransparency

> **useOrderIndependentTransparency**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthPeelingSceneComponent.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthPeelingSceneComponent.ts#L21)

Flag to indicate if we want to use order independent transparency, despite the performance hit

***

### FOGMODE\_EXP

> `readonly` `static` **FOGMODE\_EXP**: `number` = `Constants.FOGMODE_EXP`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L191)

The fog density is following an exponential function

***

### FOGMODE\_EXP2

> `readonly` `static` **FOGMODE\_EXP2**: `number` = `Constants.FOGMODE_EXP2`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L193)

The fog density is following an exponential function faster than FOGMODE_EXP

***

### FOGMODE\_LINEAR

> `readonly` `static` **FOGMODE\_LINEAR**: `number` = `Constants.FOGMODE_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L195)

The fog density is following a linear function.

***

### FOGMODE\_NONE

> `readonly` `static` **FOGMODE\_NONE**: `number` = `Constants.FOGMODE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L189)

The fog is deactivated

***

### MaxDeltaTime

> `static` **MaxDeltaTime**: `number` = `1000.0`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L206)

Gets or sets the maximum deltatime when deterministic lock step is enabled

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### MinDeltaTime

> `static` **MinDeltaTime**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L201)

Gets or sets the minimum deltatime when deterministic lock step is enabled

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

## Accessors

### activeBonesPerfCounter

#### Get Signature

> **get** **activeBonesPerfCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2281)

Gets the performance counter for active bones

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#instrumentation

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### activeCamera

#### Get Signature

> **get** **activeCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1499](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1499)

Gets or sets the current active camera

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

#### Set Signature

> **set** **activeCamera**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1503](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1503)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

##### Returns

`void`

***

### activeCameras

#### Get Signature

> **get** **activeCameras**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1477)

All of the active cameras added to this scene.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)[]\>

#### Set Signature

> **set** **activeCameras**(`cameras`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1481](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1481)

##### Parameters

###### cameras

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)[]\>

##### Returns

`void`

***

### activeParticlesPerfCounter

#### Get Signature

> **get** **activeParticlesPerfCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2265)

Gets the performance counter for active particles

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#instrumentation

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### afterCameraRender

#### Set Signature

> **set** **afterCameraRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:800](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L800)

Sets a function to be executed after rendering a camera

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### afterRender

#### Set Signature

> **set** **afterRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:742](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L742)

Sets a function to be executed after rendering this scene

##### Parameters

###### callback

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

##### Returns

`void`

***

### animatables

#### Get Signature

> **get** **animatables**(): [`Animatable`](Animatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2787](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2787)

Gets all animatable attached to the scene

##### Returns

[`Animatable`](Animatable.md)[]

***

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:635](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L635)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:639](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L639)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](AnimationPropertiesOverride.md)\>

##### Returns

`void`

***

### beforeCameraRender

#### Set Signature

> **set** **beforeCameraRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:784](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L784)

Sets a function to be executed before rendering a camera

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### beforeRender

#### Set Signature

> **set** **beforeRender**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:720](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L720)

Sets a function to be executed before rendering this scene

##### Parameters

###### callback

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

##### Returns

`void`

***

### blockfreeActiveMeshesAndRenderingGroups

#### Get Signature

> **get** **blockfreeActiveMeshesAndRenderingGroups**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4496](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4496)

Gets or sets a boolean blocking all the calls to freeActiveMeshes and freeRenderingGroups
It can be used in order to prevent going through methods freeRenderingGroups and freeActiveMeshes several times to improve performance
when disposing several meshes in a row or a hierarchy of meshes.
When used, it is the responsibility of the user to blockfreeActiveMeshesAndRenderingGroups back to false.

##### Returns

`boolean`

#### Set Signature

> **set** **blockfreeActiveMeshesAndRenderingGroups**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4500](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4500)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### blockMaterialDirtyMechanism

#### Get Signature

> **get** **blockMaterialDirtyMechanism**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6368](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6368)

Gets or sets a boolean blocking all the calls to markAllMaterialsAsDirty (ie. the materials won't be updated if they are out of sync)

##### Returns

`boolean`

#### Set Signature

> **set** **blockMaterialDirtyMechanism**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6372)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### clearColor

#### Get Signature

> **get** **clearColor**(): [`Color4`](Color4.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L271)

Defines the color used to clear the render buffer (Default is (0.2, 0.2, 0.3, 1.0))

##### Returns

[`Color4`](Color4.md)

#### Set Signature

> **set** **clearColor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L275)

##### Parameters

###### value

[`Color4`](Color4.md)

##### Returns

`void`

***

### defaultMaterial

#### Get Signature

> **get** **defaultMaterial**(): [`Material`](Material.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1520](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1520)

The default material used on meshes when no material is affected

##### Returns

[`Material`](Material.md)

#### Set Signature

> **set** **defaultMaterial**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1529)

The default material used on meshes when no material is affected

##### Parameters

###### value

[`Material`](Material.md)

##### Returns

`void`

***

### environmentTexture

#### Get Signature

> **get** **environmentTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:557](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L557)

Texture used in all pbr material as the reflection texture.
As in the majority of the scene they are the same (exception for multi room and so on),
this is easier to reference from here than from all the materials.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **environmentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L565)

Texture used in all pbr material as the reflection texture.
As in the majority of the scene they are the same (exception for multi room and so on),
this is easier to set here than in all the materials.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Implementation of

`IAssetContainer.environmentTexture`

***

### floatingOriginMode

#### Get Signature

> **get** **floatingOriginMode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2924](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2924)

True if floatingOriginMode was passed to engine or this scene creation otions.
This mode avoids floating point imprecision in huge coordinate system by offsetting uniform values before passing to shader, centering camera at origin and displacing rest of scene by camera position

##### Returns

`boolean`

***

### floatingOriginOffset

#### Get Signature

> **get** **floatingOriginOffset**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2931](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2931)

When floatingOriginMode is enabled, offset is equal to the eye position. Default to ZeroReadonly when mode is disabled.

##### Returns

[`Vector3`](Vector3.md)

***

### fogEnabled

#### Get Signature

> **get** **fogEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1378](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1378)

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1371)

Gets or sets a boolean indicating if fog is enabled on this scene

##### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
(Default is true)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### fogMode

#### Get Signature

> **get** **fogMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1400)

##### Returns

`number`

#### Set Signature

> **set** **fogMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1393](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1393)

Gets or sets the fog mode to use

##### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/environment_introduction#fog
| mode | value |
| --- | --- |
| FOGMODE_NONE | 0 |
| FOGMODE_EXP | 1 |
| FOGMODE_EXP2 | 2 |
| FOGMODE_LINEAR | 3 |

##### Parameters

###### value

`number`

##### Returns

`void`

***

### forcePointsCloud

#### Get Signature

> **get** **forcePointsCloud**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:417](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L417)

##### Returns

`boolean`

#### Set Signature

> **set** **forcePointsCloud**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L410)

Gets or sets a boolean indicating if all rendering must be done in point cloud

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### forceWireframe

#### Get Signature

> **get** **forceWireframe**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:388](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L388)

##### Returns

`boolean`

#### Set Signature

> **set** **forceWireframe**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L381)

Gets or sets a boolean indicating if all rendering must be done in wireframe

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### frameGraph

#### Get Signature

> **get** **frameGraph**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraph`](FrameGraph.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1555](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1555)

Gets or sets the frame graph used to render the scene. If set, the scene will use the frame graph to render the scene instead of the default render loop.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraph`](FrameGraph.md)\>

#### Set Signature

> **set** **frameGraph**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1559](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1559)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraph`](FrameGraph.md)\>

##### Returns

`void`

***

### frustumPlanes

#### Get Signature

> **get** **frustumPlanes**(): [`Plane`](Plane.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1805](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1805)

Gets the list of frustum planes (built from the active camera)

##### Returns

[`Plane`](Plane.md)[]

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L328)

Default image processing configuration used either in the rendering
Forward main pass or through the imageProcessingPostProcess if present.
As in the majority of the scene they are the same (exception for multi camera),
this is easier to reference from here than from all the materials and post process.

No setter as we it is a shared configuration, you can set the values instead.

##### Returns

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

***

### isDisposed

#### Get Signature

> **get** **isDisposed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5976](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5976)

Gets if the scene is already disposed

##### Returns

`boolean`

***

### isLoading

#### Get Signature

> **get** **isLoading**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2673](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2673)

Returns a boolean indicating if the scene is still loading data

##### Returns

`boolean`

***

### lightsEnabled

#### Get Signature

> **get** **lightsEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1469](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1469)

##### Returns

`boolean`

#### Set Signature

> **set** **lightsEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1461](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1461)

Gets or sets a boolean indicating if lights are enabled on this scene

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### meshUnderPointer

#### Get Signature

> **get** **meshUnderPointer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2152)

Gets the mesh that is currently under the pointer

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:706](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L706)

Sets a function to be executed when this scene is disposed.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### performancePriority

#### Get Signature

> **get** **performancePriority**(): [`ScenePerformancePriority`](../enumerations/ScenePerformancePriority.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L341)

Gets or sets a value indicating how to treat performance relatively to ease of use and backward compatibility

##### Returns

[`ScenePerformancePriority`](../enumerations/ScenePerformancePriority.md)

#### Set Signature

> **set** **performancePriority**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L345)

##### Parameters

###### value

[`ScenePerformancePriority`](../enumerations/ScenePerformancePriority.md)

##### Returns

`void`

***

### pointerDownFastCheck

#### Get Signature

> **get** **pointerDownFastCheck**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1100)

Gets or sets a predicate used to select candidate meshes for a pointer down event

##### Returns

`boolean`

#### Set Signature

> **set** **pointerDownFastCheck**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1104)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### pointerDownPredicate

#### Get Signature

> **get** **pointerDownPredicate**(): (`Mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1067](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1067)

Gets or sets a predicate used to select candidate meshes for a pointer down event

##### Returns

> (`Mesh`): `boolean`

Gets or sets a predicate used to select candidate meshes for a pointer down event

###### Parameters

###### Mesh

[`AbstractMesh`](AbstractMesh.md)

###### Returns

`boolean`

#### Set Signature

> **set** **pointerDownPredicate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1071](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1071)

##### Parameters

###### value

(`Mesh`) => `boolean`

##### Returns

`void`

***

### pointerMoveFastCheck

#### Get Signature

> **get** **pointerMoveFastCheck**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1122)

Gets or sets a predicate used to select candidate meshes for a pointer move event

##### Returns

`boolean`

#### Set Signature

> **set** **pointerMoveFastCheck**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1126)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### pointerMovePredicate

#### Get Signature

> **get** **pointerMovePredicate**(): (`Mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1089](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1089)

Gets or sets a predicate used to select candidate meshes for a pointer move event

##### Returns

> (`Mesh`): `boolean`

Gets or sets a predicate used to select candidate meshes for a pointer move event

###### Parameters

###### Mesh

[`AbstractMesh`](AbstractMesh.md)

###### Returns

`boolean`

#### Set Signature

> **set** **pointerMovePredicate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1093](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1093)

##### Parameters

###### value

(`Mesh`) => `boolean`

##### Returns

`void`

***

### pointerUpFastCheck

#### Get Signature

> **get** **pointerUpFastCheck**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1111)

Gets or sets a predicate used to select candidate meshes for a pointer up event

##### Returns

`boolean`

#### Set Signature

> **set** **pointerUpFastCheck**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1115)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### pointerUpPredicate

#### Get Signature

> **get** **pointerUpPredicate**(): (`Mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1078](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1078)

Gets or sets a predicate used to select candidate meshes for a pointer up event

##### Returns

> (`Mesh`): `boolean`

Gets or sets a predicate used to select candidate meshes for a pointer up event

###### Parameters

###### Mesh

[`AbstractMesh`](AbstractMesh.md)

###### Returns

`boolean`

#### Set Signature

> **set** **pointerUpPredicate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1082](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1082)

##### Parameters

###### value

(`Mesh`) => `boolean`

##### Returns

`void`

***

### pointerX

#### Get Signature

> **get** **pointerX**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2159)

Gets or sets the current on-screen X position of the pointer

##### Returns

`number`

#### Set Signature

> **set** **pointerX**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2163)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### pointerY

#### Get Signature

> **get** **pointerY**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2170)

Gets or sets the current on-screen Y position of the pointer

##### Returns

`number`

#### Set Signature

> **set** **pointerY**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2174)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### prePass

#### Get Signature

> **get** **prePass**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1432)

Flag indicating that the frame buffer binding is handled by another component

##### Returns

`boolean`

***

### renderingManager

#### Get Signature

> **get** **renderingManager**(): [`RenderingManager`](RenderingManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1781](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1781)

Gets the scene's rendering manager

##### Returns

[`RenderingManager`](RenderingManager.md)

***

### shadowsEnabled

#### Get Signature

> **get** **shadowsEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1453](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1453)

##### Returns

`boolean`

#### Set Signature

> **set** **shadowsEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1446)

Gets or sets a boolean indicating if shadows are enabled on this scene

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### skeletonsEnabled

#### Get Signature

> **get** **skeletonsEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1612)

##### Returns

`boolean`

#### Set Signature

> **set** **skeletonsEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1604](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1604)

Gets or sets a boolean indicating if skeletons are enabled on this scene

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### skipFrustumClipping

#### Get Signature

> **get** **skipFrustumClipping**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:402](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L402)

##### Returns

`boolean`

#### Set Signature

> **set** **skipFrustumClipping**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L396)

Gets or sets a boolean indicating if we should skip the frustum clipping part of the active meshes selection

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### skipPointerDownPicking

#### Get Signature

> **get** **skipPointerDownPicking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1144)

Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer down event occurs.

##### Returns

`boolean`

#### Set Signature

> **set** **skipPointerDownPicking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1148)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### skipPointerMovePicking

#### Get Signature

> **get** **skipPointerMovePicking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1133)

Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer move event occurs.

##### Returns

`boolean`

#### Set Signature

> **set** **skipPointerMovePicking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1137)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### skipPointerUpPicking

#### Get Signature

> **get** **skipPointerUpPicking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1155)

Gets or sets a boolean indicating if the user want to entirely skip the picking phase when a pointer up event occurs.  Off by default.

##### Returns

`boolean`

#### Set Signature

> **set** **skipPointerUpPicking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1159)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### texturesEnabled

#### Get Signature

> **get** **texturesEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1546)

##### Returns

`boolean`

#### Set Signature

> **set** **texturesEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1538)

Gets or sets a boolean indicating if textures are enabled on this scene

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### totalActiveIndicesPerfCounter

#### Get Signature

> **get** **totalActiveIndicesPerfCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2249)

Gets the performance counter for active indices

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#instrumentation

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### totalVerticesPerfCounter

#### Get Signature

> **get** **totalVerticesPerfCounter**(): [`PerfCounter`](PerfCounter.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2233)

Gets the performance counter for total vertices

##### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimize_your_scene#instrumentation

##### Returns

[`PerfCounter`](PerfCounter.md)

***

### uid

#### Get Signature

> **get** **uid**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4403)

Return a unique id as a string which can serve as an identifier for the scene

##### Returns

`string`

***

### uniqueId

#### Get Signature

> **get** **uniqueId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2025](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2025)

Gets the unique id of the scene

##### Returns

`number`

***

### unTranslatedPointer

#### Get Signature

> **get** **unTranslatedPointer**(): [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1201)

Gets the pointer coordinates without any translation (ie. straight out of the pointer event)

##### Returns

[`Vector2`](Vector2.md)

***

### useRightHandedSystem

#### Get Signature

> **get** **useRightHandedSystem**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1327)

##### Returns

`boolean`

#### Set Signature

> **set** **useRightHandedSystem**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1320)

Gets or sets a boolean indicating if the scene must use right-handed coordinates system

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### DoubleClickDelay

#### Get Signature

> **get** `static` **DoubleClickDelay**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1230)

Time in milliseconds to wait to raise long press events if button is still pressed. Default is 300 ms

##### Returns

`number`

#### Set Signature

> **set** `static` **DoubleClickDelay**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1234)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### DragMovementThreshold

#### Get Signature

> **get** `static` **DragMovementThreshold**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1208)

Gets or sets the distance in pixel that you have to move to prevent some events. Default is 10 pixels

##### Returns

`number`

#### Set Signature

> **set** `static` **DragMovementThreshold**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1212)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ExclusiveDoubleClickMode

#### Get Signature

> **get** `static` **ExclusiveDoubleClickMode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1239)

If you need to check double click without raising a single click at first click, enable this flag

##### Returns

`boolean`

#### Set Signature

> **set** `static` **ExclusiveDoubleClickMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1243)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### LongPressDelay

#### Get Signature

> **get** `static` **LongPressDelay**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1219)

Time in milliseconds to wait to raise long press events if button is still pressed. Default is 500 ms

##### Returns

`number`

#### Set Signature

> **set** `static` **LongPressDelay**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1223)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### ~~addActionManager()~~

> **addActionManager**(`newActionManager`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3509](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3509)

Adds the given action manager to this scene

#### Parameters

##### newActionManager

[`AbstractActionManager`](AbstractActionManager.md)

The action manager to add

#### Returns

`void`

#### Deprecated

***

### addAnimation()

> **addAnimation**(`newAnimation`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3420)

Adds the given animation to this scene

#### Parameters

##### newAnimation

[`Animation`](Animation.md)

The animation to add

#### Returns

`void`

***

### addAnimationGroup()

> **addAnimationGroup**(`newAnimationGroup`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3431](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3431)

Adds the given animation group to this scene.

#### Parameters

##### newAnimationGroup

[`AnimationGroup`](AnimationGroup.md)

The animation group to add

#### Returns

`void`

***

### addCamera()

> **addCamera**(`newCamera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3371)

Adds the given camera to this scene

#### Parameters

##### newCamera

[`Camera`](Camera.md)

The camera to add

#### Returns

`void`

***

### addEffectLayer()

> **addEffectLayer**(`newEffectLayer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3565](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3565)

Adds the given effect layer to this scene.

#### Parameters

##### newEffectLayer

[`EffectLayer`](EffectLayer.md)

The effect layer to add

#### Returns

`void`

***

### addExternalData()

> **addExternalData**\<`T`\>(`key`, `data`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4418](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4418)

Add an externally attached data from its key.
This method call will fail and return false, if such key already exists.
If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### key

`string`

the unique key that identifies the data

##### data

`T`

the data object to associate to the key for this Engine instance

#### Returns

`boolean`

true if no such key were already present and the data was added successfully, false otherwise

***

### addFrameGraph()

> **addFrameGraph**(`newFrameGraph`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3529](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3529)

Adds the given frame graph to this scene.

#### Parameters

##### newFrameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph to add

#### Returns

`void`

***

### addGeometry()

> **addGeometry**(`newGeometry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3492](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3492)

Adds the given geometry to this scene

#### Parameters

##### newGeometry

[`Geometry`](Geometry.md)

The geometry to add

#### Returns

`void`

***

### addIsReadyCheck()

> **addIsReadyCheck**(`isReadyCheck`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2682](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2682)

Registers an object whose [isReady](#isready) method will be checked during [Scene.isReady](#isready).
Call [removeIsReadyCheck](#removeisreadycheck) to remove the object.

#### Parameters

##### isReadyCheck

defines the object to add.

###### isReady

#### Returns

`void`

***

### addLensFlareSystem()

> **addLensFlareSystem**(`newLensFlareSystem`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L41)

Adds the given lens flare system to this scene

#### Parameters

##### newLensFlareSystem

[`LensFlareSystem`](LensFlareSystem.md)

The lens flare system to add

#### Returns

`void`

***

### addLight()

> **addLight**(`newLight`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3334](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3334)

Adds the given light to this scene

#### Parameters

##### newLight

[`Light`](Light.md)

The light to add

#### Returns

`void`

***

### addMaterial()

> **addMaterial**(`newMaterial`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3460](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3460)

Adds the given material to this scene

#### Parameters

##### newMaterial

[`Material`](Material.md)

The material to add

#### Returns

`void`

***

### addMesh()

> **addMesh**(`newMesh`, `recursive?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2948](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2948)

Add a mesh to the list of scene's meshes

#### Parameters

##### newMesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to add

##### recursive?

`boolean` = `false`

if all child meshes should also be added to the scene

#### Returns

`void`

***

### addMorphTargetManager()

> **addMorphTargetManager**(`newMorphTargetManager`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3481](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3481)

Adds the given morph target to this scene

#### Parameters

##### newMorphTargetManager

[`MorphTargetManager`](MorphTargetManager.md)

The morph target to add

#### Returns

`void`

***

### addMultiMaterial()

> **addMultiMaterial**(`newMultiMaterial`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3446)

Adds the given multi-material to this scene

#### Parameters

##### newMultiMaterial

[`MultiMaterial`](MultiMaterial.md)

The multi-material to add

#### Returns

`void`

***

### addObjectRenderer()

> **addObjectRenderer**(`objectRenderer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3540)

Adds the given object renderer to this scene.

#### Parameters

##### objectRenderer

[`ObjectRenderer`](ObjectRenderer.md)

The object renderer to add

#### Returns

`void`

***

### addParticleSystem()

> **addParticleSystem**(`newParticleSystem`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3405](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3405)

Adds the given particle system to this scene

#### Parameters

##### newParticleSystem

[`IParticleSystem`](../interfaces/IParticleSystem.md)

The particle system to add

#### Returns

`void`

***

### addPendingData()

> **addPendingData**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2641](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2641)

This function can help adding any object to the list of data awaited to be ready in order to check for a complete scene loading.

#### Parameters

##### data

`any`

defines the object to wait for

#### Returns

`void`

***

### addPostProcess()

> **addPostProcess**(`newPostProcess`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3551)

Adds the given post process to this scene.

#### Parameters

##### newPostProcess

[`PostProcess`](PostProcess.md)

The post process to add

#### Returns

`void`

***

### addReflectionProbe()

> **addReflectionProbe**(`newReflectionProbe`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L32)

Adds the given reflection probe to this scene.

#### Parameters

##### newReflectionProbe

[`ReflectionProbe`](ReflectionProbe.md)

The reflection probe to add

#### Returns

`void`

***

### addSkeleton()

> **addSkeleton**(`newSkeleton`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3390)

Adds the given skeleton to this scene

#### Parameters

##### newSkeleton

[`Skeleton`](Skeleton.md)

The skeleton to add

#### Returns

`void`

***

### addTexture()

> **addTexture**(`newTexture`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3517](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3517)

Adds the given texture to this scene.

#### Parameters

##### newTexture

[`BaseTexture`](BaseTexture.md)

The texture to add

#### Returns

`void`

***

### addTransformNode()

> **addTransformNode**(`newTransformNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3008](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3008)

Add a transform node to the list of scene's transform nodes

#### Parameters

##### newTransformNode

[`TransformNode`](TransformNode.md)

defines the transform node to add

#### Returns

`void`

***

### animate()

> **animate**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5288](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5288)

Execute all animations (for a frame)

#### Returns

`void`

***

### attachControl()

> **attachControl**(`attachUp?`, `attachDown?`, `attachMove?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2378](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2378)

Attach events to the canvas (To handle actionManagers triggers and raise onPointerMove, onPointerDown and onPointerUp

#### Parameters

##### attachUp?

`boolean` = `true`

defines if you want to attach events to pointerup

##### attachDown?

`boolean` = `true`

defines if you want to attach events to pointerdown

##### attachMove?

`boolean` = `true`

defines if you want to attach events to pointermove

#### Returns

`void`

***

### beginAnimation()

> **beginAnimation**(`target`, `from`, `to`, `loop?`, `speedRatio?`, `onAnimationEnd?`, `animatable?`, `stopCurrent?`, `targetMask?`, `onAnimationLoop?`, `isAdditive?`): [`Animatable`](Animatable.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L65)

Will start the animation sequence of a given target

Note that it is possible that the value(s) of speedRatio from and to will be changed if the animation is inverted

#### Parameters

##### target

`any`

defines the target

##### from

`number`

defines from which frame should animation start

##### to

`number`

defines until which frame should animation run.

##### loop?

`boolean`

defines if the animation loops

##### speedRatio?

`number`

defines the speed in which to run the animation (1.0 by default)

##### onAnimationEnd?

() => `void`

defines the function to be executed when the animation ends

##### animatable?

[`Animatable`](Animatable.md)

defines an animatable object. If not provided a new one will be created from the given params

##### stopCurrent?

`boolean`

defines if the current animations must be stopped first (true by default)

##### targetMask?

(`target`) => `boolean`

defines if the target should be animate if animations are present (this is called recursively on descendant animatables regardless of return value)

##### onAnimationLoop?

() => `void`

defines the callback to call when an animation loops

##### isAdditive?

`boolean`

defines whether the animation should be evaluated additively (false by default)

#### Returns

[`Animatable`](Animatable.md)

the animatable object created for this animation

***

### beginDirectAnimation()

> **beginDirectAnimation**(`target`, `animations`, `from`, `to`, `loop?`, `speedRatio?`, `onAnimationEnd?`, `onAnimationLoop?`, `isAdditive?`): [`Animatable`](Animatable.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L125)

Begin a new animation on a given node

Note that it is possible that the value(s) of speedRatio from and to will be changed if the animation is inverted

#### Parameters

##### target

`any`

defines the target where the animation will take place

##### animations

[`Animation`](Animation.md)[]

defines the list of animations to start

##### from

`number`

defines the initial value

##### to

`number`

defines the final value

##### loop?

`boolean`

defines if you want animation to loop (off by default)

##### speedRatio?

`number`

defines the speed ratio to apply to all animations

##### onAnimationEnd?

() => `void`

defines the callback to call when an animation ends (will be called once per node)

##### onAnimationLoop?

() => `void`

defines the callback to call when an animation loops

##### isAdditive?

`boolean`

defines whether the animation should be evaluated additively (false by default)

#### Returns

[`Animatable`](Animatable.md)

the list of created animatables

***

### beginDirectHierarchyAnimation()

> **beginDirectHierarchyAnimation**(`target`, `directDescendantsOnly`, `animations`, `from`, `to`, `loop?`, `speedRatio?`, `onAnimationEnd?`, `onAnimationLoop?`, `isAdditive?`): [`Animatable`](Animatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L151)

Begin a new animation on a given node and its hierarchy

#### Parameters

##### target

[`Node`](Node.md)

defines the root node where the animation will take place

##### directDescendantsOnly

`boolean`

if true only direct descendants will be used, if false direct and also indirect (children of children, an so on in a recursive manner) descendants will be used.

##### animations

[`Animation`](Animation.md)[]

defines the list of animations to start

##### from

`number`

defines the initial value

##### to

`number`

defines the final value

##### loop?

`boolean`

defines if you want animation to loop (off by default)

##### speedRatio?

`number`

defines the speed ratio to apply to all animations

##### onAnimationEnd?

() => `void`

defines the callback to call when an animation ends (will be called once per node)

##### onAnimationLoop?

() => `void`

defines the callback to call when an animation loops

##### isAdditive?

`boolean`

defines whether the animation should be evaluated additively (false by default)

#### Returns

[`Animatable`](Animatable.md)[]

the list of animatables created for all nodes

***

### beginHierarchyAnimation()

> **beginHierarchyAnimation**(`target`, `directDescendantsOnly`, `from`, `to`, `loop?`, `speedRatio?`, `onAnimationEnd?`, `animatable?`, `stopCurrent?`, `targetMask?`, `onAnimationLoop?`, `isAdditive?`): [`Animatable`](Animatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L95)

Will start the animation sequence of a given target and its hierarchy

#### Parameters

##### target

`any`

defines the target

##### directDescendantsOnly

`boolean`

if true only direct descendants will be used, if false direct and also indirect (children of children, an so on in a recursive manner) descendants will be used.

##### from

`number`

defines from which frame should animation start

##### to

`number`

defines until which frame should animation run.

##### loop?

`boolean`

defines if the animation loops

##### speedRatio?

`number`

defines the speed in which to run the animation (1.0 by default)

##### onAnimationEnd?

() => `void`

defines the function to be executed when the animation ends

##### animatable?

[`Animatable`](Animatable.md)

defines an animatable object. If not provided a new one will be created from the given params

##### stopCurrent?

`boolean`

defines if the current animations must be stopped first (true by default)

##### targetMask?

(`target`) => `boolean`

defines if the target should be animated if animations are present (this is called recursively on descendant animatables regardless of return value)

##### onAnimationLoop?

() => `void`

defines the callback to call when an animation loops

##### isAdditive?

`boolean`

defines whether the animation should be evaluated additively (false by default)

#### Returns

[`Animatable`](Animatable.md)[]

the list of created animatables

***

### beginWeightedAnimation()

> **beginWeightedAnimation**(`target`, `from`, `to`, `weight`, `loop?`, `speedRatio?`, `onAnimationEnd?`, `animatable?`, `targetMask?`, `onAnimationLoop?`, `isAdditive?`): [`Animatable`](Animatable.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L34)

Will start the animation sequence of a given target

#### Parameters

##### target

`any`

defines the target

##### from

`number`

defines from which frame should animation start

##### to

`number`

defines until which frame should animation run.

##### weight

`number`

defines the weight to apply to the animation (1.0 by default)

##### loop?

`boolean`

defines if the animation loops

##### speedRatio?

`number`

defines the speed in which to run the animation (1.0 by default)

##### onAnimationEnd?

() => `void`

defines the function to be executed when the animation ends

##### animatable?

[`Animatable`](Animatable.md)

defines an animatable object. If not provided a new one will be created from the given params

##### targetMask?

(`target`) => `boolean`

defines if the target should be animated if animations are present (this is called recursively on descendant animatables regardless of return value)

##### onAnimationLoop?

() => `void`

defines the callback to call when an animation loops

##### isAdditive?

`boolean`

defines whether the animation should be evaluated additively (false by default)

#### Returns

[`Animatable`](Animatable.md)

the animatable object created for this animation

***

### bindEyePosition()

> **bindEyePosition**(`effect`, `variableName?`, `isVector3?`): [`Vector4`](Vector4.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1261)

Bind the current view position to an effect.

#### Parameters

##### effect

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

The effect to be bound

##### variableName?

`string` = `"vEyePosition"`

name of the shader variable that will hold the eye position

##### isVector3?

`boolean` = `false`

true to indicates that variableName is a Vector3 and not a Vector4

#### Returns

[`Vector4`](Vector4.md)

the computed eye position in a temp vector, caller can copy values as needed

***

### cleanCachedTextureBuffer()

> **cleanCachedTextureBuffer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5999](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5999)

This function will remove the local cached buffer data from texture.
It will save memory but will prevent the texture from being rebuilt

#### Returns

`void`

***

### clearCachedVertexData()

> **clearCachedVertexData**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5984](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5984)

Call this function to reduce memory footprint of the scene.
Vertex buffers will not store CPU data anymore (this will prevent picking, collisions or physics to work correctly)

#### Returns

`void`

***

### createDefaultCamera()

> **createDefaultCamera**(`createArcRotateCamera?`, `replace?`, `attachCameraControls?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/sceneHelpers.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/sceneHelpers.ts#L44)

Creates a default camera for the scene.

#### Parameters

##### createArcRotateCamera?

`boolean`

has the default false which creates a free camera, when true creates an arc rotate camera

##### replace?

`boolean`

has default false, when true replaces the active camera in the scene

##### attachCameraControls?

`boolean`

has default false, when true attaches camera controls to the canvas.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/fastBuildWorld#create-default-camera

***

### createDefaultCameraOrLight()

> **createDefaultCameraOrLight**(`createArcRotateCamera?`, `replace?`, `attachCameraControls?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/sceneHelpers.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/sceneHelpers.ts#L53)

Creates a default camera and a default light.

#### Parameters

##### createArcRotateCamera?

`boolean`

has the default false which creates a free camera, when true creates an arc rotate camera

##### replace?

`boolean`

has the default false, when true replaces the active camera/light in the scene

##### attachCameraControls?

`boolean`

has the default false, when true attaches camera controls to the canvas.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/fastBuildWorld#create-default-camera-or-light

***

### createDefaultEnvironment()

> **createDefaultEnvironment**(`options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`EnvironmentHelper`](EnvironmentHelper.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/sceneHelpers.ts:73](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/sceneHelpers.ts#L73)

Creates a new environment

#### Parameters

##### options?

`Partial`\<[`IEnvironmentHelperOptions`](../interfaces/IEnvironmentHelperOptions.md)\>

defines the options you can use to configure the environment

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`EnvironmentHelper`](EnvironmentHelper.md)\>

the new EnvironmentHelper

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/fastBuildWorld#create-default-environment

***

### createDefaultLight()

> **createDefaultLight**(`replace?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/sceneHelpers.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/sceneHelpers.ts#L35)

Creates a default light for the scene.

#### Parameters

##### replace?

`boolean`

has the default false, when true replaces the existing lights in the scene with a hemispheric light

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/fastBuildWorld#create-default-light

***

### createDefaultSkybox()

> **createDefaultSkybox**(`environmentTexture?`, `pbr?`, `scale?`, `blur?`, `setGlobalEnvTexture?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/sceneHelpers.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/sceneHelpers.ts#L65)

Creates a new sky box

#### Parameters

##### environmentTexture?

[`BaseTexture`](BaseTexture.md)

defines the texture to use as environment texture

##### pbr?

`boolean`

has default false which requires the StandardMaterial to be used, when true PBRMaterial must be used

##### scale?

`number`

defines the overall scale of the skybox

##### blur?

`number`

is only available when pbr is true, default is 0, no blur, maximum value is 1

##### setGlobalEnvTexture?

`boolean`

has default true indicating that scene.environmentTexture must match the current skybox texture

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

a new mesh holding the sky box

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/fastBuildWorld#create-default-skybox

***

### ~~createDefaultVRExperience()~~

> **createDefaultVRExperience**(`webVROptions?`): [`VRExperienceHelper`](VRExperienceHelper.md)

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/sceneHelpers.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/sceneHelpers.ts#L82)

Creates a new VREXperienceHelper

#### Parameters

##### webVROptions?

[`VRExperienceHelperOptions`](../interfaces/VRExperienceHelperOptions.md)

defines the options used to create the new VREXperienceHelper

#### Returns

[`VRExperienceHelper`](VRExperienceHelper.md)

a new VREXperienceHelper

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/webVRHelper

#### Deprecated

Please use createDefaultXRExperienceAsync instead

***

### createDefaultXRExperienceAsync()

> **createDefaultXRExperienceAsync**(`options?`): `Promise`\<[`WebXRDefaultExperience`](WebXRDefaultExperience.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/sceneHelpers.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/sceneHelpers.ts#L90)

Creates a new WebXRDefaultExperience

#### Parameters

##### options?

[`WebXRDefaultExperienceOptions`](WebXRDefaultExperienceOptions.md)

experience options

#### Returns

`Promise`\<[`WebXRDefaultExperience`](WebXRDefaultExperience.md)\>

a promise for a new WebXRDefaultExperience

#### See

https://doc.babylonjs.com/features/featuresDeepDive/webXR/introToWebXR

***

### createOrUpdateSelectionOctree()

> **createOrUpdateSelectionOctree**(`maxCapacity?`, `maxDepth?`): [`Octree`](Octree.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/Octrees/octreeSceneComponent.ts#L36)

Creates or updates the octree used to boost selection (picking)

#### Parameters

##### maxCapacity?

`number`

defines the maximum capacity per leaf

##### maxDepth?

`number`

defines the maximum depth of the octree

#### Returns

[`Octree`](Octree.md)\<[`AbstractMesh`](AbstractMesh.md)\>

an octree of AbstractMesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeOctrees

***

### createPickingRay()

> **createPickingRay**(`x`, `y`, `world`, `camera`, `cameraViewSpace?`): [`Ray`](Ray.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6056](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6056)

Creates a ray that can be used to pick in the scene

#### Parameters

##### x

`number`

defines the x coordinate of the origin (on-screen)

##### y

`number`

defines the y coordinate of the origin (on-screen)

##### world

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use if you want to pick in object space (instead of world space)

##### camera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

defines the camera to use for the picking

##### cameraViewSpace?

`boolean` = `false`

defines if picking will be done in view space (false by default)

#### Returns

[`Ray`](Ray.md)

a Ray

***

### createPickingRayInCameraSpace()

> **createPickingRayInCameraSpace**(`x`, `y`, `camera?`): [`Ray`](Ray.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6092](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6092)

Creates a ray that can be used to pick in the scene

#### Parameters

##### x

`number`

defines the x coordinate of the origin (on-screen)

##### y

`number`

defines the y coordinate of the origin (on-screen)

##### camera?

[`Camera`](Camera.md)

defines the camera to use for the picking

#### Returns

[`Ray`](Ray.md)

a Ray

***

### createPickingRayInCameraSpaceToRef()

> **createPickingRayInCameraSpaceToRef**(`x`, `y`, `result`, `camera?`): `Scene`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6105)

Creates a ray that can be used to pick in the scene

#### Parameters

##### x

`number`

defines the x coordinate of the origin (on-screen)

##### y

`number`

defines the y coordinate of the origin (on-screen)

##### result

[`Ray`](Ray.md)

defines the ray where to store the picking ray

##### camera?

[`Camera`](Camera.md)

defines the camera to use for the picking

#### Returns

`Scene`

the current scene

***

### createPickingRayToRef()

> **createPickingRayToRef**(`x`, `y`, `world`, `result`, `camera`, `cameraViewSpace?`, `enableDistantPicking?`): `Scene`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6072](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6072)

Creates a ray that can be used to pick in the scene

#### Parameters

##### x

`number`

defines the x coordinate of the origin (on-screen)

##### y

`number`

defines the y coordinate of the origin (on-screen)

##### world

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use if you want to pick in object space (instead of world space)

##### result

[`Ray`](Ray.md)

defines the ray where to store the picking ray

##### camera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

defines the camera to use for the picking

##### cameraViewSpace?

`boolean` = `false`

defines if picking will be done in view space (false by default)

##### enableDistantPicking?

`boolean` = `false`

defines if picking should handle large values for mesh position/scaling (false by default)

#### Returns

`Scene`

the current scene

***

### createSceneUniformBuffer()

#### Call Signature

> **createSceneUniformBuffer**(`name?`, `trackUBOsInFrame?`): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2890](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2890)

Creates a scene UBO

##### Parameters

###### name?

`string`

name of the uniform buffer (optional, for debugging purpose only)

###### trackUBOsInFrame?

`boolean`

define if the UBOs should be tracked in the frame (default: undefined - will use the value from Engine._features.trackUbosInFrame)

##### Returns

[`UniformBuffer`](UniformBuffer.md)

a new ubo

#### Call Signature

> **createSceneUniformBuffer**(`name?`, `options?`): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2897](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2897)

Creates a scene UBO

##### Parameters

###### name?

`string`

name of the uniform buffer (optional, for debugging purpose only)

###### options?

[`ICreateSceneUboOptions`](../interfaces/ICreateSceneUboOptions.md)

options for creating the scene uniform buffer

##### Returns

[`UniformBuffer`](UniformBuffer.md)

a new ubo

***

### deleteCompoundImpostor()

> **deleteCompoundImpostor**(`compound`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts#L51)

Deletes a physics compound impostor

#### Parameters

##### compound

`any`

defines the compound to delete

#### Returns

`void`

***

### detachControl()

> **detachControl**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2383](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2383)

Detaches all event handlers

#### Returns

`void`

***

### disableDepthRenderer()

> **disableDepthRenderer**(`camera?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRendererSceneComponent.ts#L40)

Disables a depth renderer for a given camera

#### Parameters

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera to disable the depth renderer on (default: scene's active camera)

#### Returns

`void`

***

### disableFluidRenderer()

> **disableFluidRenderer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L40)

Disables the fluid renderer associated with the scene

#### Returns

`void`

***

### disableGeometryBufferRenderer()

> **disableGeometryBufferRenderer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRendererSceneComponent.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/geometryBufferRendererSceneComponent.ts#L37)

Disables the GeometryBufferRender associated with the scene

#### Returns

`void`

***

### disableIblCdfGenerator()

> **disableIblCdfGenerator**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L31)

Disables the GeometryBufferRender associated with the scene

#### Returns

`void`

***

### disablePhysicsEngine()

> **disablePhysicsEngine**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts#L39)

Disables and disposes the physics engine associated with the scene

#### Returns

`void`

***

### disablePrePassRenderer()

> **disablePrePassRenderer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/prePassRendererSceneComponent.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/prePassRendererSceneComponent.ts#L34)

Disables the prepass associated with the scene

#### Returns

`void`

***

### disableSubSurfaceForPrePass()

> **disableSubSurfaceForPrePass**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/subSurfaceSceneComponent.ts#L42)

Disables the subsurface effect for prepass

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5732](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5732)

Releases all held resources

#### Returns

`void`

***

### enableDepthRenderer()

> **enableDepthRenderer**(`camera?`, `storeNonLinearDepth?`, `force32bitsFloat?`, `samplingMode?`, `storeCameraSpaceZ?`, `existingRenderTargetTexture?`): [`DepthRenderer`](DepthRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/depthRendererSceneComponent.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/depthRendererSceneComponent.ts#L27)

Creates a depth renderer a given camera which contains a depth map which can be used for post processing.

#### Parameters

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

The camera to create the depth renderer on (default: scene's active camera)

##### storeNonLinearDepth?

`boolean`

Defines whether the depth is stored linearly like in Babylon Shadows or directly like glFragCoord.z

##### force32bitsFloat?

`boolean`

Forces 32 bits float when supported (else 16 bits float is prioritized over 32 bits float if supported)

##### samplingMode?

`number`

The sampling mode to be used with the render target (Linear, Nearest...)

##### storeCameraSpaceZ?

`boolean`

Defines whether the depth stored is the Z coordinate in camera space. If true, storeNonLinearDepth has no effect. (Default: false)

##### existingRenderTargetTexture?

[`RenderTargetTexture`](RenderTargetTexture.md)

An existing render target texture to use (default: undefined). If not provided, a new render target texture will be created.

#### Returns

[`DepthRenderer`](DepthRenderer.md)

the created depth renderer

***

### enableFluidRenderer()

> **enableFluidRenderer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`FluidRenderer`](FluidRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.ts#L35)

Enables the fluid renderer and associates it with the scene

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FluidRenderer`](FluidRenderer.md)\>

the FluidRenderer

***

### enableGeometryBufferRenderer()

> **enableGeometryBufferRenderer**(`ratioOrDimensions?`, `depthFormat?`, `textureTypesAndFormats?`): [`Nullable`](../type-aliases/Nullable.md)\<[`GeometryBufferRenderer`](GeometryBufferRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/geometryBufferRendererSceneComponent.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/geometryBufferRendererSceneComponent.ts#L28)

Enables a GeometryBufferRender and associates it with the scene

#### Parameters

##### ratioOrDimensions?

`number` \| \{ `height`: `number`; `width`: `number`; \}

defines the scaling ratio to apply to the renderer (1 by default which means same resolution). You can also directly pass a width and height for the generated textures

##### depthFormat?

`number`

Format of the depth texture (default: Constants.TEXTUREFORMAT_DEPTH16)

##### textureTypesAndFormats?

The types, formats and optional sampling modes of textures to create as render targets.
If not provided, all textures will be RGBA and float or half float, depending on the engine capabilities.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`GeometryBufferRenderer`](GeometryBufferRenderer.md)\>

the GeometryBufferRenderer

***

### enableIblCdfGenerator()

> **enableIblCdfGenerator**(): [`Nullable`](../type-aliases/Nullable.md)\<[`IblCdfGenerator`](IblCdfGenerator.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L26)

Enables a IblCdfGenerator and associates it with the scene.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IblCdfGenerator`](IblCdfGenerator.md)\>

the IblCdfGenerator

***

### enablePhysics()

> **enablePhysics**(`gravity?`, `plugin?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts#L34)

Enables physics to the current scene

#### Parameters

##### gravity?

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

defines the scene's gravity for the physics engine. defaults to real earth gravity : (0, -9.81, 0)

##### plugin?

`IPhysicsEnginePlugin` \| `IPhysicsEnginePluginV2`

defines the physics engine to be used. defaults to CannonJS.

#### Returns

`boolean`

a boolean indicating if the physics engine was initialized

***

### enablePrePassRenderer()

> **enablePrePassRenderer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PrePassRenderer`](PrePassRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/prePassRendererSceneComponent.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/prePassRendererSceneComponent.ts#L29)

Enables the prepass and associates it with the scene

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PrePassRenderer`](PrePassRenderer.md)\>

the PrePassRenderer

***

### enableSubSurfaceForPrePass()

> **enableSubSurfaceForPrePass**(): [`Nullable`](../type-aliases/Nullable.md)\<`SubSurfaceConfiguration`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/subSurfaceSceneComponent.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/subSurfaceSceneComponent.ts#L37)

Enables the subsurface effect for prepass

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`SubSurfaceConfiguration`\>

the SubSurfaceConfiguration

***

### executeOnceBeforeRender()

> **executeOnceBeforeRender**(`func`, `timeout?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2627](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2627)

The provided function will run before render once and will be disposed afterwards.
A timeout delay can be provided so that the function will be executed in N ms.
The timeout is using the browser's native setTimeout so time percision cannot be guaranteed.

#### Parameters

##### func

() => `void`

The function to be executed.

##### timeout?

`number`

optional delay in ms

#### Returns

`void`

***

### executeWhenReady()

> **executeWhenReady**(`func`, `checkRenderTargets?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2704](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2704)

Registers a function to be executed when the scene is ready

#### Parameters

##### func

() => `void`

the function to be executed

##### checkRenderTargets?

`boolean` = `false`

true to also check that the meshes rendered as part of a render target are ready (default: false)

#### Returns

`void`

***

### finalizeSceneUbo()

> **finalizeSceneUbo**(): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1285)

Update the scene ubo before it can be used in rendering processing

#### Returns

[`UniformBuffer`](UniformBuffer.md)

the scene UniformBuffer

***

### freeActiveMeshes()

> **freeActiveMeshes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4516](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4516)

Clear the active meshes smart array preventing retention point in mesh dispose.

#### Returns

`void`

***

### freeProcessedMaterials()

> **freeProcessedMaterials**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4485](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4485)

Clear the processed materials smart array preventing retention point in material dispose.

#### Returns

`void`

***

### freeRenderingGroups()

> **freeRenderingGroups**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4538)

Clear the info related to rendering groups preventing retention points during dispose.

#### Returns

`void`

***

### freezeActiveMeshes()

> **freezeActiveMeshes**(`skipEvaluateActiveMeshes?`, `onSuccess?`, `onError?`, `freezeMeshes?`, `keepFrustumCulling?`): `Scene`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4597)

Use this function to stop evaluating active meshes. The current list will be keep alive between frames

#### Parameters

##### skipEvaluateActiveMeshes?

`boolean` = `false`

defines an optional boolean indicating that the evaluate active meshes step must be completely skipped

##### onSuccess?

() => `void`

optional success callback

##### onError?

(`message`) => `void`

optional error callback

##### freezeMeshes?

`boolean` = `true`

defines if meshes should be frozen (true by default)

##### keepFrustumCulling?

`boolean` = `false`

defines if you want to keep running the frustum clipping (false by default)

#### Returns

`Scene`

the current scene

***

### freezeMaterials()

> **freezeMaterials**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5713](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5713)

Freeze all materials
A frozen material will not be updatable but should be faster to render
Note: multimaterials will not be frozen, but their submaterials will

#### Returns

`void`

***

### getActiveBones()

> **getActiveBones**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2273)

Gets the total number of active bones rendered per frame

#### Returns

`number`

the total number of active bones rendered per frame

***

### getActiveIndices()

> **getActiveIndices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2241)

Gets the total number of active indices rendered per frame (You can deduce the number of rendered triangles by dividing this number by 3)

#### Returns

`number`

the total number of active indices rendered per frame

***

### getActiveMeshes()

> **getActiveMeshes**(): [`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2289)

Gets the array of active meshes

#### Returns

[`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

an array of AbstractMesh

***

### getActiveParticles()

> **getActiveParticles**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2257)

Gets the total number of active particles rendered per frame

#### Returns

`number`

the total number of active particles rendered per frame

***

### getAllAnimatablesByTarget()

> **getAllAnimatablesByTarget**(`target`): [`Animatable`](Animatable.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L176)

Gets all animatables associated with a given target

#### Parameters

##### target

`any`

defines the target to look animatables for

#### Returns

[`Animatable`](Animatable.md)[]

an array of Animatables

***

### getAnimatableByTarget()

> **getAnimatableByTarget**(`target`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L169)

Gets the animatable associated with a specific target

#### Parameters

##### target

`any`

defines the target of the animatable

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

the required animatable if found

***

### getAnimationGroupByName()

> **getAnimationGroupByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroup`](AnimationGroup.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3633](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3633)

get an animation group using its name

#### Parameters

##### name

`string`

defines the material's name

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroup`](AnimationGroup.md)\>

the animation group or null if none found.

***

### getAnimationRatio()

> **getAnimationRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2297)

Gets the animation ratio (which is 1.0 is the scene renders at 60fps and 2 if the scene renders at 30fps, etc.)

#### Returns

`number`

a number

***

### getAutoClearDepthStencilSetup()

> **getAutoClearDepthStencilSetup**(`index`): [`IRenderingManagerAutoClearSetup`](../interfaces/IRenderingManagerAutoClearSetup.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6356)

Gets the current auto clear configuration for one rendering group of the rendering
manager.

#### Parameters

##### index

`number`

the rendering group index to get the information for

#### Returns

[`IRenderingManagerAutoClearSetup`](../interfaces/IRenderingManagerAutoClearSetup.md)

The auto clear setup for the requested rendering group

***

### getBoneById()

> **getBoneById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3807](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3807)

Gets a bone using its Id

#### Parameters

##### id

`string`

defines the bone's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

the bone or null if not found

***

### ~~getBoneByID()~~

> **getBoneByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6636](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6636)

Gets a bone using its Id

#### Parameters

##### id

`string`

defines the bone's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

the bone or null if not found

#### Deprecated

Please use getBoneById instead

***

### getBoneByName()

> **getBoneByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3825](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3825)

Gets a bone using its id

#### Parameters

##### name

`string`

defines the bone's name

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

the bone or null if not found

***

### getBoundingBoxRenderer()

> **getBoundingBoxRenderer**(): [`BoundingBoxRenderer`](BoundingBoxRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/boundingBoxRenderer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/boundingBoxRenderer.ts#L42)

Gets the bounding box renderer associated with the scene

#### Returns

[`BoundingBoxRenderer`](BoundingBoxRenderer.md)

a BoundingBoxRenderer

***

### getCachedEffect()

> **getCachedEffect**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2190)

Gets the cached effect (ie. the latest rendered one)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

the cached effect

***

### getCachedMaterial()

> **getCachedMaterial**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2182](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2182)

Gets the cached material (ie. the latest rendered one)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the cached material

***

### getCachedVisibility()

> **getCachedVisibility**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2198)

Gets the cached visibility state (ie. the latest rendered one)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

the cached visibility state

***

### getCameraById()

> **getCameraById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3762)

Gets a camera using its Id

#### Parameters

##### id

`string`

defines the Id to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the camera or null if not found

***

### ~~getCameraByID()~~

> **getCameraByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6616](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6616)

Gets a camera using its Id

#### Parameters

##### id

`string`

defines the Id to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the camera or null if not found

#### Deprecated

Please use getCameraById instead

***

### getCameraByName()

> **getCameraByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3792](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3792)

Gets a camera using its name

#### Parameters

##### name

`string`

defines the camera's name

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the camera or null if none found.

***

### getCameraByUniqueId()

> **getCameraByUniqueId**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3777](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3777)

Gets a camera using its unique Id

#### Parameters

##### uniqueId

`number`

defines the unique Id to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the camera or null if not found

***

### ~~getCameraByUniqueID()~~

> **getCameraByUniqueID**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6626](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6626)

Gets a camera using its unique Id

#### Parameters

##### uniqueId

`number`

defines the unique Id to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the camera or null if not found

#### Deprecated

Please use getCameraByUniqueId instead

***

### getCamerasByTags()

> **getCamerasByTags**(`tagsQuery`, `filter?`): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6286)

Get a list of cameras by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`camera`) => `boolean`

defines a predicate used to filter results

#### Returns

[`Camera`](Camera.md)[]

an array of Camera

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2105)

Gets a string identifying the name of the class

#### Returns

`string`

"Scene" string

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2217)

Gets the engine associated with the scene

#### Returns

[`AbstractEngine`](AbstractEngine.md)

an Engine

***

### getExternalData()

> **getExternalData**\<`T`\>(`key`): [`Nullable`](../type-aliases/Nullable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4430)

Get an externally attached data from its key

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

the unique key that identifies the data

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`T`\>

the associated data, if present (can be null), or undefined if not present

***

### getFrameGraphByName()

> **getFrameGraphByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraph`](FrameGraph.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3935](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3935)

Gets a frame graph using its name

#### Parameters

##### name

`string`

defines the frame graph's name

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`FrameGraph`](FrameGraph.md)\>

the frame graph or null if none found.

***

### getFrameId()

> **getFrameId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2313)

Gets an unique Id for the current frame

#### Returns

`number`

a number

***

### getGeometries()

> **getGeometries**(): [`Geometry`](Geometry.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4008](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4008)

Gets the list of geometries attached to the scene

#### Returns

[`Geometry`](Geometry.md)[]

an array of Geometry

***

### getGeometryById()

> **getGeometryById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3903](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3903)

Gets a geometry using its Id

#### Parameters

##### id

`string`

defines the geometry's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

the geometry or null if none found.

***

### ~~getGeometryByID()~~

> **getGeometryByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6676](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6676)

Gets a geometry using its Id

#### Parameters

##### id

`string`

defines the geometry's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Geometry`](Geometry.md)\>

the geometry or null if none found.

#### Deprecated

Please use getGeometryById instead

***

### getGlowLayerByName()

> **getGlowLayerByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`GlowLayer`](GlowLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/glowLayer.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/glowLayer.ts#L33)

Return the first glow layer of the scene with a given name.

#### Parameters

##### name

`string`

The name of the glow layer to look for.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`GlowLayer`](GlowLayer.md)\>

The glow layer if found otherwise null.

***

### getHighlightLayerByName()

> **getHighlightLayerByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`HighlightLayer`](HighlightLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/highlightLayer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/highlightLayer.ts#L40)

Return a the first highlight layer of the scene with a given name.

#### Parameters

##### name

`string`

The name of the highlight layer to look for.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`HighlightLayer`](HighlightLayer.md)\>

The highlight layer if found otherwise null.

***

### getInternalStep()

> **getInternalStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1359)

Gets the internal step used by deterministic lock step

#### Returns

`number`

the internal step

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### getInverseProjectionMatrix()

> **getInverseProjectionMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2821](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2821)

Gets the current inverse projection matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix

***

### getLastEntryById()

> **getLastEntryById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4129)

Gets a the last added node (Mesh, Camera, Light, Bone) using a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

the found node or null if not found at all

***

### ~~getLastEntryByID()~~

> **getLastEntryByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6766](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6766)

Gets a the last added node (Mesh, Camera, Light) using a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

the found node or null if not found at all

#### Deprecated

Please use getLastEntryById instead

***

### getLastMaterialById()

> **getLastMaterialById**(`id`, `allowMultiMaterials?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3710](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3710)

Gets a last added material using a given id

#### Parameters

##### id

`string`

defines the material's id

##### allowMultiMaterials?

`boolean` = `false`

determines whether multimaterials should be considered

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the last material with the given id or null if none found.

***

### ~~getLastMaterialByID()~~

> **getLastMaterialByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6595](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6595)

Gets a the last added material using a given id

#### Parameters

##### id

`string`

defines the material's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the last material with the given id or null if none found.

#### Deprecated

Please use getLastMaterialById instead

***

### getLastMeshById()

> **getLastMeshById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4099](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4099)

Gets a the last added mesh using a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the found mesh or null if not found at all.

***

### ~~getLastMeshByID()~~

> **getLastMeshByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6706](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6706)

Gets a the last added mesh using a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the found mesh or null if not found at all.

#### Deprecated

Please use getLastMeshById instead

***

### getLastSkeletonById()

> **getLastSkeletonById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4270)

Gets a skeleton using a given Id (if many are found, this function will pick the last one)

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

the found skeleton or null if not found at all.

***

### ~~getLastSkeletonByID()~~

> **getLastSkeletonByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6776](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6776)

Gets a skeleton using a given Id (if many are found, this function will pick the last one)

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

the found skeleton or null if not found at all.

#### Deprecated

Please use getLastSkeletonById instead

***

### getLastTransformNodeById()

> **getLastTransformNodeById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4114)

Gets a the last transform node using a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

the found mesh or null if not found at all.

***

### getLensFlareSystemById()

> **getLensFlareSystemById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`LensFlareSystem`](LensFlareSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L64)

Gets a lens flare system using its Id

#### Parameters

##### id

`string`

defines the Id to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`LensFlareSystem`](LensFlareSystem.md)\>

the lens flare system or null if not found

***

### ~~getLensFlareSystemByID()~~

> **getLensFlareSystemByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`LensFlareSystem`](LensFlareSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L57)

Gets a lens flare system using its Id

#### Parameters

##### id

`string`

defines the Id to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`LensFlareSystem`](LensFlareSystem.md)\>

the lens flare system or null if not found

#### Deprecated

Please use getLensFlareSystemById instead

***

### getLensFlareSystemByName()

> **getLensFlareSystemByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`LensFlareSystem`](LensFlareSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L48)

Gets a lens flare system using its name

#### Parameters

##### name

`string`

defines the name to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`LensFlareSystem`](LensFlareSystem.md)\>

the lens flare system or null if not found

***

### getLightById()

> **getLightById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3858](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3858)

Gets a light node using its Id

#### Parameters

##### id

`string`

defines the light's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

the light or null if none found.

***

### ~~getLightByID()~~

> **getLightByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6646](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6646)

Gets a light node using its Id

#### Parameters

##### id

`string`

defines the light's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

the light or null if none found.

#### Deprecated

Please use getLightById instead

***

### getLightByName()

> **getLightByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3843](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3843)

Gets a light node using its name

#### Parameters

##### name

`string`

defines the light's name

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

the light or null if none found.

***

### getLightByUniqueId()

> **getLightByUniqueId**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3873](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3873)

Gets a light node using its scene-generated unique Id

#### Parameters

##### uniqueId

`number`

defines the light's unique Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

the light or null if none found.

***

### ~~getLightByUniqueID()~~

> **getLightByUniqueID**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6656](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6656)

Gets a light node using its scene-generated unique Id

#### Parameters

##### uniqueId

`number`

defines the light's unique Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

the light or null if none found.

#### Deprecated

Please use getLightByUniqueId instead

***

### getLightsByTags()

> **getLightsByTags**(`tagsQuery`, `filter?`): [`Light`](Light.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6296)

Get a list of lights by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`light`) => `boolean`

defines a predicate used to filter results

#### Returns

[`Light`](Light.md)[]

an array of Light

***

### getMaterialById()

> **getMaterialById**(`id`, `allowMultiMaterials?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3690](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3690)

get a material using its id

#### Parameters

##### id

`string`

defines the material's Id

##### allowMultiMaterials?

`boolean` = `false`

determines whether multimaterials should be considered

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the material or null if none found.

***

### ~~getMaterialByID()~~

> **getMaterialByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6585](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6585)

Get a material using its id

#### Parameters

##### id

`string`

defines the material's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the material or null if none found.

#### Deprecated

Please use getMaterialById instead

***

### getMaterialByName()

> **getMaterialByName**(`name`, `allowMultiMaterials?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3700](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3700)

Gets a material using its name

#### Parameters

##### name

`string`

defines the material's name

##### allowMultiMaterials?

`boolean` = `false`

determines whether multimaterials should be considered

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the material or null if none found.

***

### getMaterialByTags()

> **getMaterialByTags**(`tagsQuery`, `filter?`): [`Material`](Material.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6306)

Get a list of materials by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`material`) => `boolean`

defines a predicate used to filter results

#### Returns

[`Material`](Material.md)[]

an array of Material

***

### getMaterialByUniqueId()

> **getMaterialByUniqueId**(`uniqueId`, `allowMultiMaterials?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3680](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3680)

Get a material using its unique id

#### Parameters

##### uniqueId

`number`

defines the material's unique id

##### allowMultiMaterials?

`boolean` = `false`

determines whether multimaterials should be considered

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the material or null if none found.

***

### ~~getMaterialByUniqueID()~~

> **getMaterialByUniqueID**(`uniqueId`, `allowMultiMaterials?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3670](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3670)

Get a material using its unique id

#### Parameters

##### uniqueId

`number`

defines the material's unique id

##### allowMultiMaterials?

`boolean` = `false`

determines whether multimaterials should be considered

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the material or null if none found.

#### Deprecated

Please use getMaterialByUniqueId instead.

***

### getMeshById()

> **getMeshById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4017](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4017)

Gets the first added mesh found of a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the mesh found or null if not found at all

***

### ~~getMeshByID()~~

> **getMeshByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6686](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6686)

Gets the first added mesh found of a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the mesh found or null if not found at all

#### Deprecated

Please use getMeshById instead

***

### getMeshByName()

> **getMeshByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4240](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4240)

Gets a mesh using a given name

#### Parameters

##### name

`string`

defines the name to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the found mesh or null if not found at all.

***

### getMeshByUniqueId()

> **getMeshByUniqueId**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4084](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4084)

Gets a mesh with its auto-generated unique Id

#### Parameters

##### uniqueId

`number`

defines the unique Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the found mesh or null if not found at all.

***

### ~~getMeshByUniqueID()~~

> **getMeshByUniqueID**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6696](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6696)

Gets a mesh with its auto-generated unique Id

#### Parameters

##### uniqueId

`number`

defines the unique Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the found mesh or null if not found at all.

#### Deprecated

Please use getMeshByUniqueId instead

***

### getMeshesById()

> **getMeshesById**(`id`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4032](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4032)

Gets a list of meshes using their Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

a list of meshes

***

### ~~getMeshesByID()~~

> **getMeshesByID**(`id`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6716](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6716)

Gets a list of meshes using their Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

a list of meshes

#### Deprecated

Please use getMeshesById instead

***

### getMeshesByTags()

> **getMeshesByTags**(`tagsQuery`, `filter?`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6276)

Get a list of meshes by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`mesh`) => `boolean`

defines a predicate used to filter results

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of Mesh

***

### getMorphTargetById()

> **getMorphTargetById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`MorphTarget`](MorphTarget.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4345)

Gets a morph target using a given id (if many are found, this function will pick the first one)

#### Parameters

##### id

`string`

defines the id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MorphTarget`](MorphTarget.md)\>

the found morph target or null if not found at all.

***

### getMorphTargetByName()

> **getMorphTargetByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`MorphTarget`](MorphTarget.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4363](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4363)

Gets a morph target using a given name (if many are found, this function will pick the first one)

#### Parameters

##### name

`string`

defines the name to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MorphTarget`](MorphTarget.md)\>

the found morph target or null if not found at all.

***

### getMorphTargetManagerById()

> **getMorphTargetManagerById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`MorphTargetManager`](MorphTargetManager.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4330)

Gets a morph target manager  using a given id (if many are found, this function will pick the last one)

#### Parameters

##### id

`number`

defines the id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MorphTargetManager`](MorphTargetManager.md)\>

the found morph target manager or null if not found at all.

***

### getNodeById()

> **getNodeById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4172)

Gets a node (Mesh, Camera, Light, Bone) using a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

the found node or null if not found at all

***

### ~~getNodeByID()~~

> **getNodeByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6756](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6756)

Gets a node (Mesh, Camera, Light) using a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

the found node or null if not found at all

#### Deprecated

Please use getNodeById instead

***

### getNodeByName()

> **getNodeByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4206)

Gets a node (Mesh, Camera, Light) using a given name

#### Parameters

##### name

`string`

defines the name to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>

the found node or null if not found at all.

***

### getNodes()

> **getNodes**(): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:613](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L613)

#### Returns

[`Node`](Node.md)[]

all meshes, lights, cameras, transformNodes and bones

#### Implementation of

`IAssetContainer.getNodes`

***

### getOrAddExternalDataWithFactory()

> **getOrAddExternalDataWithFactory**\<`T`\>(`key`, `factory`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4443](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4443)

Get an externally attached data from its key, create it using a factory if it's not already present

#### Type Parameters

##### T

`T` *extends* `object`

#### Parameters

##### key

`string`

the unique key that identifies the data

##### factory

(`k`) => `T`

the factory that will be called to create the instance if and only if it doesn't exists

#### Returns

`T`

the associated data, can be null if the factory returned null.

***

### getOutlineRenderer()

> **getOutlineRenderer**(): [`OutlineRenderer`](OutlineRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L26)

Gets the outline renderer associated with the scene

#### Returns

[`OutlineRenderer`](OutlineRenderer.md)

a OutlineRenderer

***

### getParticleSystemById()

> **getParticleSystemById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3888](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3888)

Gets a particle system by Id

#### Parameters

##### id

`string`

defines the particle system Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

the corresponding system or null if none found

***

### ~~getParticleSystemByID()~~

> **getParticleSystemByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6666](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6666)

Gets a particle system by Id

#### Parameters

##### id

`string`

defines the particle system Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)\>

the corresponding system or null if none found

#### Deprecated

Please use getParticleSystemById instead

***

### getPerfCollector()

> **getPerfCollector**(): [`PerformanceViewerCollector`](PerformanceViewerCollector.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6562](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6562)

This method gets the performance collector belonging to the scene, which is generally shared with the inspector.

#### Returns

[`PerformanceViewerCollector`](PerformanceViewerCollector.md)

the perf collector belonging to the scene.

***

### getPhysicsEngine()

> **getPhysicsEngine**(): [`Nullable`](../type-aliases/Nullable.md)\<`IPhysicsEngine`\>

Defined in: [babylonjs-source/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts#L26)

Gets the current physics engine

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IPhysicsEngine`\>

a IPhysicsEngine or null if none attached

***

### getPointerOverMesh()

> **getPointerOverMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6202](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6202)

Gets the mesh under the pointer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

a Mesh or null if no mesh is under the pointer

***

### getPointerOverSprite()

> **getPointerOverSprite**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Sprite`](Sprite.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L106)

Gets the sprite under the pointer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Sprite`](Sprite.md)\>

a Sprite or null if no sprite is under the pointer

***

### getPostProcessByName()

> **getPostProcessByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4381](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4381)

Gets a post process using a given name (if many are found, this function will pick the first one)

#### Parameters

##### name

`string`

defines the name to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PostProcess`](PostProcess.md)\>

the found post process or null if not found at all.

***

### getProjectionMatrix()

> **getProjectionMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2813](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2813)

Gets the current projection matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix

***

### getRenderId()

> **getRenderId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2305)

Gets an unique Id for the current render phase

#### Returns

`number`

a number

***

### getSceneUniformBuffer()

> **getSceneUniformBuffer**(): [`UniformBuffer`](UniformBuffer.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2880](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2880)

Gets the uniform buffer used to store scene data

#### Returns

[`UniformBuffer`](UniformBuffer.md)

a UniformBuffer

***

### getSelectionOutlineLayerByName()

> **getSelectionOutlineLayerByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`SelectionOutlineLayer`](SelectionOutlineLayer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Layers/selectionOutlineLayer.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Layers/selectionOutlineLayer.ts#L27)

Return a the first selection outline layer of the scene with a given name.

#### Parameters

##### name

`string`

The name of the selection outline layer to look for.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`SelectionOutlineLayer`](SelectionOutlineLayer.md)\>

The selection outline layer if found otherwise null.

***

### getSkeletonById()

> **getSkeletonById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4300)

Gets a skeleton using a given id (if many are found, this function will pick the first one)

#### Parameters

##### id

`string`

defines the id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

the found skeleton or null if not found at all.

***

### getSkeletonByName()

> **getSkeletonByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4315](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4315)

Gets a skeleton using a given name

#### Parameters

##### name

`string`

defines the name to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

the found skeleton or null if not found at all.

***

### getSkeletonByUniqueId()

> **getSkeletonByUniqueId**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4285)

Gets a skeleton using a given auto generated unique id

#### Parameters

##### uniqueId

`number`

defines the unique id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Skeleton`](Skeleton.md)\>

the found skeleton or null if not found at all.

***

### ~~getSoundByName()~~

> **getSoundByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Sound`](Sound.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Audio/audioSceneComponent.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Audio/audioSceneComponent.ts#L69)

Gets a sound using a given name

#### Parameters

##### name

`string`

defines the name to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Sound`](Sound.md)\>

the found sound or null if not found at all.

#### Deprecated

please use AudioEngineV2 instead

***

### getStepId()

> **getStepId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1350)

Gets the step Id used by deterministic lock step

#### Returns

`number`

the step Id

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### getTextureByName()

> **getTextureByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3747](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3747)

Gets a texture using its name

#### Parameters

##### name

`string`

defines the texture's name

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture or null if none found.

***

### getTextureByUniqueId()

> **getTextureByUniqueId**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3732](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3732)

Get a texture using its unique id

#### Parameters

##### uniqueId

`number`

defines the texture's unique id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture or null if none found.

***

### ~~getTextureByUniqueID()~~

> **getTextureByUniqueID**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6606](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6606)

Get a texture using its unique id

#### Parameters

##### uniqueId

`number`

defines the texture's unique id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture or null if none found.

#### Deprecated

Please use getTextureByUniqueId instead

***

### getTotalVertices()

> **getTotalVertices**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2225)

Gets the total number of vertices rendered per frame

#### Returns

`number`

the total number of vertices rendered per frame

***

### getTransformMatrix()

> **getTransformMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2829](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2829)

Gets the current transform matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix made of View * Projection

***

### getTransformNodeById()

> **getTransformNodeById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4043](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4043)

Gets the first added transform node found of a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

the found transform node or null if not found at all.

***

### ~~getTransformNodeByID()~~

> **getTransformNodeByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6726](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6726)

Gets the first added transform node found of a given Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

the found transform node or null if not found at all.

#### Deprecated

Please use getTransformNodeById instead

***

### getTransformNodeByName()

> **getTransformNodeByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4255)

Gets a transform node using a given name

#### Parameters

##### name

`string`

defines the name to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

the found transform node or null if not found at all.

***

### getTransformNodeByUniqueId()

> **getTransformNodeByUniqueId**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4058](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4058)

Gets a transform node with its auto-generated unique Id

#### Parameters

##### uniqueId

`number`

defines the unique Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

the found transform node or null if not found at all.

***

### ~~getTransformNodeByUniqueID()~~

> **getTransformNodeByUniqueID**(`uniqueId`): [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6736](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6736)

Gets a transform node with its auto-generated unique Id

#### Parameters

##### uniqueId

`number`

defines the unique Id to search for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\>

the found transform node or null if not found at all.

#### Deprecated

Please use getTransformNodeByUniqueId instead

***

### getTransformNodesById()

> **getTransformNodesById**(`id`): [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4073](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4073)

Gets a list of transform nodes using their Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`TransformNode`](TransformNode.md)[]

a list of transform nodes

***

### ~~getTransformNodesByID()~~

> **getTransformNodesByID**(`id`): [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6746](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6746)

Gets a list of transform nodes using their Id

#### Parameters

##### id

`string`

defines the Id to search for

#### Returns

[`TransformNode`](TransformNode.md)[]

a list of transform nodes

#### Deprecated

Please use getTransformNodesById instead

***

### getTransformNodesByTags()

> **getTransformNodesByTags**(`tagsQuery`, `filter?`): [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6316](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6316)

Get a list of transform nodes by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`transform`) => `boolean`

defines a predicate used to filter results

#### Returns

[`TransformNode`](TransformNode.md)[]

an array of TransformNode

***

### getUniqueId()

> **getUniqueId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2939](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2939)

Gets an unique (relatively to the current scene) Id

#### Returns

`number`

an unique number for the scene

***

### getViewMatrix()

> **getViewMatrix**(): [`Matrix`](Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2805](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2805)

Gets the current view matrix

#### Returns

[`Matrix`](Matrix.md)

a Matrix

***

### getWaitingItemsCount()

> **getWaitingItemsCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2666](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2666)

Returns the number of items waiting to be loaded

#### Returns

`number`

the number of items waiting to be loaded

***

### getWorldExtends()

> **getWorldExtends**(`filterPredicate?`): `object`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6015](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6015)

Get the world extend vectors with an optional filter

#### Parameters

##### filterPredicate?

(`mesh`) => `boolean`

the predicate - which meshes should be included when calculating the world size

#### Returns

`object`

min and max vectors

##### max

> **max**: [`Vector3`](Vector3.md)

##### min

> **min**: [`Vector3`](Vector3.md)

***

### incrementRenderId()

> **incrementRenderId**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2318)

Call this function if you want to manually increment the render Id

#### Returns

`void`

***

### isActiveMesh()

> **isActiveMesh**(`mesh`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4396)

Gets a boolean indicating if the given mesh is active

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to look for

#### Returns

`boolean`

true if the mesh is in the active list

***

### isCachedMaterialInvalid()

> **isCachedMaterialInvalid**(`material`, `effect`, `visibility?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2209)

Gets a boolean indicating if the current material / effect / visibility must be bind again

#### Parameters

##### material

[`Material`](Material.md)

defines the current material

##### effect

[`Effect`](Effect.md)

defines the current effect

##### visibility?

`number` = `1`

defines the current visibility state

#### Returns

`boolean`

true if one parameter is not cached

***

### isPhysicsEnabled()

> **isPhysicsEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/joinedPhysicsEngineComponent.ts#L45)

Gets a boolean indicating if there is an active physics engine

#### Returns

`boolean`

a boolean indicating if there is an active physics engine

***

### isPointerCaptured()

> **isPointerCaptured**(`pointerId?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2368](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2368)

Gets a boolean indicating if the current pointer event is captured (meaning that the scene has already handled the pointer down)

#### Parameters

##### pointerId?

`number` = `0`

defines the pointer id to use in a multi-touch scenario (0 by default)

#### Returns

`boolean`

true if the pointer was captured

***

### isReady()

> **isReady**(`checkRenderTargets?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2393](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2393)

This function will check if the scene can be rendered (textures are loaded, shaders are compiled)
Delay loaded resources are not taking in account

#### Parameters

##### checkRenderTargets?

`boolean` = `true`

true to also check that the meshes rendered as part of a render target are ready (default: true)

#### Returns

`boolean`

true if all required resources are ready

***

### markAllMaterialsAsDirty()

> **markAllMaterialsAsDirty**(`flag`, `predicate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6390](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6390)

Will flag all materials as dirty to trigger new shader compilation

#### Parameters

##### flag

`number`

defines the flag used to specify which material part must be marked as dirty

##### predicate?

(`mat`) => `boolean`

If not null, it will be used to specify if a material has to be marked as dirty

#### Returns

`void`

***

### multiPick()

> **multiPick**(`x`, `y`, `predicate?`, `camera?`, `trianglePredicate?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6172)

Launch a ray to try to pick a mesh in the scene. A mesh triangle can be picked both from its front and back sides,
irrespective of orientation.

#### Parameters

##### x

`number`

X position on screen

##### y

`number`

Y position on screen

##### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes and instances. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

##### camera?

[`Camera`](Camera.md)

camera to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used

##### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

an array of PickingInfo

***

### multiPickSprite()

> **multiPickSprite**(`x`, `y`, `predicate?`, `camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L86)

Launch a ray to try to pick sprites in the scene

#### Parameters

##### x

`number`

position on screen

##### y

`number`

position on screen

##### predicate?

(`sprite`) => `boolean`

Predicate function used to determine eligible sprites. Can be set to null. In this case, a sprite must have isPickable set to true

##### camera?

[`Camera`](Camera.md)

camera to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

a PickingInfo array

***

### multiPickSpriteWithRay()

> **multiPickSpriteWithRay**(`ray`, `predicate?`, `camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L94)

Use the given ray to pick sprites in the scene

#### Parameters

##### ray

[`Ray`](Ray.md)

The ray (in world space) to use to pick meshes

##### predicate?

(`sprite`) => `boolean`

Predicate function used to determine eligible sprites. Can be set to null. In this case, a sprite must have isPickable set to true

##### camera?

[`Camera`](Camera.md)

camera to use. Can be set to null. In this case, the scene.activeCamera will be used

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

a PickingInfo array

***

### multiPickWithRay()

> **multiPickWithRay**(`ray`, `predicate?`, `trianglePredicate?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6184)

Launch a ray to try to pick a mesh in the scene

#### Parameters

##### ray

[`Ray`](Ray.md)

Ray to use

##### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes and instances. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

##### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)[]\>

an array of PickingInfo

***

### pick()

> **pick**(`x`, `y`, `predicate?`, `fastCheck?`, `camera?`, `trianglePredicate?`): [`PickingInfo`](PickingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6121)

Launch a ray to try to pick a mesh in the scene

#### Parameters

##### x

`number`

position on screen

##### y

`number`

position on screen

##### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used

##### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

#### Returns

[`PickingInfo`](PickingInfo.md)

a PickingInfo

***

### pickSprite()

> **pickSprite**(`x`, `y`, `predicate?`, `fastCheck?`, `camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L65)

Launch a ray to try to pick a sprite in the scene

#### Parameters

##### x

`number`

position on screen

##### y

`number`

position on screen

##### predicate?

(`sprite`) => `boolean`

Predicate function used to determine eligible sprites. Can be set to null. In this case, a sprite must have isPickable set to true

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

##### camera?

[`Camera`](Camera.md)

camera to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

a PickingInfo

***

### pickSpriteWithRay()

> **pickSpriteWithRay**(`ray`, `predicate?`, `fastCheck?`, `camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L74)

Use the given ray to pick a sprite in the scene

#### Parameters

##### ray

[`Ray`](Ray.md)

The ray (in world space) to use to pick meshes

##### predicate?

(`sprite`) => `boolean`

Predicate function used to determine eligible sprites. Can be set to null. In this case, a sprite must have isPickable set to true

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

##### camera?

[`Camera`](Camera.md)

camera to use. Can be set to null. In this case, the scene.activeCamera will be used

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

a PickingInfo

***

### pickWithBoundingInfo()

> **pickWithBoundingInfo**(`x`, `y`, `predicate?`, `fastCheck?`, `camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6138)

Launch a ray to try to pick a mesh in the scene using only bounding information of the main mesh (not using submeshes)

#### Parameters

##### x

`number`

position on screen

##### y

`number`

position on screen

##### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

a PickingInfo (Please note that some info will not be set like distance, bv, bu and everything that cannot be capture by only using bounding infos)

***

### pickWithRay()

> **pickWithRay**(`ray`, `predicate?`, `fastCheck?`, `trianglePredicate?`): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6157)

Use the given ray to pick a mesh in the scene. A mesh triangle can be picked both from its front and back sides,
irrespective of orientation.

#### Parameters

##### ray

[`Ray`](Ray.md)

The ray to use to pick meshes

##### predicate?

[`MeshPredicate`](../type-aliases/MeshPredicate.md)

Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must have isPickable set to true. thinInstanceIndex is -1 when the mesh is non-instanced

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

##### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

a PickingInfo

***

### pushGeometry()

> **pushGeometry**(`geometry`, `force?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3951](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3951)

Add a new geometry to this scene

#### Parameters

##### geometry

[`Geometry`](Geometry.md)

defines the geometry to be added to the scene.

##### force?

`boolean`

defines if the geometry must be pushed even if a geometry with this id already exists

#### Returns

`boolean`

a boolean defining if the geometry was added or not

***

### registerAfterRender()

> **registerAfterRender**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2598](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2598)

Registers a function to be called after every frame render

#### Parameters

##### func

() => `void`

defines the function to register

#### Returns

`void`

***

### registerBeforeRender()

> **registerBeforeRender**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2582)

Registers a function to be called before every frame render

#### Parameters

##### func

() => `void`

defines the function to register

#### Returns

`void`

***

### ~~removeActionManager()~~

> **removeActionManager**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3247)

Removes the given action manager from this scene.

#### Parameters

##### toRemove

[`AbstractActionManager`](AbstractActionManager.md)

The action manager to remove

#### Returns

`number`

The index of the removed action manager

#### Deprecated

***

### removeAnimation()

> **removeAnimation**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3170)

Remove a animation for the list of scene's animations

#### Parameters

##### toRemove

[`Animation`](Animation.md)

defines the animation to remove

#### Returns

`number`

the index where the animation was in the animation list

***

### removeAnimationGroup()

> **removeAnimationGroup**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3193)

Removes the given animation group from this scene.

#### Parameters

##### toRemove

[`AnimationGroup`](AnimationGroup.md)

The animation group to remove

#### Returns

`number`

The index of the removed animation group

***

### removeCamera()

> **removeCamera**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3119)

Remove a camera for the list of scene's cameras

#### Parameters

##### toRemove

[`Camera`](Camera.md)

defines the camera to remove

#### Returns

`number`

the index where the camera was in the camera list

***

### removeEffectLayer()

> **removeEffectLayer**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3320](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3320)

Removes the given layer from this scene.

#### Parameters

##### toRemove

[`EffectLayer`](EffectLayer.md)

The layer to remove

#### Returns

`number`

The index of the removed layer

***

### removeExternalData()

> **removeExternalData**(`key`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4455)

Remove an externally attached data from the Engine instance

#### Parameters

##### key

`string`

the unique key that identifies the data

#### Returns

`boolean`

true if the data was successfully removed, false if it doesn't exist

***

### removeFrameGraph()

> **removeFrameGraph**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3275)

Removes the given frame graph from this scene.

#### Parameters

##### toRemove

[`FrameGraph`](FrameGraph.md)

The frame graph to remove

#### Returns

`number`

The index of the removed frame graph

***

### removeGeometry()

> **removeGeometry**(`geometry`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3970](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3970)

Removes an existing geometry

#### Parameters

##### geometry

[`Geometry`](Geometry.md)

defines the geometry to be removed from the scene

#### Returns

`boolean`

a boolean defining if the geometry was removed or not

***

### removeIsReadyCheck()

> **removeIsReadyCheck**(`isReadyCheck`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2692](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2692)

Removes an object previously registered with [addIsReadyCheck](#addisreadycheck).

#### Parameters

##### isReadyCheck

defines the object to remove.

###### isReady

#### Returns

`void`

***

### removeLensFlareSystem()

> **removeLensFlareSystem**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystemSceneComponent.ts#L35)

Removes the given lens flare system from this scene.

#### Parameters

##### toRemove

[`LensFlareSystem`](LensFlareSystem.md)

The lens flare system to remove

#### Returns

`number`

The index of the removed lens flare system

***

### removeLight()

> **removeLight**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3093](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3093)

Remove a light for the list of scene's lights

#### Parameters

##### toRemove

[`Light`](Light.md)

defines the light to remove

#### Returns

`number`

the index where the light was in the light list

***

### removeMaterial()

> **removeMaterial**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3223)

Removes the given material from this scene.

#### Parameters

##### toRemove

[`Material`](Material.md)

The material to remove

#### Returns

`number`

The index of the removed material

***

### removeMesh()

> **removeMesh**(`toRemove`, `recursive?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2980](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2980)

Remove a mesh for the list of scene's meshes

#### Parameters

##### toRemove

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to remove

##### recursive?

`boolean` = `false`

if all child meshes should also be removed from the scene

#### Returns

`number`

the index where the mesh was in the mesh list

***

### removeMorphTargetManager()

> **removeMorphTargetManager**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3078](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3078)

Remove a morph target for the list of scene's morph targets

#### Parameters

##### toRemove

[`MorphTargetManager`](MorphTargetManager.md)

defines the morph target to remove

#### Returns

`number`

the index where the morph target was in the morph target list

***

### removeMultiMaterial()

> **removeMultiMaterial**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3207)

Removes the given multi-material from this scene.

#### Parameters

##### toRemove

[`MultiMaterial`](MultiMaterial.md)

The multi-material to remove

#### Returns

`number`

The index of the removed multi-material

***

### removeObjectRenderer()

> **removeObjectRenderer**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3290)

Removes the given object renderer from this scene.

#### Parameters

##### toRemove

[`ObjectRenderer`](ObjectRenderer.md)

The object renderer to remove

#### Returns

`number`

The index of the removed object renderer

***

### removeParticleSystem()

> **removeParticleSystem**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3153)

Remove a particle system for the list of scene's particle systems

#### Parameters

##### toRemove

[`IParticleSystem`](../interfaces/IParticleSystem.md)

defines the particle system to remove

#### Returns

`number`

the index where the particle system was in the particle system list

***

### removePendingData()

> **removePendingData**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2649](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2649)

Remove a pending data from the loading list which has previously been added with addPendingData.

#### Parameters

##### data

`any`

defines the object to remove from the pending list

#### Returns

`void`

***

### removePostProcess()

> **removePostProcess**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3305)

Removes the given post-process from this scene.

#### Parameters

##### toRemove

[`PostProcess`](PostProcess.md)

The post-process to remove

#### Returns

`number`

The index of the removed post-process

***

### removeReflectionProbe()

> **removeReflectionProbe**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L26)

Removes the given reflection probe from this scene.

#### Parameters

##### toRemove

[`ReflectionProbe`](ReflectionProbe.md)

The reflection probe to remove

#### Returns

`number`

The index of the removed reflection probe

***

### removeSkeleton()

> **removeSkeleton**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3059](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3059)

Remove a skeleton for the list of scene's skeletons

#### Parameters

##### toRemove

[`Skeleton`](Skeleton.md)

defines the skeleton to remove

#### Returns

`number`

the index where the skeleton was in the skeleton list

***

### removeTexture()

> **removeTexture**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3260)

Removes the given texture from this scene.

#### Parameters

##### toRemove

[`BaseTexture`](BaseTexture.md)

The texture to remove

#### Returns

`number`

The index of the removed texture

***

### removeTransformNode()

> **removeTransformNode**(`toRemove`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3033](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3033)

Remove a transform node for the list of scene's transform nodes

#### Parameters

##### toRemove

[`TransformNode`](TransformNode.md)

defines the transform node to remove

#### Returns

`number`

the index where the transform node was in the transform node list

***

### render()

> **render**(`updateCameras?`, `ignoreAnimations?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5537)

Render the scene

#### Parameters

##### updateCameras?

`boolean` = `true`

defines a boolean indicating if cameras must update according to their inputs (true by default)

##### ignoreAnimations?

`boolean` = `false`

defines a boolean indicating if animations should not be executed (false by default)

#### Returns

`void`

***

### resetCachedMaterial()

> **resetCachedMaterial**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2572](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2572)

Resets all cached information relative to material (including effect and visibility)

#### Returns

`void`

***

### resetDrawCache()

> **resetDrawCache**(`passId?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5361)

Resets the draw wrappers cache of all meshes

#### Parameters

##### passId?

`number`

If provided, releases only the draw wrapper corresponding to this render pass id

#### Returns

`void`

***

### resetLastAnimationTimeFrame()

> **resetLastAnimationTimeFrame**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2795](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2795)

Resets the last animation time frame.
Useful to override when animations start running when loading a scene for the first time.

#### Returns

`void`

***

### setActiveCameraById()

> **setActiveCameraById**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3601](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3601)

sets the active camera of the scene using its Id

#### Parameters

##### id

`string`

defines the camera's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the new active camera or null if none found.

***

### ~~setActiveCameraByID()~~

> **setActiveCameraByID**(`id`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6575](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6575)

Sets the active camera of the scene using its Id

#### Parameters

##### id

`string`

defines the camera's Id

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the new active camera or null if none found.

#### Deprecated

Please use setActiveCameraById instead

***

### setActiveCameraByName()

> **setActiveCameraByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3617)

sets the active camera of the scene using its name

#### Parameters

##### name

`string`

defines the camera's name

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

the new active camera or null if none found.

***

### setDefaultCandidateProviders()

> **setDefaultCandidateProviders**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2142)

Sets the default candidate providers for the scene.
This sets the getActiveMeshCandidates, getActiveSubMeshCandidates, getIntersectingSubMeshCandidates
and getCollidingSubMeshCandidates to their default function

#### Returns

`void`

***

### setPointerOverMesh()

> **setPointerOverMesh**(`mesh`, `pointerId?`, `pickResult?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6194)

Force the value of meshUnderPointer

#### Parameters

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

defines the mesh to use

##### pointerId?

`number`

optional pointer id when using more than one pointer

##### pickResult?

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

optional pickingInfo data used to find mesh

#### Returns

`void`

***

### setPointerOverSprite()

> **setPointerOverSprite**(`sprite`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Sprites/spriteSceneComponent.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Sprites/spriteSceneComponent.ts#L100)

Force the sprite under the pointer

#### Parameters

##### sprite

[`Nullable`](../type-aliases/Nullable.md)\<[`Sprite`](Sprite.md)\>

defines the sprite to use

#### Returns

`void`

***

### setRenderingAutoClearDepthStencil()

> **setRenderingAutoClearDepthStencil**(`renderingGroupId`, `autoClearDepthStencil`, `depth?`, `stencil?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6346](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6346)

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

#### Parameters

##### renderingGroupId

`number`

The rendering group id corresponding to its index

##### autoClearDepthStencil

`boolean`

Automatically clears depth and stencil between groups if true.

##### depth?

`boolean` = `true`

Automatically clears depth between groups if true and autoClear is true.

##### stencil?

`boolean` = `true`

Automatically clears stencil between groups if true and autoClear is true.

#### Returns

`void`

***

### setRenderingOrder()

> **setRenderingOrder**(`renderingGroupId`, `opaqueSortCompareFn?`, `alphaTestSortCompareFn?`, `transparentSortCompareFn?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:6329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L6329)

Overrides the default sort function applied in the rendering group to prepare the meshes.
This allowed control for front to back rendering or reversly depending of the special needs.

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

***

### setSceneUniformBuffer()

> **setSceneUniformBuffer**(`ubo`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2913](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2913)

Sets the scene ubo

#### Parameters

##### ubo

[`UniformBuffer`](UniformBuffer.md)

the ubo to set for the scene

#### Returns

`void`

***

### setStepId()

> **setStepId**(`newStepId`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:1341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L1341)

Sets the step Id used by deterministic lock step

#### Parameters

##### newStepId

`number`

defines the step Id

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep

***

### setTransformMatrix()

> **setTransformMatrix**(`viewL`, `projectionL`, `viewR?`, `projectionR?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2840](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2840)

Sets the current transform matrix

#### Parameters

##### viewL

[`Matrix`](Matrix.md)

defines the View matrix to use

##### projectionL

[`Matrix`](Matrix.md)

defines the Projection matrix to use

##### viewR?

[`Matrix`](Matrix.md)

defines the right View matrix to use (if provided)

##### projectionR?

[`Matrix`](Matrix.md)

defines the right Projection matrix to use (if provided)

#### Returns

`void`

***

### simulatePointerDown()

> **simulatePointerDown**(`pickResult`, `pointerEventInit?`): `Scene`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2345)

Use this method to simulate a pointer down on a mesh
The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay

#### Parameters

##### pickResult

[`PickingInfo`](PickingInfo.md)

pickingInfo of the object wished to simulate pointer event on

##### pointerEventInit?

`PointerEventInit`

pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)

#### Returns

`Scene`

the current scene

***

### simulatePointerMove()

> **simulatePointerMove**(`pickResult`, `pointerEventInit?`): `Scene`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2333)

Use this method to simulate a pointer move on a mesh
The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay

#### Parameters

##### pickResult

[`PickingInfo`](PickingInfo.md)

pickingInfo of the object wished to simulate pointer event on

##### pointerEventInit?

`PointerEventInit`

pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)

#### Returns

`Scene`

the current scene

***

### simulatePointerUp()

> **simulatePointerUp**(`pickResult`, `pointerEventInit?`, `doubleTap?`): `Scene`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2358](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2358)

Use this method to simulate a pointer up on a mesh
The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay

#### Parameters

##### pickResult

[`PickingInfo`](PickingInfo.md)

pickingInfo of the object wished to simulate pointer event on

##### pointerEventInit?

`PointerEventInit`

pointer event state to be used when simulating the pointer event (eg. pointer id for multitouch)

##### doubleTap?

`boolean`

indicates that the pointer up event should be considered as part of a double click (false by default)

#### Returns

`Scene`

the current scene

***

### sortActiveAnimatables()

> **sortActiveAnimatables**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L17)

Sort active animatables based on their playOrder property

#### Returns

`void`

***

### sortLightsByPriority()

> **sortLightsByPriority**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3361](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3361)

Sorts the list list based on light priorities

#### Returns

`void`

***

### stopAllAnimations()

> **stopAllAnimations**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animatable.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/animatable.ts#L181)

Stops and removes all animations that have been applied to the scene

#### Returns

`void`

***

### stopAnimation()

> **stopAnimation**(`target`, `animationName?`, `targetMask?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3184)

Will stop the animation of the given target

#### Parameters

##### target

`any`

the target

##### animationName?

`string`

the name of the animation to stop (all animations will be stopped if both this and targetMask are empty)

##### targetMask?

(`target`) => `boolean`

a function that determines if the animation should be stopped based on its target (all animations will be stopped if both this and animationName are empty)

#### Returns

`void`

***

### switchActiveCamera()

> **switchActiveCamera**(`newCamera`, `attachControl?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:3580](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L3580)

Switch active camera

#### Parameters

##### newCamera

[`Camera`](Camera.md)

defines the new active camera

##### attachControl?

`boolean` = `true`

defines if attachControl must be called for the new active camera (default: true)

#### Returns

`void`

***

### unfreezeActiveMeshes()

> **unfreezeActiveMeshes**(): `Scene`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4710](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4710)

Use this function to restart evaluating active meshes on every frame

#### Returns

`Scene`

the current scene

***

### unfreezeMaterials()

> **unfreezeMaterials**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:5723](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L5723)

Unfreeze all materials
A frozen material will not be updatable but should be faster to render

#### Returns

`void`

***

### unregisterAfterRender()

> **unregisterAfterRender**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2606](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2606)

Unregisters a function called after every frame render

#### Parameters

##### func

() => `void`

defines the function to unregister

#### Returns

`void`

***

### unregisterBeforeRender()

> **unregisterBeforeRender**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2590](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2590)

Unregisters a function called before every frame render

#### Parameters

##### func

() => `void`

defines the function to unregister

#### Returns

`void`

***

### updateTransformMatrix()

> **updateTransformMatrix**(`force?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:4941](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L4941)

Update the transform matrix to update from the current active camera

#### Parameters

##### force?

`boolean`

defines a boolean used to force the update even if cache is up to date

#### Returns

`void`

***

### whenReadyAsync()

> **whenReadyAsync**(`checkRenderTargets?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:2719](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L2719)

Returns a promise that resolves when the scene is ready

#### Parameters

##### checkRenderTargets?

`boolean` = `false`

true to also check that the meshes rendered as part of a render target are ready (default: false)

#### Returns

`Promise`\<`void`\>

A promise that resolves when the scene is ready

***

### CollisionCoordinatorFactory()

> `static` **CollisionCoordinatorFactory**(): `ICollisionCoordinator`

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L225)

Factory used to create the a collision coordinator.

#### Returns

`ICollisionCoordinator`

The collision coordinator

***

### DefaultMaterialFactory()

> `static` **DefaultMaterialFactory**(`scene`): [`Material`](Material.md)

Defined in: [babylonjs-source/packages/dev/core/src/scene.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/scene.ts#L214)

Factory used to create the default material.

#### Parameters

##### scene

`Scene`

The scene to create the material for

#### Returns

[`Material`](Material.md)

The default material
