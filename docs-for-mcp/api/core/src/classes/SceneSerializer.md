[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneSerializer

# Class: SceneSerializer

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneSerializer.ts#L121)

Class used to serialize a scene into a string

## Constructors

### Constructor

> **new SceneSerializer**(): `SceneSerializer`

#### Returns

`SceneSerializer`

## Methods

### ClearCache()

> `static` **ClearCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneSerializer.ts#L125)

Clear cache used by a previous serialization

#### Returns

`void`

***

### Serialize()

> `static` **Serialize**(`scene`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneSerializer.ts#L136)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:386](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneSerializer.ts#L386)

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

Defined in: [babylonjs-source/packages/dev/core/src/Misc/sceneSerializer.ts:430](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/sceneSerializer.ts#L430)

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
