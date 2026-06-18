[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointerInfoBase

# Class: PointerInfoBase

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L46)

Base class of pointer info types.

## Extended by

- [`PointerInfoPre`](PointerInfoPre.md)
- [`PointerInfo`](PointerInfo.md)

## Constructors

### Constructor

> **new PointerInfoBase**(`type`, `event`): `PointerInfoBase`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L52)

Instantiates the base class of pointers info.

#### Parameters

##### type

`number`

Defines the type of event (PointerEventTypes)

##### event

[`IMouseEvent`](../interfaces/IMouseEvent.md)

Defines the related dom event

#### Returns

`PointerInfoBase`

## Properties

### event

> **event**: [`IMouseEvent`](../interfaces/IMouseEvent.md)

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L60)

Defines the related dom event

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L56)

Defines the type of event (PointerEventTypes)
