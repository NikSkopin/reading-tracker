import Api from '@/services/Api'

export default {
  index() {
    return Api().get('mybooks')
  },
  show(bookId) {
    return Api().get(`mybooks/${bookId}`)
  },
  post(book) {
    return Api().post('mybooks', book)
  }
}
