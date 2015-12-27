require.config({
　　　　paths: {
　　　　　　"part2sub": "subjs/part2sub", //从当前路径开始的文件夹
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