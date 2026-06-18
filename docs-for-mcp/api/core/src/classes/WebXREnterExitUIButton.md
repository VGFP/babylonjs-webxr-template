[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXREnterExitUIButton

# Class: WebXREnterExitUIButton

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXREnterExitUI.ts#L10)

Button which can be used to enter a different mode of XR

## Constructors

### Constructor

> **new WebXREnterExitUIButton**(`element`, `sessionMode`, `referenceSpaceType`): `WebXREnterExitUIButton`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:17](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXREnterExitUI.ts#L17)

Creates a WebXREnterExitUIButton

#### Parameters

##### element

`HTMLElement`

button element

##### sessionMode

`XRSessionMode`

XR initialization session mode

##### referenceSpaceType

`XRReferenceSpaceType`

the type of reference space to be used

#### Returns

`WebXREnterExitUIButton`

## Properties

### element

> **element**: `HTMLElement`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXREnterExitUI.ts#L19)

button element

***

### referenceSpaceType

> **referenceSpaceType**: `XRReferenceSpaceType`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXREnterExitUI.ts#L23)

Reference space type

***

### sessionMode

> **sessionMode**: `XRSessionMode`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXREnterExitUI.ts#L21)

XR initialization options for the button

## Methods

### update()

> **update**(`activeButton`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXREnterExitUI.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/webXREnterExitUI.ts#L31)

Extendable function which can be used to update the button's visuals when the state changes

#### Parameters

##### activeButton

[`Nullable`](../type-aliases/Nullable.md)\<`WebXREnterExitUIButton`\>

the current active button in the UI

#### Returns

`void`
