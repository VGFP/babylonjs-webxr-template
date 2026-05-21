[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRControllerPhysicsOptions

# Class: IWebXRControllerPhysicsOptions

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L21)

Options for the controller physics feature

## Constructors

### Constructor

> **new IWebXRControllerPhysicsOptions**(): `IWebXRControllerPhysicsOptions`

#### Returns

`IWebXRControllerPhysicsOptions`

## Properties

### enableHeadsetImpostor?

> `optional` **enableHeadsetImpostor?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L25)

Should the headset get its own impostor

***

### headsetImpostorParams?

> `optional` **headsetImpostorParams?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L29)

Optional parameters for the headset impostor

#### friction?

> `optional` **friction?**: `number`

Friction definitions

#### impostorSize?

> `optional` **impostorSize?**: `number` \| \{ `depth`: `number`; `height`: `number`; `width`: `number`; \}

the size of the impostor. Defaults to 10cm

#### impostorType

> **impostorType**: `number`

The type of impostor to create. Default is sphere

#### restitution?

> `optional` **restitution?**: `number`

Restitution

***

### physicsProperties?

> `optional` **physicsProperties?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L50)

The physics properties of the future impostors

#### friction?

> `optional` **friction?**: `number`

Friction definitions

#### impostorSize?

> `optional` **impostorSize?**: `number` \| \{ `depth`: `number`; `height`: `number`; `width`: `number`; \}

the size of the impostor. Defaults to 10cm

#### impostorType?

> `optional` **impostorType?**: `number`

The type of impostor to create. Default is sphere

#### restitution?

> `optional` **restitution?**: `number`

Restitution

#### useControllerMesh?

> `optional` **useControllerMesh?**: `boolean`

If set to true, a mesh impostor will be created when the controller mesh was loaded
Note that this requires a physics engine that supports mesh impostors!

***

### xrInput

> **xrInput**: [`WebXRInput`](WebXRInput.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/features/WebXRControllerPhysics.ts#L76)

the xr input to use with this pointer selection
