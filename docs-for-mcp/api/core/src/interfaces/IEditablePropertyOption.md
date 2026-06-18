[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEditablePropertyOption

# Interface: IEditablePropertyOption

Defined in: [babylonjs-source/packages/dev/core/src/Decorators/nodeDecorator.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Decorators/nodeDecorator.ts#L51)

Interface that defines the options available for an editable property

## Properties

### embedded?

> `optional` **embedded?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Decorators/nodeDecorator.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Decorators/nodeDecorator.ts#L55)

Define if the property is displayed inside the source block or in a separate property tab

***

### max?

> `optional` **max?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Decorators/nodeDecorator.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Decorators/nodeDecorator.ts#L59)

max value

***

### min?

> `optional` **min?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Decorators/nodeDecorator.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Decorators/nodeDecorator.ts#L57)

min value

***

### notifiers?

> `optional` **notifiers?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Decorators/nodeDecorator.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Decorators/nodeDecorator.ts#L61)

notifiers: indicates which actions to take when the property is changed

#### activatePreviewCommand?

> `optional` **activatePreviewCommand?**: `boolean`

the onPreviewCommandActivated observer of the preview manager should be triggered

#### callback?

> `optional` **callback?**: (`scene`, `block`) => `boolean` \| `void` \| `undefined`

a callback to trigger

##### Parameters

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

###### block

`any`

##### Returns

`boolean` \| `void` \| `undefined`

#### onValidation?

> `optional` **onValidation?**: (`block`, `propertyName`) => `boolean`

a callback to validate the property. Returns true if the property is ok, else false. If false, the rebuild/update/callback events won't be called

##### Parameters

###### block

`any`

###### propertyName

`string`

##### Returns

`boolean`

#### rebuild?

> `optional` **rebuild?**: `boolean`

the entity should be rebuilt

#### update?

> `optional` **update?**: `boolean`

the preview should be updated

***

### options?

> `optional` **options?**: [`IEditablePropertyListOption`](IEditablePropertyListOption.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Decorators/nodeDecorator.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Decorators/nodeDecorator.ts#L74)

list of the options for a variable of type list
