// 使用node构建一个Web服务器
// 首先在node中提供了一个核心模块:http
//这个模块的职责就是帮你构建服务器的

// 1.加载http核心模块
var http = require('http');
// 2.使用http.createServer方法创建一个Web服务器
var server = http.createServer();
//3.服务器要干嘛?
// 接受请求,处理请求,给个反馈(发送响应)
server.on('request',function (request,response) {
    console.log("收到请求,请求路径是"+request.url);
    // response对象有一个write方法,可以给客户端发送响应数据
    // write可以使用多次,但是最后一定要用end来结束响应

    response.write("hello")
    response.write("nodejs")
    response.end();
    
});
// 4.绑定端口号,启动服务器
server.listen(3000,function (params) {
    console.log("服务器启动成功了.可以通过http:127...:3000来反问");
    
})

