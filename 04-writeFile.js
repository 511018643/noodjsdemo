var fs = require('fs')
//文件写入成功,error是null.文件写入失败就是错误对象
fs.writeFile("你好.md","这是我第一次使用弄的js写文件",function (error) {
    console.log(error);
    if(error){
        console.log("写文件失败了");
        
    }else{
        console.log("写文件成功");   
    }
})