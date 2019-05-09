const http = require('http')
const appServer = require('../app.js')
const server = http.createServer(appServer)
server.listen(3000)
