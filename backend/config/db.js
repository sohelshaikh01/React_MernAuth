import mongoose from "mongoose";

const connectDB = async () => {
    try{
        console.log("Mongos uri", process.env.MONGO_URI1)
        const conn = await mongoose.connect(process.env.MONGO_URI1);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error) {
        console.error(`Error at database connection: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;