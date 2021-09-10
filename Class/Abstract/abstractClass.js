class Book {
    constructor(name, genre) {
        this.name = name;
        this.genre = genre;
    }
    get genrePlusName() {
        return `${this.name} is of the genre ${this.genre}`;
    }
}
class Novels extends Book {
    constructor(name, genre, serialNumber, pages) {
        super(name, genre);
        this.serialNumber = serialNumber;
        this.pages = pages;
    }
    getSerialN() {
        return `The serial number of this book is ${this.serialNumber} having ${this.pages} number of pages.`;
    }
}
var book1 = new Novels('DragonTales', 'Fantasy', 1234, 230);
console.log(book1.genrePlusName);
console.log(book1.getSerialN());
console.log(book1 instanceof Novels);
