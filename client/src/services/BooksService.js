import Api from '@/services/Api'

export default {
  index() {
    return Api().get('mybooks')
  },
  post(book) {
    return Api().post('mybooks', book)
  }
}
