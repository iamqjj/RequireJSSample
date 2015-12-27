require.config({
　　　　baseUrl: "js",//从根路径开始的文件夹，非当前路径开始
　　　　paths: {
　　　　　　"part1": "part1",  
			"part2": "part2",
			"jquery": "http://code.jquery.com/jquery-1.11.3.min",
			"underscore": "underscore",
			"backbone": "backbone",
			"part3unAMD": "part3unAMD",
			"part3unAMDPlugin": "part3unAMDPlugin",
			"part4":"part4",
			// part5 已经定义了模块名所以不使用同样的名字就会得到undefined而拿不到模块
			"partwithname":"part5"  

　　　　},
		
		shim: {		//shim属性，专门用来配置不兼容的模块。具体来说，每个模块要定义
			        //（1）exports值（输出的变量名），表明这个模块外部调用时的名称；
			        //（2）deps数组，表明该模块的依赖性。
			part3unAMD:{
				  deps:[],
				  exports: 'StringUtils'  //main.js中exports的值，一定要与part3unAMD.js中暴露出的全局变量名称一致。
				  						  //part3unAMD.js这2个模块的返回值，就是暴露出的全局变量 StringUtils
				  						  //requireJS框架就是将这些全局变量的值返回，作为模块的返回结果。
			},

			part3unAMDPlugin:{
				deps:['part3unAMD'],
				exports: 'StringUtilsPlugin'

			},

			part4:{
				init: function(){  //同时暴露多个全局变量 ,当 exports 与 init 同时存在的时候， exports 将被忽略。
					return{
						hello: hello,
						hello2: hello2
					}
				}
			},


　　　　　　'underscore':{
　　　　　　　　exports: '_'
　　　　　　},
　　　　　　'backbone': {
　　　　　　　　deps: ['underscore', 'jquery'],
　　　　　　　　exports: 'Backbone'
　　　　　　} ,
			/*
			'jquery.scroll': {
			　　　　　　deps: ['jquery'],
			　　　　　　exports: 'jQuery.fn.scroll'
			}*/														
　　　　}

　　});


//如果模块是有主函数即定义了模块名 define('jquery', [], function() { ... }); 
//则require的时候只能用 定义了的模块名 或者在shim中以加载非AMD模块的方式去重命名

require(['part1', 'part2','part3unAMD','part3unAMDPlugin','part4','partwithname','underscore'], 
	function (aa,bb  , part3unAMD, part3unAMDPlugin, dd, ee, _){
　　　　// some code here
		
		console.log(aa.add(1,1));  //标准的AMD模块
		console.log(bb.add(1,1));  // 标准的引用其他模块的AMD模块

		var p3uPl = require("part3unAMDPlugin");//引用其他模块的非AMD模块
		console.log(p3uPl.toString());

		dd.hello();  //通过init通过一个模块暴露多个对象
		dd.hello2();

		console.log(ee.add(1,1)); // 调用已命名的AMD（有主的AMD）模块
　　});
