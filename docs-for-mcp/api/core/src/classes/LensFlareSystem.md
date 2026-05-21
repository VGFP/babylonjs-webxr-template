[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LensFlareSystem

# Class: LensFlareSystem

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L26)

This represents a Lens Flare System or the shiny effect created by the light reflection on the  camera lenses.
It is usually composed of several `lensFlare`.

## See

https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare

## Constructors

### Constructor

> **new LensFlareSystem**(`name`, `emitter`, `scene`): `LensFlareSystem`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L103)

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

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L41)

Define a limit from the border the lens flare can be visible.

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L77)

Define the id of the lens flare system in the scene.
(equal to name by default)

***

### layerMask

> **layerMask**: `number` = `0x0fffffff`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L56)

Restricts the rendering of the effect to only the camera rendering this layer mask.

***

### lensFlares

> **lensFlares**: [`LensFlare`](LensFlare.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L36)

List of lens flares used in this system.

***

### meshesSelectionPredicate

> **meshesSelectionPredicate**: (`mesh`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L51)

Define a predicate which could limit the list of meshes able to occlude the effect.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`boolean`

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L107)

Define the name of the lens flare system

***

### viewportBorder

> **viewportBorder**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L46)

Define a viewport border we do not want to see the lens flare in.

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L31)

Force all the lens flare systems to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

## Accessors

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L177)

Define if the lens flare system is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L181)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L59)

Gets the scene

##### Returns

[`Scene`](Scene.md)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L69)

Gets the shader language used in this system.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:408](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L408)

Dispose and release the lens flare with its associated resources.

#### Returns

`void`

***

### getEmitter()

> **getEmitter**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L198)

Get the emitter of the lens flare system.
It defines the source of the lens flares (it can be a camera, a light or a mesh).

#### Returns

`any`

the emitter of the lens flare system

***

### getEmitterPosition()

> **getEmitterPosition**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L216)

Get the lens flare system emitter position.
The emitter defines the source of the lens flares (it can be a camera, a light or a mesh).

#### Returns

[`Vector3`](Vector3.md)

the position

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L189)

Get the scene the effects belongs to.

#### Returns

[`Scene`](Scene.md)

the scene holding the lens flare system

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:397](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L397)

Rebuilds the lens flare system

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:465](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L465)

Serialize the current Lens Flare System into a JSON representation.

#### Returns

`any`

the serialized JSON

***

### setEmitter()

> **setEmitter**(`newEmitter`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L207)

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

Defined in: [babylonjs-source/packages/dev/core/src/LensFlares/lensFlareSystem.ts:437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/LensFlares/lensFlareSystem.ts#L437)

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
