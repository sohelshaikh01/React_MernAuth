import mongoose from "mongoose";
import { DB_NAME } from "../constants/index.js";


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error) {
        console.error(`Error at database connection: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;