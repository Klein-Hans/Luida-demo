
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const tags = require('./api/tags')
const users = require('./api/users')
const projects = require('./api/projects')
const search = require('./api/search')
const bodyParser = require('body-parser')
const questions = require('./api/questions')
const answers = require('./api/answers')
const invitations = require('./api/invitations')
const icons = require('./api/icons')


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
  app.use('/api/tags/', tags)
  app.use('/api/users/', users)
  app.use('/api/projects/', projects)
  app.use('/api/search/', search)
  app.use('/api/questions/', questions)
  app.use('/api/answers/', answers)
  app.use('/api/invitations', invitations)
  app.use('/api/icons', icons)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
