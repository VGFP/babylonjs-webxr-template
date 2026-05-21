[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateLineSystem

# Function: CreateLineSystem()

> **CreateLineSystem**(`name`, `options`, `scene?`): [`LinesMesh`](../classes/LinesMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/linesBuilder.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Meshes/Builders/linesBuilder.ts#L124)

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

## Parameters

### name

`string`

defines the name of the new line system

### options

defines the options used to create the line system

#### colors?

[`Nullable`](../type-aliases/Nullable.md)\<[`Color4`](../classes/Color4.md)[][]\>

#### instance?

[`Nullable`](../type-aliases/Nullable.md)\<[`LinesMesh`](../classes/LinesMesh.md)\>

#### lines

[`Vector3`](../classes/Vector3.md)[][]

#### material?

[`Material`](../classes/Material.md)

#### updatable?

`boolean`

#### useVertexAlpha?

`boolean`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`LinesMesh`](../classes/LinesMesh.md)

a new line system mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#line-system
