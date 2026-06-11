import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const keyPath = path.resolve(__dirname, '.certs/localhost.key');
const pemPath = path.resolve(__dirname, '.certs/localhost.pem');
const hasCerts = fs.existsSync(keyPath) && fs.existsSync(pemPath);

const pdfjsDir = path.resolve(__dirname, 'node_modules/pdfjs-dist');
const havokDir = path.resolve(__dirname, 'node_modules/@babylonjs/havok/lib/esm');
const havokPublicPath = '/havok-internal';
const onnxDir = path.resolve(__dirname, 'node_modules/onnxruntime-web/dist');
const onnxPublicPath = '/onnx-internal';

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
        const pdfjsIdx = url.indexOf('/pdfjs-assets/');
        if (pdfjsIdx !== -1) {
            const relativePath = decodeURIComponent(url.substring(pdfjsIdx + '/pdfjs-assets/'.length));
            const filePath = path.join(pdfjsDir, relativePath);

            if (filePath.startsWith(pdfjsDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                const ext = path.extname(filePath).toLowerCase();
                res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
                fs.createReadStream(filePath).pipe(res);
                return;
            }
        }

        const havokIdx = url.indexOf(havokPublicPath + '/');
        if (havokIdx !== -1) {
            const relativePath = decodeURIComponent(url.substring(havokIdx + havokPublicPath.length + 1));
            const filePath = path.join(havokDir, relativePath);

            if (filePath.startsWith(havokDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                const ext = path.extname(filePath).toLowerCase();
                res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
                fs.createReadStream(filePath).pipe(res);
                return;
            }
        }

        const onnxIdx = url.indexOf(onnxPublicPath + '/');
        if (onnxIdx !== -1) {
            const relativePath = decodeURIComponent(url.substring(onnxIdx + onnxPublicPath.length + 1));
            const filePath = path.join(onnxDir, relativePath);

            if (filePath.startsWith(onnxDir) && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                const ext = path.extname(filePath).toLowerCase();
                res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
                fs.createReadStream(filePath).pipe(res);
                return;
            }
        }

        next();
    };

    return {
        name: 'pdfjs-havok-assets',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const url = (req.url || '').split('?')[0];
                if (url.endsWith('.wasm')) {
                    const originalWriteHead = res.writeHead.bind(res);
                    res.writeHead = (statusCode: number, headers?: any) => {
                        if (typeof headers === 'object' && !Array.isArray(headers)) {
                            headers['Content-Type'] = 'application/wasm';
                        }
                        return originalWriteHead(statusCode, headers);
                    };
                    res.setHeader('Content-Type', 'application/wasm');
                }
                next();
            });
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
            const havokSrc = path.join(havokDir, 'HavokPhysics.wasm');
            const havokDest = path.resolve(__dirname, 'dist', 'havok-internal', 'HavokPhysics.wasm');
            if (fs.existsSync(havokSrc)) {
                fs.mkdirSync(path.dirname(havokDest), { recursive: true });
                fs.copyFileSync(havokSrc, havokDest);
            }
            const onnxWasmFiles = ['ort-wasm-simd.wasm'];
            for (const f of onnxWasmFiles) {
                const src = path.join(onnxDir, f);
                const dest = path.resolve(__dirname, 'dist', 'onnx-internal', f);
                if (fs.existsSync(src)) {
                    fs.mkdirSync(path.dirname(dest), { recursive: true });
                    fs.copyFileSync(src, dest);
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
