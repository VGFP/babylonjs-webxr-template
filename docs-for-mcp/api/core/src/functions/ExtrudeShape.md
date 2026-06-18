[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ExtrudeShape

# Function: ExtrudeShape()

> **ExtrudeShape**(`name`, `options`, `scene?`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/shapeBuilder.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/shapeBuilder.pure.ts#L35)

Creates an extruded shape mesh. The extrusion is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters.
* The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be extruded along the Z axis.
* The parameter `path` is a required array of successive Vector3. This is the axis curve the shape is extruded along.
* The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.
* The parameter `scale` (float, default 1) is the value to scale the shape.
* The parameter `closeShape` (boolean, default false) closes the shape when true, since v5.0.0.
* The parameter `closePath` (boolean, default false) closes the path when true and no caps, since v5.0.0.
* The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
* The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#extruded-shape
* Remember you can only change the shape or path point positions, not their number when updating an extruded shape.
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.
* The optional parameter `firstNormal` (Vector3) defines the direction of the first normal of the supplied path. Consider using this for any path that is straight, and particular for paths in the xy plane.
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

#### rotation?

`number`

#### scale?

`number`

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

the extruded shape mesh

## See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-shapes
