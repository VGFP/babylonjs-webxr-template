[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Reflector

# Class: Reflector

Defined in: [babylonjs-source/packages/dev/core/src/Misc/reflector.ts:9](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/reflector.ts#L9)

**`Since`**

Class used to connect with the reflector zone of the sandbox via the reflector bridge
 5.0.0

## Constructors

### Constructor

> **new Reflector**(`scene`, `hostname`, `port`): `Reflector`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/reflector.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/reflector.ts#L21)

Constructs a reflector object.

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene to use

##### hostname

`string`

The hostname of the reflector bridge

##### port

`number`

The port of the reflector bridge

#### Returns

`Reflector`

## Methods

### close()

> **close**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/reflector.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/reflector.ts#L48)

Closes the reflector connection

#### Returns

`void`
