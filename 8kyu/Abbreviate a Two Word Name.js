function abbrevName(name) {

    let arr = name.split(' ', 2);
    console.log(arr);
    let initArr = [];
    for (let i = 0; i < arr.length; i++) {
        let x = `${arr[0].charAt().toUpperCase()}.${arr[1].charAt().toUpperCase()}`;
        return x;
    }
}

console.log(abbrevName('artem savinov'));