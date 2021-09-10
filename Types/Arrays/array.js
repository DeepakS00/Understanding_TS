var stringArray = ['Creative', 'Smart', 'confident'];
var numericArray = [12, 34, 54, 557, 76.9, 4, 0xf, 11];
var newArray = ['I', 'me', 'myself'];
console.log(newArray, '\n', stringArray, '\n', numericArray);
var squareArray = numericArray.map(function (x) { return Math.pow(x, 2); });
console.log(squareArray);
var unionTypeArray = ['Deepak', 56, null, true, null, undefined];
console.log(unionTypeArray);
