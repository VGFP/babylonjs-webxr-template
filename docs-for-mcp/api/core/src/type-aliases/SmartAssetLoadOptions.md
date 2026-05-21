[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SmartAssetLoadOptions

# Type Alias: SmartAssetLoadOptions

> **SmartAssetLoadOptions** = `SmartAssetRegistrationOptions` & `object`

Defined in: [babylonjs-source/packages/dev/core/src/SmartAssets/smartAssetManager.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/SmartAssets/smartAssetManager.ts#L62)

Optional load-time configuration. Includes the persistable SmartAssetRegistrationOptions
fields (type, extension, metadata) plus a transient `reloadSource` callback used by
[ReloadSmartAssetAsync](../functions/ReloadSmartAssetAsync.md) to fetch fresh bytes from disk for blob-backed assets.

## Type Declaration

### reloadSource?

> `readonly` `optional` **reloadSource?**: () => `Promise`\<`File`\>

Optional callback invoked by [ReloadSmartAssetAsync](../functions/ReloadSmartAssetAsync.md) to obtain a fresh File
for the asset. Use this when the registered URL is a `blob:` URL backed by a
`FileSystemFileHandle` so Reload can re-read the underlying file from disk.

#### Returns

`Promise`\<`File`\>
