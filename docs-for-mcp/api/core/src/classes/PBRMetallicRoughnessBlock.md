[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PBRMetallicRoughnessBlock

# Class: PBRMetallicRoughnessBlock

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L63)

Block used to implement the PBR metallic/roughness model

## See

https://playground.babylonjs.com/#D8AK3Z#80

## Extends

- [`NodeMaterialBlock`](NodeMaterialBlock.md)

## Constructors

### Constructor

> **new PBRMetallicRoughnessBlock**(`name`): `PBRMetallicRoughnessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L105)

Create a new ReflectionBlock

#### Parameters

##### name

`string`

defines the block name

#### Returns

`PBRMetallicRoughnessBlock`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`constructor`](NodeMaterialBlock.md#constructor)

## Properties

### alphaTestCutoff

> **alphaTestCutoff**: `number` = `0.5`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:225](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L225)

Defines the alpha limits in alpha test mode.

***

### baseDiffuseModel

> **baseDiffuseModel**: `number` = `Constants.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:286](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L286)

Base Diffuse Model

***

### comments

> **comments**: `string` = `""`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:104](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L104)

Gets or sets the comments associated with this block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`comments`](NodeMaterialBlock.md#comments)

***

### debugFactor

> **debugFactor**: `number` = `1`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:403](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L403)

As the default viewing range might not be enough (if the ambient is really small for instance)
You can use the factor to better multiply the final value.

***

### debugLimit

> **debugLimit**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:396](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L396)

Specify from where on screen the debug mode should start.
The value goes from -1 (full screen) to 1 (not visible)
It helps with side by side comparison against the final render
This defaults to 0

***

### debugMode

> **debugMode**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:387](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L387)

Defines the material debug mode.
It helps seeing only some components of the material while troubleshooting.

***

### directIntensity

> **directIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:185](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L185)

Intensity of the direct lights e.g. the four lights available in your scene.
This impacts both the direct diffuse and specular highlights.

***

### enableSpecularAntiAliasing

> **enableSpecularAntiAliasing**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L253)

Enables specular anti aliasing in the PBR shader.
It will both interacts on the Geometry for analytical and IBL lighting.
It also prefilter the roughness map based on the bump values.

***

### environmentIntensity

> **environmentIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:192](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L192)

Intensity of the environment e.g. how much the environment will light the object
either through harmonics for rough material or through the reflection for shiny ones.

***

### forceNormalForward

> **forceNormalForward**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:318](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L318)

Force normal to face away from face.

***

### generateOnlyFragmentCode

> **generateOnlyFragmentCode**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:324](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L324)

Indicates that no code should be generated in the vertex shader. Can be useful in some specific circumstances (like when doing ray marching for eg)

***

### inputsAreExclusive

> **inputsAreExclusive**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:55](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L55)

Gets or sets a boolean indicating that only one input can be connected at a time

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`inputsAreExclusive`](NodeMaterialBlock.md#inputsareexclusive)

***

### light

> **light**: [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](Light.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:67](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L67)

Gets or sets the light associated with this block

***

### lightFalloff

> **lightFalloff**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:213](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L213)

Defines the  falloff type used in this material.
It by default is Physical.

***

### onCodeIsReadyObservable

> **onCodeIsReadyObservable**: [`Observable`](Observable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:52](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L52)

Observable raised when the block code is ready (if the code loading is async)

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`onCodeIsReadyObservable`](NodeMaterialBlock.md#oncodeisreadyobservable)

***

### realTimeFiltering

> **realTimeFiltering**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:259](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L259)

Enables realtime filtering on the texture.

***

### realTimeFilteringQuality

> **realTimeFilteringQuality**: `number` = `Constants.TEXTURE_FILTERING_QUALITY_LOW`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:272](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L272)

Quality switch for realtime filtering

***

### specularIntensity

> **specularIntensity**: `number` = `1.0`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:199](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L199)

This is a special control allowing the reduction of the specular highlights coming from the
four lights of the scene. Those highlights may not be needed in full environment lighting.

***

### uniqueId

> **uniqueId**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:99](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L99)

Gets or sets the unique id of the node

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`uniqueId`](NodeMaterialBlock.md#uniqueid)

***

### unlit

> **unlit**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:312](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L312)

If set to true, no lighting calculations will be applied.

***

### useAlphaBlending

> **useAlphaBlending**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:231](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L231)

Specifies that alpha blending should be used

***

### useAlphaTest

> **useAlphaTest**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L219)

Specifies that alpha test should be used

***

### useEnergyConservation

> **useEnergyConservation**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:292](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L292)

Defines if the material uses energy conservation.

***

### useHorizonOcclusion

> **useHorizonOcclusion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:306](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L306)

This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
makes the reflect vector face the model (under horizon).

***

### useRadianceOcclusion

> **useRadianceOcclusion**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L299)

This parameters will enable/disable radiance occlusion by preventing the radiance to lit
too much the area relying on ambient texture to define their ambient occlusion.

***

### useRadianceOverAlpha

> **useRadianceOverAlpha**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:238](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L238)

Specifies that the material will keeps the reflection highlights over a transparent surface (only the most luminous ones).
A car glass is a good example of that. When the street lights reflects on it you can not see what is behind.

***

### useSpecularOverAlpha

> **useSpecularOverAlpha**: `boolean` = `true`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:245](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L245)

Specifies that the material will keeps the specular highlights over a transparent surface (only the most luminous ones).
A car glass is a good example of that. When sun reflects on it you can not see what is behind.

***

### visibleInInspector

> **visibleInInspector**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:216](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L216)

Gets or sets a boolean indicating that this input can be edited in the Inspector (false by default)

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`visibleInInspector`](NodeMaterialBlock.md#visibleininspector)

***

### visibleOnFrame

> **visibleOnFrame**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L219)

Gets or sets a boolean indicating that this input can be edited from a collapsed frame

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`visibleOnFrame`](NodeMaterialBlock.md#visibleonframe)

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:694](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L694)

Gets the alpha output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### ambientClr

#### Get Signature

> **get** **ambientClr**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:610](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L610)

Gets the ambient output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### ambientColor

#### Get Signature

> **get** **ambientColor**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:561](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L561)

Gets the ambient color input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### ambientOcc

#### Get Signature

> **get** **ambientOcc**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:540](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L540)

Gets the ambient occlusion input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### anisotropy

#### Get Signature

> **get** **anisotropy**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:596](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L596)

Gets the anisotropy object parameters

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### baseColor

#### Get Signature

> **get** **baseColor**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:519](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L519)

Gets the base color input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### buildId

#### Get Signature

> **get** **buildId**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:151](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L151)

Gets or sets the build Id

##### Returns

`number`

#### Set Signature

> **set** **buildId**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:155](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L155)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`buildId`](NodeMaterialBlock.md#buildid)

***

### cameraPosition

#### Get Signature

> **get** **cameraPosition**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:505](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L505)

Gets the camera position input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### clearcoat

#### Get Signature

> **get** **clearcoat**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:575](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L575)

Gets the clear coat object parameters

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### clearcoatDir

#### Get Signature

> **get** **clearcoatDir**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L631)

Gets the clear coat output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### clearcoatInd

#### Get Signature

> **get** **clearcoatInd**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:659](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L659)

Gets the indirect clear coat output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### codeIsReady

#### Get Signature

> **get** **codeIsReady**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L81)

Gets a boolean indicating that this block has is code ready to be used

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`codeIsReady`](NodeMaterialBlock.md#codeisready)

***

### diffuseDir

#### Get Signature

> **get** **diffuseDir**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:617](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L617)

Gets the diffuse output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### diffuseInd

#### Get Signature

> **get** **diffuseInd**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:645](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L645)

Gets the indirect diffuse output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### indexOfRefraction

#### Get Signature

> **get** **indexOfRefraction**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:554](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L554)

Gets the index of refraction input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### inputs

#### Get Signature

> **get** **inputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:176](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L176)

Gets the list of input points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`inputs`](NodeMaterialBlock.md#inputs)

***

### iridescence

#### Get Signature

> **get** **iridescence**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:603](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L603)

Gets the iridescence object parameters

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### isFinalMerger

#### Get Signature

> **get** **isFinalMerger**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:116](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L116)

Gets a boolean indicating that this block is an end block (e.g. it is generating a system value)

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isFinalMerger`](NodeMaterialBlock.md#isfinalmerger)

***

### isInput

#### Get Signature

> **get** **isInput**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L123)

Gets a boolean indicating that this block is an input (e.g. it sends data to the shader)

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isInput`](NodeMaterialBlock.md#isinput)

***

### isLoop

#### Get Signature

> **get** **isLoop**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L144)

Gets a boolean indicating if this block is a loop

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isLoop`](NodeMaterialBlock.md#isloop)

***

### isTeleportIn

#### Get Signature

> **get** **isTeleportIn**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:137](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L137)

Gets a boolean indicating if this block is a teleport in

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isTeleportIn`](NodeMaterialBlock.md#isteleportin)

***

### isTeleportOut

#### Get Signature

> **get** **isTeleportOut**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:130](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L130)

Gets a boolean indicating if this block is a teleport out

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isTeleportOut`](NodeMaterialBlock.md#isteleportout)

***

### isUnique

#### Get Signature

> **get** **isUnique**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:109](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L109)

Gets a boolean indicating that this block can only be used once per NodeMaterial

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isUnique`](NodeMaterialBlock.md#isunique)

***

### lighting

#### Get Signature

> **get** **lighting**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:680](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L680)

Gets the global lighting output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### metallic

#### Get Signature

> **get** **metallic**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:526](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L526)

Gets the metallic input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:74](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L74)

Gets the name of the block

##### Returns

`string`

#### Set Signature

> **set** **name**(`newName`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L88)

Sets the name of the block. Will check if the name is valid.

##### Parameters

###### newName

`string`

##### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`name`](NodeMaterialBlock.md#name)

***

### opacity

#### Get Signature

> **get** **opacity**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:547](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L547)

Gets the opacity input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### outputs

#### Get Signature

> **get** **outputs**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L181)

Gets the list of output points

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)[]

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`outputs`](NodeMaterialBlock.md#outputs)

***

### perturbedNormal

#### Get Signature

> **get** **perturbedNormal**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L512)

Gets the perturbed normal input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### reflection

#### Get Signature

> **get** **reflection**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:568](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L568)

Gets the reflection object parameters

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### refraction

#### Get Signature

> **get** **refraction**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:673](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L673)

Gets the refraction output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### roughness

#### Get Signature

> **get** **roughness**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:533](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L533)

Gets the roughness input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### shadow

#### Get Signature

> **get** **shadow**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:687](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L687)

Gets the shadow output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### sheen

#### Get Signature

> **get** **sheen**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:582](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L582)

Gets the sheen object parameters

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### sheenDir

#### Get Signature

> **get** **sheenDir**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:638](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L638)

Gets the sheen output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### sheenInd

#### Get Signature

> **get** **sheenInd**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:666](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L666)

Gets the indirect sheen output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### specularDir

#### Get Signature

> **get** **specularDir**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:624](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L624)

Gets the specular output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### specularInd

#### Get Signature

> **get** **specularInd**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:652](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L652)

Gets the indirect specular output component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### subsurface

#### Get Signature

> **get** **subsurface**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:589](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L589)

Gets the sub surface object parameters

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### target

#### Get Signature

> **get** **target**(): [`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L162)

Gets or sets the target of the block

##### Returns

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

#### Set Signature

> **set** **target**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:166](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L166)

##### Parameters

###### value

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

##### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`target`](NodeMaterialBlock.md#target)

***

### view

#### Get Signature

> **get** **view**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:498](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L498)

Gets the view matrix parameter

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### willBeGeneratedIntoVertexShaderFromFragmentShader

#### Get Signature

> **get** **willBeGeneratedIntoVertexShaderFromFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:551](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L551)

Gets a boolean indicating that the code of this block will be promoted to vertex shader even if connected to fragment output

##### Returns

`boolean`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`willBeGeneratedIntoVertexShaderFromFragmentShader`](NodeMaterialBlock.md#willbegeneratedintovertexshaderfromfragmentshader)

***

### worldNormal

#### Get Signature

> **get** **worldNormal**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L491)

Gets the world normal input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

***

### worldPosition

#### Get Signature

> **get** **worldPosition**(): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:484](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L484)

Gets the world position input component

##### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

## Methods

### \_deserialize()

> **\_deserialize**(`serializationObject`, `scene`, `rootUrl`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:1631](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L1631)

Deserializes the block

#### Parameters

##### serializationObject

`any`

the object to deserialize from

##### scene

[`Scene`](Scene.md)

the scene to deserialize in

##### rootUrl

`string`

the root URL for assets

#### Returns

`void`

#### Overrides

`NodeMaterialBlock._deserialize`

***

### autoConfigure()

> **autoConfigure**(`material`, `additionalFilteringInfo?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:703](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L703)

Auto configure the block based on the material

#### Parameters

##### material

[`NodeMaterial`](NodeMaterial.md)

the node material

##### additionalFilteringInfo?

(`node`) => `boolean`

additional filtering info

#### Returns

`void`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`autoConfigure`](NodeMaterialBlock.md#autoconfigure)

***

### bind()

> **bind**(`effect`, `nodeMaterial`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:906](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L906)

Bind data to effect

#### Parameters

##### effect

[`Effect`](Effect.md)

the effect to bind data to

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

the node material

##### mesh?

[`Mesh`](Mesh.md)

the mesh to bind data for

#### Returns

`void`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`bind`](NodeMaterialBlock.md#bind)

***

### build()

> **build**(`state`, `activeBlocks`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:686](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L686)

Compile the current node and generate the shader code

#### Parameters

##### state

`NodeMaterialBuildState`

defines the current compilation state (uniforms, samplers, current string)

##### activeBlocks

[`NodeMaterialBlock`](NodeMaterialBlock.md)[]

defines the list of active blocks (i.e. blocks to compile)

#### Returns

`boolean`

true if already built

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`build`](NodeMaterialBlock.md#build)

***

### clone()

> **clone**(`scene`, `rootUrl?`): [`NodeMaterialBlock`](NodeMaterialBlock.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:909](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L909)

Clone the current block to a new identical block

#### Parameters

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

#### Returns

[`NodeMaterialBlock`](NodeMaterialBlock.md) \| `null`

a copy of the current block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`clone`](NodeMaterialBlock.md#clone)

***

### connectTo()

> **connectTo**(`other`, `options?`): `PBRMetallicRoughnessBlock` \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:444](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L444)

Connect current block with another block

#### Parameters

##### other

[`NodeMaterialBlock`](NodeMaterialBlock.md)

defines the block to connect with

##### options?

define the various options to help pick the right connections

###### input?

`string`

###### output?

`string`

###### outputSwizzle?

`string`

#### Returns

`PBRMetallicRoughnessBlock` \| `undefined`

the current block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`connectTo`](NodeMaterialBlock.md#connectto)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:997](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L997)

Release resources

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`dispose`](NodeMaterialBlock.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:477](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L477)

Gets the current class name

#### Returns

`string`

the class name

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getClassName`](NodeMaterialBlock.md#getclassname)

***

### getFirstAvailableInput()

> **getFirstAvailableInput**(`forOutput?`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:367](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L367)

Will return the first available input e.g. the first one which is not an uniform or an attribute

#### Parameters

##### forOutput?

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)\> = `null`

defines an optional connection point to check compatibility with

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the first available input or null

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getFirstAvailableInput`](NodeMaterialBlock.md#getfirstavailableinput)

***

### getFirstAvailableOutput()

> **getFirstAvailableOutput**(`forBlock?`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:389](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L389)

Will return the first available output e.g. the first one which is not yet connected and not a varying

#### Parameters

##### forBlock?

[`Nullable`](../type-aliases/Nullable.md)\<[`NodeMaterialBlock`](NodeMaterialBlock.md)\> = `null`

defines an optional block to check compatibility with

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the first available input or null

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getFirstAvailableOutput`](NodeMaterialBlock.md#getfirstavailableoutput)

***

### getInputByName()

> **getInputByName**(`name`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:190](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L190)

Find an input by its name

#### Parameters

##### name

`string`

defines the name of the input to look for

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the input or null if not found

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getInputByName`](NodeMaterialBlock.md#getinputbyname)

***

### getOutputByName()

> **getOutputByName**(`name`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:205](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L205)

Find an output by its name

#### Parameters

##### name

`string`

defines the name of the output to look for

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the output or null if not found

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getOutputByName`](NodeMaterialBlock.md#getoutputbyname)

***

### getSiblingOutput()

> **getSiblingOutput**(`current`): [`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:404](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L404)

Gets the sibling of the given output

#### Parameters

##### current

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

defines the current output

#### Returns

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md) \| `null`

the next output in the list or null

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`getSiblingOutput`](NodeMaterialBlock.md#getsiblingoutput)

***

### initialize()

> **initialize**(`state`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:409](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L409)

Initialize the block and prepare the context for build

#### Parameters

##### state

`NodeMaterialBuildState`

defines the state that will be used for the build

#### Returns

`void`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`initialize`](NodeMaterialBlock.md#initialize)

***

### initializeDefines()

> **initializeDefines**(`defines`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:512](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L512)

Initialize defines for shader compilation

#### Parameters

##### defines

`NodeMaterialDefines`

defines the material defines to update

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`initializeDefines`](NodeMaterialBlock.md#initializedefines)

***

### isAnAncestorOf()

> **isAnAncestorOf**(`block`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:419](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L419)

Checks if the current block is an ancestor of a given block

#### Parameters

##### block

[`NodeMaterialBlock`](NodeMaterialBlock.md)

defines the potential descendant block to check

#### Returns

`boolean`

true if block is a descendant

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isAnAncestorOf`](NodeMaterialBlock.md#isanancestorof)

***

### isConnectedInFragmentShader()

> **isConnectedInFragmentShader**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:310](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L310)

Gets a boolean indicating that this connection will be used in the fragment shader

#### Returns

`boolean`

true if connected in fragment shader

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isConnectedInFragmentShader`](NodeMaterialBlock.md#isconnectedinfragmentshader)

***

### isReady()

> **isReady**(`mesh`, `nodeMaterial`, `defines`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:882](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L882)

Checks if the block is ready

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh to check

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

the node material

##### defines

`NodeMaterialDefines`

the list of defines

#### Returns

`boolean`

true if ready

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`isReady`](NodeMaterialBlock.md#isready)

***

### prepareDefines()

> **prepareDefines**(`defines`, `nodeMaterial`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:731](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L731)

Prepare the list of defines

#### Parameters

##### defines

`NodeMaterialDefines`

the list of defines to update

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

the node material

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

the mesh to prepare defines for

#### Returns

`void`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`prepareDefines`](NodeMaterialBlock.md#preparedefines)

***

### provideFallbacks()

> **provideFallbacks**(`fallbacks`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:503](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L503)

Add potential fallbacks if shader compilation fails

#### Parameters

##### fallbacks

[`EffectFallbacks`](EffectFallbacks.md)

defines the current prioritized list of fallbacks

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to be rendered

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`provideFallbacks`](NodeMaterialBlock.md#providefallbacks)

***

### registerInput()

> **registerInput**(`name`, `type`, `isOptional?`, `target?`, `point?`): `PBRMetallicRoughnessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:323](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L323)

Register a new input. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

defines the connection point type

##### isOptional?

`boolean` = `false`

defines a boolean indicating that this input can be omitted

##### target?

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

defines the target to use to limit the connection point (will be VertexAndFragment by default)

##### point?

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`PBRMetallicRoughnessBlock`

the current block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`registerInput`](NodeMaterialBlock.md#registerinput)

***

### registerOutput()

> **registerOutput**(`name`, `type`, `target?`, `point?`): `PBRMetallicRoughnessBlock`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:350](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L350)

Register a new output. Must be called inside a block constructor

#### Parameters

##### name

`string`

defines the connection point name

##### type

[`NodeMaterialBlockConnectionPointTypes`](../enumerations/NodeMaterialBlockConnectionPointTypes.md)

defines the connection point type

##### target?

[`NodeMaterialBlockTargets`](../enumerations/NodeMaterialBlockTargets.md)

defines the target to use to limit the connection point (will be VertexAndFragment by default)

##### point?

[`NodeMaterialConnectionPoint`](NodeMaterialConnectionPoint.md)

an already created connection point. If not provided, create a new one

#### Returns

`PBRMetallicRoughnessBlock`

the current block

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`registerOutput`](NodeMaterialBlock.md#registeroutput)

***

### replaceRepeatableContent()

> **replaceRepeatableContent**(`vertexShaderState`, `defines`, `mesh?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:546](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L546)

Function called when a block is declared as repeatable content generator

#### Parameters

##### vertexShaderState

`NodeMaterialBuildState`

defines the current compilation state for the vertex shader

##### defines

`NodeMaterialDefines`

defines the material defines to update

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to be rendered

#### Returns

`void`

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`replaceRepeatableContent`](NodeMaterialBlock.md#replacerepeatablecontent)

***

### serialize()

> **serialize**(): `any`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:1596](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L1596)

Serializes the block

#### Returns

`any`

the serialized object

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`serialize`](NodeMaterialBlock.md#serialize)

***

### updateUniformsAndSamples()

> **updateUniformsAndSamples**(`state`, `nodeMaterial`, `defines`, `uniformBuffers`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts:854](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/Blocks/PBR/pbrMetallicRoughnessBlock.ts#L854)

Update the uniforms and samples

#### Parameters

##### state

`NodeMaterialBuildState`

the build state

##### nodeMaterial

[`NodeMaterial`](NodeMaterial.md)

the node material

##### defines

`NodeMaterialDefines`

the list of defines

##### uniformBuffers

`string`[]

the uniform buffers

#### Returns

`void`

#### Overrides

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`updateUniformsAndSamples`](NodeMaterialBlock.md#updateuniformsandsamples)

***

### validateBlockName()

> **validateBlockName**(`newName`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts:643](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Materials/Node/nodeMaterialBlock.ts#L643)

Validates the new name for the block node.

#### Parameters

##### newName

`string`

the new name to be given to the node.

#### Returns

`boolean`

false if the name is a reserve word, else true.

#### Inherited from

[`NodeMaterialBlock`](NodeMaterialBlock.md).[`validateBlockName`](NodeMaterialBlock.md#validateblockname)
