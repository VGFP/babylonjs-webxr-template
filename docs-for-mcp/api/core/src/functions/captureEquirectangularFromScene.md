[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / captureEquirectangularFromScene

# Function: captureEquirectangularFromScene()

> **captureEquirectangularFromScene**(`scene`, `options`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\> \| `null`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/equirectangularCapture.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/equirectangularCapture.ts#L50)

## Parameters

### scene

[`Scene`](../classes/Scene.md)

This refers to the scene which would be rendered in the given equirectangular capture

### options

[`EquiRectangularCaptureOptions`](../interfaces/EquiRectangularCaptureOptions.md)

This refers to the options for a given equirectangular capture

## Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\> \| `null`\>

the requested capture's pixel-data or auto downloads the file if options.filename is specified
