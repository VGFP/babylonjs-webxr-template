[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfComponent

# Interface: I3mfComponent

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L202)

Component reference inside a composite object.
A composite object is an object whose content is <components> rather than <mesh>.

objectid references another object in resources.
transform (3x4) positions that referenced object within the composite.

## Properties

### objectid

> **objectid**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L204)

Referenced object id.

***

### transform?

> `optional` **transform?**: [`IMatrix3d`](IMatrix3d.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L210)

Optional transform applied to the referenced object within the component.
Represented as a 3x4 matrix.
