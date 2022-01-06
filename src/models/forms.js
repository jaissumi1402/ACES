// const mongoose = require("mongoose")
// const formSchema = new mongoose.Schema({
//      name:{
//         type:String,
//         required : true
//      },
//      email:{
//         type:String,
//         required : true
//      },
//      message:{
//          type: String,
//          required:true
//      }

// })

//now we need to create a collection

// const Register  = new mongoose.model("register", formSchema)

// module.exports=Register
const mongoose = require("mongoose")
const employshema = new mongoose.Schema({
     name:{
        type:String,
        required : true
     },
     
     email:{
        type:String,
        required : true
     },
     message:{
        type:String,
        required:true
     }


})

//now we need to create a collection

const payment = new mongoose.model("payment", employshema)

module.exports=payment