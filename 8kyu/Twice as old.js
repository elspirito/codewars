function twiceAsOld(dadYearsOld, sonYearsOld) {
    let x = dadYearsOld - sonYearsOld * 2;
    return x >= 0 ? x : -x;
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(42, 21));
console.log(twiceAsOld(55, 30));
console.log(-5 * -1);