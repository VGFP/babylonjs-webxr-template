[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateGround

# Function: CreateGround()

> **CreateGround**(`name`, `options?`, `scene?`): [`GroundMesh`](../classes/GroundMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts:318](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts#L318)

Creates a ground mesh

## Parameters

### name

`string`

defines the name of the mesh

### options?

defines the options used to create the mesh
- `width` set the width size (float, default 1)
- `height` set the height size (float, default 1)
- `subdivisions` sets the number of subdivision per side (default 1)
- `subdivisionsX` sets the number of subdivision on the X axis (overrides subdivisions)
- `subdivisionsY` sets the number of subdivision on the Y axis (overrides subdivisions)
- `updatable` defines if the mesh must be flagged as updatable (default false)

#### height?

`number`

#### subdivisions?

`number`

#### subdivisionsX?

`number`

#### subdivisionsY?

`number`

#### updatable?

`boolean`

#### width?

`number`

### scene?

[`Scene`](../classes/Scene.md)

defines the hosting scene

## Returns

[`GroundMesh`](../classes/GroundMesh.md)

the ground mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#ground
