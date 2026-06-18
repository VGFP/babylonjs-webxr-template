[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / MultiLinePoint

# Class: MultiLinePoint

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:16](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L16)

Class used to store a point for a MultiLine object.
The point can be pure 2D coordinates, a mesh or a control

## Constructors

### Constructor

> **new MultiLinePoint**(`multiLine`): `MultiLinePoint`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L34)

Creates a new MultiLinePoint

#### Parameters

##### multiLine

[`MultiLine`](MultiLine.md)

defines the source MultiLine object

#### Returns

`MultiLinePoint`

## Accessors

### control

#### Get Signature

> **get** **control**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L74)

Gets or sets the control associated with this point

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

#### Set Signature

> **set** **control**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:78](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L78)

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Control`](Control.md)\>

##### Returns

`void`

***

### mesh

#### Get Signature

> **get** **mesh**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:99](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L99)

Gets or sets the mesh associated with this point

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

#### Set Signature

> **set** **mesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L103)

##### Parameters

###### value

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

##### Returns

`void`

***

### x

#### Get Signature

> **get** **x**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:44](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L44)

Gets or sets x coordinate

##### Returns

`string` \| `number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L48)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

***

### y

#### Get Signature

> **get** **y**(): `string` \| `number`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:59](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L59)

Gets or sets y coordinate

##### Returns

`string` \| `number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L63)

##### Parameters

###### value

`string` \| `number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:153](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L153)

Release associated resources

#### Returns

`void`

***

### resetLinks()

> **resetLinks**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:122](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L122)

Resets links

#### Returns

`void`

***

### translate()

> **translate**(): [`Vector3`](../../../core/src/classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/multiLinePoint.ts:131](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/multiLinePoint.ts#L131)

Gets a translation vector with Z component

#### Returns

[`Vector3`](../../../core/src/classes/Vector3.md)

the translation vector
