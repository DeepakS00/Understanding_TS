// Simple object type 
let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Cena',
    age: 25,
    jobTitle: 'Wrestler'
};

console.log(employee);

// employee = 'Anything Else'; --> Not allowed as we specified employee to be an object type.

// console.log(employee.hireDate); --> This will also generate an error as no such property has been declared while in JS it would've returned undefined.

// Inferenced object type.

const table = {
    price : 3000,
    brand : 'Zuari',
    laptop : {
        price : 40000,
        brand : 'HP',
    }
}
let item: keyof typeof table["laptop"];
for (item in table['laptop']) {
    console.log(table['laptop'][item]);
}