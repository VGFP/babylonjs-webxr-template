[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfResources

# Interface: I3mfResources

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L304)

Model resources container.
Holds object resources and optional property groups such as basematerials.

## Properties

### basematerials?

> `optional` **basematerials?**: [`I3mfBaseMaterials`](I3mfBaseMaterials.md)[]

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:312](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L312)

Optional base materials groups.
Other property groups may exist in 3MF (colors, textures, etc.) but are not modeled here.

***

### object

> **object**: [`I3mfObject`](I3mfObject.md)[]

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L306)

All objects available for build items and components.
