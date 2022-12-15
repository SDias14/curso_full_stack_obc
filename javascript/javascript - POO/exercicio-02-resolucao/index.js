const Author = require("./Author");



const john = new Author('John Doe');

const post = john.writePost('Hello World', 'This is my first post');

post.addComment('Jane Doe', 'Nice post!');
post.addComment('Jane Doe', 'I like it!');

console.log(john)

console.log(post)