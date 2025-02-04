import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from "cors";

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json()); // body-parser middleware
app.use(cors());         // For Allowing Api Request
app.use(cookieParser()); // For Setting Cookies
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>  res.send("Server is ready"));
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is started on port ${port}`));