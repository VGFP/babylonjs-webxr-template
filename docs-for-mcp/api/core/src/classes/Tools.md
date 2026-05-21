[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Tools

# Class: Tools

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L43)

Class containing a set of static utilities functions

## Constructors

### Constructor

> **new Tools**(): `Tools`

#### Returns

`Tools`

## Properties

### AllLogLevel

> `readonly` `static` **AllLogLevel**: `7` = `Logger.AllLogLevel`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1293](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1293)

All logs

***

### AssetBaseUrl

> `static` **AssetBaseUrl**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L126)

The base URL to use to load assets. If empty the default base url is used.

***

### CustomRequestHeaders

> `static` **CustomRequestHeaders**: `object` = `WebRequest.CustomRequestHeaders`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:161](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L161)

Custom HTTP Request Headers to be sent with XMLHttpRequests
i.e. when loading files, where the server/service expects an Authorization header

#### Index Signature

\[`key`: `string`\]: `string`

***

### EndPerformanceCounter

> `static` **EndPerformanceCounter**: (`counterName`, `condition?`) => `void` = `Tools._EndPerformanceCounterDisabled`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1493](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1493)

Ends a specific performance counter

#### Parameters

##### counterName

`string`

##### condition?

`boolean`

#### Returns

`void`

***

### ErrorLogLevel

> `readonly` `static` **ErrorLogLevel**: `4` = `Logger.ErrorLogLevel`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1289](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1289)

Only error logs

***

### GetAbsoluteUrl

> `static` **GetAbsoluteUrl**: (`url`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1260)

#### Parameters

##### url

`string`

#### Returns

`string`

the absolute URL of a given (relative) url

***

### GetDOMTextContent

> `static` **GetDOMTextContent**: (`element`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:328](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L328)

Extracts text content from a DOM element hierarchy
Back Compat only, please use GetDOMTextContent instead.

Extracts text content from a DOM element hierarchy

#### Parameters

##### element

`HTMLElement`

defines the root element

#### Returns

`string`

a string

***

### IsWindowObjectExist

> `static` **IsWindowObjectExist**: () => `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1358](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1358)

Checks if the window object exists
Back Compat only, please use IsWindowObjectExist instead.

Checks if the window object exists

#### Returns

`boolean`

true if the window object exists

***

### LoadScript

> `static` **LoadScript**: (`scriptUrl`, `onSuccess?`, `onError?`, `scriptId?`, `useModule?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:668](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L668)

This function is used internally by babylon components to load a script (identified by an url). When the url returns, the
content of this file is added into a new script element, attached to the DOM (body element)

#### Parameters

##### scriptUrl

`string`

defines the url of the script to load

##### onSuccess?

() => `void`

defines the callback called when the script is loaded

##### onError?

(`message?`, `exception?`) => `void`

defines the callback to call if an error occurs

##### scriptId?

`string`

defines the id of the script element

##### useModule?

`boolean`

defines if we should use the module strategy to load the script

#### Returns

`void`

***

### MessageLogLevel

> `readonly` `static` **MessageLogLevel**: `1` = `Logger.MessageLogLevel`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1281)

Only message logs

***

### NoneLogLevel

> `readonly` `static` **NoneLogLevel**: `0` = `Logger.NoneLogLevel`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1277](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1277)

No log

***

### OnNewCacheEntry

> `static` **OnNewCacheEntry**: (`entry`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1307)

Callback called when a new log is added

#### Parameters

##### entry

`string`

#### Returns

`void`

***

### PerformanceConsoleLogLevel

> `readonly` `static` **PerformanceConsoleLogLevel**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1373)

Log performance to the console

***

### PerformanceNoneLogLevel

> `readonly` `static` **PerformanceNoneLogLevel**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1365](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1365)

No performance log

***

### PerformanceUserMarkLogLevel

> `readonly` `static` **PerformanceUserMarkLogLevel**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1369](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1369)

Use user marks to log performance

***

### StartPerformanceCounter

> `static` **StartPerformanceCounter**: (`counterName`, `condition?`) => `void` = `Tools._StartPerformanceCounterDisabled`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1488](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1488)

Starts a performance counter

#### Parameters

##### counterName

`string`

##### condition?

`boolean`

#### Returns

`void`

***

### UseCustomRequestHeaders

> `static` **UseCustomRequestHeaders**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L155)

Enable/Disable Custom HTTP Request Headers globally.
default = false

#### See

CustomRequestHeaders

***

### WarningLogLevel

> `readonly` `static` **WarningLogLevel**: `2` = `Logger.WarningLogLevel`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1285](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1285)

Only warning logs

## Accessors

### BaseUrl

#### Get Signature

> **get** `static` **BaseUrl**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L47)

Gets or sets the base URL to use to load assets

##### Returns

`string`

#### Set Signature

> **set** `static` **BaseUrl**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:51](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L51)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### CDNBaseUrl

#### Set Signature

> **set** `static` **CDNBaseUrl**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L133)

Sets both the script base URL and the assets base URL to the same value.
Setter only!

##### Parameters

###### value

`string`

##### Returns

`void`

***

### CleanUrl

#### Get Signature

> **get** `static` **CleanUrl**(): (`url`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L58)

Gets or sets the clean URL function to use to load assets

##### Returns

(`url`) => `string`

#### Set Signature

> **set** `static` **CleanUrl**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L62)

##### Parameters

###### value

(`url`) => `string`

##### Returns

`void`

***

### CorsBehavior

#### Get Signature

> **get** `static` **CorsBehavior**(): `string` \| ((`url`) => `string`)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L179)

Default behavior for cors in the application.
It can be a string if the expected behavior is identical in the entire app.
Or a callback to be able to set it per url or on a group of them (in case of Video source for instance)

##### Returns

`string` \| ((`url`) => `string`)

#### Set Signature

> **set** `static` **CorsBehavior**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L183)

##### Parameters

###### value

`string` \| ((`url`) => `string`)

##### Returns

`void`

***

### DefaultRetryStrategy

#### Get Signature

> **get** `static` **DefaultRetryStrategy**(): (`url`, `request`, `retryIndex`) => `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L166)

Gets or sets the retry strategy to apply when an error happens while loading an asset

##### Returns

(`url`, `request`, `retryIndex`) => `number`

#### Set Signature

> **set** `static` **DefaultRetryStrategy**(`strategy`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L170)

##### Parameters

###### strategy

(`url`, `request`, `retryIndex`) => `number`

##### Returns

`void`

***

### errorsCount

#### Get Signature

> **get** `static` **errorsCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1300)

**`Ignorenaming`**

Gets a value indicating the number of loading errors

##### Returns

`number`

***

### fallbackTexture

#### Get Signature

> **get** `static` **fallbackTexture**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L216)

**`Ignorenaming`**

Texture content used if a texture cannot loaded

##### Returns

`string`

#### Set Signature

> **set** `static` **fallbackTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L221)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### LogCache

#### Get Signature

> **get** `static` **LogCache**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1336](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1336)

Gets current log cache (list of logs)

##### Returns

`string`

***

### LogLevels

#### Set Signature

> **set** `static` **LogLevels**(`level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1350)

Sets the current log level (MessageLogLevel / WarningLogLevel / ErrorLogLevel)

##### Parameters

###### level

`number`

##### Returns

`void`

***

### Now

#### Get Signature

> **get** `static` **Now**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1498)

Gets either window.performance.now() if supported or Date.now() else

##### Returns

`number`

***

### PerformanceLogLevel

#### Set Signature

> **set** `static` **PerformanceLogLevel**(`level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1382](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1382)

Sets the current performance log level

##### Parameters

###### level

`number`

##### Returns

`void`

***

### PreprocessUrl

#### Get Signature

> **get** `static` **PreprocessUrl**(): (`url`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:416](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L416)

Gets or sets a function used to pre-process url before using them to load assets

##### Returns

(`url`) => `string`

#### Set Signature

> **set** `static` **PreprocessUrl**(`processor`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L420)

##### Parameters

###### processor

(`url`) => `string`

##### Returns

`void`

***

### RegisteredExternalClasses

#### Get Signature

> **get** `static` **RegisteredExternalClasses**(): `object`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L203)

Use this object to register external classes like custom textures or material
to allow the loaders to instantiate them

##### Returns

`object`

#### Set Signature

> **set** `static` **RegisteredExternalClasses**(`classes`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L207)

##### Parameters

###### classes

##### Returns

`void`

***

### ScriptBaseUrl

#### Get Signature

> **get** `static` **ScriptBaseUrl**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L119)

##### Returns

`string`

#### Set Signature

> **set** `static` **ScriptBaseUrl**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L115)

Sets the base URL to use to load scripts

##### Parameters

###### value

`string`

##### Returns

`void`

***

### ScriptPreprocessUrl

#### Get Signature

> **get** `static` **ScriptPreprocessUrl**(): (`source`) => `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L146)

##### Returns

(`source`) => `string`

#### Set Signature

> **set** `static` **ScriptPreprocessUrl**(`func`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L142)

Sets a preprocessing function to run on a source URL before importing it
Note that this function will execute AFTER the base URL is appended to the URL

##### Parameters

###### func

(`source`) => `string`

##### Returns

`void`

***

### UseFallbackTexture

#### Get Signature

> **get** `static` **UseFallbackTexture**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L191)

**`Ignorenaming`**

Gets or sets a global variable indicating if fallback texture must be used when a texture cannot be loaded

##### Returns

`boolean`

#### Set Signature

> **set** `static` **UseFallbackTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:195](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L195)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### BackCompatCameraNoPreventDefault()

> `static` **BackCompatCameraNoPreventDefault**(`args`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1077](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1077)

Will return the right value of the noPreventDefault variable
Needed to keep backwards compatibility to the old API.

#### Parameters

##### args

`IArguments`

arguments passed to the attachControl function

#### Returns

`boolean`

the correct value for noPreventDefault

***

### ClearLogCache()

> `static` **ClearLogCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1343](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1343)

Clears the log cache

#### Returns

`void`

***

### CreateScreenshot()

> `static` **CreateScreenshot**(`engine`, `camera`, `size`, `successCallback?`, `mimeType?`, `forceDownload?`, `quality?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1107)

Captures a screenshot of the current rendering

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the rendering engine

##### camera

[`Camera`](Camera.md)

defines the source camera

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### successCallback?

(`data`) => `void`

defines the callback receives a single parameter which contains the
screenshot as a string of base64-encoded characters. This string can be assigned to the
src parameter of an <img> to display it

##### mimeType?

`string` = `"image/png"`

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### forceDownload?

`boolean` = `false`

force the system to download the image even if a successCallback is provided

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

***

### CreateScreenshotAsync()

> `static` **CreateScreenshotAsync**(`engine`, `camera`, `size`, `mimeType?`, `quality?`): `Promise`\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1137)

Captures a screenshot of the current rendering

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the rendering engine

##### camera

[`Camera`](Camera.md)

defines the source camera

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### mimeType?

`string` = `"image/png"`

defines the MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`Promise`\<`string`\>

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

***

### CreateScreenshotUsingRenderTarget()

> `static` **CreateScreenshotUsingRenderTarget**(`engine`, `camera`, `size`, `successCallback?`, `mimeType?`, `samples?`, `antialiasing?`, `fileName?`, `renderSprites?`, `enableStencilBuffer?`, `useLayerMask?`, `quality?`, `customizeTexture?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1166)

Generates an image screenshot from the specified camera.

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine to use for rendering

##### camera

[`Camera`](Camera.md)

The camera to use for rendering

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### successCallback?

(`data`) => `void`

The callback receives a single parameter which contains the
screenshot as a string of base64-encoded characters. This string can be assigned to the
src parameter of an <img> to display it

##### mimeType?

`string` = `"image/png"`

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### samples?

`number` = `1`

Texture samples (default: 1)

##### antialiasing?

`boolean` = `false`

Whether antialiasing should be turned on or not (default: false)

##### fileName?

`string`

A name for for the downloaded file.

##### renderSprites?

`boolean` = `false`

Whether the sprites should be rendered or not (default: false)

##### enableStencilBuffer?

`boolean` = `false`

Whether the stencil buffer should be enabled or not (default: false)

##### useLayerMask?

`boolean` = `true`

if the camera's layer mask should be used to filter what should be rendered (default: true)

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

##### customizeTexture?

(`texture`) => `void`

An optional callback that can be used to modify the render target texture before taking the screenshot. This can be used, for instance, to enable camera post-processes before taking the screenshot.

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

***

### CreateScreenshotUsingRenderTargetAsync()

> `static` **CreateScreenshotUsingRenderTargetAsync**(`engine`, `camera`, `size`, `mimeType?`, `samples?`, `antialiasing?`, `fileName?`, `renderSprites?`, `enableStencilBuffer?`, `useLayerMask?`, `quality?`, `customizeTexture?`): `Promise`\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1209](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1209)

Generates an image screenshot from the specified camera.

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

The engine to use for rendering

##### camera

[`Camera`](Camera.md)

The camera to use for rendering

##### size

`number` \| [`IScreenshotSize`](../interfaces/IScreenshotSize.md)

This parameter can be set to a single number or to an object with the
following (optional) properties: precision, width, height. If a single number is passed,
it will be used for both width and height. If an object is passed, the screenshot size
will be derived from the parameters. The precision property is a multiplier allowing
rendering at a higher or lower resolution

##### mimeType?

`string` = `"image/png"`

The MIME type of the screenshot image (default: image/png).
Check your browser for supported MIME types

##### samples?

`number` = `1`

Texture samples (default: 1)

##### antialiasing?

`boolean` = `false`

Whether antialiasing should be turned on or not (default: false)

##### fileName?

`string`

A name for for the downloaded file.

##### renderSprites?

`boolean` = `false`

Whether the sprites should be rendered or not (default: false)

##### enableStencilBuffer?

`boolean` = `false`

Whether the stencil buffer should be enabled or not (default: false)

##### useLayerMask?

`boolean` = `true`

if the camera's layer mask should be used to filter what should be rendered (default: true)

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

##### customizeTexture?

(`texture`) => `void`

An optional callback that can be used to modify the render target texture before taking the screenshot. This can be used, for instance, to enable camera post-processes before taking the screenshot.

#### Returns

`Promise`\<`string`\>

screenshot as a string of base64-encoded characters. This string can be assigned
to the src parameter of an <img> to display it

#### See

https://doc.babylonjs.com/features/featuresDeepDive/scene/renderToPNG

***

### ~~DecodeBase64()~~

> `static` **DecodeBase64**(`uri`): `ArrayBuffer`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1252)

Decode the given base64 uri.

#### Parameters

##### uri

`string`

The uri to decode

#### Returns

`ArrayBuffer`

The decoded base64 data.

#### Deprecated

Please use FileTools.DecodeBase64UrlToBinary instead.

***

### DeepCopy()

> `static` **DeepCopy**(`source`, `destination`, `doNotCopyList?`, `mustCopyList?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:773](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L773)

Tries to copy an object by duplicating every property

#### Parameters

##### source

`any`

defines the source object

##### destination

`any`

defines the target object

##### doNotCopyList?

`string`[]

defines a list of properties to avoid

##### mustCopyList?

`string`[]

defines a list of properties to copy (even if they start with _)

#### Returns

`void`

***

### DelayAsync()

> `static` **DelayAsync**(`delay`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1580](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1580)

Returns a promise that resolves after the given amount of time.

#### Parameters

##### delay

`number`

Number of milliseconds to delay

#### Returns

`Promise`\<`void`\>

Promise that resolves after the given amount of time

***

### Download()

> `static` **Download**(`blob`, `fileName`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1050](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1050)

Downloads a blob in the browser

#### Parameters

##### blob

`Blob`

defines the blob to download

##### fileName

`string`

defines the name of the downloaded file

#### Returns

`void`

***

### DownloadBlob()

> `static` **DownloadBlob**(`blob`, `fileName?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:963](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L963)

Download a Blob object

#### Parameters

##### blob

`Blob`

the Blob object

##### fileName?

`string`

the file name to download

#### Returns

`void`

***

### DumpData()

> `static` **DumpData**(`width`, `height`, `data`, `successCallback?`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:868](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L868)

Dumps an array buffer

#### Parameters

##### width

`number`

defines the rendering width

##### height

`number`

defines the rendering height

##### data

`ArrayBufferView`

the data array

##### successCallback?

(`data`) => `void`

defines the callback triggered once the data are available

##### mimeType?

`string` = `"image/png"`

defines the mime type of the result

##### fileName?

`string`

defines the filename to download. If present, the result will automatically be downloaded

##### invertY?

`boolean` = `false`

true to invert the picture in the Y dimension

##### toArrayBuffer?

`boolean` = `false`

true to convert the data to an ArrayBuffer (encoded as `mimeType`) instead of a base64 string

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`void`

***

### DumpDataAsync()

> `static` **DumpDataAsync**(`width`, `height`, `data`, `mimeType?`, `fileName?`, `invertY?`, `toArrayBuffer?`, `quality?`): `Promise`\<`string` \| `ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:896](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L896)

Dumps an array buffer

#### Parameters

##### width

`number`

defines the rendering width

##### height

`number`

defines the rendering height

##### data

`ArrayBufferView`

the data array

##### mimeType?

`string` = `"image/png"`

defines the mime type of the result

##### fileName?

`string`

defines the filename to download. If present, the result will automatically be downloaded

##### invertY?

`boolean` = `false`

true to invert the picture in the Y dimension

##### toArrayBuffer?

`boolean` = `false`

true to convert the data to an ArrayBuffer (encoded as `mimeType`) instead of a base64 string

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`Promise`\<`string` \| `ArrayBuffer`\>

a promise that resolve to the final data

***

### DumpFramebuffer()

> `static` **DumpFramebuffer**(`width`, `height`, `engine`, `successCallback?`, `mimeType?`, `fileName?`, `quality?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:844](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L844)

Dumps the current bound framebuffer

#### Parameters

##### width

`number`

defines the rendering width

##### height

`number`

defines the rendering height

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the hosting engine

##### successCallback?

(`data`) => `void`

defines the callback triggered once the data are available

##### mimeType?

`string` = `"image/png"`

defines the mime type of the result

##### fileName?

`string`

defines the filename to download. If present, the result will automatically be downloaded

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`Promise`\<`void`\>

a void promise

***

### EncodeScreenshotCanvasData()

> `static` **EncodeScreenshotCanvasData**(`canvas`, `successCallback?`, `mimeType?`, `fileName?`, `quality?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1000](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1000)

Encodes the canvas data to base 64, or automatically downloads the result if `fileName` is defined.

#### Parameters

##### canvas

`HTMLCanvasElement` \| `OffscreenCanvas`

The canvas to get the data from, which can be an offscreen canvas.

##### successCallback?

(`data`) => `void`

The callback which is triggered once the data is available. If `fileName` is defined, the callback will be invoked after the download occurs, and the `data` argument will be an empty string.

##### mimeType?

`string` = `"image/png"`

The mime type of the result.

##### fileName?

`string`

The name of the file to download. If defined, the result will automatically be downloaded. If not defined, and `successCallback` is also not defined, the result will automatically be downloaded with an auto-generated file name.

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`void`

***

### Error()

> `static` **Error**(`message`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1329](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1329)

Write an error message to the console

#### Parameters

##### message

`string`

defines the message to log

#### Returns

`void`

***

### FetchToRef()

> `static` **FetchToRef**(`u`, `v`, `width`, `height`, `pixels`, `color`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L234)

Read the content of a byte array at a specified coordinates (taking in account wrapping)

#### Parameters

##### u

`number`

defines the coordinate on X axis

##### v

`number`

defines the coordinate on Y axis

##### width

`number`

defines the width of the source data

##### height

`number`

defines the height of the source data

##### pixels

`Uint8Array`

defines the source byte array

##### color

`IColor4Like`

defines the output color

#### Returns

`void`

***

### FileAsURL()

> `static` **FileAsURL**(`content`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:749](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L749)

Creates a data url from a given string content

#### Parameters

##### content

`string`

defines the content to convert

#### Returns

`string`

the new data url link

***

### First()

> `static` **First**\<`T`\>(`array`, `predicate`): [`Nullable`](../type-aliases/Nullable.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1532](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1532)

Gets the first element of an array satisfying a given predicate

#### Type Parameters

##### T

`T`

#### Parameters

##### array

`T`[]

defines the array to browse

##### predicate

(`item`) => `boolean`

defines the predicate to use

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`T`\>

null if not found or the element

***

### FloatRound()

> `static` **FloatRound**(`value`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:288](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L288)

Returns the nearest 32-bit single precision float representation of a Number

#### Parameters

##### value

`number`

A Number.  If the parameter is of a different type, it will get converted
to a number or to NaN if it cannot be converted

#### Returns

`number`

number

***

### Format()

> `static` **Format**(`value`, `decimals?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:762](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L762)

Format the given number to a specific decimal format

#### Parameters

##### value

`number`

defines the number to format

##### decimals?

`number` = `2`

defines the number of decimals to use

#### Returns

`string`

the formatted string

***

### GetAssetUrl()

> `static` **GetAssetUrl**(`url`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:518](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L518)

This function will convert asset URLs if the AssetBaseUrl parameter is set.
Any URL with `assets.babylonjs.com/core` will be replaced with the value of AssetBaseUrl.

#### Parameters

##### url

`string`

the URL to convert

#### Returns

`string`

a new URL

***

### GetBabylonScriptURL()

> `static` **GetBabylonScriptURL**(`scriptUrl`, `forceAbsoluteUrl?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:538](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L538)

Get a script URL including preprocessing

#### Parameters

##### scriptUrl

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

the script Url to process

##### forceAbsoluteUrl?

`boolean`

force the script to be an absolute url (adding the current base url if necessary)

#### Returns

`string`

a modified URL to use

***

### GetClassName()

> `static` **GetClassName**(`object`, `isType?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1509](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1509)

This method will return the name of the class used to create the instance of the given object.
It will works only on Javascript basic data types (number, string, ...) and instance of class declared with the

#### Parameters

##### object

`any`

the object to get the class name from

##### isType?

`boolean` = `false`

defines if the object is actually a type

#### Returns

`string`

the name of the class, will be "object" for a custom data type not using the

#### Class Name

decorator.

#### Class Name

decorator

***

### GetFilename()

> `static` **GetFilename**(`path`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:297](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L297)

Extracts the filename from a path

#### Parameters

##### path

`string`

defines the path to use

#### Returns

`string`

the filename

***

### GetFolderPath()

> `static` **GetFolderPath**(`uri`, `returnUnchangedIfNoSlash?`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L312)

Extracts the "folder" part of a path (everything before the filename).

#### Parameters

##### uri

`string`

The URI to extract the info from

##### returnUnchangedIfNoSlash?

`boolean` = `false`

Do not touch the URI if no slashes are present

#### Returns

`string`

The "folder" part of the path

***

### getFullClassName()

> `static` **getFullClassName**(`object`, `isType?`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1551)

**`Ignorenaming`**

This method will return the name of the full name of the class, including its owning module (if any).
It will works only on Javascript basic data types (number, string, ...) and instance of class declared with the

#### Parameters

##### object

`any`

the object to get the class name from

##### isType?

`boolean` = `false`

defines if the object is actually a type

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

a string that can have two forms: "moduleName.className" if module was specified when the class' Name was registered or "className" if there was not module specified.

#### Class Name

decorator or implementing a method getClassName():string (in which case the module won't be specified).

***

### GetPointerPrefix()

> `static` **GetPointerPrefix**(`engine`): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L387)

Gets the pointer prefix to use

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

defines the engine we are finding the prefix for

#### Returns

`string`

"pointer" if touch is enabled. Else returns "mouse"

***

### Instantiate()

> `static` **Instantiate**(`className`): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:261](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L261)

Tries to instantiate a new object from a given class name

#### Parameters

##### className

`string`

defines the class name to instantiate

#### Returns

`any`

the new object or null if the system was not able to do the instantiation

***

### IsAbsoluteUrl()

> `static` **IsAbsoluteUrl**(`url`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L72)

This function checks whether a URL is absolute or not.
It will also detect data and blob URLs

#### Parameters

##### url

`string`

the url to check

#### Returns

`boolean`

is the url absolute or relative

***

### ~~IsBase64()~~

> `static` **IsBase64**(`uri`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1242)

Test if the given uri is a base64 string

#### Parameters

##### uri

`string`

The uri to test

#### Returns

`boolean`

True if the uri is a base64 string or false otherwise

#### Deprecated

Please use FileTools.IsBase64DataUrl instead.

***

### IsEmpty()

> `static` **IsEmpty**(`obj`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:782](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L782)

Gets a boolean indicating if the given object has no own property

#### Parameters

##### obj

`any`

defines the object to test

#### Returns

`boolean`

true if object has no own property

***

### IsExponentOfTwo()

> `static` **IsExponentOfTwo**(`value`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L278)

Function indicating if a number is an exponent of 2

#### Parameters

##### value

`number`

defines the value to test

#### Returns

`boolean`

true if the value is an exponent of 2

***

### IsSafari()

> `static` **IsSafari**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1592](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1592)

Utility function to detect if the current user agent is Safari

#### Returns

`boolean`

whether or not the current user agent is safari

***

### LoadBabylonScript()

> `static` **LoadBabylonScript**(`scriptUrl`, `onSuccess`, `onError?`, `scriptId?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:578](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L578)

This function is used internally by babylon components to load a script (identified by an url). When the url returns, the
content of this file is added into a new script element, attached to the DOM (body element)

#### Parameters

##### scriptUrl

`string`

defines the url of the script to load

##### onSuccess

() => `void`

defines the callback called when the script is loaded

##### onError?

(`message?`, `exception?`) => `void`

defines the callback to call if an error occurs

##### scriptId?

`string`

defines the id of the script element

#### Returns

`void`

***

### LoadBabylonScriptAsync()

> `static` **LoadBabylonScriptAsync**(`scriptUrl`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:589](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L589)

Load an asynchronous script (identified by an url). When the url returns, the
content of this file is added into a new script element, attached to the DOM (body element)

#### Parameters

##### scriptUrl

`string`

defines the url of the script to laod

#### Returns

`Promise`\<`void`\>

a promise request object

***

### LoadFile()

> `static` **LoadFile**(`url`, `onSuccess`, `onProgress?`, `offlineProvider?`, `useArrayBuffer?`, `onError?`): [`IFileRequest`](../interfaces/IFileRequest.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L455)

Loads a file from a url

#### Parameters

##### url

`string`

url string, ArrayBuffer, or Blob to load

##### onSuccess

(`data`, `responseURL?`) => `void`

callback called when the file successfully loads

##### onProgress?

(`data`) => `void`

callback called while file is loading (if the server supports this mode)

##### offlineProvider?

[`IOfflineProvider`](../interfaces/IOfflineProvider.md)

defines the offline provider for caching

##### useArrayBuffer?

`boolean`

defines a boolean indicating that date must be returned as ArrayBuffer

##### onError?

(`request?`, `exception?`) => `void`

callback called when the file fails to load

#### Returns

[`IFileRequest`](../interfaces/IFileRequest.md)

a file request object

***

### LoadFileAsync()

Loads a file from a url

#### Param

the file url to load

#### Param

defines a boolean indicating that date must be returned as ArrayBuffer

#### Call Signature

> `static` **LoadFileAsync**(`url`, `useArrayBuffer?`): `Promise`\<`ArrayBuffer`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:467](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L467)

##### Parameters

###### url

`string`

###### useArrayBuffer?

`true`

##### Returns

`Promise`\<`ArrayBuffer`\>

#### Call Signature

> `static` **LoadFileAsync**(`url`, `useArrayBuffer?`): `Promise`\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:468](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L468)

##### Parameters

###### url

`string`

###### useArrayBuffer?

`false`

##### Returns

`Promise`\<`string`\>

***

### LoadImage()

> `static` **LoadImage**(`input`, `onLoad`, `onError`, `offlineProvider`, `mimeType?`, `imageBitmapOptions?`): [`Nullable`](../type-aliases/Nullable.md)\<`HTMLImageElement`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:434](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L434)

Loads an image as an HTMLImageElement.

#### Parameters

##### input

`string` \| `ArrayBuffer` \| `Blob`

url string, ArrayBuffer, or Blob to load

##### onLoad

(`img`) => `void`

callback called when the image successfully loads

##### onError

(`message?`, `exception?`) => `void`

callback called when the image fails to load

##### offlineProvider

[`Nullable`](../type-aliases/Nullable.md)\<[`IOfflineProvider`](../interfaces/IOfflineProvider.md)\>

offline provider for caching

##### mimeType?

`string`

optional mime type

##### imageBitmapOptions?

`ImageBitmapOptions`

optional the options to use when creating an ImageBitmap

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLImageElement`\>

the HTMLImageElement of the loaded image

***

### LoadScriptAsync()

> `static` **LoadScriptAsync**(`scriptUrl`, `scriptId?`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:678](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L678)

Load an asynchronous script (identified by an url). When the url returns, the
content of this file is added into a new script element, attached to the DOM (body element)

#### Parameters

##### scriptUrl

`string`

defines the url of the script to load

##### scriptId?

`string`

defines the id of the script element

#### Returns

`Promise`\<`void`\>

a promise request object

***

### Log()

> `static` **Log**(`message`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1313](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1313)

Log a message to the console

#### Parameters

##### message

`string`

defines the message to log

#### Returns

`void`

***

### MakeArray()

> `static` **MakeArray**(`obj`, `allowsNullUndefined?`): [`Nullable`](../type-aliases/Nullable.md)\<`any`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L373)

Returns an array if obj is not an array

#### Parameters

##### obj

`any`

defines the object to evaluate as an array

##### allowsNullUndefined?

`boolean`

defines a boolean indicating if obj is allowed to be null or undefined

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`any`[]\>

either obj directly if obj is an array or a new array containing obj

***

### Mix()

> `static` **Mix**(`a`, `b`, `alpha`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:252](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L252)

Interpolates between a and b via alpha

#### Parameters

##### a

`number`

The lower value (returned when alpha = 0)

##### b

`number`

The upper value (returned when alpha = 1)

##### alpha

`number`

The interpolation-factor

#### Returns

`number`

The mixed value

***

### RandomId()

> `static` **RandomId**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1232)

Implementation from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#answer-2117523
Be aware Math.random() could cause collisions, but:
"All but 6 of the 128 bits of the ID are randomly generated, which means that for any two ids, there's a 1 in 2^^122 (or 5.3x10^^36) chance they'll collide"

#### Returns

`string`

a pseudo random id

***

### ReadFile()

> `static` **ReadFile**(`file`, `onSuccess`, `onProgress?`, `useArrayBuffer?`, `onError?`): [`IFileRequest`](../interfaces/IFileRequest.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:734](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L734)

Reads a file from a File object

#### Parameters

##### file

`File`

defines the file to load

##### onSuccess

(`data`) => `void`

defines the callback to call when data is loaded

##### onProgress?

(`ev`) => `any`

defines the callback to call during loading process

##### useArrayBuffer?

`boolean`

defines a boolean indicating that data must be returned as an ArrayBuffer

##### onError?

(`error`) => `void`

defines the callback to call when an error occurs

#### Returns

[`IFileRequest`](../interfaces/IFileRequest.md)

a file request object

***

### ReadFileAsDataURL()

> `static` **ReadFileAsDataURL**(`fileToLoad`, `callback`, `progressCallback`): [`IFileRequest`](../interfaces/IFileRequest.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:701](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L701)

Loads a file from a blob

#### Parameters

##### fileToLoad

`Blob`

defines the blob to use

##### callback

(`data`) => `void`

defines the callback to call when data is loaded

##### progressCallback

(`ev`) => `any`

defines the callback to call during loading process

#### Returns

[`IFileRequest`](../interfaces/IFileRequest.md)

a file request object

***

### RegisterTopRootEvents()

> `static` **RegisterTopRootEvents**(`windowElement`, `events`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:796](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L796)

Function used to register events at window level

#### Parameters

##### windowElement

`Window`

defines the Window object to use

##### events

`object`[]

defines the events to register

#### Returns

`void`

***

### SetCorsBehavior()

> `static` **SetCorsBehavior**(`url`, `element`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:397](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L397)

Sets the cors behavior on a dom element. This will add the required Tools.CorsBehavior to the element.

#### Parameters

##### url

`string` \| `string`[]

define the url we are trying

##### element

define the dom element where to configure the cors policy

###### crossOrigin

`string` \| `null`

#### Returns

`void`

***

### SetImmediate()

> `static` **SetImmediate**(`action`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L269)

Polyfill for setImmediate

#### Parameters

##### action

() => `void`

defines the action to execute after the current execution block

#### Returns

`void`

***

### SetReferrerPolicyBehavior()

> `static` **SetReferrerPolicyBehavior**(`referrerPolicy`, `element`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L407)

Sets the referrerPolicy behavior on a dom element.

#### Parameters

##### referrerPolicy

[`Nullable`](../type-aliases/Nullable.md)\<`ReferrerPolicy`\>

define the referrer policy to use

##### element

define the dom element where to configure the referrer policy

###### referrerPolicy

`string` \| `null`

#### Returns

`void`

***

### SmoothAngleChange()

> `static` **SmoothAngleChange**(`previousAngle`, `newAngle`, `smoothFactor?`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L356)

Smooth angle changes (kind of low-pass filter), in particular for device orientation "shaking"
Use trigonometric functions to avoid discontinuity (0/360, -180/180)

#### Parameters

##### previousAngle

`number`

defines last angle value, in degrees

##### newAngle

`number`

defines new angle value, in degrees

##### smoothFactor?

`number` = `0.9`

defines smoothing sensitivity; min 0: no smoothing, max 1: new data ignored

#### Returns

`number`

the angle in degrees

***

### ToBlob()

> `static` **ToBlob**(`canvas`, `successCallback`, `mimeType?`, `quality?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:921](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L921)

Converts the canvas data to blob.
This acts as a polyfill for browsers not supporting the to blob function.

#### Parameters

##### canvas

`HTMLCanvasElement` \| `OffscreenCanvas`

Defines the canvas to extract the data from (can be an offscreen canvas)

##### successCallback

(`blob`) => `void`

Defines the callback triggered once the data are available

##### mimeType?

`string` = `"image/png"`

Defines the mime type of the result

##### quality?

`number`

The quality of the image if lossy mimeType is used (e.g. image/jpeg, image/webp). See [HTMLCanvasElement.toBlob()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob)'s `quality` parameter.

#### Returns

`void`

***

### ToDegrees()

> `static` **ToDegrees**(`angle`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:335](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L335)

Convert an angle in radians to degrees

#### Parameters

##### angle

`number`

defines the angle to convert

#### Returns

`number`

the angle in degrees

***

### ToRadians()

> `static` **ToRadians**(`angle`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:344](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L344)

Convert an angle in degrees to radians

#### Parameters

##### angle

`number`

defines the angle to convert

#### Returns

`number`

the angle in radians

***

### UnregisterTopRootEvents()

> `static` **UnregisterTopRootEvents**(`windowElement`, `events`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:816](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L816)

Function used to unregister events from window level

#### Parameters

##### windowElement

`Window`

defines the Window object to use

##### events

`object`[]

defines the events to unregister

#### Returns

`void`

***

### Warn()

> `static` **Warn**(`message`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/tools.ts:1321](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/tools.ts#L1321)

Write a warning message to the console

#### Parameters

##### message

`string`

defines the message to log

#### Returns

`void`
