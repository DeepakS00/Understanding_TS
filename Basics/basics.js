console.log(w);
var w = () => 'Arrow Funtion';
console.log(w());
console.log(declare);
function declare() {
    console.log('Declared Function');
}
declare();
var myString = 'Hello Deepak Sir';
var myNum = 1998;
var myBool = true;
var myArr = ['Creative', 'Smart', 'less confident but filled with superpowers'];
var myNumArr = [12, 34, 54, 557, 76, 4];
console.log(myArr, myBool, myNum, myNumArr, myString);
var deepak = 'owner';
var newArr = ['kisdfih', 'sef', 'sefwer'];
console.log(newArr);
myArr.push('revised');
console.log(myArr);
let newTuple = ['Real', 4];
let tupleArr = [['deepak', 98], ['rensjdbf', 76]];
console.log(tupleArr, newTuple);
let classTeacher = 90;
console.log(typeof classTeacher);
let newTeacher = classTeacher;
let example = classTeacher;
console.log(typeof newTeacher);
console.log(typeof classTeacher);
function combine(input1, input2, resultType) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
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
