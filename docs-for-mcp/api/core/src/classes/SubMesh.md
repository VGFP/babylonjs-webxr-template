[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SubMesh

# Class: SubMesh

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L28)

Defines a subdivision inside a mesh

## Implements

- [`ICullable`](../interfaces/ICullable.md)

## Constructors

### Constructor

> **new SubMesh**(`materialIndex`, `verticesStart`, `verticesCount`, `indexStart`, `indexCount`, `mesh`, `renderingMesh?`, `createBoundingBox?`, `addToMesh?`): `SubMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L197)

Creates a new submesh

#### Parameters

##### materialIndex

`number`

defines the material index to use

##### verticesStart

`number`

defines vertex index start

##### verticesCount

`number`

defines vertices count

##### indexStart

`number`

defines index start

##### indexCount

`number`

defines indices count

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the parent mesh

##### renderingMesh?

[`Mesh`](Mesh.md)

defines an optional rendering mesh

##### createBoundingBox?

`boolean` = `true`

defines if bounding box should be created for this submesh

##### addToMesh?

`boolean` = `true`

defines a boolean indicating that the submesh must be added to the mesh.subMeshes array (true by default)

#### Returns

`SubMesh`

## Properties

### indexCount

> **indexCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L207)

indices count

***

### indexStart

> **indexStart**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L205)

index start

***

### materialIndex

> **materialIndex**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L199)

the material index to use

***

### verticesCount

> **verticesCount**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L203)

vertices count

***

### verticesStart

> **verticesStart**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L201)

vertex index start

## Accessors

### effect

#### Get Signature

> **get** **effect**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L75)

Gets associated (main) effect (possibly the effect override if defined)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

***

### IsGlobal

#### Get Signature

> **get** **IsGlobal**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L236)

**`Ignorenaming`**

Returns true if this submesh covers the entire parent mesh

##### Returns

`boolean`

***

### materialDefines

#### Get Signature

> **get** **materialDefines**(): [`Nullable`](../type-aliases/Nullable.md)\<[`MaterialDefines`](MaterialDefines.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L37)

Gets material defines used by the effect associated to the sub mesh

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`MaterialDefines`](MaterialDefines.md)\>

#### Set Signature

> **set** **materialDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L45)

Sets material defines used by the effect associated to the sub mesh

##### Parameters

###### defines

[`Nullable`](../type-aliases/Nullable.md)\<[`MaterialDefines`](MaterialDefines.md)\>

##### Returns

`void`

## Methods

### canIntersects()

> **canIntersects**(`ray`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:475](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L475)

Checks if the submesh intersects with a ray

#### Parameters

##### ray

[`Ray`](Ray.md)

defines the ray to test

#### Returns

`boolean`

true is the passed ray intersects the submesh bounding box

***

### clone()

> **clone**(`newMesh`, `newRenderingMesh?`): `SubMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:702](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L702)

Creates a new submesh from the passed mesh

#### Parameters

##### newMesh

[`AbstractMesh`](AbstractMesh.md)

defines the new hosting mesh

##### newRenderingMesh?

[`Mesh`](Mesh.md)

defines an optional rendering mesh

#### Returns

`SubMesh`

the new submesh

***

### dispose()

> **dispose**(`immediate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:724](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L724)

Release associated resources

#### Parameters

##### immediate?

`boolean` = `false`

If true, the effect will be disposed immediately (false by default)

#### Returns

`void`

***

### getBoundingInfo()

> **getBoundingInfo**(): [`BoundingInfo`](BoundingInfo.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:244](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L244)

Returns the submesh BoundingInfo object

#### Returns

[`BoundingInfo`](BoundingInfo.md)

current bounding info (or mesh's one if the submesh is global)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:741](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L741)

Gets the class name

#### Returns

`string`

the string "SubMesh".

***

### getEffectiveMesh()

> **getEffectiveMesh**(): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:290](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L290)

Returns the effective mesh of the submesh

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the effective mesh (could be different from parent mesh)

***

### getMaterial()

> **getMaterial**(`getDefaultMaterial?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:301](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L301)

Returns the submesh material

#### Parameters

##### getDefaultMaterial?

`boolean` = `true`

Defines whether or not to get the default material if nothing has been defined.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

null or the current material

***

### getMesh()

> **getMesh**(): [`AbstractMesh`](AbstractMesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L266)

Returns the mesh of the current submesh

#### Returns

[`AbstractMesh`](AbstractMesh.md)

the parent mesh

***

### getRenderingMesh()

> **getRenderingMesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L274)

Returns the rendering mesh of the submesh

#### Returns

[`Mesh`](Mesh.md)

the rendering mesh (could be different from parent mesh)

***

### getReplacementMesh()

> **getReplacementMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:282](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L282)

Returns the replacement mesh of the submesh

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

the replacement mesh (could be different from parent mesh)

***

### intersects()

> **intersects**(`ray`, `positions`, `indices`, `fastCheck?`, `trianglePredicate?`): [`Nullable`](../type-aliases/Nullable.md)\<`IntersectionInfo`\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:493](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L493)

Intersects current submesh with a ray

#### Parameters

##### ray

[`Ray`](Ray.md)

defines the ray to test

##### positions

[`Vector3`](Vector3.md)[]

defines mesh's positions array

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines mesh's indices array

##### fastCheck?

`boolean`

defines if the first intersection will be used (and not the closest)

##### trianglePredicate?

[`TrianglePickingPredicate`](../type-aliases/TrianglePickingPredicate.md)

defines an optional predicate used to select faces when a mesh intersection is detected

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IntersectionInfo`\>

intersection info or null if no intersection

***

### isCompletelyInFrustum()

> **isCompletelyInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L414)

True is the submesh bounding box is completely inside the frustum defined by the passed array of planes

#### Parameters

##### frustumPlanes

[`Plane`](Plane.md)[]

defines the frustum planes

#### Returns

`boolean`

true if the submesh is inside the frustum

#### Implementation of

[`ICullable`](../interfaces/ICullable.md).[`isCompletelyInFrustum`](../interfaces/ICullable.md#iscompletelyinfrustum)

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:400](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L400)

True is the submesh bounding box intersects the frustum defined by the passed array of planes.

#### Parameters

##### frustumPlanes

[`Plane`](Plane.md)[]

defines the frustum planes

#### Returns

`boolean`

true if the submesh is intersecting with the frustum

#### Implementation of

[`ICullable`](../interfaces/ICullable.md).[`isInFrustum`](../interfaces/ICullable.md#isinfrustum)

***

### projectToRef()

> **projectToRef**(`vector`, `positions`, `indices`, `ref`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.project.types.ts:20](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.project.types.ts#L20)

Projects a point on this submesh and stores the result in "ref"

#### Parameters

##### vector

[`Vector3`](Vector3.md)

point to project

##### positions

[`Vector3`](Vector3.md)[]

defines mesh's positions array

##### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

defines mesh's indices array

##### ref

[`Vector3`](Vector3.md)

vector that will store the result

#### Returns

`number`

distance from the point and the submesh, or -1 if the mesh rendering mode doesn't support projections

***

### refreshBoundingInfo()

> **refreshBoundingInfo**(`data?`): `SubMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:331](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L331)

Sets a new updated BoundingInfo object to the submesh

#### Parameters

##### data?

[`Nullable`](../type-aliases/Nullable.md)\<[`FloatArray`](../type-aliases/FloatArray.md)\> = `null`

defines an optional position array to use to determine the bounding info

#### Returns

`SubMesh`

the SubMesh

***

### render()

> **render**(`enableAlphaMode`): `SubMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:428](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L428)

Renders the submesh

#### Parameters

##### enableAlphaMode

`boolean`

defines if alpha needs to be used

#### Returns

`SubMesh`

the submesh

***

### resetDrawCache()

> **resetDrawCache**(`passId?`, `immediate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L120)

Resets the draw wrappers cache

#### Parameters

##### passId?

`number`

If provided, releases only the draw wrapper corresponding to this render pass id

##### immediate?

`boolean` = `false`

If true, the draw wrapper will dispose the effect immediately (false by default)

#### Returns

`void`

***

### setBoundingInfo()

> **setBoundingInfo**(`boundingInfo`): `SubMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L257)

Sets the submesh BoundingInfo

#### Parameters

##### boundingInfo

[`BoundingInfo`](BoundingInfo.md)

defines the new bounding info to use

#### Returns

`SubMesh`

the SubMesh

***

### setEffect()

> **setEffect**(`effect`, `defines?`, `materialContext?`, `resetContext?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L103)

Sets associated effect (effect used to render this submesh)

#### Parameters

##### effect

[`Nullable`](../type-aliases/Nullable.md)\<[`Effect`](Effect.md)\>

defines the effect to associate with

##### defines?

[`Nullable`](../type-aliases/Nullable.md)\<`string` \| [`MaterialDefines`](MaterialDefines.md)\> = `null`

defines the set of defines used to compile this effect

##### materialContext?

`IMaterialContext`

material context associated to the effect

##### resetContext?

`boolean` = `true`

true to reset the draw context

#### Returns

`void`

***

### updateBoundingInfo()

> **updateBoundingInfo**(`world`): `SubMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:382](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L382)

Updates the submesh BoundingInfo

#### Parameters

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the world matrix to use to update the bounding info

#### Returns

`SubMesh`

the submesh

***

### AddToMesh()

> `static` **AddToMesh**(`materialIndex`, `verticesStart`, `verticesCount`, `indexStart`, `indexCount`, `mesh`, `renderingMesh?`, `createBoundingBox?`): `SubMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:172](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L172)

Add a new submesh to a mesh

#### Parameters

##### materialIndex

`number`

defines the material index to use

##### verticesStart

`number`

defines vertex index start

##### verticesCount

`number`

defines vertices count

##### indexStart

`number`

defines index start

##### indexCount

`number`

defines indices count

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the parent mesh

##### renderingMesh?

[`Mesh`](Mesh.md)

defines an optional rendering mesh

##### createBoundingBox?

`boolean` = `true`

defines if bounding box should be created for this submesh

#### Returns

`SubMesh`

the new submesh

***

### CreateFromIndices()

> `static` **CreateFromIndices**(`materialIndex`, `startIndex`, `indexCount`, `mesh`, `renderingMesh?`, `createBoundingBox?`): `SubMesh`

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/subMesh.pure.ts:756](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/subMesh.pure.ts#L756)

Creates a new submesh from indices data

#### Parameters

##### materialIndex

`number`

the index of the main mesh material

##### startIndex

`number`

the index where to start the copy in the mesh indices array

##### indexCount

`number`

the number of indices to copy then from the startIndex

##### mesh

[`AbstractMesh`](AbstractMesh.md)

the main mesh to create the submesh from

##### renderingMesh?

[`Mesh`](Mesh.md)

the optional rendering mesh

##### createBoundingBox?

`boolean` = `true`

defines if bounding box should be created for this submesh

#### Returns

`SubMesh`

a new submesh
