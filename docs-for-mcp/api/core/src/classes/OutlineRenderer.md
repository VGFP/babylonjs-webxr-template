[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OutlineRenderer

# Class: OutlineRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L23)

This class is responsible to draw the outline/overlay of meshes.
It should not be used directly but through the available method on mesh.

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new OutlineRenderer**(`scene`): `OutlineRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L71)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L51)

Gets or sets a boolean indicating if the renderer is enabled

***

### name

> **name**: `string` = `SceneComponentConstants.NAME_OUTLINERENDERER`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L31)

The name of the component. Each component must have a unique name.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L36)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

***

### zOffset

> **zOffset**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L41)

Defines a zOffset default Factor to prevent zFighting between the overlay and the mesh.

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `4`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L46)

Defines a zOffset default Unit to prevent zFighting between the overlay and the mesh.

## Accessors

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L63)

Gets the shader language used in the Outline renderer.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:105](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L105)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### isReady()

> **isReady**(`subMesh`, `useInstances`, `renderPassId?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L207)

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

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L98)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L89)

Register the component to one instance of a scene.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)

***

### render()

> **render**(`subMesh`, `batch`, `useOverlay?`, `renderPassId?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Rendering/outlineRenderer.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Rendering/outlineRenderer.pure.ts#L118)

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
