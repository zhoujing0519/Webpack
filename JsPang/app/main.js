// 未安装babel时，使用的是CommonJS的语法
/*
*/
import './main.css'

// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());

// 安装了babel，并配置以后，可以使用es6, jsx
    import React from 'react'
    import {render} from 'react-dom'
    import Greeter from './Greeter'

    render(<Greeter/>, document.getElementById('root'))
