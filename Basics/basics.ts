// To check hoisting in TS.
console.log(w);
var w = () => 'Arrow Funtion';
console.log(w());

// To Check Functioning of --removeComments command of tsc.
console.log(declare);
function declare() {
    console.log('Declared Function');
    // Am i visible or not
}
declare();
// Who knows what goes inside


// Different types & their annotation in TS.

var myString : string = 'Hello Deepak Sir';
var myNum : number = 1998;
var myBool : boolean = true;
var myArr : string[] = ['Creative', 'Smart', 'less confident but filled with superpowers'];
var myNumArr : number[] = [12,34,54,557,76,4];

console.log(myArr, myBool, myNum, myNumArr, myString);
// myString = 45; will show error because we cannot assign a number to string type.

var deepak = 'owner';
// deepak = 45; error because of type inference.

var newArr : Array<string> = ['kisdfih', 'sef', 'sefwer']; // Another way of creating array type in TS.
console.log(newArr);


myArr.push('revised');

console.log(myArr);

let newTuple : [string, number] = ['Real', 4];//we cannot assign extra values i.e. more than 2 and types apart from the defined ones and it must be in the same count and sequence.

let tupleArr : [string, number][] = [['deepak', 98],['rensjdbf', 76]];
console.log(tupleArr, newTuple);

let classTeacher = 90;
console.log(typeof classTeacher);
let newTeacher = <number> classTeacher;
let example = classTeacher as number;
console.log(typeof newTeacher);
console.log(typeof classTeacher);


// Type literals

function combine(
  input1: number | string,
  input2: number | string,
  resultType: 'as-number' | 'as-string' 
){
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  
  return result;
}

const combineAges = combine(23, 34, 'as-number');
console.log(combineAges);

const combineNames = combine('Prateek', 'Shankar', 'as-string');
console.log(combineNames);

const combineStringValues = combine('90', '33', 'as-number');
console.log(combineStringValues);

