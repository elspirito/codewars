function findNextSquare(sq) {
    let x = Math.sqrt(sq);

    if (Number.isInteger(x)) {
        x++;
        return x * x;
    }

    return -1;
}