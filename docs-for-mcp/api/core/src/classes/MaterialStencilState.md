[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MaterialStencilState

# Class: MaterialStencilState

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:12](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L12)

Class that holds the different stencil states of a material
Usage example: https://playground.babylonjs.com/#CW5PRI#10

## Implements

- [`IStencilState`](../interfaces/IStencilState.md)

## Constructors

### Constructor

> **new MaterialStencilState**(): `MaterialStencilState`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L16)

Creates a material stencil state instance

#### Returns

`MaterialStencilState`

## Accessors

### backFunc

#### Get Signature

> **get** **backFunc**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L59)

Gets or sets the stencil back function

##### Returns

`number`

#### Set Signature

> **set** **backFunc**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L63)

The stencil comparison function to use for back faces.

##### Parameters

###### value

`number`

##### Returns

`void`

The stencil comparison function to use for back faces.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`backFunc`](../interfaces/IStencilState.md#backfunc)

***

### backOpDepthFail

#### Get Signature

> **get** **backOpDepthFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:150](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L150)

Gets or sets the operation when the back depth test fails

##### Returns

`number`

#### Set Signature

> **set** **backOpDepthFail**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L154)

The operation to perform when the stencil test passes but the depth test fails for back faces.

##### Parameters

###### value

`number`

##### Returns

`void`

The operation to perform when the stencil test passes but the depth test fails for back faces.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`backOpDepthFail`](../interfaces/IStencilState.md#backopdepthfail)

***

### backOpStencilDepthPass

#### Get Signature

> **get** **backOpStencilDepthPass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:163](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L163)

Gets or sets the operation when the back stencil+depth test succeeds

##### Returns

`number`

#### Set Signature

> **set** **backOpStencilDepthPass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L167)

The operation to perform when both the stencil and depth tests pass for back faces.

##### Parameters

###### value

`number`

##### Returns

`void`

The operation to perform when both the stencil and depth tests pass for back faces.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`backOpStencilDepthPass`](../interfaces/IStencilState.md#backopstencildepthpass)

***

### backOpStencilFail

#### Get Signature

> **get** **backOpStencilFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L137)

Gets or sets the operation when the back stencil test fails

##### Returns

`number`

#### Set Signature

> **set** **backOpStencilFail**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L141)

The operation to perform when the stencil test fails for back faces.

##### Parameters

###### value

`number`

##### Returns

`void`

The operation to perform when the stencil test fails for back faces.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`backOpStencilFail`](../interfaces/IStencilState.md#backopstencilfail)

***

### enabled

#### Get Signature

> **get** **enabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L189)

Enables or disables the stencil test

##### Returns

`boolean`

#### Set Signature

> **set** **enabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L193)

Whether the stencil test is enabled or not.

##### Parameters

###### value

`boolean`

##### Returns

`void`

Whether the stencil test is enabled or not.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`enabled`](../interfaces/IStencilState.md#enabled)

***

### func

#### Get Signature

> **get** **func**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L46)

Gets or sets the stencil function

##### Returns

`number`

#### Set Signature

> **set** **func**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L50)

The stencil comparison function to use for front faces.

##### Parameters

###### value

`number`

##### Returns

`void`

The stencil comparison function to use for front faces.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`func`](../interfaces/IStencilState.md#func)

***

### funcMask

#### Get Signature

> **get** **funcMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L85)

Gets or sets the stencil function mask

##### Returns

`number`

#### Set Signature

> **set** **funcMask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L89)

The stencil mask to use for reading.

##### Parameters

###### value

`number`

##### Returns

`void`

The stencil mask to use for reading.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`funcMask`](../interfaces/IStencilState.md#funcmask)

***

### funcRef

#### Get Signature

> **get** **funcRef**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L72)

Gets or sets the stencil function reference

##### Returns

`number`

#### Set Signature

> **set** **funcRef**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L76)

The reference value to use for the stencil test.

##### Parameters

###### value

`number`

##### Returns

`void`

The reference value to use for the stencil test.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`funcRef`](../interfaces/IStencilState.md#funcref)

***

### mask

#### Get Signature

> **get** **mask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L176)

Gets or sets the stencil mask

##### Returns

`number`

#### Set Signature

> **set** **mask**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L180)

The stencil mask to use for writing.

##### Parameters

###### value

`number`

##### Returns

`void`

The stencil mask to use for writing.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`mask`](../interfaces/IStencilState.md#mask)

***

### opDepthFail

#### Get Signature

> **get** **opDepthFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L111)

Gets or sets the operation when the depth test fails

##### Returns

`number`

#### Set Signature

> **set** **opDepthFail**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L115)

The operation to perform when the stencil test passes but the depth test fails for front faces.

##### Parameters

###### value

`number`

##### Returns

`void`

The operation to perform when the stencil test passes but the depth test fails for front faces.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`opDepthFail`](../interfaces/IStencilState.md#opdepthfail)

***

### opStencilDepthPass

#### Get Signature

> **get** **opStencilDepthPass**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L124)

Gets or sets the operation when the stencil+depth test succeeds

##### Returns

`number`

#### Set Signature

> **set** **opStencilDepthPass**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L128)

The operation to perform when both the stencil and depth tests pass for front faces.

##### Parameters

###### value

`number`

##### Returns

`void`

The operation to perform when both the stencil and depth tests pass for front faces.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`opStencilDepthPass`](../interfaces/IStencilState.md#opstencildepthpass)

***

### opStencilFail

#### Get Signature

> **get** **opStencilFail**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L98)

Gets or sets the operation when the stencil test fails

##### Returns

`number`

#### Set Signature

> **set** **opStencilFail**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L102)

The operation to perform when the stencil test fails for front faces.

##### Parameters

###### value

`number`

##### Returns

`void`

The operation to perform when the stencil test fails for front faces.

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`opStencilFail`](../interfaces/IStencilState.md#opstencilfail)

## Methods

### copyTo()

> **copyTo**(`stencilState`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L209)

Makes a duplicate of the current configuration into another one.

#### Parameters

##### stencilState

`MaterialStencilState`

defines stencil state where to copy the info

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L201)

Get the current class name, useful for serialization or dynamic coding.

#### Returns

`string`

"MaterialStencilState"

***

### parse()

> **parse**(`source`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L227)

Parses a stencil state configuration from a serialized object.

#### Parameters

##### source

`any`

Serialized object.

##### scene

[`Scene`](Scene.md)

Defines the scene we are parsing for

##### rootUrl

`string`

Defines the rootUrl to load from

#### Returns

`void`

***

### reset()

> **reset**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L23)

Resets all the stencil states to default values

#### Returns

`void`

#### Implementation of

[`IStencilState`](../interfaces/IStencilState.md).[`reset`](../interfaces/IStencilState.md#reset)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialStencilState.ts:217](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialStencilState.ts#L217)

Serializes this stencil configuration.

#### Returns

`any`

- An object with the serialized config.
