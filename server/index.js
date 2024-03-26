import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from "./routes/productRoutes.js"

// console.log(process.env.MONGODB_URI);
connectDB();

const app = express();

// Body parser middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cookieParser());

app.get('/' , (req, res)=>{
   res.send('API is running.')
})

app.use('/api/users' , userRoutes);
app.use('/api/products', productRoutes);

app.listen(8080, async function () {
  console.log("Server started at 8080");
});
