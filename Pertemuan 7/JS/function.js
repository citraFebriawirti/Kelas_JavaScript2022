// fungsi ucapan


function ucapan() {
    console.log('Selamat Pagi');
}

ucapan();

// perkalian
function kali(a, b) {
    return a * b;
}
let result = kali(3, 4);
console.log(result);

// penjumlahan
function jumlah(a, b) {
    return a + b;
}
let result1 = jumlah(3, 4);
console.log(result1);

// pengurangan
function kurang(a, b) {
    return a - b;
}
let result2 = kurang(3, 4);
console.log(result2);

// pembagian
function bagi(a, b) {
    return a / b;
}
let result3 = bagi(3, 4);
console.log(result3);

//sisa bagi
function modulus(a, b) {
    return a % b;
}
let result4 = modulus(3, 4);
console.log(result4);

// paramater lebih dari 1
function ucapan(nama, bahasa) {
    if (bahasa === 'English') {
        console.log(`Good Morning ${nama}!`);
    } else if (bahasa === 'French') {
        console.log(`Bonjuor ${nama}`);
    } else {
        console.log(`Selamat Pagi ${nama}`);
    }
}
ucapan('Citra', 'French');

//kuis
function ucapan(nama, bahasa) {
    if (bahasa === 'English') {
        console.log(`Good Morning ${nama}!`);
    } else if (bahasa === 'French') {
        console.log(`Bonjuor ${nama}`);
    } else {
        console.log(`Selamat Pagi ${nama}`);
    }
}
let pesanUcapan = ucapan('citra', 'French');
console.log(pesanUcapan);