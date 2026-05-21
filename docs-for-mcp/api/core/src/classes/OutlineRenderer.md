[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OutlineRenderer

# Class: OutlineRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L96)

This class is responsible to draw the outline/overlay of meshes.
It should not be used directly but through the available method on mesh.

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new OutlineRenderer**(`scene`): `OutlineRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L144)

Instantiates a new outline renderer. (There could be only one per scene).

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene it belongs to

#### Returns

`OutlineRenderer`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L124)

Gets or sets a boolean indicating if the renderer is enabled

***

### name

> **name**: `string` = `SceneComponentConstants.NAME_OUTLINERENDERER`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L104)

The name of the component. Each component must have a unique name.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L109)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

***

### zOffset

> **zOffset**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:114](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L114)

Defines a zOffset default Factor to prevent zFighting between the overlay and the mesh.

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:119](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L119)

Defines a zOffset default Unit to prevent zFighting between the overlay and the mesh.

## Accessors

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L136)

Gets the shader language used in the Outline renderer.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:178](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L178)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### isReady()

> **isReady**(`subMesh`, `useInstances`, `renderPassId?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:280](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L280)

Returns whether or not the outline renderer is ready for a given submesh.
All the dependencies e.g. submeshes, texture, effect... mus be ready

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

Defines the submesh to check readiness for

##### useInstances

`boolean`

Defines whether wee are trying to render instances or not

##### renderPassId?

`number`

Render pass id to use to render the mesh

#### Returns

`boolean`

true if ready otherwise false

***

### rebuild()

> **rebuild**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:171](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L171)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L162)

Register the component to one instance of a scene.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)

***

### render()

> **render**(`subMesh`, `batch`, `useOverlay?`, `renderPassId?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.ts:191](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Rendering/outlineRenderer.ts#L191)

Renders the outline in the canvas.

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

Defines the sumesh to render

##### batch

`_InstancesBatch`

Defines the batch of meshes in case of instances

##### useOverlay?

`boolean` = `false`

Defines if the rendering is for the overlay or the outline

##### renderPassId?

`number`

Render pass id to use to render the mesh

#### Returns

`void`
