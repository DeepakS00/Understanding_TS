// All the numbers in TS are either floating-point(number) or big integers(bigInt)

let quantity: number = 12;
console.log(quantity);

let price = 2000;
price = 2500; // Allowed 

// price = '399' --> Not allowed because of type inference error: Type 'string' is not assignable to type 'number'.

// decimal

let counter: number = 0;
let x: number = 100, 
    y: number = 200;

// binary

let bin = 0b100;
let anotherBin: number = 0B010;

// octal

let octal: number = 0o10,
    anotherOctal: number = 0o23;

// hexaDecimal

let hexadecimal: number = 0XA;

// bigInteger - nos. larger than 2**53 – 1

let big: bigint = 9007199254740991n;
console.log(big);