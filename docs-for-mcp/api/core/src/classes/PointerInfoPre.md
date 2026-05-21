[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointerInfoPre

# Class: PointerInfoPre

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L68)

This class is used to store pointer related info for the onPrePointerObservable event.
Set the skipOnPointerObservable property to true if you want the engine to stop any process after this event is triggered, even not calling onPointerObservable

## Extends

- [`PointerInfoBase`](PointerInfoBase.md)

## Constructors

### Constructor

> **new PointerInfoPre**(`type`, `event`, `localX`, `localY`): `PointerInfoPre`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:101](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L101)

Instantiates a PointerInfoPre to store pointer related info to the onPrePointerObservable event.

#### Parameters

##### type

`number`

Defines the type of event (PointerEventTypes)

##### event

[`IMouseEvent`](../interfaces/IMouseEvent.md)

Defines the related dom event

##### localX

`number`

Defines the local x coordinates of the pointer when the event occured

##### localY

`number`

Defines the local y coordinates of the pointer when the event occured

#### Returns

`PointerInfoPre`

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

### localPosition

> **localPosition**: [`Vector2`](Vector2.md)

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L87)

Defines the local position of the pointer on the canvas.

***

### nearInteractionPickingInfo

> **nearInteractionPickingInfo**: [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:77](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L77)

Defines picking info coming from a near interaction (proximity instead of ray-based picking)

***

### originalPickingInfo

> **originalPickingInfo**: [`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](PickingInfo.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:82](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L82)

The original picking info that was used to trigger the pointer event

***

### ray

> **ray**: [`Nullable`](../type-aliases/Nullable.md)\<[`Ray`](Ray.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:72](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L72)

Ray from a pointer if available (eg. 6dof controller)

***

### skipOnPointerObservable

> **skipOnPointerObservable**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L92)

Defines whether the engine should skip the next OnPointerObservable associated to this pre.

***

### type

> **type**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Events/pointerEvents.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Events/pointerEvents.ts#L56)

Defines the type of event (PointerEventTypes)

#### Inherited from

[`PointerInfoBase`](PointerInfoBase.md).[`type`](PointerInfoBase.md#type)
