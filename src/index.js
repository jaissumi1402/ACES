const express = require("express")
const path = require("path")

const { json } = require("express");

const app = express();
const hbs = require("hbs")
require("./db/connection")

const Payment = require("./models/forms")
const port = process.env.PORT || 1000;
const staticPath = path.join(__dirname,'../public' )
const viewspath = path.join(__dirname,'../template/views')
const partialspath =  path.join(__dirname,'../template/partials')

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(staticPath))

app.set('view engine', 'hbs');
app.set("views",viewspath)
  hbs.registerPartials(partialspath)
 

   

app.get('/', (req, res)=>{
    res.render("index");
});
app.post('/pay',async(req, res)=>{
     const paymentInformation = new Payment({
         name:req.body.name,
         email:req.body.email,
         message:req.body.message
     })
     const paid=await paymentInformation.save();
     res.status(201).render("index");

})

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})
