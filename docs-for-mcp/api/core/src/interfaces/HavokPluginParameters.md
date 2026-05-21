[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HavokPluginParameters

# Interface: HavokPluginParameters

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L280)

## Properties

### floatingOriginWorldRadius?

> `optional` **floatingOriginWorldRadius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:291](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L291)

Radius of each floating origin world region.
Bodies within this radius of a world region's origin will use that world.
Bodies created outside existing regions will create a new region.
Default is 100000 units.

***

### maxQueryCollectorHits?

> `optional` **maxQueryCollectorHits?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:284](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L284)

Maximum number of raycast hits to process
