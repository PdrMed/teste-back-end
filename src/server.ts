import cors from 'cors'
import express, { Request, Response } from 'express'

const app = express()
app.use(express.json())
app.use(cors())
app.get('/', (_: Request, response: Response) => response.send('Hello world'))
app.listen(3000)

