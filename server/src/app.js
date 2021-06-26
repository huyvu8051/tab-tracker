const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require ('./routers') (app)

const {Song, Artist, User} = require('./models')

sequelize.sync({force: true})
    .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
}).then(() => {
    
// Init database
  User.create({
    email: 'huyvu8051@gmail.com',
    password: '123456789'
  })

  Artist.create({
    name: 'son tung mtp'
  })
  Artist.create({
    name: 'soobin hoang son'
  })
  Artist.create({
    name: 'bich Phuong'
  })
  Artist.create({
    name: 'erik'
  })
  Song.create({
    title: 'chung ta cua hien tai',
    ArtistId: 1
  })
  Song.create({
    title: 'muon roi ma sao con',
    ArtistId: 1
  })
  Song.create({
    title: 'chay ngay di',
    ArtistId: 1
  })
  Song.create({
    title: 'em khong sai chung ta sai',
    ArtistId: 4
  })
  Song.create({
    title: 'bua yeu',
    ArtistId: 3
  })
  Song.create({
    title: 'payah',
    ArtistId: 2
  })
  Song.create({
    title: 'em con hut thuoc khong',
    ArtistId: 3
  })

})
