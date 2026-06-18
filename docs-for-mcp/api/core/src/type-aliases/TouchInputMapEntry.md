[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TouchInputMapEntry

# Type Alias: TouchInputMapEntry\<TInteraction\>

> **TouchInputMapEntry**\<`TInteraction`\> = `object` & [`TouchConditions`](TouchConditions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L90)

Mapping rule for touch inputs.

## Type Declaration

### interaction

> **interaction**: `TInteraction`

### sensitivity?

> `optional` **sensitivity?**: `number`

Multiplier applied to input deltas before passing to the handler. Default is 1.

### sensitivityX?

> `optional` **sensitivityX?**: `number`

Optional per-axis override for the X component. Falls back to `sensitivity` if unset.

### sensitivityY?

> `optional` **sensitivityY?**: `number`

Optional per-axis override for the Y component. Falls back to `sensitivity` if unset.

### source

> **source**: `"touch"`

## Type Parameters

### TInteraction

`TInteraction` *extends* `string` = `string`
