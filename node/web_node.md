# web node
## javascript类型
1. 为什么有的编程规范要求用 void 0 代替 undefined？  
答：  
(1)Javascript中void是一个操作符，该操作符指定要计算一个表达式但是不返回值。用法：javascript:void(expression),expression 是一个要计算的 Javascript 标准的表达式。你以使用 void 操作符指定超级链接。表达式会被计算但是不会当前文档处装入任何内容。
(2)undefined表示未定义，任何变量在赋值之前都是undefined类型值是undefined，一般我们可以用全局变量 undefined（就是名为 undefined 的这个变量）来表达这个值，或者 void 运算来把任意一个表达式变成 undefined 值。但是undefined是一个变量而非关键字，为了避免无意中被篡改，一般使用void0来获取undefined的值

2. 字符串有最大长度吗？
答：  
（1）String 有最大长度是 2^53 - 1，并非一般理解的字符数，String 的意义并非“字符串”，而是字符串的 UTF16 编码。符串的操作 charAt、charCodeAt、length 等方法针对的都是 UTF16 编码。所以，字符串的最大长度，实际上是受字符串的编码长度影响的。  
（2）JavaScript 中的字符串是永远无法变更的，一旦字符串构造出来，无法用任何方式改变字符串的内容，所以字符串具有值类型的特征。

3. 0.1 + 0.2 不是等于 0.3 么？为什么 JavaScript 里不是这样的？  
（1）javascript为了表达几个额外语言场景，规定了几个例外情况：
    - NaN
    - Infinity 
    - Infinity  
区分 +0 和 -0 的方式，正是检测 1/x 是 Infinity 还是 -Infinity  
Number 类型中有效的整数范围是 -0x1fffffffffffff 至 0x1fffffffffffff，所以 Number 无法精确表示此范围外的整数。

4. ES6 新加入的 Symbol 是个什么东西？
5. 为什么给对象添加的方法能用在基本类型上？