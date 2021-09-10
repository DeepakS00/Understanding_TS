// Nested Object to check the object type inference done by typescript.
const table = {
    price: 3000,
    brand: 'Zuari',
    laptop: {
        price: 40000,
        brand: 'HP',
    }
};
let item;
for (item in table['laptop']) {
    console.log(item);
}
// Type Literals
function combine(input1, input2, resultType) {
}
const book = { "title": 'Yuu', 'price': 90 };
let u1 = { name: 'Max' };
u1 = 'Michael';
