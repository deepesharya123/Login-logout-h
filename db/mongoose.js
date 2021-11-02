const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://user_deep:user_deep@cluster0.vjcct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>console.log("CONNCETEED TO THE DB")).catch((e)=> console.log(e))
