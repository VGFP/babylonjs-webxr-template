[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeviceSourceManager

# Class: DeviceSourceManager

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts#L13)

Class to keep track of devices

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)
- `IObservableManager`

## Constructors

### Constructor

> **new DeviceSourceManager**(`engine`): `DeviceSourceManager`

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts#L72)

Default constructor

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

Used to get canvas (if applicable)

#### Returns

`DeviceSourceManager`

## Properties

### onDeviceConnectedObservable

> `readonly` **onDeviceConnectedObservable**: [`Observable`](Observable.md)\<`DeviceSourceType`\>

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts#L18)

Observable to be triggered when after a device is connected, any new observers added will be triggered against already connected devices

#### Implementation of

`IObservableManager.onDeviceConnectedObservable`

***

### onDeviceDisconnectedObservable

> `readonly` **onDeviceDisconnectedObservable**: [`Observable`](Observable.md)\<`DeviceSourceType`\>

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts#L23)

Observable to be triggered when after a device is disconnected

#### Implementation of

`IObservableManager.onDeviceDisconnectedObservable`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts#L107)

Dispose of DeviceSourceManager

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getDeviceSource()

> **getDeviceSource**\<`T`\>(`deviceType`, `deviceSlot?`): [`Nullable`](../type-aliases/Nullable.md)\<[`DeviceSource`](DeviceSource.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts#L38)

Gets a DeviceSource, given a type and slot

#### Type Parameters

##### T

`T` *extends* [`DeviceType`](../enumerations/DeviceType.md)

#### Parameters

##### deviceType

`T`

Type of Device

##### deviceSlot?

`number`

Slot or ID of device

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DeviceSource`](DeviceSource.md)\<`T`\>\>

DeviceSource

***

### getDeviceSources()

> **getDeviceSources**\<`T`\>(`deviceType`): readonly [`DeviceSource`](DeviceSource.md)\<`T`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/DeviceInput/InputDevices/deviceSourceManager.ts#L58)

Gets an array of DeviceSource objects for a given device type

#### Type Parameters

##### T

`T` *extends* [`DeviceType`](../enumerations/DeviceType.md)

#### Parameters

##### deviceType

`T`

Type of Device

#### Returns

readonly [`DeviceSource`](DeviceSource.md)\<`T`\>[]

All available DeviceSources of a given type
