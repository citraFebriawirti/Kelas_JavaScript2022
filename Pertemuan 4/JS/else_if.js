let peringkat = 92;

if (peringkat >= 90) {
    console.log(`Peringkat ${peringkat}`);
}
console.log(peringkat);
/*---Output : Peringkat 80*/



// if else pada number
let nilai = 80;

if (nilai >= 90) {
    console.log('Nilai Kamu A')
} else if (nilai >= 80 && nilai <= 89) {
    console.log('Nilai Kamu B')
}
console.log(nilai);
/*---Output : Nilai Kamu B */



// if else string
let hari = 'sabtu';
let tempat = 'STMIK';

if (hari === 'senin') {
    tempat = 'ITB';
} else if (hari === 'selasa') {
    tempat = 'Telkom Univ';
} else if (hari === 'sabtu') {
    tempat = 'STMIK';
}

console.log(tempat);
/*---Output : STMIK */


// Tugas
/*
1. nama variable = score
2. nilai besar sama 70 : A
3. nilai 60-69 : B
4. C
 */