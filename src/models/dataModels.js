import mongoose from 'mongoose';

const NewSchema = new mongoose.Schema(
    {
        uid: String,
        name: String,
        pin: String
    },
    {
        timestamps: true
    }
)

const UserSchema = mongoose.models.NewUser || mongoose.model("NewUser", NewSchema)

export default UserSchema