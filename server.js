// import 'dotenv/config';
import express from "express";
import dotenv from "dotenv";
import {mongoose} from "mongoose";
import userRouter from "./route/user.js";
const server = express();
server.use(express.json());
dotenv.config()

server.listen(3000, () => {
    console.log(`Server is running in port ${process.env.PORT}`);
});
 
//   Routes
server.use("/api/users", userRouter);

console.log(`My name is Soft`)

server.get('/', (req, res) => {
    res.send('Hello Soft');
});

mongoose.connect(process.env.MONGOBASE_URL) 
.then(() => {
    console.log('Connected to Database Soft');
}).catch((err) => {
    console.log('Error connecting to Database Soft', err);
});