const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = require('./config');

module.exports = {
    mode: config.env.env,
    entry: {
        client: './src/index.tsx',
        vendor: ['react', 'react-dom', 'redux', 'redux-thunk'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                        ],
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    externals: {
        'koa': 'koa',
        'koa-static': 'koa-static',
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].[chunkhash].js',
        publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        port: 3000,
        compress: true,
        open: false,
        client: {
            overlay: false,
            progress: true,
            reconnect: 10,
        },
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            minSize: 1,
        },
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            async: false,
        }),
        new HtmlWebpackPlugin({
            template: 'static/index.html',
        }),
        // new BundleAnalyzerPlugin(),
    ],
};
