import Koa from 'koa'
import http from 'http'
import { Server } from 'socket.io'
import socketio from './socket.io'

const koa = new Koa()
const server = http.createServer(koa.callback())
const io = new Server(server)

const app : App = {
  koa, server, io,
  configure : ( cb : ( app : App ) => void ) => {
    cb(app)
    return app
  }
}

app.configure( socketio )

server.listen(3000)
