[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / KHR\_animation\_pointer

# Class: KHR\_animation\_pointer

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_animation\_pointer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.ts#L32)

[Specification PR](https://github.com/KhronosGroup/glTF/pull/2147)
!!! Experimental Extension Subject to Changes !!!

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### name

> `readonly` **name**: `"KHR_animation_pointer"` = `NAME`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_animation\_pointer.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.ts#L36)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

## Accessors

### enabled

#### Get Signature

> **get** **enabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_animation\_pointer.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.ts#L52)

Defines whether this extension is enabled.

##### Returns

`boolean`

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

## Methods

### \_loadAnimationChannelAsync()

> **\_loadAnimationChannelAsync**(`context`, `animationContext`, `animation`, `channel`, `onLoad`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`void`\>\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_animation\_pointer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_animation_pointer.ts#L72)

Loads a glTF animation channel.

#### Parameters

##### context

`string`

The context when loading the asset

##### animationContext

`string`

The context of the animation when loading the asset

##### animation

[`IAnimation`](../interfaces/IAnimation.md)

The glTF animation property

##### channel

[`IAnimationChannel`](../interfaces/IAnimationChannel.md)

The glTF animation channel property

##### onLoad

(`babylonAnimatable`, `babylonAnimation`) => `void`

Called for each animation loaded

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`void`\>\>

A void promise that resolves when the load is complete or null if not handled

#### Implementation of

`IGLTFLoaderExtension._loadAnimationChannelAsync`
