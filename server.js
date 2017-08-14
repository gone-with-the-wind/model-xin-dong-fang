var http = require('http');
var fs = require('fs');//引入文件读取模块

var documentRoot = 'E:/awork/note/model-xin-dong-fang';
//需要访问的文件的存放目录

var server= http.createServer(function(req,res){
    res.setHeader("Access-Control-Allow-Origin", "*");

    var url = req.url; 
    //客户端输入的url，例如如果输入localhost:8888/index.html
    //那么这里的url == /index.html 

    var file = documentRoot + url;
    console.log(url);
    //E:/PhpProject/html5/websocket/www/index.html 


    fs.readFile( file , function(err,data){
    /*
        一参为文件路径
        二参为回调函数
            回调函数的一参为读取错误返回的信息，返回空就没有错误
            二参为读取成功返回的文本内容
    */
        if(err){
            res.writeHeader(404,{
                'content-type' : 'text/html;charset="utf-8"'
            });
            res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
            res.end();
        }else{
            res.writeHeader(200,{
                'content-type' : 'text/html;charset="utf-8"'
                //注意：'content-type' : 'text/html'容易使css文件无法引入，给予删除
                //改为：'content-type' : 'charset="utf-8"'
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });



}).listen(8888);

console.log('服务器开启成功');


//完整版本
// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var path = require('path');
// var documentRoot = 'E:/awork/note/DamageEstimating-VersionCtrl/DamageEstimating';
// function getContentTypeByExt(ext) {
//     ext = ext.toLowerCase();
//     if (ext === '.htm' || ext === '.html')
//         return 'text/html';
//     else if (ext === '.js')
//         return 'application/x-javascript';
//     else if (ext === '.css')
//         return 'text/css';
//     else if (ext === '.jpe' || ext === '.jpeg' || ext === '.jpg')
//         return 'image/jpeg';
//     else if (ext === '.png')
//         return 'image/png';
//     else if (ext === '.ico')
//         return 'image/x-icon';
//     else if (ext === '.zip')
//         return 'application/zip';
//     else if (ext === '.doc')
//         return 'application/msword';
//     else
//         return 'text/plain';
// }

// var server= http.createServer(function(req,res){
//     var pathname = url.parse(req.url).pathname;
//     if (pathname === '/') {
//         pathname = "/index.html"; //默认页面
//     }
//     var ext = path.extname(pathname);
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     var urls = req.url; 
//     var file = documentRoot + urls;
//     console.log(urls);
//     fs.readFile( file , function(err,data){
//         if(err){
//             res.writeHeader(404,{
//                 'content-type' : 'text/html;charset="utf-8"'
//             });
//             res.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
//             res.end();
//         }else{
           
//             res.writeHead(200, { "Content-Type": getContentTypeByExt(ext) });
//             res.write(data);
//             res.end();
//         }
//     });
// }).listen(8888);
// console.log('服务器开启成功');









