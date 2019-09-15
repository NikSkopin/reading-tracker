import Api from '@/services/Api'

export default {
  index(search) {
    return Api().get('mybooks', {
      params: {
        search: search
      }
    })
  },
  show(bookId) {
    return Api().get(`mybooks/${bookId}`)
  },
  post(book) {
    return Api().post('mybooks', book)
  },
  deleteItem(bookId) {
    return Api().delete(`mybooks/${bookId}`)
  },
  put(book) {
    return Api().put(`mybooks/${book.id}`, book)
  }
}
