const express = require("express");
const { validate, ValidationError, Joi } = require('express-validation');

const postValidation = {
    body: Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        rating: Joi.number().required(),
        description: Joi.string().required(),
        genere: Joi.string().required(),
        cast: Joi.array().required()
    })
  }

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("This is Home page");
})

app.post("/post",validate(postValidation, {}, {}),(req,res)=>{
    console.log(req.body);
    res.send("Printed your data in console");
})

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(400).send("Invalid data")
    }
  
    return res.status(500).json(err)
  })

app.listen(8080,()=>{
    console.log("Server started at http://localhost:8080/")
})