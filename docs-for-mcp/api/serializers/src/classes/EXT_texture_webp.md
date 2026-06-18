[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / EXT\_texture\_webp

# Class: EXT\_texture\_webp

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_webp.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_webp.ts#L14)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_texture_webp/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new EXT\_texture\_webp**(`exporter`): `EXT_texture_webp`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_webp.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_webp.ts#L29)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`EXT_texture_webp`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_webp.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_webp.ts#L17)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"EXT_texture_webp"` = `NAME`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_webp.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_webp.ts#L15)

The name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_webp.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_webp.ts#L19)

Gets a boolean indicating that this extension is required for the file to work

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Accessors

### wasUsed

#### Get Signature

> **get** **wasUsed**(): `boolean`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_webp.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_webp.ts#L23)

Gets a boolean indicating that this extension was used

##### Returns

`boolean`

#### Implementation of

`IGLTFExporterExtensionV2.wasUsed`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_webp.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_webp.ts#L33)

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportTexture()

> **postExportTexture**(`_`, `textureInfo`): `void`

Defined in: [babylonjs-source/packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_webp.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_webp.ts#L35)

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
