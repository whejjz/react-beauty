const pathLib = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const OpenBrowser = require('open-browser-webpack-plugin');
var ExtractText = require('extract-text-webpack-plugin'); //css单独打包
const CleanPlugin = require('clean-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const config = require('./config/config');
module.exports = {
    entry: {
        index: [
            pathLib.resolve(__dirname,'src/index.js')
        ],
        vendor: ['react','react-dom','react-router-dom','redux','react-redux','redux-saga']
    },
    output: {
        path: pathLib.resolve(__dirname, 'build'),
        publicPath: "/",
        filename: '[name].[hash:8].js'
    },
    devtool:'eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },{
                test: /\.jsx$/,
                exclude: /^node_modules$/,
                loaders: ['jsx-loader', 'babel-loader'],
            }, {
                test: /\.css$/,
                loader: 'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!',
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
            }, {
                test: /\.less$/, // 去掉exclude: /^node_modules$/和include: [APP_PATH]是为了babel-plugin-import按需加载antd资源
                loader: "style-loader!css-loader!less-loader"
            },{
                test: /\.(eot|woff|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /node_modules/,
                use: ['file-loader?name=[name].[ext]'],
            }, {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: ['url-loader?limit=8192&name=images/[hash:8].[name].[ext]'],
                //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }, {
                //test: /\.(svg)$/i,
                //loader: 'svg-sprite-loader',
                //include: svgDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
            }
        ]
    },
    plugins: [
        //new CleanPlugin(['build']),
        new ProgressBarPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
           "progress.env.NODE_ENV":JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            title: "My app",
            filename: 'index.html', //生成的html存放路径，相对于 path
            template: 'index.html', //html模板路径
            showErrors: true,
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),//保证出错时页面不阻塞，且会在编译结束后报错
        //new ExtractText({
        //    filename:'bundle.[hash].css',
        //    disable:false,
        //    allChunks:true
        //}),
        new OpenBrowser({url:`http://${config.hotReloadHost}:${config.hotReloadPort}`}),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest"
        })
    ],
    resolve: {
        extensions: ['.web.js', '.js', 'jsx' , '.json', '.less'],
        alias: {
        }
    },
	devServer: {
        disableHostCheck: true,
        quiet: false, // 不显示控制台信息
        noInfo: false, // 不显示控制台信息（仅警告和错误）
        lazy: false, // 不切换懒惰模式
        historyApiFallback: true, // 所有的url路径均跳转到index.html,需要设置为true，否则比如访问localhost:8888,就跳转不到/home页
        inline: true, // 是否实时刷新，即代码有更改，自动刷新浏览器
        stats: {
            colors: true // 不同类型的信息用不同的颜色显示
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        host:'localhost',
        port: 3000,
        hot: true
    }
};