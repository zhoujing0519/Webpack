// 我们在Greeter.js中定义一个返回包含问候信息的html元素的函数,并依据CommonJS规范导出这个函数为一个模块：
module.exports = function(){
    var greet = document.createElement('div');
    greet.textContent = "Hi there and greetings!";
    return greet;
};
