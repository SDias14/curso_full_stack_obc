
function Book (title, number, published, tags, author) {
    this.title = title
    this.number = number
    this.published = published
    this.tags = tags
    this.author = author
    this.addOnStock = function(quantity) {
        this.number += quantity
    }
    this.save = function() {
        console.log('Livro salvo')
    }
} 

const book = new Book('Clean Code', 10, true, ['programming', 'clean code'], {
    name: 'Robert C. Martin',
    age: 64
})

const book2 = new Book('celestial Bodies', 30, true, ['fiction', 'romance'], {
    name: 'J.K. Rowling',
    age: 54
    })


console.log(book)
console.log(book2)






