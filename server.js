const express = require("express")
const dbconnection = require("./config/dbConfig")
const dotenv = require("dotenv").config()
const app = express()

const port = process.env.PORT || 8000

dbconnection()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`the server is running at ${port}`)
})


app.get("/", (req, res) => {
    res.send("hello zithas")
})


app.use("/api/user", require("./Routes/UserRoutes"))


module.exports = app



