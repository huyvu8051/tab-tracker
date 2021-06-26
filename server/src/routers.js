const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const ArtistController = require('./controllers/ArtistController')

module.exports = (app) => {
    app.post('/register',
    AuthenticationControllerPolicy.register,
     AuthenticationController.register)
    app.post('/login',
     AuthenticationController.login)
    app.get('/song',
     SongsController.findAll)
    app.post('/song',
     SongsController.create)
    app.get('/artist',
     ArtistController.findAll)
    app.post('/artist',
    ArtistController.create)
}

