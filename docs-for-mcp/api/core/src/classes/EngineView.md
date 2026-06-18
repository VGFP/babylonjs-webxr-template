[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EngineView

# Class: EngineView

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts#L13)

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

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts#L24)

**`Since`**

Defines an optional camera or array of cameras used to render the view (will use active camera / cameras else)
Support for array of cameras

***

### clearBeforeCopy?

> `optional` **clearBeforeCopy?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts#L26)

Indicates if the destination view canvas should be cleared before copying the parent canvas. Can help if the scene clear color has alpha < 1

***

### customResize?

> `optional` **customResize?**: (`canvas`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts#L30)

Defines a custom function to handle canvas size changes. (the canvas to render into is provided to the callback)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### enabled

> **enabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts#L28)

Indicates if the view is enabled (true by default)

***

### id

> `readonly` **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts#L17)

A randomly generated unique id

***

### target

> **target**: `HTMLCanvasElement`

Defined in: [babylonjs-source/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Engines/AbstractEngine/abstractEngine.views.pure.ts#L19)

Defines the canvas where to render the view
