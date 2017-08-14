# model-xin-dong-fang
## 关于数据加载过程onload.gif效果
- 采用jquery-blockUi插件
- 采用onload.html的方式
## 关于angular-UI-bootstrap
- [**angularJs-UI-bootstrap系列教程1(使用前的准备)**](http://www.cnblogs.com/HeJason/p/5315947.html)
- [**angular-ui官网**](http://angular-ui.github.io/bootstrap/)
- [angular 实现modal windows效果（即模态窗口，半透明的遮罩层），以及bootstrap(css,components,js)的初步学习](http://www.cnblogs.com/oxspirt/p/4536866.html)
- [jQuery UI Bootstrap-基于Bootstrap样式的 jQuery UI 控件 (v0.5)](http://www.bootcss.com/p/jquery-ui-bootstrap/)
- [AngularJS+ui.bootstrap实现图片轮播](http://blog.csdn.net/yateswang/article/details/47751477)
- [AngularJS实现一个简单的Carousel](http://www.angularjs.cn/A1cF)
- [通过AngularJS实现图片上传及缩略图展示](http://www.cnblogs.com/jach/p/5734920.html)
- [$parse/$eval和$observe/$watch如何区分](http://www.ngnice.com/posts/2314014da4eea8)
- [**angularjs实现多张图片上传并预览功能**](http://www.jb51.net/article/106661.htm)
- [**AngularJS图片上传功能的实现**](http://www.cnblogs.com/Uncle-Maize/p/6215710.html)


###  ui.bootstrap.datepickerPopup  
[JavaScript Date.setHours() 函数详解](http://www.365mini.com/page/javascript-date-sethours.htm)
[angularJS date filter ——时间格式化过滤器](http://blog.csdn.net/djzhao627/article/details/53443425)
- datepickerPopupsettings:
	- `close-on-date-selection` (Default: true) - 当日期选中的时候是否关闭datepicker
	- `clear-text`  The text to display for the clear button.
	- `close-text` The text to display for the close button.
	- `current-text` The text to display for the current day button.


- angular的date filter服务
{{ now | date : 'yyyy-MM-dd HH:mm:ss'}}
{{ now | date:'medium' }}<!-- Dec 3, 2016 10:43:51 AM -->
{{ now | date:'short' }}<!-- 12/3/16 10:43 AM -->
{{ now | date:'fullDate' }}<!-- Saturday, December 3, 2016 -->
{{ now | date:'longDate' }}<!-- December 3, 2016 -->
{{ now | date:'mediumDate' }}<!-- Dec 3, 2016 -->
{{ now | date:'shortDate' }}<!-- 12/3/16 -->
{{ now | date:'mediumTime' }}<!-- 10:43:51 AM -->
{{ now | date:'shortTime' }}<!-- 10:43 AM -->

- javascript setHours()
date.setHours( hours[, minutes[, seconds[, milliseconds ]]] )
|参数|描述|
|------|------|
|hours|Number类型指定的小时值。|
|minutes|可选/Number类型指定的分钟值。|
|seconds|可选/Number类型指定的秒值。|
|milliseconds|可选/Number类型指定的毫秒值。|
```
//定义一个Date对象"2012-03-15 13:11:43 123"
var date = new Date(2012, 2, 15, 13, 11, 43, 123);
document.writeln( date.toLocaleString() ); // 2012年3月15日 13:11:43

date.setHours(23);
document.writeln( date.toLocaleString() ); // 2012年3月15日 23:11:43

date.setHours(13, 20, 5);
document.writeln( date.toLocaleString() ); // 2012年3月15日 13:20:05

date.setHours(26, -3, 100);
document.writeln( date.toLocaleString() ); // 2012年3月16日 1:58:40
```


###  ui.bootstrap.Modal 
- appendTo:Appends the modal to a specific element.

- resolve的使用
[初学AngularJs路由（七）：Ui-router-resolve(预加载)](http://blog.csdn.net/oak160/article/details/53035496)
[深入理解ANGULARUI路由_UI-ROUTER](http://www.cnblogs.com/hughtxp/p/3965916.html)
[AngularJs的UI组件ui-Bootstrap分享（十）——Model](http://www.cnblogs.com/gongshunkai/p/6752601.html)
[**angular-ui-bootstrap-modal必须要说的几个点**](https://my.oschina.net/codingBingo/blog/715869)

- angular的component
[Build an Angular 1.5 component](http://www.jianshu.com/p/3daec67dd176)
[angular学习（十三）——Component](http://blog.csdn.net/lastsweetop/article/details/56285838?locationNum=2&fps=1)

[div中的input居中问题](http://bbs.csdn.net/topics/380209045)
[HTML input 选择文件转成base64编码](https://www.waitig.com/html-input-%E9%80%89%E6%8B%A9%E6%96%87%E4%BB%B6%E8%BD%AC%E6%88%90base64%E7%BC%96%E7%A0%81.html)


## HTML input 选择文件转成base64编码

解决formdata不通用问题
解决传入非图片格式问题

## 跨域
[跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
[详解js跨域问题](http://www.cnblogs.com/aoldman/p/4666406.html)
[Angular中使用$http.jsonp发送跨站请求](http://www.cnblogs.com/liangzi4000/p/6376385.html)
[Angularjs跨域](http://www.cnblogs.com/yinghuochongfighter/p/5998194.html)
[angularjs跨域post解决方案](http://www.cnblogs.com/y896926473/p/5754287.html)
[AngularJS：与后端服务器通讯](http://www.cnblogs.com/wwjuan/p/5013675.html)
[AJAX实现跨域的三种种方法（代理,JSONP,XHR2）](http://www.cnblogs.com/lvmingyin/p/5273295.html)

- ajax是不能跨域的，这是主流浏览器出于安全考虑都不允许的。除非你的接口的服务器和你的网站拥有相同的域名。
- angular.js跨域解决方案
```
app.config(["$sceDelegateProvider",function($sceDelegateProvider){
    $sceDelegateProvider.resourceUrlWhitelist(["self","http://116.62.174.175:8080/**","http://localhost:8082/**"])
}])
```

## loading加载数据
[angular-loading-bar](https://github.com/chieffancypants/angular-loading-bar)


## 搭建node本地环境
[简单搭建nodeJS服务，访问本地站点文件](http://blog.csdn.net/u014420383/article/details/47945819)
[用node.js实现简单的web服务器](http://www.cnblogs.com/loogn/p/3362475.html)
- 安装nodejs服务(从官网下载安装)，node相当于apache服务器

- 在自己定义的目录下新建服务器文件如 server.js
```
	var http = require('http');//引入http模块
	//开启服务，监听8888端口
	//端口号最好为6000以上
	var server = http.createServer(function(req,res){
    /*
        req用来接受客户端数据
        res用来向客户端发送服务器数据
    */
    console.log('有客户端连接');//创建连接成功显示在后台
    //一参是http请求状态，200连接成功
    //连接成功后向客户端写入头信息
    res.writeHeader(200,{
        'content-type' : 'text/html;charset="utf-8"'
    });

    res.write('这是正文部分');//显示给客户端
    res.end();

}).listen(8888);
console.log('服务器开启成功');
```
- 在cmd控制台中cd切换进server.js所在的目录，然后执行node server.js命令
当控制台显示”服务器开启成功”则说明node服务器已经建立

- 在浏览器中访问服务器
在浏览器中输入
localhost:8888 ， 浏览器显示“这是正文部分”。
查看cmd控制台，显示 “有客户端连接”
可在多个浏览器窗口中进行以上操作，每个浏览器窗口均会对应一次“有客户端连接”
### 访问本地站点文件
- 在自定义的目录下创建node服务文件server2.js
```
	var http = require('http');
	var fs = require('fs');//引入文件读取模块

	var documentRoot = 'E:/PhpProject/html5/websocket/www';
	//需要访问的文件的存放目录

	var server= http.createServer(function(req,res){

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
            });
            res.write(data);//将index.html显示在客户端
            res.end();

        }

    });
	}).listen(8888);

	console.log('服务器开启成功');
```
- 创建index.html文件

如果要访问index.html文件，当然你得先有这个文件，不然服务器读取失败，返回404

- 在cmd控制台cd切换到 server2.js的目录下执行node server2.js命令
开启服务器

- 在浏览器输入localhost:8888/index.html访问该文件


#### 一个简单的零配置命令行HTTP服务器 - http-server (nodeJs)
- npm install http-server 
- 在站点目录下开启命令行输入  `http-server`
访问: http://localhost:8080 or http://127.0.0.1:8080 







## js中如何向json数组添加元素
错误示范:
```
var a = ['left','top'],
    x = [];

for(i=0;i<a.length;i++) {
    x.push({
        a[i] : 0
    });
}
```
正确示范：You have to use bracket notation:
```
var obj = {};
obj[a[i]] = 0;
x.push(obj);
```
result:`x = [{left: 0}, {top: 0}]`
如果你需要的不是对象数组而是同一个对象的两个属性：
```
var x = {};
x[a[i]] = 0;
```
result:`x = {left: 0, top: 0}`


```
//1、
var jsonstr="[{'name':'a','value':1},{'name':'b','value':2}]";
var jsonarray = eval('('+jsonstr+')');
  
var arr  =
     {
         "name" : $('#names').val(),
         "value" : $('#values').val()
     }
jsonarray.push(arr);
 
//2、
var json={};// 定义一个json对象
 json.array1=["2","4"];// 增加一个新属性，此属性是数组
 json.array1[json.array1.length]='6';// 数组追加一个元素
 alert(json.array1)
```


```
1，你是需要js动态创建json对象(即通常的对象)：
var json={};
var lst=[];
var obj1={};
obj1['id']=1;
obj1['name']='name';
obj1['type']='type';
lst.push(obj1);
json['content']=lst;

2就是你需要json字符串(json对象转成字符串)：
//引用json.js
var js=JSON.stringify(json);

```


## 显示器上的4个按钮都有什么作用
- menu 是显示器菜单键，可以调出显示器调节菜单，菜单中包含了所有对显示器功能的调节。
第二个向下的三角形按键，是方向向下键，主要作用是向下移动光标
第三个方向向上的三角形按键，作用和第二个方向向下的三角形的按键正好相反，是向上移动。
第四个source按键是确定键，选择好某项后，按该键确定。
第五个按键 AUTO键是设置显示屏幕自动进行画面最佳调节的按键。
还有一个是电源开关键。主要负责打开或关闭显示器。

- MENU 菜单按键 在子菜单中起'确定'作用
DOWN/- 向下按键 在子菜单中起向下移动/减小作用
UP/+ 向上按键 在子菜单中起向上移动/增大作用
AUTO 自动调整按键 自动调整显示器各参数. 

- 亮度－－一个类似太阳形状的图案，按一下直接进入亮度调节菜单，同时兼“向上或增加”功能键；
对比度－－一个类似半月形状的图案，按一下直接进入对比度调节菜单，同时兼“向下或减小”功能键；
OK键－－有的是ok外加一个圈，有的是一个箭头插入方或圆圈中，表示确认，类似回车，按一下进入主菜单；
退出键－－多数是一个箭头从方或圆圈中出来，表示退出返回，类似电脑上的ESC键。 




