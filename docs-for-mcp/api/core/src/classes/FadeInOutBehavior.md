[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FadeInOutBehavior

# Class: FadeInOutBehavior

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:11](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L11)

A behavior that when attached to a mesh will allow the mesh to fade in and out

## Implements

- [`Behavior`](../interfaces/Behavior.md)\<[`Mesh`](Mesh.md)\>

## Constructors

### Constructor

> **new FadeInOutBehavior**(): `FadeInOutBehavior`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:63](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L63)

Instantiates the FadeInOutBehavior

#### Returns

`FadeInOutBehavior`

## Properties

### fadeInDelay

> **fadeInDelay**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:15](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L15)

Time in milliseconds to delay before fading in (Default: 0)

***

### fadeInTime

> **fadeInTime**: `number` = `300`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:25](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L25)

Time in milliseconds for the mesh to fade in (Default: 300)

***

### fadeOutDelay

> **fadeOutDelay**: `number` = `0`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:20](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L20)

Time in milliseconds to delay before fading out (Default: 0)

***

### fadeOutTime

> **fadeOutTime**: `number` = `300`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:30](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L30)

Time in milliseconds for the mesh to fade out (Default: 300)

## Accessors

### attachedNode

#### Get Signature

> **get** **attachedNode**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L56)

Attached node of this behavior

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Mesh`](Mesh.md)\>

Gets the current attached target

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attachedNode`](../interfaces/Behavior.md#attachednode)

***

### delay

#### Get Signature

> **get** **delay**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:36](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L36)

Time in milliseconds to delay before fading in (Default: 0)
Will set both fade in and out delay to the same value

##### Returns

`number`

#### Set Signature

> **set** **delay**(`value`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:40](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L40)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:68](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L68)

The name of the behavior

##### Returns

`string`

gets or sets behavior's name

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`name`](../interfaces/Behavior.md#name)

## Methods

### attach()

> **attach**(`ownerNode`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:81](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L81)

Attaches the fade behavior on the passed in mesh

#### Parameters

##### ownerNode

[`Mesh`](Mesh.md)

The mesh that will be faded in/out once attached

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`attach`](../interfaces/Behavior.md#attach)

***

### detach()

> **detach**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:88](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L88)

Detaches the behavior from the mesh

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`detach`](../interfaces/Behavior.md#detach)

***

### fadeIn()

> **fadeIn**(`fadeIn?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:96](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L96)

Triggers the mesh to begin fading in (or out)

#### Parameters

##### fadeIn?

`boolean` = `true`

if the object should fade in or out (true to fade in)

#### Returns

`void`

***

### fadeOut()

> **fadeOut**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:128](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L128)

Triggers the mesh to begin fading out

#### Returns

`void`

***

### init()

> **init**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts:75](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Behaviors/Meshes/fadeInOutBehavior.ts#L75)

Initializes the behavior

#### Returns

`void`

#### Implementation of

[`Behavior`](../interfaces/Behavior.md).[`init`](../interfaces/Behavior.md#init)
