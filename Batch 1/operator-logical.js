// comparison
let a = 3
let b = 2
let c = "2"
let d = 5

let greater = a > b;
let smaller = a < b;
let same = a == c
let identik = a === c
let tidakSama = a != c
let tidakIdentik = a !== c

console.log(greater);
console.log(smaller);
console.log(same);
console.log(identik);
console.log(tidakSama);
console.log(tidakIdentik);

let xy = greater && smaller;
let yz = greater || smaller;
let x = !greater;

console.log(xy);
console.log(yz);
console.log(x);