[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfObject

# Interface: I3mfObject

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L234)

Object resource.
An object either contains a mesh (geometry) or components (composite object).

Properties (pid/pindex):
- pid references a property group (e.g. basematerials id).
- pindex is an index within that group.
- If pindex is used, pid is required.

Metadata:
- metadatagroup is optional and can store additional object-level metadata.

## Properties

### content?

> `optional` **content?**: [`I3mfMesh`](I3mfMesh.md) \| [`I3mfComponents`](I3mfComponents.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L273)

Content of the object:
- Mesh geometry OR
- Components (composite object).

In the 3MF XML schema, this corresponds to having either a <mesh> element or a <components> element.

***

### id

> **id**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L236)

Unique object id within the model.

***

### metadatagroup?

> `optional` **metadatagroup?**: [`I3mfMetadataGroup`](I3mfMetadataGroup.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L264)

Optional grouped metadata for the object.

***

### name?

> `optional` **name?**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L248)

Optional human-readable name.

***

### partnumber?

> `optional` **partnumber?**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:245](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L245)

Optional part number (often used by manufacturing systems).

***

### pid?

> `optional` **pid?**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:255](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L255)

Property group reference.
Example: <basematerials id="5"> ... </basematerials> then pid=5.
Required if pindex is specified.

***

### pindex?

> `optional` **pindex?**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L261)

Index inside the property group referenced by pid.
Meaning depends on the property group type (base materials, color group, etc.).

***

### thumbnail?

> `optional` **thumbnail?**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L242)

Optional thumbnail reference (usually a package path).

***

### type?

> `optional` **type?**: [`ST_ObjectType`](../enumerations/ST_ObjectType.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L239)

Optional object type hint.
