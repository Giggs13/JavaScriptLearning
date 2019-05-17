// Массивы
const trees = new Array('redwood', 'bay', 'cedar', 'oak', 'maple');
console.log(0 in trees); // true
console.log(3 in trees); // true
console.log('3' in trees); // true
console.log(6 in trees); // false
console.log('bay' in trees); // false (вы должны указать индекс элемента в массиве, а не значение в этом индексе)
console.log('length' in trees); // true (length является свойством Array)

trees[0] = undefined;
console.log(0 in trees); // true

// Уже существующие объекты
console.log('PI' in Math); // true

// Пользовательские объекты
const mycar = {make: 'Honda', model: 'Accord', year: 1998};
console.log('make' in mycar); // true
console.log('model' in mycar); // true
console.log('engine' in mycar); // false

console.log('toString' in {}); // true
