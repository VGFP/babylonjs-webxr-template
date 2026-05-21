[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneLoaderAnimationGroupLoadingMode

# Enumeration: SceneLoaderAnimationGroupLoadingMode

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:295](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L295)

Mode that determines how to handle old animation groups before loading new ones.

## Enumeration Members

### Clean

> **Clean**: `0`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:299](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L299)

Reset all old animations to initial state then dispose them.

***

### NoSync

> **NoSync**: `3`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:314](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L314)

Old animations remains untouched.

***

### Stop

> **Stop**: `1`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:304](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L304)

Stop all old animations.

***

### Sync

> **Sync**: `2`

Defined in: [babylonjs-source/packages/dev/core/src/Loading/sceneLoader.ts:309](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Loading/sceneLoader.ts#L309)

Restart old animations from first frame.
