const express = require("express");
const path = require('path');
const multer  = require('multer');

const app = express();

const filreStorageEngine = multer.diskStorage({ 
    destination: (req,file, cb)=>{
        cb(null, './images');
    },
    filename: (req,file,cb)=>{
        cb(null, Date.now() + '--' + file.originalname)
    }
})
const upload = multer({ storage: filreStorageEngine });


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/single', upload.single('image'), function (req, res, next) {
    console.log(req.file);
    res.send("File Uploaded")
  })

app.listen(8080,()=>{
    console.log("Server is started at port http://localhost:8080/");
})