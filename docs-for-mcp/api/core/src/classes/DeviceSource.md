[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeviceSource

# Class: DeviceSource\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts#L21)

Class that handles all input for a specific device

## Type Parameters

### T

`T` *extends* [`DeviceType`](../enumerations/DeviceType.md)

## Constructors

### Constructor

> **new DeviceSource**\<`T`\>(`deviceInputSystem`, `deviceType`, `deviceSlot?`): `DeviceSource`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts#L37)

Default Constructor

#### Parameters

##### deviceInputSystem

`IDeviceInputSystem`

Reference to DeviceInputSystem

##### deviceType

`T`

Type of device

##### deviceSlot?

`number` = `0`

"Slot" or index that device is referenced in

#### Returns

`DeviceSource`\<`T`\>

## Properties

### deviceSlot

> `readonly` **deviceSlot**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts#L42)

[0] "Slot" or index that device is referenced in

***

### deviceType

> `readonly` **deviceType**: `T`

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts#L40)

Type of device

***

### onInputChangedObservable

> `readonly` **onInputChangedObservable**: [`Observable`](Observable.md)\<[`DeviceSourceEvent`](../type-aliases/DeviceSourceEvent.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts#L26)

Observable to handle device input changes per device

## Methods

### getInput()

> **getInput**(`inputIndex`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts#L52)

Get input for specific input

#### Parameters

##### inputIndex

[`DeviceInput`](../type-aliases/DeviceInput.md)\<`T`\>

index of specific input on device

#### Returns

`number`

Input value from DeviceInputSystem
