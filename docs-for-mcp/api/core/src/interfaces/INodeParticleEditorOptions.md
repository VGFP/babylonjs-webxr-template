[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INodeParticleEditorOptions

# Interface: INodeParticleEditorOptions

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L33)

Interface used to configure the node particle editor

## Properties

### editorURL?

> `optional` **editorURL?**: `string`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:35](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L35)

Define the URL to load node editor script from

***

### nodeEditorConfig?

> `optional` **nodeEditorConfig?**: `object`

Defined in: [babylonjs-source/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts:37](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.ts#L37)

Additional configuration for the NPE

#### backgroundColor?

> `optional` **backgroundColor?**: [`Color4`](../classes/Color4.md)

#### disposeOnClose?

> `optional` **disposeOnClose?**: `boolean`

If true, the node particle system set will be disposed when the editor is closed (default: true)
