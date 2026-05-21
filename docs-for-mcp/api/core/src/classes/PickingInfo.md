[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PickingInfo

# Class: PickingInfo

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L15)

Information about the result of picking within a scene

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/interactions/picking_collisions

## Constructors

### Constructor

> **new PickingInfo**(): `PickingInfo`

#### Returns

`PickingInfo`

## Properties

### aimTransform

> **aimTransform**: [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:57](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L57)

The aim-space transform of the input used for picking, if it is an XR input source.

***

### bu

> **bu**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L33)

(See getTextureCoordinates) The barycentric U coordinate that is used when calculating the texture coordinates of the collision.

***

### bv

> **bv**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L35)

(See getTextureCoordinates) The barycentric V coordinate that is used when calculating the texture coordinates of the collision.

***

### distance

> **distance**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L23)

Distance away where the pick collided

***

### faceId

> **faceId**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L37)

The index of the face on the mesh that was picked, or the index of the Line if the picked Mesh is a LinesMesh

***

### gripTransform

> **gripTransform**: [`Nullable`](../type-aliases/Nullable.md)\<[`TransformNode`](TransformNode.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L62)

The grip-space transform of the input used for picking, if it is an XR input source.
Some XR sources, such as input coming from head mounted displays, do not have this.

***

### hit

> **hit**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:19](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L19)

If the pick collided with an object

***

### originMesh

> **originMesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L53)

If a mesh was used to do the picking (eg. 6dof controller) as a "near interaction", this will be populated.

***

### pickedMesh

> **pickedMesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L31)

The mesh corresponding the pick collision

***

### pickedPoint

> **pickedPoint**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L27)

The location of pick collision

***

### pickedSprite

> **pickedSprite**: [`Nullable`](../type-aliases/Nullable.md)\<[`Sprite`](Sprite.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L43)

If a sprite was picked, this will be the sprite the pick collided with

***

### ray

> **ray**: [`Nullable`](../type-aliases/Nullable.md)\<[`Ray`](Ray.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L49)

The ray that was used to perform the picking.

***

### subMeshFaceId

> **subMeshFaceId**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L39)

The index of the face on the subMesh that was picked, or the index of the Line if the picked Mesh is a LinesMesh

***

### subMeshId

> **subMeshId**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L41)

Id of the submesh that was picked

***

### thinInstanceIndex

> **thinInstanceIndex**: `number` = `-1`

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L45)

If we are picking a mesh with thin instance, this will give you the picked thin instance

## Methods

### getNormal()

> **getNormal**(`useWorldCoordinates?`, `useVerticesNormals?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:71](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L71)

Gets the normal corresponding to the face the pick collided with

#### Parameters

##### useWorldCoordinates?

`boolean` = `false`

If the resulting normal should be relative to the world (default: false)

##### useVerticesNormals?

`boolean` = `true`

If the vertices normals should be used to calculate the normal instead of the normal map (default: true)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](Vector3.md)\>

The normal corresponding to the face the pick collided with

#### Remarks

Note that the returned normal will always point towards the picking ray.

***

### getTextureCoordinates()

> **getTextureCoordinates**(`uvSet?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector2`](Vector2.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Collisions/pickingInfo.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Collisions/pickingInfo.ts#L180)

Gets the texture coordinates of where the pick occurred

#### Parameters

##### uvSet?

`string` = `VertexBuffer.UVKind`

The UV set to use to calculate the texture coordinates (default: VertexBuffer.UVKind)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector2`](Vector2.md)\>

The vector containing the coordinates of the texture
