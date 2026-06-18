[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ValidatedNativeDataStream

# Class: ValidatedNativeDataStream

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L14)

Validated Native Data Stream

## Constructors

### Constructor

> **new ValidatedNativeDataStream**(): `ValidatedNativeDataStream`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L15)

#### Returns

`ValidatedNativeDataStream`

#### Overrides

`NativeDataStream.constructor`

## Methods

### writeBoolean()

> **writeBoolean**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L54)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L29)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L44)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L24)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L39)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L49)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L19)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/Native/validatedNativeDataStream.pure.ts#L34)

Writes a uint32 array to the stream

#### Parameters

##### values

`Uint32Array`

the values to write

#### Returns

`void`

#### Overrides

`NativeDataStream.writeUint32Array`
