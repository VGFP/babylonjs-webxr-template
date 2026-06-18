[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeviceInput

# Type Alias: DeviceInput\<T\>

> **DeviceInput**\<`T`\> = `T` *extends* [`Keyboard`](../enumerations/DeviceType.md#keyboard) \| [`Generic`](../enumerations/DeviceType.md#generic) ? `number` : `T` *extends* [`Mouse`](../enumerations/DeviceType.md#mouse) \| [`Touch`](../enumerations/DeviceType.md#touch) ? `Exclude`\<[`PointerInput`](../enumerations/PointerInput.md), [`Move`](../enumerations/PointerInput.md#move) \| [`MouseWheelX`](../enumerations/PointerInput.md#mousewheelx) \| [`MouseWheelY`](../enumerations/PointerInput.md#mousewheely) \| [`MouseWheelZ`](../enumerations/PointerInput.md#mousewheelz)\> : `T` *extends* [`DualShock`](../enumerations/DeviceType.md#dualshock) ? [`DualShockInput`](../enumerations/DualShockInput.md) : `T` *extends* [`Xbox`](../enumerations/DeviceType.md#xbox) ? [`XboxInput`](../enumerations/XboxInput.md) : `T` *extends* [`Switch`](../enumerations/DeviceType.md#switch) ? [`SwitchInput`](../enumerations/SwitchInput.md) : `T` *extends* [`DualSense`](../enumerations/DeviceType.md#dualsense) ? [`DualSenseInput`](../enumerations/DualSenseInput.md) : `never`

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceTypes.ts:6](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/DeviceInput/InputDevices/deviceTypes.ts#L6)

Type to handle enforcement of inputs

## Type Parameters

### T

`T` *extends* [`DeviceType`](../enumerations/DeviceType.md)
