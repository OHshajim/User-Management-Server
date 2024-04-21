const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
let cors = require("cors");

// middleware
app.use(cors());
app.use(express.json())

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

app.post('/users',(req,res)=>{
    console.log(req.body);
    const newUser = req.body ;
    newUser.id = users.length + 1 ;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`Server is running on PORT : ${port}`);
})