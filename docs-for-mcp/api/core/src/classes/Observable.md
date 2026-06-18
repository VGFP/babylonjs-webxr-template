[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Observable

# Class: Observable\<T\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L165)

The Observable class is a simple implementation of the Observable pattern.

There's one slight particularity though: a given Observable can notify its observer using a particular mask value, only the Observers registered with this mask value will be notified.
This enable a more fine grained execution without having to rely on multiple different Observable objects.
For instance you may have a given Observable that have four different types of notifications: Move (mask = 0x01), Stop (mask = 0x02), Turn Right (mask = 0X04), Turn Left (mask = 0X08).
A given observer can register itself with only Move and Stop (mask = 0x03), then it will only be notified when one of these two occurs and will never be for Turn Left/Right.

## Type Parameters

### T

`T`

## Implements

- [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<`T`\>

## Constructors

### Constructor

> **new Observable**\<`T`\>(`onObserverAdded?`, `notifyIfTriggered?`): `Observable`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L217)

Creates a new observable

#### Parameters

##### onObserverAdded?

(`observer`) => `void`

defines a callback to call when a new observer is added

##### notifyIfTriggered?

`boolean` = `false`

If set to true the observable will notify when an observer was added if the observable was already triggered.

#### Returns

`Observable`\<`T`\>

## Properties

### \_coroutineScheduler?

> `optional` **\_coroutineScheduler?**: `CoroutineScheduler`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observableCoroutine.types.ts:10](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observableCoroutine.types.ts#L10)

Internal observable-based coroutine scheduler instance.

***

### \_coroutineSchedulerDispose?

> `optional` **\_coroutineSchedulerDispose?**: () => `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observableCoroutine.types.ts:15](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observableCoroutine.types.ts#L15)

Internal disposal method for observable-based coroutine scheduler instance.

#### Returns

`void`

***

### notifyIfTriggered

> **notifyIfTriggered**: `boolean` = `false`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L223)

[false] If set to true the observable will notify when an observer was added if the observable was already triggered.
This is helpful to single-state observables like the scene onReady or the dispose observable.

## Accessors

### observers

#### Get Signature

> **get** **observers**(): [`Observer`](Observer.md)\<`T`\>[]

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:208](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L208)

Gets the list of observers
Note that observers that were recently deleted may still be present in the list because they are only really deleted on the next javascript tick!

##### Returns

[`Observer`](Observer.md)\<`T`\>[]

## Methods

### add()

#### Call Signature

> **add**(`callback?`, `mask?`, `insertFirst?`, `scope?`, `unregisterOnFirstCall?`): `null`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:241](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L241)

Create a new Observer with the specified callback

##### Parameters

###### callback?

`null`

the callback that will be executed for that Observer

###### mask?

`number`

the mask used to filter observers

###### insertFirst?

`boolean`

if true the callback will be inserted at the first position, hence executed before the others ones. If false (default behavior) the callback will be inserted at the last position, executed after all the others already present.

###### scope?

`any`

optional scope for the callback to be called from

###### unregisterOnFirstCall?

`boolean`

defines if the observer as to be unregistered after the next notification

##### Returns

`null`

the new observer created for the callback

##### Implementation of

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md).[`add`](../interfaces/IReadonlyObservable.md#add)

#### Call Signature

> **add**(`callback`, `mask?`, `insertFirst?`, `scope?`, `unregisterOnFirstCall?`): [`Observer`](Observer.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L242)

Create a new Observer with the specified callback

##### Parameters

###### callback

(`eventData`, `eventState`) => `void`

the callback that will be executed for that Observer

###### mask?

`number`

the mask used to filter observers

###### insertFirst?

`boolean`

if true the callback will be inserted at the first position, hence executed before the others ones. If false (default behavior) the callback will be inserted at the last position, executed after all the others already present.

###### scope?

`any`

optional scope for the callback to be called from

###### unregisterOnFirstCall?

`boolean`

defines if the observer as to be unregistered after the next notification

##### Returns

[`Observer`](Observer.md)\<`T`\>

the new observer created for the callback

##### Implementation of

`IReadonlyObservable.add`

#### Call Signature

> **add**(`callback?`, `mask?`, `insertFirst?`, `scope?`, `unregisterOnFirstCall?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:243](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L243)

Create a new Observer with the specified callback

##### Parameters

###### callback?

((`eventData`, `eventState`) => `void`) \| `null`

the callback that will be executed for that Observer

###### mask?

`number`

the mask used to filter observers

###### insertFirst?

`boolean`

if true the callback will be inserted at the first position, hence executed before the others ones. If false (default behavior) the callback will be inserted at the last position, executed after all the others already present.

###### scope?

`any`

optional scope for the callback to be called from

###### unregisterOnFirstCall?

`boolean`

defines if the observer as to be unregistered after the next notification

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<`T`\>\>

the new observer created for the callback

##### Implementation of

`IReadonlyObservable.add`

***

### addOnce()

#### Call Signature

> **addOnce**(`callback?`): `null`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L298)

Create a new Observer with the specified callback and unregisters after the next notification

##### Parameters

###### callback?

`null`

the callback that will be executed for that Observer

##### Returns

`null`

the new observer created for the callback

##### Implementation of

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md).[`addOnce`](../interfaces/IReadonlyObservable.md#addonce)

#### Call Signature

> **addOnce**(`callback`): [`Observer`](Observer.md)\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:299](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L299)

Create a new Observer with the specified callback and unregisters after the next notification

##### Parameters

###### callback

(`eventData`, `eventState`) => `void`

the callback that will be executed for that Observer

##### Returns

[`Observer`](Observer.md)\<`T`\>

the new observer created for the callback

##### Implementation of

`IReadonlyObservable.addOnce`

#### Call Signature

> **addOnce**(`callback?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<`T`\>\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:300](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L300)

Create a new Observer with the specified callback and unregisters after the next notification

##### Parameters

###### callback?

((`eventData`, `eventState`) => `void`) \| `null`

the callback that will be executed for that Observer

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<`T`\>\>

the new observer created for the callback

##### Implementation of

`IReadonlyObservable.addOnce`

***

### cancelAllCoroutines()

> **cancelAllCoroutines**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observableCoroutine.types.ts:27](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observableCoroutine.types.ts#L27)

Cancels all coroutines currently running on this observable

#### Returns

`void`

***

### cleanLastNotifiedState()

> **cleanLastNotifiedState**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:504](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L504)

Clean the last notified state - both the internal last value and the has-notified flag

#### Returns

`void`

***

### clear()

> **clear**(): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:489](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L489)

Clear the list of observers

#### Returns

`void`

***

### clone()

> **clone**(): `Observable`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L513)

Clone the current observable

#### Returns

`Observable`\<`T`\>

a new observable

***

### hasObservers()

> **hasObservers**(): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:482](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L482)

Gets a boolean indicating if the observable has at least one observer

#### Returns

`boolean`

true is the Observable has at least one Observer registered

***

### hasSpecificMask()

> **hasSpecificMask**(`mask?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L526)

Does this observable handles observer registered with a given mask

#### Parameters

##### mask?

`number` = `-1`

defines the mask to be tested

#### Returns

`boolean`

whether or not one observer registered with the given mask is handled

***

### makeObserverBottomPriority()

> **makeObserverBottomPriority**(`observer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:395](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L395)

Moves the observable to the bottom of the observer list making it get called last when notified

#### Parameters

##### observer

[`Observer`](Observer.md)\<`T`\>

the observer to move

#### Returns

`void`

***

### makeObserverTopPriority()

> **makeObserverTopPriority**(`observer`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:386](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L386)

Moves the observable to the top of the observer list making it get called first when notified

#### Parameters

##### observer

[`Observer`](Observer.md)\<`T`\>

the observer to move

#### Returns

`void`

***

### notifyObserver()

> **notifyObserver**(`observer`, `eventData`, `mask?`): `void`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:457](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L457)

Notify a specific observer

#### Parameters

##### observer

[`Observer`](Observer.md)\<`T`\>

defines the observer to notify

##### eventData

`T`

defines the data to be sent to each callback

##### mask?

`number` = `-1`

is used to filter observers defaults to -1

#### Returns

`void`

***

### notifyObservers()

> **notifyObservers**(`eventData`, `mask?`, `target?`, `currentTarget?`, `userInfo?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L410)

Notify all Observers by calling their respective callback with the given data
Will return true if all observers were executed, false if an observer set skipNextObservers to true, then prevent the subsequent ones to execute

#### Parameters

##### eventData

`T`

defines the data to send to all observers

##### mask?

`number` = `-1`

defines the mask of the current notification (observers with incompatible mask (ie mask & observer.mask === 0) will not be notified)

##### target?

`any`

defines the original target of the state

##### currentTarget?

`any`

defines the current target of the state

##### userInfo?

`any`

defines any user info to send to observers

#### Returns

`boolean`

false if the complete observer chain was not processed (because one observer set the skipNextObservers to true)

***

### notifyObserversWithPromise()

> **notifyObserversWithPromise**(`eventData`, `mask?`, `target?`, `currentTarget?`, `userInfo?`): `Promise`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.extensions.types.ts:19](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.extensions.types.ts#L19)

Calling this will execute each callback, expecting it to be a promise or return a value.
If at any point in the chain one function fails, the promise will fail and the execution will not continue.
This is useful when a chain of events (sometimes async events) is needed to initialize a certain object
and it is crucial that all callbacks will be executed.
The order of the callbacks is kept, callbacks are not executed parallel.

#### Parameters

##### eventData

`T`

The data to be sent to each callback

##### mask?

`number`

is used to filter observers defaults to -1

##### target?

`any`

defines the callback target (see EventState)

##### currentTarget?

`any`

defines he current object in the bubbling phase

##### userInfo?

`any`

defines any user info to send to observers

#### Returns

`Promise`\<`T`\>

will return a Promise than resolves when all callbacks executed successfully.

***

### remove()

> **remove**(`observer`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L310)

Remove an Observer from the Observable object

#### Parameters

##### observer

[`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<`T`\>\>

the instance of the Observer to remove

#### Returns

`boolean`

false if it doesn't belong to this Observable

***

### removeCallback()

> **removeCallback**(`callback`, `scope?`): `boolean`

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:332](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L332)

Remove a callback from the Observable object

#### Parameters

##### callback

(`eventData`, `eventState`) => `void`

the callback to remove

##### scope?

`any`

optional scope. If used only the callbacks with this scope will be removed

#### Returns

`boolean`

false if it doesn't belong to this Observable

***

### runCoroutineAsync()

> **runCoroutineAsync**(`coroutine`): `Promise`\<`void`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observableCoroutine.types.ts:22](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observableCoroutine.types.ts#L22)

Runs a coroutine asynchronously on this observable

#### Parameters

##### coroutine

`AsyncCoroutine`\<`void`\>

the iterator resulting from having started the coroutine

#### Returns

`Promise`\<`void`\>

a promise which will be resolved when the coroutine finishes or rejected if the coroutine is cancelled

***

### FromPromise()

> `static` **FromPromise**\<`T`, `E`\>(`promise`, `onErrorObservable?`): `Observable`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/observable.pure.ts:184](https://github.com/BabylonJS/Babylon.js/blob/4d4dad2f008743af1de7c56c2cbe1a0c8879df33/packages/dev/core/src/Misc/observable.pure.ts#L184)

Create an observable from a Promise.

#### Type Parameters

##### T

`T`

##### E

`E` = `Error`

#### Parameters

##### promise

`Promise`\<`T`\>

a promise to observe for fulfillment.

##### onErrorObservable?

`Observable`\<`E`\>

an observable to notify if a promise was rejected.

#### Returns

`Observable`\<`T`\>

the new Observable
