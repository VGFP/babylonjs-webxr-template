[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ProceduralTextureSceneComponent

# Class: ProceduralTextureSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts:9](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts#L9)

Defines the Procedural Texture scene component responsible to manage any Procedural Texture
in a given scene.

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new ProceduralTextureSceneComponent**(`scene`): `ProceduralTextureSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts:24](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts#L24)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`ProceduralTextureSceneComponent`

## Properties

### name

> `readonly` **name**: `"ProceduralTexture"` = `SceneComponentConstants.NAME_PROCEDURALTEXTURE`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts:13](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts#L13)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts#L18)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts:46](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts#L46)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts#L39)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts:31](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Textures/Procedurals/proceduralTextureSceneComponent.ts#L31)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
