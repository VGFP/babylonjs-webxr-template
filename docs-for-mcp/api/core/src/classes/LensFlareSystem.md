[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LensFlareSystem

# Class: LensFlareSystem

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L27)

This represents a Lens Flare System or the shiny effect created by the light reflection on the  camera lenses.
It is usually composed of several `lensFlare`.

## See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

## Constructors

### Constructor

> **new LensFlareSystem**(`name`, `emitter`, `scene`): `LensFlareSystem`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L104)

Instantiates a lens flare system.
This represents a Lens Flare System or the shiny effect created by the light reflection on the  camera lenses.
It is usually composed of several `lensFlare`.

#### Parameters

##### name

`string`

Define the name of the lens flare system in the scene

##### emitter

`any`

Define the source (the emitter) of the lens flares (it can be a camera, a light or a mesh).

##### scene

[`Scene`](Scene.md)

Define the scene the lens flare system belongs to

#### Returns

`LensFlareSystem`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

## Properties

### borderLimit

> **borderLimit**: `number` = `300`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L42)

Define a limit from the border the lens flare can be visible.

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L78)

Define the id of the lens flare system in the scene.
(equal to name by default)

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L57)

Restricts the rendering of the effect to only the camera rendering this layer mask.

***

### lensFlares

> **lensFlares**: [`LensFlare`](LensFlare.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L37)

List of lens flares used in this system.

***

### meshesSelectionPredicate

> **meshesSelectionPredicate**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L52)

Define a predicate which could limit the list of meshes able to occlude the effect.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`boolean`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:108](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L108)

Define the name of the lens flare system

***

### viewportBorder

> **viewportBorder**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L47)

Define a viewport border we do not want to see the lens flare in.

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L32)

Force all the lens flare systems to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

## Accessors

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L179)

Define if the lens flare system is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L183)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:60](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L60)

Gets the scene

##### Returns

[`Scene`](Scene.md)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L70)

Gets the shader language used in this system.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L410)

Dispose and release the lens flare with its associated resources.

#### Returns

`void`

***

### getEmitter()

> **getEmitter**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:200](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L200)

Get the emitter of the lens flare system.
It defines the source of the lens flares (it can be a camera, a light or a mesh).

#### Returns

`any`

the emitter of the lens flare system

***

### getEmitterPosition()

> **getEmitterPosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L218)

Get the lens flare system emitter position.
The emitter defines the source of the lens flares (it can be a camera, a light or a mesh).

#### Returns

[`Vector3`](Vector3.md)

the position

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:191](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L191)

Get the scene the effects belongs to.

#### Returns

[`Scene`](Scene.md)

the scene holding the lens flare system

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L399)

Rebuilds the lens flare system

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:467](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L467)

Serialize the current Lens Flare System into a JSON representation.

#### Returns

`any`

the serialized JSON

***

### setEmitter()

> **setEmitter**(`newEmitter`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L209)

Set the emitter of the lens flare system.
It defines the source of the lens flares (it can be a camera, a light or a mesh).

#### Parameters

##### newEmitter

`any`

Define the new emitter of the system

#### Returns

`void`

***

### Parse()

> `static` **Parse**(`parsedLensFlareSystem`, `scene`, `rootUrl`): `LensFlareSystem`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:439](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L439)

Parse a lens flare system from a JSON representation

#### Parameters

##### parsedLensFlareSystem

`any`

Define the JSON to parse

##### scene

[`Scene`](Scene.md)

Define the scene the parsed system should be instantiated in

##### rootUrl

`string`

Define the rootUrl of the load sequence to easily find a load relative dependencies such as textures

#### Returns

`LensFlareSystem`

the parsed system
