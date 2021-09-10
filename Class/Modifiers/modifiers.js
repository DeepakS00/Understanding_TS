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
let p1 = new Person('Deepak', 'Shukla', new Date(1998, 6, 31));
console.log(p1.getFullName());
console.log(p1.fullName);
console.log(p1.birthDate);
console.log(p1.age);
p1.age = 23;
console.log(p1.age);
console.log(p1.getDetails());
