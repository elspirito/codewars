function sortByLength(array) {
    const newArr = [];

    return array.sort((a, b) => (a.length > b.length) - (a.length < b.length));

    return newArr;
};

console.log(sortByLength(["Beg", "Life", "I", "To"]));
console.log(sortByLength(['', 'Dictionary', 'Bees', 'Eloquent']));