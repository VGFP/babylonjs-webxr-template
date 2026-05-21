[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointerInfo

# Class: PointerInfo

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L112)

This type contains all the data related to a pointer event in Babylon.js.
The event member is an instance of PointerEvent for all types except PointerWheel and is of type MouseWheelEvent when type equals PointerWheel. The different event types can be found in the PointerEventTypes class.

## Extends

- [`PointerInfoBase`](PointerInfoBase.md)

## Constructors

### Constructor

> **new PointerInfo**(`type`, `event`, `pickInfo`, `inputManager?`): `PointerInfo`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L133)

Instantiates a PointerInfo to store pointer related info to the onPointerObservable event.

#### Parameters

##### type

`number`

Defines the type of event (PointerEventTypes)

##### event

[`IMouseEvent`](../interfaces/IMouseEvent.md)

Defines the related dom event

##### pickInfo

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defines the picking info associated to the info (if any)

##### inputManager?

[`Nullable`](../type-aliases/Nullable.md)\<`InputManager`\> = `null`

Defines the InputManager to use if there is no pickInfo

#### Returns

`PointerInfo`

#### Overrides

[`PointerInfoBase`](PointerInfoBase.md).[`constructor`](PointerInfoBase.md#constructor)

## Properties

### event

> **event**: [`IMouseEvent`](../interfaces/IMouseEvent.md)

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L60)

Defines the related dom event

#### Inherited from

[`PointerInfoBase`](PointerInfoBase.md).[`event`](PointerInfoBase.md#event)

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L56)

Defines the type of event (PointerEventTypes)

#### Inherited from

[`PointerInfoBase`](PointerInfoBase.md).[`type`](PointerInfoBase.md#type)

## Accessors

### pickInfo

#### Get Signature

> **get** **pickInfo**(): [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L119)

Defines the picking info associated with this PointerInfo object (if applicable)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>
