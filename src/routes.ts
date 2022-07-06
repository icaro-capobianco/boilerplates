import type { Context } from 'koa'

export default ( { koa } : App ) => {
    
    koa.use((ctx: Context) => {
        ctx.response.body = 'OK'
    })

}