const Post = require('./Post');


class Author{
    constructor(name){
        this.name = name;
        this.posts = [];
    }


    writePost(title, content){
     const post = new Post(title, content,this);

        this.posts.push(post);

        return post;
    }
}

module.exports = Author;