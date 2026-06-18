[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InputMapper

# Class: InputMapper\<THandlers\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:175](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L175)

Generic input-to-interaction mapper that resolves physical input events to semantic interaction types
and dispatches them to typed handlers.

`InputMapper` is not tied to cameras — any object that needs a configurable, prioritized
mapping from physical inputs (pointer, keyboard, wheel, touch) to named interactions can use it.

The mapper holds an ordered `inputMap` array. When `resolveInteraction` is called, the first
entry whose source and conditions match the current input wins. More specific entries (with more
conditions like button, key, modifiers) should be placed before less specific ones; use `addEntry`
to auto-insert based on specificity.

## Type Parameters

### THandlers

`THandlers` *extends* `Record`\<`string`, `unknown`\>

Object type whose keys are the valid interaction type strings and values
  are the handler functions/objects for each interaction (e.g. `ArcRotateHandlers`).
  Interaction types are derived as `InteractionName<THandlers>`.

## Constructors

### Constructor

> **new InputMapper**\<`THandlers`\>(`handlers`, `createDefaultEntries?`): `InputMapper`\<`THandlers`\>

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:193](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L193)

Creates a new InputMapper.

#### Parameters

##### handlers

`THandlers`

The interaction handlers, keyed by interaction type.

##### createDefaultEntries?

() => [`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

Optional factory that returns the default inputMap entries.
  Called by `resetInputMap()` and during construction. When omitted, the default map is empty.

#### Returns

`InputMapper`\<`THandlers`\>

## Properties

### handlers

> `readonly` **handlers**: `THandlers`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:185](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L185)

Interaction handlers keyed by interaction type.
Override individual handlers to customize behavior without changing input mapping.

***

### inputMap

> **inputMap**: [`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[] = `[]`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:179](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L179)

Ordered list of input-to-interaction mapping rules. First matching entry wins.

## Methods

### addEntry()

> **addEntry**(`entry`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:288](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L288)

Adds an entry to the inputMap at the correct position based on specificity.
More specific entries (with more conditions like button, key, modifiers) are placed
before less specific ones, ensuring they match first. Among equally specific entries,
the new entry is placed after existing ones.

#### Parameters

##### entry

[`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>

The entry to add

#### Returns

`void`

***

### getEntries()

#### Call Signature

> **getEntries**(`source`, `interaction`, `conditions?`): [`PointerInputMapEntry`](../type-aliases/PointerInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:264](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L264)

Finds all inputMap entries matching the given source, interaction, and optional entry conditions.
Useful for bulk updates when more than one physical input maps to the same interaction.

##### Parameters

###### source

`"pointer"`

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`PointerConditions`](../type-aliases/PointerConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`PointerInputMapEntry`](../type-aliases/PointerInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

All matching entries, in inputMap order

#### Call Signature

> **getEntries**(`source`, `interaction`, `conditions?`): [`WheelInputMapEntry`](../type-aliases/WheelInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:265](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L265)

Finds all inputMap entries matching the given source, interaction, and optional entry conditions.
Useful for bulk updates when more than one physical input maps to the same interaction.

##### Parameters

###### source

`"wheel"`

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`WheelConditions`](../type-aliases/WheelConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`WheelInputMapEntry`](../type-aliases/WheelInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

All matching entries, in inputMap order

#### Call Signature

> **getEntries**(`source`, `interaction`, `conditions?`): [`TouchInputMapEntry`](../type-aliases/TouchInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:266](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L266)

Finds all inputMap entries matching the given source, interaction, and optional entry conditions.
Useful for bulk updates when more than one physical input maps to the same interaction.

##### Parameters

###### source

`"touch"`

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`TouchConditions`](../type-aliases/TouchConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`TouchInputMapEntry`](../type-aliases/TouchInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

All matching entries, in inputMap order

#### Call Signature

> **getEntries**(`source`, `interaction`, `conditions?`): [`KeyboardInputMapEntry`](../type-aliases/KeyboardInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:267](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L267)

Finds all inputMap entries matching the given source, interaction, and optional entry conditions.
Useful for bulk updates when more than one physical input maps to the same interaction.

##### Parameters

###### source

`"keyboard"`

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`KeyboardConditions`](../type-aliases/KeyboardConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`KeyboardInputMapEntry`](../type-aliases/KeyboardInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

All matching entries, in inputMap order

#### Call Signature

> **getEntries**(`source`, `interaction`, `conditions?`): [`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:268](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L268)

Finds all inputMap entries matching the given source, interaction, and optional entry conditions.
Useful for bulk updates when more than one physical input maps to the same interaction.

##### Parameters

###### source

[`InputSource`](../type-aliases/InputSource.md)

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`InputConditions`](../type-aliases/InputConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\>[]

All matching entries, in inputMap order

***

### getEntry()

#### Call Signature

> **getEntry**(`source`, `interaction`, `conditions?`): [`PointerInputMapEntry`](../type-aliases/PointerInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:238](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L238)

Finds the first inputMap entry matching the given source, interaction, and optional entry conditions.
Useful for modifying entry properties (e.g. sensitivity) without rebuilding the entire inputMap.

##### Parameters

###### source

`"pointer"`

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`PointerConditions`](../type-aliases/PointerConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`PointerInputMapEntry`](../type-aliases/PointerInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

The matching entry, or undefined if not found

#### Call Signature

> **getEntry**(`source`, `interaction`, `conditions?`): [`WheelInputMapEntry`](../type-aliases/WheelInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:239](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L239)

Finds the first inputMap entry matching the given source, interaction, and optional entry conditions.
Useful for modifying entry properties (e.g. sensitivity) without rebuilding the entire inputMap.

##### Parameters

###### source

`"wheel"`

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`WheelConditions`](../type-aliases/WheelConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`WheelInputMapEntry`](../type-aliases/WheelInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

The matching entry, or undefined if not found

#### Call Signature

> **getEntry**(`source`, `interaction`, `conditions?`): [`TouchInputMapEntry`](../type-aliases/TouchInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:240](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L240)

Finds the first inputMap entry matching the given source, interaction, and optional entry conditions.
Useful for modifying entry properties (e.g. sensitivity) without rebuilding the entire inputMap.

##### Parameters

###### source

`"touch"`

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`TouchConditions`](../type-aliases/TouchConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`TouchInputMapEntry`](../type-aliases/TouchInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

The matching entry, or undefined if not found

#### Call Signature

> **getEntry**(`source`, `interaction`, `conditions?`): [`KeyboardInputMapEntry`](../type-aliases/KeyboardInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L241)

Finds the first inputMap entry matching the given source, interaction, and optional entry conditions.
Useful for modifying entry properties (e.g. sensitivity) without rebuilding the entire inputMap.

##### Parameters

###### source

`"keyboard"`

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`KeyboardConditions`](../type-aliases/KeyboardConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`KeyboardInputMapEntry`](../type-aliases/KeyboardInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

The matching entry, or undefined if not found

#### Call Signature

> **getEntry**(`source`, `interaction`, `conditions?`): [`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L242)

Finds the first inputMap entry matching the given source, interaction, and optional entry conditions.
Useful for modifying entry properties (e.g. sensitivity) without rebuilding the entire inputMap.

##### Parameters

###### source

[`InputSource`](../type-aliases/InputSource.md)

The physical input source to match

###### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction type to match

###### conditions?

[`InputConditions`](../type-aliases/InputConditions.md)

Optional entry conditions to match. Omitted condition fields are ignored.

##### Returns

[`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `undefined`

The matching entry, or undefined if not found

***

### resetInputMap()

> **resetInputMap**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:226](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L226)

Restores the inputMap to the default entries provided at construction time.
If no factory was provided, resets to an empty array.

#### Returns

`void`

***

### resolveInteraction()

#### Call Signature

> **resolveInteraction**(`source`, `currentConditions?`): [`PointerInputMapEntry`](../type-aliases/PointerInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L208)

Resolves a physical input event to a matching inputMap entry.
Iterates the inputMap in order; the first entry whose source and conditions match wins.

##### Parameters

###### source

`"pointer"`

The physical input source (e.g. "pointer", "keyboard")

###### currentConditions?

[`InputConditions`](../type-aliases/InputConditions.md)

Conditions to match against, specific to the source type

##### Returns

[`PointerInputMapEntry`](../type-aliases/PointerInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

The matched InputMapEntry, or null if no entry matches

#### Call Signature

> **resolveInteraction**(`source`, `currentConditions?`): [`WheelInputMapEntry`](../type-aliases/WheelInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:209](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L209)

Resolves a physical input event to a matching inputMap entry.
Iterates the inputMap in order; the first entry whose source and conditions match wins.

##### Parameters

###### source

`"wheel"`

The physical input source (e.g. "pointer", "keyboard")

###### currentConditions?

[`InputConditions`](../type-aliases/InputConditions.md)

Conditions to match against, specific to the source type

##### Returns

[`WheelInputMapEntry`](../type-aliases/WheelInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

The matched InputMapEntry, or null if no entry matches

#### Call Signature

> **resolveInteraction**(`source`, `currentConditions?`): [`TouchInputMapEntry`](../type-aliases/TouchInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:210](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L210)

Resolves a physical input event to a matching inputMap entry.
Iterates the inputMap in order; the first entry whose source and conditions match wins.

##### Parameters

###### source

`"touch"`

The physical input source (e.g. "pointer", "keyboard")

###### currentConditions?

[`InputConditions`](../type-aliases/InputConditions.md)

Conditions to match against, specific to the source type

##### Returns

[`TouchInputMapEntry`](../type-aliases/TouchInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

The matched InputMapEntry, or null if no entry matches

#### Call Signature

> **resolveInteraction**(`source`, `currentConditions?`): [`KeyboardInputMapEntry`](../type-aliases/KeyboardInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:211](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L211)

Resolves a physical input event to a matching inputMap entry.
Iterates the inputMap in order; the first entry whose source and conditions match wins.

##### Parameters

###### source

`"keyboard"`

The physical input source (e.g. "pointer", "keyboard")

###### currentConditions?

[`InputConditions`](../type-aliases/InputConditions.md)

Conditions to match against, specific to the source type

##### Returns

[`KeyboardInputMapEntry`](../type-aliases/KeyboardInputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

The matched InputMapEntry, or null if no entry matches

#### Call Signature

> **resolveInteraction**(`source`, `currentConditions?`): [`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:212](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L212)

Resolves a physical input event to a matching inputMap entry.
Iterates the inputMap in order; the first entry whose source and conditions match wins.

##### Parameters

###### source

[`InputSource`](../type-aliases/InputSource.md)

The physical input source (e.g. "pointer", "keyboard")

###### currentConditions?

[`InputConditions`](../type-aliases/InputConditions.md)

Conditions to match against, specific to the source type

##### Returns

[`InputMapEntry`](../type-aliases/InputMapEntry.md)\<[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>\> \| `null`

The matched InputMapEntry, or null if no entry matches

***

### setInteraction()

> **setInteraction**(`source`, `conditions`, `interaction`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:313](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L313)

Sets the interaction for the input combination described by `conditions`. If an
existing entry maps that exact combination, its `interaction` is updated in place;
otherwise a new entry is inserted via [addEntry](#addentry).

To force an update on every matching entry use [setInteractions](#setinteractions); to address
an individual entry beyond the first, look it up via [getEntries](#getentries) and assign
`entry.interaction` directly.

#### Parameters

##### source

[`InputSource`](../type-aliases/InputSource.md)

The physical input source to match

##### conditions

[`InputConditions`](../type-aliases/InputConditions.md) \| `undefined`

Conditions describing the input combination (button, modifiers, key, etc.)

##### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The interaction to assign / insert

#### Returns

`boolean`

true (the mapping is always made effective)

***

### setInteractions()

> **setInteractions**(`source`, `conditions`, `interaction`): `number`

Defined in: [babylonjs-source/packages/dev/core/src/Cameras/inputMapper.ts:385](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Cameras/inputMapper.ts#L385)

Changes the interaction for every inputMap entry matching the given source and conditions.
Useful when more than one entry maps to the same physical input (e.g. duplicate bindings,
or several keys aliased to the same action) and all of them should be remapped together.

#### Parameters

##### source

[`InputSource`](../type-aliases/InputSource.md)

The physical input source to match

##### conditions

[`InputConditions`](../type-aliases/InputConditions.md) \| `undefined`

Conditions to match (button, modifiers, key, etc.). Uses the same
                    event-resolution semantics as [resolveInteraction](#resolveinteraction): omitted entry
                    condition fields are treated as wildcards and will match.

##### interaction

[`InteractionName`](../type-aliases/InteractionName.md)\<`THandlers`\>

The new interaction to assign to every matched entry

#### Returns

`number`

The number of entries that were updated
