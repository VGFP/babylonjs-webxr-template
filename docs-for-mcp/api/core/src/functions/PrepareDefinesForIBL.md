[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForIBL

# Function: PrepareDefinesForIBL()

> **PrepareDefinesForIBL**(`scene`, `reflectionTexture`, `defines`, `realTimeFiltering?`, `realTimeFilteringQuality?`, `forceSHInVertex?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:784](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L784)

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
