import mongoose from "mongoose";


const DB_URL = process.env.DB_URL;

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to MongoDB");

    } 
    catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
};

export default dbConnect;