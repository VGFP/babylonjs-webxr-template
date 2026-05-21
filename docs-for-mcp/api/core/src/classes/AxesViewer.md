[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AxesViewer

# Class: AxesViewer

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L14)

The Axes viewer will show 3 axes in a specific point in space

## See

https://doc.babylonjs.com/toolsAndResources/utilities/World_Axes

## Extended by

- [`BoneAxesViewer`](BoneAxesViewer.md)

## Constructors

### Constructor

> **new AxesViewer**(`scene?`, `scaleLines?`, `renderingGroupId?`, `xAxis?`, `yAxis?`, `zAxis?`, `lineThickness?`): `AxesViewer`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L66)

Creates a new AxesViewer

#### Parameters

##### scene?

[`Scene`](Scene.md)

defines the hosting scene

##### scaleLines?

`number` = `1`

defines a number used to scale line length (1 by default)

##### renderingGroupId?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `2`

defines a number used to set the renderingGroupId of the meshes (2 by default)

##### xAxis?

[`TransformNode`](TransformNode.md)

defines the node hierarchy used to render the x-axis

##### yAxis?

[`TransformNode`](TransformNode.md)

defines the node hierarchy used to render the y-axis

##### zAxis?

[`TransformNode`](TransformNode.md)

defines the node hierarchy used to render the z-axis

##### lineThickness?

`number` = `1`

The line thickness to use when creating the arrow. defaults to 1.

#### Returns

`AxesViewer`

## Properties

### scene

> **scene**: [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `null`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L24)

Gets the hosting scene

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

***

### xAxis

#### Get Signature

> **get** **xAxis**(): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L42)

Gets the node hierarchy used to render x-axis

##### Returns

[`TransformNode`](TransformNode.md)

***

### yAxis

#### Get Signature

> **get** **yAxis**(): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:47](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L47)

Gets the node hierarchy used to render y-axis

##### Returns

[`TransformNode`](TransformNode.md)

***

### zAxis

#### Get Signature

> **get** **zAxis**(): [`TransformNode`](TransformNode.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L52)

Gets the node hierarchy used to render z-axis

##### Returns

[`TransformNode`](TransformNode.md)

## Methods

### createInstance()

> **createInstance**(): `AxesViewer`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:131](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L131)

Creates an instance of this axes viewer.

#### Returns

`AxesViewer`

a new axes viewer with instanced meshes

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L141)

Releases resources

#### Returns

`void`

***

### update()

> **update**(`position`, `xaxis`, `yaxis`, `zaxis`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/axesViewer.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/axesViewer.ts#L116)

Force the viewer to update

#### Parameters

##### position

[`Vector3`](Vector3.md)

defines the position of the viewer

##### xaxis

[`Vector3`](Vector3.md)

defines the x axis of the viewer

##### yaxis

[`Vector3`](Vector3.md)

defines the y axis of the viewer

##### zaxis

[`Vector3`](Vector3.md)

defines the z axis of the viewer

#### Returns

`void`
