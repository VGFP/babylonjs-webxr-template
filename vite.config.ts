import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const keyPath = path.resolve(__dirname, '.certs/localhost.key');
const pemPath = path.resolve(__dirname, '.certs/localhost.pem');
const hasCerts = fs.existsSync(keyPath) && fs.existsSync(pemPath);

const pdfjsDir = path.resolve(__dirname, 'node_modules/pdfjs-dist');

function pdfjsAssetsPlugin(): Plugin {
    const mimeTypes: Record<string, string> = {
        '.wasm': 'application/wasm',
        '.pfb': 'application/octet-stream',
        '.bcmap': 'application/octet-stream',
        '.js': 'text/javascript',
        '.icc': 'application/octet-stream',
    };

    const serveAsset = (req: { url?: string }, res: any, next: () => void) => {
        const url = (req.url || '').split('?')[0];
        const idx = url.indexOf('/pdfjs-assets/');
        if (idx === -1) return next();

        const relativePath = decodeURIComponent(url.substring(idx + '/pdfjs-assets/'.length));
        const filePath = path.join(pdfjsDir, relativePath);

        if (!filePath.startsWith(pdfjsDir) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
            return next();
        }

        const ext = path.extname(filePath).toLowerCase();
        res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
        fs.createReadStream(filePath).pipe(res);
    };

    return {
        name: 'pdfjs-assets',
        configureServer(server) {
            server.middlewares.use(serveAsset);
        },
        closeBundle() {
            const dirs = ['wasm', 'standard_fonts', 'cmaps', 'iccs'];
            for (const dir of dirs) {
                const src = path.join(pdfjsDir, dir);
                const dest = path.resolve(__dirname, 'dist', 'pdfjs-assets', dir);
                if (fs.existsSync(src)) {
                    fs.cpSync(src, dest, { recursive: true });
                }
            }
        },
    };
}

export default defineConfig({
    base: '/babylonjs-webxr-template/',
    root: '.',
    publicDir: 'public',
    plugins: [pdfjsAssetsPlugin()],
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
