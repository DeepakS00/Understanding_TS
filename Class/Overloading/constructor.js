class Box {
    constructor(obj) {
        this.x = obj && obj.x || 0;
        this.y = obj && obj.y || 0;
        this.height = obj && obj.height || 0;
        this.width = obj && obj.width || 0;
    }
}
class Myclass {
    static fromSingleValue(value) {
        var result = new Myclass;
        result.value = value;
        return result;
    }
    static fromTwoValues(first, second) {
        var result = new Myclass;
        result.value = first + second;
        return result;
    }
}
