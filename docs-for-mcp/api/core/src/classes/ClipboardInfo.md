[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ClipboardInfo

# Class: ClipboardInfo

Defined in: [babylonjs-source/packages/dev/core/src/Events/clipboardEvents.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/clipboardEvents.ts#L22)

This class is used to store clipboard related info for the onClipboardObservable event.

## Constructors

### Constructor

> **new ClipboardInfo**(`type`, `event`): `ClipboardInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Events/clipboardEvents.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/clipboardEvents.ts#L28)

Creates an instance of ClipboardInfo.

#### Parameters

##### type

`number`

Defines the type of event (BABYLON.ClipboardEventTypes)

##### event

`ClipboardEvent`

Defines the related dom event

#### Returns

`ClipboardInfo`

## Properties

### event

> **event**: `ClipboardEvent`

Defined in: [babylonjs-source/packages/dev/core/src/Events/clipboardEvents.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/clipboardEvents.ts#L36)

Defines the related dom event

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/clipboardEvents.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/clipboardEvents.ts#L32)

Defines the type of event (BABYLON.ClipboardEventTypes)

## Methods

### GetTypeFromCharacter()

> `static` **GetTypeFromCharacter**(`keyCode`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/clipboardEvents.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/clipboardEvents.ts#L44)

Get the clipboard event's type from the keycode.

#### Parameters

##### keyCode

`number`

Defines the keyCode for the current keyboard event.

#### Returns

`number`
