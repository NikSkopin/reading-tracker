import Api from '@/services/Api'

export default {
  index(listType) {
    return Api().get('mybooks', listType)
  }
}
