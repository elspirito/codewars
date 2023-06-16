function squareSum(numbers){
    let x = 0;
    for (let i = 0; i < numbers.length; i++) {
        x = x + numbers[i]*numbers[i];
    }
    return x;
}

console.log(squareSum([1, 2, 2]));