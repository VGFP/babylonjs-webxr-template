[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAgentParameters

# Interface: IAgentParameters

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:365](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L365)

Configures an agent

## Properties

### collisionQueryRange

> **collisionQueryRange**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:389](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L389)

Defines how close a collision element must be before it is considered for steering behaviors. [Limits: > 0]

***

### height

> **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:374](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L374)

Agent height. [Limit: > 0]

***

### maxAcceleration

> **maxAcceleration**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:379](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L379)

Maximum allowed acceleration. [Limit: >= 0]

***

### maxSpeed

> **maxSpeed**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L384)

Maximum allowed speed. [Limit: >= 0]

***

### pathOptimizationRange

> **pathOptimizationRange**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:394](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L394)

The path visibility optimization range. [Limit: > 0]

***

### radius

> **radius**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:369](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L369)

Agent radius. [Limit: >= 0]

***

### reachRadius?

> `optional` **reachRadius?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:405](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L405)

Observers will be notified when agent gets inside the virtual circle with this Radius around destination point.
Default is agent radius

***

### separationWeight

> **separationWeight**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Navigation/INavigationEngine.ts:399](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Navigation/INavigationEngine.ts#L399)

How aggressive the agent manager should be at avoiding collisions with this agent. [Limit: >= 0]
