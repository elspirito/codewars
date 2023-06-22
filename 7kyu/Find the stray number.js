function stray(numbers) {
    numbers.sort(function(a, b) {
        if (a < b) {
            return a - b;
        }
    })
    if (numbers[0] != numbers[1]) {
        return numbers[0];
    } else {
        return numbers.pop();
    }
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
console.log(stray([1, 1, 2]));