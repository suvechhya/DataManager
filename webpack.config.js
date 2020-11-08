// Imports: Dependencies
const path = require('path');
require("babel-register");
// Webpack Configuration
const config = {
    entry: './app/main.js',
    mode: 'development',
    target: "node",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, './dist'),
        library: "dataManager",
        libraryTarget: "umd"
    },
    // Loaders
    module: {
        rules: [
            // JavaScript/JSX Files
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    // Plugins
    plugins: [],
    devtool: 'source-map',
};
// Exports
module.exports = config;