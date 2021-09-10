class Family{
    public name:string;
    protected age:number;
    private series : number;

    constructor(name:string, age:number, series:number){
        this.name = name;
        this.age = age;
        this.series = series;

        console.log('User '+ this.name + ' is created');
    }

    register(){
        console.log(this.name + ' is now registered.');
    }

}

let dominic = new Family('Dominic', 32, 9);
dominic.register();

class Points{
    public x : number;
    public y : number;

    constructor(x:number, y = 0){
        this.x = x;
        this.y = y;
    }
}

