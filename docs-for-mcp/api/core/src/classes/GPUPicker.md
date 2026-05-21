[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GPUPicker

# Class: GPUPicker

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L54)

Class used to perform a picking operation using GPU
GPUPIcker can pick meshes, instances and thin instances

## Constructors

### Constructor

> **new GPUPicker**(): `GPUPicker`

#### Returns

`GPUPicker`

## Accessors

### defaultRenderMaterials

#### Get Signature

> **get** **defaultRenderMaterials**(): readonly [`Nullable`](../type-aliases/Nullable.md)\<[`ShaderMaterial`](ShaderMaterial.md)\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L110)

Gets the default render materials used by the picker.

index is Material filling mode

##### Returns

readonly [`Nullable`](../type-aliases/Nullable.md)\<[`ShaderMaterial`](ShaderMaterial.md)\>[]

***

### pickingInProgress

#### Get Signature

> **get** **pickingInProgress**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L101)

Gets a boolean indicating if the picking is in progress

##### Returns

`boolean`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L92)

Gets the shader language used in this generator.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### addPickingList()

> **addPickingList**(`list`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:305](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L305)

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

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:637](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L637)

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

A promise with the picking results. Always returns an array with the same length as the number of coordinates. The mesh or null at the index where no mesh was picked.

***

### clearPickingList()

> **clearPickingList**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L242)

Clear the current picking list and free resources

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:1020](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L1020)

Release the resources

#### Returns

`void`

***

### multiPickAsync()

> **multiPickAsync**(`xy`, `disposeWhenDone?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:570](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L570)

Execute a picking operation on multiple coordinates

#### Parameters

##### xy

`IVector2Like`[]

defines the X,Y coordinates where to run the pick

##### disposeWhenDone?

`boolean` = `false`

defines a boolean indicating we do not want to keep resources alive (false by default)

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

A promise with the picking results. Always returns an array with the same length as the number of coordinates. The mesh or null at the index where no mesh was picked.

***

### pickAsync()

> **pickAsync**(`x`, `y`, `disposeWhenDone?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUPickingInfo`](../interfaces/IGPUPickingInfo.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L537)

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

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/gpuPicker.ts:223](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/gpuPicker.ts#L223)

Set the list of meshes to pick from
Set that value to null to clear the list (and avoid leaks)
The module will read and delete from the array provided by reference. Disposing the module or setting the value to null will clear the array.

#### Parameters

##### list

[`Nullable`](../type-aliases/Nullable.md)\<([`AbstractMesh`](AbstractMesh.md) \| \{ `material`: [`ShaderMaterial`](ShaderMaterial.md); `mesh`: [`AbstractMesh`](AbstractMesh.md); \})[]\>

defines the list of meshes to pick from

#### Returns

`void`
