import { defineConfig, configDefaults } from "vitest/config";
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [react()],
    resolve: {
        tsconfigPaths: true,
        },
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest.setup.ts'],
        exclude: [ ...configDefaults.exclude, 'tests/**'],
    }
})