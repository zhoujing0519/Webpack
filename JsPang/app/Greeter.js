// 我们在Greeter.js中定义一个返回包含问候信息的html元素的函数,并依据CommonJS规范导出这个函数为一个模块：

// 未安装babel时，使用的是CommonJS的语法
/*
*/
// var config = require('./config.json');
//
// module.exports = function(){
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// };


// 安装了babel，并配置以后，可以使用es6, jsx
    import React, {Component} from 'react'
    import config from './config.json'

    class Greeter extends Component{
        render(){
            return (
                <div>
                    {config.greetText}
                </div>
            )
        }
    }

    export default Greeter
