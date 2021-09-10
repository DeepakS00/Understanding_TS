let newTuple : [string, number];

newTuple = [null, undefined]; // --> Allowed
newTuple = ['Real', 45]; // we cannot assign extra values i.e. more than 2 and types apart from the defined ones(except null & undefined) and it must be in the same count and sequence.
console.log(newTuple);

newTuple.push(2, 'extra value', 89); // Tuples can perform push.
console.log(newTuple);

let tupleArray : [string, number][] = [['deepak', 98],['shivam', 76]];
console.log(tupleArray);
