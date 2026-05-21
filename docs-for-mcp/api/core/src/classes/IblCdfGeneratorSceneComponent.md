[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IblCdfGeneratorSceneComponent

# Class: IblCdfGeneratorSceneComponent

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:76](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L76)

Defines the IBL CDF Generator scene component responsible for generating CDF maps for a given IBL.

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new IblCdfGeneratorSceneComponent**(`scene`): `IblCdfGeneratorSceneComponent`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:91](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L91)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`IblCdfGeneratorSceneComponent`

## Properties

### name

> `readonly` **name**: `"iblCDFGenerator"` = `SceneComponentConstants.NAME_IBLCDFGENERATOR`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:80](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L80)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:85](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L85)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:115](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L115)

Disposes the component and the associated resources

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L125)

#### Returns

`boolean`

true once the CDF generator's procedural textures and effects are ready.
Used by `Scene.isReady` so that `executeWhenReady` waits for the CDF maps to be
generated before declaring the scene ready to render.

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L108)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts:98](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/iblCdfGeneratorSceneComponent.ts#L98)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
