[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LightingVolume

# Class: LightingVolume

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L21)

Class used to create a lighting volume from a directional light's shadow generator.

## Constructors

### Constructor

> **new LightingVolume**(`name`, `scene`, `shadowGenerator?`, `tesselation?`): `LightingVolume`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L149)

Creates a new LightingVolume.

#### Parameters

##### name

`string`

The name of the lighting volume.

##### scene

[`Scene`](Scene.md)

The scene the lighting volume belongs to.

##### shadowGenerator?

[`ShadowGenerator`](ShadowGenerator.md)

The shadow generator used to create the lighting volume. This is optional in the constructor, but must be set before calling updateMesh.

##### tesselation?

`number` = `64`

The tesselation level of the lighting volume (default: 64).

#### Returns

`LightingVolume`

## Accessors

### firstUpdate

#### Get Signature

> **get** **firstUpdate**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:126](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L126)

Indicates whether this is the first update of the lighting volume.
If true, the volume has not yet been updated for the first time.

##### Returns

`boolean`

***

### frequency

#### Get Signature

> **get** **frequency**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L99)

The frequency (in number of times you call updateMesh) at which the lighting volume is updated.

##### Returns

`number`

#### Set Signature

> **set** **frequency**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:103](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L103)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### mesh

#### Get Signature

> **get** **mesh**(): [`Mesh`](Mesh.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:90](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L90)

The mesh used as a support for the lighting volume.
Note that this mesh is not automatically added to the scene's mesh array.
If you want to render it, you need to add it manually.

##### Returns

[`Mesh`](Mesh.md)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:111](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L111)

The name of the lighting volume.

##### Returns

`string`

#### Set Signature

> **set** **name**(`name`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L115)

##### Parameters

###### name

`string`

##### Returns

`void`

***

### shadowGenerator

#### Get Signature

> **get** **shadowGenerator**(): [`ShadowGenerator`](ShadowGenerator.md)

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:49](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L49)

The shadow generator used to create the lighting volume.

##### Returns

[`ShadowGenerator`](ShadowGenerator.md)

#### Set Signature

> **set** **shadowGenerator**(`sg`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:53](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L53)

##### Parameters

###### sg

[`ShadowGenerator`](ShadowGenerator.md)

##### Returns

`void`

***

### tesselation

#### Get Signature

> **get** **tesselation**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L76)

The tesselation level of the lighting volume.

##### Returns

`number`

#### Set Signature

> **set** **tesselation**(`n`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L80)

##### Parameters

###### n

`number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:270](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L270)

Disposes the lighting volume and associated resources.

#### Returns

`void`

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:193](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L193)

Checks if the lighting volume is ready to be updated.

#### Returns

`boolean`

True if the volume is ready to be updated.

***

### update()

> **update**(`forceUpdate?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Lights/lightingVolume.ts:208](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Lights/lightingVolume.ts#L208)

Updates the lighting volume mesh.

#### Parameters

##### forceUpdate?

`boolean` = `false`

If true, forces the update even if the frequency condition is not met.

#### Returns

`void`
