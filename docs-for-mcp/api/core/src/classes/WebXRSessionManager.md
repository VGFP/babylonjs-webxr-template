[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRSessionManager

# Class: WebXRSessionManager

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L20)

Manages an XRSession to work with Babylon's engine

## See

https://doc.babylonjs.com/features/featuresDeepDive/webXR/webXRSessionManagers

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)
- [`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md)

## Constructors

### Constructor

> **new WebXRSessionManager**(`scene`): `WebXRSessionManager`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L119)

Constructs a WebXRSessionManager, this must be initialized within a user action before usage

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene which the session should be created for

#### Returns

`WebXRSessionManager`

## Properties

### baseReferenceSpace

> **baseReferenceSpace**: `XRReferenceSpace`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L33)

The base reference space from which the session started. good if you want to reset your
reference space

***

### currentFrame

> **currentFrame**: [`Nullable`](../type-aliases/Nullable.md)\<`XRFrame`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L37)

Current XR frame

***

### currentTimestamp

> **currentTimestamp**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L39)

WebXR timestamp updated every frame

***

### defaultHeightCompensation

> **defaultHeightCompensation**: `number` = `1.7`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:44](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L44)

Used just in case of a failure to initialize an immersive session.
The viewer reference space is compensated using this height, creating a kind of "viewer-floor" reference space

***

### inXRFrameLoop

> **inXRFrameLoop**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L83)

Are we currently in the XR loop?

***

### inXRSession

> **inXRSession**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L87)

Are we in an XR session?

***

### onWorldScaleFactorChangedObservable

> **onWorldScaleFactorChangedObservable**: [`Observable`](Observable.md)\<\{ `newScaleFactor`: `number`; `previousScaleFactor`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:94](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L94)

Observable raised when the world scale has changed

***

### onXRFrameObservable

> **onXRFrameObservable**: [`Observable`](Observable.md)\<`XRFrame`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L48)

Fires every time a new xrFrame arrives which can be used to update the camera

***

### onXRReady

> **onXRReady**: [`Observable`](Observable.md)\<`WebXRSessionManager`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:70](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L70)

Fires when the session manager is rendering the first frame

***

### onXRReferenceSpaceChanged

> **onXRReferenceSpaceChanged**: [`Observable`](Observable.md)\<`XRReferenceSpace`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L52)

Fires when the reference space changed

***

### onXRReferenceSpaceInitialized

> **onXRReferenceSpaceInitialized**: [`Observable`](Observable.md)\<`XRReferenceSpace`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:65](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L65)

Fires when the xr reference space has been initialized

***

### onXRSessionEnded

> **onXRSessionEnded**: [`Observable`](Observable.md)\<`any`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L56)

Fires when the xr session is ended either by the device or manually done

***

### onXRSessionInit

> **onXRSessionInit**: [`Observable`](Observable.md)\<`XRSession`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L60)

Fires when the xr session is initialized: right after requestSession was called and returned with a successful result

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L121)

The scene which the session should be created for

***

### session

> **session**: `XRSession`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L74)

Underlying xr session

***

### viewerReferenceSpace

> **viewerReferenceSpace**: `XRReferenceSpace`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L79)

The viewer (head position) reference space. This can be used to get the XR world coordinates
or get the offset the player is currently at.

## Accessors

### currentFrameRate

#### Get Signature

> **get** **currentFrameRate**(): `number` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L477)

The current frame rate as reported by the device

##### Returns

`number` \| `undefined`

***

### enabledFeatures

#### Get Signature

> **get** **enabledFeatures**(): [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:542](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L542)

Get the features enabled on the current session
This is only available in-session!

##### See

https://www.w3.org/TR/webxr/#dom-xrsession-enabledfeatures

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

***

### fixedFoveation

#### Get Signature

> **get** **fixedFoveation**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:522](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L522)

Get the fixed foveation currently set, as specified by the webxr specs
If this returns null, then fixed foveation is not supported

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **fixedFoveation**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:530](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L530)

Set the fixed foveation to the specified value, as specified by the webxr specs
This value will be normalized to be between 0 and 1, 1 being max foveation, 0 being no foveation

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### isFixedFoveationSupported

#### Get Signature

> **get** **isFixedFoveationSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:514](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L514)

Check if fixed foveation is supported on this device

##### Returns

`boolean`

***

### isNative

#### Get Signature

> **get** **isNative**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L470)

Returns true if Babylon.js is using the BabylonNative backend, otherwise false

##### Returns

`boolean`

***

### referenceSpace

#### Get Signature

> **get** **referenceSpace**(): `XRReferenceSpace`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L141)

The current reference space used in this session. This reference space can constantly change!
It is mainly used to offset the camera's position.

##### Returns

`XRReferenceSpace`

#### Set Signature

> **set** **referenceSpace**(`newReferenceSpace`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L148)

Set a new reference space and triggers the observable

##### Parameters

###### newReferenceSpace

`XRReferenceSpace`

##### Returns

`void`

***

### sessionMode

#### Get Signature

> **get** **sessionMode**(): `XRSessionMode`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L156)

The mode for the managed XR session

##### Returns

`XRSessionMode`

***

### supportedFrameRates

#### Get Signature

> **get** **supportedFrameRates**(): `Float32Array`\<`ArrayBufferLike`\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:484](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L484)

A list of supported frame rates (only available in-session!

##### Returns

`Float32Array`\<`ArrayBufferLike`\> \| `undefined`

***

### worldScalingFactor

#### Get Signature

> **get** **worldScalingFactor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:102](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L102)

Scale factor to apply to all XR-related elements (camera, controllers)

##### Returns

`number`

#### Set Signature

> **set** **worldScalingFactor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:106](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L106)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L164)

Disposes of the session manager
This should be called explicitly by the dev, if required.

#### Returns

`void`

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`dispose`](../interfaces/IWebXRRenderTargetTextureProvider.md#dispose)

***

### exitXRAsync()

> **exitXRAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L185)

Stops the xrSession and restores the render loop

#### Returns

`Promise`\<`void`\>

Promise which resolves after it exits XR

***

### getRenderTargetTextureForEye()

> **getRenderTargetTextureForEye**(`eye`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L212)

Gets the correct render target texture to be rendered this frame for this eye

#### Parameters

##### eye

`XREye`

the eye for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the render target for the specified eye or null if not available

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`getRenderTargetTextureForEye`](../interfaces/IWebXRRenderTargetTextureProvider.md#getrendertargettextureforeye)

***

### getRenderTargetTextureForView()

> **getRenderTargetTextureForView**(`view`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L221)

Gets the correct render target texture to be rendered this frame for this view

#### Parameters

##### view

`XRView`

the view for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the render target for the specified view or null if not available

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`getRenderTargetTextureForView`](../interfaces/IWebXRRenderTargetTextureProvider.md#getrendertargettextureforview)

***

### getWebXRRenderTarget()

> **getWebXRRenderTarget**(`options?`): [`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L230)

Creates a WebXRRenderTarget object for the XR session

#### Parameters

##### options?

[`WebXRManagedOutputCanvasOptions`](WebXRManagedOutputCanvasOptions.md)

optional options to provide when creating a new render target

#### Returns

[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)

a WebXR render target to which the session can render

***

### initializeAsync()

> **initializeAsync**(): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:246](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L246)

Initializes the manager
After initialization enterXR can be called to start an XR session

#### Returns

`Promise`\<`void`\>

Promise which resolves after it is initialized

***

### initializeSessionAsync()

> **initializeSessionAsync**(`xrSessionMode?`, `xrSessionInit?`): `Promise`\<`XRSession`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L260)

Initializes an xr session

#### Parameters

##### xrSessionMode?

`XRSessionMode` = `"immersive-vr"`

mode to initialize

##### xrSessionInit?

`XRSessionInit` = `{}`

defines optional and required values to pass to the session builder

#### Returns

`Promise`\<`XRSession`\>

a promise which will resolve once the session has been initialized

***

### isSessionSupportedAsync()

> **isSessionSupportedAsync**(`sessionMode`): `Promise`\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:311](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L311)

Checks if a session would be supported for the creation options specified

#### Parameters

##### sessionMode

`XRSessionMode`

session mode to check if supported eg. immersive-vr

#### Returns

`Promise`\<`boolean`\>

A Promise that resolves to true if supported and false if not

***

### resetReferenceSpace()

> **resetReferenceSpace**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L318)

Resets the reference space to the one started the session

#### Returns

`void`

***

### runInXRFrame()

> **runInXRFrame**(`callback`, `ignoreIfNotInSession?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:503](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L503)

Run a callback in the xr render loop

#### Parameters

##### callback

() => `void`

the callback to call when in XR Frame

##### ignoreIfNotInSession?

`boolean` = `true`

if no session is currently running, run it first thing on the next session

#### Returns

`void`

***

### runXRRenderLoop()

> **runXRRenderLoop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L325)

Starts rendering to the xr layer

#### Returns

`void`

***

### setReferenceSpaceTypeAsync()

> **setReferenceSpaceTypeAsync**(`referenceSpaceType?`): `Promise`\<`XRReferenceSpace`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L372)

Sets the reference space on the xr session

#### Parameters

##### referenceSpaceType?

`XRReferenceSpaceType` = `"local-floor"`

space to set

#### Returns

`Promise`\<`XRReferenceSpace`\>

a promise that will resolve once the reference space has been set

***

### trySetViewportForView()

> **trySetViewportForView**(`viewport`, `view`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L203)

Attempts to set the framebuffer-size-normalized viewport to be rendered this frame for this view.
In the event of a failure, the supplied viewport is not updated.

#### Parameters

##### viewport

[`Viewport`](Viewport.md)

the viewport to which the view will be rendered

##### view

`XRView`

the view for which to set the viewport

#### Returns

`boolean`

whether the operation was successful

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`trySetViewportForView`](../interfaces/IWebXRRenderTargetTextureProvider.md#trysetviewportforview)

***

### updateRenderState()

> **updateRenderState**(`state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:433](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L433)

Updates the render state of the session

#### Parameters

##### state

`XRRenderStateInit`

state to set

#### Returns

`void`

***

### ~~updateRenderStateAsync()~~

> **updateRenderStateAsync**(`state`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L407)

Updates the render state of the session.
Note that this is deprecated in favor of WebXRSessionManager.updateRenderState().

#### Parameters

##### state

`XRRenderState`

state to set

#### Returns

`Promise`\<`void`\>

a promise that resolves once the render state has been updated

#### Deprecated

Use updateRenderState() instead.

***

### updateTargetFrameRate()

> **updateTargetFrameRate**(`rate`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:494](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L494)

Set the framerate of the session.

#### Parameters

##### rate

`number`

the new framerate. This value needs to be in the supportedFrameRates array

#### Returns

`Promise`\<`void`\>

a promise that resolves once the framerate has been set

***

### IsSessionSupportedAsync()

> `static` **IsSessionSupportedAsync**(`sessionMode`): `Promise`\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRSessionManager.ts:447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRSessionManager.ts#L447)

Returns a promise that resolves with a boolean indicating if the provided session mode is supported by this browser

#### Parameters

##### sessionMode

`XRSessionMode`

defines the session to test

#### Returns

`Promise`\<`boolean`\>

a promise with boolean as final value
