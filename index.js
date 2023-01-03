import express from "express"
import bodyParser from 'body-parser';
import 'colors';
import usersRoutes from "./routes/users.js"

const app = express()

const PORT = 5000
app.use(bodyParser.json())

app.use('/users', usersRoutes)


app.get('/', (req, res) => {
    console.log("Hello my dear");
    res.send('Hello there')
})


app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`.green.bold))
