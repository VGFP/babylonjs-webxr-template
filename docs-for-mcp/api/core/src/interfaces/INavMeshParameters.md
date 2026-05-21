[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INavMeshParameters

# Interface: INavMeshParameters

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:411](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L411)

Configures the navigation mesh creation

## Properties

### borderSize?

> `optional` **borderSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:494](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L494)

The size of the non-navigable border around the heightfield.

***

### ch

> **ch**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L420)

The y-axis cell size to use for fields. [Limit: > 0] [Units: wu]

***

### cs

> **cs**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:415](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L415)

The xz-plane cell size to use for fields. [Limit: > 0] [Units: wu]

***

### detailSampleDist

> **detailSampleDist**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:476](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L476)

Sets the sampling distance to use when generating the detail mesh.
(For height detail only.) [Limits: 0 or >= 0.9] [Units: wu]

***

### detailSampleMaxError

> **detailSampleMaxError**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:482](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L482)

The maximum distance the detail mesh surface should deviate from heightfield
data. (For height detail only.) [Limit: >=0] [Units: wu]

***

### maxEdgeLen

> **maxEdgeLen**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L447)

The maximum allowed length for contour edges along the border of the mesh. [Limit: >=0] [Units: vx]

***

### maxSimplificationError

> **maxSimplificationError**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:453](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L453)

The maximum distance a simplified contour's border edges should deviate
the original raw contour. [Limit: >=0] [Units: vx]

***

### maxVertsPerPoly

> **maxVertsPerPoly**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:470](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L470)

The maximum number of vertices allowed for polygons generated during the
contour to polygon conversion process. [Limit: >= 3]

***

### mergeRegionArea

> **mergeRegionArea**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:464](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L464)

Any regions with a span count smaller than this value will, if possible,
be merged with larger regions. [Limit: >=0] [Units: vx]

***

### minRegionArea

> **minRegionArea**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:458](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L458)

The minimum number of cells allowed to form isolated island areas. [Limit: >=0] [Units: vx]

***

### tileSize?

> `optional` **tileSize?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:489](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L489)

If using obstacles, the navmesh must be subdivided internally by tiles.
This member defines the tile cube side length in world units.
If no obstacles are needed, leave it undefined or 0.

***

### walkableClimb

> **walkableClimb**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:436](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L436)

Maximum ledge height that is considered to still be traversable. [Limit: >=0] [Units: vx]

***

### walkableHeight

> **walkableHeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:431](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L431)

Minimum floor to 'ceiling' height that will still allow the floor area to
be considered walkable. [Limit: >= 3] [Units: vx]

***

### walkableRadius

> **walkableRadius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:442](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L442)

The distance to erode/shrink the walkable area of the heightfield away from
obstructions.  [Limit: >=0] [Units: vx]

***

### walkableSlopeAngle

> **walkableSlopeAngle**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L425)

The maximum slope that is considered walkable. [Limits: 0 <= value < 90] [Units: Degrees]
