const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: [path.resolve(__dirname, "./src/index.tsx")],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new Dotenv(),
    ],

    // モジュール設定
    module: {
        rules: [
            {
                // ts-loaderの設定
                test: /\.(js|ts|tsx)?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    // モジュール解決
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    // 開発モード設定
    devServer: {
        contentBase: "./dist",
        historyApiFallback: true,
    }
};