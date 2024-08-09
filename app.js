const express = require("express")
const mongoose = require('mongoose')

const app = express()
const port = 3004

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.static('public'))



mongoose.connect('mongodb+srv://mongodb1765:Azoxmozx123@yansu.lqxy1cs.mongodb.net/?retryWrites=true&w=majority&appName=YanSu')
.then(() => {
    app.listen(port, () => {
        console.log(`the server online on port ${port}`)
    })
})
.catch((error) => {
    console.log(error)
})