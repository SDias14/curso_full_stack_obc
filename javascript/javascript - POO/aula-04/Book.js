class Book {

    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.published = false;
    }

    read() {
        return `Estou lendo ${this.title}`;
    }

    publish() {
        this.published = true;
    }

}


const book = new Book('Algoritmos para viver', 'Brian', 500); // Instanciando um objeto

const book2 = new Book('Canção de gelo e fogo', 'George R. R. Martin', 700);

book.publish();

console.log(book)

console.log(book2)

