[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForIBL

# Function: PrepareDefinesForIBL()

> **PrepareDefinesForIBL**(`scene`, `reflectionTexture`, `defines`, `realTimeFiltering?`, `realTimeFilteringQuality?`, `forceSHInVertex?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:771](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialHelper.functions.ts#L771)

Prepare defines relating to IBL logic.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene

### reflectionTexture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

The texture to use for IBL

### defines

`any`

The defines to update

### realTimeFiltering?

`boolean` = `false`

Whether realtime filting of IBL texture is being used

### realTimeFilteringQuality?

`number` = `Constants.TEXTURE_FILTERING_QUALITY_LOW`

The quality of realtime filtering

### forceSHInVertex?

`boolean` = `false`

Whether the SH are handled in the vertex shader

## Returns

`boolean`

true if the defines were updated
