[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PerfCollectionStrategy

# Class: PerfCollectionStrategy

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:35](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L35)

Defines the predefined strategies used in the performance viewer.

## Constructors

### Constructor

> **new PerfCollectionStrategy**(): `PerfCollectionStrategy`

#### Returns

`PerfCollectionStrategy`

## Methods

### AbsoluteFpsStrategy()

> `static` **AbsoluteFpsStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:284](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L284)

Gets the initializer for the strategy used for collection of absolute fps metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the absolute fps strategy

***

### ActiveBonesStrategy()

> `static` **ActiveBonesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:174](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L174)

Gets the initializer for the strategy used for collection of active bones metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the active bones strategy

***

### ActiveFacesStrategy()

> `static` **ActiveFacesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:160](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L160)

Gets the initializer for the strategy used for collection of active faces metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the active faces strategy

***

### ActiveIndicesStrategy()

> `static` **ActiveIndicesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:146](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L146)

Gets the initializer for the strategy used for collection of active indices metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the active indices strategy

***

### ActiveMeshesStrategy()

> `static` **ActiveMeshesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:132](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L132)

Gets the initializer for the strategy used for collection of active meshes metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the active meshes strategy

***

### ActiveParticlesStrategy()

> `static` **ActiveParticlesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:188](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L188)

Gets the initializer for the strategy used for collection of active particles metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the active particles strategy

***

### AnimationsStrategy()

> `static` **AnimationsStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:411](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L411)

Gets the initializer for the strategy used for collection of animations time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the animations time strategy

***

### DrawCallsStrategy()

> `static` **DrawCallsStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:202](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L202)

Gets the initializer for the strategy used for collection of draw calls metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the draw calls strategy

***

### FpsStrategy()

> `static` **FpsStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:40](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L40)

Gets the initializer for the strategy used for collection of fps metrics

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the fps strategy

***

### FrameTotalStrategy()

> `static` **FrameTotalStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:492](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L492)

Gets the initializer for the strategy used for collection of total frame time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the total frame time strategy

***

### GpuFrameTimeStrategy()

> `static` **GpuFrameTimeStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:547](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L547)

Gets the initializer for the strategy used for collection of gpu frame time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the gpu frame time strategy

***

### InterFrameStrategy()

> `static` **InterFrameStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:519](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L519)

Gets the initializer for the strategy used for collection of inter-frame time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the inter-frame time strategy

***

### MeshesSelectionStrategy()

> `static` **MeshesSelectionStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:303](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L303)

Gets the initializer for the strategy used for collection of meshes selection time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the meshes selection time strategy

***

### ParticlesStrategy()

> `static` **ParticlesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:357](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L357)

Gets the initializer for the strategy used for collection of particles time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the particles time strategy

***

### PhysicsStrategy()

> `static` **PhysicsStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:438](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L438)

Gets the initializer for the strategy used for collection of physics time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the physics time strategy

***

### PowerSupplyStrategy()

> `static` **PowerSupplyStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:65](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L65)

Gets the initializer for the strategy used for collection of power supply utilization metrics.
Needs the experimental pressure API.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the power supply utilization strategy

***

### PressureStrategy()

> `static` **PressureStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:74](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L74)

Gets the initializer for the strategy used for collection of pressure metrics.
Needs the experimental pressure API.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the pressure strategy

***

### RenderStrategy()

> `static` **RenderStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:465](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L465)

Gets the initializer for the strategy used for collection of render time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the render time strategy

***

### RenderTargetsStrategy()

> `static` **RenderTargetsStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:330](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L330)

Gets the initializer for the strategy used for collection of render targets time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the render targets time strategy

***

### SpritesStrategy()

> `static` **SpritesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:384](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L384)

Gets the initializer for the strategy used for collection of sprites time metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the sprites time strategy

***

### ThermalStrategy()

> `static` **ThermalStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:56](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L56)

Gets the initializer for the strategy used for collection of thermal utilization metrics.
Needs the experimental pressure API.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the thermal utilization strategy

***

### TotalLightsStrategy()

> `static` **TotalLightsStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:228](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L228)

Gets the initializer for the strategy used for collection of total lights metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the total lights strategy

***

### TotalMaterialsStrategy()

> `static` **TotalMaterialsStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:256](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L256)

Gets the initializer for the strategy used for collection of total materials metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the total materials strategy

***

### TotalMeshesStrategy()

> `static` **TotalMeshesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:118](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L118)

Gets the initializer for the strategy used for collection of total meshes metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the total meshes strategy

***

### TotalTexturesStrategy()

> `static` **TotalTexturesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:270](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L270)

Gets the initializer for the strategy used for collection of total textures metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the total textures strategy

***

### TotalVerticesStrategy()

> `static` **TotalVerticesStrategy**(): [`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

Defined in: [babylonjs-source/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/PerformanceViewer/performanceViewerCollectionStrategies.ts#L242)

Gets the initializer for the strategy used for collection of total vertices metrics.

#### Returns

[`PerfStrategyInitialization`](../type-aliases/PerfStrategyInitialization.md)

the initializer for the total vertices strategy
