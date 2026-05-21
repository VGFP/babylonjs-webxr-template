[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AssetContainer

# Class: AssetContainer

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L253)

Container with a set of assets that can be added or removed from a scene.

## Extends

- [`AbstractAssetContainer`](AbstractAssetContainer.md)

## Constructors

### Constructor

> **new AssetContainer**(`scene?`): `AssetContainer`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:266](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L266)

Instantiates an AssetContainer.

#### Parameters

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

The scene the AssetContainer belongs to.

#### Returns

`AssetContainer`

#### Overrides

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`constructor`](AbstractAssetContainer.md#constructor)

## Properties

### ~~actionManagers~~

> **actionManagers**: [`AbstractActionManager`](AbstractActionManager.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L124)

ActionManagers available on the scene.

#### Deprecated

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`actionManagers`](AbstractAssetContainer.md#actionmanagers)

***

### animationGroups

> **animationGroups**: [`AnimationGroup`](AnimationGroup.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L83)

All of the animation groups added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/groupAnimations

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`animationGroups`](AbstractAssetContainer.md#animationgroups)

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L77)

Gets a list of Animations associated with the scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`animations`](AbstractAssetContainer.md#animations)

***

### cameras

> **cameras**: [`Camera`](Camera.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L49)

All of the cameras added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`cameras`](AbstractAssetContainer.md#cameras)

***

### effectLayers

> **effectLayers**: [`EffectLayer`](EffectLayer.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L159)

The list of effect layers added to the scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`effectLayers`](AbstractAssetContainer.md#effectlayers)

***

### geometries

> **geometries**: [`Geometry`](Geometry.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L109)

The list of geometries used in the scene.

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`geometries`](AbstractAssetContainer.md#geometries)

***

### layers

> **layers**: [`Layer`](Layer.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L164)

The list of layers added to the scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`layers`](AbstractAssetContainer.md#layers)

***

### lensFlareSystems

> **lensFlareSystems**: [`LensFlareSystem`](LensFlareSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:174](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L174)

The list of lens flare systems added to the scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`lensFlareSystems`](AbstractAssetContainer.md#lensflaresystems)

***

### lights

> **lights**: [`Light`](Light.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L55)

All of the lights added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`lights`](AbstractAssetContainer.md#lights)

***

### materials

> **materials**: [`Material`](Material.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L98)

All of the materials added to this scene
In the context of a Scene, it is not supposed to be modified manually.
Any addition or removal should be done using the addMaterial and removeMaterial Scene methods.
Note also that the order of the Material within the array is not significant and might change.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`materials`](AbstractAssetContainer.md#materials)

***

### meshes

> **meshes**: [`AbstractMesh`](AbstractMesh.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L60)

All of the (abstract) meshes added to this scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`meshes`](AbstractAssetContainer.md#meshes)

***

### morphTargetManagers

> **morphTargetManagers**: [`MorphTargetManager`](MorphTargetManager.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L104)

The list of morph target managers added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`morphTargetManagers`](AbstractAssetContainer.md#morphtargetmanagers)

***

### multiMaterials

> **multiMaterials**: [`MultiMaterial`](MultiMaterial.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:89](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L89)

All of the multi-materials added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`multiMaterials`](AbstractAssetContainer.md#multimaterials)

***

### particleSystems

> **particleSystems**: [`IParticleSystem`](../interfaces/IParticleSystem.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L72)

All of the particle systems added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`particleSystems`](AbstractAssetContainer.md#particlesystems)

***

### postProcesses

> **postProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L149)

The list of postprocesses added to the scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`postProcesses`](AbstractAssetContainer.md#postprocesses)

***

### proceduralTextures

> **proceduralTextures**: [`ProceduralTexture`](ProceduralTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L179)

The list of procedural textures added to the scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`proceduralTextures`](AbstractAssetContainer.md#proceduraltextures)

***

### reflectionProbes

> **reflectionProbes**: [`ReflectionProbe`](ReflectionProbe.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:169](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L169)

The list of reflection probes added to the scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`reflectionProbes`](AbstractAssetContainer.md#reflectionprobes)

***

### rootNodes

> **rootNodes**: [`Node`](Node.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L44)

Gets the list of root nodes (ie. nodes with no parent)

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`rootNodes`](AbstractAssetContainer.md#rootnodes)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L260)

The scene the AssetContainer belongs to.

***

### skeletons

> **skeletons**: [`Skeleton`](Skeleton.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L66)

The list of skeletons added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`skeletons`](AbstractAssetContainer.md#skeletons)

***

### sounds

> **sounds**: [`Nullable`](../type-aliases/Nullable.md)\<[`Sound`](Sound.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L154)

The list of sounds

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`sounds`](AbstractAssetContainer.md#sounds)

***

### spriteManagers

> **spriteManagers**: [`SpriteManager`](SpriteManager.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:184](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L184)

The list of sprite managers added to the scene

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`spriteManagers`](AbstractAssetContainer.md#spritemanagers)

***

### textures

> **textures**: [`BaseTexture`](BaseTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:129](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L129)

Textures to keep.

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`textures`](AbstractAssetContainer.md#textures)

***

### transformNodes

> **transformNodes**: [`TransformNode`](TransformNode.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:118](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L118)

All of the transform nodes added to this scene
In the context of a Scene, it is not supposed to be modified manually.
Any addition or removal should be done using the addTransformNode and removeTransformNode Scene methods.
Note also that the order of the TransformNode within the array is not significant and might change.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/transform_node

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`transformNodes`](AbstractAssetContainer.md#transformnodes)

## Accessors

### environmentTexture

#### Get Signature

> **get** **environmentTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:138](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L138)

Texture used in all pbr material as the reflection texture.
As in the majority of the scene they are the same (exception for multi room and so on),
this is easier to reference from here than from all the materials.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **environmentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L142)

Texture used in all pbr material as the reflection texture.
As in the majority of the scene they are the same (exception for multi room and so on),
this is easier to reference from here than from all the materials.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`environmentTexture`](AbstractAssetContainer.md#environmenttexture)

## Methods

### addAllAssetsToContainer()

> **addAllAssetsToContainer**(`root`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1308)

**`Since`**

6.26.0
Given a root asset, this method will traverse its hierarchy and add it, its children and any materials/skeletons to the container.

#### Parameters

##### root

[`Node`](Node.md)

root node

#### Returns

`void`

***

### addAllToScene()

> **addAllToScene**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:710](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L710)

Adds all the assets from the container to the scene.

#### Returns

`void`

***

### addToScene()

> **addToScene**(`predicate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:738](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L738)

Adds assets from the container to the scene.

#### Parameters

##### predicate?

[`Nullable`](../type-aliases/Nullable.md)\<(`entity`) => `boolean`\> = `null`

defines a predicate used to select which entity will be added (can be null)

#### Returns

`void`

***

### createRootMesh()

> **createRootMesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1149)

Adds all meshes in the asset container to a root mesh that can be used to position all the contained meshes. The root mesh is then added to the front of the meshes in the assetContainer.

#### Returns

[`Mesh`](Mesh.md)

the root mesh

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:999](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L999)

Disposes all the assets in the container

#### Returns

`void`

***

### getCamerasByTags()

> **getCamerasByTags**(`tagsQuery`, `filter?`): [`Camera`](Camera.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1408)

Get a list of cameras by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`camera`) => `boolean`

defines a predicate used to filter results

#### Returns

[`Camera`](Camera.md)[]

an array of Camera

***

### getLightsByTags()

> **getLightsByTags**(`tagsQuery`, `filter?`): [`Light`](Light.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1418](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1418)

Get a list of lights by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`light`) => `boolean`

defines a predicate used to filter results

#### Returns

[`Light`](Light.md)[]

an array of Light

***

### getMaterialsByTags()

> **getMaterialsByTags**(`tagsQuery`, `filter?`): [`Material`](Material.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1428](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1428)

Get a list of materials by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`material`) => `boolean`

defines a predicate used to filter results

#### Returns

[`Material`](Material.md)[]

an array of Material

***

### getMeshesByTags()

> **getMeshesByTags**(`tagsQuery`, `filter?`): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1398](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1398)

Get a list of meshes by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`mesh`) => `boolean`

defines a predicate used to filter results

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of Mesh

***

### getNodes()

> **getNodes**(): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L189)

#### Returns

[`Node`](Node.md)[]

all meshes, lights, cameras, transformNodes and bones

#### Inherited from

[`AbstractAssetContainer`](AbstractAssetContainer.md).[`getNodes`](AbstractAssetContainer.md#getnodes)

***

### getTransformNodesByTags()

> **getTransformNodesByTags**(`tagsQuery`, `filter?`): [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1438](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1438)

Get a list of transform nodes by tags

#### Parameters

##### tagsQuery

`string`

defines the tags query to use

##### filter?

(`transform`) => `boolean`

defines a predicate used to filter results

#### Returns

[`TransformNode`](TransformNode.md)[]

an array of TransformNode

***

### instantiateModelsToScene()

> **instantiateModelsToScene**(`nameFunction?`, `cloneMaterials?`, `options?`): [`InstantiatedEntries`](InstantiatedEntries.md)

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:479](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L479)

Instantiate or clone all meshes and add the new ones to the scene.
Skeletons and animation groups will all be cloned

#### Parameters

##### nameFunction?

(`sourceName`) => `string`

defines an optional function used to get new names for clones

##### cloneMaterials?

`boolean` = `false`

defines an optional boolean that defines if materials must be cloned as well (false by default)

##### options?

defines an optional list of options to control how to instantiate / clone models

###### doNotInstantiate?

`boolean` \| ((`node`) => `boolean`)

defines if the model must be instantiated or just cloned

###### predicate?

(`entity`) => `boolean`

defines a predicate used to filter whih mesh to instantiate/clone

#### Returns

[`InstantiatedEntries`](InstantiatedEntries.md)

a list of rootNodes, skeletons and animation groups that were duplicated

***

### mergeAnimationsTo()

> **mergeAnimationsTo**(`scene?`, `animatables`, `targetConverter?`): [`AnimationGroup`](AnimationGroup.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1167](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1167)

Merge animations (direct and animation groups) from this asset container into a scene

#### Parameters

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `EngineStore.LastCreatedScene`

is the instance of BABYLON.Scene to append to (default: last created scene)

##### animatables

[`Animatable`](Animatable.md)[]

set of animatables to retarget to a node from the scene

##### targetConverter?

[`Nullable`](../type-aliases/Nullable.md)\<(`target`) => [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](Node.md)\>\> = `null`

defines a function used to convert animation targets from the asset container to the scene (default: search node by name)

#### Returns

[`AnimationGroup`](AnimationGroup.md)[]

an array of the new AnimationGroup added to the scene (empty array if none)

***

### moveAllFromScene()

> **moveAllFromScene**(`keepAssets?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1126)

Removes all the assets contained in the scene and adds them to the container.

#### Parameters

##### keepAssets?

[`KeepAssets`](KeepAssets.md)

Set of assets to keep in the scene. (default: empty)

#### Returns

`void`

***

### populateRootNodes()

> **populateRootNodes**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:1279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L1279)

**`Since`**

6.15.0
This method checks for any node that has no parent
and is not in the rootNodes array, and adds the node
there, if so.

#### Returns

`void`

***

### removeAllFromScene()

> **removeAllFromScene**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:876](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L876)

Removes all the assets in the container from the scene

#### Returns

`void`

***

### removeFromScene()

> **removeFromScene**(`predicate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:898](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/assetContainer.ts#L898)

Removes assets in the container from the scene

#### Parameters

##### predicate?

[`Nullable`](../type-aliases/Nullable.md)\<(`entity`) => `boolean`\> = `null`

defines a predicate used to select which entity will be added (can be null)

#### Returns

`void`
