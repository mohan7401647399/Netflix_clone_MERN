import mongoose from 'mongoose';

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_DB)
        console.log("mongoose connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDB;