// constructor overloading

interface IBox {    
    x : number;
    y : number;
    height : number;
    width : number;
}

class Box {
    public x: number;
    public y: number;
    public height: number;
    public width: number;

    constructor();
    constructor(obj: IBox); 
    constructor(obj?: any) {    
        this.x = obj && obj.x || 0
        this.y = obj && obj.y || 0
        this.height = obj && obj.height || 0
        this.width = obj && obj.width || 0;
    }   
}

// better way of constructor overloading

class Myclass {
    private value: string;
    
    static fromSingleValue(value: string): Myclass {
        var result = new Myclass;
        result.value = value;
        return result;
    }

    static fromTwoValues(first: string, second: string): Myclass {
        var result = new Myclass;
        result.value = first + second;
        return result;
    }
}

