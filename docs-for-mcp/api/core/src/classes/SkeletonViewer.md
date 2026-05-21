[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SkeletonViewer

# Class: SkeletonViewer

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L36)

Class used to render a debug view of a given skeleton

## See

http://www.babylonjs-playground.com/#1BZJVJ#8

## Constructors

### Constructor

> **new SkeletonViewer**(`skeleton`, `mesh`, `scene`, `autoUpdateBonesMatrices?`, `renderingGroupId?`, `options?`): `SkeletonViewer`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:399](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L399)

Creates a new SkeletonViewer

#### Parameters

##### skeleton

[`Skeleton`](Skeleton.md)

defines the skeleton to render

##### mesh

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

defines the mesh attached to the skeleton

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### autoUpdateBonesMatrices?

`boolean` = `true`

defines a boolean indicating if bones matrices must be forced to update before rendering (true by default)

##### renderingGroupId?

`number` = `2`

defines the rendering group id to use with the viewer

##### options?

`Partial`\<[`ISkeletonViewerOptions`](../interfaces/ISkeletonViewerOptions.md)\> = `{}`

All of the extra constructor options for the SkeletonViewer

#### Returns

`SkeletonViewer`

## Properties

### autoUpdateBonesMatrices

> **autoUpdateBonesMatrices**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:407](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L407)

[true] defines a boolean indicating if bones matrices must be forced to update before rendering (true by default)

***

### color

> **color**: [`Color3`](Color3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:326](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L326)

Gets or sets the color used to render the skeleton

***

### mesh

> **mesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L403)

defines the mesh attached to the skeleton

***

### options

> **options**: `Partial`\<[`ISkeletonViewerOptions`](../interfaces/ISkeletonViewerOptions.md)\> = `{}`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:411](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L411)

[Object] is the options for the viewer

***

### renderingGroupId

> **renderingGroupId**: `number` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L409)

[2] defines the rendering group id to use with the viewer

***

### skeleton

> **skeleton**: [`Skeleton`](Skeleton.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:401](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L401)

defines the skeleton to render

***

### DISPLAY\_LINES

> `readonly` `static` **DISPLAY\_LINES**: `0` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:38](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L38)

public Display constants BABYLON.SkeletonViewer.DISPLAY_LINES

***

### DISPLAY\_SPHERE\_AND\_SPURS

> `readonly` `static` **DISPLAY\_SPHERE\_AND\_SPURS**: `2` = `2`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L42)

public Display constants BABYLON.SkeletonViewer.DISPLAY_SPHERE_AND_SPURS

***

### DISPLAY\_SPHERES

> `readonly` `static` **DISPLAY\_SPHERES**: `1` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L40)

public Display constants BABYLON.SkeletonViewer.DISPLAY_SPHERES

## Accessors

### debugLocalAxesMesh

#### Get Signature

> **get** **debugLocalAxesMesh**(): [`Nullable`](../type-aliases/Nullable.md)\<[`LinesMesh`](LinesMesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:376](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L376)

Gets the local axes mesh

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`LinesMesh`](LinesMesh.md)\>

***

### debugMesh

#### Get Signature

> **get** **debugMesh**(): [`AbstractMesh`](AbstractMesh.md) \| [`LinesMesh`](LinesMesh.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:368](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L368)

Gets the debugMesh

##### Returns

[`AbstractMesh`](AbstractMesh.md) \| [`LinesMesh`](LinesMesh.md) \| `null`

#### Set Signature

> **set** **debugMesh**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:372](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L372)

Sets the debugMesh

##### Parameters

###### value

[`AbstractMesh`](AbstractMesh.md) \| [`LinesMesh`](LinesMesh.md) \| `null`

##### Returns

`void`

***

### displayMode

#### Get Signature

> **get** **displayMode**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:380](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L380)

Gets the displayMode

##### Returns

`number`

#### Set Signature

> **set** **displayMode**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:384](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L384)

Sets the displayMode

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:518](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L518)

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:497](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L497)

Gets or sets a boolean indicating if the viewer is enabled

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isReady

#### Get Signature

> **get** **isReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:360](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L360)

Checks Ready Status.

##### Returns

`boolean`

***

### ready

#### Set Signature

> **set** **ready**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:364](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L364)

Sets Ready Status.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:352](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L352)

Gets the Scene.

##### Returns

[`Scene`](Scene.md)

***

### utilityLayer

#### Get Signature

> **get** **utilityLayer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`UtilityLayerRenderer`](UtilityLayerRenderer.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:356](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L356)

Gets the utilityLayer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`UtilityLayerRenderer`](UtilityLayerRenderer.md)\>

## Methods

### changeDisplayMode()

> **changeDisplayMode**(`mode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:986](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L986)

Changes the displayMode of the skeleton viewer

#### Parameters

##### mode

`number`

The displayMode numerical value

#### Returns

`void`

***

### changeDisplayOptions()

> **changeDisplayOptions**(`option`, `value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:1018](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L1018)

Sets a display option of the skeleton viewer

| Option           | Type    | Default | Description |
| ---------------- | ------- | ------- | ----------- |
| midStep          | float   | 0.235   | A percentage between a bone and its child that determines the widest part of a spur. Only used when `displayMode` is set to `DISPLAY_SPHERE_AND_SPURS`. |
| midStepFactor    | float   | 0.15    | Mid step width expressed as a factor of the length. A value of 0.5 makes the spur width half of the spur length. Only used when `displayMode` is set to `DISPLAY_SPHERE_AND_SPURS`. |
| sphereBaseSize   | float   | 2       | Sphere base size. Only used when `displayMode` is set to `DISPLAY_SPHERE_AND_SPURS`. |
| sphereScaleUnit  | float   | 0.865   | Sphere scale factor used to scale spheres in relation to the longest bone. Only used when `displayMode` is set to `DISPLAY_SPHERE_AND_SPURS`. |
| spurFollowsChild | boolean | false   | Whether a spur should attach its far end to the child bone. |
| showLocalAxes    | boolean | false   | Displays local axes on all bones. |
| localAxesSize    | float   | 0.075   | Determines the length of each local axis. |

#### Parameters

##### option

`string`

String of the option name

##### value

`number` \| `boolean`

The numerical option value

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:1034](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L1034)

Release associated resources

#### Returns

`void`

***

### update()

> **update**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L477)

Update the viewer to sync with current skeleton state, only used to manually update.

#### Returns

`void`

***

### CreateBoneWeightShader()

> `static` **CreateBoneWeightShader**(`options`, `scene`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:50](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L50)

public static method to create a BoneWeight Shader

#### Parameters

##### options

[`IBoneWeightShaderOptions`](../interfaces/IBoneWeightShaderOptions.md)

The constructor options

##### scene

[`Scene`](Scene.md)

The scene that the shader is scoped to

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

The created ShaderMaterial

#### See

http://www.babylonjs-playground.com/#1BZJVJ#395

***

### CreateSkeletonMapShader()

> `static` **CreateSkeletonMapShader**(`options`, `scene`): [`ShaderMaterial`](ShaderMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Debug/skeletonViewer.ts:177](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Debug/skeletonViewer.ts#L177)

public static method to create a BoneWeight Shader

#### Parameters

##### options

[`ISkeletonMapShaderOptions`](../interfaces/ISkeletonMapShaderOptions.md)

The constructor options

##### scene

[`Scene`](Scene.md)

The scene that the shader is scoped to

#### Returns

[`ShaderMaterial`](ShaderMaterial.md)

The created ShaderMaterial
