let hari = 'sabtu';
let tempat = 'STMIK';

switch (hari) {
    case 'senin':
        tempat = 'ITB';
        break;
    case 'selasa':
        tempat = 'Telkom Univ';
        break;
    case 'sabtu':
        tempat = 'STMIK';
        break;
    default:
        tempat = 'Di Nusantara';
}

console.log(tempat);