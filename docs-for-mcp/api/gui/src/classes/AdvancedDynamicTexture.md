[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / AdvancedDynamicTexture

# Class: AdvancedDynamicTexture

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L48)

Class used to create texture to support 2D GUI elements

## See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui

## Extends

- [`DynamicTexture`](../../../core/src/classes/DynamicTexture.md)

## Properties

### animations

> **animations**: [`Animation`](../../../core/src/classes/Animation.md)[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:486](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L486)

Define the list of animation attached to the texture.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`animations`](../../../core/src/classes/DynamicTexture.md#animations)

***

### anisotropicFilteringLevel

> **anisotropicFilteringLevel**: `number` = `BaseTexture.DEFAULT_ANISOTROPIC_FILTERING_LEVEL`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:221](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L221)

With compliant hardware and browser (supporting anisotropic filtering)
this defines the level of anisotropic filtering in the texture.
The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`anisotropicFilteringLevel`](../../../core/src/classes/DynamicTexture.md#anisotropicfilteringlevel)

***

### applyYInversionOnUpdate

> **applyYInversionOnUpdate**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L162)

Gets or sets a boolean indicating that the canvas must be reverted on Y when updating the texture

***

### checkPointerEveryFrame

> **checkPointerEveryFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:427](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L427)

If set to true, every scene render will trigger a pointer event for the GUI
if it is linked to a mesh or has controls linked to a mesh. This will allow
you to catch the pointer moving around the GUI due to camera or mesh movements,
but it has a performance cost.

***

### delayLoadState

> **delayLoadState**: `number` = `Constants.DELAYLOADSTATE_NONE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L66)

Define the current state of the loading sequence when in delayed load mode.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`delayLoadState`](../../../core/src/classes/DynamicTexture.md#delayloadstate)

***

### disablePicking

> **disablePicking**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:173](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L173)

A boolean indicating whether controls can be picked/clicked on or not. Defaults to false.

***

### disableTabNavigation

> **disableTabNavigation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L168)

A boolean indicating whether or not the elements can be navigated to using the tab key.
Defaults to false.

***

### displayName

> **displayName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:48](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L48)

Define the display name of the texture, which is used as tree item name of the dedicated node in the inspector

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`displayName`](../../../core/src/classes/DynamicTexture.md#displayname)

***

### homogeneousRotationInUVTransform

> **homogeneousRotationInUVTransform**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L287)

Sets this property to true to avoid deformations when rotating the texture with non-uniform scaling

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`homogeneousRotationInUVTransform`](../../../core/src/classes/DynamicTexture.md#homogeneousrotationinuvtransform)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`IInspectable`](../../../core/src/interfaces/IInspectable.md)[]\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:300](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L300)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`inspectableCustomProperties`](../../../core/src/classes/DynamicTexture.md#inspectablecustomproperties)

***

### invertZ

> **invertZ**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L351)

Is Z inverted in the texture (useful in a cube texture).

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`invertZ`](../../../core/src/classes/DynamicTexture.md#invertz)

***

### isRenderTarget

> **isRenderTarget**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:450](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L450)

Define if the texture is a render target.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`isRenderTarget`](../../../core/src/classes/DynamicTexture.md#isrendertarget)

***

### level

> **level**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L110)

Intensity or strength of the texture.
It is commonly used by materials to fine tune the intensity of the texture

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`level`](../../../core/src/classes/DynamicTexture.md#level)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L54)

Gets or sets an object used to store user defined information.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`metadata`](../../../core/src/classes/DynamicTexture.md#metadata)

***

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L42)

Define the name of the texture.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`name`](../../../core/src/classes/DynamicTexture.md#name)

***

### onBeginLayoutObservable

> **onBeginLayoutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L141)

Observable event triggered before layout is evaluated

***

### onBeginRenderObservable

> **onBeginRenderObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L149)

Observable event triggered before the texture is rendered

***

### onClipboardObservable

> **onClipboardObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`ClipboardInfo`](../../../core/src/classes/ClipboardInfo.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L133)

Observable event triggered each time an clipboard event is received from the rendering canvas

***

### onControlPickedObservable

> **onControlPickedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L137)

Observable event triggered each time a pointer down is intercepted by a control

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L491)

An event triggered when the texture is disposed.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`onDisposeObservable`](../../../core/src/classes/DynamicTexture.md#ondisposeobservable)

***

### onEndLayoutObservable

> **onEndLayoutObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:145](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L145)

Observable event triggered after the layout was evaluated

***

### onEndRenderObservable

> **onEndRenderObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L153)

Observable event triggered after the texture was rendered

***

### onGuiReadyObservable

> **onGuiReadyObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L62)

Observable that fires when the GUI is ready

***

### onLoadObservable

> **onLoadObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Texture`](../../../core/src/classes/Texture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:355](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L355)

Observable triggered once the texture has been loaded.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`onLoadObservable`](../../../core/src/classes/DynamicTexture.md#onloadobservable)

***

### optimizeUVAllocation

> **optimizeUVAllocation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L120)

Gets or sets a boolean indicating that the texture should try to reduce shader code if there is no UV manipulation.
(ie. when texture.getTextureMatrix().isIdentityAs3x2() returns true)

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`optimizeUVAllocation`](../../../core/src/classes/DynamicTexture.md#optimizeuvallocation)

***

### ~~parseContent~~

> **parseContent**: (`serializedObject`, `scaleToSize?`, `urlRewriter?`) => `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1476](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1476)

Recreate the content of the ADT from a JSON object

Recreate the content of the ADT from a JSON object

#### Parameters

##### serializedObject

`any`

define the JSON serialized object to restore from

##### scaleToSize?

`boolean`

defines whether to scale to texture to the saved size

##### urlRewriter?

(`url`) => `string`

defines an url rewriter to update urls before sending them to the controls

#### Returns

`void`

#### Param

define the JSON serialized object to restore from

#### Param

defines whether to scale to texture to the saved size

#### Param

defines an url rewriter to update urls before sending them to the controls

#### Deprecated

Please use parseSerializedObject instead

***

### premulAlpha

> **premulAlpha**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:157](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L157)

Gets or sets a boolean defining if alpha is stored as premultiplied

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L62)

For internal use only. Please do not use.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`reservedDataStore`](../../../core/src/classes/DynamicTexture.md#reserveddatastore)

***

### skipBlockEvents

> **skipBlockEvents**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L419)

If this is set, even when a control is pointer blocker, some events can still be passed through to the scene.
Options from values are PointerEventTypes
POINTERDOWN, POINTERUP, POINTERMOVE, POINTERWHEEL, POINTERPICK, POINTERTAP, POINTERDOUBLETAP

***

### snippetId

> **snippetId**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L59)

Snippet ID if the content was created from the snippet server

***

### sphericalPolynomial

> **sphericalPolynomial**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`SphericalPolynomial`](../../../core/src/classes/SphericalPolynomial.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.ts#L14)

Get the polynomial representation of the texture data.
This is mainly use as a fast way to recover IBL Diffuse irradiance data.

#### See

https://learnopengl.com/PBR/IBL/Diffuse-irradiance

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`sphericalPolynomial`](../../../core/src/classes/DynamicTexture.md#sphericalpolynomial)

***

### uAng

> **uAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L247)

Define an offset on the texture to rotate around the u coordinates of the UVs
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`uAng`](../../../core/src/classes/DynamicTexture.md#uang)

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L36)

Gets or sets the unique id of the texture

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`uniqueId`](../../../core/src/classes/DynamicTexture.md#uniqueid)

***

### uOffset

> **uOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:218](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L218)

Define an offset on the texture to offset the u coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`uOffset`](../../../core/src/classes/DynamicTexture.md#uoffset)

***

### url

> **url**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string`\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L211)

Define the url of the texture.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`url`](../../../core/src/classes/DynamicTexture.md#url)

***

### uRotationCenter

> **uRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L269)

Defines the center of rotation (U)

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`uRotationCenter`](../../../core/src/classes/DynamicTexture.md#urotationcenter)

***

### uScale

> **uScale**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:232](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L232)

Define an offset on the texture to scale the u coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`uScale`](../../../core/src/classes/DynamicTexture.md#uscale)

***

### usePointerTapForClickEvent

> **usePointerTapForClickEvent**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L178)

If set to true, the POINTERTAP event type will be used for "click", instead of POINTERUP

***

### useStandalone

> `readonly` **useStandalone**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L56)

Indicates whether the ADT is used autonomously

***

### vAng

> **vAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L255)

Define an offset on the texture to rotate around the v coordinates of the UVs
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`vAng`](../../../core/src/classes/DynamicTexture.md#vang)

***

### vOffset

> **vOffset**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L225)

Define an offset on the texture to offset the v coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#offsetting

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`vOffset`](../../../core/src/classes/DynamicTexture.md#voffset)

***

### vRotationCenter

> **vRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L275)

Defines the center of rotation (V)

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`vRotationCenter`](../../../core/src/classes/DynamicTexture.md#vrotationcenter)

***

### vScale

> **vScale**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L239)

Define an offset on the texture to scale the v coordinates of the UVs

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials#tiling

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`vScale`](../../../core/src/classes/DynamicTexture.md#vscale)

***

### wAng

> **wAng**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:263](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L263)

Define an offset on the texture to rotate around the w coordinates of the UVs (in case of 3d texture)
The angle is defined in radians.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/moreMaterials

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`wAng`](../../../core/src/classes/DynamicTexture.md#wang)

***

### wrapR

> **wrapR**: `number` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L213)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`wrapR`](../../../core/src/classes/DynamicTexture.md#wrapr)

***

### wRotationCenter

> **wRotationCenter**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:281](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L281)

Defines the center of rotation (W)

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`wRotationCenter`](../../../core/src/classes/DynamicTexture.md#wrotationcenter)

***

### AllowGPUOptimizations

> `static` **AllowGPUOptimizations**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L53)

Indicates if some optimizations can be performed in GUI GPU management (the downside is additional memory/GPU texture memory used)

***

### BILINEAR\_SAMPLINGMODE

> `readonly` `static` **BILINEAR\_SAMPLINGMODE**: `2` = `Constants.TEXTURE_BILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L146)

Bilinear is mag = linear and min = linear and no mip

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`BILINEAR_SAMPLINGMODE`](../../../core/src/classes/DynamicTexture.md#bilinear_samplingmode)

***

### CLAMP\_ADDRESSMODE

> `readonly` `static` **CLAMP\_ADDRESSMODE**: `0` = `Constants.TEXTURE_CLAMP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:196](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L196)

Texture is not repeating outside of 0..1 UVs

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`CLAMP_ADDRESSMODE`](../../../core/src/classes/DynamicTexture.md#clamp_addressmode)

***

### CUBIC\_MODE

> `readonly` `static` **CUBIC\_MODE**: `3` = `Constants.TEXTURE_CUBIC_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L181)

Cubic coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`CUBIC_MODE`](../../../core/src/classes/DynamicTexture.md#cubic_mode)

***

### DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL

> `static` **DEFAULT\_ANISOTROPIC\_FILTERING\_LEVEL**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L30)

Default anisotropic filtering level for the application.
It is set to 4 as a good tradeoff between perf and quality.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`DEFAULT_ANISOTROPIC_FILTERING_LEVEL`](../../../core/src/classes/DynamicTexture.md#default_anisotropic_filtering_level)

***

### EQUIRECTANGULAR\_MODE

> `readonly` `static` **EQUIRECTANGULAR\_MODE**: `7` = `Constants.TEXTURE_EQUIRECTANGULAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L189)

Equirectangular coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`EQUIRECTANGULAR_MODE`](../../../core/src/classes/DynamicTexture.md#equirectangular_mode)

***

### EXPLICIT\_MODE

> `readonly` `static` **EXPLICIT\_MODE**: `0` = `Constants.TEXTURE_EXPLICIT_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L175)

Explicit coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`EXPLICIT_MODE`](../../../core/src/classes/DynamicTexture.md#explicit_mode)

***

### FIXED\_EQUIRECTANGULAR\_MIRRORED\_MODE

> `readonly` `static` **FIXED\_EQUIRECTANGULAR\_MIRRORED\_MODE**: `9` = `Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L193)

Equirectangular Fixed Mirrored coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`FIXED_EQUIRECTANGULAR_MIRRORED_MODE`](../../../core/src/classes/DynamicTexture.md#fixed_equirectangular_mirrored_mode)

***

### FIXED\_EQUIRECTANGULAR\_MODE

> `readonly` `static` **FIXED\_EQUIRECTANGULAR\_MODE**: `8` = `Constants.TEXTURE_FIXED_EQUIRECTANGULAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L191)

Equirectangular Fixed coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`FIXED_EQUIRECTANGULAR_MODE`](../../../core/src/classes/DynamicTexture.md#fixed_equirectangular_mode)

***

### ForceSerializeBuffers

> `static` **ForceSerializeBuffers**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L91)

Gets or sets a general boolean used to indicate that texture buffers must be saved as part of the serialization process.
If no buffer exists, one will be created as base64 string from the internal webgl data.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`ForceSerializeBuffers`](../../../core/src/classes/DynamicTexture.md#forceserializebuffers)

***

### INVCUBIC\_MODE

> `readonly` `static` **INVCUBIC\_MODE**: `6` = `Constants.TEXTURE_INVCUBIC_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L187)

Inverse Cubic coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`INVCUBIC_MODE`](../../../core/src/classes/DynamicTexture.md#invcubic_mode)

***

### LINEAR\_LINEAR

> `readonly` `static` **LINEAR\_LINEAR**: `2` = `Constants.TEXTURE_LINEAR_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:170](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L170)

mag = linear and min = linear and mip = none

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`LINEAR_LINEAR`](../../../core/src/classes/DynamicTexture.md#linear_linear)

***

### LINEAR\_LINEAR\_MIPLINEAR

> `readonly` `static` **LINEAR\_LINEAR\_MIPLINEAR**: `3` = `Constants.TEXTURE_LINEAR_LINEAR_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L153)

Trilinear is mag = linear and min = linear and mip = linear

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`LINEAR_LINEAR_MIPLINEAR`](../../../core/src/classes/DynamicTexture.md#linear_linear_miplinear)

***

### LINEAR\_LINEAR\_MIPNEAREST

> `readonly` `static` **LINEAR\_LINEAR\_MIPNEAREST**: `11` = `Constants.TEXTURE_LINEAR_LINEAR_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:148](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L148)

Bilinear is mag = linear and min = linear and mip = nearest

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`LINEAR_LINEAR_MIPNEAREST`](../../../core/src/classes/DynamicTexture.md#linear_linear_mipnearest)

***

### LINEAR\_NEAREST

> `readonly` `static` **LINEAR\_NEAREST**: `12` = `Constants.TEXTURE_LINEAR_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:172](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L172)

mag = linear and min = nearest and mip = none

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`LINEAR_NEAREST`](../../../core/src/classes/DynamicTexture.md#linear_nearest)

***

### LINEAR\_NEAREST\_MIPLINEAR

> `readonly` `static` **LINEAR\_NEAREST\_MIPLINEAR**: `10` = `Constants.TEXTURE_LINEAR_NEAREST_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L168)

mag = linear and min = nearest and mip = linear

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`LINEAR_NEAREST_MIPLINEAR`](../../../core/src/classes/DynamicTexture.md#linear_nearest_miplinear)

***

### LINEAR\_NEAREST\_MIPNEAREST

> `readonly` `static` **LINEAR\_NEAREST\_MIPNEAREST**: `9` = `Constants.TEXTURE_LINEAR_NEAREST_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L166)

mag = linear and min = nearest and mip = nearest

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`LINEAR_NEAREST_MIPNEAREST`](../../../core/src/classes/DynamicTexture.md#linear_nearest_mipnearest)

***

### MIRROR\_ADDRESSMODE

> `readonly` `static` **MIRROR\_ADDRESSMODE**: `2` = `Constants.TEXTURE_MIRROR_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L200)

Texture is repeating and mirrored

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`MIRROR_ADDRESSMODE`](../../../core/src/classes/DynamicTexture.md#mirror_addressmode)

***

### NEAREST\_LINEAR

> `readonly` `static` **NEAREST\_LINEAR**: `7` = `Constants.TEXTURE_NEAREST_LINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L162)

mag = nearest and min = linear and mip = none

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`NEAREST_LINEAR`](../../../core/src/classes/DynamicTexture.md#nearest_linear)

***

### NEAREST\_LINEAR\_MIPLINEAR

> `readonly` `static` **NEAREST\_LINEAR\_MIPLINEAR**: `6` = `Constants.TEXTURE_NEAREST_LINEAR_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L160)

mag = nearest and min = linear and mip = linear

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`NEAREST_LINEAR_MIPLINEAR`](../../../core/src/classes/DynamicTexture.md#nearest_linear_miplinear)

***

### NEAREST\_LINEAR\_MIPNEAREST

> `readonly` `static` **NEAREST\_LINEAR\_MIPNEAREST**: `5` = `Constants.TEXTURE_NEAREST_LINEAR_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:158](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L158)

mag = nearest and min = linear and mip = nearest

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`NEAREST_LINEAR_MIPNEAREST`](../../../core/src/classes/DynamicTexture.md#nearest_linear_mipnearest)

***

### NEAREST\_NEAREST

> `readonly` `static` **NEAREST\_NEAREST**: `1` = `Constants.TEXTURE_NEAREST_NEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:164](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L164)

mag = nearest and min = nearest and mip = none

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`NEAREST_NEAREST`](../../../core/src/classes/DynamicTexture.md#nearest_nearest)

***

### NEAREST\_NEAREST\_MIPLINEAR

> `readonly` `static` **NEAREST\_NEAREST\_MIPLINEAR**: `8` = `Constants.TEXTURE_NEAREST_NEAREST_MIPLINEAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:143](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L143)

nearest is mag = nearest and min = nearest and mip = linear

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`NEAREST_NEAREST_MIPLINEAR`](../../../core/src/classes/DynamicTexture.md#nearest_nearest_miplinear)

***

### NEAREST\_NEAREST\_MIPNEAREST

> `readonly` `static` **NEAREST\_NEAREST\_MIPNEAREST**: `4` = `Constants.TEXTURE_NEAREST_NEAREST_MIPNEAREST`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L156)

mag = nearest and min = nearest and mip = nearest

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`NEAREST_NEAREST_MIPNEAREST`](../../../core/src/classes/DynamicTexture.md#nearest_nearest_mipnearest)

***

### NEAREST\_SAMPLINGMODE

> `readonly` `static` **NEAREST\_SAMPLINGMODE**: `1` = `Constants.TEXTURE_NEAREST_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L141)

nearest is mag = nearest and min = nearest and no mip

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`NEAREST_SAMPLINGMODE`](../../../core/src/classes/DynamicTexture.md#nearest_samplingmode)

***

### OnTextureLoadErrorObservable

> `static` **OnTextureLoadErrorObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L96)

This observable will notify when any texture had a loading error

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`OnTextureLoadErrorObservable`](../../../core/src/classes/DynamicTexture.md#ontextureloaderrorobservable)

***

### PLANAR\_MODE

> `readonly` `static` **PLANAR\_MODE**: `2` = `Constants.TEXTURE_PLANAR_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L179)

Planar coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`PLANAR_MODE`](../../../core/src/classes/DynamicTexture.md#planar_mode)

***

### PROJECTION\_MODE

> `readonly` `static` **PROJECTION\_MODE**: `4` = `Constants.TEXTURE_PROJECTION_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L183)

Projection coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`PROJECTION_MODE`](../../../core/src/classes/DynamicTexture.md#projection_mode)

***

### SerializeBuffers

> `static` **SerializeBuffers**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L85)

Gets or sets a general boolean used to indicate that textures containing direct data (buffers) must be saved as part of the serialization process

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`SerializeBuffers`](../../../core/src/classes/DynamicTexture.md#serializebuffers)

***

### SKYBOX\_MODE

> `readonly` `static` **SKYBOX\_MODE**: `5` = `Constants.TEXTURE_SKYBOX_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L185)

Inverse Cubic coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`SKYBOX_MODE`](../../../core/src/classes/DynamicTexture.md#skybox_mode)

***

### SnippetUrl

> `static` **SnippetUrl**: `string` = `Constants.SnippetUrl`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L50)

Define the url to load snippets

***

### SPHERICAL\_MODE

> `readonly` `static` **SPHERICAL\_MODE**: `1` = `Constants.TEXTURE_SPHERICAL_MODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L177)

Spherical coordinates mode

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`SPHERICAL_MODE`](../../../core/src/classes/DynamicTexture.md#spherical_mode)

***

### TRILINEAR\_SAMPLINGMODE

> `readonly` `static` **TRILINEAR\_SAMPLINGMODE**: `3` = `Constants.TEXTURE_TRILINEAR_SAMPLINGMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L151)

Trilinear is mag = linear and min = linear and mip = linear

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`TRILINEAR_SAMPLINGMODE`](../../../core/src/classes/DynamicTexture.md#trilinear_samplingmode)

***

### UseSerializedUrlIfAny

> `static` **UseSerializedUrlIfAny**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L205)

Gets or sets a boolean which defines if the texture url must be build from the serialized URL instead of just using the name and loading them side by side with the scene file

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`UseSerializedUrlIfAny`](../../../core/src/classes/DynamicTexture.md#useserializedurlifany)

***

### WRAP\_ADDRESSMODE

> `readonly` `static` **WRAP\_ADDRESSMODE**: `1` = `Constants.TEXTURE_WRAP_ADDRESSMODE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L198)

Texture is repeating outside of 0..1 UVs

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`WRAP_ADDRESSMODE`](../../../core/src/classes/DynamicTexture.md#wrap_addressmode)

## Accessors

### adjustToEngineHardwareScalingLevel

#### Get Signature

> **get** **adjustToEngineHardwareScalingLevel**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L185)

If set to true, the renderScale will be adjusted automatically to the engine's hardware scaling
If this is set to true, manually setting the renderScale will be ignored
This is useful when the engine's hardware scaling is set to a value other than 1

##### Returns

`boolean`

#### Set Signature

> **set** **adjustToEngineHardwareScalingLevel**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L189)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### background

#### Get Signature

> **get** **background**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:211](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L211)

Gets or sets the background color

##### Returns

`string`

#### Set Signature

> **set** **background**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:214](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L214)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### canRescale

#### Get Signature

> **get** **canRescale**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L137)

Gets the current state of canRescale

##### Returns

`boolean`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`canRescale`](../../../core/src/classes/DynamicTexture.md#canrescale)

***

### clipboardData

#### Get Signature

> **get** **clipboardData**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L407)

Gets or set information about clipboardData

##### Returns

`string`

#### Set Signature

> **set** **clipboardData**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:410](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L410)

##### Parameters

###### value

`string`

##### Returns

`void`

***

### coordinatesIndex

#### Get Signature

> **get** **coordinatesIndex**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L137)

##### Returns

`number`

#### Set Signature

> **set** **coordinatesIndex**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L126)

Define the UV channel to use starting from 0 and defaulting to 0.
This is part of the texture as textures usually maps to one uv set.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`coordinatesIndex`](../../../core/src/classes/DynamicTexture.md#coordinatesindex)

***

### coordinatesMode

#### Get Signature

> **get** **coordinatesMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L171)

How a texture is mapped.
Unused in thin texture mode.

##### Returns

`number`

#### Set Signature

> **set** **coordinatesMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:160](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L160)

How a texture is mapped.

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 0     | EXPLICIT_MODE                       |             |
| 1     | SPHERICAL_MODE                      |             |
| 2     | PLANAR_MODE                         |             |
| 3     | CUBIC_MODE                          |             |
| 4     | PROJECTION_MODE                     |             |
| 5     | SKYBOX_MODE                         |             |
| 6     | INVCUBIC_MODE                       |             |
| 7     | EQUIRECTANGULAR_MODE                |             |
| 8     | FIXED_EQUIRECTANGULAR_MODE          |             |
| 9     | FIXED_EQUIRECTANGULAR_MIRRORED_MODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`coordinatesMode`](../../../core/src/classes/DynamicTexture.md#coordinatesmode)

***

### errorObject

#### Get Signature

> **get** **errorObject**(): \{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:537](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L537)

If a loading error occurred this object will be populated with information about the error.

##### Returns

\{ `exception?`: `any`; `message?`: `string`; \} \| `undefined`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`errorObject`](../../../core/src/classes/DynamicTexture.md#errorobject)

***

### focusedControl

#### Get Signature

> **get** **focusedControl**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:371](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L371)

Gets or sets the current focused control

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

#### Set Signature

> **set** **focusedControl**(`control`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:374](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L374)

##### Parameters

###### control

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

##### Returns

`void`

***

### gammaSpace

#### Get Signature

> **get** **gammaSpace**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L296)

Define if the texture contains data in gamma space (most of the png/jpg aside bump).
HDR texture are usually stored in linear space.
This only impacts the PBR and Background materials

##### Returns

`boolean`

#### Set Signature

> **set** **gammaSpace**(`gamma`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:308](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L308)

##### Parameters

###### gamma

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`gammaSpace`](../../../core/src/classes/DynamicTexture.md#gammaspace)

***

### getAlphaFromRGB

#### Get Signature

> **get** **getAlphaFromRGB**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L101)

##### Returns

`boolean`

#### Set Signature

> **set** **getAlphaFromRGB**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L90)

Defines if the alpha value should be determined via the rgb values.
If true the luminance of the pixel might be used to find the corresponding alpha value.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getAlphaFromRGB`](../../../core/src/classes/DynamicTexture.md#getalphafromrgb)

***

### hasAlpha

#### Get Signature

> **get** **hasAlpha**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L80)

##### Returns

`boolean`

#### Set Signature

> **set** **hasAlpha**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:69](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L69)

Define if the texture is having a usable alpha value (can be use for transparency or glossiness for instance).

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`hasAlpha`](../../../core/src/classes/DynamicTexture.md#hasalpha)

***

### idealHeight

#### Get Signature

> **get** **idealHeight**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:242](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L242)

Gets or sets the ideal height used to design controls.
The GUI will then rescale everything accordingly

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#adaptive-scaling

##### Returns

`number`

#### Set Signature

> **set** **idealHeight**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L245)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### idealRatio

#### Get Signature

> **get** **idealRatio**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L287)

Gets the ratio used when in "ideal mode"

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#adaptive-scaling

##### Returns

`number`

***

### idealWidth

#### Get Signature

> **get** **idealWidth**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L226)

Gets or sets the ideal width used to design controls.
The GUI will then rescale everything accordingly

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#adaptive-scaling

##### Returns

`number`

#### Set Signature

> **set** **idealWidth**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L229)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### invertY

#### Get Signature

> **get** **invertY**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:373](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L373)

Gets a boolean indicating if the texture needs to be inverted on the y axis during loading

##### Returns

`boolean`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`invertY`](../../../core/src/classes/DynamicTexture.md#inverty)

***

### irradianceTexture

#### Get Signature

> **get** **irradianceTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L425)

In case a better definition than spherical harmonics is required for the diffuse part of the environment.
You can set the irradiance texture to rely on a texture instead of the spherical approach.
This texture need to have the same characteristics than its parent (Cube vs 2d, coordinates mode, Gamma/Linear, RGBD).

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

#### Set Signature

> **set** **irradianceTexture**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:432](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L432)

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`irradianceTexture`](../../../core/src/classes/DynamicTexture.md#irradiancetexture)

***

### is2DArray

#### Get Signature

> **get** **is2DArray**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:271](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L271)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is2DArray**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L280)

Define if the texture is a 2d array texture (webgl 2) or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`is2DArray`](../../../core/src/classes/DynamicTexture.md#is2darray)

***

### is3D

#### Get Signature

> **get** **is3D**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:250](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L250)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **is3D**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L259)

Define if the texture is a 3d texture (webgl 2) or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`is3D`](../../../core/src/classes/DynamicTexture.md#is3d)

***

### isBlocking

#### Get Signature

> **get** **isBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:366](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L366)

Define if the texture is preventing a material to render or not.
If not and the texture is not ready, the engine will use a default black texture instead.

##### Returns

`boolean`

#### Set Signature

> **set** **isBlocking**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:362](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L362)

Is the texture preventing material to render while loading.
If false, a default texture will be used instead of the loading one during the preparation step.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`isBlocking`](../../../core/src/classes/DynamicTexture.md#isblocking)

***

### isCube

#### Get Signature

> **get** **isCube**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:229](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L229)

Define if the texture is a cube texture or if false a 2d texture.

##### Returns

`boolean`

#### Set Signature

> **set** **isCube**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L238)

Define if the texture is a cube texture or if false a 2d texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`isCube`](../../../core/src/classes/DynamicTexture.md#iscube)

***

### isForeground

#### Get Signature

> **get** **isForeground**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L389)

Gets or sets a boolean indicating if the texture must be rendered in background or foreground when in fullscreen mode

##### Returns

`boolean`

#### Set Signature

> **set** **isForeground**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:395](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L395)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isRGBD

#### Get Signature

> **get** **isRGBD**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:330](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L330)

Gets or sets whether or not the texture contains RGBD data.

##### Returns

`boolean`

#### Set Signature

> **set** **isRGBD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L333)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`isRGBD`](../../../core/src/classes/DynamicTexture.md#isrgbd)

***

### layer

#### Get Signature

> **get** **layer**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Layer`](../../../core/src/classes/Layer.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:319](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L319)

Gets the underlying layer used to render the texture when in fullscreen mode

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Layer`](../../../core/src/classes/Layer.md)\>

***

### linearSpecularLOD

#### Get Signature

> **get** **linearSpecularLOD**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:406](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L406)

With prefiltered texture, defined if the specular generation is based on a linear ramp.
By default we are using a log2 of the linear roughness helping to keep a better resolution for
average roughness values.

##### Returns

`boolean`

#### Set Signature

> **set** **linearSpecularLOD**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:413](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L413)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`linearSpecularLOD`](../../../core/src/classes/DynamicTexture.md#linearspecularlod)

***

### loadingError

#### Get Signature

> **get** **loadingError**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:530](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L530)

Was there any loading error?

##### Returns

`boolean`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`loadingError`](../../../core/src/classes/DynamicTexture.md#loadingerror)

***

### lodGenerationOffset

#### Get Signature

> **get** **lodGenerationOffset**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:370](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L370)

With prefiltered texture, defined the offset used during the prefiltering steps.

##### Returns

`number`

#### Set Signature

> **set** **lodGenerationOffset**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:377](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L377)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`lodGenerationOffset`](../../../core/src/classes/DynamicTexture.md#lodgenerationoffset)

***

### lodGenerationScale

#### Get Signature

> **get** **lodGenerationScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L387)

With prefiltered texture, defined the scale used during the prefiltering steps.

##### Returns

`number`

#### Set Signature

> **set** **lodGenerationScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:394](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L394)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`lodGenerationScale`](../../../core/src/classes/DynamicTexture.md#lodgenerationscale)

***

### mimeType

#### Get Signature

> **get** **mimeType**(): `string` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:348](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L348)

Returns the texture mime type if it was defined by a loader (undefined else)

##### Returns

`string` \| `undefined`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`mimeType`](../../../core/src/classes/DynamicTexture.md#mimetype)

***

### noMipmap

#### Get Signature

> **get** **noMipmap**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L292)

Are mip maps generated for this texture or not.

##### Returns

`boolean`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`noMipmap`](../../../core/src/classes/DynamicTexture.md#nomipmap)

***

### numLayoutCalls

#### Get Signature

> **get** **numLayoutCalls**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L114)

Gets the number of layout calls made the last time the ADT has been rendered

##### Returns

`number`

***

### numRenderCalls

#### Get Signature

> **get** **numRenderCalls**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L121)

Gets the number of render calls made the last time the ADT has been rendered

##### Returns

`number`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L498)

Callback triggered when the texture has been disposed.
Kept for back compatibility, you can use the onDisposeObservable instead.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`onDispose`](../../../core/src/classes/DynamicTexture.md#ondispose)

***

### renderAtIdealSize

#### Get Signature

> **get** **renderAtIdealSize**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L272)

Gets or sets a boolean indicating if adaptive scaling must be used

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#adaptive-scaling

##### Returns

`boolean`

#### Set Signature

> **set** **renderAtIdealSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:275](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L275)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### renderScale

#### Get Signature

> **get** **renderScale**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L200)

Gets or sets a number used to scale rendering size (2 means that the texture will be twice bigger).
Useful when you want more antialiasing

##### Returns

`number`

#### Set Signature

> **set** **renderScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L203)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rootContainer

#### Get Signature

> **get** **rootContainer**(): [`Container`](Container.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L325)

Gets the root container control

##### Returns

[`Container`](Container.md)

***

### samplingMode

#### Get Signature

> **get** **samplingMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:254](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L254)

Get the current sampling mode associated with the texture.

##### Returns

`number`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`samplingMode`](../../../core/src/classes/DynamicTexture.md#samplingmode)

***

### textureFormat

#### Get Signature

> **get** **textureFormat**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:695](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L695)

Get the texture underlying format (RGB, RGBA...)

##### Returns

`number`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`textureFormat`](../../../core/src/classes/DynamicTexture.md#textureformat)

***

### textureType

#### Get Signature

> **get** **textureType**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:684](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L684)

Get the texture underlying type (INT, FLOAT...)

##### Returns

`number`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`textureType`](../../../core/src/classes/DynamicTexture.md#texturetype)

***

### uid

#### Get Signature

> **get** **uid**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:455](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L455)

Define the unique id of the texture in the scene.

##### Returns

`string`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`uid`](../../../core/src/classes/DynamicTexture.md#uid)

***

### useInvalidateRectOptimization

#### Get Signature

> **get** **useInvalidateRectOptimization**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:553](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L553)

Gets or sets a boolean indicating if the InvalidateRect optimization should be turned on

##### Returns

`boolean`

#### Set Signature

> **set** **useInvalidateRectOptimization**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:557](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L557)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useSmallestIdeal

#### Get Signature

> **get** **useSmallestIdeal**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:257](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L257)

Gets or sets a boolean indicating if the smallest ideal value must be used if idealWidth and idealHeight are both set

##### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#adaptive-scaling

##### Returns

`boolean`

#### Set Signature

> **set** **useSmallestIdeal**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:260](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L260)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### wrapU

#### Get Signature

> **get** **wrapU**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L183)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapU**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L186)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`wrapU`](../../../core/src/classes/DynamicTexture.md#wrapu)

***

### wrapV

#### Get Signature

> **get** **wrapV**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:198](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L198)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Returns

`number`

#### Set Signature

> **set** **wrapV**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:201](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L201)

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`wrapV`](../../../core/src/classes/DynamicTexture.md#wrapv)

## Methods

### addControl()

> **addControl**(`control`): `AdvancedDynamicTexture`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:605](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L605)

Adds a new control to the root container

#### Parameters

##### control

[`Control`](Control.md)

defines the control to add

#### Returns

`AdvancedDynamicTexture`

the current texture

***

### attach()

> **attach**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1066](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1066)

Attach to all scene events required to support pointer events

#### Returns

`void`

***

### attachToMesh()

> **attachToMesh**(`mesh`, `supportPointerMove?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1247)

Connect the texture to a hosting mesh to enable interactions

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh to attach to

##### supportPointerMove?

`boolean` = `true`

defines a boolean indicating if pointer move events must be catched as well

#### Returns

`void`

***

### clear()

> **clear**(`clearColor?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:189](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L189)

Clears the texture

#### Parameters

##### clearColor?

`string`

Defines the clear color to use

#### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`clear`](../../../core/src/classes/DynamicTexture.md#clear)

***

### clone()

> **clone**(`newName?`, `attachToMesh?`): `AdvancedDynamicTexture`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1446](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1446)

Clones the ADT. If no mesh is defined, the GUI will be considered as a fullscreen GUI

#### Parameters

##### newName?

`string`

defines the name of the new ADT

##### attachToMesh?

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines if the new ADT should be attached to a mesh

#### Returns

`AdvancedDynamicTexture`

the clone of the ADT

#### Overrides

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`clone`](../../../core/src/classes/DynamicTexture.md#clone)

***

### createStyle()

> **createStyle**(): [`Style`](Style.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:597](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L597)

Helper function used to create a new style

#### Returns

[`Style`](Style.md)

a new style

#### See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui#styles

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:664](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L664)

Release all resources

#### Returns

`void`

#### Overrides

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`dispose`](../../../core/src/classes/DynamicTexture.md#dispose)

***

### drawText()

> **drawText**(`text`, `x`, `y`, `font`, `color`, `fillColor`, `invertY?`, `update?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L231)

Draws text onto the texture

#### Parameters

##### text

`string`

defines the text to be drawn

##### x

`number` \| `null` \| `undefined`

defines the placement of the text from the left

##### y

`number` \| `null` \| `undefined`

defines the placement of the text from the top when invertY is true and from the bottom when false

##### font

`string`

defines the font to be used with font-style, font-size, font-name

##### color

`string` \| `null`

defines the color used for the text

##### fillColor

`string` \| `null`

defines the color for the canvas, use null to not overwrite canvas (this blends with the background to replace, use the clear function)

##### invertY?

`boolean`

defines the direction for the Y axis (default is true - y increases downwards)

##### update?

`boolean` = `true`

defines whether texture is immediately update (default is true)

#### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`drawText`](../../../core/src/classes/DynamicTexture.md#drawtext)

***

### executeOnAllControls()

> **executeOnAllControls**(`func`, `container?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:534](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L534)

Function used to execute a function on all controls

#### Parameters

##### func

(`control`) => `void`

defines the function to execute

##### container?

[`Container`](Container.md)

defines the container where controls belong. If null the root container will be used

#### Returns

`void`

***

### forceSphericalPolynomialsRecompute()

> **forceSphericalPolynomialsRecompute**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.polynomial.ts#L20)

Force recomputation of spherical polynomials.
Can be useful if you generate a cubemap multiple times (from a probe for eg) and you need the proper polynomials each time

#### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`forceSphericalPolynomialsRecompute`](../../../core/src/classes/DynamicTexture.md#forcesphericalpolynomialsrecompute)

***

### getBaseSize()

> **getBaseSize**(): [`ISize`](../../../core/src/interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:230](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L230)

Get the base size of the texture.
It can be different from the size if the texture has been resized for POT for instance

#### Returns

[`ISize`](../../../core/src/interfaces/ISize.md)

the base size

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getBaseSize`](../../../core/src/classes/DynamicTexture.md#getbasesize)

***

### getChildren()

> **getChildren**(): [`Container`](Container.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:333](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L333)

Returns an array containing the root container.
This is mostly used to let the Inspector introspects the ADT

#### Returns

[`Container`](Container.md)[]

an array containing the rootContainer

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:526](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L526)

Get the current class name of the texture useful for serialization or dynamic coding.

#### Returns

`string`

"AdvancedDynamicTexture"

#### Overrides

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getClassName`](../../../core/src/classes/DynamicTexture.md#getclassname)

***

### getContext()

> **getContext**(): [`ICanvasRenderingContext`](../../../core/src/interfaces/ICanvasRenderingContext.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L181)

Gets the context of the canvas used by the texture

#### Returns

[`ICanvasRenderingContext`](../../../core/src/interfaces/ICanvasRenderingContext.md)

the canvas context of the dynamic texture

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getContext`](../../../core/src/classes/DynamicTexture.md#getcontext)

***

### getControlByName()

> **getControlByName**(`name`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L360)

Will return the first control with the given name

#### Parameters

##### name

`string`

defines the name to search for

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

the first control found or null

***

### getControlsByType()

> **getControlsByType**(`typeName`): [`Control`](Control.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:351](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L351)

Will return all controls with the given type name

#### Parameters

##### typeName

`string`

defines the type name to search for

#### Returns

[`Control`](Control.md)[]

an array of all controls found

***

### getDescendants()

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Control`](Control.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:342](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L342)

Will return all controls that are inside this texture

#### Parameters

##### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

##### predicate?

(`control`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Returns

[`Control`](Control.md)[]

all child controls

***

### getInternalTexture()

> **getInternalTexture**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`InternalTexture`](../../../core/src/classes/InternalTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L199)

Get the underlying lower level texture from Babylon.

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`InternalTexture`](../../../core/src/classes/InternalTexture.md)\>

the internal texture

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getInternalTexture`](../../../core/src/classes/DynamicTexture.md#getinternaltexture)

***

### getProjectedPosition()

> **getProjectedPosition**(`position`, `worldMatrix`): [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:791](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L791)

Get screen coordinates for a vector3

#### Parameters

##### position

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the position to project

##### worldMatrix

[`Matrix`](../../../core/src/classes/Matrix.md)

defines the world matrix to use

#### Returns

[`Vector2`](../../../core/src/classes/Vector2.md)

the projected position

***

### getProjectedPositionWithZ()

> **getProjectedPositionWithZ**(`position`, `worldMatrix`): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:802](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L802)

Get screen coordinates for a vector3

#### Parameters

##### position

[`Vector3`](../../../core/src/classes/Vector3.md)

defines the position to project

##### worldMatrix

[`Matrix`](../../../core/src/classes/Matrix.md)

defines the world matrix to use

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the projected position with Z

***

### getReflectionTextureMatrix()

> **getReflectionTextureMatrix**(): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:794](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L794)

Get the current matrix used to apply reflection. This is useful to rotate an environment texture for instance.

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

The reflection texture transform

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getReflectionTextureMatrix`](../../../core/src/classes/DynamicTexture.md#getreflectiontexturematrix)

***

### getRefractionTextureMatrix()

> **getRefractionTextureMatrix**(): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:612](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L612)

Gets a suitable rotate/transform matrix when the texture is used for refraction.
There's a separate function from getReflectionTextureMatrix because refraction requires a special configuration of the matrix in right-handed mode.

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

The refraction matrix

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getRefractionTextureMatrix`](../../../core/src/classes/DynamicTexture.md#getrefractiontexturematrix)

***

### getScene()

> **getScene**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L582)

Get the scene the texture belongs to.

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\>

the scene or null if undefined

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getScene`](../../../core/src/classes/DynamicTexture.md#getscene)

***

### getSize()

> **getSize**(): [`ISize`](../../../core/src/interfaces/ISize.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:207](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L207)

Get the size of the texture.

#### Returns

[`ISize`](../../../core/src/interfaces/ISize.md)

the texture size.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getSize`](../../../core/src/classes/DynamicTexture.md#getsize)

***

### getTextureMatrix()

> **getTextureMatrix**(`uBase?`): [`Matrix`](../../../core/src/classes/Matrix.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:689](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L689)

Get the current texture matrix which includes the requested offsetting, tiling and rotation components.

#### Parameters

##### uBase?

`number` = `1`

The horizontal base offset multiplier (1 by default)

#### Returns

[`Matrix`](../../../core/src/classes/Matrix.md)

the transform matrix of the texture.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`getTextureMatrix`](../../../core/src/classes/DynamicTexture.md#gettexturematrix)

***

### guiIsReady()

> **guiIsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1739](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1739)

#### Returns

`boolean`

true if all the GUI components are ready to render

***

### invalidateRect()

> **invalidateRect**(`invalidMinX`, `invalidMinY`, `invalidMaxX`, `invalidMaxY`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:570](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L570)

Invalidates a rectangle area on the gui texture

#### Parameters

##### invalidMinX

`number`

left most position of the rectangle to invalidate in the texture

##### invalidMinY

`number`

top most position of the rectangle to invalidate in the texture

##### invalidMaxX

`number`

right most position of the rectangle to invalidate in the texture

##### invalidMaxY

`number`

bottom most position of the rectangle to invalidate in the texture

#### Returns

`void`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L177)

Get if the texture is ready to be used (downloaded, converted, mip mapped...).

#### Returns

`boolean`

true if fully ready

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`isReady`](../../../core/src/classes/DynamicTexture.md#isready)

***

### isReadyOrNotBlocking()

> **isReadyOrNotBlocking**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:620](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L620)

Get if the texture is ready to be consumed (either it is ready or it is not blocking)

#### Returns

`boolean`

true if ready, not blocking or if there was an error loading the texture

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`isReadyOrNotBlocking`](../../../core/src/classes/DynamicTexture.md#isreadyornotblocking)

***

### markAsDirty()

> **markAsDirty**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:589](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L589)

Marks the texture as dirty forcing a complete update

#### Returns

`void`

***

### moveFocusToControl()

> **moveFocusToControl**(`control`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1350)

Move the focus to a specific control

#### Parameters

##### control

[`Control`](Control.md)

defines the control which will receive the focus

#### Returns

`void`

***

### moveToNonOverlappedPosition()

> **moveToNonOverlappedPosition**(`overlapGroup?`, `deltaStep?`, `repelFactor?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:625](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L625)

Moves overlapped controls towards a position where it is not overlapping anymore.
Please note that this method alters linkOffsetXInPixels and linkOffsetYInPixels.

#### Parameters

##### overlapGroup?

`number` \| [`Control`](Control.md)[]

the overlap group which will be processed or undefined to process all overlap groups

##### deltaStep?

`number` = `1`

the step size (speed) to reach the target non overlapping position (default 0.1)

##### repelFactor?

`number` = `1`

how much is the control repelled by other controls

#### Returns

`void`

***

### parseFromSnippetAsync()

> **parseFromSnippetAsync**(`snippetId`, `scaleToSize?`, `urlRewriter?`): `Promise`\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1509](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1509)

Recreate the content of the ADT from a snippet saved by the GUI editor

#### Parameters

##### snippetId

`string`

defines the snippet to load

##### scaleToSize?

`boolean`

defines whether to scale to texture to the saved size

##### urlRewriter?

(`url`) => `string`

defines an url rewriter to update urls before sending them to the controls

#### Returns

`Promise`\<`AdvancedDynamicTexture`\>

a promise that will resolve on success

***

### parseFromURLAsync()

> **parseFromURLAsync**(`url`, `scaleToSize?`, `urlRewriter?`): `Promise`\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1540)

Recreate the content of the ADT from a url json

#### Parameters

##### url

`string`

defines the url to load

##### scaleToSize?

`boolean`

defines whether to scale to texture to the saved size

##### urlRewriter?

(`url`) => `string`

defines an url rewriter to update urls before sending them to the controls

#### Returns

`Promise`\<`AdvancedDynamicTexture`\>

a promise that will resolve on success

***

### parseSerializedObject()

> **parseSerializedObject**(`serializedObject`, `scaleToSize?`, `urlRewriter?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1426](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1426)

Recreate the content of the ADT from a JSON object

#### Parameters

##### serializedObject

`any`

define the JSON serialized object to restore from

##### scaleToSize?

`boolean`

defines whether to scale to texture to the saved size

##### urlRewriter?

(`url`) => `string`

defines an url rewriter to update urls before sending them to the controls

#### Returns

`void`

***

### pick()

> **pick**(`x`, `y`, `pi?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1004](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1004)

This function will run a pointer event on this ADT and will trigger any pointer events on any controls
This will work on a fullscreen ADT only. For mesh based ADT, simulate pointer events using the scene directly.

#### Parameters

##### x

`number`

pointer X on the canvas for the picking

##### y

`number`

pointer Y on the canvas for the picking

##### pi?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`PointerInfoPre`](../../../core/src/classes/PointerInfoPre.md)\> = `null`

optional pointer information

#### Returns

`void`

***

### readPixels()

> **readPixels**(`faceIndex?`, `level?`, `buffer?`, `flushRenderer?`, `noDataConversion?`, `x?`, `y?`, `width?`, `height?`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:732](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L732)

Reads the pixels stored in the webgl texture and returns them as an ArrayBuffer.
This will returns an RGBA array buffer containing either in values (0-255) or
float values (0-1) depending of the underlying buffer type.
Note that you can use GetTextureDataAsync instead, which will also support reading from a compressed texture (by rendering it to an intermediate RGBA texture and retrieving the bytes from it).

#### Parameters

##### faceIndex?

`number` = `0`

defines the face of the texture to read (in case of cube texture)

##### level?

`number` = `0`

defines the LOD level of the texture to read (in case of Mip Maps)

##### buffer?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\> = `null`

defines a user defined buffer to fill with data (can be null)

##### flushRenderer?

`boolean` = `true`

true to flush the renderer from the pending commands before reading the pixels

##### noDataConversion?

`boolean` = `false`

false to convert the data to Uint8Array (if texture type is UNSIGNED_BYTE) or to Float32Array (if texture type is anything but UNSIGNED_BYTE). If true, the type of the generated buffer (if buffer==null) will depend on the type of the texture

##### x?

`number` = `0`

defines the region x coordinates to start reading from (default to 0)

##### y?

`number` = `0`

defines the region y coordinates to start reading from (default to 0)

##### width?

`number` = `Number.MAX_VALUE`

defines the region width to read from (default to the texture size at level)

##### height?

`number` = `Number.MAX_VALUE`

defines the region width to read from (default to the texture size at level)

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>\>

The Array buffer promise containing the pixels data.

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`readPixels`](../../../core/src/classes/DynamicTexture.md#readpixels)

***

### registerClipboardEvents()

> **registerClipboardEvents**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1175](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1175)

Register the clipboard Events onto the canvas

#### Returns

`void`

***

### releaseInternalTexture()

> **releaseInternalTexture**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:296](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L296)

Release and destroy the underlying lower level texture aka internalTexture.

#### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`releaseInternalTexture`](../../../core/src/classes/DynamicTexture.md#releaseinternaltexture)

***

### removeControl()

> **removeControl**(`control`): `AdvancedDynamicTexture`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:614](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L614)

Removes a control from the root container

#### Parameters

##### control

[`Control`](Control.md)

defines the control to remove

#### Returns

`AdvancedDynamicTexture`

the current texture

***

### scale()

> **scale**(`ratio`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1713](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1713)

Scales the texture

#### Parameters

##### ratio

`number`

the scale factor to apply to both width and height

#### Returns

`void`

#### Overrides

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`scale`](../../../core/src/classes/DynamicTexture.md#scale)

***

### scaleTo()

> **scaleTo**(`width`, `height`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1723](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1723)

Resizes the texture

#### Parameters

##### width

`number`

the new width

##### height

`number`

the new height

#### Returns

`void`

#### Overrides

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`scaleTo`](../../../core/src/classes/DynamicTexture.md#scaleto)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:307](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L307)

Serializes the dynamic texture.  The scene should be ready before the dynamic texture is serialized

#### Returns

`any`

a serialized dynamic texture object

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`serialize`](../../../core/src/classes/DynamicTexture.md#serialize)

***

### serializeContent()

> **serializeContent**(): `any`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1407)

Serializes the entire GUI system

#### Returns

`any`

an object with the JSON serialized data

***

### toString()

> **toString**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:471](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L471)

Return a string representation of the texture.

#### Returns

`string`

the texture as a string

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`toString`](../../../core/src/classes/DynamicTexture.md#tostring)

***

### unRegisterClipboardEvents()

> **unRegisterClipboardEvents**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1183](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1183)

Unregister the clipboard Events from the canvas

#### Returns

`void`

***

### update()

> **update**(`invertY?`, `premulAlpha?`, `allowGPUOptimization?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/dynamicTexture.ts:203](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/dynamicTexture.ts#L203)

Updates the texture

#### Parameters

##### invertY?

`boolean`

defines the direction for the Y axis (default is true - y increases downwards)

##### premulAlpha?

`boolean` = `false`

defines if alpha is stored as premultiplied (default is false)

##### allowGPUOptimization?

`boolean` = `false`

true to allow some specific GPU optimizations (subject to engine feature "allowGPUOptimizationsForGUI" being true)

#### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`update`](../../../core/src/classes/DynamicTexture.md#update)

***

### updateSamplingMode()

> **updateSamplingMode**(`samplingMode`, `generateMipMaps?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/thinTexture.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/thinTexture.ts#L287)

Update the sampling mode of the texture.
Default is Trilinear mode.

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 1     | NEAREST_SAMPLINGMODE or NEAREST_NEAREST_MIPLINEAR  | Nearest is: mag = nearest, min = nearest, mip = linear |
| 2     | BILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPNEAREST | Bilinear is: mag = linear, min = linear, mip = nearest |
| 3     | TRILINEAR_SAMPLINGMODE or LINEAR_LINEAR_MIPLINEAR | Trilinear is: mag = linear, min = linear, mip = linear |
| 4     | NEAREST_NEAREST_MIPNEAREST |             |
| 5    | NEAREST_LINEAR_MIPNEAREST |             |
| 6    | NEAREST_LINEAR_MIPLINEAR |             |
| 7    | NEAREST_LINEAR |             |
| 8    | NEAREST_NEAREST |             |
| 9   | LINEAR_NEAREST_MIPNEAREST |             |
| 10   | LINEAR_NEAREST_MIPLINEAR |             |
| 11   | LINEAR_LINEAR |             |
| 12   | LINEAR_NEAREST |             |

   > _mag_: magnification filter (close to the viewer)
   > _min_: minification filter (far from the viewer)
   > _mip_: filter used between mip map levels

#### Parameters

##### samplingMode

`number`

Define the new sampling mode of the texture

##### generateMipMaps?

`boolean` = `false`

Define if the texture should generate mip maps or not. Default is false.

#### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`updateSamplingMode`](../../../core/src/classes/DynamicTexture.md#updatesamplingmode)

***

### updateURL()

> **updateURL**(`url`, `buffer?`, `onLoad?`, `forcedExtension?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:569](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L569)

Update the url (and optional buffer) of this texture if url was null during construction.

#### Parameters

##### url

`string`

the url of the texture

##### buffer?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`string` \| `ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\> \| `HTMLImageElement` \| `ImageBitmap` \| `Blob`\> = `null`

the buffer of the texture (defaults to null)

##### onLoad?

() => `void`

callback called when the texture is loaded  (defaults to null)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`updateURL`](../../../core/src/classes/DynamicTexture.md#updateurl)

***

### CreateForMesh()

> `static` **CreateForMesh**(`mesh`, `width?`, `height?`, `supportPointerMove?`, `onlyAlphaTesting?`, `invertY?`, `materialSetupCallback?`, `sampling?`): `AdvancedDynamicTexture`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1602](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1602)

Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh)

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh which will receive the texture

##### width?

`number` = `1024`

defines the texture width (1024 by default)

##### height?

`number` = `1024`

defines the texture height (1024 by default)

##### supportPointerMove?

`boolean` = `true`

defines a boolean indicating if the texture must capture move events (true by default)

##### onlyAlphaTesting?

`boolean` = `false`

defines a boolean indicating that alpha blending will not be used (only alpha testing) (false by default)

##### invertY?

`boolean`

defines if the texture needs to be inverted on the y axis during loading (true by default)

##### materialSetupCallback?

(`mesh`, `uniqueId`, `texture`, `onlyAlphaTesting`) => `void`

defines a custom way of creating and setting up the material on the mesh

##### sampling?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

defines the texture sampling mode (Texture.TRILINEAR_SAMPLINGMODE by default)

#### Returns

`AdvancedDynamicTexture`

a new AdvancedDynamicTexture

***

### CreateForMeshTexture()

> `static` **CreateForMeshTexture**(`mesh`, `width?`, `height?`, `supportPointerMove?`, `invertY?`, `sampling?`): `AdvancedDynamicTexture`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1654](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1654)

Creates a new AdvancedDynamicTexture in projected mode (ie. attached to a mesh) BUT do not create a new material for the mesh. You will be responsible for connecting the texture

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

defines the mesh which will receive the texture

##### width?

`number` = `1024`

defines the texture width (1024 by default)

##### height?

`number` = `1024`

defines the texture height (1024 by default)

##### supportPointerMove?

`boolean` = `true`

defines a boolean indicating if the texture must capture move events (true by default)

##### invertY?

`boolean`

defines if the texture needs to be inverted on the y axis during loading (true by default)

##### sampling?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

defines the texture sampling mode (Texture.TRILINEAR_SAMPLINGMODE by default)

#### Returns

`AdvancedDynamicTexture`

a new AdvancedDynamicTexture

***

### CreateFromBase64String()

> `static` **CreateFromBase64String**(`data`, `name`, `scene`, `noMipmapOrOptions?`, `invertY?`, `samplingMode?`, `onLoad?`, `onError?`, `format?`, `creationFlags?`, `forcedExtension?`): [`Texture`](../../../core/src/classes/Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:1165](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L1165)

Creates a texture from its base 64 representation.

#### Parameters

##### data

`string`

Define the base64 payload without the data: prefix

##### name

`string`

Define the name of the texture in the scene useful fo caching purpose for instance

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

Define the scene the texture should belong to

##### noMipmapOrOptions?

`boolean` \| [`ITextureCreationOptions`](../../../core/src/interfaces/ITextureCreationOptions.md)

defines if the texture will require mip maps or not or set of all options to create the texture

##### invertY?

`boolean`

define if the texture needs to be inverted on the y axis during loading

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)

##### onLoad?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when the texture has been loaded

##### onError?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when an error occurred during the loading session

##### format?

`number` = `Constants.TEXTUREFORMAT_RGBA`

define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

[`Texture`](../../../core/src/classes/Texture.md)

the created texture

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`CreateFromBase64String`](../../../core/src/classes/DynamicTexture.md#createfrombase64string)

***

### CreateFullscreenUI()

> `static` **CreateFullscreenUI**(`name`, `foreground?`, `sceneOrOptions?`, `sampling?`, `adaptiveScaling?`): `AdvancedDynamicTexture`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1679](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1679)

Creates a new AdvancedDynamicTexture in fullscreen mode.
In this mode the texture will rely on a layer for its rendering.
This allows it to be treated like any other layer.
As such, if you have a multi camera setup, you can set the layerMask on the GUI as well.
LayerMask is set through advancedTexture.layer.layerMask

#### Parameters

##### name

`string`

defines name for the texture

##### foreground?

`boolean` = `true`

defines a boolean indicating if the texture must be rendered in foreground (default is true)

##### sceneOrOptions?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Scene`](../../../core/src/classes/Scene.md)\> \| [`IAdvancedDynamicTextureOptions`](../interfaces/IAdvancedDynamicTextureOptions.md)

defines the hosting scene or options (IAdvancedDynamicTextureOptions)

##### sampling?

`number` = `Texture.BILINEAR_SAMPLINGMODE`

defines the texture sampling mode (Texture.BILINEAR_SAMPLINGMODE by default)

##### adaptiveScaling?

`boolean` = `false`

defines whether to automatically scale root to match hardwarescaling (false by default)

#### Returns

`AdvancedDynamicTexture`

a new AdvancedDynamicTexture

***

### LoadFromDataString()

> `static` **LoadFromDataString**(`name`, `buffer`, `scene`, `deleteBuffer?`, `noMipmapOrOptions?`, `invertY?`, `samplingMode?`, `onLoad?`, `onError?`, `format?`, `creationFlags?`, `forcedExtension?`): [`Texture`](../../../core/src/classes/Texture.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:1212](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L1212)

Creates a texture from its data: representation. (data: will be added in case only the payload has been passed in)

#### Parameters

##### name

`string`

Define the name of the texture in the scene useful fo caching purpose for instance

##### buffer

`any`

define the buffer to load the texture from in case the texture is loaded from a buffer representation

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

Define the scene the texture should belong to

##### deleteBuffer?

`boolean` = `false`

define if the buffer we are loading the texture from should be deleted after load

##### noMipmapOrOptions?

`boolean` \| [`ITextureCreationOptions`](../../../core/src/interfaces/ITextureCreationOptions.md)

defines if the texture will require mip maps or not or set of all options to create the texture

##### invertY?

`boolean` = `true`

define if the texture needs to be inverted on the y axis during loading

##### samplingMode?

`number` = `Texture.TRILINEAR_SAMPLINGMODE`

define the sampling mode we want for the texture while fetching from it (Texture.NEAREST_SAMPLINGMODE...)

##### onLoad?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<() => `void`\> = `null`

define a callback triggered when the texture has been loaded

##### onError?

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<(`message?`, `exception?`) => `void`\> = `null`

define a callback triggered when an error occurred during the loading session

##### format?

`number` = `Constants.TEXTUREFORMAT_RGBA`

define the format of the texture we are trying to load (Engine.TEXTUREFORMAT_RGBA...)

##### creationFlags?

`number`

specific flags to use when creating the texture (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

##### forcedExtension?

`string`

defines the extension to use to pick the right loader

#### Returns

[`Texture`](../../../core/src/classes/Texture.md)

the created texture

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`LoadFromDataString`](../../../core/src/classes/DynamicTexture.md#loadfromdatastring)

***

### Parse()

> `static` **Parse**(`parsedTexture`, `scene`, `rootUrl`): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/texture.ts:970](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/texture.ts#L970)

Parse the JSON representation of a texture in order to recreate the texture in the given scene.

#### Parameters

##### parsedTexture

`any`

Define the JSON representation of the texture

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

Define the scene the parsed texture should be instantiated in

##### rootUrl

`string`

Define the root url of the parsing sequence in the case of relative dependencies

#### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

The parsed texture if successful

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`Parse`](../../../core/src/classes/DynamicTexture.md#parse)

***

### ParseFromFileAsync()

> `static` **ParseFromFileAsync**(`url`, `scaleToSize?`, `appendToAdt?`, `urlRewriter?`): `Promise`\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1521](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1521)

Recreate the content of the ADT from a url json

#### Parameters

##### url

`string`

defines the url to load

##### scaleToSize?

`boolean`

defines whether to scale to texture to the saved size

##### appendToAdt?

`AdvancedDynamicTexture`

if provided the snippet will be appended to the adt. Otherwise a fullscreen ADT will be created.

##### urlRewriter?

(`url`) => `string`

defines an url rewriter to update urls before sending them to the controls

#### Returns

`Promise`\<`AdvancedDynamicTexture`\>

a promise that will resolve on success

***

### ParseFromSnippetAsync()

> `static` **ParseFromSnippetAsync**(`snippetId`, `scaleToSize?`, `appendToAdt?`, `urlRewriter?`): `Promise`\<`AdvancedDynamicTexture`\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/advancedDynamicTexture.ts:1486](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/advancedDynamicTexture.ts#L1486)

Recreate the content of the ADT from a snippet saved by the GUI editor

#### Parameters

##### snippetId

`string`

defines the snippet to load

##### scaleToSize?

`boolean`

defines whether to scale to texture to the saved size

##### appendToAdt?

`AdvancedDynamicTexture`

if provided the snippet will be appended to the adt. Otherwise a fullscreen ADT will be created.

##### urlRewriter?

(`url`) => `string`

defines an url rewriter to update urls before sending them to the controls

#### Returns

`Promise`\<`AdvancedDynamicTexture`\>

a promise that will resolve on success

***

### WhenAllReady()

> `static` **WhenAllReady**(`textures`, `callback`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/baseTexture.ts:897](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/baseTexture.ts#L897)

Helper function to be called back once a list of texture contains only ready textures.

#### Parameters

##### textures

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]

Define the list of textures to wait for

##### callback

() => `void`

Define the callback triggered once the entire list will be ready

#### Returns

`void`

#### Inherited from

[`DynamicTexture`](../../../core/src/classes/DynamicTexture.md).[`WhenAllReady`](../../../core/src/classes/DynamicTexture.md#whenallready)
