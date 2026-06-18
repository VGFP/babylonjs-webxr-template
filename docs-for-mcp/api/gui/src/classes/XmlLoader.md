[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / XmlLoader

# Class: XmlLoader

Defined in: [babylonjs-source/packages/dev/gui/src/2D/xmlLoader.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/xmlLoader.ts#L9)

Class used to load GUI via XML.

## Constructors

### Constructor

> **new XmlLoader**(`parentClass?`): `XmlLoader`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/xmlLoader.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/xmlLoader.ts#L36)

Create a new xml loader

#### Parameters

##### parentClass?

`any` = `null`

Sets the class context. Used when the loader is instanced inside a class and not in a global context

#### Returns

`XmlLoader`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/xmlLoader.ts:328](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/xmlLoader.ts#L328)

Disposes the loaded layout

#### Returns

`void`

***

### getNodeById()

> **getNodeById**(`id`): `any`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/xmlLoader.ts:314](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/xmlLoader.ts#L314)

Gets a loaded node / control by id.

#### Parameters

##### id

`string`

the Controls id set in the xml

#### Returns

`any`

element of type Control

***

### getNodes()

> **getNodes**(): `any`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/xmlLoader.ts:322](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/xmlLoader.ts#L322)

Gets all loaded nodes / controls

#### Returns

`any`

Array of controls

***

### isLoaded()

> **isLoaded**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/xmlLoader.ts:305](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/xmlLoader.ts#L305)

Gets if the loading has finished.

#### Returns

`boolean`

whether the loading has finished or not

***

### loadLayout()

> **loadLayout**(`xmlFile`, `rootNode`, `onSuccess?`, `onError?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/xmlLoader.ts:343](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/xmlLoader.ts#L343)

Initiates the xml layout loading

#### Parameters

##### xmlFile

`any`

defines the xml layout to load

##### rootNode

`any`

defines the node / control to use as a parent for the loaded layout controls.

##### onSuccess?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => `void`\> = `null`

defines the callback called on layout load successfully.

##### onError?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`error`) => `void`\> = `null`

defines the callback called on layout load failure.

#### Returns

`void`

***

### loadLayoutAsync()

> **loadLayoutAsync**(`xmlFile`, `rootNode`): `Promise`\<`any`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/xmlLoader.ts:381](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/xmlLoader.ts#L381)

Initiates the xml layout loading asynchronously

#### Parameters

##### xmlFile

`any`

defines the xml layout to load

##### rootNode

`any`

defines the node / control to use as a parent for the loaded layout controls.

#### Returns

`Promise`\<`any`\>

Promise
