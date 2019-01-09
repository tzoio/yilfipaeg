const webpack = require('webpack');
const path = require('path');

const plg = {
    HtmlWebpack: require('html-webpack-plugin'),
    CleanWebpack: require('clean-webpack-plugin'),
    MiniCssExtract: require('mini-css-extract-plugin'),
    UglifyJs: require('uglifyjs-webpack-plugin'),
    SourceMapDevTool: webpack.SourceMapDevToolPlugin,
    BundleAnalyzer: require('webpack-bundle-analyzer').BundleAnalyzerPlugin
}

module.exports = (env, argv) => {
    const isDev = (argv.mode == 'development') ? true : false;
    const entry = './src/main.js';
    const output = {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    };

    const devServer = {
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 8080,
        open: true,
        compress: true,
        clientLogLevel: 'warning'
    };

    const opt = isDev ? {
        minimize: false
    } : {
        minimizer: [new plg.UglifyJs()]
    };

    config = {
        mode: argv.mode,
        entry: entry,
        output: output,
        optimization: opt,
        devtool: isDev ? 'eval-cheap-module-source-map': 'source-map',
        context: path.resolve(__dirname),
        devServer: devServer,
        plugins: [
            new plg.MiniCssExtract({
                filename: '[name].css',
                chunkFilename: '[id].css'
            }),
            new plg.HtmlWebpack({
                template: 'src/index.html'
            }),
            new plg.CleanWebpack(['dist']),
            new plg.SourceMapDevTool({
                filename: 'sourcemaps/[file].map'
            }),
            new plg.BundleAnalyzer({
                analyzerMode: isDev ? 'server' : 'disabled',
                analyzerHost: '0.0.0.0',
                analyzerPort: '8081'
            })
        ],
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: [path.resolve(__dirname, 'node_modules')],
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }]
                },
                {
                    test: /\.s(c|a)ss$/,
                    include: [path.resolve(__dirname, 'src', 'initial')],
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.s(c|a)ss$/,
                    use: [
                        plg.MiniCssExtract.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.svg$/,
                    use: [{
                            loader: 'file-loader',
                            options: {
                                name: 'image/[hash].[ext]'
                            }
                        },
                        {
                            loader: 'image-webpack-loader'
                        }
                    ]
                },
                {
                    test: /\.(gif|png|jpe?g)$/,
                    use: [{
                            loader: 'url-loader', // it already falls back on file-loader by default
                            options: {
                                limit: 8000, // Converts images < 8kb to base64 strings
                                name: 'image/[hash].[ext]'
                            }
                        },
                        {
                            loader: 'image-webpack-loader'
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':src', 'link:href']
                        }
                    }
                }
            ]
        }
    };

    return config;
}