import Api from '@/services/Api'

export default {
  getAllSong () {
    return Api().get('songs')
  }
}
