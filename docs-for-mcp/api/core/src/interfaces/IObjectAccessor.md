[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IObjectAccessor

# Interface: IObjectAccessor\<GLTFTargetType, BabylonTargetType, BabylonValueType\>

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L30)

An accessor that allows modifying properties on some other object.

## Type Parameters

### GLTFTargetType

`GLTFTargetType` = `any`

### BabylonTargetType

`BabylonTargetType` = `any`

### BabylonValueType

`BabylonValueType` = `any`

## Properties

### componentsCount?

> `optional` **componentsCount?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L36)

The number of components that are changed in the property when setting this value.
This will usually be 1. But, for example, Babylon has both orthoLeft and orthoRight (two components) properties that are changed when setting xmag (single value in glTF).
Defaults to 1 if not provided!

***

### get

> **get**: (`target`, `index?`, `payload?`) => `BabylonValueType` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L44)

Get the value of the property.

#### Parameters

##### target

`GLTFTargetType`

##### index?

`number`

##### payload?

`any`

#### Returns

`BabylonValueType` \| `undefined`

***

### ~~getPropertyName?~~

> `optional` **getPropertyName?**: (`target`) => `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L56)

#### Parameters

##### target

`GLTFTargetType`

#### Returns

`string`

#### Deprecated

Use get instead

***

### getTarget

> **getTarget**: (`target`, `index?`, `payload?`) => `BabylonTargetType` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L48)

Get the target of the property.

#### Parameters

##### target

`GLTFTargetType`

##### index?

`number`

##### payload?

`any`

#### Returns

`BabylonTargetType` \| `undefined`

***

### interpolation?

> `optional` **interpolation?**: [`IInterpolationPropertyInfo`](IInterpolationPropertyInfo.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L68)

Interpolation/animation information for the property.
This is an array that can be used to animate the value over time.

***

### isReadOnly?

> `optional` **isReadOnly?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L52)

is the property readonly?

***

### set?

> `optional` **set?**: (`newValue`, `target`, `index?`, `payload?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L63)

Set a new value to the property.

#### Parameters

##### newValue

`BabylonValueType`

the new value to set

##### target

`GLTFTargetType`

the target object

##### index?

`number`

the index of the target object in the array (optional)

##### payload?

`any`

#### Returns

`void`

***

### type

> **type**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/FlowGraph/typeDefinitions.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L40)

The (babylon) type of the property.
