import Api from '@/services/Api'

export default {
  search(searchTerm) {
    return Api().get(
      //'search',
      `https://www.googleapis.com/books/v1/volumes?q=` +
        searchTerm +
        `&maxResults=20`
    )
  }
}
