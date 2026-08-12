import express from "express";
import dotenv from "dotenv"
import { getHome } from "./controllers/home.js";

const app = express();


// port
const PORT = process.env.PORT || 3000 ;

app.get("/home", getHome)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})