[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReflectionProbe

# Class: ReflectionProbe

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:61](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L61)

Class used to generate realtime reflection / refraction cube textures

## See

https://doc.babylonjs.com/features/featuresDeepDive/environment/reflectionProbes

## Constructors

### Constructor

> **new ReflectionProbe**(`name`, `size`, `scene`, `generateMipMaps?`, `useFloat?`, `linearSpace?`): `ReflectionProbe`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L96)

Creates a new reflection probe

#### Parameters

##### name

`string`

defines the name of the probe

##### size

`number`

defines the texture resolution (for each face)

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### generateMipMaps?

`boolean` = `true`

defines if mip maps should be generated automatically (true by default)

##### useFloat?

`boolean` = `false`

defines if HDR data (float data) should be used to store colors (false by default)

##### linearSpace?

`boolean` = `false`

defines if the probe should be generated in linear space or not (false by default)

#### Returns

`ReflectionProbe`

## Properties

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L82)

Gets or sets an object used to store user defined information for the reflection probe.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L98)

defines the name of the probe

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L77)

Gets or sets probe position (center of the cube map)

## Accessors

### cubeTexture

#### Get Signature

> **get** **cubeTexture**(): [`RenderTargetTexture`](RenderTargetTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L246)

Gets the internal CubeTexture used to render to

##### Returns

[`RenderTargetTexture`](RenderTargetTexture.md)

***

### refreshRate

#### Get Signature

> **get** **refreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L229)

Gets or sets the refresh rate to use (on every frame by default)

##### Returns

`number`

#### Set Signature

> **set** **refreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:233](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L233)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### renderList

#### Get Signature

> **get** **renderList**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:251](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L251)

Gets or sets the list of meshes to render

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

#### Set Signature

> **set** **renderList**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L255)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:220](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L220)

Gets or sets the number of samples to use for multi-sampling (0 by default). Required WebGL2

##### Returns

`number`

#### Set Signature

> **set** **samples**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:224](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L224)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### attachToMesh()

> **attachToMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L263)

Attach the probe to a specific mesh (Rendering will be done from attached mesh's position)

#### Parameters

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

defines the mesh to attach to

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:279](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L279)

Clean all associated resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:331](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L331)

Get the class name of the refection probe.

#### Returns

`string`

"ReflectionProbe"

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:241](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L241)

Gets the hosting scene

#### Returns

[`Scene`](Scene.md)

a Scene

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:339](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L339)

Serialize the reflection probe to a JSON representation we can easily use in the respective Parse function.

#### Returns

`any`

The JSON representation of the texture

***

### setRenderingAutoClearDepthStencil()

> **setRenderingAutoClearDepthStencil**(`renderingGroupId`, `autoClearDepthStencil`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L272)

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups

#### Parameters

##### renderingGroupId

`number`

The rendering group id corresponding to its index

##### autoClearDepthStencil

`boolean`

Automatically clears depth and stencil between groups if true.

#### Returns

`void`

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L313)

Converts the reflection probe information to a readable string for debug purpose.

#### Parameters

##### fullDetails?

`boolean`

Supports for multiple levels of logging within scene loading

#### Returns

`string`

the human readable reflection probe info

***

### Parse()

> `static` **Parse**(`parsedReflectionProbe`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<`ReflectionProbe`\>

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.ts:354](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Probes/reflectionProbe.ts#L354)

Parse the JSON representation of a reflection probe in order to recreate the reflection probe in the given scene.

#### Parameters

##### parsedReflectionProbe

`any`

Define the JSON representation of the reflection probe

##### scene

[`Scene`](Scene.md)

Define the scene the parsed reflection probe should be instantiated in

##### rootUrl

`string`

Define the root url of the parsing sequence in the case of relative dependencies

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ReflectionProbe`\>

The parsed reflection probe if successful
