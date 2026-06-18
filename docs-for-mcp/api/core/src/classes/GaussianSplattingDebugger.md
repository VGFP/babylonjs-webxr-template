[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GaussianSplattingDebugger

# Class: GaussianSplattingDebugger

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L35)

Manages debug rendering options across a set of Gaussian splat meshes.
Create one instance, add meshes via addMesh(), then set options to apply
them to every registered mesh simultaneously.

All options default to their "off" states so there is no rendering cost
until a feature is explicitly enabled.

## Example

```ts
// Global options — applied to every registered mesh
const gsDebugger = new GaussianSplattingDebugger();
gsDebugger.addMesh(mesh1);
gsDebugger.addMesh(compoundMesh); // compound mesh with multiple parts
gsDebugger.clippingBox = { min: new Vector3(-2, -2, -2), max: new Vector3(2, 2, 2) };
gsDebugger.shOrder1 = false;

// Per-part override — saturate opacity on part 0 of the compound mesh only,
// leaving all other parts (and mesh1) unaffected
gsDebugger.setPartOptions(compoundMesh, 0, { opacitySaturate: true });
// Later, restore part 0 to the global setting
gsDebugger.clearPartOptions(compoundMesh, 0);
```

## Constructors

### Constructor

> **new GaussianSplattingDebugger**(): `GaussianSplattingDebugger`

#### Returns

`GaussianSplattingDebugger`

## Accessors

### clippingBox

#### Get Signature

> **get** **clippingBox**(): [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: [`Vector3`](Vector3.md); `min`: [`Vector3`](Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L152)

World-space axis-aligned clipping box. Splats outside are not rendered.
Set to null to disable.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: [`Vector3`](Vector3.md); `min`: [`Vector3`](Vector3.md); \}\>

#### Set Signature

> **set** **clippingBox**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L155)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: [`Vector3`](Vector3.md); `min`: [`Vector3`](Vector3.md); \}\>

##### Returns

`void`

***

### opacityCulling

#### Get Signature

> **get** **opacityCulling**(): [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:166](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L166)

Opacity culling range [0..1]. Splats outside this range are not rendered.
Set to null to disable.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

#### Set Signature

> **set** **opacityCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L169)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

##### Returns

`void`

***

### opacitySaturate

#### Get Signature

> **get** **opacitySaturate**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L207)

When true, replaces the Gaussian spatial falloff with a flat uniform opacity,
showing each splat as a solid disk.

##### Returns

`boolean`

#### Set Signature

> **set** **opacitySaturate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L210)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### opacityScale

#### Get Signature

> **get** **opacityScale**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L193)

Scalar multiplier applied to every splat's opacity. 1.0 = no change.

##### Returns

`number`

#### Set Signature

> **set** **opacityScale**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L196)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shDc

#### Get Signature

> **get** **shDc**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L218)

Include the DC (base) color from colorsTexture. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shDc**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L221)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shOrder1

#### Get Signature

> **get** **shOrder1**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L229)

Include SH band 1 contribution. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shOrder1**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L232)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shOrder2

#### Get Signature

> **get** **shOrder2**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L240)

Include SH band 2 contribution. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shOrder2**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L243)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shOrder3

#### Get Signature

> **get** **shOrder3**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L251)

Include SH band 3 contribution. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shOrder3**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L254)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shOrder4

#### Get Signature

> **get** **shOrder4**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L262)

Include SH band 4 contribution. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **shOrder4**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L265)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### sizeCulling

#### Get Signature

> **get** **sizeCulling**(): [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L182)

Size culling range. Size is pow(|det(Σ)|, 1/6) of the 3D covariance matrix,
equal to the geometric mean of the principal radii. Splats outside this range are not rendered.
Use GaussianSplattingDebugger.GetSplatSizeRange(mesh) to find an asset's range.
Set to null to disable.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

#### Set Signature

> **set** **sizeCulling**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L185)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

##### Returns

`void`

## Methods

### addMesh()

> **addMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L62)

Adds a mesh to the debugger, attaching a debug plugin to its material.
The mesh must already have a GaussianSplattingMaterial assigned (i.e., data
must have been loaded at least once). Current option values are applied immediately.
The mesh is automatically unregistered if it is disposed.

#### Parameters

##### mesh

`GaussianSplattingMeshBase`

The mesh to register.

#### Returns

`void`

***

### clearPartOptions()

> **clearPartOptions**(`mesh`, `partIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:295](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L295)

Clears all per-part debug overrides for a specific part, falling back to global settings.

#### Parameters

##### mesh

`GaussianSplattingMeshBase`

The compound mesh.

##### partIndex

`number`

The zero-based part index.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L109)

Disposes all debug plugins and clears the mesh list.

#### Returns

`void`

***

### removeMesh()

> **removeMesh**(`mesh`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L92)

Removes a mesh and disposes its debug plugin.

#### Parameters

##### mesh

`GaussianSplattingMeshBase`

The mesh to unregister.

#### Returns

`void`

***

### setPartOptions()

> **setPartOptions**(`mesh`, `partIndex`, `options`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L282)

Sets per-part debug overrides for a specific part of a compound mesh.
The mesh must already be registered via addMesh(). Logs an error if the mesh
is not compound (partCount is 0).

#### Parameters

##### mesh

`GaussianSplattingMeshBase`

The compound mesh.

##### partIndex

`number`

The zero-based part index.

##### options

`Partial`\<[`IGaussianSplattingDebugOptions`](../interfaces/IGaussianSplattingDebugOptions.md)\>

Partial set of debug options to override for this part.

#### Returns

`void`

***

### GetSplatSizeRange()

> `static` **GetSplatSizeRange**(`mesh`): [`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingDebugger.pure.ts#L129)

Returns the min/max size range of splats in a mesh.
Convenience wrapper for GaussianSplattingMeshBase.splatSizeRange.

#### Parameters

##### mesh

`GaussianSplattingMeshBase`

The mesh to query.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<\{ `max`: `number`; `min`: `number`; \}\>

the splat size range, or null if not yet computed.
