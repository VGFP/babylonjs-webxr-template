[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRAbstractMotionController

# Abstract Class: WebXRAbstractMotionController

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L231)

An Abstract Motion controller
This class receives an xrInput and a profile layout and uses those to initialize the components
Each component has an observable to check for changes in value and state

## Extended by

- [`WebXRGenericHandController`](WebXRGenericHandController.md)
- [`WebXRGenericTriggerMotionController`](WebXRGenericTriggerMotionController.md)
- [`WebXRMicrosoftMixedRealityController`](WebXRMicrosoftMixedRealityController.md)
- [`WebXROculusTouchMotionController`](WebXROculusTouchMotionController.md)
- [`WebXROculusHandController`](WebXROculusHandController.md)
- [`WebXRHTCViveMotionController`](WebXRHTCViveMotionController.md)
- [`WebXRProfiledMotionController`](WebXRProfiledMotionController.md)

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new WebXRAbstractMotionController**(`scene`, `layout`, `gamepadObject`, `handedness`, `_controllerCache?`): `WebXRAbstractMotionController`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L284)

constructs a new abstract motion controller

#### Parameters

##### scene

[`Scene`](Scene.md)

the scene to which the model of the controller will be added

##### layout

[`IMotionControllerLayout`](../interfaces/IMotionControllerLayout.md)

The profile layout to load

##### gamepadObject

[`IMinimalMotionControllerObject`](../interfaces/IMinimalMotionControllerObject.md)

The gamepad object correlating to this controller

##### handedness

[`MotionControllerHandedness`](../type-aliases/MotionControllerHandedness.md)

handedness (left/right/none) of this controller

##### \_controllerCache?

`object`[]

a cache holding controller models already loaded in this session

#### Returns

`WebXRAbstractMotionController`

## Properties

### components

> `readonly` **components**: `object` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L254)

A map of components (WebXRControllerComponent) in this motion controller
Components have a ComponentType and can also have both button and axis definitions

#### Index Signature

\[`id`: `string`\]: [`WebXRControllerComponent`](WebXRControllerComponent.md)

***

### disableAnimation

> **disableAnimation**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:261](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L261)

Disable the model's animation. Can be set at any time.

***

### gamepadObject

> **gamepadObject**: [`IMinimalMotionControllerObject`](../interfaces/IMinimalMotionControllerObject.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:292](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L292)

The gamepad object correlating to this controller

***

### handedness

> **handedness**: [`MotionControllerHandedness`](../type-aliases/MotionControllerHandedness.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:296](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L296)

handedness (left/right/none) of this controller

***

### onModelLoadedObservable

> **onModelLoadedObservable**: [`Observable`](Observable.md)\<`WebXRAbstractMotionController`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L265)

Observers registered here will be triggered when the model of this controller is done loading

***

### profileId

> `abstract` **profileId**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:269](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L269)

The profile id of this motion controller

***

### rootMesh

> **rootMesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L273)

The root mesh of the model. It is null if the model was not yet initialized

## Accessors

### handness

#### Get Signature

> **get** **handness**(): [`MotionControllerHandedness`](../type-aliases/MotionControllerHandedness.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:461](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L461)

Backwards compatibility due to a deeply-integrated typo

##### Returns

[`MotionControllerHandedness`](../type-aliases/MotionControllerHandedness.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:321](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L321)

Dispose this controller, the model mesh and all its components

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getAllComponentsOfType()

> **getAllComponentsOfType**(`type`): [`WebXRControllerComponent`](WebXRControllerComponent.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L341)

Returns all components of specific type

#### Parameters

##### type

[`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md)

the type to search for

#### Returns

[`WebXRControllerComponent`](WebXRControllerComponent.md)[]

an array of components with this type

***

### getComponent()

> **getComponent**(`id`): [`WebXRControllerComponent`](WebXRControllerComponent.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:352](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L352)

get a component based an its component id as defined in layout.components

#### Parameters

##### id

`string`

the id of the component

#### Returns

[`WebXRControllerComponent`](WebXRControllerComponent.md)

the component correlates to the id or undefined if not found

***

### getComponentIds()

> **getComponentIds**(): `string`[]

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:360](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L360)

Get the list of components available in this motion controller

#### Returns

`string`[]

an array of strings correlating to available components

***

### getComponentOfType()

> **getComponentOfType**(`type`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRControllerComponent`](WebXRControllerComponent.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L369)

Get the first component of specific type

#### Parameters

##### type

[`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md)

type of component to find

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRControllerComponent`](WebXRControllerComponent.md)\>

a controller component or null if not found

***

### getMainComponent()

> **getMainComponent**(): [`WebXRControllerComponent`](WebXRControllerComponent.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:377](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L377)

Get the main (Select) component of this controller as defined in the layout

#### Returns

[`WebXRControllerComponent`](WebXRControllerComponent.md)

the main component of this controller

***

### loadModel()

> **loadModel**(): `Promise`\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:387](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L387)

Loads the model correlating to this controller
When the mesh is loaded, the onModelLoadedObservable will be triggered

#### Returns

`Promise`\<`boolean`\>

A promise fulfilled with the result of the model loading

***

### pulse()

> **pulse**(`value`, `duration`, `hapticActuatorIndex?`): `Promise`\<`boolean`\>

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:476](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L476)

Pulse (vibrate) this controller
If the controller does not support pulses, this function will fail silently and return Promise<false> directly after called
Consecutive calls to this function will cancel the last pulse call

#### Parameters

##### value

`number`

the strength of the pulse in 0.0...1.0 range

##### duration

`number`

Duration of the pulse in milliseconds

##### hapticActuatorIndex?

`number` = `0`

optional index of actuator (will usually be 0)

#### Returns

`Promise`\<`boolean`\>

a promise that will send true when the pulse has ended and false if the device doesn't support pulse or an error accrued

***

### updateFromXRFrame()

> **updateFromXRFrame**(`xrFrame`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:451](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L451)

Update this model using the current XRFrame

#### Parameters

##### xrFrame

`XRFrame`

the current xr frame to use and update the model

#### Returns

`void`
