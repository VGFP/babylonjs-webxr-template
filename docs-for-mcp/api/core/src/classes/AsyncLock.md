[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AsyncLock

# Class: AsyncLock

Defined in: [babylonjs-source/packages/dev/core/src/Misc/asyncLock.ts:18](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/asyncLock.ts#L18)

Provides a simple way of creating the rough equivalent of an async critical section.

## Example

```typescript
const myLock = new AsyncLock();

private async MyFuncAsync(): Promise<void> {
  await myLock.lockAsync(async () => {
    await operation1Async();
    await operation2Async();
  });
}
```

## Constructors

### Constructor

> **new AsyncLock**(): `AsyncLock`

#### Returns

`AsyncLock`

## Methods

### lockAsync()

> **lockAsync**\<`T`\>(`func`, `signal?`): `Promise`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/asyncLock.ts:28](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/asyncLock.ts#L28)

Executes the provided function when the lock is acquired (e.g. when the previous operation finishes).

#### Type Parameters

##### T

`T`

#### Parameters

##### func

() => `T` \| `Promise`\<`T`\>

The function to execute.

##### signal?

`AbortSignal`

An optional signal that can be used to abort the operation.

#### Returns

`Promise`\<`T`\>

A promise that resolves when the func finishes executing.

***

### LockAsync()

> `static` **LockAsync**\<`T`\>(`func`, `locks`, `signal?`): `Promise`\<`T`\>

Defined in: [babylonjs-source/packages/dev/core/src/Misc/asyncLock.ts:56](https://github.com/BabylonJS/Babylon.js/blob/28caae20c63c6938ebffe216e1f3a0ce58f7ca0e/packages/dev/core/src/Misc/asyncLock.ts#L56)

Executes the provided function when all the specified locks are acquired.

#### Type Parameters

##### T

`T`

#### Parameters

##### func

() => `T` \| `Promise`\<`T`\>

The function to execute.

##### locks

`AsyncLock`[]

The locks to acquire.

##### signal?

`AbortSignal`

An optional signal that can be used to abort the operation.

#### Returns

`Promise`\<`T`\>

A promise that resolves when the func finishes executing.
