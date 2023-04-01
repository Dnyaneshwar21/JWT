const express = require('express');
const jwt = require('jsonwebtoken');
const secretkey = "secretkey";


const app = express();

app.use(express.json)
app.get("/auth", (req, resp) => {
    resp.json({
        message: ''
    })
})


app.post("/auth/signup", (req, resp) => {
    const user = {
        id: 1,
        login: "",
        password: ""
    }
    jwt.sign({ user },secretkey ,{expiresIn:"1000s"} (err, token) => {
        resp.json({
          token
        })
    })


})
app.post("/auth/login", (req, resp) => {
    const user = {
        id: 1,
        login: "",
        password: ""
    }
    jwt.sign({ user }, (err, token) => {
        resp.json({
          
           token
        })
    })


})


app.listen(3000);