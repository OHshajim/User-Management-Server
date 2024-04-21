const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
let cors = require("cors");

// middleware
app.use(cors());


const users = [
    { id: 1, name: "Masud", email: "masud@gmail.com" },
    { id: 2, name: "Oibba", email: "oibba@gmail.com" },
    { id: 3, name: "Roton", email: "roton@gmail.com" },

]

app.get('/', (req, res) => {
    res.send("Users Management server is running ")
})
app.get('/users', (req, res) => {
    res.send(users)
})


app.listen(port, () => {
    console.log(`Server is running on PORT : ${port}`);
})