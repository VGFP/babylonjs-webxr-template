[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForFrameBoundValues

# Function: PrepareDefinesForFrameBoundValues()

> **PrepareDefinesForFrameBoundValues**(`scene`, `engine`, `material`, `defines`, `useInstances`, `useClipPlane?`, `useThinInstances?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/materialHelper.functions.ts:1032](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Materials/materialHelper.functions.ts#L1032)

Helper used to prepare the list of defines associated with frame values for shader compilation

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the current scene

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the current engine

### material

[`Material`](../classes/Material.md)

defines the material we are compiling the shader for

### defines

`any`

specifies the list of active defines

### useInstances

`boolean`

defines if instances have to be turned on

### useClipPlane?

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\> = `null`

defines if clip plane have to be turned on

### useThinInstances?

`boolean` = `false`

defines if thin instances have to be turned on

## Returns

`void`
