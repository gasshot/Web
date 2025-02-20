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




module.exports = router;