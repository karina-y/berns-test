var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['babel-polyfill', './public/src/index.js'],
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, './public/build'),
        filename: 'bundle.js',
        // publicPath: '/build',
        publicPath: 'http://localhost:3000'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './public/src')
                ],
                exclude: [
                    path.resolve(__dirname, './node_modules')
                ],
                loader: "babel-loader",
                options: {
                    presets: ['es2015', 'react', 'stage-3'],
                    plugins: ["transform-class-properties"]
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(jpe|jpg|png)(\?.*$|$)/,
                loader: 'file-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.css'
        })
    ],
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, './node_modules')
        ],
        extensions: [".js", ".json", ".jsx", ".css"]
    },
    // watch: true
};
