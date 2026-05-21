[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ResolveWebXRFeature

# Type Alias: ResolveWebXRFeature\<T\>

> **ResolveWebXRFeature**\<`T`\> = `T` *extends* keyof [`IWebXRFeatureNameTypeMap`](../interfaces/IWebXRFeatureNameTypeMap.md) ? [`IWebXRFeatureNameTypeMap`](../interfaces/IWebXRFeatureNameTypeMap.md)\[`T`\] : [`IWebXRFeature`](../interfaces/IWebXRFeature.md)

Defined in: [babylonjs-source/packages/dev/core/src/XR/webXRFeaturesManager.ts:253](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/XR/webXRFeaturesManager.ts#L253)

Helper type to resolve the specific feature type based on the feature name,
or fallback to IWebXRFeature if the feature name is not in the type map.

## Type Parameters

### T

`T` *extends* [`WebXRFeatureNameType`](WebXRFeatureNameType.md)
