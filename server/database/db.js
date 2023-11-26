import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
const URL = process.env.URL
const Connection = async() => {
    /* Ensure special characters in your password  are encoded. 
    For example if your password contains '#' you should replace
     the literal '#' character with '%23' where 23 is the hex code for 
     '#' */


    await mongoose.connect(URL, { //asynchronous function await- mean wait karni pade gi
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.log("Error while connecting with the database", error.message);
        process.exit(1);
    });
}



export default Connection;