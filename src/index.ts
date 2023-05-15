import express, {Request, Response} from 'express'
import {  routerUser } from './routes/routesUser'


const server = express()
server.use(express.json())
server.use(routerUser)



server.listen(5000, () =>console.log('Server on'))
