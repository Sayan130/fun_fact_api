const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/fun-fact-api", {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
}).catch(e=>console.log(e));