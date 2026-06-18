[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InputConditions

# Type Alias: InputConditions

> **InputConditions** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L140)

Flat conditions object passed to resolveInteraction().
Only the fields relevant to the source type need to be set.
Per-source condition types (PointerConditions, KeyboardConditions, etc.) are subtypes
of this and should be used at call sites for clarity.

## Properties

### button?

> `optional` **button?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L142)

Mouse button (0=left, 1=middle, 2=right)

***

### key?

> `optional` **key?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L148)

Key code of the current key being resolved

***

### modifiers?

> `optional` **modifiers?**: [`InputModifiers`](InputModifiers.md)

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:144](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L144)

Current modifier key state

***

### touchCount?

> `optional` **touchCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L146)

Number of active touch points
