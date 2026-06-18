[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowMap

# Class: FlowMap

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/flowMap.ts#L32)

Class used to represent a particle flow map.
#5DM02T#7
GPUParts: #5DM02T#12 (webgl2)
GPUParts: #5DM02T#13 (webgpu)

## Constructors

### Constructor

> **new FlowMap**(`width`, `height`, `data`): `FlowMap`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/flowMap.ts#L39)

Create a new flow map.

#### Parameters

##### width

`number`

defines the width of the flow map

##### height

`number`

defines the height of the flow map

##### data

`Uint8ClampedArray`

defines the data of the flow map

#### Returns

`FlowMap`

## Properties

### data

> `readonly` **data**: `Uint8ClampedArray`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/flowMap.ts#L42)

defines the data of the flow map

***

### height

> `readonly` **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/flowMap.ts#L41)

defines the height of the flow map

***

### width

> `readonly` **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/flowMap.ts#L40)

defines the width of the flow map

## Methods

### processFlowable()

> **processFlowable**(`flowable`, `strength?`, `flowMapSamplePosOrTransformationMatrix?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/flowMap.ts#L51)

Applies the flow map to a flowable object.

#### Parameters

##### flowable

[`IFlowable`](../interfaces/IFlowable.md)

defines the object to update

##### strength?

`number` = `1`

defines the strength of the flow map influence

##### flowMapSamplePosOrTransformationMatrix?

[`Matrix`](Matrix.md) \| `IVector3Like`

defines the flow map sample position or transformation matrix

#### Returns

`void`

***

### ExtractFromTextureAsync()

> `static` **ExtractFromTextureAsync**(`texture`): `Promise`\<`FlowMap`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:133](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/flowMap.ts#L133)

Load from a texture

#### Parameters

##### texture

[`Texture`](Texture.md)

defines the source texture

#### Returns

`Promise`\<`FlowMap`\>

a promise fulfilled when image data is loaded

***

### FromUrlAsync()

> `static` **FromUrlAsync**(`url`): `Promise`\<`FlowMap`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:103](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Particles/flowMap.ts#L103)

Creates a FlowMap from a url.

#### Parameters

##### url

`string`

The url of the image to load

#### Returns

`Promise`\<`FlowMap`\>

a promise that resolves to a FlowMap object
