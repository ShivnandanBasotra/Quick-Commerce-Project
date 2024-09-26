import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDb.js';
import userRouter from './routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import AdminRouter from './routes/adminRoutes.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(cookieParser());
app.use('/user',userRouter);
app.use('/admin', AdminRouter)
app.listen(PORT,()=>{console.log(`Server started at http://localhost:${PORT}`);});