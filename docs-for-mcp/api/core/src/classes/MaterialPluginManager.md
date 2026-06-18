[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MaterialPluginManager

# Class: MaterialPluginManager

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.pure.ts#L38)

**`Since`**

Class that manages the plugins of a material
 5.0

## Constructors

### Constructor

> **new MaterialPluginManager**(`material`): `MaterialPluginManager`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.pure.ts#L63)

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

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialPluginManager.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialPluginManager.pure.ts#L146)

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
