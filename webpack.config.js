const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src/assets'),
        inline: true,
        hot: true,
        host: 'localhost',
        port: 8080
    },
    devtool: 'cheap-eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'src/assets'),
            to: path.join(__dirname, 'dist'),
            toType: 'dir'
        }])
    ]
}
