var http=require('http');
//创建一个服务器
var server= http.createServer();
//接收响应
server.on("request",function (request,response){
    // console.log(request.url);
    // response.end("呵呵");
    if(request.url==="/"){
        response.end("index")
    }else if(request.url==="/abc"){
        response.end("haihao")
    }else{
        response.end("404 not find")
    }
    
});
//开启服务器
server.listen(3000,function name(params) {
    console.log("服务器开启了");
    
})
