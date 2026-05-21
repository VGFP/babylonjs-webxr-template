[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PathCursor

# Class: PathCursor

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:7](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L7)

A cursor which tracks a point on a path

## Constructors

### Constructor

> **new PathCursor**(`_path`): `PathCursor`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:27](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L27)

Initializes the path cursor

#### Parameters

##### \_path

[`Path2`](Path2.md)

The path to track

#### Returns

`PathCursor`

## Properties

### animations

> **animations**: `Animation`[]

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:21](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L21)

The animation array of the path cursor

***

### value

> **value**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:16](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L16)

The value of the path cursor

## Methods

### getPoint()

> **getPoint**(): [`Vector3`](Vector3.md)

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:33](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L33)

Gets the cursor point on the path

#### Returns

[`Vector3`](Vector3.md)

A point on the path cursor at the cursor location

***

### move()

> **move**(`step`): `PathCursor`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:66](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L66)

Moves the cursor by the step amount
If the step amount is greater than one, an exception is thrown

#### Parameters

##### step

`number`

The amount to move the cursor

#### Returns

`PathCursor`

This path cursor

***

### moveAhead()

> **moveAhead**(`step?`): `PathCursor`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:43](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L43)

Moves the cursor ahead by the step amount

#### Parameters

##### step?

`number` = `0.002`

The amount to move the cursor forward

#### Returns

`PathCursor`

This path cursor

***

### moveBack()

> **moveBack**(`step?`): `PathCursor`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:54](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L54)

Moves the cursor behind by the step amount

#### Parameters

##### step?

`number` = `0.002`

The amount to move the cursor back

#### Returns

`PathCursor`

This path cursor

***

### onchange()

> **onchange**(`f`): `PathCursor`

Defined in: [babylonjs-source/packages/dev/core/src/Animations/pathCursor.ts:110](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Animations/pathCursor.ts#L110)

Executes a function on change

#### Parameters

##### f

(`cursor`) => `void`

A path cursor onchange callback

#### Returns

`PathCursor`

This path cursor
