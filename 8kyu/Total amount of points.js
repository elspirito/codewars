function points(games) {
    let score = 0;
    let arr = games.map(item => item.split(":"));
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] > arr[i][1]) {
            score += 3;
        } else if (arr[i][0] === arr[i][1]) {
            score += 1;
        }
    }
    return score;
}

console.log(points(["0:1", "3:0", "3:0", "4:1", "1:3", "4:0", "2:0", "1:1", "0:3", "2:2"]));