[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DebugLayer

# Class: DebugLayer

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:228](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L228)

The debug layer (aka Inspector) is the go to tool in order to better understand
what is happening in your scene

## See

https://doc.babylonjs.com/toolsAndResources/inspector

## Constructors

### Constructor

> **new DebugLayer**(`scene?`): `DebugLayer`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L292)

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

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L239)

The default configuration of the inspector

***

### InspectorURL

> `static` **InspectorURL**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L234)

Define the url to get the inspector script from.
By default it uses the babylonjs CDN.

#### Ignore Naming

## Accessors

### onPropertyChangedObservable

#### Get Signature

> **get** **onPropertyChangedObservable**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L257)

Observable triggered when a property is changed through the inspector.

##### Returns

`any`

***

### onSelectionChangedObservable

#### Get Signature

> **get** **onSelectionChangedObservable**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:273](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L273)

Observable triggered when the selection is changed through the inspector.

##### Returns

`any`

***

### openedPanes

#### Get Signature

> **get** **openedPanes**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L409)

Get the number of opened panes in the inspector

##### Returns

`any`

## Methods

### hide()

> **hide**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:400](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L400)

Hide the inspector and close its window.

#### Returns

`void`

***

### isVisible()

> **isVisible**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:393](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L393)

Get if the inspector is visible or not.

#### Returns

`boolean`

true if visible otherwise, false

***

### popupEmbed()

> **popupEmbed**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:438](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L438)

#### Returns

`void`

***

### popupInspector()

> **popupInspector**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L432)

#### Returns

`void`

***

### popupSceneExplorer()

> **popupSceneExplorer**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L426)

#### Returns

`void`

***

### select()

> **select**(`entity`, `lineContainerTitles?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:345](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L345)

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

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L420)

Update the scene in the inspector

#### Returns

`void`

***

### show()

> **show**(`config?`): `Promise`\<`DebugLayer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/debugLayer.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/debugLayer.ts#L450)

Launch the debugLayer.

#### Parameters

##### config?

[`IInspectorOptions`](../interfaces/IInspectorOptions.md)

Define the configuration of the inspector

#### Returns

`Promise`\<`DebugLayer`\>

a promise fulfilled when the debug layer is visible
