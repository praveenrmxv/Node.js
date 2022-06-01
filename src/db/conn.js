const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/college',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    

}).then(()=>{
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})

// const mongoose = require("mongoose");

// //  database connection with mongoose
// mongoose.connect("mongodb://localhost/romeo", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => console.log("connection successful"))
//     .catch((err) => console.log(err));