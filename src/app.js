import  Express  from "express";
import  addRoutes  from "./routes/index.js"
const app=Express()
let PORT="5500"

addRoutes(app)
app.listen(PORT,()=>console.log(`started on ${PORT}`))