[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InputMapEntry

# Type Alias: InputMapEntry\<TInteraction\>

> **InputMapEntry**\<`TInteraction`\> = [`PointerInputMapEntry`](PointerInputMapEntry.md)\<`TInteraction`\> \| [`WheelInputMapEntry`](WheelInputMapEntry.md)\<`TInteraction`\> \| [`TouchInputMapEntry`](TouchInputMapEntry.md)\<`TInteraction`\> \| [`KeyboardInputMapEntry`](KeyboardInputMapEntry.md)\<`TInteraction`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L128)

A single mapping rule: source + optional conditions → interaction type.
The inputMap is an ordered array on the movement class; first matching entry wins.
The interaction string should match a handler property name on the camera's movement subclass.

Discriminated union by `source` — only fields relevant to that source are available.

## Type Parameters

### TInteraction

`TInteraction` *extends* `string` = `string`
