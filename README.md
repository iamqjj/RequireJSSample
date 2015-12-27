# RequireJSSample
Some sample of Require JS

//标准的AMD模块
console.log(aa.add(1,1));  
// 标准的引用其他模块的AMD模块
console.log(bb.add(1,1));  
//引用其他模块的非AMD模块
var p3uPl = require("part3unAMDPlugin"); console.log(p3uPl.toString());
//通过init通过一个模块暴露多个对象
dd.hello();  dd.hello2();
// 调用已命名的AMD（有主的AMD）模块
console.log(ee.add(1,1)); 
