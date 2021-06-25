const {Song} = require('../models')

module.exports = {
  async getAllSongs (req, res) {
    try {
      const songs = await Song.create(req.body)
      const songsJson = songs.toJSON()
      res.send({
        songs: songsJson
      })
    } catch (err) {
      res.status(400).send({
        error: 'this req is error'
      })
    }
  }
}
