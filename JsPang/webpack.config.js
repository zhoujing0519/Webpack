const path = require('path')

module.exports = {
    devtool: 'eval-source-map', // 在开发阶段是一个非常好的选项，在生产阶段一定不要启用这个选项
    entry: __dirname + '/app/main.js', // 唯一入口文件（__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录）
    output: { // 出口文件的配置项
        path: path.resolve(__dirname, 'public'), // 打包后文件存放的地方
        filename: 'bundle.js' // 打包后输出文件的文件名
    },
    devServer: { // 配置webpack服务功能
        contentBase: path.resolve(__dirname, 'public'), // 本地服务器所加载的页面所在的目录
        host: 'localhost',
        port: 1717,
        compress: true, // 服务器压缩是否开启
        historyApiFallback: true, // 不跳转
        inline: true, // 实时刷新
    },
    module: { // 模块：例如解读CSS，图片如何转换、压缩
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    plugins: [ // 插件，用于生产模板和各项功能

    ],
}
