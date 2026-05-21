[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPickingCustomization

# Interface: IPickingCustomization

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/ray.core.ts#L31)

This class allows user to customize internal picking mechanism

## Properties

### internalPickerForMesh?

> `optional` **internalPickerForMesh?**: (`pickingInfo`, `rayFunction`, `mesh`, `world`, `fastCheck?`, `onlyBoundingInfo?`, `trianglePredicate?`, `skipBoundingInfo?`) => [`PickingInfo`](../classes/PickingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Culling/ray.core.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Culling/ray.core.ts#L35)

Predicate to select faces when a mesh intersection is detected

#### Parameters

##### pickingInfo

[`Nullable`](../type-aliases/Nullable.md)\<[`PickingInfo`](../classes/PickingInfo.md)\>

##### rayFunction

(`world`, `enableDistantPicking`) => [`Ray`](../classes/Ray.md)

##### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

##### world

[`Matrix`](../classes/Matrix.md)

##### fastCheck?

`boolean`

##### onlyBoundingInfo?

`boolean`

##### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

##### skipBoundingInfo?

`boolean`

#### Returns

[`PickingInfo`](../classes/PickingInfo.md)
