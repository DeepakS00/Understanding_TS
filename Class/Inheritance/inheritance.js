class Person {
    constructor(_firstName, _lastName, birthDate) {
        this._firstName = _firstName;
        this._lastName = _lastName;
        this.birthDate = birthDate;
    }
    getDetails() {
        return `I am ${this.fullName}.`;
    }
    getFullName() {
        return (`New Person created is: ${this._firstName} ${this._lastName}`);
    }
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 100) {
            throw new Error('The age is invalid.');
        }
        this._age = theAge;
    }
    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
    set fullName(name) {
        let parts = name.split(' ');
        if (parts.length != 2) {
            throw new Error('Invalid Name format: first last');
        }
        this._firstName = parts[0];
        this._lastName = parts[1];
    }
}
class Employee extends Person {
    constructor(_post, _salary, firstName, lastName, birth) {
        super(firstName, lastName, birth);
        this._post = _post;
        this._salary = _salary;
    }
    getDetails() {
        return super.getDetails() + ` I am working as an ${this._post} & my salary is ${this._salary} per month.`;
    }
}
const employee1 = new Employee('Intern', 15000, 'Naveen', "bansal", new Date(1988, 5, 23));
employee1.age = 33;
console.log(employee1.fullName);
console.log(employee1.birthDate);
console.log(employee1.age);
console.log(employee1.getDetails());
