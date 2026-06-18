[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AbstractAssetContainer

# Class: AbstractAssetContainer

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L40)

Root class for AssetContainer and KeepAssets

## Extended by

- [`KeepAssets`](KeepAssets.md)
- [`AssetContainer`](AssetContainer.md)

## Implements

- `IAssetContainer`

## Constructors

### Constructor

> **new AbstractAssetContainer**(): `AbstractAssetContainer`

#### Returns

`AbstractAssetContainer`

## Properties

### ~~actionManagers~~

> **actionManagers**: [`AbstractActionManager`](AbstractActionManager.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L124)

ActionManagers available on the scene.

#### Deprecated

#### Implementation of

`IAssetContainer.actionManagers`

***

### animationGroups

> **animationGroups**: [`AnimationGroup`](AnimationGroup.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L83)

All of the animation groups added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/groupAnimations

#### Implementation of

`IAssetContainer.animationGroups`

***

### animations

> **animations**: [`Animation`](Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L77)

Gets a list of Animations associated with the scene

#### Implementation of

`IAssetContainer.animations`

***

### cameras

> **cameras**: [`Camera`](Camera.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:49](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L49)

All of the cameras added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/cameras

#### Implementation of

`IAssetContainer.cameras`

***

### effectLayers

> **effectLayers**: [`EffectLayer`](EffectLayer.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L159)

The list of effect layers added to the scene

#### Implementation of

`IAssetContainer.effectLayers`

***

### geometries

> **geometries**: [`Geometry`](Geometry.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L109)

The list of geometries used in the scene.

#### Implementation of

`IAssetContainer.geometries`

***

### layers

> **layers**: [`Layer`](Layer.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L164)

The list of layers added to the scene

#### Implementation of

`IAssetContainer.layers`

***

### lensFlareSystems

> **lensFlareSystems**: [`LensFlareSystem`](LensFlareSystem.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L174)

The list of lens flare systems added to the scene

#### Implementation of

`IAssetContainer.lensFlareSystems`

***

### lights

> **lights**: [`Light`](Light.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L55)

All of the lights added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction

#### Implementation of

`IAssetContainer.lights`

***

### materials

> **materials**: [`Material`](Material.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L98)

All of the materials added to this scene
In the context of a Scene, it is not supposed to be modified manually.
Any addition or removal should be done using the addMaterial and removeMaterial Scene methods.
Note also that the order of the Material within the array is not significant and might change.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction

#### Implementation of

`IAssetContainer.materials`

***

### meshes

> **meshes**: [`AbstractMesh`](AbstractMesh.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L60)

All of the (abstract) meshes added to this scene

#### Implementation of

`IAssetContainer.meshes`

***

### morphTargetManagers

> **morphTargetManagers**: [`MorphTargetManager`](MorphTargetManager.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L104)

The list of morph target managers added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph

#### Implementation of

`IAssetContainer.morphTargetManagers`

***

### multiMaterials

> **multiMaterials**: [`MultiMaterial`](MultiMaterial.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L89)

All of the multi-materials added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/multiMaterials

#### Implementation of

`IAssetContainer.multiMaterials`

***

### particleSystems

> **particleSystems**: [`IParticleSystem`](../interfaces/IParticleSystem.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L72)

All of the particle systems added to this scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/particles/particle_system/particle_system_intro

#### Implementation of

`IAssetContainer.particleSystems`

***

### postProcesses

> **postProcesses**: [`PostProcess`](PostProcess.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:149](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L149)

The list of postprocesses added to the scene

#### Implementation of

`IAssetContainer.postProcesses`

***

### proceduralTextures

> **proceduralTextures**: [`ProceduralTexture`](ProceduralTexture.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L179)

The list of procedural textures added to the scene

#### Implementation of

`IAssetContainer.proceduralTextures`

***

### reflectionProbes

> **reflectionProbes**: [`ReflectionProbe`](ReflectionProbe.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L169)

The list of reflection probes added to the scene

#### Implementation of

`IAssetContainer.reflectionProbes`

***

### rootNodes

> **rootNodes**: [`Node`](Node.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L44)

Gets the list of root nodes (ie. nodes with no parent)

#### Implementation of

`IAssetContainer.rootNodes`

***

### skeletons

> **skeletons**: [`Skeleton`](Skeleton.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L66)

The list of skeletons added to the scene

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/bonesSkeletons

#### Implementation of

`IAssetContainer.skeletons`

***

### sounds

> **sounds**: [`Nullable`](../type-aliases/Nullable.md)\<[`Sound`](Sound.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:154](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L154)

The list of sounds

#### Implementation of

`IAssetContainer.sounds`

***

### spriteManagers

> **spriteManagers**: [`SpriteManager`](SpriteManager.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L184)

The list of sprite managers added to the scene

#### Implementation of

`IAssetContainer.spriteManagers`

***

### textures

> **textures**: [`BaseTexture`](BaseTexture.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L129)

Textures to keep.

#### Implementation of

`IAssetContainer.textures`

***

### transformNodes

> **transformNodes**: [`TransformNode`](TransformNode.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L118)

All of the transform nodes added to this scene
In the context of a Scene, it is not supposed to be modified manually.
Any addition or removal should be done using the addTransformNode and removeTransformNode Scene methods.
Note also that the order of the TransformNode within the array is not significant and might change.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/transform_node

#### Implementation of

`IAssetContainer.transformNodes`

## Accessors

### environmentTexture

#### Get Signature

> **get** **environmentTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L138)

Texture used in all pbr material as the reflection texture.
As in the majority of the scene they are the same (exception for multi room and so on),
this is easier to reference from here than from all the materials.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **environmentTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L142)

Texture used in all pbr material as the reflection texture.
As in the majority of the scene they are the same (exception for multi room and so on),
this is easier to reference from here than from all the materials.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Implementation of

`IAssetContainer.environmentTexture`

## Methods

### getNodes()

> **getNodes**(): [`Node`](Node.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/assetContainer.ts:189](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/assetContainer.ts#L189)

#### Returns

[`Node`](Node.md)[]

all meshes, lights, cameras, transformNodes and bones

#### Implementation of

`IAssetContainer.getNodes`
