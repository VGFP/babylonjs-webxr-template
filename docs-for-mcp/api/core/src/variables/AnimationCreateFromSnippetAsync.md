[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationCreateFromSnippetAsync

# ~~Variable: AnimationCreateFromSnippetAsync~~

> `const` **AnimationCreateFromSnippetAsync**: (`this`, `snippetId`) => `Promise`\<[`Animation`](../classes/Animation.md) \| [`Animation`](../classes/Animation.md)[]\> = `AnimationParseFromSnippetAsync`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/animation.pure.ts:1694](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Animations/animation.pure.ts#L1694)

Creates an animation or an array of animations from a snippet saved by the Inspector

Creates an animation or an array of animations from a snippet saved by the Inspector

## Parameters

### this

`void` \| *typeof* [`Animation`](../namespaces/Animation/README.md)

### snippetId

`string`

defines the snippet to load

## Returns

`Promise`\<[`Animation`](../classes/Animation.md) \| [`Animation`](../classes/Animation.md)[]\>

a promise that will resolve to the new animation or a new array of animations

## Deprecated

Please use AnimationParseFromSnippetAsync instead

## Param

**snippetId**

defines the snippet to load

## Returns

a promise that will resolve to the new animation or a new array of animations
