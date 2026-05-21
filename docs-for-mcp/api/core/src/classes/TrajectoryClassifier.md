[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TrajectoryClassifier

# Class: TrajectoryClassifier

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:719](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L719)

Class representing a set of known, named trajectories to which Trajectories can be
added and using which Trajectories can be recognized.

## Methods

### addTrajectoryToClassification()

> **addTrajectoryToClassification**(`trajectory`, `classification`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:798](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L798)

Add a new Trajectory to the set with a given name.

#### Parameters

##### trajectory

[`Trajectory`](Trajectory.md)

new Trajectory to be added

##### classification

`string`

name to which to add the Trajectory

#### Returns

`void`

***

### classifyTrajectory()

> **classifyTrajectory**(`trajectory`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:821](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L821)

Attempt to recognize a Trajectory from among all the classifications
already known to the classifier.

#### Parameters

##### trajectory

[`Trajectory`](Trajectory.md)

Trajectory to be recognized

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

classification of Trajectory if recognized, null otherwise

***

### deleteClassification()

> **deleteClassification**(`classification`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:811](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L811)

Remove a known named trajectory and all Trajectories associated with it.

#### Parameters

##### classification

`string`

name to remove

#### Returns

`boolean`

whether anything was removed

***

### serialize()

> **serialize**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:729](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L729)

Serialize to JSON.

#### Returns

`string`

JSON serialization

***

### Deserialize()

> `static` **Deserialize**(`json`): `TrajectoryClassifier`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:747](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L747)

Deserialize from JSON.

#### Parameters

##### json

`string`

JSON serialization

#### Returns

`TrajectoryClassifier`

deserialized TrajectorySet

***

### Generate()

> `static` **Generate**(): `TrajectoryClassifier`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:768](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L768)

Initialize a new empty TrajectorySet with auto-generated Alphabets.
VERY naive, need to be generating these things from known
sets. Better version later, probably eliminating this one.

#### Returns

`TrajectoryClassifier`

auto-generated TrajectorySet
