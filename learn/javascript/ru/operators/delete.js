const mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
console.log('make' in mycar); // false

const trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
console.log(3 in trees); // false
