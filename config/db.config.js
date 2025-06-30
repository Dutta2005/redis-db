import mongoose from "mongoose";
import fillDummyData from "../action/acton.js";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/redisdb`);
        await fillDummyData();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Failed to connect to the database");
        
    }
}

export default dbConnect;