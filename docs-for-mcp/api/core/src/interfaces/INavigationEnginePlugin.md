[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INavigationEnginePlugin

# Interface: INavigationEnginePlugin

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:10](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L10)

Navigation plugin interface to add navigation constrained by a navigation mesh

## Properties

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L14)

plugin name

## Methods

### addBoxObstacle()

> **addBoxObstacle**(`position`, `extent`, `angle`): [`Nullable`](../type-aliases/Nullable.md)\<[`IObstacle`](../type-aliases/IObstacle.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:186](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L186)

Creates an oriented box obstacle and add it to the navigation

#### Parameters

##### position

[`Vector3`](../classes/Vector3.md)

world position

##### extent

[`Vector3`](../classes/Vector3.md)

box size

##### angle

`number`

angle in radians of the box orientation on Y axis

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IObstacle`](../type-aliases/IObstacle.md)\>

the obstacle freshly created

***

### addCylinderObstacle()

> **addCylinderObstacle**(`position`, `radius`, `height`): [`Nullable`](../type-aliases/Nullable.md)\<[`IObstacle`](../type-aliases/IObstacle.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L177)

Creates a cylinder obstacle and add it to the navigation

#### Parameters

##### position

[`Vector3`](../classes/Vector3.md)

world position

##### radius

`number`

cylinder radius

##### height

`number`

cylinder height

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IObstacle`](../type-aliases/IObstacle.md)\>

the obstacle freshly created

***

### buildFromNavmeshData()

> **buildFromNavmeshData**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L127)

build the navmesh from a previously saved state using getNavmeshData

#### Parameters

##### data

`Uint8Array`

the Uint8Array returned by getNavmeshData

#### Returns

`void`

***

### computePath()

> **computePath**(`start`, `end`): [`Vector3`](../classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L83)

Compute a navigation path from start to end. Returns an empty array if no path can be computed.
Path is straight.

#### Parameters

##### start

[`Vector3`](../classes/Vector3.md)

world position

##### end

[`Vector3`](../classes/Vector3.md)

world position

#### Returns

[`Vector3`](../classes/Vector3.md)[]

array containing world position composing the path

***

### computePathSmooth()

> **computePathSmooth**(`start`, `end`): [`Vector3`](../classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:92](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L92)

Compute a navigation path from start to end. Returns an empty array if no path can be computed.
Path follows navigation mesh geometry.

#### Parameters

##### start

[`Vector3`](../classes/Vector3.md)

world position

##### end

[`Vector3`](../classes/Vector3.md)

world position

#### Returns

[`Vector3`](../classes/Vector3.md)[]

array containing world position composing the path

***

### createCrowd()

> **createCrowd**(`maxAgents`, `maxAgentRadius`, `scene`): [`ICrowd`](ICrowd.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L107)

Create a new Crowd so you can add agents

#### Parameters

##### maxAgents

`number`

the maximum agent count in the crowd

##### maxAgentRadius

`number`

the maximum radius an agent can have

##### scene

[`Scene`](../classes/Scene.md)

to attach the crowd to

#### Returns

[`ICrowd`](ICrowd.md)

the crowd you can add agents to

***

### createDebugNavMesh()

> **createDebugNavMesh**(`scene`): [`Mesh`](../classes/Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L28)

Create a navigation mesh debug mesh

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

is where the mesh will be added

#### Returns

[`Mesh`](../classes/Mesh.md)

debug display mesh

***

### createNavMesh()

> **createNavMesh**(`meshes`, `parameters`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L21)

Creates a navigation mesh

#### Parameters

##### meshes

[`Mesh`](../classes/Mesh.md)[]

array of all the geometry used to compute the navigation mesh

##### parameters

[`INavMeshParameters`](INavMeshParameters.md)

bunch of parameters used to filter geometry

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:197](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L197)

Release all resources

#### Returns

`void`

***

### getClosestPoint()

> **getClosestPoint**(`position`): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L35)

Get a navigation mesh constrained position, closest to the parameter position

#### Parameters

##### position

[`Vector3`](../classes/Vector3.md)

world position

#### Returns

[`Vector3`](../classes/Vector3.md)

the closest point to position constrained by the navigation mesh

***

### getClosestPointToRef()

> **getClosestPointToRef**(`position`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L42)

Get a navigation mesh constrained position, closest to the parameter position

#### Parameters

##### position

[`Vector3`](../classes/Vector3.md)

world position

##### result

[`Vector3`](../classes/Vector3.md)

output the closest point to position constrained by the navigation mesh

#### Returns

`void`

***

### getDefaultQueryExtent()

> **getDefaultQueryExtent**(): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:121](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L121)

Get the Bounding box extent specified by setDefaultQueryExtent

#### Returns

[`Vector3`](../classes/Vector3.md)

the box extent values

***

### getDefaultQueryExtentToRef()

> **getDefaultQueryExtentToRef**(`result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:139](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L139)

Get the Bounding box extent result specified by setDefaultQueryExtent

#### Parameters

##### result

[`Vector3`](../classes/Vector3.md)

output the box extent values

#### Returns

`void`

***

### getMaximumSubStepCount()

> **getMaximumSubStepCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L168)

Get the maximum number of iterations per navigation tick update

#### Returns

`number`

the maximum number of iterations

***

### getNavmeshData()

> **getNavmeshData**(): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:133](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L133)

returns the navmesh data that can be used later. The navmesh must be built before retrieving the data

#### Returns

`Uint8Array`

data the Uint8Array that can be saved and reused

***

### getRandomPointAround()

> **getRandomPointAround**(`position`, `maxRadius`): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L50)

Get a navigation mesh constrained position, within a particular radius

#### Parameters

##### position

[`Vector3`](../classes/Vector3.md)

world position

##### maxRadius

`number`

the maximum distance to the constrained world position

#### Returns

[`Vector3`](../classes/Vector3.md)

the closest point to position constrained by the navigation mesh

***

### getRandomPointAroundToRef()

> **getRandomPointAroundToRef**(`position`, `maxRadius`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:58](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L58)

Get a navigation mesh constrained position, within a particular radius

#### Parameters

##### position

[`Vector3`](../classes/Vector3.md)

world position

##### maxRadius

`number`

the maximum distance to the constrained world position

##### result

[`Vector3`](../classes/Vector3.md)

output the closest point to position constrained by the navigation mesh

#### Returns

`void`

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:153](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L153)

Get the time step of the navigation tick update.

#### Returns

`number`

the current time step

***

### isSupported()

> **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L98)

If this plugin is supported

#### Returns

`boolean`

true if plugin is supported

***

### moveAlong()

> **moveAlong**(`position`, `destination`): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L66)

Compute the final position from a segment made of destination-position

#### Parameters

##### position

[`Vector3`](../classes/Vector3.md)

world position

##### destination

[`Vector3`](../classes/Vector3.md)

world position

#### Returns

[`Vector3`](../classes/Vector3.md)

the resulting point along the navmesh

***

### moveAlongToRef()

> **moveAlongToRef**(`position`, `destination`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L74)

Compute the final position from a segment made of destination-position

#### Parameters

##### position

[`Vector3`](../classes/Vector3.md)

world position

##### destination

[`Vector3`](../classes/Vector3.md)

world position

##### result

[`Vector3`](../classes/Vector3.md)

output the resulting point along the navmesh

#### Returns

`void`

***

### removeObstacle()

> **removeObstacle**(`obstacle`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L192)

Removes an obstacle created by addCylinderObstacle or addBoxObstacle

#### Parameters

##### obstacle

[`IObstacle`](../type-aliases/IObstacle.md)

obstacle to remove from the navigation

#### Returns

`void`

***

### setDefaultQueryExtent()

> **setDefaultQueryExtent**(`extent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L115)

Set the Bounding box extent for doing spatial queries (getClosestPoint, getRandomPointAround, ...)
The queries will try to find a solution within those bounds
default is (1,1,1)

#### Parameters

##### extent

[`Vector3`](../classes/Vector3.md)

x,y,z value that define the extent around the queries point of reference

#### Returns

`void`

***

### setMaximumSubStepCount()

> **setMaximumSubStepCount**(`newStepCount`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L162)

If delta time in navigation tick update is greater than the time step
a number of sub iterations are done. If more iterations are needed to reach deltatime
they will be discarded.
A value of 0 will set to no maximum and update will use as many substeps as needed

#### Parameters

##### newStepCount

`number`

the maximum number of iterations

#### Returns

`void`

***

### setTimeStep()

> **setTimeStep**(`newTimeStep`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:147](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Navigation/INavigationEngine.ts#L147)

Set the time step of the navigation tick update.
Default is 1/60.
A value of 0 will disable fixed time update

#### Parameters

##### newTimeStep

`number`

the new timestep to apply to this world.

#### Returns

`void`
