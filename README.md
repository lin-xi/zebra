zebra
-------------

![zebra](./zebra.gif)

zebra[斑马] 是一个简单易用的前端构建工具。

优点：

+ 简单命令集，不用安装任何包，node zebra.js就可以搞定一切
+ 配置灵活简单


#主要功能如下

+ 解决js模板问题
+ 内置uglify，js压缩混淆
+ css压缩
+ js打包合并
+ 自动监听js修改，重新构建
+ 相对路径转化为绝对路径

**欢迎大家使用，提意见提需求报八哥。**


#用法
1. 安装 nodejs，https://nodejs.org/

2. 新建zebra-config.json, 放在项目根目录下，配置文件如下：

		{
			"base": "./src",
			"output": "./static",
			"rules": {
				"js": {
					"compile": false,
					"uglify": false,
					"md5": {
						"exclude": []
					}
				},
				"css": {
					"compress": true,
					"md5": {
						"exclude": []
					}
				},
				"html": {
					"resourceMap": true
				},
				"image": {},
				"other": {
					"copy": true
				}
			},
			"deploy": [{
				"receiver": "http://cq02-map-sv-control04.cq02.baidu.com:8890/receiver.php",
				"from": "./static",
				"to": "/home/map/odp_crm/webroot/mobile-framework",
				"exclude": "svn|rar|psd|docx"
			}],
			"clean": true
		}
	

3. 将zebra.js拷贝到项目根目录下

4. 在项目根目录下运行命令

		node zebra.js -w
	
zebra[斑马]就开始监听js文件的改变，自动构建


#功能简介

##js模板

你还在这样写模板吗？

	var tpl='<div class="xmeet-chat-logo"><img width="48" height="48" src="http://meet.xpro.im/v2/api/img/chat.png"/></div>"

太low了吧。

用了zebra之后，可以这样：

在统计目录下新建一个chatLogo.tpl,内容如下：

	<div class="xmeet-chat-logo">
		<img width="48" height="48" src="http://meet.xpro.im/v2/api/img/chat.png"/>
	</div>

然后js代码中

	var tpl = __inline('./chatLogo.tpl');

zebra编译之后，生成的内容如下：

	var tpl="<div class=\"xmeet-chat-logo\">\n	<img width=\"48\" height=\"48\" src=\"http://meet.xpro.im/v2/api/img/chat.png\"/>\n</div>\n"
	
	
##js压缩

zebra内置了uglify，轻松压缩混淆



##模块化
	
zebra与我的另一个开源项目module内在集成在一起，使用module和zebra构建的项目是这样的
	
	module(function(){
		var dust = {
			"core": {
				"Base": require('./core/Base'),
				"Cache": require('./core/Cache'),
				"Event": require('./core/Event'),
				"LRU": require('./core/LRU'),
				"LinkedList": require('./core/LinkedList'),
				"mixin": {
					"derive": require('./core/mixin/derive'),
					"notifier": require('./core/mixin/notifier')
				},
				"request": require('./core/request'),
				"util": require('./core/util')
			}
		}
		return dust;
	});
	
zebra会将相对路径转化为绝对路径

详情可参见我的module开源项目


# TODO土豆

1. 增量md5,只把改成的文件重新生成MD5

