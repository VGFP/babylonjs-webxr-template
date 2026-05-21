[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ExtrudeShapeCustom

# Function: ExtrudeShapeCustom()

> **ExtrudeShapeCustom**(`name`, `options`, `scene?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/shapeBuilder.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/shapeBuilder.ts#L123)

Creates an custom extruded shape mesh.
The custom extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
* The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
* The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
* The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the beginning of the path
* It must returns a float value that will be the rotation in radians applied to the shape on each path point.
* The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path and the distance of this point from the beginning of the path
* The parameter `scaleVectorFunction` (JS function) has the same purpose as `scaleFunction` but instead of returning a float it returns a Vector3 to allow non uniform scaling. If provided, it takes precedence over `scaleFunction`.
* It must returns a float value that will be the scale value applied to the shape on each path point
* The parameter `closeShape` (boolean, default false) closes the shape when true, since v5.0.0.
* The parameter `closePath` (boolean, default false) closes the path when true and no caps, since v5.0.0.
* The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray` - depreciated in favor of closeShape
* The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray` - depreciated in favor of closePath
* The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
* The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#extruded-shape
* Remember you can only change the shape or path point positions, not their number when updating an extruded shape
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
* The optional parameter `firstNormal` (Vector3) defines the direction of the first normal of the supplied path. It should be supplied when the path is in the xy plane, and particularly if these sections are straight, because the underlying Path3D object will pick a normal in the xy plane that causes the extrusion to be collapsed into the plane. This should be used for any path that is straight.
* The optional `adjustFrame` (boolean, default false) will cause the internally generated Path3D tangents, normals, and binormals to be adjusted so that a) they are always well-defined, and b) they do not reverse from one path point to the next. This prevents the extruded shape from being flipped and/or rotated with resulting mesh self-intersections. This is primarily useful for straight paths that can reverse direction.

## Parameters

### name

`string`

defines the name of the mesh

### options

defines the options used to create the mesh

#### adjustFrame?

`boolean`

#### backUVs?

[`Vector4`](../classes/Vector4.md)

#### cap?

`number`

#### capFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`shapePath`) => [`Vector3`](../classes/Vector3.md)[]\>

#### closePath?

`boolean`

#### closeShape?

`boolean`

#### firstNormal?

[`Vector3`](../classes/Vector3.md)

#### frontUVs?

[`Vector4`](../classes/Vector4.md)

#### instance?

[`Mesh`](../classes/Mesh.md)

#### invertUV?

`boolean`

#### path

[`Vector3`](../classes/Vector3.md)[]

#### ribbonCloseArray?

`boolean`

#### ribbonClosePath?

`boolean`

#### rotationFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`i`, `distance`) => `number`\>

#### scaleFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`i`, `distance`) => `number`\>

#### scaleVectorFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`i`, `distance`) => [`Vector3`](../classes/Vector3.md)\>

#### shape

[`Vector3`](../classes/Vector3.md)[]

#### sideOrientation?

`number`

#### updatable?

`boolean`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`Mesh`](../classes/Mesh.md)

the custom extruded shape mesh

## See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#custom-extruded-shapes
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-shapes
