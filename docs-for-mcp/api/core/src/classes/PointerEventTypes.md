[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointerEventTypes

# Class: PointerEventTypes

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L12)

Gather the list of pointer event types as constants.

## Constructors

### Constructor

> **new PointerEventTypes**(): `PointerEventTypes`

#### Returns

`PointerEventTypes`

## Properties

### POINTERDOUBLETAP

> `readonly` `static` **POINTERDOUBLETAP**: `64` = `0x40`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L40)

The pointerdoubletap event is fired when a the object has been touched and released twice without drag.

***

### POINTERDOWN

> `readonly` `static` **POINTERDOWN**: `1` = `0x01`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L16)

The pointerdown event is fired when a pointer becomes active. For mouse, it is fired when the device transitions from no buttons depressed to at least one button depressed. For touch, it is fired when physical contact is made with the digitizer. For pen, it is fired when the stylus makes physical contact with the digitizer.

***

### POINTERMOVE

> `readonly` `static` **POINTERMOVE**: `4` = `0x04`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L24)

The pointermove event is fired when a pointer changes coordinates.

***

### POINTERPICK

> `readonly` `static` **POINTERPICK**: `16` = `0x10`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L32)

The pointerpick event is fired when a mesh or sprite has been picked by the pointer.

***

### POINTERTAP

> `readonly` `static` **POINTERTAP**: `32` = `0x20`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L36)

The pointertap event is fired when a the object has been touched and released without drag.

***

### POINTERUP

> `readonly` `static` **POINTERUP**: `2` = `0x02`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L20)

The pointerup event is fired when a pointer is no longer active.

***

### POINTERWHEEL

> `readonly` `static` **POINTERWHEEL**: `8` = `0x08`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Events/pointerEvents.ts#L28)

The pointerwheel event is fired when a mouse wheel has been rotated.
