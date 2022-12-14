const Post = require('./Post');
const Comment = require('./Comment');
const Author = require('./Author');



const comment = new Comment()


let arrayCommentsPost1 = []

arrayCommentsPost1.push('Muito bom')

arrayCommentsPost1.push('Muito legal')

arrayCommentsPost1.push('Muito top')



const author1 = new Author('Joao')



let post1 = new Post('Ferias de verao', 'As ferias de verao em bahamas...', arrayCommentsPost1)

console.log("Titulo: " + post1.title + "\n" + "Conteudo: " + post1.content + "\n" + "Comentarios: " + post1.comments + "\n" + "Autor: " + author1.name)

// quebra de linha

console.log("")


const author2 = new Author('Maria')


let arrayCommentsPost2 = []

arrayCommentsPost2.push('quero ir')

arrayCommentsPost2.push('Eu amei as ferias')

arrayCommentsPost2.push('Muito top. Vou levar minha familia')


let post2 = new Post('Ferias de Inverno', 'As ferias de Paris...', arrayCommentsPost2)

console.log("Titulo: " + post2.title + "\n" + "Conteudo: " + post2.content + "\n" + "Comentarios: " + post2.comments + "\n" + "Autor: " + author2.name)














