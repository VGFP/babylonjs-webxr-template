[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / KHR\_materials\_variants

# Class: KHR\_materials\_variants

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L70)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_variants/README.md)

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:79](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L79)

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

***

### name

> `readonly` **name**: `"KHR_materials_variants"` = `NAME`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L74)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

## Methods

### getAvailableVariants()

> **getAvailableVariants**(`rootNode`): `string`[]

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L117)

Gets the list of available variant names for this asset.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

`string`[]

the list of all the variant names for this model

***

### getLastSelectedVariant()

> **getLastSelectedVariant**(`rootNode`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string` \| `string`[]\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L205)

Gets the last selected variant name(s) or null if original.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string` \| `string`[]\>

The selected variant name(s).

***

### reset()

> **reset**(`rootNode`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L182)

Reset back to the original before selecting a variant.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

`void`

***

### selectVariant()

> **selectVariant**(`rootNode`, `variantName`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L157)

Select a variant given a variant name or a list of variant names.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

##### variantName

`string` \| `string`[]

The variant name(s) to select.

#### Returns

`void`

***

### GetAvailableVariants()

> `static` **GetAvailableVariants**(`rootNode`): `string`[]

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L103)

Gets the list of available variant names for this asset.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

`string`[]

the list of all the variant names for this model

***

### GetLastSelectedVariant()

> `static` **GetLastSelectedVariant**(`rootNode`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string` \| `string`[]\>

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L191)

Gets the last selected variant name(s) or null if original.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string` \| `string`[]\>

The selected variant name(s).

***

### Reset()

> `static` **Reset**(`rootNode`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L165)

Reset back to the original before selecting a variant.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

`void`

***

### SelectVariant()

> `static` **SelectVariant**(`rootNode`, `variantName`): `void`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.ts#L126)

Select a variant given a variant name or a list of variant names.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

##### variantName

`string` \| `string`[]

The variant name(s) to select.

#### Returns

`void`
