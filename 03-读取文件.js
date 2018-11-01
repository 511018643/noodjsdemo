var fs = require('fs');//fs是file-system的简写
fs.readFile('../问题点.txt',function (a,data) {
    var data1= data.toString();
    // console.log(data1);
    
})

fs.readFile("./好.md",function (error,data) {
    if(error){
        console.log("无该文件");
        
    }else{
        console.log("有该文件");
        
    }
})
