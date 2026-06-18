[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeExtensionsObject

# Interface: IGLTFObjectModelTreeExtensionsObject

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:250](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L250)

## Properties

### EXT\_lights\_area

> **EXT\_lights\_area**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L266)

#### lights

> **lights**: `object`

##### lights.\_\_array\_\_

> **\_\_array\_\_**: `object`

##### lights.\_\_array\_\_.\_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### lights.\_\_array\_\_.color

> **color**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`, [`Light`](../../../../../core/src/classes/Light.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### lights.\_\_array\_\_.intensity

> **intensity**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.rect

> **rect**: `object`

##### lights.\_\_array\_\_.rect.aspect

> **aspect**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.size

> **size**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`[], [`Light`](../../../../../core/src/classes/Light.md)[], `number`\>

***

### EXT\_lights\_ies

> **EXT\_lights\_ies**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:280](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L280)

#### lights

> **lights**: `object`

##### lights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`[], [`Light`](../../../../../core/src/classes/Light.md)[], `number`\>

***

### EXT\_lights\_image\_based

> **EXT\_lights\_image\_based**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:285](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L285)

#### lights

> **lights**: `object`

##### lights.\_\_array\_\_

> **\_\_array\_\_**: `object`

##### lights.\_\_array\_\_.\_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### lights.\_\_array\_\_.intensity

> **intensity**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsImageBased_LightImageBased`, [`BaseTexture`](../../../../../core/src/classes/BaseTexture.md), `number`\>

##### lights.\_\_array\_\_.rotation

> **rotation**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsImageBased_LightImageBased`, [`BaseTexture`](../../../../../core/src/classes/BaseTexture.md), [`Quaternion`](../../../../../core/src/classes/Quaternion.md)\>

##### lights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsImageBased_LightImageBased`[], [`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)[], `number`\>

***

### KHR\_lights\_punctual

> **KHR\_lights\_punctual**: `object`

Defined in: [babylonjs-source/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:251](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L251)

#### lights

> **lights**: `object`

##### lights.\_\_array\_\_

> **\_\_array\_\_**: `object`

##### lights.\_\_array\_\_.\_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### lights.\_\_array\_\_.color

> **color**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### lights.\_\_array\_\_.intensity

> **intensity**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.range

> **range**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.spot

> **spot**: `object`

##### lights.\_\_array\_\_.spot.innerConeAngle

> **innerConeAngle**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.spot.outerConeAngle

> **outerConeAngle**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`[], [`Light`](../../../../../core/src/classes/Light.md)[], `number`\>
