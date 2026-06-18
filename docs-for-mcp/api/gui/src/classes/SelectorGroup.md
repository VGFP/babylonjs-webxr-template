[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / SelectorGroup

# Class: SelectorGroup

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:13](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L13)

Class used to create a RadioGroup
which contains groups of radio buttons

## Extended by

- [`CheckboxGroup`](CheckboxGroup.md)
- [`RadioGroup`](RadioGroup.md)
- [`SliderGroup`](SliderGroup.md)

## Constructors

### Constructor

> **new SelectorGroup**(`name`): `SelectorGroup`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L22)

Creates a new SelectorGroup

#### Parameters

##### name

`string`

of group, used as a group heading

#### Returns

`SelectorGroup`

## Properties

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L24)

name of SelectorGroup

## Accessors

### groupPanel

#### Get Signature

> **get** **groupPanel**(): [`StackPanel`](StackPanel.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L32)

Gets the groupPanel of the SelectorGroup

##### Returns

[`StackPanel`](StackPanel.md)

***

### header

#### Get Signature

> **get** **header**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:42](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L42)

Gets and sets the group header

##### Returns

`string`

#### Set Signature

> **set** **header**(`label`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L46)

##### Parameters

###### label

`string`

##### Returns

`void`

***

### selectors

#### Get Signature

> **get** **selectors**(): [`StackPanel`](StackPanel.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L37)

Gets the selectors array

##### Returns

[`StackPanel`](StackPanel.md)[]

## Methods

### removeSelector()

> **removeSelector**(`selectorNb`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:83](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L83)

Removes the selector at the given position

#### Parameters

##### selectorNb

`number`

the position of the selector within the group

#### Returns

`void`
