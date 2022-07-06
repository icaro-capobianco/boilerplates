import type Koa from 'koa'
import type SocketIO from 'socket.io'
import type http from 'http'

declare global {
    type App = {
        koa: Koa,
        server: http.Server,
        io: SocketIO.Server
        configure : ( cb : ( app : App ) => void ) => App
    }
}
