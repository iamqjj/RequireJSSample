
define('partwithname', [],function (){
　　　　var add = function (x,y){
　　　　　　return x+y;
　　　　};
　　　　return {
　　　　　　add: add
　　　　};
　　});


//如果模块是有主函数即定义了模块名 define('jquery', [], function() { ... }); 
//则require的时候只能用 定义了的模块名 或者在shim中以加载非AMD模块的方式去重命名

