[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SerializationHelper

# Class: SerializationHelper

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.serialization.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.serialization.ts#L83)

Class used to help serialization objects

## Constructors

### Constructor

> **new SerializationHelper**(): `SerializationHelper`

#### Returns

`SerializationHelper`

## Properties

### AllowLoadingUniqueId

> `static` **AllowLoadingUniqueId**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.serialization.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.serialization.ts#L87)

Gets or sets a boolean to indicate if the UniqueId property should be serialized

## Methods

### AppendSerializedAnimations()

> `static` **AppendSerializedAnimations**(`source`, `destination`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.serialization.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.serialization.ts#L122)

Appends the serialized animations from the source animations

#### Parameters

##### source

[`IAnimatable`](../interfaces/IAnimatable.md)

Source containing the animations

##### destination

`any`

Target to store the animations

#### Returns

`void`

***

### Clone()

> `static` **Clone**\<`T`\>(`creationFunction`, `source`, `options?`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.serialization.ts:311](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.serialization.ts#L311)

Clones an object

#### Type Parameters

##### T

`T`

#### Parameters

##### creationFunction

() => `T`

defines the function used to instanciate the new object

##### source

`T`

defines the source object

##### options?

`ICopySourceOptions` = `{}`

defines the options to use

#### Returns

`T`

the cloned object

***

### Instanciate()

> `static` **Instanciate**\<`T`\>(`creationFunction`, `source`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.serialization.ts:321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.serialization.ts#L321)

Instanciates a new object based on a source one (some data will be shared between both object)

#### Type Parameters

##### T

`T`

#### Parameters

##### creationFunction

() => `T`

defines the function used to instanciate the new object

##### source

`T`

defines the source object

#### Returns

`T`

the new object

***

### Parse()

> `static` **Parse**\<`T`\>(`creationFunction`, `source`, `scene`, `rootUrl?`): `T`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.serialization.ts:291](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.serialization.ts#L291)

Creates a new entity from a serialization data object

#### Type Parameters

##### T

`T`

#### Parameters

##### creationFunction

() => `T`

defines a function used to instanciated the new entity

##### source

`any`

defines the source serialization data

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

##### rootUrl?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

defines the root url for resources

#### Returns

`T`

a new entity

***

### ParseProperties()

> `static` **ParseProperties**(`source`, `destination`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.serialization.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.serialization.ts#L217)

Given a source json and a destination object in a scene, this function will parse the source and will try to apply its content to the destination object

#### Parameters

##### source

`any`

the source json data

##### destination

`any`

the destination object

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

the scene where the object is

##### rootUrl

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

root url to use to load assets

#### Returns

`void`

***

### Serialize()

> `static` **Serialize**\<`T`\>(`entity`, `serializationObject?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/decorators.serialization.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/decorators.serialization.ts#L139)

Static function used to serialized a specific entity

#### Type Parameters

##### T

`T`

#### Parameters

##### entity

`T`

defines the entity to serialize

##### serializationObject?

`any`

defines the optional target object where serialization data will be stored

#### Returns

`any`

a JSON compatible object representing the serialization of the entity
