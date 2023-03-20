//
let x = 1, y = 3
console.log(' y - x:', y - x ) // 2

//
let n = 2 + '1'
console.log('typeof n: ', typeof n) // str

//
let n1 = 2 + +'1'
console.log('typeof n1: ',typeof n1) // number

//
let n2 = 6 - '2'
console.log('typeof n2: ',typeof n2) // number, because str can not minuses

// counter 1
let counter = 1;
let a = ++counter; // (*)
console.log('a: ', a)

//
let counter = 1;
let n3 = 2 * ++counter // 4
console.log('n3: ', n3)

