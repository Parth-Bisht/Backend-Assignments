const express = require("express");
const {Movie,connection} = require("./db");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/movies",async(req,res)=>{
    const {search,sortBy,page} = req.query;
    if(search===undefined && sortBy===undefined && page===undefined){
        const movis = await Movie.find();
        return res.json(movis);
    }
    else if(sortBy){
        const movis = await Movie.find().sort({[sortBy]: 1}) ;
        return res.json(movis);
    }
    else if(search){
        const movies = await Movie.find({ title: { $regex: search } });
        return res.json(movies);
    }
    else if(page){
        if(page===1){
            const movies = await Movie.find().limit(5);
            return res.json(movies);
        }
        else{
            const toshow = 5*(page-1);
            const movies = await Movie.find().skip(toshow).limit(5);
            return res.json(movies);
        }
    }
})

app.post("/movies",(req,res)=>{
    const movie = new Movie({...req.body});
    movie.save((err,movie)=>{
        try {
            res.send(movie);
        } catch {
            res.send(err);
        }
    })
})

app.listen(8080,async ()=>{
    try {
        await connection;
        console.log("Connected to db");
    } catch {
        console.log("Failed to connect")
    }
    console.log("Server started at port 8080")
})