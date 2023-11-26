import express from "express";
import Connection from "./database/db.js";
import route from "./route.js"
const app = express();
// port no
const PORT = 8000;
// Mount the route
 app.use(express.json())
 app.use("/",route);
// Start sever
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
// Connect to database
 Connection();
// default route
app.get("/",(req,res)=>{
 res.send(`<h1>"HOME SWEET HOME !!!!"</h1>`);
 })