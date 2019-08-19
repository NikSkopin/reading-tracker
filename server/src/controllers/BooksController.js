const { Book } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      const book = await Book.findAll()
      res.send(book)
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to fetch the books.'
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
  }
}
