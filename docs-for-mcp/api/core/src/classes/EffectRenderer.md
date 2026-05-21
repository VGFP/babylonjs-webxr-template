[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EffectRenderer

# Class: EffectRenderer

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L41)

Helper class to render one or more effects.
You can access the previous rendering in your shader by declaring a sampler named textureSampler

## Constructors

### Constructor

> **new EffectRenderer**(`engine`, `options?`): `EffectRenderer`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L62)

Creates an effect renderer

#### Parameters

##### engine

[`AbstractEngine`](AbstractEngine.md)

the engine to use for rendering

##### options?

[`IEffectRendererOptions`](../interfaces/IEffectRendererOptions.md) = `DefaultOptions`

defines the options of the effect renderer

#### Returns

`EffectRenderer`

## Properties

### engine

> `readonly` **engine**: [`AbstractEngine`](AbstractEngine.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:45](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L45)

The engine the effect renderer has been created for.

## Methods

### applyEffectWrapper()

> **applyEffectWrapper**(`effectWrapper`, `depthTest?`, `stencilTest?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:108](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L108)

Sets the current effect wrapper to use during draw.
The effect needs to be ready before calling this api.
This also sets the default full screen position attribute.

#### Parameters

##### effectWrapper

[`EffectWrapper`](EffectWrapper.md)

Defines the effect to draw with

##### depthTest?

`boolean` = `false`

Whether to enable depth testing (default: false)

##### stencilTest?

`boolean` = `false`

Whether to enable stencil testing (default: false)

#### Returns

`void`

***

### bindBuffers()

> **bindBuffers**(`effect`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L96)

Binds the embedded attributes buffer to the effect.

#### Parameters

##### effect

[`Effect`](Effect.md)

Defines the effect to bind the attributes for

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:180](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L180)

Disposes of the effect renderer

#### Returns

`void`

***

### draw()

> **draw**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:136](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L136)

Draws a full screen quad.

#### Returns

`void`

***

### render()

> **render**(`effectWrapper`, `outputTexture?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:149](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L149)

renders one or more effects to a specified texture

#### Parameters

##### effectWrapper

[`EffectWrapper`](EffectWrapper.md)

the effect to renderer

##### outputTexture?

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetWrapper`](RenderTargetWrapper.md) \| [`IRenderTargetTexture`](../interfaces/IRenderTargetTexture.md)\> = `null`

texture to draw to, if null it will render to the currently bound frame buffer

#### Returns

`void`

***

### restoreStates()

> **restoreStates**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L128)

Restores engine states

#### Returns

`void`

***

### saveStates()

> **saveStates**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:120](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L120)

Saves engine states

#### Returns

`void`

***

### setViewport()

> **setViewport**(`viewport?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/effectRenderer.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/effectRenderer.ts#L88)

Sets the current viewport in normalized coordinates 0-1

#### Parameters

##### viewport?

[`Viewport`](Viewport.md) = `...`

Defines the viewport to set (defaults to 0 0 1 1)

#### Returns

`void`
