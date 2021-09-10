class Person {
    private _firstName: string; // By default it would have been public.
    private _lastName: string;
    private _age: number;
    readonly birthDate: Date; // Immutable property.

    constructor(
        _firstName: string, 
        _lastName: string, 
        birthDate: Date){
            this._firstName = _firstName;
            this._lastName = _lastName;
            this.birthDate = birthDate;
    }

    // Method
    getDetails(): string {
        return `I am ${this.fullName}.`
    }

    getFullName(): string {
        return (`New Person created is: ${this._firstName} ${this._lastName}`);
    }

    // Accessor and mutator.
    get age() {
        return this._age;
    }

    set age(theAge: number) {
        if (theAge <= 0 || theAge >= 100) {
            throw new Error('The age is invalid.');
        }
        this._age = theAge;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(name: string) {
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
console.log(p1.fullName); // difference between getter and method in calling.
console.log(p1.birthDate);
console.log(p1.age);
p1.age = 23;
console.log(p1.age);
console.log(p1.getDetails());
