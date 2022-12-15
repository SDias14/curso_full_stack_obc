const Comment = require('./Comment')

class Post{

    constructor(title, content, comments){
        this.title = title
        this.content = content
        this.comments = comments
    }
        
    addPost(title, content, comments){
        this.title = title
        this.content = content
        this.comments = comments
    }  


}


module.exports = Post

 

      
