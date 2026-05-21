[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IInspectableOptions

# Interface: IInspectableOptions

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L55)

Interface used to define custom inspectable options in "Options" mode.
This interface is used by the inspector to display the list of options

## Properties

### label

> **label**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:59](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L59)

Defines the visible part of the option

***

### selected?

> `optional` **selected?**: `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L67)

Defines if the option should be selected or not

***

### value

> **value**: `string` \| `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L63)

Defines the value part of the option (returned through the callback)
