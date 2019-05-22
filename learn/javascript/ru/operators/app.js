"use strict";

var a = 1;
var b = 2;

console.log(a = b + 1);
console.log("++++++++++++++++++");
/* Example 1 */
var a = 1, b = 1, c, d;

c = ++a;
console.log(c); // 2
d = b++;
console.log(d); // 1

c = (2 + ++a); // 5
console.log(c);
d = (2 + b++); // 4
console.log(d);

console.log(a); // 3
console.log(b); // 3
console.log("++++++++++++++++++");
/* Example 2 */
var a = 2;
var x = 1 + (a *= 2);
console.log(x); // 5
console.log("++++++++++++++++++");
/* Example 3 */
console.debug("2" > "14");
console.debug(+"2" > +"14");
console.log("++++++++++++++++++");
console.debug('2' > 1); // true, сравнивается как 2 > 1
console.debug('01' == 1); // true, сравнивается как 1 == 1
console.debug(false == 0); // true, false становится числом 0
console.debug(true == 1); // true, так как true становится числом 1.
console.error(0 === false); // false, т.к. типы различны
console.dir({"a": 73}); // false, т.к. типы различны
console.log("++++++++++++++++++");
console.debug(null == null);
console.debug(null === null);
console.debug(undefined == undefined);
console.debug(undefined === undefined);
console.debug(null == undefined);
console.debug(null === undefined);
console.debug(NaN == NaN);
console.debug(NaN === NaN);
console.debug(null == NaN);
console.debug(undefined == NaN);
console.log("++++++++++++++++++");
