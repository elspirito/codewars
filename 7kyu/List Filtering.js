function filter_list(l) {
    // Return a new array with the strings filtered out
    let newArr = [];
    for (let i = 0; i < l.length; i++) {
        if (Number.isInteger(l[i]) == true) {
            newArr.push(l[i]);
        }
    }
    return newArr;
}

console.log(filter_list([1,2,'a','b']));