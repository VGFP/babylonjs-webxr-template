[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RecastJSCrowd

# Class: RecastJSCrowd

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:556](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L556)

Recast detour crowd implementation

## Implements

- [`ICrowd`](../interfaces/ICrowd.md)

## Constructors

### Constructor

> **new RecastJSCrowd**(`plugin`, `maxAgents`, `maxAgentRadius`, `scene`): `RecastJSCrowd`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:609](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L609)

Constructor

#### Parameters

##### plugin

[`RecastJSPlugin`](RecastJSPlugin.md)

recastJS plugin

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

`RecastJSCrowd`

the crowd you can add agents to

## Properties

### agents

> **agents**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:573](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L573)

All agents created

***

### bjsRECASTPlugin

> **bjsRECASTPlugin**: [`RecastJSPlugin`](RecastJSPlugin.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:561](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L561)

Recast/detour plugin

***

### onReachTargetObservable

> **onReachTargetObservable**: [`Observable`](Observable.md)\<\{ `agentIndex`: `number`; `destination`: [`Vector3`](Vector3.md); \}\>

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:599](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L599)

Fires each time an agent is in reach radius of its destination

***

### reachRadii

> **reachRadii**: `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:577](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L577)

agents reach radius

***

### recastCrowd

> **recastCrowd**: `any` = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:565](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L565)

Link to the detour crowd

***

### transforms

> **transforms**: [`TransformNode`](TransformNode.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:569](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L569)

One transform per agent

## Methods

### addAgent()

> **addAgent**(`pos`, `parameters`, `transform`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:627](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L627)

Add a new agent to the crowd with the specified parameter a corresponding transformNode.
You can attach anything to that node. The node position is updated in the scene update tick.

#### Parameters

##### pos

[`Vector3`](Vector3.md)

world position that will be constrained by the navigation mesh

##### parameters

[`IAgentParameters`](../interfaces/IAgentParameters.md)

agent parameters

##### transform

[`TransformNode`](TransformNode.md)

hooked to the agent that will be update by the scene

#### Returns

`number`

agent index

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`addAgent`](../interfaces/ICrowd.md#addagent)

***

### agentGoto()

> **agentGoto**(`index`, `destination`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:733](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L733)

Asks a particular agent to go to a destination. That destination is constrained by the navigation mesh

#### Parameters

##### index

`number`

agent index returned by addAgent

##### destination

[`Vector3`](Vector3.md)

targeted world position

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`agentGoto`](../interfaces/ICrowd.md#agentgoto)

***

### agentTeleport()

> **agentTeleport**(`index`, `destination`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:749](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L749)

Teleport the agent to a new position

#### Parameters

##### index

`number`

agent index returned by addAgent

##### destination

[`Vector3`](Vector3.md)

targeted world position

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`agentTeleport`](../interfaces/ICrowd.md#agentteleport)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:913](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L913)

Release all resources

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`dispose`](../interfaces/ICrowd.md#dispose)

***

### getAgentNextTargetPath()

> **getAgentNextTargetPath**(`index`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:695](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L695)

Returns the agent next target point on the path

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

[`Vector3`](Vector3.md)

world space position

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getAgentNextTargetPath`](../interfaces/ICrowd.md#getagentnexttargetpath)

***

### getAgentNextTargetPathToRef()

> **getAgentNextTargetPathToRef**(`index`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:705](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L705)

Returns the agent next target point on the path

#### Parameters

##### index

`number`

agent index returned by addAgent

##### result

[`Vector3`](Vector3.md)

output world space position

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getAgentNextTargetPathToRef`](../interfaces/ICrowd.md#getagentnexttargetpathtoref)

***

### getAgentPosition()

> **getAgentPosition**(`index`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:655](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L655)

Returns the agent position in world space

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

[`Vector3`](Vector3.md)

world space position

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getAgentPosition`](../interfaces/ICrowd.md#getagentposition)

***

### getAgentPositionToRef()

> **getAgentPositionToRef**(`index`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:665](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L665)

Returns the agent position result in world space

#### Parameters

##### index

`number`

agent index returned by addAgent

##### result

[`Vector3`](Vector3.md)

output world space position

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getAgentPositionToRef`](../interfaces/ICrowd.md#getagentpositiontoref)

***

### getAgents()

> **getAgents**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:807](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L807)

get the list of all agents attached to this crowd

#### Returns

`number`[]

list of agent indices

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getAgents`](../interfaces/ICrowd.md#getagents)

***

### getAgentState()

> **getAgentState**(`index`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:715](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L715)

Gets the agent state

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

`number`

agent state

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getAgentState`](../interfaces/ICrowd.md#getagentstate)

***

### getAgentVelocity()

> **getAgentVelocity**(`index`): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:675](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L675)

Returns the agent velocity in world space

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

[`Vector3`](Vector3.md)

world space velocity

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getAgentVelocity`](../interfaces/ICrowd.md#getagentvelocity)

***

### getAgentVelocityToRef()

> **getAgentVelocityToRef**(`index`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:685](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L685)

Returns the agent velocity result in world space

#### Parameters

##### index

`number`

agent index returned by addAgent

##### result

[`Vector3`](Vector3.md)

output world space velocity

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getAgentVelocityToRef`](../interfaces/ICrowd.md#getagentvelocitytoref)

***

### getCorners()

> **getCorners**(`index`): [`Vector3`](Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:898](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L898)

Get the next corner points composing the path (max 4 points)

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

[`Vector3`](Vector3.md)[]

array containing world position composing the path

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getCorners`](../interfaces/ICrowd.md#getcorners)

***

### getDefaultQueryExtent()

> **getDefaultQueryExtent**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:879](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L879)

Get the Bounding box extent specified by setDefaultQueryExtent

#### Returns

[`Vector3`](Vector3.md)

the box extent values

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getDefaultQueryExtent`](../interfaces/ICrowd.md#getdefaultqueryextent)

***

### getDefaultQueryExtentToRef()

> **getDefaultQueryExtentToRef**(`result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:888](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L888)

Get the Bounding box extent result specified by setDefaultQueryExtent

#### Parameters

##### result

[`Vector3`](Vector3.md)

output the box extent values

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`getDefaultQueryExtentToRef`](../interfaces/ICrowd.md#getdefaultqueryextenttoref)

***

### overOffmeshConnection()

> **overOffmeshConnection**(`index`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:724](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L724)

returns true if the agent in over an off mesh link connection

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

`boolean`

true if over an off mesh link connection

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`overOffmeshConnection`](../interfaces/ICrowd.md#overoffmeshconnection)

***

### removeAgent()

> **removeAgent**(`index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:790](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L790)

remove a particular agent previously created

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`removeAgent`](../interfaces/ICrowd.md#removeagent)

***

### setDefaultQueryExtent()

> **setDefaultQueryExtent**(`extent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:870](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L870)

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

[`ICrowd`](../interfaces/ICrowd.md).[`setDefaultQueryExtent`](../interfaces/ICrowd.md#setdefaultqueryextent)

***

### update()

> **update**(`deltaTime`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:815](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L815)

Tick update done by the Scene. Agent position/velocity/acceleration is updated by this function

#### Parameters

##### deltaTime

`number`

in seconds

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`update`](../interfaces/ICrowd.md#update)

***

### updateAgentParameters()

> **updateAgentParameters**(`index`, `parameters`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts:758](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/Plugins/recastJSPlugin.ts#L758)

Update agent parameters

#### Parameters

##### index

`number`

agent index returned by addAgent

##### parameters

[`IAgentParameters`](../interfaces/IAgentParameters.md)

agent parameters

#### Returns

`void`

#### Implementation of

[`ICrowd`](../interfaces/ICrowd.md).[`updateAgentParameters`](../interfaces/ICrowd.md#updateagentparameters)
