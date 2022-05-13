/*Comparison operator adalah membandingkan dua nilai , hasil dari comparison tersebut adalah boolean*/

// biasa 
let a = 9;
let b = 19;
console.log(a > b);
/*---Output : false */

//string : JavaScript menggunakan apa yang disebut urutan "kamus" atau "leksikografis".
let a1 = 'Z';
let a2 = 'A';
console.log(a1 > a2);
/*---Output : true */

//different types
let x = 1;
let y = '01';
console.log(x > y);
/*---Output : false */
console.log(x == y);
/*---Output : true*/
console.log(x === y);
/*---Output : false */