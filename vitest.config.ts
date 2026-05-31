import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.test.ts'],
        globals: true,
        environment: 'node',
        testTimeout: 15_000,
        hookTimeout: 15_000,
    },
});
