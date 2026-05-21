[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BabylonFileLoaderConfiguration

# Class: BabylonFileLoaderConfiguration

Defined in: [babylonjs-source/packages/dev/core/src/Loading/Plugins/babylonFileLoader.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/Plugins/babylonFileLoader.ts#L49)

Helps setting up some configuration for the babylon file loader.

## Constructors

### Constructor

> **new BabylonFileLoaderConfiguration**(): `BabylonFileLoaderConfiguration`

#### Returns

`BabylonFileLoaderConfiguration`

## Properties

### LoaderInjectedPhysicsEngine

> `static` **LoaderInjectedPhysicsEngine**: `any` = `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/Plugins/babylonFileLoader.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/Plugins/babylonFileLoader.ts#L55)

The loader does not allow injecting custom physics engine into the plugins.
Unfortunately in ES6, we need to manually inject them into the plugin.
So you could set this variable to your engine import to make it work.
