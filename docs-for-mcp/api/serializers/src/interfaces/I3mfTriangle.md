[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfTriangle

# Interface: I3mfTriangle

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:140](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L140)

3MF triangle.
v1/v2/v3 are indices into the vertices list (<vertices> \<vertex .../\>...</vertices>).

Property assignment:
- pid and p1/p2/p3 are used to assign per-triangle or per-vertex properties (like materials or colors),
  depending on which property group pid refers to.

## Properties

### p1?

> `optional` **p1?**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L152)

Optional per-vertex property indices for v1/v2/v3.
These are indices into the property group's entry list (the group referenced by pid).

***

### p2?

> `optional` **p2?**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:154](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L154)

***

### p3?

> `optional` **p3?**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:156](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L156)

***

### pid?

> `optional` **pid?**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:162](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L162)

Property group id for this triangle.
If present, it overrides the object-level pid for this specific triangle.

***

### v1

> **v1**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:142](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L142)

Index of first vertex in the vertices array.

***

### v2

> **v2**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L144)

Index of second vertex in the vertices array.

***

### v3

> **v3**: `number`

Defined in: [babylonjs-source/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:146](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L146)

Index of third vertex in the vertices array.
