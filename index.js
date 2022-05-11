const Koa = require('koa');
const serve = require('koa-static');
const config = require('./config');

const app = new Koa();

app.use(serve('dist'));

const server = app.listen(config.server.port);

app.on('error', err => {
    console.error(err);

    process.exit(1);
});

const shutdown = () => {
    console.log('\nShutting down server');
    server.close();
    process.exit(0);
}

process.once('SIGTERM', shutdown);
process.once('SIGINT', shutdown);

console.info('Server listening to ' + config.server.port);
