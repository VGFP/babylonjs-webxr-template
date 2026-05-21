[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_texture\_basisu

# Class: KHR\_texture\_basisu

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.ts#L14)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_texture\_basisu**(`exporter`): `KHR_texture_basisu`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.ts#L29)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`KHR_texture_basisu`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.ts#L17)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_texture_basisu"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.ts#L15)

The name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.ts#L19)

Gets a boolean indicating that this extension is required for the file to work

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Accessors

### wasUsed

#### Get Signature

> **get** **wasUsed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.ts#L23)

Gets a boolean indicating that this extension was used

##### Returns

`boolean`

#### Implementation of

`IGLTFExporterExtensionV2.wasUsed`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.ts#L33)

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportTexture()

> **postExportTexture**(`_`, `textureInfo`): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.ts#L35)

Define this method to get notified when a texture info is created

#### Parameters

##### \_

`string`

##### textureInfo

`ITextureInfo`

The glTF texture info

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.postExportTexture`
