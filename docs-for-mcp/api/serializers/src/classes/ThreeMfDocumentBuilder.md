[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfDocumentBuilder

# Class: ThreeMfDocumentBuilder

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:437](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L437)

## Constructors

### Constructor

> **new ThreeMfDocumentBuilder**(): `ThreeMfDocumentBuilder`

#### Returns

`ThreeMfDocumentBuilder`

## Methods

### build()

> **build**(): [`I3mfDocument`](../interfaces/I3mfDocument.md)

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:491](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L491)

#### Returns

[`I3mfDocument`](../interfaces/I3mfDocument.md)

***

### withContentType()

> **withContentType**(`type`): `ThreeMfDocumentBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:447](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L447)

#### Parameters

##### type

[`I3mfContentType`](../interfaces/I3mfContentType.md)

#### Returns

`ThreeMfDocumentBuilder`

***

### withModel()

> **withModel**(`m`): `ThreeMfDocumentBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:481](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L481)

#### Parameters

##### m

[`I3mfModel`](../interfaces/I3mfModel.md) \| [`ThreeMfModelBuilder`](ThreeMfModelBuilder.md)

#### Returns

`ThreeMfDocumentBuilder`

***

### withRelationship()

> **withRelationship**(`rel`): `ThreeMfDocumentBuilder`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:463](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L463)

#### Parameters

##### rel

[`I3mfRelationship`](../interfaces/I3mfRelationship.md)

#### Returns

`ThreeMfDocumentBuilder`
