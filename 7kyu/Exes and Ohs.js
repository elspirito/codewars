function XO(str) {
    // let { countX, countY } = 0;
    let countX = 0;
    let countY = 0;
    // console.log(str.toLowerCase().indexOf('x'));
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase().indexOf('x') !== -1) {
            countX++;
        }
        if (str[i].toLowerCase().indexOf('o') !== -1) {
            countY++;
        }
    }

    // console.log(countX);
    // console.log(countY);

    if (countX === countY) {
        return true;
    } else {
        return false;
    }
}

console.log(XO("xooxx"));
console.log(XO("ooxXm"));