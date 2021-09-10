abstract class Book {
    constructor(private name: string, private genre: string) {
    }

    abstract getSerialN(): string;
    get genrePlusName(): string{
        return `${this.name} is of the genre ${this.genre}`;
    }
}

interface IShelf {
    serialNumber: number;
    pages: number;
}

class Novels extends Book implements IShelf {
    constructor(
        name: string, 
        genre: string, 
        public serialNumber: number, 
        public pages: number) {
            super(name, genre);
    }
    getSerialN(): string {
        return `The serial number of this book is ${this.serialNumber} having ${this.pages} number of pages.`;
    }
    
}

var book1 = new Novels('DragonTales', 'Fantasy', 1234, 230);
console.log(book1.genrePlusName);
console.log(book1.getSerialN());
console.log(book1 instanceof Novels);

