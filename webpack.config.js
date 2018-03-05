var path = require('path'); // node内置path模块
var webpack = require('webpack'); // webpack打包工具

var dev = require('./webpack.config.dev.js')
var merge = require('webpack-merge')
var config = ''

if(process.env.NODE_ENV !== 'production'){//开发环境下
    config = merge(dev, {})
} else {
    config = merge(dev, {})
}

module.exports = config