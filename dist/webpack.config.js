"use strict";
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    mode: "development",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new webpack.EnvironmentPlugin({
            REACT_APP_API_KEY: 'AIzaSyC0OHtM8ZpVI4xfHFaIgDqLY2qGLybVudg',
            REACT_APP_AUTH_DOMAIN: 'geeksblogs-45cf2.firebaseapp.com',
            REACT_APP_PROJECT_ID: 'geeksblogs-45cf2',
            REACT_APP_STORAGE_BUCKET: 'geeksblogs-45cf2.appspot.com',
            REACT_APP_MESSAGING_SENDER_ID: '1071985615724',
            REACT_APP_APP_ID: '1:1071985615724:web:7882467fcec73063ff4949',
        })
    ],
    devServer: {
        static: "./public",
        compress: true,
        historyApiFallback: true,
        port: 8080,
    },
};
