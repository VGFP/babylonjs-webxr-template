[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphCascadedShadowGeneratorTask

# Class: FrameGraphCascadedShadowGeneratorTask

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L13)

Task used to generate a cascaded shadow map from a list of objects.

## Extends

- [`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md)

## Constructors

### Constructor

> **new FrameGraphCascadedShadowGeneratorTask**(`name`, `frameGraph`): `FrameGraphCascadedShadowGeneratorTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:221](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L221)

Creates a new shadow generator task.

#### Parameters

##### name

`string`

The name of the task.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The frame graph the task belongs to.

#### Returns

`FrameGraphCascadedShadowGeneratorTask`

#### Overrides

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`constructor`](FrameGraphShadowGeneratorTask.md#constructor)

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`dependencies`](FrameGraphShadowGeneratorTask.md#dependencies)

***

### depthTexture?

> `optional` **depthTexture?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L31)

The depth texture used by the autoCalcDepthBounds feature (optional if autoCalcDepthBounds is set to false).
This texture is used to compute the min/max depth bounds of the scene to setup the cascaded shadow generator.
The texture should contain either “view,” “normalized view,” or “screen” depth values - if possible, connect “normalized view,” or “screen” for best performance.
Warning: Do not set a texture if you are not using the autoCalcDepthBounds feature, to avoid generating a depth texture that will not be used.

***

### depthTextureType

> **depthTextureType**: `DepthTextureType` = `DepthTextureType.NormalizedViewDepth`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L36)

The type of the depth texture used by the autoCalcDepthBounds feature.

***

### objectList

> **objectList**: [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:12](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L12)

The object list that generates shadows.

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`objectList`](FrameGraphShadowGeneratorTask.md#objectlist)

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`onAfterTaskExecute`](FrameGraphShadowGeneratorTask.md#onaftertaskexecute)

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`onBeforeTaskExecute`](FrameGraphShadowGeneratorTask.md#onbeforetaskexecute)

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`onTexturesAllocatedObservable`](FrameGraphShadowGeneratorTask.md#ontexturesallocatedobservable)

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:273](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L273)

The shadow map texture.

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`outputTexture`](FrameGraphShadowGeneratorTask.md#outputtexture)

***

### shadowGenerator

> `readonly` **shadowGenerator**: [`ShadowGenerator`](ShadowGenerator.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L268)

The shadow generator.

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`shadowGenerator`](FrameGraphShadowGeneratorTask.md#shadowgenerator)

## Accessors

### autoCalcDepthBounds

#### Get Signature

> **get** **autoCalcDepthBounds**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:157](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L157)

Gets or sets a value indicating whether the shadow generator should automatically calculate the depth bounds.

##### Returns

`boolean`

#### Set Signature

> **set** **autoCalcDepthBounds**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:161](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L161)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### autoCalcDepthBoundsRefreshRate

#### Get Signature

> **get** **autoCalcDepthBoundsRefreshRate**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:186](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L186)

Defines the refresh rate of the min/max computation used when autoCalcDepthBounds is set to true
Use 0 to compute just once, 1 to compute on every frame, 2 to compute every two frames and so on...

##### Returns

`number`

#### Set Signature

> **set** **autoCalcDepthBoundsRefreshRate**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:190](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L190)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bias

#### Get Signature

> **get** **bias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:117](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L117)

The bias to apply to the shadow map.

##### Returns

`number`

#### Set Signature

> **set** **bias**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:121](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L121)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`bias`](FrameGraphShadowGeneratorTask.md#bias)

***

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:39](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L39)

Gets or sets the camera used to generate the shadow generator.

##### Returns

[`Camera`](Camera.md)

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L43)

##### Parameters

###### camera

[`Camera`](Camera.md)

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`camera`](FrameGraphShadowGeneratorTask.md#camera)

***

### cascadeBlendPercentage

#### Get Signature

> **get** **cascadeBlendPercentage**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:119](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L119)

Gets or sets the cascade blend percentage.

##### Returns

`number`

#### Set Signature

> **set** **cascadeBlendPercentage**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:123](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L123)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### darkness

#### Get Signature

> **get** **darkness**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:155](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L155)

The darkness of the shadows.

##### Returns

`number`

#### Set Signature

> **set** **darkness**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:159](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L159)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`darkness`](FrameGraphShadowGeneratorTask.md#darkness)

***

### debug

#### Get Signature

> **get** **debug**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:62](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L62)

Gets or sets a value indicating whether the shadow generator should display the cascades.

##### Returns

`boolean`

#### Set Signature

> **set** **debug**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:66](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L66)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### depthClamp

#### Get Signature

> **get** **depthClamp**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:138](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L138)

Gets or sets a value indicating whether the shadow generator should use depth clamping.

##### Returns

`boolean`

#### Set Signature

> **set** **depthClamp**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:142](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L142)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:43](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L43)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:47](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`disabled`](FrameGraphShadowGeneratorTask.md#disabled)

***

### enableSoftTransparentShadow

#### Get Signature

> **get** **enableSoftTransparentShadow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L193)

Enables or disables shadows with varying strength based on the transparency

##### Returns

`boolean`

#### Set Signature

> **set** **enableSoftTransparentShadow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:197](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L197)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`enableSoftTransparentShadow`](FrameGraphShadowGeneratorTask.md#enablesofttransparentshadow)

***

### filter

#### Get Signature

> **get** **filter**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:231](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L231)

The filter to apply to the shadow map.

##### Returns

`number`

#### Set Signature

> **set** **filter**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:235](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L235)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`filter`](FrameGraphShadowGeneratorTask.md#filter)

***

### filteringQuality

#### Get Signature

> **get** **filteringQuality**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L250)

The filtering quality to apply to the filter.

##### Returns

`number`

#### Set Signature

> **set** **filteringQuality**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:254](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L254)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`filteringQuality`](FrameGraphShadowGeneratorTask.md#filteringquality)

***

### lambda

#### Get Signature

> **get** **lambda**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:100](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L100)

Gets or sets the lambda parameter of the shadow generator.

##### Returns

`number`

#### Set Signature

> **set** **lambda**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L104)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### light

#### Get Signature

> **get** **light**(): [`IShadowLight`](../interfaces/IShadowLight.md)

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:18](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L18)

The light to generate shadows from.

##### Returns

[`IShadowLight`](../interfaces/IShadowLight.md)

#### Set Signature

> **set** **light**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L22)

##### Parameters

###### value

[`IShadowLight`](../interfaces/IShadowLight.md)

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`light`](FrameGraphShadowGeneratorTask.md#light)

***

### mapSize

#### Get Signature

> **get** **mapSize**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:57](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L57)

The size of the shadow map.

##### Returns

`number`

#### Set Signature

> **set** **mapSize**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L61)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`mapSize`](FrameGraphShadowGeneratorTask.md#mapsize)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:30](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L30)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:34](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L34)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`name`](FrameGraphShadowGeneratorTask.md#name)

***

### normalBias

#### Get Signature

> **get** **normalBias**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:136](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L136)

The normal bias to apply to the shadow map.

##### Returns

`number`

#### Set Signature

> **set** **normalBias**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:140](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L140)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`normalBias`](FrameGraphShadowGeneratorTask.md#normalbias)

***

### numCascades

#### Get Signature

> **get** **numCascades**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L42)

The number of cascades.

##### Returns

`number`

#### Set Signature

> **set** **numCascades**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L46)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`passes`](FrameGraphShadowGeneratorTask.md#passes)

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`passesDisabled`](FrameGraphShadowGeneratorTask.md#passesdisabled)

***

### shadowMaxZ

#### Get Signature

> **get** **shadowMaxZ**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:199](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L199)

Gets or sets the maximum shadow Z value.

##### Returns

`number`

#### Set Signature

> **set** **shadowMaxZ**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:203](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L203)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### stabilizeCascades

#### Get Signature

> **get** **stabilizeCascades**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L81)

Gets or sets a value indicating whether the shadow generator should stabilize the cascades.

##### Returns

`boolean`

#### Set Signature

> **set** **stabilizeCascades**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:85](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L85)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### transparencyShadow

#### Get Signature

> **get** **transparencyShadow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L174)

Gets or sets the ability to have transparent shadow

##### Returns

`boolean`

#### Set Signature

> **set** **transparencyShadow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:178](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L178)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`transparencyShadow`](FrameGraphShadowGeneratorTask.md#transparencyshadow)

***

### useFloat32TextureType

#### Get Signature

> **get** **useFloat32TextureType**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:77](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L77)

If true, the shadow map will use a 32 bits float texture type (else, 16 bits float is used if supported).

##### Returns

`boolean`

#### Set Signature

> **set** **useFloat32TextureType**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:81](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L81)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`useFloat32TextureType`](FrameGraphShadowGeneratorTask.md#usefloat32texturetype)

***

### useOpacityTextureForTransparentShadow

#### Get Signature

> **get** **useOpacityTextureForTransparentShadow**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L212)

If this is true, use the opacity texture's alpha channel for transparent shadows instead of the diffuse one

##### Returns

`boolean`

#### Set Signature

> **set** **useOpacityTextureForTransparentShadow**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:216](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L216)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`useOpacityTextureForTransparentShadow`](FrameGraphShadowGeneratorTask.md#useopacitytexturefortransparentshadow)

***

### useRedTextureFormat

#### Get Signature

> **get** **useRedTextureFormat**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L97)

If true, the shadow map will use a red texture format (else, a RGBA format is used).

##### Returns

`boolean`

#### Set Signature

> **set** **useRedTextureFormat**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:101](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L101)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`useRedTextureFormat`](FrameGraphShadowGeneratorTask.md#useredtextureformat)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:370](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L370)

Disposes of the task.

#### Returns

`void`

#### Overrides

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`dispose`](FrameGraphShadowGeneratorTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L299)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`getClassName`](FrameGraphShadowGeneratorTask.md#getclassname)

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/frameGraphTask.ts:90](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L90)

This function is called once after the task has been added to the frame graph and before the frame graph is built for the first time.
This allows you to initialize asynchronous resources, which is not possible in the constructor.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the initialization is complete.

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`initAsync`](FrameGraphShadowGeneratorTask.md#initasync)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts:319](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/shadowGeneratorTask.ts#L319)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Inherited from

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`isReady`](FrameGraphShadowGeneratorTask.md#isready)

***

### record()

> **record**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L303)

Records the task in the frame graph. Use this function to add content (render passes, ...) to the task.

#### Returns

`void`

#### Overrides

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md).[`record`](FrameGraphShadowGeneratorTask.md#record)

***

### IsCascadedShadowGenerator()

> `static` **IsCascadedShadowGenerator**(`task`): `task is FrameGraphCascadedShadowGeneratorTask`

Defined in: [babylonjs-source/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts:21](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/FrameGraph/Tasks/Rendering/csmShadowGeneratorTask.ts#L21)

Checks if a shadow generator task is a cascaded shadow generator task.

#### Parameters

##### task

[`FrameGraphShadowGeneratorTask`](FrameGraphShadowGeneratorTask.md)

The task to check.

#### Returns

`task is FrameGraphCascadedShadowGeneratorTask`

True if the task is a cascaded shadow generator task, else false.
