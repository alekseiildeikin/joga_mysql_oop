const authorDbModel = require('../models/author')
const articleDbModel = require('../models/article')

const authorModel = new authorDbModel();
const articleModel = new articleDbModel();

class authorController {
    constructor() {
        this.getAuthorById = this.getAuthorById.bind(this);
    }
    
    async getAuthorById(req, res){
        const authorId = parseInt(req.params.id)
        const author = await authorModel.findById(authorId)
        const articles = await articleModel.findMany(author);
        author.articles = articles
        res.status(201).json({author: author})
    }
}

module.exports = authorController