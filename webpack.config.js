// // webpack.config.js
const path = require('path');
// import { path } from 'path'
module.exports = {
    mode: 'development', // və ya 'production' və ya 'none'
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    watch: true
};
