// webpack4 by default entry point is src/index.js 
// and creates dist folder with main.js 
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: { main: './src/index.js' },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}