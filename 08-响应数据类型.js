var http =require('http');
var server =http.createServer();
server.on("request",function (req,res) {
    if(req.url==="/plain"){
        // 解决utf-8乱码的问题
        res.setHeader("Content-Type","text/plain; charset=utf-8");
        res.end("你好,世界");
    }else if(req.url==="/html"){
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.end("<a href='#'>我是一个a标签</a>")
    }else{
        res.end("404 is not find")
    }
});
server.listen(3000,function name(params) {
    console.log("server is running");   
})
