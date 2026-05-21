[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Trajectory

# Class: Trajectory

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:239](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L239)

A 3D trajectory consisting of an order list of vectors describing a
path of motion through 3D space.

## Constructors

### Constructor

> **new Trajectory**(`segmentLength?`): `Trajectory`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:269](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L269)

Create a new empty Trajectory.

#### Parameters

##### segmentLength?

`number` = `0.01`

radius of discretization for Trajectory points

#### Returns

`Trajectory`

## Methods

### add()

> **add**(`point`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:287](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L287)

Append a new point to the Trajectory.
NOTE: This implementation has many allocations.

#### Parameters

##### point

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

point to append to the Trajectory

#### Returns

`void`

***

### getLength()

> **getLength**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:278](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L278)

Get the length of the Trajectory.

#### Returns

`number`

length of the Trajectory

***

### resampleAtTargetResolution()

> **resampleAtTargetResolution**(`targetResolution`): `Trajectory`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L309)

Create a new Trajectory with a segment length chosen to make it
probable that the new Trajectory will have a specified number of
segments. This operation is imprecise.

#### Parameters

##### targetResolution

`number`

number of segments desired

#### Returns

`Trajectory`

new Trajectory with approximately the requested number of segments

***

### serialize()

> **serialize**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L247)

Serialize to JSON.

#### Returns

`string`

serialized JSON string

***

### tokenize()

> **tokenize**(`tokens`): `number`[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:325](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L325)

Convert Trajectory segments into tokenized representation. This
representation is an array of numbers where each nth number is the
index of the token which is most similar to the nth segment of the
Trajectory.

#### Parameters

##### tokens

`DeepImmutableArray`\<[`Vector3`](Vector3.md)\>

list of vectors which serve as discrete tokens

#### Returns

`number`[]

list of indices of most similar token per segment

***

### Deserialize()

> `static` **Deserialize**(`json`): `Trajectory`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/trajectoryClassifier.ts:256](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/trajectoryClassifier.ts#L256)

Deserialize from JSON.

#### Parameters

##### json

`string`

serialized JSON string

#### Returns

`Trajectory`

deserialized Trajectory
