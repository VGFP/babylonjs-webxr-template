[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / SliderGroup

# Class: SliderGroup

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:234](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L234)

Class used to create a SliderGroup
which contains groups of slider buttons

## Extends

- [`SelectorGroup`](SelectorGroup.md)

## Constructors

### Constructor

> **new SliderGroup**(`name`): `SliderGroup`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L22)

Creates a new SelectorGroup

#### Parameters

##### name

`string`

of group, used as a group heading

#### Returns

`SliderGroup`

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`constructor`](SelectorGroup.md#constructor)

## Properties

### name

> **name**: `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L24)

name of SelectorGroup

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`name`](SelectorGroup.md#name)

## Accessors

### groupPanel

#### Get Signature

> **get** **groupPanel**(): [`StackPanel`](StackPanel.md)

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:32](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L32)

Gets the groupPanel of the SelectorGroup

##### Returns

[`StackPanel`](StackPanel.md)

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`groupPanel`](SelectorGroup.md#grouppanel)

***

### header

#### Get Signature

> **get** **header**(): `string`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L42)

Gets and sets the group header

##### Returns

`string`

#### Set Signature

> **set** **header**(`label`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L46)

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

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L37)

Gets the selectors array

##### Returns

[`StackPanel`](StackPanel.md)[]

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`selectors`](SelectorGroup.md#selectors)

## Methods

### addSlider()

> **addSlider**(`label`, `func?`, `unit?`, `min?`, `max?`, `value?`, `onValueChange?`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L245)

Adds a slider to the SelectorGroup

#### Parameters

##### label

`string`

is the label for the SliderBar

##### func?

(`v`) => `void`

is the function called when the Slider moves

##### unit?

`string` = `"Units"`

is a string describing the units used, eg degrees or metres

##### min?

`number` = `0`

is the minimum value for the Slider

##### max?

`number` = `0`

is the maximum value for the Slider

##### value?

`number` = `0`

is the start value for the Slider between min and max

##### onValueChange?

(`v`) => `number`

is the function used to format the value displayed, eg radians to degrees

#### Returns

`void`

***

### removeSelector()

> **removeSelector**(`selectorNb`): `void`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/selector.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/selector.ts#L83)

Removes the selector at the given position

#### Parameters

##### selectorNb

`number`

the position of the selector within the group

#### Returns

`void`

#### Inherited from

[`SelectorGroup`](SelectorGroup.md).[`removeSelector`](SelectorGroup.md#removeselector)
