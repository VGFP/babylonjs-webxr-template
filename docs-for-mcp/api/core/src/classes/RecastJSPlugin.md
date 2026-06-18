[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RecastJSPlugin

# Class: RecastJSPlugin

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L18)

RecastJS navigation plugin

## Implements

- [`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md)

## Constructors

### Constructor

> **new RecastJSPlugin**(`recastInjection?`): `RecastJSPlugin`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:48](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L48)

Initializes the recastJS plugin

#### Parameters

##### recastInjection?

`any` = `Recast`

can be used to inject your own recast reference

#### Returns

`RecastJSPlugin`

## Properties

### bjsRECAST

> **bjsRECAST**: `any` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L23)

Reference to the Recast library

***

### name

> **name**: `string` = `"RecastJSPlugin"`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:28](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L28)

plugin name

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`name`](../interfaces/INavigationEnginePlugin.md#name)

***

### navMesh

> **navMesh**: `any`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L33)

the first navmesh created. We might extend this to support multiple navmeshes

## Accessors

### timeFactor

#### Get Signature

> **get** **timeFactor**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:127](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L127)

Get the time factor used for crowd agent update

##### Returns

`number`

the time factor

#### Set Signature

> **set** **timeFactor**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L119)

Time factor applied when updating crowd agents (default 1). A value of 0 will pause crowd updates.

##### Parameters

###### value

`number`

the time factor applied at update

##### Returns

`void`

## Methods

### addBoxObstacle()

> **addBoxObstacle**(`position`, `extent`, `angle`): [`Nullable`](../type-aliases/Nullable.md)\<[`IObstacle`](../type-aliases/IObstacle.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:510](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L510)

Creates an oriented box obstacle and add it to the navigation

#### Parameters

##### position

[`Vector3`](Vector3.md)

world position

##### extent

[`Vector3`](Vector3.md)

box size

##### angle

`number`

angle in radians of the box orientation on Y axis

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IObstacle`](../type-aliases/IObstacle.md)\>

the obstacle freshly created

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`addBoxObstacle`](../interfaces/INavigationEnginePlugin.md#addboxobstacle)

***

### addCylinderObstacle()

> **addCylinderObstacle**(`position`, `radius`, `height`): [`Nullable`](../type-aliases/Nullable.md)\<[`IObstacle`](../type-aliases/IObstacle.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:496](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L496)

Creates a cylinder obstacle and add it to the navigation

#### Parameters

##### position

[`Vector3`](Vector3.md)

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

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`addCylinderObstacle`](../interfaces/INavigationEnginePlugin.md#addcylinderobstacle)

***

### buildFromNavmeshData()

> **buildFromNavmeshData**(`data`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:436](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L436)

build the navmesh from a previously saved state using getNavmeshData

#### Parameters

##### data

`Uint8Array`

the Uint8Array returned by getNavmeshData

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`buildFromNavmeshData`](../interfaces/INavigationEnginePlugin.md#buildfromnavmeshdata)

***

### computePath()

> **computePath**(`start`, `end`): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L370)

Compute a navigation path from start to end. Returns an empty array if no path can be computed
Path is straight.

#### Parameters

##### start

[`Vector3`](Vector3.md)

world position

##### end

[`Vector3`](Vector3.md)

world position

#### Returns

[`Vector3`](Vector3.md)[]

array containing world position composing the path

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`computePath`](../interfaces/INavigationEnginePlugin.md#computepath)

***

### computePathSmooth()

> **computePathSmooth**(`start`, `end`): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:388](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L388)

Compute a navigation path from start to end. Returns an empty array if no path can be computed.
Path follows navigation mesh geometry.

#### Parameters

##### start

[`Vector3`](Vector3.md)

world position

##### end

[`Vector3`](Vector3.md)

world position

#### Returns

[`Vector3`](Vector3.md)[]

array containing world position composing the path

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`computePathSmooth`](../interfaces/INavigationEnginePlugin.md#computepathsmooth)

***

### createCrowd()

> **createCrowd**(`maxAgents`, `maxAgentRadius`, `scene`): [`ICrowd`](../interfaces/ICrowd.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L405)

Create a new Crowd so you can add agents

#### Parameters

##### maxAgents

`number`

the maximum agent count in the crowd

##### maxAgentRadius

`number`

the maximum radius an agent can have

##### scene

[`Scene`](Scene.md)

to attach the crowd to

#### Returns

[`ICrowd`](../interfaces/ICrowd.md)

the crowd you can add agents to

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`createCrowd`](../interfaces/INavigationEnginePlugin.md#createcrowd)

***

### createDebugNavMesh()

> **createDebugNavMesh**(`scene`): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:234](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L234)

Create a navigation mesh debug mesh

#### Parameters

##### scene

[`Scene`](Scene.md)

is where the mesh will be added

#### Returns

[`Mesh`](Mesh.md)

debug display mesh

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`createDebugNavMesh`](../interfaces/INavigationEnginePlugin.md#createdebugnavmesh)

***

### createNavMesh()

> **createNavMesh**(`meshes`, `parameters`, `completion?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:137](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L137)

Creates a navigation mesh

#### Parameters

##### meshes

[`Mesh`](Mesh.md)[]

array of all the geometry used to compute the navigation mesh

##### parameters

[`INavMeshParameters`](../interfaces/INavMeshParameters.md)

bunch of parameters used to filter geometry

##### completion?

(`navmeshData`) => `void`

callback when data is available from the worker. Not used without a worker

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`createNavMesh`](../interfaces/INavigationEnginePlugin.md#createnavmesh)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:478](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L478)

Disposes of the plugin resources

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`dispose`](../interfaces/INavigationEnginePlugin.md#dispose)

***

### getClosestPoint()

> **getClosestPoint**(`position`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L266)

Get a navigation mesh constrained position, closest to the parameter position

#### Parameters

##### position

[`Vector3`](Vector3.md)

world position

#### Returns

[`Vector3`](Vector3.md)

the closest point to position constrained by the navigation mesh

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getClosestPoint`](../interfaces/INavigationEnginePlugin.md#getclosestpoint)

***

### getClosestPointToRef()

> **getClosestPointToRef**(`position`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L280)

Get a navigation mesh constrained position, closest to the parameter position

#### Parameters

##### position

[`Vector3`](Vector3.md)

world position

##### result

[`Vector3`](Vector3.md)

output the closest point to position constrained by the navigation mesh

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getClosestPointToRef`](../interfaces/INavigationEnginePlugin.md#getclosestpointtoref)

***

### getDefaultQueryExtent()

> **getDefaultQueryExtent**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:427](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L427)

Get the Bounding box extent specified by setDefaultQueryExtent

#### Returns

[`Vector3`](Vector3.md)

the box extent values

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getDefaultQueryExtent`](../interfaces/INavigationEnginePlugin.md#getdefaultqueryextent)

***

### getDefaultQueryExtentToRef()

> **getDefaultQueryExtentToRef**(`result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:470](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L470)

Get the Bounding box extent result specified by setDefaultQueryExtent

#### Parameters

##### result

[`Vector3`](Vector3.md)

output the box extent values

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getDefaultQueryExtentToRef`](../interfaces/INavigationEnginePlugin.md#getdefaultqueryextenttoref)

***

### getMaximumSubStepCount()

> **getMaximumSubStepCount**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:111](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L111)

Get the maximum number of iterations per navigation tick update

#### Returns

`number`

the maximum number of iterations

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getMaximumSubStepCount`](../interfaces/INavigationEnginePlugin.md#getmaximumsubstepcount)

***

### getNavmeshData()

> **getNavmeshData**(): `Uint8Array`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:457](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L457)

returns the navmesh data that can be used later. The navmesh must be built before retrieving the data

#### Returns

`Uint8Array`

data the Uint8Array that can be saved and reused

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getNavmeshData`](../interfaces/INavigationEnginePlugin.md#getnavmeshdata)

***

### getRandomPointAround()

> **getRandomPointAround**(`position`, `maxRadius`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L294)

Get a navigation mesh constrained position, within a particular radius

#### Parameters

##### position

[`Vector3`](Vector3.md)

world position

##### maxRadius

`number`

the maximum distance to the constrained world position

#### Returns

[`Vector3`](Vector3.md)

the closest point to position constrained by the navigation mesh

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getRandomPointAround`](../interfaces/INavigationEnginePlugin.md#getrandompointaround)

***

### getRandomPointAroundToRef()

> **getRandomPointAroundToRef**(`position`, `maxRadius`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:309](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L309)

Get a navigation mesh constrained position, within a particular radius

#### Parameters

##### position

[`Vector3`](Vector3.md)

world position

##### maxRadius

`number`

the maximum distance to the constrained world position

##### result

[`Vector3`](Vector3.md)

output the closest point to position constrained by the navigation mesh

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getRandomPointAroundToRef`](../interfaces/INavigationEnginePlugin.md#getrandompointaroundtoref)

***

### getRandomSeed()

> **getRandomSeed**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:540](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L540)

Returns the seed used for randomized functions like `getRandomPointAround`

#### Returns

`number`

seed number

***

### getTimeStep()

> **getTimeStep**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:92](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L92)

Get the time step of the navigation tick update.

#### Returns

`number`

the current time step

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`getTimeStep`](../interfaces/INavigationEnginePlugin.md#gettimestep)

***

### isSupported()

> **isSupported**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:532](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L532)

If this plugin is supported

#### Returns

`boolean`

true if plugin is supported

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`isSupported`](../interfaces/INavigationEnginePlugin.md#issupported)

***

### moveAlong()

> **moveAlong**(`position`, `destination`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:323](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L323)

Compute the final position from a segment made of destination-position

#### Parameters

##### position

[`Vector3`](Vector3.md)

world position

##### destination

[`Vector3`](Vector3.md)

world position

#### Returns

[`Vector3`](Vector3.md)

the resulting point along the navmesh

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`moveAlong`](../interfaces/INavigationEnginePlugin.md#movealong)

***

### moveAlongToRef()

> **moveAlongToRef**(`position`, `destination`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L341)

Compute the final position from a segment made of destination-position

#### Parameters

##### position

[`Vector3`](Vector3.md)

world position

##### destination

[`Vector3`](Vector3.md)

world position

##### result

[`Vector3`](Vector3.md)

output the resulting point along the navmesh

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`moveAlongToRef`](../interfaces/INavigationEnginePlugin.md#movealongtoref)

***

### removeObstacle()

> **removeObstacle**(`obstacle`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:524](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L524)

Removes an obstacle created by addCylinderObstacle or addBoxObstacle

#### Parameters

##### obstacle

[`IObstacle`](../type-aliases/IObstacle.md)

obstacle to remove from the navigation

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`removeObstacle`](../interfaces/INavigationEnginePlugin.md#removeobstacle)

***

### setDefaultQueryExtent()

> **setDefaultQueryExtent**(`extent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:416](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L416)

Set the Bounding box extent for doing spatial queries (getClosestPoint, getRandomPointAround, ...)
The queries will try to find a solution within those bounds
default is (1,1,1)

#### Parameters

##### extent

[`Vector3`](Vector3.md)

x,y,z value that define the extent around the queries point of reference

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`setDefaultQueryExtent`](../interfaces/INavigationEnginePlugin.md#setdefaultqueryextent)

***

### setMaximumSubStepCount()

> **setMaximumSubStepCount**(`newStepCount?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L103)

If delta time in navigation tick update is greater than the time step
a number of sub iterations are done. If more iterations are needed to reach deltatime
they will be discarded.
A value of 0 will set to no maximum and update will use as many substeps as needed

#### Parameters

##### newStepCount?

`number` = `10`

the maximum number of iterations

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`setMaximumSubStepCount`](../interfaces/INavigationEnginePlugin.md#setmaximumsubstepcount)

***

### setRandomSeed()

> **setRandomSeed**(`seed`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:548](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L548)

Set the seed used for randomized functions like `getRandomPointAround`

#### Parameters

##### seed

`number`

number used as seed for random functions

#### Returns

`void`

***

### setTimeStep()

> **setTimeStep**(`newTimeStep?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:84](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L84)

Set the time step of the navigation tick update.
Default is 1/60.
A value of 0 will disable fixed time update

#### Parameters

##### newTimeStep?

`number` = `...`

the new timestep to apply to this world.

#### Returns

`void`

#### Implementation of

[`INavigationEnginePlugin`](../interfaces/INavigationEnginePlugin.md).[`setTimeStep`](../interfaces/INavigationEnginePlugin.md#settimestep)

***

### setWorkerURL()

> **setWorkerURL**(`workerURL`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:70](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L70)

Set worker URL to be used when generating a new navmesh

#### Parameters

##### workerURL

`string` \| `URL`

url string

#### Returns

`boolean`

boolean indicating if worker is created
