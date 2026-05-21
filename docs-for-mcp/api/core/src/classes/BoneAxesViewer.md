[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BoneAxesViewer

# Class: BoneAxesViewer

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L13)

The BoneAxesViewer will attach 3 axes to a specific bone of a specific mesh

## See

demo here: https://www.babylonjs-playground.com/#0DE8F4#8

## Extends

- [`AxesViewer`](AxesViewer.md)

## Constructors

### Constructor

> **new BoneAxesViewer**(`scene`, `bone`, `mesh`, `scaleLines?`): `BoneAxesViewer`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L39)

Creates a new BoneAxesViewer

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### bone

[`Bone`](Bone.md)

defines the target bone

##### mesh

[`Mesh`](Mesh.md)

defines the target mesh

##### scaleLines?

`number` = `1`

defines a scaling factor for line length (1 by default)

#### Returns

`BoneAxesViewer`

#### Overrides

[`AxesViewer`](AxesViewer.md).[`constructor`](AxesViewer.md#constructor)

## Properties

### bone

> **bone**: [`Nullable`](../type-aliases/Nullable.md)\<[`Bone`](Bone.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L21)

Gets or sets the target bone where to display the axes viewer

***

### mesh

> **mesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:17](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L17)

Gets or sets the target mesh where to display the axes viewer

***

### pos

> **pos**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L24)

Gets current position

***

### scene

> **scene**: [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L24)

Gets the hosting scene

#### Inherited from

[`AxesViewer`](AxesViewer.md).[`scene`](AxesViewer.md#scene)

***

### xaxis

> **xaxis**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:26](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L26)

Gets direction of X axis

***

### yaxis

> **yaxis**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L28)

Gets direction of Y axis

***

### zaxis

> **zaxis**: [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L30)

Gets direction of Z axis

## Accessors

### scaleLines

#### Get Signature

> **get** **scaleLines**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L30)

Gets or sets a number used to scale line length

##### Returns

`number`

#### Set Signature

> **set** **scaleLines**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:34](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L34)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`AxesViewer`](AxesViewer.md).[`scaleLines`](AxesViewer.md#scalelines)

***

### xAxis

#### Get Signature

> **get** **xAxis**(): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L42)

Gets the node hierarchy used to render x-axis

##### Returns

[`TransformNode`](TransformNode.md)

#### Inherited from

[`AxesViewer`](AxesViewer.md).[`xAxis`](AxesViewer.md#xaxis)

***

### yAxis

#### Get Signature

> **get** **yAxis**(): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L47)

Gets the node hierarchy used to render y-axis

##### Returns

[`TransformNode`](TransformNode.md)

#### Inherited from

[`AxesViewer`](AxesViewer.md).[`yAxis`](AxesViewer.md#yaxis)

***

### zAxis

#### Get Signature

> **get** **zAxis**(): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L52)

Gets the node hierarchy used to render z-axis

##### Returns

[`TransformNode`](TransformNode.md)

#### Inherited from

[`AxesViewer`](AxesViewer.md).[`zAxis`](AxesViewer.md#zaxis)

## Methods

### createInstance()

> **createInstance**(): [`AxesViewer`](AxesViewer.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L131)

Creates an instance of this axes viewer.

#### Returns

[`AxesViewer`](AxesViewer.md)

a new axes viewer with instanced meshes

#### Inherited from

[`AxesViewer`](AxesViewer.md).[`createInstance`](AxesViewer.md#createinstance)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L64)

Releases resources

#### Returns

`void`

#### Overrides

[`AxesViewer`](AxesViewer.md).[`dispose`](AxesViewer.md#dispose)

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/boneAxesViewer.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/boneAxesViewer.ts#L49)

Force the viewer to update

#### Returns

`void`

#### Overrides

[`AxesViewer`](AxesViewer.md).[`update`](AxesViewer.md#update)
