[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / TextWrapping

# Enumeration: TextWrapping

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/textBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/textBlock.ts#L14)

Enum that determines the text-wrapping mode to use.

## Enumeration Members

### Clip

> **Clip**: `0`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/textBlock.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/textBlock.ts#L18)

Clip the text when it's larger than Control.width; this is the default mode.

***

### Ellipsis

> **Ellipsis**: `2`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/textBlock.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/textBlock.ts#L28)

Ellipsize the text, i.e. shrink with trailing … when text is larger than Control.width.

***

### HTML

> **HTML**: `4`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/textBlock.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/textBlock.ts#L38)

Use HTML to wrap the text. This is the only mode that supports east-asian languages.

***

### WordWrap

> **WordWrap**: `1`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/textBlock.ts:23](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/textBlock.ts#L23)

Wrap the text word-wise, i.e. try to add line-breaks at word boundary to fit within Control.width.

***

### WordWrapEllipsis

> **WordWrapEllipsis**: `3`

Defined in: [babylonjs-source/packages/dev/gui/src/2D/controls/textBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/gui/src/2D/controls/textBlock.ts#L33)

Wrap the text word-wise and clip the text when the text's height is larger than the Control.height, and shrink the last line with trailing … .
