[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Logger

# Class: Logger

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:6](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L6)

Logger used throughout the application to allow configuration of
the log level required for the messages.

## Constructors

### Constructor

> **new Logger**(): `Logger`

#### Returns

`Logger`

## Properties

### AllLogLevel

> `readonly` `static` **AllLogLevel**: `7` = `7`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L26)

All logs

***

### Error

> `static` **Error**: (`message`, `limit?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L127)

Write an error message to the console

#### Parameters

##### message

`string` \| `any`[]

##### limit?

`number`

#### Returns

`void`

***

### ErrorLogLevel

> `readonly` `static` **ErrorLogLevel**: `4` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L22)

Only error logs

***

### errorsCount

> `static` **errorsCount**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L49)

**`Ignorenaming`**

Gets a value indicating the number of loading errors

***

### Log

> `static` **Log**: (`message`, `limit?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L117)

Log a message to the console

#### Parameters

##### message

`string` \| `any`[]

##### limit?

`number`

#### Returns

`void`

***

### MessageLimitReached

> `static` **MessageLimitReached**: `string` = `"Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message."`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L31)

Message to display when a message has been logged too many times

***

### MessageLogLevel

> `readonly` `static` **MessageLogLevel**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L14)

Only message logs

***

### NoneLogLevel

> `readonly` `static` **NoneLogLevel**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L10)

No log

***

### OnNewCacheEntry

> `static` **OnNewCacheEntry**: (`entry`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L54)

Callback called when a new log is added

#### Parameters

##### entry

`string`

#### Returns

`void`

***

### Warn

> `static` **Warn**: (`message`, `limit?`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:122](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L122)

Write a warning message to the console

#### Parameters

##### message

`string` \| `any`[]

##### limit?

`number`

#### Returns

`void`

***

### WarningLogLevel

> `readonly` `static` **WarningLogLevel**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L18)

Only warning logs

## Accessors

### LogCache

#### Get Signature

> **get** `static` **LogCache**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:132](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L132)

Gets current log cache (list of logs)

##### Returns

`string`

***

### LogLevels

#### Set Signature

> **set** `static` **LogLevels**(`level`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L149)

Sets the current log level. This property is a bit field, allowing you to combine different levels (MessageLogLevel / WarningLogLevel / ErrorLogLevel).
Use NoneLogLevel to disable logging and AllLogLevel for a quick way to enable all levels.

##### Parameters

###### level

`number`

##### Returns

`void`

## Methods

### ClearLogCache()

> `static` **ClearLogCache**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/logger.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/logger.ts#L139)

Clears the log cache

#### Returns

`void`
