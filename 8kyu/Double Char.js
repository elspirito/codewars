function doubleChar(str) {
    let double = "";
    for (let i = 0; i < str.length; i++) {
        double += str[i] + str[i];
    }
    return double;
}

console.log(doubleChar("SSttrriinngg"));