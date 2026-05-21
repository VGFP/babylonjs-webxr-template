[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ExtrudePolygon

# Function: ExtrudePolygon()

> **ExtrudePolygon**(`name`, `options`, `scene?`, `earcutInjection?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/polygonBuilder.ts:206](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/polygonBuilder.ts#L206)

Creates an extruded polygon mesh, with depth in the Y direction.
* You can set different colors and different images to the top, bottom and extruded side by using the parameters `faceColors` (an array of 3 Color3 elements) and `faceUV` (an array of 3 Vector4 elements)

## Parameters

### name

`string`

defines the name of the mesh

### options

defines the options used to create the mesh

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### depth?

`number`

#### faceColors?

[`Color4`](../classes/Color4.md)[]

#### faceUV?

[`Vector4`](../classes/Vector4.md)[]

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### holes?

[`Vector3`](../classes/Vector3.md)[][]

#### shape

[`Vector3`](../classes/Vector3.md)[]

#### sideOrientation?

`number`

#### updatable?

`boolean`

#### wrap?

`boolean`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

## Returns

[`Mesh`](../classes/Mesh.md)

the polygon mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
