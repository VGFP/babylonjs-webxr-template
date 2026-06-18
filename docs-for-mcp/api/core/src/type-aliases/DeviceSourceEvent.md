[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeviceSourceEvent

# Type Alias: DeviceSourceEvent\<T\>

> **DeviceSourceEvent**\<`T`\> = `T` *extends* [`Keyboard`](../enumerations/DeviceType.md#keyboard) ? [`IKeyboardEvent`](../interfaces/IKeyboardEvent.md) : `T` *extends* [`Mouse`](../enumerations/DeviceType.md#mouse) ? [`IWheelEvent`](../interfaces/IWheelEvent.md) \| [`IPointerEvent`](../interfaces/IPointerEvent.md) : `T` *extends* [`Touch`](../enumerations/DeviceType.md#touch) ? [`IPointerEvent`](../interfaces/IPointerEvent.md) : `never`

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts#L10)

Subset of DeviceInput that only handles pointers and keyboard

## Type Parameters

### T

`T` *extends* [`DeviceType`](../enumerations/DeviceType.md)
