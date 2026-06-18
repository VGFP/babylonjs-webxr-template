[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReflectionProbe

# Class: ReflectionProbe

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L18)

Class used to generate realtime reflection / refraction cube textures

## See

https://doc.babylonjs.com/features/featuresDeepDive/environment/reflectionProbes

## Constructors

### Constructor

> **new ReflectionProbe**(`name`, `size`, `scene`, `generateMipMaps?`, `useFloat?`, `linearSpace?`): `ReflectionProbe`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L53)

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

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L39)

Gets or sets an object used to store user defined information for the reflection probe.

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L55)

defines the name of the probe

***

### position

> **position**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L34)

Gets or sets probe position (center of the cube map)

## Accessors

### cubeTexture

#### Get Signature

> **get** **cubeTexture**(): [`RenderTargetTexture`](RenderTargetTexture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L203)

Gets the internal CubeTexture used to render to

##### Returns

[`RenderTargetTexture`](RenderTargetTexture.md)

***

### refreshRate

#### Get Signature

> **get** **refreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L186)

Gets or sets the refresh rate to use (on every frame by default)

##### Returns

`number`

#### Set Signature

> **set** **refreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L190)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### renderList

#### Get Signature

> **get** **renderList**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L208)

Gets or sets the list of meshes to render

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

#### Set Signature

> **set** **renderList**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L212)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L177)

Gets or sets the number of samples to use for multi-sampling (0 by default). Required WebGL2

##### Returns

`number`

#### Set Signature

> **set** **samples**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L181)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### attachToMesh()

> **attachToMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:220](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L220)

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

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L236)

Clean all associated resources

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L288)

Get the class name of the refection probe.

#### Returns

`string`

"ReflectionProbe"

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:198](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L198)

Gets the hosting scene

#### Returns

[`Scene`](Scene.md)

a Scene

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L296)

Serialize the reflection probe to a JSON representation we can easily use in the respective Parse function.

#### Returns

`any`

The JSON representation of the texture

***

### setRenderingAutoClearDepthStencil()

> **setRenderingAutoClearDepthStencil**(`renderingGroupId`, `autoClearDepthStencil`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L229)

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

Defined in: [babylonjs-source/packages/dev/core/src/Probes/reflectionProbe.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L270)

Converts the reflection probe information to a readable string for debug purpose.

#### Parameters

##### fullDetails?

`boolean`

Supports for multiple levels of logging within scene loading

#### Returns

`string`

the human readable reflection probe info
