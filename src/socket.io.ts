
export default ( { io } : App ) => {

    io.on('connection', (socket) => {
        console.log('connected')
        socket.on('disconnect', () => {
          console.log('disconnected')
        })
    })

    io.engine.on("connection_error", (err : any) => {
        console.log(err.req)
        console.log(err.code)
        console.log(err.message)
        console.log(err.context)
    })
}
