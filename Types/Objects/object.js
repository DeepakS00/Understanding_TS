var employee;
employee = {
    firstName: 'John',
    lastName: 'Cena',
    age: 25,
    jobTitle: 'Wrestler'
};
console.log(employee);
var table = {
    price: 3000,
    brand: 'Zuari',
    laptop: {
        price: 40000,
        brand: 'HP'
    }
};
var item;
for (item in table['laptop']) {
    console.log(table['laptop'][item]);
}
