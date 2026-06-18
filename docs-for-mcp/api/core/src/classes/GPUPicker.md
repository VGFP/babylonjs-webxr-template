[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GPUPicker

# Class: GPUPicker

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L129)

Class used to perform a picking operation using GPU
GPUPicker can pick meshes, instances and thin instances

## Constructors

### Constructor

> **new GPUPicker**(): `GPUPicker`

#### Returns

`GPUPicker`

## Accessors

### defaultRenderMaterials

#### Get Signature

> **get** **defaultRenderMaterials**(): readonly [`Nullable`](../type-aliases/Nullable.md)\<[`ShaderMaterial`](ShaderMaterial.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L204)

Gets the default render materials used by the picker.

index is Material filling mode

##### Returns

readonly [`Nullable`](../type-aliases/Nullable.md)\<[`ShaderMaterial`](ShaderMaterial.md)\>[]

***

### enableDepthPicking

#### Get Signature

> **get** **enableDepthPicking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:219](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L219)

Gets or sets a boolean indicating if depth-based pickedPoint and normal reconstruction should be enabled.

When disabled, GPUPicker uses the original single-color render target and shader path. When enabled, GPUPicker
switches to a MultiRenderTarget and compiles the default picking shader with GPUPICKER_DEPTH to output both the
picking id and the depth required to reconstruct the picked point and normal.

Custom picking materials and special picking material plugins should also write the depth attachment. If they do
not, GPUPicker will still try to reconstruct pickedPoint and normal from the depth target, but the returned values
may be missing or incorrect.

##### Returns

`boolean`

#### Set Signature

> **set** **enableDepthPicking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L223)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### pickingInProgress

#### Get Signature

> **get** **pickingInProgress**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:195](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L195)

Gets a boolean indicating if the picking is in progress

##### Returns

`boolean`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L186)

Gets the shader language used in this generator.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### addPickingList()

> **addPickingList**(`list`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:519](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L519)

Add array of meshes to the current picking list

#### Parameters

##### list

([`AbstractMesh`](AbstractMesh.md) \| \{ `material`: [`ShaderMaterial`](ShaderMaterial.md); `mesh`: [`AbstractMesh`](AbstractMesh.md); \})[]

defines the array of meshes to add to the current picking list

#### Returns

`void`

***

### boxPickAsync()

> **boxPickAsync**(`x1`, `y1`, `x2`, `y2`, `disposeWhenDone?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:883](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L883)

Execute a picking operation on box defined by two screen coordinates

#### Parameters

##### x1

`number`

defines the X coordinate of the first corner of the box where to run the pick

##### y1

`number`

defines the Y coordinate of the first corner of the box where to run the pick

##### x2

`number`

defines the X coordinate of the opposite corner of the box where to run the pick

##### y2

`number`

defines the Y coordinate of the opposite corner of the box where to run the pick

##### disposeWhenDone?

`boolean` = `false`

defines a boolean indicating we do not want to keep resources alive (false by default)

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

A promise with the picking results. Contains one entry for each picked pixel in the box.

***

### clearPickingList()

> **clearPickingList**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:456](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L456)

Clear the current picking list and free resources

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:1898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L1898)

Release the resources

#### Returns

`void`

***

### multiPickAsync()

> **multiPickAsync**(`xy`, `disposeWhenDone?`, `options?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:787](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L787)

Execute a picking operation on multiple coordinates

#### Parameters

##### xy

`IVector2Like`[]

defines the X,Y coordinates where to run the pick

##### disposeWhenDone?

`boolean` = `false`

defines a boolean indicating we do not want to keep resources alive (false by default)

##### options?

[`IGPUMultiPickOptions`](../interfaces/IGPUMultiPickOptions.md)

defines options used to tune the multi pick readback strategy

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

A promise with the picking results. Always returns an array with the same length as the number of coordinates. The mesh or null at the index where no mesh was picked.

***

### pickAsync()

> **pickAsync**(`x`, `y`, `disposeWhenDone?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUPickingInfo`](../interfaces/IGPUPickingInfo.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:751](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L751)

Execute a picking operation

#### Parameters

##### x

`number`

defines the X coordinates where to run the pick

##### y

`number`

defines the Y coordinates where to run the pick

##### disposeWhenDone?

`boolean` = `false`

defines a boolean indicating we do not want to keep resources alive (false by default)

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUPickingInfo`](../interfaces/IGPUPickingInfo.md)\>\>

A promise with the picking results

***

### setPickingList()

> **setPickingList**(`list`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:437](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Collisions/gpuPicker.ts#L437)

Set the list of meshes to pick from
Set that value to null to clear the list (and avoid leaks)
The module will read and delete from the array provided by reference. Disposing the module or setting the value to null will clear the array.

#### Parameters

##### list

[`Nullable`](../type-aliases/Nullable.md)\<([`AbstractMesh`](AbstractMesh.md) \| \{ `material`: [`ShaderMaterial`](ShaderMaterial.md); `mesh`: [`AbstractMesh`](AbstractMesh.md); \})[]\>

defines the list of meshes to pick from

#### Returns

`void`
