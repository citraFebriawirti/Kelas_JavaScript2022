//assignment adalah operator penugasan yang adanya (=)

// operator aritmatika
let a = 5;
let b = 5;

console.log((a += b)); // penjumlahan( a=a+b)
/*---Output : 10 */
console.log((a -= b)); //pengurangan (a=a-b)
/*---Output : 0 */
console.log((a *= b)); //perkalian (a=a*b)
/*---Output : 25 */

// persamaan
let angka = 10;
let number = '10';

console.log(angka == number);
/*---Output : true */

// chaining assigment
let x, y, z;
x = y = z = 3 + 5;
console.log(x, y, z);
/*---Output : 8 8 8 */