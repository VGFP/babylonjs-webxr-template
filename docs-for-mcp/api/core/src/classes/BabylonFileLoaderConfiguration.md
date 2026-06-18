[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BabylonFileLoaderConfiguration

# Class: BabylonFileLoaderConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts#L47)

Helps setting up some configuration for the babylon file loader.

## Constructors

### Constructor

> **new BabylonFileLoaderConfiguration**(): `BabylonFileLoaderConfiguration`

#### Returns

`BabylonFileLoaderConfiguration`

## Properties

### LoaderInjectedPhysicsEngine

> `static` **LoaderInjectedPhysicsEngine**: `any` = `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts#L53)

The loader does not allow injecting custom physics engine into the plugins.
Unfortunately in ES6, we need to manually inject them into the plugin.
So you could set this variable to your engine import to make it work.
