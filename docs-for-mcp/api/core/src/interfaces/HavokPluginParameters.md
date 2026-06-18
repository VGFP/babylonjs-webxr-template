[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HavokPluginParameters

# Interface: HavokPluginParameters

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:329](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L329)

Configuration parameters for the Havok plugin

## Properties

### floatingOriginWorldRadius?

> `optional` **floatingOriginWorldRadius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:340](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L340)

Radius of each floating origin world region.
Bodies within this radius of a world region's origin will use that world.
Bodies created outside existing regions will create a new region.
Default is 100000 units.

***

### maxQueryCollectorHits?

> `optional` **maxQueryCollectorHits?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:333](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L333)

Maximum number of raycast hits to process
