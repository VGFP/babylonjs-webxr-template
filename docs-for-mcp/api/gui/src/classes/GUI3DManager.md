[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / GUI3DManager

# Class: GUI3DManager

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L21)

Class used to manage 3D user interface

## See

https://doc.babylonjs.com/features/featuresDeepDive/gui/gui3D

## Implements

- [`IDisposable`](../../../core/src/interfaces/IDisposable.md)

## Constructors

### Constructor

> **new GUI3DManager**(`scene?`): `GUI3DManager`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L100)

Creates a new GUI3DManager

#### Parameters

##### scene?

[`Scene`](../../../core/src/classes/Scene.md)

#### Returns

`GUI3DManager`

## Properties

### onPickedPointChangedObservable

> **onPickedPointChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`Vector3`](../../../core/src/classes/Vector3.md)\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L41)

Observable raised when the point picked by the pointer events changed

***

### onPickingObservable

> **onPickingObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L46)

Observable raised when a picking happens

## Accessors

### controlScaling

#### Get Signature

> **get** **controlScaling**(): `number`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L66)

Gets the scaling for all UI elements owned by this manager

##### Returns

`number`

#### Set Signature

> **set** **controlScaling**(`newScale`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L71)

Sets the scaling adjustment for all UI elements owned by this manager

##### Parameters

###### newScale

`number`

##### Returns

`void`

***

### rootContainer

#### Get Signature

> **get** **rootContainer**(): [`Container3D`](Container3D.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:204](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L204)

Gets the root container

##### Returns

[`Container3D`](Container3D.md)

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](../../../core/src/classes/Scene.md)

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L56)

Gets the hosting scene

##### Returns

[`Scene`](../../../core/src/classes/Scene.md)

***

### useRealisticScaling

#### Get Signature

> **get** **useRealisticScaling**(): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:87](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L87)

Gets if controls attached to this manager are realistically sized, based on the fact that 1 unit length is 1 meter

##### Returns

`boolean`

#### Set Signature

> **set** **useRealisticScaling**(`newValue`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L92)

Sets if controls attached to this manager are realistically sized, based on the fact that 1 unit length is 1 meter

##### Parameters

###### newValue

`boolean`

##### Returns

`void`

***

### utilityLayer

#### Get Signature

> **get** **utilityLayer**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`UtilityLayerRenderer`](../../../core/src/classes/UtilityLayerRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L61)

Gets associated utility layer

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`UtilityLayerRenderer`](../../../core/src/classes/UtilityLayerRenderer.md)\>

## Methods

### addControl()

> **addControl**(`control`): `GUI3DManager`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:222](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L222)

Adds a control to the root child list

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to add

#### Returns

`GUI3DManager`

the current manager

***

### containsControl()

> **containsControl**(`control`): `boolean`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:213](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L213)

Gets a boolean indicating if the given control is in the root child list

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to check

#### Returns

`boolean`

true if the control is in the root child list

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:248](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L248)

Releases all associated resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../../../core/src/interfaces/IDisposable.md).[`dispose`](../../../core/src/interfaces/IDisposable.md#dispose)

***

### removeControl()

> **removeControl**(`control`): `GUI3DManager`

Defined in: [babylonjs-source/packages/dev/gui/src/3D/gui3DManager.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/3D/gui3DManager.ts#L236)

Removes a control from the root child list

#### Parameters

##### control

[`Control3D`](Control3D.md)

defines the control to remove

#### Returns

`GUI3DManager`

the current container
