export interface Disposable {
    dispose(): void;
}

export class DisposableStack {
    private _items: Disposable[] = [];

    add<T extends Disposable>(item: T): T {
        this._items.push(item);
        return item;
    }

    register(disposeFn: () => void): void {
        this._items.push({ dispose: disposeFn });
    }

    dispose(): void {
        for (const item of this._items) {
            item.dispose();
        }
        this._items = [];
    }
}
