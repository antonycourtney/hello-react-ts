// webpack.config.js

var webpack = require('webpack');


module.exports = {
    entry: {
      hello: "./ts/app.tsx"
    },
    output: {
        path: "./build/",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(ts|tsx)$/, 
              exclude: /node_modules/, 
              loader: "babel-loader?presets=es2015!ts-loader"
            },
            { test: /\.(json)$/, loader: "json-loader" }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".ts", ".tsx", ".json"]
    }
};