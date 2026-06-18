[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebRequest

# Class: WebRequest

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L22)

Extended version of XMLHttpRequest with support for customizations (headers, ...)

## Implements

- `IWebRequest`

## Constructors

### Constructor

> **new WebRequest**(): `WebRequest`

#### Returns

`WebRequest`

## Properties

### CustomRequestHeaders

> `static` **CustomRequestHeaders**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L29)

Custom HTTP Request Headers to be sent with XMLHttpRequests
i.e. when loading files, where the server/service expects an Authorization header

#### Index Signature

\[`key`: `string`\]: `string`

***

### CustomRequestModifiers

> `static` **CustomRequestModifiers**: (`request`, `url`) => `string` \| `void`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L34)

Add callback functions in this array to update all the requests before they get sent to the network

#### Parameters

##### request

`XMLHttpRequest`

##### url

`string`

#### Returns

`string` \| `void`

***

### SkipRequestModificationForBabylonCDN

> `static` **SkipRequestModificationForBabylonCDN**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L39)

If set to true, requests to Babylon.js CDN requests will not be modified

## Accessors

### onprogress

#### Get Signature

> **get** **onprogress**(): ((`this`, `ev`) => `any`) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L172)

Gets or sets a function to be called when loading progress changes

##### Returns

((`this`, `ev`) => `any`) \| `null`

#### Set Signature

> **set** **onprogress**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:176](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L176)

##### Parameters

###### value

((`this`, `ev`) => `any`) \| `null`

##### Returns

`void`

***

### readyState

#### Get Signature

> **get** **readyState**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:183](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L183)

Returns client's state

##### Returns

`number`

***

### requestURL

#### Get Signature

> **get** **requestURL**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L165)

Returns the requested URL once open has been called

##### Returns

`string`

***

### response

#### Get Signature

> **get** **response**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L204)

Returns client's response

##### Returns

`any`

***

### responseText

#### Get Signature

> **get** **responseText**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L218)

Returns client's response as text

##### Returns

`string`

***

### responseType

#### Get Signature

> **get** **responseType**(): `XMLHttpRequestResponseType`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:225](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L225)

Gets or sets the expected response type

##### Returns

`XMLHttpRequestResponseType`

#### Set Signature

> **set** **responseType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L229)

##### Parameters

###### value

`XMLHttpRequestResponseType`

##### Returns

`void`

***

### responseURL

#### Get Signature

> **get** **responseURL**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L211)

Returns client's response url

##### Returns

`string`

#### Implementation of

`IWebRequest.responseURL`

***

### status

#### Get Signature

> **get** **status**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L190)

Returns client's status

##### Returns

`number`

#### Implementation of

`IWebRequest.status`

***

### statusText

#### Get Signature

> **get** **statusText**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L197)

Returns client's status as a text

##### Returns

`string`

#### Implementation of

`IWebRequest.statusText`

***

### timeout

#### Get Signature

> **get** **timeout**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L236)

Gets or sets the timeout value in milliseconds

##### Returns

`number`

#### Set Signature

> **set** **timeout**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L240)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### IsCustomRequestAvailable

#### Get Signature

> **get** `static` **IsCustomRequestAvailable**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L45)

This function can be called to check if there are request modifiers for network requests

##### Returns

`boolean`

true if there are any custom requests available

## Methods

### abort()

> **abort**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L267)

Cancels any network activity

#### Returns

`void`

***

### getResponseHeader()

> **getResponseHeader**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L313)

Get the string containing the text of a particular header's value.

#### Parameters

##### name

`string`

The name of the header

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

The string containing the text of the given header name

***

### open()

> **open**(`method`, `url`, `baseHeaders?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L285)

Sets the request method, request URL

#### Parameters

##### method

`string`

defines the method to use (GET, POST, etc..)

##### url

`string`

defines the url to connect with

##### baseHeaders?

`Record`\<`string`, `string`\>

optional headers to include as a base before applying CustomRequestHeaders and modifiers

#### Returns

`void`

***

### send()

> **send**(`body?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:275](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L275)

Initiates the request. The optional argument provides the request body. The argument is ignored if request method is GET or HEAD

#### Parameters

##### body?

`Document` \| `XMLHttpRequestBodyInit` \| `null`

defines an optional request body

#### Returns

`void`

***

### setRequestHeader()

> **setRequestHeader**(`name`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:304](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L304)

Sets the value of a request header.

#### Parameters

##### name

`string`

The name of the header whose value is to be set

##### value

`string`

The value to set as the body of the header

#### Returns

`void`

***

### FetchAsync()

> `static` **FetchAsync**(`url`, `options?`): `Promise`\<`Response`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/webRequest.ts:114](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/webRequest.ts#L114)

Performs a network request using the Fetch API when available on the platform, falling back to XMLHttpRequest.
`WebRequest.CustomRequestHeaders` and `WebRequest.CustomRequestModifiers` are applied in both cases.

For `CustomRequestModifiers`, a minimal proxy XHR is provided to each modifier so that calls to
`setRequestHeader` on it are captured and forwarded to the underlying request. The URL returned by a
modifier (if any) replaces the current URL before the next modifier runs.

#### Parameters

##### url

`string`

The URL to request.

##### options?

Optional request options (method, headers, body).

###### body?

`BodyInit` \| `null`

###### headers?

`Record`\<`string`, `string`\>

###### method?

`string`

#### Returns

`Promise`\<`Response`\>

A Promise that resolves to a `Response`.
