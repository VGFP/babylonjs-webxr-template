[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfItem

# Interface: I3mfItem

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:322](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L322)

Build item.
The build section describes what to "print" or "instantiate" from the resources.

objectid references a resource object, and transform places it in the world.
partnumber and metadatagroup allow attaching build-item specific info.

## Properties

### metadatagroup?

> `optional` **metadatagroup?**: [`I3mfMetadataGroup`](I3mfMetadataGroup.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L333)

Optional build-item metadata.

***

### objectid

> **objectid**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L324)

Referenced object id to build.

***

### partnumber?

> `optional` **partnumber?**: `string`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L330)

Optional part number at the build item level.

***

### transform?

> `optional` **transform?**: [`IMatrix3d`](IMatrix3d.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:327](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L327)

Optional placement transform (3x4).
