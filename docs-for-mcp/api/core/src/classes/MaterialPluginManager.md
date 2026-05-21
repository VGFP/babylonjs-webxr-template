[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MaterialPluginManager

# Class: MaterialPluginManager

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginManager.ts#L46)

**`Since`**

Class that manages the plugins of a material
 5.0

## Constructors

### Constructor

> **new MaterialPluginManager**(`material`): `MaterialPluginManager`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginManager.ts#L77)

Creates a new instance of the plugin manager

#### Parameters

##### material

[`Material`](Material.md)

material that this manager will manage the plugins for

#### Returns

`MaterialPluginManager`

## Methods

### getPlugin()

> **getPlugin**\<`T`\>(`name`): [`Nullable`](../type-aliases/Nullable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/materialPluginManager.ts#L160)

Gets a plugin from the list of plugins managed by this manager

#### Type Parameters

##### T

`T` = [`MaterialPluginBase`](MaterialPluginBase.md)

#### Parameters

##### name

`string`

name of the plugin

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`T`\>

the plugin if found, else null
