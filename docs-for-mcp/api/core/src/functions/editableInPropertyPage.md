[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / editableInPropertyPage

# Function: editableInPropertyPage()

> **editableInPropertyPage**(`displayName`, `propertyType?`, `groupName?`, `options?`): (`target`, `propertyKey`) => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Decorators/nodeDecorator.ts:104](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Decorators/nodeDecorator.ts#L104)

Decorator that flags a property in a node block as being editable

## Parameters

### displayName

`string`

the display name of the property

### propertyType?

[`PropertyTypeForEdition`](../enumerations/PropertyTypeForEdition.md) = `PropertyTypeForEdition.Boolean`

the type of the property

### groupName?

`string` = `"PROPERTIES"`

the group name of the property

### options?

[`IEditablePropertyOption`](../interfaces/IEditablePropertyOption.md)

the options of the property

## Returns

the decorator

(`target`, `propertyKey`) => `void`
