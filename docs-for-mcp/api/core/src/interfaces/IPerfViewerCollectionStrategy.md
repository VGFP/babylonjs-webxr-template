[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPerfViewerCollectionStrategy

# Interface: IPerfViewerCollectionStrategy

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L11)

Defines the general structure of what is necessary for a collection strategy.

## Properties

### dispose

> **dispose**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L23)

Function which does any necessary cleanup. Called when performanceViewerCollector.dispose() is called.

#### Returns

`void`

***

### getData

> **getData**: () => `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L19)

Function which gets the data for the strategy.

#### Returns

`number`

***

### id

> **id**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L15)

The id of the strategy.
