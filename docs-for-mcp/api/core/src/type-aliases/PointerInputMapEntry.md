[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointerInputMapEntry

# Type Alias: PointerInputMapEntry\<TInteraction\>

> **PointerInputMapEntry**\<`TInteraction`\> = `object` & [`PointerConditions`](PointerConditions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L64)

Mapping rule for pointer (mouse button) inputs.

## Type Declaration

### interaction

> **interaction**: `TInteraction`

### sensitivity?

> `optional` **sensitivity?**: `number`

Multiplier applied to input deltas before passing to the handler. Default is 1.

### sensitivityX?

> `optional` **sensitivityX?**: `number`

Optional per-axis override for the X (horizontal / yaw) component. Falls back to `sensitivity` if unset.

### sensitivityY?

> `optional` **sensitivityY?**: `number`

Optional per-axis override for the Y (vertical / pitch) component. Falls back to `sensitivity` if unset.

### source

> **source**: `"pointer"`

## Type Parameters

### TInteraction

`TInteraction` *extends* `string` = `string`
