class Family {
    constructor(name, age, series) {
        this.name = name;
        this.age = age;
        this.series = series;
        console.log('User ' + this.name + ' is created');
    }
    register() {
        console.log(this.name + ' is now registered.');
    }
}
let dominic = new Family('Dominic', 32, 9);
dominic.register();
class Points {
    constructor(x, y = 0) {
        this.x = x;
        this.y = y;
    }
}
