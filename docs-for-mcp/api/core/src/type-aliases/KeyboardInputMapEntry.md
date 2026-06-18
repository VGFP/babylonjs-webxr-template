[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / KeyboardInputMapEntry

# Type Alias: KeyboardInputMapEntry\<TInteraction\>

> **KeyboardInputMapEntry**\<`TInteraction`\> = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L107)

Mapping rule for keyboard inputs.
The `key` field on the entry supports a single key code or an array of key codes for matching.
When resolving, the condition's `key` is checked against the entry's `key` value(s).

## Type Parameters

### TInteraction

`TInteraction` *extends* `string` = `string`

## Properties

### interaction

> **interaction**: `TInteraction`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L111)

Interaction type to dispatch when this entry matches

***

### key?

> `optional` **key?**: `number` \| `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:115](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L115)

Key code filter(s). Supports a single code or an array. Omit to match any key.

***

### modifiers?

> `optional` **modifiers?**: [`InputModifiers`](InputModifiers.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L117)

Modifier keys that must be active for this entry to match. Omit to match regardless of modifiers.

***

### sensitivity?

> `optional` **sensitivity?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:113](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L113)

Multiplier applied to input deltas before passing to the handler. Default is 1.

***

### source

> **source**: `"keyboard"`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L109)

Discriminator: keyboard input source
