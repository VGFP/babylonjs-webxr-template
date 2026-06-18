[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseValue

# Function: ParseValue()

> **ParseValue**(`dataView`, `offset`, `type`, `size`): `string` \| `number` \| `number`[] \| `object`[] \| \{ `blueX`: `number`; `blueY`: `number`; `greenX`: `number`; `greenY`: `number`; `redX`: `number`; `redY`: `number`; `whiteX`: `number`; `whiteY`: `number`; \} \| \{ `xMax`: `number`; `xMin`: `number`; `yMax`: `number`; `yMin`: `number`; \} \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.core.ts:348](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.core.ts#L348)

Parse a value from the data view

## Parameters

### dataView

`DataView`

defines the data view to read from

### offset

[`DataCursor`](../interfaces/DataCursor.md)

defines the current offset in the data view

### type

`string`

defines the type of the value to read

### size

`number`

defines the size of the value to read

## Returns

`string` \| `number` \| `number`[] \| `object`[] \| \{ `blueX`: `number`; `blueY`: `number`; `greenX`: `number`; `greenY`: `number`; `redX`: `number`; `redY`: `number`; `whiteX`: `number`; `whiteY`: `number`; \} \| \{ `xMax`: `number`; `xMin`: `number`; `yMax`: `number`; `yMin`: `number`; \} \| `undefined`

the parsed value
