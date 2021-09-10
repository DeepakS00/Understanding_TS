// Function Overloading

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string, b: number): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(3, 40));
console.log(add('Valid', ' function'));
console.log(add('Bond', 7)); 


function add2(a: any, b: any): any {
    return a + b;
}
console.log(add2('new', 4));
 