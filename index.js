const Koa = require('koa');
const serve = require('koa-static');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.config.dev');
const config = require('./config');

(async () => {
    if (config.env.is_production) {
        serveProductionServer();
    } else {
        await serveDevelopmentServer();
    }
})();

function serveProductionServer () {
    const app = new Koa();

    app.use(serve('static'));

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
};

async function serveDevelopmentServer () {
    const compiler = Webpack(webpackConfig);
    const devServerOptions = { ...webpackConfig.devServer, open: true };
    const server = new WebpackDevServer(devServerOptions, compiler);

    await server.start();

    const shutdown = async () => {
        console.log('\nShutting down server');
        await server.stop();
        process.exit(0);
    };

    process.once('SIGTERM', shutdown);
    process.once('SIGINT', shutdown);

    console.info('Server listening to ' + devServerOptions.port);
};
