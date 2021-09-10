// Nested Object to check the object type inference done by typescript.
const table = {
    price : 3000,
    brand : 'Zuari',
    laptop : {
        price : 40000,
        brand : 'HP',
    }
}
let item: keyof typeof table["laptop"];
for (item in table['laptop']){
    console.log(item)
}

// Type Literals

function combine(
    input1: number | string,
    input2: number | string,
    resultType: 'as-number' | 'as-string' 
){
    
}

interface Product {
    title: string;
    price: number;
}

const book: Product = {"title": 'Yuu', 'price':90}

type User = { name: string } | string;
let u1: User = {name: 'Max'};
u1 = 'Michael';