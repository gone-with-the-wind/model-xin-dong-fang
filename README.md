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


