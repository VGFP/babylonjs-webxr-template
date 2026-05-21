[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateDashedLines

# Function: CreateDashedLines()

> **CreateDashedLines**(`name`, `options`, `scene?`): [`LinesMesh`](../classes/LinesMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/linesBuilder.ts:226](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/linesBuilder.ts#L226)

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

## Parameters

### name

`string`

defines the name of the mesh

### options

defines the options used to create the mesh

#### dashNb?

`number`

#### dashSize?

`number`

#### gapSize?

`number`

#### instance?

[`LinesMesh`](../classes/LinesMesh.md)

#### material?

[`Material`](../classes/Material.md)

#### points

[`Vector3`](../classes/Vector3.md)[]

#### updatable?

`boolean`

#### useVertexAlpha?

`boolean`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`LinesMesh`](../classes/LinesMesh.md)

the dashed line mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#dashed-lines
