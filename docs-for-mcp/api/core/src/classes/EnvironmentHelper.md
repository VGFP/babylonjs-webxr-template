[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EnvironmentHelper

# Class: EnvironmentHelper

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L193)

The EnvironmentHelper class can be used to add a fully featured non-expensive background to your scene.
It includes by default a skybox and a ground relying on the BackgroundMaterial.
It also helps with the default setup of your ImageProcessingConfiguration.

## Constructors

### Constructor

> **new EnvironmentHelper**(`options`, `scene`): `EnvironmentHelper`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L343)

constructor

#### Parameters

##### options

`Partial`\<[`IEnvironmentHelperOptions`](../interfaces/IEnvironmentHelperOptions.md)\>

Defines the options we want to customize the helper

##### scene

[`Scene`](Scene.md)

The scene to add the material to

#### Returns

`EnvironmentHelper`

## Properties

### onErrorObservable

> **onErrorObservable**: [`Observable`](Observable.md)\<\{ `exception?`: `any`; `message?`: `string`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L336)

This observable will be notified with any error during the creation of the environment,
mainly texture creation errors.

## Accessors

### ground

#### Get Signature

> **get** **ground**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L287)

Gets the ground mesh created by the helper.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

***

### groundMaterial

#### Get Signature

> **get** **groundMaterial**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BackgroundMaterial`](BackgroundMaterial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L322)

Gets the ground material created by the helper.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BackgroundMaterial`](BackgroundMaterial.md)\>

***

### groundMirror

#### Get Signature

> **get** **groundMirror**(): [`Nullable`](../type-aliases/Nullable.md)\<[`MirrorTexture`](MirrorTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:303](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L303)

Gets the ground mirror created by the helper.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MirrorTexture`](MirrorTexture.md)\>

***

### groundMirrorRenderList

#### Get Signature

> **get** **groundMirrorRenderList**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L311)

Gets the ground mirror render list to helps pushing the meshes
you wish in the ground reflection.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

***

### groundTexture

#### Get Signature

> **get** **groundTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L295)

Gets the ground texture created by the helper.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

***

### rootMesh

#### Get Signature

> **get** **rootMesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L255)

Gets the root mesh created by the helper.

##### Returns

[`Mesh`](Mesh.md)

***

### skybox

#### Get Signature

> **get** **skybox**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L263)

Gets the skybox created by the helper.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

***

### skyboxMaterial

#### Get Signature

> **get** **skyboxMaterial**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BackgroundMaterial`](BackgroundMaterial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L279)

Gets the skybox material created by the helper.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BackgroundMaterial`](BackgroundMaterial.md)\>

***

### skyboxTexture

#### Get Signature

> **get** **skyboxTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L271)

Gets the skybox texture created by the helper.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:715](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L715)

Dispose all the elements created by the Helper.

#### Returns

`void`

***

### setMainColor()

> **setMainColor**(`color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:424](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L424)

Sets the primary color of all the available elements.

#### Parameters

##### color

[`Color3`](Color3.md)

the main color to affect to the ground and the background

#### Returns

`void`

***

### updateOptions()

> **updateOptions**(`options`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Helpers/environmentHelper.ts:359](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Helpers/environmentHelper.ts#L359)

Updates the environment according to the new options

#### Parameters

##### options

`Partial`\<[`IEnvironmentHelperOptions`](../interfaces/IEnvironmentHelperOptions.md)\>

options to configure the helper (IEnvironmentHelperOptions)

#### Returns

`void`
