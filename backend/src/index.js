import dotenv from "dotenv";
import connectDB from "./DB/index.js";
import app  from "./App.js";
dotenv.config({
    path:'./.env'
})
connectDB()
.then(
    ()=>{
        app.listen(process.env.PORT || 3000,(req,res)=>{
            console.log("server is running on port:-"+process.env.PORT)
        })
    }
)
.catch((err) => {
 console.log("mongodb connection failed"+err)
})
