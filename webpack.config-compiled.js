'use strict';

module.exports = {
    entry: ['./app/reactjs/index.jsx'],
    output: {
        path: './public/javascripts/reactBundle',
        filename: "bundleReact.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map