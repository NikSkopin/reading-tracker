const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const BooksController = require('./controllers/BooksController')

module.exports = app => {
  app.post(
    '/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post('/login', AuthenticationController.login)

  app.get('/mybooks', BooksController.index)

  app.post('/mybooks', BooksController.post)

  app.get('/mybooks/:bookId', BooksController.show)

  app.delete('/mybooks/:bookId', BooksController.deleteItem)
}
