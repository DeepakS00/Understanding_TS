// Typesript Array is an ordered list of data.

var stringArray : string[] = ['Creative', 'Smart', 'confident'];
var numericArray : number[] = [12, 34, 54, 557, 76.9, 4, 0xf, 0o13];
var newArray : Array<string> = ['I', 'me', 'myself']; // Another way of creating array type in TS.

console.log(newArray, '\n', stringArray, '\n', numericArray);

let squareArray = numericArray.map(x => x**2);

console.log(squareArray);

let unionTypeArray : (string|number|boolean)[] = ['Deepak',56,null,true,null,undefined]
console.log(unionTypeArray);

/*  NOTE -  any: null|undefined
            number: [0, 9] | any
            string: ['a-z','A-Z', special characters] | any
            boolean: true|false | any
*/  