[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ValidatedNativeDataStream

# Class: ValidatedNativeDataStream

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L19)

Validated Native Data Stream

## Constructors

### Constructor

> **new ValidatedNativeDataStream**(): `ValidatedNativeDataStream`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L20)

#### Returns

`ValidatedNativeDataStream`

#### Overrides

`NativeDataStream.constructor`

## Methods

### writeBoolean()

> **writeBoolean**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L59)

Writes a boolean to the stream

#### Parameters

##### value

`boolean`

the value to write

#### Returns

`void`

#### Overrides

`NativeDataStream.writeBoolean`

***

### writeFloat32()

> **writeFloat32**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L34)

Writes a float32 to the stream

#### Parameters

##### value

`number`

the value to write

#### Returns

`void`

#### Overrides

`NativeDataStream.writeFloat32`

***

### writeFloat32Array()

> **writeFloat32Array**(`values`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L49)

Writes a float32 array to the stream

#### Parameters

##### values

`Float32Array`

the values to write

#### Returns

`void`

#### Overrides

`NativeDataStream.writeFloat32Array`

***

### writeInt32()

> **writeInt32**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L29)

Writes an int32 to the stream

#### Parameters

##### value

`number`

the value to write

#### Returns

`void`

#### Overrides

`NativeDataStream.writeInt32`

***

### writeInt32Array()

> **writeInt32Array**(`values`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L44)

Writes an int32 array to the stream

#### Parameters

##### values

`Int32Array`

the values to write

#### Returns

`void`

#### Overrides

`NativeDataStream.writeInt32Array`

***

### writeNativeData()

> **writeNativeData**(`handle`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L54)

Writes native data to the stream

#### Parameters

##### handle

`NativeData`

the handle to the native data

#### Returns

`void`

#### Overrides

`NativeDataStream.writeNativeData`

***

### writeUint32()

> **writeUint32**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L24)

Writes a uint32 to the stream

#### Parameters

##### value

`number`

the value to write

#### Returns

`void`

#### Overrides

`NativeDataStream.writeUint32`

***

### writeUint32Array()

> **writeUint32Array**(`values`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/Native/validatedNativeDataStream.ts#L39)

Writes a uint32 array to the stream

#### Parameters

##### values

`Uint32Array`

the values to write

#### Returns

`void`

#### Overrides

`NativeDataStream.writeUint32Array`
