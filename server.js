// import 'dotenv/config';
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {mongoose} from "mongoose";
import userRouter from "./route/user.js";
import productRouter from "./route/product.js";
const server = express();
server.use(express.json());
dotenv.config()

server.listen(3000, () => {
    console.log(`Server is running in port ${process.env.PORT}`);
});

server.use(cors(...)); 
 
//   Routes
server.use("/api/users", userRouter);
server.use("/api/products", productRouter); 

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


 //✅ 1. Enable CORS before everything else
 const allowedOrigins = [
   "http://localhost:5173",
 ];

server.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // mobile apps, Postman
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
); */
