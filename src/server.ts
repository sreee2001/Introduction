import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import express from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const engine = new CommonEngine();

app.use(express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
}));

app.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    engine
        .render({
            bootstrap: (context) => import('./main.server').then((m) => m.default(context)),
            documentFilePath: indexHtml,
            url: `${protocol}://${headers.host}${originalUrl}`,
            publicPath: browserDistFolder,
            providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
        })
        .then((html) => res.status(200).send(html))
        .catch((error) => next(error));
});

const port = Number(process.env['PORT'] ?? 4000);
app.listen(port, () => {
    console.log(`Angular SSR server running on http://localhost:${port}`);
});
