[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Tags

# Class: Tags

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tags.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tags.ts#L6)

Class used to store custom tags

## Constructors

### Constructor

> **new Tags**(): `Tags`

#### Returns

`Tags`

## Methods

### AddTagsTo()

> `static` **AddTagsTo**(`obj`, `tagsString`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tags.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tags.ts#L91)

Adds tags to an object

#### Parameters

##### obj

`any`

defines the object to use

##### tagsString

`string`

defines the tag string. The tags 'true' and 'false' are reserved and cannot be used as tags.
A tag cannot start with '||', '&&', and '!'. It cannot contain whitespaces

#### Returns

`void`

***

### DisableFor()

> `static` **DisableFor**(`obj`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tags.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tags.ts#L35)

Removes tags support

#### Parameters

##### obj

`any`

defines the object to use

#### Returns

`void`

***

### EnableFor()

> `static` **EnableFor**(`obj`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tags.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tags.ts#L11)

Adds support for tags on the given object

#### Parameters

##### obj

`any`

defines the object to use

#### Returns

`void`

***

### GetTags()

> `static` **GetTags**(`obj`, `asString?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tags.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tags.ts#L68)

Gets the tags available on a given object

#### Parameters

##### obj

`any`

defines the object to use

##### asString?

`boolean` = `true`

defines if the tags must be returned as a string instead of an array of strings

#### Returns

`any`

the tags

***

### HasTags()

> `static` **HasTags**(`obj`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tags.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tags.ts#L48)

Gets a boolean indicating if the given object has tags

#### Parameters

##### obj

`any`

defines the object to use

#### Returns

`boolean`

a boolean

***

### MatchesQuery()

> `static` **MatchesQuery**(`obj`, `tagsQuery`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tags.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tags.ts#L152)

Defines if tags hosted on an object match a given query

#### Parameters

##### obj

`any`

defines the object to use

##### tagsQuery

`string`

defines the tag query

#### Returns

`boolean`

a boolean

***

### RemoveTagsFrom()

> `static` **RemoveTagsFrom**(`obj`, `tagsString`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tags.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tags.ts#L129)

Removes specific tags from a specific object

#### Parameters

##### obj

`any`

defines the object to use

##### tagsString

`string`

defines the tags to remove

#### Returns

`void`
