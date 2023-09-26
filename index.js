import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let newList = {};

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index.ejs");
})

app.get("/my-day.ejs", (req, res)=>{
    res.render("my-day.ejs");    
})

app.get("/work.ejs", (req, res)=>{
    res.render("work.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});