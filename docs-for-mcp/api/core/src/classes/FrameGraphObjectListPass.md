[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphObjectListPass

# Class: FrameGraphObjectListPass

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/objectListPass.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Passes/objectListPass.ts#L7)

Object list pass used to generate a list of objects.

## Extends

- [`FrameGraphPass`](FrameGraphPass.md)\<[`FrameGraphContext`](FrameGraphContext.md)\>

## Properties

### disabled

> **disabled**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Passes/pass.ts#L13)

Whether the pass is disabled. Disabled passes will be skipped during execution.

#### Inherited from

[`FrameGraphPass`](FrameGraphPass.md).[`disabled`](FrameGraphPass.md#disabled)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Passes/pass.ts#L17)

The name of the pass.

#### Inherited from

[`FrameGraphPass`](FrameGraphPass.md).[`name`](FrameGraphPass.md#name)

## Accessors

### objectList

#### Get Signature

> **get** **objectList**(): [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/objectListPass.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Passes/objectListPass.ts#L23)

Gets the object list used by the pass.

##### Returns

[`FrameGraphObjectList`](FrameGraphObjectList.md)

## Methods

### setExecuteFunc()

> **setExecuteFunc**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Passes/pass.ts#L35)

Sets the function to execute when the pass is executed

#### Parameters

##### func

(`context`) => `void`

The function to execute when the pass is executed

#### Returns

`void`

#### Inherited from

[`FrameGraphPass`](FrameGraphPass.md).[`setExecuteFunc`](FrameGraphPass.md#setexecutefunc)

***

### setInitializeFunc()

> **setInitializeFunc**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/pass.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Passes/pass.ts#L27)

Initializes the pass.
This function is called once after the frame graph has been built

#### Parameters

##### func

(`context`) => `void`

The function to initialize the pass.

#### Returns

`void`

#### Inherited from

[`FrameGraphPass`](FrameGraphPass.md).[`setInitializeFunc`](FrameGraphPass.md#setinitializefunc)

***

### setObjectList()

> **setObjectList**(`objectList`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/objectListPass.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Passes/objectListPass.ts#L31)

Sets the object list to use for the pass.

#### Parameters

##### objectList

[`FrameGraphObjectList`](FrameGraphObjectList.md)

The object list to use for the pass.

#### Returns

`void`

***

### IsObjectListPass()

> `static` **IsObjectListPass**(`pass`): `pass is FrameGraphObjectListPass`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Passes/objectListPass.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FrameGraph/Passes/objectListPass.ts#L16)

Checks if a pass is an object list pass.

#### Parameters

##### pass

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)

The pass to check.

#### Returns

`pass is FrameGraphObjectListPass`

True if the pass is an object list pass, else false.
