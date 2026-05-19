import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const keyPath = path.resolve(__dirname, '.certs/localhost.key');
const pemPath = path.resolve(__dirname, '.certs/localhost.pem');
const hasCerts = fs.existsSync(keyPath) && fs.existsSync(pemPath);

export default defineConfig({
  base: '/babylonjs-webxr-template/',
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    target: 'es2022',
  },
  server: {
    port: 5173,
    host: true,
    https: hasCerts
      ? { key: fs.readFileSync(keyPath), cert: fs.readFileSync(pemPath) }
      : undefined,
  },
});
