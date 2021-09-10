function getRandomElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let sample = getRandomElement(['aer', 'wqe']);
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let person = merge({ name: 'John' }, {});
console.log(person);
function prop(obj, key) {
    return obj[key];
}
let str = prop({ name: 'John' }, 'name');
console.log(str);
class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
    }
    showStack() {
        return this.elements;
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error('The Stack is overflow..!');
        }
        this.elements.push(element);
    }
    pop() {
        if (this.elements.length === 0) {
            throw new Error('The stack is empty..!');
        }
        return this.elements.pop();
    }
}
let exampleStack = new Stack(6);
exampleStack.push(56);
exampleStack.push(2);
exampleStack.push(5);
exampleStack.push(78);
exampleStack.push(34);
exampleStack.push(8);
console.log(exampleStack.showStack());
