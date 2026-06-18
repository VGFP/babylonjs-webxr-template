[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InteractionName

# Type Alias: InteractionName\<THandlers\>

> **InteractionName**\<`THandlers`\> = keyof `THandlers` & `string`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:156](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L156)

Extracts the string-typed interaction names from a handlers object type.
Equivalent to `keyof THandlers & string` — filters out symbol/number keys.

## Type Parameters

### THandlers

`THandlers`
