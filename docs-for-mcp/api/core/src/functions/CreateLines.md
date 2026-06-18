[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateLines

# Function: CreateLines()

> **CreateLines**(`name`, `options`, `scene?`): [`LinesMesh`](../classes/LinesMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/linesBuilder.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/linesBuilder.pure.ts#L196)

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

## Parameters

### name

`string`

defines the name of the new line system

### options

defines the options used to create the line system

#### colors?

[`Color4`](../classes/Color4.md)[]

#### instance?

[`Nullable`](../type-aliases/Nullable.md)\<[`LinesMesh`](../classes/LinesMesh.md)\>

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

a new line mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/param#lines
