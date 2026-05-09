import express from 'express'
import { matchRouter } from './routes/matches.js'
const app = express()
const port = 8000
const logger = (req, res, next) => {
    console.log('Middleware: '+ req.method + "  "+ req.url)
    next()
}
app.use(express.json())
app.use(logger)
app.get("/", (req, res) => {
    res.send('Hello from Express Sever')
})
app.use('/matches', matchRouter)
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))