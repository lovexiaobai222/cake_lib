//node 环境测试
var cake = require('../dist/index.js');

console.log("cake:",cake);
console.log("isEmpty:",cake.isEmpty([]));
console.log("toMoney:",cake.toMoney(2.345));
