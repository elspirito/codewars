function digitize(n) {
    //code here
    let makeNum = num => Number(num);
    let arr = Array.from(String(n), makeNum);
    arr.reverse();
    return arr;
}
console.log(digitize(1234));
console.log(digitize(0));