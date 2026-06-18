[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfModel

# Interface: I3mfModel

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L357)

Root model element.

Extensions:
- requiredextensions: a space-separated list of prefixes (or namespaces depending on your serializer conventions)
  that are required to interpret the model.
- recommendedextensions: extensions that improve fidelity but are not required.

Notes:
- resources and build are typically present in a valid printable model.
- metadata at the model level stores global information like title, author, etc.

## Properties

### build?

> `optional` **build?**: [`I3mfBuild`](I3mfBuild.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L374)

Optional build section (what to instantiate/print).

***

### metadata?

> `optional` **metadata?**: [`I3mfMetadata`](I3mfMetadata.md)[]

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:368](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L368)

Optional model-level metadata entries.

***

### recommendedextensions?

> `optional` **recommendedextensions?**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L365)

Declares extensions that may be used for better results.

***

### requiredextensions?

> `optional` **requiredextensions?**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L362)

Declares extensions that must be understood by consumers.

***

### resources?

> `optional` **resources?**: [`I3mfResources`](I3mfResources.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:371](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L371)

Optional resources section (objects, materials, etc.).

***

### unit?

> `optional` **unit?**: [`ST_Unit`](../enumerations/ST_Unit.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L359)

Unit used for all coordinates in the model.
