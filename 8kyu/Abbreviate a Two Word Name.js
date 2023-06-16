function abbrevName(name) {

    let arr = name.split(' ', 2);
    console.log(arr);
    let initArr = [];
    for (let i = 0; i < arr.length; i++) {
        //initArr.push(arr[i].charAt());
        let x = `${arr[0].charAt()}.${arr[1].charAt()}`;
        return x;
    }
}

console.log(abbrevName('Artem Savinov'));