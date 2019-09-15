const { Book } = require('../models')
const { Op } = require('sequelize')

module.exports = {
  async index(req, res) {
    try {
      let books = null
      const search = req.query.search
      if (search) {
        books = await Book.findAll({
          where: {
            [Op.or]: ['title', 'author', 'genre', 'description'].map(key => ({
              [key]: {
                [Op.like]: `%${search}%`
              }
            }))
          }
        })
        res.send(books)
      } else {
        const books = await Book.findAll()
        res.send(books)
      }
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to fetch the books.'
      })
    }
  },
  async show(req, res) {
    try {
      const book = await Book.findByPk(req.params.bookId)

      res.send(book)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to show a book.'
      })
    }
  },
  async post(req, res) {
    try {
      const book = await Book.create(req.body)

      res.send(book)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to create the book.'
      })
    }
  },
  async deleteItem(req, res) {
    try {
      const id = parseInt(req.params.bookId)
      await Book.findByPk(id).then(bookItem => {
        return bookItem.destroy()
      })
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to delete the book.'
      })
    }
  },
  async put(req, res) {
    console.log('PARAMS', req.params.bookId)

    try {
      await Book.update(req.body, {
        where: {
          id: req.params.bookId
        }
      })

      res.send(req.body)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to update the book.'
      })
    }
  }
}
