[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FilesInput

# Class: FilesInput

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L12)

Class used to help managing file picking and drag-n-drop

## Constructors

### Constructor

> **new FilesInput**(`engine`, `scene`, `sceneLoadedCallback`, `progressCallback`, `additionalRenderLoopLogicCallback`, `textureLoadingCallback`, `startingProcessingFilesCallback`, `onReloadCallback`, `errorCallback`, `useAppend?`, `dontInjectRenderLoop?`): `FilesInput`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:72](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L72)

Creates a new FilesInput

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the rendering engine

##### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\>

defines the hosting scene

##### sceneLoadedCallback

[`Nullable`](../type-aliases/Nullable.md)\<(`sceneFile`, `scene`) => `void`\>

callback called when scene (files provided) is loaded

##### progressCallback

[`Nullable`](../type-aliases/Nullable.md)\<(`progress`) => `void`\>

callback called to track progress

##### additionalRenderLoopLogicCallback

[`Nullable`](../type-aliases/Nullable.md)\<() => `void`\>

callback called to add user logic to the rendering loop

##### textureLoadingCallback

[`Nullable`](../type-aliases/Nullable.md)\<(`remaining`) => `void`\>

callback called when a texture is loading

##### startingProcessingFilesCallback

[`Nullable`](../type-aliases/Nullable.md)\<(`files?`) => `void`\>

callback called when the system is about to process all files

##### onReloadCallback

[`Nullable`](../type-aliases/Nullable.md)\<(`sceneFile`) => `void`\>

callback called when a reload is requested

##### errorCallback

[`Nullable`](../type-aliases/Nullable.md)\<(`sceneFile`, `scene`, `message`) => `void`\>

callback call if an error occurs

##### useAppend?

`boolean` = `false`

defines if the file loaded must be appended (true) or have the scene replaced (false, default behavior)

##### dontInjectRenderLoop?

`boolean` = `false`

defines if the render loop mustn't be injected into engine (default is false). Used only if useAppend is false.

#### Returns

`FilesInput`

## Properties

### displayLoadingUI

> **displayLoadingUI**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L31)

If a loading UI should be displayed while loading a file

***

### dontInjectRenderLoop

> `readonly` **dontInjectRenderLoop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L83)

defines if the render loop mustn't be injected into engine (default is false). Used only if useAppend is false.

***

### loadAsync

> **loadAsync**: (`sceneFile`, `onProgress`) => `Promise`\<[`Scene`](Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L39)

Function used when loading the scene file

#### Parameters

##### sceneFile

`File`

defines the file to load

##### onProgress

[`Nullable`](../type-aliases/Nullable.md)\<(`event`) => `void`\>

onProgress callback called while loading the file

#### Returns

`Promise`\<[`Scene`](Scene.md)\>

a promise completing when the load is complete

***

### onProcessFileCallback

> **onProcessFileCallback**: (`file`, `name`, `extension`, `setSceneFileToLoad`) => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L24)

Callback called when a file is processed

#### Parameters

##### file

`File`

##### name

`string`

##### extension

`string`

##### setSceneFileToLoad

(`sceneFile`) => `void`

#### Returns

`boolean`

false to abort the process

***

### useAppend

> `readonly` **useAppend**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:82](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L82)

defines if the file loaded must be appended (true) or have the scene replaced (false, default behavior)

## Accessors

### filesToLoad

#### Get Signature

> **get** **filesToLoad**(): `File`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:128](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L128)

Gets the current list of files to load

##### Returns

`File`[]

***

### FilesToLoad

#### Get Signature

> **get** `static` **FilesToLoad**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L16)

List of files ready to be loaded

##### Returns

`object`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:135](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L135)

Release all associated resources

#### Returns

`void`

***

### loadFiles()

> **loadFiles**(`event`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L221)

Load files from a drop event

#### Parameters

##### event

`any`

defines the drop event to use as source

#### Returns

`void`

***

### monitorElementForDragNDrop()

> **monitorElementForDragNDrop**(`elementToMonitor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L107)

Calls this function to listen to drag'n'drop events on a specific DOM element

#### Parameters

##### elementToMonitor

`HTMLElement`

defines the DOM element to track

#### Returns

`void`

***

### reload()

> **reload**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/filesInput.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/filesInput.ts#L301)

Reload the current scene from the loaded files

#### Returns

`void`
