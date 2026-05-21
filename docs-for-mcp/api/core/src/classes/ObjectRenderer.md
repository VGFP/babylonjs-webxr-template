[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ObjectRenderer

# Class: ObjectRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L45)

A class that renders objects to the currently bound render target.
This class only renders objects, and is not concerned with the output texture or post-processing.

## Constructors

### Constructor

> **new ObjectRenderer**(`name`, `scene`, `options?`): `ObjectRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:441](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L441)

Instantiates an object renderer.

#### Parameters

##### name

`string`

The friendly name of the object renderer

##### scene

[`Scene`](Scene.md)

The scene the renderer belongs to

##### options?

[`ObjectRendererOptions`](../interfaces/ObjectRendererOptions.md)

The options used to create the renderer (optional)

#### Returns

`ObjectRenderer`

## Properties

### activeCamera

> **activeCamera**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L177)

Define the camera used to render the objects.

***

### cameraForLOD

> **cameraForLOD**: [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L183)

Define the camera used to calculate the LOD of the objects.
If not defined, activeCamera will be used. If not defined nor activeCamera, scene's active camera will be used.

***

### customIsReadyFunction

> **customIsReadyFunction**: (`mesh`, `refreshRate`, `preWarm?`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L227)

Override the mesh isReady function with your own one.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

##### refreshRate

`number`

##### preWarm?

`boolean`

#### Returns

`boolean`

***

### customRenderFunction

> **customRenderFunction**: (`opaqueSubMeshes`, `alphaTestSubMeshes`, `transparentSubMeshes`, `depthOnlySubMeshes`, `beforeTransparents?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L232)

Override the render function with your own one.

#### Parameters

##### opaqueSubMeshes

[`SmartArray`](SmartArray.md)\<[`SubMesh`](SubMesh.md)\>

##### alphaTestSubMeshes

[`SmartArray`](SmartArray.md)\<[`SubMesh`](SubMesh.md)\>

##### transparentSubMeshes

[`SmartArray`](SmartArray.md)\<[`SubMesh`](SubMesh.md)\>

##### depthOnlySubMeshes

[`SmartArray`](SmartArray.md)\<[`SubMesh`](SubMesh.md)\>

##### beforeTransparents?

() => `void`

#### Returns

`void`

***

### customRenderTransparentSubMeshes?

> `optional` **customRenderTransparentSubMeshes?**: (`transparentSubMeshes`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L147)

Custom render function for transparent submeshes.

#### Parameters

##### transparentSubMeshes

[`SmartArray`](SmartArray.md)\<[`SubMesh`](SubMesh.md)\>

#### Returns

`void`

***

### dontSetTransformationMatrix

> **dontSetTransformationMatrix**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L209)

If true, the object renderer will not set the view/projection/transformation matrices for the active camera (default: false).
By default, the view/projection/transformation matrices are set from the active camera (either ObjectRenderer.activeCamera or scene.activeCamera).
Sets this property to true if you want to define your own transformation matrices (use the onInitRenderingObservable observable
to set your own matrices, to be sure they will be correctly taken into account)

***

### enableBoundingBoxRendering

> **enableBoundingBoxRendering**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L167)

Enables the rendering of bounding boxes for meshes (still subject to Mesh.showBoundingBox or scene.forceShowBoundingBoxes). Default is false.

***

### enableOutlineRendering

> **enableOutlineRendering**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L172)

Enables the rendering of outline/overlay for meshes (still subject to Mesh.renderOutline/Mesh.renderOverlay). Default is true.

***

### forceLayerMaskCheck

> **forceLayerMaskCheck**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L162)

Force checking the layerMask property even if a custom list of meshes is provided (ie. if renderList is not undefined)

***

### getCustomRenderList

> **getCustomRenderList**: [`Nullable`](../type-aliases/Nullable.md)\<(`layerOrFace`, `renderList`, `renderListLength`) => [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L116)

Use this function to overload the renderList array at rendering time.
Return null to render with the current renderList, else return the list of meshes to use for rendering.
For 2DArray, layerOrFace is the index of the layer that is going to be rendered, else it is the faceIndex of
the cube (if the RTT is a cube, else layerOrFace=0).
The renderList passed to the function is the current render list (the one that will be used if the function returns null).
The length of this list is passed through renderListLength: don't use renderList.length directly because the array can
hold dummy elements!

***

### onAfterRenderingManagerRenderObservable

> `readonly` **onAfterRenderingManagerRenderObservable**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:264](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L264)

An event triggered after the rendering group is processed

***

### onAfterRenderObservable

> `readonly` **onAfterRenderObservable**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L254)

An event triggered after rendering the objects.
Note: This observable is also triggered during readiness checks (e.g. when calling scene.isReady()),
in which case the render target is not bound to the output. Observers should avoid performing
GPU state changes (such as clearing or modifying the framebuffer) unless the render target is actually bound.

***

### onBeforeRenderingManagerRenderObservable

> `readonly` **onBeforeRenderingManagerRenderObservable**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L259)

An event triggered before the rendering group is processed

***

### onBeforeRenderObservable

> `readonly` **onBeforeRenderObservable**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L246)

An event triggered before rendering the objects.
Note: This observable is also triggered during readiness checks (e.g. when calling scene.isReady()),
in which case the render target is not bound to the output. Observers should avoid performing
GPU state changes (such as clearing or modifying the framebuffer) unless the render target is actually bound.

***

### onFastPathRenderObservable

> `readonly` **onFastPathRenderObservable**: [`Observable`](Observable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L279)

An event triggered when fast path rendering is used

***

### onFinishRenderingObservable

> `readonly` **onFinishRenderingObservable**: [`Observable`](Observable.md)\<`ObjectRenderer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:274](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L274)

An event triggered when finishRender is called

***

### onInitRenderingObservable

> `readonly` **onInitRenderingObservable**: [`Observable`](Observable.md)\<`ObjectRenderer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L269)

An event triggered when initRender is called

***

### options

> **options**: `Required`\<[`ObjectRendererOptions`](../interfaces/ObjectRendererOptions.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L301)

The options used by the object renderer

***

### particleSystemList

> **particleSystemList**: [`Nullable`](../type-aliases/Nullable.md)\<[`IParticleSystem`](../interfaces/IParticleSystem.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L105)

Define the list of particle systems to render. If not provided, will render all the particle systems of the scene.
Note that the particle systems are rendered only if renderParticles is set to true.

***

### renderAlphaTestMeshes

> **renderAlphaTestMeshes**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L137)

Define if alpha test meshes should be rendered (default is true). No effect if renderMeshes is false.

***

### renderDepthOnlyMeshes

> **renderDepthOnlyMeshes**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L127)

Define if depth only meshes should be rendered (default is true). No effect if renderMeshes is false.

***

### renderListPredicate

> **renderListPredicate**: (`AbstractMesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L64)

Use this predicate to dynamically define the list of mesh you want to render.
If set, the renderList property will be overwritten.

#### Parameters

##### AbstractMesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`boolean`

***

### renderMeshes

> **renderMeshes**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L122)

Define if meshes should be rendered (default is true).

***

### renderOpaqueMeshes

> **renderOpaqueMeshes**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L132)

Define if opaque meshes should be rendered (default is true). No effect if renderMeshes is false.

***

### renderParticles

> **renderParticles**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L152)

Define if particles should be rendered (default is true).

***

### renderPassId

> **renderPassId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L336)

Current render pass id. Note it can change over the rendering as there's a separate id for each face of a cube / each layer of an array layer!

***

### renderSprites

> **renderSprites**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L157)

Define if sprites should be rendered (default is false).

***

### renderTransparentMeshes

> **renderTransparentMeshes**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L142)

Define if transparent meshes should be rendered (default is true). No effect if renderMeshes is false.

***

### REFRESHRATE\_RENDER\_ONCE

> `readonly` `static` **REFRESHRATE\_RENDER\_ONCE**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L49)

Objects will only be rendered once which can be useful to improve performance if everything in your render is static for instance.

***

### REFRESHRATE\_RENDER\_ONEVERYFRAME

> `readonly` `static` **REFRESHRATE\_RENDER\_ONEVERYFRAME**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L53)

Objects will be rendered every frame and is recommended for dynamic contents.

***

### REFRESHRATE\_RENDER\_ONEVERYTWOFRAMES

> `readonly` `static` **REFRESHRATE\_RENDER\_ONEVERYTWOFRAMES**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L58)

Objects will be rendered every 2 frames which could be enough if your dynamic objects are not
the central point of your effect and can save a lot of performances.

## Accessors

### currentRefreshId

#### Get Signature

> **get** **currentRefreshId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L348)

Gets the current value of the refreshId counter

##### Returns

`number`

***

### disableDepthPrePass

#### Get Signature

> **get** **disableDepthPrePass**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:215](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L215)

Specifies to disable depth pre-pass if true (default: false)

##### Returns

`boolean`

#### Set Signature

> **set** **disableDepthPrePass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L219)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### disableImageProcessing

#### Get Signature

> **get** **disableImageProcessing**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L190)

If true, the object renderer will render all objects without any image processing applied.
If false (default value), the renderer will use the current setting of the scene's image processing configuration.

##### Returns

`boolean`

#### Set Signature

> **set** **disableImageProcessing**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L194)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L307)

Friendly name of the object renderer

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L311)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### refreshRate

#### Get Signature

> **get** **refreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L551)

Defines the refresh rate of the rendering or the rendering frequency.
Use 0 to render just once, 1 to render on every frame, 2 to render every two frames and so on...

##### Returns

`number`

#### Set Signature

> **set** **refreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:554](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L554)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### renderingManager

#### Get Signature

> **get** **renderingManager**(): [`RenderingManager`](RenderingManager.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:1028](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L1028)

Gets the rendering manager

##### Returns

[`RenderingManager`](RenderingManager.md)

***

### renderList

#### Get Signature

> **get** **renderList**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L72)

Use this list to define the list of mesh you want to render.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

#### Set Signature

> **set** **renderList**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L76)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

##### Returns

`void`

***

### renderPassIds

#### Get Signature

> **get** **renderPassIds**(): readonly `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:341](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L341)

Gets the render pass ids used by the object renderer.

##### Returns

readonly `number`[]

## Methods

### clone()

> **clone**(): `ObjectRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:1067](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L1067)

Clones the renderer.

#### Returns

`ObjectRenderer`

the cloned renderer

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:1080](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L1080)

Dispose the renderer and release its associated resources.

#### Returns

`void`

***

### finishRender()

> **finishRender**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:693](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L693)

This method must be called after the "render" call(s), to complete the rendering process.

#### Returns

`void`

***

### freeRenderingGroups()

> **freeRenderingGroups**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:1121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L1121)

Clear the info related to rendering groups preventing retention point in material dispose.

#### Returns

`void`

***

### getActiveMeshes()

> **getActiveMeshes**(): [`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L356)

Gets the array of active meshes

#### Returns

[`SmartArray`](SmartArray.md)\<[`AbstractMesh`](AbstractMesh.md)\>

an array of AbstractMesh

***

### initRender()

> **initRender**(`viewportWidth`, `viewportHeight`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:662](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L662)

This method makes sure everything is setup before "render" can be called

#### Parameters

##### viewportWidth

`number`

Width of the viewport to render to

##### viewportHeight

`number`

Height of the viewport to render to

#### Returns

`void`

***

### isReadyForRendering()

> **isReadyForRendering**(`viewportWidth`, `viewportHeight`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L597)

This function will check if the renderer is ready to render (textures are loaded, shaders are compiled)

#### Parameters

##### viewportWidth

`number`

defines the width of the viewport

##### viewportHeight

`number`

defines the height of the viewport

#### Returns

`boolean`

true if all required resources are ready

***

### prepareRenderList()

> **prepareRenderList**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L612)

Makes sure the list of meshes is ready to be rendered
You should call this function before "initRender", but if you know the render list is ok, you may call "initRender" directly

#### Returns

`void`

***

### render()

> **render**(`passIndex?`, `skipOnAfterRenderObservable?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:722](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L722)

Renders all the objects (meshes, particles systems, sprites) to the currently bound render target texture.

#### Parameters

##### passIndex?

`number` = `0`

defines the pass index to use (default: 0)

##### skipOnAfterRenderObservable?

`boolean` = `false`

defines a flag to skip raising the onAfterRenderObservable

#### Returns

`void`

***

### resetRefreshCounter()

> **resetRefreshCounter**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:543](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L543)

Resets the refresh counter of the renderer and start back from scratch.
Could be useful to re-render if it is setup to render only once.

#### Returns

`void`

***

### setMaterialForRendering()

> **setMaterialForRendering**(`mesh`, `material?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L365)

Sets a specific material to be used to render a mesh/a list of meshes with this object renderer

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md) \| [`AbstractMesh`](AbstractMesh.md)[]

mesh or array of meshes

##### material?

[`Material`](Material.md) \| [`Material`](Material.md)[]

material or array of materials to use for this render pass. If undefined is passed, no specific material will be used but the regular material instead (mesh.material). It's possible to provide an array of materials to use a different material for each rendering pass.

#### Returns

`void`

***

### setRenderingAutoClearDepthStencil()

> **setRenderingAutoClearDepthStencil**(`renderingGroupId`, `autoClearDepthStencil`, `depth?`, `stencil?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:1058](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L1058)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:1041](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L1041)

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

***

### shouldRender()

> **shouldRender**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/objectRenderer.ts:566](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/objectRenderer.ts#L566)

Indicates if the renderer should render the current frame.
The output is based on the specified refresh rate.
When snapshot rendering is active, this always returns true to ensure render pass
topology stays consistent between the recording frame and playback frames.

#### Returns

`boolean`

true if the renderer should render the current frame
