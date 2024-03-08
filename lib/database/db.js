import mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        // Create Connection
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}`, {dbName: 'Next-Blog-App'})

        console.log("*** Database connected Successfully ***");
    } catch (error) {
        console.log(error);
        // Console Error 
        console.log("### Database Connection Failed ###");
    }
}