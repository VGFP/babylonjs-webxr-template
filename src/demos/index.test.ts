import { DemoRegistry } from './index';
import type { DemoDescriptor } from './index';

describe('DemoRegistry', () => {
    it('getAll() returns registered demos', () => {
        const demos = DemoRegistry.getAll();
        expect(demos.length).toBeGreaterThanOrEqual(1);
        expect(demos.find((d) => d.id === 'xr-light-shadows')).toBeDefined();
    });

    it('each demo has required properties', () => {
        for (const demo of DemoRegistry.getAll()) {
            expect(demo.id).toBeTypeOf('string');
            expect(demo.id.length).toBeGreaterThan(0);
            expect(demo.label).toBeTypeOf('string');
            expect(demo.build).toBeTypeOf('function');
        }
    });

    it('demo ids are unique', () => {
        const ids = DemoRegistry.getAll().map((d) => d.id);
        expect(new Set(ids).size).toBe(ids.length);
    });

    it('register() adds a demo that appears in getAll()', () => {
        const before = DemoRegistry.getAll().length;
        const testDemo: DemoDescriptor = {
            id: '__test_demo_unit__',
            label: 'Test',
            build: () => {},
        };
        DemoRegistry.register(testDemo);
        expect(DemoRegistry.getAll().length).toBe(before + 1);
        expect(DemoRegistry.getAll()).toContainEqual(expect.objectContaining({ id: '__test_demo_unit__' }));
    });
});
