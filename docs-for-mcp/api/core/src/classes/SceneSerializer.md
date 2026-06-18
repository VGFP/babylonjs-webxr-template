[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneSerializer

# Class: SceneSerializer

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneSerializer.ts#L122)

Class used to serialize a scene into a string

## Constructors

### Constructor

> **new SceneSerializer**(): `SceneSerializer`

#### Returns

`SceneSerializer`

## Methods

### ClearCache()

> `static` **ClearCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:126](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneSerializer.ts#L126)

Clear cache used by a previous serialization

#### Returns

`void`

***

### Serialize()

> `static` **Serialize**(`scene`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneSerializer.ts#L137)

Serialize a scene into a JSON compatible object
Note that if the current engine does not support synchronous texture reading (like WebGPU), you should use SerializeAsync instead
as else you may not retrieve the proper base64 encoded texture data (when using the Texture.ForceSerializeBuffers flag)

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the scene to serialize

#### Returns

`any`

a JSON compatible object

***

### SerializeAsync()

> `static` **SerializeAsync**(`scene`): `Promise`\<`any`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneSerializer.ts#L387)

Serialize a scene into a JSON compatible object

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the scene to serialize

#### Returns

`Promise`\<`any`\>

a JSON promise compatible object

***

### SerializeMesh()

> `static` **SerializeMesh**(`toSerialize`, `withParents?`, `withChildren?`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:431](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/sceneSerializer.ts#L431)

Serialize a mesh into a JSON compatible object

#### Parameters

##### toSerialize

`any`

defines the mesh to serialize

##### withParents?

`boolean` = `false`

defines if parents must be serialized as well

##### withChildren?

`boolean` = `false`

defines if children must be serialized as well

#### Returns

`any`

a JSON compatible object
