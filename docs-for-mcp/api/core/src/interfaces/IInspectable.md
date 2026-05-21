[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IInspectable

# Interface: IInspectable

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L75)

Interface used to define custom inspectable properties.
This interface is used by the inspector to display custom property grids

## See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

## Properties

### accept?

> `optional` **accept?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L116)

Gets the extensions to accept when using "FileButton" mode.
The value should be a comma separated string with the list of extensions to accept e.g., ".jpg, .png, .tga, .dds, .env".

***

### callback?

> `optional` **callback?**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L103)

Gets the callback function when using "Button" mode

#### Returns

`void`

***

### fileCallback?

> `optional` **fileCallback?**: (`file`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:107](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L107)

Gets the callback function when using "FileButton" mode

#### Parameters

##### file

`File`

#### Returns

`void`

***

### label

> **label**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L79)

Gets the label to display

***

### max?

> `optional` **max?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:95](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L95)

Gets the maximum value of the property when using in "slider" mode

***

### min?

> `optional` **min?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L91)

Gets the minimum value of the property when using in "slider" mode

***

### options?

> `optional` **options?**: [`IInspectableOptions`](IInspectableOptions.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L111)

Gets the list of options when using "Option" mode

***

### propertyName

> **propertyName**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:83](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L83)

Gets the name of the property to edit

***

### step?

> `optional` **step?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L99)

Gets the setp to use when using in "slider" mode

***

### type

> **type**: [`InspectableType`](../enumerations/InspectableType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/iInspectable.ts:87](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/iInspectable.ts#L87)

Gets the type of the editor to use
