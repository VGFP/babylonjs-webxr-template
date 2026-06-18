[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PerformanceViewerCollector

# Class: PerformanceViewerCollector

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:52](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L52)

The collector class handles the collection and storage of data into the appropriate array.
The collector also handles notifying any observers of any updates.

## Constructors

### Constructor

> **new PerformanceViewerCollector**(`_scene`, `_enabledStrategyCallbacks?`): `PerformanceViewerCollector`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:94](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L94)

Handles the creation of a performance viewer collector.

#### Parameters

##### \_scene

[`Scene`](Scene.md)

the scene to collect on.

##### \_enabledStrategyCallbacks?

`IPerformanceViewerStrategyParameter`[]

the list of data to collect with callbacks for initialization purposes.

#### Returns

`PerformanceViewerCollector`

## Properties

### datasetObservable

> `readonly` **datasetObservable**: [`Observable`](Observable.md)\<`number`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:69](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L69)

An observable you can attach to get deltas in the dataset. Subscribing to this will increase memory consumption slightly, and may hurt performance due to increased garbage collection needed.
Updates of slices will be of the form [timestamp, numberOfPoints, value1, value2...].

***

### datasets

> `readonly` **datasets**: [`IPerfDatasets`](../interfaces/IPerfDatasets.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:64](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L64)

Datastructure containing the collected datasets. Warning: you should not modify the values in here, data will be of the form [timestamp, numberOfPoints, value1, value2..., timestamp, etc...]

***

### metadataObservable

> `readonly` **metadataObservable**: [`Observable`](Observable.md)\<`Map`\<`string`, [`IPerfMetadata`](../interfaces/IPerfMetadata.md)\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:73](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L73)

An observable you can attach to get the most updated map of metadatas.

## Accessors

### hasLoadedData

#### Get Signature

> **get** **hasLoadedData**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:362](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L362)

Accessor which lets the caller know if the performance collector has data loaded from a file or not!
Call clear() to reset this value.

##### Returns

`boolean`

true if the data is loaded from a file, false otherwise.

***

### isStarted

#### Get Signature

> **get** **isStarted**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:529](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L529)

Returns if the perf collector has been started or not.

##### Returns

`boolean`

***

### NumberOfPointsOffset

#### Get Signature

> **get** `static` **NumberOfPointsOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L85)

The offset for the value of the number of points inside a slice.

##### Returns

`number`

***

### SliceDataOffset

#### Get Signature

> **get** `static` **SliceDataOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L78)

The offset for when actual data values start appearing inside a slice.

##### Returns

`number`

## Methods

### addCollectionStrategies()

> **addCollectionStrategies**(...`strategyCallbacks`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L196)

This method adds additional collection strategies for data collection purposes.

#### Parameters

##### strategyCallbacks

...`IPerformanceViewerStrategyParameter`[]

the list of data to collect with callbacks.

#### Returns

`void`

***

### clear()

> **clear**(`preserveStringEventsRestore?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:343](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L343)

Completely clear, data, ids, and strategies saved to this performance collector.

#### Parameters

##### preserveStringEventsRestore?

`boolean`

if it should preserve the string events, by default will clear string events registered when called.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:536](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L536)

Disposes of the object

#### Returns

`void`

***

### exportDataToCsv()

> **exportDataToCsv**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:464](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L464)

Exports the datasets inside of the collector to a csv.

#### Returns

`void`

***

### getCurrentSlice()

> **getCurrentSlice**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L298)

Collects and then sends the latest slice to any observers by using the appropriate strategy when the user wants.
The slice will be of the form [timestamp, numberOfPoints, value1, value2...]
This method does not add onto the collected data accessible via the datasets variable.

#### Returns

`void`

***

### loadFromFileData()

> **loadFromFileData**(`data`, `keepDatasetMeta?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:373](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L373)

Given a string containing file data, this function parses the file data into the datasets object.
It returns a boolean to indicate if this object was successfully loaded with the data.

#### Parameters

##### data

`string`

string content representing the file data.

##### keepDatasetMeta?

`boolean`

if it should use reuse the existing dataset metadata

#### Returns

`boolean`

true if the data was successfully loaded, false otherwise.

***

### registerEvent()

> **registerEvent**(`name`, `forceUpdate?`, `category?`): [`IPerfCustomEvent`](../interfaces/IPerfCustomEvent.md) \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L123)

Registers a custom string event which will be callable via sendEvent. This method returns an event object which will contain the id of the event.
The user can set a value optionally, which will be used in the sendEvent method. If the value is set, we will record this value at the end of each frame,
if not we will increment our counter and record the value of the counter at the end of each frame. The value recorded is 0 if no sendEvent method is called, within a frame.

#### Parameters

##### name

`string`

The name of the event to register

##### forceUpdate?

`boolean`

if the code should force add an event, and replace the last one.

##### category?

`string`

the category for that event

#### Returns

[`IPerfCustomEvent`](../interfaces/IPerfCustomEvent.md) \| `undefined`

The event registered, used in sendEvent

***

### sendEvent()

> **sendEvent**(`event`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:177](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L177)

Lets the perf collector handle an event, occurences or event value depending on if the event.value params is set.

#### Parameters

##### event

[`IPerfCustomEvent`](../interfaces/IPerfCustomEvent.md)

the event to handle an occurence for

#### Returns

`void`

***

### start()

> **start**(`shouldPreserve?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:505](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L505)

Starts the realtime collection of data.

#### Parameters

##### shouldPreserve?

`boolean`

optional boolean param, if set will preserve the dataset between calls of start.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:521](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L521)

Stops the collection of data.

#### Returns

`void`

***

### updateMetadata()

> **updateMetadata**\<`T`\>(`id`, `prop`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollector.ts#L327)

Updates a property for a dataset's metadata with the value provided.

#### Type Parameters

##### T

`T` *extends* keyof [`IPerfMetadata`](../interfaces/IPerfMetadata.md)

#### Parameters

##### id

`string`

the id of the dataset which needs its metadata updated.

##### prop

`T`

the property to update.

##### value

[`IPerfMetadata`](../interfaces/IPerfMetadata.md)\[`T`\]

the value to update the property with.

#### Returns

`void`
