[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateText

# Function: CreateText()

> **CreateText**(`name`, `text`, `fontData`, `options?`, `scene?`, `earcutInjection?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](../classes/Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Meshes/Builders/textBuilder.ts:258](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Meshes/Builders/textBuilder.ts#L258)

Create a text mesh

## Parameters

### name

`string`

defines the name of the mesh

### text

`string`

defines the text to use to build the mesh

### fontData

[`IFontData`](../interfaces/IFontData.md)

defines the font data (can be generated with http://gero3.github.io/facetype.js/)

### options?

defines options used to create the mesh

#### depth?

`number`

#### faceColors?

[`Color4`](../classes/Color4.md)[]

#### faceUV?

[`Vector4`](../classes/Vector4.md)[]

#### perLetterFaceColors?

(`letterIndex`) => [`Color4`](../classes/Color4.md)[]

#### perLetterFaceUV?

(`letterIndex`) => [`Vector4`](../classes/Vector4.md)[]

#### resolution?

`number`

#### sideOrientation?

`number`

#### size?

`number`

### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

defines the hosting scene

### earcutInjection?

`any` = `earcut`

can be used to inject your own earcut reference

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](../classes/Mesh.md)\>

a new Mesh

## See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set/text
