export function createMockWebXRDefaultExperience() {
    return {
        baseExperience: {
            featuresManager: {
                enableFeature: vi.fn(() => ({})),
            },
            onStateChangedObservable: {
                add: vi.fn(() => 1),
                remove: vi.fn(),
                notifyObservers: vi.fn(),
            },
            state: 'NOT_IN_XR',
            enterXRAsync: vi.fn(),
        },
    } as any;
}

export function createMockXrPlanes() {
    const observers = new Map<string, Set<(data: any) => void>>();

    return {
        onPlaneAddedObservable: {
            add: vi.fn((cb: any) => {
                if (!observers.has('added')) observers.set('added', new Set());
                observers.get('added')!.add(cb);
                return cb;
            }),
            remove: vi.fn(),
        },
        onPlaneUpdatedObservable: {
            add: vi.fn((cb: any) => {
                if (!observers.has('updated')) observers.set('updated', new Set());
                observers.get('updated')!.add(cb);
                return cb;
            }),
            remove: vi.fn(),
        },
        onPlaneRemovedObservable: {
            add: vi.fn((cb: any) => {
                if (!observers.has('removed')) observers.set('removed', new Set());
                observers.get('removed')!.add(cb);
                return cb;
            }),
            remove: vi.fn(),
        },
        _fire(event: 'added' | 'updated' | 'removed', data: any) {
            observers.get(event)?.forEach((cb) => cb(data));
        },
    };
}
