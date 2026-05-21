[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / GLTFLoader

# Class: GLTFLoader

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L196)

The glTF 2.0 loader

## Properties

### \_babylonLights

> **\_babylonLights**: [`Light`](../../../../../core/src/classes/Light.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L207)

Storage

***

### DefaultSampler

> `readonly` `static` **DefaultSampler**: [`ISampler`](../interfaces/ISampler.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L251)

The default glTF sampler.

## Accessors

### babylonScene

#### Get Signature

> **get** **babylonScene**(): [`Scene`](../../../../../core/src/classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:301](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L301)

The Babylon scene when loading the asset.

##### Returns

[`Scene`](../../../../../core/src/classes/Scene.md)

***

### bin

#### Get Signature

> **get** **bin**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`IDataBuffer`](../../../../../core/src/interfaces/IDataBuffer.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L287)

The BIN chunk of a binary glTF.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`IDataBuffer`](../../../../../core/src/interfaces/IDataBuffer.md)\>

***

### gltf

#### Get Signature

> **get** **gltf**(): [`IGLTF`](../interfaces/IGLTF.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:276](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L276)

The object that represents the glTF JSON.

##### Returns

[`IGLTF`](../interfaces/IGLTF.md)

***

### parent

#### Get Signature

> **get** **parent**(): [`GLTFFileLoader`](../../../classes/GLTFFileLoader.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:294](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L294)

The parent file loader.

##### Returns

[`GLTFFileLoader`](../../../classes/GLTFFileLoader.md)

***

### rootBabylonMesh

#### Get Signature

> **get** **rootBabylonMesh**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L312)

The root Babylon node when loading the asset.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>

***

### rootUrl

#### Get Signature

> **get** **rootUrl**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L319)

The root url when loading the asset.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string`\>

## Methods

### createMaterial()

> **createMaterial**(`context`, `material`, `babylonDrawMode`): [`Material`](../../../../../core/src/classes/Material.md)

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2349](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2349)

Creates a Babylon material from a glTF material.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](../interfaces/IMaterial.md)

The glTF material property

##### babylonDrawMode

`number`

The draw mode for the Babylon material

#### Returns

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

***

### endPerformanceCounter()

> **endPerformanceCounter**(`counterName`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:3159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L3159)

Ends a performance counter.

#### Parameters

##### counterName

`string`

The name of the performance counter

#### Returns

`void`

***

### isExtensionUsed()

> **isExtensionUsed**(`name`): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:3120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L3120)

Checks for presence of an extension.

#### Parameters

##### name

`string`

The name of the extension to check

#### Returns

`boolean`

A boolean indicating the presence of the given extension name in `extensionsUsed`

***

### isMatchingMaterialType()

> **isMatchingMaterialType**(`material`): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L241)

Test if the given material is of the same type as the one used by the loader

#### Parameters

##### material

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`Material`](../../../../../core/src/classes/Material.md)\>

The material to test

#### Returns

`boolean`

true if the material is of the same type, false otherwise

***

### loadAnimationAsync()

> **loadAnimationAsync**(`context`, `animation`): `Promise`\<[`AnimationGroup`](../../../../../core/src/classes/AnimationGroup.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:1733](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L1733)

Loads a glTF animation.

#### Parameters

##### context

`string`

The context when loading the asset

##### animation

[`IAnimation`](../interfaces/IAnimation.md)

The glTF animation property

#### Returns

`Promise`\<[`AnimationGroup`](../../../../../core/src/classes/AnimationGroup.md)\>

A promise that resolves with the loaded Babylon animation group when the load is complete

***

### loadBufferAsync()

> **loadBufferAsync**(`context`, `buffer`, `byteOffset`, `byteLength`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:1990](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L1990)

Loads a glTF buffer.

#### Parameters

##### context

`string`

The context when loading the asset

##### buffer

[`IBuffer`](../interfaces/IBuffer.md)

The glTF buffer property

##### byteOffset

`number`

The byte offset to use

##### byteLength

`number`

The byte length to use

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves with the loaded data when the load is complete

***

### loadBufferViewAsync()

> **loadBufferViewAsync**(`context`, `bufferView`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2023](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2023)

Loads a glTF buffer view.

#### Parameters

##### context

`string`

The context when loading the asset

##### bufferView

[`IBufferView`](../interfaces/IBufferView.md)

The glTF buffer view property

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves with the loaded data when the load is complete

***

### loadCameraAsync()

> **loadCameraAsync**(`context`, `camera`, `assign?`): `Promise`\<[`Camera`](../../../../../core/src/classes/Camera.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:1639](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L1639)

Loads a glTF camera.

#### Parameters

##### context

`string`

The context when loading the asset

##### camera

[`ICamera`](../interfaces/ICamera.md)

The glTF camera property

##### assign?

(`babylonCamera`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

`Promise`\<[`Camera`](../../../../../core/src/classes/Camera.md)\>

A promise that resolves with the loaded Babylon camera when the load is complete

***

### loadImageAsync()

> **loadImageAsync**(`context`, `image`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2650](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2650)

Loads a glTF image.

#### Parameters

##### context

`string`

The context when loading the asset

##### image

[`IImage`](../interfaces/IImage.md)

The glTF image property

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves with the loaded data when the load is complete

***

### loadMaterialAlphaProperties()

> **loadMaterialAlphaProperties**(`context`, `material`, `babylonMaterial`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2470)

Loads the alpha properties from a glTF material into a Babylon material.
Must be called after the setting the albedo texture of the Babylon material when the material has an albedo texture.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](../interfaces/IMaterial.md)

The glTF material property

##### babylonMaterial

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

#### Returns

`void`

***

### loadMaterialBasePropertiesAsync()

> **loadMaterialBasePropertiesAsync**(`context`, `material`, `babylonMaterial`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2394)

Loads the normal, occlusion, and emissive properties from a glTF material into a Babylon material.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](../interfaces/IMaterial.md)

The glTF material property

##### babylonMaterial

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

#### Returns

`Promise`\<`void`\>

A promise that resolves when the load is complete

***

### loadMaterialPropertiesAsync()

> **loadMaterialPropertiesAsync**(`context`, `material`, `babylonMaterial`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2368](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2368)

Loads properties from a glTF material into a Babylon material.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](../interfaces/IMaterial.md)

The glTF material property

##### babylonMaterial

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

#### Returns

`Promise`\<`void`\>

A promise that resolves when the load is complete

***

### loadNodeAsync()

> **loadNodeAsync**(`context`, `node`, `assign?`): `Promise`\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:913](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L913)

Loads a glTF node.

#### Parameters

##### context

`string`

The context when loading the asset

##### node

[`INode`](../interfaces/INode.md)

The glTF node property

##### assign?

(`babylonTransformNode`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

`Promise`\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>

A promise that resolves with the loaded Babylon mesh when the load is complete

***

### loadSceneAsync()

> **loadSceneAsync**(`context`, `scene`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:752](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L752)

Loads a glTF scene.

#### Parameters

##### context

`string`

The context when loading the asset

##### scene

[`IScene`](../interfaces/IScene.md)

The glTF scene property

#### Returns

`Promise`\<`void`\>

A promise that resolves when the load is complete

***

### loadTextureInfoAsync()

> **loadTextureInfoAsync**(`context`, `textureInfo`, `assign?`): `Promise`\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2514](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2514)

Loads a glTF texture info.

#### Parameters

##### context

`string`

The context when loading the asset

##### textureInfo

[`ITextureInfo`](../interfaces/ITextureInfo.md)

The glTF texture info property

##### assign?

(`babylonTexture`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

`Promise`\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

A promise that resolves with the loaded Babylon texture when the load is complete

***

### loadUriAsync()

> **loadUriAsync**(`context`, `property`, `uri`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2674](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2674)

Loads a glTF uri.

#### Parameters

##### context

`string`

The context when loading the asset

##### property

`IProperty`

The glTF property associated with the uri

##### uri

`string`

The base64 or relative uri

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves with the loaded data when the load is complete

***

### log()

> **log**(`message`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:3143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L3143)

Logs a message

#### Parameters

##### message

`string`

The message to log

#### Returns

`void`

***

### logClose()

> **logClose**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:3135](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L3135)

Decrements the indentation level.

#### Returns

`void`

***

### logOpen()

> **logOpen**(`message`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:3128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L3128)

Increments the indentation level and logs a message.

#### Parameters

##### message

`string`

The message to log

#### Returns

`void`

***

### startPerformanceCounter()

> **startPerformanceCounter**(`counterName`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:3151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L3151)

Starts a performance counter.

#### Parameters

##### counterName

`string`

The name of the performance counter

#### Returns

`void`

***

### AddPointerMetadata()

> `static` **AddPointerMetadata**(`babylonObject`, `pointer`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:2717](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L2717)

Adds a JSON pointer to the _internalMetadata of the Babylon object at `<object>._internalMetadata.gltf.pointers`.

#### Parameters

##### babylonObject

`IWithMetadata`

the Babylon object with _internalMetadata

##### pointer

`string`

the JSON pointer

#### Returns

`void`

***

### LoadExtensionAsync()

> `static` **LoadExtensionAsync**\<`TExtension`, `TResult`\>(`context`, `property`, `extensionName`, `actionAsync`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:3066](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L3066)

Helper method called by a loader extension to load an glTF extension.

#### Type Parameters

##### TExtension

`TExtension` = `unknown`

##### TResult

`TResult` = `void`

#### Parameters

##### context

`string`

The context when loading the asset

##### property

`IProperty`

The glTF property to load the extension from

##### extensionName

`string`

The name of the extension to load

##### actionAsync

(`extensionContext`, `extension`) => [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

The action to run

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

The promise returned by actionAsync or null if the extension does not exist

***

### LoadExtraAsync()

> `static` **LoadExtraAsync**\<`TExtra`, `TResult`\>(`context`, `property`, `extensionName`, `actionAsync`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:3095](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L3095)

Helper method called by a loader extension to load a glTF extra.

#### Type Parameters

##### TExtra

`TExtra` = `unknown`

##### TResult

`TResult` = `void`

#### Parameters

##### context

`string`

The context when loading the asset

##### property

`IProperty`

The glTF property to load the extra from

##### extensionName

`string`

The name of the extension to load

##### actionAsync

(`extraContext`, `extra`) => [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

The action to run

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

The promise returned by actionAsync or null if the extra does not exist

***

### ~~RegisterExtension()~~

> `static` **RegisterExtension**(`name`, `factory`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L259)

Registers a loader extension.

#### Parameters

##### name

`string`

The name of the loader extension.

##### factory

[`GLTFExtensionFactory`](../type-aliases/GLTFExtensionFactory.md)

The factory function that creates the loader extension.

#### Returns

`void`

#### Deprecated

Please use registerGLTFExtension instead.

***

### ~~UnregisterExtension()~~

> `static` **UnregisterExtension**(`name`): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/glTFLoader.ts#L269)

Unregisters a loader extension.

#### Parameters

##### name

`string`

The name of the loader extension.

#### Returns

`boolean`

A boolean indicating whether the extension has been unregistered

#### Deprecated

Please use unregisterGLTFExtension instead.
