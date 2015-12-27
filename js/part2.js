require.config({
　　　　paths: {
　　　　　　"part2sub": "./subjs/part2sub", //从当前路径开始的文件夹  等同于subjs/part2sub
　　　　}
　　});


define(['part2sub'],function (addsub){
　　　　var add = function (x,y){
			var z = addsub.addsub( 1 , 2);
　　　　　　return x+y+z;
　　　　};
　　　　return {
　　　　　　add: add
　　　　};
　　});