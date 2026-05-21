[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DirectionalLightFrustumViewer

# Class: DirectionalLightFrustumViewer

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:22](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L22)

**`Since`**

Class used to render a debug view of the frustum for a directional light

## See

https://playground.babylonjs.com/#7EFGSG#4
 5.0.0

## Constructors

### Constructor

> **new DirectionalLightFrustumViewer**(`light`, `camera?`): `DirectionalLightFrustumViewer`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:112](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L112)

Creates a new frustum viewer

#### Parameters

##### light

[`DirectionalLight`](DirectionalLight.md)

directional light to display the frustum for

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\> = `null`

camera used to retrieve the minZ / maxZ values if the shadowMinZ/shadowMaxZ values of the light are not setup

#### Returns

`DirectionalLightFrustumViewer`

## Accessors

### showLines

#### Get Signature

> **get** **showLines**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L75)

true to display the edges of the frustum

##### Returns

`boolean`

#### Set Signature

> **set** **showLines**(`show`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:79](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L79)

##### Parameters

###### show

`boolean`

##### Returns

`void`

***

### showPlanes

#### Get Signature

> **get** **showPlanes**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:93](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L93)

true to display the planes of the frustum

##### Returns

`boolean`

#### Set Signature

> **set** **showPlanes**(`show`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L97)

##### Parameters

###### show

`boolean`

##### Returns

`void`

***

### transparency

#### Get Signature

> **get** **transparency**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:60](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L60)

Gets or sets the transparency of the frustum planes

##### Returns

`number`

#### Set Signature

> **set** **transparency**(`alpha`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:64](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L64)

##### Parameters

###### alpha

`number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:290](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L290)

Dispose of the class / remove the frustum view

#### Returns

`void`

***

### hide()

> **hide**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:141](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L141)

Hides the frustum

#### Returns

`void`

***

### show()

> **show**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L126)

Shows the frustum

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/directionalLightFrustumViewer.ts#L176)

Updates the frustum.
Call this method to update the frustum view if the light has changed position/direction

#### Returns

`void`
