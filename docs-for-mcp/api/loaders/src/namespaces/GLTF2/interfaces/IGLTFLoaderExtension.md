[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFLoaderExtension

# Interface: IGLTFLoaderExtension

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L34)

Interface for a glTF loader extension.

## Extends

- [`IGLTFLoaderExtension`](../../../interfaces/IGLTFLoaderExtension.md).[`IDisposable`](../../../../../core/src/interfaces/IDisposable.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L144)

Defines whether this extension is enabled.

#### Inherited from

[`IGLTFLoaderExtension`](../../../interfaces/IGLTFLoaderExtension.md).[`enabled`](../../../interfaces/IGLTFLoaderExtension.md#enabled)

***

### name

> `readonly` **name**: `string`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L139)

The name of this extension.

#### Inherited from

[`IGLTFLoaderExtension`](../../../interfaces/IGLTFLoaderExtension.md).[`name`](../../../interfaces/IGLTFLoaderExtension.md#name)

***

### order?

> `optional` **order?**: `number`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/glTFFileLoader.ts:150](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/glTFFileLoader.ts#L150)

Defines the order of this extension.
The loader sorts the extensions using these values when loading.

#### Inherited from

[`IGLTFLoaderExtension`](../../../interfaces/IGLTFLoaderExtension.md).[`order`](../../../interfaces/IGLTFLoaderExtension.md#order)

## Methods

### createMaterial()?

> `optional` **createMaterial**(`context`, `material`, `babylonDrawMode`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`Material`](../../../../../core/src/classes/Material.md)\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L123)

Define this method to modify the default behavior when creating materials.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](IMaterial.md)

The glTF material property

##### babylonDrawMode

`number`

The draw mode for the Babylon material

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`Material`](../../../../../core/src/classes/Material.md)\>

The Babylon material or null if not handled

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](../../../../../core/src/interfaces/IDisposable.md).[`dispose`](../../../../../core/src/interfaces/IDisposable.md#dispose)

***

### loadAnimationAsync()?

> `optional` **loadAnimationAsync**(`context`, `animation`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<[`AnimationGroup`](../../../../../core/src/classes/AnimationGroup.md)\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L159)

Define this method to modify the default behavior when loading animations.

#### Parameters

##### context

`string`

The context when loading the asset

##### animation

[`IAnimation`](IAnimation.md)

The glTF animation property

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<[`AnimationGroup`](../../../../../core/src/classes/AnimationGroup.md)\>\>

A promise that resolves with the loaded Babylon animation group when the load is complete or null if not handled

***

### loadBufferAsync()?

> `optional` **loadBufferAsync**(`context`, `buffer`, `byteOffset`, `byteLength`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:215](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L215)

Define this method to modify the default behavior when loading buffers.

#### Parameters

##### context

`string`

The context when loading the asset

##### buffer

[`IBuffer`](IBuffer.md)

The glTF buffer property

##### byteOffset

`number`

The byte offset to load

##### byteLength

`number`

The byte length to load

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

A promise that resolves with the loaded data when the load is complete or null if not handled

***

### loadBufferViewAsync()?

> `optional` **loadBufferViewAsync**(`context`, `bufferView`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L205)

Define this method to modify the default behavior when loading buffer views.

#### Parameters

##### context

`string`

The context when loading the asset

##### bufferView

[`IBufferView`](IBufferView.md)

The glTF buffer view property

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

A promise that resolves with the loaded data when the load is complete or null if not handled

***

### loadCameraAsync()?

> `optional` **loadCameraAsync**(`context`, `camera`, `assign`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<[`Camera`](../../../../../core/src/classes/Camera.md)\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L69)

Define this method to modify the default behavior when loading cameras.

#### Parameters

##### context

`string`

The context when loading the asset

##### camera

[`ICamera`](ICamera.md)

The glTF camera property

##### assign

(`babylonCamera`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<[`Camera`](../../../../../core/src/classes/Camera.md)\>\>

A promise that resolves with the loaded Babylon camera when the load is complete or null if not handled

***

### loadMaterialPropertiesAsync()?

> `optional` **loadMaterialPropertiesAsync**(`context`, `material`, `babylonMaterial`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`void`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L132)

Define this method to modify the default behavior when loading material properties.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](IMaterial.md)

The glTF material property

##### babylonMaterial

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`void`\>\>

A promise that resolves when the load is complete or null if not handled

***

### loadNodeAsync()?

> `optional` **loadNodeAsync**(`context`, `node`, `assign`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L60)

Define this method to modify the default behavior when loading nodes.

#### Parameters

##### context

`string`

The context when loading the asset

##### node

[`INode`](INode.md)

The glTF node property

##### assign

(`babylonMesh`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>\>

A promise that resolves with the loaded Babylon transform node when the load is complete or null if not handled

***

### loadSceneAsync()?

> `optional` **loadSceneAsync**(`context`, `scene`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`void`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L51)

Define this method to modify the default behavior when loading scenes.

#### Parameters

##### context

`string`

The context when loading the asset

##### scene

[`IScene`](IScene.md)

The glTF scene property

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`void`\>\>

A promise that resolves when the load is complete or null if not handled

***

### loadTextureInfoAsync()?

> `optional` **loadTextureInfoAsync**(`context`, `textureInfo`, `assign`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:141](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L141)

Define this method to modify the default behavior when loading texture infos.

#### Parameters

##### context

`string`

The context when loading the asset

##### textureInfo

[`ITextureInfo`](ITextureInfo.md)

The glTF texture info property

##### assign

(`babylonTexture`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>\>

A promise that resolves with the loaded Babylon texture when the load is complete or null if not handled

***

### onLoading()?

> `optional` **onLoading**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L38)

Called after the loader state changes to LOADING.

#### Returns

`void`

***

### onReady()?

> `optional` **onReady**(): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/glTFLoaderExtension.ts#L43)

Called after the loader state changes to READY.

#### Returns

`void`
