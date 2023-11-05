import 'dotenv/config'

import  Express  from "express";

import mongoose from 'mongoose';
import  addRoutes  from "./routes/index.js"
import cors from 'cors'
import bodyparser from 'body-parser'
const app=Express()
let PORT=process.env.PORT
const dbUrl =process.env.DB_URL
app.use(cors())
app.use(bodyparser.json())
addRoutes(app)

// mongoose.connect(dbUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
await mongoose.connect(dbUrl, {
   
    authSource: "admin",
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false 
});
const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
app.listen(PORT,()=>console.log(`started on ${PORT}`))