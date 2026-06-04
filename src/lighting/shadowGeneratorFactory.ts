import { IShadowLight, ShadowGenerator } from '@babylonjs/core';

export interface CreateShadowGeneratorOptions {
    mapSize?: number;
    blurKernel?: number;
    bias?: number;
    useBlurExponentialShadowMap?: boolean;
}

export function createShadowGenerator(light: IShadowLight, options?: CreateShadowGeneratorOptions): ShadowGenerator {
    const { mapSize = 1024, blurKernel = 32, bias, useBlurExponentialShadowMap = true } = options ?? {};
    const shadowGen = new ShadowGenerator(mapSize, light);
    shadowGen.useBlurExponentialShadowMap = useBlurExponentialShadowMap;
    shadowGen.blurKernel = blurKernel;
    if (bias !== undefined) {
        shadowGen.bias = bias;
    }
    return shadowGen;
}
