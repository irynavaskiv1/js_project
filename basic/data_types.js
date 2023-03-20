// str
let admin
let name
name = "John"
admin = name
console.log(admin)

let phrase = `can embed another ${name}`;
console.log(phrase)


// change str
let message = "hello";
console.log('message_1:', message)
message = 123456;
console.log('message_2:', message)


// num
let n = 123;
n = 12.345;
console.log('n:', n)

// bigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log('bigInt:', bigInt)

// bool
let isGreater = 4 > 1;
console.log('bigInt:', isGreater)


// typeof

console.log(typeof undefined)  // "undefined"
console.log(typeof 0)   // "number"
console.log(typeof 10n)  // "bigint"

typeof Symbol("id") // "symbol"
typeof Math // "object"  (1)
typeof null // "object"  (2)
typeof alert // "function"  (3)


// numeric conversion
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);
