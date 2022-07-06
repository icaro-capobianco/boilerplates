import Koa from 'koa'
import http from 'http'
import { Server } from 'socket.io'

const app = new Koa()
const server = http.createServer(app.callback())
const io = new Server(server)

app.use((ctx: Koa.Context) => {
    ctx.response.body = 'OK'
})

io.on('connection', (socket) => {
    console.log('connected')
    socket.on('disconnect', () => {
      console.log('disconnected')
    })
})

server.listen(3000)
