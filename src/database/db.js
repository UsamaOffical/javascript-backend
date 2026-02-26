import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log("MONGODB CONNECTED !!")
    } catch (error) {
        console.error("ERROR WHILE CONNECTING DB", error)
        process.exit(1)
    }
}

export default connectDB