[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowMap

# Class: FlowMap

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/flowMap.ts#L32)

Class used to represent a particle flow map.
#5DM02T#7
GPUParts: #5DM02T#12 (webgl2)
GPUParts: #5DM02T#13 (webgpu)

## Constructors

### Constructor

> **new FlowMap**(`width`, `height`, `data`): `FlowMap`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/flowMap.ts#L39)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/flowMap.ts#L42)

defines the data of the flow map

***

### height

> `readonly` **height**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/flowMap.ts#L41)

defines the height of the flow map

***

### width

> `readonly` **width**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/flowMap.ts#L40)

defines the width of the flow map

## Methods

### processFlowable()

> **processFlowable**(`flowable`, `strength?`, `flowMapSamplePosOrTransformationMatrix?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/flowMap.ts#L45)

#### Parameters

##### flowable

[`IFlowable`](../interfaces/IFlowable.md)

##### strength?

`number` = `1`

##### flowMapSamplePosOrTransformationMatrix?

[`Matrix`](Matrix.md) \| `IVector3Like`

#### Returns

`void`

***

### ExtractFromTextureAsync()

> `static` **ExtractFromTextureAsync**(`texture`): `Promise`\<`FlowMap`\>

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:127](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/flowMap.ts#L127)

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

Defined in: [babylonjs-source/packages/dev/core/src/Particles/flowMap.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/flowMap.ts#L97)

Creates a FlowMap from a url.

#### Parameters

##### url

`string`

The url of the image to load

#### Returns

`Promise`\<`FlowMap`\>

a promise that resolves to a FlowMap object
