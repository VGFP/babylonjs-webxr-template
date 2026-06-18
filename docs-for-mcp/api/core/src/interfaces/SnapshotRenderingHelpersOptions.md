[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SnapshotRenderingHelpersOptions

# Interface: SnapshotRenderingHelpersOptions

Defined in: [babylonjs-source/packages/dev/core/src/Misc/snapshotRenderingHelper.ts:33](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L33)

Options for the snapshot rendering helper

## Properties

### morphTargetsNumMaxInfluences?

> `optional` **morphTargetsNumMaxInfluences?**: `number`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/snapshotRenderingHelper.ts:41](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L41)

Maximum number of influences for morph target managers
In FAST snapshot mode, the number of influences must be fixed and cannot change from one frame to the next.
morphTargetsNumMaxInfluences is the maximum number of non-zero influences allowed in a morph target manager.
The final value defined for a morph target manager is: Math.min(morphTargetManager.numTargets, morphTargetsNumMaxInfluences)
Default: 20
