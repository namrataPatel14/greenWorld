import mongoose from "mongoose";


const connectDB = async() => {
    try {
       const connection = await mongoose.connect(process.env.MONGODB_URI)
       console.log('database connected') 
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;
