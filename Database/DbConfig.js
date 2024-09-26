import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // Configure dotenv to load environment variables from a .env file

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Connect to the MongoDB database using the connection string from environment variables
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connected");
        return connection;
    } catch (error) {
        console.error("Failed to connect to MongoDB", error);
        process.exit(1); // Exit the process if the connection fails
    }
}

export default connectDB;
