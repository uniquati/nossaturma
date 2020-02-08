const path = require('path');

module.exports = {
    // entry: './embreve/src/embreve.js',
    entry: './src/js/index.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        // path: path.resolve(__dirname, 'embreve/js')
        path: path.resolve(__dirname, 'dist/js')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    },
};
