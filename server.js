const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())

app.get('/navbar',async(req,res)=>{
    let navbars = [
        {
            "id":1,
            "name":"Capital Numbers",
            "description":"Banner Name",
            "position":"0"
        },
        {
            "id":2,
            "name":"Home",
            "description":"Banner Name" ,
            "position":"1"
        },
        {
            "id":3,
            "name":"About Us",
            "description":"About us ",
            "position":"1"
        },
        {
            "id":4,
            "name":"Contact Us",
            "description":"Contact us",
            "position":"2"
        }

    ]
    res.status(200).send({nav:navbars})
}).listen(3000)

console.log("connected ....")

