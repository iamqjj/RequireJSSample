console.log("run part1!");

define(function (){
　　　　var add = function (x,y){
　　　　　　return x+y;
　　　　};
　　　　return {
　　　　　　add: add
　　　　};
　　});

/*
 define定义一个匿名函数， 在外层函数默认调用的时候是执行这个匿名函数（）
 一般匿名函数返回闭包对象，外层对这个对象直接可以调用
 如上面代码外层拿到的就是一下对象
 {
　　　add: add
　};


*/	