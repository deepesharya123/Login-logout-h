const express = require('express');
const app = express();
const ejs = require('ejs')
const path = require('path')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const User = require("./models/user");

require("./db/mongoose")
const viewsDir = path.join(__dirname,'./templates/views')
app.set('view engine','ejs')
app.set('views',viewsDir)

const port = process.env.PORT || 3000;

app.get('/',async(req,res)=>{
    res.render("index");
})

app.post('/register',urlencodedParser,async(req,res)=>{
    // const { name,email, password }  = req.body;
    try{
        const user = new User(req.body);
        await user.save();
        console.log(user)
        res.render("login")
    }catch(e){
        console.log(e.message)
    }

})

app.listen(port,()=>{
    console.log("Port is listening on "+port);
})