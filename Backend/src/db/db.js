import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}${DB_NAME}`;
        console.log("Connecting to MongoDB with URI:", connectionString);

        const connectionInstance = await mongoose.connect(connectionString, {

        });

        console.log(`\nMongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB ERROR:", error);
        process.exit(1);
    }
}

export default connectDB;
