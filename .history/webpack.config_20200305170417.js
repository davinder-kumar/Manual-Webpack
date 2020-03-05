const path = require("path")
const autoPrefixer = require("autoprefixer")
const HtmlWebPack = require("html-webpack-plugin")
module.exports = {
    devtool: "cheap-module-eval-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "",
        chunkFilename: '[id].js',
        filename: "bundle.js"

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        'options': {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]__[hash:base64:5]",
                            },
                        }

                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoPrefixer({
                                    browsers: [
                                        "> 1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    
}