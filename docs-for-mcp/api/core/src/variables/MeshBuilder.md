[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MeshBuilder

# Variable: MeshBuilder

> `const` **MeshBuilder**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/meshBuilder.ts:29](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/meshBuilder.ts#L29)

Class containing static functions to help procedurally build meshes

## Type Declaration

### CreateBox

> **CreateBox**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a box mesh
* The parameter `size` sets the size (float) of each box side (default 1)
* You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value of `size`)
* You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 Color3 elements) and `faceUV` (an array of 6 Vector4 elements)
* Please read this tutorial : https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### bottomBaseAt?

`number`

###### depth?

`number`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### height?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### topBaseAt?

`number`

###### updatable?

`boolean`

###### width?

`number`

###### wrap?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the box mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#box

### CreateCapsule

> **CreateCapsule**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a capsule or a pill mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

[`ICreateCapsuleOptions`](../interfaces/ICreateCapsuleOptions.md) = `...`

The constructors options.

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

The scene the mesh is scoped to.

#### Returns

[`Mesh`](../classes/Mesh.md)

Capsule Mesh

### CreateCylinder

> **CreateCylinder**: (`name`, `options`, `scene?`) => [`Mesh`](../classes/Mesh.md)

Creates a cylinder or a cone mesh
* The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).
* The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).
* The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.
* The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.
* The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).
* The parameter `hasRings` (boolean, default false) makes the subdivisions independent from each other, so they become different faces.
* The parameter `enclose`  (boolean, default false) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis.
* The parameter `cap` sets the way the cylinder is capped. Possible values : BABYLON.Mesh.NO_CAP, BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL (default).
* The parameter `arc` (float, default 1) is the ratio (max 1) to apply to the circumference to slice the cylinder.
* You can set different colors and different images to each box side by using the parameters `faceColors` (an array of n Color3 elements) and `faceUV` (an array of n Vector4 elements).
* The value of n is the number of cylinder faces. If the cylinder has only 1 subdivisions, n equals : top face + cylinder surface + bottom face = 3
* Now, if the cylinder has 5 independent subdivisions (hasRings = true), n equals : top face + 5 stripe surfaces + bottom face = 2 + 5 = 7
* Finally, if the cylinder has 5 independent subdivisions and is enclose, n equals : top face + 5 x (stripe surface + 2 closing faces) + bottom face = 2 + 5 * 3 = 17
* Each array (color or UVs) is always ordered the same way : the first element is the bottom cap, the last element is the top cap. The other elements are each a ring surface.
* If `enclose` is false, a ring surface is one element.
* If `enclose` is true, a ring surface is 3 successive elements in the array : the tubular surface, then the two closing faces.
* Example how to set colors and textures on a sliced cylinder : https://www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/#comment-106379
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### arc?

`number`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### cap?

`number`

###### diameter?

`number`

###### diameterBottom?

`number`

###### diameterTop?

`number`

###### enclose?

`boolean`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### hasRings?

`boolean`

###### height?

`number`

###### sideOrientation?

`number`

###### subdivisions?

`number`

###### tessellation?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the cylinder mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#cylinder-or-cone

### CreateDashedLines

> **CreateDashedLines**: (`name`, `options`, `scene`) => [`LinesMesh`](../classes/LinesMesh.md)

Creates a dashed line mesh
* A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
* Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
* The parameter `points` is an array successive Vector3
* The parameter `dashNb` is the intended total number of dashes (positive integer, default 200)
* The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3)
* The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1)
* The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#lines-and-dashedlines
* The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
* The optional parameter `material` is the material to use to draw the lines if provided. If not, a default material will be created
* When updating an instance, remember that only point positions can change, not the number of points
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### dashNb?

`number`

###### dashSize?

`number`

###### gapSize?

`number`

###### instance?

[`LinesMesh`](../classes/LinesMesh.md)

###### material?

[`Material`](../classes/Material.md)

###### points

[`Vector3`](../classes/Vector3.md)[]

###### updatable?

`boolean`

###### useVertexAlpha?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`LinesMesh`](../classes/LinesMesh.md)

the dashed line mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#dashed-lines

### CreateDecal

> **CreateDecal**: (`name`, `sourceMesh`, `options`) => [`Mesh`](../classes/Mesh.md)

Creates a decal mesh.
A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal
* The parameter `position` (Vector3, default `(0, 0, 0)`) sets the position of the decal in World coordinates
* The parameter `normal` (Vector3, default `Vector3.Up`) sets the normal of the mesh where the decal is applied onto in World coordinates
* The parameter `size` (Vector3, default `(1, 1, 1)`) sets the decal scaling
* The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal
* The parameter `captureUVS` defines if we need to capture the uvs or compute them
* The parameter `cullBackFaces` defines if the back faces should be removed from the decal mesh
* The parameter `localMode` defines that the computations should be done with the local mesh coordinates instead of the world space coordinates.
*    Use this mode if you want the decal to be parented to the sourceMesh and move/rotate with it.
Note: Meshes with morph targets are not supported!

#### Parameters

##### name

`string`

defines the name of the mesh

##### sourceMesh

[`AbstractMesh`](../classes/AbstractMesh.md)

defines the mesh where the decal must be applied

##### options

defines the options used to create the mesh

###### angle?

`number`

###### captureUVS?

`boolean`

###### cullBackFaces?

`boolean`

###### localMode?

`boolean`

###### normal?

[`Vector3`](../classes/Vector3.md)

###### position?

[`Vector3`](../classes/Vector3.md)

###### size?

[`Vector3`](../classes/Vector3.md)

#### Returns

[`Mesh`](../classes/Mesh.md)

the decal mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/decals

### CreateDisc

> **CreateDisc**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a plane polygonal mesh.  By default, this is a disc
* The parameter `radius` sets the radius size (float) of the polygon (default 0.5)
* The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc
* You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### arc?

`number`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### radius?

`number`

###### sideOrientation?

`number`

###### tessellation?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the plane polygonal mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#disc-or-regular-polygon

### CreateGeodesic

> **CreateGeodesic**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates the Mesh for a Geodesic Polyhedron

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

an object used to set the following optional parameters for the polyhedron, required but can be empty
* m number of horizontal steps along an isogrid
* n number of angled steps along an isogrid
* size the size of the Geodesic, optional default 1
* sizeX allows stretching in the x direction, optional, default size
* sizeY allows stretching in the y direction, optional, default size
* sizeZ allows stretching in the z direction, optional, default size
* faceUV an array of Vector4 elements used to set different images to the top, rings and bottom respectively
* faceColors an array of Color3 elements used to set different colors to the top, rings and bottom respectively
* flat when true creates a flat shaded mesh, optional, default true
* subdivisions increasing the subdivisions increases the number of faces, optional, default 4
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### flat?

`boolean`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### m?

`number`

###### n?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### sizeX?

`number`

###### sizeY?

`number`

###### sizeZ?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

Geodesic mesh

#### See

 - https://en.wikipedia.org/wiki/Geodesic_polyhedron
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/geodesic_poly

### CreateGoldberg

> **CreateGoldberg**: (`name`, `options`, `scene`) => [`GoldbergMesh`](../classes/GoldbergMesh.md)

Creates the Mesh for a Goldberg Polyhedron which is made from 12 pentagonal and the rest hexagonal faces

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

[`GoldbergCreationOption`](../type-aliases/GoldbergCreationOption.md)

an object used to set the following optional parameters for the polyhedron, required but can be empty

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`GoldbergMesh`](../classes/GoldbergMesh.md)

Goldberg mesh

#### See

 - https://en.wikipedia.org/wiki/Goldberg_polyhedron
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra/goldberg_poly

### CreateGround

> **CreateGround**: (`name`, `options`, `scene?`) => [`GroundMesh`](../classes/GroundMesh.md)

Creates a ground mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh
- `width` set the width size (float, default 1)
- `height` set the height size (float, default 1)
- `subdivisions` sets the number of subdivision per side (default 1)
- `subdivisionsX` sets the number of subdivision on the X axis (overrides subdivisions)
- `subdivisionsY` sets the number of subdivision on the Y axis (overrides subdivisions)
- `updatable` defines if the mesh must be flagged as updatable (default false)

###### height?

`number`

###### subdivisions?

`number`

###### subdivisionsX?

`number`

###### subdivisionsY?

`number`

###### updatable?

`boolean`

###### width?

`number`

##### scene?

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`GroundMesh`](../classes/GroundMesh.md)

the ground mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#ground

### CreateGroundFromHeightMap

> **CreateGroundFromHeightMap**: (`name`, `url`, `options`, `scene`) => [`GroundMesh`](../classes/GroundMesh.md)

Creates a ground mesh from a height map. The height map download can take some frames,
so the mesh is not immediately ready. To wait for the mesh to be completely built,
you should use the `onReady` callback option.

#### Parameters

##### name

`string`

defines the name of the mesh

##### url

`string` \| \{ `data`: `Uint8Array`; `height`: `number`; `width`: `number`; \}

sets the URL of the height map image resource.

##### options?

defines the options used to create the mesh
- `width` sets the ground width size (positive float, default 10)
- `height` sets the ground height size (positive float, default 10)
- `subdivisions` sets the number of subdivision per side (positive integer, default 1)
- `minHeight` is the minimum altitude on the ground (float, default 0)
- `maxHeight` is the maximum altitude on the ground (float, default 1)
- `colorFilter` is the filter to apply to the image pixel colors to compute the height (optional Color3, default (0.3, 0.59, 0.11) )
- `alphaFilter` will filter any data where the alpha channel is below this value, defaults 0 (all data visible)
- `updatable` defines if the mesh must be flagged as updatable
- `onReady` is a javascript callback function that will be called once the mesh is just built (the height map download can last some time)
- `onError` is a javascript callback function that will be called if there is an error
- `passHeightBufferInCallback` a boolean that indicates if the calculated height data will be passed in the onReady callback. Useful if you need the height data for physics, for example.

###### alphaFilter?

`number`

###### colorFilter?

[`Color3`](../classes/Color3.md)

###### height?

`number`

###### maxHeight?

`number`

###### minHeight?

`number`

###### onError?

(`message?`, `exception?`) => `void`

###### onReady?

(`mesh`, `heightBuffer?`) => `void`

###### passHeightBufferInCallback?

`boolean`

###### subdivisions?

`number`

###### updatable?

`boolean`

###### width?

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`GroundMesh`](../classes/GroundMesh.md)

the ground mesh

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/height_map
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#ground-from-a-height-map

### CreateIcoSphere

> **CreateIcoSphere**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided
* The parameter `radius` sets the radius size (float) of the icosphere (default 1)
* You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value of `radius`)
* The parameter `subdivisions` sets the number of subdivisions (positive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size
* The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### flat?

`boolean`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### radius?

`number`

###### radiusX?

`number`

###### radiusY?

`number`

###### radiusZ?

`number`

###### sideOrientation?

`number`

###### subdivisions?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the icosahedron mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra#icosphere

### CreateLathe

> **CreateLathe**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates lathe mesh.
The lathe is a shape with a symmetry axis : a 2D model shape is rotated around this axis to design the lathe
* The parameter `shape` is a required array of successive Vector3. This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be rotated around the Y axis. It's usually a 2D shape, so the Vector3 z coordinates are often set to zero
* The parameter `radius` (positive float, default 1) is the radius value of the lathe
* The parameter `tessellation` (positive integer, default 64) is the side number of the lathe
* The parameter `clip` (positive integer, default 0) is the number of sides to not create without effecting the general shape of the sides
* The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape
* The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc"
* The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### arc?

`number`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### cap?

`number`

###### clip?

`number`

###### closed?

`boolean`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### invertUV?

`boolean`

###### radius?

`number`

###### shape

[`Vector3`](../classes/Vector3.md)[]

###### sideOrientation?

`number`

###### tessellation?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the lathe mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#lathe

### CreateLines

> **CreateLines**: (`name`, `options`, `scene`) => [`LinesMesh`](../classes/LinesMesh.md)

Creates a line mesh
A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter
* Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function
* The parameter `points` is an array successive Vector3
* The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#lines-and-dashedlines
* The optional parameter `colors` is an array of successive Color4, one per line point
* The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need alpha blending (faster)
* The optional parameter `material` is the material to use to draw the lines if provided. If not, a default material will be created
* When updating an instance, remember that only point positions can change, not the number of points
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the new line system

##### options

defines the options used to create the line system

###### colors?

[`Color4`](../classes/Color4.md)[]

###### instance?

[`Nullable`](../type-aliases/Nullable.md)\<[`LinesMesh`](../classes/LinesMesh.md)\>

###### material?

[`Material`](../classes/Material.md)

###### points

[`Vector3`](../classes/Vector3.md)[]

###### updatable?

`boolean`

###### useVertexAlpha?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`LinesMesh`](../classes/LinesMesh.md)

a new line mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#lines

### CreateLineSystem

> **CreateLineSystem**: (`name`, `options`, `scene`) => [`LinesMesh`](../classes/LinesMesh.md)

Creates a line system mesh. A line system is a pool of many lines gathered in a single mesh
* A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter
* Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function
* The parameter `lines` is an array of lines, each line being an array of successive Vector3
* The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter
* The optional parameter `colors` is an array of line colors, each line colors being an array of successive Color4, one per line point
* The optional parameter `useVertexAlpha` is to be set to `false` (default `true`) when you don't need the alpha blending (faster)
* The optional parameter `material` is the material to use to draw the lines if provided. If not, a default material will be created
* Updating a simple Line mesh, you just need to update every line in the `lines` array : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#lines-and-dashedlines
* When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the new line system

##### options

defines the options used to create the line system

###### colors?

[`Nullable`](../type-aliases/Nullable.md)\<[`Color4`](../classes/Color4.md)[][]\>

###### instance?

[`Nullable`](../type-aliases/Nullable.md)\<[`LinesMesh`](../classes/LinesMesh.md)\>

###### lines

[`Vector3`](../classes/Vector3.md)[][]

###### material?

[`Material`](../classes/Material.md)

###### updatable?

`boolean`

###### useVertexAlpha?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`LinesMesh`](../classes/LinesMesh.md)

a new line system mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#line-system

### CreatePlane

> **CreatePlane**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a plane mesh
* The parameter `size` sets the size (float) of both sides of the plane at once (default 1)
* You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value of `size`)
* The parameter `sourcePlane` is a Plane instance. It builds a mesh plane from a Math plane
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### height?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### sourcePlane?

[`Plane`](../classes/Plane.md)

###### updatable?

`boolean`

###### width?

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the plane mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#plane

### CreatePolygon

> **CreatePolygon**: (`name`, `options`, `scene`, `earcutInjection`) => [`Mesh`](../classes/Mesh.md)

Creates a polygon mesh
The polygon's shape will depend on the input parameters and is constructed parallel to a ground mesh
* The parameter `shape` is a required array of successive Vector3 representing the corners of the polygon in th XoZ plane, that is y = 0 for all vectors
* You can set the mesh side orientation with the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4)
* Remember you can only change the shape positions, not their number when updating a polygon

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### depth?

`number`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### holes?

[`Vector3`](../classes/Vector3.md)[][]

###### shape

[`Vector3`](../classes/Vector3.md)[]

###### sideOrientation?

`number`

###### smoothingThreshold?

`number`

###### updatable?

`boolean`

###### wrap?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

##### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

#### Returns

[`Mesh`](../classes/Mesh.md)

the polygon mesh

### CreatePolyhedron

> **CreatePolyhedron**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a polyhedron mesh
* The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial to choose the wanted type
* The parameter `size` (positive float, default 1) sets the polygon size
* You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value)
* You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overrides the parameter `type`
* A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron
* You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` (Color4, default `(1, 1, 1, 1)`) and faceUV (Vector4, default `(0, 0, 1, 1)`)
* To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace
* The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### custom?

`any`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### flat?

`boolean`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### sideOrientation?

`number`

###### size?

`number`

###### sizeX?

`number`

###### sizeY?

`number`

###### sizeZ?

`number`

###### type?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the polyhedron mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/polyhedra

### CreateRibbon

> **CreateRibbon**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a ribbon mesh. The ribbon is a parametric shape.  It has no predefined shape. Its final shape will depend on the input parameters
* The parameter `pathArray` is a required array of paths, what are each an array of successive Vector3. The pathArray parameter depicts the ribbon geometry
* The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array
* The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array
* The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path
* It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11
* The optional parameter `instance` is an instance of an existing Ribbon object to be updated with the passed `pathArray` parameter : https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#ribbon
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
* The parameter `uvs` is an optional flat array of `Vector2` to update/set each ribbon vertex with its own custom UV values instead of the computed ones
* The parameters `colors` is an optional flat array of `Color4` to set/update each ribbon vertex with its own custom color values
* Note that if you use the parameters `uvs` or `colors`, the passed arrays must be populated with the right number of elements, it is to say the number of ribbon vertices. Remember that if you set `closePath` to `true`, there's one extra vertex per path in the geometry
* Moreover, you can use the parameter `color` with `instance` (to update the ribbon), only if you previously used it at creation time
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### closeArray?

`boolean`

###### closePath?

`boolean`

###### colors?

[`Color4`](../classes/Color4.md)[]

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### instance?

[`Mesh`](../classes/Mesh.md)

###### invertUV?

`boolean`

###### offset?

`number`

###### pathArray

[`Vector3`](../classes/Vector3.md)[][]

###### sideOrientation?

`number`

###### updatable?

`boolean`

###### uvs?

[`Vector2`](../classes/Vector2.md)[]

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the ribbon mesh

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param/ribbon_extra
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param

### CreateSphere

> **CreateSphere**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a sphere mesh
* The parameter `diameter` sets the diameter size (float) of the sphere (default 1)
* You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value of `diameter`)
* The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32)
* You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio
* You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude)
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### arc?

`number`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### diameter?

`number`

###### diameterX?

`number`

###### diameterY?

`number`

###### diameterZ?

`number`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### segments?

`number`

###### sideOrientation?

`number`

###### slice?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the sphere mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#sphere

### CreateText

> **CreateText**: (`name`, `text`, `fontData`, `options`, `scene`, `earcutInjection`) => [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](../classes/Mesh.md)\>

Create a text mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### text

`string`

defines the text to use to build the mesh

##### fontData

[`IFontData`](../interfaces/IFontData.md)

defines the font data (can be generated with http://gero3.github.io/facetype.js/)

##### options?

defines options used to create the mesh

###### depth?

`number`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### perLetterFaceColors?

(`letterIndex`) => [`Color4`](../classes/Color4.md)[]

###### perLetterFaceUV?

(`letterIndex`) => [`Vector4`](../classes/Vector4.md)[]

###### resolution?

`number`

###### sideOrientation?

`number`

###### size?

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

##### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](../classes/Mesh.md)\>

a new Mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/text

### CreateTiledBox

> **CreateTiledBox**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a tiled box mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

an object used to set the following optional parameters for the tiled box, required but can be empty
* pattern sets the rotation or reflection pattern for the tiles,
* size of the box
* width of the box, overwrites size
* height of the box, overwrites size
* depth of the box, overwrites size
* tileSize sets the size of a tile
* tileWidth sets the tile width and overwrites tileSize
* tileHeight sets the tile width and overwrites tileSize
* faceUV an array of 6 Vector4 elements used to set different images to each box side
* faceColors an array of 6 Color3 elements used to set different colors to each box side
* alignHorizontal places whole tiles aligned to the center, left or right of a row
* alignVertical places whole tiles aligned to the center, left or right of a column
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE

###### alignHorizontal?

`number`

###### alignVertical?

`number`

###### depth?

`number`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### height?

`number`

###### pattern?

`number`

###### sideOrientation?

`number`

###### tileHeight?

`number`

###### tileSize?

`number`

###### tileWidth?

`number`

###### updatable?

`boolean`

###### width?

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the box mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/tiled_box

### CreateTiledGround

> **CreateTiledGround**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a tiled ground mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh
- `xmin` ground minimum X coordinate (float, default -1)
- `zmin` ground minimum Z coordinate (float, default -1)
- `xmax` ground maximum X coordinate (float, default 1)
- `zmax` ground maximum Z coordinate (float, default 1)
- `subdivisions` a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the numbers of subdivisions on the ground width and height. Each subdivision is called a tile
- `subdivisions.w` positive integer, default 6
- `subdivisions.h` positive integer, default 6
- `precision` a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the numbers of subdivisions on the ground width and height of each tile
- `precision.w` positive integer, default 2
- `precision.h` positive integer, default 2
- `updatable` boolean, default false, true if the mesh must be flagged as updatable

###### precision?

\{ `h`: `number`; `w`: `number`; \}

###### precision.h

`number`

###### precision.w

`number`

###### subdivisions?

\{ `h`: `number`; `w`: `number`; \}

###### subdivisions.h

`number`

###### subdivisions.w

`number`

###### updatable?

`boolean`

###### xmax

`number`

###### xmin

`number`

###### zmax

`number`

###### zmin

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the tiled ground mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#tiled-ground

### CreateTiledPlane

> **CreateTiledPlane**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a tiled plane mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

an object used to set the following optional parameters for the tiled plane, required but can be empty
* pattern a limited pattern arrangement depending on the number
* size of the box
* width of the box, overwrites size
* height of the box, overwrites size
* tileSize sets the width, height and depth of the tile to the value of size, optional default 1
* tileWidth sets the width (x direction) of the tile, overwrites the width set by size, optional, default size
* tileHeight sets the height (y direction) of the tile, overwrites the height set by size, optional, default size
* sideOrientation optional and takes the values : Mesh.FRONTSIDE (default), Mesh.BACKSIDE or Mesh.DOUBLESIDE
* alignHorizontal places whole tiles aligned to the center, left or right of a row
* alignVertical places whole tiles aligned to the center, left or right of a column
* frontUvs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the front side, optional, default vector4 (0, 0, 1, 1)
* backUVs only usable when you create a double-sided mesh, used to choose what parts of the texture image to crop and apply on the back side, optional, default vector4 (0, 0, 1, 1)

###### alignHorizontal?

`number`

###### alignVertical?

`number`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### height?

`number`

###### pattern?

`number`

###### sideOrientation?

`number`

###### size?

`number`

###### tileHeight?

`number`

###### tileSize?

`number`

###### tileWidth?

`number`

###### updatable?

`boolean`

###### width?

`number`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the box mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/tiled_plane

### CreateTorus

> **CreateTorus**: (`name`, `options`, `scene?`) => [`Mesh`](../classes/Mesh.md)

Creates a torus mesh
* The parameter `diameter` sets the diameter size (float) of the torus (default 1)
* The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5)
* The parameter `tessellation` sets the number of torus sides (positive integer, default 16)
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### diameter?

`number`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### sideOrientation?

`number`

###### tessellation?

`number`

###### thickness?

`number`

###### updatable?

`boolean`

##### scene?

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the torus mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#torus

### CreateTorusKnot

> **CreateTorusKnot**: (`name`, `options`, `scene?`) => [`Mesh`](../classes/Mesh.md)

Creates a torus knot mesh
* The parameter `radius` sets the global radius size (float) of the torus knot (default 2)
* The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32)
* The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32)
* The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3)
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### p?

`number`

###### q?

`number`

###### radialSegments?

`number`

###### radius?

`number`

###### sideOrientation?

`number`

###### tube?

`number`

###### tubularSegments?

`number`

###### updatable?

`boolean`

##### scene?

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the torus knot mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#torus-knot

### CreateTube

> **CreateTube**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a tube mesh.
The tube is a parametric shape. It has no predefined shape. Its final shape will depend on the input parameters
* The parameter `path` is a required array of successive Vector3. It is the curve used as the axis of the tube
* The parameter `radius` (positive float, default 1) sets the tube radius size
* The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface
* The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overrides the parameter `radius`
* This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path. It must return a radius value (positive float)
* The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc
* The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.Mesh.NO_CAP (default), BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL
* The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter. The `path`Array HAS to have the SAME number of points as the previous one: https://doc.babylonjs.com/features/featuresDeepDive/mesh/dynamicMeshMorph#tube
* You can also set the mesh side orientation with the values : BABYLON.Mesh.FRONTSIDE (default), BABYLON.Mesh.BACKSIDE or BABYLON.Mesh.DOUBLESIDE
* If you create a double-sided mesh, you can choose what parts of the texture image to crop and stick respectively on the front and the back sides with the parameters `frontUVs` and `backUVs` (Vector4). Detail here : https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#side-orientation
* The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture
* The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created. The NUMBER of points CAN'T CHANGE, only their positions.

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### arc?

`number`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### cap?

`number`

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### instance?

[`Mesh`](../classes/Mesh.md)

###### invertUV?

`boolean`

###### path

[`Vector3`](../classes/Vector3.md)[]

###### radius?

`number`

###### radiusFunction?

(`i`, `distance`) => `number`

###### sideOrientation?

`number`

###### tessellation?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the tube mesh

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#tube

### ExtrudePolygon

> **ExtrudePolygon**: (`name`, `options`, `scene`, `earcutInjection`) => [`Mesh`](../classes/Mesh.md)

Creates an extruded polygon mesh, with depth in the Y direction.
* You can set different colors and different images to the top, bottom and extruded side by using the parameters `faceColors` (an array of 3 Color3 elements) and `faceUV` (an array of 3 Vector4 elements)

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### depth?

`number`

###### faceColors?

[`Color4`](../classes/Color4.md)[]

###### faceUV?

[`Vector4`](../classes/Vector4.md)[]

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### holes?

[`Vector3`](../classes/Vector3.md)[][]

###### shape

[`Vector3`](../classes/Vector3.md)[]

###### sideOrientation?

`number`

###### updatable?

`boolean`

###### wrap?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

##### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

#### Returns

[`Mesh`](../classes/Mesh.md)

the polygon mesh

#### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/texturePerBoxFace

### ExtrudeShape

> **ExtrudeShape**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

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

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### adjustFrame?

`boolean`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### cap?

`number`

###### capFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`shapePath`) => [`Vector3`](../classes/Vector3.md)[]\>

###### closePath?

`boolean`

###### closeShape?

`boolean`

###### firstNormal?

[`Vector3`](../classes/Vector3.md)

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### instance?

[`Mesh`](../classes/Mesh.md)

###### invertUV?

`boolean`

###### path

[`Vector3`](../classes/Vector3.md)[]

###### rotation?

`number`

###### scale?

`number`

###### shape

[`Vector3`](../classes/Vector3.md)[]

###### sideOrientation?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the extruded shape mesh

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-shapes

### ExtrudeShapeCustom

> **ExtrudeShapeCustom**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

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

#### Parameters

##### name

`string`

defines the name of the mesh

##### options

defines the options used to create the mesh

###### adjustFrame?

`boolean`

###### backUVs?

[`Vector4`](../classes/Vector4.md)

###### cap?

`number`

###### capFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`shapePath`) => [`Vector3`](../classes/Vector3.md)[]\>

###### closePath?

`boolean`

###### closeShape?

`boolean`

###### firstNormal?

[`Vector3`](../classes/Vector3.md)

###### frontUVs?

[`Vector4`](../classes/Vector4.md)

###### instance?

[`Mesh`](../classes/Mesh.md)

###### invertUV?

`boolean`

###### path

[`Vector3`](../classes/Vector3.md)[]

###### ribbonCloseArray?

`boolean`

###### ribbonClosePath?

`boolean`

###### rotationFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`i`, `distance`) => `number`\>

###### scaleFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`i`, `distance`) => `number`\>

###### scaleVectorFunction?

[`Nullable`](../type-aliases/Nullable.md)\<(`i`, `distance`) => [`Vector3`](../classes/Vector3.md)\>

###### shape

[`Vector3`](../classes/Vector3.md)[]

###### sideOrientation?

`number`

###### updatable?

`boolean`

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

#### Returns

[`Mesh`](../classes/Mesh.md)

the custom extruded shape mesh

#### See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#custom-extruded-shapes
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#extruded-shapes
