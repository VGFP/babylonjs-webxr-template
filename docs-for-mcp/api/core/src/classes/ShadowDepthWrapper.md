[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ShadowDepthWrapper

# Class: ShadowDepthWrapper

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L59)

Class that can be used to wrap a base material to generate accurate shadows when using custom vertex/fragment code in the base material

## Constructors

### Constructor

> **new ShadowDepthWrapper**(`baseMaterial`, `scene?`, `options?`): `ShadowDepthWrapper`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:96](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L96)

Instantiate a new shadow depth wrapper.
It works by injecting some specific code in the vertex/fragment shaders of the base material and is used by a shadow generator to
generate the shadow depth map. For more information, please refer to the documentation:
https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows

#### Parameters

##### baseMaterial

[`Material`](Material.md)

Material to wrap

##### scene?

[`Scene`](Scene.md)

Define the scene the material belongs to

##### options?

[`IIOptionShadowDepthMaterial`](../interfaces/IIOptionShadowDepthMaterial.md)

Options used to create the wrapper

#### Returns

`ShadowDepthWrapper`

## Accessors

### baseMaterial

#### Get Signature

> **get** **baseMaterial**(): [`Material`](Material.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L78)

Gets the base material the wrapper is built upon

##### Returns

[`Material`](Material.md)

***

### doNotInjectCode

#### Get Signature

> **get** **doNotInjectCode**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L83)

Gets the doNotInjectCode status of the wrapper

##### Returns

`boolean`

***

### standalone

#### Get Signature

> **get** **standalone**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L73)

Gets the standalone status of the wrapper

##### Returns

`boolean`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L189)

Disposes the resources

#### Returns

`void`

***

### getEffect()

> **getEffect**(`subMesh`, `shadowGenerator`, `passIdForDrawWrapper`): [`Nullable`](../type-aliases/Nullable.md)\<[`DrawWrapper`](DrawWrapper.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L152)

Gets the effect to use to generate the depth map

#### Parameters

##### subMesh

[`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>

subMesh to get the effect for

##### shadowGenerator

[`ShadowGenerator`](ShadowGenerator.md)

shadow generator to get the effect for

##### passIdForDrawWrapper

`number`

Id of the pass for which the effect from the draw wrapper must be retrieved from

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DrawWrapper`](DrawWrapper.md)\>

the effect to use to generate the depth map for the subMesh + shadow generator specified

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`subMesh`, `defines`, `shadowGenerator`, `useInstances`, `passIdForDrawWrapper`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/shadowDepthWrapper.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/shadowDepthWrapper.ts#L175)

Specifies that the submesh is ready to be used for depth rendering

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

submesh to check

##### defines

`string`[]

the list of defines to take into account when checking the effect

##### shadowGenerator

[`ShadowGenerator`](ShadowGenerator.md)

combined with subMesh, it defines the effect to check

##### useInstances

`boolean`

specifies that instances should be used

##### passIdForDrawWrapper

`number`

Id of the pass for which the draw wrapper should be created

#### Returns

`boolean`

a boolean indicating that the submesh is ready or not
