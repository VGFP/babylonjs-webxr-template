[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsShapeContainer

# Class: PhysicsShapeContainer

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:420](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L420)

A shape container holds a variable number of shapes. Use AddChild to append to newly created parent container.

## Extends

- [`PhysicsShape`](PhysicsShape.md)

## Constructors

### Constructor

> **new PhysicsShapeContainer**(`scene`): `PhysicsShapeContainer`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:425](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L425)

Constructor of the Shape container

#### Parameters

##### scene

[`Scene`](Scene.md)

scene to attach to

#### Returns

`PhysicsShapeContainer`

#### Overrides

[`PhysicsShape`](PhysicsShape.md).[`constructor`](PhysicsShape.md#constructor)

## Properties

### \_pluginData

> **\_pluginData**: `any` = `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:39](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L39)

V2 Physics plugin private data for single shape

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`_pluginData`](PhysicsShape.md#_plugindata)

## Accessors

### density

#### Get Signature

> **get** **density**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:187](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L187)

Returns the density of the physics shape.

##### Returns

`number`

The density of the physics shape.

#### Set Signature

> **set** **density**(`density`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:179](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L179)

Sets the density of the physics shape.

##### Parameters

###### density

`number`

The density of the physics shape.

##### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`density`](PhysicsShape.md#density)

***

### filterCollideMask

#### Get Signature

> **get** **filterCollideMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:152](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L152)

##### Returns

`number`

Bitmask of categories that this shape should collide with

#### Set Signature

> **set** **filterCollideMask**(`collideMask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:144](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L144)

Sets the collide mask of a shape. This is a bitfield of arbitrary
"categories" to which this shape collides with. Given two shapes,
the engine will check if the collide mask and membership overlap:
shapeA.filterMembershipMask & shapeB.filterCollideMask

If this value is zero (i.e. shapeB only collides with categories
which shapeA is _not_ a member of) then the shapes will not collide.

Note, the engine will also perform the same test with shapeA and
shapeB swapped; the shapes will not collide if either shape has
a collideMask which prevents collision with the other shape.

##### Parameters

###### collideMask

`number`

Bitmask of categories this shape should collide with

##### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`filterCollideMask`](PhysicsShape.md#filtercollidemask)

***

### filterMembershipMask

#### Get Signature

> **get** **filterMembershipMask**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:125](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L125)

Get the membership mask of a shape.

##### Returns

`number`

Bitmask of categories which this shape is a member of.

#### Set Signature

> **set** **filterMembershipMask**(`membershipMask`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:117](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L117)

Set the membership mask of a shape. This is a bitfield of arbitrary
"categories" to which the shape is a member. This is used in combination
with the collide mask to determine if this shape should collide with
another.

##### Parameters

###### membershipMask

`number`

Bitfield of categories of this shape.

##### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`filterMembershipMask`](PhysicsShape.md#filtermembershipmask)

***

### isTrigger

#### Get Signature

> **get** **isTrigger**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:255](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L255)

##### Returns

`boolean`

#### Set Signature

> **set** **isTrigger**(`isTrigger`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:247](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L247)

##### Parameters

###### isTrigger

`boolean`

##### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`isTrigger`](PhysicsShape.md#istrigger)

***

### material

#### Get Signature

> **get** **material**(): [`PhysicsMaterial`](../interfaces/PhysicsMaterial.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:168](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L168)

Returns the material of the physics shape.

##### Returns

[`PhysicsMaterial`](../interfaces/PhysicsMaterial.md)

The material of the physics shape.

#### Set Signature

> **set** **material**(`material`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:159](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L159)

##### Parameters

###### material

[`PhysicsMaterial`](../interfaces/PhysicsMaterial.md)

##### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`material`](PhysicsShape.md#material)

***

### type

#### Get Signature

> **get** **type**(): [`PhysicsShapeType`](../enumerations/PhysicsShapeType.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:105](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L105)

Returns the type of the physics shape.

##### Returns

[`PhysicsShapeType`](../enumerations/PhysicsShapeType.md)

The type of the physics shape.

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`type`](PhysicsShape.md#type)

## Methods

### addChild()

> **addChild**(`newChild`, `translation?`, `rotation?`, `scale?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:219](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L219)

Adds a child shape to a container with an optional transform

#### Parameters

##### newChild

[`PhysicsShape`](PhysicsShape.md)

The new PhysicsShape to add

##### translation?

[`Vector3`](Vector3.md)

Optional position of the child shape relative to this shape

##### rotation?

[`Quaternion`](Quaternion.md)

Optional rotation of the child shape relative to this shape

##### scale?

[`Vector3`](Vector3.md)

Optional scale of the child shape relative to this shape

#### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`addChild`](PhysicsShape.md#addchild)

***

### addChildFromParent()

> **addChildFromParent**(`parentTransform`, `newChild`, `childTransform`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:200](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L200)

Utility to add a child shape to this container,
automatically computing the relative transform between
the container shape and the child instance.

#### Parameters

##### parentTransform

[`TransformNode`](TransformNode.md)

The transform node associated with this shape

##### newChild

[`PhysicsShape`](PhysicsShape.md)

The new PhysicsShape to add

##### childTransform

[`TransformNode`](TransformNode.md)

The transform node associated with the child shape

#### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`addChildFromParent`](PhysicsShape.md#addchildfromparent)

***

### dispose()

> **dispose**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:262](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L262)

Dispose the shape and release its associated resources.

#### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`dispose`](PhysicsShape.md#dispose)

***

### getBoundingBox()

> **getBoundingBox**(): [`BoundingBox`](BoundingBox.md)

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:243](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L243)

Returns the bounding box of the physics shape.

#### Returns

[`BoundingBox`](BoundingBox.md)

The bounding box of the physics shape.

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`getBoundingBox`](PhysicsShape.md#getboundingbox)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:97](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L97)

Returns the string "PhysicsShape".

#### Returns

`string`

"PhysicsShape"

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`getClassName`](PhysicsShape.md#getclassname)

***

### getNumChildren()

> **getNumChildren**(): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:235](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L235)

Returns the number of children of a physics shape.

#### Returns

`number`

The number of children of a physics shape.

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`getNumChildren`](PhysicsShape.md#getnumchildren)

***

### removeChild()

> **removeChild**(`childIndex`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Physics/v2/physicsShape.ts:227](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Physics/v2/physicsShape.ts#L227)

Removes a child shape from this shape.

#### Parameters

##### childIndex

`number`

The index of the child shape to remove

#### Returns

`void`

#### Inherited from

[`PhysicsShape`](PhysicsShape.md).[`removeChild`](PhysicsShape.md#removechild)
