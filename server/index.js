
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
//const host = process.env.HOST || '0.0.0.0'
const host = process.env.HOST || '127.0.0.1'
//const port = process.env.PORT || 8080
const port = process.env.PORT || 3000
const users = require('./api/users')
const projects = require('./api/projects')
const search = require('./api/search')
const bodyParser = require('body-parser')
const questions = require('./api/questions')
const answers = require('./api/answers')
const invitations = require('./api/invitations')
const icons = require('./api/icons')
const mongoose = require('mongoose')
const chat = require('./api/chat')
mongoose.connect("mongodb://localhost/luidatest")
//mongoose.connect("mongodb://rikahubuser:rikahub2018@ds157503.mlab.com:57503/rikahub")
.then(() => console.log('connected to Mongodb...'))
.catch(err => console.log('Could not connect to MongoDB'));


app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true}))
  app.use('/api/users/', users)
  app.use('/api/projects/', projects)
  app.use('/api/search/', search)
  app.use('/api/questions/', questions)
  app.use('/api/answers/', answers)
  app.use('/api/invitations', invitations)
  app.use('/api/icons', icons)
  app.use('/api/chat/', chat)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  // app.listen(port, host)
  let server = app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })

  // start websocket
  socketStart(server)
  console.log('Socket.IO starts')
}

  // let messageQueue = []

  function socketStart(server){
    // generate websocket instance
    const io = require('socket.io').listen(server)

    // event for when client try to reach server
    io.on('connection', socket => {
      console.log(`id: ${socket.id} is connected`)

      socket.on('subscribe', room => {
        console.log('joining room', room)
        socket.join(room)
      });

      socket.on('unsubscribe', room => {
        console.log('leaving room', room);
        socket.leave(room)
      })

      socket.on('send message', data => {
        socket.broadcast.to(data.room).emit('conversation private post', {
          body: data.body,
          date: data.date,
          username: data.username,
          userid: data.userid,
          url: data.url
        });
      });
      

      // // send value stored in server
      // if (messageQueue.length > 0){
      //   messageQueue.forEach(message => {
      //     socket.emit('new-message', message)
      //   })
      // }

      // // create event when client request
      // メッセージくれたらおくるよー
      // socket.on('send-message', message => {
      //   console.log(message)

      //   // store message into server
      //   messageQueue.push(message)

      //   // send message to other client
      // メッセージあげるから表示させてー
      //   socket.broadcast.emit('new-message', message)
      // }) 
    })
  }

start()
