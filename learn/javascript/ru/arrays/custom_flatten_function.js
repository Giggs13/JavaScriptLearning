Array.prototype.flatten = function () {
    let retVal = [];

    this.forEach(a => {
        retVal = retVal.concat(a);
    });

    return retVal;
};

let arr = [[1, 2], [3], 4, [5, 6], [[7], 8]];

console.log(arr.flatten());

Array.prototype.flatMap = function (fn) {
    return this.map(fn).flatten();
};

const data = [
    {
        'props': [
            {'a': 1},
            {'b': 2}
        ]
    },
    {
        'props': [
            {'a': 3},
            {'b': 4}
        ]
    }
];

console.log(data.map(elem => elem.props));
console.log(data.flatMap(elem => elem.props));
