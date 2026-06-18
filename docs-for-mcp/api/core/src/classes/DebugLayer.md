[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DebugLayer

# Class: DebugLayer

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L203)

The debug layer (aka Inspector) is the go to tool in order to better understand
what is happening in your scene

## See

https://doc.babylonjs.com/toolsAndResources/inspector

## Constructors

### Constructor

> **new DebugLayer**(`scene?`): `DebugLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L267)

Instantiates a new debug layer.
The debug layer (aka Inspector) is the go to tool in order to better understand
what is happening in your scene

#### Parameters

##### scene?

[`Scene`](Scene.md)

Defines the scene to inspect

#### Returns

`DebugLayer`

#### See

https://doc.babylonjs.com/toolsAndResources/inspector

## Properties

### Config

> `static` **Config**: [`IInspectorOptions`](../interfaces/IInspectorOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L214)

The default configuration of the inspector

***

### InspectorURL

> `static` **InspectorURL**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L209)

Define the url to get the inspector script from.
By default it uses the babylonjs CDN.

#### Ignore Naming

## Accessors

### onPropertyChangedObservable

#### Get Signature

> **get** **onPropertyChangedObservable**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L232)

Observable triggered when a property is changed through the inspector.

##### Returns

`any`

***

### onSelectionChangedObservable

#### Get Signature

> **get** **onSelectionChangedObservable**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L248)

Observable triggered when the selection is changed through the inspector.

##### Returns

`any`

***

### openedPanes

#### Get Signature

> **get** **openedPanes**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L384)

Get the number of opened panes in the inspector

##### Returns

`any`

## Methods

### hide()

> **hide**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L375)

Hide the inspector and close its window.

#### Returns

`void`

***

### isVisible()

> **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L368)

Get if the inspector is visible or not.

#### Returns

`boolean`

true if visible otherwise, false

***

### popupEmbed()

> **popupEmbed**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:422](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L422)

Pop up the embedded inspector panel

#### Returns

`void`

***

### popupInspector()

> **popupInspector**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L413)

Pop up the inspector in a separate window

#### Returns

`void`

***

### popupSceneExplorer()

> **popupSceneExplorer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L404)

Pop up the scene explorer in a separate window

#### Returns

`void`

***

### select()

> **select**(`entity`, `lineContainerTitles?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L320)

Select a specific entity in the scene explorer and highlight a specific block in that entity property grid

#### Parameters

##### entity

`any`

defines the entity to select

##### lineContainerTitles?

`string` \| `string`[]

defines the specific blocks to highlight (could be a string or an array of strings)

#### Returns

`void`

***

### setAsActiveScene()

> **setAsActiveScene**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L395)

Update the scene in the inspector

#### Returns

`void`

***

### show()

> **show**(`config?`): `Promise`\<`DebugLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.pure.ts:434](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Debug/debugLayer.pure.ts#L434)

Launch the debugLayer.

#### Parameters

##### config?

[`IInspectorOptions`](../interfaces/IInspectorOptions.md)

Define the configuration of the inspector

#### Returns

`Promise`\<`DebugLayer`\>

a promise fulfilled when the debug layer is visible
