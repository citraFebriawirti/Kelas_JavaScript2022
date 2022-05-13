/*logica operator adalah kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika. */

let a = 9;
let b = 10;

//AND
console.log(a > 15 && b > 20); //false,false = false
console.log(a > 15 && b < 20); // false,true =false

//OR
console.log(a > 15 || b > 20); //false,false = false
console.log(a > 15 || b < 20); // false,true = true