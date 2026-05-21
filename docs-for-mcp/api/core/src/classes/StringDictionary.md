[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / StringDictionary

# Class: StringDictionary\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:8](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L8)

This class implement a typical dictionary using a string as key and the generic type T as value.
The underlying implementation relies on an associative array to ensure the best performances.
The value can be anything including 'null' but except 'undefined'

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new StringDictionary**\<`T`\>(): `StringDictionary`\<`T`\>

#### Returns

`StringDictionary`\<`T`\>

## Accessors

### count

#### Get Signature

> **get** **count**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L148)

Gets the current count

##### Returns

`number`

## Methods

### add()

> **add**(`key`, `value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L85)

Add a new key and its corresponding value

#### Parameters

##### key

`string`

the key to add

##### value

`T`

the value corresponding to the key

#### Returns

`boolean`

true if the operation completed successfully, false if we couldn't insert the key/value because there was already this key in the dictionary

***

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L140)

Clear the whole content of the dictionary

#### Returns

`void`

***

### contains()

> **contains**(`key`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L75)

Check if there's a given key in the dictionary

#### Parameters

##### key

`string`

the key to check for

#### Returns

`boolean`

true if the key is present, false otherwise

***

### copyFrom()

> **copyFrom**(`source`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L14)

This will clear this dictionary and copy the content from the 'source' one.
If the T value is a custom object, it won't be copied/cloned, the same object will be used

#### Parameters

##### source

`StringDictionary`\<`T`\>

the dictionary to take the content from and copy to this dictionary

#### Returns

`void`

***

### first()

> **first**\<`TRes`\>(`callback`): `NonNullable`\<`TRes`\> \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L172)

Execute a callback on every occurrence of the dictionary until it returns a valid TRes object.
If the callback returns null or undefined the method will iterate to the next key/value pair
Note that you can remove any element in this dictionary in the callback implementation

#### Type Parameters

##### TRes

`TRes`

#### Parameters

##### callback

(`key`, `val`) => `TRes`

the callback to execute, if it return a valid T instanced object the enumeration will stop and the object will be returned

#### Returns

`NonNullable`\<`TRes`\> \| `null`

the first item

***

### forEach()

> **forEach**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L157)

Execute a callback on each key/val of the dictionary.
Note that you can remove any element in this dictionary in the callback implementation

#### Parameters

##### callback

(`key`, `val`) => `void`

the callback to execute on a given key/value pair

#### Returns

`void`

***

### get()

> **get**(`key`): `T` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L24)

Get a value based from its key

#### Parameters

##### key

`string`

the given key to get the matching value from

#### Returns

`T` \| `undefined`

the value if found, otherwise undefined is returned

***

### getAndRemove()

> **getAndRemove**(`key`): [`Nullable`](../type-aliases/Nullable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:113](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L113)

Get the element of the given key and remove it from the dictionary

#### Parameters

##### key

`string`

defines the key to search

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`T`\>

the value associated with the key or null if not found

***

### getOrAdd()

> **getOrAdd**(`key`, `val`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L60)

Get a value from its key if present in the dictionary otherwise add it

#### Parameters

##### key

`string`

the key to get the value from

##### val

`T`

if there's no such key/value pair in the dictionary add it with this value

#### Returns

`T`

the value corresponding to the key

***

### getOrAddWithFactory()

> **getOrAddWithFactory**(`key`, `factory`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L40)

Get a value from its key or add it if it doesn't exist.
This method will ensure you that a given key/data will be present in the dictionary.

#### Parameters

##### key

`string`

the given key to get the matching value from

##### factory

(`key`) => `T`

the factory that will create the value if the key is not present in the dictionary.
The factory will only be invoked if there's no data for the given key.

#### Returns

`T`

the value corresponding to the key.

***

### remove()

> **remove**(`key`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L128)

Remove a key/value from the dictionary.

#### Parameters

##### key

`string`

the key to remove

#### Returns

`boolean`

true if the item was successfully deleted, false if no item with such key exist in the dictionary

***

### set()

> **set**(`key`, `value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/stringDictionary.ts:100](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/stringDictionary.ts#L100)

Update a specific value associated to a key

#### Parameters

##### key

`string`

defines the key to use

##### value

`T`

defines the value to store

#### Returns

`boolean`

true if the value was updated (or false if the key was not found)
