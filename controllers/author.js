const authorDbModel = require('../models/author')
const articleDbModel = require('../models/article')

const authorModel = new authorDbModel();
const articleModel = new articleDbModel();

class authorController {
    constructor() {
        this.getAuthorById = this.getAuthorById.bind(this);
    }
    
    async getAuthorById(req, res){
        const author = await authorModel.findById(req.params.id)
        const articles = await articleModel.findMany('author_id', req.params.id);
        author.articles = articles
        res.status(201).json({author: author})
    }
}

module.exports = authorController