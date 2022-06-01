const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    console.log(req.method)
    if(req.url==="/" && req.method==="GET"){
        fs.readdir("./",(err,data)=>{
            res.setHeader("content-type","application/json")
            res.end(data.join("\n"))
        })
    }

    if(req.url==="/node_modules"){
        fs.readdir("./node_modules",(err,data)=>{
            res.setHeader("content-type","application/json");
            res.end(data.join("\n"));
        })
    }

    if(req.url==="/src"){
        fs.readdir("./src",(err,data)=>{
            res.setHeader("content-type","application/json");
            res.end(data.join("\n"));
        })
    }

    if(req.url==="/public"){
        fs.readdir("./node_modules",(err,data)=>{
            res.setHeader("content-type","application/json");
            data.map((el)=>{
                return res.write(el);
            })
            res.end();
        })
    }
    
});

server.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080/")
})