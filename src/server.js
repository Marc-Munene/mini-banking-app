import express from "express";
import dotenv from "dotenv"

const app = express();


// port
const PORT = process.env.PORT || 3000 ;

app.get("/home", (req,res) =>{
res.json({
    message: "This is the home page"
})
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})