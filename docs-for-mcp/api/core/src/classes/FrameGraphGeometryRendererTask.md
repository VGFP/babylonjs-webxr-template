[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphGeometryRendererTask

# Class: FrameGraphGeometryRendererTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L42)

Task used to render geometry to a set of textures.

## Extends

- [`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md)

## Constructors

### Constructor

> **new FrameGraphGeometryRendererTask**(`name`, `frameGraph`, `scene`, `options?`, `existingObjectRenderer?`): `FrameGraphGeometryRendererTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L187)

Constructs a new geometry renderer task.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph the task belongs to.

##### scene

[`Scene`](Scene.md)

The scene the frame graph is associated with.

##### options?

[`ObjectRendererOptions`](../interfaces/ObjectRendererOptions.md)

The options of the object renderer.

##### existingObjectRenderer?

[`ObjectRenderer`](ObjectRenderer.md)

An existing object renderer to use (optional). If provided, the options parameter will be ignored.

#### Returns

`FrameGraphGeometryRendererTask`

#### Overrides

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`constructor`](FrameGraphObjectRendererTask.md#constructor)

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`dependencies`](FrameGraphObjectRendererTask.md#dependencies)

***

### depthTest

> **depthTest**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L69)

If depth testing should be enabled (default is true).

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`depthTest`](FrameGraphObjectRendererTask.md#depthtest)

***

### depthTexture?

> `optional` **depthTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L40)

The depth attachment texture where the objects will be rendered (optional).

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`depthTexture`](FrameGraphObjectRendererTask.md#depthtexture)

***

### depthWrite

> **depthWrite**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L74)

If depth writing should be enabled (default is true).

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`depthWrite`](FrameGraphObjectRendererTask.md#depthwrite)

***

### disableShadows

> **disableShadows**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L79)

If shadows should be disabled (default is false).

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`disableShadows`](FrameGraphObjectRendererTask.md#disableshadows)

***

### dontRenderWhenMaterialDepthWriteIsDisabled

> **dontRenderWhenMaterialDepthWriteIsDisabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L79)

Indicates if a mesh shouldn't be rendered when its material has depth write disabled (default is true).

***

### geometryAlbedoTexture

> `readonly` **geometryAlbedoTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L145)

The albedo output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryIrradianceTexture

> `readonly` **geometryIrradianceTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L104)

The irradiance output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryLinearVelocityTexture

> `readonly` **geometryLinearVelocityTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L160)

The linear velocity output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryLocalPositionTexture

> `readonly` **geometryLocalPositionTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L135)

The position (in local space) output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryNormViewDepthTexture

> `readonly` **geometryNormViewDepthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L115)

The normalized depth (in view space) output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!
The normalization is (d - near) / (far - near), where d is the depth value in view space and near and far are the near and far planes of the camera.

***

### geometryReflectivityTexture

> `readonly` **geometryReflectivityTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L150)

The reflectivity output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryScreenDepthTexture

> `readonly` **geometryScreenDepthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L120)

The depth (in screen space) output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryVelocityTexture

> `readonly` **geometryVelocityTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L155)

The velocity output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryViewDepthTexture

> `readonly` **geometryViewDepthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L109)

The depth (in view space) output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryViewNormalTexture

> `readonly` **geometryViewNormalTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L125)

The normal (in view space) output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryWorldNormalTexture

> `readonly` **geometryWorldNormalTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L130)

The normal (in world space) output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### geometryWorldPositionTexture

> `readonly` **geometryWorldPositionTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L140)

The position (in world space) output texture. Will point to a valid texture only if that texture has been requested in textureDescriptions!

***

### isMainObjectRenderer

> **isMainObjectRenderer**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L105)

Sets this property to true if this task is the main object renderer of the frame graph.
It will help to locate the main object renderer in the frame graph when multiple object renderers are used.
This is useful for the inspector to know which object renderer to use for additional rendering features like wireframe rendering or frustum light debugging.
It is also used to determine the main camera used by the frame graph: this is the camera used by the main object renderer.

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`isMainObjectRenderer`](FrameGraphObjectRendererTask.md#ismainobjectrenderer)

***

### objectList

> **objectList**: [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L64)

The list of objects to render.

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`objectList`](FrameGraphObjectRendererTask.md#objectlist)

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`onAfterTaskExecute`](FrameGraphObjectRendererTask.md#onaftertaskexecute)

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`onBeforeTaskExecute`](FrameGraphObjectRendererTask.md#onbeforetaskexecute)

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`onTexturesAllocatedObservable`](FrameGraphObjectRendererTask.md#ontexturesallocatedobservable)

***

### outputDepthTexture

> `readonly` **outputDepthTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L331)

The output depth attachment texture.
This texture will point to the same texture than the depthTexture property if it is set.
Note, however, that the handle itself will be different!

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`outputDepthTexture`](FrameGraphObjectRendererTask.md#outputdepthtexture)

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L324)

The output texture.
This texture will point to the same texture than the targetTexture property.
Note, however, that the handle itself will be different!

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`outputTexture`](FrameGraphObjectRendererTask.md#outputtexture)

***

### resolveMSAAColors

> **resolveMSAAColors**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L312)

If true, targetTexture will be resolved at the end of the render pass, if this/these texture(s) is/are MSAA (default: true)

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`resolveMSAAColors`](FrameGraphObjectRendererTask.md#resolvemsaacolors)

***

### resolveMSAADepth

> **resolveMSAADepth**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:317](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L317)

If true, depthTexture will be resolved at the end of the render pass, if this texture is provided and is MSAA (default: false).

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`resolveMSAADepth`](FrameGraphObjectRendererTask.md#resolvemsaadepth)

***

### samples

> **samples**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L56)

The number of samples to use for the output textures (default is 1).

***

### shadowGenerators?

> `optional` **shadowGenerators?**: [`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L45)

The shadow generators used to render the objects (optional).

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`shadowGenerators`](FrameGraphObjectRendererTask.md#shadowgenerators)

***

### size

> **size**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L46)

The size of the output textures (default is 100% of the back buffer texture size).

#### height

> **height**: `number`

#### width

> **width**: `number`

***

### sizeIsPercentage

> **sizeIsPercentage**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L51)

Whether the size is a percentage of the back buffer size (default is true).

***

### targetTexture

> **targetTexture**: `number` \| `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L35)

The target texture(s) where the objects will be rendered.

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`targetTexture`](FrameGraphObjectRendererTask.md#targettexture)

***

### textureDescriptions

> **textureDescriptions**: [`IFrameGraphGeometryRendererTextureDescription`](../interfaces/IFrameGraphGeometryRendererTextureDescription.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L99)

The list of texture descriptions used by the geometry renderer task.

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L52)

Gets or sets the camera used to render the objects.

##### Returns

[`Camera`](Camera.md)

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L56)

##### Parameters

###### camera

[`Camera`](Camera.md)

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`camera`](FrameGraphObjectRendererTask.md#camera)

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L43)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`disabled`](FrameGraphObjectRendererTask.md#disabled)

***

### disableDepthPrePass

#### Get Signature

> **get** **disableDepthPrePass**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L87)

Indicates whether the depth pre-pass is disabled (default is true).
Materials that require depth pre-pass (Material.needDepthPrePass == true) don't work with the geometry renderer, that's why this setting is true by default.
However, if the geometry renderer doesn't generate any geometry textures but only renders to the main target texture, then depth pre-pass can be enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disableDepthPrePass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L91)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### disableImageProcessing

#### Get Signature

> **get** **disableImageProcessing**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:86](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L86)

If image processing should be disabled (default is false).
false means that the default image processing configuration will be applied (the one from the scene)

##### Returns

`boolean`

#### Set Signature

> **set** **disableImageProcessing**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L90)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`disableImageProcessing`](FrameGraphObjectRendererTask.md#disableimageprocessing)

***

### enableBoundingBoxRendering

#### Get Signature

> **get** **enableBoundingBoxRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L279)

Enables the rendering of bounding boxes for meshes (still subject to Mesh.showBoundingBox or scene.forceShowBoundingBoxes). Default is true.

##### Returns

`boolean`

#### Set Signature

> **set** **enableBoundingBoxRendering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:283](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L283)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`enableBoundingBoxRendering`](FrameGraphObjectRendererTask.md#enableboundingboxrendering)

***

### enableOutlineRendering

#### Get Signature

> **get** **enableOutlineRendering**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L296)

Enables the rendering of outlines/overlays for meshes (still subject to Mesh.renderOutline/Mesh.renderOverlay). Default is true.

##### Returns

`boolean`

#### Set Signature

> **set** **enableOutlineRendering**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L300)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`enableOutlineRendering`](FrameGraphObjectRendererTask.md#enableoutlinerendering)

***

### excludedSkinnedMeshFromVelocityTexture

#### Get Signature

> **get** **excludedSkinnedMeshFromVelocityTexture**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L230)

Gets the list of excluded meshes from the velocity texture.

##### Returns

[`AbstractMesh`](AbstractMesh.md)[]

***

### forceLayerMaskCheck

#### Get Signature

> **get** **forceLayerMaskCheck**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L262)

Forces checking the layerMask property even if a custom list of meshes is provided (ie. if renderList is not undefined). Default is true.

##### Returns

`boolean`

#### Set Signature

> **set** **forceLayerMaskCheck**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L266)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`forceLayerMaskCheck`](FrameGraphObjectRendererTask.md#forcelayermaskcheck)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L165)

Gets or sets the name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L169)

The name of the task.

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`name`](FrameGraphObjectRendererTask.md#name)

***

### objectRenderer

#### Get Signature

> **get** **objectRenderer**(): [`ObjectRenderer`](ObjectRenderer.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L336)

The object renderer used to render the objects.

##### Returns

[`ObjectRenderer`](ObjectRenderer.md)

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`objectRenderer`](FrameGraphObjectRendererTask.md#objectrenderer)

***

### oitPassCount

#### Get Signature

> **get** **oitPassCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L213)

Defines the number of passes to use for Order Independent Transparency (default is 5).

##### Returns

`number`

#### Set Signature

> **set** **oitPassCount**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L217)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`oitPassCount`](FrameGraphObjectRendererTask.md#oitpasscount)

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`passes`](FrameGraphObjectRendererTask.md#passes)

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`passesDisabled`](FrameGraphObjectRendererTask.md#passesdisabled)

***

### renderAlphaTestMeshes

#### Get Signature

> **get** **renderAlphaTestMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L160)

Defines if alpha test meshes should be rendered (default is true). Always subject to the renderMeshes property, though.

##### Returns

`boolean`

#### Set Signature

> **set** **renderAlphaTestMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L164)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`renderAlphaTestMeshes`](FrameGraphObjectRendererTask.md#renderalphatestmeshes)

***

### renderDepthOnlyMeshes

#### Get Signature

> **get** **renderDepthOnlyMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L128)

Defines if depth only meshes should be rendered (default is true). Always subject to the renderMeshes property, though.

##### Returns

`boolean`

#### Set Signature

> **set** **renderDepthOnlyMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L132)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`renderDepthOnlyMeshes`](FrameGraphObjectRendererTask.md#renderdepthonlymeshes)

***

### renderMeshes

#### Get Signature

> **get** **renderMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L111)

Defines if meshes should be rendered (default is true).

##### Returns

`boolean`

#### Set Signature

> **set** **renderMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L115)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`renderMeshes`](FrameGraphObjectRendererTask.md#rendermeshes)

***

### renderOpaqueMeshes

#### Get Signature

> **get** **renderOpaqueMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L144)

Defines if opaque meshes should be rendered (default is true). Always subject to the renderMeshes property, though.

##### Returns

`boolean`

#### Set Signature

> **set** **renderOpaqueMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L148)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`renderOpaqueMeshes`](FrameGraphObjectRendererTask.md#renderopaquemeshes)

***

### renderParticles

#### Get Signature

> **get** **renderParticles**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L228)

Defines if particles should be rendered (default is true).

##### Returns

`boolean`

#### Set Signature

> **set** **renderParticles**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L232)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`renderParticles`](FrameGraphObjectRendererTask.md#renderparticles)

***

### renderSprites

#### Get Signature

> **get** **renderSprites**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L245)

Defines if sprites should be rendered (default is true).

##### Returns

`boolean`

#### Set Signature

> **set** **renderSprites**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:249](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L249)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`renderSprites`](FrameGraphObjectRendererTask.md#rendersprites)

***

### renderTransparentMeshes

#### Get Signature

> **get** **renderTransparentMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L176)

Defines if transparent meshes should be rendered (default is true). Always subject to the renderMeshes property, though.

##### Returns

`boolean`

#### Set Signature

> **set** **renderTransparentMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L180)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`renderTransparentMeshes`](FrameGraphObjectRendererTask.md#rendertransparentmeshes)

***

### reverseCulling

#### Get Signature

> **get** **reverseCulling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L63)

Whether to reverse culling (default is false).

##### Returns

`boolean`

#### Set Signature

> **set** **reverseCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L67)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useOITForTransparentMeshes

#### Get Signature

> **get** **useOITForTransparentMeshes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:194](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L194)

Defines if Order Independent Transparency should be used for transparent meshes (default is false).

##### Returns

`boolean`

#### Set Signature

> **set** **useOITForTransparentMeshes**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L199)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`useOITForTransparentMeshes`](FrameGraphObjectRendererTask.md#useoitfortransparentmeshes)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L331)

Disposes of the task.

#### Returns

`void`

#### Overrides

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`dispose`](FrameGraphObjectRendererTask.md#dispose)

***

### excludeSkinnedMeshFromVelocityTexture()

> **excludeSkinnedMeshFromVelocityTexture**(`skinnedMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L239)

Excludes the given skinned mesh from computing bones velocities.
Computing bones velocities can have a cost. The cost can be saved by calling this function and by passing the skinned mesh to ignore.

#### Parameters

##### skinnedMesh

[`AbstractMesh`](AbstractMesh.md)

The mesh containing the skeleton to ignore when computing the velocity map.

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L261)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`getClassName`](FrameGraphObjectRendererTask.md#getclassname)

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L90)

This function is called once after the task has been added to the frame graph and before the frame graph is built for the first time.
This allows you to initialize asynchronous resources, which is not possible in the constructor.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the initialization is complete.

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`initAsync`](FrameGraphObjectRendererTask.md#initasync)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/objectRendererTask.ts#L400)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`isReady`](FrameGraphObjectRendererTask.md#isready)

***

### record()

> **record**(`skipCreationOfDisabledPasses?`, `additionalExecute?`): [`FrameGraphRenderPass`](FrameGraphRenderPass.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:265](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L265)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Parameters

##### skipCreationOfDisabledPasses?

`boolean` = `false`

If true, the disabled passe(s) won't be created.

##### additionalExecute?

(`context`) => `void`

#### Returns

[`FrameGraphRenderPass`](FrameGraphRenderPass.md)

#### Overrides

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`record`](FrameGraphObjectRendererTask.md#record)

***

### removeExcludedSkinnedMeshFromVelocityTexture()

> **removeExcludedSkinnedMeshFromVelocityTexture**(`skinnedMesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Tasks/Rendering/geometryRendererTask.ts#L253)

Removes the given skinned mesh from the excluded meshes to integrate bones velocities while rendering the velocity map.

#### Parameters

##### skinnedMesh

[`AbstractMesh`](AbstractMesh.md)

The mesh containing the skeleton that has been ignored previously.

#### Returns

`void`

#### See

excludeSkinnedMesh to exclude a skinned mesh from bones velocity computation.

***

### setOutputLayerAndFaceIndices()

> **setOutputLayerAndFaceIndices**(`indices`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTaskMultiRenderTarget.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/frameGraphTaskMultiRenderTarget.ts#L15)

Sets the output layer and face indices for multi-target rendering.

#### Parameters

##### indices

[`LayerAndFaceIndex`](../type-aliases/LayerAndFaceIndex.md)[]

The array of layer and face indices.

#### Returns

`void`

#### Inherited from

[`FrameGraphObjectRendererTask`](FrameGraphObjectRendererTask.md).[`setOutputLayerAndFaceIndices`](FrameGraphObjectRendererTask.md#setoutputlayerandfaceindices)
