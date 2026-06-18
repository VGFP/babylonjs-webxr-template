[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateGroundFromHeightMap

# Function: CreateGroundFromHeightMap()

> **CreateGroundFromHeightMap**(`name`, `url`, `options?`, `scene?`): [`GroundMesh`](../classes/GroundMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts#L399)

Creates a ground mesh from a height map. The height map download can take some frames,
so the mesh is not immediately ready. To wait for the mesh to be completely built,
you should use the `onReady` callback option.

## Parameters

### name

`string`

defines the name of the mesh

### url

`string` \| \{ `data`: `Uint8Array`; `height`: `number`; `width`: `number`; \}

sets the URL of the height map image resource.

### options?

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

#### alphaFilter?

`number`

#### colorFilter?

[`Color3`](../classes/Color3.md)

#### height?

`number`

#### maxHeight?

`number`

#### minHeight?

`number`

#### onError?

(`message?`, `exception?`) => `void`

#### onReady?

(`mesh`, `heightBuffer?`) => `void`

#### passHeightBufferInCallback?

`boolean`

#### subdivisions?

`number`

#### updatable?

`boolean`

#### width?

`number`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

## Returns

[`GroundMesh`](../classes/GroundMesh.md)

the ground mesh

## See

 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/height_map
 - https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set#ground-from-a-height-map
