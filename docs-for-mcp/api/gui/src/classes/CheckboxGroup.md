[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / CheckboxGroup

# Class: CheckboxGroup

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:95](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L95)

Class used to create a CheckboxGroup
which contains groups of checkbox buttons

## Extends

- [`SelectorGroup`](SelectorGroup.md)

## Constructors

### Constructor

> **new CheckboxGroup**(`name`): `CheckboxGroup`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L22)

Creates a new SelectorGroup

#### Parameters

##### name

`string`

of group, used as a group heading

#### Returns

`CheckboxGroup`

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`constructor`](SelectorGroup.md#constructor)

## Properties

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:24](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L24)

name of SelectorGroup

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`name`](SelectorGroup.md#name)

## Accessors

### groupPanel

#### Get Signature

> **get** **groupPanel**(): [`StackPanel`](StackPanel.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:32](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L32)

Gets the groupPanel of the SelectorGroup

##### Returns

[`StackPanel`](StackPanel.md)

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`groupPanel`](SelectorGroup.md#grouppanel)

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

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`header`](SelectorGroup.md#header)

***

### selectors

#### Get Signature

> **get** **selectors**(): [`StackPanel`](StackPanel.md)[]

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:37](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L37)

Gets the selectors array

##### Returns

[`StackPanel`](StackPanel.md)[]

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`selectors`](SelectorGroup.md#selectors)

## Methods

### addCheckbox()

> **addCheckbox**(`text`, `func?`, `checked?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:102](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/gui/src/2D/controls/selector.ts#L102)

Adds a checkbox as a control

#### Parameters

##### text

`string`

is the label for the selector

##### func?

(`s`) => `void`

is the function called when the Selector is checked

##### checked?

`boolean` = `false`

is true when Selector is checked

#### Returns

`void`

***

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

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`removeSelector`](SelectorGroup.md#removeselector)
