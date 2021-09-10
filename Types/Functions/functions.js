function mySum(num1, num2) {
    return num1 + num2;
}
console.log(mySum(9, 8));
function newSum(num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
console.log(newSum('23', '234'));
function myString(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(myString('Deepak'));
console.log(myString('Deepak', 'Shukla'));
function myVoid(name) {
    console.log('Hello ' + name + ' sir');
}
myVoid('Deepak');
function raiseError(message) {
    throw new Error(message);
}
function reject() {
    return raiseError('Rejected');
}
