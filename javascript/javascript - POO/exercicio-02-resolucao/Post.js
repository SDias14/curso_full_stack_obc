const Comment = require('./Comments');

class Post{
    constructor(title, content, author){
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
        this.comments = [];
    }

    addComment(username, content){
        this.comments.push(new Comment(username, content));
    }
}

module.exports = Post;