const path = require('path');

module.exports = {
    entry: './scripts/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /.html$/i,
                loader: 'html-loader'
            }
        ]
    }
};