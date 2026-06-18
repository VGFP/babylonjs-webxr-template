[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICrowd

# Interface: ICrowd

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L223)

Crowd Interface. A Crowd is a collection of moving agents constrained by a navigation mesh

## Methods

### addAgent()

> **addAgent**(`pos`, `parameters`, `transform`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:232](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L232)

Add a new agent to the crowd with the specified parameter a corresponding transformNode.
You can attach anything to that node. The node position is updated in the scene update tick.

#### Parameters

##### pos

[`Vector3`](../classes/Vector3.md)

world position that will be constrained by the navigation mesh

##### parameters

[`IAgentParameters`](IAgentParameters.md)

agent parameters

##### transform

[`TransformNode`](../classes/TransformNode.md)

hooked to the agent that will be update by the scene

#### Returns

`number`

agent index

***

### agentGoto()

> **agentGoto**(`index`, `destination`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L313)

Asks a particular agent to go to a destination. That destination is constrained by the navigation mesh

#### Parameters

##### index

`number`

agent index returned by addAgent

##### destination

[`Vector3`](../classes/Vector3.md)

targeted world position

#### Returns

`void`

***

### agentTeleport()

> **agentTeleport**(`index`, `destination`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:320](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L320)

Teleport the agent to a new position

#### Parameters

##### index

`number`

agent index returned by addAgent

##### destination

[`Vector3`](../classes/Vector3.md)

targeted world position

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:359](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L359)

Release all resources

#### Returns

`void`

***

### getAgentNextTargetPath()

> **getAgentNextTargetPath**(`index`): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L267)

Gets the agent next target point on the path

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

[`Vector3`](../classes/Vector3.md)

world space position

***

### getAgentNextTargetPathToRef()

> **getAgentNextTargetPathToRef**(`index`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L288)

Gets the agent next target point on the path

#### Parameters

##### index

`number`

agent index returned by addAgent

##### result

[`Vector3`](../classes/Vector3.md)

output world space position

#### Returns

`void`

***

### getAgentPosition()

> **getAgentPosition**(`index`): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L239)

Returns the agent position in world space

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

[`Vector3`](../classes/Vector3.md)

world space position

***

### getAgentPositionToRef()

> **getAgentPositionToRef**(`index`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:246](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L246)

Gets the agent position result in world space

#### Parameters

##### index

`number`

agent index returned by addAgent

##### result

[`Vector3`](../classes/Vector3.md)

output world space position

#### Returns

`void`

***

### getAgents()

> **getAgents**(): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L300)

get the list of all agents attached to this crowd

#### Returns

`number`[]

list of agent indices

***

### getAgentState()

> **getAgentState**(`index`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:274](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L274)

Gets the agent state

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

`number`

agent state

***

### getAgentVelocity()

> **getAgentVelocity**(`index`): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:253](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L253)

Gets the agent velocity in world space

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

[`Vector3`](../classes/Vector3.md)

world space velocity

***

### getAgentVelocityToRef()

> **getAgentVelocityToRef**(`index`, `result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:260](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L260)

Gets the agent velocity result in world space

#### Parameters

##### index

`number`

agent index returned by addAgent

##### result

[`Vector3`](../classes/Vector3.md)

output world space velocity

#### Returns

`void`

***

### getCorners()

> **getCorners**(`index`): [`Vector3`](../classes/Vector3.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:354](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L354)

Get the next corner points composing the path (max 4 points)

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

[`Vector3`](../classes/Vector3.md)[]

array containing world position composing the path

***

### getDefaultQueryExtent()

> **getDefaultQueryExtent**(): [`Vector3`](../classes/Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:341](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L341)

Get the Bounding box extent specified by setDefaultQueryExtent

#### Returns

[`Vector3`](../classes/Vector3.md)

the box extent values

***

### getDefaultQueryExtentToRef()

> **getDefaultQueryExtentToRef**(`result`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:347](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L347)

Get the Bounding box extent result specified by setDefaultQueryExtent

#### Parameters

##### result

[`Vector3`](../classes/Vector3.md)

output the box extent values

#### Returns

`void`

***

### overOffmeshConnection()

> **overOffmeshConnection**(`index`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:281](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L281)

returns true if the agent in over an off mesh link connection

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

`boolean`

true if over an off mesh link connection

***

### removeAgent()

> **removeAgent**(`index`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:294](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L294)

remove a particular agent previously created

#### Parameters

##### index

`number`

agent index returned by addAgent

#### Returns

`void`

***

### setDefaultQueryExtent()

> **setDefaultQueryExtent**(`extent`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:335](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L335)

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

### update()

> **update**(`deltaTime`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:306](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L306)

Tick update done by the Scene. Agent position/velocity/acceleration is updated by this function

#### Parameters

##### deltaTime

`number`

in seconds

#### Returns

`void`

***

### updateAgentParameters()

> **updateAgentParameters**(`index`, `parameters`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:327](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L327)

Update agent parameters

#### Parameters

##### index

`number`

agent index returned by addAgent

##### parameters

[`IAgentParameters`](IAgentParameters.md)

agent parameters

#### Returns

`void`
