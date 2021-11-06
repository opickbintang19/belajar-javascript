let myMoney = 255800

let seratusRibu = myMoney / 100000
let sisa = myMoney% 100000

let sepuluhRibu = sisa / 10000
sisa = sisa % 10000

let seribu = sisa / 1000;
sisa = sisa % 1000

let seratus = sisa / 100;
sisa = sisa % 100

console.log(Math.floor(seratusRibu));
console.log(Math.floor(sepuluhRibu));
console.log(Math.floor(seribu));
console.log(Math.floor(seratus));
console.log(sisa);