function invert(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(array[i] * -1);
    }
    return newArr;
}

console.log(invert([1,2,3,4,5]));