const { Book } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const books = await Book.findAll()
      res.send(books)
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
        error: 'An error has occured trying to fetch a book.'
      })
    }
  },
  async post(req, res) {
    try {
      const book = await Book.create(req.body)

      res.send(book)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to create the books.'
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
  }
}
