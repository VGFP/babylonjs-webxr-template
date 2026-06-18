[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialPanHandler

# Type Alias: GeospatialPanHandler

> **GeospatialPanHandler** = `object`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:25](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L25)

Handler for geospatial pan (globe drag) interactions.
Pan uses screen coordinates and needs a lifecycle (start/update/stop) because
it establishes a drag plane on the globe surface to anchor the cursor.

## Methods

### start()

> **start**(`screenX`, `screenY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L27)

Begin a pan gesture at screen position

#### Parameters

##### screenX

`number`

##### screenY

`number`

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L31)

End the pan gesture

#### Returns

`void`

***

### update()

> **update**(`screenX`, `screenY`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/geospatialCameraMovement.ts:29](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L29)

Continue panning to new screen position

#### Parameters

##### screenX

`number`

##### screenY

`number`

#### Returns

`void`
