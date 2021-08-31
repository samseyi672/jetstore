"use strict";
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        "index": "./ts_scripts/index.tsx"
    },
    resolve: {
        extensions: ['.ts', '.js', 'tsx']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: "dist/images/"
    },
    mode: 'none',
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 100000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 'css-loader'
                ]
            },
            {
                test: /\.js|ts|tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/typescript'],
                        plugins: ['transform-class-properties',
                            '@babel/plugin-syntax-jsx',
                            ['@babel/plugin-transform-react-jsx',
                                {
                                    "pragma": "dom",
                                }],
                            ['@babel/transform-runtime',
                                { "regenerator": true }
                            ]
                        ]
                    }
                }
            },
        ]
    },
    plugins: [
        new TerserPlugin(),
    ]
};
