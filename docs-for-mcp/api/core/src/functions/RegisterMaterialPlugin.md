[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RegisterMaterialPlugin

# Function: RegisterMaterialPlugin()

> **RegisterMaterialPlugin**(`pluginName`, `factory`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.ts:480](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginManager.ts#L480)

Registers a new material plugin through a factory, or updates it. This makes the plugin available to all materials instantiated after its registration.

## Parameters

### pluginName

`string`

The plugin name

### factory

[`PluginMaterialFactory`](../type-aliases/PluginMaterialFactory.md)

The factory function which allows to create the plugin

## Returns

`void`
