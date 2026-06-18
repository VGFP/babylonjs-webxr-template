[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TexturePacker

# Class: TexturePacker

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L114)

This is a support class that generates a series of packed texture sets.

## See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction

## Constructors

### Constructor

> **new TexturePacker**(`name`, `meshes`, `options`, `scene`): `TexturePacker`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:164](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L164)

Initializes a texture package series from an array of meshes or a single mesh.

#### Parameters

##### name

`string`

The name of the package

##### meshes

[`AbstractMesh`](AbstractMesh.md)[]

The target meshes to compose the package from

##### options

[`ITexturePackerOptions`](../interfaces/ITexturePackerOptions.md)

The arguments that texture packer should follow while building.

##### scene

[`Scene`](Scene.md)

The scene which the textures are scoped to.

#### Returns

`TexturePacker`

TexturePacker

## Properties

### frames

> **frames**: [`TexturePackerFrame`](TexturePackerFrame.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:148](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L148)

The Container array for the frames that are generated

***

### meshes

> **meshes**: [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L136)

The Meshes to target

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:130](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L130)

The Name of the Texture Package

***

### options

> **options**: [`ITexturePackerOptions`](../interfaces/ITexturePackerOptions.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:139](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L139)

Arguments passed with the Constructor

***

### promise

> **promise**: [`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<`string` \| `TexturePacker`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L142)

The promise that is started upon initialization

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L133)

The scene scope of the TexturePacker

***

### sets

> **sets**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:145](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L145)

The Container object for the channel sets that are generated

***

### LAYOUT\_COLNUM

> `readonly` `static` **LAYOUT\_COLNUM**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L120)

Packer Layout Constant 2

***

### LAYOUT\_POWER2

> `readonly` `static` **LAYOUT\_POWER2**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L118)

Packer Layout Constant 1

***

### LAYOUT\_STRIP

> `readonly` `static` **LAYOUT\_STRIP**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:116](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L116)

Packer Layout Constant 0

***

### SUBUV\_COLOR

> `readonly` `static` **SUBUV\_COLOR**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L127)

Packer Layout Constant 2

***

### SUBUV\_EXTEND

> `readonly` `static` **SUBUV\_EXTEND**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:125](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L125)

Packer Layout Constant 1

***

### SUBUV\_WRAP

> `readonly` `static` **SUBUV\_WRAP**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L123)

Packer Layout Constant 0

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:610](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L610)

Disposes all textures associated with this packer

#### Returns

`void`

***

### download()

> **download**(`imageType?`, `quality?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:623](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L623)

Starts the download process for all the channels converting them to base64 data and embedding it all in a JSON file.

#### Parameters

##### imageType?

`string` = `"png"`

is the image type to use.

##### quality?

`number` = `1`

of the image if downloading as jpeg, Ranges from >0 to 1.

#### Returns

`void`

***

### processAsync()

> **processAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:551](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L551)

Starts the async promise to compile the texture packer.

#### Returns

`Promise`\<`void`\>

Promise<void>

***

### setMeshToFrame()

> **setMeshToFrame**(`m`, `frameID`, `updateMaterial?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L540)

Public method to set a Mesh to a frame

#### Parameters

##### m

[`AbstractMesh`](AbstractMesh.md)

that is the target

##### frameID

`number`

or the frame index

##### updateMaterial?

`boolean` = `false`

trigger for if the Meshes attached Material be updated?

#### Returns

`void`

***

### updateFromJSON()

> **updateFromJSON**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Packer/packer.ts:667](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/Textures/Packer/packer.ts#L667)

Public method to load a texturePacker JSON file.

#### Parameters

##### data

`string`

of the JSON file in string format.

#### Returns

`void`
