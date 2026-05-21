[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EngineView

# Class: EngineView

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L11)

Class used to define an additional view for the engine

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/multiCanvas

## Constructors

### Constructor

> **new EngineView**(): `EngineView`

#### Returns

`EngineView`

## Properties

### camera?

> `optional` **camera?**: [`Camera`](Camera.md) \| [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L22)

**`Since`**

Defines an optional camera or array of cameras used to render the view (will use active camera / cameras else)
Support for array of cameras

***

### clearBeforeCopy?

> `optional` **clearBeforeCopy?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L24)

Indicates if the destination view canvas should be cleared before copying the parent canvas. Can help if the scene clear color has alpha < 1

***

### customResize?

> `optional` **customResize?**: (`canvas`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L28)

Defines a custom function to handle canvas size changes. (the canvas to render into is provided to the callback)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### enabled

> **enabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L26)

Indicates if the view is enabled (true by default)

***

### id

> `readonly` **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L15)

A randomly generated unique id

***

### target

> **target**: `HTMLCanvasElement`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.ts#L17)

Defines the canvas where to render the view
