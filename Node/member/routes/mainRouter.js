const express = require('express');
const path = require("path");
const router = express.Router();
const publicPath = path.join(__dirname,"../public/")


router.get("/",(request,response)=>{

    response.sendFile(path.join(publicPath + "main.html"))

})


router.get("/join",(request,response)=>{

    response.sendFile(path.join(publicPath + "join.html"))

})

router.get("/login",(request,response)=>{

    response.sendFile(path.join(publicPath + "login.html"))

})

router.get("/delete",(request,response)=>{

    response.sendFile(path.join(publicPath + "delete.html"))

})




module.exports = router;