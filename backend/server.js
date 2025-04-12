import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from "cors";
import path from "path"

import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json()); // body-parser middleware
app.use(cors());         // For Allowing Api Request
app.use(cors({ origin: '*' }));
app.use(cookieParser()); // For Setting Cookies
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "frontend/dist")))

    app.get('*', () => res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')))
} 
else {
    app.get('/', (req, res)=>  res.send("Server is ready"));
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is started on port ${port}`));